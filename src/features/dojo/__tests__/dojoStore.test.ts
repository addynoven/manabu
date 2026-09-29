import { describe, it, expect, beforeEach } from 'vitest';
import { useDojoStore } from '../store/useDojoStore';

describe('useDojoStore', () => {
  beforeEach(() => {
    useDojoStore.getState().resetDojoProgress();
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

  it('completing u1_l1 sets a strict cooldown lock on u1_l2', () => {
    useDojoStore.getState().completeLesson('u1_l1', 100);

    const status = useDojoStore.getState().isLessonLocked('u1_l2');
    expect(status.locked).toBe(true);
    expect(status.reason).toBe('cooldown');
    expect(status.remainingSeconds).toBeGreaterThan(0);
  });

  it('clearing cooldown allows u1_l2 to be accessible', () => {
    useDojoStore.getState().completeLesson('u1_l1', 100);

    // Simulate cooldown expiring
    useDojoStore.setState({ cooldownUntil: new Date(Date.now() - 1000).toISOString() });

    const status = useDojoStore.getState().isLessonLocked('u1_l2');
    expect(status.locked).toBe(false);
  });

  it('entering unit 2 requires passing unit 1 revision gate', () => {
    // Complete all unit 1 lessons
    useDojoStore.getState().completeLesson('u1_l1', 100);
    useDojoStore.getState().completeLesson('u1_l2', 100);
    useDojoStore.getState().completeLesson('u1_l3', 100);

    // Expire cooldown
    useDojoStore.setState({ cooldownUntil: null });

    // u2_l1 should be locked by revision gate
    const statusBeforeGate = useDojoStore.getState().isLessonLocked('u2_l1');
    expect(statusBeforeGate.locked).toBe(true);
    expect(statusBeforeGate.reason).toBe('revision_gate');

    // Pass revision gate for unit_1
    useDojoStore.getState().passRevisionGate('unit_1');

    const statusAfterGate = useDojoStore.getState().isLessonLocked('u2_l1');
    expect(statusAfterGate.locked).toBe(false);
  });
});
