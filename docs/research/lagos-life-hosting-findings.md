# Lagos Life hosting findings

**Checked:** 2026-10-08 15:23 UTC  
**Target:** [https://lagoslife.eliysites.com/](https://lagoslife.eliysites.com/)  
**Separate recreation:** [https://lagos-map-explorer.ikosam12345.chatgpt.site](https://lagos-map-explorer.ikosam12345.chatgpt.site)

## Finding

The strongest public evidence indicates the original Lagos Life app runs as a **Next.js application on Cloudflare Workers using the OpenNext adapter**, with Cloudflare also providing DNS and the public edge/CDN. The live response exposes `cf-placement: local-CDG` (on another request it was `local-LHR`), `x-opennext: 1`, `x-powered-by: Next.js`, and Next.js cache/prerender headers. Cloudflare documents `cf-placement` as a header it adds to requests executed by Workers, with `local-*` values identifying the local Worker location. Its OpenNext guide describes the adapter as transforming Next.js output to run on Workers. Taken together, these are strong runtime evidence, beyond the Cloudflare proxy headers alone.

## Confirmed public evidence

- DNS for `eliysites.com` delegates to `hasslo.ns.cloudflare.com` and `meilani.ns.cloudflare.com`.
- The hostname resolves to Cloudflare IPv4 addresses `104.21.12.236` and `172.67.153.235`, plus IPv6 addresses `2606:4700:3036::ac43:99eb` and `2606:4700:3034::6815:cec`. No CNAME was returned for the hostname.
- The page returned HTTP 200 over HTTP/2. Response headers included `server: cloudflare`, `cf-ray`, `cf-placement`, `x-opennext: 1`, `x-powered-by: Next.js`, `x-nextjs-cache`, and `x-nextjs-prerender`.
- HTML references same-host `/_next/static/...` assets. A CSS asset returned HTTP 200 with `cf-cache-status: HIT` and a one-year immutable cache policy. This confirms Cloudflare serves/caches the public asset route; it does not reveal the asset's storage origin.
- Cloudflare's [Workers placement documentation](https://developers.cloudflare.com/workers/configuration/placement/) says Cloudflare adds `cf-placement` when Worker placement is enabled and that values such as `local-LHR` identify the data center where the Worker ran.
- Cloudflare's [OpenNext adapter documentation](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/) says the adapter transforms Next.js build output to run on Cloudflare Workers. The [OpenNext Cloudflare docs](https://opennext.js.org/cloudflare) describe the same deployment target.

## What remains unknown

Public DNS answers are Cloudflare edge addresses; they do **not** disclose a separate origin host or prove whether there is one. The headers establish the app-serving Worker path, but cannot reveal its account, Worker name, source repository, build pipeline, bindings, database, object storage, or whether static assets are stored in Workers static assets, R2, or another backing service. `eliysites.com` is the visible custom hostname/branding; that label alone does not identify a hosting product or the platform behind it.

## Architecture implications for a recreation

For a similar architecture, use Next.js with an OpenNext-to-Cloudflare-Workers deployment and Cloudflare-managed DNS/hostname. Keep static assets on the same hostname and cache immutable build assets at the edge. Treat that as an evidence-based reproduction path, not proof of the original deployment configuration. The recreation's `chatgpt.site` hostname is separate from the original `eliysites.com` deployment.

## Evidence files and freshness

Raw DNS and response headers captured on 2026-10-08 are in [live-evidence-2026-10-08.txt](../work/optimization-research/hosting/live-evidence-2026-10-08.txt). These are point-in-time public observations and DNS answers/headers may change.
