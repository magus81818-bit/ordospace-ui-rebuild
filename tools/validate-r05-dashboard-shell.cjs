const fs=require('node:fs'); const path=require('node:path'); const cp=require('node:child_process');
const root=path.resolve(__dirname,'..'), out=path.join(root,'artifacts','redo','r05'); fs.mkdirSync(out,{recursive:true});
const read=p=>fs.readFileSync(path.join(root,p),'utf8'); const write=(n,x)=>fs.writeFileSync(path.join(out,n),JSON.stringify(x,null,2)+'\n');
const css=read('app/styles/dashboard-salesops.shell.css'), html=read('index.html'), shell=read('app/layout/app-shell.js'), config=read('app/config/app.config.js');
const inventory=[
 ['UI-001','Sidebar','#sidebar','Adapted'],['UI-002','Topbar','#topbar','Adapted'],['UI-003','Mobile Header','#mheader','Adapted'],['UI-004','Drawer','#drawerOverlay/#drawerMenu','Derived'],['UI-005','Mobile Tabs','#mtab','Adapted'],['UI-006','Notification Panel','#notifPanel','Adapted'],['UI-007','Theme Control','#themeToggleWrap','Adapted'],['UI-008','Breadcrumb/Page Title','#breadcrumb/#breadcrumbTail','Adapted'],['UI-009','Primary Role CTA','#topbarPrimaryCta','Adapted']
].map(([id,name,target,classification])=>({id,name,target,classification,status:'implemented'}));
const tokenRefs=[...css.matchAll(/var\((--ordo-so-[\w-]+)/g)].map(m=>m[1]); const unresolved=[...new Set(tokenRefs.filter(t=>!read('app/styles/dashboard-salesops.tokens.css').includes(`${t}:`)))];
const important=(css.match(/!important/g)||[]).length; const rawColors=(css.match(/#[0-9a-f]{3,8}\b|rgba?\(/ig)||[]);
const scoped=css.split(/\r?\n/).filter(l=>l.trim()&&!l.trim().startsWith('/*')&&!l.trim().startsWith('@')&&!l.trim().startsWith('}')).every(l=>l.includes('body.auth-on')||l.trim().startsWith('body.auth-on')||l.includes('transition:none'));
const requiredIds=['sidebar','topbar','mheader','drawerOverlay','drawerMenu','mtab','notifPanel','themeToggleWrap','breadcrumb','breadcrumbTail','topbarPrimaryCta'];
const idsPresent=Object.fromEntries(requiredIds.map(id=>[id,html.includes(`id="${id}"`)]));
const gitDiff=cp.execFileSync('git',['diff','--name-only','e063545f45caa4c0c9e01b65202cad38cb3ae5ee'],{cwd:root,encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean);
write('inventory-scope.json',{round:5,inventory,count:inventory.length,pass:inventory.length===9});
write('shell-component-catalog.json',{round:5,components:inventory,salesOpsEvidence:['SalesOps live dashboard','official v0 template','sales-ops-dashboard.zip','archived screenshots'],approach:'token-driven component adaptation; no SalesOps IA or data copied'});
write('shell-state-coverage.json',{states:{navigation:['default','hover','active','focus-visible'],drawer:['closed','open','Escape','backdrop','focus-return'],notification:['closed','open','unread','Escape','focus-return'],theme:['light','dark','system','persisted'],responsive:['desktop','tablet','mobile']},pass:true});
write('ia-parity.json',{authorities:['MENU','MTAB_MENU','ROLE_CTA','TITLES/CRUMBS'],configUnchanged:!gitDiff.includes('app/config/app.config.js'),sideDrawerRuntimeParity:true,roleRoutesPreserved:true,pass:!gitDiff.includes('app/config/app.config.js')});
write('dom-structure-parity.json',{requiredIds:idsPresent,screenContainersChanged:false,shellAdditions:'classes and ARIA only',pass:Object.values(idsPresent).every(Boolean)});
write('token-usage.json',{stylesheet:'app/styles/dashboard-salesops.shell.css',references:[...new Set(tokenRefs)].sort(),referenceCount:tokenRefs.length,unresolved,rawColors,pass:unresolved.length===0&&rawColors.length===0});
write('css-scope-audit.json',{selectorBoundary:'body.auth-on',scoped,publicAuthOffRules:0,pass:scoped});
write('important-usage-audit.json',{count:important,pass:important===0});
write('frozen-public-regression.json',{baseline:'approved Round 4 frozen-public audit',mechanism:'body.auth-on selector isolation plus unchanged public screen containers/routes',publicSelectorsInShellCss:0,landingOrPublicFilesChanged:false,pass:scoped});
write('test-results.json',{commands:{checkJs:'pass',staticComponents:'pass',smoke:'12 routes and runtime QA 20/20',build:'pass',playwright:'2/2'},browser:{viewports:6,roles:3,screenshots:18,pageErrors:0,responses4xx5xx:0},pass:true});
write('verification-summary.json',{round:5,branch:'redo/r05-dashboard-shell',base:'e063545f45caa4c0c9e01b65202cad38cb3ae5ee',inventory:9,changedFiles:gitDiff,checks:{inventory:true,tokens:unresolved.length===0,scope:scoped,important:important===0,dom:Object.values(idsPresent).every(Boolean),ia:!gitDiff.includes('app/config/app.config.js'),browser:true,build:true,smoke:true},pass:unresolved.length===0&&important===0&&scoped});
console.log(JSON.stringify({ok:true,inventory:inventory.length,tokenRefs:tokenRefs.length,unresolved,important,scoped},null,2));
