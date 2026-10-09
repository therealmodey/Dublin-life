# Ireland expansion — resolved decisions

Decision date: 2026-10-08. The user authorized resolving the reviewed inconsistencies and specified an extension to Lagos Life. These decisions supersede conflicting proposals in the six supplied documents for the expansion. They are design decisions, not evidence of changes to the live game. All fees, durations, eligibility and currency rates below are fictional gameplay values, not real immigration or financial guidance.

## 1. Product and launch scope

Build Ireland as an expansion of Lagos Life, using the same account, character, inventory, relationships and save. Preserve Lagos and Abuja, existing progression, possessions and earned balances. Add Dublin as the first Irish destination. Cork and Galway follow as later content expansions; they do not delay Dublin.

Ireland is reached through preparation and travel, rather than an unrestricted city selector. Players can return to Nigeria through the travel system when their current game status permits it. Assets and homes remain in their original cities. Presence belongs to the player's current city, while friends and messages remain accessible across cities.

Preserve the existing Lagos visual language, map controls, HUD and phone conventions. Apply Irish identity through Dublin architecture, locations, dialogue and local content. Do not impose the companion document's proposed wholesale redesign on Lagos.

## 2. Clock, passport and visa progression

Use the actual Lagos simulation clock and its validated speed rules. Do not create an independent accelerated clock or alter existing Lagos needs, job shifts and rent to accommodate Ireland. Define every new duration explicitly in simulation days, measured from authoritative server simulation time, never the device clock. The exact current Lagos clock and persistence behavior must be verified in the original source before implementation.

For the expansion, simulation advances during active play; the server validates elapsed time and allowed speed. Ireland processing, expiry, rent and needs do not advance while the player is offline. Reconnection refreshes the last authoritative state. If Lagos currently advances offline, reconcile this within its existing clock contract before release rather than secretly introducing two calendars. This compatibility check may revise the offline policy, but does not change the decision to share one clock. Multiplayer message timestamps and presence use wall time; personal simulation dates need not match across players.

Passport quest: ₦80,000 total, comprising ₦5,000 birth certificate, ₦10,000 origin certificate, ₦50,000 application and ₦15,000 passport biometrics. The baseline full quest takes 35 simulation days: 7 for birth certificate, 14 for origin certificate, then 14 for passport processing including biometrics. Collection is instant after completion. Existing qualifying documents skip their quest step and cost. The quest progress screen gives the exact next action and due date.

Initial legal routes:

| Route | Application fee | Processing | Permission after arrival |
| --- | --- | --- | --- |
| Tourist | €80 | 21 simulation days | Visit for 90 simulation days; no employment |
| Work | €1,000 | 70 simulation days | Work and reside for 730 simulation days |
| Student | €300 | 56 simulation days | Study and take designated part-time jobs for the enrolled course term |

Investor/Golden Visa is deferred. These names and numbers describe game systems only.

Eligibility is explicit and deterministic: valid passport, route-specific fictional documents, required funds, and an employer offer or course admission where applicable. Tourist funds threshold is €2,500 equivalent; other routes show their configured funding requirement before application. Complete, eligible applications are approved when processing completes. Missing requirements prevent submission and payment. Do not implement demographic penalties, charisma-based immigration decisions or hidden rejection dice from the drafts. Narrative events may explain the wait, but do not change the committed fee or deadline.

Application and permission are separate records. Application states: draft → submitted → processing → approved/rejected/cancelled. Rejection is reserved for an explicit, documented eligibility failure discovered during processing, not an arbitrary random roll; store the reason. The launch implementation validates eligibility at submission, so ordinary complete applications take the approval path. Issuing an approved grant is atomic. Permission states: issued → active → expired/revoked. The travel window is 90 simulation days from issue; permission duration begins on arrival. Travel checks the unexpired grant and ticket before changing location. Expiry affects permissions, not character ownership or Nigerian possessions. No refresh can reset a wait, expiry or outcome.

Passport biometrics and any later route-specific appointment are separate named charges. The UI itemizes them so the passport fee is never accidentally charged again as a visa fee. Travel, insurance and accommodation are separate purchases with displayed prices; no implicit bundle deductions.

## 3. Currency and japa accounting

Maintain separate NGN and EUR wallets. Leaving Nigeria does not convert or erase naira. Nigerian actions debit NGN; Irish actions debit EUR. The UI emphasizes local currency and allows inspection of both balances.

Use an initial game exchange rate of **₦1,500 per €1**. Remove the ambiguous 1.55 field. Store balances in integer kobo and cents; define rates as exact rational values. A quote lasts 60 wall-clock seconds, includes its rate version and a 1% fee, and shows source debit and final destination credit. Round the fee up to the source minor unit and the credited amount down to the destination minor unit. Never silently refresh an expired quote; return a new quote for acceptance. The server performs the exchange atomically. A later game economy can change the rate through versioned configuration; no live financial-feed dependency at launch.

