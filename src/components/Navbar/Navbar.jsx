import React, { useState } from 'react';
import { Coins, Volume2, VolumeX, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { formatVEs, veToUSD } from '../../utils/formatters';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { soundManager } from '../../utils/soundEffects';
import styles from './Navbar.module.css';

export default function Navbar({ lifetimeEarnings}) {
  const animatedLifetime = useAnimatedCounter(lifetimeEarnings);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className={styles.navbarWrapper}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={styles.navbarInner}>
          {/* Logo & Brand */}
          <div className={styles.brandGroup}>
            <img
              src='../src/assets/images/veloop.png'
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

          

          {/* Right Group: Audio toggle, Tier, Balance Pill */}
          <div className={styles.rightGroup}>
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              className={styles.soundButton}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            

            {/* Live Wallet Pill */}
            <div className={styles.walletPill}>
              <div className={styles.walletIconWrap}>
                <Coins size={18} className="text-warning" />
              </div>
              <div className={styles.walletDetails}>
                <div className={styles.walletBalance}>
                  <strong>{formatVEs(animatedLifetime)}</strong> <span className={styles.tokenUnit}>VEs</span>
                </div>
                <div className={styles.fiatEquiv}>
                  ≈ {veToUSD(animatedLifetime)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
