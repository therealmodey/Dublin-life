const pointOf=value=>Array.isArray(value)?{x:value[0],z:value[1]}:value;
function distanceSquaredToSegment(p,a,b){
  const dx=b.x-a.x,dz=b.z-a.z,length=dx*dx+dz*dz;
  if(length<1e-12)return(p.x-a.x)**2+(p.z-a.z)**2;
  const t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/length));
  return(p.x-(a.x+t*dx))**2+(p.z-(a.z+t*dz))**2;
}
function segmentsWithin(a,b,c,d,tolerance){
  const orient=(p,q,r)=>(q.x-p.x)*(r.z-p.z)-(q.z-p.z)*(r.x-p.x);
  const o1=orient(a,b,c),o2=orient(a,b,d),o3=orient(c,d,a),o4=orient(c,d,b);
  if(o1*o2 < -1e-9&&o3*o4 < -1e-9)return true;
  const limit=tolerance*tolerance;
  return Math.min(distanceSquaredToSegment(a,c,d),distanceSquaredToSegment(b,c,d),distanceSquaredToSegment(c,a,b),distanceSquaredToSegment(d,a,b))<=limit;
}
const toSegments=points=>{
  const pts=points.map(pointOf);return pts.slice(0,-1).map((p,i)=>[p,pts[i+1]]);
};
function routeDefinitions(network){
  if(Array.isArray(network.lanes)&&network.lanes.length){
    return network.lanes.filter(lane=>lane.id&&Array.isArray(lane.points)&&lane.points.length>=2).map(lane=>({
      id:lane.id,
      points:lane.closed?[...lane.points,lane.points[0]]:lane.points,
      width:Number.isFinite(lane.width)?lane.width:network.laneWidth,
    }));
  }
  const routes=[];
  for(const line of network.centerlines||[]){
    const points=line.points||[];routes.push({id:line.id,points:line.closed?[...points,points[0]]:points,width:Number.isFinite(line.width)?line.width:network.roadWidth});
  }
  for(const connector of network.connectors||[]){const points=connector.points||(connector.a&&connector.b?[connector.a,connector.b]:[]);routes.push({id:connector.id,points,width:Number.isFinite(connector.width)?connector.width:network.roadWidth});}
  for(const route of network.routes||[]){routes.push({id:route.id,points:route.points||[],width:Number.isFinite(route.width)?route.width:network.roadWidth});}
  return routes.filter(route=>route.id&&route.points.length>=2);
}
/** Build connected components from physical road centerline intersections/overlaps. */
export function measureRoadConnectivity(network){
  const routes=routeDefinitions(network),segments=routes.map(route=>toSegments(route.points)),parent=routes.map((_,i)=>i);
  const find=i=>parent[i]===i?i:(parent[i]=find(parent[i]));
  const join=(a,b)=>{const ra=find(a),rb=find(b);if(ra!==rb)parent[rb]=ra;};
  const roadWidth=Number.isFinite(network.roadWidth)?network.roadWidth:.9;
  for(let i=0;i<routes.length;i++)for(let j=i+1;j<routes.length;j++){
    let connected=false;
    for(const[a,b]of segments[i]){if(connected)break;for(const[c,d]of segments[j])if(segmentsWithin(a,b,c,d,Math.max(.01,((routes[i].width||roadWidth)+(routes[j].width||roadWidth))/2))){connected=true;break;}}
    if(connected)join(i,j);
  }
  const components=new Map();
  routes.forEach((route,index)=>{const root=find(index);if(!components.has(root))components.set(root,[]);components.get(root).push(route.id);});
  const groups=[...components.values()];
  return{connected:routes.length>0&&groups.length===1,connectedComponents:groups.length,routeCount:routes.length,routeIds:routes.map(route=>route.id),components:groups};
}
