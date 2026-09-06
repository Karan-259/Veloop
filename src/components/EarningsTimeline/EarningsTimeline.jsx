import React from 'react';
import { History, Sparkles, Flame} from 'lucide-react';
import styles from './EarningsTimeline.module.css';

export default function EarningsTimeline({ timeline }) {
  return (
    <div className={`glass-panel ${styles.timelineCard}`}>
      <div className={styles.timelineHeader}>
        <div className="d-flex align-items-center gap-2">
          <History size={18}/>
          <h3 className={styles.timelineTitle}>Recent Earnings Activity</h3>
        </div>
        <span className={styles.livePulseBadge}>  Live Ledger</span>
      </div>

      <div className={styles.timelineList}>
        {timeline.map((item, index) => (
          <div key={item.id || index} className={styles.timelineItem}>
            <div className={styles.timelineDot}>
              {item.type === 'streak_bonus' ? (
                <Flame size={14} className="text-warning" />
              ) : (
                <Sparkles size={14} className="text-primary" />
              )}
            </div>

            <div className={styles.itemContent}>
              <div className={styles.itemTitleRow}>
                <span className={styles.itemTitle}>{item.adTitle}</span>
                <span className={styles.rewardGain}>+{item.amount} VEs</span>
              </div>
              <div className={styles.itemMetaRow}>
                <span className={styles.itemTime}>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
