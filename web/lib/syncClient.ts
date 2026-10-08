/**
 * Web Cloud Sync Service (SSOT Bridge)
 * Synchronizes local Web progress (Dojo lessons, gates, XP)
 * with the PostgreSQL backend (/api/v1/backup and /api/v1/profile).
 */

import { firebaseAuth } from './firebaseClient';

export interface ProgressSyncPayload {
  completedLessons: string[];
  passedGates: string[];
  lastActiveDate: string;
}

const STORAGE_LESSONS_KEY = 'manabu_completed_lessons';
const STORAGE_GATES_KEY = 'manabu_passed_gates';

export async function pullCloudBackup(): Promise<{
  completedLessons: string[];
  passedGates: string[];
} | null> {
  const currentUser = firebaseAuth.currentUser;
  if (!currentUser) return null;

  try {
    const token = await currentUser.getIdToken();
    const res = await fetch('/api/v1/backup', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (data.backup && typeof data.backup === 'object') {
      const backup = data.backup;
      const completed = Array.isArray(backup.completedLessons)
        ? backup.completedLessons
        : typeof backup.completedLessons === 'object' && backup.completedLessons !== null
        ? Object.keys(backup.completedLessons)
        : [];

      const gates = Array.isArray(backup.passedGates)
        ? backup.passedGates
        : typeof backup.passedRevisionGates === 'object' && backup.passedRevisionGates !== null
        ? Object.keys(backup.passedRevisionGates)
        : [];

      // Merge and save locally
      if (typeof window !== 'undefined') {
        try {
          const localLessonsRaw = localStorage.getItem(STORAGE_LESSONS_KEY);
          const localLessons: string[] = localLessonsRaw ? JSON.parse(localLessonsRaw) : [];
          const mergedLessons = Array.from(new Set([...localLessons, ...completed]));
          localStorage.setItem(STORAGE_LESSONS_KEY, JSON.stringify(mergedLessons));

          const localGatesRaw = localStorage.getItem(STORAGE_GATES_KEY);
          const localGates: string[] = localGatesRaw ? JSON.parse(localGatesRaw) : [];
          const mergedGates = Array.from(new Set([...localGates, ...gates]));
          localStorage.setItem(STORAGE_GATES_KEY, JSON.stringify(mergedGates));

          return { completedLessons: mergedLessons, passedGates: mergedGates };
        } catch {}
      }

      return { completedLessons: completed, passedGates: gates };
    }
    return null;
  } catch (error) {
    console.error('[WebSync] Failed to pull cloud backup:', error);
    return null;
  }
}

export async function pushCloudBackup(
  completedLessons: string[],
  passedGates: string[]
): Promise<boolean> {
  const currentUser = firebaseAuth.currentUser;
  if (!currentUser) return false;

  try {
    const token = await currentUser.getIdToken();
    const payload = {
      version: 1,
      completedLessons,
      passedGates,
      syncedAt: new Date().toISOString(),
    };

    const res = await fetch('/api/v1/backup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    return res.ok;
  } catch (error) {
    console.error('[WebSync] Failed to push cloud backup:', error);
    return false;
  }
}
