import assert from 'node:assert/strict';
import {MAP_WORLD_BOUNDS,fitOverview,normalizeCameraView,clampCameraToBounds,cameraClipPlanes} from '../src/map-camera.js';
import * as THREE from 'three';

for (const [city,bounds] of Object.entries(MAP_WORLD_BOUNDS)) {
  const maxY=city==='lagos'?12:20;
  const clipBounds=city==='lagos'?{...bounds,minX:-100,maxX:150,minZ:-135,maxZ:95}:bounds;
  for(const {width,height} of [{width:390,height:844},{width:1440,height:900}]){
    const aspect=width/height,safeHeight=city==='lagos'?.72:.62;
    const view=fitOverview({...bounds,maxY},aspect,38,{safeHeight,margin:1.16,targetY:maxY/2});
    assert.equal(view.position.x,view.target.x,`${city} ${width}px overview is north aligned`);
    assert(view.position.y>view.target.y&&view.position.z>view.target.z,`${city} overview retains elevated oblique view`);
    assert(view.distance<1200,`${city} fits inside finite responsive camera range`);
    const camera=new THREE.PerspectiveCamera(38,aspect,.1,2000);
    camera.position.copy(view.position);camera.lookAt(view.target);camera.updateProjectionMatrix();camera.updateMatrixWorld();
    for(const x of [bounds.minX,bounds.maxX])for(const z of [bounds.minZ,bounds.maxZ])for(const y of [0,maxY]){
      const projected=new THREE.Vector3(x,y,z).project(camera);
      assert(Math.abs(projected.x)<.9,`${city} ${width}px extreme corner x=${x}, y=${y}, z=${z} fits horizontally`);
      assert(Math.abs(projected.y)<safeHeight+.02,`${city} ${width}px extreme corner x=${x}, y=${y}, z=${z} fits the HUD-safe viewport`);
      assert(projected.z<1&&projected.z>-1,`${city} ${width}px extreme corner stays inside near/far clip planes`);
    }
    for(const viewScale of [1,1.4]){
      const target=view.target.clone(),offset=view.position.clone().sub(target).multiplyScalar(viewScale),position=target.clone().add(offset),distance=offset.length();
      const clip=cameraClipPlanes(distance,target,{...bounds,maxY},maxY,clipBounds),depthCamera=new THREE.PerspectiveCamera(38,aspect,clip.near,clip.far);
      depthCamera.position.copy(position);depthCamera.lookAt(target);depthCamera.updateProjectionMatrix();depthCamera.updateMatrixWorld();
      for(const x of [clipBounds.minX,clipBounds.maxX])for(const z of [clipBounds.minZ,clipBounds.maxZ])for(const y of [-3,maxY]){
        const projected=new THREE.Vector3(x,y,z).project(depthCamera);
        assert(projected.z<1&&projected.z>-1,`${city} ${width}px world extreme remains inside adaptive planes at ${viewScale}x overview`);
      }
      assert(clip.near>=.05&&clip.near<=distance*.030001,`${city} adaptive near is positive and follows view distance`);
      assert(clip.far>distance,`${city} adaptive far includes world geometry beyond the camera target`);
      assert(clip.far/clip.near<1000,`${city} adaptive depth range preserves useful depth precision at ${viewScale}x overview`);
    }
    const focus=new THREE.Vector3((bounds.minX+bounds.maxX)/2,0,(bounds.minZ+bounds.maxZ)/2),walkPosition=focus.clone().add(new THREE.Vector3(0,3,7)),walkDistance=walkPosition.distanceTo(focus),walkClip=cameraClipPlanes(walkDistance,focus,{...bounds,maxY},maxY);
    assert(walkClip.near<.5&&walkClip.far>walkDistance+10,`${city} close walking view stays usable and retains distant scene depth`);
  }
}
const bounds=MAP_WORLD_BOUNDS.dublin;
const overview=fitOverview({...bounds,maxY:18},1440/900);
const stale={position:[900,1200,-800],target:[3000,0,-3000]};
const restored=normalizeCameraView(stale,overview,bounds,12,1000);
assert(restored.target.x<=bounds.maxX&&restored.target.z>=bounds.minZ,'restored target is clamped into authored world limits');
assert(restored.position.distanceTo(restored.target)<=1000.000001,'restored zoom is finite');
const camera=new THREE.PerspectiveCamera();camera.position.set(20,80,90);
const controls={target:new THREE.Vector3(300,0,-300),minDistance:12,maxDistance:1000};
const result=clampCameraToBounds(camera,controls,bounds);
assert.equal(result.x,bounds.maxX);assert.equal(result.z,bounds.minZ);
assert(Math.abs(camera.position.distanceTo(controls.target)-result.distance)<1e-8,'camera translates with bounded pan target');
assert(result.distance<=1000);
console.log('Map camera fit, restored-view bounds, and extreme-pan limits passed.');
