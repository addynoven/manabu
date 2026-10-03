import * as wanakana from 'wanakana';

export interface ShiritoriWord {
  word: string; // Kanji or Kana, e.g. "猫" or "ねこ"
  kana: string; // Pure Hiragana reading, e.g. "ねこ"
  romaji: string;
  english: string;
}

export interface ShiritoriTurn {
  id: string;
  player: 'player' | 'opponent';
  word: string;
  kana: string;
  romaji: string;
  english: string;
  timestamp: number;
}

export type ShiritoriDifficulty = 'easy' | 'medium' | 'hard';

export interface ShiritoriBotProfile {
  id: string;
  name: string;
  japaneseName: string;
  title: string;
  avatarEmoji: string;
  difficulty: ShiritoriDifficulty;
  thinkTimeMs: number;
  personality: string;
}

export const BOT_PROFILES: Record<ShiritoriDifficulty, ShiritoriBotProfile> = {
  easy: {
    id: 'tanuki',
    name: 'Tanuki Sensei',
    japaneseName: 'たぬき先生',
    title: 'Playful Apprentice',
    avatarEmoji: '🦝',
    difficulty: 'easy',
    thinkTimeMs: 2200,
    personality: 'Friendly and forgiving. Occasionally makes silly mistakes!',
  },
  medium: {
    id: 'kitsune',
    name: 'Kitsune Bot',
    japaneseName: 'きつね',
    title: 'Clever Word Duelist',
    avatarEmoji: '🦊',
    difficulty: 'medium',
    thinkTimeMs: 1600,
    personality: 'Quick and clever. Rarely repeats words and knows plenty of nouns.',
  },
  hard: {
    id: 'tengu',
    name: 'Tengu Master',
    japaneseName: '天狗マスター',
    title: 'Ancient Shiritori Sage',
    avatarEmoji: '👺',
    difficulty: 'hard',
    thinkTimeMs: 1000,
    personality: 'Lightning fast. Trap master who targets rare starting kana!',
  },
};

/**
 * Built-in dictionary of authentic Japanese nouns for Shiritori validation and AI choices.
 */
