# VELOOP Rewards – 

## Project Overview
**VELOOP Rewards** is a fintech-driven rewards platform where users convert their spare attention into tangible monetary value. The **Watch Ads** module is one of the core earning pillars of the ecosystem, allowing verified users to watch curated high-value brand campaigns in exchange for **VEs**.

This project is a complete from-scratch UI/UX redesign and redevelopment built with **React**, **Vite**, **Bootstrap 5**, and **CSS Modules**. It delivers a premium, trustworthy dark-theme aesthetic, seamless micro-animations, gamified progress tracking, and bank-grade conversion clarity.

---

## Key Features

### 1. Top Tier Brand Navbar & Wallet Bar
- **Live VEs Balance**: Real-time animated counter tracking total accumulated tokens.
- **Instant Fiat Valuation**: Auto-converting token display (`12,450 VEs ≈ $124.50 USD`).
- **Audio Feedback Synthesizer**: Built-in procedural Web Audio API sound effects with a 1-click mute/unmute toggle.

### 2. Dynamic Hero & Daily Goal Tracker
- **Compelling Value Proposition**: High-converting headline with verified partner assurance.
- **SVG Circular Progress Ring**: Visual daily target tracker displaying completion percentage (e.g., `48%` toward the `200 VEs` daily goal).
- **Streak Multiplier**: Daily streak counter (`4 Day Streak 🔥`) incentivizing daily engagement.
- **Quick Jump CTAs**: 1-click smooth scroll navigation to available ads or withdrawal transparency guides.

### 3. Visual Statistics Section
- **Real-Time Dynamic Metrics**:
  - `Today's Earnings` (96 VEs / +18% today)
  - `Total Lifetime VEs` (12,450 VEs)
  - `Weekly Earnings` (1,260 VEs)
  - `Ads Watched Today` (5 views)
  - `Remaining Ads Available` (12 inventory items)
- **Smooth Number Easing**: Custom `useAnimatedCounter` hook animating metric updates upon every claimed reward.

### 4. Limited-Time Power Hour Bonus Banner
- **Live Countdown Timer**: Real-time ticking countdown (`HH:MM:SS`) for flash multiplier promotions.
- **High-Yield Multiplier**: `2.5x` bonus reward spotlighting limited-time partner campaigns.
- **Direct Engagement CTA**: Triggers instant high-yield promotional ad viewing.

### 5. Modern Ad Cards & Filter Suite
- **Rich Visual Creatives**: High-resolution 3D renders representing fintech, cloud AI, Web3, gaming, and quantum tech sponsors.
- **Campaign Metadata**: Duration badges (`15s`, `20s`, `30s`, `45s`), reward amounts (`+38 VEs`, `+25 VEs`, `+15 VEs`), and category tags.
- **Category Filter Tabs**: Filter by `All Campaigns`, `High Yield (+30 VEs)`, `Quick Watch (≤20s)`, `FinTech`, and `Tech & AI`.
- **Status Filter Pills**: Quick toggle between `All`, `Available`, and `Watched` campaigns.
- **Real-time Search Filter**: Instant brand and category keyword search.

### 6. Interactive Ad Player Modal & Reward Claim
- **Video Simulation Interface**: Clean modern media player framing sponsor creatives and campaign details.
- **Live Countdown Progress Bar**: Top glowing progress bar with play/pause simulation.
- **Celebration Particle FX**: Full-screen celebratory confetti (`canvas-confetti`) upon reward collection.
- **Audio Fanfare**: Satisfying harmonic chime upon successful token deposit.
- **State Transition**: Instant transition from `Available` to disabled `Reward Claimed` state.

### 7. Live Activity Ledger
- Real-time audit log tracking recently completed ads and streak bonuses with timestamps and token amounts.
- Dynamically prepends newly completed ads with a `Just now` indicator.

### 8. Transparent Reward Ecosystem & Conversion Calculator
- **3-Step Explainer Cards**: Clear explanation of ad viewing, token minting, and direct bank transfer.
- **Interactive Slider Calculator**: Users can slide between `500 VEs` and `10,000 VEs` to calculate real-time USD and INR cashout equivalents (`100 VEs = $1.00 USD`).
- Zero withdrawal fees, instant 2-hour ACH transfer speed assurances.

---

## 🛠️ Technology Stack
- React.js
- Vite
- Bootstrap 5
- CSS Modules (.module.css)
- React Icons
- Lucide React
- React Hooks
- Canvas-confetti
- Framer Motion & CSS3 Keyframes
- Web Audio API

---

## 📂 Project Structure
```
VELOOP/
├── public/
├── src/
│   ├── assets/
│   │   └── images/               
│   │       ├── ad-fintech.jpg
│   │       ├── ad-ai-cloud.jpg
│   │       ├── ad-crypto.jpg
│   │       ├── ad-gaming.jpg
│   │       ├── ad-neobank.jpg
│   │       └── ad-quantum.jpg
│   ├── components/
│   │   ├── Navbar/                
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── HeroSection/           
│   │   │   ├── HeroSection.jsx
│   │   │   └── HeroSection.module.css
│   │   ├── StatsSection/         
│   │   │   ├── StatsSection.jsx
│   │   │   └── StatsSection.module.css
│   │   ├── BonusBanner/          
│   │   │   ├── BonusBanner.jsx
│   │   │   └── BonusBanner.module.css
│   │   ├── AdCard/              
│   │   │   ├── AdCard.jsx
│   │   │   └── AdCard.module.css
│   │   ├── AdPlayerModal/         
│   │   │   ├── AdPlayerModal.jsx
│   │   │   └── AdPlayerModal.module.css
│   │   ├── EarningsTimeline/      
│   │   │   ├── EarningsTimeline.jsx
│   │   │   └── EarningsTimeline.module.css
│   │   ├── RewardInfo/            
│   │   │   ├── RewardInfo.jsx
│   │   │   └── RewardInfo.module.css
│   │   └── EmptyState/            
│   │       ├── EmptyState.jsx
│   │       └── EmptyState.module.css
│   ├── hooks/
│   │   ├── useAdWatch.js          
│   │   └── useAnimatedCounter.js  
│   ├── pages/
│   │   ├── WatchAds.jsx           
│   │   └── WatchAds.module.css    
│   ├── styles/
│   │   ├── variables.css          
│   │   └── global.css             
│   ├── utils/
│   │   ├── dummyData.js           
│   │   ├── formatters.js          
│   │   └── soundEffects.js        
│   ├── App.jsx
│   ├── main.jsx
│   ├── WatchAds.jsx               
│   └── WatchAds.module.css        
├── index.html
├── package.json
└── vite.config.js
```

---

##  Installation & Setup Guide

### Step-by-Step Setup
1. **Clone and Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` or `http://127.0.0.1:5173` in your browser.
---