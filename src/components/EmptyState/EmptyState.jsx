import React from 'react';
import { SearchX, RotateCcw, Sparkles } from 'lucide-react';
import styles from './EmptyState.module.css';

export default function EmptyState({ type = 'no_ads', onResetFilters, onResetAllAds }) {
  if (type === 'all_completed') {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.iconCircleSuccess}>
          <Sparkles size={36} className="text-warning" />
        </div>
        <h3 className={styles.emptyTitle}>You've Watched All Ads for Now!</h3>
        <p className={styles.emptyDesc}>
          Incredible work! You have maximized today's available ad campaign rewards. New brand campaigns are refreshed every 4 hours.
        </p>
        <button onClick={onResetAllAds} className={styles.resetButton}>
          <RotateCcw size={16} />
          <span>Reset Demo Ads (For Evaluation)</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconCircle}>
        <SearchX size={36} className="text-muted" />
      </div>
      <h3 className={styles.emptyTitle}>No Ads Match Your Filter</h3>
      <p className={styles.emptyDesc}>
        Try clearing your search query or selecting another category to view available campaigns.
      </p>
      <button onClick={onResetFilters} className={styles.resetButton}>
        <span>Clear Filters</span>
      </button>
    </div>
  );
}
