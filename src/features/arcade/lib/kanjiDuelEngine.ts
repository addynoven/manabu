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
 * Generates a randomized queue of questions for a duel.
 */
export function generateDuelMatch(): KanjiDuelQuestion[] {
  return [...KANJI_DUEL_BANK].sort(() => Math.random() - 0.5);
}
