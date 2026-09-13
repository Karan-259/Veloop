import React, { useEffect, useState } from 'react';
import { formatVEs, veToUSD } from '../../utils/formatters';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { Zap, TrendingUp } from 'lucide-react';
import styles from './Navbar.module.css';
import vecoin from '../../assets/images/vecoin.png';

export default function Navbar({ lifetimeEarnings, todayEarnings, userTier }) {
  const animatedLifetime = useAnimatedCounter(lifetimeEarnings);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={styles.navbarInner}>

          <div className={styles.brandGroup}>
            <div className={styles.logoWrap}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXQahyDyAR-bxYfvDCVcCepVSTCSCv4cXlLIAUZrq8w&s=10' alt="VELOOP coin" className={styles.logoImg} />
              <span className={styles.logoRing} />
            </div>
            <div className={styles.brandText}>
              <div className={styles.brandNameRow}>
                <span className={styles.brandName}>VELOOP</span>
                <span className={styles.brandTag}>REWARDS</span>
              </div>
              <span className={styles.brandSub}>Watch · Earn · Withdraw</span>
            </div>
          </div>

          <div className={styles.rightGroup}>
            <div className={styles.liveChip}>
              <span className={styles.liveDot} />
              <span>Live</span>
            </div>

            {todayEarnings > 0 && (
              <div className={styles.todayPill}>
                <TrendingUp size={13} />
                <span>+{todayEarnings} VEs today</span>
              </div>
            )}

            <div className={styles.walletPill}>
              <div className={styles.walletIcon}>
                <Zap size={14} />
              </div>
              <div className={styles.walletDetails}>
                <div className={styles.walletBalance}>
                  <strong>{formatVEs(animatedLifetime)}</strong>
                  <span className={styles.tokenUnit}> VEs</span>
                </div>
                <div className={styles.fiatEquiv}>{veToUSD(animatedLifetime)} USD</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
