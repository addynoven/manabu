import { RAW_KANA_DATA } from '../../kana/data/kana.data';
import kanjiN5 from '../../kanji/data/N5.json';
import kanjiN4 from '../../kanji/data/N4.json';
import kanjiN3 from '../../kanji/data/N3.json';
import kanjiN2 from '../../kanji/data/N2.json';
import kanjiN1 from '../../kanji/data/N1.json';
import vocabN5 from '../../vocabulary/data/n5.json';

const ALL_SURVIVAL_KANJI = [
  ...kanjiN5,
  ...kanjiN4,
  ...kanjiN3,
  ...kanjiN2,
  ...kanjiN1,
];

export type SurvivalMode = 'kana' | 'kanji' | 'vocab' | 'hell';

export interface KanaItem {
  kana: string;
  romaji: string;
}

const FLAT_KANA_LIST: KanaItem[] = [];
for (const group of RAW_KANA_DATA) {
  for (let i = 0; i < group.kana.length; i++) {
    const k = group.kana[i];
    const r = group.romaji[i];
    if (k && r) {
      FLAT_KANA_LIST.push({ kana: k, romaji: r });
    }
  }
}

export interface SurvivalQuestion {
  id: string;
  category: 'kana' | 'kanji' | 'vocab';
  prompt: string;
  promptSub?: string;
  correctAnswer: string;
  options: string[];
  ttsTarget?: string;
}

export interface AnswerEvaluation {
  isCorrect: boolean;
  timeDelta: number;
  pointsGained: number;
  isFastReflex: boolean;
  newStreak: number;
  newMultiplier: number;
}

export const SURVIVAL_CONFIG = {
  initialTimeSec: {
    kana: 15,
    kanji: 15,
    vocab: 15,
    hell: 12,
  },
  maxTimeSec: 30,
  correctBonusSec: {
    standard: 2.5,
    hell: 2.0,
  },
  fastReflexBonusSec: 1.0,
  fastReflexThresholdMs: 1000,
  wrongPenaltySec: {
    standard: -4.0,
    hell: -5.0,
  },
};

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generateKanaSurvivalQuestion(): SurvivalQuestion {
  const item = FLAT_KANA_LIST[Math.floor(Math.random() * FLAT_KANA_LIST.length)];
  const isRomajiPrompt = Math.random() < 0.25;

  if (isRomajiPrompt) {
    const distractors = shuffleArray(
      FLAT_KANA_LIST.filter(k => k.kana !== item.kana)
    ).slice(0, 3).map(k => k.kana);

    const options = shuffleArray([item.kana, ...distractors]);
    return {
      id: `kana-${item.kana}-${Date.now()}-${Math.random()}`,
      category: 'kana',
      prompt: item.romaji,
      promptSub: 'Select Matching Kana',
      correctAnswer: item.kana,
      options,
      ttsTarget: item.kana,
    };
  }

  const distractors = shuffleArray(
    FLAT_KANA_LIST.filter(k => k.romaji !== item.romaji)
  ).slice(0, 3).map(k => k.romaji);

  const options = shuffleArray([item.romaji, ...distractors]);
  return {
    id: `kana-${item.kana}-${Date.now()}-${Math.random()}`,
    category: 'kana',
    prompt: item.kana,
    promptSub: 'Romaji Reading',
    correctAnswer: item.romaji,
    options,
    ttsTarget: item.kana,
  };
}

export function generateKanjiSurvivalQuestion(): SurvivalQuestion {
  const item = ALL_SURVIVAL_KANJI[Math.floor(Math.random() * ALL_SURVIVAL_KANJI.length)];
  const correctMeaning = item.meanings[0];

  const otherKanji = ALL_SURVIVAL_KANJI.filter(
    k => k.id !== item.id && k.kanjiChar !== item.kanjiChar && k.meanings[0] !== correctMeaning,
  );
  const distractors = shuffleArray(otherKanji)
    .slice(0, 3)
    .map(k => k.meanings[0]);

  const options = shuffleArray([correctMeaning, ...distractors]);

  return {
    id: `kanji-${item.id}-${Date.now()}-${Math.random()}`,
    category: 'kanji',
    prompt: item.kanjiChar,
    promptSub: 'Kanji Meaning',
    correctAnswer: correctMeaning,
    options,
    ttsTarget: item.kunyomi[0]?.split(' ')[0] || item.onyomi[0]?.split(' ')[0] || item.kanjiChar,
  };
}

export function generateVocabSurvivalQuestion(): SurvivalQuestion {
  const item = vocabN5[Math.floor(Math.random() * vocabN5.length)];
  const correctMeaning = item.waller_definition;

  const otherVocab = vocabN5.filter(v => v.jmdict_seq !== item.jmdict_seq);
  const distractors = shuffleArray(otherVocab)
    .slice(0, 3)
    .map(v => v.waller_definition);

  const options = shuffleArray([correctMeaning, ...distractors]);

  return {
    id: `vocab-${item.jmdict_seq}-${Date.now()}-${Math.random()}`,
    category: 'vocab',
    prompt: item.kanji || item.kana,
    promptSub: item.kanji ? item.kana : 'Vocabulary Meaning',
    correctAnswer: correctMeaning,
    options,
    ttsTarget: item.kana,
  };
}

export function generateSurvivalQuestion(mode: SurvivalMode): SurvivalQuestion {
  if (mode === 'kana') return generateKanaSurvivalQuestion();
  if (mode === 'kanji') return generateKanjiSurvivalQuestion();
  if (mode === 'vocab') return generateVocabSurvivalQuestion();

  // Hell Mode: Random blend of all categories
  const r = Math.random();
  if (r < 0.35) return generateKanaSurvivalQuestion();
  if (r < 0.70) return generateKanjiSurvivalQuestion();
  return generateVocabSurvivalQuestion();
}

export function calculateMultiplier(streak: number, mode: SurvivalMode): number {
  const base = streak >= 20 ? 4 : streak >= 10 ? 3 : streak >= 5 ? 2 : 1;
  return mode === 'hell' ? base + 1 : base;
}

export function evaluateAnswer(
  isCorrect: boolean,
  currentStreak: number,
  responseDurationMs: number,
  mode: SurvivalMode
): AnswerEvaluation {
  if (!isCorrect) {
    const penalty = mode === 'hell'
      ? SURVIVAL_CONFIG.wrongPenaltySec.hell
      : SURVIVAL_CONFIG.wrongPenaltySec.standard;
    return {
      isCorrect: false,
      timeDelta: penalty,
      pointsGained: 0,
      isFastReflex: false,
      newStreak: 0,
      newMultiplier: mode === 'hell' ? 2 : 1,
    };
  }

  const isFastReflex = responseDurationMs <= SURVIVAL_CONFIG.fastReflexThresholdMs;
  const newStreak = currentStreak + 1;
  const newMultiplier = calculateMultiplier(newStreak, mode);

  let timeDelta = mode === 'hell'
    ? SURVIVAL_CONFIG.correctBonusSec.hell
    : SURVIVAL_CONFIG.correctBonusSec.standard;

  if (isFastReflex) {
    timeDelta += SURVIVAL_CONFIG.fastReflexBonusSec;
  }

  const basePoints = 100;
  const pointsGained = basePoints * newMultiplier + (isFastReflex ? 50 : 0);

  return {
    isCorrect: true,
    timeDelta,
    pointsGained,
    isFastReflex,
    newStreak,
    newMultiplier,
  };
}
