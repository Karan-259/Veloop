import React, { useState } from 'react';
import { Eye, ArrowRightLeft, Landmark, CheckCircle, DollarSign, Zap } from 'lucide-react';
import { formatVEs, veToUSD, veToINR } from '../../utils/formatters';
import styles from './RewardInfo.module.css';

export default function RewardInfo() {
  const [calculatorAmount, setCalculatorAmount] = useState(1000);

  const steps = [
    {
      id: 'step-1',
      stepNumber: '01',
      icon: Eye,
      title: 'Watch Curated Ads',
      description: 'Stream verified 15s–45s brand spotlights from top tech and fintech partners. Every view is verified on our audit layer.',
      badgeText: 'Instant Crediting',
      accent: 'cyan'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      icon: ArrowRightLeft,
      title: 'Accumulate VE Tokens',
      description: 'VELOOP Earn Tokens (VEs) hold real liquidity value pegged at 100 VEs = $1.00 USD. No expiry, no catch.',
      badgeText: 'Zero Expiry',
      accent: 'gold'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      icon: Landmark,
      title: 'Withdraw to Bank',
      description: 'Direct payout to your linked bank account once the 500 VEs ($5.00) threshold is reached. Instant–2hr processing.',
      badgeText: 'Bank-Grade Security',
      accent: 'emerald'
    }
  ];

  const sliderPercent = ((calculatorAmount - 500) / (10000 - 500)) * 100;

  return (
    <section id="how-it-works" className={styles.rewardInfoSection}>
      <div className="container-fluid px-lg-5 px-3">

        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            <Zap size={12} className="me-1" />
            How It Works
          </span>
          <h2 className={styles.sectionTitle}>
            Earn Real Cash &amp; Withdraw{' '}
            <span className={styles.titleGradient}>to Your Bank</span>
          </h2>
          <p className={styles.sectionLead}>
            VELOOP operates a verified, audit-backed reward economy. Your time has real value —
            every watched ad produces cash you can withdraw directly to your bank.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="col-lg-4 col-md-6 col-12">
                <div className={`${styles.infoCard} ${styles[step.accent]}`}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.iconBox}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.stepNumberBadge}>{step.stepNumber}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={`${styles.pillBadge} ${styles[`pill_${step.accent}`]}`}>
                      <CheckCircle size={12} className="me-1" />
                      {step.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.calcBanner}>
          <div className={styles.calcBannerBg} />
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className={styles.calcTag}>
                  <DollarSign size={11} className="me-1" />
                  CONVERSION CALCULATOR
                </span>
              </div>
              <h3 className={styles.calcHeading}>
                See What Your VEs Are Worth
              </h3>
              <p className={styles.calcDesc}>
                Adjust the token amount below to calculate your guaranteed cashout value in USD and INR.
              </p>

              <div className={styles.sliderWrap}>
                <div className={styles.sliderTopRow}>
                  <span className={styles.sliderAmount}>
                    {formatVEs(calculatorAmount)} VEs
                  </span>
                  <span className={styles.sliderPercent}>
                    {Math.round(sliderPercent)}% of max
                  </span>
                </div>
                <div className={styles.sliderTrack}>
                  <div
                    className={styles.sliderFill}
                    style={{ width: `${sliderPercent}%` }}
                  />
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={calculatorAmount}
                    onChange={(e) => setCalculatorAmount(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                </div>
                <div className={styles.sliderMinMax}>
                  <span>500 VEs (min)</span>
                  <span>10,000 VEs</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className={styles.payoutSummaryBox}>
                <span className={styles.payoutLabel}>Guaranteed Bank Payout</span>
                <div className={styles.payoutValueGroup}>
                  <div className={styles.payoutUSD}>{veToUSD(calculatorAmount)}</div>
                  <div className={styles.payoutINR}>≈ {veToINR(calculatorAmount)} INR</div>
                </div>
                <div className={styles.payoutDivider} />
                <div className={styles.payoutMeta}>
                  <div className={styles.payoutMetaItem}>
                    <span className={styles.metaDot} />
                    <span>Payout speed: <strong>Instant – 2 Hours</strong></span>
                  </div>
                  <div className={styles.payoutMetaItem}>
                    <span className={styles.metaDot} />
                    <span>Withdrawal fee: <strong>$0.00 (Always Free)</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
