import {
  fsrs,
  createEmptyCard,
  Rating as TsFsrsRating,
  State as TsFsrsState,
  Card as TsFsrsCard,
  generatorParameters,
  RecordLogItem,
} from 'ts-fsrs';
import { CardType, CardLifecycleState } from '../models/srs.types';

export type FsrsRating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

export interface CardState {
  stability: number;   // S
  difficulty: number;  // D
  state: CardLifecycleState;
  reps: number;
  lapses: number;
  lastReview: Date | null;
  dueAt: Date;
}

export interface FsrsReviewLog {
  rating: FsrsRating;
  state: CardLifecycleState;
  elapsedDays: number;
  scheduledDays: number;
  reviewedAt: Date;
}

export interface FsrsTransitionResult {
  nextState: CardState;
  nextInterval: number; // in days
  log: FsrsReviewLog;
}

export const DEFAULT_FSRS6_WEIGHTS: number[] = [
  0.4, 0.9, 2.3, 10.9,
  5.0,
  0.5, 0.5, 0.2,
  2.2, 0.2, 0.1,
  0.5, 0.2, 0.2, 0.2,
  0.2, 1.3,
  0.1, 0.1, 0.1,
  0.2
];

function mapStateToTsFsrs(state: CardLifecycleState): TsFsrsState {
  switch (state) {
    case 'new': return TsFsrsState.New;
    case 'learning': return TsFsrsState.Learning;
    case 'review': return TsFsrsState.Review;
    case 'relearning': return TsFsrsState.Relearning;
  }
}

function mapTsFsrsToState(state: TsFsrsState): CardLifecycleState {
  switch (state) {
    case TsFsrsState.New: return 'new';
    case TsFsrsState.Learning: return 'learning';
    case TsFsrsState.Review: return 'review';
    case TsFsrsState.Relearning: return 'relearning';
  }
}

function mapRatingToTsFsrs(rating: FsrsRating): TsFsrsRating {
  switch (rating) {
    case 1: return TsFsrsRating.Again;
    case 2: return TsFsrsRating.Hard;
    case 3: return TsFsrsRating.Good;
    case 4: return TsFsrsRating.Easy;
  }
}

/**
 * Delegates FSRS state transitions directly to the official `ts-fsrs` library.
 */
export function transitionFsrs6(
  current: CardState,
  rating: FsrsRating,
  now: Date = new Date(),
  desiredRetention = 0.90,
  w: number[] = DEFAULT_FSRS6_WEIGHTS
): FsrsTransitionResult {
  const params = generatorParameters({
    request_retention: desiredRetention,
    enable_short_term: false, // Direct graduation to spaced review
    w: w,
  });
  const f = fsrs(params);

  let inputCard: TsFsrsCard;

  if (current.state === 'new' || current.stability === 0) {
    inputCard = createEmptyCard(now);
  } else {
    inputCard = {
      due: current.dueAt,
      stability: Math.max(0.1, current.stability),
      difficulty: Math.min(10.0, Math.max(1.0, current.difficulty)),
      elapsed_days: current.lastReview
        ? Math.max(0, (now.getTime() - current.lastReview.getTime()) / (1000 * 60 * 60 * 24))
        : 0,
      scheduled_days: current.lastReview
        ? Math.round((current.dueAt.getTime() - current.lastReview.getTime()) / (1000 * 60 * 60 * 24))
        : 0,
      reps: current.reps,
      lapses: current.lapses,
      learning_steps: 0,
      state: mapStateToTsFsrs(current.state),
      last_review: current.lastReview || undefined,
    };
  }

  const repeatResult = f.repeat(inputCard, now);
  const tsRating = mapRatingToTsFsrs(rating);
  const recordItem: RecordLogItem = (repeatResult as unknown as Record<number, RecordLogItem>)[tsRating];

  const updatedCard = recordItem.card;
  const updatedLog = recordItem.log;

  const nextState: CardState = {
    stability: Number(updatedCard.stability.toFixed(4)),
    difficulty: Number(updatedCard.difficulty.toFixed(2)),
    state: mapTsFsrsToState(updatedCard.state),
    reps: updatedCard.reps,
    lapses: updatedCard.lapses,
    lastReview: now,
    dueAt: updatedCard.due,
  };

  const nextInterval = Math.max(
    1,
    Math.round((updatedCard.due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  const log: FsrsReviewLog = {
    rating,
    state: current.state,
    elapsedDays: Number(updatedLog.elapsed_days.toFixed(2)),
    scheduledDays: Number(updatedLog.scheduled_days.toFixed(2)),
    reviewedAt: now,
  };

  return { nextState, nextInterval, log };
}
