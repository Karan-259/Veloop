# VELOOP Rewards – Watch Ads Page Complete UI/UX Redesign
> **Task 04 – Frontend Internship Task Assignment**  
> High-performance, gamified rewards terminal for streaming partner advertisements, earning **VEs (VELOOP Earn Tokens)**, and withdrawing real cash directly to bank accounts.

---

## 📌 Project Overview
**VELOOP Rewards** is a fintech-driven rewards platform where users convert their spare attention into tangible monetary value. The **Watch Ads** module is one of the core earning pillars of the ecosystem, allowing verified users to watch curated high-value brand campaigns in exchange for **VEs**.

This project is a complete from-scratch UI/UX redesign and redevelopment built with **React**, **Vite**, **Bootstrap 5**, and **CSS Modules**. It delivers a premium, trustworthy dark-theme aesthetic, seamless micro-animations, gamified progress tracking, and bank-grade conversion clarity.

---

## ✨ Key Features

### 1. 🛡️ Top Tier Brand Navbar & Wallet Bar
- **Live VEs Balance**: Real-time animated counter tracking total accumulated tokens.
- **Instant Fiat Valuation**: Auto-converting token display (`12,450 VEs ≈ $124.50 USD`).
- **Verified Bank Connection Pill**: Displays linked direct deposit account status (`Chase •••• 8821`).
- **Audio Feedback Synthesizer**: Built-in procedural Web Audio API sound effects with a 1-click mute/unmute toggle.
- **User Membership Tier**: Visual indicator showcasing account privileges (`Gold Tier`).

### 2. ⚡ Dynamic Hero & Daily Goal Tracker
- **Compelling Value Proposition**: High-converting headline with verified partner assurance.
- **SVG Circular Progress Ring**: Visual daily target tracker displaying completion percentage (e.g., `48%` toward the `200 VEs` daily goal).
- **Streak Multiplier**: Daily streak counter (`4 Day Streak 🔥`) incentivizing daily engagement.
- **Quick Jump CTAs**: 1-click smooth scroll navigation to available ads or withdrawal transparency guides.

### 3. 📊 Visual Statistics Section
- **Real-Time Dynamic Metrics**:
  - `Today's Earnings` (96 VEs / +18% today)
  - `Total Lifetime VEs` (12,450 VEs)
  - `Weekly Earnings` (1,260 VEs)
  - `Ads Watched Today` (5 views)
  - `Remaining Ads Available` (12 inventory items)
- **Smooth Number Easing**: Custom `useAnimatedCounter` hook animating metric updates upon every claimed reward.

### 4. 🎁 Limited-Time Power Hour Bonus Banner
- **Live Countdown Timer**: Real-time ticking countdown (`HH:MM:SS`) for flash multiplier promotions.
- **High-Yield Multiplier**: `2.5x` bonus reward spotlighting limited-time partner campaigns.
- **Direct Engagement CTA**: Triggers instant high-yield promotional ad viewing.

### 5. 🎬 Modern Ad Cards & Filter Suite
- **Rich Visual Creatives**: High-resolution 3D renders representing fintech, cloud AI, Web3, gaming, and quantum tech sponsors.
- **Campaign Metadata**: Duration badges (`15s`, `20s`, `30s`, `45s`), reward amounts (`+38 VEs`, `+25 VEs`, `+15 VEs`), and category tags.
- **Category Filter Tabs**: Filter by `All Campaigns`, `High Yield (+30 VEs)`, `Quick Watch (≤20s)`, `FinTech`, and `Tech & AI`.
- **Status Filter Pills**: Quick toggle between `All`, `Available`, and `Watched` campaigns.
- **Real-time Search Filter**: Instant brand and category keyword search.

### 6. 📺 Interactive Ad Player Modal & Reward Claim
- **Video Simulation Interface**: Clean modern media player framing sponsor creatives and campaign details.
- **Live Countdown Progress Bar**: Top glowing progress bar with play/pause simulation.
- **Developer / Evaluator "Fast Test (2s)" Mode**: Toggle to accelerate the countdown for rapid grading and feature demonstration without waiting 30 seconds.
- **Celebration Particle FX**: Full-screen celebratory confetti (`canvas-confetti`) upon reward collection.
- **Audio Fanfare**: Satisfying harmonic chime upon successful token deposit.
- **State Transition**: Instant transition from `Available` to disabled `Reward Claimed` state.

### 7. 📜 Live Activity Ledger (Earnings Timeline)
- Real-time audit log tracking recently completed ads and streak bonuses with timestamps and token amounts.
- Dynamically prepends newly completed ads with a `Just now` indicator.

### 8. 🏦 Transparent Reward Ecosystem & Conversion Calculator
- **3-Step Explainer Cards**: Clear explanation of ad viewing, token minting, and direct bank transfer.
- **Interactive Slider Calculator**: Users can slide between `500 VEs` and `10,000 VEs` to calculate real-time USD and INR cashout equivalents (`100 VEs = $1.00 USD`).
- Zero withdrawal fees, instant 2-hour ACH transfer speed assurances.

