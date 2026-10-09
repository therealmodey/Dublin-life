# Ireland Life — AI Agent Guide
## How to Build This Project

**Version:** 1.0
**Date:** 2026-10-08
**Author:** Samuel Modey
**Status:** Draft

---

## 1. Project Overview

You are building **Ireland Life** — a browser-based life simulation game and extension of Lagos Life. Players start in Lagos, build a life, then attempt to travel to Ireland via visa (legal) or japa (illegal).

**Core design pillar:** Ireland is not a city you unlock — it's a country you earn.

---

## 2. Tech Stack (Non-Negotiable)

| Layer | Technology |
|---|---|
| Frontend | Next.js 15+ (React 19) |
| Build | Turbopack |
| Styling | CSS Modules + CSS Variables |
| Fonts | Fredoka (display) + Plus Jakarta Sans (body) |
| Backend | Next.js API Routes |
| Database | PostgreSQL (DigitalOcean Managed) |
| Auth | Cookie-based sessions (`il_session`, HTTP-only) |
| Hosting | DigitalOcean |
| Payments | Stripe (EUR) |
| PWA | Web App Manifest |
| Real-time | Polling (15s) |
| State | Zustand |
| Icons | Lucide React |
| Validation | Zod |

---

## 3. Project Structure

```
ireland-life/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Landing
│   │   ├── game/
│   │   │   ├── page.tsx        # Main game
│   │   │   ├── visa/page.tsx
│   │   │   ├── japa/page.tsx
│   │   │   ├── fx/page.tsx
│   │   │   └── immigration/page.tsx
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   └── api/
│   │       ├── auth/           # login, register, logout, me
│   │       ├── save/route.ts   # GET/PUT game state
│   │       ├── world/route.ts  # World state
│   │       ├── visa/           # apply, status, history, documents, interview
│   │       ├── japa/           # routes, attempt, history
│   │       ├── fx/             # rate, exchange, history
│   │       ├── immigration/    # status, regularise, garda-stop
│   │       ├── travel/         # international, book
│   │       └── send/route.ts   # Send money
│   ├── components/
│   │   ├── game/               # GameScreen, HUD, MapView, ActionPanel
│   │   ├── phone/              # PhoneApp, VisaTab, JapaTab, FXTab, ImmigrationTab
│   │   ├── visa/               # VisaStatus, VisaApplication, DocumentChecklist, InterviewMinigame
│   │   ├── japa/               # RouteList, RouteDetails, Consequences
│   │   ├── fx/                 # ExchangeRate, ExchangeForm, ExchangeHistory
│   │   └── immigration/        # StatusCard, RegularisationForm, GardaStopModal
│   ├── lib/
│   │   ├── game/               # engine, state, actions, reducer
│   │   ├── visa/               # types, logic, documents, interview
│   │   ├── japa/               # types, logic, routes
│   │   ├── fx/                 # types, logic, rates
│   │   ├── immigration/        # types, logic, regularisation
│   │   ├── travel/             # types, logic, flights
│   │   ├── db/                 # client, queries, migrations
│   │   ├── auth/               # session, middleware
│   │   └── utils/              # api, format, validation
│   ├── stores/
│   │   ├── gameStore.ts
│   │   ├── uiStore.ts
│   │   └── authStore.ts
│   ├── types/
│   │   ├── game.ts
│   │   ├── visa.ts
│   │   ├── japa.ts
│   │   ├── fx.ts
│   │   ├── immigration.ts
│   │   └── travel.ts
│   └── styles/
│       ├── globals.css
│       ├── variables.css
│       └── modules/            # CSS Modules per component
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── icons/                  # App icons
│   └── assets/                 # Static assets
├── .env.local                  # Environment variables
├── .env.example                # Example env vars
├── next.config.js
├── tailwind.config.ts          # (if needed, but prefer CSS Modules)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Implementation Order

### Phase 0: Lagos Life Baseline (Week 1–2)

**Goal:** Full Lagos Life clone with all systems working.

**Tasks:**
1. Set up Next.js project with TypeScript, Turbopack, CSS Modules
2. Implement auth (register, login, logout, session)
3. Implement game state (Zustand store, save/load)
4. Implement needs system (hunger, energy, hygiene, bladder, fun, social)
5. Implement skills system (cooking, charisma, fitness, coding, music, hustle, dance, comedy, photography)
6. Implement traits (10 traits with multipliers)
7. Implement aspirations (5 goals with progress)
8. Implement homes (14 homes across Lagos, Abuja, PH)
9. Implement careers (30 careers with 5-tier ladders)
10. Implement locations (28+ locations with actions)
11. Implement transport (flight, bus, drive, chopper, jet)
12. Implement social (chat, friends, romance, family, parties)
13. Implement economy (money, transfers, casino, business, property)
14. Implement events (moodlets, random events, wishes, blessings)
15. Implement crime (7 crimes, jail, bail, EFCC)
16. Implement healthcare (illnesses, treatments, MindSpace)
17. Implement education (UNILAG, departments, CGPA)
18. Implement weather (weather types, moodlets)
19. Implement power (NEPA, fuel, generator)
20. Implement UI (HUD, map, phone app, all screens)

**Acceptance Criteria:**
- Player can create a character and play the full game
- All systems work as documented in the Lagos Life scrape
- Game state saves and loads correctly
- UI is responsive and matches Lagos Life design

---

### Phase 1: Passport & Visa System (Week 3–4)

**Goal:** Players can acquire a passport and apply for visas.

**Tasks:**

#### Passport System
1. Add `passport` field to game state
2. Create passport acquisition flow:
   - Birth certificate (₦5,000, 1 week)
   - State of origin certificate (₦10,000, 2 weeks)
   - Passport application (₦50,000, 2 weeks)
   - Biometrics appointment (₦15,000, 1 day)
   - Passport collection (instant)
3. Add "Passport Office" location (Lagos, Abuja)
4. Add passport status UI (phone app → Documents tab)

#### Visa Application System
1. Add `visa` and `visaHistory` fields to game state
2. Create visa types (tourist, work, student, investor)
3. Create document requirements per visa type
4. Create application flow:
   - Select visa type
   - Upload documents (checklist)
   - Pay application fee
   - Schedule biometrics
   - Wait for processing
   - Receive decision
5. Create approval chance calculation (10 modifiers)
6. Create rejection reason codes (R01–R06)
7. Add "Irish Embassy" location (Victoria Island, Lagos)
8. Add "VFS Centre" location (Ikeja, Lagos)
9. Add visa status UI (phone app → Visa tab)

#### Visa Interview Minigame
1. Create dialogue tree with branching outcomes
2. Questions: "Why are you going to Ireland?" "Who is paying?" "Do you have family in Ireland?" "What will you do there?" "When will you return?"
3. Answers affect approval chance
4. Visual: character portrait, dialogue box, choice buttons

**Acceptance Criteria:**
- Player can acquire a passport (multi-step quest)
- Player can apply for a visa (multi-stage process)
- Visa approval/rejection works with correct logic
- Interview minigame works with branching dialogue
- All UI is responsive and matches design system

---

### Phase 2: Currency Exchange & Japa System (Week 5–6)

**Goal:** Players can exchange currency and attempt japa.

**Tasks:**

#### Currency Exchange
1. Add `currency` and `fxRate` fields to game state
2. Create FX rate system:
   - Base rate: ₦1,500/€1
   - Daily fluctuation: ±5%
   - Bank rate: base rate (safe)
   - Black market rate: base rate × 1.2 (risky)
3. Create exchange flow:
   - Select channel (bank or black market)
   - Enter amount
   - Confirm exchange
   - Receive currency (or get scammed)
4. Add "Bureau de Change" location (Dublin)
5. Add "Black Market Trader" location (Mushin, Lagos)
6. Add FX UI (phone app → FX tab)

#### Japa System
1. Add `immigrationStatus` and `japaAttempts` fields to game state
2. Create japa routes (5 routes with different costs/success rates)
3. Create japa attempt flow:
   - Select route
   - Pay cost
   - Roll success/failure
   - Apply consequences
4. Create undocumented penalties:
   - No legal work (cash jobs only, 50% pay)
   - Cannot rent property
   - Cannot open bank account
   - 10% daily Garda stop risk
   - "Looking over your shoulder" moodlet
5. Create regularisation paths (asylum, work permit, long-term residency, marriage)
6. Add "Smuggler's Contact" location (Mushin, Lagos)
7. Add japa UI (phone app → Japa tab)

**Acceptance Criteria:**
- Player can exchange currency (bank and black market)
- Black market has scam risk
- Player can attempt japa (5 routes)
- Japa success/failure works with correct consequences
- Undocumented status applies all penalties
- Regularisation paths work

---

### Phase 3: Dublin & Ireland Content (Week 7–8)

**Goal:** Players can travel to Dublin and experience Irish life.

**Tasks:**

#### Dublin Locations
1. Add 25+ Dublin locations (Grafton Street, Temple Bar, Croke Park, etc.)
2. Each location has actions, costs, and moodlets
3. Add Irish-specific actions (GAA match, trad session, pub visit, etc.)

#### Irish Careers
1. Add 10+ Irish careers with salary ranges
2. Each career has 5-tier ladder
3. Some careers require PPS number
4. Some careers require Irish language skill

#### Irish Moodlets
1. Add 15+ Irish moodlets
2. Seasonal moodlets (Winter Blues, Summer Glow)
3. Cultural moodlets (GAA Fever, Homesick, Hangover)

#### Irish Housing
1. Add Irish rental market (viewing queues, references, deposits)
2. Add Irish property types (council flat, semi-detached, Georgian townhouse)
3. Add rent pressure mechanic (5% annual increase)

#### Irish Transport
1. Add Leap Card system
2. Add Dublin Bus, Luas, DART, Irish Rail
3. Add driving licence conversion

**Acceptance Criteria:**
- Player can travel to Dublin (with valid visa or japa)
- All Dublin locations work with actions
- Irish careers work with salary ranges
- Irish moodlets trigger correctly
- Irish housing market works
- Irish transport works

---

### Phase 4: Cross-City Social & Polish (Week 9–10)

**Goal:** Players can interact across Lagos and Dublin, and the game is polished.

**Tasks:**

#### Cross-City Social
1. Enable cross-city chat (Lagos ↔ Dublin)
2. Disable cross-city visits (must be in same city)
3. Add cross-city money transfers (with FX fee)
4. Add cross-city gifting

#### Polish
1. Add animations and transitions
2. Add sound effects and music
3. Add tutorial/onboarding
4. Add achievements system
5. Add leaderboards
6. Add daily rewards
7. Performance optimization
8. Bug fixes

**Acceptance Criteria:**
- Cross-city chat works
- Cross-city visits are blocked
- All animations and sounds work
- Tutorial guides new players
- Game runs smoothly on mobile

---

## 5. Key Implementation Details

### 5.1 Game State Schema

```typescript
interface GameState {
  // Existing Lagos Life fields
  version: number;
  phase: string;
  sim: SimData;
  needs: Needs;
  skills: Skills;
  money: number;
  blessings: string[];
  rewards: string[];
  time: TimeData;
  speed: number;
  home: HomeData;
  objects: ObjectData[];
  layoutV: number;
  queue: ActionQueueItem[];
  pos: Position;
  path: Position[];
  facing: string;
  location: string;
  travel: TravelData | null;
  work: WorkData;
  job: JobData;
  relationships: RelationshipData;
  romance: RomanceData;
  moodlets: MoodletData[];
  power: boolean;
  powerChangeAt: number;
  fuel: number;
  weather: string;
  rentOwed: number;
  lastRentDay: number;
  wishes: WishData[];
  wishSeed: number;
  events: EventData[];
  lastEventCheck: number;
  notices: NoticeData[];
  freeWill: boolean;
  idleMinutes: number;
  sound: boolean;
  music: boolean;
  stats: StatsData;
  goal: GoalData;
  warned: boolean;
  tutorialStep: number;
  lastMode: string;
  pantry: PantryItem[];
  outbox: OutboxItem[];
  origin: string;
  healthHour: number;
  neglect: number;
  family: FamilyData;
  unblockV: number;
  gigRest: number;
  tax: TaxData;
  cvs: CVData[];
  gifts: GiftData[];
  lastSlip: number;
  lastTab: string;
  rentPaidUntil: number;
  decorOwned: string[];
  decor: DecorData[];
  storage: StorageItem[];
  land: LandData[];
  casinoDay: number;
  casinoStaked: number;
  bets: BetData[];
  policy: PolicyData;
  foodGot: number;
  record: RecordData;
  trailers: TrailerData[];
  trailerDay: number;
  businesses: BusinessData[];
  bizDay: number;
  autoWork: boolean;
  paidIds: string[];
  cars: CarData[];
  car: CarCurrentData;
  fuelScarcityDay: number;
  efccWatch: boolean;
  carId: string;
  uni: UniData;
  staff: StaffData[];
  rentCut: number;

