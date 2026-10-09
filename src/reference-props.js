import * as THREE from 'three';

// Source-backed Kenney models shipped by the public Lagos Life frontend.
// No geometry or material changes are applied to the shared GLTF prototypes.
export function createReferenceVehicle(model, {height = .26} = {}) {
  if (!model?.isObject3D) throw new TypeError('A loaded reference GLTF scene is required');
  const clone = model.clone(true);
  clone.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(clone);
  const centre = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  clone.position.set(-centre.x, -bounds.min.y, -centre.z);
  const root = new THREE.Group();
  root.name = 'Reference GLTF prop';
  root.add(clone);
  root.scale.setScalar(height / size.y);
  root.userData.referenceModel = true;
  root.userData.forward = '+Z';
  root.traverse(node => {
    node.userData.mapModelAsset = true;
    if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; }
  });
  return root;
}

export function buildReferenceTreeInstances(placements, models) {
  const root = new THREE.Group();
  root.name = 'Reference Dublin trees';
  const groups = new Map();
  for (const p of placements) {
    const kind = p.model || 'large';
    const parent = p.parent || root;
    const key = `${parent.uuid}:${kind}`;
    if (!groups.has(key)) groups.set(key, {parent,kind,items:[]});
    groups.get(key).items.push(p);
  }
  const dummy = new THREE.Object3D();
  for (const {parent,kind,items} of groups.values()) {
    const model = models[kind];
    if (!model) throw new Error(`Missing reference tree model: ${kind}`);
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const centre = bounds.getCenter(new THREE.Vector3());
    const normalize = new THREE.Matrix4().makeTranslation(-centre.x,-bounds.min.y,-centre.z);
    const sourceMatrix = new THREE.Matrix4();
    model.traverse(node => {
      if (!node.isMesh) return;
      const mesh = new THREE.InstancedMesh(node.geometry,node.material,items.length);
      mesh.name = `Reference tree-${kind}`;
      mesh.userData.mapModelAsset = true;
      // InstancedMesh owns its instance buffers, while geometry/materials remain
      // owned by Drei's shared GLTF cache.
      mesh.userData.referenceInstance = true;
      sourceMatrix.multiplyMatrices(normalize,node.matrixWorld);
      items.forEach((p,i) => {
        const height = p.height ?? p.size ?? 1.4;
        dummy.position.set(p.x,p.y ?? .26,p.z);
        dummy.rotation.set(0,p.rotation ?? 0,0);
        dummy.scale.setScalar(height/size.y);
        dummy.updateMatrix();
        mesh.setMatrixAt(i,dummy.matrix.clone().multiply(sourceMatrix));
      });
      mesh.instanceMatrix.needsUpdate=true;
      mesh.computeBoundingBox();mesh.computeBoundingSphere();
      mesh.castShadow=true;mesh.receiveShadow=true;
      parent.add(mesh);
    });
  }
  root.userData.count=placements.length;
  return root;
}
