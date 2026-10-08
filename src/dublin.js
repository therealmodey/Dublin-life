import * as THREE from 'three';

// An authored, compressed game layout. North is -Z, east is +X.
// Irish landmarks retain their neighbourhood relationships, not survey scale.
export const dublinLots = [
  ['dubAirport','Dublin Airport','Northside','✈️',-11,-39,24,10,2.8,'airport','An international airport north of the city, with a terminal, tower and runway.'],
  ['dubPhoenix','Phoenix Park','Northside','🦌',-32,-19,15,15,1.3,'park','A wide green park on the western side of the city.'],
  ['dubCroke','Croke Park','Northside','🏟️',15,-25,12,9,2.5,'stadium','The home of Gaelic games, with a pitch and tiered stands.'],
  ['dubSpire','The Spire','City centre','📍',0,-15,3,3,8,'spire','A slender silver landmark on O’Connell Street.'],
  ['dubGPO','General Post Office','City centre','🏛️',-3,-10,7,4,2.2,'classical','A columned landmark facing O’Connell Street.'],
  ['dubPenneys','Penneys','City centre','🛍️',-12,-10,5,4,1.8,'shop','A city-centre clothes shop, with brick frontage and broad display windows.'],
  ['dubConnolly','Connolly Station','Northside','🚉',15,-15,8,5,2.2,'station','Rail platforms and a station entrance on the north side.'],
  ['dubCustom','The Custom House','Docklands','🏛️',17,-5.5,10,4,3.6,'custom','A long neoclassical riverside building with a central dome.'],
  ['dubEPIC','EPIC & CHQ','Docklands','🧳',26,-11,8,5,1.8,'warehouse','A restored warehouse and museum precinct in the Docklands.'],
  ['dubConvention','Convention Centre','Docklands','🏢',31,-5.5,6,4,3.8,'convention','A modern riverside building with a tilted glass atrium.'],
  ['dubHapenny','Ha’penny Bridge','City centre','🌉',-5,0,1.2,4.7,1.1,'archBridge','The white pedestrian bridge connecting the two banks of the Liffey.'],
  ['dubBeckett','Samuel Beckett Bridge','Docklands','🌉',30,0,2,4.7,4,'harpBridge','A harp-shaped bridge across the river in the Docklands.'],
  ['dubTemple','Temple Bar','City centre','🎻',-5,7,7,5,1.9,'pub','Colourful pub fronts, cobbled lanes and a small music courtyard.'],
  ['dubCastle','Dublin Castle','City centre','🏰',-13,10,7,6,3,'castle','A stone tower and courtyard among the city-centre streets.'],
  ['dubChrist','Christ Church Cathedral','City centre','⛪',-21,7,7,5,3.5,'cathedral','A stone cathedral with a central tower and pitched roofs.'],
  ['dubGuinness','Guinness Storehouse','City centre','🍺',-32,8,9,7,3.7,'guinness','A brick brewery complex topped by a circular glass lookout.'],
  ['dubTrinity','Trinity College','City centre','🎓',7,9,11,9,3.5,'college','A historic campus with a central green, library and campanile.'],
  ['dubGrafton','Grafton Street','City centre','🎶',3,17,4,6,2.1,'shoppingStreet','A pedestrian shopping street with colourful façades and busking space.'],
  ['dubBrown','Brown Thomas','City centre','🛍️',9,18,5,4,2.4,'shop','A department store beside the Grafton Street shopping area.'],
  ['dubGreen','St Stephen’s Green','City centre','🌳',6,26,12,9,1.3,'green','A landscaped city park with paths, trees and a pond.'],
  ['dubPatrick','St Patrick’s Cathedral','City centre','⛪',-16,21,7,7,4.5,'cathedral','A tall stone cathedral beside a garden on the south side.'],
  ['dubWhelans','Whelan’s','City centre','🎸',-5,25,5,4,1.6,'pub','A live-music venue with a warm street frontage.'],
  ['dubMerrion','Merrion Square','City centre','🌷',18,21,8,8,1.2,'park','A garden square framed by Georgian terraces.'],
  ['dubCanal','Grand Canal Dock','Docklands','⚓',28,12,12,9,3,'dock','A waterfront basin, modern offices and a theatre beside the water.'],
  ['dubAviva','Aviva Stadium','Docklands','🏉',34,25,10,8,3.2,'stadium','An oval stadium on the southeastern side of this compact map.'],
  ['dubGarda','Garda Station','Northside','🚓',-21,-10,5,4,1.6,'civic','A local station in the northside neighbourhood.'],
  ['dubIntreo','Intreo Office','Northside','📄',-12,-20,5,4,1.8,'civic','A fictional service-office location for the future game.'],
  ['dubCitizens','Citizens Information','Northside','ℹ️',-4,-23,5,4,1.6,'civic','A fictional information-office location for the future game.'],
  ['dubNaija','Nigerian Shop','Northside','🇳🇬',5,-25,5,4,1.5,'shop','An illustrative community shop with Nigerian groceries.'],
  ['dubTesco','Tesco','Northside','🛒',24,-22,6,4,1.4,'shop','An illustrative neighbourhood supermarket.'],
  ['dubLidl','Lidl','Northside','🛒',33,-21,6,4,1.4,'shop','An illustrative neighbourhood supermarket.'],
  ['dubDunnes','Dunnes Stores','City centre','🛒',-24,19,5,4,1.8,'shop','An illustrative city-centre grocery and clothing shop.'],
  ['dubChipper','The Chipper','City centre','🍟',-33,20,5,4,1.4,'shop','A small local takeaway with a striped shopfront.'],
].map(([id,name,area,emoji,x,z,w,d,h,kind,description])=>({id,name,area,emoji,x,z,w,d,h,kind,description,city:'dublin'}));

