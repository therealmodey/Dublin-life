# Dublin city scene evidence and mapping notes

The Dublin scene is a compressed, illustrative city map for the standalone explorer. It is not a GIS basemap, a survey, an address directory, or a claim about Lagos Life's private map or backend. World axes are authored for the scene: west is negative X, east is positive X, north is negative Z, and the Liffey is the central east–west water band. Distances and parcel dimensions are scene units, not metres. Neighbourhood ordering follows the cited city and visitor maps; individual footprint placement is adjusted to keep the shared traffic lanes, the river, and selectable places legible at this scale.

The primary geographic reference is Dublin City Council's [Development Plan Map K](https://www.dublincity.ie/sites/default/files/2022-07/map-k.pdf), which identifies the central strategic development areas including the Docklands, North East Inner City, Connolly/Moore Street, Grangegorman, the Liberties and St James's Gate. For a city-wide view, see the Council's [Dublin City Map](https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/25ae3768-e605-4166-a2b6-ae8e11f09c6e/Dublin%20City%20Map%200923-ONLINE-2.pdf). Each selectable place carries a `sourceUrl` in `src/dublin-locations.js`; the Council map is the common geographic reference where a venue-specific source is not available.

## Geographic placement

- Dublin Airport is kept north of the city core; Phoenix Park and the west/northwest heritage area sit to the west; Croke Park and the northside civic/retail places are north of the river.
- The Garden of Remembrance, Henry Street, the Rotunda, Busáras, and the north-quay venues are north of the Liffey. Kilmainham Gaol, IMMA/Royal Hospital Kilmainham, St James's Hospital, and the Irish National War Memorial Gardens are in the southwest/west heritage area south of the river.
- Trinity, Grafton Street, St Stephen's Green, Iveagh Gardens, Merrion Square, and the National Gallery occupy the south-central area. The Custom House, EPIC/CHQ, the Convention Centre, Connolly Station, Grand Canal Dock, Bord Gáis Energy Theatre, the Marker, and Aviva Stadium form the eastern Docklands / south-east sequence.
- Vehicle traffic and the scene share the authored polylines in `src/dublin-road-network.js`. Lots are checked against every lane segment; bridge decks are the explicit exception where a road crosses a bridge lot. The pedestrian map additionally retains Ha’penny Bridge and the Samuel Beckett Bridge as selectable places.

### Corrected inner-city placements

These placements were corrected against venue or public-service location sources after a review found several names attached to the wrong side of the city. Scene coordinates remain authored, compressed positions; the citations establish identity and broad relative geography rather than exact coordinates or footprints.

- Four Courts is on Inns Quay on the north bank and is now placed on the western side of that bank, with the Courts Service location page as its direct source: [Four Courts](https://www.courts.ie/offices/four-courts).
- Busáras is the Central Bus Station on Store Street. Its lot now sits east of the O’Connell Street axis and west of Connolly Station, consistent with Bus Éireann’s [station information](https://www.buseireann.ie/bus-stations).
- Glasnevin Cemetery and its visitor experience are on Finglas Road, north-west of the inner city. Its lot was moved from the far-east Docklands to the north-west edge and now links to the [Dublin Cemeteries Trust visitor page](https://www.dctrust.ie/experience-glasnevin/plan-your-visit.html).
- EPIC occupies the CHQ Building on the north side of Custom House Quay. Those names now share one selectable lot, placed on the north quay east of the Custom House; the link is EPIC’s [official location page](https://epicchq.com/visit/location/). The previous second CHQ entry now identifies the distinct [Famine Memorial](https://www.visitdublin.com/famine-memorial), which is also on Custom House Quay and has a separate low-profile sculpture form.
- Dublin City Centre Citizens Information Centre is at Montgomery House, James Joyce Street. It was moved from the far-west edge toward the central north-east inner city; the [official centre listing](https://centres.citizensinformation.ie/centre.php?cic=Dublin+City+Centre+CIC) supports the address.

## Landmark form references

The scene uses simplified silhouettes and colour blocks, not photogrammetry. The following primary or official references inform those silhouettes:

- [General Post Office](https://www.visitdublin.com/general-post-office): Greek Revival stone frontage and projecting portico on O'Connell Street.
- [The Custom House](https://www.visitdublin.com/custom-house-visitor-centre): James Gandon's long neoclassical riverfront building and central dome.
- [Dublin Castle's medieval Record Tower](https://dublincastle.ie/the-medieval-tower/): a robust medieval tower distinct from the later castle buildings.
- [Samuel Beckett Bridge](https://www.visitdublin.com/samuel-beckett-bridge): Calatrava's curved, harp-like cable-stayed bridge between the north quay and Sir John Rogerson's Quay.
- [Croke Park stadium development](https://crokepark.ie/stadium/stadium-history-development/stadium-development): Cusack, Hogan, Davin and Dineen/Hill 16 stands; Hill 16 is a terraced stand.
- [Guinness Storehouse Gravity Bar](https://www.guinness-storehouse.com/en/whats-hoppening/the-gravity-bar): glass-and-steel lookout above the Storehouse.
- [Visit Dublin city landmarks](https://www.visitdublin.com/guides/dublin-city-landmarks): Trinity's Campanile, Christ Church's spire and flying buttresses, and the city's public-space context.
- [Visit Dublin Docklands](https://www.visitdublin.com/guides/things-to-do-dublin-docklands): EPIC in the CHQ vaults, the Jeanie Johnston, Samuel Beckett Bridge, the Docklands and Bord Gáis Energy Theatre.

## Limits and verification

The reference pages support the identities, broad locations and distinguishing design cues above. The rendered buildings remain hand-authored low-poly approximations; façade details, exact footprints, dimensions, street alignments and relative distances are not measured from those pages. Venue presence and selectable names are source-linked in the data, but this map does not provide venue interiors or imply service integrations. A venue's inclusion in the compressed scene should not be read as an address-level geocoding result. Source URLs establish a venue's identity or location only where their page content supports that claim; a generic city guide is not treated as parcel-level evidence.
