import type { CharacterMastery, SrsStage } from '../../progress/models/progress.model';

export interface SrsStageInfo {
  stage: SrsStage;
  name: string;
  group: 'apprentice' | 'guru' | 'master' | 'enlightened' | 'burned';
  intervalHours: number;
  intervalDays: number;
}

export const SRS_STAGE_ORDER: SrsStage[] = [
  'apprentice-1',
  'apprentice-2',
  'apprentice-3',
  'apprentice-4',
  'guru-1',
  'guru-2',
  'master',
  'enlightened',
  'burned',
];

export const SRS_CONFIG: Record<SrsStage, SrsStageInfo> = {
  'apprentice-1': {
    stage: 'apprentice-1',
    name: 'Apprentice I',
    group: 'apprentice',
    intervalHours: 4,
    intervalDays: 4 / 24,
  },
  'apprentice-2': {
    stage: 'apprentice-2',
    name: 'Apprentice II',
    group: 'apprentice',
    intervalHours: 8,
    intervalDays: 8 / 24,
  },
  'apprentice-3': {
    stage: 'apprentice-3',
    name: 'Apprentice III',
    group: 'apprentice',
    intervalHours: 23,
    intervalDays: 23 / 24,
  },
  'apprentice-4': {
    stage: 'apprentice-4',
    name: 'Apprentice IV',
    group: 'apprentice',
    intervalHours: 47,
    intervalDays: 47 / 24,
  },
  'guru-1': {
    stage: 'guru-1',
    name: 'Guru I',
    group: 'guru',
    intervalHours: 7 * 24,
    intervalDays: 7,
  },
  'guru-2': {
    stage: 'guru-2',
    name: 'Guru II',
    group: 'guru',
    intervalHours: 14 * 24,
    intervalDays: 14,
  },
  master: {
    stage: 'master',
    name: 'Master',
    group: 'master',
    intervalHours: 30 * 24,
    intervalDays: 30,
  },
  enlightened: {
    stage: 'enlightened',
    name: 'Enlightened',
    group: 'enlightened',
    intervalHours: 120 * 24,
    intervalDays: 120,
  },
  burned: {
    stage: 'burned',
    name: 'Burned',
    group: 'burned',
    intervalHours: 3650 * 24,
    intervalDays: 3650,
  },
};

/**
 * Calculates next SRS stage, interval, and next review ISO timestamp.
 */
export function calculateNextSrsStep(
  currentStage: SrsStage = 'apprentice-1',
  isCorrect: boolean,
  now: Date = new Date(),
): {
  nextStage: SrsStage;
  intervalDays: number;
  nextReviewAt: string;
} {
  const currentIndex = SRS_STAGE_ORDER.indexOf(currentStage);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  let nextIndex: number;
  if (isCorrect) {
    nextIndex = Math.min(SRS_STAGE_ORDER.length - 1, safeIndex + 1);
  } else {
    // If apprentice, drop back to apprentice-1
    // If guru or above, drop back by 1 or 2 levels to reinforce
    if (safeIndex <= 3) {
      nextIndex = 0;
    } else {
      nextIndex = Math.max(0, safeIndex - 2);
    }
  }

  const nextStage = SRS_STAGE_ORDER[nextIndex];
  const stageInfo = SRS_CONFIG[nextStage];
  const intervalMs = stageInfo.intervalHours * 3600 * 1000;
  const nextReviewAt = new Date(now.getTime() + intervalMs).toISOString();

  return {
    nextStage,
    intervalDays: stageInfo.intervalDays,
    nextReviewAt,
  };
}

/**
 * Determines whether a CharacterMastery item is currently due for review.
 * An item is due if:
 * 1. It has never had nextReviewAt set, but has attempts (initial state).
 * 2. Or nextReviewAt <= current time, AND item is not 'burned'.
 */
export function isItemDue(item: CharacterMastery, now: Date = new Date()): boolean {
  if (item.srsStage === 'burned') {
    return false;
  }
  if (!item.nextReviewAt) {
    // If practiced but no schedule, it is due immediately
    return item.total > 0;
  }
  const reviewTime = new Date(item.nextReviewAt).getTime();
  return reviewTime <= now.getTime();
}

/**
 * Returns human-readable label for SRS stage group.
 */
export function getStageGroup(stage: SrsStage = 'apprentice-1'): 'apprentice' | 'guru' | 'master' | 'enlightened' | 'burned' {
  return SRS_CONFIG[stage]?.group ?? 'apprentice';
}

/**
 * Returns thematic color for SRS stages.
 */
export function getStageColor(
  groupOrStage: SrsStage | 'apprentice' | 'guru' | 'master' | 'enlightened' | 'burned',
): string {
  switch (groupOrStage) {
    case 'apprentice':
    case 'apprentice-1':
    case 'apprentice-2':
    case 'apprentice-3':
    case 'apprentice-4':
      return '#EC4899'; // Vibrant Pink / Apprentice
    case 'guru':
    case 'guru-1':
    case 'guru-2':
      return '#8B5CF6'; // Purple / Guru
    case 'master':
      return '#3B82F6'; // Blue / Master
    case 'enlightened':
      return '#06B6D4'; // Cyan / Enlightened
    case 'burned':
      return '#64748B'; // Charcoal Gold / Burned
    default:
      return '#EC4899';
  }
}
