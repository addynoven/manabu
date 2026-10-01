import { ALL_DOJO_UNITS } from '../../dojo/data/curatedUnits';
import type { CharacterMastery } from '../../progress/models/progress.model';

export type WordStrength = 'strong' | 'review' | 'weak' | 'new';

export interface VocabWord {
  id: string;
  japanese: string;
  reading: string;
  romaji: string;
  english: string;
  audioText: string;
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  lessonId: string;
  lessonTitle: string;
  status: WordStrength;
  accuracy: number;
  totalAttempts: number;
  incorrectCount: number;
  lastPracticedAt: string | null;
  srsStage?: string;
  nextReviewAt?: string | null;
  distractors: string[];
}

export interface UnitVocabBundle {
  unitNumber: number;
  unitId: string;
  unitTitle: string;
  words: VocabWord[];
  totalCount: number;
  strongCount: number;
  weakCount: number;
  reviewCount: number;
  masteryRate: number; // percentage (0-100)
}

/**
 * Groups a flat list of vocabulary words into unit-based bundles with mastery stats.
 */
export function groupWordsByUnit(words: VocabWord[]): UnitVocabBundle[] {
  const map = new Map<number, UnitVocabBundle>();

  for (const word of words) {
    let bundle = map.get(word.unitNumber);
    if (!bundle) {
      bundle = {
        unitNumber: word.unitNumber,
        unitId: word.unitId,
        unitTitle: word.unitTitle,
        words: [],
        totalCount: 0,
        strongCount: 0,
        weakCount: 0,
        reviewCount: 0,
        masteryRate: 0,
      };
      map.set(word.unitNumber, bundle);
    }

    bundle.words.push(word);
    bundle.totalCount++;
    if (word.status === 'strong') {
      bundle.strongCount++;
    } else if (word.status === 'weak') {
      bundle.weakCount++;
    } else {
      bundle.reviewCount++;
    }
  }

  const bundles = Array.from(map.values()).sort((a, b) => a.unitNumber - b.unitNumber);
  for (const b of bundles) {
    b.masteryRate = b.totalCount > 0 ? Math.round((b.strongCount / b.totalCount) * 100) : 0;
  }

  return bundles;
}

/**
 * Extracts and consolidates all learned and unlocked vocabulary words from Dojo curriculum,
 * merged with real user mastery progress.
 */
export function getLearnedVocabWords(
  completedLessonIds: Set<string>,
  mastery: Record<string, CharacterMastery> = {},
  options?: { maxUnits?: number; unitFilter?: string; statusFilter?: 'all' | 'needs-practice' | 'strong' },
): VocabWord[] {
  // If no lessons are completed, return empty array immediately
  if (!completedLessonIds || completedLessonIds.size === 0) {
    return [];
  }

  const wordMap = new Map<string, VocabWord>();
  const allMeanings: string[] = [];

  const maxUnits = options?.maxUnits ?? 30;

  ALL_DOJO_UNITS.slice(0, maxUnits).forEach(unit => {
    unit.lessons.forEach(lesson => {
      // STRICT: ONLY include vocabulary from lessons that the user has completed!
      if (!completedLessonIds.has(lesson.id)) {
        return;
      }

      // 1. Check matchPairs (most accurate and cleanest vocab definitions)
      const matchItem = lesson.items.find(it => it.type === 'match');
      if (matchItem?.matchPairs) {
        matchItem.matchPairs.forEach(pair => {
          const jp = pair.left.trim();
          if (jp && !wordMap.has(jp)) {
            const masteryRecord = mastery[jp];
            const incorrect = masteryRecord?.incorrect ?? 0;
            const total = masteryRecord?.total ?? 0;
            const accuracy = masteryRecord?.accuracy ?? (total > 0 ? Math.round(((total - incorrect) / total) * 100) : 100);

            let status: WordStrength = 'new';
            if (total === 0) {
              status = 'new';
            } else if (incorrect > 0 && accuracy < 75) {
              status = 'weak';
            } else if (total >= 2 && accuracy >= 80) {
              status = 'strong';
            } else {
              status = 'review';
            }

            wordMap.set(jp, {
              id: `word_${jp}`,
              japanese: jp,
              reading: pair.furigana || jp,
              romaji: pair.romaji || '',
              english: pair.right,
              audioText: jp,
              unitId: unit.id,
              unitNumber: unit.unitNumber,
              unitTitle: unit.title,
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              status,
              accuracy,
              totalAttempts: total,
              incorrectCount: incorrect,
              lastPracticedAt: masteryRecord?.lastPracticedAt ?? null,
              srsStage: masteryRecord?.srsStage || 'apprentice-1',
              nextReviewAt: masteryRecord?.nextReviewAt ?? null,
              distractors: [],
            });

            allMeanings.push(pair.right);
          }
        });
      }

      // 2. Also check keywords from lesson items if not present
      lesson.items.forEach(item => {
        if (item.type === 'listen' || item.type === 'spell') {
          const jp = item.prompt.trim();
          if (jp && !wordMap.has(jp) && !jp.includes('・') && jp.length <= 15) {
            const masteryRecord = mastery[jp];
            const incorrect = masteryRecord?.incorrect ?? 0;
            const total = masteryRecord?.total ?? 0;
            const accuracy = masteryRecord?.accuracy ?? (total > 0 ? Math.round(((total - incorrect) / total) * 100) : 100);

            let status: WordStrength = 'new';
            if (total === 0) {
              status = 'new';
            } else if (incorrect > 0 && accuracy < 75) {
              status = 'weak';
            } else if (total >= 2 && accuracy >= 80) {
              status = 'strong';
            } else {
              status = 'review';
            }

            const cleanEnglish = item.english.replace(/^(Build|Pronounce:)\s*/i, '').replace(/['"]/g, '');

            wordMap.set(jp, {
              id: `word_${jp}`,
              japanese: jp,
              reading: item.furigana || jp,
              romaji: item.romaji || '',
              english: cleanEnglish,
              audioText: item.audioText || jp,
              unitId: unit.id,
              unitNumber: unit.unitNumber,
              unitTitle: unit.title,
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              status,
              accuracy,
              totalAttempts: total,
              incorrectCount: incorrect,
              lastPracticedAt: masteryRecord?.lastPracticedAt ?? null,
              srsStage: masteryRecord?.srsStage || 'apprentice-1',
              nextReviewAt: masteryRecord?.nextReviewAt ?? null,
              distractors: [],
            });

            allMeanings.push(cleanEnglish);
          }
        }
      });
    });
  });

  const words = Array.from(wordMap.values());

  // Attach 3 unique distractors to each word
  words.forEach(w => {
    const distractors: string[] = [];
    const filteredMeanings = allMeanings.filter(m => m !== w.english);

    for (let i = 0; i < filteredMeanings.length && distractors.length < 3; i++) {
      const randIdx = Math.floor(Math.random() * filteredMeanings.length);
      const cand = filteredMeanings[randIdx];
      if (!distractors.includes(cand)) {
        distractors.push(cand);
      }
    }

    while (distractors.length < 3) {
      distractors.push(`Option ${distractors.length + 1}`);
    }

    w.distractors = distractors;
  });

  // Apply filters
  let filtered = words;
  if (options?.unitFilter) {
    filtered = filtered.filter(w => w.unitId === options.unitFilter);
  }
  if (options?.statusFilter === 'needs-practice') {
    filtered = filtered.filter(w => w.status === 'weak' || w.status === 'review');
  } else if (options?.statusFilter === 'strong') {
    filtered = filtered.filter(w => w.status === 'strong');
  }

  return filtered;
}