  // New Ireland Life fields
  passport: PassportData | null;
  visa: VisaData | null;
  visaHistory: VisaApplicationData[];
  immigrationStatus: ImmigrationStatusData;
  japaAttempts: number;
  criminalRecord: string[];
  currency: 'NGN' | 'EUR';
  fxRate: number;
  fxRateUpdatedAt: number;
  documents: DocumentCollectionData;
  ppsNumber: string | null;
  leapCard: boolean;
  drivingLicence: 'none' | 'foreign' | 'converted';
  gaaSkill: number;
  irishLanguage: number;
}
```

### 5.2 Visa Approval Logic

```typescript
function calculateApprovalChance(game: GameState, visaType: string): number {
  let chance = getBaseChance(visaType); // 60% tourist, 40% work, 55% student, 80% investor

  // Bank balance modifiers
  if (game.money >= 5000) chance += 0.10;
  if (game.money >= 20000) chance += 0.15;

  // Visa history modifiers
  const rejections = game.visaHistory.filter(v => v.result === 'rejected').length;
  const approvals = game.visaHistory.filter(v => v.result === 'approved').length;
  chance -= Math.min(rejections * 0.10, 0.30);
  chance += Math.min(approvals * 0.05, 0.15);

  // Employment modifier
  if (game.job && game.job.level >= 2) chance += 0.10;

  // Property modifier
  if (game.land.length > 0) chance += 0.05;

  // Skill modifiers
  if (game.skills.charisma >= 5) chance += 0.05;
  if (game.skills.coding >= 7) chance += 0.10;

  // Age modifier (if age is tracked)
  // if (age >= 25 && age <= 45) chance += 0.05;
  // if (age < 25 || age > 55) chance -= 0.05;

  return Math.max(0.25, Math.min(0.85, chance));
}
```

### 5.3 Japa Success Logic

```typescript
function attemptJapa(game: GameState, route: string): JapaResult {
  const routeData = JAPA_ROUTES[route];
  const cost = routeData.cost;
  const successRate = routeData.successRate;

  // Deduct cost
  game.money -= cost;

  // Roll success
  const roll = Math.random();
  const success = roll < successRate;

  if (success) {
    // Player arrives in Ireland undocumented
    game.immigrationStatus = {
      status: 'undocumented',
      undocumentedSince: game.time.now,
      gardaStops: 0,
    };
    game.japaAttempts += 1;

    return {
      success: true,
      consequences: {
        moodlet: 'Homesick',
        moodValue: -15,
        moodDuration: 72,
        deported: false,
        jailDays: 0,
      },
      newStatus: 'undocumented',
    };
  } else {
    // Player fails — apply consequences
    const consequences = routeData.failureConsequences;
    game.japaAttempts += 1;

    // Add criminal record
    if (consequences.criminalRecord) {
      game.criminalRecord.push(...consequences.criminalRecord);
    }

    // Add jail time if applicable
    if (consequences.jailDays > 0) {
      // Set jail timer
    }

    return {
      success: false,
      consequences,
      newStatus: 'citizen',
    };
  }
}
```

### 5.4 Currency Exchange Logic

```typescript
function exchangeCurrency(
  game: GameState,
  fromCurrency: 'NGN' | 'EUR',
  toCurrency: 'NGN' | 'EUR',
  amount: number,
  channel: 'bank' | 'black_market'
): ExchangeResult {
  const baseRate = game.fxRate; // e.g., 1500 NGN/EUR
  const rate = channel === 'bank' ? baseRate : baseRate * 1.2;

  // Black market scam risk
  if (channel === 'black_market' && Math.random() < 0.15) {
    return {
      success: false,
      fromAmount: amount,
      toAmount: 0,
      rate,
      channel,
      status: 'scammed',
      moodlet: 'Scammed!',
    };
  }

  const toAmount = channel === 'bank'
    ? Math.floor(amount / rate)
    : Math.floor(amount / rate);

  return {
    success: true,
    fromAmount: amount,
    toAmount,
    rate,
    channel,
    status: 'completed',
  };
}
```

---

## 6. API Implementation Templates

### 6.1 Visa Application Endpoint

```typescript
// src/app/api/visa/apply/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/middleware';
import { visaApplicationSchema } from '@/lib/validation';
import { calculateApprovalChance } from '@/lib/visa/logic';
import { db } from '@/lib/db/client';

