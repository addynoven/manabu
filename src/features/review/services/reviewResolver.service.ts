import { RAW_KANA_DATA } from '../../kana/data/kana.data';
import N5_KANJI from '../../kanji/data/N5.json';
import N4_KANJI from '../../kanji/data/N4.json';
import N3_KANJI from '../../kanji/data/N3.json';
import N2_KANJI from '../../kanji/data/N2.json';
import N1_KANJI from '../../kanji/data/N1.json';
import N5_VOCAB from '../../vocabulary/data/n5.json';
import N4_VOCAB from '../../vocabulary/data/n4.json';
import N3_VOCAB from '../../vocabulary/data/n3.json';
import { ALL_DOJO_UNITS } from '../../dojo/data/curatedUnits';
import type { DojoUnit, DojoLesson, LessonItem } from '../../dojo/models/dojo.model';
import type { CharacterMastery, SrsStage } from '../../progress/models/progress.model';

export interface ResolvedReviewItem {
  id: string;
  characterKey: string;
  category: 'kana' | 'kanji' | 'vocab';
  japanese: string;
  reading: string;
  english: string;
  audioText: string;
  options: string[];
  correctAnswer: string;
  srsStage: SrsStage;
  nextReviewAt: string | null;
  accuracy: number;
  total: number;
  incorrect: number;
}

// Flat cache for fast lookups
interface DictEntry {
  japanese: string;
  reading: string;
  english: string;
  audioText: string;
}

const KANA_DICT = new Map<string, DictEntry>();
const ALL_KANA_KEYS: string[] = [];

// Initialize Kana dictionary
RAW_KANA_DATA.forEach(group => {
  group.kana.forEach((char, idx) => {
    const romaji = group.romaji[idx] || '';
    KANA_DICT.set(char, {
      japanese: char,
      reading: romaji,
      english: romaji.toUpperCase(),
      audioText: char,
    });
    ALL_KANA_KEYS.push(char);
  });
});

// Initialize Kanji dictionary
const KANJI_DICT = new Map<string, DictEntry>();
const ALL_KANJI_KEYS: string[] = [];
[...N5_KANJI, ...N4_KANJI, ...N3_KANJI, ...N2_KANJI, ...N1_KANJI].forEach((k: any) => {
  if (k.kanjiChar && !KANJI_DICT.has(k.kanjiChar)) {
    const reading = [...(k.onyomi || []), ...(k.kunyomi || [])].join(' • ');
    const meaning = Array.isArray(k.meanings) ? k.meanings.join(', ') : String(k.meanings || '');
    KANJI_DICT.set(k.kanjiChar, {
      japanese: k.kanjiChar,
      reading: reading || k.kanjiChar,
      english: meaning || 'Kanji character',
      audioText: k.kanjiChar,
    });
    ALL_KANJI_KEYS.push(k.kanjiChar);
  }
});

// Initialize Vocab & Dojo dictionary
const VOCAB_DICT = new Map<string, DictEntry>();
const ALL_VOCAB_KEYS: string[] = [];

// 1. Dojo lessons
ALL_DOJO_UNITS.forEach((unit: DojoUnit) => {
  unit.lessons.forEach((lesson: DojoLesson) => {
    lesson.items.forEach((item: LessonItem) => {
      const key = item.prompt;
      if (key && !VOCAB_DICT.has(key)) {
        VOCAB_DICT.set(key, {
          japanese: item.prompt,
          reading: item.furigana || item.romaji || item.prompt,
          english: item.english || 'Expression / phrase',
          audioText: item.audioText || item.prompt,
        });
        ALL_VOCAB_KEYS.push(key);
      }
    });
  });
});

// 2. Vocab JLPT lists
[...N5_VOCAB, ...N4_VOCAB, ...N3_VOCAB].forEach((v: any) => {
  const key = v.kanji || v.kana;
  if (key && !VOCAB_DICT.has(key)) {
    VOCAB_DICT.set(key, {
      japanese: key,
      reading: v.kana || key,
      english: v.waller_definition || 'Vocabulary word',
      audioText: v.kana || key,
    });
    ALL_VOCAB_KEYS.push(key);
  }
});

/**
 * Resolves a CharacterMastery entry into a fully populated review item with smart distractors.
 */
export function resolveReviewItem(mastery: CharacterMastery): ResolvedReviewItem {
  const key = mastery.character;
  const category = mastery.category;

  let dictEntry: DictEntry | undefined;
  if (category === 'kana') {
    dictEntry = KANA_DICT.get(key);
  } else if (category === 'kanji') {
    dictEntry = KANJI_DICT.get(key);
  } else {
    dictEntry = VOCAB_DICT.get(key);
  }

  // Graceful fallback if not found in specific category
  if (!dictEntry) {
    dictEntry = VOCAB_DICT.get(key) || KANJI_DICT.get(key) || KANA_DICT.get(key) || {
      japanese: key,
      reading: key,
      english: `Meaning for ${key}`,
      audioText: key,
    };
  }

  const correctAnswer = dictEntry.english;

  // Generate 3 unique distractors from the same category
  const distractors: string[] = [];
  const candidateKeys =
    category === 'kana' ? ALL_KANA_KEYS : category === 'kanji' ? ALL_KANJI_KEYS : ALL_VOCAB_KEYS;
  const dict =
    category === 'kana' ? KANA_DICT : category === 'kanji' ? KANJI_DICT : VOCAB_DICT;

  const usedAnswers = new Set<string>([correctAnswer]);

  // Seeded pick or shuffle
  for (let i = 0; i < candidateKeys.length && distractors.length < 3; i++) {
    const randIndex = Math.floor(Math.random() * candidateKeys.length);
    const candidateKey = candidateKeys[randIndex];
    const candidateEntry = dict.get(candidateKey);
    if (candidateEntry && !usedAnswers.has(candidateEntry.english)) {
      usedAnswers.add(candidateEntry.english);
      distractors.push(candidateEntry.english);
    }
  }

  // Fallback distractors if catalog is sparse
  while (distractors.length < 3) {
    distractors.push(`Alternative ${distractors.length + 1}`);
  }

  // Combine and shuffle options
  const options = [...distractors, correctAnswer].sort(() => Math.random() - 0.5);

  return {
    id: `rev_${category}_${key}`,
    characterKey: key,
    category,
    japanese: dictEntry.japanese,
    reading: dictEntry.reading,
    english: dictEntry.english,
    audioText: dictEntry.audioText,
    options,
    correctAnswer,
    srsStage: mastery.srsStage || 'apprentice-1',
    nextReviewAt: mastery.nextReviewAt || null,
    accuracy: mastery.accuracy || 0,
    total: mastery.total || 0,
    incorrect: mastery.incorrect || 0,
  };
}
