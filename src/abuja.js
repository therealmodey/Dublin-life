import * as THREE from 'three';
import * as primitives from './abuja-primitives.js';
import {extraArt, signs} from './abuja-landmarks.js';
import * as layout from './abuja-layout.js';
import info from './abuja-info.json';

// Share geometry and draw repeated details in batches to keep city switching quick.
const geometry = {
  box: new THREE.BoxGeometry(1,1,1),
  cyl: new THREE.CylinderGeometry(1,1,1,20),
  cyl8: new THREE.CylinderGeometry(1,1,1,8),
  cyl6: new THREE.CylinderGeometry(1,1,1,6),
  cylT: new THREE.CylinderGeometry(.75,1,1,12),
  halfCyl: new THREE.CylinderGeometry(1,1,1,18,1,false,0,Math.PI),
  cone: new THREE.ConeGeometry(1,1,16),
  cone8: new THREE.ConeGeometry(1,1,8),
  cone7: new THREE.ConeGeometry(1,1,7),
  pyr: new THREE.ConeGeometry(1,1,4,1,false,Math.PI/4),
  dome: new THREE.SphereGeometry(1,22,11,0,Math.PI*2,0,Math.PI/2),
  sphere: new THREE.SphereGeometry(1,14,10),
  ico: new THREE.IcosahedronGeometry(1,0),
  rock: new THREE.DodecahedronGeometry(1,1),
  hill: new THREE.DodecahedronGeometry(1,0),
  mono: new THREE.CylinderGeometry(.78,1,1,16,3),
  torus: new THREE.TorusGeometry(1,.07,6,30),
  bowlWall: new THREE.CylinderGeometry(1,.95,1,40,1,true),
  bowlSeats: new THREE.CylinderGeometry(1,.66,1,40,1,true),
  ring: new THREE.RingGeometry(.72,1,40,1,0,Math.PI*1.15),
  disc: new THREE.CylinderGeometry(1,1,1,32)
};
const material = (color, kind='matte') => {
  if(kind==='glow')return new THREE.MeshBasicMaterial({color,toneMapped:false});
  return new THREE.MeshStandardMaterial({color,roughness:kind==='metal'?.4:kind==='glass'?.18:kind==='wet'?.25:.95,
    metalness:kind==='metal'?.55:kind==='glass'?.15:0,flatShading:kind==='flat',
    side:kind==='ds'?THREE.DoubleSide:THREE.FrontSide,transparent:kind==='clear'||kind==='beam',opacity:kind==='clear'?.4:kind==='beam'?.12:1,
    depthWrite:kind!=='beam'&&kind!=='clear'});
};
function batch(parent, items, shape, color, kind='matte', cast=true) {
  if(!items.length)return;
  const mesh=new THREE.InstancedMesh(geometry[shape],material(color,kind),items.length), temp=new THREE.Object3D();
  items.forEach((item,index)=>{
    temp.position.set(...item.p);temp.scale.set(...item.s);
    temp.rotation.set(...(item.e||[0,item.r||0,0]),'YXZ');temp.updateMatrix();mesh.setMatrixAt(index,temp.matrix);
    if(item.c)mesh.setColorAt(index,new THREE.Color(item.c));
  });
  mesh.castShadow=cast;mesh.receiveShadow=true;mesh.computeBoundingSphere();parent.add(mesh);
}
function primitiveBatches(parent, placements) {
  const groups=new Map(), lot=new THREE.Object3D(), local=new THREE.Object3D();
  for(const place of placements){
    lot.position.set(place.x,place.y??.28,place.z);lot.rotation.set(0,place.ry||0,0);lot.scale.set(...(place.scale||[place.art||1,place.art||1,place.art||1]));lot.updateMatrix();
    for(const descriptor of place.artwork){
      const [kind,color]=primitives.palette[descriptor.m], key=`${descriptor.g}:${kind}`;
      if(!groups.has(key))groups.set(key,{shape:descriptor.g,kind,instances:[]});
      local.position.set(...descriptor.p);local.scale.set(...descriptor.s);local.rotation.set(...(descriptor.r||[0,0,0]),'YXZ');local.updateMatrix();
      groups.get(key).instances.push({matrix:lot.matrix.clone().multiply(local.matrix),color});
    }
  }
  for(const {shape,kind,instances} of groups.values()){
    const mesh=new THREE.InstancedMesh(geometry[shape],material('#fff',kind),instances.length);
    instances.forEach((instance,index)=>{mesh.setMatrixAt(index,instance.matrix);mesh.setColorAt(index,new THREE.Color(instance.color));});
    mesh.castShadow=!['glow','clear','beam'].includes(kind);mesh.receiveShadow=mesh.castShadow;mesh.computeBoundingSphere();parent.add(mesh);
  }
}
export function buildAbuja({box,textSurface}) {
  const world=new THREE.Group(), homes=new THREE.Group(), boards=new THREE.Group();world.add(homes,boards);
  box(world,0,-.07,0,600,.1,500,'#93b56c');box(world,-2,.08,.5,124,.2,95,'#b7d18b');
  layout.patches.forEach(([x0,x1,z0,z1,color])=>box(world,(x0+x1)/2,.185,(z0+z1)/2,x1-x0,.012,z1-z0,color));
  for(const [key,shape,color,cast] of [
    ['pavements','box','#ddd8cb',false],['roads','box','#7d848c',false],['medians','box','#72b24e',false],
    ['stripes','box','#f3f4f1',false],['roundabouts','disc','#7d848c',false],['roundaboutGreens','disc','#6fae4c',false],
    ['treeTrunks','cyl6','#7a5a3a',false],['treeCrowns','ico','#fff',true],['palmTrunks','cyl6','#8a6a45',false],
    ['palmCrowns','cone7','#3f9b4a',true],['hedges','box','#3f7f35',false],['flowers','dome','#fff',false],
    ['lampPosts','cyl6','#8d96a0',false],['lampHeads','box','#fff3c4',false],['hills','hill','#fff',false],
    ['cars','box','#fff',true],['carWindows','box','#1e293b',false]
  ])batch(world,layout[key],shape,color,key==='hills'||key==='treeCrowns'?'flat':key==='lampHeads'?'glow':'matte',cast);
  batch(homes,layout.houses,'box','#fff');batch(homes,layout.roofs,'pyr','#fff');
  const lake=new THREE.Mesh(geometry.disc,material('#4fb3e6','wet'));lake.scale.set(8,.02,5);lake.position.set(-36,.22,-9);world.add(lake);
  layout.groundNames.forEach(([text,x,z,w,color])=>textSurface(text,color,w,world,x,.258,z));
  const places=[], placements=[];
  for(const [id,lot] of Object.entries(layout.lots)){
    const group=new THREE.Group();group.position.set(lot.x,.28,lot.z);group.rotation.y=lot.ry||0;world.add(group);
    if(lot.round){const pad=new THREE.Mesh(geometry.disc,material(lot.pad||'#ece7dc'));pad.scale.set(lot.w/2,.08,lot.w/2);pad.position.y=-.04;group.add(pad);}
    else box(group,0,-.04,0,lot.w,.08,lot.d,lot.pad||'#ece7dc');
    placements.push({...lot,artwork:extraArt[id]||primitives.ART[id],scale:id==='abjAirport'?[.84,1,1.15]:undefined});
    const sign=signs[id];
    if(sign){const [text,,w,,x,y,z,bg,fg]=sign;textSurface(text,fg,w,group,x,y,z,false,bg);}
    else if(!id.startsWith('home_'))textSurface(lot.label.toUpperCase(),'#fff',Math.min(lot.w*.55,3),group,0,Math.min(lot.top*.65,1.4),lot.d/2+.03,false,'#0f3d2e');
    if(!id.startsWith('home_'))places.push({id,city:'abuja',name:lot.label,area:info[id]?.area||'Abuja',emoji:info[id]?.emoji||'📍',...lot,h:lot.top,group});
  }
  primitiveBatches(world,[...placements,{x:52,z:-1,y:.2,artwork:primitives.ASO_ROCK},{x:-56,z:-8,y:.2,artwork:primitives.ZUMA_ROCK},{x:46,z:12,y:.2,artwork:primitives.ASO_VILLA}]);
  // Static planes on the airport apron, matching the miniature-map style.
  for(let i=0;i<4;i++){
    const plane=new THREE.Group();plane.position.set(-39+i*7,.65,35.8);world.add(plane);
    box(plane,0,0,0,.28,.25,2.3,'#f7f5ef');box(plane,0,0,-.1,2.2,.05,.42,'#f7f5ef');box(plane,0,.19,.8,.07,.5,.5,'#0f8a4f');box(plane,0,0,.9,.9,.04,.25,'#f7f5ef');
  }
  for(const [i,x,z] of [[0,-17,-30],[1,6,-28],[2,20,-3],[3,40,22],[4,-32,19],[5,-45,-17]]){
    box(boards,x,1.8,z,4.4,2,.12,'#202431');for(const dx of [-1.8,1.8])box(boards,x+dx,.9,z,.09,1.8,.09,'#202431');
    textSurface(i%2?'ABUJA LIFE':'YOUR AD HERE','#fff',4.2,boards,x,1.8,z+.07,false,i%2?'#206b57':'#276998');
  }
  world.visible=false;
  return {world,homes,boards,places};
}