export const SHIRITORI_DICTIONARY: ShiritoriWord[] = [
  // あ行
  { word: '朝', kana: 'あさ', romaji: 'asa', english: 'Morning' },
  { word: '明日', kana: 'あした', romaji: 'ashita', english: 'Tomorrow' },
  { word: '雨', kana: 'あめ', romaji: 'ame', english: 'Rain / Candy' },
  { word: '秋', kana: 'あき', romaji: 'aki', english: 'Autumn' },
  { word: '足', kana: 'あし', romaji: 'ashi', english: 'Foot / Leg' },
  { word: '頭', kana: 'あたま', romaji: 'atama', english: 'Head' },
  { word: '飴', kana: 'あめ', romaji: 'ame', english: 'Candy' },
  { word: '家', kana: 'いえ', romaji: 'ie', english: 'House / Home' },
  { word: '犬', kana: 'いぬ', romaji: 'inu', english: 'Dog' },
  { word: '池', kana: 'いけ', romaji: 'ike', english: 'Pond' },
  { word: '石', kana: 'いし', romaji: 'ishi', english: 'Stone' },
  { word: '今', kana: 'いま', romaji: 'ima', english: 'Now' },
  { word: '海', kana: 'うみ', romaji: 'umi', english: 'Sea / Ocean' },
  { word: '歌', kana: 'うた', romaji: 'uta', english: 'Song' },
  { word: '牛', kana: 'うし', romaji: 'ushi', english: 'Cow' },
  { word: '馬', kana: 'うま', romaji: 'uma', english: 'Horse' },
  { word: '絵', kana: 'え', romaji: 'e', english: 'Picture / Painting' },
  { word: '駅', kana: 'えき', romaji: 'eki', english: 'Train station' },
  { word: '鉛筆', kana: 'えんぴつ', romaji: 'enpitsu', english: 'Pencil' },
  { word: '男', kana: 'おとこ', romaji: 'otoko', english: 'Man' },
  { word: '女', kana: 'おんな', romaji: 'onna', english: 'Woman' },
  { word: 'お茶', kana: 'おちゃ', romaji: 'ocha', english: 'Green tea' },
  { word: 'お金', kana: 'おかね', romaji: 'okane', english: 'Money' },
  { word: '音楽', kana: 'おんがく', romaji: 'ongaku', english: 'Music' },

  // か行
  { word: '傘', kana: 'かさ', romaji: 'kasa', english: 'Umbrella' },
  { word: '川', kana: 'かわ', romaji: 'kawa', english: 'River' },
  { word: '紙', kana: 'かみ', romaji: 'kami', english: 'Paper' },
  { word: '風', kana: 'かぜ', romaji: 'kaze', english: 'Wind' },
  { word: '肩', kana: 'かた', romaji: 'kata', english: 'Shoulder' },
  { word: 'カラス', kana: 'からす', romaji: 'karasu', english: 'Crow' },
  { word: '木', kana: 'き', romaji: 'ki', english: 'Tree' },
  { word: '着物', kana: 'きもの', romaji: 'kimono', english: 'Kimono' },
  { word: '切手', kana: 'きって', romaji: 'kitte', english: 'Postage stamp' },
  { word: 'キツネ', kana: 'きつね', romaji: 'kitsune', english: 'Fox' },
  { word: 'キリン', kana: 'きりん', romaji: 'kirin', english: 'Giraffe (Ends in n!)' },
  { word: '車', kana: 'くるま', romaji: 'kuruma', english: 'Car' },
  { word: '口', kana: 'くち', romaji: 'kuchi', english: 'Mouth' },
  { word: '靴', kana: 'くつ', romaji: 'kutsu', english: 'Shoes' },
  { word: '雲', kana: 'くも', romaji: 'kumo', english: 'Cloud / Spider' },
  { word: '国', kana: 'くに', romaji: 'kuni', english: 'Country' },
  { word: '草', kana: 'くさ', romaji: 'kusa', english: 'Grass' },
  { word: '熊', kana: 'くま', romaji: 'kuma', english: 'Bear' },
  { word: '毛', kana: 'け', romaji: 'ke', english: 'Hair / Fur' },
  { word: '景色', kana: 'けしき', romaji: 'keshiki', english: 'Scenery' },
  { word: '子供', kana: 'こども', romaji: 'kodomo', english: 'Child' },
  { word: '声', kana: 'こえ', romaji: 'koe', english: 'Voice' },
  { word: '氷', kana: 'こおり', romaji: 'koori', english: 'Ice' },
  { word: '言葉', kana: 'ことば', romaji: 'kotoba', english: 'Word / Language' },

  // さ行
  { word: '魚', kana: 'さかな', romaji: 'sakana', english: 'Fish' },
  { word: '桜', kana: 'さくら', romaji: 'sakura', english: 'Cherry blossom' },
  { word: '砂糖', kana: 'さとう', romaji: 'satou', english: 'Sugar' },
  { word: '猿', kana: 'さる', romaji: 'saru', english: 'Monkey' },
  { word: '鹿', kana: 'しか', romaji: 'shika', english: 'Deer' },
  { word: '塩', kana: 'しお', romaji: 'shio', english: 'Salt' },
  { word: '島', kana: 'しま', romaji: 'shima', english: 'Island' },
  { word: '写真', kana: 'しゃしん', romaji: 'shashin', english: 'Photograph' },
  { word: '新聞', kana: 'しんぶん', romaji: 'shinbun', english: 'Newspaper' },
  { word: '寿司', kana: 'すし', romaji: 'sushi', english: 'Sushi' },
  { word: '雀', kana: 'すずめ', romaji: 'suzume', english: 'Sparrow' },
  { word: '墨', kana: 'すみ', romaji: 'sumi', english: 'Black ink' },
  { word: '世界', kana: 'せかい', romaji: 'sekai', english: 'World' },
  { word: '先生', kana: 'せんせい', romaji: 'sensei', english: 'Teacher' },
  { word: '空', kana: 'そら', romaji: 'sora', english: 'Sky' },
  { word: '外', kana: 'そと', romaji: 'soto', english: 'Outside' },

  // た行
  { word: '卵', kana: 'たまご', romaji: 'tamago', english: 'Egg' },
  { word: '太陽', kana: 'たいよう', romaji: 'taiyou', english: 'Sun' },
  { word: '竹', kana: 'たけ', romaji: 'take', english: 'Bamboo' },
  { word: '畳', kana: 'たたみ', romaji: 'tatami', english: 'Tatami mat' },
  { word: 'タヌキ', kana: 'たぬき', romaji: 'tanuki', english: 'Raccoon dog' },
  { word: '血', kana: 'ち', romaji: 'chi', english: 'Blood' },
  { word: '地球', kana: 'ちきゅう', romaji: 'chikyuu', english: 'Earth' },
  { word: '地図', kana: 'ちず', romaji: 'chizu', english: 'Map' },
  { word: '月', kana: 'つき', romaji: 'tsuki', english: 'Moon' },
  { word: '机', kana: 'つくえ', romaji: 'tsukue', english: 'Desk' },
  { word: '手', kana: 'て', romaji: 'te', english: 'Hand' },
  { word: '手紙', kana: 'てがみ', romaji: 'tegami', english: 'Letter' },
  { word: '天気', kana: 'てんき', romaji: 'tenki', english: 'Weather' },
  { word: '時計', kana: 'とけい', romaji: 'tokei', english: 'Clock / Watch' },
  { word: '友達', kana: 'ともだち', romaji: 'tomodachi', english: 'Friend' },
  { word: '鳥', kana: 'とり', romaji: 'tori', english: 'Bird' },
  { word: '虎', kana: 'とら', romaji: 'tora', english: 'Tiger' },

  // な行
  { word: '夏', kana: 'なつ', romaji: 'natsu', english: 'Summer' },
  { word: '波', kana: 'なみ', romaji: 'nami', english: 'Wave' },
  { word: '名前', kana: 'なまえ', romaji: 'namae', english: 'Name' },
  { word: '虹', kana: 'にじ', romaji: 'niji', english: 'Rainbow' },
  { word: '肉', kana: 'にく', romaji: 'niku', english: 'Meat' },
  { word: '日本語', kana: 'にほんご', romaji: 'nihongo', english: 'Japanese language' },
  { word: '人形', kana: 'にんぎょう', romaji: 'ningyou', english: 'Doll' },
  { word: '布', kana: 'ぬの', romaji: 'nuno', english: 'Cloth' },
  { word: 'ぬいぐるみ', kana: 'ぬいぐるみ', romaji: 'nuigurumi', english: 'Stuffed plush toy' },
  { word: '猫', kana: 'ねこ', romaji: 'neko', english: 'Cat' },
  { word: '野良猫', kana: 'のらねこ', romaji: 'noraneko', english: 'Stray cat' },
  { word: '海苔', kana: 'のり', romaji: 'nori', english: 'Seaweed' },

  // は行
  { word: '花', kana: 'はな', romaji: 'hana', english: 'Flower' },
  { word: '鼻', kana: 'はな', romaji: 'hana', english: 'Nose' },
  { word: '橋', kana: 'はし', romaji: 'hashi', english: 'Bridge' },
  { word: '箸', kana: 'はし', romaji: 'hashi', english: 'Chopsticks' },
  { word: '春', kana: 'はる', romaji: 'haru', english: 'Spring' },
  { word: '箱', kana: 'はこ', romaji: 'hako', english: 'Box' },
  { word: '光', kana: 'ひかり', romaji: 'hikari', english: 'Light' },
  { word: '人', kana: 'ひと', romaji: 'hito', english: 'Person' },
  { word: '昼', kana: 'ひる', romaji: 'hiru', english: 'Noon / Daytime' },
  { word: '船', kana: 'ふね', romaji: 'fune', english: 'Ship / Boat' },
  { word: '冬', kana: 'ふゆ', romaji: 'fuyu', english: 'Winter' },
  { word: '筆', kana: 'ふで', romaji: 'fude', english: 'Brush' },
  { word: '部屋', kana: 'へや', romaji: 'heya', english: 'Room' },
  { word: '蛇', kana: 'へび', romaji: 'hebi', english: 'Snake' },
  { word: '本', kana: 'ほん', romaji: 'hon', english: 'Book (Ends in n!)' },
  { word: '星', kana: 'ほし', romaji: 'hoshi', english: 'Star' },
  { word: '炎', kana: 'ほのお', romaji: 'honoo', english: 'Flame' },

  // ま行
  { word: '町', kana: 'まち', romaji: 'machi', english: 'Town / City' },
  { word: '窓', kana: 'まど', romaji: 'mado', english: 'Window' },
  { word: '水', kana: 'みず', romaji: 'mizu', english: 'Water' },
  { word: '道', kana: 'みち', romaji: 'michi', english: 'Road / Path' },
  { word: '耳', kana: 'みみ', romaji: 'mimi', english: 'Ear' },
  { word: '虫', kana: 'むし', romaji: 'mushi', english: 'Insect / Bug' },
  { word: '目', kana: 'め', romaji: 'me', english: 'Eye' },
  { word: '森', kana: 'もり', romaji: 'mori', english: 'Forest' },
  { word: '門', kana: 'もん', romaji: 'mon', english: 'Gate' },

  // や・ら・わ行
  { word: '山', kana: 'やま', romaji: 'yama', english: 'Mountain' },
  { word: '雪', kana: 'ゆき', romaji: 'yuki', english: 'Snow' },
  { word: '夢', kana: 'ゆめ', romaji: 'yume', english: 'Dream' },
  { word: '夜', kana: 'よる', romaji: 'yoru', english: 'Night' },
  { word: 'ラジオ', kana: 'らじお', romaji: 'rajio', english: 'Radio' },
  { word: 'リス', kana: 'りす', romaji: 'risu', english: 'Squirrel' },
  { word: 'リンゴ', kana: 'りんご', romaji: 'ringo', english: 'Apple' },
  { word: '歴史', kana: 'れきし', romaji: 'rekishi', english: 'History' },
  { word: 'ろうそく', kana: 'ろうそく', romaji: 'rousoku', english: 'Candle' },
  { word: '和紙', kana: 'わし', romaji: 'washi', english: 'Japanese paper' },
  { word: 'ワニ', kana: 'わに', romaji: 'wani', english: 'Crocodile' },
];

