export interface KanaItemProgress {
  kana: string;
  script: 'hiragana' | 'katakana';
  practiceCount: number;
  lastPracticedAt: number;
  status: 'unlearned' | 'learning' | 'mastered';
}

const KANA_PROGRESS_KEY = 'manabu_kana_mastery_v1';

export function getKanaProgressRecord(): Record<string, KanaItemProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(KANA_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error('Failed to parse Kana progress:', error);
    return {};
  }
}

export function saveKanaProgressRecord(record: Record<string, KanaItemProgress>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(KANA_PROGRESS_KEY, JSON.stringify(record));
  } catch (error) {
    console.error('Failed to save Kana progress:', error);
  }
}

export function recordKanaPractice(kana: string, script: 'hiragana' | 'katakana'): KanaItemProgress {
  const record = getKanaProgressRecord();
  const existing = record[kana] || {
    kana,
    script,
    practiceCount: 0,
    lastPracticedAt: 0,
    status: 'unlearned' as const,
  };

  const newCount = existing.practiceCount + 1;
  const newStatus: 'learning' | 'mastered' = newCount >= 3 ? 'mastered' : 'learning';

  const updated: KanaItemProgress = {
    ...existing,
    script,
    practiceCount: newCount,
    lastPracticedAt: Date.now(),
    status: newStatus,
  };

  record[kana] = updated;
  saveKanaProgressRecord(record);
  return updated;
}

export interface KanaSubgroupStats {
  masteredCount: number;
  learningCount: number;
  totalCount: number;
  percentageText: string;
}

export function calculateSubgroupStats(
  kanaList: { kana: string }[],
  record: Record<string, KanaItemProgress>
): KanaSubgroupStats {
  const totalCount = kanaList.length;
  if (totalCount === 0) {
    return { masteredCount: 0, learningCount: 0, totalCount: 0, percentageText: '0 / 0 (0%)' };
  }

  let masteredCount = 0;
  let learningCount = 0;

  for (const item of kanaList) {
    const prog = record[item.kana];
    if (prog?.status === 'mastered') {
      masteredCount++;
    } else if (prog?.status === 'learning') {
      learningCount++;
    }
  }

  const pct = Math.round((masteredCount / totalCount) * 100);
  return {
    masteredCount,
    learningCount,
    totalCount,
    percentageText: `${masteredCount} / ${totalCount} (${pct}%)`,
  };
}
