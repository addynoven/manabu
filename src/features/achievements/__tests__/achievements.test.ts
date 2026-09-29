import { beforeEach, describe, expect, it } from 'vitest';
import { calculatePlayerLevel, ACHIEVEMENTS } from '../models/achievement.model';
import { useAchievementStore } from '../store/useAchievementStore';

describe('Achievement Model & Leveling', () => {
  it('calculates player levels and titles accurately', () => {
    // 0 points: Level 1 Novice
    const lvl0 = calculatePlayerLevel(0);
    expect(lvl0.level).toBe(1);
    expect(lvl0.title).toContain('Novice');
    expect(lvl0.currentLevelMinPoints).toBe(0);
    expect(lvl0.nextLevelPoints).toBe(100);
    expect(lvl0.progressPercent).toBe(0);

    // 100 points: Level 2 Apprentice
    const lvl100 = calculatePlayerLevel(100);
    expect(lvl100.level).toBe(2);
    expect(lvl100.title).toContain('Apprentice');
    expect(lvl100.currentLevelMinPoints).toBe(100);
    expect(lvl100.nextLevelPoints).toBe(400);
    expect(lvl100.progressPercent).toBe(0);

    // 250 points: Level 2, 50% progress
    const lvl250 = calculatePlayerLevel(250);
    expect(lvl250.level).toBe(2);
    expect(lvl250.progressPercent).toBe(50);

    // 400 points: Level 3 Practitioner
    const lvl400 = calculatePlayerLevel(400);
    expect(lvl400.level).toBe(3);
    expect(lvl400.title).toContain('Practitioner');

    // 3600 points: Level 7 Grandmaster
    const lvl3600 = calculatePlayerLevel(3600);
    expect(lvl3600.level).toBe(7);
    expect(lvl3600.title).toContain('Grandmaster');
  });

  it('contains at least 25 foundational achievements', () => {
    expect(ACHIEVEMENTS.length).toBeGreaterThanOrEqual(25);
    const ids = new Set(ACHIEVEMENTS.map(a => a.id));
    expect(ids.size).toBe(ACHIEVEMENTS.length); // No duplicates
  });
});

describe('useAchievementStore', () => {
  beforeEach(() => {
    useAchievementStore.setState({
      unlocked: {},
      queue: [],
    });
  });

  it('unlocks badges and adds them to toast queue without duplicates', () => {
    const { unlock, popToast } = useAchievementStore.getState();

    unlock('first_steps');
    expect(useAchievementStore.getState().unlocked['first_steps']).toBeDefined();
    expect(useAchievementStore.getState().queue.length).toBe(1);
    expect(useAchievementStore.getState().queue[0].id).toBe('first_steps');

    // Duplicate unlock should be a no-op
    unlock('first_steps');
    expect(useAchievementStore.getState().queue.length).toBe(1);

    // Pop toast removes head of queue
    popToast();
    expect(useAchievementStore.getState().queue.length).toBe(0);
  });

  it('calculates total points for unlocked achievements', () => {
    const { unlock, getTotalPoints } = useAchievementStore.getState();

    expect(getTotalPoints()).toBe(0);

    unlock('first_steps'); // 10 pts
    unlock('streak_5'); // 25 pts
    expect(getTotalPoints()).toBe(35);
  });

  it('evaluates streak milestones in checkAchievements', () => {
    const { checkAchievements } = useAchievementStore.getState();

    checkAchievements({ streak: 4 });
    expect(useAchievementStore.getState().unlocked['streak_5']).toBeUndefined();

    checkAchievements({ streak: 5 });
    expect(useAchievementStore.getState().unlocked['streak_5']).toBeDefined();
    expect(useAchievementStore.getState().unlocked['streak_10']).toBeUndefined();

    checkAchievements({ streak: 12 });
    expect(useAchievementStore.getState().unlocked['streak_10']).toBeDefined();
  });

  it('evaluates dojo exploration and dojo triad in checkAchievements', () => {
    const { checkAchievements } = useAchievementStore.getState();

    // Partial dojo practice does not trigger triad
    checkAchievements({ kanaCount: 5, kanjiCount: 0, vocabCount: 1 });
    expect(useAchievementStore.getState().unlocked['dojo_triad']).toBeUndefined();

    // Practice in all 3 triggers dojo triad
    checkAchievements({ kanaCount: 5, kanjiCount: 2, vocabCount: 1 });
    expect(useAchievementStore.getState().unlocked['dojo_triad']).toBeDefined();

    // 25 kana drills triggers kana_25
    checkAchievements({ kanaCount: 25 });
    expect(useAchievementStore.getState().unlocked['kana_25']).toBeDefined();
  });

  it('evaluates blitz and gauntlet challenges in checkAchievements', () => {
    const { checkAchievements } = useAchievementStore.getState();

    // 30s blitz
    checkAchievements({ blitzSession: { duration: 30, score: 10 } });
    expect(useAchievementStore.getState().unlocked['blitz_30s']).toBeDefined();
    expect(useAchievementStore.getState().unlocked['blitz_score_20']).toBeUndefined();

    // 60s blitz with score 22
    checkAchievements({ blitzSession: { duration: 60, score: 22 } });
    expect(useAchievementStore.getState().unlocked['blitz_60s']).toBeDefined();
    expect(useAchievementStore.getState().unlocked['blitz_score_20']).toBeDefined();

    // Gauntlet failure does not unlock clear badge
    checkAchievements({ gauntletResult: { difficulty: 'normal', cleared: false } });
    expect(useAchievementStore.getState().unlocked['gauntlet_normal']).toBeUndefined();

    // Gauntlet normal clear
    checkAchievements({ gauntletResult: { difficulty: 'normal', cleared: true } });
    expect(useAchievementStore.getState().unlocked['gauntlet_normal']).toBeDefined();

    // Gauntlet YOLO clear
    checkAchievements({ gauntletResult: { difficulty: 'instant-death', cleared: true } });
    expect(useAchievementStore.getState().unlocked['gauntlet_yolo']).toBeDefined();
  });
});
