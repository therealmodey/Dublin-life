# Ireland Life — Technical Requirements Document (TRD) v2.0
## Extension of Lagos Life

**Version:** 2.0
**Date:** 2026-10-08
**Author:** Samuel Modey
**Status:** Draft
**Supersedes:** TRD v1.0

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Database Schema](#2-database-schema)
3. [API Design](#3-api-design)
4. [Game State Management](#4-game-state-management)
5. [Frontend Architecture](#5-frontend-architecture)
6. [Security Considerations](#6-security-considerations)
7. [Performance Requirements](#7-performance-requirements)
8. [Testing Strategy](#8-testing-strategy)
9. [Monitoring & Observability](#9-monitoring--observability)
10. [Deployment](#10-deployment)
11. [Data Migration](#11-data-migration)
12. [Error Handling](#12-error-handling)

---

## 1. Architecture Overview

### 1.1 System Context

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          IRELAND LIFE SYSTEM v2                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                           CLIENT LAYER                               │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Next.js App │  │  PWA Shell   │  │  Game Engine │              │   │
│  │  │  (React 19)  │  │  (Manifest)  │  │  (Zustand)   │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Visa UI     │  │  Japa UI     │  │  FX UI       │              │   │
│  │  │  Components  │  │  Components  │  │  Components  │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Immigration │  │  Travel UI   │  │  Dublin UI   │              │   │
│  │  │  UI          │  │  Components  │  │  Components  │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                            API LAYER                                  │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Auth API    │  │  Game API    │  │  Ireland API │              │   │
│  │  │  (/api/auth) │  │  (/api/save) │  │  (/api/visa) │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Social API  │  │  Travel API  │  │  FX API      │              │   │
│  │  │  (/api/send) │  │  (/api/travel)│  │  (/api/fx)   │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Immigration │  │  Webhook     │  │  Health      │              │   │
│  │  │  API         │  │  API         │  │  Check       │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                          SERVICE LAYER                                │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Game State  │  │  Visa Engine │  │  Japa Engine │              │   │
│  │  │  Service     │  │  Service     │  │  Service     │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  FX Service  │  │  Travel Svc  │  │  Immigration │              │   │
│  │  │              │  │              │  │  Service     │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Document    │  │  Notification│  │  Analytics   │              │   │
│  │  │  Service     │  │  Service     │  │  Service     │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                            DATA LAYER                                 │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  PostgreSQL  │  │  Redis       │  │  S3 / CDN    │              │   │
│  │  │  (Primary)   │  │  (Cache)     │  │  (Assets)    │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  │                                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│  │  │  Stripe      │  │  Sentry      │  │  LogRocket   │              │   │
│  │  │  (Payments)  │  │  (Errors)    │  │  (Sessions)  │              │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Justification | Version |
|---|---|---|---|
| **Frontend** | Next.js 15+ (React 19) | Same as Lagos Life, proven | 15.x |
| **Build** | Turbopack | Fast HMR, production builds | Built-in |
| **Styling** | CSS Modules + CSS Variables | Same as Lagos Life, no runtime overhead | — |
| **Fonts** | Fredoka + Plus Jakarta Sans | Same as Lagos Life | — |
| **Backend** | Next.js API Routes | Serverless, same as Lagos Life | 15.x |
| **Database** | PostgreSQL (DigitalOcean) | JSONB for game state, same as Lagos Life | 15+ |
| **Cache** | Redis | Session cache, rate limiting, FX rate cache | 7.x |
| **Auth** | Cookie-based sessions | `il_session` cookie, HTTP-only | — |
| **Hosting** | DigitalOcean | Same as Lagos Life | — |
| **Payments** | Stripe | EUR currency, replaces Bachs | — |
| **PWA** | Web App Manifest | Standalone display | — |
| **Real-time** | Polling (15s) | Same as Lagos Life | — |
| **Error Tracking** | Sentry | Error tracking + performance | — |
| **Session Replay** | LogRocket | User session replay | — |
| **Animations** | Framer Motion | Same as Lagos Life | 11.x |
| **Icons** | Lucide React | Same as Lagos Life | — |
| **State** | Zustand | Lightweight, TypeScript-first | 4.x |
| **Validation** | Zod | Runtime type validation | 3.x |

### 1.3 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DIGITALOCEAN CLOUD v2                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                        Cloudflare CDN                                 │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │  │  Static      │  │  DDoS        │  │  WAF         │               │  │
│  │  │  Assets      │  │  Protection  │  │  Rules       │               │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                        App Platform                                   │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │  │  Web App     │  │  API Routes  │  │  Cron Jobs   │               │  │
│  │  │  (Next.js)   │  │  (Serverless)│  │  (Visa proc) │               │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │  │  Auto-scale  │  │  Health      │  │  Log         │               │  │
│  │  │  (2–10)      │  │  Checks      │  │  Drain       │               │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                  Managed PostgreSQL (DigitalOcean)                    │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │  │  Primary     │  │  Read        │  │  Automated   │               │  │
│  │  │  (Write)     │  │  Replica     │  │  Backups     │               │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                    Redis (DigitalOcean)                               │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │  │  Sessions    │  │  Rate Limit  │  │  FX Cache    │               │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DATABASE ERD v2                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐        │
│  │    users     │         │  game_saves  │         │  sessions    │        │
│  ├──────────────┤         ├──────────────┤         ├──────────────┤        │
│  │ id (PK)      │◀───────▶│ id (PK)      │◀───────▶│ id (PK)      │        │
│  │ username     │    1:1  │ user_id (FK) │    1:1  │ user_id (FK) │        │
│  │ email        │         │ game (JSONB) │         │ token        │        │
│  │ password_hash│         │ updatedAt    │         │ expiresAt    │        │
│  │ created_at   │         │ version      │         │ created_at   │        │
│  └──────────────┘         └──────────────┘         └──────────────┘        │
│         │                        │                                          │
│         │                        │                                          │
│         ▼                        ▼                                          │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐        │
│  │visa_applications│      │japa_attempts │         │currency_exchanges│      │
│  ├──────────────┤         ├──────────────┤         ├──────────────┤        │
│  │ id (PK)      │         │ id (PK)      │         │ id (PK)      │        │
│  │ user_id (FK) │         │ user_id (FK) │         │ user_id (FK) │        │
│  │ visa_type    │         │ route        │         │ from_currency│        │
│  │ status       │         │ cost         │         │ to_currency  │        │
│  │ documents    │         │ success      │         │ from_amount  │        │
│  │ rejection_reason│      │ consequences │         │ to_amount    │        │
│  │ submitted_at │         │ attempted_at │         │ rate         │        │
│  │ decided_at   │         └──────────────┘         │ channel      │        │
│  │ expires_at   │                                  │ status       │        │
│  └──────────────┘                                  └──────────────┘        │
│         │                                                                   │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐        │
│  │immigration_  │         │  messages    │         │ transactions │        │
│  │  status      │         ├──────────────┤         ├──────────────┤        │
│  ├──────────────┤         │ id (PK)      │         │ id (PK)      │        │
│  │ id (PK)      │         │ from_user(FK)│         │ from_user(FK)│        │
│  │ user_id (FK) │         │ to_user (FK) │         │ to_user (FK) │        │
│  │ status       │         │ content      │         │ amount       │        │
│  │ visa_type    │         │ read         │         │ currency     │        │
│  │ visa_expires │         │ created_at   │         │ fee          │        │
│  │ undocumented │         └──────────────┘         │ created_at   │        │
│  │ garda_stops  │                                  └──────────────┘        │
│  └──────────────┘                                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 New Tables

#### `visa_applications`

```sql
CREATE TABLE visa_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  visa_type VARCHAR(20) NOT NULL CHECK (visa_type IN ('tourist', 'work', 'student', 'investor')),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'expired', 'revoked')),
  documents JSONB NOT NULL DEFAULT '[]',
  rejection_reason VARCHAR(10),
  approval_chance DECIMAL(5, 4),
  interview_score INTEGER,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  decided_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_visa_applications_user_id ON visa_applications(user_id);
CREATE INDEX idx_visa_applications_status ON visa_applications(status);
CREATE INDEX idx_visa_applications_submitted_at ON visa_applications(submitted_at);
CREATE INDEX idx_visa_applications_decided_at ON visa_applications(decided_at);

COMMENT ON TABLE visa_applications IS 'Visa applications for Ireland travel';
COMMENT ON COLUMN visa_applications.approval_chance IS 'Calculated approval chance at submission time (0.0000 to 1.0000)';
COMMENT ON COLUMN visa_applications.interview_score IS 'Interview performance score (0-100)';
```

#### `japa_attempts`

```sql
CREATE TABLE japa_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  route VARCHAR(30) NOT NULL CHECK (route IN ('libya', 'morocco', 'turkey', 'fake_docs', 'smuggler')),
  cost INTEGER NOT NULL,
  success BOOLEAN NOT NULL,
  consequences JSONB NOT NULL DEFAULT '{}',
  attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_japa_attempts_user_id ON japa_attempts(user_id);
CREATE INDEX idx_japa_attempts_attempted_at ON japa_attempts(attempted_at);

COMMENT ON TABLE japa_attempts IS 'Illegal border crossing attempts';
COMMENT ON COLUMN japa_attempts.consequences IS 'JSON object with moodlet, moodValue, moodDuration, deported, jailDays, criminalRecord';
```

#### `currency_exchanges`

```sql
CREATE TABLE currency_exchanges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  from_currency VARCHAR(3) NOT NULL CHECK (from_currency IN ('NGN', 'EUR')),
  to_currency VARCHAR(3) NOT NULL CHECK (to_currency IN ('NGN', 'EUR')),
  from_amount INTEGER NOT NULL CHECK (from_amount > 0),
  to_amount INTEGER NOT NULL DEFAULT 0,
  rate DECIMAL(10, 2) NOT NULL,
  channel VARCHAR(10) NOT NULL CHECK (channel IN ('bank', 'black_market')),
  status VARCHAR(10) NOT NULL DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'scammed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_currency_exchanges_user_id ON currency_exchanges(user_id);
CREATE INDEX idx_currency_exchanges_created_at ON currency_exchanges(created_at);

COMMENT ON TABLE currency_exchanges IS 'Currency exchange transactions (NGN ↔ EUR)';
```

#### `immigration_status`

```sql
CREATE TABLE immigration_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL DEFAULT 'citizen' CHECK (status IN ('citizen', 'visa', 'undocumented', 'regularised')),
  visa_type VARCHAR(20) CHECK (visa_type IN ('tourist', 'work', 'student', 'investor')),
  visa_expires_at TIMESTAMPTZ,
  undocumented_since TIMESTAMPTZ,
  garda_stops INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id)
);

CREATE INDEX idx_immigration_status_user_id ON immigration_status(user_id);
CREATE INDEX idx_immigration_status_status ON immigration_status(status);

COMMENT ON TABLE immigration_status IS 'Current immigration status for each user';
COMMENT ON COLUMN immigration_status.garda_stops IS 'Number of times stopped by Garda while undocumented';
```

### 2.3 Modified Tables

#### `game_saves` — New JSONB Fields

```json
{
  "passport": {
    "issuedAt": 1791270580040,
    "expiresAt": 1949030580040
  },
  "visa": {
    "type": "tourist",
    "status": "valid",
    "issuedAt": 1791270580040,
    "expiresAt": 1822806580040
  },
  "visaHistory": [
    { "type": "tourist", "date": 1791270580040, "result": "rejected", "reason": "R01" }
  ],
  "immigrationStatus": "citizen",
  "japaAttempts": 0,
  "criminalRecord": [],
  "currency": "EUR",
  "fxRate": 1.55,
  "fxRateUpdatedAt": 1791270580040,
  "documents": {
    "birthCertificate": true,
    "stateOfOrigin": true,
    "policeClearance": false,
    "medicalExam": false,
    "travelInsurance": false,
    "bankStatements": false,
    "employmentLetter": false,
    "accommodationProof": false
  },
  "ppsNumber": null,
  "leapCard": false,
  "drivingLicence": "none",
  "gaaSkill": 0,
  "irishLanguage": 0
}
```

### 2.4 Database Indexes

```sql
-- Performance indexes for common queries
CREATE INDEX idx_game_saves_user_id ON game_saves(user_id);
CREATE INDEX idx_game_saves_updated_at ON game_saves(updated_at);

-- Partial indexes for active visa applications
CREATE INDEX idx_visa_active ON visa_applications(user_id) WHERE status = 'pending';

-- Partial indexes for undocumented users
CREATE INDEX idx_immigration_undocumented ON immigration_status(user_id) WHERE status = 'undocumented';

-- Composite indexes for common joins
CREATE INDEX idx_visa_user_status ON visa_applications(user_id, status);
CREATE INDEX idx_japa_user_attempted ON japa_attempts(user_id, attempted_at);
CREATE INDEX idx_fx_user_created ON currency_exchanges(user_id, created_at);
```

---

## 3. API Design

### 3.1 RESTful Design

| Method | Usage |
|---|---|
| `GET` | Retrieve resources |
| `POST` | Create resources |
| `PUT` | Update resources (full) |
| `PATCH` | Update resources (partial) |
| `DELETE` | Delete resources |

### 3.2 New Endpoints

#### Visa System

| Endpoint | Method | Description | Rate Limit |
|---|---|---|---|
| `/api/visa/apply` | POST | Submit visa application | 10/hour |
| `/api/visa/status` | GET | Check application status | 60/hour |
| `/api/visa/history` | GET | Full visa history | 60/hour |
| `/api/visa/documents` | GET | Required documents checklist | 60/hour |
| `/api/visa/interview` | POST | Submit interview answers | 10/hour |
| `/api/visa/types` | GET | Available visa types | 60/hour |

#### Japa System

| Endpoint | Method | Description | Rate Limit |
|---|---|---|---|
| `/api/japa/routes` | GET | Available japa routes | 60/hour |
| `/api/japa/attempt` | POST | Attempt illegal border crossing | 5/hour |
| `/api/japa/history` | GET | Japa attempt history | 60/hour |

#### Immigration

| Endpoint | Method | Description | Rate Limit |
|---|---|---|---|
| `/api/immigration/status` | GET | Current immigration status | 60/hour |
| `/api/immigration/regularise` | POST | Apply for regularisation | 5/hour |
| `/api/immigration/garda-stop` | POST | Handle Garda stop event | 60/hour |

#### Currency Exchange

| Endpoint | Method | Description | Rate Limit |
|---|---|---|---|
| `/api/fx/rate` | GET | Current exchange rate | 60/hour |
| `/api/fx/exchange` | POST | Exchange currency | 20/hour |
| `/api/fx/history` | GET | Exchange history | 60/hour |

#### Travel

| Endpoint | Method | Description | Rate Limit |
|---|---|---|---|
| `/api/travel/international` | GET | Available international flights | 60/hour |
| `/api/travel/book` | POST | Book international flight | 10/hour |

### 3.3 Modified Endpoints

#### `/api/save` — Extended Game State

The existing `PUT /api/save` endpoint now accepts the extended game state with all new fields (passport, visa, immigration status, etc.).

**Request:**
```json
{
  "game": {
    "version": 1,
    "phase": "play",
    "sim": { "name": "player1", "appearance": {}, "traits": [], "aspiration": "" },
    "needs": { "hunger": 80, "energy": 70, "hygiene": 90, "bladder": 100, "fun": 60, "social": 80 },
    "skills": { "cooking": 0, "charisma": 0, "fitness": 0, "coding": 0, "music": 0, "hustle": 0, "dance": 0, "comedy": 0, "photography": 0 },
    "money": 500000,
    "passport": { "issuedAt": 1791270580040, "expiresAt": 1949030580040 },
    "visa": { "type": "tourist", "status": "valid", "issuedAt": 1791270580040, "expiresAt": 1822806580040 },
    "visaHistory": [],
    "immigrationStatus": "citizen",
    "japaAttempts": 0,
    "criminalRecord": [],
    "currency": "NGN",
    "fxRate": 1500,
    "fxRateUpdatedAt": 1791270580040,
    "documents": {
      "birthCertificate": true,
      "stateOfOrigin": true,
      "policeClearance": false,
      "medicalExam": false,
      "travelInsurance": false,
      "bankStatements": false,
      "employmentLetter": false,
      "accommodationProof": false
    },
    "ppsNumber": null,
    "leapCard": false,
    "drivingLicence": "none",
    "gaaSkill": 0,
    "irishLanguage": 0
  },
  "updatedAt": 1791270580040
}
```

**Response (204):**
```
No Content
```

**Response (409 — stale):**
```json
{
  "error": "Game state is stale",
  "newerState": { ... }
}
```

#### `/api/world` — Extended World State

**Response:**
```json
{
  "now": 1791412214559,
  "online": 0,
  "load": 0,
  "cities": true,
  "refinery": true,
  "street": "solo",
  "buses": { "demand": 1 },
  "biz": { "companies": true, "stores": true, "rentals": true, "demand": 1 },
  "players": [],
  "guests": [],
  "inbox": [],
  "fxRate": 1500,
  "fxRateUpdatedAt": 1791412214559,
  "visaProcessing": true,
  "japaEnabled": true
}
```

### 3.4 API Request/Response Examples

#### POST /api/visa/apply

**Request:**
```json
{
  "visaType": "tourist",
  "documents": ["passport", "bankStatements", "travelInsurance", "accommodationProof"]
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "pending",
    "submittedAt": "2026-10-08T12:00:00Z",
    "estimatedDecision": "2026-10-23T12:00:00Z",
    "approvalChance": 0.65
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

**Response (400 — missing documents):**
```json
{
  "success": false,
  "error": {
    "code": "MISSING_DOCUMENTS",
    "message": "Missing required documents",
    "details": {
      "missing": ["policeClearance"]
    }
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

**Response (400 — no passport):**
```json
{
  "success": false,
  "error": {
    "code": "NO_PASSPORT",
    "message": "You need a passport before you can apply for a visa"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

**Response (400 — insufficient funds):**
```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_FUNDS",
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

#### POST /api/japa/attempt

**Request:**
```json
{
  "route": "libya"
}
```

**Response (200 — success):**
```json
{
  "success": true,
  "data": {
    "success": true,
    "consequences": {
      "moodlet": "Homesick",
      "moodValue": -15,
      "moodDuration": 72,
      "deported": false,
      "jailDays": 0,
      "criminalRecord": []
    },
    "newStatus": "undocumented"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

**Response (200 — failure):**
```json
{
  "success": true,
  "data": {
    "success": false,
    "consequences": {
      "moodlet": "Deported",
      "moodValue": -40,
      "moodDuration": 48,
      "deported": true,
      "jailDays": 7,
      "criminalRecord": ["illegal_entry"]
    },
    "newStatus": "citizen"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

#### POST /api/fx/exchange

**Request:**
```json
{
  "fromCurrency": "NGN",
  "toCurrency": "EUR",
  "fromAmount": 150000,
  "channel": "bank"
}
```

**Response (200 — success):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "fromAmount": 150000,
    "toAmount": 96,
    "rate": 1562.50,
    "channel": "bank",
    "status": "completed"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

**Response (200 — black market scam):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "fromAmount": 150000,
    "toAmount": 0,
    "rate": 1800.00,
    "channel": "black_market",
    "status": "scammed",
    "moodlet": "Scammed!"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00Z",
    "requestId": "req_abc123"
  }
}
```

### 3.5 Error Codes

| Code | HTTP | Description | Client Action |
|---|---|---|---|
| `UNAUTHORIZED` | 401 | Not logged in | Redirect to login |
| `FORBIDDEN` | 403 | Insufficient permissions | Show error |
| `INVALID_INPUT` | 400 | Invalid request body | Show validation errors |
| `NO_PASSPORT` | 400 | No passport | Redirect to passport flow |
| `MISSING_DOCUMENTS` | 400 | Missing required documents | Show missing documents |
| `INSUFFICIENT_FUNDS` | 400 | Not enough money | Show required amount |
| `VISA_ALREADY_PENDING` | 400 | Already have pending application | Show existing application |
| `JAPA_COOLDOWN` | 400 | Japa cooldown active | Show cooldown timer |
| `RATE_LIMITED` | 429 | Too many requests | Show retry after |
| `INTERNAL_ERROR` | 500 | Server error | Show generic error |

---

## 4. Game State Management

### 4.1 State Schema

```typescript
// types/game.ts

export interface GameState {
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

export interface PassportData {
  issuedAt: number;
  expiresAt: number;
}

export interface VisaData {
  type: 'tourist' | 'work' | 'student' | 'investor';
  status: 'valid' | 'expired' | 'revoked' | 'pending';
  issuedAt: number;
  expiresAt: number;
}

export interface VisaApplicationData {
  type: string;
  date: number;
  result: 'approved' | 'rejected';
  reason?: string;
}

export interface ImmigrationStatusData {
  status: 'citizen' | 'visa' | 'undocumented' | 'regularised';
  visaType?: string;
  visaExpiresAt?: number;
  undocumentedSince?: number;
  gardaStops: number;
}

export interface DocumentCollectionData {
  birthCertificate: boolean;
  stateOfOrigin: boolean;
  policeClearance: boolean;
  medicalExam: boolean;
  travelInsurance: boolean;
  bankStatements: boolean;
  employmentLetter: boolean;
  accommodationProof: boolean;
}
```

### 4.2 State Transitions

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       IMMIGRATION STATE MACHINE v2                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐                                                              │
│   │  CITIZEN │◀──────────────────────────────────────────────────────────┐  │
│   └────┬─────┘                                                           │  │
│        │                                                                 │  │
│        │ visa approved          │ japa success                │ deportation │
│        ▼                         ▼                            │ (from any)  │
│   ┌──────────┐             ┌──────────────┐                   │             │
│   │   VISA   │             │ UNDOCUMENTED │                   │             │
│   └────┬─────┘             └──────┬───────┘                   │             │
│        │                          │                           │             │
│        │ visa expires             │ regularisation            │             │
│        │                          │                           │             │
│        ▼                          ▼                           │             │
│   ┌──────────┐             ┌──────────────┐                   │             │
│   │ CITIZEN  │             │ REGULARISED  │                   │             │
│   │ (expired)│             └──────┬───────┘                   │             │
│   └──────────┘                    │                           │             │
│        ▲                          │ visa revoked              │             │
│        │                          │                           │             │
│        │                          ▼                           │             │
│        │                   ┌──────────────┐                   │             │
│        │                   │ UNDOCUMENTED │                   │             │
│        │                   └──────────────┘                   │             │
│        │                                                      │             │
│        └──────────────────────────────────────────────────────┘             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.3 State Transition Rules

| From | Event | To | Conditions |
|---|---|---|---|
| `citizen` | Visa approved | `visa` | Valid visa issued |
| `citizen` | Japa success | `undocumented` | Arrived via illegal route |
| `visa` | Visa expires | `citizen` | Past expiration date |
| `visa` | Visa revoked | `undocumented` | Revoked by immigration |
| `undocumented` | Regularisation approved | `regularised` | Application approved |
| `undocumented` | Garda stop → arrested | `citizen` | Deported |
| `regularised` | Visa revoked | `undocumented` | Revoked by immigration |
| Any | Deportation | `citizen` | Forced return to Lagos |

---

## 5. Frontend Architecture

### 5.1 Component Hierarchy

```
App
├── GameProvider (context)
│   ├── GameScreen
│   │   ├── HUD (needs, money, time)
│   │   ├── MapView
│   │   │   ├── LocationMarker
│   │   │   └── PlayerAvatar
│   │   ├── ActionPanel
│   │   │   ├── ActionButton
│   │   │   └── ActionQueue
│   │   └── TravelPanel
│   │       ├── DomesticFlights
│   │       └── InternationalFlights
│   ├── PhoneApp
│   │   ├── ContactsTab
│   │   ├── MessagesTab
│   │   ├── MapTab
│   │   ├── JobsTab
│   │   ├── BankTab
│   │   ├── VisaTab (NEW)
│   │   │   ├── VisaStatus
│   │   │   ├── VisaApplication
│   │   │   ├── DocumentChecklist
│   │   │   └── InterviewMinigame
│   │   ├── JapaTab (NEW)
│   │   │   ├── RouteList
│   │   │   ├── RouteDetails
│   │   │   └── Consequences
│   │   ├── FXTab (NEW)
│   │   │   ├── ExchangeRate
│   │   │   ├── ExchangeForm
│   │   │   └── ExchangeHistory
│   │   └── ImmigrationTab (NEW)
│   │       ├── StatusCard
│   │       ├── RegularisationForm
│   │       └── GardaStopModal
│   └── ...
```

### 5.2 State Management

```typescript
// stores/gameStore.ts
import { create } from 'zustand';

interface GameStore {
  game: GameData | null;
  world: WorldData | null;
  loading: boolean;
  error: string | null;

  // Actions
  loadGame: () => Promise<void>;
  saveGame: () => Promise<void>;
  updateGame: (updates: Partial<GameData>) => void;
  applyVisa: (visaType: string, documents: string[]) => Promise<void>;
  attemptJapa: (route: string) => Promise<void>;
  exchangeCurrency: (from: string, to: string, amount: number, channel: string) => Promise<void>;
  updateImmigration: (status: ImmigrationStatusData) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  game: null,
  world: null,
  loading: false,
  error: null,

  loadGame: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/save');
      const data = await res.json();
      set({ game: data.game, world: data.world, loading: false });
    } catch (err) {
      set({ error: 'Failed to load game', loading: false });
    }
  },

  saveGame: async () => {
    const { game } = get();
    if (!game) return;
    try {
      await fetch('/api/save', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ game, updatedAt: Date.now() }),
      });
    } catch (err) {
      set({ error: 'Failed to save game' });
    }
  },

  updateGame: (updates) => {
    const { game } = get();
    if (!game) return;
    set({ game: { ...game, ...updates } });
  },

  applyVisa: async (visaType, documents) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/visa/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visaType, documents }),
      });
      const data = await res.json();
      if (data.success) {
        get().updateGame({
          visa: { type: visaType, status: 'pending', issuedAt: Date.now(), expiresAt: data.data.estimatedDecision },
        });
      } else {
        set({ error: data.error.message });
      }
    } catch (err) {
      set({ error: 'Failed to apply for visa' });
    } finally {
      set({ loading: false });
    }
  },

  attemptJapa: async (route) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/japa/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ route }),
      });
      const data = await res.json();
      if (data.success) {
        get().updateGame({
          immigrationStatus: data.data.newStatus === 'undocumented' ? {
            status: 'undocumented',
            undocumentedSince: Date.now(),
            gardaStops: 0,
          } : get().game!.immigrationStatus,
          japaAttempts: get().game!.japaAttempts + 1,
        });
      }
    } catch (err) {
      set({ error: 'Failed to attempt japa' });
    } finally {
      set({ loading: false });
    }
  },

  exchangeCurrency: async (from, to, amount, channel) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/fx/exchange', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromCurrency: from, toCurrency: to, fromAmount: amount, channel }),
      });
      const data = await res.json();
      if (data.success) {
        // Update money based on exchange result
      } else {
        set({ error: data.error.message });
      }
    } catch (err) {
      set({ error: 'Failed to exchange currency' });
    } finally {
      set({ loading: false });
    }
  },

  updateImmigration: (status) => {
    get().updateGame({ immigrationStatus: status });
  },
}));
```

### 5.3 Routing

```
/                     → Landing page
/game                 → Main game screen
/game/visa            → Visa application flow
/game/japa            → Japa route selection
/game/fx              → Currency exchange
/game/immigration     → Immigration status
/auth/login           → Login page
/auth/register        → Registration page
```

---

## 6. Security Considerations

### 6.1 Authentication

- Cookie-based sessions (`il_session`, HTTP-only, SameSite=Strict)
- CSRF protection via SameSite cookies
- Rate limiting on auth endpoints (5 attempts per minute)
- Password hashing with bcrypt (cost factor 12)
- Session expiration after 24 hours of inactivity

### 6.2 Authorization

- All game endpoints require authentication
- Users can only modify their own game state
- Admin endpoints require role-based access
- Visa/japa endpoints check game state before processing

### 6.3 Input Validation

- All API inputs validated with Zod schemas
- SQL injection prevention via parameterized queries
- XSS prevention via React's built-in escaping
- File upload validation (if applicable)

### 6.4 Rate Limiting

| Endpoint | Rate Limit | Window | Burst |
|---|---|---|---|
| `/api/visa/apply` | 10 | 1 hour | 2 |
| `/api/japa/attempt` | 5 | 1 hour | 1 |
| `/api/fx/exchange` | 20 | 1 hour | 5 |
| `/api/save` | 120 | 1 minute | 20 |
| `/api/send` | 30 | 1 minute | 5 |
| `/api/auth/login` | 5 | 1 minute | 1 |

### 6.5 Data Protection

- All data encrypted at rest (PostgreSQL)
- All data encrypted in transit (HTTPS/TLS 1.3)
- Sensitive data (passwords) hashed with bcrypt
- PII data minimized (only username, email, game state)
- GDPR compliance (right to deletion, data export)

---

## 7. Performance Requirements

### 7.1 Targets

| Metric | Target | Measurement |
|---|---|---|
| Page load | < 2s | Lighthouse |
| API response | < 200ms (p95) | APM |
| Game state save | < 500ms | APM |
| Concurrent users | 1,000 | Load test |
| Database connections | 50 | Connection pool |
| Cache hit rate | > 80% | Redis metrics |
| Error rate | < 1% | APM |

### 7.2 Optimization Strategies

| Strategy | Implementation |
|---|---|
| CDN | Cloudflare for static assets |
| Caching | Redis for sessions, FX rates, world state |
| Database | Read replicas, connection pooling, indexing |
| Frontend | Code splitting, lazy loading, image optimization |
| API | Response compression, pagination, rate limiting |

---

## 8. Testing Strategy

### 8.1 Unit Tests

| Module | Tests |
|---|---|
| Game state reducers | State transitions, action handlers |
| Visa approval logic | Chance calculation, modifiers, edge cases |
| Japa success/failure logic | Route success rates, consequences |
| Currency exchange | Rate calculation, scam logic, edge cases |
| Immigration status | State transitions, regularisation |

### 8.2 Integration Tests

| Flow | Tests |
|---|---|
| Visa application | Submit → validate → process → decide |
| Japa attempt | Select → pay → roll → consequences |
| Currency exchange | Select → pay → receive/scam |
| Cross-city travel | Book → fly → arrive |
| Regularisation | Apply → wait → approved/rejected |

### 8.3 E2E Tests

| Flow | Tests |
|---|---|
| Full visa application | Passport → documents → apply → interview → decision |
| Full japa attempt | Select route → pay → success/failure → consequences |
| Full currency exchange | Bank and black market |
| Full travel flow | Lagos → Dublin |
| Full regularisation flow | Undocumented → regularised |

### 8.4 Test Coverage

| Layer | Target |
|---|---|
| Unit tests | 80% |
| Integration tests | 70% |
| E2E tests | 50% |

---

## 9. Monitoring & Observability

### 9.1 Logging

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

### 9.2 Metrics

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

### 9.3 Alerting

| Alert | Condition | Action |
|---|---|---|
| High error rate | > 5% | Page on-call |
| API latency | > 1s | Investigate |
| DB connections | > 80% | Scale up |
| Visa processing | > 50 failures | Investigate |
| Japa success rate | > 70% | Balance check |

---

## 10. Deployment

### 10.1 Environments

| Environment | URL | Purpose |
|---|---|---|
| Development | dev.irelandlife.ie | Local development |
| Staging | staging.irelandlife.ie | Pre-production testing |
| Production | irelandlife.ie | Live production |

### 10.2 CI/CD Pipeline

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

### 10.3 Rollback Strategy

- Blue-green deployment
- Database migrations are backward-compatible
- Feature flags for new features
- Automated rollback on health check failure

---

## 11. Data Migration

### 11.1 Migration from Lagos Life

```sql
-- Add new columns to game_saves
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS passport JSONB;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS visa JSONB;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS visa_history JSONB DEFAULT '[]';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS immigration_status VARCHAR(20) DEFAULT 'citizen';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS japa_attempts INTEGER DEFAULT 0;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS criminal_record JSONB DEFAULT '[]';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS currency VARCHAR(3) DEFAULT 'NGN';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS fx_rate DECIMAL(10, 2) DEFAULT 1500;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS fx_rate_updated_at BIGINT;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS documents JSONB DEFAULT '{}';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS pps_number VARCHAR(20);
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS leap_card BOOLEAN DEFAULT FALSE;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS driving_licence VARCHAR(10) DEFAULT 'none';
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS gaa_skill INTEGER DEFAULT 0;
ALTER TABLE game_saves ADD COLUMN IF NOT EXISTS irish_language INTEGER DEFAULT 0;

