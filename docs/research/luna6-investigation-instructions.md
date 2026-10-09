# GPT-6 Luna investigation instructions

Target: https://lagoslife.eliysites.com/

Models: three GPT-6 Luna agents, high reasoning. This is an investigation; application changes and deployment are outside this task.

## Agent 1 — rendering and loading

Inspect the reference's public JavaScript and verify decisive files against the live site. Explain geometry/material reuse, instancing, GLTF caching, city lazy-loading, pixel-ratio limits, shadows, and render scheduling. Cite exact source evidence. Separate observed implementation from expected performance benefits. Do not invent FPS, load-time improvements, or optimization mechanisms.

Deliverable: `lagos-life-rendering-findings.md`.

## Agent 2 — hosting

Check current DNS records, HTTP headers, public asset routes, and primary provider documentation. Distinguish the domain/platform, CDN or edge proxy, and origin runtime. A Cloudflare header alone does not establish the origin host. Clearly state what cannot be determined from public evidence. Keep the reference and our separately hosted clone distinct.

Deliverable: `lagos-life-hosting-findings.md`.

## Agent 3 — comparison with our clone

Inspect the existing Lagos/Abuja clone. Identify optimizations already present and concrete remaining opportunities, prioritizing impact, effort, and risk. Verify source pointers and asset sizes. Describe suspected bottlenecks as hypotheses unless measured. Do not change application files or publish anything.

Deliverable: `lagos-map-optimization-next-steps.md`.

## Shared rules

- Work independently in the assigned deliverable and scratch directory; preserve other agents' files.
- Use public, read-only evidence. Do not operate game accounts, submit forms, probe private endpoints, or expose credentials.
- Prefer current evidence and primary technical sources. Include dates, links, and uncertainty.
- The parent attempted graph discovery and indexing; the current checkout could not be indexed. Direct source inspection is the documented fallback. Do not claim graph verification or exhaustive coverage.
- The parent reviews and consolidates all findings before reporting them to the user.
