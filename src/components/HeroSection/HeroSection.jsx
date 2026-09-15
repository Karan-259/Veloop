import React from 'react';
import { PlayCircle, Flame, CheckCircle2, CircleAlert, ArrowRight, Sparkles } from 'lucide-react';
import { formatVEs, veToUSD } from '../../utils/formatters';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import styles from './HeroSection.module.css';

export default function HeroSection({
  todayEarnings,
  dailyGoal,
  availableCount,
  completedCount,
  currentStreak,
  onExploreClick,
  onHowItWorksClick
}) {
  const animatedToday = useAnimatedCounter(todayEarnings);
  const progressPercent = Math.min(Math.round((todayEarnings / dailyGoal) * 100), 100);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <section className={styles.heroSection}>
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />

      <div className="container-fluid px-lg-5 px-3">
        <div className="row align-items-center g-5">

          <div className="col-lg-7">
            <div className={styles.contentWrap}>
              <div className={styles.badgeRow}>
                <span className={styles.liveBadge}>
                  <span className="status-dot available me-2" />
                  Live Campaigns
                </span>
                <span className={styles.streakBadge}>
                  <Flame size={13} />
                  {currentStreak} Day Streak 🔥
                </span>
                <span className={styles.sparkBadge}>
                  <Sparkles size={12} />
                  Real Cash Payouts
                </span>
              </div>

              <h1 className={styles.title}>
                Watch Ads &amp;
                <span className={styles.titleGradient}>Earn Real Cash</span>
                <br />
              </h1>

              <p className={styles.heroDesc}>
                Stream premium brand advertisements from top partners and earn VELOOP Tokens (VEs) instantly.
                Every 100 VEs = $1.00 USD withdraw with zero fees.
              </p>

              <div className={styles.ctaGroup}>
                <button id="hero-watch-btn" onClick={onExploreClick} className={styles.primaryCta}>
                  <PlayCircle size={20} />
                  <span>Watch & Earn Now</span>
                  <ArrowRight size={16} className={styles.ctaArrow} />
                </button>

                <button id="hero-how-it-works-btn" onClick={onHowItWorksClick} className={styles.secondaryCta}>
                  <span>How Withdrawals Work</span>
                </button>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={14} className={styles.trustIcon} />
                  <span>Instant VE Crediting</span>
                </div>
                <span className={styles.trustDivider} />
                <div className={styles.trustItem}>
                  <CheckCircle2 size={14} className={styles.trustIcon} />
                  <span>Zero Withdrawal Fees</span>
                </div>
                <span className={styles.trustDivider} />
                <div className={styles.trustItem}>
                  <CheckCircle2 size={14} className={styles.trustIcon} />
                  <span>Bank-Grade Security</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.progressCard}>
              <div className={styles.progressCardHeader}>
                <div>
                  <span className={styles.subCardLabel}>Daily Earnings Target</span>
                  <h3 className={styles.goalTitle}>Goal: {dailyGoal} VEs</h3>
                </div>
                <div className={styles.fiatEquivBadge}>
                  {veToUSD(todayEarnings)} Earned
                </div>
              </div>

              <div className={styles.progressRingRow}>
                <div className={styles.svgRingWrap}>
                  <svg width="108" height="108" viewBox="0 0 108 108" className={styles.ringSvg}>
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f6ef7" />
                        <stop offset="55%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                      <filter id="ringGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="54" cy="54" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="transparent" />
                    <circle
                      cx="54" cy="54" r={radius}
                      stroke="url(#ringGrad)"
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      transform="rotate(-90 54 54)"
                      filter="url(#ringGlow)"
                      style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)' }}
                    />
                  </svg>
                  <div className={styles.ringInner}>
                    <span className={styles.ringPercent}>{progressPercent}%</span>
                    <span className={styles.ringLabel}>complete</span>
                  </div>
                </div>

                <div className={styles.ringStats}>
                  <div className={styles.todayEarningsBig}>
                    {formatVEs(animatedToday)}
                    <span className={styles.unitText}> VEs</span>
                  </div>
                  <p className={styles.remainingTargetText}>
                    {dailyGoal - todayEarnings > 0
                      ? `${dailyGoal - todayEarnings} VEs remaining to unlock milestone bonus`
                      : '🎉 Daily Goal Achieved! Bonus Unlocked!'}
                  </p>
                  <div className={styles.linearBar}>
                    <div
                      className={styles.linearBarFill}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.miniStatsGrid}>
                <div className={styles.miniStatItem}>
                  <div className={styles.miniStatIconWrap} data-type="available">
                    <CircleAlert size={13} />
                  </div>
                  <span className={styles.miniLabel}>Available</span>
                  <strong className={styles.miniValueText}>{availableCount} Ads</strong>
                </div>
                <div className={styles.miniStatDivider} />
                <div className={styles.miniStatItem}>
                  <div className={styles.miniStatIconWrap} data-type="completed">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className={styles.miniLabel}>Completed</span>
                  <strong className={styles.miniValueText}>{completedCount} Ads</strong>
                </div>
                <div className={styles.miniStatDivider} />
                <div className={styles.miniStatItem}>
                  <div className={styles.miniStatIconWrap} data-type="streak">
                    <Flame size={13} />
                  </div>
                  <span className={styles.miniLabel}>Streak</span>
                  <strong className={styles.miniValueText}>{currentStreak} Days</strong>
                </div>
              </div>

              <div className={styles.payoutStatusBadge}>
                <span className={styles.payoutDot} />
                <span>Eligible for Payout · Min 500 VEs threshold</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
