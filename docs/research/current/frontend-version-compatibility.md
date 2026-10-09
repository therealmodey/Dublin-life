# Frontend package compatibility

Checked npm registry metadata 2026-10-08:

- Next.js 16.4.0: React and react-dom ^19 are accepted; Node >=20.9. Current Node 22.23.1 satisfies this.
- React/react-dom 19.2.8 match the public reference's verified version.
- React Three Fiber 9.8.1: React >=19 <19.4, Three >=0.156. Matches the public renderer version.
- Three 0.186.0 matches verified public REVISION 186.
- Drei 10.7.9: Fiber ^9, React ^19, Three >=0.159. Exact original Drei version remains unverified.
- Tailwind 4.3.3 / @tailwindcss/postcss 4.3.3 and Zustand 5.0.15 are compatible installed versions, not claimed original private versions.
- suspend-react 0.1.3 is explicitly declared for consuming the actual shared Fiber/Drei GLTF cache. three-stdlib (Drei's loader constructor) is explicitly declared rather than relying on transitive resolution.

Official Fiber major pairing: https://r3f.docs.pmnd.rs/getting-started/introduction
Official Next installation: https://nextjs.org/docs/app/getting-started/installation
