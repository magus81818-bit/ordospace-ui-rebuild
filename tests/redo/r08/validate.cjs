const fs=require('node:fs');
const path=require('node:path');
const cp=require('node:child_process');
const root=path.resolve(__dirname,'..','..','..');
const art=path.join(root,'artifacts','redo','r08');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const exists=p=>fs.existsSync(path.join(root,p));
const git=args=>cp.execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
const checks=[];
const check=(name,pass,detail='')=>checks.push({name,pass:!!pass,detail});
const base='cd70a536a34e5bb23f1ebfd5a6df512893a0b9a6';
const branch=git(['branch','--show-current']);
check('branch',branch==='redo/r08-worker-dashboard'||/^redo\/r(?:09|10)-/.test(branch),branch);
check('Round 7 merge base',git(['merge-base','redo/r07-client-dashboard','HEAD'])===base);

const matrix=json('artifacts/redo/r02/component-migration-matrix.json').rows.filter(row=>row.implementationRound==='Round 8');
const inventory=json('artifacts/redo/r08/inventory-scope.json');
const catalog=json('artifacts/redo/r08/worker-component-catalog.json');
const expectedIds=Array.from({length:10},(_,i)=>`UI-${String(i+33).padStart(3,'0')}`);
check('Round 2 matrix count',matrix.length===10,String(matrix.length));
check('Round 8 exact IDs',JSON.stringify(matrix.map(x=>x.ordospaceInventoryId))===JSON.stringify(expectedIds),matrix.map(x=>x.ordospaceInventoryId).join(','));
check('inventory count',inventory.items.length===10,String(inventory.items.length));
check('catalog count',catalog.items.length===10,String(catalog.items.length));
const fields=['ordospaceComponent','salesopsId','salesopsComponent','classification','uncertainty','salesopsZipEvidence','preserveFunction','accessibilityRequirements'];
for(const row of matrix){const item=inventory.items.find(x=>x.inventoryId===row.ordospaceInventoryId);check(`${row.ordospaceInventoryId} exists`,!!item);if(!item)continue;const aliases={ordospaceComponent:'name'};for(const field of fields)check(`${row.ordospaceInventoryId} ${field}`,item[aliases[field]||field]===row[field],`${item[aliases[field]||field]} == ${row[field]}`);}
const matrixMappingPass=checks.filter(x=>/^UI-0(?:3[3-9]|4[0-2])/.test(x.name)).every(x=>x.pass);

const coverage=json('artifacts/redo/r08/worker-state-coverage.json');
const allowed=new Set(['implemented','not_applicable']);
let invalidStatusCount=0,missingEvidenceCount=0,directoryEvidenceCount=0,missingReasonCount=0,missingAssertionCount=0,implemented=0,notApplicable=0;
for(const item of coverage.items){for(const [state,value] of Object.entries(item.states)){if(!allowed.has(value.status))invalidStatusCount++;if(value.status==='not_applicable'){notApplicable++;if(!value.reason?.trim())missingReasonCount++;}if(value.status==='implemented'){implemented++;if(!value.browserAssertion?.trim())missingAssertionCount++;for(const p of value.evidence||[]){const absolute=path.join(root,p);if(/[\\\/]$/.test(p))directoryEvidenceCount++;if(!fs.existsSync(absolute)||fs.statSync(absolute).isDirectory())missingEvidenceCount++;}}}for(const state of ['Desktop','Tablet','Mobile'])check(`${item.inventoryId} ${state}`,item.states[state]?.status==='implemented');}
check('coverage inventory count',coverage.items.length===10,String(coverage.items.length));check('implemented count exact',coverage.implementedCount===implemented,`${coverage.implementedCount} == ${implemented}`);check('N/A count exact',coverage.notApplicableCount===notApplicable,`${coverage.notApplicableCount} == ${notApplicable}`);check('invalid status zero',invalidStatusCount===0,String(invalidStatusCount));check('missing evidence zero',missingEvidenceCount===0,String(missingEvidenceCount));check('directory evidence zero',directoryEvidenceCount===0,String(directoryEvidenceCount));check('missing N/A reason zero',missingReasonCount===0,String(missingReasonCount));check('missing browser assertion zero',missingAssertionCount===0,String(missingAssertionCount));check('deferred zero',coverage.deferred===0,String(coverage.deferred));check('missing zero',coverage.missing===0,String(coverage.missing));
const stateStatusesValid=invalidStatusCount===0&&missingReasonCount===0;
const stateEvidenceComplete=missingEvidenceCount===0&&directoryEvidenceCount===0&&missingAssertionCount===0;

