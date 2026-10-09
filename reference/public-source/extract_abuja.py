from pathlib import Path
import re,json
root=Path('outputs/lagos-map/src')
s=Path('work/map-reference.js').read_text()
block='const '+s[s.index('f={'):s.index(',D={lot:')]+';\n'
exports='export {f as palette, B as ART,O as ASO_ROCK,N as ZUMA_ROCK,U as ASO_VILLA,u as B,d as C,p as K,w as Dome,m as S,g as roof,b as lawn,j as pave,x as pond,y as hedge,M as tree,A as palm,k as flag,S as bands,G as cols,T as car,I as parasol,L as stall,P as fenceRect,C as bed,E as STALLS};\n'
root.joinpath('abuja-primitives.js').write_text('// Reviewed numeric mesh descriptors from the Lagos Life reference. No game logic.\n'+block+exports)
s=Path('work/0c4q12y7izpbh.js').read_text()
extras=s[s.index('let x=Math.PI;'):s.index(';function A({id:')]
root.joinpath('abuja-landmarks.js').write_text("// Reference landmark geometry and physical signs.\nimport * as j from './abuja-primitives.js';\n"+extras+';\nexport {k as extraArt,y as signs};\n')
scene=s[s.index('let R=[['):s.index('let aC=new ')]
scene=scene.replace('T.AIRPORT_MAP_AT.abuja.x','(-28)').replace('T.AIRPORT_MAP_AT.abuja.z','35.4').replace('j.GATE_ROAD_OFFSET','4').replace('(0,P.boardsIn)("abuja")','[]')
root.joinpath('abuja-layout.js').write_text('// Reference road, lot, vegetation, and neighbourhood coordinates.\n'+scene+'\nexport {U as lots,J as groundNames,V as patches,H as lake,ae as roads,at as pavements,al as medians,ao as stripes,ar as roundabouts,as as roundaboutGreens,an as treeCrowns,ad as treeTrunks,ap as palmTrunks,af as palmCrowns,ac as hedges,ai as flowers,ah as lampPosts,ab as lampHeads,au as houses,am as roofs,aw as hills,aB as cars,aj as carWindows};\n')
s=Path('work/3ledjq6ktxuoh.js').read_text()
infos={m[0]:dict(name=m[1],area=m[2],emoji=m[3]) for m in re.findall(r'id:"(abj[^"\\]+)",city:"abuja",name:"([^"\\]+)",area:"([^"\\]+)",emoji:"([^"\\]+)"',s)}
root.joinpath('abuja-info.json').write_text(json.dumps(infos,ensure_ascii=False,indent=2)+'\n')
print('Generated reviewed geometry/layout modules and',len(infos),'landmark names.')
