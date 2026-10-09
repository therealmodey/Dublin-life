import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.BASE_URL||'http://127.0.0.1:3101';
const output=process.env.OUTPUT_DIR||'docs/verification/port-cycle';
await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const errors=[],phases=new Set(),frames=[];
try {
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto(`${base}/?city=dublin&place=dubPort`,{waitUntil:'networkidle'});
  await page.locator('#map[data-ready="true"]').waitFor();
  assert.equal(await page.evaluate(()=>typeof window.__mapExplorer.seekDublinSimulation),'undefined','production-compatible port cycle does not expose the development seek seam');
  await page.locator('#port-reset').click();
  await page.locator('#focus').click();
  await page.locator('#close-detail').click();
  await page.locator('#names').click();
  const deadline=Date.now()+480000,spanEvents=new Map();
  let state;
  do {
    await page.waitForTimeout(1500);
    state=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
    for(const span of state.bridges.spans){const event=spanEvents.get(span.x)||{opened:false,shipPassed:false};event.opened||=span.open;event.shipPassed||=span.open&&span.shipsOnDeck.length>0;spanEvents.set(span.x,event);}
    for(const vessel of state.port.vessels)phases.add(vessel.phase);
    if(state.port.containersMoved>0&&frames.length===0){await page.screenshot({path:path.join(output,'cargo-transfer.png')});frames.push({file:'cargo-transfer.png',time:state.dublinClock.timeSeconds,port:state.port});}
  } while(!(state.dublinClock.timeSeconds>=300&&state.port.completedCargo>=1&&state.port.completedFerries>=1&&state.port.arrivals>=2&&spanEvents.size===7&&[...spanEvents.values()].every(event=>event.shipPassed))&&Date.now()<deadline);
  assert.ok(state.dublinClock.timeSeconds>=300,'serialized full river transit needs at least 300 simulated seconds');
  for(const phase of ['approach','berth','transfer','depart','offshore'])assert.ok(phases.has(phase),`missing ${phase} in real-time browser motion`);
  assert.ok(state.port.completedCargo>=1&&state.port.completedFerries>=1);
  assert.ok(state.port.containersMoved>=1);
  assert.ok(state.port.arrivals>=2);
  assert.ok([...spanEvents.values()].every(event=>event.opened),'all seven drawbridges should open during real-time ship traffic');
  assert.ok([...spanEvents.values()].every(event=>event.shipPassed),'a ship should pass every open drawbridge during the real-time route');
  assert.deepEqual(errors,[]);
  await page.screenshot({path:path.join(output,'cycle-complete.png')});
  await fs.writeFile(path.join(output,'browser-report.json'),JSON.stringify({base,at:new Date().toISOString(),phases:[...phases],frames,spanEvents:Object.fromEntries(spanEvents),state,errors},null,2));
  console.log(`Live port cycle passed: ${state.dublinClock.timeSeconds.toFixed(1)} seconds, cargo/ferry calls and all seven bridge passages completed`);
} finally {await browser.close();}
