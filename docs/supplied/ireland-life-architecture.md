# Ireland Life — Architecture Document
## Extension of Lagos Life

**Version:** 1.0
**Date:** 2026-10-08
**Author:** Samuel Modey
**Status:** Draft

---

## 1. System Architecture

### 1.1 High-Level Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           IRELAND LIFE ARCHITECTURE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         CLIENT LAYER                                 │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Next.js App │  │  PWA Shell   │  │  Game Engine │              │   │
│  │  │  (React 19)  │  │  (Manifest)  │  │  (Zustand)   │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         API LAYER                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Auth API    │  │  Game API    │  │  Ireland API │              │   │
│  │  │  (/api/auth) │  │  (/api/save) │  │  (/api/visa) │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Social API  │  │  Travel API  │  │  FX API      │              │   │
│  │  │  (/api/send) │  │  (/api/travel)│  │  (/api/fx)   │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      SERVICE LAYER                                    │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Game State  │  │  Visa Engine │  │  Japa Engine │              │   │
│  │  │  Service     │  │  Service     │  │  Service     │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  FX Service  │  │  Travel Svc  │  │  Immigration │              │   │
│  │  │              │  │              │  │  Service     │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      DATA LAYER                                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  PostgreSQL  │  │  Redis       │  │  S3 / CDN    │              │   │
│  │  │  (Primary)   │  │  (Cache)     │  │  (Assets)    │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Choices

| Layer | Technology | Justification |
|---|---|---|
| **Frontend** | Next.js 15+ (React 19) | Same as Lagos Life, proven, Turbopack |
| **State** | Zustand | Lightweight, TypeScript-first, same as Lagos Life |
| **Styling** | CSS Modules + CSS Variables | Same as Lagos Life, no runtime overhead |
| **Backend** | Next.js API Routes | Serverless, same as Lagos Life |
| **Database** | PostgreSQL (DigitalOcean) | JSONB for game state, same as Lagos Life |
| **Cache** | Redis | Session cache, rate limiting, FX rate cache |
| **Auth** | Cookie-based sessions | Same as Lagos Life |
| **Payments** | Stripe | EUR currency, replaces Bachs |
| **Hosting** | DigitalOcean | Same as Lagos Life |
| **CDN** | Cloudflare | Static assets, DDoS protection |
| **Monitoring** | Sentry + LogRocket | Error tracking, session replay |

---

## 2. Module Architecture

### 2.1 Core Modules

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   ├── game/
│   │   ├── page.tsx              # Main game screen
│   │   ├── visa/
│   │   │   └── page.tsx          # Visa application flow
│   │   ├── japa/
│   │   │   └── page.tsx          # Japa route selection
│   │   ├── fx/
│   │   │   └── page.tsx          # Currency exchange
│   │   └── immigration/
│   │       └── page.tsx          # Immigration status
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts
│       │   ├── register/route.ts
│       │   ├── logout/route.ts
│       │   └── me/route.ts
│       ├── save/
│       │   └── route.ts          # GET/PUT game state
│       ├── world/
│       │   └── route.ts          # World state
│       ├── visa/
│       │   ├── apply/route.ts    # Submit application
│       │   ├── status/route.ts   # Check status
│       │   ├── history/route.ts  # Full history
│       │   ├── documents/route.ts # Document checklist
│       │   └── interview/route.ts # Interview answers
│       ├── japa/
│       │   ├── routes/route.ts   # Available routes
│       │   ├── attempt/route.ts  # Attempt crossing
│       │   └── history/route.ts  # Attempt history
│       ├── fx/
│       │   ├── rate/route.ts     # Current rate
│       │   ├── exchange/route.ts # Exchange currency
│       │   └── history/route.ts  # Exchange history
│       ├── immigration/
│       │   ├── status/route.ts   # Current status
│       │   ├── regularise/route.ts # Apply for regularisation
│       │   └── garda-stop/route.ts # Garda stop event
│       ├── travel/
│       │   ├── international/route.ts # Available flights
│       │   └── book/route.ts     # Book flight
│       └── send/
│           └── route.ts          # Send money (existing)
│
├── components/
│   ├── game/
│   │   ├── GameScreen.tsx
│   │   ├── HUD.tsx
│   │   ├── MapView.tsx
│   │   ├── ActionPanel.tsx
│   │   └── TravelPanel.tsx
│   ├── phone/
│   │   ├── PhoneApp.tsx
│   │   ├── VisaTab.tsx
│   │   ├── JapaTab.tsx
│   │   ├── FXTab.tsx
│   │   └── ImmigrationTab.tsx
│   ├── visa/
│   │   ├── VisaStatus.tsx
│   │   ├── VisaApplication.tsx
│   │   ├── DocumentChecklist.tsx
│   │   └── InterviewMinigame.tsx
│   ├── japa/
│   │   ├── RouteList.tsx
│   │   ├── RouteDetails.tsx
│   │   └── Consequences.tsx
│   ├── fx/
│   │   ├── ExchangeRate.tsx
│   │   ├── ExchangeForm.tsx
│   │   └── ExchangeHistory.tsx
│   └── immigration/
│       ├── StatusCard.tsx
│       ├── RegularisationForm.tsx
│       └── GardaStopModal.tsx
│
├── lib/
│   ├── game/
│   │   ├── engine.ts             # Game loop
│   │   ├── state.ts              # State management
│   │   ├── actions.ts            # Action handlers
│   │   └── reducer.ts            # State reducer
│   ├── visa/
│   │   ├── types.ts              # Visa types
│   │   ├── logic.ts              # Approval logic
│   │   ├── documents.ts          # Document requirements
│   │   └── interview.ts          # Interview logic
│   ├── japa/
│   │   ├── types.ts              # Japa types
│   │   ├── logic.ts              # Success/failure logic
│   │   └── routes.ts             # Route definitions
│   ├── fx/
│   │   ├── types.ts              # FX types
│   │   ├── logic.ts              # Exchange logic
│   │   └── rates.ts              # Rate definitions
│   ├── immigration/
│   │   ├── types.ts              # Immigration types
│   │   ├── logic.ts              # Status logic
│   │   └── regularisation.ts     # Regularisation logic
│   ├── travel/
│   │   ├── types.ts              # Travel types
│   │   ├── logic.ts              # Booking logic
│   │   └── flights.ts            # Flight definitions
│   ├── db/
│   │   ├── client.ts             # Database client
│   │   ├── queries.ts            # SQL queries
│   │   └── migrations.ts         # Migrations
│   ├── auth/
│   │   ├── session.ts            # Session management
│   │   └── middleware.ts         # Auth middleware
│   └── utils/
│       ├── api.ts                # API client
│       ├── format.ts             # Formatting helpers
│       └── validation.ts         # Zod schemas
│
├── stores/
│   ├── gameStore.ts              # Game state (Zustand)
│   ├── uiStore.ts                # UI state
│   └── authStore.ts              # Auth state
│
├── types/
│   ├── game.ts                   # Game types
│   ├── visa.ts                   # Visa types
│   ├── japa.ts                   # Japa types
│   ├── fx.ts                     # FX types
│   ├── immigration.ts            # Immigration types
│   └── travel.ts                 # Travel types
│
└── styles/
    ├── globals.css               # Global styles
    ├── variables.css             # CSS variables
    └── modules/                  # CSS Modules
        ├── game.module.css
        ├── visa.module.css
        ├── japa.module.css
        ├── fx.module.css
        └── immigration.module.css
