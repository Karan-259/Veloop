import fintechImg from '../assets/images/ad-fintech.jpg';
import aiCloudImg from '../assets/images/ad-ai-cloud.jpg';
import cryptoImg from '../assets/images/ad-crypto.jpg';
import gamingImg from '../assets/images/ad-gaming.jpg';
import neobankImg from '../assets/images/ad-neobank.jpg';
import quantumImg from '../assets/images/ad-quantum.jpg';

export const INITIAL_USER_METRICS = {
  todayEarnings: 96,
  dailyGoal: 200,
  lifetimeEarnings: 12450,
  weeklyEarnings: 1260,
  availableAdsCount: 12,
  completedAdsCount: 5,
  currentStreak: 4,
  userTier: 'Gold Tier',
  minWithdrawalThreshold: 500 // 500 VEs = $5.00
};

export const INITIAL_ADS_DATA = [
  {
    id: 'ad-01',
    title: 'Fintech Pro Global Card',
    sponsor: 'Fintech Pro Bank',
    category: 'fintech',
    categoryLabel: 'Fintech',
    reward: 38,
    duration: 30,
    badge: 'High Yield',
    badgeVariant: 'gold',
    status: 'available', // available | watching | completed
    image: fintechImg,
    description: 'Experience borderless smart banking with zero international transaction fees and 5% cashback.',
    tagline: 'Sponsor: Next-Gen Banking Solutions'
  },
  {
    id: 'ad-02',
    title: 'Neural Nexus AI Cloud',
    sponsor: 'Neural Nexus Inc',
    category: 'tech',
    categoryLabel: 'Cloud & AI',
    reward: 25,
    duration: 45,
    badge: 'Featured Partner',
    badgeVariant: 'cyan',
    status: 'available',
    image: aiCloudImg,
    description: 'Deploy high-performance neural clusters with scalable GPU acceleration in seconds.',
    tagline: 'Sponsor: Enterprise Cloud Infrastructure'
  },
  {
    id: 'ad-03',
    title: 'Decentralized Vault 3.0',
    sponsor: 'Aether Cryptography',
    category: 'crypto',
    categoryLabel: 'Web3 & Security',
    reward: 30,
    duration: 25,
    badge: 'Trending',
    badgeVariant: 'purple',
    status: 'available',
    image: cryptoImg,
    description: 'Ultra-secure cryptographic multi-sig cold storage for institutional digital asset protection.',
    tagline: 'Sponsor: Zero-Knowledge Security Protocol'
  },
  {
    id: 'ad-04',
    title: 'Nova Pro Esports Audio',
    sponsor: 'Nova Gaming Labs',
    category: 'gaming',
    categoryLabel: 'Gaming Gear',
    reward: 20,
    duration: 15,
    badge: 'Quick Watch',
    badgeVariant: 'emerald',
    status: 'available',
    image: gamingImg,
    description: 'Spatial 360-degree acoustic gaming headsets tuned for competitive esports champions.',
    tagline: 'Sponsor: Precision Gaming Hardware'
  },
  {
    id: 'ad-05',
    title: 'Aether Platinum Neobank',
    sponsor: 'Aether Pay Ltd',
    category: 'fintech',
    categoryLabel: 'Lifestyle & Rewards',
    reward: 35,
    duration: 35,
    badge: 'High Yield',
    badgeVariant: 'gold',
    status: 'available',
    image: neobankImg,
    description: 'Smart budget allocations, round-up investing, and concierge travel perks in a metal card.',
    tagline: 'Sponsor: Premium Lifestyle Banking'
  },
  {
    id: 'ad-06',
    title: 'Axon-9 Quantum Processor',
    sponsor: 'CyberMatrix Core',
    category: 'tech',
    categoryLabel: 'Next-Gen Tech',
    reward: 15,
    duration: 20,
    badge: 'Quick Watch',
    badgeVariant: 'emerald',
    status: 'available',
    image: quantumImg,
    description: 'Hardware encryption accelerator with military-grade tamper resistance for modern servers.',
    tagline: 'Sponsor: Next-Gen Quantum Hardware'
  }
];

export const BONUS_PROMO = {
  id: 'bonus-flash-01',
  title: 'Limited-Time Power Hour Bonus',
  multiplier: '2.5x',
  bonusVE: 50,
  sponsor: 'VELOOP Prime Network',
  endsInSeconds: 7420, // ~2h 3m
  description: 'Complete 3 consecutive video ads right now to unlock the +50 VEs Mystery Bonus Box.'
};

export const INITIAL_EARNINGS_TIMELINE = [
  {
    id: 'earn-1',
    adTitle: 'Fintech Pro Global Card',
    amount: 38,
    time: '12 mins ago',
    type: 'ad_watch'
  },
  {
    id: 'earn-2',
    adTitle: 'Nova Pro Esports Audio',
    amount: 20,
    time: '45 mins ago',
    type: 'ad_watch'
  },
  {
    id: 'earn-3',
    adTitle: 'Axon-9 Quantum Processor',
    amount: 15,
    time: '2 hours ago',
    type: 'ad_watch'
  },
  {
    id: 'earn-4',
    adTitle: 'Daily Login Reward',
    amount: 23,
    time: '5 hours ago',
    type: 'streak_bonus'
  }
];
