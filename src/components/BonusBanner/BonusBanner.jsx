import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ChevronRight, Gift } from 'lucide-react';
import { BONUS_PROMO } from '../../utils/dummyData';
import styles from './BonusBanner.module.css';

export default function BonusBanner({ onClaimBonus }) {
  const [timeLeft, setTimeLeft] = useState(BONUS_PROMO.endsInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatDigits = (num) => String(num).padStart(2, '0');

  return (
    <div className={styles.bonusBannerWrapper}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={styles.bannerInner}>
          {/* Left info */}
          <div className={styles.leftGroup}>
            <div className={styles.fireIconWrap}>
              <Flame size={24} className="text-warning" />
            </div>
            <div>
              <div className={styles.badgeRow}>
                <span className={styles.multiplierBadge}>
                  <Sparkles size={12} className="me-1" />
                  {BONUS_PROMO.multiplier} Multiplier Active
                </span>
                <span className={styles.bonusTag}>Limited-Time Power Hour</span>
              </div>
              <h4 className={styles.bannerTitle}>{BONUS_PROMO.title}</h4>
              <p className={styles.bannerDesc}>{BONUS_PROMO.description}</p>
            </div>
          </div>

          {/* Right group: Timer + Action CTA */}
          <div className={styles.rightGroup}>
            {/* Live Timer Countdown */}
            <div className={styles.timerBlock}>
              <span className={styles.timerLabel}>
                <Clock size={12} className="me-1" /> Ends in:
              </span>
              <div className={styles.timeDigits}>
                <span className={styles.timeSegment}>{formatDigits(hours)}h</span>
                <span className={styles.colon}>:</span>
                <span className={styles.timeSegment}>{formatDigits(minutes)}m</span>
                <span className={styles.colon}>:</span>
                <span className={styles.timeSegment}>{formatDigits(seconds)}s</span>
              </div>
            </div>

            {/* CTA button */}
            <button onClick={onClaimBonus} className={styles.claimButton}>
              <Gift size={16} />
              <span>Unlock +{BONUS_PROMO.bonusVE} VEs Bonus</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
