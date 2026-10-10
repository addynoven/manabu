import kanjiN5 from '../../kanji/data/N5.json';
import kanjiN4 from '../../kanji/data/N4.json';
import kanjiN3 from '../../kanji/data/N3.json';
import kanjiN2 from '../../kanji/data/N2.json';
import kanjiN1 from '../../kanji/data/N1.json';
import { extractKana } from '../../kanji/lib/kanjiGenerator';
export interface DuelKanjiItem {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  meanings: string[];
  level?: string;
  strokeCount?: number;
  strokes?: number;
}

export const ALL_DUEL_KANJI: DuelKanjiItem[] = [
  ...kanjiN5,
  ...kanjiN4,
  ...kanjiN3,
  ...kanjiN2,
  ...kanjiN1,
] as unknown as DuelKanjiItem[];

export type KanjiDuelQuestionType =
  | 'onyomi'
  | 'kunyomi'
  | 'meaning'
  | 'stroke_count'
  | 'compound'
  | 'radical';

export interface KanjiDuelQuestion {
  id: string;
  type: KanjiDuelQuestionType;
  kanjiChar: string;
  questionTitle: string;
  questionSubtitle: string;
  ttsAudio: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KanjiDuelBot {
  id: 'easy' | 'medium' | 'hard';
  name: string;
  japaneseName: string;
  title: string;
  avatarEmoji: string;
  maxHp: number;
  attackTimerMs: number;
  accuracy: number;
  baseDamage: number;
}

export const KANJI_DUEL_BOTS: Record<'easy' | 'medium' | 'hard', KanjiDuelBot> = {
  easy: {
    id: 'easy',
    name: 'Tanuki Ronin',
    japaneseName: 'たぬき浪人',
    title: 'Wandering Swordsman',
    avatarEmoji: '🦝',
    maxHp: 1000,
    attackTimerMs: 4500,
    accuracy: 0.65,
    baseDamage: 160,
  },
  medium: {
    id: 'medium',
    name: 'Kitsune Kunoichi',
    japaneseName: 'きつねくノ一',
    title: 'Shadow Blade',
    avatarEmoji: '🦊',
    maxHp: 1000,
    attackTimerMs: 3000,
    accuracy: 0.85,
    baseDamage: 210,
  },
  hard: {
    id: 'hard',
    name: 'Tengu Shogun',
    japaneseName: '天狗将軍',
    title: 'Grand Warlord',
    avatarEmoji: '👺',
    maxHp: 1200,
    attackTimerMs: 2000,
    accuracy: 0.95,
    baseDamage: 260,
  },
};

/**
 * Curated authentic bank of Kanji Duel questions for fast, thrilling battles.
 */
export const KANJI_DUEL_BANK: KanjiDuelQuestion[] = [
  {
    id: 'q1',
    type: 'onyomi',
    kanjiChar: '水',
    questionTitle: 'What is the ONYOMI (音読み) of 水?',
    questionSubtitle: 'Chinese-derived reading used in compounds',
    ttsAudio: 'すい',
    options: ['スイ (sui)', 'みず (mizu)', 'モク (moku)', 'キン (kin)'],
    correctIndex: 0,
    explanation: '水: Kunyomi is みず (water), Onyomi is スイ (e.g. 水曜日 - suiyoubi).',
  },
  {
    id: 'q2',
    type: 'kunyomi',
    kanjiChar: '山',
    questionTitle: 'What is the KUNYOMI (訓読み) of 山?',
    questionSubtitle: 'Native Japanese reading used for standalone words',
    ttsAudio: 'やま',
    options: ['サン (san)', 'やま (yama)', 'かわ (kawa)', 'うみ (umi)'],
    correctIndex: 1,
    explanation: '山: Kunyomi is やま (mountain), Onyomi is サン (e.g. 富士山 - Fujisan).',
  },
  {
    id: 'q3',
    type: 'meaning',
    kanjiChar: '電',
    questionTitle: 'Which meaning belongs to 電?',
    questionSubtitle: 'Found in words like 電車 and 電話',
    ttsAudio: 'でんしゃ',
    options: ['Electricity / Lightning', 'Rain / Water', 'Sky / Heaven', 'Sound / Voice'],
    correctIndex: 0,
    explanation: '電 means Electricity (電車: train, 電話: telephone).',
  },
  {
    id: 'q4',
    type: 'radical',
    kanjiChar: '語',
    questionTitle: 'What is the primary RADICAL (部首) of 語?',
    questionSubtitle: 'The building block semantic classifier',
    ttsAudio: 'ご',
    options: ['言 (Speech / Words)', '氵 (Water)', '木 (Tree)', '口 (Mouth)'],
    correctIndex: 0,
    explanation: '語 belongs to the 言 (speech/word) radical.',
  },
  {
    id: 'q5',
    type: 'compound',
    kanjiChar: '日本',
    questionTitle: '「日」+「本」forms which word?',
    questionSubtitle: 'Sun + Origin / Root',
    ttsAudio: 'にほん',
    options: ['にほん (Japan)', 'えいが (Movie)', 'ほん (Book)', 'てんき (Weather)'],
    correctIndex: 0,
    explanation: '日 (sun) + 本 (origin) = 日本 (Nihon / Japan, Land of the Rising Sun).',
  },
  {
    id: 'q6',
    type: 'stroke_count',
    kanjiChar: '木',
    questionTitle: 'How many STROKES in 木?',
    questionSubtitle: 'Tree / Wood',
    ttsAudio: 'き',
    options: ['3 strokes', '4 strokes', '5 strokes', '6 strokes'],
    correctIndex: 1,
    explanation: '木 consists of 4 strokes: horizontal, vertical, left sweep, right sweep.',
  },
  {
    id: 'q7',
    type: 'onyomi',
    kanjiChar: '火',
    questionTitle: 'What is the ONYOMI (音読み) of 火?',
    questionSubtitle: 'Fire',
    ttsAudio: 'か',
    options: ['ひ (hi)', 'カ (ka)', 'スイ (sui)', 'ド (do)'],
    correctIndex: 1,
    explanation: '火: Kunyomi is ひ (fire), Onyomi is カ (e.g. 火曜日 - kayoubi).',
  },
  {
    id: 'q8',
    type: 'meaning',
    kanjiChar: '道',
    questionTitle: 'Which meaning belongs to 道?',
    questionSubtitle: 'Found in Shinto (神道) and Judo (柔道)',
    ttsAudio: 'みち',
    options: ['Way / Path / Road', 'Hand / Skill', 'Heart / Spirit', 'Eye / Vision'],
    correctIndex: 0,
    explanation: '道 means Way / Path / Road (みち / ドウ).',
  },
  {
    id: 'q9',
    type: 'kunyomi',
    kanjiChar: '川',
    questionTitle: 'What is the KUNYOMI (訓読み) of 川?',
    questionSubtitle: 'River / Stream',
    ttsAudio: 'かわ',
    options: ['セン (sen)', 'かわ (kawa)', 'やま (yama)', 'みず (mizu)'],
    correctIndex: 1,
    explanation: '川: Kunyomi is かわ (river), Onyomi is セン.',
  },
  {
    id: 'q10',
    type: 'radical',
    kanjiChar: '海',
    questionTitle: 'What is the primary RADICAL of 海 (Ocean)?',
    questionSubtitle: 'Sea / Ocean',
    ttsAudio: 'うみ',
    options: ['氵 (Sanzui / Water)', '火 (Fire)', '日 (Sun)', '艹 (Grass)'],
    correctIndex: 0,
    explanation: '海 has the 氵 (water) radical on the left side.',
  },
  {
    id: 'q11',
    type: 'compound',
    kanjiChar: '時間',
    questionTitle: '「時」+「間」forms which word?',
    questionSubtitle: 'Time + Interval',
    ttsAudio: 'じかん',
    options: ['じかん (Time / Hour)', 'とけい (Clock)', 'きょう (Today)', 'あさ (Morning)'],
    correctIndex: 0,
    explanation: '時 (time) + 間 (interval) = 時間 (jikan / time).',
  },
  {
    id: 'q12',
    type: 'stroke_count',
    kanjiChar: '日',
    questionTitle: 'How many STROKES in 日?',
    questionSubtitle: 'Sun / Day',
    ttsAudio: 'ひ',
    options: ['3 strokes', '4 strokes', '5 strokes', '6 strokes'],
    correctIndex: 1,
    explanation: '日 consists of 4 strokes.',
  },
];

/**
 * Calculates duel player damage based on reaction time.
 */
export function calculateDuelDamage(reactionMs: number): {
  damage: number;
  isCritical: boolean;
  strikeTitle: string;
} {
  if (reactionMs < 1200) {
    return {
      damage: 280,
      isCritical: true,
      strikeTitle: '⚡ 会心の一撃 (CRITICAL STRIKE!)',
    };
  } else if (reactionMs < 2500) {
    return {
      damage: 200,
      isCritical: false,
      strikeTitle: '⚔️ 一閃 (CLEAN STRIKE)',
    };
  } else {
    return {
      damage: 130,
      isCritical: false,
      strikeTitle: '🗡️ かすり傷 (GRAZE STRIKE)',
    };
  }
}

/**
 * Generates a dynamic duel question from any Kanji in the JLPT N5–N1 dictionary.
 */
export function generateDynamicDuelQuestion(pool: DuelKanjiItem[] = ALL_DUEL_KANJI): KanjiDuelQuestion {
  const target = pool[Math.floor(Math.random() * pool.length)];
  const strokeVal = target.strokeCount || target.strokes;
  const questionTypes: ('meaning' | 'onyomi' | 'kunyomi' | 'stroke_count')[] = ['meaning'];
  if (target.onyomi && target.onyomi.length > 0) questionTypes.push('onyomi');
  if (target.kunyomi && target.kunyomi.length > 0) questionTypes.push('kunyomi');
  if (strokeVal) questionTypes.push('stroke_count');

  const chosenType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

  if (chosenType === 'meaning') {
    const correct = target.meanings[0];
    const distractors: string[] = [];
    while (distractors.length < 3) {
      const cand = pool[Math.floor(Math.random() * pool.length)]?.meanings[0];
      if (cand && cand !== correct && !distractors.includes(cand)) {
        distractors.push(cand);
      }
    }
    const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
    return {
      id: `duel_dyn_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      type: 'meaning',
      kanjiChar: target.kanjiChar,
      questionTitle: `Which meaning belongs to ${target.kanjiChar}?`,
      questionSubtitle: `JLPT ${target.level || 'Kanji'}`,
      ttsAudio: extractKana(target.onyomi[0] || target.kunyomi[0] || '') || target.kanjiChar,
      options,
      correctIndex: options.indexOf(correct),
      explanation: `${target.kanjiChar} means ${target.meanings.join(', ')}.`,
    };
  }

  if (chosenType === 'onyomi') {
    const rawCorrect = target.onyomi[0];
    const correct = rawCorrect;
    const distractors: string[] = [];
    while (distractors.length < 3) {
      const cand = pool[Math.floor(Math.random() * pool.length)]?.onyomi?.[0];
      if (cand && cand !== correct && !distractors.includes(cand)) {
        distractors.push(cand);
      }
    }
    const fallbackOnyomi = ['スイ (sui)', 'カ (ka)', 'モク (moku)', 'キン (kin)'];
    while (distractors.length < 3) {
      const fb = fallbackOnyomi[distractors.length];
      if (!distractors.includes(fb) && fb !== correct) distractors.push(fb);
    }
    const options = [correct, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5);
    return {
      id: `duel_dyn_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      type: 'onyomi',
      kanjiChar: target.kanjiChar,
      questionTitle: `What is the ONYOMI (音読み) of ${target.kanjiChar}?`,
      questionSubtitle: `Meaning: ${target.meanings[0]}`,
      ttsAudio: extractKana(rawCorrect) || target.kanjiChar,
      options,
      correctIndex: options.indexOf(correct),
      explanation: `${target.kanjiChar} Onyomi: ${target.onyomi.join(', ')}.`,
    };
  }

  if (chosenType === 'kunyomi') {
    const rawCorrect = target.kunyomi[0];
    const correct = rawCorrect;
    const distractors: string[] = [];
    while (distractors.length < 3) {
      const cand = pool[Math.floor(Math.random() * pool.length)]?.kunyomi?.[0];
      if (cand && cand !== correct && !distractors.includes(cand)) {
        distractors.push(cand);
      }
    }
    const fallbackKunyomi = ['みず (mizu)', 'やま (yama)', 'かわ (kawa)', 'ひと (hito)'];
    while (distractors.length < 3) {
      const fb = fallbackKunyomi[distractors.length];
      if (!distractors.includes(fb) && fb !== correct) distractors.push(fb);
    }
    const options = [correct, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5);
    return {
      id: `duel_dyn_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      type: 'kunyomi',
      kanjiChar: target.kanjiChar,
      questionTitle: `What is the KUNYOMI (訓読み) of ${target.kanjiChar}?`,
      questionSubtitle: `Meaning: ${target.meanings[0]}`,
      ttsAudio: extractKana(rawCorrect) || target.kanjiChar,
      options,
      correctIndex: options.indexOf(correct),
      explanation: `${target.kanjiChar} Kunyomi: ${target.kunyomi.join(', ')}.`,
    };
  }

  // stroke_count
  const count = strokeVal || 5;
  const correct = `${count} strokes`;
  const distCountSet = new Set<number>();
  for (const delta of [-2, -1, 1, 2, 3]) {
    const c = count + delta;
    if (c > 0 && c !== count) distCountSet.add(c);
  }
  const distractors = Array.from(distCountSet).slice(0, 3).map((n) => `${n} strokes`);
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
  return {
    id: `duel_dyn_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type: 'stroke_count',
    kanjiChar: target.kanjiChar,
    questionTitle: `How many STROKES in ${target.kanjiChar}?`,
    questionSubtitle: `${target.meanings[0]}`,
    ttsAudio: target.kanjiChar,
    options,
    correctIndex: options.indexOf(correct),
    explanation: `${target.kanjiChar} consists of ${count} strokes.`,
  };
}

/**
 * Generates a randomized queue of questions for a duel.
 * Returns curated questions with option to append dynamic questions from all JLPT Kanji.
 */
export function generateDuelMatch(includeDynamic = false): KanjiDuelQuestion[] {
  const shuffled = [...KANJI_DUEL_BANK].sort(() => Math.random() - 0.5);
  if (!includeDynamic) {
    return shuffled;
  }
  const dynamicCount = 8;
  const dynamicQuestions: KanjiDuelQuestion[] = [];
  for (let i = 0; i < dynamicCount; i++) {
    dynamicQuestions.push(generateDynamicDuelQuestion());
  }
  return [...shuffled, ...dynamicQuestions].sort(() => Math.random() - 0.5);
}
