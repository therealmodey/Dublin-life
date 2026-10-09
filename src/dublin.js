import * as THREE from 'three';
import {DUBLIN_PALETTE} from './dublin-palette.js';
export {DUBLIN_PALETTE, DUBLIN_BACKGROUND} from './dublin-palette.js';

// An authored, compressed game layout. North is -Z, east is +X.
// Irish landmarks retain their neighbourhood relationships, not survey scale.
import {dublinLots} from './dublin-locations.js';
import {DUBLIN_URBAN_BOUNDS,DUBLIN_WORLD_BOUNDS,DUBLIN_FOREST_BOUNDS,DUBLIN_UPSTREAM_BASIN,DUBLIN_EXPANSION_INFILL,createDublinForestPlacements} from './dublin-district-expansion.js';
import {buildDublinAirport} from './dublin-airport.js';
import {DUBLIN_ROAD_LANES, roadSurfaceY} from './dublin-road-network.js';
import {buildDublinRoadDetails} from './dublin-road-details.js';
import {buildDublinRound3Venue} from './dublin-round3-venue-geometry.js';
export {dublinLots};

function barrelVaultGeometry(){
  const points=[],indices=[];
  for(let i=0;i<=24;i++){const a=i/24*Math.PI;for(const z of [-.5,.5])points.push(Math.cos(a)*.5,Math.sin(a),z);if(i<24){const j=i*2;indices.push(j,j+2,j+1,j+1,j+2,j+3);}}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}

export const dublinBridges = [-28,-18,-5,2,18,30];
export function isDublinLand(x,z){
  if(x < DUBLIN_URBAN_BOUNDS.minX || x > DUBLIN_URBAN_BOUNDS.maxX || z < DUBLIN_URBAN_BOUNDS.minZ || z > DUBLIN_URBAN_BOUNDS.maxZ)return false;
  if(Math.hypot(x-DUBLIN_UPSTREAM_BASIN.x,z-DUBLIN_UPSTREAM_BASIN.z)<DUBLIN_UPSTREAM_BASIN.radius)return false;
  if(Math.abs(z)<2.25)return dublinBridges.some(b=>Math.abs(x-b)<(b===30?1:.6));
  if(x>23.7&&x<30.3&&z>9.2&&z<14.8)return false;
  return true;
}