export async function POST(req: NextRequest) {
  const session = await requireAuth(req);
  if (session instanceof NextResponse) return session;

  const body = await req.json();
  const parsed = visaApplicationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: { code: 'INVALID_INPUT', message: parsed.error.message } },
      { status: 400 }
    );
  }

  const { visaType, documents } = parsed.data;

  // Check if player has passport
  const game = await db.getGameState(session.userId);
  if (!game.passport) {
    return NextResponse.json(
      { success: false, error: { code: 'NO_PASSPORT', message: 'You need a passport first' } },
      { status: 400 }
    );
  }

  // Check if player has all required documents
  const requiredDocs = getRequiredDocuments(visaType);
  const missing = requiredDocs.filter(d => !documents.includes(d));
  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, error: { code: 'MISSING_DOCUMENTS', message: 'Missing documents', details: { missing } } },
      { status: 400 }
    );
  }

  // Check if player has enough money
  const cost = getVisaCost(visaType);
  if (game.money < cost) {
    return NextResponse.json(
      { success: false, error: { code: 'INSUFFICIENT_FUNDS', message: `You need €${cost}` } },
      { status: 400 }
    );
  }

  // Calculate approval chance
  const approvalChance = calculateApprovalChance(game, visaType);

  // Create application
  const application = await db.createVisaApplication({
    userId: session.userId,
    visaType,
    documents,
    status: 'pending',
    submittedAt: new Date(),
    estimatedDecision: new Date(Date.now() + getProcessingTime(visaType)),
  });

  // Deduct cost
  await db.updateGameState(session.userId, {
    money: game.money - cost,
  });

  return NextResponse.json({
    success: true,
    data: {
      id: application.id,
      status: 'pending',
      submittedAt: application.submittedAt,
      estimatedDecision: application.estimatedDecision,
      approvalChance,
    },
  }, { status: 201 });
}
```

### 6.2 Japa Attempt Endpoint

```typescript
// src/app/api/japa/attempt/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/middleware';
import { japaAttemptSchema } from '@/lib/validation';
import { attemptJapa } from '@/lib/japa/logic';
import { db } from '@/lib/db/client';

