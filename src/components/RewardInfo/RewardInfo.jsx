import React, { useState } from 'react';
import { Eye, ArrowRightLeft, Landmark, CheckCircle } from 'lucide-react';
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
      description: 'Stream verified 15s to 45s brand spotlights from top tech and fintech partners.',
      badgeText: 'Instant Crediting',
      accent: 'cyan'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      icon: ArrowRightLeft,
      title: 'Accumulate VEs Tokens',
      description: 'VELOOP Earn Tokens (VEs) hold real liquidity value pegged at 100 VEs = $1.00 USD.',
      badgeText: 'Zero Expiry',
      accent: 'gold'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      icon: Landmark,
      title: 'Withdraw to Bank Account',
      description: 'Direct payout to your linked bank account once the 500 VEs ($5.00) threshold is reached.',
      badgeText: 'Bank-Grade Security',
      accent: 'emerald'
    }
  ];

  return (
    <section id="how-it-works" className={styles.rewardInfoSection}>
      <div className="container-fluid px-lg-5 px-3">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            How Earning & Bank Withdrawals Work
          </h2>
          <p className={styles.sectionLead}>
            VELOOP operates a verified, audit-backed reward economy. Your time is valuable—every watched ad produces real cash that you can withdraw.
          </p>
        </div>

        <div className="row g-4 mb-4">
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
                    <span className={styles.pillBadge}>
                      <CheckCircle size={12} className="me-1" />
                      {step.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`glass-panel ${styles.calcBanner}`}>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={styles.calcTag}>CONVERSION CALCULATOR</span>
              </div>
              <h3 className={styles.calcHeading}>See what your VEs are worth in Cash</h3>
              <p className={styles.calcDesc}>
                Adjust the token amount below to calculate your guaranteed cashout value in USD and INR.
              </p>

              <div className={styles.sliderWrap}>
                <div className="d-flex justify-content-between text-muted small mb-2">
                  <span className="text-white font-monospace">{formatVEs(calculatorAmount)} VEs</span>
                </div>
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
            </div>

            <div className="col-lg-5">
              <div className={styles.payoutSummaryBox}>
                <span className={styles.payoutLabel}>Guaranteed Bank Payout:</span>
                <div className={styles.payoutValueGroup}>
                  <div className={styles.payoutUSD}>{veToUSD(calculatorAmount)}</div>
                  <div className={styles.payoutINR}>= {veToINR(calculatorAmount)} INR</div>
                </div>
                <div className={styles.payoutMeta}>
                  <span>⚡ Payout speed: <strong>Instant - 2 Hours</strong></span>
                  <span>🔒 Fee: <strong>$0.00 (Zero Withdrawal Fee)</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
