# 17-0 🏈

> **Build the Greatest Football Team Ever Assembled**

An NFL-themed fantasy draft game inspired by the addictive loop of 82-0. Draft legendary players from every era, build the perfect roster, and chase a projected 17-0 perfect season.

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourname/17-0.git
cd 17-0
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL Editor, run the migration:
   ```
   supabase/migrations/001_schema.sql
   ```
3. Then run the seed data:
   ```
   supabase/seed/players.sql
   ```
4. Copy your project URL and anon key

### 3. Configure Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_API_KEY=your-secret-admin-key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🎮 How to Play

1. **Start Draft** — You're shown an NFL team and era
2. **Pick a Player** — 5 players are presented; select one
3. **Repeat** — A new team/era appears for each position
4. **Build Your Roster** — Fill QB, RB, WR, TE, DEF
5. **Get Your Rating** — See your projected record and team grade

### Game Modes

| Mode | Description |
|------|-------------|
| **Standard** | Full stats shown, 2 rerolls available |
| **Football IQ** | Stats hidden — rely on football knowledge only |
| **Daily Challenge** | Same team/era for everyone. Compete on the daily leaderboard |

### Rerolls

- 🔄 **Team Reroll** (1×) — Change the current team, keep era
- ⏳ **Era Reroll** (1×) — Change the era, keep team

---

## 🧮 Scoring System

### Position Weights
| Position | Weight |
|----------|--------|
| QB | 30% |
| RB | 20% |
| WR | 20% |
| TE | 10% |
| DEF | 20% |

### Chemistry Bonuses
| Combo | Bonus |
|-------|-------|
| QB + WR connection | +3 |
| QB + TE connection | +4 |
| 3+ same franchise players | +2 |
| Dynasty team detected | +5 |

### Record Thresholds
| Score | Record |
|-------|--------|
| 99-100 | 17-0 🏆 |
| 95-98 | 16-1 |
| 90-94 | 15-2 |
| 85-89 | 13-4 |
| 80-84 | 11-6 |
| 75-79 | 9-8 |
| 70-74 | 7-10 |
| <70 | 4-13 |

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── play/page.tsx         # Main game loop
│   ├── results/page.tsx      # Results + chemistry reveal
│   ├── leaderboard/page.tsx  # Global leaderboard
│   ├── challenge/page.tsx    # Daily challenge
│   ├── admin/page.tsx        # Admin panel
│   └── api/
│       ├── players/route.ts
│       ├── leaderboard/route.ts
│       └── daily-challenge/route.ts
├── components/game/
│   ├── PlayerCard.tsx        # Core draft card UI
│   ├── RosterSlot.tsx        # Sidebar roster display
│   ├── TeamEraHeader.tsx     # Team/era display with colors
│   ├── RerollButtons.tsx     # Team/era reroll controls
│   └── PositionQueue.tsx     # Draft order tracker
├── lib/
│   ├── engine.ts             # Chemistry + rating engine
│   ├── players.ts            # Player database + filtering
│   └── supabase.ts           # Supabase client + types
└── types/
    └── index.ts              # All TypeScript interfaces
```

---

## 🚢 Deploy to Vercel

```bash
npx vercel
```

Set these environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_API_KEY`

---

## 🔧 Admin Panel

Visit `/admin` to add or manage players. Requires the `ADMIN_API_KEY` environment variable.

---

## 🏆 Achievements

| Achievement | Trigger |
|-------------|---------|
| 17-0 Club | Perfect 17-0 projected record |
| Dynasty Builder | 3+ chemistry bonuses activated |
| GOAT Collector | 3+ Hall of Famers on roster |
| Legendary Defense | DEF player rated 99+ overall |

---

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + custom CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

---

## 📄 License

MIT
