export type KarutaGameMode = 'vocab' | 'poem';

export interface KarutaCard {
  id: string;
  japanese: string;
  reading: string;
  romaji: string;
  english: string;
  audioText: string;
  mode?: KarutaGameMode;
  poemNumber?: number;
  poet?: string;
  poetJapanese?: string;
  kamiNoKu?: string;
  shimoNoKu?: string;
  kimariji?: string;
}

export interface KarutaBotDifficulty {
  id: 'easy' | 'medium' | 'hard';
  name: string;
  japaneseName: string;
  title: string;
  avatarEmoji: string;
  minReactionMs: number;
  maxReactionMs: number;
  foulChance: number;
}

export const KARUTA_BOT_PROFILES: Record<'easy' | 'medium' | 'hard', KarutaBotDifficulty> = {
  easy: {
    id: 'easy',
    name: 'Tanuki Trainee',
    japaneseName: 'たぬき練習生',
    title: 'Beginner Slapper',
    avatarEmoji: '🦝',
    minReactionMs: 3200,
    maxReactionMs: 4400,
    foulChance: 0.18,
  },
  medium: {
    id: 'medium',
    name: 'Kitsune Competitor',
    japaneseName: 'きつね選手',
    title: 'Karuta Class B',
    avatarEmoji: '🦊',
    minReactionMs: 2200,
    maxReactionMs: 3000,
    foulChance: 0.08,
  },
  hard: {
    id: 'hard',
    name: 'Tengu Meijin',
    japaneseName: '天狗名人',
    title: 'Karuta Grandmaster',
    avatarEmoji: '👺',
    minReactionMs: 1200,
    maxReactionMs: 1800,
    foulChance: 0.02,
  },
};

export const KARUTA_CARDS_BANK: KarutaCard[] = [
  { id: 'k1', mode: 'vocab', japanese: 'こんにちは', reading: 'こんにちは', romaji: 'konnichiwa', english: 'Hello / Good afternoon', audioText: 'こんにちは' },
  { id: 'k2', mode: 'vocab', japanese: 'おはようございます', reading: 'おはようございます', romaji: 'ohayou gozaimasu', english: 'Good morning (polite)', audioText: 'おはようございます' },
  { id: 'k3', mode: 'vocab', japanese: 'こんばんは', reading: 'こんばんは', romaji: 'konbanwa', english: 'Good evening', audioText: 'こんばんは' },
  { id: 'k4', mode: 'vocab', japanese: 'さようなら', reading: 'さようなら', romaji: 'sayounara', english: 'Goodbye', audioText: 'さようなら' },
  { id: 'k5', mode: 'vocab', japanese: 'ありがとうございます', reading: 'ありがとうございます', romaji: 'arigatou gozaimasu', english: 'Thank you very much', audioText: 'ありがとうございます' },
];

export const HYAKUNIN_ISSHU_POEMS_BANK: KarutaCard[] = [
  {
    id: 'p17',
    mode: 'poem',
    poemNumber: 17,
    poet: 'Ariwara no Narihira',
    poetJapanese: '在原業平朝臣',
    kamiNoKu: 'ちはやぶる 神代も聞かず 竜田川',
    shimoNoKu: 'からくれなゐに 水くくるとは',
    kimariji: 'ちは',
    japanese: 'からくれなゐに\n水くくるとは',
    reading: 'からくれないに みずくくるとは',
    romaji: 'karakurenawi ni mizu kukuru to wa',
    english: 'Even in the age of fierce gods, never was it heard that the Tatsuta river dyed its water crimson.',
    audioText: 'ちはやぶる かみよもきかず たつたがわ',
  },
];

export function generateKarutaMatch(cardCount = 8, mode: KarutaGameMode = 'vocab'): {
  matCards: KarutaCard[];
  readingQueue: KarutaCard[];
} {
  const bank = mode === 'poem' ? HYAKUNIN_ISSHU_POEMS_BANK : KARUTA_CARDS_BANK;
  const count = Math.min(cardCount, bank.length);
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  const matCards = shuffled.slice(0, count);
  const readingQueue = [...matCards].sort(() => Math.random() - 0.5);
  return { matCards, readingQueue };
}

export function calculateSlapScore(reactionTimeMs: number): {
  points: number;
  rank: 'S' | 'A' | 'B' | 'C';
  speedBonus: number;
} {
  let rank: 'S' | 'A' | 'B' | 'C' = 'C';
  let speedBonus = 0;

  if (reactionTimeMs < 1000) {
    rank = 'S';
    speedBonus = 100;
  } else if (reactionTimeMs < 1600) {
    rank = 'A';
    speedBonus = 60;
  } else if (reactionTimeMs < 2400) {
    rank = 'B';
    speedBonus = 30;
  } else {
    rank = 'C';
    speedBonus = 10;
  }

  const basePoints = 100;
  return {
    points: basePoints + speedBonus,
    rank,
    speedBonus,
  };
}
