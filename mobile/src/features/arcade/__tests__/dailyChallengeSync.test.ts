import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useArcadeStore } from '../store/useArcadeStore';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { cloudSyncService } from '../../sync/services/cloudSync.service';
import type { FriendUser } from '../../community/models/community.model';

vi.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: vi.fn(),
    hasPlayServices: vi.fn().mockResolvedValue(true),
    signIn: vi.fn(),
    signOut: vi.fn().mockResolvedValue(null),
  },
  statusCodes: {},
}));

vi.mock('../../../core/api/firebase', () => ({
  firebaseDb: {},
  firebaseAuth: {
    currentUser: { uid: 'test-user-v32', email: 'v32@manabu.app' },
  },
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn((_db, ...parts) => parts.join('/')),
  setDoc: vi.fn().mockResolvedValue(undefined),
  getDoc: vi.fn().mockResolvedValue({ exists: () => false, data: () => null }),
  serverTimestamp: vi.fn(() => ({ _methodName: 'serverTimestamp' })),
}));

// Mock apiClient to capture payload
const mockApiClient = vi.fn().mockResolvedValue({ ok: true });
vi.mock('../../../core/api/httpClient', () => ({
  apiClient: (...args: any[]) => mockApiClient(...args),
}));

describe('V3.2 Daily Challenge & Social Standings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useArcadeStore.getState().resetArcadeStats();
  });

  it('records daily challenge score, time, accuracy and maintains streak', () => {
    const today = new Date().toISOString().split('T')[0];

    useArcadeStore.getState().recordDailyChallenge(580, 24, 100);

    const state = useArcadeStore.getState();
    expect(state.dailyChallengeCompleted).toBe(true);
    expect(state.dailyChallengeDate).toBe(today);
    expect(state.dailyChallengeStreak).toBe(1);
    expect(state.dailyChallengeLastResult).toEqual({
      score: 580,
      timeSeconds: 24,
      accuracy: 100,
      date: today,
    });
  });

  it('increments streak if yesterday was completed', () => {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];

    useArcadeStore.setState({
      dailyChallengeDate: yesterday,
      dailyChallengeStreak: 4,
    });

    useArcadeStore.getState().recordDailyChallenge(600, 18, 100);

    const state = useArcadeStore.getState();
    expect(state.dailyChallengeStreak).toBe(5);
  });

  it('immediately triggers profile sync with daily challenge payload', async () => {
    const today = new Date().toISOString().split('T')[0];
    useArcadeStore.getState().recordDailyChallenge(650, 15, 100);

    cloudSyncService.triggerThrottledSync(true);
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(mockApiClient).toHaveBeenCalled();
    const calls = mockApiClient.mock.calls;
    const profileCall = calls.find(call => call[0] === '/api/v1/profile');
    expect(profileCall).toBeDefined();

    const body = JSON.parse(profileCall![1].body);
    expect(body.daily).toEqual({
      date: today,
      score: 650,
      timeSeconds: 15,
      accuracy: 100,
    });
  });

  it('ranks friends and current user for today by score descending and time ascending', () => {
    const todayStr = '2026-10-03';
    const myResult = {
      uid: 'me',
      displayName: 'Kenji',
      avatarEmoji: '🥋',
      score: 550,
      timeSeconds: 22,
      accuracy: 100,
      isMe: true,
    };

    const mockFriends: FriendUser[] = [
      {
        uid: 'friend-1',
        displayName: 'Yuki',
        avatarEmoji: '🦊',
        beltRank: 'green',
        level: 4,
        currentStreak: 5,
        weeklyXp: 300,
        lastActiveDate: todayStr,
        daily: {
          date: todayStr,
          score: 620,
          timeSeconds: 18,
          accuracy: 100,
        },
      },
      {
        uid: 'friend-2',
        displayName: 'Taro',
        avatarEmoji: '👺',
        beltRank: 'yellow',
        level: 2,
        currentStreak: 2,
        weeklyXp: 150,
        lastActiveDate: todayStr,
        daily: {
          date: todayStr,
          score: 550, // Tied score, but slower time
          timeSeconds: 35,
          accuracy: 100,
        },
      },
      {
        uid: 'friend-3',
        displayName: 'Hanako',
        avatarEmoji: '🌸',
        beltRank: 'white',
        level: 1,
        currentStreak: 1,
        weeklyXp: 50,
        lastActiveDate: '2026-10-01',
        daily: null, // Did not complete today
      },
      {
        uid: 'friend-4',
        displayName: 'Ren',
        avatarEmoji: '⚡',
        beltRank: 'blue',
        level: 5,
        currentStreak: 10,
        weeklyXp: 500,
        lastActiveDate: '2026-10-02',
        daily: {
          date: '2026-10-02', // From yesterday, not today
          score: 700,
          timeSeconds: 12,
          accuracy: 100,
        },
      },
    ];

    // Filter to today and combine
    const activeToday = mockFriends
      .filter(f => f.daily && f.daily.date === todayStr)
      .map(f => ({
        uid: f.uid,
        displayName: f.displayName,
        avatarEmoji: f.avatarEmoji,
        score: f.daily!.score,
        timeSeconds: f.daily!.timeSeconds,
        accuracy: f.daily!.accuracy,
        isMe: false,
      }));

    const combined = [myResult, ...activeToday].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.timeSeconds - b.timeSeconds;
    });

    expect(combined).toHaveLength(3);
    // 1st: Yuki with 620 pts
    expect(combined[0].displayName).toBe('Yuki');
    expect(combined[0].score).toBe(620);

    // 2nd: Me with 550 pts (22s beats Taro's 35s)
    expect(combined[1].displayName).toBe('Kenji');
    expect(combined[1].isMe).toBe(true);
    expect(combined[1].timeSeconds).toBe(22);

    // 3rd: Taro with 550 pts (35s)
    expect(combined[2].displayName).toBe('Taro');
    expect(combined[2].timeSeconds).toBe(35);
  });
});
