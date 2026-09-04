import { useState, useEffect } from 'react';
import { X, Play, Pause, CheckCircle2, Sparkles, ShieldCheck} from 'lucide-react';
import { veToUSD } from '../../utils/formatters';
import styles from './AdPlayerModal.module.css';

export default function AdPlayerModal({ ad, isOpen, onClose, onComplete }) {
  if (!isOpen || !ad) return null;

  const [isFastTestMode, setIsFastTestMode] = useState(false);
  const totalDuration = isFastTestMode ? 2 : Math.min(ad.duration, 15); 
  const [secondsLeft, setSecondsLeft] = useState(totalDuration);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    setSecondsLeft(totalDuration);
    setIsPlaying(true);
    setIsFinished(false);
    setIsClaiming(false);
  }, [ad, isFastTestMode]);

  useEffect(() => {
    if (!isPlaying || isFinished) return;

    if (secondsLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isFinished, secondsLeft]);

  const progressPercent = Math.min(
    100,
    Math.round(((totalDuration - secondsLeft) / totalDuration) * 100)
  );

  const handleClaim = () => {
    setIsClaiming(true);
    setTimeout(() => {
      onComplete(ad.id);
    }, 300);
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className="d-flex align-items-center gap-2">
            <span className={styles.sponsorBadge}>SPONSORED ADVERTISEMENT</span>
            <span className={styles.categoryBadge}>{ad.categoryLabel}</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close Ad Player">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className={styles.playerContainer}>
          <img src={ad.image} alt={ad.title} className={styles.adHeroMedia} />
          <div className={styles.playerOverlay} />

          <div className={styles.progressBarWrap}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={styles.centerBrandInfo}>
            <span className={styles.sponsorNameOverlay}>{ad.sponsor}</span>
            <h2 className={styles.adOverlayTitle}>{ad.title}</h2>
            <p className={styles.adOverlayDesc}>{ad.description}</p>
          </div>
          <div className={styles.bottomControls}>
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={styles.playPauseBtn}
                disabled={isFinished}
              >
                {isPlaying && !isFinished ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
              </button>
              <div className={styles.timerBadge}>
                {isFinished ? (
                  <span className="text-success fw-bold d-flex align-items-center gap-1">
                    <CheckCircle2 size={15} /> Ad Completed
                  </span>
                ) : (
                  <span>00:{String(secondsLeft).padStart(2, '0')} remaining</span>
                )}
              </div>
            </div>

            <div className={styles.potentialRewardPill}>
              <Sparkles size={14} className="text-warning" />
              <span>+{ad.reward} VEs ({veToUSD(ad.reward)})</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.trustGuarantee}>
            <ShieldCheck size={18} className="text-success" />
            <div>
              <div className="text-white fw-bold small">Verified Viewing Session</div>
              <div className="text-muted" style={{ fontSize: '0.72rem' }}>Tokens will be deposited directly to your VELOOP balance</div>
            </div>
          </div>

          {isFinished ? (
            <button
              onClick={handleClaim}
              disabled={isClaiming}
              className={styles.claimRewardButton}
            >
              <Sparkles size={20} className="me-1" />
              <span>{isClaiming ? 'Crediting VEs...' : `Claim +${ad.reward} VEs Reward`}</span>
            </button>
          ) : (
            <div className={styles.waitingNotice}>
              <div className="spinner-border spinner-border-sm text-success me-2" role="status" />
              <span>Watch until the countdown ends to unlock reward...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
