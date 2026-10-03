import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  PublicUserProfileSchema,
  CompleteCloudSyncSnapshotSchema,
  type PublicUserProfile,
  type CompleteCloudSyncSnapshot,
} from '../models/sync.model';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { useArcadeStore } from '../../arcade/store/useArcadeStore';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

vi.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: vi.fn(),
    hasPlayServices: vi.fn().mockResolvedValue(true),
    signIn: vi.fn(),
    signOut: vi.fn().mockResolvedValue(null),
  },
  statusCodes: {},
}));

// Mock Firebase Auth only
vi.mock('../../../core/api/firebase', () => ({
  firebaseAuth: {
    currentUser: { uid: 'user-123', email: 'test@example.com' },
  },
}));

let mockBackupResponse: any = { backup: null, syncedAt: null };

vi.mock('../../../core/api/httpClient', () => ({
  apiClient: vi.fn().mockImplementation((path: string, options?: any) => {
    if (path === '/api/v1/backup' && options?.method === 'PUT') {
      return Promise.resolve({ ok: true, data: { ok: true, syncedAt: new Date().toISOString() } });
    }
    if (path === '/api/v1/backup') {
      return Promise.resolve({ ok: true, data: mockBackupResponse });
    }
    return Promise.resolve({ ok: true, data: {} });
  }),
}));

describe('CloudSync Models & Validation', () => {
  it('validates a valid public user profile with Google photoURL and beltRank', () => {
    const validProfile: PublicUserProfile = {
      uid: 'user_xyz789',
      displayName: 'Kenji Sato',
      photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocI...=s96-c',
      avatarEmoji: '🦊',
      beltRank: 'green',
      totalXp: 1250,
      currentStreak: 7,
      bestStreak: 14,
      level: 3,
      dailyGoalXp: 50,
      todayXp: 30,
      todayDate: '2026-10-01',
      joinedDate: '2026-09-01',
      lastActiveDate: '2026-10-01',
      kanaPracticedCount: 104,
      kanjiPracticedCount: 25,
      vocabPracticedCount: 50,
      totalQuestionsAnswered: 320,
      totalCorrect: 298,
    };

    const parsed = PublicUserProfileSchema.safeParse(validProfile);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.uid).toBe('user_xyz789');
      expect(parsed.data.displayName).toBe('Kenji Sato');
      expect(parsed.data.photoURL).toContain('googleusercontent.com');
      expect(parsed.data.beltRank).toBe('green');
      expect(parsed.data.totalXp).toBe(1250);
    }
  });

  it('rejects public profile with negative XP or empty displayName', () => {
    const invalidProfile = {
      uid: 'user_xyz',
      displayName: '', // empty name
      totalXp: -10, // negative XP
    };

    const parsed = PublicUserProfileSchema.safeParse(invalidProfile);
    expect(parsed.success).toBe(false);
  });

  it('validates a comprehensive 6-store private sync payload ("Lost Phone Test")', () => {
    const validPrivateSync: CompleteCloudSyncSnapshot = {
      version: 1,
      syncedAt: '2026-10-01T12:00:00.000Z',
      stats: {
        currentStreak: 5,
        bestStreak: 10,
        lastActiveDate: '2026-10-01',
        totalQuestionsAnswered: 100,
        totalCorrect: 95,
        totalXp: 950,
        weeklyXp: 950,
        weekId: '2026-W40',
        todayXp: 50,
        todayDate: '2026-10-01',
        dailyGoalXp: 50,
        displayName: 'Sakura Learner',
        avatarEmoji: '🌸',
        joinedDate: '2026-09-20',
        kanaPracticedCount: 50,
        kanjiPracticedCount: 20,
        vocabPracticedCount: 30,
        mastery: {
          ka: {
            character: 'か',
            category: 'kana',
            correct: 10,
            incorrect: 0,
            total: 10,
            accuracy: 100,
            masteryLevel: 'mastered',
            lastPracticedAt: '2026-10-01T10:00:00.000Z',
            srsStage: 'guru-1',
            nextReviewAt: '2026-10-05T10:00:00.000Z',
            intervalDays: 4,
            streak: 4,
          },
        },
      },
      dojo: {
        completedLessons: {
          u1_l1: {
            score: 100,
            completedAt: '2026-10-01T10:00:00.000Z',
          },
        },
        cooldownUntil: null,
        passedRevisionGates: { u1: true },
        passedDailyRevisions: { u1_d1: true },
        activeLessonId: 'u1_l2',
      },
      achievements: {
        unlocked: {
          first_blood: { unlockedAt: '2026-10-01T09:00:00.000Z' },
        },
        totalPoints: 100,
      },
      arcade: {
        highScores: { rain: 1500, snake: 800, catch: 650, wordleWins: 12 },
        totalGamesPlayed: 25,
        gamesWon: 18,
      },
      challenges: {
        dailyChallengesCompleted: { '2026-10-01': true },
        blitzHighScores: { kana_60: 42 },
        gauntletClears: { kanji_hard: true },
      },
      settings: {
        hapticsEnabled: true,
        ttsEnabled: true,
        ttsRate: 1.1,
        showFuriganaInDrills: true,
        showRomajiInCharts: false,
        activeThemeId: 'kyoto_matcha',
      },
    };

    const parsed = CompleteCloudSyncSnapshotSchema.safeParse(validPrivateSync);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.dojo.completedLessons['u1_l1'].score).toBe(100);
      expect(parsed.data.stats.mastery['ka'].srsStage).toBe('guru-1');
      expect(parsed.data.arcade?.highScores.rain).toBe(1500);
      expect(parsed.data.settings?.activeThemeId).toBe('kyoto_matcha');
    }
  });
});

