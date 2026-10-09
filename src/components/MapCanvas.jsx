'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader as DreiGLTFLoader } from 'three-stdlib';
import { peek, suspend } from 'suspend-react';
import * as THREE from 'three';
import { useMapStore } from '../map-store.js';

function RuntimeScene() {
  const { scene, camera, gl } = useThree();
  const runtimeRef = useRef(null);
  const stateRef = useRef(useMapStore.getState());
  const applyingRuntimeState = useRef(false);

  useEffect(() => useMapStore.subscribe((state) => {
    const previous = stateRef.current;
    stateRef.current = state;
    if (applyingRuntimeState.current) return;
    const changed = {};
    for (const key of ['city', 'names', 'homes', 'boards', 'walking', 'selectedId', 'district', 'cameraViews']) {
      if (state[key] !== previous[key]) changed[key] = state[key];
    }
    if (changed.city) delete changed.district;
    if (Object.keys(changed).length) runtimeRef.current?.applyState?.(changed);
  }), []);

  useEffect(() => {
    let cancelled = false;
    let runtime;
    const controller = new AbortController();
    const pending = new Map();
    const modelLoader = (modelPath) => {
      const url = `/assets/${modelPath}.glb`;
      if (!pending.has(url)) {
        useGLTF.preload(url);
        const key = [DreiGLTFLoader, url];
        try {
          pending.set(url, Promise.resolve(suspend(() => Promise.resolve(undefined), key)[0].scene));
        } catch (pendingOrError) {
          if (!pendingOrError || typeof pendingOrError.then !== 'function') {
            pending.set(url, Promise.reject(pendingOrError));
          } else {
            pending.set(url, Promise.resolve(pendingOrError).then(() => {
              const gltf = peek(key)?.[0];
              if (!gltf?.scene) throw new Error(`Drei did not cache the GLB at ${url}`);
              return gltf.scene;
            }));
          }
        }
      }
      return pending.get(url);
    };

    import('../map-runtime.js').then(({ mountMap }) => mountMap({
      scene,
      camera,
      renderer: gl,
      modelLoader,
      initialState: stateRef.current,
      signal: controller.signal,
      onState: (partial) => {
        applyingRuntimeState.current = true;
        try { useMapStore.getState().applyRuntimeState(partial); }
        finally { applyingRuntimeState.current = false; }
      },
    })).then((mounted) => {
      if (cancelled) mounted.dispose();
      else {
        runtime = mounted;
        runtimeRef.current = mounted;
        mounted.applyState?.({
          city: stateRef.current.city,
          names: stateRef.current.names,
          homes: stateRef.current.homes,
          boards: stateRef.current.boards,
          walking: stateRef.current.walking,
          selectedId: stateRef.current.selectedId,
          cameraViews: stateRef.current.cameraViews,
        });
      }
    }).catch((error) => {
      if (cancelled || error?.name === 'AbortError') return;
      console.error('The city map could not be mounted.', error);
      useMapStore.getState().applyRuntimeState({ progress: 'The city could not load', ready: false });
    });

    return () => {
      cancelled = true;
      controller.abort();
      runtime?.dispose();
      runtimeRef.current = null;
      pending.clear();
    };
  }, [camera, gl, scene]);

  useFrame((state) => runtimeRef.current?.update(state.clock.elapsedTime * 1000));
  return null;
}

export default function MapCanvas() {
  const city = useMapStore((state) => state.city);
  const cityLabel = city[0].toUpperCase() + city.slice(1);
  return (
    <Canvas
      camera={{ fov: 38, near: 0.1, far: 2000, position: [0, 40, 40] }}
      dpr={typeof window === 'undefined' ? 1 : Math.min(window.devicePixelRatio || 1, 2)}
      frameloop="always"
      shadows={{ type: THREE.PCFShadowMap }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl: renderer }) => {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.setClearColor('#67afd5');
        renderer.domElement.setAttribute('aria-label', '3D city map. Drag to pan, scroll to zoom.');
        renderer.domElement.tabIndex = 0;
      }}
      aria-label={`Interactive 3D ${cityLabel} city map`}
    >
      <RuntimeScene />
    </Canvas>
  );
}
