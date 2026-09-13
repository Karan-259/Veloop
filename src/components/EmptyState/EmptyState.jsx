import React from 'react';
import { SearchX, RotateCcw, Sparkles, Trophy, RefreshCw } from 'lucide-react';
import styles from './EmptyState.module.css';

export default function EmptyState({ type = 'no_ads', onResetFilters, onResetAllAds }) {
  if (type === 'all_completed') {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.iconCircleSuccess}>
          <Trophy size={32} />
        </div>
        <div className={styles.sparkleRow}>
          <Sparkles size={14} className={styles.spark} />
          <Sparkles size={10} className={styles.spark2} />
          <Sparkles size={12} className={styles.spark3} />
        </div>
        <h3 className={styles.emptyTitle}>All Ads Watched! 🎉</h3>
        <p className={styles.emptyDesc}>
          Incredible work! You've maximized today's available ad campaigns and earned every VE on the table.
          New brand campaigns refresh every 4 hours.
        </p>
        <div className={styles.statRow}>
          <div className={styles.statChip}>
            <span className={styles.statChipLabel}>Status</span>
            <span className={styles.statChipValue}>All Complete</span>
          </div>
          <div className={styles.statChip}>
            <span className={styles.statChipLabel}>Next refresh</span>
            <span className={styles.statChipValue}>~4 hours</span>
          </div>
        </div>
        <button id="empty-reset-all-btn" onClick={onResetAllAds} className={styles.resetButton}>
          <RefreshCw size={15} />
          <span>Reset Demo Ads (For Evaluation)</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconCircle}>
        <SearchX size={30} />
      </div>
      <h3 className={styles.emptyTitle}>No Ads Match Your Filter</h3>
      <p className={styles.emptyDesc}>
        Try clearing your search query or selecting a different category to browse available campaigns.
      </p>
      <button id="empty-clear-filters-btn" onClick={onResetFilters} className={styles.resetButton}>
        <RotateCcw size={15} />
        <span>Clear Filters</span>
      </button>
    </div>
  );
}
