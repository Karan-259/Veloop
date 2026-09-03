import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_ADS_DATA, INITIAL_USER_METRICS, INITIAL_EARNINGS_TIMELINE } from '../utils/dummyData';
import { soundManager } from '../utils/soundEffects';

export function useAdWatch() {
  const [ads, setAds] = useState(INITIAL_ADS_DATA);
  const [userMetrics, setUserMetrics] = useState(INITIAL_USER_METRICS);
  const [activeAd, setActiveAd] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all'); // all, available, completed
  const [searchQuery, setSearchQuery] = useState('');
  const [timeline, setTimeline] = useState(INITIAL_EARNINGS_TIMELINE);
  const [lastEarnedReward, setLastEarnedReward] = useState(null);

  // Trigger celebratory confetti effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#10b981', '#06b6d4', '#f59e0b', '#3b82f6', '#ffffff']
    });
  };

  const startWatching = (ad) => {
    soundManager.playClick();
    setActiveAd(ad);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveAd(null);
  };

  const completeWatching = (adId) => {
    const targetAd = ads.find((a) => a.id === adId);
    if (!targetAd) return;

    // Update ad status to completed
    setAds((prev) =>
      prev.map((item) => (item.id === adId ? { ...item, status: 'completed' } : item))
    );

    // Update user balance and metrics
    const earnedAmount = targetAd.reward;
    setUserMetrics((prev) => ({
      ...prev,
      todayEarnings: prev.todayEarnings + earnedAmount,
      lifetimeEarnings: prev.lifetimeEarnings + earnedAmount,
      weeklyEarnings: prev.weeklyEarnings + earnedAmount,
      completedAdsCount: prev.completedAdsCount + 1,
      availableAdsCount: Math.max(0, prev.availableAdsCount - 1)
    }));

    // Add entry to timeline
    const newEntry = {
      id: `earn-${Date.now()}`,
      adTitle: targetAd.title,
      amount: earnedAmount,
      time: 'Just now',
      type: 'ad_watch'
    };
    setTimeline((prev) => [newEntry, ...prev]);

    // Play fanfare and trigger confetti
    soundManager.playRewardFanfare();
    triggerConfetti();
    setLastEarnedReward(earnedAmount);

    closeModal();
  };

  const resetAllAds = () => {
    soundManager.playClick();
    setAds(INITIAL_ADS_DATA);
    setUserMetrics(INITIAL_USER_METRICS);
    setTimeline(INITIAL_EARNINGS_TIMELINE);
    setLastEarnedReward(null);
  };

  // Filtered ads list
  const filteredAds = useMemo(() => {
    return ads.filter((ad) => {
      // Category filter
      if (activeCategory === 'high-yield' && ad.badgeVariant !== 'gold') return false;
      if (activeCategory === 'quick' && ad.duration > 20) return false;
      if (activeCategory !== 'all' && activeCategory !== 'high-yield' && activeCategory !== 'quick') {
        if (ad.category !== activeCategory) return false;
      }

      // Status filter
      if (statusFilter === 'available' && ad.status !== 'available') return false;
      if (statusFilter === 'completed' && ad.status !== 'completed') return false;

      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = ad.title.toLowerCase().includes(q);
        const matchesSponsor = ad.sponsor.toLowerCase().includes(q);
        const matchesCategory = ad.categoryLabel.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSponsor && !matchesCategory) return false;
      }

      return true;
    });
  }, [ads, activeCategory, statusFilter, searchQuery]);

  return {
    ads,
    filteredAds,
    userMetrics,
    activeAd,
    isModalOpen,
    activeCategory,
    statusFilter,
    searchQuery,
    timeline,
    lastEarnedReward,
    setActiveCategory,
    setStatusFilter,
    setSearchQuery,
    startWatching,
    closeModal,
    completeWatching,
    resetAllAds
  };
}
