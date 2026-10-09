// Bounds and parcel belts for the authored western and southern Dublin expansion.
// Coordinates remain deliberately compressed and are not surveyed map data.
export const DUBLIN_URBAN_BOUNDS = Object.freeze({minX:-78,maxX:40,minZ:-71,maxZ:52});
export const DUBLIN_WORLD_BOUNDS = Object.freeze({minX:-96,maxX:96,minZ:-76,maxZ:56});
export const DUBLIN_FOREST_BOUNDS = Object.freeze({minX:-96,maxX:-80,minZ:-60,maxZ:52});
export const DUBLIN_UPSTREAM_BASIN = Object.freeze({x:-68,z:0,radius:6});

// Compact residential plots follow the transport agent's separated bank loops.
// They deliberately stop short of the open river, the basin and the west forest.
export const DUBLIN_EXPANSION_INFILL = Object.freeze([
  {x0:-76,x1:-49,z0:-34,z1:-9,palette:['#a87963','#bb8f73','#c39a7c']},
  {x0:-76,x1:-49,z0:9,z1:31,palette:['#b18167','#c09a7d','#a97761']},
  {x0:-76,x1:-49,z0:33,z1:49,palette:['#aa7b63','#bd9377','#c6a185']},
  {x0:-43,x1:-24,z0:34,z1:49,palette:['#b28a6d','#c09c7d','#a97961']},
  {x0:-18,x1:12,z0:46,z1:50,palette:['#b48b70','#c2a084','#a87963']},
  {x0:24,x1:36,z0:46,z1:50,palette:['#b68c70','#c4a286','#a87b63']},
]);

export function createDublinForestPlacements({parent, add, treeSize=1}={}) {
  if (!parent || typeof add !== 'function') throw new TypeError('Forest placements need a scene parent and tree callback');
  const placements=[];
  // Dense, irregular source-tree stands make the entire left map edge read as
  // woodland. Small gaps leave natural clearings; the east edge stays outside
  // the expanded urban parcels and the upstream vessel basin remains unobstructed.
  for(let row=0;row<53;row++)for(let col=0;col<10;col++){
    const x=-95.05+col*1.55+(row%2)*.36;
    const z=-59+row*2.12;
    const basinClearance=Math.hypot(x-DUBLIN_UPSTREAM_BASIN.x,z-DUBLIN_UPSTREAM_BASIN.z);
    if(basinClearance<9.5)continue;
    // Clustered gaps create a meandering woodland edge instead of a rigid grid.
    const cluster=(row*7+col*11+Math.floor(row/4)*3)%13;
    if(cluster===0||cluster===7)continue;
    const height=treeSize*(2.8+((row*5+col*3)%8)*.34);
    const placement={x,y:.26,z,height,model:(row+col)%3===0?'small':'large',parent,rotation:((row*17+col*11)%8)*Math.PI/4,lotId:'dublin-west-forest'};
    placements.push(placement);add(placement);
  }
  return placements;
}
