import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.BASE_URL||'http://127.0.0.1:3100';
const out=process.env.OUTPUT_DIR||'docs/verification/dublin';
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={capturedAt:new Date().toISOString(),base,errors:[],sheets:[],flightFrames:[],landmarkViews:[]};
try {
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]) {
    const context=await browser.newContext({viewport,reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']});
    const page=await context.newPage();
    page.on('pageerror',error=>report.errors.push(error.message));
    page.on('console',message=>{if(message.type()==='error')report.errors.push(message.text());});
    for(const [id,title] of [['dubTrinity','Trinity'],['dubAirport','Airport']]) {
      await page.goto(`${base}/?city=dublin&place=${id}`,{waitUntil:'networkidle'});
      await page.locator('#map[data-ready="true"]').waitFor();
      await page.locator('#detail[open]').waitFor();
      assert.match(await page.locator('#place-name').innerText(),new RegExp(title));
      const sheet=await page.locator('#detail').boundingBox();
      assert.ok(sheet.x>=0&&sheet.x+sheet.width<=viewport.width+1,'Sheet extends outside viewport');
      assert.ok(sheet.y>=0&&sheet.y+sheet.height<=viewport.height+1,'Sheet extends below viewport');
      assert.equal(await page.locator('.airport-desk').count(),id==='dubAirport'?1:0);
      await page.getByRole('button',{name:'Share a link to this place'}).click();
      await page.getByRole('button',{name:'Link copied'}).waitFor();
      const copied=await page.evaluate(()=>navigator.clipboard.readText());
      assert.equal(new URL(copied).searchParams.get('place'),id);
      await page.screenshot({path:path.join(out,`${id}-${viewport.width}.png`)});
      await page.keyboard.press('Escape');
      await page.locator('#detail[open]').waitFor({state:'hidden'});
      report.sheets.push({id,viewport,sheet,sharedUrl:copied,escapeClosed:true});
    }
    await context.close();
  }
  const context=await browser.newContext({viewport:{width:1440,height:900}});
  const page=await context.newPage();
  page.on('pageerror',error=>report.errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error')report.errors.push(message.text());});
  await page.goto(`${base}/?city=dublin&place=dubAirport`,{waitUntil:'networkidle'});
  await page.locator('#map[data-ready="true"]').waitFor();
  await page.getByRole('button',{name:'Look closer'}).click();
  await page.waitForTimeout(750);
  await page.getByRole('button',{name:'Close landmark details'}).click();
  await page.locator('#names').click();
  for(const seconds of [0,8,24,42,69,84,96,105,120]) {
    const state=await page.evaluate(time=>window.__mapExplorer.seekDublinMotion(time),seconds);
    assert.equal(state.dublinMotion.runwayExclusive,true);
    assert.equal(state.dublinMotion.roadVehicles,8);
    assert.ok(state.referenceTrees>0,'Reference trees did not populate Dublin');
    for(const actor of state.dublinMotion.actors)assert.ok(Object.values(actor.position).every(Number.isFinite));
    await page.waitForTimeout(100);
    const screenshot=`flight-${seconds}.png`;
    await page.screenshot({path:path.join(out,screenshot)});
    report.flightFrames.push({seconds,screenshot,state});
  }
  // Reduced motion freezes the normal scene animation; seeking above is a dev-only
  // deterministic visual verification path and is absent from production builds.
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.evaluate(()=>window.__mapExplorer.resumeDublinMotion());
  const before=await page.evaluate(()=>window.__mapExplorer.getSnapshot().dublinMotion.timeSeconds);
  await page.waitForTimeout(350);
  const after=await page.evaluate(()=>window.__mapExplorer.getSnapshot().dublinMotion.timeSeconds);
  assert.equal(after,before,'Reduced motion did not pause aircraft');
  report.reducedMotionPaused=true;
  for(const id of ['dubTrinity','dubGPO','dubCustom','dubCastle','dubCroke','dubAviva','dubBeckett']) {
    await page.goto(`${base}/?city=dublin&place=${id}`,{waitUntil:'networkidle'});
    await page.locator('#map[data-ready="true"]').waitFor();
    await page.getByRole('button',{name:'Look closer'}).click();
    await page.waitForTimeout(750);
    await page.getByRole('button',{name:'Close landmark details'}).click();
    await page.locator('#detail[open]').waitFor({state:'hidden'});
    await page.locator('#names').click();
    const snapshot=await page.evaluate(()=>window.__mapExplorer.seekDublinMotion(9.2));
    await page.waitForTimeout(100);
    const screenshot=`landmark-${id}.png`;
    await page.screenshot({path:path.join(out,screenshot)});
    if(id==='dubBeckett') {
      const bridgeVan=snapshot.dublinMotion.actors.find(actor=>actor.kind==='car'&&Math.abs(actor.position.x-30)<.5&&Math.abs(actor.position.z)<.2);
      assert.ok(bridgeVan&&bridgeVan.position.y>.52,'Bridge traffic must sit above the bridge deck');
    }
    report.landmarkViews.push({id,screenshot,snapshot});
  }
  await context.close();
  assert.deepEqual(report.errors,[]);
  console.log(`Dublin: ${report.sheets.length} destination sheets ${report.flightFrames.length} full-cycle frames and ${report.landmarkViews.length} landmark views passed`);
} finally {
  await fs.writeFile(path.join(out,'browser-report.json'),JSON.stringify(report,null,2));
  await browser.close();
}
