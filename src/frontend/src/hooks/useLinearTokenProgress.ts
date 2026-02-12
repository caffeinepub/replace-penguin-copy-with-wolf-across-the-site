import { useEffect, useState } from 'react';

interface TokenProgress {
  sold: number;
  remaining: number;
}

interface UseLinearTokenProgressOptions {
  phaseStart: Date;
  phaseEnd: Date;
  totalTokens: number;
  baselineSoldTokens: number;
}

export function useLinearTokenProgress({
  phaseStart,
  phaseEnd,
  totalTokens,
  baselineSoldTokens,
}: UseLinearTokenProgressOptions): TokenProgress {
  const [progress, setProgress] = useState<TokenProgress>(() =>
    calculateProgress(phaseStart, phaseEnd, totalTokens, baselineSoldTokens)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(calculateProgress(phaseStart, phaseEnd, totalTokens, baselineSoldTokens));
    }, 1000);

    return () => clearInterval(interval);
  }, [phaseStart, phaseEnd, totalTokens, baselineSoldTokens]);

  return progress;
}

function calculateProgress(
  phaseStart: Date,
  phaseEnd: Date,
  totalTokens: number,
  baselineSoldTokens: number
): TokenProgress {
  const now = new Date().getTime();
  const start = phaseStart.getTime();
  const end = phaseEnd.getTime();

  // If phase hasn't started yet
  if (now < start) {
    return {
      sold: Math.max(0, Math.min(baselineSoldTokens, totalTokens)),
      remaining: Math.max(0, totalTokens - baselineSoldTokens),
    };
  }

  // If phase has ended
  if (now >= end) {
    return {
      sold: totalTokens,
      remaining: 0,
    };
  }

  // Calculate linear progress during phase
  const phaseDuration = end - start;
  const elapsed = now - start;
  const progressRatio = elapsed / phaseDuration;

  // Linear interpolation from baseline to total
  const tokensToSell = totalTokens - baselineSoldTokens;
  const additionalSold = tokensToSell * progressRatio;
  const currentSold = baselineSoldTokens + additionalSold;

  const sold = Math.max(0, Math.min(Math.floor(currentSold), totalTokens));
  const remaining = Math.max(0, totalTokens - sold);

  return { sold, remaining };
}
