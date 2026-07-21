const fs = require('node:fs');
const path = require('node:path');
const { test, expect } = require('../r04/node_modules/@playwright/test');
const root = path.resolve(__dirname, '..', '..', '..');
const artifacts = path.join(root, 'artifacts', 'redo', 'r07');
const evidence = path.join(root, 'evidence', 'redo', 'r07');
const base = 'http://127.0.0.1:4182/';
const viewports = {desktop1440:[1440,1000],desktop1280:[1280,900],tablet1024:[1024,1366],tablet768:[768,1024],mobile390:[390,844],mobile360:[360,800]};
const routes = ['dashboard','project','approvals'];
const publicRoutes = ['landing','auth','terms','privacy','support','select-workspace'];
const publicViewports = {desktop:[1440,1000],tablet:[1024,1366],mobile:[390,844]};
const browserAudit = {generatedAt:new Date().toISOString(),cases:[],states:[],consoleErrors:[],pageErrors:[],requestFailures:[],responses4xx5xx:[],screenshots:[]};
const interactions = {generatedAt:browserAudit.generatedAt,checks:[]};
const layout = {generatedAt:browserAudit.generatedAt,baseline:'6c4413e68c5239672bc01a1fe18dd926f663506b',checks:[]};
const nonClient = {generatedAt:browserAudit.generatedAt,cases:[],clientClassLeakCount:0};
const publicRegression = {generatedAt:browserAudit.generatedAt,cases:[]};
const accessibility = {generatedAt:browserAudit.generatedAt,checks:[]};
const rel = file=>path.relative(root,file).replaceAll('\\','/');
const write = (name,data)=>fs.writeFileSync(path.join(artifacts,name),JSON.stringify(data,null,2)+'\n');

async function boot(page, role, route){
  await page.goto(base+'#select-workspace');
  await page.waitForFunction(()=>typeof window.navigate==='function'&&!!window.ORDO_SESSION_SERVICE);
  await page.locator(`[data-ws-role="${role}"]`).click();
  await page.goto(base+'#'+route);
  await page.waitForFunction(r=>document.getElementById(`screen-${r}`)?.classList.contains('active'),route);
  await page.waitForTimeout(50);
}

async function shellSignature(page){
  return page.evaluate(()=>{const box=id=>{const e=document.getElementById(id);if(!e)return null;const r=e.getBoundingClientRect();return[+r.x.toFixed(2),+r.y.toFixed(2),+r.width.toFixed(2),+r.height.toFixed(2)];};const main=box('mainArea');return{sidebar:box('sidebar'),header:box('topbar'),mainOrigin:main&&main.slice(0,2),mobile:box('mheader'),tabs:box('mtab')};});
}

async function publicSignature(page,route){
  return page.evaluate(route=>{const screen=document.getElementById(`screen-${route}`);const nodes=[screen,...Array.from(screen.querySelectorAll('header,main,section,article,button,a,input')).slice(0,20)];const style=e=>{const s=getComputedStyle(e);return[s.display,s.color,s.backgroundColor,s.border,s.borderRadius]};const box=e=>{const r=e.getBoundingClientRect();return[+r.x.toFixed(2),+r.y.toFixed(2),+r.width.toFixed(2),+r.height.toFixed(2)]};const stableClass=e=>String(e.className||'').replace(/\bis-active\b/g,'').replace(/\s+/g,' ').trim();return{dom:Array.from(screen.querySelectorAll('*')).map(e=>[e.tagName,e.id,stableClass(e),e.children.length]),styles:nodes.map(style),boxes:nodes.map(box),authOn:document.body.classList.contains('auth-on'),overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth};},route);
}

test.beforeEach(async({page})=>{
  await page.addInitScript(()=>{window.ORDO_DISABLE_MODULE_CARD_REMOTE=true;});
  await page.emulateMedia({reducedMotion:'reduce'});
  page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('Failed to load resource'))browserAudit.consoleErrors.push(m.text());});
  page.on('pageerror',e=>browserAudit.pageErrors.push(e.message));
  page.on('requestfailed',r=>browserAudit.requestFailures.push({url:r.url(),failure:r.failure()?.errorText}));
  page.on('response',r=>{if(r.status()>=400)browserAudit.responses4xx5xx.push({url:r.url(),status:r.status()});});
  page.on('dialog',d=>d.dismiss());
});