/**
 * Normalizes Japanese text into standard Hiragana for Shiritori game logic.
 */
export function normalizeToHiragana(text: string): string {
  const trimmed = text.trim();
  const hiragana = wanakana.toHiragana(trimmed);
  return hiragana.replace(/[\s\-_・。、！？]/g, '');
}

/**
 * Extracts the effective ending kana for Shiritori chaining.
 * Handles small kana (ゃ/ゅ/ょ), prolonged sound mark (ー), and small tsu (っ).
 */
export function getShiritoriLastKana(kana: string): string {
  if (!kana) return '';
  const lastChar = kana[kana.length - 1];

  // If prolonged sound mark 'ー', take the sound of previous kana's vowel
  if (lastChar === 'ー' && kana.length >= 2) {
    const prevChar = kana[kana.length - 2];
    const romaji = wanakana.toRomaji(prevChar);
    const lastVowel = romaji[romaji.length - 1];
    return wanakana.toHiragana(lastVowel) || prevChar;
  }

  // Small kana mappings
  const smallKanaMap: Record<string, string> = {
    'ゃ': 'や',
    'ゅ': 'ゆ',
    'ょ': 'よ',
    'ぁ': 'あ',
    'ぃ': 'い',
    'ぅ': 'う',
    'ぇ': 'え',
    'ぉ': 'お',
    'っ': 'つ',
  };

  return smallKanaMap[lastChar] || lastChar;
}

