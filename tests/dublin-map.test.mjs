import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublin, dublinLots, dublinBridges, isDublinLand, DUBLIN_PALETTE} from '../src/dublin.js';
import {DUBLIN_ROAD_HEIGHTS, DUBLIN_ROAD_LANES, DUBLIN_VEHICULAR_BRIDGE_XS, findRoadClearanceIssues, isRoadSegmentClear, roadSurfaceY, sampleRoadLane} from '../src/dublin-road-network.js';
import {palette as abujaPalette} from '../src/abuja-primitives.js';

const byId = new Map(dublinLots.map(lot => [lot.id, lot]));
assert.equal(dublinLots.length,132,'87 preserved places plus 45 additional real Dublin destinations');
assert.equal(byId.size, dublinLots.length, 'Selectable place IDs must be unique');
assert(dublinLots.every(lot => lot.city === 'dublin'));
assert(new Set(dublinLots.map(lot => lot.name)).size === dublinLots.length, 'Every selectable record should identify a distinct named place');

for (const lot of dublinLots) {
  assert([lot.x, lot.z, lot.w, lot.d, lot.h, lot.arrivalX, lot.arrivalZ].every(Number.isFinite),
    `${lot.name} needs finite geometry and an explicit walk arrival point`);
  assert(lot.w > 0 && lot.d > 0 && lot.h > 0, `${lot.name} needs a positive footprint and height`);
  assert(/^https:\/\//.test(lot.sourceUrl), `${lot.name} needs a source URL`);
  assert(isDublinLand(lot.arrivalX, lot.arrivalZ), `${lot.name} arrival point must be walkable`);
  assert(lot.x - lot.w / 2 >= -78 && lot.x + lot.w / 2 <= 40,
    `${lot.name} footprint must stay inside the map's east-west bounds`);
  assert(lot.z - lot.d / 2 >= -71.3 && lot.z + lot.d / 2 <= 52,
    `${lot.name} footprint must stay inside the map's north-south bounds`);
  if (!lot.kind.endsWith('Bridge') && lot.kind !== 'dock' && lot.kind !== 'airport') {
    for (const dx of [-.49, 0, .49]) for (const dz of [-.49, 0, .49]) {
      assert(isDublinLand(lot.x + dx * lot.w, lot.z + dz * lot.d),
        `${lot.name} footprint must stay on walkable land`);
    }
  }
}

for(let i=0;i<dublinLots.length;i++)for(const b of dublinLots.slice(i+1)){
  const a=dublinLots[i];if(!a.signature&&!b.signature)continue;
  assert(Math.abs(a.x-b.x)>=(a.w+b.w)/2||Math.abs(a.z-b.z)>=(a.d+b.d)/2,`${a.id} overlaps ${b.id}`);
}

// Preserve established IDs while replacing illustrative service labels with grounded places.
for (const id of ['dubAirport','dubPhoenix','dubHapenny','dubBeckett','dubTemple','dubTrinity','dubGreen','dubCanal','dubAviva']) {
  assert(byId.has(id), `Existing Dublin landmark ${id} must remain selectable`);
}
for (const [id, name] of [
  ['dubGardenRemembrance','Garden of Remembrance'],['dubKilmainham','Kilmainham Gaol'],
  ['dubIMMA','Irish Museum of Modern Art'],['dubHotelWest','Royal Hospital Kilmainham'],
  ['dubNaija','Busáras'],['dubChipper','National Museum of Ireland – Decorative Arts & History'],['dubKilmainhamCafe','The Brazen Head'],
  ['dubRingsendMarket','Poolbeg Lighthouse'],['dubCityCinema','Light House Cinema'],['dubCitizens','Dublin City Centre Citizens Information Centre'],
]) assert.equal(byId.get(id).name, name, `${id} should identify its real Dublin place`);
for(const [id,name] of [['dubHeuston','Heuston Station'],['dubWoodQuay','Dublin City Council Civic Offices'],['dubMansionHouse','The Mansion House'],['dubNationalLibrary','National Library of Ireland'],['dubCentralBank','Central Bank of Ireland'],['dubGovernmentBuildings','Government Buildings'],['dubStPatricksPark',"St Patrick's Park"]])
  assert.equal(byId.get(id).name,name,`${id} should add a source-backed named Dublin anchor`);
assert.equal(byId.get('dubHeuston').sourceUrl,'https://www.irishrail.ie/en-ie/station/dublin-heuston');
assert.equal(byId.get('dubWoodQuay').sourceUrl,'https://www.dublincity.ie/your-city-council');
assert.equal(byId.get('dubMansionHouse').sourceUrl,'https://www.dublincity.ie/archaeology-conservation-and-heritage/dublins-historic-buildings/mansion-house');
assert.equal(byId.get('dubNationalLibrary').sourceUrl,'https://www.nli.ie/visit');
assert.equal(byId.get('dubCentralBank').sourceUrl,'https://www.centralbank.ie/contact-us');
assert.equal(byId.get('dubGovernmentBuildings').sourceUrl,'https://www.gov.ie/en/department-of-the-taoiseach/organisation-information/history-of-government-buildings/');
assert.equal(byId.get('dubStPatricksPark').sourceUrl,'https://www.dublincity.ie/parks-and-nature/dublin-city-parks/visit-park/st-patricks-park');
assert.equal(byId.get('dubIFSC').sourceUrl, 'https://www.courts.ie/offices/four-courts',
  'Four Courts should link to its official Courts Service location page');
assert.equal(byId.get('dubNaija').sourceUrl, 'https://www.buseireann.ie/bus-stations',
  'Busáras should link to Bus Éireann station information');
assert.equal(byId.get('dubNorthCinema').sourceUrl, 'https://www.dctrust.ie/experience-glasnevin/plan-your-visit.html',
  'Glasnevin should link to the cemetery trust visitor location page');
assert.equal(byId.get('dubEPIC').sourceUrl, 'https://epicchq.com/visit/location/',
  'EPIC should link to its official location page');
assert.equal(byId.get('dubArena').sourceUrl, 'https://www.3arena.ie/');
assert.equal(byId.get('dubCHQOffice').name, 'Famine Memorial',
  'The CHQ duplicate should be replaced by the distinct quay-side memorial');
assert.equal(byId.get('dubCHQOffice').sourceUrl, 'https://www.visitdublin.com/famine-memorial');
assert.notEqual(byId.get('dubCHQOffice').name, byId.get('dubEPIC').name,
  'EPIC and the adjacent CHQ building should not appear as duplicate selectable entries');
assert(byId.get('dubIFSC').x < -20 && byId.get('dubIFSC').z < 0,
  'Four Courts belongs on the west side of the north bank');
assert(byId.get('dubNaija').x > 0 && byId.get('dubNaija').x < byId.get('dubConnolly').x,
  'Busáras sits east of the central O’Connell axis and west of Connolly Station');
assert(byId.get('dubNorthCinema').x < 0 && byId.get('dubNorthCinema').z < -25,
  'Glasnevin lies north-west of the inner city');
assert(byId.get('dubArena').z < 0 && byId.get('dubArena').x > byId.get('dubConvention').x,
  '3Arena sits east of the Convention Centre on the north quay');
assert(byId.get('dubCHQOffice').x < byId.get('dubEPIC').x,
  'Famine Memorial lies west of EPIC along Custom House Quay');
assert(Math.abs(byId.get('dubCitizens').x) < 12 && byId.get('dubCitizens').z > -18,
  'Montgomery House on James Joyce Street belongs near the central north-east inner city');
const northside = ['dubAirport','dubSpire','dubGPO','dubPenneys','dubConnolly','dubCustom','dubEPIC','dubConvention','dubGardenRemembrance','dubGarda','dubIntreo','dubCitizens','dubNaija','dubTesco','dubDunnes','dubChipper','dubMoore','dubMater','dubAbbey','dubDockCafe','dubPhibsboroMarket','dubNorthCafe','dubNorthHotel','dubNorthGym','dubPhibsboroLibrary','dubNorthCinema','dubDockMarket'];
for(const id of northside)assert(byId.get(id).z<0,`${byId.get(id).name} should be north of the Liffey`);
assert(byId.get('dubGardenRemembrance').z < 0, 'Garden of Remembrance belongs north of the Liffey');
for (const id of ['dubKilmainham','dubIMMA','dubHotelWest','dubStJames','dubWarMemorial','dubTrinity','dubGrafton','dubBrown','dubGreen','dubPatrick','dubWhelans','dubMerrion','dubCanal','dubAviva','dubLidl','dubGallery','dubIveagh','dubBordGais','dubHotelDock','dubDockGym','dubRathminesGym','dubDockHotel','dubMansionHouse','dubNationalLibrary','dubGovernmentBuildings','dubStPatricksPark']) {
  assert(byId.get(id).z > 0, `${byId.get(id).name} belongs south of the Liffey`);
}
for(const id of ['dubRathminesLibrary','dubRDS','dubHerbertPark','dubCoombe','dubRichmondBarracks','dubOurLadysHospice','dubRathminesChurch','dubDolphinsBarnLibrary','dubSandymountGreen','dubDrSteevens','dubBallyfermotLibrary'])assert(byId.has(id),`Expanded districts include ${id}`);
assert.deepEqual([byId.get('dubAirport').x,byId.get('dubAirport').z,byId.get('dubAirport').w,byId.get('dubAirport').d],[-11,-55,72,29],
  'The expanded airport site should span its three runway axes north of the city');

// Lots remain selectable without masking each other; the road network uses the same parcel check.
const footprints = dublinLots.filter(lot => !lot.kind.endsWith('Bridge'));
for (let i = 0; i < footprints.length; i++) {
  const a = footprints[i];
  for (const b of footprints.slice(i + 1)) {
    const overlapX = Math.min(a.x+a.w/2,b.x+b.w/2)-Math.max(a.x-a.w/2,b.x-b.w/2);
    const overlapZ = Math.min(a.z+a.d/2,b.z+b.d/2)-Math.max(a.z-a.d/2,b.z-b.d/2);
    assert(!(overlapX > 1e-4 && overlapZ > 1e-4), `${a.name} and ${b.name} footprints must not overlap`);
  }
}
assert(DUBLIN_ROAD_LANES.length >= 6, 'Roads include the paired loops and cross-street connections');
assert(DUBLIN_ROAD_LANES.every(lane => lane.points.length > 2 && lane.segments.every(segment => isRoadSegmentClear(segment))),
  'Every rendered/trafficked lane segment must clear city lots and map bounds');
assert.deepEqual(findRoadClearanceIssues(), [], 'No traffic lane should intersect a selectable city lot');
assert.deepEqual([...DUBLIN_VEHICULAR_BRIDGE_XS].sort((a,b)=>a-b),[-28,-18,18,30]);
assert.equal(roadSurfaceY(0,0),DUBLIN_ROAD_HEIGHTS.street,'Ordinary streets stay at the ground-level road height');
for(const x of DUBLIN_VEHICULAR_BRIDGE_XS) {
  assert.equal(roadSurfaceY(x,0),DUBLIN_ROAD_HEIGHTS.bridgeDeck,`Bridge at x=${x} uses its raised deck height`);
  assert(roadSurfaceY(x,0)-DUBLIN_ROAD_HEIGHTS.bridgeDeckTop>=.003,
    `Traffic ribbon at x=${x} clears the bridge deck to prevent z-fighting`);
  assert.equal(roadSurfaceY(x,2.4),DUBLIN_ROAD_HEIGHTS.bridgeDeck,'Deck remains level to its end');
  assert.equal(roadSurfaceY(x,4.2),DUBLIN_ROAD_HEIGHTS.street,'Approach ramp meets the street surface');
  assert(Math.abs(roadSurfaceY(x,4.2-1e-5)-roadSurfaceY(x,4.2+1e-5))<1e-4,
    'Bridge approach must meet the street without a height discontinuity');
  const ramp=[2.4,2.7,3,3.3,3.6,3.9,4.2].map(z=>roadSurfaceY(x,z));
  assert(ramp.every(Number.isFinite)&&ramp.every((y,i)=>i===0||y<=ramp[i-1]),'Bridge ramps are finite and smoothly descend toward street height');
  assert(ramp[2]<DUBLIN_ROAD_HEIGHTS.bridgeDeck&&ramp[2]>DUBLIN_ROAD_HEIGHTS.street,'Approach includes intermediate ramp heights');
}
assert.equal(roadSurfaceY(30.6,0),DUBLIN_ROAD_HEIGHTS.street,'Road height does not extend beyond the bridge footprint');
for(const lane of DUBLIN_ROAD_LANES) for(let i=0,along=0;i<lane.segments.length;i++) {
  const segment=lane.segments[i],length=lane.lengths[i];
  if(segment.bridge) {
    const sample=sampleRoadLane(lane,along+length/2);
    assert.equal(sample.y,DUBLIN_ROAD_HEIGHTS.bridgeDeck,`${segment.id} traffic sample rides on the bridge deck`);
  }
  along+=length;
}

const sharedSwatches = [
  ['leaf','leaf'],['leafDark','leafDark'],['hedge','hedge'],['trunk','trunk'],['lawn','lawn'],['lawnLight','lawnLight'],
  ['water','water'],['glass','glass'],['glassMid','deepGlass'],['glassDark','window'],['dark','black'],['darkBlue','carGlass'],
];
for (const [dublinKey, abujaKey] of sharedSwatches) assert.equal(DUBLIN_PALETTE[dublinKey],abujaPalette[abujaKey][1],`Dublin ${dublinKey} should reuse Abuja's ${abujaKey} swatch`);
assert(!isDublinLand(10,0),'River water is not walkable');
for(const x of dublinBridges)for(const z of [-2.3,-1,0,1,2.3])assert(isDublinLand(x,z),`Bridge at x=${x} connects both banks`);
assert(!isDublinLand(27,12),'Dock basin is not walkable');assert(!isDublinLand(44,12),'Bay is not walkable');assert(isDublinLand(0,-50),'The extended airport precinct is inside the map boundary');assert(!isDublinLand(0,-73),'Outside the northern map boundary is not walkable');

const fasciaRequests=[];
const map=buildDublin({textSurface(...args){fasciaRequests.push(args);}});
assert.equal(map.world.userData.palette,DUBLIN_PALETTE);assert.equal(map.world.userData.lotCount,dublinLots.length);
assert(map.world.children.includes(map.homes)&&map.world.children.includes(map.boards));
assert.equal(map.roadMeshes.length,DUBLIN_ROAD_LANES.length,'Visible road ribbons should use each shared lane path');
assert(map.roadMeshes.every((mesh,i)=>mesh.userData.laneId===DUBLIN_ROAD_LANES[i].id));
for(const mesh of map.roadMeshes){
  const positions=mesh.geometry.attributes.position;
  for(let i=0;i<positions.count;i++)assert(Math.abs(positions.getY(i)-roadSurfaceY(positions.getX(i),positions.getZ(i)))<1e-5,
    `${mesh.userData.laneId} ribbon vertices follow the shared elevated road profile`);
  const indices=mesh.geometry.index.array;
  for(let i=0;i<indices.length;i+=3){
    const ids=[indices[i],indices[i+1],indices[i+2]],cx=ids.reduce((sum,id)=>sum+positions.getX(id),0)/3,cz=ids.reduce((sum,id)=>sum+positions.getZ(id),0)/3;
    for(const bridgeX of dublinBridges)assert(!(Math.abs(cx-bridgeX)<1.15&&Math.abs(cz)<2.2),
      `${mesh.userData.laneId} leaves moving bridge span x=${bridgeX} clear of a static road ribbon`);
  }
}
assert(map.treePlacements.length>20,'Parks and streets should expose exact reference-tree placements');
assert(map.treePlacements.every(p=>[map.world,map.homes,map.landmarks].includes(p.parent)&&Number.isFinite(p.height)&&Number.isFinite(p.y)));
assert(map.treePlacements.some(p=>p.parent===map.landmarks)&&map.treePlacements.some(p=>p.parent===map.homes));
assert(map.houseFootprints.length===map.world.userData.houses&&map.houseFootprints.length>=250&&map.houseFootprints.length<=350,
  'Dublin retains coherent housing while prioritising destinations');
assert.deepEqual(map.urbanBounds,{minX:-78,maxX:40,minZ:-71,maxZ:52});
assert.deepEqual(map.forestBounds,{minX:-96,maxX:-80,minZ:-60,maxZ:52});
assert.equal(map.world.userData.liffeyWater.name,'Continuous Liffey channel and upstream vessel basin');
assert.equal(map.world.children.filter(node=>node.name==='Continuous Liffey channel and upstream vessel basin').length,1,
  'The river and upstream turning pocket use one union surface without coplanar water overlap');
assert(!map.isLand(-65,0)&&!map.isLand(-68,5),'The river throat connects to the upstream vessel basin as water');
assert.deepEqual(map.worldBounds,{minX:-96,maxX:96,minZ:-76,maxZ:56});
const sceneBounds=new THREE.Box3().setFromObject(map.world);
assert(sceneBounds.min.x>=map.worldBounds.minX-3.01&&sceneBounds.max.x<=map.worldBounds.maxX+3.01&&
  sceneBounds.min.z>=map.worldBounds.minZ-3.01&&sceneBounds.max.z<=map.worldBounds.maxZ+3.01,
  'Finite backdrop and scene geometry fit within the world boundary plus a three-unit margin');
assert(sceneBounds.getSize(new THREE.Vector3()).x<205&&sceneBounds.getSize(new THREE.Vector3()).z<145,
  'Dublin scene has a finite map board instead of an oversized ground plane');
assert.equal(map.upstreamBasin.x,-68);assert.equal(map.upstreamBasin.radius,6);
assert(!map.isLand(-68,0),'Upstream ship-turnaround basin remains open water');
assert(map.isLand(-77,20)&&!map.isLand(-79,20),'Urban walkable land reaches the new western edge but stops before forest');
assert(!map.isLand(0,53),'The southern urban boundary remains finite');
assert(map.houseFootprints.filter(p=>p.x<-48).length>=90,'Western districts receive a substantial additional housing belt');
assert(map.houseFootprints.filter(p=>p.z>33).length>=40,'Southern suburbs receive their own housing expansion');
assert(map.forestPlacements.length>=90,'The western map edge is a substantial source-asset forest');
assert(map.forestPlacements.every(p=>p.x>=-96&&p.x<=-80&&p.z>=-60&&p.z<=52&&p.parent===map.world),
  'Forest GLB placements stay within their western forest strip');
assert(map.forestPlacements.length>=400,'The forest should form a dense deciduous canopy rather than a sparse tree grid');
assert(map.forestPlacements.every(p=>p.height>=2.8&&p.height<=5.2),'Forest trees use varied full canopy heights');
assert(map.forestPlacements.every(p=>Math.hypot(p.x+68,p.z)>=9.5),'Forest placements stay clear of the upstream turning basin');
assert(map.treePlacements.filter(p=>p.lotId==='dublin-south-tree-belt').length>=10,
  'Southern urban edge has a reference-tree belt');
for(let i=0;i<map.houseFootprints.length;i++)for(const b of map.houseFootprints.slice(i+1)){
  const a=map.houseFootprints[i],overlapX=Math.min(a.x+a.w/2,b.x+b.w/2)-Math.max(a.x-a.w/2,b.x-b.w/2),overlapZ=Math.min(a.z+a.d/2,b.z+b.d/2)-Math.max(a.z-a.d/2,b.z-b.d/2);
  assert(!(overlapX>1e-4&&overlapZ>1e-4),'Residential infill parcels must not overlap');
}
const parkIds=new Set(dublinLots.filter(lot=>['park','green'].includes(lot.kind)).map(lot=>lot.id));
const parkTrees=map.treePlacements.filter(placement=>parkIds.has(placement.lotId));
assert(parkTrees.length>=150&&parkTrees.every(placement=>placement.y===.52),
  'Dense source-asset woodland placements should meet the raised park lawns');
assert.equal(map.parkDetails.length,parkIds.size,'Every park and green should have a detailed site plan');
assert(map.parkDetails.every(detail=>detail.paths>=2&&detail.layout),'Parks expose paths and an individual landscape layout');
assert(map.parkDetails.every(detail=>detail.featureGeometry?.length&&detail.featureGeometry.every(feature=>feature.geometryInstances>0)),
  'Every park must contain measured, authored instanced landscape geometry');
const parkLayouts=new Map(map.parkDetails.map(detail=>[detail.id,detail]));
for(const [id,feature] of [
  ['dubPhoenix',/Wellington Testimonial.*Papal Cross.*Ashtown Castle.*deer/i],
  ['dubGreen',/ornamental lake.*footbridge.*bandstand/i],
  ['dubMerrion',/Oscar Wilde.*play garden.*railings/i],
  ['dubGardenRemembrance',/Children of Lir.*bird memorial/i],
  ['dubIveagh',/sunken lawn.*yew maze.*grotto.*cascade/i],
  ['dubWarMemorial',/rose parterres.*bookrooms.*memorial axis/i],
])assert(feature.test(parkLayouts.get(id).featureGeometry.map(item=>item.name).join(' ')),`${id} should build its source-backed signature features`);
assert(parkLayouts.get('dubPhoenix').featureGeometry[0].treePlacements>=24,'Phoenix woodland includes a dense deciduous canopy');
assert(parkLayouts.get('dubMerrion').featureGeometry[0].geometryInstances>=80,'Merrion Square includes measured railings, sculpture and play structures');
assert(parkLayouts.get('dubGreen').featureGeometry[0].geometryInstances>=30,'St Stephen’s Green builds both a lake crossing and separate lawn bandstand');
assert(parkLayouts.get('dubGardenRemembrance').featureGeometry[0].geometryInstances>=25,'Garden of Remembrance builds the Children of Lir memorial with its cruciform pool');
const campusTree=map.treePlacements.find(placement=>placement.lotId==='dubTrinity');
assert(campusTree&&Math.abs(campusTree.y-(.26+.04*(9/11)))<1e-6,
  'Trinity reference trees should meet the smaller raised campus lawn');
const shapeById=new Map(map.landmarkShapes.map(item=>[item.id,item.shape]));
assert.match(shapeById.get('dubCroke'),/four-stand-gaa-ground/);assert.match(shapeById.get('dubAviva'),/asymmetric-glass-oval-stadium/);
assert.match(shapeById.get('dubTrinity'),/open-arched-campanile-with-rounded-copper-dome/);assert.match(shapeById.get('dubCastle'),/medieval-record-tower/);
assert.match(shapeById.get('dubNCAD'),/low-art-and-design-campus-blocks/,
  'The National College of Art and Design should not inherit Trinity College’s Campanile silhouette');
assert.notEqual(shapeById.get('dubChrist'),shapeById.get('dubPatrick'),'The two cathedrals should have distinct silhouettes');
const featuresById=new Map(map.landmarkShapes.map(item=>[item.id,item.features||[]]));
for(const detail of ['two-tier Cusack and Hogan stands','two-tier Davin stand','covered seating canopies','open Hill 16 terraced negative-X end','Gaelic H goal frames with no top crossbar'])
  assert(featuresById.get('dubCroke').includes(detail),`Croke Park geometry should expose ${detail}`);
assert.deepEqual(map.landmarkShapes.find(item=>item.id==='dubCroke').goalFrameGeometry,
  {pitchAxis:'x',ends:[-1,1],postAxis:'z',postOffset:.36,lowerCrossbarOnly:true},
  'Croke Park H goals should sit at each end of the long pitch axis with only a low crossbar');
for(const detail of ['round-plan Record Tower','corbelled crenellated parapet'])
  assert(featuresById.get('dubCastle').includes(detail),`Dublin Castle geometry should expose its ${detail}`);
for(const detail of ['four open arched lower sides','open-column belfry','rounded copper-green cupola'])
  assert(featuresById.get('dubTrinity').includes(detail),`Trinity Campanile geometry should expose its ${detail}`);
for(const detail of ['east and west roof crests','lower north and south roof edges','horseshoe canopy','open north end','open roof aperture'])
  assert(featuresById.get('dubAviva').includes(detail),`Aviva geometry should expose ${detail}`);
let campanileArchCount=0;map.landmarks.traverse(object=>{if(object.userData.kind==='campanile-arch'&&object.userData.lotId==='dubTrinity')campanileArchCount++;});
assert.equal(campanileArchCount,8,'Trinity Campanile should contain four lower arches and four open belfry arches');
let campanileCupola=false;map.world.traverse(object=>{if(object.isInstancedMesh&&object.userData.geometryType==='dome'&&object.userData.lotIds.includes('dubTrinity'))campanileCupola=true;});
assert(campanileCupola,'Trinity Campanile should include its rounded upper-hemisphere cupola geometry');
let castleTowerMesh=null;map.world.traverse(object=>{if(object.isInstancedMesh&&object.userData.geometryType==='cyl'&&object.userData.lotIds.includes('dubCastle'))castleTowerMesh=object;});
assert(castleTowerMesh&&castleTowerMesh.geometry.parameters.radialSegments===16,
  'Dublin Castle Record Tower should use round-plan cylindrical geometry');
const avivaRoof=map.world.getObjectByName('Aviva asymmetric oval roof');
assert(avivaRoof&&avivaRoof.userData.waveAmplitude>=.2&&avivaRoof.userData.apertureRatio<1&&avivaRoof.userData.openNorthEnd,
  'Aviva roof mesh should retain its asymmetric wave profile, open north end and central aperture');
assert.equal(avivaRoof.geometry.index.count,156,'Aviva canopy geometry should leave a real opening at the north end');
const avivaY=avivaRoof.geometry.attributes.position.array.filter((_,i)=>i%3===1);
assert(Math.max(...avivaY)-Math.min(...avivaY)>=.4,'Aviva roof mesh should rise at east/west and dip at north/south');
const avivaPositions=avivaRoof.geometry.attributes.position;
assert(avivaPositions.getY(0)>avivaPositions.getY(16)&&avivaPositions.getY(32)>avivaPositions.getY(48),
  'Aviva roof mesh should crest on the east/west sides and lower at north/south');
const namedLots=new Set(dublinLots.map(lot=>lot.name.toUpperCase()));
const fasciaWidths=fasciaRequests.filter(request=>namedLots.has(request[0])).map(request=>request[2]);
assert(fasciaWidths.length>=50&&fasciaWidths.every(width=>width>0&&width<=1.7),
  'Venue names should use compact facade fascias while remaining available as separate map labels');
assert.equal(shapeById.get('dubCHQOffice'),'three-figure-famine-memorial',
  'The Custom House Quay memorial should have a dedicated sculpture silhouette');
for(const [id,feature] of [['dubRingsendMarket','poolbeg-red-and-white-lighthouse'],['dubTemple','temple-bar-colourful-pub-court'],['dubKilmainhamCafe','brazen-head-low-inn-and-yard'],['dubWhelans','whelans-victorian-music-hall-facade'],['dubNaija','busaras-sculptural-bus-terminal'],['dubDockMarket','spencer-dock-luas-glass-shelter']])
  assert.match(shapeById.get(id),new RegExp(feature),`${byId.get(id).name} should have its own structural silhouette`);
for(const [id,feature] of [['dubHeuston','heuston-stone-terminal-with-platform-sheds'],['dubWoodQuay','wood-quay-stepped-office-courtyard'],['dubMansionHouse','mansion-house-georgian-range-and-round-room'],['dubNationalLibrary','national-library-rotunda-front-and-reading-hall'],['dubCentralBank','central-bank-two-building-dockland-campus'],['dubGovernmentBuildings','government-buildings-edwardian-three-wing-complex'],['dubPenneys','penneys-broad-mary-street-retail-front'],['dubBrown','brown-thomas-stone-department-store'],['dubDunnes','dunnes-henry-street-corner-superstore'],['dubHotelDock','marker-hotel-glass-tower-and-pale-crown']])
  assert.match(shapeById.get(id),new RegExp(feature),`${byId.get(id).name} should have a dedicated building massing and roof profile`);
const facadeSites=map.landmarkShapes.filter(item=>item.facadeVariant);
assert(facadeSites.length>=45&&new Set(facadeSites.map(item=>item.facadeVariant)).size>=7,
  'Non-residential buildings should use a broad set of distinct structural facade treatments');
assert(map.world.userData.houses>=30,'Dublin should retain coherent residential terraces');
assert.equal(map.metrics.houses,map.houseFootprints.length);assert.equal(map.metrics.parkPlans,map.parkDetails.length);
const buildingLots=dublinLots.filter(lot=>!['airport','park','green'].includes(lot.kind)&&!lot.kind.endsWith('Bridge'));
assert.equal(map.metrics.publicStructures,Object.keys(map.structuralFingerprints).length);
assert.equal(new Set(buildingLots.map(lot=>map.structuralFingerprints[lot.id])).size,buildingLots.length,
  'Each non-residential building must have distinct instance transforms after normalizing city position and discarding color');
assert.equal(map.metrics.uniqueStructureFingerprints,buildingLots.length);

let batches=0,instances=0;const renderedSwatches=new Set();map.world.traverse(mesh=>{if(!mesh.isInstancedMesh)return;batches++;instances+=mesh.count;assert([...mesh.instanceMatrix.array].every(Number.isFinite));assert(Number.isFinite(mesh.boundingSphere.radius));const color=new THREE.Color();for(let i=0;i<mesh.count;i++){mesh.getColorAt(i,color);renderedSwatches.add(color.getHexString());}});
for(const key of ['waterDark','dark','glass'])assert(renderedSwatches.has(DUBLIN_PALETTE[key].slice(1).toLowerCase()),`Rendered geometry should use ${key}`);
assert(batches<25,'Repeated scenery details should stay batched');
assert(map.airport&&map.world.children.includes(map.airport),'Detailed airport should belong to Dublin');
assert.equal(map.airport.userData.gates.length,2,'Only two dynamic gate records are reserved');
assert.equal(map.airport.userData.reservedGateIds.length,2);
assert.equal(map.airport.userData.parkedAircraft.length,3,'Static aircraft occupy only non-reserved stands');
assert.equal(map.airport.userData.helicopters.length,1);assert.equal(map.airport.userData.counts.helipads,2);
const airport=map.airport;airport.updateMatrixWorld(true);
for(const gate of airport.userData.gates){
  const occupied=airport.userData.parkedAircraft.some(plane=>{plane.updateMatrixWorld(true);const p=plane.getWorldPosition(new THREE.Vector3());return Math.hypot(p.x-gate.position.x,p.z-gate.position.z)<1.2;});
  assert(!occupied,`${gate.id} must be clear for the scheduled aircraft`);
}
let airportBatches=0;airport.traverse(mesh=>{if(mesh.isInstancedMesh)airportBatches++;});
assert.equal(batches,map.world.userData.batchCount+airportBatches,'Reported batches should include the dedicated airport');
const airportLot=byId.get('dubAirport'),bounds=new THREE.Box3().setFromObject(airport);
assert(bounds.min.x>=airportLot.x-airportLot.w/2-.1&&bounds.max.x<=airportLot.x+airportLot.w/2+.1,'Airport geometry should stay in its lot width');
assert(bounds.min.z>=airportLot.z-airportLot.d/2-.1&&bounds.max.z<=airportLot.z+airportLot.d/2+.1,'Airport geometry should stay in its lot depth');
console.log(`Dublin map passed: ${map.places.length} places, ${map.world.userData.houses} terraces, ${map.treePlacements.length} reference-tree placements, ${instances} instances in ${batches} batches.`);

let curvedRoofs=0;map.world.traverse(mesh=>{if(mesh.isInstancedMesh&&mesh.userData.geometryType==='vault'){curvedRoofs+=mesh.count;const n=mesh.geometry.attributes.normal;assert(Array.from({length:n.count},(_,i)=>n.getY(i)).every(y=>y>=-1e-6),'curved glass roof faces point upward')}});assert(curvedRoofs>=4,'glasshouse, mall and leisure halls receive actual curved roof geometry');