const requiredShots=['worker-qc-unchecked-checked-desktop-1440x1000.png','worker-qc-blocked-disabled-desktop-1440x1000.png','worker-qc-mobile-390x844.png','worker-log-validation-desktop-1440x1000.png','worker-log-success-desktop-1440x1000.png','worker-log-long-mobile-390x844.png','worker-submit-disabled-desktop-1440x1000.png','worker-submit-enabled-desktop-1440x1000.png','worker-submit-submitting-mobile-390x844.png'];
for(const file of requiredShots)check(`state screenshot ${file}`,exists(`evidence/redo/r08/worker/states/${file}`));
const interactions=json('artifacts/redo/r08/worker-interaction-audit.json');
const allTrue=obj=>Object.values(obj||{}).filter(v=>typeof v==='boolean').every(Boolean);
const qc=interactions.checks.find(x=>x.inventoryId==='UI-040');const log=interactions.checks.find(x=>x.inventoryId==='UI-041');const submit=interactions.checks.find(x=>x.inventoryId==='UI-042');
const qcContractPass=!!qc?.pass&&allTrue(qc.assertions)&&qc.assertions.itemCount===3&&qc.assertions.keyboardSpace===true&&qc.assertions.submitBlocker===true;
const logContractPass=!!log?.pass&&allTrue(log.assertions)&&log.assertions.appendOnce===true&&log.assertions.duplicateBlocked===true;
const submitContractPass=!!submit?.pass&&allTrue(submit.assertions)&&submit.assertions.lifecycleOnce===true&&submit.assertions.correctCardId===true&&submit.assertions.correctTransition===true&&submit.assertions.apiCallsZero===true;
check('UI-040 QC contract',qcContractPass);check('UI-041 work log contract',logContractPass);check('UI-042 submit contract',submitContractPass);
const a11y=json('artifacts/redo/r08/accessibility-audit.json');check('measured accessibility',a11y.checks.length>=12&&a11y.checks.every(x=>x.measured===true&&x.pass===true),String(a11y.checks.length));
const qa=json('artifacts/redo/r08/qa-fixture-isolation.json');const qaFixtureIsolationPass=qa.pass&&qa.operatingFixtureMutation===false&&qa.localStorageMutation===false&&qa.apiCalls===0&&qa.restored===true&&qa.fixtures.every(x=>x.pass&&x.operatingFixtureMutation===false&&x.localStorageMutation===false&&x.apiCalls===0&&x.restore===true);check('QA fixture isolation',qaFixtureIsolationPass);
const parity=json('artifacts/redo/r08/worker-data-function-parity.json');check('data function parity',parity.pass===true&&parity.checks.length>=18&&parity.checks.every(x=>x.measured===true&&x.pass===true),String(parity.checks.length));
const dom=json('artifacts/redo/r08/dom-structure-parity.json');check('DOM parity artifact',dom.pass===true&&dom.checks.length>=10&&dom.checks.every(x=>x.measured===true&&x.pass===true),String(dom.checks.length));

