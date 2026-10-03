import type { WordleGuessFeedback, WordleLetterStatus, WordleWord } from './arcade.model';
export type { WordleGuessFeedback, WordleLetterStatus, WordleWord } from './arcade.model';

export const WORDLE_WORD_BANK: WordleWord[] = [
  { word: 'さくら', kanji: '桜', reading: 'sakura', meaning: 'cherry blossom' },
  { word: 'くるま', kanji: '車', reading: 'kuruma', meaning: 'car / vehicle' },
  { word: 'てがみ', kanji: '手紙', reading: 'tegami', meaning: 'letter' },
  { word: 'たまご', kanji: '卵', reading: 'tamago', meaning: 'egg' },
  { word: 'めがね', kanji: '眼鏡', reading: 'megane', meaning: 'glasses' },
  { word: 'きって', kanji: '切手', reading: 'kitte', meaning: 'postage stamp' },
  { word: 'さいふ', kanji: '財布', reading: 'saifu', meaning: 'wallet / purse' },
  { word: 'ぼうし', kanji: '帽子', reading: 'boushi', meaning: 'hat / cap' },
  { word: 'あたま', kanji: '頭', reading: 'atama', meaning: 'head' },
  { word: 'からだ', kanji: '体', reading: 'karada', meaning: 'body' },
  { word: 'こころ', kanji: '心', reading: 'kokoro', meaning: 'heart / mind' },
  { word: 'ことば', kanji: '言葉', reading: 'kotoba', meaning: 'word / language' },
  { word: 'ひかり', kanji: '光', reading: 'hikari', meaning: 'light / ray' },
  { word: 'みかん', kanji: '蜜柑', reading: 'mikan', meaning: 'mandarin orange' },
  { word: 'りんご', kanji: '林檎', reading: 'ringo', meaning: 'apple' },
  { word: 'うさぎ', kanji: '兎', reading: 'usagi', meaning: 'rabbit' },
  { word: 'きつね', kanji: '狐', reading: 'kitsune', meaning: 'fox' },
  { word: 'すずめ', kanji: '雀', reading: 'suzume', meaning: 'sparrow' },
  { word: 'ほしぞら', kanji: '星空', reading: 'hoshizora', meaning: 'starry sky' },
  { word: 'たいよう', kanji: '太陽', reading: 'taiyou', meaning: 'sun' },
  { word: 'おんがく', kanji: '音楽', reading: 'ongaku', meaning: 'music' },
  { word: 'せんせい', kanji: '先生', reading: 'sensei', meaning: 'teacher' },
  { word: 'ともだち', kanji: '友達', reading: 'tomodachi', meaning: 'friend' },
  { word: 'きせつ', kanji: '季節', reading: 'kisetsu', meaning: 'season' },
  { word: 'てんき', kanji: '天気', reading: 'tenki', meaning: 'weather' },
  { word: 'みらい', kanji: '未来', reading: 'mirai', meaning: 'future' },
  { word: 'へいわ', kanji: '平和', reading: 'heiwa', meaning: 'peace' },
  { word: 'まほう', kanji: '魔法', reading: 'mahou', meaning: 'magic' },
  { word: 'きぼう', kanji: '希望', reading: 'kibou', meaning: 'hope' },
  { word: 'ゆめみ', kanji: '夢見', reading: 'yumemi', meaning: 'dreaming' },
];

// Curated 3-kana subset for the 3-letter daily / infinite mode
export const THREE_KANA_WORDS: WordleWord[] = WORDLE_WORD_BANK.filter(
  w => Array.from(w.word).length === 3,
);

export function getRandomWordleWord(): WordleWord {
  const index = Math.floor(Math.random() * THREE_KANA_WORDS.length);
  return THREE_KANA_WORDS[index];
}

/**
 * Evaluates a guess against target using canonical Wordle logic with accurate multi-character handling.
 */
export function evaluateWordleGuess(
  target: string,
  guess: string,
): WordleGuessFeedback[] {
  const targetChars = Array.from(target);
  const guessChars = Array.from(guess);
  const length = targetChars.length;

  const result: WordleGuessFeedback[] = guessChars.map(char => ({
    kana: char,
    status: 'absent',
  }));

  // Track remaining letters in target for yellow match
  const remainingCounts: Record<string, number> = {};
  for (const char of targetChars) {
    remainingCounts[char] = (remainingCounts[char] || 0) + 1;
  }

  // 1st Pass: Exact position matches (Green)
  for (let i = 0; i < length; i++) {
    if (guessChars[i] === targetChars[i]) {
      result[i].status = 'correct';
      remainingCounts[guessChars[i]]--;
    }
  }

  // 2nd Pass: Present in wrong position (Yellow)
  for (let i = 0; i < length; i++) {
    if (result[i].status !== 'correct') {
      const char = guessChars[i];
      if (remainingCounts[char] && remainingCounts[char] > 0) {
        result[i].status = 'present';
        remainingCounts[char]--;
      } else {
        result[i].status = 'absent';
      }
    }
  }

  return result;
}

/**
 * Updates keyboard state so keys show the highest priority status:
 * 'correct' > 'present' > 'absent'
 */
export function updateKeyboardStatus(
  prev: Record<string, WordleLetterStatus>,
  feedback: WordleGuessFeedback[],
): Record<string, WordleLetterStatus> {
  const updated = { ...prev };

  for (const item of feedback) {
    const current = updated[item.kana];
    if (item.status === 'correct') {
      updated[item.kana] = 'correct';
    } else if (item.status === 'present' && current !== 'correct') {
      updated[item.kana] = 'present';
    } else if (item.status === 'absent' && !current) {
      updated[item.kana] = 'absent';
    }
  }

  return updated;
}

/**
 * Common Hiragana keyboard columns / rows for mobile Kana Wordle
 */
export const KANA_KEYBOARD_ROWS: string[][] = [
  ['あ', 'か', 'さ', 'た', 'な'],
  ['は', 'ま', 'や', 'ら', 'わ'],
  ['い', 'き', 'し', 'ち', 'に'],
  ['ひ', 'み', 'ゆ', 'り', 'を'],
  ['う', 'く', 'す', 'つ', 'ぬ'],
  ['ふ', 'む', 'よ', 'る', 'ん'],
  ['え', 'け', 'せ', 'て', 'ね'],
  ['へ', 'め', 'れ', 'ろ', 'お'],
];
