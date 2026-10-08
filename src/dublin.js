import * as THREE from 'three';
import {DUBLIN_PALETTE} from './dublin-palette.js';
export {DUBLIN_PALETTE, DUBLIN_BACKGROUND} from './dublin-palette.js';

// An authored, compressed game layout. North is -Z, east is +X.
// Irish landmarks retain their neighbourhood relationships, not survey scale.
import {dublinLots} from './dublin-locations.js';
import {buildDublinAirport} from './dublin-airport.js';
export {dublinLots};

export const dublinBridges = [-28,-18,-5,2,18,30];
export function isDublinLand(x,z){
  if(x < -42 || x > 40 || z < -47 || z > 33)return false;
  if(Math.abs(z)<2.25)return dublinBridges.some(b=>Math.abs(x-b)<(b===30?1:.6));
  if(x>23.7&&x<30.3&&z>9.2&&z<14.8)return false;
  return true;
}

export function buildDublin({textSurface}) {
  const world=new THREE.Group(), homes=new THREE.Group(), landmarks=new THREE.Group(), boards=new THREE.Group();
  world.name='Dublin';homes.name='Dublin neighbourhoods';landmarks.name='Dublin landmarks';world.add(homes,landmarks,boards);
  const geometry={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(1,1,1,16),cone:new THREE.ConeGeometry(1,1,12),sphere:new THREE.IcosahedronGeometry(1,1),roof:new THREE.ConeGeometry(1,1,4,1,false,Math.PI/4)};
  const batches=new Map();
  let origin=[0,0,0], activeParent=world, activeLotId=null;
  function shape(type,x,y,z,w,h,d,color,parent=activeParent,rotation=[0,0,0]){
    const cast=h>.15;
    const key=`${parent.uuid}:${type}:${cast}`;if(!batches.has(key))batches.set(key,{parent,type,cast,items:[]});
    batches.get(key).items.push({p:[x+origin[0],y+origin[1],z+origin[2]],s:[w,h,d],color,rotation,lotId:activeLotId});
  }
  const b=(x,y,z,w,h,d,c,parent=activeParent,rotation)=>shape('box',x,y,z,w,h,d,c,parent,rotation);
  const c=(x,y,z,r,h,color,parent=activeParent)=>shape('cyl',x,y,z,r,h,r,color,parent);
  function tree(x,z,size=1,parent=activeParent){c(x,.45*size,z,.07*size,.9*size,DUBLIN_PALETTE.trunk,parent);shape('sphere',x,1.1*size,z,.55*size,.7*size,.55*size,DUBLIN_PALETTE.leaf,parent);}
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
      for(let col=-w/2+.35;col<w/2;col+=.65)window(x+col,row,z+d/2+.018,.3,.035,true);
      if(w>1.35&&d>1.25){
        for(const side of [-1,1])window(x+side*(w/2+.018),row,z,.3,true);
        for(let col=-w/2+.4;col<w/2-.1;col+=.85)window(x+col,row,z-d/2-.018,.3,.035,true);
      }
    }
  }
  function columns(x,z,count,width,h=1.5){for(let i=0;i<count;i++)c(x-width/2+i*width/(count-1),h/2,z,.11,h,DUBLIN_PALETTE.cream);b(x,h+.08,z,width+.45,.16,.65,DUBLIN_PALETTE.cream);}
  function line(points,color,radius=.035){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p[0]+origin[0],p[1]+origin[1],p[2]+origin[2])));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,32,radius,5,false),new THREE.MeshStandardMaterial({color,roughness:.65}));world.add(mesh);}
  function water(x,z,w,d){b(x,.205,z,w,.035,d,DUBLIN_PALETTE.waterDark);for(let i=0;i<4;i++)b(x-w*.3+i*w*.2,.228,z+Math.sin(i*3)*d*.25,w*.1,.005,.025,DUBLIN_PALETTE.glass);}
  function park(w,d,pond=false){b(0,.23,0,w,.06,d,DUBLIN_PALETTE.lawn);b(0,.27,0,w-.6,.025,.45,DUBLIN_PALETTE.pavement);b(0,.27,0,.45,.025,d-.6,DUBLIN_PALETTE.pavement);for(const x of [-w*.36,w*.36])for(const z of [-d*.32,0,d*.32])tree(x,z,1.15);if(pond)water(w*.2,-d*.22,w*.36,d*.3);for(const x of [-w*.22,w*.22]){b(x,.5,d*.2,1.1,.13,.35,DUBLIN_PALETTE.trunk);b(x,.7,d*.34,1.1,.4,.08,DUBLIN_PALETTE.trunk);}}
  function bridge(x,type){
    origin=[x,.24,0];
    b(0,.2,0,type==='harpBridge'?1.8:1.05,.16,4.8,DUBLIN_PALETTE.white);
    if(type==='archBridge')for(const side of [-.53,.53]){
      line([[side,.3,-2.4],[side,.9,-1.2],[side,1.05,0],[side,.9,1.2],[side,.3,2.4]],DUBLIN_PALETTE.white,.055);
      for(let z=-2.2;z<=2.2;z+=.35)b(side,.5+(.3*(1-Math.abs(z)/2.4)),z,.035,.55,.035,DUBLIN_PALETTE.white);
    }
    else if(type==='harpBridge'){
      line([[.8,.3,1.5],[.8,2.1,.6],[.8,4,-.7],[.8,4.6,-2.1]],DUBLIN_PALETTE.white,.14);
      for(let i=0;i<9;i++){const z=-2.1+i*.5;line([[.8,4.2,-1.8],[.8,.34,z]],DUBLIN_PALETTE.white,.018);}
    }else for(const side of [-.5,.5])b(side,.55,0,.07,.55,4.7,DUBLIN_PALETTE.road);
    origin=[0,0,0];
  }

  b(0,-.15,0,450,.12,450,DUBLIN_PALETTE.backdrop);
  b(-1,.06,-7,84,.25,80,DUBLIN_PALETTE.ground);
  b(-1,.2,-22,83,.018,47,DUBLIN_PALETTE.groundLight);b(-1,.2,18,83,.018,30,DUBLIN_PALETTE.groundLight);
  water(-1,0,84,4.5);water(64,4,48,68);
  for(const z of [-2.9,2.9]){b(-1,.26,z,83,.06,.55,DUBLIN_PALETTE.pavement);b(-1,.235,z+(z<0?-.75:.75),83,.03,.95,DUBLIN_PALETTE.roadDark);}
  for(const z of [-31,-18,-6,5,15,32])b(-1,.24,z,82,.035,.75,DUBLIN_PALETTE.road);
  for(const x of [-40,-25,-9,2,14,22,39])for(const [z,d] of [[-19,29],[19,28]])b(x,.24,z,.65,.035,d,DUBLIN_PALETTE.road);
  // O'Connell Street and the river quays make the city readable at a glance.
  b(2,.245,-11,1.7,.035,18,DUBLIN_PALETTE.roadDark);b(2,.266,-11,.16,.025,18,DUBLIN_PALETTE.lawnLight);
  for(const z of [-3.65,3.65])for(let x=-38;x<40;x+=2)b(x,.26,z,.8,.015,.035,DUBLIN_PALETTE.white);
  for(const x of dublinBridges)bridge(x,x===-5?'archBridge':x===30?'harpBridge':'plain');
  // An illustrative Luas line along the north quays.
  for(const z of [-5,-4.75])b(-3,.278,z,69,.025,.03,DUBLIN_PALETTE.roadDark);
  b(-7,.58,-4.86,3.5,.6,.5,'#73549b');b(-7,.84,-4.86,3.6,.06,.55,DUBLIN_PALETTE.white);b(-7,.64,-4.59,3.1,.28,.025,DUBLIN_PALETTE.glassMid);

  const places=[];let airportGroup=null;
  for(const lot of dublinLots){
    places.push({...lot});if(lot.kind.endsWith('Bridge'))continue;
    const {w,d,kind}=lot;origin=[lot.x,.26,lot.z];activeParent=landmarks;activeLotId=lot.id;
    if(kind!=='airport')b(0,0,0,w,.035,d,['park','green'].includes(kind)?DUBLIN_PALETTE.lawn:DUBLIN_PALETTE.pavement);
    if(kind==='airport'){
      airportGroup=buildDublinAirport({lot,textSurface});world.add(airportGroup);
    }else if(kind==='park'||kind==='green')park(w-.2,d-.2,kind==='green');
    else if(kind==='spire'){c(0,2.1,0,.11,4.2,'#b1bcc1');shape('cone',0,6.15,0,.11,4.1,.11,'#cbd1d3');c(0,.035,0,1.2,.08,'#e0dcca');}
    else if(kind==='stadium'){
      shape('cyl',0,1.1,0,w*.47,2.2,d*.46,DUBLIN_PALETTE.cream);shape('cyl',0,1.2,0,w*.4,2.25,d*.37,DUBLIN_PALETTE.leafDark);b(0,2.35,0,w*.58,.035,d*.47,DUBLIN_PALETTE.lawn);b(0,2.38,0,.045,.02,d*.47,DUBLIN_PALETTE.white);
      for(const x of [-w*.26,w*.26]){b(x,2.6,0,.06,.48,1.2,'#eae9da');b(x,2.85,0,.12,.05,1.2,'#eae9da');}for(const x of [-w*.38,w*.38])for(const z of [-d*.38,d*.38]){c(x,1.6,z,.045,3.2,'#8e9b9e');b(x,3.25,z,.65,.15,.25,'#fff4c9');}
    }else if(kind==='classical'||kind==='custom'){
      building(0,-.5,w*.85,d*.62,1.7,'#d8d1bb');columns(0,d*.3,kind==='custom'?10:6,w*.78,1.6);roof(0,1.8,-.5,w*.9,d*.65);
      if(kind==='custom'){b(0,2.1,-.5,1.35,1.3,1.35,'#dfd7bc');shape('sphere',0,2.95,-.5,.8,.8,.8,'#748e86');c(0,3.65,-.5,.08,.7,'#d4d9ce');}
    }else if(kind==='convention'){
      building(-.5,-.3,4,2.9,3,DUBLIN_PALETTE.cream);shape('cyl',.7,1.9,.7,1.1,3.5,1.1,DUBLIN_PALETTE.glassMid,world,[0,0,-.2]);for(const y of [.5,1,1.5,2,2.5,3])b(.5,y,1.73,1.8,.04,.035,DUBLIN_PALETTE.white);
    }else if(kind==='castle'){
      building(0,-1,5,2,2,DUBLIN_PALETTE.brickLight);c(-2,1.4,1,1,2.8,DUBLIN_PALETTE.leafDark);for(let i=0;i<8;i++){const a=i/8*Math.PI*2;b(-2+Math.cos(a)*.8,2.9,1+Math.sin(a)*.8,.27,.38,.27,DUBLIN_PALETTE.leaf);}b(.7,.04,1,3,.035,2,DUBLIN_PALETTE.lawn);
    }else if(kind==='cathedral'){
      building(0,-.3,w*.3,d*.85,1.5,DUBLIN_PALETTE.cream);roof(0,1.6,-.3,w*.4,d*.9,DUBLIN_PALETTE.dark);building(0,0,w*.75,d*.3,1.3,DUBLIN_PALETTE.cream);roof(0,1.5,0,w*.8,d*.4,DUBLIN_PALETTE.dark);building(-w*.25,-d*.25,1.3,1.4,lot.h-.5,DUBLIN_PALETTE.cream);shape('cone',-w*.25,lot.h-.15,-d*.25,.9,.7,.9,DUBLIN_PALETTE.darkBlue);
    }else if(kind==='guinness'){
      building(0,0,6,4,2.8,'#9a6451');building(-3,-1,1.7,3.6,2.1,'#b58166');c(0,3.05,0,1.45,.7,'#8daeb4');c(0,3.45,0,1.6,.12,'#394849');for(const x of [-2,2])c(x,2.6,-2.2,.15,2.6,'#a67359');
    }else if(kind==='college'){
      const s=Math.min(w/11,d/9);
      b(0,.02*s,0,8*s,.04*s,5.4*s,DUBLIN_PALETTE.lawn);building(0,-3*s,8.8*s,1.3*s,1.6*s,DUBLIN_PALETTE.cream);building(-4.2*s,.2*s,1.3*s,5*s,1.6*s,DUBLIN_PALETTE.cream);building(4.2*s,.2*s,1.3*s,5*s,1.6*s,DUBLIN_PALETTE.cream);columns(0,3*s,8,7*s,1.5*s);b(0,.03*s,0,.5*s,.035*s,6*s,DUBLIN_PALETTE.pavement);
      c(0,1.2*s,-.4*s,.32*s,2.4*s,DUBLIN_PALETTE.cream);b(0,2.4*s,-.4*s,.8*s,.2*s,.8*s,DUBLIN_PALETTE.cream);shape('cone',0,2.85*s,-.4*s,.6*s,.7*s,.6*s,DUBLIN_PALETTE.leafDark);for(const x of [-2.5,2.5])tree(x*s,s,s);
    }else if(kind==='dock'){
      water(-1,0,6.6,5.6);b(-1,.29,-3,7.1,.06,.4,DUBLIN_PALETTE.cream);building(4,-.3,2,6,2.7,DUBLIN_PALETTE.glassMid);b(4,1.5,2.73,1.7,1.8,.025,DUBLIN_PALETTE.glass);building(-4.3,0,1.9,6,2,DUBLIN_PALETTE.cream);b(-1.5,.5,0,2,.3,.7,DUBLIN_PALETTE.white);b(-1.3,.72,0,.8,.3,.58,DUBLIN_PALETTE.glassMid);
    }else if(kind==='station'){building(0,.8,6,2,1.9,DUBLIN_PALETTE.cream);roof(0,2,.8,6.3,2.3);for(const x of [-2,-1,0,1,2]){b(x,.06,-1, .15,.025,3,DUBLIN_PALETTE.roadDark);b(x+.25,.06,-1,.15,.025,3,DUBLIN_PALETTE.roadDark);}b(-.2,.55,-1.2,2.5,.7,.6,DUBLIN_PALETTE.pubGreen);}
    else if(kind==='warehouse'){building(0,0,7,3,1.25,'#9c775c');roof(0,1.3,0,7.3,3.4);}
    else if(kind==='pub'||kind==='shoppingStreet'){
      const colors=kind==='pub'?['#963e3a','#3b7057','#b78244']:['#ae7053','#d5b495','#788478'];
      for(let i=0;i<3;i++){const x=(i-1)*w*.28;building(x,-.5,w*.27,d*.55,1.5+(i%2)*.4,colors[i]);b(x,.3,d*.21,w*.23,.55,.06,i===0&&kind==='pub'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.darkBlue);b(x,.65,d*.27,w*.27,.15,.3,DUBLIN_PALETTE.cream);roof(x,1.7,-.5,w*.28,d*.6);}
      if(kind==='pub'){b(0,.2,d*.38,1.2,.08,.7,'#735240');for(const x of [-1,1])c(x,.3,d*.37,.25,.55,'#765b43');}
    }else if(kind==='hospital'){
      building(-w*.2,-.35,w*.42,d*.56,2.25,DUBLIN_PALETTE.white);building(w*.22,-.25,w*.42,d*.66,1.75,DUBLIN_PALETTE.cream);
      b(-w*.2,2.28,-.35,w*.44,.12,d*.59,DUBLIN_PALETTE.glassMid);b(0,1.25,d*.34,1.05,.16,.05,DUBLIN_PALETTE.pubRed);b(0,1.25,d*.34,.18,.72,.05,DUBLIN_PALETTE.pubRed);
    }else if(kind==='library'){
      building(0,-.25,w*.82,d*.72,1.75,DUBLIN_PALETTE.cream);b(0,1.1,d*.37,w*.74,.46,.11,DUBLIN_PALETTE.brickLight);
      for(let x=-w*.3;x<=w*.3;x+=.65)b(x,.86,d*.39,.1,.9,.08,DUBLIN_PALETTE.darkBlue);
      roof(0,1.85,-.25,w*.86,d*.75,DUBLIN_PALETTE.brick);
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
    }else if(kind==='museum'){
      building(0,-.35,w*.86,d*.58,1.65,DUBLIN_PALETTE.white);columns(0,d*.23,5,w*.72,1.45);roof(0,1.78,-.35,w*.9,d*.62,DUBLIN_PALETTE.darkBlue);
      b(0,.55,d*.31,w*.38,.72,.045,DUBLIN_PALETTE.glassMid);
    }else{
      const color=lot.id==='dubNaija'?DUBLIN_PALETTE.pubGreen:kind==='civic'?DUBLIN_PALETTE.cream:DUBLIN_PALETTE.brick;building(0,-.2,w*.8,d*.65,lot.h-.2,color);b(0,.45,d*.28,w*.68,.55,.04,DUBLIN_PALETTE.glassDark);b(0,.84,d*.31,w*.78,.16,.25,lot.id==='dubLidl'?DUBLIN_PALETTE.gold:lot.id==='dubTesco'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.cream);
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
      if(['office','hotel','hospital','convention','station'].includes(kind)){
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
      if(!['park','green','spire','stadium'].includes(kind))textSurface(lot.name.toUpperCase(),DUBLIN_PALETTE.white,Math.min(w*.65,4.8),landmarks,lot.x,1+origin[1],lot.z+d*.45,false,kind==='pub'?DUBLIN_PALETTE.pubRed:DUBLIN_PALETTE.hedge);
    }
    origin=[0,0,0];
    activeParent=world;activeLotId=null;
  }
  // Georgian terraces: coloured doors, slate roofs, chimneys and tiny gardens.
  let houses=0;
  function lotClear(x,z,w,d,pad=0){
    return !dublinLots.some(lot=>Math.abs(x-lot.x)<(w+lot.w)/2+pad&&Math.abs(z-lot.z)<(d+lot.d)/2+pad);
  }
  // Street lamps follow the pavements and stay clear of every landmark lot.
  for(const x of [-36,-30,-24,-18,-12,-6,0,6,12,18,24,30,36])for(const z of [-3.65,3.65])if(lotClear(x,z,.35,.35,.25)){
    c(x,.95,z,.035,1.8,DUBLIN_PALETTE.dark);b(x,1.9,z,.22,.08,.22,DUBLIN_PALETTE.gold);
  }
  function terrace(x,z,color){
    if(!lotClear(x,z,1.7,2.7,.12))return;
    b(x,.27,z,1.7,.06,2.7,DUBLIN_PALETTE.pavement,homes);building(x,z,1.5,1.8,1.65,color,homes);shape('roof',x,2,z,1.15,.7,1.4,DUBLIN_PALETTE.dark,homes);b(x+.45,2.25,z-.35,.2,.6,.2,DUBLIN_PALETTE.brick,homes);b(x,.54,z+.92,.3,.68,.04,[DUBLIN_PALETTE.glassDark,DUBLIN_PALETTE.pubRed,DUBLIN_PALETTE.pubGreen,DUBLIN_PALETTE.gold][houses%4],homes);b(x,.33,z+1.2,1.4,.08,.48,DUBLIN_PALETTE.lawn,homes);houses++;
  }
  for(let row=0;row<3;row++)for(let col=0;col<10;col++)terrace(18+col*2,-33+row*2.9,['#b08a69','#b07761','#c0a186'][col%3]);
  for(let row=0;row<2;row++)for(let col=0;col<10;col++)terrace(-38+col*1.95,26+row*3,['#b28462','#bc9678','#a8755b'][col%3]);
  for(let row=0;row<3;row++)for(let col=0;col<8;col++)terrace(-39+col*2,-31+row*3,['#a97d65','#c2a487','#af8a70'][col%3]);
  // A short north-edge terrace row fills an open residential strip while the
  // lotClear guard keeps every house off selectable landmark footprints.
  for(let col=0;col<8;col++)terrace(5+col*2,-38.5,['#b77a59','#c58a63','#a96d55'][col%3]);
  for(let i=0;i<24;i++){const x=-38+i*3.2,z=i%2?-3:3;if(lotClear(x,z,.8,.8,.35))tree(x,z,.65);}
  for(const [x,z] of [[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])if(lotClear(x,z,1.5,1.5,.35))tree(x,z,1.2);
  for(const [text,x,z,w] of [['RIVER LIFFEY',-15,0,9],['DUBLIN BAY',53,15,11],['NORTHSIDE',-14,-33,8],['CITY CENTRE',-3,31,8],['DOCKLANDS',28,19,8]])textSurface(text,text==='RIVER LIFFEY'||text==='DUBLIN BAY'?'#d8edf0':'#7f8e70',w,world,x,.3,z);
  for(const [x,z] of [[-22,-4],[22,5],[-22,31]]){
    b(x,1.5,z,3.4,1.4,.1,'#253930',boards);for(const dx of [-1.2,1.2])b(x+dx,.75,z,.07,1.5,.07,'#253930',boards);
    textSurface('DUBLIN LIFE','#fff',3.2,boards,x,1.5,z+.06,false,'#28644e');
  }
  const material=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.88});
  for(const {parent,type,cast,items} of batches.values()){
    const mesh=new THREE.InstancedMesh(geometry[type],material,items.length),temp=new THREE.Object3D();
    items.forEach((item,i)=>{temp.position.set(...item.p);temp.scale.set(...item.s);temp.rotation.set(...item.rotation);temp.updateMatrix();mesh.setMatrixAt(i,temp.matrix);mesh.setColorAt(i,new THREE.Color(item.color));});
    mesh.userData.category=parent===homes?'homes':parent===landmarks?'landmarks':'environment';
    mesh.userData.lotIds=[...new Set(items.map(item=>item.lotId).filter(Boolean))];
    mesh.castShadow=cast;mesh.receiveShadow=true;mesh.computeBoundingSphere();parent.add(mesh);
  }
  world.visible=false;world.userData.houses=houses;world.userData.palette=DUBLIN_PALETTE;world.userData.lotCount=places.length;world.userData.batchCount=batches.size;world.userData.landmarks=landmarks;
  return {world,homes,landmarks,boards,places,isLand:isDublinLand,airport:airportGroup};
}