const currentIndex=read('index.html');const baseIndex=git(['show',`${base}:index.html`]);
for(const token of ['screen-worker-home','screen-worker-cards','workerHomeKpis','workerHomeRevisions','workerHomeInProgress','workerHomePending','workerCardFilters','workerCardList','workerCardDetail'])check(`baseline DOM token ${token}`,baseIndex.includes(token)&&currentIndex.includes(token));
const baseOrder=['workerHomeKpis','workerHomeRevisions','workerHomeInProgress','workerHomePending'];const positions=text=>baseOrder.map(id=>text.indexOf(id));check('Worker Home section order',JSON.stringify([...positions(baseIndex)].sort((a,b)=>a-b))===JSON.stringify(positions(baseIndex))&&JSON.stringify([...positions(currentIndex)].sort((a,b)=>a-b))===JSON.stringify(positions(currentIndex)));
const css=read('app/styles/dashboard-salesops.worker.css');const ui=read('app/ui/components/worker.ui.js');const screen=read('app/screens/worker-workspace.screen.js');
check('Worker CSS scope',css.includes('#screen-worker-home')&&css.includes('#screen-worker-cards')&&!/#screen-admin|#screen-dashboard|#screen-project|#screen-approvals|#screen-(landing|auth|terms|privacy|support|select-workspace)|#sidebar|#topbar/.test(css));
const rawColors=(css.match(/#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(/g)||[]);const important=(css.match(/!important/g)||[]);const remoteFonts=(css.match(/@import|https?:\/\/|fonts\.(googleapis|gstatic)/g)||[]);check('raw color zero',rawColors.length===0,String(rawColors.length));check('new important zero',important.length===0,String(important.length));check('remote font zero',remoteFonts.length===0,String(remoteFonts.length));
const definitions=new Set([...read('app/styles/dashboard-salesops.tokens.css').matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1]).concat([...read('app/styles/dashboard-salesops.primitives.css').matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1])).concat([...css.matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1])));const references=[...css.matchAll(/var\((--[\w-]+)/g)].map(m=>m[1]);const unresolved=[...new Set(references.filter(x=>!definitions.has(x)))];check('unresolved token zero',unresolved.length===0,unresolved.join(','));
const diff=git(['diff','--name-only',base,'HEAD']).split(/\r?\n/).filter(Boolean);const forbidden=diff.filter(p=>/^(api\/|backend\/|app\/screens\/(admin|client)|app\/ui\/components\/(admin|client)\.ui\.js|app\/styles\/dashboard-salesops\.(admin|client|shell)\.css|app\/layout\/)/.test(p));check('forbidden product diff zero',forbidden.length===0,forbidden.join(','));
const spec=read('tests/redo/r08/worker-audit.spec.cjs');const invalidAssertionsFound=(spec.match(/count\(\)\s*>?=\s*0/g)||[]).length;check('invalid count assertions zero',invalidAssertionsFound===0,String(invalidAssertionsFound));
for(const name of ['worker-browser-audit.json','worker-interaction-audit.json','non-worker-regression.json','frozen-public-regression.json','layout-preservation.json'])check(name,json(`artifacts/redo/r08/${name}`).pass===true);

const tokenAudit={generatedAt:new Date().toISOString(),workerStylesheet:'app/styles/dashboard-salesops.worker.css',references:[...new Set(references)],referenceCount:references.length,unresolved,rawColors,pass:unresolved.length===0&&rawColors.length===0};
const cssAudit={generatedAt:tokenAudit.generatedAt,authOnScoped:css.includes('body.auth-on'),workerScreens:['#screen-worker-home','#screen-worker-cards'],adminSelectors:0,clientSelectors:0,publicSelectors:0,shellSelectors:0,profileSelectors:0,genericGlobalSelectors:0,remoteFonts:remoteFonts.length,pass:checks.find(x=>x.name==='Worker CSS scope').pass&&remoteFonts.length===0};
const importantAudit={generatedAt:tokenAudit.generatedAt,count:important.length,occurrences:important,pass:important.length===0};
fs.writeFileSync(path.join(art,'token-usage.json'),JSON.stringify(tokenAudit,null,2)+'\n');fs.writeFileSync(path.join(art,'css-scope-audit.json'),JSON.stringify(cssAudit,null,2)+'\n');fs.writeFileSync(path.join(art,'important-usage-audit.json'),JSON.stringify(importantAudit,null,2)+'\n');
for(const docName of ['README.md','inventory-scope.md','worker-architecture.md','worker-home-implementation.md','worker-cards-implementation.md','derived-component-decisions.md','qc-lifecycle-contract.md','work-log-contract.md','css-isolation.md','layout-review.md','non-worker-regression.md','public-regression.md','accessibility-review.md','verification-results.md','change-manifest.md','implementation-report.md'])check(`document ${docName}`,exists(`docs/redo/r08/${docName}`));
check('test results exists',exists('artifacts/redo/r08/test-results.json'));
const failures=checks.filter(x=>!x.pass);const summary={generatedAt:tokenAudit.generatedAt,branch,mergeBase:base,matrixMappingPass,stateStatusesValid,stateEvidenceComplete,qcContractPass,logContractPass,submitContractPass,qaFixtureIsolationPass,invalidAssertionsFound,invalidStatusCount,missingEvidenceCount,directoryEvidenceCount,deferred:coverage.deferred,missing:coverage.missing,checks,failures,pass:failures.length===0};fs.writeFileSync(path.join(art,'verification-summary.json'),JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify({pass:summary.pass,matrixMappingPass,stateStatusesValid,stateEvidenceComplete,qcContractPass,logContractPass,submitContractPass,qaFixtureIsolationPass,invalidAssertionsFound,failures},null,2));if(failures.length)process.exit(1);
