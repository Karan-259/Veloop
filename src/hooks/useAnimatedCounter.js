import { useState, useEffect } from 'react';

export function useAnimatedCounter(targetValue, duration = 800) {
  const [count, setCount] = useState(targetValue);

  useEffect(() => {
    let startTimestamp = null;
    const startValue = count;
    const change = targetValue - startValue;

    if (change === 0) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + change * easeOut));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [targetValue, duration]);

  return count;
}
