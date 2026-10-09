# Ireland Life — Product Requirements Document (PRD) v2.0
## Extension of Lagos Life

**Version:** 2.0
**Date:** 2026-10-08
**Author:** Samuel Modey
**Status:** Draft
**Supersedes:** PRD v1.0

---

## Table of Contents

1. [Vision](#1-vision)
2. [Target Audience](#2-target-audience)
3. [User Personas](#3-user-personas)
4. [Core Gameplay Loop](#4-core-gameplay-loop)
5. [Feature List](#5-feature-list)
6. [Visa System — Detailed Requirements](#6-visa-system--detailed-requirements)
7. [Japa System — Detailed Requirements](#7-japa-system--detailed-requirements)
8. [Ireland-Specific Content](#8-ireland-specific-content)
9. [Success Metrics](#9-success-metrics)
10. [Monetization](#10-monetization)
11. [Roadmap](#11-roadmap)
12. [Risks & Mitigations](#12-risks--mitigations)
13. [Design Decisions](#13-design-decisions)
14. [Open Questions](#14-open-questions)

---

## 1. Vision

### 1.1 Tagline

**"From Lagos to Dublin — earn your japa."**

### 1.2 Concept

Ireland Life is a browser-based life simulation game and a direct extension of Lagos Life. Players start in Lagos, build a life, then attempt to travel to Ireland — legally (via visa) or illegally (via "japa"). The visa process is the core gameplay loop: expensive, uncertain, and full of bureaucracy. The japa path is faster but dangerous. Both paths are fully integrated into the existing Lagos Life systems.

### 1.3 Design Pillar

**Ireland is not a city you unlock — it's a country you earn.**

### 1.4 Core Values

| Value | Description |
|---|---|
| **Authenticity** | The visa/japa experience must feel real to Nigerians who've been through it |
| **Agency** | Players choose their path — legal or illegal — and live with the consequences |
| **Progression** | Every action moves you closer to Ireland, even if it's just saving ₦500 more |
| **Social** | The journey is shared — players help, compete, and commiserate |
| **Respect** | The game treats immigration as a serious life decision, not a joke |

### 1.5 Unique Selling Points

1. **First life-sim with a real immigration system** — not a mini-game, but a full progression system
2. **Two distinct paths** — legal (slow, safe) vs illegal (fast, dangerous) — with meaningful trade-offs
3. **Cross-city gameplay** — Lagos and Dublin exist in the same world, with real-time social interaction
4. **Real-world resonance** — every Nigerian player will recognize the visa hassles
5. **Emergent storytelling** — every player's journey is unique based on their choices

---

## 2. Target Audience

### 2.1 Primary Audience

| Attribute | Detail |
|---|---|
| **Who** | Nigerian players of Lagos Life |
| **Age** | 18–35 |
| **Location** | Nigeria (Lagos, Abuja, Port Harcourt) |
| **Tech literacy** | High — they play a browser game daily |
| **Income** | Low to middle — they understand financial struggle |
| **Motivation** | Escape, opportunity, status, family pressure |
| **Play style** | Goal-oriented, willing to grind for progression |

### 2.2 Secondary Audience

| Attribute | Detail |
|---|---|
| **Who** | Irish players |
| **Age** | 16–40 |
| **Location** | Ireland (Dublin, Cork, Galway) |
| **Motivation** | Local pride, cultural representation, life-sim fun |
| **Play style** | Casual, social, exploratory |

### 2.3 Tertiary Audience

| Attribute | Detail |
|---|---|
| **Who** | Nigerian diaspora |
| **Age** | 25–50 |
| **Location** | UK, US, Canada, Ireland |
| **Motivation** | Nostalgia, reliving the visa experience, sharing with family |
| **Play style** | Mixed — some casual, some nostalgic |

### 2.4 Audience Size Estimate

| Segment | Estimated Size | Source |
|---|---|---|
| Lagos Life DAU | ~5,000 | Live site inspection |
| Addressable Nigerian market | ~50,000 | Lagos Life marketing + word of mouth |
| Irish life-sim market | ~10,000 | General life-sim audience |
| Diaspora market | ~20,000 | Nigerian diaspora communities |
| **Total addressable** | **~80,000** | |

---

## 3. User Personas

### Persona 1: "Tunde the Hustler"

| Attribute | Detail |
|---|---|
| **Age** | 24 |
| **Location** | Yaba, Lagos |
| **Occupation** | Junior developer at a fintech |
| **Income** | ₦150,000/month |
| **Savings** | ₦500,000 |
| **Tech** | iPhone 12, mobile data |
| **Play style** | Daily player, 30 min/session |
| **Goal** | Get to Dublin legally, send money home |
| **Pain point** | Can't afford the visa process (₦500k+) |
| **Motivation** | Escape Lagos traffic, earn in €, family pressure |
| **Risk tolerance** | Medium — will try black market, but prefers legal |
| **Quote** | "I just want to japa properly. No Libya, no fake papers. But if I get rejected twice, I'm calling my guy." |

**User Story:** As Tunde, I want to save up for a visa application so I can travel to Dublin legally and start earning in euros.

---

### Persona 2: "Chidi the Student"

| Attribute | Detail |
|---|---|
| **Age** | 20 |
| **Location** | UNILAG hostel |
| **Occupation** | 300-level Computer Science student |
| **Income** | ₦3,000/week allowance |
| **Savings** | ₦50,000 |
| **Tech** | Android phone, campus Wi-Fi |
| **Play style** | Sporadic, 15 min/session between classes |
| **Goal** | Get accepted to an Irish university (UCD or TCD) |
| **Pain point** | Parents can't afford Irish tuition; needs SUSI grant |
| **Motivation** | Better education, escape ASUU strikes, career prospects |
| **Risk tolerance** | Low — wants the legal student route |
| **Quote** | "My mum said if I get a scholarship, she'll sell the TV. I just need to pass the visa interview." |

**User Story:** As Chidi, I want to apply for a student visa and SUSI grant so I can study in Ireland without bankrupting my parents.

---

### Persona 3: "Amara the Professional"

| Attribute | Detail |
|---|---|
| **Age** | 28 |
| **Location** | Wuse 2, Abuja |
| **Occupation** | Registered nurse |
| **Income** | ₦200,000/month |
| **Savings** | ₦2,000,000 |
| **Tech** | iPhone 14, home Wi-Fi |
| **Play style** | Evening player, 1 hr/session |
| **Goal** | Relocate to Dublin on a Critical Skills permit |
| **Pain point** | The process is long (8–12 weeks) and expensive |
| **Motivation** | Better pay (€55k vs ₦200k), career growth, bring family later |
| **Risk tolerance** | Low — will do it properly, no shortcuts |
| **Quote** | "I've been a nurse for 6 years. Ireland needs nurses. I just need to prove I'm not going to overstay." |

**User Story:** As Amara, I want to apply for a Critical Skills work permit so I can relocate to Dublin and earn a proper salary.

---

### Persona 4: "The Japa Desperate"

| Attribute | Detail |
|---|---|
| **Age** | 22 |
| **Location** | Mushin, Lagos |
| **Occupation** | Unemployed (NYSC completed) |
| **Income** | ₦0 (depends on family) |
| **Savings** | ₦0 |
| **Tech** | Android phone, mobile data |
| **Play style** | Obsessive, 2+ hrs/session |
| **Goal** | Get to Ireland by any means necessary |
| **Pain point** | Can't afford any visa route; no job, no prospects |
| **Motivation** | Escape poverty, family pressure, social media FOMO |
| **Risk tolerance** | High — will try Libya, fake documents, anything |
| **Quote** | "I don't care about the risk. Anything is better than this life. I'll die trying." |

**User Story:** As the Japa Desperate, I want to attempt the Libya route so I can get to Ireland even if it's dangerous.

---

### Persona 5: "Ngozi the Returnee"

| Attribute | Detail |
|---|---|
| **Age** | 35 |
| **Location** | London, UK |
| **Occupation** | Accountant |
| **Income** | £45,000/year |
| **Savings** | £20,000 |
| **Tech** | iPhone 15, laptop |
| **Play style** | Weekend player, nostalgic |
| **Goal** | Relive the visa experience, share with her kids |
| **Pain point** | Wants her children to understand what she went through |
| **Motivation** | Nostalgia, cultural connection, family storytelling |
| **Risk tolerance** | Low — just wants to play through the legal route |
| **Quote** | "I want my daughter to play this and understand why I left Nigeria in 2015." |

**User Story:** As Ngozi, I want to play through the visa application so I can share my experience with my children.

---

## 4. Core Gameplay Loop

### 4.1 High-Level Loop

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        IRELAND LIFE GAME LOOP v2                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │   LIVE IN    │───▶│   SAVE UP    │───▶│   PREPARE    │───▶│  APPLY    │ │
│  │   LAGOS      │    │   FOR VISA   │    │   DOCUMENTS  │    │  FOR VISA │ │
│  └──────────────┘    └──────────────┘    └──────────────┘    └───────────┘ │
│       ▲                                                               │     │
│       │                                                               ▼     │
│       │                                                        ┌───────────┐ │
│       │                                                        │   WAIT    │ │
│       │                                                        │  (15–90d) │ │
│       │                                                        └───────────┘ │
│       │                                                               │     │
│       │                                                               ▼     │
│       │                        ┌──────────────┐    ┌──────────────────────┐ │
│       │                        │   REJECTED   │    │      APPROVED        │ │
│       │                        │  (retry or   │    │                      │ │
│       │                        │   japa)      │    │                      │ │
│       │                        └──────────────┘    └──────────────────────┘ │
│       │                               │                       │             │
│       │                               ▼                       ▼             │
│       │                        ┌──────────────┐    ┌──────────────────────┐ │
│       │                        │    JAPA      │    │      TRAVEL          │ │
│       │                        │  (illegal)   │    │      TO IRELAND      │ │
│       │                        └──────────────┘    └──────────────────────┘ │
│       │                               │                       │             │
│       │                               ▼                       ▼             │
│       │                        ┌──────────────┐    ┌──────────────────────┐ │
│       │                        │ UNDOCUMENTED │    │     LIVE IN          │ │
│       │                        │   (risky)    │    │     IRELAND          │ │
│       │                        └──────────────┘    └──────────────────────┘ │
│       │                               │                       │             │
│       │                               ▼                       ▼             │
│       │                        ┌──────────────┐    ┌──────────────────────┐ │
│       └────────────────────────│ REGULARISE   │    │  THRIVE & SEND       │ │
│                                │              │    │  MONEY HOME          │ │
│                                └──────────────┘    └──────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Loop Phases

| Phase | Duration | Player Emotion | Key Actions |
|---|---|---|---|
| **Live in Lagos** | Ongoing | Routine, grinding | Work, save, socialize |
| **Save up** | 1–4 weeks | Anticipation, anxiety | Budget, skip luxuries, extra shifts |
| **Prepare documents** | 1–2 weeks | Frustration, bureaucracy | Visit offices, pay fees, wait |
| **Apply** | 1 day | Hope, fear | Submit application, pay fee |
| **Wait** | 15–90 days | Anxiety, checking | Check status daily, distract self |
| **Decision** | Instant | Relief or despair | Approved (celebrate) or rejected (rage) |
| **Travel** | 1 day | Excitement, fear | Pack, say goodbye, fly |
| **Live in Ireland** | Ongoing | Culture shock, hope | Find work, housing, survive |
| **Regularise** | 6–18 months | Patience, hope | Apply, wait, survive |
| **Thrive** | Ongoing | Pride, nostalgia | Earn, send money home, visit Lagos |

### 4.3 Emotional Arc

```
Emotion
    │
 +50│                    ★ Approved!
    │                   ╱
 +30│                  ╱
    │                 ╱
 +10│    ★ Save up   ╱          ★ Thrive
    │   ╱            ╱          ╱
  0 │──╱────────────╱──────────╱──────────
    │ ╱            ╱          ╱
 −10│╱            ╱          ╱
    │            ╱          ╱
 −20│           ╱  ★ Rejected
    │          ╱  ╱
 −30│         ╱  ╱
    │        ╱  ╱
 −40│       ╱  ╱  ★ Deported
    │      ╱  ╱  ╱
 −50│     ╱  ╱  ╱  ★ Traumatised
    │    ╱  ╱  ╱  ╱
    └──┬──┬──┬──┬──┬──┬──┬──┬──┬──▶ Time
      Live  Save  Apply  Wait  Decision  Travel  Ireland  Thrive
```

---

## 5. Feature List

### 5.1 MVP (Must Have) — 15 Features

| # | Feature | Priority | Description | User Value |
|---|---|---|---|---|
| F1 | Lagos Life baseline | P0 | Full Lagos Life clone with all systems | Players feel at home |
| F2 | Passport acquisition | P0 | Multi-step quest: birth certificate → state of origin → passport office → biometrics → collection | First boss fight |
| F3 | Visa application | P0 | 4 visa types (tourist, work, student, investor) with document requirements | Core progression |
| F4 | Visa interview | P0 | Dialogue-tree minigame with branching outcomes | Tension, agency |
| F5 | Currency exchange | P0 | Bank (safe, slow, expensive) vs black market (fast, cheap, risky) | Risk/reward |
| F6 | International flights | P0 | Lagos/Abuja → Dublin routes with visa check | The final hurdle |
| F7 | Japa routes | P0 | 5 illegal routes with success/failure consequences | The dangerous path |
| F8 | Undocumented status | P0 | Debuffs: no legal work, no renting, no bank, Garda stop risk | Real consequences |
| F9 | Regularisation | P0 | 4 paths: asylum, work permit, long-term residency, marriage | Hope for the undocumented |
| F10 | Dublin locations | P0 | 25+ locations: Grafton Street, Temple Bar, Croke Park, etc. | Irish immersion |
| F11 | Irish careers | P0 | 10+ careers with Irish salary ranges | Earn in € |
| F12 | Irish moodlets | P0 | 15+ moodlets: "Winter Blues", "Homesick", "GAA Fever", etc. | Emotional depth |
| F13 | Cross-city social | P0 | Chat across Lagos ↔ Dublin, no cross-city visits | Stay connected |
| F14 | Irish housing | P0 | Rental market with viewing queues, references, deposits | The rental crisis |
| F15 | Irish transport | P0 | Leap Card, Dublin Bus, Luas, DART, Irish Rail | Get around Dublin |

### 5.2 Post-MVP (Should Have) — 10 Features

| # | Feature | Priority | Description | User Value |
|---|---|---|---|---|
| F16 | PPS Number | P1 | Required for legal work; proof of address needed | Bureaucracy depth |
| F17 | Healthcare system | P1 | HSE vs private, medical card, waiting lists | Realistic healthcare |
| F18 | Education system | P1 | Irish universities, CAO points, SUSI grants | Student path |
| F19 | GAA subsystem | P1 | GAA skill, matches, club membership | Cultural integration |
| F20 | Pub culture | P1 | Pub visits, round buying, trad sessions | Social hub |
| F21 | Irish food | P1 | Spice bag, Tayto, Brennan's, Nigerian shops in Dublin | Cultural food |
| F22 | Weather system | P1 | Irish weather patterns, seasonal effects | Atmosphere |
| F23 | Irish holidays | P1 | St. Patrick's Day, Christmas, Bloomsday | Seasonal events |
| F24 | Phone/internet | P1 | SIM card types, contract vs pay-as-you-go | Connectivity |
| F25 | Bureaucracy tracker | P1 | Document checklist UI | Clarity |

### 5.3 Nice to Have — 5 Features

| # | Feature | Priority | Description | User Value |
|---|---|---|---|---|
| F26 | Cork & Galway | P2 | Additional Irish cities | More content |
| F27 | Northern Ireland | P2 | Belfast, Derry, cross-border mechanics | Political depth |
| F28 | Irish language | P2 | Gaeilge skill, Gaeltacht regions | Cultural depth |
| F29 | Emigration nostalgia | P2 | "Nigerian corner" shops, community events | Nostalgia |
| F30 | Remittance system | P2 | Send money home with FX fee | Family connection |

### 5.4 Feature Dependency Graph

```
F1 (Lagos Life baseline)
 ├── F2 (Passport)
 │    └── F3 (Visa application)
 │         ├── F4 (Visa interview)
 │         ├── F5 (Currency exchange)
 │         └── F6 (International flights)
 │              └── F10 (Dublin locations)
 │                   ├── F11 (Irish careers)
 │                   ├── F14 (Irish housing)
 │                   └── F15 (Irish transport)
 ├── F7 (Japa routes)
 │    └── F8 (Undocumented status)
 │         └── F9 (Regularisation)
 │              └── F10 (Dublin locations)
 ├── F12 (Irish moodlets)
 └── F13 (Cross-city social)
```

---

## 6. Visa System — Detailed Requirements

### 6.1 Visa Types

| Visa | Cost | Processing | Approval | Work | Stay | Target Persona |
|---|---|---|---|---|---|---|
| **Tourist (Short Stay)** | €80 | 15–30 days | 60% base | No | 90 days | Tunde, Ngozi |
| **Work Permit (Critical Skills)** | €1,000 | 8–12 weeks | 40% base | Yes | 2 years | Amara |
| **Student Visa** | €300 | 6–10 weeks | 55% base | Part-time | Course duration | Chidi |
| **Investor / Golden Visa** | €50,000 | 6–12 months | 80% base | Yes | 5 years | (Wealthy players) |

### 6.2 Application Stages

#### Stage 1: Passport Acquisition

| Step | Action | Cost | Time | Location |
|---|---|---|---|---|
| 1.1 | Obtain birth certificate | ₦5,000 | 1 week | NPC office |
| 1.2 | Obtain state of origin certificate | ₦10,000 | 2 weeks | State government office |
| 1.3 | Submit passport application | ₦50,000 | 2 weeks | Passport office (Lagos/Abuja) |
| 1.4 | Biometrics appointment | ₦15,000 | 1 day | Passport office |
| 1.5 | Passport collection | Free | Instant | Passport office |

**Total passport cost:** ₦80,000
**Total passport time:** ~5 weeks

#### Stage 2: Document Preparation

| Document | Cost | Time | Issuing Authority | Notes |
|---|---|---|---|---|
| Bank statements (3 months) | ₦5,000 | 3 days | Bank | Must show ≥ €2,500 balance for tourist |
| Employment letter | ₦10,000 | 1 week | Employer | Only if employed |
| Tax records (ITF) | ₦5,000 | 1–2 weeks | Tax office | Required for work visa |
| Travel insurance | €45 | Instant | Insurance provider | Mandatory for all visas |
| Accommodation proof | €50–€200 | Instant–1 week | Hotel/host | Hotel booking or invitation letter |
| Police clearance | ₦20,000 | 2 weeks | Nigeria Police | Required for work/student |
| Medical examination | ₦35,000 | 3 days | Approved hospital | Required for work permit |
| Photographs | ₦2,000 | Instant | Photo studio | 35mm × 45mm, white background |
| Utility bills | ₦2,000 | Instant | Utility company | Must show name and address |

#### Stage 3: Application Fee

| Visa Type | Fee | Payment Method | Refundable |
|---|---|---|---|
| Tourist | €80 | Bank transfer / card | No |
| Work Permit | €1,000 | Bank transfer / card | No |
| Student | €300 | Bank transfer / card | No |
| Investor | €50,000 | Bank transfer | No |

#### Stage 4: Biometrics Appointment

| Detail | Value |
|---|---|
| Location | VFS Centre, Ikeja (Lagos) or Wuse (Abuja) |
| Cost | ₦15,000 |
| Duration | 1 day |
| What happens | Fingerprints, photo, document verification |
| What to bring | Passport, appointment slip, all documents |
| Risk | Missing appointment = start over |

#### Stage 5: Processing Wait

| Visa Type | Min | Max | Average |
|---|---|---|---|
| Tourist | 15 days | 30 days | 21 days |
| Work Permit | 8 weeks | 12 weeks | 10 weeks |
| Student | 6 weeks | 10 weeks | 8 weeks |
| Investor | 6 months | 12 months | 9 months |

**Player experience during wait:**
- Check status daily (phone app → Visa tab)
- No updates for days at a time
- Anxiety builds
- Can do other things (work, socialize, save more)

#### Stage 6: Decision

| Outcome | Probability | Player Emotion | Next Steps |
|---|---|---|---|
| **Approved** | 40–85% (varies) | Relief, joy, celebration | Book flight, pack, travel |
| **Rejected** | 15–60% (varies) | Despair, anger, shame | Read reason, retry or japa |

### 6.3 Approval Modifiers

| Factor | Effect | Max | Notes |
|---|---|---|---|
| Bank balance ≥ €5,000 | +10% | +10% | Shows financial capacity |
| Bank balance ≥ €20,000 | +15% | +15% | Strong financial signal |
| Previous rejections | −10% each | −30% | Resets after 1 year clean |
| Previous approvals | +5% each | +15% | Travel history helps |
| Stable employment | +10% | +10% | Shows ties to Nigeria |
| Property ownership | +5% | +5% | Further ties to home |
| Charisma ≥ 5 | +5% | +5% | Interview performance |
| Coding ≥ 7 | +10% | +10% | Critical Skills list bonus |
| Age 25–45 | +5% | +5% | Preferred demographic |
| Age 18–24 or 55+ | −5% | −5% | Higher overstay risk |

**Maximum realistic approval chance:** ~85% (well-prepared applicant)
**Minimum realistic approval chance:** ~25% (first-timer, no history)

### 6.4 Rejection Reason Codes

| Code | Meaning | Fix | Player Action |
|---|---|---|---|
| R01 | Insufficient funds | Save more | Grind more, reapply |
| R02 | Incomplete documents | Obtain missing doc | Visit office, reapply |
| R03 | Travel history concerns | Wait 6 months | Build history, wait |
| R04 | Employment verification failed | Get proper letter | Ask HR, reapply |
| R05 | Accommodation unverifiable | Book refundable hotel | Book hotel, reapply |
| R06 | Overstay risk (profile) | Build ties: job, property, skills | Improve profile, reapply |

### 6.5 Visa Interview Minigame

#### Format
- Pre-written script (not real-time)
- 5–7 questions per interview
- 3 answer choices per answer
- Each answer affects approval chance
- Visual: character portrait, dialogue box, choice buttons

#### Sample Questions

| # | Question | Answer A | Answer B | Answer C |
|---|---|---|---|---|
| 1 | "Why are you going to Ireland?" | "Tourism, I've always wanted to visit" | "To visit my cousin who lives there" | "For a job opportunity" |
| 2 | "Who is paying for this trip?" | "Myself, I've been saving" | "My cousin is sponsoring me" | "My employer is covering it" |
| 3 | "Do you have family in Ireland?" | "Yes, my cousin lives in Dublin" | "No, but I have friends there" | "No, I don't know anyone" |
| 4 | "What will you do there?" | "See the sights, visit Temple Bar" | "Work for 6 months, then return" | "Study at Trinity College" |
| 5 | "When will you return to Nigeria?" | "After 3 months, I have a return ticket" | "After 6 months, maybe longer" | "I'm not sure yet" |
| 6 | "What do you do in Nigeria?" | "I'm a software developer" | "I'm a student at UNILAG" | "I'm between jobs" |
| 7 | "Have you travelled before?" | "Yes, I've been to Ghana and Benin" | "No, this is my first time" | "Yes, I went to London last year" |

#### Scoring

| Answer Quality | Effect on Approval |
|---|---|
| Strong (consistent, specific, shows ties) | +5–10% |
| Neutral (generic, no red flags) | 0% |
| Weak (inconsistent, vague, overstay risk) | −5–15% |

---

## 7. Japa System — Detailed Requirements

### 7.1 Routes

| Route | Cost | Duration | Success | Failure Consequence | Risk Level |
|---|---|---|---|---|---|
| **Libya → Mediterranean** | ₦800,000 | 2–6 weeks | 45% | Detention, deportation, −50 mood, "Traumatised" (72h) | ★★★★★ |
| **Morocco → Spain (Ceuta)** | ₦600,000 | 1–3 weeks | 55% | Arrest, deportation, jail (7 days), −30 mood | ★★★★☆ |
| **Turkey → Greece (land)** | ₦1,200,000 | 3–8 weeks | 60% | Detention, −40 mood, "Deported" (48h) | ★★★☆☆ |
| **Fake documents (flight)** | ₦2,000,000 | Instant | 30% | Arrest, criminal record, jail (30 days), −100 mood | ★★★★★ |
| **Human smuggler (lorry)** | ₦400,000 | 1–2 weeks | 35% | Arrest, deported, −60 mood, jail (14 days) | ★★★★★ |

### 7.2 Route Details

#### Libya → Mediterranean

| Detail | Value |
|---|---|
| **Description** | Cross the Sahara to Libya, then boat across the Mediterranean to Italy |
| **Cost** | ₦800,000 |
| **Duration** | 2–6 weeks |
| **Success rate** | 45% |
| **Risk level** | ★★★★★ (extreme) |
| **Failure consequences** | Detention in Libya, deportation, −50 mood, "Traumatised" moodlet (72h) |
| **Success consequences** | Arrive in Italy, then travel to Ireland (undocumented) |
| **Real-world parallel** | The Mediterranean crossing — hundreds die each year |

#### Morocco → Spain (Ceuta)

| Detail | Value |
|---|---|
| **Description** | Cross into Morocco, then climb the fence at Ceuta (Spanish enclave) |
| **Cost** | ₦600,000 |
| **Duration** | 1–3 weeks |
| **Success rate** | 55% |
| **Risk level** | ★★★★☆ (high) |
| **Failure consequences** | Arrest by Moroccan/Spanish police, deportation, jail (7 days), −30 mood |
| **Success consequences** | Arrive in Spain, then travel to Ireland (undocumented) |
| **Real-world parallel** | The Ceuta/Melilla fence crossings |

#### Turkey → Greece (land)

| Detail | Value |
|---|---|
| **Description** | Fly to Turkey, then cross the land border into Greece |
| **Cost** | ₦1,200,000 |
| **Duration** | 3–8 weeks |
| **Success rate** | 60% |
| **Risk level** | ★★★☆☆ (moderate) |
| **Failure consequences** | Detention in Turkey/Greece, −40 mood, "Deported" moodlet (48h) |
| **Success consequences** | Arrive in Greece, then travel to Ireland (undocumented) |
| **Real-world parallel** | The Turkey-Greece land border crossing |

#### Fake Documents (Flight)

| Detail | Value |
|---|---|
| **Description** | Buy fake passport/visa, fly directly to Dublin |
| **Cost** | ₦2,000,000 |
| **Duration** | Instant |
| **Success rate** | 30% |
| **Risk level** | ★★★★★ (extreme) |
| **Failure consequences** | Arrest at airport, criminal record, jail (30 days), −100 mood |
| **Success consequences** | Arrive in Dublin (undocumented, but with fake ID) |
| **Real-world parallel** | Document fraud — high risk, high reward |

#### Human Smuggler (Lorry)

| Detail | Value |
|---|---|
| **Description** | Hide in a lorry/truck crossing the English Channel |
| **Cost** | ₦400,000 |
| **Duration** | 1–2 weeks |
| **Success rate** | 35% |
| **Risk level** | ★★★★★ (extreme) |
| **Failure consequences** | Arrest, deported, −60 mood, jail (14 days) |
| **Success consequences** | Arrive in UK, then travel to Ireland (undocumented) |
| **Real-world parallel** | The Channel lorry crossings |

### 7.3 Undocumented Penalties

| Effect | Severity | Duration | Description |
|---|---|---|---|
| No legal work | Economic | Until regularised | Cash jobs only, 50% pay |
| Cannot rent property | Housing | Until regularised | No rental contract, sofa surf |
| Cannot open bank account | Financial | Until regularised | No bank, cash only |
| 10% daily Garda stop | Social | Ongoing | Random event, risk of detection |
| "Looking over your shoulder" | Psychological | Ongoing | −10 mood, constant anxiety |
| Cannot leave Ireland | Travel | Until regularised | No passport stamp, trapped |
| Exploitation | Economic | Ongoing | Employers pay below minimum wage |
| No healthcare | Health | Until regularised | No medical card, pay full price |
| No education | Education | Until regularised | Cannot enrol in courses |
| Social stigma | Social | Ongoing | NPCs treat you differently |

### 7.4 Regularisation Paths

| Path | Requirement | Time | Cost | Success Rate | Notes |
|---|---|---|---|---|---|
| **Asylum application** | Arrived via japa | 6–18 months | Free | 40% | Most common, but high rejection |
| **Work permit (employer-sponsored)** | Job offer from Irish employer | 3–6 months | €1,000 | 70% | Best chance if you have a job offer |
| **Long-term residency** | 5 years undocumented | Instant | €5,000 | 100% | Guaranteed, but takes 5 years |
| **Marriage to Irish citizen** | Relationship ≥ 80 | 12 months | €2,000 | 80% | Requires high relationship score |

### 7.5 Garda Stop Mechanic

| Detail | Value |
|---|---|
| **Trigger** | 10% chance per day when undocumented |
| **Location** | Any public place in Dublin |
| **Dialogue** | Garda asks for ID |
| **Outcomes** | |
| - Show fake ID (if you have one) | 50% pass, 50% arrested |
| - Run away | 30% escape, 70% arrested |
| - Cooperate | 100% arrested |
| **Consequences of arrest** | Detention, deportation, criminal record |
| **Moodlet** | "Caught by Garda" (−30 mood, 24h) |

---

## 8. Ireland-Specific Content

### 8.1 Locations (Dublin) — 25 Locations

| # | Location | Type | Purpose | Actions |
|---|---|---|---|---|
| 1 | Grafton Street | Shopping | High-street shopping | Shop, people-watch, busk |
| 2 | Temple Bar | Nightlife | Tourist area, trad music | Drink, listen to trad, dance |
| 3 | Croke Park | Sports | GAA matches | Attend match, play GAA |
| 4 | Guinness Storehouse | Tourism | Tourist attraction | Tour, taste Guinness |
| 5 | Trinity College | Education | TCD campus | Study, attend lecture, library |
| 6 | St. Stephen's Green | Park | Relaxation | Walk, sit, read |
| 7 | Dublin Airport | Travel | International flights | Fly to Lagos, fly to London |
| 8 | Irish Embassy | Government | Visa applications | Submit application |
| 9 | VFS Centre | Government | Biometrics | Biometrics appointment |
| 10 | Garda Station | Law | Random stops, reporting | Report crime, get stopped |
| 11 | Intreo Office | Government | Social welfare | Apply for benefits |
| 12 | Revenue Office | Government | Tax | Pay taxes, register |
| 13 | Citizens Information | Government | Document help | Get document info |
| 14 | Nigerian Shop | Shopping | Home food, 3× prices | Buy jollof, suya, plantain |
| 15 | The Local | Pub | Social hub | Drink, socialize, buy rounds |
| 16 | Whelan's | Venue | Live music | Attend gig, play gig |
| 17 | Leap Card Kiosk | Transport | Leap Card purchase | Buy Leap Card, top up |
| 18 | Driving Test Centre | Transport | Licence conversion | Theory test, practical test |
| 19 | Penneys | Shopping | Cheap clothes | Buy raincoat, jumper |
| 20 | Brown Thomas | Shopping | Expensive clothes | Buy designer clothes |
| 21 | Tesco | Supermarket | Groceries | Buy food, household items |
| 22 | Dunnes | Supermarket | Groceries | Buy food, clothing |
| 23 | Lidl | Supermarket | Groceries | Buy cheap food |
| 24 | Chipper | Food | Spice bag, fish & chips | Eat spice bag, fish & chips |
| 25 | Spilled Milk | Market | Farmers market | Buy fresh produce |

### 8.2 Careers — 10 Careers

| Career | Entry | Mid | Top | Requirements | Notes |
|---|---|---|---|---|---|
| Tech | €35k | €60k | €120k | Coding ≥ 5 | Critical Skills list |
| Healthcare | €32k | €55k | €90k | Medical qualification | Critical Skills list |
| Hospitality | €24k | €35k | €50k | None | Cash jobs available |
| Construction | €28k | €45k | €70k | None | Always demand |
| Education | €30k | €48k | €65k | Teaching qualification | Summer breaks |
| Finance | €38k | €65k | €110k | Accounting qualification | High stress |
| Creative | €25k | €40k | €60k | Portfolio | Freelance possible |
| GAA Player | €20k | €50k | €150k | GAA skill ≥ 7 | Fame + money |
| Musician | €15k | €35k | €80k | Music skill ≥ 7 | Gig economy |
| Public Service | €28k | €45k | €65k | PPS number | Stable, pension |

### 8.3 Moodlets — 15 Moodlets

| Moodlet | Value | Duration | Trigger | Category |
|---|---|---|---|---|
| "Visa Approved!" | +30 | 48h | Visa approved | Visa |
| "Visa Rejected" | −20 | 24h | Visa rejected | Visa |
| "Looking Over Your Shoulder" | −10 | Ongoing | Undocumented | Immigration |
| "Deported" | −40 | 48h | Caught by immigration | Immigration |
| "Traumatised" | −50 | 72h | Failed japa | Japa |
| "Regularised!" | +40 | 72h | Gained legal status | Immigration |
| "Homesick" | −15 | 72h | First week in Ireland | Emotional |
| "Winter Blues" | −15 | Ongoing | Nov–Feb | Weather |
| "Summer Glow" | +10 | Ongoing | Jun–Aug | Weather |
| "Rainy Day" | −5 | 4h | Random rain | Weather |
| "GAA Fever" | +20 | 24h | GAA match win | Cultural |
| "Hangover" | −30 | 24h | Too many pints | Social |
| "House Hunting Hell" | −15 | Ongoing | Searching for rental | Housing |
| "Cozy Nest" | +20 | 48h | Secured good rental | Housing |
| "Spice Bag Supreme" | +15 | 2h | Ate a spice bag | Food |

### 8.4 Irish Slang & Voice

| Lagos Life | Ireland Life | Notes |
|---|---|---|
| "Oga at the top" | "The boss" / "Himself" | Respectful address |
| "Werey" (enemy) | "Gowl" or "Header" | Strong language, use carefully |
| "Paddy Mi" (best friend) | "Best bud" / "My mot" (Cork) / "Bestie" | Gender-neutral |
| "Padi" (friend) | "Sound" / "Sound out" | Friendly |
| "Wahala" (trouble) | "Drama" / "A dose" / "Scarlet" | Context-dependent |
| "Japa" (emigrate) | "Emigrating" | Genuinely resonant in Ireland |
| "Abeg" (please) | "Please" / "Ah go on" | Less common in Ireland |
| "Sapa" (broke) | "Broke" / "Skint" / "On the bones of one's arse" | Irish-specific |
| "Odogwu" (boss) | "The real boss" / "Sound man" | Respectful |
| "Shine your eye" (be careful) | "Keep your eyes peeled" / "Watch yourself" | Similar meaning |

**Design note:** Irish slang is regional and easy to get wrong. This table is a starting point, but the final voice should be reviewed by a native Irish speaker.

---

## 9. Success Metrics

### 9.1 North Star Metric

**Weekly Active Players Who Attempted Visa or Japa**

This measures the core gameplay loop — players who are engaged with the immigration system.

### 9.2 Supporting Metrics

| Metric | Target | Measurement | Why It Matters |
|---|---|---|---|
| DAU | 1,000 (month 1) | Daily active users | Overall engagement |
| WAU | 3,000 (month 1) | Weekly active users | Sustained engagement |
| Visa applications | 500/month | API calls to /api/visa/apply | Core loop engagement |
| Japa attempts | 200/month | API calls to /api/japa/attempt | Risk path engagement |
| Cross-city chat | 10k messages/day | /api/send with cross-city flag | Social connection |
| Session length | 20+ minutes | Average session duration | Depth of play |
| Retention (D7) | 30% | Users returning after 7 days | Sticky gameplay |
| Retention (D30) | 15% | Users returning after 30 days | Long-term engagement |
| Conversion (free → paid) | 5% | Top-up purchases | Revenue |
| Visa approval rate | 40–60% | Approved / total applications | Balance |
| Japa success rate | 30–60% | Successful / total attempts | Balance |
| Regularisation rate | 20% | Regularised / undocumented | Hope metric |

### 9.3 Funnel Analysis

```
Lagos Life players
    │
    ▼ 100%
Players who see visa/japa feature
    │
    ▼ 60%
Players who start passport acquisition
    │
    ▼ 40%
Players who complete passport
    │
    ▼ 30%
Players who start visa application
    │
    ▼ 20%
Players who submit visa application
    │
    ▼ 10%
Players who get approved
    │
    ▼ 8%
Players who travel to Ireland
    │
    ▼ 5%
Players who regularise (if undocumented)
    │
    ▼ 3%
Players who thrive (send money home)
```

---

## 10. Monetization

### 10.1 Model

Same as Lagos Life — no subscriptions, no premium tiers. Free-to-play with optional purchases.

### 10.2 Revenue Streams

| Stream | Description | Price Point | Expected Revenue |
|---|---|---|---|
| **Top-Up Packs** | Real money → in-game currency (EUR) | €5, €10, €20, €50 | 60% of revenue |
| **Ads System** | Players pay to advertise (billboard, banner, venue) | €10–€100/ad | 20% of revenue |
| **VIP Experiences** | Event-based VIP moodlets (VIP Concert, VIP Matchday, Yacht Party) | €5–€50/event | 15% of revenue |
| **Shop** | In-game currency → items (furniture, decor, food, clothing) | €1–€100/item | 5% of revenue |

### 10.3 Top-Up Packs

| Pack | Price | Coins | Bonus | Effective Rate |
|---|---|---|---|---|
| Starter | €5 | 500 | 0% | 100 coins/€ |
| Basic | €10 | 1,100 | 10% | 110 coins/€ |
| Standard | €20 | 2,400 | 20% | 120 coins/€ |
| Premium | €50 | 7,000 | 40% | 140 coins/€ |

### 10.4 Payment Provider

**Stripe** (replacing Bachs)
- EUR currency
- Credit/debit cards
- Apple Pay / Google Pay
- SEPA direct debit (for European players)

---

## 11. Roadmap

### 11.1 Phases

| Phase | Duration | Deliverables | Milestone |
|---|---|---|---|
| **Phase 0** | 2 weeks | Lagos Life clone, all systems working | Alpha |
| **Phase 1** | 3 weeks | Passport, visa application, currency exchange | Beta 1 |
| **Phase 2** | 3 weeks | Japa routes, undocumented status, regularisation | Beta 2 |
| **Phase 3** | 2 weeks | Dublin locations, careers, moodlets | Beta 3 |
| **Phase 4** | 2 weeks | Cross-city social, housing, transport | RC |
| **Phase 5** | 2 weeks | Polish, testing, launch | v1.0 |

**Total:** ~14 weeks to MVP launch.

### 11.2 Phase Details

#### Phase 0: Lagos Life Baseline (Week 1–2)

| Week | Tasks |
|---|---|
| 1 | Project setup, auth, game state, needs, skills, traits, aspirations |
| 2 | Homes, careers, locations, transport, social, economy, events |

**Deliverable:** Playable Lagos Life clone

#### Phase 1: Passport & Visa System (Week 3–5)

| Week | Tasks |
|---|---|
| 3 | Passport acquisition flow, document system, database schema |
| 4 | Visa application, approval logic, rejection codes, interview minigame |
| 5 | Currency exchange (bank + black market), international flights |

**Deliverable:** Players can acquire passport and apply for visa

#### Phase 2: Japa System (Week 6–8)

| Week | Tasks |
|---|---|
| 6 | Japa routes, success/failure logic, consequences |
| 7 | Undocumented status, penalties, Garda stop mechanic |
| 8 | Regularisation paths, immigration status tracking |

**Deliverable:** Players can attempt japa and live with consequences

#### Phase 3: Dublin & Ireland Content (Week 9–10)

| Week | Tasks |
|---|---|
| 9 | Dublin locations (25), Irish careers (10), Irish moodlets (15) |
| 10 | Irish housing, Irish transport, Irish food, Irish slang |

**Deliverable:** Players can travel to Dublin and experience Irish life

#### Phase 4: Cross-City Social & Polish (Week 11–12)

| Week | Tasks |
|---|---|
| 11 | Cross-city chat, cross-city transfers, cross-city gifting |
| 12 | Animations, sound effects, tutorial, achievements, leaderboards |

**Deliverable:** Players can interact across Lagos and Dublin

#### Phase 5: Testing & Launch (Week 13–14)

| Week | Tasks |
|---|---|
| 13 | QA testing, bug fixes, performance optimization, security audit |
| 14 | Soft launch, marketing, community building, v1.0 release |

**Deliverable:** Ireland Life v1.0 launched

---

## 12. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation | Owner |
|---|---|---|---|---|
| Visa system too complex | Players quit | Medium | Progressive disclosure, tutorial | Product |
| Japa too rewarding | Everyone japa | Medium | Balance undocumented penalties | Design |
| Cross-city economy distortion | Lagos becomes irrelevant | Low | Purchasing power tuning | Design |
| Content volume | Too much to build | High | Prioritize MVP, iterate | Engineering |
| Legal issues | Visa process misrepresented | Low | Disclaimer, consult legal | Legal |
| Irish slang gets it wrong | Players feel mocked | Medium | Native speaker review | Content |
| Performance issues | Slow load times | Low | CDN, caching, optimization | Engineering |
| Security breach | User data leaked | Low | Security audit, encryption | Engineering |

---

## 13. Design Decisions

### 13.1 Key Decisions

| # | Question | Decision | Rationale | Alternatives Considered |
|---|---|---|---|---|
| 1 | Multiple Irish cities at launch? | **Dublin only** | Focus resources on one polished city | Cork + Galway (too much content) |
| 2 | Visa interview format? | **Pre-written script** | Consistent experience, easier to balance | Real-time dialogue (too complex) |
| 3 | Returning to Lagos from Ireland? | **Normal travel** | Player can book a flight back | One-way only (too restrictive) |
| 4 | Does deportation send you back to Lagos? | **Yes** | Deportation = forced return to Lagos | Stay in Ireland (less realistic) |
| 5 | How to prevent black market dominance? | **Multiple mechanics** | See below | Single mechanic (too easy to exploit) |
| 6 | Japa cooldown after deportation? | **6 months** | Prevents spamming | 3 months (too short), 1 year (too long) |
| 7 | Visa reapplication cooldown? | **None** | Players can reapply immediately | 1 week (too restrictive) |
| 8 | Undocumented players can work? | **Cash jobs only** | 50% pay, no benefits | No work (too harsh), full work (too easy) |
| 9 | Cross-city visits? | **No** | Must be in same city | Yes (too complex) |
| 10 | Irish language skill? | **Yes** | Cultural depth, unlocks content | No (missed opportunity) |

### 13.2 Black Market Dominance Prevention

The black market should be **viable but not strictly better** than the bank. Multiple mechanics ensure balance:

| Mechanic | Description | Effect |
|---|---|---|
| **Rate spread** | Black market is only 10–15% better than bank | Reduces incentive to always use black market |
| **Scam risk** | 15% chance of losing all money | Makes black market a gamble |
| **Limited availability** | Trader is offline 30% of the time | Forces players to use bank |
| **Daily cap** | Black market has a €500/day exchange limit | Prevents large-scale exploitation |
| **Reputation heat** | Using black market 5+ times/week triggers "tax audit" | Discourages habitual use |
| **Bank loyalty** | Frequent bank users get rate improvements (up to 5%) | Rewards legal behavior |
| **Trader arrest** | Random event: trader arrested, offline for 3–7 days | Creates scarcity |
| **Social stigma** | NPCs mention "I heard you use the black market" (−5 social) | Social cost |
| **Official payments** | Visa fees, fines, government payments must go through bank | Bank is mandatory for some |
| **Diminishing returns** | Each black market use in the same day gets 2% worse rate | Prevents spamming |

**Design goal:** The black market is for **small, urgent exchanges** where the player accepts risk for speed. The bank is for **large, official transactions** where safety matters. Neither is strictly dominant.

---

## 14. Open Questions

| # | Question | Options | Recommendation | Status |
|---|---|---|---|---|
| 1 | Should we support multiple Irish cities at launch? | Dublin only / Dublin + Cork / All | Dublin only | Decided |
| 2 | Should the visa interview be real-time or pre-written? | Real-time / Pre-written | Pre-written | Decided |
| 3 | How do we handle players who want to return to Lagos? | Normal travel / Restricted | Normal travel | Decided |
| 4 | Should there be a "deportation" mechanic? | Yes / No | Yes | Decided |
| 5 | How do we prevent black market dominance? | Multiple mechanics / Single | Multiple | Decided |
| 6 | Should undocumented players have children? | Yes / No | No (too complex) | Open |
| 7 | Should there be a "Nigerian community" in Dublin? | Yes / No | Yes (social hub) | Open |
| 8 | Should we add Northern Ireland? | Yes / No | No (Phase 2) | Open |
| 9 | Should we add other countries (UK, US, Canada)? | Yes / No | No (Ireland only) | Open |
| 10 | Should there be a "remittance" system? | Yes / No | Yes (Phase 2) | Open |

---

*End of PRD v2.0*
