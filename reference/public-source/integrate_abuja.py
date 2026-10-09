from pathlib import Path
p=Path('outputs/lagos-map/src/main.js');s=p.read_text()
s=s.replace("import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';","import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';\nimport {buildAbuja} from './abuja.js';")
s=s.replace('innerWidth/innerHeight,.1,350','innerWidth/innerHeight,.1,900')
s=s.replace("let selected=null,showNames=true,walking=false,transition=null;","let selected=null,showNames=true,showHomes=true,showBoards=true,walking=false,transition=null,activeCity='lagos';\ndata.forEach(p=>p.city='lagos');host.dataset.city=activeCity;")
needle='// Repeated housing plots are visual map scenery, without player data.'
insert="""const abuja=buildAbuja({box,textSurface});scene.add(abuja.world);data.push(...abuja.places);
for(const place of abuja.places){const button=document.createElement('button');button.className='label';button.hidden=true;button.innerHTML=`<span>${place.emoji}</span>${place.name}`;button.setAttribute('aria-label',`Select ${place.name}`);button.onclick=()=>selectPlace(place);$('labels').appendChild(button);const offset=place.tag||[0,place.h,0];labels.push({place,button,point:new THREE.Vector3(place.x+offset[0],.28+offset[1],place.z+offset[2])});}
"""
s=s.replace(needle,insert+needle)
s=s.replace('world.add(selectionRing);','scene.add(selectionRing);')
s=s.replace("function district(p){return p.z< -2?'Mainland':p.x>8?'Lekki':'Island';}","function district(p){return p.city==='abuja'?p.area:p.z< -2?'Mainland':p.x>8?'Lekki':'Island';}")
s=s.replace('function selectPlace(p){selected=p;',"function selectPlace(p){if(p.city!==activeCity)switchCity(p.city);selected=p;")
s=s.replace("`${emoji[p.id]||'🏠'} ${p.name}`","`${p.emoji||emoji[p.id]||'🏠'} ${p.name}`")
s=s.replace("descriptions[p.id]||`${p.name} on the ${district(p)} side of the city.`","descriptions[p.id]||(p.city==='abuja'?`${p.name} in ${p.area}. Explore the landmark and its surroundings on the Abuja map.`:`${p.name} on the ${district(p)} side of the city.`)")
s=s.replace('selectionRing.position.set(p.x,.23,p.z);','selectionRing.position.set(p.x,p.city===\'abuja\'?.33:.23,p.z);selectionRing.scale.setScalar(p.city===\'abuja\'?Math.max(1,Math.min(p.w,p.d)*.55):1);')
s=s.replace('to:new THREE.Vector3(3.75,37.5,26.25),toTarget:new THREE.Vector3(2.25,0,1.5)',"to:cityViews[activeCity].position.clone(),toTarget:cityViews[activeCity].target.clone()")
s=s.replace('if(dist<7||dist>110)','if(dist<controls.minDistance||dist>controls.maxDistance)').replace('THREE.MathUtils.clamp(dist,7,110)','THREE.MathUtils.clamp(dist,controls.minDistance,controls.maxDistance)')
s=s.replace("$('homes').onclick=()=>{estate.visible=!estate.visible;$('homes').setAttribute('aria-pressed',String(estate.visible));};","$('homes').onclick=()=>{showHomes=!showHomes;estate.visible=activeCity==='lagos'&&showHomes;abuja.homes.visible=showHomes;$('homes').setAttribute('aria-pressed',String(showHomes));};")
s=s.replace("$('boards').onclick=()=>{boards.visible=!boards.visible;$('boards').setAttribute('aria-pressed',String(boards.visible));};","$('boards').onclick=()=>{showBoards=!showBoards;boards.visible=activeCity==='lagos'&&showBoards;abuja.boards.visible=showBoards;$('boards').setAttribute('aria-pressed',String(showBoards));};")
s=s.replace('const targets={mainland:[0,-12,28],island:[-4,7.5,25],lekki:[15,8,24]};',"const targets=activeCity==='abuja'?{central:[16,0,45],maitama:[22,-32,43],jabi:[-35,-10,45]}:{mainland:[0,-12,28],island:[-4,7.5,25],lekki:[15,8,24]};")
s=s.replace('data.filter(p=>Math.abs(p.x-point.x)',"data.filter(p=>p.city===activeCity&&Math.abs(p.x-point.x)")
s=s.replace('function isLand(x,z){return ',"function isLand(x,z){if(activeCity==='abuja')return x>-64&&x<60&&z>-47&&z<48&&((x+36)/8)**2+((z+9)/5)**2>1&&Math.hypot(x-52,z+1)>8&&Math.hypot(x+56,z+8)>6;return ")
s=s.replace('let visible=showNames&&projection.z<1',"let visible=label.place.city===activeCity&&showNames&&projection.z<1").replace('&&y>140','&&y>180')
needle='function district(p)'
idx=s.index(needle)
city="""const cityViews={lagos:{position:new THREE.Vector3(3.75,37.5,26.25),target:new THREE.Vector3(2.25,0,1.5)},abuja:{position:new THREE.Vector3(6,88,68),target:new THREE.Vector3(6,0,2)}};
const cityCameras={};
function switchCity(city){
 if(!['lagos','abuja'].includes(city))throw new Error('Unknown map city');
 if(city===activeCity)return {city,changed:false};
 cityCameras[activeCity]={position:camera.position.clone(),target:controls.target.clone()};
 walking=false;marker.visible=false;walkTarget=null;keys.clear();controls.enableRotate=true;transition=null;clearSelection();
 $('walk').setAttribute('aria-pressed','false');$('walk-controls').hidden=true;$('hint').hidden=false;
 activeCity=city;world.visible=city==='lagos';estate.visible=city==='lagos'&&showHomes;boards.visible=city==='lagos'&&showBoards;abuja.world.visible=city==='abuja';abuja.homes.visible=showHomes;abuja.boards.visible=showBoards;
 renderer.setClearColor(city==='abuja'?'#93b56c':'#67afd5');host.dataset.city=city;$('city-name').textContent=city==='abuja'?'🇳🇬 Abuja':'🇳🇬 Lagos';
 host.setAttribute('aria-label',`Interactive 3D ${city==='abuja'?'Abuja':'Lagos'} city map`);
 document.querySelectorAll('[data-city]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.city===city)));
 const tabs=city==='abuja'?[['all','🗺️','All Abuja'],['central','🏛️','Central'],['maitama','🌳','Maitama'],['jabi','🌊','Jabi']]:[['all','🗺️','All Lagos'],['mainland','🏘️','Mainland'],['island','🏙️','Island'],['lekki','🌴','Lekki']];
 document.querySelectorAll('[data-district]').forEach((button,i)=>{button.dataset.district=tabs[i][0];button.innerHTML=`${tabs[i][1]}<span>${tabs[i][2]}</span>`;button.classList.toggle('active',i===0);});
 controls.maxDistance=city==='abuja'?210:110;controls.minDistance=city==='abuja'?12:7;
 const view=cityCameras[city]||cityViews[city];camera.position.copy(view.position);controls.target.copy(view.target);controls.update();
 sun.position.set(city==='abuja'?40:32,city==='abuja'?90:56,city==='abuja'?28:24);const extent=city==='abuja'?95:50;Object.assign(sun.shadow.camera,{left:-extent,right:extent,top:extent,bottom:-extent,far:city==='abuja'?230:120});sun.shadow.camera.updateProjectionMatrix();
 marker.position.set(city==='abuja'?0:.75,.28,city==='abuja'?0:-6);
 return {city,changed:true};
}
document.querySelectorAll('[data-city]').forEach(button=>button.onclick=()=>switchCity(button.dataset.city));
"""
s=s[:idx]+city+s[idx:]
s=s.replace("description:'List the landmarks in this Lagos map.'","description:'List the landmarks in the Lagos and Abuja maps.'")
s=s.replace('data.map(({id,name,x,z})=>({id,name,x,z}))','data.map(({id,name,city,x,z})=>({id,name,city,x,z}))')
s=s.replace("for(const tool of [{name:'list_map_places'","for(const tool of [{name:'switch_map_city',description:'Switch between the Lagos and Abuja map views.',inputSchema:{type:'object',properties:{city:{type:'string',enum:['lagos','abuja']}},required:['city'],additionalProperties:false},execute:input=>switchCity(input?.city)},{name:'list_map_places'")
s=s.replace("await Promise.all(tasks);$('loader').hidden=true;host.dataset.ready='true';","await Promise.all(tasks);$('loader').hidden=true;host.dataset.ready='true';\nif(new URLSearchParams(location.search).get('city')==='abuja')switchCity('abuja');")
p.write_text(s)
p=Path('outputs/lagos-map/dist/index.html');s=p.read_text().replace('from Mainland to Lekki.','including Lagos and Abuja.').replace('<span class="city">','<span class="city" id="city-name">').replace('<div id="loader"','<nav class="glass city-nav" aria-label="Choose a city"><button data-city="lagos" aria-pressed="true">🌊 Lagos</button><button data-city="abuja" aria-pressed="false">🏛️ Abuja</button></nav>\n<div id="loader"').replace('Loading Lagos…','Loading the cities…').replace('<h2>Explore Lagos</h2>','<h2>Explore Lagos & Abuja</h2>').replace('Drag to pan. Scroll or pinch to zoom.','Switch cities with the Lagos and Abuja tabs. Drag to pan. Scroll or pinch to zoom.')
p.write_text(s)
p=Path('outputs/lagos-map/dist/style.css');p.write_text(p.read_text()+"\n.city-nav{position:fixed;top:142px;left:50%;transform:translateX(-50%);display:flex;padding:4px;gap:4px;border-radius:30px}.city-nav button{padding:8px 20px;border-radius:24px;font-size:13px}.city-nav button[aria-pressed=true]{background:#202431;color:#fff}@media(max-width:700px){.city-nav{top:132px}.city-nav button{padding:7px 19px;font-size:12px}}\n")
