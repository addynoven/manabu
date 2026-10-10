import { AppState, type AppStateStatus } from 'react-native';
import { firebaseAuth } from '../../../core/api/firebase';
import { apiClient } from '../../../core/api/httpClient';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { useArcadeStore } from '../../arcade/store/useArcadeStore';
import { useChallengeStore } from '../../challenges/store/useChallengeStore';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useThemeStore } from '../../../core/theme/useThemeStore';
import { calculatePlayerLevel } from '../../achievements/models/achievement.model';
import { getWeekId } from '../../community/models/social.model';
import { useCommunityStore } from '../../community/store/useCommunityStore';
import {
  type CompleteCloudSyncSnapshot,
  CompleteCloudSyncSnapshotSchema,
  type SyncStatusState,
  type BeltRank,
} from '../models/sync.model';
import { ok, err, type Result } from '../../../core/errors/result';

const BELT_ORDER: BeltRank[] = [
  'white',
  'yellow',
  'green',
  'blue',
  'purple',
  'brown',
  'black',
];

class CloudSyncService {
  private syncStatus: SyncStatusState = {
    isSyncing: false,
    lastSyncedAt: null,
    lastError: null,
  };

  private listeners: Set<(status: SyncStatusState) => void> = new Set();
  private throttleTimer: ReturnType<typeof setTimeout> | null = null;
  private pollTimer: ReturnType<typeof setInterval> | null = null;
  private lastSyncedTime = 0;
  private readonly THROTTLE_MS = 15 * 1000; // 15 seconds debounce when local learning changes occur
  private readonly POLL_INTERVAL_MS = 30 * 1000; // 30 seconds background check when app is active (WhatsApp/Discord style)

  public getStatus(): SyncStatusState {
    return { ...this.syncStatus };
  }

  public subscribe(listener: (status: SyncStatusState) => void): () => void {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const status = this.getStatus();
    this.listeners.forEach(fn => {
      try {
        fn(status);
      } catch (e) {
        console.error('[CloudSync] Listener error:', e);
      }
    });
  }

  private updateStatus(patch: Partial<SyncStatusState>) {
    this.syncStatus = { ...this.syncStatus, ...patch };
    this.notify();
  }