```

---

## 3. Data Flow

### 3.1 Game State Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Player     │────▶│   Client     │────▶│   Server     │
│   Action     │     │   State      │     │   State      │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Update     │     │   Optimistic │     │   Validate   │
│   Local      │     │   Update     │     │   & Save     │
│   State      │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Render     │◀────│   Sync       │◀────│   Broadcast  │
│   UI         │     │   (15s poll) │     │   to Clients │
└──────────────┘     └──────────────┘     └──────────────┘
```

### 3.2 Visa Application Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Player     │────▶│   Submit     │────▶│   Validate   │
│   Applies    │     │   Application│     │   Documents  │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Calculate  │     │   Store      │     │   Schedule   │
│   Approval   │     │   Application│     │   Biometrics │
│   Chance     │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Process    │────▶│   Decision   │────▶│   Notify     │
│   (Cron)     │     │   (Approve/  │     │   Player     │
│              │     │   Reject)    │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
```

### 3.3 Japa Attempt Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Player     │────▶│   Select     │────▶│   Validate   │
│   Chooses    │     │   Route      │     │   Funds      │
│   Route      │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Roll       │────▶│   Apply      │────▶│   Update     │
│   Success    │     │   Consequences│    │   Status     │
│   (RNG)      │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Notify     │     │   Update     │     │   Start      │
│   Player     │     │   Moodlets   │     │   Undocumented│
│              │     │              │     │   Timer      │
└──────────────┘     └──────────────┘     └──────────────┘
```

---

## 4. API Architecture

### 4.1 RESTful Design

| Method | Usage |
|---|---|
| `GET` | Retrieve resources |
| `POST` | Create resources |
| `PUT` | Update resources (full) |
| `PATCH` | Update resources (partial) |
| `DELETE` | Delete resources |

### 4.2 Response Format

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

### 4.3 Error Format

```json
{
  "success": false,
  "error": {
    "code": "VISA_INSUFFICIENT_FUNDS",
    "message": "You need at least €80 to apply for a tourist visa",
    "details": {
      "required": 80,
      "current": 45
    }
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

### 4.4 Rate Limiting

| Endpoint | Limit | Window |
|---|---|---|
| `/api/visa/apply` | 10 | 1 hour |
| `/api/japa/attempt` | 5 | 1 hour |
| `/api/fx/exchange` | 20 | 1 hour |
| `/api/save` | 120 | 1 minute |
| `/api/send` | 30 | 1 minute |

---

## 5. Security Architecture

### 5.1 Authentication Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Client     │────▶│   /api/auth  │────▶│   Validate   │
│   Login      │     │   /login     │     │   Credentials│
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Set        │◀────│   Create     │◀────│   Generate   │
│   Cookie     │     │   Session    │     │   Token      │
└──────────────┘     └──────────────┘     └──────────────┘
```

