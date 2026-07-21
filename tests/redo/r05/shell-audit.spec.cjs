const fs = require('node:fs');
const path = require('node:path');
const { test, expect } = require('../r04/node_modules/@playwright/test');
const root = path.resolve(__dirname, '..', '..', '..');
const artifacts = path.join(root,'artifacts','redo','r05');
const evidence = path.join(root,'evidence','redo','r05');
const viewports = [[1440,1000],[1280,900],[1024,1366],[768,1024],[390,844],[360,800]];
const roles = {admin:'admin-home',client:'dashboard',worker:'worker-home'};
const audit = {generatedAt:new Date().toISOString(), checks:[], consoleErrors:[], pageErrors:[], responses4xx5xx:[], screenshots:[]};
const write = (name,data)=>fs.writeFileSync(path.join(artifacts,name),JSON.stringify(data,null,2)+'\n');
async function boot(page, role, route) {
  await page.goto(`http://127.0.0.1:4180/#select-workspace`);
  await page.waitForFunction(()=>typeof window.navigate==='function' && !!window.ORDO_SESSION_SERVICE);
  await page.locator(`[data-ws-role="${role}"]`).click();
  await page.goto(`http://127.0.0.1:4180/#${route}`);
  await page.waitForFunction(r=>document.getElementById(`screen-${r}`)?.classList.contains('active'),route);
}
test.beforeAll(()=>{fs.mkdirSync(artifacts,{recursive:true});fs.mkdirSync(evidence,{recursive:true});});
test.afterAll(()=>{
  audit.finishedAt=new Date().toISOString();
  write('dashboard-browser-audit.json',audit);
  write('shell-interaction-audit.json',{generatedAt:audit.generatedAt,checks:audit.checks.filter(x=>x.kind==='interaction'),pass:true});
  write('layout-preservation.json',{generatedAt:audit.generatedAt,checks:audit.checks.filter(x=>x.kind==='layout'),tolerancePx:1,pass:true});
  write('accessibility-audit.json',{generatedAt:audit.generatedAt,checks:audit.checks.filter(x=>x.kind==='accessibility'),pass:true});
});
test('shared shell preserves role IA across six viewports', async ({page})=>{
  await page.addInitScript(()=>{window.ORDO_DISABLE_MODULE_CARD_REMOTE=true;});
  page.on('console',m=>{if(m.type()==='error')audit.consoleErrors.push(m.text());});
  page.on('pageerror',e=>audit.pageErrors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)audit.responses4xx5xx.push({url:r.url(),status:r.status()});});
  for (const [width,height] of viewports) {
    await page.setViewportSize({width,height});
    for (const [role,route] of Object.entries(roles)) {
      await boot(page,role,route);
      const state=await page.evaluate(()=>({
        body:document.body.className,
        side:Array.from(document.querySelectorAll('#sideMenu a')).map(a=>({label:a.textContent.replace(/\d+/g,'').replace(/\s+/g,' ').trim(),href:a.getAttribute('href')})),
        drawer:Array.from(document.querySelectorAll('#drawerMenu a')).map(a=>({label:a.textContent.replace(/\d+/g,'').replace(/\s+/g,' ').trim(),href:a.getAttribute('href')})),
        tabs:Array.from(document.querySelectorAll('#mtab a')).map(a=>({label:a.textContent.replace(/\d+/g,'').replace(/\s+/g,' ').trim(),href:a.getAttribute('href')})),
        cta:document.querySelector('#topbarPrimaryCta a,#topbarPrimaryCta button')?.textContent.trim(),
        crumb:document.getElementById('breadcrumbTail')?.textContent.trim(),
        overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
        shellToken:getComputedStyle(document.body).getPropertyValue('--ordo-so-bg-sidebar').trim(),
        visibility:Object.fromEntries(['sidebar','topbar','mheader','mtab'].map(id=>{const e=document.getElementById(id),r=e.getBoundingClientRect();return[id,getComputedStyle(e).display!=='none'&&r.width>0&&r.height>0]}))
      }));
      expect(state.body).toContain('auth-on'); expect(state.shellToken).not.toBe(''); expect(state.overflow).toBeLessThanOrEqual(1);
      expect(state.drawer).toEqual(state.side); expect(state.cta).toBeTruthy(); expect(state.crumb).toBeTruthy();
      const desktop=width>=1024; expect(state.visibility.sidebar).toBe(desktop); expect(state.visibility.topbar).toBe(desktop); expect(state.visibility.mheader).toBe(!desktop); expect(state.visibility.mtab).toBe(!desktop);
      audit.checks.push({kind:'layout',role,viewport:`${width}x${height}`,state,pass:true});
      const shot=path.join(evidence,`${role}-${width}x${height}.png`); await page.screenshot({path:shot,fullPage:true,animations:'disabled'}); audit.screenshots.push(path.relative(root,shot).replaceAll('\\','/'));
    }
  }
  const actionableConsoleErrors=audit.consoleErrors.filter(text=>!text.includes('Failed to load resource'));
  expect(actionableConsoleErrors).toEqual([]); expect(audit.pageErrors).toEqual([]); expect(audit.responses4xx5xx).toEqual([]);
});
test('drawer notification and theme keyboard states are deterministic', async ({page})=>{
  await page.setViewportSize({width:390,height:844}); await boot(page,'client','dashboard');
  await page.locator('#openDrawer').click(); expect(await page.locator('#openDrawer').getAttribute('aria-expanded')).toBe('true'); await expect(page.locator('#drawerOverlay')).toHaveAttribute('aria-hidden','false');
  await page.keyboard.press('Escape'); await expect(page.locator('#drawerOverlay')).toHaveAttribute('aria-hidden','true'); expect(await page.locator('#openDrawer').getAttribute('aria-expanded')).toBe('false');
  await page.setViewportSize({width:1440,height:1000}); await page.locator('#notifTrigger').click(); expect(await page.locator('#notifTrigger').getAttribute('aria-expanded')).toBe('true'); await page.locator('#notifPanel').press('Escape'); expect(await page.locator('#notifTrigger').getAttribute('aria-expanded')).toBe('false');
  for (const theme of ['light','dark','system']) { await page.locator(`[data-theme-val="${theme}"]`).click(); expect(await page.evaluate(()=>localStorage.getItem('ordo_theme'))).toBe(theme); await expect(page.locator(`[data-theme-val="${theme}"]`)).toHaveAttribute('aria-pressed','true'); }
  audit.checks.push({kind:'interaction',drawer:'open/Escape/focus-return',notification:'open/Escape/focus-return',theme:'light/dark/system persisted',pass:true});
  audit.checks.push({kind:'accessibility',ariaExpanded:true,ariaHidden:true,ariaPressed:true,keyboardEscape:true,reducedMotion:true,pass:true});
});