export async function POST(req: NextRequest) {
  const session = await requireAuth(req);
  if (session instanceof NextResponse) return session;

  const body = await req.json();
  const parsed = japaAttemptSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: { code: 'INVALID_INPUT', message: parsed.error.message } },
      { status: 400 }
    );
  }

  const { route } = parsed.data;
  const game = await db.getGameState(session.userId);

  // Check if player has enough money
  const routeData = JAPA_ROUTES[route];
  if (game.money < routeData.cost) {
    return NextResponse.json(
      { success: false, error: { code: 'INSUFFICIENT_FUNDS', message: `You need ₦${routeData.cost}` } },
      { status: 400 }
    );
  }

  // Attempt japa
  const result = attemptJapa(game, route);

  // Update game state
  await db.updateGameState(session.userId, {
    money: game.money - routeData.cost,
    immigrationStatus: result.newStatus === 'undocumented' ? {
      status: 'undocumented',
      undocumentedSince: Date.now(),
      gardaStops: 0,
    } : game.immigrationStatus,
    japaAttempts: game.japaAttempts + 1,
    criminalRecord: result.consequences.criminalRecord
      ? [...game.criminalRecord, ...result.consequences.criminalRecord]
      : game.criminalRecord,
  });

  // Log attempt
  await db.createJapaAttempt({
    userId: session.userId,
    route,
    cost: routeData.cost,
    success: result.success,
    consequences: result.consequences,
  });

  return NextResponse.json({
    success: true,
    data: result,
  });
}
```

---

## 7. Frontend Implementation Templates

### 7.1 Visa Application Component

```tsx
// src/components/visa/VisaApplication.tsx
'use client';