  /**
   * Save current local progress:
   * 1. Public profile -> Next.js API (/api/v1/profile on Vercel)
   * 2. Complete backup -> Firestore private sync (users/{userId}/private/sync)
   */
  public async saveUserProgressToCloud(userId: string): Promise<Result<void, Error>> {
    if (!userId) {
      return err(new Error('User ID is required to save progress to cloud'));
    }

    this.updateStatus({ isSyncing: true, lastError: null });

    try {
      const stats = useProgressStore.getState();
      const dojo = useDojoStore.getState();
      const achievements = useAchievementStore.getState();
      const arcade = useArcadeStore.getState();
      const challenges = useChallengeStore.getState();
      const settings = useSettingsStore.getState();
      const themeState = useThemeStore.getState();

      const totalPoints = achievements.getTotalPoints();
      const levelInfo = calculatePlayerLevel(totalPoints);
      const beltRank: BeltRank =
        BELT_ORDER[Math.min(Math.max(0, levelInfo.level - 1), BELT_ORDER.length - 1)];

      // 1. Sync Public Profile to Next.js API (/api/v1/profile)
      const currentWeek = getWeekId();
      const apiProfilePayload = {
        displayName: (stats.displayName || 'Manabu Student').trim().slice(0, 24),
        avatarEmoji: (stats.avatarEmoji || '🥋').slice(0, 16),
        beltRank,
        level: Math.max(1, levelInfo.level || 1),
        totalXp: Math.max(0, stats.totalXp || 0),
        weeklyXp: Math.max(0, stats.weeklyXp || 0),
        weekId: stats.weekId || currentWeek,
        currentStreak: Math.max(0, stats.currentStreak || 0),
        lastActiveDate: stats.lastActiveDate || null,
        daily: arcade.dailyChallengeLastResult ? {
          date: arcade.dailyChallengeDate || new Date().toISOString().split('T')[0],
          score: arcade.dailyChallengeLastResult.score,
          timeSeconds: arcade.dailyChallengeLastResult.timeSeconds,
          accuracy: arcade.dailyChallengeLastResult.accuracy,
        } : null,
      };

      // 1. Sync Public Profile to Next.js API (/api/v1/profile)
      try {
        const putProfileRes = await apiClient<{ profile?: { friendCode?: string } }>('/api/v1/profile', {
          method: 'PUT',
          body: JSON.stringify(apiProfilePayload),
        });
        if (putProfileRes.ok && putProfileRes.data?.profile?.friendCode) {
          useCommunityStore.setState({ myFriendCode: putProfileRes.data.profile.friendCode });
        }
      } catch (err) {
        console.warn('[CloudSync] API Profile sync notice:', err);
      }

      // 2. Build & validate Complete Private Backup Data ("Lost Phone Guarantee")
      const rawPrivateSync: CompleteCloudSyncSnapshot = {
        version: 1,
        syncedAt: new Date().toISOString(),
        stats: {
          currentStreak: stats.currentStreak,
          bestStreak: stats.bestStreak,
          lastActiveDate: stats.lastActiveDate,
          totalQuestionsAnswered: stats.totalQuestionsAnswered,
          totalCorrect: stats.totalCorrect,
          totalXp: stats.totalXp,
          weeklyXp: stats.weeklyXp,
          weekId: stats.weekId || getWeekId(),
          todayXp: stats.todayXp,
          todayDate: stats.todayDate,
          dailyGoalXp: stats.dailyGoalXp,
          displayName: stats.displayName,
          avatarEmoji: stats.avatarEmoji,
          joinedDate: stats.joinedDate,
          kanaPracticedCount: stats.kanaPracticedCount,
          kanjiPracticedCount: stats.kanjiPracticedCount,
          vocabPracticedCount: stats.vocabPracticedCount,
          mastery: stats.mastery,
        },
        dojo: {
          completedLessons: dojo.completedLessons,
          cooldownUntil: dojo.cooldownUntil,
          passedRevisionGates: dojo.passedRevisionGates,
          passedDailyRevisions: dojo.passedDailyRevisions,
          activeLessonId: dojo.activeLessonId,
        },
        achievements: {
          unlocked: achievements.unlocked,
          totalPoints,
        },
        arcade: {
          highScores: {
            rain: arcade.rainHighScore,
            snake: arcade.snakeHighScore,
            catch: arcade.catchHighScore,
            wordleWins: arcade.wordleWins,
          },
          totalGamesPlayed: arcade.wordlePlayed,
          gamesWon: arcade.wordleWins,
        },
        challenges: {
          dailyChallengesCompleted: arcade.dailyChallengeDate
            ? { [arcade.dailyChallengeDate]: arcade.dailyChallengeCompleted }
            : {},
          blitzHighScores: Object.fromEntries(
            Object.entries(challenges.blitzRecords || {}).map(([k, v]) => [k, v.bestScore]),
          ),
          gauntletClears: Object.fromEntries(
            Object.entries(challenges.gauntletRecords || {}).map(([k, v]) => [k, v.clears > 0]),
          ),
        },
        settings: {
          hapticsEnabled: settings.hapticsEnabled,
          ttsEnabled: settings.ttsEnabled,
          ttsRate: settings.ttsRate,
          showFuriganaInDrills: settings.showFuriganaInDrills,
          showRomajiInCharts: settings.showRomajiInCharts,
          activeThemeId: themeState.activeThemeId || settings.themeId,
        },
      };

      const validatedPrivateSync = CompleteCloudSyncSnapshotSchema.parse(rawPrivateSync);

      // 2. Write full private backup to PostgreSQL via API (/api/v1/backup)
      const backupRes = await apiClient<{ ok: boolean; syncedAt: string }>('/api/v1/backup', {
        method: 'PUT',
        body: JSON.stringify(validatedPrivateSync),
      });

      if (!backupRes.ok) {
        throw new Error(backupRes.error?.message || 'Failed to save cloud backup to server');
      }

      const nowIso = new Date().toISOString();
      this.lastSyncedTime = Date.now();
      this.updateStatus({
        isSyncing: false,
        lastSyncedAt: nowIso,
        lastError: null,
      });

      return ok(undefined);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CloudSync] saveUserProgressToCloud error:', errObj);
      this.updateStatus({
        isSyncing: false,
        lastError: errObj.message,
      });
      return err(errObj);
    }
  }

  /**
   * Load and restore complete user progress from PostgreSQL private backup.
   */
  public async loadUserProgressFromCloud(userId: string): Promise<Result<CompleteCloudSyncSnapshot | null, Error>> {
    if (!userId) {
      return err(new Error('User ID is required to restore cloud progress'));
    }

    this.updateStatus({ isSyncing: true, lastError: null });

    try {
      const backupRes = await apiClient<{ backup: CompleteCloudSyncSnapshot | null; syncedAt: string | null }>(
        '/api/v1/backup'
      );

      if (!backupRes.ok) {
        throw new Error(backupRes.error?.message || 'Failed to load cloud backup from server');
      }

      if (!backupRes.data?.backup) {
        this.updateStatus({ isSyncing: false });
        return ok(null);
      }

      const parsed = CompleteCloudSyncSnapshotSchema.safeParse(backupRes.data.backup);
      if (!parsed.success) {
        throw new Error(`Corrupted cloud sync data: ${parsed.error.issues[0]?.message}`);
      }

      const data = parsed.data;

      // 1. Progress & SRS Mastery - Merge with high-water marks
      useProgressStore.setState(prev => ({
        ...prev,
        totalXp: Math.max(prev.totalXp, data.stats.totalXp),
        weeklyXp: Math.max(prev.weeklyXp, data.stats.weeklyXp),
        todayXp: Math.max(prev.todayXp, data.stats.todayXp),
        currentStreak: Math.max(prev.currentStreak, data.stats.currentStreak),
        bestStreak: Math.max(prev.bestStreak, data.stats.bestStreak),
        totalQuestionsAnswered: Math.max(prev.totalQuestionsAnswered, data.stats.totalQuestionsAnswered),
        totalCorrect: Math.max(prev.totalCorrect, data.stats.totalCorrect),
        displayName: data.stats.displayName || prev.displayName,
        avatarEmoji: data.stats.avatarEmoji || prev.avatarEmoji,
        lastActiveDate: data.stats.lastActiveDate || prev.lastActiveDate,
        joinedDate: data.stats.joinedDate || prev.joinedDate,
        kanaPracticedCount: Math.max(prev.kanaPracticedCount, data.stats.kanaPracticedCount || 0),
        kanjiPracticedCount: Math.max(prev.kanjiPracticedCount, data.stats.kanjiPracticedCount || 0),
        vocabPracticedCount: Math.max(prev.vocabPracticedCount, data.stats.vocabPracticedCount || 0),
        mastery: { ...prev.mastery, ...data.stats.mastery },
      }));

      // 2. Dojo Curriculum State - Union of completed lessons & gates
      useDojoStore.setState(prev => ({
        ...prev,
        completedLessons: { ...prev.completedLessons, ...data.dojo.completedLessons },
        passedRevisionGates: { ...prev.passedRevisionGates, ...data.dojo.passedRevisionGates },
        passedDailyRevisions: { ...prev.passedDailyRevisions, ...data.dojo.passedDailyRevisions },
        activeLessonId: data.dojo.activeLessonId || prev.activeLessonId,
        cooldownUntil: data.dojo.cooldownUntil ?? prev.cooldownUntil,
      }));

      // 3. Achievements - Union of unlocked achievements
      useAchievementStore.setState(prev => ({
        ...prev,
        unlocked: { ...prev.unlocked, ...data.achievements.unlocked },
      }));

      // 4. Arcade Scores - High water marks
      if (data.arcade) {
        useArcadeStore.setState(prev => ({
          ...prev,
          rainHighScore: Math.max(prev.rainHighScore, data.arcade?.highScores?.rain || 0),
          snakeHighScore: Math.max(prev.snakeHighScore, data.arcade?.highScores?.snake || 0),
          catchHighScore: Math.max(prev.catchHighScore, data.arcade?.highScores?.catch || 0),
          wordleWins: Math.max(prev.wordleWins, data.arcade?.highScores?.wordleWins || 0),
          wordlePlayed: Math.max(prev.wordlePlayed, data.arcade?.totalGamesPlayed || 0),
        }));
      }

      // 5. Settings
      if (data.settings) {
        useSettingsStore.setState(prev => ({
          ...prev,
          hapticsEnabled: data.settings?.hapticsEnabled ?? prev.hapticsEnabled,
          ttsEnabled: data.settings?.ttsEnabled ?? prev.ttsEnabled,
          ttsRate: data.settings?.ttsRate ?? prev.ttsRate,
          showFuriganaInDrills: data.settings?.showFuriganaInDrills ?? prev.showFuriganaInDrills,
          showRomajiInCharts: data.settings?.showRomajiInCharts ?? prev.showRomajiInCharts,
          themeId: data.settings?.activeThemeId || prev.themeId,
        }));
      }

      const nowIso = new Date().toISOString();
      this.lastSyncedTime = Date.now();
      this.updateStatus({
        isSyncing: false,
        lastSyncedAt: nowIso,
        lastError: null,
      });

      return ok(data);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CloudSync] loadUserProgressFromCloud error:', errObj);
      this.updateStatus({
        isSyncing: false,
        lastError: errObj.message,
      });
      return err(errObj);
    }
  }

  public async syncOnAuthChange(userId: string): Promise<void> {
    if (!userId) return;
    try {
      // 1. Fetch latest backup from server
      const loadRes = await this.loadUserProgressFromCloud(userId);
      if (loadRes.ok && loadRes.data) {
        return;
      }
    } catch {}

    // Fallback: If no server backup exists yet, save current local progress
    await this.saveUserProgressToCloud(userId);
  }

  /**
   * Throttled sync: at most once every 3 minutes while active,
   * or immediately when force is true (e.g. on backgrounding or after daily gauntlet).
   */
  public triggerThrottledSync(force = false): void {
    const user = firebaseAuth.currentUser;
    if (!user || !user.uid) return;

    const now = Date.now();
    const elapsed = now - this.lastSyncedTime;

    if (!force && elapsed < this.THROTTLE_MS) {
      if (!this.throttleTimer) {
        this.throttleTimer = setTimeout(() => {
          this.throttleTimer = null;
          this.triggerThrottledSync(true);
        }, this.THROTTLE_MS - elapsed);
      }
      return;
    }

    if (this.throttleTimer) {
      clearTimeout(this.throttleTimer);
      this.throttleTimer = null;
    }

    this.lastSyncedTime = now;
    this.saveUserProgressToCloud(user.uid).catch(() => {});
  }

  /**
   * Initialize reactive listeners on local Zustand stores and AppState
   * for invisible, throttled background sync.
   */
  public initializeReactiveSync(): () => void {
    const startPolling = () => {
      if (this.pollTimer) clearInterval(this.pollTimer);
      this.pollTimer = setInterval(() => {
        const user = firebaseAuth.currentUser;
        if (user?.uid && !this.syncStatus.isSyncing) {
          this.loadUserProgressFromCloud(user.uid).catch(() => {});
        }
      }, this.POLL_INTERVAL_MS);
    };

    const stopPolling = () => {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    };

    // Initial check and start active polling
    startPolling();
    const initialUser = firebaseAuth.currentUser;
    if (initialUser?.uid) {
      this.loadUserProgressFromCloud(initialUser.uid).catch(() => {});
    }

    // Sync on app state changes: pull on active, push on background/inactive
    const appStateSub = AppState.addEventListener('change', (nextState: AppStateStatus) => {
      const user = firebaseAuth.currentUser;
      if (nextState === 'active') {
        startPolling();
        if (user?.uid) {
          this.loadUserProgressFromCloud(user.uid).catch(() => {});
        }
      } else if (nextState === 'background' || nextState === 'inactive') {
        stopPolling();
        this.triggerThrottledSync(true);
      }
    });

    const unsubProgress = useProgressStore.subscribe((state, prevState) => {
      if (
        state.totalXp !== prevState.totalXp ||
        state.totalQuestionsAnswered !== prevState.totalQuestionsAnswered ||
        state.currentStreak !== prevState.currentStreak ||
        state.displayName !== prevState.displayName ||
        state.avatarEmoji !== prevState.avatarEmoji ||
        Object.keys(state.mastery).length !== Object.keys(prevState.mastery).length
      ) {
        this.triggerThrottledSync(false);
      }
    });

    const unsubDojo = useDojoStore.subscribe((state, prevState) => {
      if (
        state.completedLessons !== prevState.completedLessons ||
        state.passedRevisionGates !== prevState.passedRevisionGates ||
        state.passedDailyRevisions !== prevState.passedDailyRevisions
      ) {
        this.triggerThrottledSync(false);
      }
    });

    const unsubAchievements = useAchievementStore.subscribe((state, prevState) => {
      if (state.unlocked !== prevState.unlocked) {
        this.triggerThrottledSync(false);
      }
    });

    const unsubArcade = useArcadeStore.subscribe((state, prevState) => {
      if (
        state.wordlePlayed !== prevState.wordlePlayed ||
        state.catchHighScore !== prevState.catchHighScore ||
        state.rainHighScore !== prevState.rainHighScore ||
        state.snakeHighScore !== prevState.snakeHighScore ||
        state.dailyChallengeCompleted !== prevState.dailyChallengeCompleted
      ) {
        // If daily challenge was just completed, force sync immediately
        const isDailyDone = state.dailyChallengeCompleted && !prevState.dailyChallengeCompleted;
        this.triggerThrottledSync(isDailyDone);
      }
    });

    const unsubSettings = useSettingsStore.subscribe((state, prevState) => {
      if (
        state.hapticsEnabled !== prevState.hapticsEnabled ||
        state.ttsEnabled !== prevState.ttsEnabled ||
        state.showFuriganaInDrills !== prevState.showFuriganaInDrills ||
        state.showRomajiInCharts !== prevState.showRomajiInCharts ||
        state.themeId !== prevState.themeId
      ) {
        this.triggerThrottledSync(false);
      }
    });

    return () => {
      stopPolling();
      appStateSub.remove();
      unsubProgress();
      unsubDojo();
      unsubAchievements();
      unsubArcade();
      unsubSettings();
    };
  }
}

export const cloudSyncService = new CloudSyncService();

// Initialize listeners globally for invisible automatic syncing
cloudSyncService.initializeReactiveSync();
