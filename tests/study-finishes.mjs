// Informed feature validation, deliberately separate from human quality votes.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'/home/k/Projects/holo-emitter/node_modules/playwright-core/index.mjs');
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../assets/study-evidence');
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/opt/google/chrome/chrome',args:['--no-sandbox','--enable-gpu','--use-angle=gl-egl','--ignore-gpu-blocklist']});
const evidence={schema:'he-quality-informed-features/1',humanVotes:0,
  meaning:'Automated informed appearance/feature checks, one pass per setting, not blind preferences or a cold-start comparison',records:[],errors:[]};
const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
page.on('pageerror',e=>evidence.errors.push(e.stack));
page.on('console',m=>{if(m.type()==='error')evidence.errors.push(m.text());});
const ready=()=>page.waitForFunction(()=>window.studyReady,null,{timeout:90000});
const scenarios=[
  ['car','matte','clean',false],['car','glossy','clean',false],['car','glossy','clean',true],['car','glossy','worn',false],
  ['tree','satin','worn',false],['chair','glossy','graphic',false],['desk','matte','worn',false],['desk','glossy','worn',false],
];
try{
  await page.goto(process.env.STUDY_URL||'http://127.0.0.1:8770/quality-lab/phone-site/study.html?debug=1');await ready();
  evidence.buildId=await page.evaluate(()=>window.studyResult.buildId);evidence.environment=await page.evaluate(()=>window.studyResult.environment);
  await page.fill('#defectNote','AUTOMATED UI VALIDATION, not a human perceptual judgment');await page.click('#voteTie');
  await page.locator('#revealPanel details').evaluate(e=>e.open=true);
  for(const [subject,finish,condition,glass] of scenarios){
    await page.selectOption('#finishSubject',subject);await ready();
    await page.selectOption('#finish',finish);await ready();
    await page.selectOption('#condition',condition);await ready();
    if(subject==='car'){await page.locator('#glass').setChecked(glass);await ready();}
    await page.selectOption('#view','medium');await page.uncheck('#motion');
    const name=`${subject}-${finish}-${condition}${glass?'-glass':''}`;
    await page.locator('#studyViewport').screenshot({path:path.join(out,name+'.png')});
    await page.click('#runMeasure');await page.waitForFunction(()=>window.studyDebug.state().status==='measuring');
    await page.waitForFunction(()=>window.studyDebug.state().status!=='measuring',null,{timeout:90000});
    const state=await page.evaluate(()=>window.studyDebug.state());
    if(!state.valid||state.status!=='ready')throw Error('Invalid informed feature '+name);
    evidence.records.push({name,subject,finish,condition,glass,...state});
    fs.writeFileSync(path.join(out,'informed-features.json'),JSON.stringify(evidence,null,2)+'\n');
    console.log(name,'validated; p95',state.measurements.map(m=>m.frameMs.p95.toFixed(1)).join('/'));
  }
}finally{fs.writeFileSync(path.join(out,'informed-features.json'),JSON.stringify(evidence,null,2)+'\n');await browser.close();}
if(evidence.errors.length)throw Error(JSON.stringify(evidence.errors));