export function buildDublin({textSurface}) {
  const world=new THREE.Group(), homes=new THREE.Group(), landmarks=new THREE.Group(), boards=new THREE.Group();
  world.name='Dublin';homes.name='Dublin neighbourhoods';landmarks.name='Dublin landmarks';world.add(homes,landmarks,boards);
  const geometry={vault:barrelVaultGeometry(),box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(1,1,1,16),cone:new THREE.ConeGeometry(1,1,12),sphere:new THREE.IcosahedronGeometry(1,1),dome:new THREE.SphereGeometry(1,16,8,0,Math.PI*2,0,Math.PI/2),roof:new THREE.ConeGeometry(1,1,4,1,false,Math.PI/4)};
  const batches=new Map(), treePlacements=[], roadMeshes=[];
  let origin=[0,0,0], activeParent=world, activeLotId=null;
  function shape(type,x,y,z,w,h,d,color,parent=activeParent,rotation=[0,0,0]){
    const cast=h>.15;
    const key=`${parent.uuid}:${type}:${cast}`;if(!batches.has(key))batches.set(key,{parent,type,cast,items:[]});
    batches.get(key).items.push({p:[x+origin[0],y+origin[1],z+origin[2]],s:[w,h,d],color,rotation,lotId:activeLotId});
  }
  const b=(x,y,z,w,h,d,c,parent=activeParent,rotation)=>shape('box',x,y,z,w,h,d,c,parent,rotation);
  const c=(x,y,z,r,h,color,parent=activeParent)=>shape('cyl',x,y,z,r,h,r,color,parent);
  function tree(x,z,size=1,parent=activeParent,groundY=.26){treePlacements.push({x:x+origin[0],y:groundY,z:z+origin[2],height:1.3*size,model:size>1?'large':'small',parent,rotation:0,lotId:activeLotId});}
  function roof(x,y,z,w,d,color=DUBLIN_PALETTE.dark){shape('roof',x,y+.35,z,w*.74,.7,d*.74,color);}
  function building(x,z,w,d,h,color=DUBLIN_PALETTE.brick,parent=activeParent){
    b(x,h/2,z,w,h,d,color,parent);b(x,h+.07,z,w+.15,.14,d+.15,DUBLIN_PALETTE.dark,parent);
    const frame=color===DUBLIN_PALETTE.white||color===DUBLIN_PALETTE.cream?DUBLIN_PALETTE.cream:DUBLIN_PALETTE.dark;
    const window=(wx,wy,wz,ww,sideways=false)=>{
      if(sideways){
        b(wx,wy,wz,.035,.35,ww,DUBLIN_PALETTE.glass,parent);
        for(const side of [-1,1])b(wx,wy,wz+side*(ww/2+.018),.045,.4,.035,frame,parent);
        b(wx,wy-.2,wz,.06,.045,ww+.08,frame,parent);b(wx,wy+.2,wz,.055,.035,ww+.04,frame,parent);
        b(wx+.025,wy,wz,.018,.34,.025,frame,parent);
      }else{
        b(wx,wy,wz,ww,.35,.035,DUBLIN_PALETTE.glass,parent);
        for(const side of [-1,1])b(wx+side*(ww/2+.018),wy,wz,.035,.4,.045,frame,parent);
        b(wx,wy-.2,wz,ww+.08,.045,.06,frame,parent);b(wx,wy+.2,wz,ww+.04,.035,.055,frame,parent);
        b(wx,wy,wz+.025,.025,.34,.018,frame,parent);
      }
    };
    for(let row=.45;row<h-.15;row+=.6){
      for(let col=-w/2+.35;col<w/2;col+=.65)window(x+col,row,z+d/2+.018,.3,false);
      if(w>1.35&&d>1.25){
        for(const side of [-1,1])window(x+side*(w/2+.018),row,z,.3,true);
        for(let col=-w/2+.4;col<w/2-.1;col+=.85)window(x+col,row,z-d/2-.018,.3,false);
      }
    }
  }
  const landmarkShapes=[];
  function ovalRoof(x,y,z,rx,rz,wave=.24){
    const p=[],idx=[],steps=32,openHalfAngle=Math.PI/6;
    for(let i=0;i<=steps;i++){
      const a=i/steps*Math.PI*2,cx=Math.cos(a),cz=Math.sin(a),roofY=y+wave*Math.cos(2*a);
      p.push(x+cx*rx+origin[0],roofY+origin[1],z+cz*rz+origin[2],x+cx*(rx*.72)+origin[0],roofY+origin[1],z+cz*(rz*.72)+origin[2]);
      if(i<steps){
        const j=i*2,mid=(i+.5)/steps*Math.PI*2;
        // Aviva's north end is open; the upper canopy sweeps around the other three sides.
        const northGap=Math.abs(Math.atan2(Math.sin(mid+Math.PI/2),Math.cos(mid+Math.PI/2)))<openHalfAngle;
        if(!northGap)idx.push(j,j+2,j+1,j+1,j+2,j+3);
      }
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(idx);g.computeVertexNormals();
    const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:DUBLIN_PALETTE.glassMid,metalness:.25,roughness:.35,side:THREE.DoubleSide}));
    m.name='Aviva asymmetric oval roof';m.userData.kind='stadium-roof';m.userData.waveAmplitude=wave;m.userData.apertureRatio=.72;m.userData.openNorthEnd=true;m.userData.openNorthAngle=openHalfAngle*2;activeParent.add(m);
  }
  function columns(x,z,count,width,h=1.5){for(let i=0;i<count;i++)c(x-width/2+i*width/(count-1),h/2,z,.11,h,DUBLIN_PALETTE.cream);b(x,h+.08,z,width+.45,.16,.65,DUBLIN_PALETTE.cream);}
  function line(points,color,radius=.035){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p[0]+origin[0],p[1]+origin[1],p[2]+origin[2])));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,32,radius,5,false),new THREE.MeshStandardMaterial({color,roughness:.65}));activeParent.add(mesh);return mesh;}
  function arch(x,z,width,baseY,height,color,radius=.055){
    const half=width/2,mesh=line([[x-half,baseY,z],[x-half,baseY+height*.6,z],[x-half*.72,baseY+height*.9,z],[x,baseY+height,z],[x+half*.72,baseY+height*.9,z],[x+half,baseY+height*.6,z],[x+half,baseY,z]],color,radius);
    mesh.name='Trinity Campanile arch';mesh.userData.kind='campanile-arch';mesh.userData.lotId=activeLotId;return mesh;
  }
  function archSide(x,z,width,baseY,height,color,radius=.055){
    const half=width/2,mesh=line([[x,baseY,z-half],[x,baseY+height*.6,z-half],[x,baseY+height*.9,z-half*.72],[x,baseY+height,z],[x,baseY+height*.9,z+half*.72],[x,baseY+height*.6,z+half],[x,baseY,z+half]],color,radius);
    mesh.name='Trinity Campanile arch';mesh.userData.kind='campanile-arch';mesh.userData.lotId=activeLotId;return mesh;
  }
  function water(x,z,w,d){b(x,.205,z,w,.035,d,DUBLIN_PALETTE.waterDark);for(let i=0;i<4;i++)b(x-w*.3+i*w*.2,.228,z+Math.sin(i*3)*d*.25,w*.1,.005,.025,DUBLIN_PALETTE.glass);}
  function liffeyAndTurnBasin(){
    // One non-overlapping water polygon covers the full channel and the rounded
    // upstream turning pocket. Its circle arcs begin exactly at the channel edge.
    const radius=DUBLIN_UPSTREAM_BASIN.radius,cx=DUBLIN_UPSTREAM_BASIN.x,halfChannel=2.25,alpha=Math.asin(halfChannel/radius),shape=new THREE.Shape();
    shape.moveTo(-78,-halfChannel);shape.lineTo(cx-Math.sqrt(radius*radius-halfChannel*halfChannel),-halfChannel);
    shape.absarc(cx,0,radius,Math.PI+alpha,Math.PI*2-alpha,false);
    shape.lineTo(40,-halfChannel);shape.lineTo(40,halfChannel);shape.lineTo(cx+Math.sqrt(radius*radius-halfChannel*halfChannel),halfChannel);
    shape.absarc(cx,0,radius,alpha,Math.PI-alpha,false);shape.lineTo(-78,halfChannel);shape.closePath();
    const geometry=new THREE.ShapeGeometry(shape,24),material=new THREE.MeshStandardMaterial({color:DUBLIN_PALETTE.waterDark,roughness:.42,metalness:.04,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(geometry,material);mesh.name='Continuous Liffey channel and upstream vessel basin';mesh.rotation.x=Math.PI/2;mesh.position.y=.223;mesh.receiveShadow=true;
    mesh.userData={kind:'non-overlapping-water-union',channelBounds:{minX:-78,maxX:40,minZ:-halfChannel,maxZ:halfChannel},basin:{...DUBLIN_UPSTREAM_BASIN}};world.add(mesh);
    return mesh;
  }
  const parkDetails=[];
  function park(w,d){
    const id=activeLotId, features=[];
    const detailFeature=(name,draw)=>{const before=[...batches.values()].reduce((n,batch)=>n+batch.items.length,0),treesBefore=treePlacements.length;draw();const after=[...batches.values()].reduce((n,batch)=>n+batch.items.length,0);features.push({name,geometryInstances:after-before,treePlacements:treePlacements.length-treesBefore});};
    b(0,.23,0,w,.06,d,DUBLIN_PALETTE.lawn);
    const path=(x,z,pw,pd)=>b(x,.278,z,pw,.025,pd,DUBLIN_PALETTE.pavement);
    const hedge=(x,z,hw,hd)=>b(x,.45,z,hw,.34,hd,DUBLIN_PALETTE.hedge);
    const bed=(x,z,bw,bd,color=DUBLIN_PALETTE.pubRed)=>{b(x,.295,z,bw,.035,bd,DUBLIN_PALETTE.trunk);for(let i=-2;i<=2;i++)shape('sphere',x+i*bw*.16,.34,z+((i+5)%2-.5)*bd*.22,.13,.09,.13,i%2?DUBLIN_PALETTE.gold:color);};
    const bench=(x,z,rotation=0)=>{b(x,.48,z,.9,.09,.25,DUBLIN_PALETTE.trunk,activeParent,[0,rotation,0]);b(x,.7,z-.11,.9,.36,.08,DUBLIN_PALETTE.trunk,activeParent,[0,rotation,0]);for(const dx of [-.32,.32])b(x+dx,.34,z,.07,.23,.07,DUBLIN_PALETTE.dark,activeParent,[0,rotation,0]);};
    const lamp=(x,z)=>{c(x,.88,z,.035,1.35,DUBLIN_PALETTE.dark);b(x,1.6,z,.19,.1,.19,DUBLIN_PALETTE.gold);};
    const fountain=(x,z,r=.42)=>{c(x,.34,z,r,.12,DUBLIN_PALETTE.cream);c(x,.5,z,r*.62,.18,DUBLIN_PALETTE.water);c(x,.76,z,.09,.42,DUBLIN_PALETTE.cream);shape('sphere',x,.99,z,.13,.22,.13,DUBLIN_PALETTE.water);};
    const treeRow=(fromX,toX,step,z,size=1.15)=>{for(let x=fromX;x<=toX+.01;x+=step)tree(x,z,size,activeParent,origin[1]+.26);};
    // Park types retain their own spatial signature: a woodland landscape, formal square,
    // sunken memorial garden, walled garden, and a tidal-edge nature reserve.
    if(id==='dubPhoenix'){
      for(const x of [-w*.39,-w*.2,0,w*.2,w*.39])for(const z of [-d*.39,-d*.2,d*.2,d*.39])tree(x,z,(x===0&&Math.abs(z)<2)?1.1:1.35,activeParent,origin[1]+.26);
      path(0,0,.6,d*.86);path(0,0,w*.86,.6);path(-w*.23,-d*.2,.38,d*.34);path(w*.22,d*.2,.38,d*.34);
      bed(-w*.23,-d*.2,1.4,.65,DUBLIN_PALETTE.gold);bed(w*.22,d*.2,1.4,.65,DUBLIN_PALETTE.pubGreen);
      for(const [x,z] of [[-w*.34,-d*.31],[w*.34,-d*.31],[-w*.34,d*.31],[w*.34,d*.31]])bench(x,z);
      detailFeature('Phoenix woodland groves, Wellington Testimonial, Papal Cross, Ashtown Castle, and grazing deer',()=>{
        // Dense deciduous clusters frame broad grass clearings and an axial park drive.
        for(let row=0;row<5;row++)for(let col=0;col<6;col++){const x=-w*.42+col*w*.168+(row%2)*.22,z=-d*.41+row*d*.205;if(Math.hypot(x+w*.22,z+d*.18)>1.5&&Math.hypot(x-w*.29,z+d*.22)>1.25&&Math.hypot(x-w*.28,z-d*.27)>1.15&&Math.abs(x)>.7)tree(x,z,1.28+((row+col)%3)*.13,activeParent,origin[1]+.26);}
        for(const x of [-w*.44,w*.44])for(const z of [-d*.32,0,d*.32]){c(x,.62,z,.07,.72,DUBLIN_PALETTE.dark);b(x,.99,z,.26,.08,.26,DUBLIN_PALETTE.gold);}
        // Wellington obelisk and stepped plinth.
        b(-w*.22,.38,-d*.18,1.15,.18,1.15,DUBLIN_PALETTE.cream);b(-w*.22,.7,-d*.18,.72,.48,.72,DUBLIN_PALETTE.cream);shape('cone',-w*.22,2.15,-d*.18,.4,2.55,.4,DUBLIN_PALETTE.cream);
        // Papal Cross: pale tapering shaft with unmistakable cross arms.
        b(w*.29,.4,-d*.22,1.1,.16,1.1,DUBLIN_PALETTE.trunk);b(w*.29,1.45,-d*.22,.22,2.05,.22,DUBLIN_PALETTE.cream);b(w*.29,1.92,-d*.22,1.28,.18,.22,DUBLIN_PALETTE.cream);
        // Compact medieval Ashtown Castle and crenellated roofline.
        b(w*.28,.82,d*.27,1.18,1.25,1.05,DUBLIN_PALETTE.brick);b(w*.28,1.53,d*.27,1.32,.18,1.18,DUBLIN_PALETTE.cream);for(let i=-2;i<=2;i++)b(w*.28+i*.23,1.73,d*.27,.13,.25,.18,DUBLIN_PALETTE.brick);b(w*.28,.76,d*.27+.54,.3,.72,.06,DUBLIN_PALETTE.dark);
        // Small herd silhouettes beside the woodland edge.
        for(const [x,z] of [[-w*.28,d*.22],[-w*.18,d*.3],[-w*.36,d*.32]]){b(x,.72,z,.66,.38,.28,DUBLIN_PALETTE.trunk);shape('sphere',x+.33,.88,z,.23,.24,.22,DUBLIN_PALETTE.trunk);for(const leg of [-.2,.2])b(x+leg,.43,z,.07,.38,.08,DUBLIN_PALETTE.dark);}
      });parkDetails.push({id,layout:'phoenix-woodland-monuments-castle-deer',paths:4,benches:4,plantedCanopy:treePlacements.filter(p=>p.lotId===id).length,featureGeometry:features});
    }else if(id==='dubGreen'){
      hedge(-w*.43,0,.18,d*.82);hedge(w*.43,0,.18,d*.82);hedge(0,-d*.42,w*.86,.18);hedge(0,d*.42,w*.86,.18);
      path(0,0,w*.84,.54);path(0,0,.54,d*.82);path(-w*.25,-d*.25,.34,d*.25);path(w*.25,d*.25,.34,d*.25);
      fountain(0,0,.6);for(const side of [-1,1]){bed(side*w*.27,-d*.24,1.4,.55,DUBLIN_PALETTE.pubRed);bed(side*w*.27,d*.24,1.4,.55,DUBLIN_PALETTE.gold);}
      treeRow(-w*.34,w*.34,w*.22,-d*.34);treeRow(-w*.34,w*.34,w*.22,d*.34);for(const x of [-w*.34,w*.34])for(const z of [-d*.26,d*.26])bench(x,z);
      for(const x of [-w*.4,0,w*.4])for(const z of [-d*.39,d*.39])lamp(x,z);
      detailFeature('ornamental lake, arched footbridge, bandstand, formal beds, and gated promenade',()=>{
        // Oval lake and two-tone shore, with a small crossing bridge.
        shape('sphere',-w*.08,.275,0,w*.27,.035,d*.18,DUBLIN_PALETTE.water);
        // A low arched footbridge crosses the narrow axis of the ornamental lake.
        b(-w*.08,.37,0,.68,.11,d*.39,DUBLIN_PALETTE.cream);for(const side of [-1,1]){b(-w*.08+side*.31,.55,0,.07,.32,d*.36,DUBLIN_PALETTE.dark);for(const z of [-d*.16,0,d*.16])b(-w*.08+side*.31,.71,z,.045,.035,.045,DUBLIN_PALETTE.gold);}
        // The bandstand sits on the adjoining lawn, clear of the water and crossing.
        b(w*.29,.37,-d*.24,1.1,.13,.92,DUBLIN_PALETTE.cream);for(const x of [w*.29-.38,w*.29+.38])for(const z of [-d*.24-.28,-d*.24+.28])c(x,.78,z,.055,.78,DUBLIN_PALETTE.cream);b(w*.29,1.2,-d*.24,1.1,.12,.92,DUBLIN_PALETTE.pubRed);shape('roof',w*.29,1.43,-d*.24,.94,.42,.8,DUBLIN_PALETTE.pubRed);
        for(const x of [-w*.43,w*.43])for(const z of [-d*.32,d*.32]){b(x,.56,z,.12,.58,.12,DUBLIN_PALETTE.dark);shape('sphere',x,.9,z,.12,.12,.12,DUBLIN_PALETTE.gold);}
        for(const x of [-w*.32,-w*.16,w*.16,w*.32])for(const z of [-d*.4,d*.4]){c(x,.46,z,.06,.34,DUBLIN_PALETTE.dark);shape('sphere',x,.68,z,.16,.14,.16,DUBLIN_PALETTE.pubRed);}
        for(const side of [-1,1])for(let i=-2;i<=2;i++){const x=i*w*.13;b(x,.34,side*d*.24,.7,.08,.32,i%2?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);}
        for(let i=0;i<10;i++)tree(-w*.36+i*w*.08,-d*.39,1.12,activeParent,origin[1]+.26);
      });parkDetails.push({id,layout:'st-stephens-green-lake-bridge-bandstand-formal-beds',paths:4,benches:4,fountains:1,flowerbeds:4,lamps:6,featureGeometry:features});
    }else if(id==='dubMerrion'){
      hedge(-w*.43,0,.17,d*.83);hedge(w*.43,0,.17,d*.83);hedge(0,-d*.42,w*.86,.17);hedge(0,d*.42,w*.86,.17);
      path(0,0,.42,d*.78);path(0,0,w*.8,.42);path(-w*.28,-d*.28,.28,d*.21);path(w*.28,d*.28,.28,d*.21);
      for(const [x,z] of [[-w*.27,-d*.25],[w*.27,-d*.25],[-w*.27,d*.25],[w*.27,d*.25]]){tree(x,z,1.2,activeParent,origin[1]+.26);bench(x,z);}
      bed(-w*.18,0,1.25,.45,DUBLIN_PALETTE.pubRed);bed(w*.18,0,1.25,.45,DUBLIN_PALETTE.gold);treeRow(-w*.32,w*.32,w*.32,-d*.35,1.25);
      detailFeature('Oscar Wilde memorial, sculpture trail, Selfish Giant play garden, and Georgian railings',()=>{
        // Perimeter spear railings and four entry gates.
        for(const side of [-1,1])for(let i=-8;i<=8;i++){const x=i*w*.047;b(x,.55,side*d*.43,.035,.48,.035,DUBLIN_PALETTE.dark);}
        for(const side of [-1,1])for(let i=-6;i<=6;i++){const z=i*d*.065;b(side*w*.43,.55,z,.035,.48,.035,DUBLIN_PALETTE.dark);}
        for(const [x,z] of [[-w*.43,-d*.43],[w*.43,-d*.43],[-w*.43,d*.43],[w*.43,d*.43]]){b(x,.68,z,.28,.74,.28,DUBLIN_PALETTE.cream);shape('sphere',x,1.14,z,.17,.17,.17,DUBLIN_PALETTE.gold);}
        // Abstract reclining Oscar Wilde sculpture on a red granite seat.
        b(-w*.08,.37,d*.07,1.5,.14,.7,DUBLIN_PALETTE.trunk);shape('sphere',-w*.08,.72,d*.07,.57,.2,.24,DUBLIN_PALETTE.gold);shape('sphere',-w*.3,.85,d*.07,.17,.2,.18,DUBLIN_PALETTE.gold);
        // Play structure: climbing frame, slide and swings.
        for(const x of [w*.22,w*.35])b(x,.75,-d*.22,.11,.95,.11,DUBLIN_PALETTE.pubRed);b(w*.285,1.18,-d*.22,.9,.12,.15,DUBLIN_PALETTE.gold);b(w*.41,.49,-d*.22,.72,.09,.65,DUBLIN_PALETTE.pubGreen);
        for(let i=0;i<5;i++){const x=-w*.32+i*w*.16;tree(x,-d*.37,1.16,activeParent,origin[1]+.26);bed(x,d*.35,.62,.42,i%2?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);}
        for(const [x,z] of [[0,-d*.29],[w*.22,d*.12],[-w*.25,d*.18]]){b(x,.39,z,.34,.5,.34,DUBLIN_PALETTE.cream);shape('sphere',x,.75,z,.16,.18,.16,DUBLIN_PALETTE.gold);}
      });parkDetails.push({id,layout:'georgian-square-railings-oscar-wilde-sculpture-playground',paths:4,benches:4,flowerbeds:2,featureGeometry:features});
    }else if(id==='dubGardenRemembrance'){
      path(0,-d*.31,w*.78,.42);path(0,d*.31,w*.78,.42);path(-w*.32,0,.42,d*.72);path(w*.32,0,.42,d*.72);
      hedge(-w*.42,0,.16,d*.8);hedge(w*.42,0,.16,d*.8);
      // The cruciform pool is a horizontal landscape feature with broken-spear mosaic marks.
      b(0,.29,-d*.07,w*.34,.035,.32,DUBLIN_PALETTE.water);b(0,.29,-d*.07,.42,.035,d*.66,DUBLIN_PALETTE.water);
      b(-.12,.315,-d*.07,.32,.018,.035,DUBLIN_PALETTE.waterDark);b(.12,.315,-d*.07,.32,.018,.035,DUBLIN_PALETTE.waterDark);b(0,.315,-d*.14,.035,.018,.22,DUBLIN_PALETTE.waterDark);b(0,.315,0,.035,.018,.22,DUBLIN_PALETTE.waterDark);
      bed(-w*.28,-d*.26,.68,.3,DUBLIN_PALETTE.pubRed);bed(w*.28,d*.26,.68,.3,DUBLIN_PALETTE.gold);
      bench(-w*.32,d*.27);bench(w*.32,-d*.27);for(const [x,z] of [[-w*.34,-d*.34],[w*.34,-d*.34],[-w*.34,d*.34],[w*.34,d*.34]])tree(x,z,1,activeParent,origin[1]+.26);
      detailFeature('Children of Lir bird memorial, axial reflecting pool, and granite bird sculpture group',()=>{
        // The Children of Lir is represented as four bronze swans rising over a low plinth.
        b(0,.38,d*.2,.9,.22,.52,DUBLIN_PALETTE.cream);b(0,.55,d*.2,.6,.12,.34,DUBLIN_PALETTE.dark);
        for(let i=0;i<4;i++){const x=(i-1.5)*.19,z=d*.2;b(x,.91,z,.08,.7,.08,DUBLIN_PALETTE.gold);shape('sphere',x+.1,1.14,z+.02,.2,.1,.13,DUBLIN_PALETTE.white);}
        // Fine raised edging, entry piers, memorial lamps and small planted beds.
        for(const side of [-1,1]){b(side*w*.42,.42,0,.08,.24,d*.78,DUBLIN_PALETTE.cream);for(const z of [-d*.37,d*.37]){b(side*w*.42,.72,z,.22,.76,.22,DUBLIN_PALETTE.cream);shape('sphere',side*w*.42,1.13,z,.12,.1,.12,DUBLIN_PALETTE.gold);}}
        for(const z of [-d*.31,d*.31]){b(0,.32,z,w*.72,.08,.28,DUBLIN_PALETTE.pubGreen);for(let i=-3;i<=3;i++)shape('sphere',i*w*.08,.46,z,.15,.18,.15,DUBLIN_PALETTE.pubRed);}
        line([[-w*.32,.31,-d*.38],[-w*.18,.31,-d*.26],[0,.31,-d*.22],[w*.18,.31,-d*.26],[w*.32,.31,-d*.38]],DUBLIN_PALETTE.pavement,.12);
      });parkDetails.push({id,layout:'garden-of-remembrance-children-of-lir-bird-memorial',paths:4,benches:2,flowerbeds:2,waterFeatures:1,featureGeometry:features});
    }else if(id==='dubIveagh'){
      path(0,0,.4,d*.78);path(0,0,w*.8,.4);path(0,-d*.28,w*.65,.32);path(0,d*.28,w*.65,.32);
      b(0,.3,-d*.23,w*.48,.08,.45,DUBLIN_PALETTE.waterDark);for(let level=0;level<3;level++)b(0,.34+level*.07,-d*.23+level*.18,w*(.4-level*.07),.04,.13,DUBLIN_PALETTE.water);
      bed(-w*.26,0,.7,d*.3,DUBLIN_PALETTE.pubRed);bed(w*.26,0,.7,d*.3,DUBLIN_PALETTE.gold);
      for(const [x,z] of [[-w*.35,-d*.32],[w*.35,-d*.32],[-w*.35,d*.32],[w*.35,d*.32]]){tree(x,z,1.2,activeParent,origin[1]+.26);bench(x,z);}
      fountain(0,d*.28,.28);detailFeature('Iveagh sunken lawn, yew maze, rustic grotto, rockery, and cascade',()=>{
        // Maze clipped to a compact inner panel with clear cross-aisles.
        for(const x of [-w*.29,-w*.1,w*.1,w*.29])for(const z of [-d*.07,d*.07])hedge(x,z,.09,d*.36);
        for(const z of [-d*.32,d*.32])for(const x of [-w*.29,w*.29])hedge(x,z,.09,.36);
        b(0,.27,d*.06,w*.48,.045,d*.23,DUBLIN_PALETTE.lawnLight);
        // Grotto mouth and rockwork flank the head of the cascade.
        for(const side of [-1,1]){shape('sphere',side*.37,.52,-d*.28,.42,.43,.3,DUBLIN_PALETTE.trunk);shape('sphere',side*.26,.53,-d*.32,.26,.29,.13,DUBLIN_PALETTE.dark);}
        b(0,.5,-d*.28,.25,.5,.12,DUBLIN_PALETTE.dark);for(let i=0;i<4;i++)b(0,.36+i*.06,-d*.2+i*.16,.58-i*.08,.035,.1,DUBLIN_PALETTE.water);
        for(const z of [-d*.34,d*.34])for(const x of [-w*.34,w*.34])tree(x,z,1.2,activeParent,origin[1]+.26);
        for(const x of [-w*.29,0,w*.29])bed(x,d*.2,.36,.23,x===0?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);
      });parkDetails.push({id,layout:'iveagh-sunken-lawn-yew-maze-rustic-grotto-cascade',paths:4,benches:4,waterFeatures:2,flowerbeds:2,featureGeometry:features});
    }else if(id==='dubWarMemorial'){
      path(0,0,.4,d*.82);path(0,0,w*.82,.4);path(0,-d*.26,w*.64,.3);path(0,d*.26,w*.64,.3);
      for(const side of [-1,1]){hedge(side*w*.38,0,.12,d*.78);for(let i=-2;i<=2;i++)tree(side*w*.25,i*d*.13,1.05,activeParent,origin[1]+.26);}
      fountain(-w*.18,0,.34);b(w*.18,.42,0,.55,.72,.55,DUBLIN_PALETTE.cream);b(w*.18,.83,0,.72,.12,.68,DUBLIN_PALETTE.cream);
      for(const side of [-1,1])for(const z of [-d*.31,0,d*.31])bench(side*w*.31,z);
      detailFeature('rose parterres, paired bookrooms, and central Great War memorial axis',()=>{
        // Formal rose parterres formed from low clipped borders and densely planted beds.
        for(const side of [-1,1])for(const z of [-d*.27,d*.27]){hedge(side*w*.2,z,w*.3,.1);bed(side*w*.2,z,.86,.56,DUBLIN_PALETTE.pubRed);for(let i=-2;i<=2;i++)shape('sphere',side*w*.2+i*.16,.49,z,.14,.16,.14,i%2?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);}
        // Twin bookrooms flank the axis: stone garden pavilions with recessed dark doors.
        for(const x of [-w*.28,w*.28]){b(x,.78,-d*.34,1.0,1.05,.9,DUBLIN_PALETTE.cream);b(x,.49,-d*.34,.34,.58,.06,DUBLIN_PALETTE.dark);b(x,.57,-d*.34,.78,.12,1.02,DUBLIN_PALETTE.trunk);shape('roof',x,1.35,-d*.34,1.25,.42,1.12,DUBLIN_PALETTE.cream);}
        // Four sculptural pillars establish a sightline down the paired lawns.
        for(const x of [-w*.12,w*.12])for(const z of [-d*.12,d*.12]){b(x,.66,z,.34,.9,.34,DUBLIN_PALETTE.cream);shape('dome',x,1.2,z,.24,.22,.24,DUBLIN_PALETTE.gold);}
        for(let i=0;i<12;i++){const x=-w*.39+i*w*.071;tree(x,-d*.42,1.22,activeParent,origin[1]+.26);tree(x,d*.42,1.22,activeParent,origin[1]+.26);}
      });parkDetails.push({id,layout:'war-memorial-rose-parterres-bookrooms-ceremonial-axis',paths:4,benches:6,waterFeatures:1,plantedRows:2,featureGeometry:features});
    }else if(id==='dubDockHotel'){
      path(0,0,w*.82,.38);path(-w*.28,0,.34,d*.8);path(w*.24,0,.34,d*.8);
      b(w*.23,.29,0,w*.22,.035,d*.55,DUBLIN_PALETTE.water);for(let i=0;i<5;i++)b(-w*.34+i*.36,.31,-d*.3,.25,.035,.45,DUBLIN_PALETTE.cream);
      for(const x of [-w*.38,-w*.14,w*.1,w*.34])tree(x,d*.31,.9,activeParent,origin[1]+.26);bench(-w*.34,-d*.3);bench(w*.34,d*.3);
      detailFeature('tidal wetland planting, timber edge rail, path markers, and cycle parking',()=>{
        for(let i=0;i<9;i++){const x=-w*.39+i*w*.097;tree(x,-d*.39+(i%2)*.22,1.12+(i%3)*.08,activeParent,origin[1]+.26);for(const z of [-d*.25,d*.25])shape('sphere',x,.42,z,.18,.24,.2,i%2?DUBLIN_PALETTE.pubGreen:DUBLIN_PALETTE.gold);}
        for(let i=-4;i<=4;i++)b(i*.34,.55,d*.39,.035,.42,.035,DUBLIN_PALETTE.trunk);for(const x of [-.45,-.15,.15,.45])b(x,.62,d*.18,.04,.62,.04,DUBLIN_PALETTE.dark);
        for(const z of [-d*.32,d*.32]){b(-w*.2,.35,z,.38,.28,.04,DUBLIN_PALETTE.cream);b(-w*.2,.49,z,.38,.06,.04,DUBLIN_PALETTE.trunk);}
      });parkDetails.push({id,layout:'tidal-edge-wetland-walk-native-planting-cycle-parking',paths:3,benches:2,waterFeatures:1,nativePlanting:4,featureGeometry:features});
    }else if(id==='dubStPatricksPark'){
      hedge(-w*.42,0,.13,d*.8);hedge(w*.42,0,.13,d*.8);path(0,0,w*.77,.3);path(0,0,.3,d*.78);
      b(0,.29,0,w*.36,.035,d*.32,DUBLIN_PALETTE.water);fountain(0,0,.22);
      for(const x of [-w*.3,w*.3]){tree(x,-d*.28,1,activeParent,origin[1]+.26);bench(x,d*.27);}
      bed(0,-d*.32,w*.48,.22,DUBLIN_PALETTE.gold);detailFeature('cathedral-facing parterre, ornate railings, lamp posts, and service details',()=>{
        for(const side of [-1,1])for(let i=-4;i<=4;i++){const z=i*d*.085;b(side*w*.44,.52,z,.035,.52,.035,DUBLIN_PALETTE.dark);}
        for(const x of [-w*.42,w*.42]){b(x,.75,-d*.4,.18,.9,.18,DUBLIN_PALETTE.cream);shape('sphere',x,1.24,-d*.4,.13,.15,.13,DUBLIN_PALETTE.gold);}
        for(let i=0;i<7;i++){const x=-w*.34+i*w*.113;tree(x,-d*.37,1.12,activeParent,origin[1]+.26);bed(x,d*.32,.28,.3,i%2?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);}
        for(const x of [-.65,-.42,-.19,.04]){c(x,.56,-d*.34,.045,.44,DUBLIN_PALETTE.dark);b(x,.8,-d*.34,.18,.08,.18,DUBLIN_PALETTE.gold);}
        b(0,.45,d*.38,.8,.12,.26,DUBLIN_PALETTE.trunk);for(const x of [-.27,.27])b(x,.72,d*.38,.06,.5,.06,DUBLIN_PALETTE.dark);
      });parkDetails.push({id,layout:'cathedral-side-parterre-railing-lamps-garden-furniture',paths:2,benches:2,waterFeatures:1,flowerbeds:1,featureGeometry:features});
    }
    if(!parkDetails.some(detail=>detail.id===id)){
      // Small greens still receive a legible path loop, planted border, seats, and lamps.
      path(0,0,w*.78,.36);path(0,0,.36,d*.78);hedge(0,-d*.42,w*.78,.13);hedge(0,d*.42,w*.78,.13);
      for(const x of [-w*.32,w*.32])for(const z of [-d*.28,d*.28]){tree(x,z,1.05,activeParent,origin[1]+.26);bench(x,z);}
      bed(0,-d*.25,Math.min(1.2,w*.3),.3,DUBLIN_PALETTE.pubRed);fountain(0,d*.23,.23);
      detailFeature('railed pocket green with curved walk, flower beds, bins, cycle stands, and trees',()=>{
        for(let i=-5;i<=5;i++){const x=i*w*.071;for(const z of [-d*.4,d*.4])b(x,.5,z,.03,.42,.03,DUBLIN_PALETTE.dark);}
        for(const side of [-1,1])for(let i=-3;i<=3;i++){const z=i*d*.095;b(side*w*.4,.5,z,.03,.42,.03,DUBLIN_PALETTE.dark);}
        for(let i=0;i<8;i++){const x=-w*.35+i*w*.1;tree(x,-d*.31+(i%2)*.18,1.14,activeParent,origin[1]+.26);bed(x,d*.29,.28,.24,i%2?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubRed);}
        for(const [x,z] of [[-w*.33,0],[w*.33,0],[0,-d*.32],[0,d*.32]]){c(x,.5,z,.09,.35,DUBLIN_PALETTE.dark);b(x,.72,z,.22,.1,.22,DUBLIN_PALETTE.gold);}
        for(let i=-2;i<=2;i++){b(i*.18,.62,d*.37,.035,.5,.035,DUBLIN_PALETTE.dark);b(i*.18,.84,d*.37,.23,.05,.05,DUBLIN_PALETTE.trunk);}
      });parkDetails.push({id,layout:'neighbourhood-green-railed-flowerbeds-bins-cycle-parking',paths:2,benches:4,flowerbeds:1,fountains:1,featureGeometry:features});
    }
  }
  b(0,-.15,(DUBLIN_WORLD_BOUNDS.minZ+DUBLIN_WORLD_BOUNDS.maxZ)/2,
    DUBLIN_WORLD_BOUNDS.maxX-DUBLIN_WORLD_BOUNDS.minX+6,.12,
    DUBLIN_WORLD_BOUNDS.maxZ-DUBLIN_WORLD_BOUNDS.minZ+6,DUBLIN_PALETTE.backdrop);
  b(-28,.06,-9.5,136,.25,123,DUBLIN_PALETTE.ground);
  b(-18.5,.2,-43,117,.018,53,DUBLIN_PALETTE.groundLight);b(-18.5,.2,26.5,117,.018,51,DUBLIN_PALETTE.groundLight);
  // The upstream turn basin replaces (rather than overlays) the river strip in
  // its interval, so the single water surfaces meet at edges without flicker.
  const liffeyWater=liffeyAndTurnBasin();
  for(const z of [-2.9,2.9]){b(-19,.26,z,118,.06,.55,DUBLIN_PALETTE.pavement);b(-19,.235,z+(z<0?-.75:.75),118,.03,.95,DUBLIN_PALETTE.roadDark);}
  // Road ribbons use the same authored lane polylines as the traffic simulation.
  const roadMaterial=new THREE.MeshStandardMaterial({color:DUBLIN_PALETTE.roadDark,roughness:.94,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
  for(const lane of DUBLIN_ROAD_LANES){
    const positions=[],indices=[];
    for(let i=0;i<lane.points.length;i++){
      const p=lane.points[i],prev=lane.points[lane.closed?(i+lane.points.length-1)%lane.points.length:Math.max(0,i-1)],next=lane.points[lane.closed?(i+1)%lane.points.length:Math.min(lane.points.length-1,i+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.hypot(dx,dz)||1,half=lane.width/2,nx=-dz/len*half,nz=dx/len*half;
      const surfaceY=roadSurfaceY(p.x,p.z);
      positions.push(p.x+nx,roadSurfaceY(p.x+nx,p.z+nz),p.z+nz,p.x-nx,roadSurfaceY(p.x-nx,p.z-nz),p.z-nz);
      if(i<lane.points.length-1||lane.closed){
        const following=lane.points[(i+1)%lane.points.length],midX=(p.x+following.x)/2;
        const riverCrossing=Math.abs(following.z-p.z)>Math.abs(following.x-p.x)&&Math.min(Math.abs(p.z),Math.abs(following.z))<2.4&&[-28,-18,-5,2,18,30,42.4].some(bridgeX=>Math.abs(midX-bridgeX)<2.3);
        if(!riverCrossing){const j=i*2,k=((i+1)%lane.points.length)*2;indices.push(j,k,j+1,j+1,k,k+1);}
      }
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();
    const road=new THREE.Mesh(geometry,roadMaterial);road.name=`Dublin road ${lane.id}`;road.userData.laneId=lane.id;road.userData.segmentCount=lane.segments.length;road.receiveShadow=true;world.add(road);roadMeshes.push(road);
  }
  // A finite reclaimed coastal causeway supports the Howth approach beyond city land.
  b(49.7,.17,-46.2,20.7,.13,2.5,DUBLIN_PALETTE.ground);
  // The Liffey quays remain broad pedestrian edges; traffic lanes sit inward.
  for(const z of [-3.65,3.65])b(-4,.26,z,88,.06,.42,DUBLIN_PALETTE.pavement);
  // O’Connell Street axis is a planted pedestrian median, not a duplicate road.
  b(-3,.245,-11,.14,.025,18,DUBLIN_PALETTE.lawnLight);
  // Drawbridges are assembled by the transport controller. Keep place records
  // selectable, but leave the river corridor clear for moving bridge geometry.
  const roadDetails=buildDublinRoadDetails({textSurface});world.add(roadDetails.world);
  // Tram routes are shown as streetscape context; moving traffic is supplied by the shared road lanes.

  const places=[];let airportGroup=null;
  for(const lot of dublinLots){
    places.push({...lot});if(lot.kind.endsWith('Bridge'))continue;
    const {w,d,kind}=lot;origin=[lot.x,.26,lot.z];activeParent=landmarks;activeLotId=lot.id;
    if(kind!=='airport')b(0,0,0,w,.035,d,['park','green'].includes(kind)?DUBLIN_PALETTE.lawn:DUBLIN_PALETTE.pavement);
    if(kind==='airport'){
      airportGroup=buildDublinAirport({lot,textSurface});world.add(airportGroup);
    }else if(lot.id.startsWith('dubVenue')){
      // The authored Round 3 landmarks each receive a structurally distinct
      // massing, roof and frontage instead of the generic single-box fallback.
      landmarkShapes.push(buildDublinRound3Venue({lot,w,d,b,c,building,roof,shape}));
    }else if(lot.id==='dubHeuston'){
      // Broad stone terminal with several open train-shed bays.
      building(0,-.45,w*.8,d*.48,1.52,DUBLIN_PALETTE.brickLight);b(0,1.6,-.45,w*.87,.14,d*.55,DUBLIN_PALETTE.dark);
      for(const x of [-w*.31,-w*.1,w*.1,w*.31]){b(x,.85,-.6,.11,1.6,.12,DUBLIN_PALETTE.cream);shape('roof',x,.25,-.6,.34,.42,.36,DUBLIN_PALETTE.cream);}
      for(let x=-w*.34;x<=w*.34;x+=.48)b(x,.07,-1.08,.07,.025,1.6,DUBLIN_PALETTE.roadDark);
      b(0,.2,-1.1,w*.82,.14,.08,DUBLIN_PALETTE.roadDark);
      landmarkShapes.push({id:lot.id,shape:'heuston-stone-terminal-with-platform-sheds',features:['broad stone concourse','four platform shed bays','fan of parallel tracks']});
    }else if(lot.id==='dubWoodQuay'){
      // The civic offices are a fractured cluster rather than a civic box: four
      // blocks step in height around an open performance court and a ship prow.
      for(const [x,z,bw,bd,bh,col] of [[-1.35,-.7,1.12,1.85,2.2,DUBLIN_PALETTE.brick],[-.12,-.7,.95,1.85,2.7,DUBLIN_PALETTE.cream],[1.08,-.7,.78,1.85,1.8,DUBLIN_PALETTE.brickLight],[.15,.65,2.05,.72,1.4,DUBLIN_PALETTE.darkBlue]]){
        b(x,bh/2,z,bw,bh,bd,col);b(x,bh+.06,z,bw+.1,.1,bd+.1,DUBLIN_PALETTE.dark);
        for(let y=.42;y<bh;y+=.48)for(let wx=-bw*.32;wx<=bw*.32;wx+=bw*.6)b(x+wx,y,z+bd*.51,bw*.26,.16,.035,DUBLIN_PALETTE.glassMid);
      }
      // Outdoor amphitheatre facing the river approach; dark longship prow at its entrance.
      for(let row=0;row<3;row++)b(1.25+row*.14,.2+row*.13,1.02,.95-row*.12,.07,.14,DUBLIN_PALETTE.cream);
      b(-1.28,.42,1.08,.17,.14,.85,DUBLIN_PALETTE.dark);shape('cone',-1.28,.82,1.48,.19,.85,.24,DUBLIN_PALETTE.dark);
      landmarkShapes.push({id:lot.id,shape:'wood-quay-stepped-office-courtyard',features:['four broken-height office blocks','open-air semicircular performance tiers','abstract Viking longship entrance sculpture']});
    }else if(lot.id==='dubMansionHouse'){
      building(0,-.26,w*.78,d*.55,1.72,DUBLIN_PALETTE.cream);columns(0,d*.32,4,w*.58,1.4);b(0,1.86,d*.32,w*.75,.14,.38,DUBLIN_PALETTE.brick);
      c(w*.24,1.95,-d*.15,.72,.22,DUBLIN_PALETTE.brick);shape('dome',w*.24,2.42,-d*.15,.64,.58,.64,DUBLIN_PALETTE.cream);b(w*.24,2.9,-d*.15,.5,.1,.5,DUBLIN_PALETTE.brick);
      landmarkShapes.push({id:lot.id,shape:'mansion-house-georgian-range-and-round-room',features:['symmetrical Georgian townhouse','projecting porch','distinctive circular domed Round Room']});
    }else if(lot.id==='dubNationalLibrary'){
      building(0,-.22,w*.84,d*.55,1.65,DUBLIN_PALETTE.cream);b(0,1.75,-.22,w*.88,.16,d*.6,DUBLIN_PALETTE.brick);
      for(const x of [-w*.31,-w*.1,w*.1,w*.31])c(x,.82,d*.31,.06,1.42,DUBLIN_PALETTE.cream);
      shape('dome',0,2.08,d*.02,.7,.45,.64,DUBLIN_PALETTE.darkBlue);b(0,.52,d*.34,.55,.88,.08,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'national-library-rotunda-front-and-reading-hall',features:['four-bay stone frontage','raised rotunda roof','recessed central entrance']});
    }else if(lot.id==='dubCentralBank'){
      // The Dockland Campus comprises separate quay and Mayor Street buildings
      // joined overhead. Showing both masses avoids the generic-office silhouette.
      b(-.72,1.58,-.25,1.35,3.16,d*.68,DUBLIN_PALETTE.glassMid);b(-.72,3.2,-.25,1.5,.14,d*.74,DUBLIN_PALETTE.dark);
      b(.85,1.1,.2,1.5,2.2,d*.62,DUBLIN_PALETTE.cream);b(.85,2.24,.2,1.58,.1,d*.68,DUBLIN_PALETTE.darkBlue);
      for(const y of [.45,.8,1.15,1.5,1.85,2.2,2.55,2.9]){b(-.72,y,d*.12,1.18,.045,.035,DUBLIN_PALETTE.glass);b(.85,y,.51,1.32,.04,.035,DUBLIN_PALETTE.glassMid);}
      b(.02,2.08,-.14,1.16,.13,.22,DUBLIN_PALETTE.roadDark);b(0,.13,d*.44,w*.86,.18,.55,DUBLIN_PALETTE.pavement);
      landmarkShapes.push({id:lot.id,shape:'central-bank-two-building-dockland-campus',features:['eight-storey quay-side block','separate Mayor Street block','elevated connecting bridge','public quay forecourt']});
    }else if(lot.id==='dubGovernmentBuildings'){
      for(const [x,bw,bh] of [[-1.28,.94,2.25],[0,1.12,2.75],[1.28,.94,2.05]]){
        building(x,-.26,bw,d*.56,bh,DUBLIN_PALETTE.cream);b(x,bh+.07,-.26,bw+.08,.13,d*.61,DUBLIN_PALETTE.brick);
        for(const colX of [-bw*.29,bw*.29])b(x+colX,.9,d*.04,.08,1.28,.08,DUBLIN_PALETTE.cream);
      }
      for(const x of [-.38,0,.38])c(x,1.62,d*.34,.055,1.7,DUBLIN_PALETTE.cream);b(0,2.55,d*.35,1.85,.17,.3,DUBLIN_PALETTE.cream);
      shape('dome',0,2.96,-.26,.45,.45,.42,DUBLIN_PALETTE.pubGreen);b(0,3.36,-.26,.1,.3,.1,DUBLIN_PALETTE.gold);
      landmarkShapes.push({id:lot.id,shape:'government-buildings-edwardian-three-wing-complex',features:['three articulated institutional wings','central columned portico','green dome and lantern']});
    }else if(kind==='park'||kind==='green')park(w-.2,d-.2);
    else if(kind==='spire'){c(0,2.1,0,.11,4.2,'#b1bcc1');shape('cone',0,6.15,0,.11,4.1,.11,'#cbd1d3');c(0,.035,0,1.2,.08,'#e0dcca');}
    else if(kind==='stadium'&&lot.id==='dubCroke'){
      // Croke Park has three roofed tiered stands and an open Hill 16 terrace.
      b(0,.64,0,w*.66,1.28,d*.7,'#ded7c6');b(0,1.3,0,w*.54,.06,d*.52,DUBLIN_PALETTE.lawn);b(0,1.34,0,.045,.02,d*.52,DUBLIN_PALETTE.white);
      for(const side of [-1,1]){
        const z=side*2.36;
        b(0,1.62,z,w*.78,.68,.64,'#c9c4b7');b(0,2.02,side*2.72,w*.72,.42,.5,'#d4cec0');
        for(let row=0;row<4;row++){
          b(0,1.39+row*.15,side*(2.08+row*.16),w*.7-row*.24,.08,.12,row%2?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.roadDark);
          b(0,1.93+row*.12,side*(2.55+row*.11),w*.64-row*.28,.065,.1,row%2?DUBLIN_PALETTE.roadDark:DUBLIN_PALETTE.pubRed);
        }
        b(0,2.54,side*2.91,w*.84,.12,1.35,DUBLIN_PALETTE.dark);
        for(const x of [-w*.34,w*.34])c(x,2.25,side*2.55,.055,.85,DUBLIN_PALETTE.cream);
      }
      // The Davin end is the third covered stand; Hill 16 stays lower and open.
      b(w*.39,1.68,0,.66,.72,d*.48,'#c7c2b6');b(w*.405,2.08,0,.42,.42,d*.4,'#d4cec0');
      for(let row=0;row<3;row++)b(w*(.31+row*.032),1.42+row*.18,0,.12,.09,d*.4-row*.28,row%2?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.roadDark);
      b(w*.43,2.54,0,1.2,.12,d*.58,DUBLIN_PALETTE.dark);
      // Open Hill 16 is the negative-X end, with terracing parallel to the pitch sidelines.
      for(let row=0;row<5;row++)b(-w*(.31+row*.032),1.38+row*.115,0,.12,.09,d*.4-row*.28,DUBLIN_PALETTE.brick);
      // Gaelic goals have no top crossbar: two uprights continue above one low crossbar.
      for(const end of [-1,1]){
        const x=end*w*.25;
        for(const z of [-.36,.36])b(x,1.93,z,.055,1.16,.055,DUBLIN_PALETTE.white);
        b(x,1.48,0,.045,.045,.72,DUBLIN_PALETTE.white);
      }
      landmarkShapes.push({id:lot.id,shape:'four-stand-gaa-ground',features:['two-tier Cusack and Hogan stands','two-tier Davin stand','covered seating canopies','open Hill 16 terraced negative-X end','Gaelic H goal frames with no top crossbar'],goalFrameGeometry:{pitchAxis:'x',ends:[-1,1],postAxis:'z',postOffset:.36,lowerCrossbarOnly:true}});
    }else if(kind==='stadium'){
      // Aviva's lighter, asymmetric glass canopy sits above a compact oval bowl.
      shape('cyl',0,1,0,w*.46,2,d*.4,DUBLIN_PALETTE.cream);shape('cyl',0,1.08,0,w*.37,2.05,d*.3,DUBLIN_PALETTE.darkBlue);b(0,2.17,0,w*.49,.08,d*.42,DUBLIN_PALETTE.glassMid);ovalRoof(0,2.45,0,w*.49,d*.42);b(0,2.22,0,w*.21,.04,d*.1,DUBLIN_PALETTE.lawn);b(0,2.25,0,.035,.015,d*.1,DUBLIN_PALETTE.white);
      landmarkShapes.push({id:lot.id,shape:'asymmetric-glass-oval-stadium',features:['east and west roof crests','lower north and south roof edges','horseshoe canopy','open north end','open roof aperture']});
    }else if(kind==='classical'||kind==='custom'){
      building(0,-.5,w*.85,d*.62,1.7,'#d8d1bb');columns(0,d*.3,kind==='custom'?10:6,w*.78,1.6);roof(0,1.8,-.5,w*.9,d*.65);
      if(kind==='custom'){b(0,2.1,-.5,1.35,1.3,1.35,'#dfd7bc');shape('sphere',0,2.85,-.5,.8,.48,.8,'#748e86');c(0,3.35,-.5,.08,.45,'#d4d9ce');landmarkShapes.push({id:lot.id,shape:'neoclassical-riverfront-with-dome'});}
    }else if(kind==='convention'){
      building(-.5,-.3,4,2.9,3,DUBLIN_PALETTE.cream);shape('cyl',.7,1.9,.7,1.1,3.5,1.1,DUBLIN_PALETTE.glassMid,world,[0,0,-.2]);for(const y of [.5,1,1.5,2,2.5,3])b(.5,y,1.73,1.8,.04,.035,DUBLIN_PALETTE.white);
    }else if(kind==='castle'){
      building(-.5,-.6,4.2,3.2,2.2,DUBLIN_PALETTE.brickLight);b(-.5,2,-.6,4.45,.13,3.45,DUBLIN_PALETTE.brick);
      c(-1.6,2.05,-1.1,.96,.3,DUBLIN_PALETTE.brick);c(-1.6,3.22,-1.1,.79,2.1,'#8d7564');
      c(-1.6,4.32,-1.1,.91,.14,DUBLIN_PALETTE.brick);
      for(let i=0;i<10;i++){const a=i*Math.PI/5;b(-1.6+Math.cos(a)*.83,4.52,-1.1+Math.sin(a)*.83,.22,.3,.22,DUBLIN_PALETTE.brick);}
      b(.7,.04,1,3,.035,2,DUBLIN_PALETTE.lawn);landmarkShapes.push({id:lot.id,shape:'castle-courtyard-with-medieval-record-tower',features:['round-plan Record Tower','corbelled crenellated parapet','attached courtyard ranges']});
    }else if(kind==='cathedral'&&lot.id==='dubChrist'){
      // Christ Church's crossing tower, long nave and flying-buttress rhythm.
      building(0,-.3,w*.28,d*.9,1.65,DUBLIN_PALETTE.cream);roof(0,1.75,-.3,w*.36,d*.94,DUBLIN_PALETTE.dark);building(0,.1,w*.78,d*.28,1.5,DUBLIN_PALETTE.cream);roof(0,1.65,.1,w*.82,d*.34,DUBLIN_PALETTE.dark);building(-w*.27,-d*.25,1.35,1.35,lot.h-.4,DUBLIN_PALETTE.cream);shape('cone',-w*.27,lot.h+.15,-d*.25,.78,1.25,.78,DUBLIN_PALETTE.darkBlue);for(const x of [-w*.32,w*.32])for(const z of [-d*.2,d*.2])b(x,.95,z,.24,1.2,.24,DUBLIN_PALETTE.cream);landmarkShapes.push({id:lot.id,shape:'crossing-tower-spire-with-buttressed-nave'});
    }else if(kind==='cathedral'){
      // St Patrick's reads as an elongated Gothic nave with a separate square tower.
      building(0,0,w*.28,d*.9,2,DUBLIN_PALETTE.cream);roof(0,2.05,0,w*.34,d*.94,DUBLIN_PALETTE.dark);building(w*.22,-d*.27,w*.25,d*.3,1.7,DUBLIN_PALETTE.cream);roof(w*.22,1.75,-d*.27,w*.3,d*.34,DUBLIN_PALETTE.dark);building(-w*.27,d*.26,1.25,1.25,lot.h-.4,DUBLIN_PALETTE.brickLight);b(-w*.27,lot.h+.15,d*.26,1.45,.3,1.45,DUBLIN_PALETTE.cream);landmarkShapes.push({id:lot.id,shape:'elongated-gothic-nave-and-square-tower'});
    }else if(kind==='guinness'){
      building(0,0,6,4,2.8,'#9a6451');building(-3,-1,1.7,3.6,2.1,'#b58166');c(0,3.05,0,1.45,.7,'#8daeb4');c(0,3.45,0,1.6,.12,'#394849');for(const x of [-2,2])c(x,2.6,-2.2,.15,2.6,'#a67359');
    }else if(kind==='college'&&lot.id==='dubTrinity'){
      const s=Math.min(w/11,d/9);
      b(0,.02*s,0,8*s,.04*s,5.4*s,DUBLIN_PALETTE.lawn);building(0,-3*s,8.8*s,1.3*s,1.6*s,DUBLIN_PALETTE.cream);building(-4.2*s,.2*s,1.3*s,5*s,1.6*s,DUBLIN_PALETTE.cream);building(4.2*s,.2*s,1.3*s,5*s,1.6*s,DUBLIN_PALETTE.cream);columns(0,3*s,8,7*s,1.5*s);b(0,.03*s,0,.5*s,.035*s,6*s,DUBLIN_PALETTE.pavement);
      // The Campanile's four open ground arches support a smaller open belfry and domed cupola.
      for(const x of [-.58,.58])for(const z of [-.58,.58])c(x*s,.76*s,z*s,.11*s,1.35*s,DUBLIN_PALETTE.cream);
      arch(0,.64*s,1.05*s,.35*s,1.05*s,DUBLIN_PALETTE.cream,.065*s);arch(0,-.52*s,1.05*s,.35*s,1.05*s,DUBLIN_PALETTE.cream,.065*s);
      archSide(-.52*s,0,1.05*s,.35*s,1.05*s,DUBLIN_PALETTE.cream,.065*s);archSide(.52*s,0,1.05*s,.35*s,1.05*s,DUBLIN_PALETTE.cream,.065*s);
      c(0,1.68*s,0,.77*s,.22*s,DUBLIN_PALETTE.cream);c(0,2.17*s,0,.69*s,.8*s,DUBLIN_PALETTE.cream);
      for(const x of [-.56,.56])for(const z of [-.56,.56])c(x*s,3.02*s,z*s,.075*s,.9*s,DUBLIN_PALETTE.cream);
      arch(0,.58*s,1.02*s,2.6*s,.72*s,DUBLIN_PALETTE.cream,.05*s);arch(0,-.58*s,1.02*s,2.6*s,.72*s,DUBLIN_PALETTE.cream,.05*s);
      archSide(-.58*s,0,1.02*s,2.6*s,.72*s,DUBLIN_PALETTE.cream,.05*s);archSide(.58*s,0,1.02*s,2.6*s,.72*s,DUBLIN_PALETTE.cream,.05*s);
      shape('dome',0,3.48*s,0,.72*s,.72*s,.72*s,DUBLIN_PALETTE.pubGreen);c(0,4.17*s,0,.045*s,.36*s,DUBLIN_PALETTE.gold);
      b(0,.04*s,-.4*s,1.25*s,.035*s,.75*s,DUBLIN_PALETTE.pavement);
      landmarkShapes.push({id:lot.id,shape:'open-arched-campanile-with-rounded-copper-dome',features:['four open arched lower sides','open-column belfry','rounded copper-green cupola'],archCount:8,domeGeometry:'upper hemisphere'});for(const x of [-2.5,2.5])tree(x*s,s,s,activeParent,origin[1]+.04*s);
    }else if(kind==='college'){
      // Keep other educational campuses distinct from Trinity's iconic Campanile.
      building(-w*.22,-.35,w*.42,d*.65,1.7,DUBLIN_PALETTE.brickLight);
      building(w*.22,-.25,w*.4,d*.58,1.35,DUBLIN_PALETTE.cream);
      b(0,.035,d*.31,w*.82,.05,.46,DUBLIN_PALETTE.pavement);
      landmarkShapes.push({id:lot.id,shape:'low-art-and-design-campus-blocks',features:['two low campus buildings','open courtyard','no Campanile']});
    }else if(kind==='dock'){
      water(-1,0,6.6,5.6);b(-1,.29,-3,7.1,.06,.4,DUBLIN_PALETTE.cream);building(4,-.3,2,6,2.7,DUBLIN_PALETTE.glassMid);b(4,1.5,2.73,1.7,1.8,.025,DUBLIN_PALETTE.glass);building(-4.3,0,1.9,6,2,DUBLIN_PALETTE.cream);b(-1.5,.5,0,2,.3,.7,DUBLIN_PALETTE.white);b(-1.3,.72,0,.8,.3,.58,DUBLIN_PALETTE.glassMid);
    }else if(kind==='station'&&lot.id==='dubConnolly'){
      building(0,.55,w*.88,d*.58,1.45,DUBLIN_PALETTE.brickLight);b(0,1.5,.55,w*.94,.12,d*.68,DUBLIN_PALETTE.dark);
      for(const x of [-w*.3,-w*.1,w*.1,w*.3]){b(x,1.15,-.7,.12,1.65,.12,DUBLIN_PALETTE.cream);shape('roof',x,.48,-.7,.32,.68,.32,DUBLIN_PALETTE.brick);}
      for(let x=-w*.38;x<=w*.38;x+=.48)b(x,.07,-1.25,.08,.025,2.1,DUBLIN_PALETTE.roadDark);
      b(0,.46,-1.12,w*.82,.2,.55,DUBLIN_PALETTE.roadDark);landmarkShapes.push({id:lot.id,shape:'connolly-arched-rail-concourse',features:['brick entrance block','arched platform canopy bays','parallel rail tracks']});
    }else if(kind==='station'&&lot.id==='dubNaija'){
      building(0,.45,w*.82,d*.52,1.12,DUBLIN_PALETTE.brickLight);b(0,1.26,-.35,w*.91,.12,d*.94,DUBLIN_PALETTE.darkBlue);
      for(const x of [-w*.3,0,w*.3]){c(x,.52,-1.05,.06,.82,DUBLIN_PALETTE.cream);b(x,.96,-1.05,.8,.08,.08,DUBLIN_PALETTE.gold);}
      for(const x of [-.9,.9])b(x,.08,-1.1,.12,.03,1.6,DUBLIN_PALETTE.roadDark);
      landmarkShapes.push({id:lot.id,shape:'busaras-sculptural-bus-terminal',features:['low civic terminal','projecting concrete canopy','three sheltered bus bays']});
    }else if(kind==='station'&&lot.id==='dubDockMarket'){
      b(0,.18,0,w*.84,.1,d*.76,DUBLIN_PALETTE.roadDark);building(0,-.15,w*.8,d*.55,1.1,DUBLIN_PALETTE.glassMid);
      for(const x of [-w*.32,w*.32])for(const z of [-d*.3,d*.3])b(x,.75,z,.055,1.1,.055,DUBLIN_PALETTE.dark);
      b(0,1.3,0,w*.96,.11,d*.84,DUBLIN_PALETTE.pubRed);b(0,.45,d*.43,w*.92,.14,.16,DUBLIN_PALETTE.cream);
      landmarkShapes.push({id:lot.id,shape:'spencer-dock-luas-glass-shelter',features:['raised light-rail platform','open glazed shelter','red platform canopy']});
    }else if(kind==='station'){
      building(0,.8,6,2,1.9,DUBLIN_PALETTE.cream);roof(0,2,.8,6.3,2.3);for(const x of [-2,-1,0,1,2]){b(x,.06,-1, .15,.025,3,DUBLIN_PALETTE.roadDark);b(x+.25,.06,-1,.15,.025,3,DUBLIN_PALETTE.roadDark);}b(-.2,.55,-1.2,2.5,.7,.6,DUBLIN_PALETTE.pubGreen);
      landmarkShapes.push({id:lot.id,shape:'covered-rail-station-platforms',features:['long low station hall','parallel platform tracks']});
    }
    else if(kind==='warehouse'){building(0,0,7,3,1.25,'#9c775c');roof(0,1.3,0,7.3,3.4);}
    else if(kind==='landmark'&&lot.id==='dubRingsendMarket'){
      c(0,1.05,0,.48,2,DUBLIN_PALETTE.white);for(const [y,color] of [[.38,DUBLIN_PALETTE.pubRed],[.82,DUBLIN_PALETTE.white],[1.26,DUBLIN_PALETTE.pubRed],[1.7,DUBLIN_PALETTE.white]])c(0,y,0,.493,.2,color);
      c(0,2.17,0,.46,.18,DUBLIN_PALETTE.dark);c(0,2.42,0,.3,.38,DUBLIN_PALETTE.glassMid);c(0,2.64,0,.37,.1,DUBLIN_PALETTE.dark);
      shape('cone',0,2.78,0,.37,.23,.37,DUBLIN_PALETTE.pubRed);b(0,.08,0,1.15,.14,1.15,DUBLIN_PALETTE.roadDark);
      landmarkShapes.push({id:lot.id,shape:'poolbeg-red-and-white-lighthouse',features:['round tapered tower','red-and-white daymark bands','glazed lantern room','pierhead plinth']});
    }else if(kind==='civic'&&lot.id==='dubGarda'){
      building(0,-.15,w*.78,d*.68,1.95,DUBLIN_PALETTE.cream);columns(0,d*.31,4,w*.57,1.55);b(0,2.04,0,w*.88,.15,d*.78,DUBLIN_PALETTE.brick);b(0,.72,d*.37,.52,.92,.08,DUBLIN_PALETTE.darkBlue);b(0,1.82,d*.42,.85,.23,.06,DUBLIN_PALETTE.pubGreen);
      landmarkShapes.push({id:lot.id,shape:'store-street-police-station',features:['symmetrical civic entrance','four stone porch columns','green station sign']});
    }else if(kind==='civic'&&lot.id==='dubIntreo'){
      building(0,-.18,w*.88,d*.68,1.42,DUBLIN_PALETTE.brickLight);b(0,.92,d*.36,w*.82,.55,.07,DUBLIN_PALETTE.glassMid);b(0,1.56,0,w*.93,.13,d*.76,DUBLIN_PALETTE.cream);b(0,.42,d*.4,.56,.75,.08,DUBLIN_PALETTE.darkBlue);
      for(const x of [-w*.31,w*.31])b(x,.9,d*.4,.1,.78,.09,DUBLIN_PALETTE.gold);
      landmarkShapes.push({id:lot.id,shape:'parnell-street-intreo-service-hall',features:['single-storey service hall','broad glazed public counter frontage','wide civic cornice']});
    }else if(kind==='civic'&&lot.id==='dubCitizens'){
      building(0,-.16,w*.78,d*.65,1.8,DUBLIN_PALETTE.brickLight);for(const x of [-w*.25,0,w*.25]){b(x,1.13,d*.34,.52,.62,.09,DUBLIN_PALETTE.glassMid);b(x,1.48,d*.38,.6,.08,.16,DUBLIN_PALETTE.cream);}b(0,.44,d*.37,.42,.8,.08,DUBLIN_PALETTE.pubGreen);b(0,2.04,0,w*.84,.12,d*.73,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'montgomery-house-information-centre',features:['brick three-bay frontage','paired glazed upper windows','green public-entry surround']});
    }else if(kind==='civic'&&lot.id==='dubRathminesGym'){
      building(0,0,w*.8,d*.7,1.7,DUBLIN_PALETTE.brickLight);columns(0,d*.34,4,w*.58,1.5);b(0,1.86,d*.35,w*.64,.18,.11,DUBLIN_PALETTE.brick);b(0,2.02,d*.35,.42,.5,.22,DUBLIN_PALETTE.cream);shape('roof',0,2.42,d*.35,.55,.55,.55,DUBLIN_PALETTE.dark);
      landmarkShapes.push({id:lot.id,shape:'rathmines-town-hall-clock-pavilion',features:['brick assembly hall','projecting columned portico','central clock gable']});
    }else if(kind==='civic'&&lot.id==='dubDockGym'){
      building(0,-.2,w*.84,d*.7,1.62,'#92735e');b(0,1,d*.37,w*.72,.8,.06,DUBLIN_PALETTE.glassDark);b(0,1.92,0,w*.9,.16,d*.77,DUBLIN_PALETTE.dark);for(const x of [-w*.3,0,w*.3])b(x,.45,d*.41,.22,.08,.1,DUBLIN_PALETTE.gold);
      landmarkShapes.push({id:lot.id,shape:'windmill-lane-recording-studio-warehouse',features:['retained industrial brick shell','dark studio glazing','acoustic clerestory roof']});
    }else if(kind==='memorial'){
      b(0,.12,0,w*.82,.16,d*.72,DUBLIN_PALETTE.roadDark);
      for(const [x,h] of [[-.55,1.05],[0,.82],[.5,1.12]]){
        c(x,.2+h*.43,0,.12,h*.78,'#765f49');
        shape('sphere',x,.2+h*.9,0,.22,.25,.22,'#806b55');
      }
      landmarkShapes.push({id:lot.id,shape:'three-figure-famine-memorial'});
    }
    else if(kind==='pub'&&lot.id==='dubTemple'){
      const colors=['#a33f3b','#367255','#d29a45','#9a5540'];
      for(let i=0;i<4;i++){const x=(i-1.5)*w*.235,ht=[1.75,2.15,1.58,1.9][i];building(x,-.55,w*.215,d*.42,ht,colors[i]);roof(x,ht+.1,-.55,w*.23,d*.46,i%2?DUBLIN_PALETTE.brick:DUBLIN_PALETTE.dark);b(x,.3,d*.14,w*.17,.53,.06,DUBLIN_PALETTE.darkBlue);b(x,.62,d*.22,w*.2,.1,.27,DUBLIN_PALETTE.gold);}
      b(0,.2,d*.37,w*.63,.07,.34,DUBLIN_PALETTE.pavement);for(const x of [-w*.25,w*.25])b(x,.4,d*.37,.62,.16,.42,DUBLIN_PALETTE.trunk);
      landmarkShapes.push({id:lot.id,shape:'temple-bar-colourful-pub-court',features:['four narrow painted street fronts','stepped gabled roofline','cobbled music courtyard']});
    }else if(kind==='pub'&&lot.id==='dubKilmainhamCafe'){
      building(0,-.3,w*.72,d*.46,1.05,DUBLIN_PALETTE.brickLight);for(const x of [-w*.27,0,w*.27]){b(x,1.22,-.3,.62,.12,d*.52,DUBLIN_PALETTE.trunk);b(x,1.16,-.3,.54,.09,d*.46,DUBLIN_PALETTE.gold);}
      for(const x of [-w*.36,w*.36]){b(x,.85,-.3,.12,.54,d*.48,DUBLIN_PALETTE.brick);}
      roof(0,1.3,-.3,w*.78,d*.53,DUBLIN_PALETTE.brick);b(0,.15,d*.3,w*.68,.06,.46,DUBLIN_PALETTE.pavement);b(0,.5,d*.42,w*.42,.34,.06,DUBLIN_PALETTE.pubGreen);
      landmarkShapes.push({id:lot.id,shape:'brazen-head-low-inn-and-yard',features:['low historic inn range','deep red pitched roof','enclosed public house yard']});
    }else if(kind==='pub'&&lot.id==='dubWhelans'){
      building(0,-.25,w*.86,d*.56,2.2,DUBLIN_PALETTE.brickLight);for(const x of [-w*.31,0,w*.31]){b(x,1.12,d*.31,.62,.7,.14,DUBLIN_PALETTE.glassMid);b(x,1.47,d*.36,.7,.08,.2,DUBLIN_PALETTE.cream);}
      b(0,2.35,d*.04,w*.72,.13,.5,DUBLIN_PALETTE.dark);b(0,2.4,d*.31,w*.68,.34,.1,DUBLIN_PALETTE.pubRed);for(const x of [-w*.42,w*.42])b(x,1.15,d*.1,.13,1.9,.14,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'whelans-victorian-music-hall-facade',features:['tall Victorian brick frontage','three bay windows','projecting red music marquee']});
    }else if(kind==='pub'||kind==='shoppingStreet'){
      const colors=kind==='pub'?['#963e3a','#3b7057','#b78244']:['#ae7053','#d5b495','#788478'];
      for(let i=0;i<3;i++){const x=(i-1)*w*.28;building(x,-.5,w*.27,d*.55,1.5+(i%2)*.4,colors[i]);b(x,.3,d*.21,w*.23,.55,.06,i===0&&kind==='pub'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.darkBlue);b(x,.65,d*.27,w*.27,.15,.3,DUBLIN_PALETTE.cream);roof(x,1.7,-.5,w*.28,d*.6);}
      if(kind==='pub'){b(0,.2,d*.38,1.2,.08,.7,'#735240');for(const x of [-1,1])c(x,.3,d*.37,.25,.55,'#765b43');}
      if(kind==='pub')landmarkShapes.push({id:lot.id,shape:'painted-three-bay-public-house',features:['painted street gables','sign fascia','front terrace']});
    }else if(kind==='hospital'){
      building(-w*.2,-.35,w*.42,d*.56,2.25,DUBLIN_PALETTE.white);building(w*.22,-.25,w*.42,d*.66,1.75,DUBLIN_PALETTE.cream);
      b(-w*.2,2.28,-.35,w*.44,.12,d*.59,DUBLIN_PALETTE.glassMid);b(0,1.25,d*.34,1.05,.16,.05,DUBLIN_PALETTE.pubRed);b(0,1.25,d*.34,.18,.72,.05,DUBLIN_PALETTE.pubRed);
    }else if(kind==='library'){
      building(0,-.25,w*.82,d*.72,1.75,DUBLIN_PALETTE.cream);b(0,1.1,d*.37,w*.74,.46,.11,DUBLIN_PALETTE.brickLight);
      for(let x=-w*.3;x<=w*.3;x+=.65)b(x,.86,d*.39,.1,.9,.08,DUBLIN_PALETTE.darkBlue);
      roof(0,1.85,-.25,w*.86,d*.75,DUBLIN_PALETTE.brick);
    }else if(kind==='hotel'&&lot.id==='dubHotelDock'){
      building(0,-.22,w*.68,d*.62,2.15,DUBLIN_PALETTE.glassMid);b(0,2.12,-.22,w*.58,.12,d*.54,DUBLIN_PALETTE.darkBlue);
      for(const y of [.56,.92,1.28,1.64])for(const side of [-1,1])b(side*w*.19,y,d*.1,.12,.07,d*.5,DUBLIN_PALETTE.glass);
      // The Marker is known for its crisp light upper profile; separate the crown
      // from the glass tower and give the street a small reflecting forecourt.
      b(0,2.34,-.22,w*.72,.12,d*.67,DUBLIN_PALETTE.cream);shape('roof',0,2.56,-.22,w*.58,.38,d*.55,DUBLIN_PALETTE.cream);
      b(0,.31,d*.43,w*.64,.04,.28,DUBLIN_PALETTE.water);b(0,.42,d*.43,.32,.22,.06,DUBLIN_PALETTE.cream);
      landmarkShapes.push({id:lot.id,shape:'marker-hotel-glass-tower-and-pale-crown',features:['stacked glazed tower','bright angular crown','reflecting forecourt']});
    }else if(kind==='office'||kind==='hotel'){
      const towerH=Math.min(lot.h||3.2,kind==='hotel'?4.4:5.2), towerW=w*.58;
      building(0,-.2,towerW,d*.65,towerH,kind==='hotel'?DUBLIN_PALETTE.cream:DUBLIN_PALETTE.glassMid);
      for(let y=.5;y<towerH-.2;y+=.48)b(0,y,d*.33,towerW*.84,.07,.05,DUBLIN_PALETTE.glass);
      b(0,towerH+.15,-.2,towerW*.82,.18,d*.8,kind==='hotel'?DUBLIN_PALETTE.brick:DUBLIN_PALETTE.dark);
      if(kind==='hotel')b(0,.06,d*.46,w*.5,.05,.48,DUBLIN_PALETTE.water);
    }else if(kind==='cafe'){
      building(0,-.25,w*.76,d*.64,1.55,DUBLIN_PALETTE.brickLight);roof(0,1.6,-.25,w*.8,d*.68,DUBLIN_PALETTE.dark);
      b(0,.95,d*.33,w*.62,.55,.06,DUBLIN_PALETTE.glassMid);b(0,.53,d*.39,w*.68,.17,.38,DUBLIN_PALETTE.pubRed);
      for(const x of [-w*.25,0,w*.25]){b(x,.12,d*.4,.55,.05,.42,DUBLIN_PALETTE.trunk);c(x,.31,d*.4,.035,.38,DUBLIN_PALETTE.trunk);}
    }else if(kind==='market'){
      building(0,-.35,w*.8,d*.43,.8,DUBLIN_PALETTE.cream);roof(0,.85,-.35,w*.84,d*.47,DUBLIN_PALETTE.brick);
      for(let x=-w*.32;x<=w*.32;x+=w*.32){b(x,.52,d*.05,w*.23,.7,.08,[DUBLIN_PALETTE.pubRed,DUBLIN_PALETTE.pubGreen,DUBLIN_PALETTE.gold][Math.round((x/w+.32)*3)%3]);b(x,.18,d*.4,.8,.3,.48,DUBLIN_PALETTE.trunk);}
    }else if(kind==='theatre'||kind==='cinema'){
      building(0,-.3,w*.84,d*.7,2.1,kind==='theatre'?DUBLIN_PALETTE.brick:DUBLIN_PALETTE.darkBlue);
      b(0,1.65,d*.37,w*.72,.35,.08,DUBLIN_PALETTE.pubRed);b(0,1.66,d*.42,w*.56,.12,.025,DUBLIN_PALETTE.gold);
      for(const x of [-w*.28,w*.28])b(x,.85,d*.37,.3,.8,.05,DUBLIN_PALETTE.glassMid);
      if(kind==='theatre')for(const x of [-w*.3,-w*.15,0,w*.15,w*.3])c(x,2.35,-.3,.12,.3,DUBLIN_PALETTE.gold);
    }else if(kind==='gym'){
      building(0,-.2,w*.84,d*.7,1.4,DUBLIN_PALETTE.glassMid);b(0,.95,d*.36,w*.78,.23,.06,DUBLIN_PALETTE.white);
      b(0,.06,-d*.12,w*.72,.035,d*.3,DUBLIN_PALETTE.lawn);b(0,.085,-d*.12,.035,.015,d*.28,DUBLIN_PALETTE.white);
    }else if(kind==='museum'&&lot.id==='dubDublinia'){
      building(0,-.3,w*.78,d*.58,1.34,DUBLIN_PALETTE.brickLight);b(0,1.05,-.3,w*.87,.12,d*.64,DUBLIN_PALETTE.brick);
      for(const x of [-w*.29,-w*.1,w*.1,w*.29]){b(x,.74,d*.13,.24,.34,.06,DUBLIN_PALETTE.darkBlue);b(x,1.38,-.3,.11,.6,.11,DUBLIN_PALETTE.trunk);}
      shape('roof',0,1.6,-.3,w*.95,.72,d*.72,DUBLIN_PALETTE.dark);b(0,.12,d*.34,w*.55,.06,.28,DUBLIN_PALETTE.pavement);
      landmarkShapes.push({id:lot.id,shape:'dublinia-medieval-gabled-exhibition-hall',features:['timber-framed visitor facade','deep pitched roof','row of narrow medieval window bays']});
    }else if(kind==='museum'){
      building(0,-.35,w*.86,d*.58,1.65,DUBLIN_PALETTE.white);columns(0,d*.23,5,w*.72,1.45);roof(0,1.78,-.35,w*.9,d*.62,DUBLIN_PALETTE.darkBlue);
      b(0,.55,d*.31,w*.38,.72,.045,DUBLIN_PALETTE.glassMid);
    }else if(kind==='shop'&&lot.id==='dubPenneys'){
      building(0,-.15,w*.92,d*.67,1.65,DUBLIN_PALETTE.cream);b(0,1.08,d*.36,w*.86,.67,.09,DUBLIN_PALETTE.glassMid);b(0,1.54,0,w*.98,.16,d*.75,DUBLIN_PALETTE.brick);
      for(const x of [-w*.35,w*.35])b(x,.7,d*.4,.1,1.1,.12,DUBLIN_PALETTE.brick);b(0,.39,d*.41,.52,.76,.1,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'penneys-broad-mary-street-retail-front',features:['wide department-store frontage','continuous display glazing','stone pilaster frame']});
    }else if(kind==='shop'&&lot.id==='dubBrown'){
      building(0,-.2,w*.78,d*.66,2.15,DUBLIN_PALETTE.brickLight);for(const x of [-w*.3,-w*.1,w*.1,w*.3]){c(x,.95,d*.32,.055,1.5,DUBLIN_PALETTE.cream);b(x,1.55,d*.36,.45,.12,.15,DUBLIN_PALETTE.cream);}
      b(0,2.27,-.2,w*.9,.16,d*.74,DUBLIN_PALETTE.dark);b(0,.36,d*.39,.58,.65,.08,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'brown-thomas-stone-department-store',features:['tall masonry retail facade','four vertical stone bays','heavy projecting cornice']});
    }else if(kind==='shop'&&lot.id==='dubDunnes'){
      building(0,-.2,w*.9,d*.68,1.58,DUBLIN_PALETTE.cream);b(0,1.34,-.2,w*.96,.27,d*.76,DUBLIN_PALETTE.pubRed);b(0,1.35,d*.34,w*.84,.56,.08,DUBLIN_PALETTE.glassMid);
      for(const x of [-w*.36,w*.36])b(x,.64,d*.4,.15,1.15,.18,DUBLIN_PALETTE.cream);b(0,.39,d*.42,.42,.75,.1,DUBLIN_PALETTE.darkBlue);
      landmarkShapes.push({id:lot.id,shape:'dunnes-henry-street-corner-superstore',features:['long corner-shop window wall','red continuous parapet band','double-height entrance bay']});
    }else{
      const color=lot.id==='dubNaija'?DUBLIN_PALETTE.pubGreen:kind==='civic'?DUBLIN_PALETTE.cream:DUBLIN_PALETTE.brick;building(0,-.2,w*.8,d*.65,lot.h-.2,color);b(0,.45,d*.28,w*.68,.55,.04,DUBLIN_PALETTE.glassDark);b(0,.84,d*.31,w*.78,.16,.25,lot.id==='dubLidl'?DUBLIN_PALETTE.gold:lot.id==='dubTesco'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.cream);
    }
    // Public buildings receive an additional site-specific roof and entrance motif.
    // The deterministic palette keeps geometry batched without cloning one civic box.
    if(!lot.signature&&!['park','green','airport'].includes(kind)&&w>=2.65&&d>=2){
      const hash=[...lot.id].reduce((sum,char)=>(sum*31+char.charCodeAt(0))>>>0,17),variant=hash%8,front=d*.39,facades=[
        ['projecting-portico',()=>{for(const x of [-w*.22,0,w*.22])c(x,.68,front,.055,1.2,DUBLIN_PALETTE.cream);b(0,1.3,front,w*.62,.13,.36,DUBLIN_PALETTE.cream);}],
        ['clock-tower',()=>{b(w*.3,lot.h*.54,-d*.25,.48,lot.h*.72,.48,DUBLIN_PALETTE.brickLight);shape('roof',w*.3,lot.h*.9,-d*.25,.64,.55,.64,DUBLIN_PALETTE.dark);shape('sphere',w*.3,lot.h*.67,.02,.24,.24,.09,DUBLIN_PALETTE.gold);}],
        ['corner-lantern',()=>{b(-w*.3,lot.h*.6,-d*.25,.42,lot.h*.72,.42,DUBLIN_PALETTE.cream);shape('dome',-w*.3,lot.h*.99,-d*.25,.3,.3,.3,DUBLIN_PALETTE.pubGreen);}],
        ['stepped-roofline',()=>{b(0,lot.h-.04,0,w*.65,.2,d*.62,DUBLIN_PALETTE.brick);b(0,lot.h+.1,0,w*.43,.17,d*.4,DUBLIN_PALETTE.cream);}],
        ['paired-roof-turrets',()=>{for(const x of [-w*.31,w*.31]){c(x,lot.h*.77,-d*.25,.23,lot.h*.55,DUBLIN_PALETTE.brickLight);shape('roof',x,lot.h+.05,-d*.25,.42,.48,.42,DUBLIN_PALETTE.dark);}}],
        ['glass-entry-bay',()=>{b(w*.19,.95,front,w*.34,1.7,.12,DUBLIN_PALETTE.glassMid);for(const y of [.35,.75,1.15,1.55])b(w*.19,y,front+.07,w*.34,.045,.05,DUBLIN_PALETTE.cream);}],
        ['arcaded-frontage',()=>{for(const x of [-w*.28,0,w*.28]){c(x,.58,front,.045,1.02,DUBLIN_PALETTE.cream);shape('dome',x,.99,front,.18,.16,.08,DUBLIN_PALETTE.cream);}}],
        ['bay-window-pavilions',()=>{for(const x of [-w*.25,w*.25]){b(x,1.02,front,.64,.72,.28,DUBLIN_PALETTE.glassMid);b(x,1.4,front,.72,.08,.34,DUBLIN_PALETTE.cream);}}],
      ][variant];facades[1]();
      const record=landmarkShapes.find(item=>item.id===lot.id);
      if(record){record.shape+=`-${facades[0]}`;record.features=[...(record.features||[]),facades[0]];record.facadeVariant=facades[0];}
      else landmarkShapes.push({id:lot.id,shape:`${kind}-${facades[0]}`,features:[facades[0]],facadeVariant:facades[0]});
    }
    // Small architectural cues stay inside each selectable footprint.
    if(kind!=='airport'){
      const front=d*.32;
      if(['shop','pub','shoppingStreet','cafe','market'].includes(kind)){
        const awning=kind==='pub'?DUBLIN_PALETTE.pubRed:kind==='market'?DUBLIN_PALETTE.gold:DUBLIN_PALETTE.pubGreen;
        b(0,1.03,front+.12,Math.min(w*.72,3.5),.12,.42,awning);
        for(let x=-Math.min(w*.34,1.5);x<=Math.min(w*.34,1.5);x+=.35)b(x,.96,front+.34,.12,.12,.045,x%0.7===0?DUBLIN_PALETTE.cream:awning);
      }
      if(['hospital','office','hotel','convention','station','library','museum','theatre','cinema','civic'].includes(kind)){
        const doorW=Math.min(.42,w*.16);b(0,.42,front+.09,doorW,.78,.07,DUBLIN_PALETTE.darkBlue);
        b(0,.84,front+.1,doorW+.12,.07,.12,DUBLIN_PALETTE.cream);
        b(0,1.12,front+.28,Math.min(.85,w*.22),.09,.4,DUBLIN_PALETTE.cream);
        b(0,.08,front+.28,Math.min(1.25,w*.34),.12,.46,DUBLIN_PALETTE.pavement);
      }
      if(!lot.signature&&['office','hotel','hospital','convention','station'].includes(kind)){
        const roofY=(lot.h||3)+.08;
        for(const x of [-Math.min(w*.22,1.5),Math.min(w*.22,1.5)]){
          b(x,roofY,-.2,.48,.26,.42,DUBLIN_PALETTE.roadDark);
          b(x,roofY+.17,-.2,.56,.06,.5,DUBLIN_PALETTE.glassMid);
        }
        b(0,roofY+.1,-.2,w*.55,.12,.09,DUBLIN_PALETTE.white);
      }
      if(kind==='pub'){
        b(0,1.35,front+.16,Math.min(1.7,w*.42),.28,.09,DUBLIN_PALETTE.dark);
        b(0,1.36,front+.22,Math.min(1.45,w*.35),.11,.025,DUBLIN_PALETTE.gold);
      }
      if(kind==='hospital'){
        b(w*.27,.08,0,w*.38,.035,d*.42,DUBLIN_PALETTE.roadDark);
        for(let x=w*.15;x<w*.4;x+=.42)b(x,.1,0,.18,.025,.08,DUBLIN_PALETTE.white);
        b(0,2.48,front+.05,.5,.3,.08,DUBLIN_PALETTE.pubRed);
      }
      if(['park','green'].includes(kind)){
        for(const x of [-w*.25,w*.25]){
          b(x,.42,d*.18,1.05,.1,.32,DUBLIN_PALETTE.trunk);b(x,.67,d*.3,1.05,.38,.08,DUBLIN_PALETTE.trunk);
          c(x-w*.09,.8,d*.3,.035,1.5,DUBLIN_PALETTE.dark);
          b(x-w*.09,1.58,d*.3,.2,.08,.2,DUBLIN_PALETTE.gold);
        }
      }
      if(!['park','green','spire','stadium'].includes(kind)){
        const fasciaWidth=Math.min(w*.45,1.7);
        const fascia=textSurface(lot.name.toUpperCase(),DUBLIN_PALETTE.white,fasciaWidth,landmarks,lot.x,1+origin[1],lot.z+d*.45,false,kind==='pub'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.hedge);
        if(fascia){fascia.name='Dublin venue fascia';fascia.userData.kind='venue-fascia';fascia.userData.lotId=lot.id;fascia.userData.width=fasciaWidth;}
      }
    }
    if(!landmarkShapes.some(item=>item.id===lot.id))landmarkShapes.push({id:lot.id,shape:kind});
    origin=[0,0,0];
    activeParent=world;activeLotId=null;
  }
  // Georgian terraces: coloured doors, slate roofs, chimneys and tiny gardens.
  let houses=0;const houseFootprints=[];
  function lotClear(x,z,w,d,pad=0){
    if(x-w/2 < DUBLIN_URBAN_BOUNDS.minX || x+w/2 > DUBLIN_URBAN_BOUNDS.maxX || z-d/2 < DUBLIN_URBAN_BOUNDS.minZ || z+d/2 > DUBLIN_URBAN_BOUNDS.maxZ)return false;
    if(!dublinLots.every(lot=>Math.abs(x-lot.x)>=(w+lot.w)/2+pad||Math.abs(z-lot.z)>=(d+lot.d)/2+pad))return false;
    return houseFootprints.every(home=>Math.abs(x-home.x)>=(w+home.w)/2+pad||Math.abs(z-home.z)>=(d+home.d)/2+pad);
  }
  // Street lamps follow the pavements and stay clear of every landmark lot.
  for(const x of [-36,-30,-24,-18,-12,-6,0,6,12,18,24,30,36])for(const z of [-3.65,3.65])if(lotClear(x,z,.35,.35,.25)){
    c(x,.95,z,.035,1.8,DUBLIN_PALETTE.dark);b(x,1.9,z,.22,.08,.22,DUBLIN_PALETTE.gold);
  }
  function footprintClearOfRoads(x,z,w,d){
    for(const lane of DUBLIN_ROAD_LANES)for(const segment of lane.segments){
      const dx=segment.b.x-segment.a.x,dz=segment.b.z-segment.a.z,len2=dx*dx+dz*dz||1;
      for(const sx of [-w/2,0,w/2])for(const sz of [-d/2,0,d/2]){const px=x+sx-segment.a.x,pz=z+sz-segment.a.z,t=Math.max(0,Math.min(1,(px*dx+pz*dz)/len2));if(Math.hypot(px-t*dx,pz-t*dz)<lane.width/2+.2)return false;}
    }return true;
  }
  function terrace(x,z,color){
    const width=1.45,depth=2.35;
    if(!lotClear(x,z,width,depth,.1)||!footprintClearOfRoads(x,z,width,depth)||![-.49,0,.49].every(dx=>[-.49,0,.49].every(dz=>isDublinLand(x+dx*width,z+dz*depth))))return;
    const style=houses%4,front=depth*.34;
    b(x,.27,z,width,.06,depth,DUBLIN_PALETTE.pavement,homes);building(x,z,width*.88,depth*.68,1.5+(style%2)*.15,color,homes);
    shape('roof',x,1.9,z,width*.72,.62,depth*.58,style===2?DUBLIN_PALETTE.brick:DUBLIN_PALETTE.dark,homes);
    b(x+.45,2.12,z-.35,.2,.44,.2,DUBLIN_PALETTE.brick,homes);b(x,.53,z+front,.34,.62,.04,[DUBLIN_PALETTE.glassDark,DUBLIN_PALETTE.pubRed,DUBLIN_PALETTE.pubGreen,DUBLIN_PALETTE.gold][style],homes);
    b(x,.33,z+depth*.44,width*.8,.08,.33,DUBLIN_PALETTE.lawn,homes);
    if(style===1||style===3){b(x,.9,z-depth*.36,width*.7,.12,.28,DUBLIN_PALETTE.cream,homes);b(x,.98,z-depth*.38,width*.5,.1,.08,DUBLIN_PALETTE.darkBlue,homes);}
    houseFootprints.push({x,z,w:width,d:depth});houses++;
  }
  // Coherent terrace belts make continuous neighbourhood blocks around the city:
  // the airport edge, north inner city, west heritage districts, south centre and docklands.
  const infillZones=[
    {x0:-43,x1:-25,z0:-37,z1:-27,palette:['#aa795f','#c09a78','#996c58']},
    {x0:-20,x1:8,z0:-38,z1:-27,palette:['#b77c5d','#c2946e','#a8755b']},
    {x0:16,x1:39,z0:-38,z1:-27,palette:['#bd8c6a','#9f725e','#c39b78']},
    {x0:-43,x1:-26,z0:-3,z1:5,palette:['#a77964','#c09a78','#bb8569']},
    {x0:-19,x1:-8,z0:-4,z1:7,palette:['#b58d72','#c3a386','#a16f59']},
    {x0:8,x1:27,z0:-27,z1:-9,palette:['#a97860','#bc9274','#c59a78']},
    {x0:-42,x1:-23,z0:-24,z1:-7,palette:['#b58e70','#a97761','#c49b7b']},
    {x0:-22,x1:0,z0:-24,z1:-8,palette:['#b48768','#c19a78','#a16f59']},
    {x0:18,x1:39,z0:-24,z1:-9,palette:['#a87861','#bc9476','#c5a07b']},
    {x0:-25,x1:-20,z0:8,z1:31,palette:['#b28462','#bc9678','#a8755b']},
    {x0:-18,x1:-10,z0:9,z1:31,palette:['#aa795f','#c09a78','#996c58']},
    {x0:-43,x1:-27,z0:9,z1:31,palette:['#b28462','#bc9678','#a8755b']},
    {x0:-19,x1:1,z0:9,z1:31,palette:['#a97d65','#c2a487','#af8a70']},
    {x0:2,x1:12,z0:9,z1:31,palette:['#aa8269','#c0a080','#ad775f']},
    {x0:14,x1:39,z0:9,z1:31,palette:['#b08a69','#b07761','#c0a186']},
    ...DUBLIN_EXPANSION_INFILL,
  ];
  for(const zone of infillZones){let row=0;for(let z=zone.z0;z<=zone.z1;z+=2.62,row++){const stagger=row%2?.82:0;for(let x=zone.x0+stagger;x<=zone.x1;x+=1.88){const colourIndex=(Math.floor((x-zone.x0)/1.7)+row)%zone.palette.length;terrace(x,z,zone.palette[colourIndex]);}}}
  for(let i=0;i<24;i++){const x=-38+i*3.2,z=i%2?-3:3;if(lotClear(x,z,.8,.8,.35)&&footprintClearOfRoads(x,z,.8,.8))tree(x,z,.65,homes);}
  for(const [x,z] of [[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])if(lotClear(x,z,1.5,1.5,.35))tree(x,z,1.2);
  const forestPlacements=createDublinForestPlacements({parent:world,add:placement=>treePlacements.push(placement)});
  for(let x=-74;x<=39;x+=5.2){
    const z=51.4;
    if(lotClear(x,z,1.2,1.2,.8)&&footprintClearOfRoads(x,z,1.2,1.2))treePlacements.push({x,y:.26,z,height:1.75,model:'large',parent:world,rotation:(Math.round(x*10)%8)*Math.PI/4,lotId:'dublin-south-tree-belt'});
  }
  for(const [text,x,z,w] of [['RIVER LIFFEY',-15,0,9],['DUBLIN BAY',53,15,11],['NORTHSIDE',-14,-33,8],['CITY CENTRE',-3,31,8],['DOCKLANDS',28,19,8],['DUBLIN FOREST',-88,-4,13],['INCHICORE',-62,34,8],['RATHMINES',-8,48,7],['BALLSBRIDGE',27,48,9]])textSurface(text,text==='RIVER LIFFEY'||text==='DUBLIN BAY'?'#d8edf0':'#7f8e70',w,world,x,.3,z);
  for(const [x,z] of [[-22,-4],[22,5],[-22,31]]){
    b(x,1.5,z,3.4,1.4,.1,'#253930',boards);for(const dx of [-1.2,1.2])b(x+dx,.75,z,.07,1.5,.07,'#253930',boards);
    textSurface('DUBLIN LIFE','#fff',3.2,boards,x,1.5,z+.06,false,'#28644e');
  }
  const material=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.88});
  const landmarkHeightByLot={};
  for(const {parent,type,cast,items} of batches.values()){
    for(const item of items){if(item.lotId)landmarkHeightByLot[item.lotId]=Math.max(landmarkHeightByLot[item.lotId]||0,item.p[1]+item.s[1]/2);}
    const mesh=new THREE.InstancedMesh(geometry[type],material,items.length),temp=new THREE.Object3D();
    items.forEach((item,i)=>{temp.position.set(...item.p);temp.scale.set(...item.s);temp.rotation.set(...item.rotation);temp.updateMatrix();mesh.setMatrixAt(i,temp.matrix);mesh.setColorAt(i,new THREE.Color(item.color));});
    mesh.userData.category=parent===homes?'homes':parent===landmarks?'landmarks':'environment';
    mesh.userData.geometryType=type;
    mesh.userData.lotIds=[...new Set(items.map(item=>item.lotId).filter(Boolean))];
    mesh.castShadow=cast;mesh.receiveShadow=true;mesh.computeBoundingSphere();parent.add(mesh);
  }
  const structuralData=new Map(dublinLots.filter(lot=>!['airport','park','green'].includes(lot.kind)&&!lot.kind.endsWith('Bridge')).map(lot=>[lot.id,[]]));
  const round=value=>Math.round(value*1000)/1000;
  for(const {type,items} of batches.values())for(const item of items){
    if(!item.lotId||!structuralData.has(item.lotId))continue;
    const lot=dublinLots.find(candidate=>candidate.id===item.lotId);
    // Keep actual geometry type, translated transforms and dimensions; discard
    // color and city position so lookalikes cannot pass by changing only paint.
    structuralData.get(item.lotId).push([type,round(item.p[0]-lot.x),round(item.p[1]-.26),round(item.p[2]-lot.z),...item.s.map(round),...item.rotation.map(round)]);
  }
  const structuralFingerprints=Object.fromEntries([...structuralData].map(([id,parts])=>[id,JSON.stringify(parts.sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b))))]));
  const metrics={houses,houseParcels:houseFootprints.length,selectablePlaces:places.length,parkPlans:parkDetails.length,publicStructures:structuralData.size,uniqueStructureFingerprints:new Set(Object.values(structuralFingerprints)).size,roadDetails:roadDetails.metrics};
  world.visible=false;world.userData.houses=houses;world.userData.houseFootprints=houseFootprints;world.userData.parkDetails=parkDetails;world.userData.structuralFingerprints=structuralFingerprints;world.userData.metrics=metrics;world.userData.palette=DUBLIN_PALETTE;world.userData.lotCount=places.length;world.userData.batchCount=batches.size;world.userData.landmarks=landmarks;world.userData.liffeyWater=liffeyWater;world.userData.landmarkHeightByLot=landmarkHeightByLot;world.userData.roadLaneCount=DUBLIN_ROAD_LANES.length;world.userData.treePlacements=treePlacements;world.userData.roadMeshes=roadMeshes;world.userData.landmarkShapes=landmarkShapes;world.userData.roadDetails=roadDetails.metrics;
  return {world,homes,landmarks,boards,places,isLand:isDublinLand,airport:airportGroup,treePlacements,forestPlacements,roadMeshes,landmarkShapes,parkDetails,houseFootprints,landmarkHeightByLot,structuralFingerprints,metrics,roadDetails:roadDetails.metrics,urbanBounds:{...DUBLIN_URBAN_BOUNDS},forestBounds:{...DUBLIN_FOREST_BOUNDS},worldBounds:{...DUBLIN_WORLD_BOUNDS},upstreamBasin:{...DUBLIN_UPSTREAM_BASIN}};
}
