import { describe, it, expect, beforeEach } from 'vitest';
import { useDojoStore } from '../store/useDojoStore';

describe('useDojoStore (Day-Based Pacing & Dev Mode)', () => {
  beforeEach(() => {
    useDojoStore.getState().resetDojoProgress();
  });

  it('when devUnlockAll is true, all lessons are unlocked', () => {
    useDojoStore.setState({ devUnlockAll: true });
    expect(useDojoStore.getState().isLessonLocked('u1_l1').locked).toBe(false);
    expect(useDojoStore.getState().isLessonLocked('u1_l2').locked).toBe(false);
    expect(useDojoStore.getState().isLessonLocked('u1_l5').locked).toBe(false);
  });

  describe('production locking behavior (devUnlockAll: false)', () => {
    beforeEach(() => {
      useDojoStore.setState({ devUnlockAll: false });
    });

    it('first lesson (u1_l1) is unlocked by default', () => {
      const status = useDojoStore.getState().isLessonLocked('u1_l1');
      expect(status.locked).toBe(false);
    });

    it('second lesson (u1_l2) is locked by prerequisite initially', () => {
      const status = useDojoStore.getState().isLessonLocked('u1_l2');
      expect(status.locked).toBe(true);
      expect(status.reason).toBe('prerequisite');
    });

    it('completing same-day lesson (u1_l1) unlocks u1_l2 immediately with NO cooldown', () => {
      useDojoStore.getState().completeLesson('u1_l1', 100);

      // Same day (Day 1) -> no cooldown
      expect(useDojoStore.getState().getCooldownRemaining()).toBe(0);
      const status = useDojoStore.getState().isLessonLocked('u1_l2');
      expect(status.locked).toBe(false);
    });

    it('completing last lesson of Day 1 (u1_l3) triggers 24h cooldown on Day 2 (u1_l4)', () => {
      useDojoStore.getState().completeLesson('u1_l1', 100);
      useDojoStore.getState().completeLesson('u1_l2', 100);
      useDojoStore.getState().completeLesson('u1_l3', 100);

      const cooldownSecs = useDojoStore.getState().getCooldownRemaining();
      // 24 hours = 86400 seconds
      expect(cooldownSecs).toBeGreaterThan(86000);
      expect(cooldownSecs).toBeLessThanOrEqual(86400);

      const status = useDojoStore.getState().isLessonLocked('u1_l4');
      expect(status.locked).toBe(true);
      expect(status.reason).toBe('cooldown');
    });

    it('clearing cooldown allows Day 2 (u1_l4) to be accessible', () => {
      useDojoStore.getState().completeLesson('u1_l1', 100);
      useDojoStore.getState().completeLesson('u1_l2', 100);
      useDojoStore.getState().completeLesson('u1_l3', 100);

      // Trigger early unlock
      useDojoStore.getState().clearCooldown();

      const status = useDojoStore.getState().isLessonLocked('u1_l4');
      expect(status.locked).toBe(false);
    });

    it('entering unit 2 requires passing unit 1 revision gate', () => {
      // Complete all unit 1 lessons
      for (let i = 1; i <= 15; i++) {
        useDojoStore.getState().completeLesson(`u1_l${i}`, 100);
      }
      useDojoStore.setState({ cooldownUntil: null });

      const statusBeforeGate = useDojoStore.getState().isLessonLocked('u2_l1');
      expect(statusBeforeGate.locked).toBe(true);
      expect(statusBeforeGate.reason).toBe('revision_gate');

      // Pass revision gate for unit_1
      useDojoStore.getState().passRevisionGate('unit_1');

      const statusAfterGate = useDojoStore.getState().isLessonLocked('u2_l1');
      expect(statusAfterGate.locked).toBe(false);
    });
  });
});
