import React from 'react';
import { TrendingUp, Wallet, CheckCircle2, Clock, CalendarDays } from 'lucide-react';
import { formatVEs, veToUSD } from '../../utils/formatters';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import styles from './StatsSection.module.css';

export default function StatsSection({
  todayEarnings,
  lifetimeEarnings,
  weeklyEarnings,
  availableAdsCount,
  completedAdsCount
}) {
  const animatedToday = useAnimatedCounter(todayEarnings);
  const animatedLifetime = useAnimatedCounter(lifetimeEarnings);
  const animatedWeekly = useAnimatedCounter(weeklyEarnings);
  const animatedAvailable = useAnimatedCounter(availableAdsCount);
  const animatedCompleted = useAnimatedCounter(completedAdsCount);

  const statsList = [
    {
      id: 'today',
      title: "Today's Earnings",
      value: `${formatVEs(animatedToday)} VEs`,
      subvalue: `= ${veToUSD(todayEarnings)}`,
      trend: '+18% today',
      icon: TrendingUp,
      accentColor: 'emerald'
    },
    {
      id: 'lifetime',
      title: 'Total Lifetime VEs',
      value: `${formatVEs(animatedLifetime)} VEs`,
      subvalue: `= ${veToUSD(lifetimeEarnings)}`,
      trend: 'Lifetime Balance',
      icon: Wallet,
      accentColor: 'gold'
    },
    {
      id: 'weekly',
      title: 'Weekly Earnings',
      value: `${formatVEs(animatedWeekly)} VEs`,
      subvalue: `= ${veToUSD(weeklyEarnings)}`,
      trend: 'Last 7 Days',
      icon: CalendarDays,
      accentColor: 'cyan'
    },
    {
      id: 'completed',
      title: 'Ads Watched Today',
      value: `${animatedCompleted}`,
      subvalue: 'Verified views',
      trend: 'Daily active',
      icon: CheckCircle2,
      accentColor: 'purple'
    },
    {
      id: 'remaining',
      title: 'Remaining Ads',
      value: `${animatedAvailable}`,
      subvalue: 'Ready to watch',
      trend: 'Fresh inventory',
      icon: Clock,
      accentColor: 'emerald'
    }
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container-fluid px-lg-5 px-3">
        <div className="row g-3">
          {statsList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="col-xl col-md-4 col-sm-6 col-12">
                <div className={`${styles.statCard} ${styles[item.accentColor]}`}>
                  <div className={styles.statHeader}>
                    <span className={styles.statTitle}>{item.title}</span>
                    <div className={styles.iconCircle}>
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <div className={styles.statMainValue}>
                    {item.value} 
                  </div>

                  <div className={styles.statFooter}>
                    <span className={styles.subvalue}>{item.subvalue}</span>
                    <span className={styles.trendBadge}>{item.trend}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
