import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ChevronRight, Gift, Zap, CheckCircle2 } from 'lucide-react';
import { BONUS_PROMO } from '../../utils/dummyData';
import bonusLockedImg from '../../assets/images/bonus-locked.jpg';
import bonusUnlockedImg from '../../assets/images/bonus-unlocked.jpg';
import styles from './BonusBanner.module.css';

export default function BonusBanner({ onClaimBonus, isClaimed }) {
  const [timeLeft, setTimeLeft] = useState(BONUS_PROMO.endsInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours   = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatDigits = (num) => String(num).padStart(2, '0');

  const bannerImageSrc = isClaimed ? bonusUnlockedImg : bonusLockedImg;

  return (
    <div className={styles.bonusBannerWrapper}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={`${styles.bannerInner} ${isClaimed ? styles.claimedBannerInner : ''}`}>
          {/* Subtle blurred backdrop from banner image */}
          <img
            src={bannerImageSrc}
            alt=""
            aria-hidden="true"
            className={styles.bgBackdrop}
          />

          {/* Background glow blobs */}
          <span className={styles.blobLeft} />
          <span className={styles.blobRight} />

          {/* ── Left group ── */}
          <div className={styles.leftGroup}>
            {/* Banner Image Preview Card */}
            <div className={`${styles.bannerImageContainer} ${isClaimed ? styles.imageClaimed : ''}`}>
              <img
                src={bannerImageSrc}
                alt={isClaimed ? "Bonus Unlocked +50 VE" : "Bonus Locked Mystery Box"}
                className={styles.bannerImage}
              />
              <div className={styles.imageOverlay} />
              <span className={`${styles.statusPill} ${isClaimed ? styles.statusPillClaimed : ''}`}>
                {isClaimed ? 'UNLOCKED +50 VE' : 'LOCKED +50 VE'}
              </span>
            </div>

            <div className={styles.bannerInfoWrap}>
              <div className={styles.badgeRow}>
                <span className={styles.multiplierBadge}>
                  <Zap size={11} className="me-1" />
                  {BONUS_PROMO.multiplier} Multiplier Active
                </span>
              </div>
              <h4 className={styles.bannerTitle}>
                {isClaimed ? 'Power Hour Bonus Unlocked! (+50 VE)' : BONUS_PROMO.title}
              </h4>
              <p className={styles.bannerDesc}>
                {isClaimed
                  ? 'Congratulations! You unlocked the Mystery Box and claimed +50 VEs bonus tokens into your wallet.'
                  : BONUS_PROMO.description}
              </p>
            </div>
          </div>

          {/* ── Right group ── */}
          <div className={styles.rightGroup}>
            {/* Countdown */}
            <div className={styles.countdownBlock}>
              <span className={styles.timerLabel}>
                <Clock size={11} className="me-1" />
                {isClaimed ? 'Bonus Session' : 'Ends in'}
              </span>
              <div className={styles.timeDigits}>
                <div className={styles.timeSegment}>
                  <span className={styles.timeValue}>{formatDigits(hours)}</span>
                  <span className={styles.timeUnit}>Hour</span>
                </div>
                <span className={styles.colon}>:</span>
                <div className={styles.timeSegment}>
                  <span className={styles.timeValue}>{formatDigits(minutes)}</span>
                  <span className={styles.timeUnit}>Minute</span>
                </div>
                <span className={styles.colon}>:</span>
                <div className={styles.timeSegment}>
                  <span className={styles.timeValue}>{formatDigits(seconds)}</span>
                  <span className={styles.timeUnit}>Second</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            {isClaimed ? (
              <button
                id="bonus-claim-btn"
                disabled
                className={`${styles.claimButton} ${styles.claimButtonDone}`}
              >
                <CheckCircle2 size={18} />
                <span>Claimed +{BONUS_PROMO.bonusVE} VE Bonus</span>
              </button>
            ) : (
              <button
                id="bonus-claim-btn"
                onClick={onClaimBonus}
                className={styles.claimButton}
              >
                <Gift size={16} />
                <span>Unlock +{BONUS_PROMO.bonusVE} VE Bonus</span>
                <ChevronRight size={15} className={styles.chevron} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