import { useState } from 'react';
import { useGameStore } from '@/stores/gameStore';
import { api } from '@/lib/utils/api';

export function VisaApplication() {
  const { game, updateGame } = useGameStore();
  const [visaType, setVisaType] = useState<string>('');
  const [documents, setDocuments] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.post('/api/visa/apply', {
        visaType,
        documents,
      });

      if (result.success) {
        updateGame({
          visa: {
            type: visaType as any,
            status: 'pending',
            issuedAt: Date.now(),
            expiresAt: result.data.estimatedDecision,
          },
        });
      } else {
        setError(result.error.message);
      }
    } catch (err) {
      setError('Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  if (!game.passport) {
    return (
      <div className="card">
        <h3>Passport Required</h3>
        <p>You need a passport before you can apply for a visa.</p>
        <button className="btn-primary" onClick={() => window.location.href = '/game/visa?tab=passport'}>
          Get Passport
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="card">
        <h3>Apply for Visa</h3>
        <p className="text-sm text-slate-500">Select a visa type and upload required documents.</p>
      </div>

      <div className="card">
        <label className="form-label">Visa Type</label>
        <select
          className="form-select"
          value={visaType}
          onChange={(e) => setVisaType(e.target.value)}
        >
          <option value="">Select visa type</option>
          <option value="tourist">Tourist (Short Stay) — €80</option>
          <option value="work">Work Permit (Critical Skills) — €1,000</option>
          <option value="student">Student Visa — €300</option>
          <option value="investor">Investor / Golden Visa — €50,000</option>
        </select>
      </div>

      {visaType && (
        <div className="card">
          <h4>Required Documents</h4>
          <div className="space-y-2">
            {getRequiredDocuments(visaType).map((doc) => (
              <label key={doc} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={documents.includes(doc)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDocuments([...documents, doc]);
                    } else {
                      setDocuments(documents.filter((d) => d !== doc));
                    }
                  }}
                />
                <span>{doc}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="card card-error">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <button
        className="btn-primary w-full"
        disabled={!visaType || documents.length === 0 || loading}
        onClick={handleSubmit}
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </div>
  );
}
```

### 7.2 Japa Route Component

```tsx
// src/components/japa/RouteList.tsx
'use client';

import { useState } from 'react';
import { useGameStore } from '@/stores/gameStore';
import { api } from '@/lib/utils/api';
import { JAPA_ROUTES } from '@/lib/japa/routes';

export function RouteList() {
  const { game, updateGame } = useGameStore();
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAttempt = async () => {
    if (!selectedRoute) return;

    setLoading(true);
    try {
      const res = await api.post('/api/japa/attempt', { route: selectedRoute });
      if (res.success) {
        setResult(res.data);
        updateGame({
          immigrationStatus: res.data.newStatus === 'undocumented' ? {
            status: 'undocumented',
            undocumentedSince: Date.now(),
            gardaStops: 0,
          } : game.immigrationStatus,
          japaAttempts: game.japaAttempts + 1,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <h3>Japa Routes</h3>
        <p className="text-sm text-slate-500">
          Illegal border crossing. High risk, high reward.
        </p>
      </div>

      {Object.entries(JAPA_ROUTES).map(([key, route]) => (
        <div
          key={key}
          className={`card card-japa ${route.successRate < 0.4 ? 'dangerous' : ''}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4>{route.name}</h4>
              <p className="text-sm text-slate-500">{route.description}</p>
            </div>
            <span className={`badge ${route.successRate >= 0.5 ? 'badge-success' : 'badge-error'}`}>
              {Math.round(route.successRate * 100)}%
            </span>
          </div>
          <div className="mt-3 flex gap-4 text-sm">
            <span>Cost: ₦{route.cost.toLocaleString()}</span>
            <span>Duration: {route.duration}</span>
          </div>
          <button
            className="btn-secondary mt-3"
            onClick={() => setSelectedRoute(key)}
          >
            Select Route
          </button>
        </div>
      ))}

      {selectedRoute && (
        <div className="card">
          <h4>Confirm Attempt</h4>
          <p className="text-sm text-slate-500">
            Are you sure? This will cost ₦{JAPA_ROUTES[selectedRoute].cost.toLocaleString()}.
          </p>
          <div className="flex gap-3 mt-3">
            <button
              className="btn-danger"
              disabled={loading}
              onClick={handleAttempt}
            >
              {loading ? 'Attempting...' : 'Attempt Japa'}
            </button>
            <button
              className="btn-ghost"
              onClick={() => setSelectedRoute(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className={`card ${result.success ? 'card-visa' : 'card-error'}`}>
          <h4>{result.success ? 'Success!' : 'Failed'}</h4>
          <p className="text-sm text-slate-500">
            {result.success
              ? 'You have arrived in Ireland. You are now undocumented.'
              : 'You were caught and deported.'}
          </p>
        </div>
      )}
    </div>
  );
}
```

---

## 8. Testing Checklist

### 8.1 Unit Tests

- [ ] Visa approval chance calculation
- [ ] Japa success/failure logic
- [ ] Currency exchange calculation
- [ ] Immigration status transitions
- [ ] Document requirement validation

### 8.2 Integration Tests

- [ ] Visa application flow (submit → process → decision)
- [ ] Japa attempt flow (select → pay → roll → consequences)
- [ ] Currency exchange flow (select → pay → receive/scam)
- [ ] Cross-city travel flow (book → fly → arrive)
- [ ] Regularisation flow (apply → wait → approved/rejected)

### 8.3 E2E Tests

- [ ] Full visa application (passport → documents → apply → interview → decision)
- [ ] Full japa attempt (select route → pay → success/failure → consequences)
- [ ] Full currency exchange (bank and black market)
- [ ] Full travel flow (Lagos → Dublin)
- [ ] Full regularisation flow (undocumented → regularised)

---

## 9. Common Pitfalls

| Pitfall | Solution |
|---|---|
| State desync between client and server | Use optimistic updates + server reconciliation |
| Race conditions on save | Use optimistic concurrency (updatedAt timestamp) |
| Visa processing takes too long | Use cron jobs + queue system |
| Japa too rewarding | Balance undocumented penalties |
| Black market too dominant | Increase scam risk + reduce rate advantage |
| Cross-city economy distortion | Purchasing power tuning + FX fees |
| Content volume too much | Prioritize MVP, iterate |

---

## 10. Success Criteria

### 10.1 MVP Launch

- [ ] Lagos Life baseline working
- [ ] Passport system working
- [ ] Visa application working
- [ ] Currency exchange working
- [ ] Japa system working
- [ ] Dublin locations working
- [ ] Cross-city social working
- [ ] All tests passing
- [ ] Performance targets met
- [ ] Security audit passed

### 10.2 Post-Launch

- [ ] 1,000 DAU
- [ ] 500 visa applications/month
- [ ] 200 japa attempts/month
- [ ] 30% D7 retention
- [ ] 5% conversion to paid

---

*End of AI Agent Guide*
