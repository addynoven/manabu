import { describe, it, expect } from 'vitest';
import { transitionFsrs6, CardState } from '../fsrs6Engine';

describe('Pure FSRS-6 Deterministic State Transition (powered by ts-fsrs)', () => {
  const newCard: CardState = {
    stability: 0,
    difficulty: 5.0,
    state: 'new',
    reps: 0,
    lapses: 0,
    lastReview: null,
    dueAt: new Date('2026-10-01T00:00:00Z'),
  };

  it('initializes a new card on first Good rating (3)', () => {
    const now = new Date('2026-10-01T10:00:00Z');
    const result = transitionFsrs6(newCard, 3, now);

    expect(result.nextState.state).toBe('review');
    expect(result.nextState.reps).toBe(1);
    expect(result.nextState.lapses).toBe(0);
    expect(result.nextState.stability).toBeGreaterThan(0);
    expect(result.nextInterval).toBeGreaterThanOrEqual(1);
  });

  it('increases stability on successful review (Rating 3 Good)', () => {
    const now = new Date('2026-10-01T10:00:00Z');
    const firstReview = transitionFsrs6(newCard, 3, now);

    const twoDaysLater = new Date('2026-10-03T10:00:00Z');
    const secondReview = transitionFsrs6(firstReview.nextState, 3, twoDaysLater);

    expect(secondReview.nextState.stability).toBeGreaterThan(firstReview.nextState.stability);
    expect(secondReview.nextState.reps).toBe(2);
    expect(secondReview.nextState.state).toBe('review');
  });

  it('increments lapses and reduces stability on Again rating (1)', () => {
    const now = new Date('2026-10-01T10:00:00Z');
    const firstReview = transitionFsrs6(newCard, 3, now);

    const fiveDaysLater = new Date('2026-10-06T10:00:00Z');
    const failedReview = transitionFsrs6(firstReview.nextState, 1, fiveDaysLater);

    expect(failedReview.nextState.lapses).toBe(1);
    expect(failedReview.nextState.stability).toBeLessThan(firstReview.nextState.stability);
  });

  it('clamps difficulty strictly within [1.0, 10.0] bounds over 30 consecutive Again ratings (1)', () => {
    let current = { ...newCard };
    let currentDate = new Date('2026-10-01T10:00:00Z');

    for (let i = 0; i < 30; i++) {
      const res = transitionFsrs6(current, 1, currentDate);
      current = res.nextState;
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
      expect(current.difficulty).toBeGreaterThanOrEqual(1.0);
      expect(current.difficulty).toBeLessThanOrEqual(10.0);
    }

    expect(current.difficulty).toBeLessThanOrEqual(10.0);
  });

  it('clamps difficulty strictly within [1.0, 10.0] bounds over 30 consecutive Easy ratings (4)', () => {
    let current = { ...newCard };
    let currentDate = new Date('2026-10-01T10:00:00Z');

    for (let i = 0; i < 30; i++) {
      const res = transitionFsrs6(current, 4, currentDate);
      current = res.nextState;
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
      expect(current.difficulty).toBeGreaterThanOrEqual(1.0);
      expect(current.difficulty).toBeLessThanOrEqual(10.0);
    }

    expect(current.difficulty).toBeGreaterThanOrEqual(1.0);
  });
});