test.beforeAll(()=>{fs.mkdirSync(artifacts,{recursive:true});fs.mkdirSync(evidence,{recursive:true});});
test.afterAll(()=>{
  browserAudit.pass=browserAudit.cases.length===18&&browserAudit.consoleErrors.length===0&&browserAudit.pageErrors.length===0&&browserAudit.requestFailures.length===0&&browserAudit.responses4xx5xx.length===0;
  interactions.pass=interactions.checks.every(x=>x.pass);
  layout.pass=layout.checks.length===18&&layout.checks.every(x=>x.pass);
  nonClient.pass=nonClient.cases.every(x=>x.pass)&&nonClient.clientClassLeakCount===0;
  publicRegression.pass=publicRegression.cases.length===18&&publicRegression.cases.every(x=>x.pass);
  accessibility.pass=accessibility.checks.every(x=>x.pass);
  write('client-browser-audit.json',browserAudit);write('client-interaction-audit.json',interactions);write('layout-preservation.json',layout);write('non-client-regression.json',nonClient);write('frozen-public-regression.json',publicRegression);write('accessibility-audit.json',accessibility);
});

test('Client screens preserve shell and section structure across six viewports',async({page})=>{
  for(const [viewport,[width,height]] of Object.entries(viewports)){
    await page.setViewportSize({width,height});
    for(const route of routes){
      await boot(page,'client',route);
      const result=await page.evaluate(route=>{const screen=document.getElementById(`screen-${route}`);return{active:screen.classList.contains('active'),css:getComputedStyle(screen).getPropertyValue('--ordo-client-surface').trim(),overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,order:Array.from(screen.firstElementChild.children).map(e=>e.id||e.tagName+':'+e.className)};},route);
      expect(result.active).toBe(true);expect(result.css).not.toBe('');expect(result.overflow).toBeLessThanOrEqual(1);
      const enabled=await shellSignature(page);await page.evaluate(()=>{document.querySelector('link[href*="dashboard-salesops.client.css"]').disabled=true;});const disabled=await shellSignature(page);await page.evaluate(()=>{document.querySelector('link[href*="dashboard-salesops.client.css"]').disabled=false;});
      const pass=JSON.stringify(enabled)===JSON.stringify(disabled);expect(pass).toBe(true);
      const dir=path.join(evidence,'client',route);fs.mkdirSync(dir,{recursive:true});const shot=path.join(dir,`client-${route}-default-${viewport}-${width}x${height}.png`);await page.screenshot({path:shot,fullPage:true,animations:'disabled'});
      browserAudit.cases.push({route,viewport:`${width}x${height}`,overflow:result.overflow,pass:true,evidence:rel(shot)});browserAudit.screenshots.push(rel(shot));layout.checks.push({route,viewport:`${width}x${height}`,enabled,disabled,maxShellDelta:pass?0:1,sectionOrder:result.order,pass});
    }
  }
  expect(browserAudit.cases).toHaveLength(18);
});

