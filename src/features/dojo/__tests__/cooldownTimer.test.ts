import { describe, it, expect, beforeEach } from 'vitest';
import { useDojoStore } from '../store/useDojoStore';

describe('Cooldown Timer & Early Unlock', () => {
  beforeEach(() => {
    useDojoStore.getState().resetDojoProgress();
    useDojoStore.setState({ devUnlockAll: false });
  });

  it('completing the last lesson of Day 1 (u1_l3) initializes strict 24h cooldown on Day 2 (u1_l4)', () => {
    useDojoStore.getState().completeLesson('u1_l1', 100);
    useDojoStore.getState().completeLesson('u1_l2', 100);
    useDojoStore.getState().completeLesson('u1_l3', 100);

    const remaining = useDojoStore.getState().getCooldownRemaining();
    expect(remaining).toBeGreaterThan(86000); // 24 hours = 86400 seconds
    expect(remaining).toBeLessThanOrEqual(86400);

    const lock = useDojoStore.getState().isLessonLocked('u1_l4');
    expect(lock.locked).toBe(true);
    expect(lock.reason).toBe('cooldown');
  });

  it('passDailyRevision immediately clears cooldown and unlocks the next day lesson', () => {
    useDojoStore.getState().completeLesson('u1_l1', 100);
    useDojoStore.getState().completeLesson('u1_l2', 100);
    useDojoStore.getState().completeLesson('u1_l3', 100);

    // Verify it is locked first
    expect(useDojoStore.getState().isLessonLocked('u1_l4').locked).toBe(true);

    // Pass daily revision for Day 2
    useDojoStore.getState().passDailyRevision('unit_1_day_2');

    expect(useDojoStore.getState().getCooldownRemaining()).toBe(0);
    const lockAfter = useDojoStore.getState().isLessonLocked('u1_l4');
    expect(lockAfter.locked).toBe(false);
  });

  it('auto-clears cooldown when timestamp is in the past, transitioning to daily revision requirement', () => {
    // Set cooldown in the past
    useDojoStore.setState({
      completedLessons: {
        u1_l1: { score: 100, completedAt: new Date().toISOString() },
        u1_l2: { score: 100, completedAt: new Date().toISOString() },
        u1_l3: { score: 100, completedAt: new Date().toISOString() },
      },
      cooldownUntil: new Date(Date.now() - 5000).toISOString(),
    });

    const remaining = useDojoStore.getState().getCooldownRemaining();
    expect(remaining).toBe(0);
    expect(useDojoStore.getState().cooldownUntil).toBeNull();

    // Requires passing the daily revision
    const lock = useDojoStore.getState().isLessonLocked('u1_l4');
    expect(lock.locked).toBe(true);
    expect(lock.reason).toBe('daily_revision');

    // Passing daily revision unlocks it
    useDojoStore.getState().passDailyRevision('unit_1_day_2');
    expect(useDojoStore.getState().isLessonLocked('u1_l4').locked).toBe(false);
  });
});
