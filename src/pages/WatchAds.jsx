import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import StatsSection from '../components/StatsSection/StatsSection';
import RewardInfo from '../components/RewardInfo/RewardInfo';
import BonusBanner from '../components/BonusBanner/BonusBanner';
import AdCard from '../components/AdCard/AdCard';
import AdPlayerModal from '../components/AdPlayerModal/AdPlayerModal';
import EarningsTimeline from '../components/EarningsTimeline/EarningsTimeline';
import EmptyState from '../components/EmptyState/EmptyState';
import { useAdWatch } from '../hooks/useAdWatch';
import { Search, RefreshCw, LayoutGrid, Zap } from 'lucide-react';
import bonusLockedImg from '../assets/images/bonus-locked.jpg';
import styles from './WatchAds.module.css';

const BONUS_VIDEO_AD = {
  id: 'bonus-promo-50',
  title: 'Limited-Time Power Hour Mystery Box',
  sponsor: 'VELOOP Prime Network',
  category: 'bonus',
  categoryLabel: 'Special Bonus Promo',
  reward: 50,
  duration: 15,
  badge: 'Exclusive Bonus',
  badgeVariant: 'gold',
  status: 'available',
  image: bonusLockedImg,
  video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  description: 'Complete watching this sponsored showcase video to unlock and claim your +50 VE bonus tokens instantly.',
  tagline: 'Sponsor: VELOOP Prime Network'
};

export default function WatchAds() {
  const {
    ads,
    filteredAds,
    userMetrics,
    activeAd,
    isModalOpen,
    activeCategory,
    statusFilter,
    searchQuery,
    timeline,
    isBonusClaimed,
    setActiveCategory,
    setStatusFilter,
    setSearchQuery,
    startWatching,
    closeModal,
    completeWatching,
    resetAllAds
  } = useAdWatch();

  const categories = [
    { id: 'all',       label: 'All Campaigns',         count: ads.length },
    { id: 'high-yield',label: '⚡ High Yield (+30 VEs)', count: ads.filter((a) => a.badgeVariant === 'gold').length },
    { id: 'quick',     label: '⏱️ Quick Watch (≤20s)',  count: ads.filter((a) => a.duration <= 20).length },
    { id: 'fintech',   label: '💳 FinTech',             count: ads.filter((a) => a.category === 'fintech').length },
    { id: 'tech',      label: '🤖 Tech & AI',           count: ads.filter((a) => a.category === 'tech' || a.category === 'crypto').length }
  ];

  const handleClaimBonusClick = () => {
    startWatching(BONUS_VIDEO_AD);
  };

  const scrollToAds = () => {
    const el = document.getElementById('available-ads');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const allAdsCompleted = ads.every((a) => a.status === 'completed');

  return (
    <div className={styles.pageContainer}>
      <Navbar
        lifetimeEarnings={userMetrics.lifetimeEarnings}
        todayEarnings={userMetrics.todayEarnings}
        userTier={userMetrics.userTier}
      />

      <HeroSection
        todayEarnings={userMetrics.todayEarnings}
        dailyGoal={userMetrics.dailyGoal}
        availableCount={userMetrics.availableAdsCount}
        completedCount={userMetrics.completedAdsCount}
        currentStreak={userMetrics.currentStreak}
        onExploreClick={scrollToAds}
        onHowItWorksClick={scrollToHowItWorks}
      />

      <StatsSection
        todayEarnings={userMetrics.todayEarnings}
        lifetimeEarnings={userMetrics.lifetimeEarnings}
        weeklyEarnings={userMetrics.weeklyEarnings}
        availableAdsCount={userMetrics.availableAdsCount}
        completedAdsCount={userMetrics.completedAdsCount}
      />

      <BonusBanner
        onClaimBonus={handleClaimBonusClick}
        isClaimed={isBonusClaimed}
      />

      <main id="available-ads" className={styles.mainInventorySection}>
        <div className="container-fluid px-lg-5 px-3">

          <div className={styles.inventoryHeader}>
            <div className={styles.inventoryTitleGroup}>
              <div className={styles.inventoryEyebrow}>
                <LayoutGrid size={11} />
                Ad Inventory
              </div>
              <h2 className={styles.inventoryTitle}>
                Available{' '}
                <span className={styles.inventoryTitleSpan}>Advertisements</span>
              </h2>
            </div>

            <div className={styles.headerActionGroup}>
              <div className={styles.searchBox}>
                <Search size={15} className={styles.searchIcon} />
                <input
                  id="ad-search-input"
                  type="text"
                  placeholder="Search brand or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <button
                id="reset-demo-btn"
                onClick={resetAllAds}
                className={styles.resetDemoBtn}
                title="Reset watched ads for repeated review"
              >
                <RefreshCw size={14} />
                <span className="d-none d-sm-inline">Reset State</span>
              </button>
            </div>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.categoryTabs}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.catTab} ${activeCategory === cat.id ? styles.catTabActive : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className={styles.tabCount}>{cat.count}</span>
                </button>
              ))}
            </div>

            <div className={styles.statusPills}>
              <button
                id="status-all"
                onClick={() => setStatusFilter('all')}
                className={`${styles.statusFilterBtn} ${statusFilter === 'all' ? styles.statusFilterActive : ''}`}
              >
                All
              </button>
              <button
                id="status-available"
                onClick={() => setStatusFilter('available')}
                className={`${styles.statusFilterBtn} ${statusFilter === 'available' ? styles.statusFilterActive : ''}`}
              >
                Available ({ads.filter((a) => a.status === 'available').length})
              </button>
              <button
                id="status-completed"
                onClick={() => setStatusFilter('completed')}
                className={`${styles.statusFilterBtn} ${statusFilter === 'completed' ? styles.statusFilterActive : ''}`}
              >
                Watched ({ads.filter((a) => a.status === 'completed').length})
              </button>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-9 col-lg-8 col-12">
              {filteredAds.length === 0 ? (
                <EmptyState
                  type={allAdsCompleted ? 'all_completed' : 'no_ads'}
                  onResetFilters={() => {
                    setActiveCategory('all');
                    setStatusFilter('all');
                    setSearchQuery('');
                  }}
                  onResetAllAds={resetAllAds}
                />
              ) : (
                <div className="row g-4">
                  {filteredAds.map((ad) => (
                    <div key={ad.id} className="col-xl-4 col-md-6 col-12">
                      <AdCard ad={ad} onWatchClick={startWatching} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-xl-3 col-lg-4 col-12">
              <EarningsTimeline timeline={timeline} />
            </div>
          </div>

        </div>
      </main>

      <RewardInfo />

      <footer className={styles.pageFooter}>
        <div className="container-fluid px-lg-5 px-3">
          <div className={styles.footerInner}>
            <div className={styles.footerBrandGroup}>
              <Zap size={16} style={{ color: '#8b5cf6' }} />
              <span className={styles.footerBrand}>VELOOP Rewards</span>
              <span className={styles.footerTagline}>· Watch · Earn · Withdraw</span>
            </div>
            <span className={styles.footerCopy}>
              © 2026 ApexDesign Inc. All rights reserved.
            </span>
          </div>
        </div>
      </footer>

      <AdPlayerModal
        ad={activeAd}
        isOpen={isModalOpen}
        onClose={closeModal}
        onComplete={completeWatching}
      />
    </div>
  );
}
