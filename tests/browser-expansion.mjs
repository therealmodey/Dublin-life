import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base=process.env.BASE_URL || 'http://127.0.0.1:3100';
const output=process.env.OUTPUT_DIR || 'docs/verification/expansion';
await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={base,at:new Date().toISOString(),views:[],port:[]};
try {
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]) {
    const context=await browser.newContext({viewport,deviceScaleFactor:1});
    const page=await context.newPage();
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
    for(const id of ['overview','dubAirport','dubPort','dubPhoenix','dubGreen','dubMerrion','dubGardenRemembrance','dubIveagh','dubWarMemorial','dubDockHotel','dubNorthCafe','dubStPatricksPark','dubTrinity','dubCustom','dubGuinness']) {
      await page.goto(`${base}/?city=dublin${id==='overview'?'':`&place=${id}`}`,{waitUntil:'networkidle',timeout:60000});
      await page.locator('#map[data-ready="true"]').waitFor({timeout:60000});
      if(id!=='overview') {
        await page.locator('#detail[open]').waitFor();
        if(id==='dubPort') {
          await page.locator('#port-pause').click();
          assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot().port)).paused,true);
          await page.locator('#port-cargo').click();
          await page.locator('#port-ferry').click();
          const queued=await page.evaluate(()=>window.__mapExplorer.getSnapshot().port);
          assert.equal(queued.vessels.length,4);
          await page.locator('#port-reset').click();
          const reset=await page.evaluate(()=>window.__mapExplorer.getSnapshot().port);
          assert.equal(reset.vessels.length,2);
          assert.equal(reset.completedCargo,0);
          await page.screenshot({path:path.join(output,`port-desk-${viewport.width}.png`)});
          await page.locator('#port-pause').click();
          assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot().port)).paused,true);
          await page.locator('#port-pause').click();
          assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot().port)).paused,false);
          report.port.push({viewport,queued,reset,resume:true});
        }
        await page.locator('#focus').click();
        await page.locator('#close-detail').click();
      }
      await page.waitForTimeout(900);
      const names=page.locator('#names');
      if(await names.getAttribute('aria-pressed')==='true')await names.click();
      const screenshot=`${id}-${viewport.width}.png`;
      await page.screenshot({path:path.join(output,screenshot)});
      report.views.push({id,viewport,screenshot,snapshot:await page.evaluate(()=>window.__mapExplorer.getSnapshot())});
      console.log(`Expansion ${id} ${viewport.width}: ready`);
    }
    await page.goto(`${base}/?city=dublin&place=dubPort`,{waitUntil:'networkidle'});
    await page.locator('#map[data-ready="true"]').waitFor();
    await page.locator('#walk-here').click();
    const walking=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
    assert.equal(walking.state.walking,true);
    assert.equal(walking.walker[0],56);
    assert.ok(Math.abs(walking.walker[1]-.295)<1e-8);
    assert.equal(walking.walker[2],5);
    await page.keyboard.press('Escape');
    assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot())).state.walking,false);
    report.port.at(-1).walkArrival=walking.walker;
    assert.deepEqual(errors,[],`Browser errors at ${viewport.width}`);
    await context.close();
  }
  await fs.writeFile(path.join(output,'browser-report.json'),JSON.stringify(report,null,2));
} finally {await browser.close();}
