import * as THREE from 'three';
import {DUBLIN_ROAD_LANES, DUBLIN_ROAD_NETWORK, DUBLIN_ROAD_JUNCTIONS, roadSurfaceY} from './dublin-road-network.js';
import {DUBLIN_PALETTE as P} from './dublin-palette.js';

/** Curbs, footways and street fittings derived from the shared Dublin road centerlines. */
export function buildDublinRoadDetails({textSurface}={}) {
  const world=new THREE.Group();world.name='Dublin road details';
  const materialCache=new Map();
  const material=(value)=>{
    if(value?.isMaterial)return value;
    const color=String(value??'#777777');if(!materialCache.has(color))materialCache.set(color,new THREE.MeshStandardMaterial({color,roughness:.9}));return materialCache.get(color);
  };
  const box=new THREE.BoxGeometry(1,1,1),cyl=new THREE.CylinderGeometry(1,1,1,8);
  let curbs=0,footways=0,markings=0,poles=0,signals=0,busStops=0,cycleTracks=0,rails=0;
  const surfaceSamples=[];
  function block(x,y,z,w,h,d,mat,name='street fitting',yaw=0,role='fitting') {
    const m=new THREE.Mesh(box,material(mat));m.position.set(x,y,z);m.scale.set(w,h,d);m.rotation.y=yaw;m.name=name;m.castShadow=h>.12;m.receiveShadow=true;m.userData.streetRole=role;m.userData.surfacePoint={x,y,z};world.add(m);surfaceSamples.push({x,y,z,role,name});return m;
  }
  function cylinder(x,y,z,r,h,mat,name,role='fitting') {
    const m=new THREE.Mesh(cyl,material(mat));m.position.set(x,y,z);m.scale.set(r,h,r);m.name=name;m.userData.streetRole=role;m.userData.surfacePoint={x,y,z};world.add(m);surfaceSamples.push({x,y,z,role,name});return m;
  }
  function makeRibbon(points,width,mat,name,role) {
    if(points.length<2)return;
    // Break strips at the river edge so a bank sidewalk cannot interpolate across water.
    const runs=[];let run=[];
    for(const p of points){
      // Moving drawbridge leaves are built by the synchronized bridge controller.
      // Leave a clean deck-length gap so pavement, kerbs, footways, markings and rails
      // cannot remain as fixed geometry under a raised span.
      const valid=Math.abs(p.z)>=2.25&&!DUBLIN_ROAD_JUNCTIONS.some(j=>Math.hypot(p.x-j.x,p.z-j.z)<j.radius+.25)&&!(name.includes('airport-access-roundabout')&&p.z<-42.05)&&!(name.includes('dublin-port-gate-approach'));
      if(valid)run.push(p);else {if(run.length>1)runs.push(run);run=[];}
    }
    if(run.length>1)runs.push(run);
    for(const path of runs){
      const vertices=[],indices=[];
      for(let i=0;i<path.length;i++){
        const a=path[Math.max(0,i-1)],b=path[Math.min(path.length-1,i+1)],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz)||1,nx=-dz/len*width/2,nz=dx/len*width/2;
        vertices.push(path[i].x+nx,path[i].y,path[i].z+nz,path[i].x-nx,path[i].y,path[i].z-nz);
        if(i<path.length-1){const j=i*2;indices.push(j,j+2,j+1,j+1,j+2,j+3);}
        surfaceSamples.push({x:path[i].x,y:path[i].y,z:path[i].z,role,name});
      }
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();const mesh=new THREE.Mesh(g,material(mat));mesh.name=name;mesh.userData.streetRole=role;world.add(mesh);
    }
  }
  function centerlineFromLane(lane) {
    return lane.points.map((p,i)=>{
      const prev=lane.points[lane.closed?(i+lane.points.length-1)%lane.points.length:Math.max(0,i-1)];
      const next=lane.points[lane.closed?(i+1)%lane.points.length:Math.min(lane.points.length-1,i+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.hypot(dx,dz)||1;
      return{x:p.x-dz/len*DUBLIN_ROAD_NETWORK.laneOffset,z:p.z+dx/len*DUBLIN_ROAD_NETWORK.laneOffset,y:roadSurfaceY(p.x,p.z)};
    });
  }
  const drawnRoutes=new Set();
  for(const lane of DUBLIN_ROAD_LANES){
    if(drawnRoutes.has(lane.routeId))continue;drawnRoutes.add(lane.routeId);
    const center=centerlineFromLane(lane);
    for(const side of [-1,1]){
      const edge=center.map((p,i)=>{const a=center[Math.max(0,i-1)],b=center[Math.min(center.length-1,i+1)],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz)||1;return{x:p.x-side*dz/len*.50,z:p.z+side*dx/len*.50,y:p.y+.055};});
      makeRibbon(edge,.10,'#aaa69a',`Kerb ${lane.routeId}`,'kerb');curbs++;
      const walk=edge.map((p,i)=>{const base=center[i],dx=p.x-base.x,dz=p.z-base.z,len=Math.hypot(dx,dz)||1;return{x:p.x+dx/len*.40,z:p.z+dz/len*.40,y:p.y-.015};});
      makeRibbon(walk,.68,'#bcb7aa',`Footway ${lane.routeId}`,'footway');footways++;
    }
    // Dashed centre-edge guides sit at road grade and repeat by distance, not sample count.
    let distance=0,nextDash=3.4;
    for(let i=0;i<center.length-1;i++){
      const a=center[i],b=center[i+1],len=Math.hypot(b.x-a.x,b.z-a.z);
      if(distance+len>=nextDash){const t=(nextDash-distance)/Math.max(.001,len),x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t,y=roadSurfaceY(x,z)+.009,yaw=Math.atan2(b.x-a.x,b.z-a.z);if(Math.abs(z)>=2.25){block(x,y,z,.035,.012,.30,'#e9e5db',`Lane dash ${lane.routeId}`,yaw,'marking');markings++;}nextDash+=3.4;}
      distance+=len;
    }
  }
  for(const junction of DUBLIN_ROAD_JUNCTIONS){
    const geometry=new THREE.CircleGeometry(junction.radius,20),mat=material(P.roadDark);
    mat.polygonOffset=true;mat.polygonOffsetFactor=-1;mat.polygonOffsetUnits=-1;
    const apron=new THREE.Mesh(geometry,mat);apron.rotation.x=-Math.PI/2;apron.position.set(junction.x,roadSurfaceY(junction.x,junction.z)+.002,junction.z);apron.name='Open road junction apron';apron.userData.junction=junction;world.add(apron);
  }
  // Zebra crossings and stop lines align to the road grade at bridge approaches.
  for(const x of [-28,-18,-5,2,18,30,42.4])for(const z of [-2.9,2.9]){
    const y=roadSurfaceY(x,z)+.018;
    for(let stripe=-3;stripe<=3;stripe++){block(x+stripe*.18,y,z,.095,.012,.66,'#eee9dd','Quay zebra crossing',0,'marking');markings++;}
    block(x,y+.003,z+(z<0?.48:-.48),1.15,.018,.075,'#e7bd58','Stop line',0,'marking');markings++;
    const cornerX=x+(x<0?-1:1)*.8,cornerZ=z+(z<0?-1:1)*.85,ground=roadSurfaceY(cornerX,cornerZ);
    cylinder(cornerX,ground+.56,cornerZ,.045,1.12,'#596367','Traffic signal pole','pole');
    block(cornerX,ground+.92,cornerZ,.12,.32,.12,P.roadDark,'Traffic signal head');
    for(let i=0;i<3;i++)cylinder(cornerX,ground+.82+i*.1,cornerZ,.027,.03,['#a8423c','#e7bd58','#497d56'][i],`Signal aspect ${i+1}`);
    poles++;signals++;
  }
  // Street lights stand beside the quayside loop on land, outside the river channel.
  for(const side of [-1,1])for(let z=-29;z<=29;z+=8){
    const x=side*31.1,y=roadSurfaceY(x,z);cylinder(x,y+.62,z,.055,1.25,'#596367','Dublin street-light column','pole');
    block(x+side*.22,y+1.27,z,.4,.055,.08,'#596367','Street-light arm');block(x+side*.4,y+1.22,z,.24,.045,.12,'#e7bd58','Warm LED lantern');poles++;
  }
  // Bus/cycle facilities follow the two outer quays; all fittings use cached real materials.
  for(const z of [-31.2,30.2]){
    const y=roadSurfaceY(-3,z)+.02;block(-3,y,z,10,.025,.62,'#a8423c','Bus lane',0,'bus-lane');cycleTracks++;
    for(const x of [-23,2]){const sy=roadSurfaceY(x,z)+.035;block(x,sy,z,2.1,.05,.82,P.pavement,'Bus stop island');block(x,sy+.33,z,1.1,.6,.11,P.pubGreen,'Bus shelter');block(x-.8,sy+.44,z,.06,.9,.06,'#596367','Bus stop flag');busStops++;}
    for(let x=-37;x<35;x+=2.2){const cy=roadSurfaceY(x,z)+.02;block(x,cy,z+(z<0?-.52:.52),1.1,.015,.65,'#a8423c','Cycle track segment',0,'cycle-track');cycleTracks++;}
  }
  const airportRoute=DUBLIN_ROAD_LANES.find(lane=>lane.routeId==='airport-access-roundabout');
  const airportConnectorLength=airportRoute?.lengths.reduce((sum,length)=>sum+length,0)??0;
  if(typeof textSurface==='function')textSurface('AIRPORT ACCESS','#f2e8d2',2.2,world,-5.5,.38,-41.5,false,'#a8423c');
  world.userData.metrics={roadLanes:DUBLIN_ROAD_LANES.length,junctions:DUBLIN_ROAD_JUNCTIONS.length,curbs,footways,markings,signalizedCrossings:signals,streetLights:poles-signals,busStops,cycleTrackSegments:cycleTracks,railSegments:rails,airportConnectorLength,airportBusLaneSegments:0,clearanceRadius:DUBLIN_ROAD_NETWORK.roadWidth/2,surfaceSamples};
  return{world,metrics:world.userData.metrics};
}