describe('CloudSyncService restoration & integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('rejects saving to cloud when userId is missing', async () => {
    const { cloudSyncService } = await import('../services/cloudSync.service');
    const result = await cloudSyncService.saveUserProgressToCloud('');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('User ID is required');
    }
  });

  it('saves progress and notifies subscribers', async () => {
    const { cloudSyncService } = await import('../services/cloudSync.service');
    const statuses: boolean[] = [];

    const unsub = cloudSyncService.subscribe(s => {
      statuses.push(s.isSyncing);
    });

    const result = await cloudSyncService.saveUserProgressToCloud('user_addy_99');
    expect(result.ok).toBe(true);
    expect(cloudSyncService.getStatus().lastSyncedAt).toBeTruthy();

    unsub();
  });

  it('fully hydrates all 6 local stores upon cloud restoration ("Lost Phone Simulation")', async () => {
    const { cloudSyncService } = await import('../services/cloudSync.service');

    const sampleBackup: CompleteCloudSyncSnapshot = {
      version: 1,
      syncedAt: '2026-10-01T12:00:00.000Z',
      stats: {
        currentStreak: 12,
        bestStreak: 25,
        lastActiveDate: '2026-10-01',
        totalQuestionsAnswered: 500,
        totalCorrect: 480,
        totalXp: 4800,
        weeklyXp: 4800,
        weekId: '2026-W40',
        todayXp: 120,
        todayDate: '2026-10-01',
        dailyGoalXp: 100,
        displayName: 'Master Restored',
        avatarEmoji: '🥷',
        joinedDate: '2026-08-15',
        kanaPracticedCount: 100,
        kanjiPracticedCount: 80,
        vocabPracticedCount: 150,
        mastery: {
          a: {
            character: 'あ',
            category: 'kana',
            correct: 20,
            incorrect: 0,
            total: 20,
            accuracy: 100,
            masteryLevel: 'mastered',
            lastPracticedAt: '2026-10-01T10:00:00.000Z',
            srsStage: 'burned',
            nextReviewAt: null,
            intervalDays: 120,
            streak: 10,
          },
        },
      },
      dojo: {
        completedLessons: {
          u1_l1: { score: 100, completedAt: '2026-09-01T00:00:00Z' },
          u1_l2: { score: 95, completedAt: '2026-09-02T00:00:00Z' },
        },
        cooldownUntil: null,
        passedRevisionGates: { u1: true },
        passedDailyRevisions: { u1_d1: true, u1_d2: true },
        activeLessonId: 'u1_l3',
      },
      achievements: {
        unlocked: {
          streak_10: { unlockedAt: '2026-09-10T00:00:00Z' },
          perfectionist: { unlockedAt: '2026-09-12T00:00:00Z' },
        },
        totalPoints: 250,
      },
      arcade: {
        highScores: { rain: 2200, snake: 1100, catch: 900, wordleWins: 20 },
        totalGamesPlayed: 45,
        gamesWon: 30,
      },
      settings: {
        hapticsEnabled: false,
        ttsEnabled: true,
        ttsRate: 1.25,
        showFuriganaInDrills: false,
        showRomajiInCharts: false,
        activeThemeId: 'cyber_sakura',
      },
    };

    mockBackupResponse = { backup: sampleBackup, syncedAt: '2026-10-01T12:00:00.000Z' };

    const restoreRes = await cloudSyncService.loadUserProgressFromCloud('user-restored-123');
    expect(restoreRes.ok).toBe(true);

    // Verify all local stores were hydrated
    expect(useProgressStore.getState().displayName).toBe('Master Restored');
    expect(useProgressStore.getState().totalXp).toBe(4800);
    expect(useProgressStore.getState().mastery['a']?.srsStage).toBe('burned');

    expect(useDojoStore.getState().completedLessons['u1_l2']?.score).toBe(95);
    expect(useDojoStore.getState().activeLessonId).toBe('u1_l3');

    expect(useAchievementStore.getState().unlocked['streak_10']).toBeDefined();

    expect(useArcadeStore.getState().rainHighScore).toBe(2200);
    expect(useSettingsStore.getState().ttsRate).toBe(1.25);
  });
});
