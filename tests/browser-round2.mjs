import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.BASE_URL||'http://127.0.0.1:3100';
const productionMode=process.env.EXPECT_PRODUCTION==='1';
const phaseOnly=process.env.PHASE||'all';
assert(['all','bridges'].includes(phaseOnly),`unknown PHASE ${phaseOnly}`);
const output=process.env.OUTPUT_DIR||'docs/verification/round2';
await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={base,at:new Date().toISOString(),phase:phaseOnly,viewports:[],cities:[],bridges:[],errors:[]};
function checkCamera(snapshot,city,context){
  assert.equal(snapshot.city,city,`${context}: active city`);
  const {position,target,limits,bounds}=snapshot.camera;
  assert(position.every(Number.isFinite)&&target.every(Number.isFinite),`${context}: finite camera vectors`);
  assert(Number.isFinite(snapshot.camera.near)&&Number.isFinite(snapshot.camera.far)&&snapshot.camera.near>0&&snapshot.camera.far>snapshot.camera.near,`${context}: finite adaptive clip planes`);
  assert(target[0]>=bounds.minX-.001&&target[0]<=bounds.maxX+.001,`${context}: x pan stays inside map bounds`);
  assert(target[2]>=bounds.minZ-.001&&target[2]<=bounds.maxZ+.001,`${context}: z pan stays inside map bounds`);
  const distance=Math.hypot(...position.map((value,index)=>value-target[index]));
  assert(distance>=limits.min-.01&&distance<=limits.max+.01,`${context}: zoom ${distance} stays within ${limits.min}..${limits.max}`);
  return distance;
}
async function waitForCameraSettled(page){
  const settled=await page.evaluate(async()=>{let previous=null,stableFrames=0;for(let frame=0;frame<150;frame++){await new Promise(requestAnimationFrame);const camera=window.__mapExplorer?.getSnapshot?.()?.camera;if(!camera)return false;const values=[...camera.position,...camera.target],delta=previous?Math.max(...values.map((value,index)=>Math.abs(value-previous[index]))):Infinity;stableFrames=delta<.002?stableFrames+1:0;if(stableFrames>=6)return true;previous=values;}return false;});
  assert(settled,'Camera controls did not settle before verification');
}
async function dragMapWithPointer(page,repeat=3){
  const names=page.locator('#names'),restoreNames=await names.getAttribute('aria-pressed')==='true';
  if(restoreNames)await names.click();
  await waitForCameraSettled(page);
  const before=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
  const canvas=page.locator('#map canvas').first(),box=await canvas.boundingBox();
  assert(box,'map canvas is available for pointer pan');
  for(let i=0;i<repeat;i++){
    const y=box.y+box.height*(i%2?.66:.38),left=box.x+box.width*.14,right=box.x+box.width*.86;
    await page.mouse.move(left,y);await page.mouse.down();await page.mouse.move(right,y,{steps:8});await page.mouse.up();await page.waitForTimeout(80);
  }
  if(restoreNames)await names.click();
  const after=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
  assert(after.camera.target.some((value,index)=>Math.abs(value-before.camera.target[index])>.05),'pointer drag pans the camera through the production UI');
  return after;
}
try {
  for(const viewport of (phaseOnly==='bridges'?[]:[{width:1440,height:900},{width:390,height:844}])){
    const context=await browser.newContext({viewport,deviceScaleFactor:1,reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',error=>report.errors.push(error.message));
    page.on('console',message=>{if(message.type()==='error')report.errors.push(message.text());});
    page.on('response',response=>{if(response.status()>=400)report.errors.push(`${response.status()} ${response.url()}`);});
    await page.goto(`${base}/?city=lagos`,{waitUntil:'networkidle',timeout:60000});
    await page.locator('#map[data-ready="true"]').waitFor({timeout:60000});
    await page.evaluate(()=>document.fonts.ready);
    const labelFrames=await page.evaluate(async()=>{const frames=[];for(let i=0;i<8;i++){await new Promise(requestAnimationFrame);frames.push([...document.querySelectorAll('.label:not([hidden])')].map(node=>`${node.getAttribute('aria-label')}|${node.style.transform}`).sort().join('\n'));}return frames;});
    assert(labelFrames.every(frame=>frame===labelFrames[0]),`stationary reduced-motion label visibility should stay stable at ${viewport.width}px`);
    if(productionMode){assert.equal(await page.evaluate(()=>typeof window.__mapExplorer.stressCameraForVerification),'undefined','production build omits camera stress hook');assert.equal(await page.evaluate(()=>typeof window.__mapExplorer.seekDublinSimulation),'undefined','production build omits deterministic seek hook');await dragMapWithPointer(page,1)}
    else await page.evaluate(()=>window.__mapExplorer.stressCameraForVerification({panX:3,panZ:2,zoomFactor:1.08}));
    const savedLagos=await page.evaluate(()=>window.__mapExplorer.getSnapshot().camera.target);
    for(const option of ['names','homes','boards'])if(await page.locator(`#${option}`).getAttribute('aria-pressed')==='true')await page.locator(`#${option}`).click();
    await page.locator('[data-city="dublin"]').click();await page.waitForTimeout(250);
    let switched=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
    assert.equal(switched.state.names,false);assert.equal(switched.state.homes,false);assert.equal(switched.state.boards,false);
    await page.locator('#walk').click();
    assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot())).state.walking,true);
    await page.locator('[data-city="abuja"]').click();await page.waitForTimeout(250);
    assert.equal((await page.evaluate(()=>window.__mapExplorer.getSnapshot())).state.walking,false,'city switch exits walking mode');
    await page.locator('[data-city="lagos"]').click();await page.waitForTimeout(250);
    const returned=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
    assert(returned.camera.target.every((value,index)=>Math.abs(value-savedLagos[index])<.02),'each city retains its own camera view');
    for(const option of ['names','homes','boards'])if(await page.locator(`#${option}`).getAttribute('aria-pressed')==='false')await page.locator(`#${option}`).click();
    await page.locator('#reset').click();await page.waitForTimeout(750);
    for(const city of ['lagos','abuja','dublin']){
      await page.goto(`${base}/?city=${city}`,{waitUntil:'networkidle',timeout:60000});
      await page.locator('#map[data-ready="true"]').waitFor({timeout:60000});
      await page.waitForTimeout(300);
      let initial=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
      const resized={width:viewport.width===390?1440:390,height:viewport.width===390?900:844};
      await page.setViewportSize(resized);await page.waitForTimeout(180);
      const responsive=await page.evaluate(()=>window.__mapExplorer.getSnapshot());checkCamera(responsive,city,`${city} resized overview ${resized.width}`);
      assert(Math.abs(responsive.camera.position[0]-responsive.camera.target[0])<1e-6,`${city}: resized overview stays north aligned`);
      await page.setViewportSize(viewport);await page.waitForTimeout(180);
      initial=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
      const initialDistance=checkCamera(initial,city,`${city} overview ${viewport.width}`);
      assert(Math.abs(initial.camera.position[0]-initial.camera.target[0])<1e-6,`${city}: overview camera is north aligned`);
      const screenshot=`${city}-overview-${viewport.width}.png`;
      await page.screenshot({path:path.join(output,screenshot)});
      let maxView;
      if(productionMode){for(let i=0;i<14;i++)await page.locator('#minus').click();await waitForCameraSettled(page);maxView=await page.evaluate(()=>window.__mapExplorer.getSnapshot());}
      else maxView=await page.evaluate(()=>window.__mapExplorer.stressCameraForVerification({zoomFactor:100}));
      const maxDistance=checkCamera(maxView,city,`${city} maximum overview zoom ${viewport.width}`);
      assert(maxDistance>=initialDistance*1.35-.02&&maxDistance<=initialDistance*1.401,`${city}: zoom-out limit stays within 1.4x the fitted overview`);
      const maxScreenshot=`${city}-maximum-zoom-${viewport.width}.png`;
      await page.screenshot({path:path.join(output,maxScreenshot)});
      let stressed,zoomedOut;
      let wheelMinimum=null;
      if(productionMode){stressed=await dragMapWithPointer(page,4);zoomedOut=checkCamera(stressed,city,`${city} pointer pan at zoom limit`);const names=page.locator('#names'),restoreNames=await names.getAttribute('aria-pressed')==='true';if(restoreNames)await names.click();await page.mouse.move(viewport.width/2,viewport.height/2);await page.mouse.wheel(0,-1400);await waitForCameraSettled(page);wheelMinimum=await page.evaluate(()=>window.__mapExplorer.getSnapshot());const wheelDistance=checkCamera(wheelMinimum,city,`${city} wheel zoom in`);assert(wheelDistance<maxDistance-.05,`${city}: wheel input zooms in through the production UI`);if(restoreNames)await names.click();for(let i=0;i<16;i++)await page.locator('#plus').click();await waitForCameraSettled(page);}
      else{stressed=await page.evaluate(()=>window.__mapExplorer.stressCameraForVerification({panX:5000,panZ:-5000,zoomFactor:100}));zoomedOut=checkCamera(stressed,city,`${city} extreme pan and zoom out`);}
      checkCamera(stressed,city,`${city} extreme pan and zoom out`);
      const zoomedIn=productionMode?await page.evaluate(()=>window.__mapExplorer.getSnapshot()):await page.evaluate(()=>window.__mapExplorer.stressCameraForVerification({panX:-5000,panZ:5000,zoomFactor:.0001}));
      const minimum=checkCamera(zoomedIn,city,`${city} extreme pan and zoom in`);
      assert(minimum>=zoomedIn.camera.limits.min-.01);
      await page.locator('#reset').click();
      await page.waitForTimeout(750);
      const reset=await page.evaluate(()=>window.__mapExplorer.getSnapshot());
      checkCamera(reset,city,`${city} reset ${viewport.width}`);
      report.cities.push({city,viewport,initialDistance,screenshot,maxDistance,maxScreenshot,zoomedOut,wheelMinimum:wheelMinimum?Math.hypot(...wheelMinimum.camera.position.map((value,index)=>value-wheelMinimum.camera.target[index])):null,minimum,resetTarget:reset.camera.target,interactionMode:productionMode?'pointer and wheel UI':'development verification hooks'});
      console.log(`Round 2 camera ${city} ${viewport.width}: overview and finite pan/zoom passed`);
    }
    assert.deepEqual(report.errors,[],`Browser errors at ${viewport.width}`);
    report.viewports.push(viewport);
    await context.close();
  }
  if(productionMode){report.productionCameraChecks={devSeekExposed:false,devStressExposed:false,viewports:report.viewports.length,cities:report.cities.length};await fs.writeFile(path.join(output,'browser-report.json'),JSON.stringify(report,null,2));}
  else if(phaseOnly==='bridges'||phaseOnly==='all') {
  const bridgeContext=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1});
  const bridgePage=await bridgeContext.newPage();
  bridgePage.on('pageerror',error=>report.errors.push(error.message));
  bridgePage.on('console',message=>{if(message.type()==='error')report.errors.push(message.text());});
  await bridgePage.goto(`${base}/?city=dublin&place=dubPort`,{waitUntil:'networkidle',timeout:60000});
  await bridgePage.locator('#map[data-ready="true"]').waitFor({timeout:60000});
  await bridgePage.locator('#close-detail').click();
  const closed=await bridgePage.evaluate(()=>window.__mapExplorer.seekDublinSimulation(0));
  assert.equal(closed.bridges.spans.length,7,'all seven river spans are coordinated');
  assert(closed.bridges.spans.every(span=>span.state==='closed'));
  const capture=async(name,state)=>{const screenshot=`river-bridge-${name}.png`;await bridgePage.screenshot({path:path.join(output,screenshot)});report.bridges.push({name,screenshot,timeSeconds:state.dublinClock.timeSeconds,spans:state.bridges.spans.map(({x,state:phase,open,roadClosed,vehiclesOnDeck,shipsOnDeck})=>({x,state:phase,open,roadClosed,vehiclesOnDeck,shipsOnDeck})),vessels:state.port.vessels.map(({id,phase,x,z,routeDistance,requestedBridges})=>({id,phase,x,z,routeDistance,requestedBridges}))});};
  await capture('closed',closed);
  const seen=new Set(['closed']),spanObservations=new Map(closed.bridges.spans.map(span=>[span.x,{openAt:null,shipPassingAt:null}]));let safeGatingEvidence=null,stoppedEvidence=null,passingState=null;const previousRouteDistance=new Map();
  for(let seconds=.5;seconds<=300;seconds+=.5){
    const state=await bridgePage.evaluate(time=>window.__mapExplorer.seekDublinSimulation(time),seconds);
    for(const vessel of state.port.vessels.filter(item=>item.riverTransit)){
      for(const span of state.bridges.spans){
        const occupies=span.shipsOnDeck.includes(vessel.id);
        assert(!occupies||span.open,`${vessel.id} hull occupies non-open bridge at x=${span.x}, t=${seconds}`);
      }
      for(const bridgeX of vessel.requestedBridges||[]){
        const span=state.bridges.spans.find(item=>Math.abs(item.x-bridgeX)<.02);
        assert(span,`requested bridge ${bridgeX} exists`);
        if(!span.open){
          const projectedHalfLength=Math.abs(Math.cos(vessel.heading||0))*((vessel.length||5.4)/2);
          if(vessel.x<bridgeX)assert(vessel.x+projectedHalfLength<=bridgeX-.25,`${vessel.id} crossed the closed-bridge stop limit at x=${bridgeX}`);
          if(!safeGatingEvidence)safeGatingEvidence={timeSeconds:seconds,vessel:vessel.id,bridgeX,spanState:span.state,x:vessel.x,projectedHullFront:vessel.x+projectedHalfLength};
          const prior=previousRouteDistance.get(vessel.id);
          if(prior!==undefined&&Math.abs(vessel.routeDistance-prior)<.001&&!stoppedEvidence){stoppedEvidence={timeSeconds:seconds,vessel:vessel.id,bridgeX,routeDistance:vessel.routeDistance};if(!seen.has('stopped')){seen.add('stopped');await capture('stopped',state);}}
          if(span.state==='gate'&&!seen.has('gate')){seen.add('gate');await capture('gate',state);}
        }
        previousRouteDistance.set(vessel.id,vessel.routeDistance);
      }
    }
    if(state.dublinMotion.roadVehiclePositions?.some(vehicle=>vehicle.stopped)&&!seen.has('car-stopped')){seen.add('car-stopped');await capture('car-stopped',state);}
    for(const span of state.bridges.spans){
      const observation=spanObservations.get(span.x);if(span.open&&observation.openAt===null)observation.openAt=seconds;if(span.open&&span.shipsOnDeck.length&&observation.shipPassingAt===null)observation.shipPassingAt=seconds;
      if(span.state==='clearing'&&span.vehiclesOnDeck.length&&!seen.has('clearing-with-car')){seen.add('clearing-with-car');await capture('clearing-with-car',state);}
      if(span.open&&!seen.has('open')){seen.add('open');await capture('open',state);}
      if(span.open&&span.shipsOnDeck.length){passingState=state;if(!seen.has('ship-passing')){seen.add('ship-passing');await capture('ship-passing',state);}}
      if(['lowering','release'].includes(span.state)&&!seen.has('closing')){seen.add('closing');await capture('closing',state);}
    }
  }
  assert(seen.has('gate'),'a requested vessel should trigger road gates');
  assert(safeGatingEvidence,'a vessel request should be held safely outside a non-open span when permission is unavailable');
  assert(seen.has('open'),'the requested span should open after clearing');
  assert(passingState,'the vessel should be observed occupying an open span');
  assert(seen.has('closing'),'the bridge should close after the vessel clears');
  assert([...spanObservations.values()].every(item=>item.openAt!==null),`every drawbridge should complete its open cycle: ${JSON.stringify(Object.fromEntries(spanObservations))}`);
  assert([...spanObservations.values()].every(item=>item.shipPassingAt!==null),`a vessel should be observed on every open span: ${JSON.stringify(Object.fromEntries(spanObservations))}`);
  assert(seen.has('car-stopped'),'a road vehicle should stop for an operating bridge');
  const beforePause=await bridgePage.evaluate(()=>{window.__mapExplorer.dispatchPort('pause');return window.__mapExplorer.getSnapshot()});
  await bridgePage.waitForTimeout(300);
  const paused=await bridgePage.evaluate(()=>window.__mapExplorer.getSnapshot());
  assert.equal(paused.dublinClock.timeSeconds,beforePause.dublinClock.timeSeconds,'pause freezes the shared transport clock');
  await capture('paused',paused);
  await bridgePage.evaluate(()=>window.__mapExplorer.dispatchPort('resume'));
  const carsBeforeResume=beforePause.dublinMotion.roadVehiclePositions.map(vehicle=>({id:vehicle.id,x:vehicle.x,z:vehicle.z}));
  const resumed=await bridgePage.evaluate(time=>window.__mapExplorer.seekDublinSimulation(time+2),paused.dublinClock.timeSeconds);
  assert(resumed.dublinClock.timeSeconds>paused.dublinClock.timeSeconds,'resume continues the shared clock');
  const carsAfterResume=resumed.dublinMotion.roadVehiclePositions;
  assert(carsAfterResume.some(vehicle=>{const prior=carsBeforeResume.find(item=>item.id===vehicle.id);return prior&&Math.hypot(prior.x-vehicle.x,prior.z-vehicle.z)>.01;}),'road vehicles resume movement with the shared clock');
  await capture('resumed',resumed);
  const reset=await bridgePage.evaluate(()=>window.__mapExplorer.dispatchPort('reset'));
  const resetSnapshot=await bridgePage.evaluate(()=>window.__mapExplorer.getSnapshot());
  assert(resetSnapshot.bridges.spans.every(span=>span.state==='closed'&&!span.requests.length),'port reset clears bridge requests');
  await capture('reset',resetSnapshot);
  report.bridgeSummary={seen:[...seen],safeGatingEvidence,stoppedEvidence,spanObservations:Object.fromEntries(spanObservations),resumedAt:resumed.dublinClock.timeSeconds,resetAt:resetSnapshot.dublinClock.timeSeconds,dispatchReset:reset.message};
  assert.deepEqual(report.errors,[],'Browser errors during bridge phase regression');
  await bridgeContext.close();
  await fs.writeFile(path.join(output,'browser-report.json'),JSON.stringify(report,null,2));
  }
} finally {await browser.close();}
