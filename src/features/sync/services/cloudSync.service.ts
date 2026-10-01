import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseDb, firebaseAuth } from '../../../core/api/firebase';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { useArcadeStore } from '../../arcade/store/useArcadeStore';
import { useChallengeStore } from '../../challenges/store/useChallengeStore';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useThemeStore } from '../../../core/theme/useThemeStore';
import { useAuthStore } from '../../auth/store/useAuthStore';
import { calculatePlayerLevel } from '../../achievements/models/achievement.model';
import {
  type PublicUserProfile,
  PublicUserProfileSchema,
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
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

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
   * Save current local progress to Firestore.
   * Updates public profile `users/{userId}` and private complete backup `users/{userId}/private/sync`.
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
      const currentUser = useAuthStore.getState().currentUser;

      const totalPoints = achievements.getTotalPoints();
      const levelInfo = calculatePlayerLevel(totalPoints);
      const beltRank: BeltRank =
        BELT_ORDER[Math.min(Math.max(0, levelInfo.level - 1), BELT_ORDER.length - 1)];

      // 1. Build & validate Public Profile matching firestore.rules whitelist
      const rawPublicProfile: PublicUserProfile = {
        uid: userId,
        displayName: (currentUser?.displayName || stats.displayName || 'Manabu Learner').trim().slice(0, 100),
        photoURL: currentUser?.avatarUrl || null,
        totalXp: Math.max(0, stats.totalXp || 0),
        avatarEmoji: (stats.avatarEmoji || '🥋').slice(0, 20),
        beltRank,
        level: Math.max(1, levelInfo.level || 1),
        currentStreak: Math.max(0, stats.currentStreak || 0),
        bestStreak: Math.max(0, stats.bestStreak || 0),
        dailyGoalXp: Math.max(10, stats.dailyGoalXp || 50),
        todayXp: Math.max(0, stats.todayXp || 0),
        todayDate: stats.todayDate || null,
        joinedDate: stats.joinedDate || new Date().toISOString().split('T')[0],
        lastActiveDate: stats.lastActiveDate || null,
        kanaPracticedCount: Math.max(0, stats.kanaPracticedCount || 0),
        kanjiPracticedCount: Math.max(0, stats.kanjiPracticedCount || 0),
        vocabPracticedCount: Math.max(0, stats.vocabPracticedCount || 0),
        totalQuestionsAnswered: Math.max(0, stats.totalQuestionsAnswered || 0),
        totalCorrect: Math.max(0, stats.totalCorrect || 0),
      };

      const validatedProfile = PublicUserProfileSchema.parse(rawPublicProfile);

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

      // 3. Firestore doc references
      const userDocRef = doc(firebaseDb, 'users', userId);
      const privateSyncDocRef = doc(firebaseDb, 'users', userId, 'private', 'sync');

      // 4. Atomic writes
      await Promise.all([
        setDoc(
          userDocRef,
          {
            ...validatedProfile,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        ),
        setDoc(privateSyncDocRef, validatedPrivateSync, { merge: true }),
      ]);

      const nowIso = new Date().toISOString();
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
   * Load and restore complete user progress from Firestore.
   * Atomically restores progress, dojo curriculum, achievements, arcade scores, and settings.
   */
  public async loadUserProgressFromCloud(userId: string): Promise<Result<CompleteCloudSyncSnapshot | null, Error>> {
    if (!userId) {
      return err(new Error('User ID is required to restore cloud progress'));
    }

    this.updateStatus({ isSyncing: true, lastError: null });

    try {
      const privateSyncDocRef = doc(firebaseDb, 'users', userId, 'private', 'sync');
      const snap = await getDoc(privateSyncDocRef);

      if (!snap.exists()) {
        this.updateStatus({ isSyncing: false });
        return ok(null);
      }

      const parsed = CompleteCloudSyncSnapshotSchema.safeParse(snap.data());
      if (!parsed.success) {
        throw new Error(`Corrupted cloud sync data: ${parsed.error.issues[0]?.message}`);
      }

      const data = parsed.data;

      // 1. Progress & SRS Mastery
      useProgressStore.setState(data.stats);

      // 2. Dojo Curriculum
      useDojoStore.setState({
        completedLessons: data.dojo.completedLessons,
        cooldownUntil: data.dojo.cooldownUntil,
        passedRevisionGates: data.dojo.passedRevisionGates,
        passedDailyRevisions: data.dojo.passedDailyRevisions,
        activeLessonId: data.dojo.activeLessonId,
      });

      // 3. Achievements
      useAchievementStore.setState({
        unlocked: data.achievements.unlocked,
      });

      // 4. Arcade Minigame Records
      if (data.arcade) {
        useArcadeStore.setState({
          rainHighScore: data.arcade.highScores['rain'] || 0,
          snakeHighScore: data.arcade.highScores['snake'] || 0,
          catchHighScore: data.arcade.highScores['catch'] || 0,
          wordleWins: data.arcade.gamesWon,
          wordlePlayed: data.arcade.totalGamesPlayed,
        });
      }

      // 5. Settings & Theme
      if (data.settings) {
        useSettingsStore.setState({
          hapticsEnabled: data.settings.hapticsEnabled,
          ttsEnabled: data.settings.ttsEnabled,
          ttsRate: data.settings.ttsRate,
          showFuriganaInDrills: data.settings.showFuriganaInDrills,
          showRomajiInCharts: data.settings.showRomajiInCharts,
          themeId: data.settings.activeThemeId,
        });
        useThemeStore.setState({
          activeThemeId: data.settings.activeThemeId,
        });
      }

      const nowIso = new Date().toISOString();
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

  /**
   * Smart sync upon user authentication.
   * Restores cloud backup if local device is empty, otherwise uploads current progress.
   */
  public async syncOnAuthChange(userId: string): Promise<void> {
    if (!userId) return;

    try {
      const localStats = useProgressStore.getState();
      const hasLocalProgress =
        localStats.totalXp > 0 ||
        localStats.totalQuestionsAnswered > 0 ||
        Object.keys(localStats.mastery).length > 0;

      if (!hasLocalProgress) {
        // Try restoring from cloud first
        const cloudDataRes = await this.loadUserProgressFromCloud(userId);
        if (cloudDataRes.ok && cloudDataRes.data) {
          console.log('[CloudSync] Restored existing cloud progress to local store.');
          return;
        }
      }

      // Otherwise upload current local progress to cloud
      await this.saveUserProgressToCloud(userId);
    } catch (e) {
      console.warn('[CloudSync] syncOnAuthChange warning:', e);
    }
  }

  /**
   * Triggers an invisible debounced sync if an authenticated user is currently active.
   */
  public triggerDebouncedSync(): void {
    const user = firebaseAuth.currentUser;
    if (!user || !user.uid) return;

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.saveUserProgressToCloud(user.uid).catch(() => {});
    }, 2000);
  }

  /**
   * Initialize reactive listeners on local Zustand stores for invisible background sync.
   */
  public initializeReactiveSync(): () => void {
    const unsubProgress = useProgressStore.subscribe((state, prevState) => {
      if (
        state.totalXp !== prevState.totalXp ||
        state.totalQuestionsAnswered !== prevState.totalQuestionsAnswered ||
        state.currentStreak !== prevState.currentStreak ||
        state.displayName !== prevState.displayName ||
        state.avatarEmoji !== prevState.avatarEmoji ||
        Object.keys(state.mastery).length !== Object.keys(prevState.mastery).length
      ) {
        this.triggerDebouncedSync();
      }
    });

    const unsubDojo = useDojoStore.subscribe((state, prevState) => {
      if (
        state.completedLessons !== prevState.completedLessons ||
        state.passedRevisionGates !== prevState.passedRevisionGates ||
        state.passedDailyRevisions !== prevState.passedDailyRevisions
      ) {
        this.triggerDebouncedSync();
      }
    });

    const unsubAchievements = useAchievementStore.subscribe((state, prevState) => {
      if (state.unlocked !== prevState.unlocked) {
        this.triggerDebouncedSync();
      }
    });

    const unsubArcade = useArcadeStore.subscribe((state, prevState) => {
      if (
        state.wordlePlayed !== prevState.wordlePlayed ||
        state.catchHighScore !== prevState.catchHighScore ||
        state.rainHighScore !== prevState.rainHighScore ||
        state.snakeHighScore !== prevState.snakeHighScore
      ) {
        this.triggerDebouncedSync();
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
        this.triggerDebouncedSync();
      }
    });

    return () => {
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
