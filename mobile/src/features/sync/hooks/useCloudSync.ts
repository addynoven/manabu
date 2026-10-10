import { useEffect, useState, useCallback } from 'react';
import { cloudSyncService } from '../services/cloudSync.service';
import type { SyncStatusState } from '../models/sync.model';
import { useAuthStore } from '../../auth/store/useAuthStore';

export function useCloudSync() {
  const [syncStatus, setSyncStatus] = useState<SyncStatusState>(() =>
    cloudSyncService.getStatus(),
  );
  const currentUser = useAuthStore(state => state.currentUser);

  useEffect(() => {
    const unsubscribe = cloudSyncService.subscribe(setSyncStatus);
    return unsubscribe;
  }, []);

  const syncNow = useCallback(async () => {
    if (!currentUser || !currentUser.uid) {
      return { success: false, error: 'User is not signed in' };
    }
    const result = await cloudSyncService.saveUserProgressToCloud(currentUser.uid);
    if (!result.ok) {
      return { success: false, error: result.error.message };
    }
    return { success: true };
  }, [currentUser]);

  const restoreFromCloud = useCallback(async () => {
    if (!currentUser || !currentUser.uid) {
      return { success: false, error: 'User is not signed in' };
    }
    const result = await cloudSyncService.loadUserProgressFromCloud(currentUser.uid);
    if (!result.ok) {
      return { success: false, error: result.error.message };
    }
    return { success: true, data: result.data };
  }, [currentUser]);

  return {
    ...syncStatus,
    syncNow,
    restoreFromCloud,
    isAuthenticated: !!currentUser?.uid,
  };
}