Japa remains an optional fictional narrative branch, separate from legal visas. Route tables are versioned balance data, not real travel instructions. The conflicting draft success percentages and onward journeys need content balancing before a route is released; do not silently treat arrival in an intermediate country as arrival in Dublin.

Each released route specifies one total upfront price, the destination it actually reaches, stages, duration and outcome table. If onward travel is separate, show its price before the attempt. Starting an attempt debits the committed price once and persists its route version and server-generated outcome. Resolution applies location/status/consequences once and does not debit the route price again. Retrying the same request returns its original result; a new attempt requires an explicit new purchase after the prior attempt ends. The frontend and endpoint never both apply a deduction. No paid top-ups or real-money currency purchases in the initial expansion.

## 4. Save ownership and persistence

There is one authoritative player state. Use the original service's durable database and transaction capabilities; do not create an isolated Ireland save service or choose a new provider simply because the drafts name DigitalOcean/PostgreSQL.

The server owns balances, skills, inventory acquisition, employment rewards, applications, grants, travel and random outcomes. The client submits commands and displays returned state. Generic client-save input cannot replace authoritative fields. Only approved presentation preferences may be saved directly. Command responses include the state revision, operation ID and authoritative changed fields.

Every consequential command has an idempotency key scoped to player and operation, with a request-payload fingerprint. Exact retries replay the committed result; the same key with different input is rejected. Persist the result and ledger/state mutations in the same transaction. Conditional writes or locking prevent races, negative balances and competing travel/application actions. Network uncertainty leaves an operation pending until reconciled; the client must not invent success or reroll.

Use canonical records for wallets/ledger, applications/grants, journeys and attempts. Existing save JSON may retain legacy systems and non-economic state until deliberately migrated. Dublin views and summaries are derived from canonical records, not a second editable copy. Migration must preserve each character and opening balance, reconcile ledger totals, be versioned and be retry-safe. Existing legitimate balances are preserved; the migration does not claim to prove their historical provenance.

Coordinate the save-authority cutover with the original client release. Older full-state saves must not overwrite protected fields after cutover. Use field allowlists and minimum client/schema versions as needed. An incompatible old client receives an update-required response. Stage and verify backup/restore, account continuity and race/retry behavior before any live migration. No existing player data is modified by this document.

## 5. Multiplayer and hosting

Launch as a personal life simulation with asynchronous social play, consistent with the reference's described messaging and transfer model. Friends, presence summaries and cross-city inboxes use the existing system; a 15-second visible-session refresh is the initial fallback where needed. Pause polling when hidden and refresh on return. Money transfers remain immediate, server-validated transactions, independent of how quickly an inbox refreshes.

Do not add synchronized avatars, shared physics or a globally ticking player simulation for this expansion. Preserve any original social functionality verified in the source. Messages retain delivery identifiers so refresh does not duplicate them. Restrict public character views to explicit public fields. Use existing block/report/moderation controls and verify those integrations before public release.

Keep the original hosting and deployment pipeline for a true extension. Prior public inspection found Cloudflare/OpenNext signals, but public headers do not establish private database topology or account ownership. Do not migrate hosting from a document example. Serve Dublin as a separate scene bundle, load it when required, and use the original renderer's measured batching/mobile-quality approach.

## 6. Integration requirements and first delivery

An actual extension requires maintainer-authorized access to the Lagos Life repository, backend contracts, assets, deployment configuration and a staging environment. The scrape and current map explorer cannot themselves establish account continuity or modify the existing service. Without that access, only a separate compatible-looking prototype is possible; it must not be described as integrated Lagos Life.

First implementation milestone: an existing character continues a Lagos save, completes the passport quest and work-route prerequisites, submits one paid application, waits on the shared clock, receives a grant, exchanges currency, books travel, arrives in a small Dublin scene, takes an eligible job and reloads the same save successfully. Other routes and more Dublin content follow this verified end-to-end flow.

Acceptance includes: unchanged Nigerian assets/balances on migration; no duplicate charges after timeout/retry or concurrent tabs; invalid client state cannot forge money or grants; clock/speed/offline behavior matches the agreed original-service contract; tourist cannot take work-route jobs; currency rounding matches displayed quotes; grant expiry survives reload; travel switches city once; messages continue across cities; Dublin loads within measured mobile budgets.

## Precedence

The user's extension requirement governs. This decision record governs the four reviewed contradictions and integration scope. PRD/TRD v2 guide unaffected content; older architecture, design and agent-guide examples are subordinate where they conflict. The original service's verified contracts govern compatibility, with any unavoidable deviations documented before implementation.
