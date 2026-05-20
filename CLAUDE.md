# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8081
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

There is no test suite configured.

## Environment Variables

Create a `.env` file with:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

The Supabase client at `src/integrations/supabase/client.ts` is auto-generated — do not edit it directly.

## Architecture

**Stack:** React 18 + TypeScript + Vite, Tailwind CSS, shadcn/ui (Radix UI), React Router v6, TanStack Query, Framer Motion, Supabase.

**What the app is:** Diyama is a Base blockchain onchain gateway app, primarily targeting African users. It combines Base ecosystem education with a USDC-to-Zambian-Kwacha exchange feature.

### Routing (`src/App.tsx`)

All routes use `MainLayout`. Pages are:
- `/` — Home (hero, exchange banner, journey steps, stats, CTA, donations)
- `/learn` — Base education hub with a lessons index
- `/lessons/<slug>` — 10 individual lesson pages (WhatIsBase, WhoBuiltBase, etc.)
- `/wallet` — USDC/Kwacha exchange form backed by Supabase
- `/opportunities`, `/trending`, `/news`, `/leaderboard`, `/profile` — Informational pages

### Layout (`src/components/layout/`)

`MainLayout` wraps every page. It renders:
- `WalletButton` — top-right wallet connection button
- `BottomNav` — persistent bottom navigation bar
- `Footer`
- Background grid + gradient glow decorations (fixed, pointer-events-none)

### Feature Components

- `src/components/home/` — Home page sections (HeroSection, ExchangeBanner, JourneySteps, QuickStats, GlobalCTA, DonationSection)
- `src/components/learn/` — Learn page sections + `LessonLayout` (shared wrapper for all individual lesson pages)
- `src/components/wallet/` — WalletHero, ExchangeForm, RequestList
- `src/components/ui/` — shadcn/ui primitives (do not edit generated files here)

### Supabase / Data Layer

`src/integrations/supabase/` holds the typed client and generated types. The only database table is `exchange_requests`:

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| session_id | text | Identifies anonymous user via `localStorage("diyama_session_id")` |
| full_name | text | |
| phone_number | text | |
| usdc_amount | numeric | |
| kwacha_amount | numeric | |
| notes | text | nullable |
| status | text | e.g. "pending" |

`WalletExchange` page generates a UUID session ID on first visit and stores it in `localStorage`. All exchange requests are scoped to that session ID.

### Styling

- Tailwind with custom utilities: `gradient-text`, `bg-grid-pattern`, `bg-grid`, `bg-gradient-glow`, `bg-gradient-radial`
- Font: `font-display` for headings
- Dark/moody aesthetic with `bg-card/50`, `border-border/50`, `text-muted-foreground` patterns throughout

### Path Alias

`@/` maps to `src/` — use this for all imports.
