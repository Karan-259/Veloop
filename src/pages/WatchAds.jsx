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
import { Search, RefreshCw} from 'lucide-react';
import styles from './WatchAds.module.css';

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
    setActiveCategory,
    setStatusFilter,
    setSearchQuery,
    startWatching,
    closeModal,
    completeWatching,
    resetAllAds
  } = useAdWatch();

  const categories = [
    { id: 'all', label: 'All Campaigns', count: ads.length },
    { id: 'high-yield', label: '⚡ High Yield (+30 VEs)', count: ads.filter((a) => a.badgeVariant === 'gold').length },
    { id: 'quick', label: '⏱️ Quick Watch (≤20s)', count: ads.filter((a) => a.duration <= 20).length },
    { id: 'fintech', label: '💳 FinTech', count: ads.filter((a) => a.category === 'fintech').length },
    { id: 'tech', label: '🤖 Tech & AI', count: ads.filter((a) => a.category === 'tech' || a.category === 'crypto').length }
  ];

  const handleClaimBonusClick = () => {
    const bonusTarget = ads.find((a) => a.badgeVariant === 'gold' && a.status === 'available') || ads[0];
    startWatching(bonusTarget);
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

      <BonusBanner onClaimBonus={handleClaimBonusClick} />

      <main id="available-ads" className={styles.mainInventorySection}>
        <div className="container-fluid px-lg-5 px-3">
          <div className={styles.inventoryHeader}>
            <div>
              <h2 className={styles.inventoryTitle}>Available Advertisements</h2>
            </div>

            <div className={styles.headerActionGroup}>
              <div className={styles.searchBox}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search by brand or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

             <button
                onClick={resetAllAds}
                className={styles.resetDemoBtn}
                title="Reset watched ads for repeated review"
              >
                <RefreshCw size={15} />
                <span className="d-none d-sm-inline">Reset State</span>
              </button>
            </div>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.categoryTabs}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
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
                onClick={() => setStatusFilter('all')}
                className={`${styles.statusFilterBtn} ${statusFilter === 'all' ? styles.statusFilterActive : ''}`}
              >
                All Status
              </button>
              <button
                onClick={() => setStatusFilter('available')}
                className={`${styles.statusFilterBtn} ${statusFilter === 'available' ? styles.statusFilterActive : ''}`}
              >
                Available ({ads.filter((a) => a.status === 'available').length})
              </button>
              <button
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
            <div className="d-flex align-items-center gap-2">
              <span className={styles.footerBrand}>VELOOP Rewards</span>
            </div>
            <div className="text-secondary">
               &copy; 2026 ApexDesign Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <AdPlayerModal ad={activeAd}
        isOpen={isModalOpen}
        onClose={closeModal}
        onComplete={completeWatching}/>
    </div>
  );
}
