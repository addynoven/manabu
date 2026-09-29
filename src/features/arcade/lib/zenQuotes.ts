import type { ZenQuote } from '../models/arcade.model';

export const ZEN_QUOTES: ZenQuote[] = [
  {
    kanji: '和',
    reading: 'わ',
    romaji: 'wa',
    meaning: 'Harmony & Peace',
    reflection: 'Breathe in tranquility. Flow gently with the current of the moment.',
  },
  {
    kanji: '心',
    reading: 'こころ',
    romaji: 'kokoro',
    meaning: 'Heart & Mind',
    reflection: 'True learning begins in stillness of the mind and warmth of the spirit.',
  },
  {
    kanji: '禅',
    reading: 'ぜん',
    romaji: 'zen',
    meaning: 'Silent Contemplation',
    reflection: 'Set aside expectations. Be entirely present in this single breath.',
  },
  {
    kanji: '光',
    reading: 'ひかり',
    romaji: 'hikari',
    meaning: 'Radiant Light',
    reflection: 'Every character learned illuminates another corner of understanding.',
  },
  {
    kanji: '風',
    reading: 'かぜ',
    romaji: 'kaze',
    meaning: 'Gentle Wind',
    reflection: 'Let your thoughts drift past like leaves carried softly on the breeze.',
  },
  {
    kanji: '道',
    reading: 'みち',
    romaji: 'michi',
    meaning: 'The Way / Path',
    reflection: 'A thousand-mile journey unfolds one mindful step at a time.',
  },
  {
    kanji: '桜',
    reading: 'さくら',
    romaji: 'sakura',
    meaning: 'Cherry Blossom',
    reflection: 'Celebrate the fleeting beauty of each fleeting season and moment.',
  },
  {
    kanji: '空',
    reading: 'そら',
    romaji: 'sora',
    meaning: 'Sky & Emptiness',
    reflection: 'Open your awareness wide and clear as the vast mountain sky.',
  },
  {
    kanji: '静',
    reading: 'しずか',
    romaji: 'shizuka',
    meaning: 'Quiet Serenity',
    reflection: 'In quiet depths, true clarity settles like undisturbed water.',
  },
  {
    kanji: '夢',
    reading: 'ゆめ',
    romaji: 'yume',
    meaning: 'Vision & Dream',
    reflection: 'Nurture your aspiration patiently; it blooms in its own time.',
  },
  {
    kanji: '水',
    reading: 'みず',
    romaji: 'mizu',
    meaning: 'Pure Water',
    reflection: 'Water yields to all things, yet carves valleys through stone.',
  },
  {
    kanji: '月',
    reading: 'つき',
    romaji: 'tsuki',
    meaning: 'Guiding Moon',
    reflection: 'Even through dark night, the moon shines without needing to speak.',
  },
  {
    kanji: '山',
    reading: 'やま',
    romaji: 'yama',
    meaning: 'Steadfast Mountain',
    reflection: 'Stand firm in your resolve, unshakeable amid changing winds.',
  },
  {
    kanji: '雲',
    reading: 'くも',
    romaji: 'kumo',
    meaning: 'Drifting Cloud',
    reflection: 'Clouds arise and dissolve without clinging to the sky.',
  },
  {
    kanji: '花',
    reading: 'はな',
    romaji: 'hana',
    meaning: 'Blossoming Flower',
    reflection: 'Do not hurry; the flower does not compete with the blossom beside it.',
  },
  {
    kanji: '寂',
    reading: 'さび',
    romaji: 'sabi',
    meaning: 'Rustic Simplicity',
    reflection: 'Find solace in unadorned truth and modest simplicity.',
  },
  {
    kanji: '木',
    reading: 'き',
    romaji: 'ki',
    meaning: 'Rooted Tree',
    reflection: 'Deep roots withstand the fiercest gales. Anchor your foundation.',
  },
  {
    kanji: '星',
    reading: 'ほし',
    romaji: 'hoshi',
    meaning: 'Distant Star',
    reflection: 'Even the smallest light can guide a traveler through the dark.',
  },
  {
    kanji: '森',
    reading: 'もり',
    romaji: 'mori',
    meaning: 'Ancient Forest',
    reflection: 'Breathe in the ancient calm of the deep cedar canopy.',
  },
  {
    kanji: '響',
    reading: 'ひびき',
    romaji: 'hibiki',
    meaning: 'Harmonic Resonance',
    reflection: 'Every sound and silence leaves a lasting echo in the soul.',
  },
];

export function getRandomZenQuote(): ZenQuote {
  const index = Math.floor(Math.random() * ZEN_QUOTES.length);
  return ZEN_QUOTES[index];
}
