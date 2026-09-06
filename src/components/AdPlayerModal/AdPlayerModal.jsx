import { useState, useEffect } from 'react';
import { X, Play, Pause, CheckCircle2, Sparkles, ShieldCheck, VolumeX, Volume2 } from 'lucide-react';
import { veToUSD } from '../../utils/formatters';
import styles from './AdPlayerModal.module.css';

export default function AdPlayerModal({ ad, isOpen, onClose, onComplete }) {
  if (!isOpen || !ad) return null;

  const [isFastTestMode, setIsFastTestMode] = useState(false);
  const totalDuration = isFastTestMode ? 2 : Math.min(ad.duration);
  const [secondsLeft, setSecondsLeft] = useState(totalDuration);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    setSecondsLeft(totalDuration);
    setIsPlaying(true);
    setIsFinished(false);
    setIsClaiming(false);
  }, [ad]);

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
    if (isClaiming) return;
    setIsClaiming(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete(ad.id);
      }
    }, 300);
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className="d-flex align-items-center gap-2">
            <span className={styles.sponsorBadge}>ADVERTISEMENT</span>
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
          {!isPlaying && !isFinished && (
            <button
              onClick={() => setIsPlaying(true)}
              className={styles.centerPlayBtn}
              aria-label="Play Ad"
            >
              <Play size={30} />
            </button>
          )}

          {isFinished && (
            <div className={styles.completedOverlay}>
              <div className={styles.completedCheckIcon}>
                <CheckCircle2 size={30} />
              </div>
              <div className={styles.completedTitle}>Ad Completed!</div>
              <div className={styles.completedSubtitle}>
                You earned <strong>+{ad.reward} VEs</strong> ({veToUSD(ad.reward)})
              </div>
              <button
                type="button"
                onClick={handleClaim}
                disabled={isClaiming}
                className={styles.claimRewardButton}
              >
                <Sparkles size={18} />
                <span>{isClaiming ? 'Crediting VEs...' : `Claim +${ad.reward} VEs Reward`}</span>
              </button>
            </div>
          )}

          <div className={styles.bottomControls}>
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={styles.playPauseBtn}
                disabled={isFinished}
              >
                {isPlaying && !isFinished ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <div className={styles.timerBadge}>
                {isFinished ? (
                  <span className="text-success fw-bold d-flex align-items-center gap-1">
                    <CheckCircle2 size={15} /> Ad Completed
                  </span>
                ) : (
                  <span>00:{String(secondsLeft).padStart(2, '0')}</span>
                )}
              </div>
              <button
                className={styles.controlBtn}
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX size={18} />
                ) : (
                  <Volume2 size={18} />
                )}
              </button>
            </div>

            <div className={styles.potentialRewardPill}>
              <Sparkles size={14} className="text-warning" />
              <span>+{ad.reward} VEs ({veToUSD(ad.reward)})</span>
            </div>
            <div className={styles.progressBarWrap}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.modalFooter}>
          <div className={styles.trustGuarantee}>
            <ShieldCheck size={20} className="text-success" />
            <div>
              <div className={styles.trustTitle}>Verified Viewing Session</div>
              <div className={styles.trustSubtitle}>
                {isFinished
                  ? 'Tokens ready to deposit directly to your VELOOP balance'
                  : 'Tokens will be deposited directly to your VELOOP balance'}
              </div>
            </div>
          </div>

          {isFinished ? (
            <button
              type="button"
              onClick={handleClaim}
              disabled={isClaiming}
              className={styles.claimRewardButton}
            >
              <Sparkles size={18} />
              <span>{isClaiming ? 'Crediting VEs...' : `Claim +${ad.reward} VEs Reward`}</span>
            </button>
          ) : (
            <button
              type="button"
              disabled
              className={styles.claimRewardButtonDisabled}
            >
              <Sparkles size={18} />
              <span>Claim +{ad.reward} VEs (00:{String(secondsLeft).padStart(2, '0')})</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
