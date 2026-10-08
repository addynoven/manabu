/**
 * FSRS-5 (Free Spaced Repetition Scheduler v5) Engine for Manabu Web
 *
 * Implements modern spaced repetition with memory retention curves:
 * Retrievability: R(t) = (1 + 19 * t / (9 * S))^(-0.5)
 * Stability: S (days for retrievability to decay to 90%)
 * Difficulty: D (1.0 to 10.0 scale)
 */

export interface FsrsItemState {
  stability: number;   // S in days (default: 1.0)
  difficulty: number;  // D (1.0 to 10.0, default: 4.5)
  elapsedDays: number;
  reps: number;
  lapses: number;
  lastReviewedAt: string | null;
  dueAt: string;
}

export type FsrsGrade = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

export const FSRS_FACTORS = {
  decayExponent: -0.5,
  factor: 19 / 9, // ~2.111
  targetRetention: 0.90, // 90%
};

/**
 * Calculates current Retrievability R(t) given elapsed time t (days) and stability S (days).
 * Returns recall probability between 0.0 and 1.0.
 */
export function calculateRetrievability(elapsedDays: number, stability: number): number {
  if (stability <= 0) return 0;
  if (elapsedDays <= 0) return 1.0;
  const base = 1 + (FSRS_FACTORS.factor * elapsedDays) / stability;
  return Math.max(0.01, Math.min(1.0, Math.pow(base, FSRS_FACTORS.decayExponent)));
}

/**
 * Calculates interval (days) until retrievability drops to target retention (default 0.90).
 */
export function calculateNextInterval(stability: number, targetRetention: number = 0.90): number {
  if (stability <= 0) return 0.2;
  const interval = (stability / FSRS_FACTORS.factor) * (Math.pow(targetRetention, -2) - 1);
  return Math.max(0.1, Number(interval.toFixed(2)));
}

/**
 * Updates item's FSRS-5 Stability and Difficulty based on review grade.
 */
export function nextFsrsState(
  currentState: Partial<FsrsItemState> | null,
  grade: FsrsGrade,
  now: Date = new Date()
): FsrsItemState {
  const stability = currentState?.stability ?? 1.0;
  const difficulty = currentState?.difficulty ?? 4.5;
  const reps = (currentState?.reps ?? 0) + 1;
  const lapses = grade === 1 ? (currentState?.lapses ?? 0) + 1 : (currentState?.lapses ?? 0);

  const dDelta = grade === 1 ? 1.5 : grade === 2 ? 0.5 : grade === 3 ? -0.2 : -1.0;
  const nextD = Math.max(1.0, Math.min(10.0, difficulty + dDelta));

  let nextS: number;
  if (grade === 1) {
    nextS = Math.max(0.2, stability * 0.25);
  } else {
    const gradeMult = grade === 2 ? 1.2 : grade === 3 ? 2.2 : 3.5;
    const diffFactor = 1.0 + (10 - nextD) * 0.1;
    nextS = Math.max(0.5, stability * gradeMult * (diffFactor / 2.0));
  }

  const intervalDays = calculateNextInterval(nextS);
  const dueTimeMs = now.getTime() + intervalDays * 24 * 3600 * 1000;

  return {
    stability: Number(nextS.toFixed(2)),
    difficulty: Number(nextD.toFixed(2)),
    elapsedDays: 0,
    reps,
    lapses,
    lastReviewedAt: now.toISOString(),
    dueAt: new Date(dueTimeMs).toISOString(),
  };
}

/**
 * Generate discrete points along the memory decay curve for visualization.
 */
export function generateDecayCurvePoints(
  stability: number,
  daysRange: number = 30,
  stepCount: number = 20
): Array<{ day: number; retrievability: number; percentage: number }> {
  const points = [];
  const step = daysRange / stepCount;
  for (let i = 0; i <= stepCount; i++) {
    const day = Number((i * step).toFixed(1));
    const r = calculateRetrievability(day, stability);
    points.push({
      day,
      retrievability: Number(r.toFixed(3)),
      percentage: Math.round(r * 100),
    });
  }
  return points;
}