---

## 🛠️ Technology Stack
- **Core**: React 19, JavaScript (ESNext)
- **Bundler & Dev Server**: Vite 8
- **Layout & Grid**: Bootstrap 5 (`bootstrap/dist/css/bootstrap.min.css`)
- **Styling Architecture**: Scoped CSS Modules (`*.module.css`) + CSS Custom Properties Design Tokens (`variables.css`)
- **Icons**: `lucide-react`
- **Celebration FX**: `canvas-confetti`
- **Micro-Animations**: Framer Motion & CSS3 Keyframes
- **Audio Synthesis**: Web Audio API (zero external audio file dependencies)

---

## 📂 Project Structure
```
VELOOP/
├── public/
├── src/
│   ├── assets/
│   │   └── images/                # High-res sponsor campaign visual assets
│   │       ├── ad-fintech.jpg
│   │       ├── ad-ai-cloud.jpg
│   │       ├── ad-crypto.jpg
│   │       ├── ad-gaming.jpg
│   │       ├── ad-neobank.jpg
│   │       └── ad-quantum.jpg
│   ├── components/
│   │   ├── Navbar/                # Live balance, bank badge, sound toggle, tier pill
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── HeroSection/           # Headline, SVG progress ring, quick stats
│   │   │   ├── HeroSection.jsx
│   │   │   └── HeroSection.module.css
│   │   ├── StatsSection/          # 5-card dynamic animated counter grid
│   │   │   ├── StatsSection.jsx
│   │   │   └── StatsSection.module.css
│   │   ├── BonusBanner/           # Live countdown timer & flash promo banner
│   │   │   ├── BonusBanner.jsx
│   │   │   └── BonusBanner.module.css
│   │   ├── AdCard/                # High-yield cards with badges, durations & CTAs
│   │   │   ├── AdCard.jsx
│   │   │   └── AdCard.module.css
│   │   ├── AdPlayerModal/         # Interactive ad player, Fast Test mode, claim action
│   │   │   ├── AdPlayerModal.jsx
│   │   │   └── AdPlayerModal.module.css
│   │   ├── EarningsTimeline/      # Live activity audit feed
│   │   │   ├── EarningsTimeline.jsx
│   │   │   └── EarningsTimeline.module.css
│   │   ├── RewardInfo/            # 3-step withdrawal guide & interactive slider calculator
│   │   │   ├── RewardInfo.jsx
│   │   │   └── RewardInfo.module.css
│   │   └── EmptyState/            # Filter empty & all-completed states with demo reset
│   │       ├── EmptyState.jsx
│   │       └── EmptyState.module.css
│   ├── hooks/
│   │   ├── useAdWatch.js          # Core state hook (ads, metrics, filters, claim logic)
│   │   └── useAnimatedCounter.js  # Cubic easing number increment animation
│   ├── pages/
│   │   ├── WatchAds.jsx           # Main page orchestrator
│   │   └── WatchAds.module.css    # Page-level styles
│   ├── styles/
│   │   ├── variables.css          # Design tokens (obsidian theme, glass, neon accents)
│   │   └── global.css             # Bootstrap imports, scrollbars, resets
│   ├── utils/
│   │   ├── dummyData.js           # Initial campaigns, metrics, and promos
│   │   ├── formatters.js          # VE-to-USD/INR currency conversion and numbers
│   │   └── soundEffects.js        # Web Audio API procedural sound synthesizer
│   ├── App.jsx
│   ├── main.jsx
│   ├── WatchAds.jsx               # Folder-structure root re-export
│   └── WatchAds.module.css        # Folder-structure root re-export
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Installation & Setup Guide

### Prerequisites
- **Node.js**: v18.0.0 or later (Node v20+ recommended)
- **npm**: v9.0.0 or later

### Step-by-Step Setup
1. **Clone or Navigate to the Project Directory**:
   ```bash
   cd c:\Users\raik9\Documents\VELOOP
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` or `http://127.0.0.1:5173` in your browser.

4. **Production Build Verification**:
   ```bash
   npm run build
   ```
   Build artifacts will be compiled to the `/dist` directory.

---

## 💡 Evaluation Tips & Testing Shortcuts
- **Fast Test Mode**: When clicking **"Watch Advertisement"**, click the **"Enable Fast Test (2s)"** button at the top of the modal to accelerate the countdown timer to 2 seconds for rapid evaluation.
- **Reset Demo State**: Click the **"Reset State"** button located next to the search input on the ad inventory bar at any time to restore initial sample data.
- **Sound Toggle**: Use the speaker icon in the top navigation bar to test or mute procedural sound effects.

---

## 👤 Author Information
- **Internship Program**: VELOOP Rewards Frontend Internship Program
- **Assignment**: Task 04 – Watch Ads Page Complete UI/UX Redesign
- **Candidate**: Raik9 / Frontend Engineering Intern
