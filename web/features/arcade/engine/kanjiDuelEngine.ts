import kanjiN5 from '@/data/kanji_n5.json';
import kanjiN4 from '@/data/kanji_n4.json';
import kanjiN3 from '@/data/kanji_n3.json';
import kanjiN2 from '@/data/kanji_n2.json';
import kanjiN1 from '@/data/kanji_n1.json';

export function extractKana(reading: string): string {
  if (!reading) return '';
  const spaceIdx = reading.indexOf(' ');
  if (spaceIdx === -1) return reading;
  return reading.slice(spaceIdx + 1).trim();
}

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
  ...(kanjiN5 as any[]),
  ...(kanjiN4 as any[]),
  ...(kanjiN3 as any[]),
  ...(kanjiN2 as any[]),
  ...(kanjiN1 as any[]),
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
];

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

export function generateDynamicDuelQuestion(pool: DuelKanjiItem[] = ALL_DUEL_KANJI): KanjiDuelQuestion {
  const target = pool[Math.floor(Math.random() * pool.length)];
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
