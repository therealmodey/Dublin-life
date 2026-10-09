# Frontend migration checkpoint

The preserved static map is in `dist/`. The new Next.js App Router app uses React 19.2.8, React Three Fiber 9.8.1, Three 0.186.0, Drei 10.7.9, Tailwind 4.3.3 and Zustand 5.0.15. Versions and peer compatibility were checked against npm metadata on 2026-10-08; exact Next/Drei/Tailwind/Zustand versions in the original private project are unknown.

React owns the UI state; Fiber owns the scene/camera/renderer/frame loop. The existing factories attach their geometry through `mountMap`. Drei shares cached GLTF loads. Local map preferences and camera poses use Zustand; no player save, account or simulation backend is connected.

Baseline: syntax, all three geometry/motion scripts and esbuild build passed before migration. Six baseline browser screenshots loaded without page/console/network errors. Baseline screenshots are under `baseline/`.

Migrated checks: syntax and webpack production build pass. Three r186 removed PCFSoftShadowMap, so PCFShadowMap is used. Fiber currently emits a Three.Clock deprecation warning; it does not produce a runtime error. Turbopack development works, but its production CSS worker fails to bind a local port in this environment even under escalation. The standard build command uses `next build --webpack`.

The legacy `.openai/hosting.json` still targets the published static explorer. It is not a Next.js/OpenNext deployment configuration. No migration is published, and no original-game or player state is changed.
