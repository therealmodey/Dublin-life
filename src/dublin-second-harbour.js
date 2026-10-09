import * as THREE from 'three';

const WATER={minX:69.3,maxX:94.5,minZ:-55.5,maxZ:-18.5};
const HARBOUR_SHIFT_Z=-9;
const SLOTS=[-46.5,-40,-33.5,-27];

/** Compact illustrative Howth Fishery Harbour and marina, separate from Dublin Port. */
export function buildDublinSecondHarbour({textSurface}={}){
  const world=new THREE.Group();world.name='Howth Harbour interpretation';world.position.z=HARBOUR_SHIFT_Z;
  const mat=(color,roughness=.86,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
  const m={land:mat('#777e67'),quay:mat('#aaa79d'),concrete:mat('#b9b4a8'),stone:mat('#8c918c'),water:mat('#315e76',.34),white:mat('#eee9df'),red:mat('#b64740'),blue:mat('#376884'),yellow:mat('#e6bd5c'),steel:mat('#667277',.62,.32),green:mat('#4e8063'),dark:mat('#394143')};
  const box=new THREE.BoxGeometry(1,1,1),cylinder=new THREE.CylinderGeometry(1,1,1,12);
  const extraMaterials=[],fixedHarbourSolids=[];
  function block(parent,x,y,z,w,h,d,color,name,ry=0){const o=new THREE.Mesh(box,m[color]||color);o.name=name;o.position.set(x,y,z);o.scale.set(w,h,d);o.rotation.y=ry;o.castShadow=h>.13;o.receiveShadow=true;parent.add(o);if(parent===world&&x>68)fixedHarbourSolids.push(o);return o;}
  function post(parent,x,y,z,r,h,color,name){const o=new THREE.Mesh(cylinder,m[color]||color);o.name=name;o.position.set(x,y,z);o.scale.set(r,h,r);parent.add(o);if(parent===world&&x>68)fixedHarbourSolids.push(o);return o;}
  // Reclaimed west shore and quay are land; the distinct harbour basin begins at x=69.3.
  // Keep the reclaimed apron fully west of the water plane; its eastern edge is x=69.
  block(world,64.05,.16,-36.8,9.9,.30,33.5,'land','Howth west quay apron');
  block(world,68.66,.34,-36.8,.60,.34,33.5,'concrete','Howth quay coping');
  const waterMesh=new THREE.Mesh(new THREE.PlaneGeometry(WATER.maxX-WATER.minX,WATER.maxZ-WATER.minZ),m.water);
  waterMesh.name='Howth harbour water';waterMesh.rotation.x=-Math.PI/2;waterMesh.position.set((WATER.minX+WATER.maxX)/2,.17,(WATER.minZ+WATER.maxZ)/2);world.add(waterMesh);
  // North and south breakwaters shelter the inner basin, leaving a generous eastern entrance.
  for(const [side,z] of [['north',-53.5],['south',-21]]){
    for(let x=70.2;x<94.5;x+=1.32)block(world,x,.24,z,1.38,.58,1.36,'stone',`${side} rock-armour breakwater block`,side==='north'?-.035:.035);
    for(let x=72;x<94;x+=4.4)post(world,x,.74,z,.11,.44,side==='north'?'red':'green',`${side} breakwater navigation beacon`);
  }
  for(let z=-53;z<-43;z+=1.35)block(world,94.3,.24,z,1.35,.58,1.38,'stone','East breakwater north arm');
  for(let z=-32;z<-21;z+=1.35)block(world,94.3,.24,z,1.35,.58,1.38,'stone','East breakwater south arm');
  // Four working piers give each small vessel an individual berth and fender line.
  for(let i=0;i<SLOTS.length;i++){
    const z=SLOTS[i];block(world,72.5,.34,z,7.9,.32,.82,'concrete',`Fishing and marina pier ${i+1}`);
    for(let x=69.1;x<=76.1;x+=1.45){post(world,x,.65,z-.39,.065,.52,'steel','Pier light standard');post(world,x,.65,z+.39,.065,.52,'steel','Pier light standard');}
    for(const x of [69.1,76.2])for(const side of [-1,1])post(world,x,.43,z+side*.42,.18,.38,'dark','Pier fender');
    for(const x of [70.4,73.3,76.0])post(world,x,.58,z,.12,.33,'yellow','Harbour mooring bollard');
  }
  // Compact harbour identity buildings and practical fishing facilities on reclaimed land.
  block(world,63.4,.82,-47.1,4.3,1.24,3.3,'white','Howth fish auction hall');
  block(world,63.4,1.49,-47.1,4.55,.14,3.55,'red','Fish market roof');
  for(const x of [61.65,62.45,63.25,64.05,64.85])block(world,x,.81,-45.4,.36,.78,.035,'blue','Fish market glazed frontage');
  block(world,63.5,.80,-40.9,3.4,1.2,2.4,'concrete','Harbour master office');
  block(world,63.5,1.45,-40.9,3.6,.12,2.6,'steel','Harbour master roof');
  block(world,63.6,.65,-34.6,3.7,.9,2.6,'white','Ice and gear shed');
  block(world,63.6,1.14,-34.6,3.9,.12,2.8,'blue','Ice shed roof');
  block(world,63.5,.78,-28.3,4.2,1.12,3,'white','Marina and sailing club');
  block(world,63.5,1.39,-28.3,4.45,.12,3.2,'blue','Sailing club roof');
  for(const z of [-48.7,-43.3,-37.7,-31.8,-25.2])for(const x of [60.2,67.5])post(world,x,.58,z,.055,.52,'yellow','Quayside lamp');
  for(const z of [-49.6,-46.4,-43.2,-40,-36.8,-33.6,-30.4,-27.2,-24])block(world,66,.33,z,.035,.015,.72,'yellow','Quay edge marking');
  // East Pier head light and attached keeper's house, seated on the actual breakwater head.
  block(world,94.3,.32,-21.5,1.42,.64,1.50,'concrete','East breakwater lighthouse plinth');
  const lighthouse=new THREE.Group();lighthouse.name='Howth East Pier lighthouse and keeper house';lighthouse.position.set(94.3,.64,-21.5);world.add(lighthouse);
  const tower=new THREE.Mesh(new THREE.CylinderGeometry(.31,.39,2.65,8),m.stone);tower.name='Granite ashlar octagonal East Pier light';tower.position.set(0,1.36,0);tower.castShadow=true;lighthouse.add(tower);fixedHarbourSolids.push(tower);
  block(lighthouse,-.82,.77,.08,1.12,1.50,1.12,'stone','Attached two-storey granite keeper house');
  block(lighthouse,-.82,1.57,.08,1.22,.12,1.22,'concrete','Keeper house flat roof');
  block(lighthouse,0,2.74,0,.76,.14,.76,'steel','Harbour light gallery');post(lighthouse,0,3.05,0,.25,.48,'yellow','Harbour light lantern');block(lighthouse,0,3.32,0,.48,.14,.48,'stone','Harbour light roof');
  for(const z of [-.24,.24])block(lighthouse,0,1.55,z,.12,.3,.035,'blue','Granite tower window');
  for(const object of lighthouse.children)if(object.isMesh&&object!==tower)fixedHarbourSolids.push(object);
  if(typeof textSurface==='function'){
    textSurface('HOWTH HARBOUR','#f0eadb',5.2,world,64,.36,-52.2,false,'#315e76');
    textSurface('FISH MARKET','#f0eadb',2.2,world,63.4,1.54,-46.0,false,'#b64740');
    textSurface('MARINA','#f0eadb',1.9,world,63.5,1.44,-26.9,false,'#376884');
  }
  const boats=[];
  const definitions=[
    {id:'howth-fishing-1',name:'Howth fishing boat',kind:'fishing',slot:-46.5,length:3.65,width:.94,color:'#527d83',dwell:9,phaseOffset:0},
    {id:'howth-fishing-2',name:'Inshore fishing boat',kind:'fishing',slot:-40,length:3.3,width:.82,color:'#b65f43',dwell:11,phaseOffset:81},
    {id:'howth-marina-yacht',name:'Howth marina yacht',kind:'yacht',slot:-33.5,length:3.2,width:.72,color:'#ece5d4',dwell:13,phaseOffset:174},
    {id:'howth-passenger-launch',name:'Harbour passenger launch',kind:'launch',slot:-27,length:3.45,width:.86,color:'#376884',dwell:10,phaseOffset:263},
  ];
  for(const def of definitions){
    const root=new THREE.Group();root.name=`${def.name} ${def.id}`;world.add(root);
    const hullMaterial=mat(def.color,.7);extraMaterials.push(hullMaterial);
    // The hull straddles the .17 waterline with a .19 draft. Hull bottom is y=-.02.
    const hull=block(root,0,-.01,0,def.length,.38,def.width,hullMaterial,'Moving harbour boat hull');
    def.hullLocalY=-.01;
    hull.castShadow=true;
    block(root,-.35,.65,0,1.25,.42,def.width*.72,'white','Boat cabin');
    block(root,-.36,.89,0,.9,.055,def.width*.74,'blue','Boat cabin roof');
    for(const wx of [-.66,-.38,-.1])block(root,wx,.68,def.width*.37,.18,.12,.025,'yellow','Boat cabin window');
    if(def.kind==='fishing'){
      block(root,.92,.67,0,.48,.08,.50,'steel','Fishing gear deck winch');
      for(const side of [-1,1]){const mast=block(root,.72,1.00,side*.25,.045,.72,.045,'steel','Fishing boat net mast');mast.rotation.z=-.18;}
    }else if(def.kind==='yacht'){
      const mast=block(root,.05,1.44,0,.045,1.42,.045,'white','Yacht mast');mast.rotation.z=-.04;
      const sail=block(root,.07,1.22,.19,.045,.92,.32,'white','Yacht sail');sail.rotation.z=-.12;
    }else{
      block(root,.89,.59,0,.55,.20,.56,'red','Launch aft deck');
    }
    const route=new THREE.CatmullRomCurve3([
      new THREE.Vector3(79,0,def.slot),new THREE.Vector3(80.6,0,def.slot+.05),
      new THREE.Vector3(83,0,def.slot+.7),new THREE.Vector3(87,0,def.slot+1.9),
      new THREE.Vector3(90.9,0,def.slot+1.75),new THREE.Vector3(91.8,0,def.slot),
      new THREE.Vector3(90.8,0,def.slot-1.8),new THREE.Vector3(87,0,def.slot-2.05),
      new THREE.Vector3(82.6,0,def.slot-1.05),new THREE.Vector3(80,0,def.slot-.20),
    ],true,'centripetal',.42);
    const loopLength=route.getLength(),cruise=1.75+(.15*(boats.length%3)),travelSeconds=loopLength/cruise;
    boats.push({...def,root,hull,route,loopLength,cruise,travelSeconds,cycleSeconds:travelSeconds+def.dwell});
  }
  const place={id:'dubHowthHarbour',name:'Howth Harbour',area:'North Dublin Coast',emoji:'⚓',x:63.8,z:-37.2+HARBOUR_SHIFT_Z,w:11,d:31,h:4,kind:'seaport',description:'Illustrative interpretation of Howth Fishery Harbour Centre, its fishing activity, marina and harbour entrance lights.',city:'dublin',arrivalX:65.5,arrivalZ:-36.8+HARBOUR_SHIFT_Z,sourceUrl:'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/fishery-harbour-centres/'};
  function waterAt(x,z){z-=HARBOUR_SHIFT_Z;return x>=WATER.minX&&x<=WATER.maxX&&z>=WATER.minZ&&z<=WATER.maxZ;}
  function isLand(x,z){z-=HARBOUR_SHIFT_Z;return Number.isFinite(x)&&Number.isFinite(z)&&z>=-54&&z<=-20&&((x>=59.2&&x<=69.15)||(x>=68.5&&x<=76.45&&SLOTS.some(slot=>Math.abs(z-slot)<=.41))||(x>=93.65&&x<=95&&z>=-22.25&&z<=-20.75));}
  function groundY(x,z){if(!isLand(x,z))return undefined;return x>68.25?.47:.31;}
  let latestTime=0;
  function update(timeSeconds=0){
    const time=Number.isFinite(timeSeconds)?Math.max(0,timeSeconds):0;latestTime=time;
    for(const boat of boats){
      const cycle=((time+boat.phaseOffset)%boat.cycleSeconds+boat.cycleSeconds)%boat.cycleSeconds;
      const outing=cycle<boat.travelSeconds,progress=outing?cycle/boat.travelSeconds:0;
      const p=outing?boat.route.getPointAt(progress):boat.route.getPointAt(0);
      const tangent=outing?boat.route.getTangentAt(progress):boat.route.getTangentAt(0);
      const phase=!outing?'boarding':progress<.10?'departing':progress>.82?'returning':boat.kind==='fishing'?'fishing':'cruising';
      boat.root.position.set(p.x,.17+.012*Math.sin(time*1.4+boat.phaseOffset),p.z);
      boat.root.rotation.y=Math.atan2(-tangent.z,tangent.x);
      boat.root.userData.phase=phase;boat.root.userData.progress=outing?progress:1;
    }
    return snapshot(time);
  }
  function snapshot(timeSeconds=latestTime){
    const time=Number.isFinite(timeSeconds)?Math.max(0,timeSeconds):0;
    const active=boats.map(boat=>({id:boat.id,name:boat.name,kind:boat.kind,phase:boat.root.userData.phase||'boarding',x:boat.root.position.x,z:boat.root.position.z+HARBOUR_SHIFT_Z,heading:boat.root.rotation.y,length:boat.length,width:boat.width,routeProgress:Number(boat.root.userData.progress||0),berth:boat.root.userData.phase==='boarding',waitSeconds:boat.dwell}));
    const completed=boats.reduce((sum,boat)=>sum+Math.max(0,Math.floor((time+boat.phaseOffset)/boat.cycleSeconds)),0);
    return{status:'Operating',timeSeconds:time,boats:active,arrivals:completed,departures:completed,berths:active.filter(boat=>boat.berth).length,terminal:'Illustrative local harbour activity'};
  }
  function audit(){
    world.updateMatrixWorld(true);
    const hullIssues=[],overlaps=[],dockIssues=[],floatIssues=[];
    for(const boat of boats){
      const bounds=new THREE.Box3().setFromObject(boat.hull),points=[];
      for(let t=0;t<=1.001;t+=.1){for(const side of [-1,1]){
        const local1=new THREE.Vector3((t-.5)*boat.length,boat.hullLocalY,side*boat.width/2),local2=new THREE.Vector3(side*boat.length/2,boat.hullLocalY,(t-.5)*boat.width);
        points.push(boat.root.localToWorld(local1.clone()),boat.root.localToWorld(local2.clone()));
      }}
      if(boat.root.visible&&points.some(p=>!waterAt(p.x,p.z)))hullIssues.push({id:boat.id,x:boat.root.position.x,z:boat.root.position.z,phase:boat.root.userData.phase});
      const hullBottom=boat.root.position.y+boat.hullLocalY-.19,hullTop=boat.root.position.y+boat.hullLocalY+.19;
      if(hullBottom>0||hullTop<.17)floatIssues.push({id:boat.id,hullBottom,hullTop});
      if(boat.root.visible){
        const c=boat.root.getWorldPosition(new THREE.Vector3()),yaw=boat.root.rotation.y,ux={x:Math.cos(yaw),z:-Math.sin(yaw)},uz={x:Math.sin(yaw),z:Math.cos(yaw)};
        for(const obstacle of fixedHarbourSolids){
          const ob=new THREE.Box3().setFromObject(obstacle);if(ob.max.y<hullBottom||ob.min.y>hullTop)continue;
          const ox=(ob.min.x+ob.max.x)/2,oz=(ob.min.z+ob.max.z)/2,hx=(ob.max.x-ob.min.x)/2,hz=(ob.max.z-ob.min.z)/2,dx=ox-c.x,dz=oz-c.z;
          const separated=[{x:1,z:0},{x:0,z:1},ux,uz].some(axis=>{
            const center=Math.abs(dx*axis.x+dz*axis.z),obRadius=hx*Math.abs(axis.x)+hz*Math.abs(axis.z);
            const hullRadius=boat.length/2*Math.abs(ux.x*axis.x+ux.z*axis.z)+boat.width/2*Math.abs(uz.x*axis.x+uz.z*axis.z);
            return center>=obRadius+hullRadius-1e-6;
          });
          if(!separated)dockIssues.push({boat:boat.id,obstacle:obstacle.name});
        }
      }
      boat._auditBounds=bounds;
    }
    for(let i=0;i<boats.length;i++)for(let j=i+1;j<boats.length;j++)if(boats[i]._auditBounds.intersectsBox(boats[j]._auditBounds))overlaps.push([boats[i].id,boats[j].id]);
    return{hullIssues,overlaps,dockIssues,floatIssues,boatCount:boats.length,waterBounds:{...WATER,minZ:WATER.minZ+HARBOUR_SHIFT_Z,maxZ:WATER.maxZ+HARBOUR_SHIFT_Z},fixedSolidCount:fixedHarbourSolids.length};
  }
  const places=[place];
  update(0);
  world.userData={simulation:'illustrative-howth-fishery-and-marina',waterBounds:{...WATER,minZ:WATER.minZ+HARBOUR_SHIFT_Z,maxZ:WATER.maxZ+HARBOUR_SHIFT_Z},boatCount:boats.length};
  return{world,places,update,snapshot,isLand,groundY,audit,dispose(){world.removeFromParent();world.clear();for(const material of [...Object.values(m),...extraMaterials])material.dispose();box.dispose();cylinder.dispose();}};
}

export const DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS=Object.freeze({...WATER,minZ:WATER.minZ+HARBOUR_SHIFT_Z,maxZ:WATER.maxZ+HARBOUR_SHIFT_Z});
