import { useState } from 'react';
import { Play, Check, Clock} from 'lucide-react';
import { formatSeconds, veToUSD } from '../../utils/formatters';
import styles from './AdCard.module.css';

export default function AdCard({ ad, onWatchClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const isCompleted = ad.status === 'completed';


  return (
    <div
      className={`${styles.cardWrapper} ${isCompleted ? styles.completedCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img
          src={ad.image}
          alt={ad.title}
          className={styles.adImage}
          loading="lazy"
        />
        <div className={styles.imageOverlay} />

        <div className={styles.topBadgeRow}>
          <span>
            
          </span>

          <span className={styles.durationPill}>
            <Clock size={12} className="me-1" />
            {formatSeconds(ad.duration)}
          </span>
        </div>

        <div className={styles.statusIndicator}>
          {isCompleted ? (
            <span className={styles.statusCompletedPill}>
              <Check size={12} className="me-1" /> Watched
            </span>
          ) : (
            <span className={styles.statusAvailablePill}>
              <span className="status-dot available me-1" /> Available
            </span>
          )}
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.sponsorRow}>
          <span className={styles.sponsorName}>{ad.sponsor}</span>
          <span className={styles.categoryTag}>{ad.categoryLabel}</span>
        </div>

        <h3 className={styles.adTitle}>{ad.title}</h3>
        <p className={styles.adDesc}>{ad.description}</p>

        <div className={styles.rewardSummaryRow}>
          <div>
            <span className={styles.rewardSubtext}>Reward Payout</span>
            <div className={styles.veAmount}>
              +{ad.reward} <span className={styles.veUnit}>VEs</span>
            </div>
          </div>
          <div className={styles.fiatTag}>
            ≈ {veToUSD(ad.reward)}
          </div>
        </div>
        <button
          onClick={() => !isCompleted && onWatchClick(ad)}
          disabled={isCompleted}
          className={`${styles.ctaButton} ${isCompleted ? styles.buttonCompleted : styles.buttonAvailable}`}
          aria-label={isCompleted ? 'Reward Already Collected' : `Watch ${ad.title}`}
        >
          {isCompleted ? (
            <>
              <Check size={18} className="me-1" />
              <span>Reward Claimed (+{ad.reward} VEs)</span>
            </>
          ) : (
            <>
              <Play size={17} className={styles.playIcon} fill="currentColor" />
              <span>Watch Advertisement</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
