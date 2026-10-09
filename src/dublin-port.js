import * as THREE from 'three';
import {DUBLIN_PALETTE} from './dublin-palette.js';
import {DUBLIN_DRAWBRIDGE_XS} from './dublin-bridges.js';

const COLORS={land:'#777e67',asphalt:'#353b3c',concrete:'#b9b3a6',quay:'#a6a296',water:DUBLIN_PALETTE.waterDark,deep:'#28617a',white:'#e9e1d1',steel:'#667277',red:'#a9433d',blue:'#376884',green:'#3d765d',yellow:'#e6bd5c',orange:'#bd7547'};

/** Compressed Dublin Port interpretation with an isolated, deterministic local simulation. */
export function buildDublinPort({textSurface}={}) {
  const world=new THREE.Group();world.name='Dublin Port';
  const mats=Object.fromEntries(Object.entries(COLORS).map(([k,v])=>[k,new THREE.MeshStandardMaterial({color:v,roughness:k==='water'||k==='deep'?.38:.9,metalness:k==='steel'?.45:0})]));
  const box=new THREE.BoxGeometry(1,1,1),cyl=new THREE.CylinderGeometry(1,1,1,10);
  const counters={containersMoved:0,cargoArrivals:0,cargoDepartures:0,ferryArrivals:0,ferryDepartures:0};
  const vessels=[],droppedCargo=[];
  function block(parent,x,y,z,w,h,d,mat,name,ry=0){const m=new THREE.Mesh(box,mats[mat]||mat);m.position.set(x,y,z);m.scale.set(w,h,d);m.rotation.y=ry;m.name=name;parent.add(m);m.castShadow=h>.12;m.receiveShadow=true;return m;}
  function post(parent,x,y,z,r,h,mat,name){const m=new THREE.Mesh(cyl,mats[mat]);m.position.set(x,y,z);m.scale.set(r,h,r);m.name=name;parent.add(m);return m;}
  // North and south terminal aprons flank an unobstructed continuation of the Liffey.
  const land={minX:39,maxX:62.5,minZ:-15,maxZ:15,channelHalfWidth:3,topY:.325,platforms:[{minZ:-15,maxZ:-3},{minZ:3,maxZ:15}]};
  block(world,50.75,.245,-9,23.5,.16,12,'land','North port apron');
  block(world,50.75,.245,9,23.5,.16,12,'land','South port apron');
  block(world,62.45,.27,-9,.7,.20,12,'quay','North quay wall');
  block(world,62.45,.27,9,.7,.20,12,'quay','South quay wall');
  block(world,62.02,.36,-9,.34,.09,12,'concrete','North quay coping');
  block(world,62.02,.36,9,.34,.09,12,'concrete','South quay coping');
  block(world,51.25,.205,0,22.5,.035,6,'water','Liffey channel at port mouth');
  block(world,51.25,.228,0,22.5,.012,6,'water','Liffey surface at port mouth');
  block(world,79.25,.205,0,33.5,.035,34,'deep','Outer port basin');
  block(world,79.25,.228,0,33.5,.012,34,'water','Basin water surface');
  for(const z of [-14.35,14.35]){block(world,62.1,.40,z,.65,.16,.50,'concrete','Quay return coping');for(let x=64;x<=73;x+=2.4)post(world,x,.48,z,.12,.28,'steel','Quay bollard');}

  // Raised approach plinths bridge the gap from city ground to the terminal gate.
  block(world,37.1,.245,31,14.2,.16,5.2,'land','Port access horizontal embankment');
  block(world,42.4,.245,22.8,4.3,.16,16.4,'land','Port gate approach embankment');
  // City approach ties the eastern quayside road at x=30 into a gated terminal spur.
  block(world,36.2,.29,31,12.8,.07,1.55,'asphalt','Port eastbound access connector');
  block(world,42.4,.29,22.8,1.55,.07,16.4,'asphalt','Port gate approach');
  // North-bank gate spur only reaches the bridge landing; the sloped ramp and deck
  // below replace the old submerged flat slab across the river.
  block(world,42.4,.29,12.6,1.55,.07,4.0,'asphalt','North quay bridge approach');
  for(const side of [-1,1]){
    block(world,36.2,.29,31+side*1.37,12.8,.06,.62,'concrete','Port connector footway');
    block(world,36.2,.36,31+side*.91,12.8,.11,.12,'concrete','Port connector kerb');
    block(world,42.4+side*1.37,.29,22.8,.62,.06,16.4,'concrete','Port gate footway');
    block(world,42.4+side*.91,.36,22.8,.12,.11,16.4,'concrete','Port gate kerb');
    block(world,42.4+side*1.37,.29,12.6,.62,.06,4.0,'concrete','North quay approach footway');
    block(world,42.4+side*.91,.36,12.6,.12,.11,4.0,'concrete','North quay approach kerb');
  }
  for(let x=31;x<42;x+=2.1)block(world,x,.332,31,.95,.014,.045,'white','Port connector lane marking');
  for(let z=15;z<31;z+=2.1)block(world,42.4,.332,z,.045,.014,.95,'white','Port gate lane marking');
  for(let z=14;z>3;z-=2.1)block(world,42.4,.332,z,.045,.014,.95,'white','North quay lane marking');
  for(const z of [14.1,14.9])block(world,42.4,.34,z,1.55,.018,.06,'white','Port gate stop marking');
  for(const x of [40.45,44.35])for(const z of [-13,-9,-5,5,9,13])post(world,x,.84,z,.045,1.0,'steel','Terminal fence post');
  for(const x of [40.45,44.35])for(const [a,b] of [[-13,-9],[-9,-5],[5,9],[9,13]])block(world,x,.75,(a+b)/2,.035,.04,b-a,'steel','Terminal fence rail');
  for(const z of [13.9,15.3])post(world,42.4,.53,z,.085,.42,'yellow','Port gate bollard');

  // Freight stacks occupy the western yard, separated from service buildings and the ship lane.
  const containerColors=['red','blue','green','orange'];
  let stackCount=0;
  const containerRows=[-8,-4.8,4.8,8];
  for(let row=0;row<containerRows.length;row++)for(let col=0;col<4;col++){
    const x=45.4+col*1.95,z=containerRows[row],tierCount=(row+col)%2===0?3:2;
    for(let tier=0;tier<tierCount;tier++){
      const y=land.topY+.275+tier*.62,mat=containerColors[(row*2+col+tier)%containerColors.length];
      block(world,x,y,z,1.55,.55,2.55,mat,`Container stack ${row+1}-${col+1}-${tier+1}`);stackCount++;
      for(let rib=0;rib<7;rib++)block(world,x-.70+rib*.23,y,z,.018,.49,2.58,'concrete','Container corrugation');
    }
  }
  // A raised pedestrian/service bridge links the terminal banks without covering the channel.
  const bridgeX=42.4,bridgeHalfWidth=1.4,bridgeSurfaceY=.523,rampEndZ=12.1;
  for(const side of [-1,1]){
    const angle=side<0?-.02176:.02176;
    const ramp=new THREE.Mesh(box,mats.concrete);ramp.name=`${side<0?'South':'North'} port bridge access ramp`;ramp.position.set(bridgeX,.344,side*7.55);ramp.scale.set(bridgeHalfWidth*2,.16,9.1);ramp.rotation.x=angle;ramp.castShadow=true;ramp.receiveShadow=true;world.add(ramp);
    const rampRoad=new THREE.Mesh(box,mats.asphalt);rampRoad.name='Port bridge ramp roadway';rampRoad.position.set(bridgeX,.389,side*7.55);rampRoad.scale.set(1.55,.07,9.1);rampRoad.rotation.x=angle;world.add(rampRoad);
    for(const footSide of [-1,1]){const path=new THREE.Mesh(box,mats.concrete);path.name='Port bridge ramp footway';path.position.set(bridgeX+footSide*.98,.389,side*7.55);path.scale.set(.58,.07,9.1);path.rotation.x=angle;world.add(path);}
    for(let step=0;step<11;step++){
      const t=(step+.5)/11,z=side*(3.6+t*8.4),y=.36+t*.89;
      block(world,bridgeX+side*1.05,y,z,.16,.08,.72,'steel','Bridge ramp handrail post');
    }
  }
  // Each gantry's portal legs sit on quay rails on land; boom and trolley extend over the water.
  const cranes=[];
  for(const z of [-12,-6,6,12]){
    const root=new THREE.Group();root.name='Quayside ship-to-shore gantry';root.position.set(59.2,0,z);world.add(root);
    for(const legZ of [-1.55,1.55]){
      block(root,0,4.95,legZ,.40,9.25,.38,'steel','Gantry crane leg');
      block(root,0,.47,legZ,.92,.28,.78,'yellow','Gantry crane bogie');
      block(root,0,.35,legZ,.95,.08,.30,'steel','Gantry crane rail');
    }
    block(root,0,9.65,0,.56,.45,3.65,'steel','Gantry crosshead');
    block(root,4.55,10.35,0,9.65,.25,.54,'yellow','Outboard crane boom');
    block(root,8.95,10.15,0,.52,.22,1.65,'yellow','Boom head');
    const trolley=block(root,4.2,9.25,0,.92,.34,1.16,'blue','Crane trolley');
    const ropes=[];for(const dx of [-.36,.36])for(const dz of [-.38,.38]){const rope=block(root,dx+4.2,7.65,dz,.025,3.0,.025,'steel','Crane hoist cable');rope.userData.ropeOffset={x:dx,z:dz};ropes.push(rope);}
    const spreader=block(root,4.2,5.95,0,1.1,.14,1.15,'yellow','Crane container spreader');
    cranes.push({root,trolley,ropes,spreader,homeZ:z});
  }
  // Passenger terminal, Ro-Ro linkspan, freight shed, rail siding and yard circulation.
  block(world,46.4,1.06,-11,4.2,1.42,2.7,'white','Port passenger terminal');
  block(world,46.4,1.83,-11,4.45,.12,2.85,'blue','Passenger terminal roof');
  for(const x of [44.8,45.7,46.6,47.5,48.2])block(world,x,1.04,-9.62,.28,.86,.035,'water','Terminal glazed frontage');
  block(world,61.15,.40,-12,2.4,.14,3.7,'steel','Ro-Ro linkspan hinge');
  block(world,63.55,.38,-12,3.1,.10,3.7,'yellow','Ro-Ro linkspan ramp');
  block(world,46.4,1.03,12,4.8,1.42,4.3,'concrete','Port operations warehouse');
  block(world,46.4,1.79,12,5.0,.12,4.5,'steel','Warehouse roof');
  for(const z of [9.65,10.1])block(world,54.5,.37,z,6,.045,.05,'steel','Port freight rail');
  for(let x=51.5;x<=57.5;x+=.45)block(world,x,.36,9.88,.06,.05,.95,'concrete','Freight rail sleeper');
  for(let x=44;x<=54;x+=1)for(const z of [8.8,14.3])post(world,x,.43,z,.06,.22,'yellow','Yard safety bollard');
  for(const z of [-12,-8,-4,4,8,12])block(world,54.1,.345,z,.055,.018,1.35,'yellow','Container yard lane marking');
  block(world,54.1,.35,13,10,.025,.11,'white','Yard stop bar');

  // Two breakwaters frame a broad approach channel; beacons and a fixed lighthouse mark the harbor.
  for(const side of [-1,1]){
    for(let i=0;i<16;i++){const t=i/15,x=76+t*11,z=side*(18+t*8);block(world,x,.25,z,1.5,.48,1.45,'concrete','Harbour breakwater block',side*.14);}
    for(const x of [80,85])post(world,x,.66,side*(20+(x-80)),.10,.62,'red','Breakwater beacon');
  }
  const lighthouse=new THREE.Group();lighthouse.name='Harbour lighthouse interpretation';lighthouse.position.set(84,.25,28);world.add(lighthouse);
  post(lighthouse,0,1.4,0,.55,2.8,'red','Tapered lighthouse tower');block(lighthouse,0,2.9,0,1.05,.24,1.05,'white','Lighthouse gallery');post(lighthouse,0,3.23,0,.4,.52,'white','Lantern room');block(lighthouse,0,3.53,0,.72,.12,.72,'red','Lighthouse roof');
  if(typeof textSurface==='function'){
    textSurface('DUBLIN PORT','#f0eadb',6,world,54,.48,-14.45,false,'#325e6c');
    textSurface('CONTAINER TERMINAL','#f0eadb',4.3,world,52,.45,14.35,false,'#325e6c');
    textSurface('FERRY TERMINAL','#f0eadb',3.1,world,46.4,2.25,-9.45,false,'#376884');
  }

  const slotValues=[-12,-6,6,12],slotForKind={cargo:-6,ferry:-12};
  const durations={approach:108,berth:11,transfer:18,depart:16,offshore:15};
  const totalCycle=Object.values(durations).reduce((sum,n)=>sum+n,0);
  const vesselLength={cargo:5.4,ferry:4.6};
  const vesselWidth=1.35;
  function storagePosition(index,berthZ=-6){const slot=((index%6)+6)%6,col=slot%3,row=Math.floor(slot/3),rowZ=berthZ>=0?[4.8,8][row]:[-8,-4.8][row];return new THREE.Vector3(54.85+col*1.25,land.topY+.33,rowZ);}
  function newCargoCrate(){if(droppedCargo.length){const cargo=droppedCargo.shift();cargo.visible=true;return cargo;}const cargo=new THREE.Mesh(new THREE.BoxGeometry(1.04,.65,1.15),mats.blue);cargo.name='Active cargo transfer container';world.add(cargo);return cargo;}
  function makeRiverRoute(slotZ){
    // One clearly bounded navigation track crosses the bridge line. At the
    // western end it loops inside the reserved basin, then returns on the same
    // track; bridge reservations serialize that shared reach so vessels cannot
    // meet head-on in the channel.
    const points=[[92,slotZ],[72,0],[52,0],[42.4,0],[30,0],[18,0],[2,0],[-5,0],[-18,0],[-28,0],[-42,0],[-56,0],[-60,0],[-62,0],[-64,0],[-66,0],[-67.5,-1.35],[-68,-2.45],[-69.5,-2.2],[-71,0],[-69.5,2.2],[-68,2.45],[-67.5,1.35],[-66,0],[-64,0],[-62,0],[-60,0],[-56,0],[-42,0],[-28,0],[-18,0],[-5,0],[2,0],[18,0],[30,0],[42.4,0],[52,0],[60,0],[64,0],[68,0],[68,slotZ],[66.5,slotZ]];
    const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,.36,z)),false,'centripetal',.25);curve.arcLengthDivisions=1600;
    const length=curve.getLength(),samples=2400,crossings=[];let previous=curve.getPointAt(0);
    for(let i=1;i<=samples;i++){
      const distance=length*i/samples,current=curve.getPointAt(i/samples);
      for(const bridgeX of DUBLIN_DRAWBRIDGE_XS){
        if(Math.abs(previous.z)<2.2&&Math.abs(current.z)<2.2&&(previous.x-bridgeX)*(current.x-bridgeX)<=0&&previous.x!==current.x){
          const mix=(bridgeX-previous.x)/(current.x-previous.x),z=previous.z+(current.z-previous.z)*mix;
          if(Math.abs(z)<2.2)crossings.push({x:bridgeX,distance:distance-length/samples*(1-mix)});
        }
      }
      previous=current;
    }
    crossings.sort((a,b)=>a.distance-b.distance);
    const uniqueCrossings=crossings.filter((crossing,index)=>index===0||Math.abs(crossing.distance-crossings[index-1].distance)>.8);
    return{curve,length,crossings:uniqueCrossings};
  }
  function makeVessel(kind,id,slotZ,phaseOffset=0,dispatched=false){
    const root=new THREE.Group();root.name=`${kind==='cargo'?'Container ship':'Ro-Ro ferry'} ${id}`;world.add(root);
    const hullMat=new THREE.MeshStandardMaterial({color:kind==='cargo'?'#253b4b':'#34434a',roughness:.55});
    const hull=new THREE.Mesh(new THREE.BoxGeometry(vesselLength[kind],.7,vesselWidth),hullMat);hull.position.y=.38;hull.name='Vessel hull';root.add(hull);
    const ownedResources=[{geometry:hull.geometry,material:hull.material}];
    block(root,0,.8,0,vesselLength[kind]-.5,.2,1.18,kind==='cargo'?'concrete':'white','Vessel deck');
    if(kind==='cargo')for(let i=0;i<4;i++)block(root,-1.15+i*.74,1.28,0,.67,.62,.77,containerColors[i%4],`Shipboard container ${i+1}`);
    else{block(root,-.45,1.40,0,1.75,1.16,.75,'white','Ferry superstructure');block(root,-.45,2.03,0,1.8,.12,.82,'blue','Ferry upper deck');}
    block(root,2.25,.74,0,.16,.72,.16,'white','Vessel mast');
    const cargo=kind==='cargo'?newCargoCrate():null;
    const riverRoute=makeRiverRoute(slotZ);
    const vessel={root,kind,id,slotZ,phaseOffset,dispatched,phase:'approach',phaseElapsed:0,routeDistance:kind==='ferry'?18:0,riverRoute,routeSpeed:2.8,cargo,transferDone:false,ownedResources};vessels.push(vessel);return vessel;
  }
  makeVessel('cargo','cargo-1',slotForKind.cargo,0);
  const baseFerry=makeVessel('ferry','ferry-1',slotForKind.ferry,21);baseFerry.phase='offshore';
  const pilotBoats=[];
  for(const [i,color] of ['yellow','white'].entries()){
    const boat=new THREE.Group();boat.name=i===0?'Pilot boat':'Harbour tug';world.add(boat);
    block(boat,0,.36,0,1.5,.34,.7,'blue','Pilot or tug hull');block(boat,-.12,.70,0,.72,.44,.5,color,'Pilot or tug wheelhouse');pilotBoats.push(boat);
  }
  const places=[{id:'dubPort',name:'Dublin Port',kind:'seaport',city:'dublin',area:'Docklands',x:56,z:5,w:20,d:30,h:11,emoji:'⚓',arrivalX:56,arrivalZ:5,sourceUrl:'https://www.dublinport.ie/',description:'A locally simulated freight and ferry port in the standalone Dublin explorer.',controls:['pause','resume','dispatch-cargo','dispatch-ferry','reset']}];
  let paused=false,simTime=0,lastWallElapsed=null,latestWallElapsed=0,disposed=false,dispatchSequence=0,bridgeController=null,activeRiverReservation=null;
  const entryX=92,berthX=66.5,exitX=92;
  function interpolate(a,b,t){return a.clone().lerp(b,THREE.MathUtils.clamp(t,0,1));}
  function getPhase(v){return{phase:v.phase,t:THREE.MathUtils.clamp(v.phaseElapsed/(durations[v.phase]||1),0,1)};}
  function localToWorld(v,local){return v.root.localToWorld(local.clone());}
  function routePosition(v,phase,t){
    const z=v.slotZ,entry=new THREE.Vector3(entryX,.36,z),berth=new THREE.Vector3(berthX,.36,z),exit=new THREE.Vector3(exitX,.36,z);
    if(phase==='offshore'){
      const progress=THREE.MathUtils.smoothstep(t,0,1),point=v.riverRoute.curve.getPointAt(0),tangent=v.riverRoute.curve.getTangentAt(0),entryYaw=Math.atan2(-tangent.z,tangent.x),yawDelta=Math.atan2(Math.sin(entryYaw),Math.cos(entryYaw));
      return{pos:interpolate(exit,point,progress),yaw:yawDelta*progress};
    }
    if(phase==='approach'){
      const p=v.riverRoute.curve.getPointAt(THREE.MathUtils.clamp(v.routeDistance/v.riverRoute.length,0,1)),tan=v.riverRoute.curve.getTangentAt(THREE.MathUtils.clamp(v.routeDistance/v.riverRoute.length,0,1));
      // Vessel meshes are built nose-forward along local +X.
      return{pos:p,yaw:Math.atan2(-tan.z,tan.x)};
    }
    if(phase==='berth')return{pos:berth,yaw:-Math.PI+Math.PI/2*THREE.MathUtils.smoothstep(t,.12,.60)};
    if(phase==='transfer')return{pos:berth,yaw:-Math.PI/2};
    if(phase==='depart')return{pos:interpolate(berth,exit,t),yaw:-Math.PI/2*(1-THREE.MathUtils.smoothstep(t,.20,.82))};
    return{pos:exit,yaw:0};
  }
  function moveCargo(v,phase,t){
    if(!v.cargo)return;
    if(phase==='offshore'){v.cargo.visible=false;return;}
    v.cargo.visible=true;
    if(!v.transferDone&&(phase==='approach'||phase==='berth')){v.cargo.position.copy(localToWorld(v,new THREE.Vector3(-1.05,1.35,0)));return;}
    if(phase==='transfer'){
      const start=localToWorld(v,new THREE.Vector3(-1.0,1.36,0));
      const hook=new THREE.Vector3(63.4,5.45,v.slotZ);
      const destination=storagePosition(counters.containersMoved,v.slotZ);
      const p=t<.5?interpolate(start,hook,t*2):interpolate(hook,destination,(t-.5)*2);
      v.cargo.position.copy(p);
      const crane=cranes.reduce((best,c)=>Math.abs(c.homeZ-v.slotZ)<Math.abs(best.homeZ-v.slotZ)?c:best,cranes[0]);
      v.crane=crane;crane.busy=true;
      const trolleyX=THREE.MathUtils.clamp(p.x-crane.root.position.x,0,8.8),localZ=p.z-crane.root.position.z,localY=p.y;
      crane.trolley.position.set(trolleyX,9.25,localZ);
      const cableLength=Math.max(.6,10.35-localY);
      for(const cable of crane.ropes){cable.position.x=trolleyX+cable.userData.ropeOffset.x;cable.position.z=localZ+cable.userData.ropeOffset.z;cable.scale.y=cableLength;cable.position.y=(10.35+localY)/2;}
      crane.spreader.position.set(trolleyX,localY+.40,localZ);
      return;
    }
    if(v.transferDone){return;}
    v.cargo.position.copy(localToWorld(v,new THREE.Vector3(-1.0,1.36,0)));
  }
  function removeVessel(v){
    world.remove(v.root);for(const resource of v.ownedResources){resource.geometry.dispose();resource.material.dispose();}if(v.cargo){world.remove(v.cargo);v.cargo.geometry.dispose();}
    const index=vessels.indexOf(v);if(index>=0)vessels.splice(index,1);
  }
  function tickVessel(v,time,dt,bridges){
    const old=v.phase;
    if(v.phase==='approach'){
      v.phaseElapsed+=dt;
      const nextCrossing=v.riverRoute.crossings.find(c=>c.distance>=v.routeDistance-.001);
      let target=Math.min(v.riverRoute.length,v.routeDistance+v.routeSpeed*dt);
      const entryDistance=Math.max(0,(v.riverRoute.crossings[0]?.distance??24)-14);
      if(!v.hasRiverReservation&&target>=entryDistance){
        if(activeRiverReservation===null||activeRiverReservation===v.id){activeRiverReservation=v.id;v.hasRiverReservation=true;}
        else target=Math.min(target,entryDistance-8);
      }
      if(nextCrossing){
        const shipLength=vesselLength[v.kind];
        const clearance=bridges?.shipStopClearance?.(nextCrossing.x,shipLength)??shipLength/2+.85;
        const stopAt=Math.max(v.routeDistance,nextCrossing.distance-clearance);
        const wants=target>=nextCrossing.distance-14;
        if(wants&&bridges?.canShipPass&&!bridges.canShipPass(nextCrossing.x)&&target>stopAt)target=stopAt;
      }
      const candidatePose=v.riverRoute.curve.getPointAt(THREE.MathUtils.clamp(target/v.riverRoute.length,0,1));
      const minimumGap=(vesselLength[v.kind]+5.4)/2+.6;
      for(const other of vessels){
        if(other===v||other.phase!=='approach')continue;
        const gap=Math.hypot(candidatePose.x-other.root.position.x,candidatePose.z-other.root.position.z);
        if(gap<minimumGap&&(v.routeDistance<other.routeDistance||(Math.abs(v.routeDistance-other.routeDistance)<.01&&v.id>other.id))){target=v.routeDistance;v.waitingFor=other.id;break;}
      }
      v.routeDistance=target;
      if(v.routeDistance>=v.riverRoute.length-.03){v.phase='berth';v.phaseElapsed=0;if(activeRiverReservation===v.id)activeRiverReservation=null;v.hasRiverReservation=false;if(v.kind==='cargo')counters.cargoArrivals++;else counters.ferryArrivals++;}
    }else{
      v.phaseElapsed+=dt;
      if(v.phase==='berth'&&v.phaseElapsed>=durations.berth){v.phase='transfer';v.phaseElapsed=0;}
      else if(v.phase==='transfer'&&v.phaseElapsed>=durations.transfer){v.phase='depart';v.phaseElapsed=0;if(v.kind==='cargo'){counters.cargoDepartures++;if(v.cargo){v.cargo.position.copy(storagePosition(counters.containersMoved,v.slotZ));droppedCargo.push(v.cargo);v.cargo=null;v.transferDone=true;counters.containersMoved++;}}else counters.ferryDepartures++;}
      else if(v.phase==='depart'&&v.phaseElapsed>=durations.depart){v.phase='offshore';v.phaseElapsed=0;}
      else if(v.phase==='offshore'&&v.dispatched&&v.queuedDispatch&&!vessels.some(other=>other!==v&&other.phase!=='offshore')){v.phase='approach';v.phaseElapsed=0;v.routeDistance=0;v.queuedDispatch=false;}
      else if(v.phase==='offshore'&&v.phaseElapsed>=durations.offshore&&!vessels.some(other=>other!==v&&other.phase!=='offshore')){v.phase='approach';v.phaseElapsed=0;v.routeDistance=0;if(v.kind==='cargo'&&!v.cargo){v.cargo=newCargoCrate();v.transferDone=false;}}
    }
    const phase=v.phase,t=THREE.MathUtils.clamp(v.phaseElapsed/(durations[phase]||1),0,1),pose=routePosition(v,phase,t);
    if(phase!=='transfer'&&v.crane){v.crane.busy=false;v.crane=null;}
    v.root.visible=phase!=='offshore'||(!v.dispatched&&v.kind==='ferry');v.root.position.copy(pose.pos);v.root.position.y=.36+Math.sin(time*1.7+v.phaseOffset)*.025;v.root.rotation.y=pose.yaw;
    v.root.userData.phase=phase;v.root.userData.progress=t;moveCargo(v,phase,t);
    v.root.userData.routeDistance=v.routeDistance;
    return v.dispatched&&phase==='offshore'&&old==='depart';
  }
  function animateCranes(time){for(let i=0;i<cranes.length;i++){const c=cranes[i];if(!c.busy){c.trolley.position.x=4.2+Math.sin(time*.42+i*.8)*1.1;c.spreader.position.x=c.trolley.position.x;for(const cable of c.ropes)cable.position.x=c.trolley.position.x+cable.userData.ropeOffset.x;}}}
  function update(elapsed=0,{bridges}={}){
    if(disposed||!Number.isFinite(elapsed))return;
    if(bridges)bridgeController=bridges;
    latestWallElapsed=Math.max(0,elapsed);
    if(lastWallElapsed===null)lastWallElapsed=latestWallElapsed;
    const delta=Math.max(0,latestWallElapsed-lastWallElapsed);lastWallElapsed=latestWallElapsed;
    const retire=[];
    if(!paused){let remaining=delta;while(remaining>1e-9){const step=Math.min(.05,remaining);simTime+=step;for(const v of [...vessels])if(tickVessel(v,simTime,step,bridges))retire.push(v);remaining-=step;}}
    for(const v of retire)removeVessel(v);
    animateCranes(simTime);
    pilotBoats.forEach((boat,i)=>{const a=simTime*.23+i*Math.PI;boat.position.set(78+Math.cos(a)*2.2,.34,Math.sin(a)*2.2);boat.rotation.y=-a;});
  }
  function snapshot(){
    const active=vessels.map(v=>{const p=v.root.position,next=v.phase==='approach'?v.riverRoute.crossings.find(c=>c.distance>=v.routeDistance-.001):null,wants=next&&next.distance-v.routeDistance<14,clearance=next?(bridgeController?.shipStopClearance?.(next.x,vesselLength[v.kind])??vesselLength[v.kind]/2+.85):0;return{id:v.id,name:v.kind==='cargo'?'Container ship':'Ro-Ro ferry',type:v.kind,phase:v.phase,berth:v.phase==='berth'||v.phase==='transfer',progress:Number(v.root.userData.progress||0),slot:v.slotZ,x:p.x,z:p.z,length:vesselLength[v.kind],width:vesselWidth,heading:v.root.rotation.y,headingAxis:'x',riverTransit:v.phase==='approach',routeDistance:v.routeDistance,routeLength:v.riverRoute.length,bridgePassCount:v.riverRoute.crossings.length,nextBridgeX:wants?next.x:null,nextBridgeStopDistance:next?Math.max(0,next.distance-clearance):null,requestedBridges:wants?[next.x]:[],sternClearOfBridge:next?Math.abs(p.x-next.x)>clearance:false};});
    return{paused,status:paused?'Paused':'Operating',time:simTime,vessels:active,activeVessels:active,berthCount:active.filter(v=>v.berth).length,containersMoved:counters.containersMoved,completedCargo:counters.cargoDepartures,completedFerries:counters.ferryDepartures,arrivals:counters.cargoArrivals+counters.ferryArrivals,departures:counters.cargoDepartures+counters.ferryDepartures,cargo:{arrivals:counters.cargoArrivals,departures:counters.cargoDepartures},ferry:{arrivals:counters.ferryArrivals,departures:counters.ferryDepartures},cranes:cranes.length,terminal:'Illustrative local port simulation'};
  }
  function dispatch(action){
    const type=typeof action==='string'?action:action?.type;
    if(type==='pause'){paused=true;return{...snapshot(),message:'Port simulation paused.'};}
    if(type==='resume'){paused=false;return{...snapshot(),message:'Port simulation resumed.'};}
    if(type==='dispatch-cargo'||type==='dispatch-ferry'){
      const slot=slotValues.find(z=>!vessels.some(v=>v.slotZ===z));
      if(slot===undefined)return{ok:false,message:'All safe approach and berth lanes are occupied. Wait for a dispatched vessel to depart.'};
      const kind=type==='dispatch-cargo'?'cargo':'ferry',id=`${kind}-dispatch-${++dispatchSequence}`;
      const phaseOffset=((totalCycle*.90-simTime)%totalCycle+totalCycle)%totalCycle;
      const vessel=makeVessel(kind,id,slot,phaseOffset,true);vessel.phase='offshore';vessel.root.visible=false;vessel.queuedDispatch=true;tickVessel(vessel,simTime,0,null);
      return{ok:true,message:`${kind==='cargo'?'Cargo ship':'Ferry'} queued in a clear approach lane.`,dispatched:id,...snapshot()};
    }
    if(type==='reset'){
      bridgeController?.reset?.();
      bridgeController?.update?.(0,{ships:[],vehicles:[]});
      for(const v of [...vessels])if(v.dispatched)removeVessel(v);
      for(const item of droppedCargo){world.remove(item);item.geometry.dispose();}droppedCargo.length=0;
      for(const key of Object.keys(counters))counters[key]=0;
      paused=false;simTime=0;lastWallElapsed=latestWallElapsed;
      activeRiverReservation=null;
      vessels.forEach(v=>{v.phaseOffset=v.kind==='cargo'?0:21;v.phase=v.kind==='ferry'?'offshore':'approach';v.phaseElapsed=0;v.routeDistance=0;v.hasRiverReservation=false;v.transferDone=false;v.crane=null;if(v.kind==='cargo'&&!v.cargo)v.cargo=newCargoCrate();if(v.cargo)v.cargo.visible=true;tickVessel(v,0,0,bridgeController);});
      activeRiverReservation=null;
      update(latestWallElapsed);return{...snapshot(),message:'Port simulation reset to its safe starting state.'};
    }
    return{ok:false,message:'Unknown Dublin Port control.',available:['pause','resume','dispatch-cargo','dispatch-ferry','reset']};
  }
  function resetTimeline(){
    dispatch('reset');simTime=0;latestWallElapsed=0;lastWallElapsed=0;update(0);
    return snapshot();
  }
  function audit(){
    world.updateMatrixWorld(true);
    const groundIssues=[];
    world.traverse(object=>{
      if(!object.isMesh||(!object.name.startsWith('Container stack')&&object.name!=='Gantry crane leg'))return;
      const bounds=new THREE.Box3().setFromObject(object);
      const corners=[[bounds.min.x,bounds.min.z],[bounds.min.x,bounds.max.z],[bounds.max.x,bounds.min.z],[bounds.max.x,bounds.max.z]];
      if(bounds.min.y<land.topY-.015||!corners.every(([x,z])=>groundY(x,z)!==undefined)||bounds.min.x<land.minX||bounds.max.x>land.maxX||bounds.min.z<land.minZ||bounds.max.z>land.maxZ)groundIssues.push({name:object.name,bounds});
    });
    const boxes=vessels.filter(v=>v.root.visible).map(v=>({id:v.id,slotZ:v.slotZ,bounds:new THREE.Box3().setFromObject(v.root),phase:v.phase}));
    const landIntrusions=boxes.filter(({bounds})=>bounds.min.x<land.maxX&&bounds.max.x>land.minX&&land.platforms.some(platform=>bounds.min.z<platform.maxZ&&bounds.max.z>platform.minZ)).map(v=>v.id);
    const overlaps=[];for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++)if(boxes[i].bounds.intersectsBox(boxes[j].bounds))overlaps.push([boxes[i].id,boxes[j].id]);
    const hullLandIssues=[];
    const isNavigable=(x,z)=>((x>=-78&&x<=40&&Math.abs(z)<=2.25)||(x>=40&&x<=62.5&&Math.abs(z)<=3)||(x>=62.5&&x<=96&&Math.abs(z)<=17)||Math.hypot(x+68,z)<6);
    for(const v of vessels.filter(v=>v.root.visible)){
      v.root.updateWorldMatrix(true,false);
      const samples=[];
      for(let t=-1;t<=1.001;t+=.2)for(const sz of [-1,1])samples.push(new THREE.Vector3(t*vesselLength[v.kind]/2,.38,sz*vesselWidth/2));
      for(let t=-1;t<=1.001;t+=.2)for(const sx of [-1,1])samples.push(new THREE.Vector3(sx*vesselLength[v.kind]/2,.38,t*vesselWidth/2));
      for(const local of samples){const point=v.root.localToWorld(local);if(!isNavigable(point.x,point.z)){hullLandIssues.push({id:v.id,x:point.x,z:point.z,phase:v.phase});}}
    }
    const channelObstacles=[];world.traverse(object=>{if(object.isMesh&&(object.name.startsWith('Harbour breakwater block')||object.name==='Breakwater beacon'))channelObstacles.push({name:object.name,bounds:new THREE.Box3().setFromObject(object)});});
    const obstacleCollisions=[];for(const vessel of boxes)for(const obstacle of channelObstacles)if(vessel.bounds.intersectsBox(obstacle.bounds))obstacleCollisions.push([vessel.id,obstacle.name]);
    const channelIntrusions=[];
    const allowed=new Set(['Port service bridge deck','Port service bridge roadway','Port bridge side rail','Port bridge footway','South port bridge access ramp','North port bridge access ramp','Port bridge ramp roadway','Port bridge ramp footway','Port bridge ramp handrail post','North quay lane marking']);
    world.traverse(object=>{let ancestor=object;while(ancestor&&ancestor!==world&&!ancestor.name.startsWith('Container ship')&&!ancestor.name.startsWith('Ro-Ro ferry'))ancestor=ancestor.parent;const isMovingVessel=ancestor!==world&&(ancestor.name.startsWith('Container ship')||ancestor.name.startsWith('Ro-Ro ferry'));if(!object.isMesh||isMovingVessel||object.name.toLowerCase().includes('water')||object.name==='Outer port basin'||object.name==='Basin water surface'||allowed.has(object.name)||['Crane trolley','Crane hoist cable','Crane container spreader','Active cargo transfer container'].includes(object.name))return;const b=new THREE.Box3().setFromObject(object);if(b.max.x>land.minX&&b.min.x<land.maxX&&b.max.z>-land.channelHalfWidth&&b.min.z<land.channelHalfWidth&&b.max.y>.30)channelIntrusions.push(object.name);});
    const activeVessels=vessels.filter(v=>v.root.visible),routeGaps=[];for(let i=0;i<activeVessels.length;i++)for(let j=i+1;j<activeVessels.length;j++){const a=activeVessels[i],b=activeVessels[j];if(a.phase==='approach'&&b.phase==='approach')routeGaps.push({a:a.id,b:b.id,distance:Math.hypot(a.root.position.x-b.root.position.x,a.root.position.z-b.root.position.z),required:(vesselLength[a.kind]+vesselLength[b.kind])/2+.6});}
    return{groundIssues,channelIntrusions,landIntrusions,vesselOverlaps:overlaps,obstacleCollisions,hullLandIssues,routeFollowingGaps:routeGaps,vessels:boxes.map(v=>({id:v.id,slotZ:v.slotZ,clearance:v.bounds.min.x-land.maxX,phase:vessels.find(x=>x.id===v.id)?.phase})),safeLaneSlots:slotValues.slice()};
  }
  function groundY(x,z){
    if(!Number.isFinite(x)||!Number.isFinite(z))return undefined;
    if(x>=bridgeX-bridgeHalfWidth&&x<=bridgeX+bridgeHalfWidth){const az=Math.abs(z);if(az<=3)return bridgeController?bridgeController.roadSurfaceY?.(x,z):bridgeSurfaceY;if(az<=rampEndZ)return bridgeSurfaceY-(az-3)*((bridgeSurfaceY-land.topY)/(rampEndZ-3));}
    const terminal=x>=land.minX&&x<=land.maxX&&land.platforms.some(p=>z>=p.minZ&&z<=p.maxZ);
    const eastApproach=x>=29.5&&x<=44.3&&z>=28.3&&z<=33.7;
    const gateApproach=x>=40.2&&x<=44.6&&z>=14.5&&z<=33;
    return terminal||eastApproach||gateApproach?land.topY:undefined;
  }
  function isLand(x,z){
    return groundY(x,z)!==undefined;
  }
  function dispose(){disposed=true;for(const v of [...vessels])removeVessel(v);for(const cargo of droppedCargo){world.remove(cargo);cargo.geometry.dispose();}droppedCargo.length=0;}
  world.userData={placeId:'dubPort',simulation:'local-illustrative',metrics:{quays:2,riverMouthWidth:land.channelHalfWidth*2,shipToShoreCranes:cranes.length,containerStacks:stackCount,railSidings:2,breakwaterArms:2,accessRoads:1,pilotAndTugVessels:pilotBoats.length,landBounds:land}};
  vessels.forEach(v=>tickVessel(v,0,0,null));
  update(0);
  return{world,places,update,snapshot,dispatch,resetTimeline,dispose,isLand,groundY,audit};
}
