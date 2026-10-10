import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { useSetProgressStore } from '../../progress/store/useSetProgressStore';
import { useChallengeStore } from '../../challenges/store/useChallengeStore';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { useArcadeStore } from '../../arcade/store/useArcadeStore';
import { clientStorage } from '../../../core/storage/mmkv';

const USER_DATA_STORAGE_KEYS = [
  'manabu-progress-storage',
  'manabu-dojo-storage',
  'manabu-set-progress-storage',
  'manabu-challenges-storage',
  'manabu-achievements-storage',
  'manabu-arcade-storage',
];

/**
 * Purges all local user learning progress, SRS review records, lessons,
 * challenges, and achievements upon sign-out.
 * Preserves user settings (theme, sound/haptics preferences).
 */
export function purgeLocalUserData(): void {
  try {
    // 1. Reset Zustand active in-memory stores
    useProgressStore.getState().resetAllStats();
    useDojoStore.getState().resetDojoProgress();
    useSetProgressStore.getState().clearSetProgress();
    useAchievementStore.getState().resetAchievements();
    useArcadeStore.getState().resetArcadeStats();

    // Reset challenge records
    useChallengeStore.setState({ blitzRecords: {}, gauntletRecords: {} });

    // 2. Remove persisted storage keys from MMKV / LocalStorage
    for (const key of USER_DATA_STORAGE_KEYS) {
      clientStorage.removeItem(key);
    }
  } catch (err) {
    console.error('[PurgeUserData] Error clearing local user data:', err);
  }
}
