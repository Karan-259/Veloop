import { useState } from 'react';
import { Play, Check, Clock, Zap, Star } from 'lucide-react';
import { formatSeconds, veToUSD } from '../../utils/formatters';
import styles from './AdCard.module.css';

const BADGE_CONFIG = {
  gold:    { label: 'High Yield',      cls: 'badgeGold' },
  cyan:    { label: 'Featured',        cls: 'badgeCyan' },
  purple:  { label: 'Trending',        cls: 'badgePurple' },
  emerald: { label: 'Quick Watch',     cls: 'badgeEmerald' },
};

export default function AdCard({ ad, onWatchClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const isCompleted = ad.status === 'completed';
  const badge = BADGE_CONFIG[ad.badgeVariant];

  return (
    <div
      className={`${styles.cardWrapper} ${isCompleted ? styles.completedCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Image Container ── */}
      <div className={styles.imageContainer}>
        <img
          src={ad.image}
          alt={ad.title}
          className={`${styles.adImage} ${isHovered && !isCompleted ? styles.imageZoomed : ''}`}
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className={styles.imageOverlay} />

        {/* Top badges */}
        <div className={styles.topBadgeRow}>
          {badge && (
            <span className={`${styles.variantBadge} ${styles[badge.cls]}`}>
              <Star size={10} className="me-1" fill="currentColor" />
              {badge.label}
            </span>
          )}
          <span className={styles.durationPill}>
            <Clock size={11} className="me-1" />
            {formatSeconds(ad.duration)}
          </span>
        </div>

        {/* Status pill (bottom left) */}
        <div className={styles.statusIndicator}>
          {isCompleted ? (
            <span className={styles.statusCompletedPill}>
              <Check size={11} className="me-1" /> Watched
            </span>
          ) : (
            <span className={styles.statusAvailablePill}>
              <span className="status-dot available me-1" /> Available
            </span>
          )}
        </div>

        {/* Play overlay on hover */}
        {!isCompleted && (
          <div className={`${styles.playOverlay} ${isHovered ? styles.playOverlayVisible : ''}`}>
            <div className={styles.playButton}>
              <Play size={22} fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className={styles.cardBody}>
        <div className={styles.sponsorRow}>
          <span className={styles.categoryTag}>{ad.categoryLabel}</span>
          <span className={styles.sponsorName}>{ad.sponsor}</span>
        </div>

        <h3 className={styles.adTitle}>{ad.title}</h3>
        <p className={styles.adDesc}>{ad.description}</p>

        {/* Reward row */}
        <div className={styles.rewardRow}>
          <div className={styles.rewardLeft}>
            <span className={styles.rewardLabel}>Reward</span>
            <div className={styles.veAmount}>
              <Zap size={14} className={styles.zapIcon} />
              +{ad.reward} <span className={styles.veUnit}>VEs</span>
            </div>
          </div>
          <div className={styles.rewardRight}>
            <span className={styles.rewardLabel}>Cash Value</span>
            <span className={styles.cashValue}>{veToUSD(ad.reward)}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          id={`ad-watch-${ad.id}`}
          onClick={() => !isCompleted && onWatchClick(ad)}
          disabled={isCompleted}
          className={`${styles.ctaButton} ${isCompleted ? styles.buttonCompleted : styles.buttonAvailable}`}
          aria-label={isCompleted ? 'Reward Already Collected' : `Watch ${ad.title}`}
        >
          {isCompleted ? (
            <>
              <Check size={16} />
              <span>+{ad.reward} VEs Reward Claimed</span>
            </>
          ) : (
            <>
              <Play size={15} fill="currentColor" />
              <span>Watch Advertisement</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