export interface WordValidationResult {
  isValid: boolean;
  kana: string;
  matchedWord?: ShiritoriWord;
  error?: 'empty' | 'wrong_start' | 'already_used' | 'ends_in_n' | 'unknown_word';
  message?: string;
}

/**
 * Validates a player's proposed Shiritori word against rules and dictionary.
 */
export function validateShiritoriMove(
  input: string,
  requiredKana: string,
  usedWords: Set<string>,
): WordValidationResult {
  const cleanInput = input.trim();
  if (!cleanInput) {
    return { isValid: false, kana: '', error: 'empty', message: 'Enter a Japanese word.' };
  }

  // 0. Match dictionary first so Kanji (e.g. "子供", "猫") or Romaji ("neko") resolves to pure kana reading
  const dictEntry = SHIRITORI_DICTIONARY.find(
    w =>
      w.word === cleanInput ||
      w.kana === cleanInput ||
      w.romaji.toLowerCase() === cleanInput.toLowerCase(),
  );

  const hiragana = dictEntry ? dictEntry.kana : normalizeToHiragana(cleanInput);
  if (!hiragana) {
    return { isValid: false, kana: '', error: 'empty', message: 'Invalid kana entered.' };
  }

  // 1. Check starting kana
  const firstKana = hiragana[0];
  if (requiredKana && firstKana !== requiredKana) {
    return {
      isValid: false,
      kana: hiragana,
      error: 'wrong_start',
      message: `Must start with「${requiredKana}」, but starts with「${firstKana}」.`,
    };
  }

  // 2. Check duplicate / already used
  if (usedWords.has(hiragana)) {
    return {
      isValid: false,
      kana: hiragana,
      error: 'already_used',
      message: `「${cleanInput}」has already been used in this match!`,
    };
  }

  // 3. Check if ends in 'ん' (Instant Loss Condition!)
  if (hiragana.endsWith('ん')) {
    return {
      isValid: true, // It is a valid word, but triggers the 'n' loss rule!
      kana: hiragana,
      matchedWord: dictEntry || {
        word: cleanInput,
        kana: hiragana,
        romaji: wanakana.toRomaji(hiragana),
        english: 'Ends in n (ん)',
      },
      error: 'ends_in_n',
      message: `「${cleanInput}」ends in「ん」! Game Over!`,
    };
  }

  if (dictEntry) {
    return {
      isValid: true,
      kana: hiragana,
      matchedWord: dictEntry,
    };
  }

  // Allow custom words that are at least 2 mora and look like valid Hiragana
  if (hiragana.length >= 2 && wanakana.isHiragana(hiragana)) {
    return {
      isValid: true,
      kana: hiragana,
      matchedWord: {
        word: cleanInput,
        kana: hiragana,
        romaji: wanakana.toRomaji(hiragana),
        english: 'Custom Word',
      },
    };
  }

  return {
    isValid: false,
    kana: hiragana,
    error: 'unknown_word',
    message: `「${cleanInput}」is not recognized. Try a common noun.`,
  };
}