### 5.2 Authorization Middleware

```typescript
// middleware/auth.ts
export async function requireAuth(req: Request) {
  const session = await getSession(req);
  if (!session) {
    return NextResponse.json(
      { success: false, error: { code: 'UNAUTHORIZED', message: 'Please log in' } },
      { status: 401 }
    );
  }
  return session;
}

export async function requireRole(req: Request, role: string) {
  const session = await requireAuth(req);
  if (session.role !== role) {
    return NextResponse.json(
      { success: false, error: { code: 'FORBIDDEN', message: 'Insufficient permissions' } },
      { status: 403 }
    );
  }
  return session;
}
```

### 5.3 Input Validation

```typescript
// lib/validation.ts
import { z } from 'zod';

export const visaApplicationSchema = z.object({
  visaType: z.enum(['tourist', 'work', 'student', 'investor']),
  documents: z.array(z.string()).min(1),
});

export const japaAttemptSchema = z.object({
  route: z.enum(['libya', 'morocco', 'turkey', 'fake_docs', 'smuggler']),
});

export const fxExchangeSchema = z.object({
  fromCurrency: z.enum(['NGN', 'EUR']),
  toCurrency: z.enum(['NGN', 'EUR']),
  fromAmount: z.number().positive(),
  channel: z.enum(['bank', 'black_market']),
});
```

---

## 6. Deployment Architecture

### 6.1 Infrastructure

```
┌─────────────────────────────────────────────────────────────────┐
│                     DIGITALOCEAN CLOUD                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    App Platform                          │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │  │  Web App     │  │  API Routes  │  │  Cron Jobs   │   │  │
│  │  │  (Next.js)   │  │  (Serverless)│  │  (Visa proc) │   │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Managed PostgreSQL (DigitalOcean)            │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │  │  users       │  │  game_saves  │  │  sessions    │   │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │  │  visa_apps   │  │  japa_logs   │  │  fx_logs     │   │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    Redis (DigitalOcean)                   │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │  │  Sessions    │  │  Rate Limit  │  │  FX Cache    │   │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy Ireland Life

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: digitalocean/app-platform-action@v1
        with:
          app_name: irelandlife
          token: ${{ secrets.DO_TOKEN }}
```

### 6.3 Environment Variables

```env
# .env.local
DATABASE_URL=postgresql://user:pass@host:5432/irelandlife
REDIS_URL=redis://host:6379
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
SESSION_SECRET=...
FX_API_KEY=...
SENTRY_DSN=...
```

---

## 7. Scalability

### 7.1 Horizontal Scaling

- **App Platform:** Auto-scales based on CPU/memory
- **Database:** Read replicas for read-heavy queries
- **Redis:** Cluster mode for session/cache

### 7.2 Caching Strategy

| Data | Cache | TTL |
|---|---|---|
| Game state | Redis | 5 minutes |
| FX rate | Redis | 1 hour |
| World state | Redis | 15 seconds |
| User session | Redis | 24 hours |

### 7.3 Database Indexing

```sql
-- Visa applications
CREATE INDEX idx_visa_user ON visa_applications(user_id);
CREATE INDEX idx_visa_status ON visa_applications(status);
CREATE INDEX idx_visa_submitted ON visa_applications(submitted_at);

-- Japa attempts
CREATE INDEX idx_japa_user ON japa_attempts(user_id);
CREATE INDEX idx_japa_attempted ON japa_attempts(attempted_at);

-- Currency exchanges
CREATE INDEX idx_fx_user ON currency_exchanges(user_id);
CREATE INDEX idx_fx_created ON currency_exchanges(created_at);

-- Immigration status
CREATE INDEX idx_immigration_user ON immigration_status(user_id);
```

---

## 8. Monitoring & Observability

### 8.1 Logging

```typescript
// lib/logger.ts
export function log(level: 'info' | 'warn' | 'error', message: string, meta?: object) {
  console.log(JSON.stringify({
    level,
    message,
    timestamp: new Date().toISOString(),
    ...meta,
  }));
}
```

### 8.2 Metrics

| Metric | Type | Description |
|---|---|---|
| `visa_applications_total` | Counter | Total visa applications |
| `visa_approvals_total` | Counter | Total visa approvals |
| `visa_rejections_total` | Counter | Total visa rejections |
| `japa_attempts_total` | Counter | Total japa attempts |
| `japa_successes_total` | Counter | Total japa successes |
| `fx_exchanges_total` | Counter | Total currency exchanges |
| `api_request_duration` | Histogram | API request duration |
| `api_error_rate` | Gauge | API error rate |

### 8.3 Alerting

| Alert | Condition | Action |
|---|---|---|
| High error rate | > 5% | Page on-call |
| API latency | > 1s | Investigate |
| DB connections | > 80% | Scale up |
| Visa processing | > 50 failures | Investigate |

---

*End of Architecture Document*
