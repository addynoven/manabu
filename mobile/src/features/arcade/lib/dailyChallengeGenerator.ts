export interface DailyChallengeQuestion {
  id: string;
  prompt: string;
  promptSub: string;
  options: string[];
  correctAnswer: string;
  category: 'kana' | 'kanji' | 'vocab';
  explanation: string;
}

// 128-bit hash from seed string
function cyrb128(str: string): [number, number, number, number] {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860284);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

// Simple Fast Counter 32 PRNG
function sfc32(a: number, b: number, c: number, d: number) {
  return function () {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    const t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

export function createSeededRandom(seedStr: string): () => number {
  const [a, b, c, d] = cyrb128(seedStr);
  return sfc32(a, b, c, d);
}

// Seeded array shuffle
function seededShuffle<T>(array: T[], random: () => number): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

const KANA_POOL: { prompt: string; promptSub: string; correct: string; distractors: string[] }[] = [
  { prompt: 'あ', promptSub: 'Hiragana vowel', correct: 'a', distractors: ['o', 'e', 'u'] },
  { prompt: 'か', promptSub: 'Hiragana k-row', correct: 'ka', distractors: ['ki', 'sa', 'ta'] },
  { prompt: 'さ', promptSub: 'Hiragana s-row', correct: 'sa', distractors: ['chi', 'so', 'ki'] },
  { prompt: 'た', promptSub: 'Hiragana t-row', correct: 'ta', distractors: ['da', 'na', 'ka'] },
  { prompt: 'な', promptSub: 'Hiragana n-row', correct: 'na', distractors: ['me', 'nu', 'ha'] },
  { prompt: 'は', promptSub: 'Hiragana h-row', correct: 'ha', distractors: ['ho', 'ke', 'ma'] },
  { prompt: 'ま', promptSub: 'Hiragana m-row', correct: 'ma', distractors: ['mo', 'mu', 'ho'] },
  { prompt: 'や', promptSub: 'Hiragana y-row', correct: 'ya', distractors: ['yu', 'yo', 'ka'] },
  { prompt: 'ら', promptSub: 'Hiragana r-row', correct: 'ra', distractors: ['ro', 'chi', 'ru'] },
  { prompt: 'わ', promptSub: 'Hiragana w-row', correct: 'wa', distractors: ['ne', 're', 'o'] },
  { prompt: 'シ', promptSub: 'Katakana character', correct: 'shi', distractors: ['tsu', 'so', 'n'] },
  { prompt: 'ツ', promptSub: 'Katakana character', correct: 'tsu', distractors: ['shi', 'so', 'n'] },
  { prompt: 'ソ', promptSub: 'Katakana character', correct: 'so', distractors: ['n', 'shi', 'ri'] },
  { prompt: 'ン', promptSub: 'Katakana character', correct: 'n', distractors: ['so', 'shi', 'tsu'] },
  { prompt: 'カ', promptSub: 'Katakana character', correct: 'ka', distractors: ['chikara', 'ku', 'ko'] },
];

const KANJI_POOL: { prompt: string; promptSub: string; correct: string; distractors: string[] }[] = [
  { prompt: '日', promptSub: 'Reading: にち / ひ', correct: 'Day / Sun', distractors: ['Moon', 'Water', 'Fire'] },
  { prompt: '月', promptSub: 'Reading: げつ / つき', correct: 'Moon / Month', distractors: ['Sun', 'Year', 'Tree'] },
  { prompt: '木', promptSub: 'Reading: もく / き', correct: 'Tree / Wood', distractors: ['Gold', 'Earth', 'Book'] },
  { prompt: '水', promptSub: 'Reading: すい / みず', correct: 'Water', distractors: ['Fire', 'Ice', 'River'] },
  { prompt: '火', promptSub: 'Reading: か / ひ', correct: 'Fire', distractors: ['Water', 'Wind', 'Gold'] },
  { prompt: '土', promptSub: 'Reading: ど / つち', correct: 'Earth / Soil', distractors: ['King', 'Warrior', 'Stone'] },
  { prompt: '金', promptSub: 'Reading: きん / かね', correct: 'Gold / Money', distractors: ['Silver', 'Mountain', 'Iron'] },
  { prompt: '山', promptSub: 'Reading: さん / やま', correct: 'Mountain', distractors: ['River', 'Field', 'Forest'] },
  { prompt: '川', promptSub: 'Reading: せん / かわ', correct: 'River', distractors: ['Mountain', 'Valley', 'Lake'] },
  { prompt: '人', promptSub: 'Reading: じん / ひと', correct: 'Person / Human', distractors: ['Big', 'Entry', 'Sky'] },
  { prompt: '大', promptSub: 'Reading: だい / おお', correct: 'Big / Large', distractors: ['Small', 'Dog', 'Sky'] },
  { prompt: '小', promptSub: 'Reading: しょう / ちい', correct: 'Small / Little', distractors: ['Big', 'Few', 'Water'] },
  { prompt: '学', promptSub: 'Reading: がく / まな', correct: 'Study / Learn', distractors: ['School', 'Child', 'Letter'] },
  { prompt: '生', promptSub: 'Reading: せい / い', correct: 'Life / Birth', distractors: ['Death', 'Ox', 'Right'] },
  { prompt: '友', promptSub: 'Reading: ゆう / とも', correct: 'Friend', distractors: ['Brother', 'Enemy', 'Self'] },
];

const VOCAB_POOL: { prompt: string; promptSub: string; correct: string; distractors: string[] }[] = [
  { prompt: 'ありがとう', promptSub: 'arigatou', correct: 'Thank you', distractors: ['Excuse me', 'Good morning', 'Goodbye'] },
  { prompt: 'おはよう', promptSub: 'ohayou', correct: 'Good morning', distractors: ['Good evening', 'Good night', 'Hello'] },
  { prompt: 'こんばんは', promptSub: 'konbanwa', correct: 'Good evening', distractors: ['Good morning', 'Goodbye', 'Please'] },
  { prompt: 'さようなら', promptSub: 'sayounara', correct: 'Goodbye', distractors: ['See you soon', 'Hello', 'Thank you'] },
  { prompt: 'すみません', promptSub: 'sumimasen', correct: 'Excuse me / Sorry', distractors: ['Thank you', 'Please', 'You are welcome'] },
  { prompt: 'はい', promptSub: 'hai', correct: 'Yes', distractors: ['No', 'Maybe', 'Please'] },
  { prompt: 'いいえ', promptSub: 'iie', correct: 'No', distractors: ['Yes', 'Right', 'OK'] },
  { prompt: '先生', promptSub: 'sensei', correct: 'Teacher / Master', distractors: ['Student', 'Doctor', 'Friend'] },
  { prompt: '学生', promptSub: 'gakusei', correct: 'Student', distractors: ['Teacher', 'Doctor', 'Employee'] },
  { prompt: '日本語', promptSub: 'nihongo', correct: 'Japanese Language', distractors: ['Japan', 'English', 'Chinese'] },
];

export function generateDailyChallenge(dateStr?: string): DailyChallengeQuestion[] {
  const date = dateStr || new Date().toISOString().split('T')[0];
  const rand = createSeededRandom(date);

  const shuffledKana = seededShuffle(KANA_POOL, rand);
  const shuffledKanji = seededShuffle(KANJI_POOL, rand);
  const shuffledVocab = seededShuffle(VOCAB_POOL, rand);

  const selectedItems = [
    { ...shuffledKana[0], category: 'kana' as const },
    { ...shuffledKana[1], category: 'kana' as const },
    { ...shuffledKanji[0], category: 'kanji' as const },
    { ...shuffledKanji[1], category: 'kanji' as const },
    { ...shuffledVocab[0], category: 'vocab' as const },
  ];

  return selectedItems.map((item, index) => {
    const options = seededShuffle([item.correct, ...item.distractors], rand);
    return {
      id: `daily_${date}_q${index + 1}`,
      prompt: item.prompt,
      promptSub: item.promptSub,
      options,
      correctAnswer: item.correct,
      category: item.category,
      explanation: `${item.prompt} (${item.promptSub}) means "${item.correct}"`,
    };
  });
}

export function getDayOfYear(date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