-- Create new tables
CREATE TABLE IF NOT EXISTS visa_applications (...);
CREATE TABLE IF NOT EXISTS japa_attempts (...);
CREATE TABLE IF NOT EXISTS currency_exchanges (...);
CREATE TABLE IF NOT EXISTS immigration_status (...);
```

### 11.2 Backward Compatibility

- All new fields have default values
- Existing game states are valid without migration
- New features are opt-in (feature flags)
- API is backward-compatible (new fields are optional)

---

## 12. Error Handling

### 12.1 Client-Side Error Handling

```typescript
// lib/utils/api.ts
export async function api<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: {
          code: data.error?.code || 'UNKNOWN_ERROR',
          message: data.error?.message || 'An error occurred',
          details: data.error?.details,
        },
      };
    }

    return { success: true, data: data.data };
  } catch (err) {
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Network error. Please try again.',
      },
    };
  }
}
```

### 12.2 Server-Side Error Handling

```typescript
// lib/utils/error.ts
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: object
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(err: unknown) {
  if (err instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: err.code,
          message: err.message,
          details: err.details,
        },
      },
      { status: err.statusCode }
    );
  }

  console.error('Unhandled error:', err);
  return NextResponse.json(
    {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An internal error occurred',
      },
    },
    { status: 500 }
  );
}
```

### 12.3 Error Recovery

| Error | Recovery |
|---|---|
| Network error | Retry with exponential backoff |
| Stale state | Fetch latest state from server |
| Rate limit | Wait and retry |
| Validation error | Show error message, keep form data |
| Server error | Show generic error, log details |

---

*End of TRD v2.0*
