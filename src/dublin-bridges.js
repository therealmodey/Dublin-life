import * as THREE from 'three';

export const DUBLIN_DRAWBRIDGE_XS=Object.freeze([-28,-18,-5,2,18,30,42.4]);
const RIVER_HALF_WIDTH=2.25, DECK_Y=.523, GATE_CLEAR_Z=4.1;
const PHASE_SECONDS={gate:1.0,raise:2.0,lower:2.0,release:.45};

/** Seven independently signalled, animated river spans for the local Dublin explorer. */
export function buildDublinBridges({textSurface}={}) {
  const world=new THREE.Group();world.name='Dublin operating drawbridges';
  const materials={deck:new THREE.MeshStandardMaterial({color:'#41494b',roughness:.76}),steel:new THREE.MeshStandardMaterial({color:'#667276',roughness:.62,metalness:.35}),concrete:new THREE.MeshStandardMaterial({color:'#aaa69a',roughness:.94}),white:new THREE.MeshStandardMaterial({color:'#eee9df',roughness:.8}),red:new THREE.MeshStandardMaterial({color:'#bb473c',roughness:.7}),green:new THREE.MeshStandardMaterial({color:'#4b845d',roughness:.7}),amber:new THREE.MeshStandardMaterial({color:'#e2bb53',roughness:.7}),dark:new THREE.MeshStandardMaterial({color:'#30393b',roughness:.8}),light:new THREE.MeshStandardMaterial({color:'#ebc75f',emissive:'#70571d',roughness:.45})};
  const box=new THREE.BoxGeometry(1,1,1),cylinder=new THREE.CylinderGeometry(.06,.06,1,8);
  function block(parent,x,y,z,w,h,d,mat,name){const mesh=new THREE.Mesh(box,materials[mat]||mat);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.name=name;mesh.castShadow=h>.12;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  const spans=[];
  for(const [index,x] of DUBLIN_DRAWBRIDGE_XS.entries()){
    const span=new THREE.Group();span.name=`Drawbridge ${index+1} at x=${x}`;world.add(span);
    const riverHalfWidth=x===42.4?3:RIVER_HALF_WIDTH,deckLength=riverHalfWidth*2,leafWidth=x===42.4?2.8:1.12;
    const hinge=new THREE.Group();hinge.position.set(x,DECK_Y-.08,-riverHalfWidth);hinge.name='Moving drawbridge hinge';span.add(hinge);
    const bridgeState={x,index,hinge,riverHalfWidth,deckLength,leafWidth,signals:[],signalAspects:[],arms:[],phase:'closed',phaseTime:0,requests:[],vehiclesOnDeck:[],shipsOnDeck:[],open:false,roadClosed:false};spans.push(bridgeState);
    block(hinge,0,0,deckLength/2,leafWidth,.16,deckLength,'deck','Moving road deck leaf');
    block(hinge,0,.077,deckLength/2,x===42.4?1.55:1.0,.006,deckLength,'dark','Moving asphalt deck surface');
    block(hinge,0,.084,deckLength/2,.035,.008,deckLength*.78,'white','Moving bridge center marking');
    for(const side of [-1,1]){
      const railX=side*(leafWidth/2-.12);
      block(hinge,railX,.42,deckLength/2,.09,.68,deckLength,'steel','Moving span parapet');
      for(let z=.22;z<deckLength;z+=.34)block(hinge,railX,.31,z,.075,.13,.045,'white','Bridge parapet baluster');
      // Hinges, counterweight housings and access plate are built on the bank.
      const journal=new THREE.Mesh(cylinder,materials.steel);journal.position.set(x+side*.69,.50,-RIVER_HALF_WIDTH);journal.name='Drawbridge trunnion';world.add(journal);
      block(world,x+side*.92,.39,-RIVER_HALF_WIDTH, .34,.28,.9,'concrete','Drawbridge abutment cheek');
    }
    // Bank-side machinery and hydraulic rams remain outside the navigation envelope.
    const actuator=new THREE.Mesh(new THREE.CylinderGeometry(.075,.11,2.1,8),materials.steel);actuator.position.set(x+.83,.74,-riverHalfWidth-.75);actuator.rotation.x=-.65;actuator.name='Bank-mounted hydraulic drawbridge ram';span.add(actuator);
    for(const side of [-1,1]){
      for(const z of [-GATE_CLEAR_Z,GATE_CLEAR_Z]){
        const signal=new THREE.Group();signal.name='Bridge signal and barrier';signal.position.set(x+side*.96,.36,z);world.add(signal);
        const mast=new THREE.Mesh(cylinder,materials.dark);mast.position.y=.85;mast.scale.y=1.7;mast.name='Bridge signal mast';signal.add(mast);
        block(signal,0,1.65,0,.31,.43,.27,'dark','Bridge signal head');
        const aspectMaterial=new THREE.MeshStandardMaterial({color:'#bb473c',emissive:'#571a17',roughness:.45});const aspect=new THREE.Mesh(new THREE.SphereGeometry(.105,12,8),aspectMaterial);aspect.position.set(0,1.68,.145);aspect.name='Bridge signal aspect';signal.add(aspect);bridgeState.signalAspects.push(aspect);
        const armPivot=new THREE.Group();armPivot.position.set(side*-.18,.95,0);armPivot.name='Road barrier pivot';signal.add(armPivot);
        armPivot.rotation.z=-side*1.48;
        block(armPivot,-side*.375,0,0,.75,.085,.085,'white','Operating road barrier arm');
        for(let stripe=0;stripe<3;stripe++)block(armPivot,side*(-.08-stripe*.22),.046,0,.12,.025,.09,'red','Barrier arm red reflective band');
        bridgeState.signals.push(signal);bridgeState.arms.push({pivot:armPivot,side});
      }
    }
    // Span-side plates and fixed navigation lights are placed beyond the channel edge.
    for(const side of [-1,1]){
      const fender=block(world,x, .26, side*(riverHalfWidth+.7),1.45,.48,.55,'concrete','Bridge-bank fender');
      void fender;
      for(const z of [-(riverHalfWidth+.35),riverHalfWidth+.35]){block(world,x+side*.86,.78,z,.14,.58,.14,'steel','Drawbridge navigation beacon');block(world,x+side*.86,1.11,z,.24,.13,.24,'amber','Amber bridge beacon');}
    }
    if(typeof textSurface==='function')textSurface('DRAWBRIDGE','#f0eadb',1.25,world,x,2.42,5.15,false,'#41494b');
  }
  let lastTime=null,latestTime=0,disposed=false;
  function shipOverDeck(ship,bridgeX){
    if(!ship?.riverTransit||!Number.isFinite(ship.x)||!Number.isFinite(ship.z))return false;
    const heading=ship.heading??0,halfLength=(ship.length??5.4)/2,halfWidth=(ship.width??1.35)/2;
    const dx=Math.abs(ship.x-bridgeX),dz=Math.abs(ship.z);
    const alongX=ship.headingAxis==='x'?true:ship.headingAxis==='z'?false:Math.abs(Math.sin(heading))>.7;
    const along=alongX?dx:dz,across=alongX?dz:dx;
    const span=spans.find(s=>Math.abs(s.x-bridgeX)<.02);
    // The leaf spans the channel in Z, so its finite length on the vessel's
    // travel axis is the leaf's X width. Keep the span open until the entire
    // hull plus a small clearance has passed that footprint.
    return along<=halfLength+(span?.leafWidth??1.12)/2+.18&&across<=(span?.riverHalfWidth??RIVER_HALF_WIDTH)+halfWidth;
  }
  function vehicleOverDeck(car,bridgeX){
    const span=spans.find(s=>Math.abs(s.x-bridgeX)<.02);
    if(!span||!Number.isFinite(car?.x)||!Number.isFinite(car?.z))return false;
    return Math.abs(car.x-bridgeX)<=(span.leafWidth+(car.width??.7))/2&&Math.abs(car.z)<=span.riverHalfWidth+(car.length??2.45)/2;
  }
  function vehiclesOnDeck(vehicles,bridgeX){return vehicles.filter(car=>vehicleOverDeck(car,bridgeX));}
  function setPhase(span,phase){span.phase=phase;span.phaseTime=0;}
  function step(dt,ships,vehicles){
    for(const span of spans){
      const requests=ships.filter(ship=>ship.riverTransit&&((ship.requestedBridges||[]).some(x=>Math.abs(x-span.x)<.02)||Math.abs(ship.nextBridgeX-span.x)<.02));
      const onDeck=ships.filter(ship=>shipOverDeck(ship,span.x));
      const cars=vehiclesOnDeck(vehicles,span.x);
      span.requests=requests.map(s=>s.id);span.shipsOnDeck=onDeck.map(s=>s.id);span.vehiclesOnDeck=cars.map(s=>s.id);
      const wantOpen=requests.length>0||onDeck.length>0;
      span.phaseTime+=dt;
      if(span.phase==='closed'&&wantOpen)setPhase(span,'gate');
      else if(span.phase==='gate'&&span.phaseTime>=PHASE_SECONDS.gate)setPhase(span,'clearing');
      else if(span.phase==='clearing'&&cars.length===0)setPhase(span,'raising');
      else if(span.phase==='raising'&&span.phaseTime>=PHASE_SECONDS.raise){span.phase='open';span.phaseTime=0;}
      else if(span.phase==='open'&&!wantOpen&&onDeck.length===0)setPhase(span,'lowering');
      else if(span.phase==='lowering'&&(wantOpen||onDeck.length)){setPhase(span,'raising');}
      else if(span.phase==='lowering'&&span.phaseTime>=PHASE_SECONDS.lower)setPhase(span,'release');
      else if(span.phase==='release'&&wantOpen)setPhase(span,'gate');
      else if(span.phase==='release'&&span.phaseTime>=PHASE_SECONDS.release){span.phase='closed';span.phaseTime=0;}
      span.open=span.phase==='open';span.roadClosed=span.phase!=='closed';
      const duration=span.phase==='gate'?PHASE_SECONDS.gate:span.phase==='raising'?PHASE_SECONDS.raise:span.phase==='lowering'?PHASE_SECONDS.lower:span.phase==='release'?PHASE_SECONDS.release:1;
      const progress=span.phase==='open'||span.phase==='clearing'?1:THREE.MathUtils.clamp(span.phaseTime/duration,0,1);
      const angle=span.phase==='open'?1.48:span.phase==='raising'?1.48*progress:span.phase==='lowering'?1.48*(1-progress):0;
      // Leaf rises toward the north bank, clearing the full vessel hull and mast envelope.
      span.hinge.rotation.x=-angle;
      span.hinge.userData.angle=angle;
      span.signalAspects.forEach(aspect=>{
        const red=['gate','clearing','raising','open','lowering'].includes(span.phase);
        aspect.material.color.set(red?'#c5473f':'#4d8759');aspect.material.emissive.set(red?'#571a17':'#173b22');
      });
      span.arms.forEach(({pivot,side})=>{
        const armAngle=span.phase==='closed'?-side*1.48:span.phase==='gate'?-side*1.48*(1-progress):span.phase==='release'?-side*1.48*progress:0;
        pivot.rotation.z=armAngle;
      });
      span.userData={phase:span.phase,angle,open:span.open,roadClosed:span.roadClosed};
    }
  }
  function update(elapsedSeconds=0,{ships=[],vehicles=[]}={}){
    if(disposed)return snapshot();
    const time=Number.isFinite(elapsedSeconds)?Math.max(0,elapsedSeconds):0;latestTime=time;
    if(lastTime===null||time<lastTime){for(const span of spans){span.phase='closed';span.phaseTime=0;span.hinge.rotation.x=0;span.hinge.userData.angle=0;span.open=false;span.roadClosed=false;span.requests=[];span.shipsOnDeck=[];span.vehiclesOnDeck=[];span.signalAspects.forEach(a=>{a.material.color.set('#4d8759');a.material.emissive.set('#173b22');});span.arms.forEach(({pivot,side})=>pivot.rotation.z=-side*1.48);}lastTime=time;step(0,ships,vehicles);return snapshot();}
    let remaining=time-lastTime;
    // Bounded replay keeps a seek deterministic and cannot skip a gate or vessel clearance phase.
    while(remaining>1e-9){const dt=Math.min(.05,remaining);step(dt,ships,vehicles);remaining-=dt;}
    step(0,ships,vehicles);
    lastTime=time;return snapshot();
  }
  function snapshot(){return{timeSeconds:latestTime,spans:spans.map(s=>({x:s.x,state:s.phase,progress:s.phaseTime,open:s.open,roadClosed:s.roadClosed,requests:[...s.requests],vehiclesOnDeck:[...s.vehiclesOnDeck],shipsOnDeck:[...s.shipsOnDeck],deckAngle:s.hinge.userData.angle||0}))};}
  function spanAt(x,z){return spans.find(s=>Math.abs(x-s.x)<.72&&Math.abs(z)<GATE_CLEAR_Z+.2);}
  function signalAt(x,z){const span=spans.find(s=>Math.abs(x-s.x)<.78&&Math.abs(z)<GATE_CLEAR_Z+1.35);if(!span||!span.roadClosed)return'green';return'red';}
  function isOpen(x){return spans.find(s=>Math.abs(s.x-x)<.02)?.open===true;}
  function canShipPass(x){return isOpen(x);}
  function shipStopClearance(x,length=5.4){const span=spans.find(s=>Math.abs(s.x-x)<.02);return length/2+(span?.leafWidth??1.12)/2+.25;}
  function isVehicleOnDeck(car){return spans.some(span=>vehicleOverDeck(car,span.x));}
  function roadSurfaceY(x,z){const span=spanAt(x,z);if(!span||Math.abs(z)>span.riverHalfWidth)return undefined;return (span.hinge.userData.angle||0)<.001?DECK_Y:undefined;}
  function isLand(x,z){return roadSurfaceY(x,z)!==undefined;}
  function reset(){lastTime=0;latestTime=0;for(const span of spans){span.phase='closed';span.phaseTime=0;span.hinge.rotation.x=0;span.hinge.userData.angle=0;span.open=false;span.roadClosed=false;span.requests=[];span.shipsOnDeck=[];span.vehiclesOnDeck=[];span.signalAspects.forEach(a=>{a.material.color.set('#4d8759');a.material.emissive.set('#173b22');});span.arms.forEach(({pivot,side})=>pivot.rotation.z=-side*1.48);}}
  function dispose(){disposed=true;world.removeFromParent();world.clear();for(const span of spans)for(const aspect of span.signalAspects)aspect.material.dispose();for(const mat of Object.values(materials))mat.dispose();box.dispose();cylinder.dispose();}
  world.userData={simulation:'illustrative-operating-drawbridges',spanXs:[...DUBLIN_DRAWBRIDGE_XS],channelHalfWidth:RIVER_HALF_WIDTH,deckY:DECK_Y};
  reset();
  return{world,update,snapshot,signalAt,isOpen,canShipPass,shipStopClearance,vehicleOverDeck,isVehicleOnDeck,roadSurfaceY,isLand,reset,dispose};
}
