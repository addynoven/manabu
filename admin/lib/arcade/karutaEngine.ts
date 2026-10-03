export type KarutaGameMode = 'vocab' | 'poem';

export interface KarutaCard {
  id: string;
  japanese: string; // The text on the card (Kanji or Shimo-no-ku)
  reading: string;  // Furigana / Hiragana
  romaji: string;
  english: string;  // The clue read by reader / meaning
  audioText: string;// Recited text by Yomite
  // Optional Hyakunin Isshu poem fields
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
  foulChance: number; // Chance bot makes a mistake
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

/**
 * Built-in bank of authentic vocabulary cards for Karuta battles.
 */
export const KARUTA_CARDS_BANK: KarutaCard[] = [
  { id: 'k1', mode: 'vocab', japanese: 'こんにちは', reading: 'こんにちは', romaji: 'konnichiwa', english: 'Hello / Good afternoon', audioText: 'こんにちは' },
  { id: 'k2', mode: 'vocab', japanese: 'おはようございます', reading: 'おはようございます', romaji: 'ohayou gozaimasu', english: 'Good morning (polite)', audioText: 'おはようございます' },
  { id: 'k3', mode: 'vocab', japanese: 'こんばんは', reading: 'こんばんは', romaji: 'konbanwa', english: 'Good evening', audioText: 'こんばんは' },
  { id: 'k4', mode: 'vocab', japanese: 'さようなら', reading: 'さようなら', romaji: 'sayounara', english: 'Goodbye', audioText: 'さようなら' },
  { id: 'k5', mode: 'vocab', japanese: 'ありがとうございます', reading: 'ありがとうございます', romaji: 'arigatou gozaimasu', english: 'Thank you very much', audioText: 'ありがとうございます' },
  { id: 'k6', mode: 'vocab', japanese: 'すみません', reading: 'すみません', romaji: 'sumimasen', english: 'Excuse me / I am sorry', audioText: 'すみません' },
  { id: 'k7', mode: 'vocab', japanese: 'お願いします', reading: 'おねがいします', romaji: 'onegaishimasu', english: 'Please (requesting)', audioText: 'おねがいします' },
  { id: 'k8', mode: 'vocab', japanese: 'いただきます', reading: 'いただきます', romaji: 'itadakimasu', english: 'Humbly receiving meal', audioText: 'いただきます' },
  { id: 'k9', mode: 'vocab', japanese: 'ごちそうさま', reading: 'ごちそうさま', romaji: 'gochisousama', english: 'Thank you for the feast', audioText: 'ごちそうさま' },
  { id: 'k10', mode: 'vocab', japanese: '先生', reading: 'せんせい', romaji: 'sensei', english: 'Teacher / Instructor', audioText: 'せんせい' },
  { id: 'k11', mode: 'vocab', japanese: '友達', reading: 'ともだち', romaji: 'tomodachi', english: 'Friend / Companion', audioText: 'ともだち' },
  { id: 'k12', mode: 'vocab', japanese: '日本', reading: 'にほん', romaji: 'nihon', english: 'Japan', audioText: 'にほん' },
  { id: 'k13', mode: 'vocab', japanese: '桜', reading: 'さくら', romaji: 'sakura', english: 'Cherry blossom', audioText: 'さくら' },
  { id: 'k14', mode: 'vocab', japanese: '富士山', reading: 'ふじさん', romaji: 'fujisan', english: 'Mount Fuji', audioText: 'ふじさん' },
  { id: 'k15', mode: 'vocab', japanese: '猫', reading: 'ねこ', romaji: 'neko', english: 'Cat', audioText: 'ねこ' },
  { id: 'k16', mode: 'vocab', japanese: '犬', reading: 'いぬ', romaji: 'inu', english: 'Dog', audioText: 'いぬ' },
  { id: 'k17', mode: 'vocab', japanese: '本', reading: 'ほん', romaji: 'hon', english: 'Book', audioText: 'ほん' },
  { id: 'k18', mode: 'vocab', japanese: '水', reading: 'みず', romaji: 'mizu', english: 'Water (cold / fresh)', audioText: 'みず' },
  { id: 'k19', mode: 'vocab', japanese: 'お茶', reading: 'おちゃ', romaji: 'ocha', english: 'Japanese Green Tea', audioText: 'おちゃ' },
  { id: 'k20', mode: 'vocab', japanese: '時間', reading: 'じかん', romaji: 'jikan', english: 'Time / Hour', audioText: 'じかん' },
];

/**
 * Authentic Ogura Hyakunin Isshu (小倉百人一首) classic Karuta poems.
 * Reader recites Kami-no-ku (5-7-5). Mat card has Shimo-no-ku (7-7).
 */
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
  {
    id: 'p1',
    mode: 'poem',
    poemNumber: 1,
    poet: 'Emperor Tenji',
    poetJapanese: '天智天皇',
    kamiNoKu: '秋の田の かりほの庵の 苫をあらみ',
    shimoNoKu: 'わが衣手は 露にぬれつつ',
    kimariji: 'あきの',
    japanese: 'わが衣手は\n露にぬれつつ',
    reading: 'わがころもでは つゆにぬれつつ',
    romaji: 'waga koromode wa tsuyu ni nuretsutsu',
    english: 'Coarse is the matting of the temporary hut in autumn fields; my sleeves are drenched with dew.',
    audioText: 'あきのたの かりほのいほの とまをあらみ',
  },
  {
    id: 'p2',
    mode: 'poem',
    poemNumber: 2,
    poet: 'Empress Jito',
    poetJapanese: '持統天皇',
    kamiNoKu: '春すぎて 夏来にけらし 白妙の',
    shimoNoKu: '衣ほすてふ 天の香具山',
    kimariji: 'はるす',
    japanese: '衣ほすてふ\n天の香具山',
    reading: 'ころもほすちょう あめのかぐやま',
    romaji: 'koromo hosu chou ame no kaguyama',
    english: 'Spring has passed and summer has arrived, they say; pure white robes are drying on heavenly Mount Kagu.',
    audioText: 'はるすぎて なつきにけらし しろたへの',
  },
  {
    id: 'p57',
    mode: 'poem',
    poemNumber: 57,
    poet: 'Murasaki Shikibu',
    poetJapanese: '紫式部',
    kamiNoKu: 'めぐりあひて 見しやそれとも わかぬまに',
    shimoNoKu: '雲がくれにし 夜半の月かな',
    kimariji: 'め',
    japanese: '雲がくれにし\n夜半の月かな',
    reading: 'くもがくれにし よわのつきかな',
    romaji: 'kumo gakure nishi yowa no tsuki kana',
    english: 'We met by chance, but before I could know if it was truly you, you hid like midnight moon behind clouds.',
    audioText: 'めぐりあひて みしやそれとも わかぬまに',
  },
  {
    id: 'p77',
    mode: 'poem',
    poemNumber: 77,
    poet: 'Emperor Sutoku',
    poetJapanese: '崇徳院',
    kamiNoKu: '瀬をはやみ 岩にせかるる 滝川の',
    shimoNoKu: 'われても末に あはむとぞ思ふ',
    kimariji: 'せ',
    japanese: 'われても末に\nあはむとぞ思ふ',
    reading: 'われてもすえに あわんとぞおもう',
    romaji: 'warete mo sue ni awamu to zo omou',
    english: 'Swift rapids divided by a rock; though divided now, like rushing waters we will reunite in the end.',
    audioText: 'せをはやみ いはにせかるる たきがはの',
  },
  {
    id: 'p89',
    mode: 'poem',
    poemNumber: 89,
    poet: 'Princess Shokushi',
    poetJapanese: '式子内親王',
    kamiNoKu: '玉の緒よ たえなばたえね ながらへば',
    shimoNoKu: '忍ぶることの 弱りもぞする',
    kimariji: 'たま',
    japanese: '忍ぶることの\n弱りもぞする',
    reading: 'しのぶることの よわりもぞする',
    romaji: 'shinoburu koto no yowari mo zo suru',
    english: 'O string of life, break if you must; for if I live on, my strength to hide my secret love will surely fail.',
    audioText: 'たまのをよ たへなばたへね ながらへば',
  },
  {
    id: 'p24',
    mode: 'poem',
    poemNumber: 24,
    poet: 'Sugawara no Michizane',
    poetJapanese: '菅原道真',
    kamiNoKu: 'このたびは ぬさもとりあへず 手向山',
    shimoNoKu: '紅葉の錦 神のまにまに',
    kimariji: 'この',
    japanese: '紅葉の錦\n神のまにまに',
    reading: 'もみじのにしき かみのまにまに',
    romaji: 'momiji no nishiki kami no manimani',
    english: 'On this journey I could bring no sacred offerings; instead I present this brocade of scarlet maple leaves.',
    audioText: 'このたびは ぬさもとりあへず たむけやま',
  },
  {
    id: 'p5',
    mode: 'poem',
    poemNumber: 5,
    poet: 'Sarumaru Dayu',
    poetJapanese: '猿丸大夫',
    kamiNoKu: '奥山に 紅葉踏みわけ 鳴く鹿の',
    shimoNoKu: '声きく時ぞ 秋は悲しき',
    kimariji: 'おく',
    japanese: '声きく時ぞ\n秋は悲しき',
    reading: 'こえきくときぞ あきはかなしき',
    romaji: 'koe kiku toki zo aki wa kanashiki',
    english: 'Deep in mountain forests, hearing the stag call while stepping through fallen maple leaves; how mournful autumn is.',
    audioText: 'おくやまに もみぢふみわけ なくしかの',
  },
  {
    id: 'p9',
    mode: 'poem',
    poemNumber: 9,
    poet: 'Ono no Komachi',
    poetJapanese: '小野小町',
    kamiNoKu: '花の色は うつりにけりな いたづらに',
    shimoNoKu: 'わが身世にふる ながめせしまに',
    kimariji: 'はなの',
    japanese: 'わが身世にふる\nながめせしまに',
    reading: 'わがみよにふる ながめせしまに',
    romaji: 'waga mi yo ni furu nagame seshi ma ni',
    english: 'The cherry blossoms have faded in vain, while in melancholy reverie I watched the long rains fall.',
    audioText: 'はなのいろは うつりにけりな いたづらに',
  },
  {
    id: 'p13',
    mode: 'poem',
    poemNumber: 13,
    poet: 'Emperor Yozei',
    poetJapanese: '陽成院',
    kamiNoKu: '筑波嶺の みねより落つる みなの川',
    shimoNoKu: '恋ぞつもりて 淵となりぬる',
    kimariji: 'つく',
    japanese: '恋ぞつもりて\n淵となりぬる',
    reading: 'こいぞつもりて ふちとなりぬる',
    romaji: 'koi zo tsumorite fuchi to narinuru',
    english: 'Like the Minano river falling from Mount Tsukuba, my secret love has gathered into a deep, surging pool.',
    audioText: 'つくばねの みねよりおつる みなのがは',
  },
  {
    id: 'p12',
    mode: 'poem',
    poemNumber: 12,
    poet: 'Sojo Henjo',
    poetJapanese: '僧正遍昭',
    kamiNoKu: '天つ風 雲の通ひ路 吹きとぢよ',
    shimoNoKu: 'をとめの姿 しばしとどめむ',
    kimariji: 'あまつ',
    japanese: 'をとめの姿\nしばしとどめむ',
    reading: 'おとめのすがた しばしとどめん',
    romaji: 'otome no sugata shibashi todomemu',
    english: 'Winds of heaven, blow shut the path through the clouds, that the celestial dancers may linger on earth a while longer.',
    audioText: 'あまつかぜ くものかよひぢ ふきとぢよ',
  },
  {
    id: 'p18',
    mode: 'poem',
    poemNumber: 18,
    poet: 'Fujiwara no Toshiyuki',
    poetJapanese: '藤原敏行朝臣',
    kamiNoKu: '住の江の 岸による波 よるさへや',
    shimoNoKu: '夢の通ひ路 人目よくらむ',
    kimariji: 'す',
    japanese: '夢の通ひ路\n人目よくらむ',
    reading: 'ゆめのかよいじ ひとめよくらん',
    romaji: 'yume no kayoiji hitome yokuramu',
    english: 'Like the constant waves kissing Suminoe coast, even at night along our dream path, must we avoid the eyes of others?',
    audioText: 'すみのえの きしによるなみ よるさへや',
  },
];

/**
 * Generates a match dataset with a set of tatami mat cards and a randomized reading queue.
 */
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

/**
 * Calculates slap score based on reaction time (in milliseconds).
 */
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
