import * as THREE from 'three';

// Authored scene extents, including the west-side woodland and the full Dublin
// airport/harbour footprint. These limits keep MapControls inside rendered land.
export const MAP_WORLD_BOUNDS = Object.freeze({
  lagos: Object.freeze({ minX: -28, maxX: 28, minZ: -31, maxZ: 24 }),
  abuja: Object.freeze({ minX: -70, maxX: 66, minZ: -52, maxZ: 54 }),
  dublin: Object.freeze({ minX: -96, maxX: 96, minZ: -76, maxZ: 56 }),
});

const finiteVector = (value) => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);

export function normalizeCameraView(view, fallback, bounds, minDistance, maxDistance) {
  const position = finiteVector(view?.position) ? new THREE.Vector3(...view.position) : fallback.position.clone();
  const target = finiteVector(view?.target) ? new THREE.Vector3(...view.target) : fallback.target.clone();
  target.x = THREE.MathUtils.clamp(target.x, bounds.minX, bounds.maxX);
  target.z = THREE.MathUtils.clamp(target.z, bounds.minZ, bounds.maxZ);
  const offset = position.sub(new THREE.Vector3(...(finiteVector(view?.target) ? view.target : fallback.target.toArray())));
  if (!Number.isFinite(offset.lengthSq()) || offset.lengthSq() < 1e-8) offset.copy(fallback.position).sub(fallback.target);
  const distance = THREE.MathUtils.clamp(offset.length(), minDistance, maxDistance);
  const azimuth = THREE.MathUtils.clamp(Math.atan2(offset.x, offset.z), -.6, .6);
  const elevation = THREE.MathUtils.clamp(Math.atan2(offset.y, Math.hypot(offset.x, offset.z)), THREE.MathUtils.degToRad(14), THREE.MathUtils.degToRad(76));
  const horizontal = distance * Math.cos(elevation);
  offset.set(Math.sin(azimuth) * horizontal, Math.sin(elevation) * distance, Math.cos(azimuth) * horizontal);
  return { position: target.clone().add(offset), target };
}

export function fitOverview(bounds, aspect, fovDegrees = 38, options = {}) {
  const aspectSafe = Number.isFinite(aspect) && aspect > 0 ? aspect : 1;
  const fov = THREE.MathUtils.degToRad(fovDegrees);
  const elevation = options.elevation ?? THREE.MathUtils.degToRad(53);
  const margin = options.margin ?? 1.14;
  const safeWidth = options.safeWidth ?? .88;
  const safeHeight = options.safeHeight ?? .74;
  const width = bounds.maxX - bounds.minX;
  const depth = bounds.maxZ - bounds.minZ;
  const height = bounds.maxY ?? 0;
  const horizontalHalfFov = Math.atan(Math.tan(fov / 2) * aspectSafe * safeWidth);
  const verticalHalfFov = Math.atan(Math.tan(fov / 2) * safeHeight);
  const projectedHalfHeight = (depth * Math.sin(elevation) + height * Math.cos(elevation)) / 2;
  const distance = margin * Math.max(width / (2 * Math.tan(horizontalHalfFov)), projectedHalfHeight / Math.tan(verticalHalfFov));
  const target = new THREE.Vector3((bounds.minX + bounds.maxX) / 2, options.targetY ?? 0, (bounds.minZ + bounds.maxZ) / 2);
  return { target, position: target.clone().add(new THREE.Vector3(0, distance * Math.sin(elevation), distance * Math.cos(elevation))), distance };
}

export function clampCameraToBounds(camera, controls, bounds) {
  const target = controls.target;
  const x = THREE.MathUtils.clamp(target.x, bounds.minX, bounds.maxX);
  const z = THREE.MathUtils.clamp(target.z, bounds.minZ, bounds.maxZ);
  const dx = x - target.x;
  const dz = z - target.z;
  if (dx || dz) {
    target.x = x;
    target.z = z;
    camera.position.x += dx;
    camera.position.z += dz;
  }
  const distance = camera.position.distanceTo(target);
  const clamped = THREE.MathUtils.clamp(distance, controls.minDistance, controls.maxDistance);
  if (Math.abs(clamped - distance) > 1e-6) camera.position.sub(target).setLength(clamped).add(target);
  return { x: target.x, z: target.z, distance: clamped };
}

export function cameraClipPlanes(distance, target, bounds, maxY = 24, clipBounds = bounds) {
  const dx = Math.max(Math.abs(clipBounds.minX - target.x), Math.abs(clipBounds.maxX - target.x));
  const dz = Math.max(Math.abs(clipBounds.minZ - target.z), Math.abs(clipBounds.maxZ - target.z));
  const dy = Math.max(Math.abs(-3 - target.y), Math.abs(maxY - target.y));
  const worldRadius = Math.hypot(dx, dz, dy);
  const near = Math.max(.05, distance * .03);
  const far = Math.max(near + 100, distance + worldRadius + 30);
  return { near, far };
}