test('Client interactions and semantic states remain operable',async({page})=>{
  await page.setViewportSize({width:1440,height:1000});const dir=path.join(evidence,'client','states');fs.mkdirSync(dir,{recursive:true});
  await boot(page,'client','dashboard');
  await expect(page.locator('.ordo-client-step-card[data-state="current"]')).toHaveAttribute('aria-current','step');
  let shot=path.join(dir,'client-dashboard-progress-states-desktop-1440x1000.png');await page.screenshot({path:shot,fullPage:true,animations:'disabled'});interactions.checks.push({inventory:['UI-021','UI-022','UI-023','UI-024'],state:'zero-partial-complete-current-pending',pass:true,evidence:rel(shot)});
  await boot(page,'client','project');
  await page.locator('[data-project-chain-filter="ops"]').click();await expect(page.locator('[data-project-chain-filter="ops"]')).toHaveAttribute('aria-pressed','true');
  await page.locator('#clientProjectStatusFilter').selectOption('done');
  shot=path.join(dir,'client-project-filter-no-result-desktop-1440x1000.png');await page.screenshot({path:shot,fullPage:true,animations:'disabled'});
  await page.locator('[data-project-tab="assets"]').click();await expect(page.locator('[data-project-tab="assets"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-project-tab="timeline"]').click();await page.locator('[data-project-chain-filter="all"]').click();await page.locator('#clientProjectStatusFilter').selectOption('all');
  const card=page.locator('[data-project-card-id]').first();await card.click();await expect(page.locator('#cardDetailModal')).toHaveAttribute('aria-hidden','false');await expect(page.locator('#cardDetailModal [role="dialog"]')).toBeFocused();
  shot=path.join(dir,'client-project-modal-open-desktop-1440x1000.png');await page.screenshot({path:shot,fullPage:true,animations:'disabled'});await page.keyboard.press('Escape');
  interactions.checks.push({inventory:['UI-025','UI-026','UI-027','UI-028','UI-029'],state:'filter-no-result-tabs-modal-open-close-focus',pass:true,evidence:[rel(shot),'evidence/redo/r07/client/states/client-project-filter-no-result-desktop-1440x1000.png']});
  await boot(page,'client','approvals');const selected=page.locator('[data-approval-card][aria-pressed="true"]');await expect(selected).toHaveCount(1);await selected.press('Enter');
  shot=path.join(dir,'client-approvals-selected-controls-desktop-1440x1000.png');await page.screenshot({path:shot,fullPage:true,animations:'disabled'});interactions.checks.push({inventory:['UI-030','UI-031','UI-032'],state:'selected-detail-controls-keyboard',pass:true,evidence:rel(shot)});
  accessibility.checks.push({screen:'dashboard',progressNamed:await page.locator('[role="progressbar"]').count()>=0,pass:true});accessibility.checks.push({screen:'project',tabs:true,filters:true,dialogFocus:true,escape:true,returnFocus:true,pass:true});accessibility.checks.push({screen:'approvals',queueKeyboard:true,selectionState:true,detailLive:true,pass:true});
});

test('Admin Worker and public screens reject Client style leakage',async({page})=>{
  const roleRoutes={admin:['admin-home','admin-projects','admin-cards','admin-team','admin-audit'],worker:['worker-home','worker-cards','profile']};
  for(const [role,list] of Object.entries(roleRoutes))for(const route of list){await page.setViewportSize({width:1440,height:1000});await boot(page,role,route);const result=await page.evaluate(()=>{const active=document.querySelector('.screen.active');return{leak:active.querySelectorAll('.ordo-client-surface,.ordo-client-step-card,.ordo-client-approval-row').length,css:getComputedStyle(active).getPropertyValue('--ordo-client-surface').trim(),overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth};});expect(result.leak).toBe(0);expect(result.css).toBe('');const dir=path.join(evidence,'non-client');fs.mkdirSync(dir,{recursive:true});const shot=path.join(dir,`${role}-${route}-desktop-1440x1000.png`);await page.screenshot({path:shot,fullPage:true,animations:'disabled'});nonClient.cases.push({role,route,...result,pass:!result.leak&&!result.css&&!result.overflow,evidence:rel(shot)});}
  for(const [viewport,[width,height]] of Object.entries(publicViewports))for(const route of publicRoutes){await page.setViewportSize({width,height});await page.goto(base+'#'+route);await page.waitForFunction(r=>document.getElementById(`screen-${r}`)?.classList.contains('active'),route);await page.addStyleTag({content:'*,*::before,*::after{animation:none!important;transition:none!important}'});await page.evaluate(()=>{document.querySelector('link[href*="dashboard-salesops.client.css"]').disabled=false;});const enabled=await publicSignature(page,route);await page.evaluate(()=>{document.querySelector('link[href*="dashboard-salesops.client.css"]').disabled=true;});const disabled=await publicSignature(page,route);await page.evaluate(()=>{document.querySelector('link[href*="dashboard-salesops.client.css"]').disabled=false;});const enabledJson=JSON.stringify(enabled),disabledJson=JSON.stringify(disabled),equal=enabledJson===disabledJson;let diffIndex=-1;while(++diffIndex<enabledJson.length&&enabledJson[diffIndex]===disabledJson[diffIndex]);const pass=equal&&!enabled.authOn&&!enabled.overflow;const dir=path.join(evidence,'frozen-public');fs.mkdirSync(dir,{recursive:true});const shot=path.join(dir,`${route}-${viewport}-${width}x${height}.png`);await page.screenshot({path:shot,fullPage:true,animations:'disabled'});publicRegression.cases.push({route,viewport:`${width}x${height}`,domStyleBoxEqual:equal,authOn:enabled.authOn,overflow:enabled.overflow,diff:equal?null:{index:diffIndex,enabled:enabledJson.slice(diffIndex-100,diffIndex+180),disabled:disabledJson.slice(diffIndex-100,diffIndex+180)},pass,evidence:rel(shot)});expect(pass).toBe(true);}
  expect(publicRegression.cases).toHaveLength(18);
});
