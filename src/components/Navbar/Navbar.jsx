import React from 'react';
import { formatVEs, veToUSD } from '../../utils/formatters';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import styles from './Navbar.module.css';

export default function Navbar({ lifetimeEarnings}) {
  const animatedLifetime = useAnimatedCounter(lifetimeEarnings);

  return (
    <header className={styles.navbarWrapper}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={styles.navbarInner}>
          <div className={styles.brandGroup}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXx2vUtBV7HlF-xDMeeujJZdxtriaqVT4RPaDN5iup0A&s=10i'
              alt="Veloop image"
              className={styles.img}
            />
            <div>
              <div className={styles.brandNameRow}>
                <span className={styles.brandName}>VELOOP</span>
                <span className={styles.brandTag}>REWARDS</span>
              </div>
            </div>
          </div>

          <div className={styles.rightGroup}>
            <div className={styles.walletPill}>
              <div>
                <img src="./src/assets/images/vecoin.png" alt="" height={30} />
              </div>
              <div className={styles.walletDetails}>
                <div className={styles.walletBalance}>
                  <strong>{formatVEs(animatedLifetime)}</strong> <span className={styles.tokenUnit}>VEs</span>
                </div>
                <div className={styles.fiatEquiv}>
                  = {veToUSD(animatedLifetime)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