/**
 * AI Bot selection for Shiritori opponent move.
 */
export function getBotShiritoriMove(
  requiredKana: string,
  usedWords: Set<string>,
  difficulty: ShiritoriDifficulty,
): ShiritoriWord | null {
  // Candidate words starting with requiredKana
  const candidates = SHIRITORI_DICTIONARY.filter(
    w => w.kana.startsWith(requiredKana) && !usedWords.has(w.kana),
  );

  if (candidates.length === 0) {
    return null; // Bot is stumped! Player wins!
  }

  // Filter out words ending in 'ん' unless easy bot makes a mistake
  const safeCandidates = candidates.filter(w => !w.kana.endsWith('ん'));

  if (difficulty === 'easy') {
    // 15% chance easy bot makes a mistake and plays a word ending in 'ん'
    if (Math.random() < 0.15) {
      const nCandidates = candidates.filter(w => w.kana.endsWith('ん'));
      if (nCandidates.length > 0) {
        return nCandidates[Math.floor(Math.random() * nCandidates.length)];
      }
    }
    // Otherwise pick random safe word
    const pool = safeCandidates.length > 0 ? safeCandidates : candidates;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  if (difficulty === 'medium') {
    const pool = safeCandidates.length > 0 ? safeCandidates : candidates;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Hard / Tengu Bot: prioritizes words that force hard starting kana (like ぬ, る, ら, ゆ, を)
  const hardPool = safeCandidates.sort((a, b) => {
    const lastA = getShiritoriLastKana(a.kana);
    const lastB = getShiritoriLastKana(b.kana);
    const rareKana = ['ぬ', 'る', 'ら', 'ゆ', 'ろ', 'へ', 'む'];
    const scoreA = rareKana.includes(lastA) ? 2 : 1;
    const scoreB = rareKana.includes(lastB) ? 2 : 1;
    return scoreB - scoreA;
  });

  return hardPool[0] || candidates[0];
}

/**
 * Returns quick suggestions for player from available dictionary
 */
export function getPlayerSuggestions(
  requiredKana: string,
  usedWords: Set<string>,
  limit = 4,
): ShiritoriWord[] {
  return SHIRITORI_DICTIONARY.filter(
    w => w.kana.startsWith(requiredKana) && !w.kana.endsWith('ん') && !usedWords.has(w.kana),
  ).slice(0, limit);
}
