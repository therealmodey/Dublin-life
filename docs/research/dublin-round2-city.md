# Dublin western and southern expansion evidence

This round expands the standalone, compressed map west into Inchicore/Kilmainham and south into Dolphin's Barn, Harold's Cross, Rathmines, Ballsbridge and Sandymount. Coordinates, parcel dimensions and building shapes are authored for this scene; they are not survey data or claims about original Lagos Life internals.

## Places used in the expanded districts

| Place | Source evidence | Scene treatment |
| --- | --- | --- |
| Rathmines Library | [Dublin City Council](https://www.dublincity.ie/ga/node/4572) identifies the library at 157 Lower Rathmines Road and gives its public services. | Compact public-library frontage in the southern suburb. |
| RDS Main Hall | [Royal Dublin Society](https://www.rds.ie/) gives the RDS address on Merrion Road in Ballsbridge and describes its event venue. | Large hall footprint at the south-east edge. |
| Herbert Park | [Dublin City Council](https://www.dublincity.ie/parks-and-nature/dublin-city-parks/visit-park/herbert-park) places the park in Ballsbridge and lists sports courts, pond and playground facilities. | New source-linked park lot and detailed greenspace plan. |
| The Coombe Hospital | [The Coombe](https://www.coombe.ie/getting-here) lists its Cork Street, Dublin 8 address and visitor access. | Hospital campus massing, without invented operating functions. |
| Richmond Barracks | [Dublin City Council](https://www.dublincity.ie/culture-art-and-film/arts-culture-and-public-spaces/richmond-barracks) confirms the historic barracks in Inchicore and that it houses Inchicore Library. | One combined selectable place to avoid treating the co-located library and barracks as separate parcels. |
| Our Lady's Hospice, Harold's Cross | [Our Lady's Hospice](https://olh.ie/) is the institution's official site. | Institutional campus massing. |
| Rathmines Parish Church | [Dublin City Council's Rathmines trail](https://www.dublincity.ie/sites/default/files/2022-06/rathmines-walking-trail-map-guide-2021.pdf) documents the distinctive church, town hall and library landmark group. | Distinct domed church silhouette. |
| Dolphin's Barn Library | [Dublin City Council Libraries](https://www.dublincity.ie/residential/libraries/find-library) lists Dolphin's Barn Library on Parnell Road. | Compact neighbourhood-library frontage. |
| Sandymount Green | [Dublin City Council parks directory](https://www.dublincity.ie/find/park) is the council's park listing. | Small village-green lot at the south-east boundary. |
| Dr Steevens' Hospital | [HSE location page](https://www.hse.ie/eng/about/who/communications/our-locations/dr-steevens-hospital/) identifies the historic hospital location. | Historic institutional building massing. |
| Ballyfermot Library | [Dublin City Council Libraries](https://www.dublincity.ie/residential/libraries/find-library) lists Ballyfermot Library on Ballyfermot Road. | West-side public-library frontage. |

Additional location cross-checks: [IMMA at Royal Hospital Kilmainham](https://imma.ie/visit/info/), [Kilmainham Gaol Museum](https://www.kilmainhamgaolmuseum.ie/plan-a-visit/), and [St James's Hospital](https://www.stjames.ie/patients/gettingtothehospital/driving/). These were already selectable anchors in the preceding city expansion and were used to keep the new districts in a coherent west/south context.

## Spatial decisions

- Urban bounds are x=-78..40, z=-71..52. The western forest is x=-96..-80; the full scene contract reserves x=-96..96, z=-76..56 for forest, city and the port.
- The Liffey water strip runs west to x=-78. A radius-six open-water turning basin is reserved at (-68, 0); homes and trees stay outside it.
- Residential infill uses distinct compact parcel belts around the west-side river district, Inchicore/Kilmainham, and the southern suburbs. Transport routes are authored in the shared road module.
- Forest and belt trees use the already-loaded reference deciduous GLBs through the existing batched instancing path. The forest placements are scenery, not a claim that the real city has a surveyed woodland at these coordinates.

After integrating the shared road corridors, the generated Dublin city contains 637 home footprints and 448 exact reference-tree placements in the west forest strip (662 reference-tree placements across the city and outskirts). These are current scene-generation counts, not real-world housing or woodland counts.
