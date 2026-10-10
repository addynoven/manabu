import { firebaseAuth } from '@/core/api/firebaseClient';

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
  passedGates: string[],
  extraStats?: { xpEarned?: number }
): Promise<boolean> {
  const currentUser = firebaseAuth.currentUser;
  if (!currentUser) return false;

  try {
    const token = await currentUser.getIdToken();
    const nowIso = new Date().toISOString();

    let existingBackup: any = null;
    try {
      const getRes = await fetch('/api/v1/backup', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (getRes.ok) {
        const getData = await getRes.json();
        existingBackup = getData.backup;
      }
    } catch {}

    const prevLessons = existingBackup?.dojo?.completedLessons || {};
    const prevGates = existingBackup?.dojo?.passedRevisionGates || {};

    const completedRecord: Record<string, { score: number; completedAt: string }> = { ...prevLessons };
    for (const id of completedLessons) {
      if (!completedRecord[id]) {
        completedRecord[id] = { score: 100, completedAt: nowIso };
      }
    }

    const gatesRecord: Record<string, boolean> = { ...prevGates };
    for (const g of passedGates) {
      gatesRecord[g] = true;
    }

    const lessonCount = Object.keys(completedRecord).length;
    const baseEstimatedXp = lessonCount * 50;
    const finalTotalXp = Math.max(existingBackup?.stats?.totalXp || 0, baseEstimatedXp);

    const payload = {
      version: 1,
      syncedAt: nowIso,
      stats: {
        ...(existingBackup?.stats || {}),
        totalXp: finalTotalXp,
        weeklyXp: Math.max(existingBackup?.stats?.weeklyXp || 0, finalTotalXp),
        currentStreak: Math.max(existingBackup?.stats?.currentStreak || 1, 1),
        bestStreak: Math.max(existingBackup?.stats?.bestStreak || 1, 1),
        lastActiveDate: nowIso.split('T')[0],
        totalQuestionsAnswered: Math.max(existingBackup?.stats?.totalQuestionsAnswered || 0, lessonCount * 5),
        totalCorrect: Math.max(existingBackup?.stats?.totalCorrect || 0, lessonCount * 5),
        displayName: existingBackup?.stats?.displayName || currentUser.displayName || 'Manabu Student',
        avatarEmoji: existingBackup?.stats?.avatarEmoji || '🥋',
        joinedDate: existingBackup?.stats?.joinedDate || nowIso,
        mastery: existingBackup?.stats?.mastery || {},
      },
      dojo: {
        ...(existingBackup?.dojo || {}),
        completedLessons: completedRecord,
        cooldownUntil: existingBackup?.dojo?.cooldownUntil ?? null,
        passedRevisionGates: gatesRecord,
        passedDailyRevisions: existingBackup?.dojo?.passedDailyRevisions || {},
        activeLessonId: completedLessons[completedLessons.length - 1] || existingBackup?.dojo?.activeLessonId || 'u1_l1',
      },
      achievements: existingBackup?.achievements || {
        unlocked: {},
        totalPoints: lessonCount * 10,
      },
      arcade: existingBackup?.arcade,
      challenges: existingBackup?.challenges,
      settings: existingBackup?.settings,
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
