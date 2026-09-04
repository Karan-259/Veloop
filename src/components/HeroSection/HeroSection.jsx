import React from 'react';
import { PlayCircle, Flame, CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';
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

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <section className={styles.heroSection}>
      <div className="container-fluid px-lg-5 px-3">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className={styles.badgeRow}>
              <span className={styles.liveBadge}>
                <span className="status-dot available me-2" />
                Live Earning Pool Active
              </span>
              <span className={styles.streakBadge}>
                <Flame size={14} className="text-warning" />
                {currentStreak} Day Streak 🔥
              </span>
            </div>

            <h1 className={styles.title}>
              Watch Ads & Earn <span className={styles.titleGradient}>Real Cash</span>
            </h1>

            <p className={styles.description}>
              Transform your spare moments into verified <strong>VELOOP Earn Tokens (VEs)</strong>.
              Watch curated partner campaigns from top global tech & fintech brands, build your daily streak,
              and withdraw seamlessly to your verified bank account.
            </p>

            <div className={styles.featurePills}>
              <div className={styles.pillItem}>
                <Zap size={14} className="text-warning" />
                <span>Instant VE Credits</span>
              </div>
              <div className={styles.pillItem}>
                <ShieldCheck size={14} className="text-info" />
                <span>Bank-Grade Direct Payouts</span>
              </div>
              <div className={styles.pillItem}>
                <Award size={14} className="text-success" />
                <span>Verified Partners</span>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <button onClick={onExploreClick} className={styles.primaryCta}>
                <PlayCircle size={20} />
                <span>Start Watching Ads</span>
              </button>

              <button onClick={onHowItWorksClick} className={styles.secondaryCta}>
                <span>How Withdrawals Work</span>
              </button>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={`glass-panel ${styles.progressCard}`}>
              <div className={styles.progressCardHeader}>
                <div>
                  <span className={styles.subCardLabel}>Daily Earnings Target</span>
                  <h3 className={styles.goalTitle}>Goal: {dailyGoal} VEs</h3>
                </div>
                <div className={styles.fiatEquivBadge}>
                  ≈ {veToUSD(todayEarnings)} Earned
                </div>
              </div>

              <div className={styles.progressRingRow}>
                <div className={styles.svgRingWrap}>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className={styles.ringPercentage}>
                    {progressPercent}%
                  </div>
                </div>

                <div className={styles.ringStats}>
                  <div className={styles.todayEarningsBig}>
                    {formatVEs(animatedToday)} <span className={styles.unitText}>VEs</span>
                  </div>
                  <p className={styles.remainingTargetText}>
                    {dailyGoal - todayEarnings > 0
                      ? `${dailyGoal - todayEarnings} VEs remaining to unlock +25 VE bonus`
                      : '🎉 Daily Goal Exceeded! Milestone Unlocked'}
                  </p>
                </div>
              </div>

              <div className={styles.miniStatsGrid}>
                <div className={styles.miniStatItem}>
                  <span className={styles.miniLabel}>Available Today</span>
                  <strong className={styles.miniValueText}>{availableCount} Ads</strong>
                </div>
                <div className={styles.miniStatItem}>
                  <span className={styles.miniLabel}>Completed</span>
                  <div className="d-flex align-items-center gap-1">
                    <CheckCircle2 size={14} className="text-success" />
                    <strong className={styles.miniValueText}>{completedCount} Ads</strong>
                  </div>
                </div>
                <div className={styles.miniStatItem}>
                  <span className={styles.miniLabel}>Status</span>
                  <span className={styles.activePill}>Eligible for Payout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
