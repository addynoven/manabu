export interface Point {
  x: number;
  y: number;
}

export interface StrokeMatchResult {
  success: boolean;
  score: number;
  reason?: 'too_short' | 'wrong_start' | 'wrong_direction' | 'wrong_shape';
  message: string;
  startDist?: number;
  avgDist?: number;
}

/**
 * Resample a polyline of arbitrary point count into exactly N equidistant points.
 */
export function resamplePoints(points: Point[], targetCount = 16): Point[] {
  if (!points || points.length === 0) return [];
  if (points.length === 1) {
    return Array(targetCount).fill({ ...points[0] });
  }

  // Calculate cumulative distances
  const distances: number[] = [0];
  let totalLength = 0;

  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
    totalLength += d;
    distances.push(totalLength);
  }

  if (totalLength === 0) {
    return Array(targetCount).fill({ ...points[0] });
  }

  const resampled: Point[] = [];
  const step = totalLength / (targetCount - 1);

  let currentIdx = 0;
  for (let k = 0; k < targetCount; k++) {
    const targetDist = k * step;

    while (currentIdx < distances.length - 2 && distances[currentIdx + 1] < targetDist) {
      currentIdx++;
    }

    const segStartDist = distances[currentIdx];
    const segEndDist = distances[currentIdx + 1];
    const segLength = segEndDist - segStartDist;

    if (segLength === 0) {
      resampled.push({ ...points[currentIdx] });
    } else {
      const t = (targetDist - segStartDist) / segLength;
      resampled.push({
        x: points[currentIdx].x + t * (points[currentIdx + 1].x - points[currentIdx].x),
        y: points[currentIdx].y + t * (points[currentIdx + 1].y - points[currentIdx].y),
      });
    }
  }

  return resampled;
}

/**
 * Validates a user drawn stroke against a reference KanjiVG stroke.
 * Both user points and reference points must be in the same 109x109 coordinate space.
 */
export function validateStroke(
  userPoints: Point[],
  referencePoints: Point[],
  options: {
    startTolerance?: number;
    shapeTolerance?: number;
    minPoints?: number;
  } = {}
): StrokeMatchResult {
  const {
    startTolerance = 25,
    shapeTolerance = 24,
    minPoints = 3,
  } = options;

  if (!userPoints || userPoints.length < minPoints) {
    return {
      success: false,
      score: 0,
      reason: 'too_short',
      message: 'Stroke too short. Swipe through the stroke path.',
    };
  }

  if (!referencePoints || referencePoints.length < 2) {
    return {
      success: true,
      score: 80,
      message: 'Good stroke!',
    };
  }

  const N = Math.max(16, referencePoints.length);
  const userResampled = resamplePoints(userPoints, N);
  const refResampled = resamplePoints(referencePoints, N);

  // 1. Check Starting Point Proximity
  const startDist = Math.hypot(
    userResampled[0].x - refResampled[0].x,
    userResampled[0].y - refResampled[0].y
  );

  if (startDist > startTolerance) {
    return {
      success: false,
      score: Math.max(0, Math.round(100 - startDist * 2)),
      reason: 'wrong_start',
      startDist,
      message: 'Start near the glowing numbered badge!',
    };
  }

  // 2. Check Direction Vector
  const refDx = refResampled[N - 1].x - refResampled[0].x;
  const refDy = refResampled[N - 1].y - refResampled[0].y;
  const userDx = userResampled[N - 1].x - userResampled[0].x;
  const userDy = userResampled[N - 1].y - userResampled[0].y;

  const refLen = Math.hypot(refDx, refDy);
  const userLen = Math.hypot(userDx, userDy);

  if (refLen > 8 && userLen > 8) {
    const cosAngle = (refDx * userDx + refDy * userDy) / (refLen * userLen);
    if (cosAngle < 0.2) {
      return {
        success: false,
        score: 15,
        reason: 'wrong_direction',
        message: 'Wrong direction! Follow the arrow.',
      };
    }
  }

  // 3. Trajectory Average Distance Error
  let sumDist = 0;
  for (let i = 0; i < N; i++) {
    sumDist += Math.hypot(
      userResampled[i].x - refResampled[i].x,
      userResampled[i].y - refResampled[i].y
    );
  }
  const avgDist = sumDist / N;

  const rawScore = 100 * (1 - avgDist / shapeTolerance);
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));

  if (score >= 48) {
    let message = 'Good!';
    if (score >= 88) message = 'Perfect! ★★★';
    else if (score >= 70) message = 'Great! ★★☆';

    return {
      success: true,
      score,
      avgDist,
      message,
    };
  }

  return {
    success: false,
    score,
    reason: 'wrong_shape',
    avgDist,
    message: 'Stroke deviates from path. Try again!',
  };
}

/**
 * Calculates a star rating (1 to 3 stars) from an array of stroke accuracy scores.
 */
export function calculateCharacterStars(strokeScores: number[]): {
  stars: 1 | 2 | 3;
  averageScore: number;
} {
  if (strokeScores.length === 0) return { stars: 1, averageScore: 0 };
  const sum = strokeScores.reduce((acc, cur) => acc + cur, 0);
  const averageScore = Math.round(sum / strokeScores.length);

  if (averageScore >= 85) return { stars: 3, averageScore };
  if (averageScore >= 68) return { stars: 2, averageScore };
  return { stars: 1, averageScore };
}