export const dublinBridges = [-28,-18,-5,2,18,30];
export function isDublinLand(x,z){
  if(x < -42 || x > 40 || z < -47 || z > 33)return false;
  if(Math.abs(z)<2.25)return dublinBridges.some(b=>Math.abs(x-b)<(b===30?1:.6));
  if(x>23.7&&x<30.3&&z>9.2&&z<14.8)return false;
  return true;
}

export function buildDublin({textSurface}) {
  const world=new THREE.Group(), homes=new THREE.Group(), boards=new THREE.Group();
  world.name='Dublin';homes.name='Dublin neighbourhoods';world.add(homes,boards);
  const geometry={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(1,1,1,16),cone:new THREE.ConeGeometry(1,1,12),sphere:new THREE.IcosahedronGeometry(1,1),roof:new THREE.ConeGeometry(1,1,4,1,false,Math.PI/4)};
  const batches=new Map();
  let origin=[0,0,0];
  function shape(type,x,y,z,w,h,d,color,parent=world,rotation=[0,0,0]){
    const cast=h>.15;
    const key=`${parent.uuid}:${type}:${cast}`;if(!batches.has(key))batches.set(key,{parent,type,cast,items:[]});
    batches.get(key).items.push({p:[x+origin[0],y+origin[1],z+origin[2]],s:[w,h,d],color,rotation});
  }
  const b=(x,y,z,w,h,d,c,parent=world,rotation)=>shape('box',x,y,z,w,h,d,c,parent,rotation);
  const c=(x,y,z,r,h,color,parent=world)=>shape('cyl',x,y,z,r,h,r,color,parent);
  function tree(x,z,size=1,parent=world){c(x,.45*size,z,.07*size,.9*size,'#70523c',parent);shape('sphere',x,1.1*size,z,.55*size,.7*size,.55*size,'#43815b',parent);}
  function roof(x,y,z,w,d,color='#4f575d'){shape('roof',x,y+.35,z,w*.74,.7,d*.74,color);}
  function building(x,z,w,d,h,color='#a96d55',parent=world){b(x,h/2,z,w,h,d,color,parent);b(x,h+.07,z,w+.15,.14,d+.15,'#4f575d',parent);for(let row=.45;row<h-.15;row+=.6)for(let col=-w/2+.35;col<w/2;col+=.65)b(x+col,row,z+d/2+.018,.3,.35,.035,'#b8d2d5',parent);}
  function columns(x,z,count,width,h=1.5){for(let i=0;i<count;i++)c(x-width/2+i*width/(count-1),h/2,z,.11,h,'#e8e1cd');b(x,h+.08,z,width+.45,.16,.65,'#e8e1cd');}
  function line(points,color,radius=.035){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p[0]+origin[0],p[1]+origin[1],p[2]+origin[2])));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,32,radius,5,false),new THREE.MeshStandardMaterial({color,roughness:.65}));world.add(mesh);}
  function water(x,z,w,d){b(x,.205,z,w,.035,d,'#6aa9bf');for(let i=0;i<4;i++)b(x-w*.3+i*w*.2,.228,z+Math.sin(i*3)*d*.25,w*.1,.005,.025,'#a3cad5');}
  function park(w,d,pond=false){b(0,.23,0,w,.06,d,'#78a963');b(0,.27,0,w-.6,.025,.45,'#ded4b9');b(0,.27,0,.45,.025,d-.6,'#ded4b9');for(const x of [-w*.36,w*.36])for(const z of [-d*.32,0,d*.32])tree(x,z,1.15);if(pond)water(w*.2,-d*.22,w*.36,d*.3);for(const x of [-w*.22,w*.22]){b(x,.5,d*.2,1.1,.13,.35,'#735744');b(x,.7,d*.34,1.1,.4,.08,'#735744');}}
  function bridge(x,type){
    origin=[x,.24,0];
    b(0,.2,0,type==='harpBridge'?1.8:1.05,.16,4.8,'#e8e6d9');
    if(type==='archBridge')for(const side of [-.53,.53]){
      line([[side,.3,-2.4],[side,.9,-1.2],[side,1.05,0],[side,.9,1.2],[side,.3,2.4]],'#f5f3e8',.055);
      for(let z=-2.2;z<=2.2;z+=.35)b(side,.5+(.3*(1-Math.abs(z)/2.4)),z,.035,.55,.035,'#ecebe1');
    }
    else if(type==='harpBridge'){
      line([[.8,.3,1.5],[.8,2.1,.6],[.8,4,-.7],[.8,4.6,-2.1]],'#e8e9e2',.14);
      for(let i=0;i<9;i++){const z=-2.1+i*.5;line([[.8,4.2,-1.8],[.8,.34,z]],'#f4f4ef',.018);}
    }else for(const side of [-.5,.5])b(side,.55,0,.07,.55,4.7,'#adaca0');
    origin=[0,0,0];
  }

  b(0,-.15,0,450,.12,450,'#9bb38b');
  b(-1,.06,-7,84,.25,80,'#b8c7a2');
  b(-1,.2,-22,83,.018,47,'#c4c7ad');b(-1,.2,18,83,.018,30,'#cccfb8');
  water(-1,0,84,4.5);water(64,4,48,68);
  for(const z of [-2.9,2.9]){b(-1,.26,z,83,.06,.55,'#d9d4c3');b(-1,.235,z+(z<0?-.75:.75),83,.03,.95,'#737d82');}
  for(const z of [-31,-18,-6,5,15,32])b(-1,.24,z,82,.035,.75,'#89918b');
  for(const x of [-40,-25,-9,2,14,22,39])for(const [z,d] of [[-19,29],[19,28]])b(x,.24,z,.65,.035,d,'#89918b');
  // O'Connell Street and the river quays make the city readable at a glance.
  b(2,.245,-11,1.7,.035,18,'#80888a');b(2,.266,-11,.16,.025,18,'#adbca0');
  for(const z of [-3.65,3.65])for(let x=-38;x<40;x+=2)b(x,.26,z,.8,.015,.035,'#e0dfcf');
  for(const x of dublinBridges)bridge(x,x===-5?'archBridge':x===30?'harpBridge':'plain');
  // An illustrative Luas line along the north quays.
  for(const z of [-5,-4.75])b(-3,.278,z,69,.025,.03,'#5a6266');
  b(-7,.58,-4.86,3.5,.6,.5,'#73549b');b(-7,.84,-4.86,3.6,.06,.55,'#d8dedb');b(-7,.64,-4.59,3.1,.28,.025,'#bdcfd3');

  const places=[];
  for(const lot of dublinLots){
    places.push({...lot});if(lot.kind.endsWith('Bridge'))continue;
    const {w,d,kind}=lot;origin=[lot.x,.26,lot.z];
    b(0,0,0,w,.035,d,['park','green'].includes(kind)?'#85ad6b':'#dedbcb');
    if(kind==='airport'){
      b(0,.05,-2.7,23,.04,1.4,'#535c60');for(let x=-10;x<11;x+=1.5)b(x,.078,-2.7,.7,.012,.055,'#f1efe6');
      building(0,1.3,10,2.5,1.3,'#dadfd9');b(0,.7,2.57,8,.5,.025,'#8bb5c8');c(-7,1.1,1.3,.28,2.2,'#dbdcd1');b(-7,2.4,1.3,1,.6,.9,'#9fc6d0');
      for(const x of [-7,-2,3,8]){b(x,.48,-.3,.22,.22,1.8,'#f2f2e7');b(x,.48,-.6,1.8,.04,.42,'#f2f2e7');b(x,.65,.4,.06,.4,.4,'#299479');}
    }else if(kind==='park'||kind==='green')park(w-.2,d-.2,kind==='green');
    else if(kind==='spire'){c(0,2.1,0,.11,4.2,'#b1bcc1');shape('cone',0,6.15,0,.11,4.1,.11,'#cbd1d3');c(0,.035,0,1.2,.08,'#e0dcca');}
    else if(kind==='stadium'){
      shape('cyl',0,1.1,0,w*.47,2.2,d*.46,'#ccd5cf');shape('cyl',0,1.2,0,w*.4,2.25,d*.37,'#486657');b(0,2.35,0,w*.58,.035,d*.47,'#6caa68');b(0,2.38,0,.045,.02,d*.47,'#f4f3e5');
      for(const x of [-w*.26,w*.26]){b(x,2.6,0,.06,.48,1.2,'#eae9da');b(x,2.85,0,.12,.05,1.2,'#eae9da');}for(const x of [-w*.38,w*.38])for(const z of [-d*.38,d*.38]){c(x,1.6,z,.045,3.2,'#8e9b9e');b(x,3.25,z,.65,.15,.25,'#fff4c9');}
    }else if(kind==='classical'||kind==='custom'){
      building(0,-.5,w*.85,d*.62,1.7,'#d8d1bb');columns(0,d*.3,kind==='custom'?10:6,w*.78,1.6);roof(0,1.8,-.5,w*.9,d*.65);
      if(kind==='custom'){b(0,2.1,-.5,1.35,1.3,1.35,'#dfd7bc');shape('sphere',0,2.95,-.5,.8,.8,.8,'#748e86');c(0,3.65,-.5,.08,.7,'#d4d9ce');}
    }else if(kind==='convention'){
      building(-.5,-.3,4,2.9,3,'#d9d6c9');shape('cyl',.7,1.9,.7,1.1,3.5,1.1,'#83b0c1',world,[0,0,-.2]);for(const y of [.5,1,1.5,2,2.5,3])b(.5,y,1.73,1.8,.04,.035,'#dfebe6');
    }else if(kind==='castle'){
      building(0,-1,5,2,2,'#b59788');c(-2,1.4,1,1,2.8,'#929b95');for(let i=0;i<8;i++){const a=i/8*Math.PI*2;b(-2+Math.cos(a)*.8,2.9,1+Math.sin(a)*.8,.27,.38,.27,'#a7afa5');}b(.7,.04,1,3,.035,2,'#a6bb8c');
    }else if(kind==='cathedral'){
      building(0,-.3,w*.3,d*.85,1.5,'#b0b0a0');roof(0,1.6,-.3,w*.4,d*.9,'#697171');building(0,0,w*.75,d*.3,1.3,'#b0b0a0');roof(0,1.5,0,w*.8,d*.4,'#697171');building(-w*.25,-d*.25,1.3,1.4,lot.h-.5,'#b5b4a3');shape('cone',-w*.25,lot.h-.15,-d*.25,.9,.7,.9,'#6c7477');
    }else if(kind==='guinness'){
      building(0,0,6,4,2.8,'#9a6451');building(-3,-1,1.7,3.6,2.1,'#b58166');c(0,3.05,0,1.45,.7,'#8daeb4');c(0,3.45,0,1.6,.12,'#394849');for(const x of [-2,2])c(x,2.6,-2.2,.15,2.6,'#a67359');
    }else if(kind==='college'){
      b(0,.02,0,8,.04,5.4,'#8dab75');building(0,-3,8.8,1.3,1.6,'#c4baa2');building(-4.2,.2,1.3,5,1.6,'#c4baa2');building(4.2,.2,1.3,5,1.6,'#c4baa2');columns(0,3,8,7,1.5);b(0,.03,0,.5,.035,6,'#ded7c4');
      c(0,1.2,-.4,.32,2.4,'#d3ccbb');b(0,2.4,-.4,.8,.2,.8,'#d3ccbb');shape('cone',0,2.85,-.4,.6,.7,.6,'#647d70');for(const x of [-2.5,2.5])tree(x,1,1);
    }else if(kind==='dock'){
      water(-1,0,6.6,5.6);b(-1,.29,-3,7.1,.06,.4,'#bdb29a');building(4,-.3,2,6,2.7,'#8ea6ad');b(4,1.5,2.73,1.7,1.8,.025,'#bbd5d5');building(-4.3,0,1.9,6,2,'#b5a793');b(-1.5,.5,0,2,.3,.7,'#f1eada');b(-1.3,.72,0,.8,.3,.58,'#8fa8b0');
    }else if(kind==='station'){building(0,.8,6,2,1.9,'#c9bda7');roof(0,2,.8,6.3,2.3);for(const x of [-2,-1,0,1,2]){b(x,.06,-1, .15,.025,3,'#67746f');b(x+.25,.06,-1,.15,.025,3,'#67746f');}b(-.2,.55,-1.2,2.5,.7,.6,'#4d8e75');}
    else if(kind==='warehouse'){building(0,0,7,3,1.25,'#9c775c');roof(0,1.3,0,7.3,3.4);}
    else if(kind==='pub'||kind==='shoppingStreet'){
      const colors=kind==='pub'?['#963e3a','#3b7057','#b78244']:['#ae7053','#d5b495','#788478'];
      for(let i=0;i<3;i++){const x=(i-1)*w*.28;building(x,-.5,w*.27,d*.55,1.5+(i%2)*.4,colors[i]);b(x,.3,d*.21,w*.23,.55,.06,i===0&&kind==='pub'?'#c85446':'#304943');b(x,.65,d*.27,w*.27,.15,.3,'#e9d6ae');roof(x,1.7,-.5,w*.28,d*.6);}
      if(kind==='pub'){b(0,.2,d*.38,1.2,.08,.7,'#735240');for(const x of [-1,1])c(x,.3,d*.37,.25,.55,'#765b43');}
    }else{
      const color=lot.id==='dubNaija'?'#519075':kind==='civic'?'#bfbcab':'#a3765b';building(0,-.2,w*.8,d*.65,lot.h-.2,color);b(0,.45,d*.28,w*.68,.55,.04,'#44676f');b(0,.84,d*.31,w*.78,.16,.25,lot.id==='dubLidl'?'#eed455':lot.id==='dubTesco'?'#d4524a':'#eee5ca');
    }
    if(!['park','green','spire','stadium'].includes(kind))textSurface(lot.name.toUpperCase(),'#fff',Math.min(w*.65,4.8),world,lot.x,1+origin[1],lot.z+d*.45,false,kind==='pub'?'#87382e':'#28564b');
    origin=[0,0,0];
  }
  // Georgian terraces: coloured doors, slate roofs, chimneys and tiny gardens.
  let houses=0;
  function terrace(x,z,color){
    b(x,.27,z,1.7,.06,2.7,'#ded9c7',homes);building(x,z,1.5,1.8,1.65,color,homes);shape('roof',x,2,z,1.15,.7,1.4,'#626a6c',homes);b(x+.45,2.25,z-.35,.2,.6,.2,'#a9765d',homes);b(x,.54,z+.92,.3,.68,.04,['#295f74','#a44132','#436748','#ceab58'][houses%4],homes);b(x,.33,z+1.2,1.4,.08,.48,'#8dae76',homes);houses++;
  }
  for(let row=0;row<3;row++)for(let col=0;col<10;col++)terrace(18+col*2,-33+row*2.9,['#b08a69','#b07761','#c0a186'][col%3]);
  for(let row=0;row<2;row++)for(let col=0;col<10;col++)terrace(-38+col*1.95,26+row*3,['#b28462','#bc9678','#a8755b'][col%3]);
  for(let row=0;row<3;row++)for(let col=0;col<8;col++)terrace(-39+col*2,-31+row*3,['#a97d65','#c2a487','#af8a70'][col%3]);
  for(let i=0;i<24;i++)tree(-38+i*3.2,i%2?-3:3,.65);
  for(const [x,z] of [[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])tree(x,z,1.2);
  // Yellow Dublin buses and small cars parked along the quays.
  for(const [x,z] of [[-19,3.6],[9,-3.6],[24,3.6]]){b(x,.57,z,1.7,.65,.6,'#e5c751');b(x,.87,z,1.7,.08,.65,'#d6d9c3');b(x,.62,z+.32,1.4,.32,.025,'#516f7b');}
  for(let i=0;i<16;i++){const x=-36+i*4.6,z=i%2?-6:5;b(x,.45,z,.8,.4,.44,['#afbeac','#e6e3d6','#58716f'][i%3]);b(x,.6,z,.4,.16,.4,'#78949a');}
  for(const [text,x,z,w] of [['RIVER LIFFEY',-15,0,9],['DUBLIN BAY',53,15,11],['NORTHSIDE',-14,-33,8],['CITY CENTRE',-3,31,8],['DOCKLANDS',28,19,8]])textSurface(text,text==='RIVER LIFFEY'||text==='DUBLIN BAY'?'#d8edf0':'#7f8e70',w,world,x,.3,z);
  for(const [x,z] of [[-22,-4],[22,5],[-22,31]]){
    b(x,1.5,z,3.4,1.4,.1,'#253930',boards);for(const dx of [-1.2,1.2])b(x+dx,.75,z,.07,1.5,.07,'#253930',boards);
    textSurface('DUBLIN LIFE','#fff',3.2,boards,x,1.5,z+.06,false,'#28644e');
  }
  const material=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.88});
  for(const {parent,type,cast,items} of batches.values()){
    const mesh=new THREE.InstancedMesh(geometry[type],material,items.length),temp=new THREE.Object3D();
    items.forEach((item,i)=>{temp.position.set(...item.p);temp.scale.set(...item.s);temp.rotation.set(...item.rotation);temp.updateMatrix();mesh.setMatrixAt(i,temp.matrix);mesh.setColorAt(i,new THREE.Color(item.color));});
    mesh.castShadow=cast;mesh.receiveShadow=true;mesh.computeBoundingSphere();parent.add(mesh);
  }
  world.visible=false;world.userData.houses=houses;
  return {world,homes,boards,places,isLand:isDublinLand};
}
