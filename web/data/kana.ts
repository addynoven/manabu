export interface KanaItem {
  kana: string;
  romaji: string;
  script: 'hiragana' | 'katakana';
  category: 'main' | 'dakuten' | 'combo';
}

export const HIRAGANA_DATA: KanaItem[] = [
  // Vowels
  { kana: 'あ', romaji: 'a', script: 'hiragana', category: 'main' },
  { kana: 'い', romaji: 'i', script: 'hiragana', category: 'main' },
  { kana: 'う', romaji: 'u', script: 'hiragana', category: 'main' },
  { kana: 'え', romaji: 'e', script: 'hiragana', category: 'main' },
  { kana: 'お', romaji: 'o', script: 'hiragana', category: 'main' },

  // K-row
  { kana: 'か', romaji: 'ka', script: 'hiragana', category: 'main' },
  { kana: 'き', romaji: 'ki', script: 'hiragana', category: 'main' },
  { kana: 'く', romaji: 'ku', script: 'hiragana', category: 'main' },
  { kana: 'け', romaji: 'ke', script: 'hiragana', category: 'main' },
  { kana: 'こ', romaji: 'ko', script: 'hiragana', category: 'main' },

  // S-row
  { kana: 'さ', romaji: 'sa', script: 'hiragana', category: 'main' },
  { kana: 'し', romaji: 'shi', script: 'hiragana', category: 'main' },
  { kana: 'す', romaji: 'su', script: 'hiragana', category: 'main' },
  { kana: 'せ', romaji: 'se', script: 'hiragana', category: 'main' },
  { kana: 'そ', romaji: 'so', script: 'hiragana', category: 'main' },

  // T-row
  { kana: 'た', romaji: 'ta', script: 'hiragana', category: 'main' },
  { kana: 'ち', romaji: 'chi', script: 'hiragana', category: 'main' },
  { kana: 'つ', romaji: 'tsu', script: 'hiragana', category: 'main' },
  { kana: 'て', romaji: 'te', script: 'hiragana', category: 'main' },
  { kana: 'と', romaji: 'to', script: 'hiragana', category: 'main' },

  // N-row
  { kana: 'な', romaji: 'na', script: 'hiragana', category: 'main' },
  { kana: 'に', romaji: 'ni', script: 'hiragana', category: 'main' },
  { kana: 'ぬ', romaji: 'nu', script: 'hiragana', category: 'main' },
  { kana: 'ね', romaji: 'ne', script: 'hiragana', category: 'main' },
  { kana: 'の', romaji: 'no', script: 'hiragana', category: 'main' },

  // H-row
  { kana: 'は', romaji: 'ha', script: 'hiragana', category: 'main' },
  { kana: 'ひ', romaji: 'hi', script: 'hiragana', category: 'main' },
  { kana: 'ふ', romaji: 'fu', script: 'hiragana', category: 'main' },
  { kana: 'へ', romaji: 'he', script: 'hiragana', category: 'main' },
  { kana: 'ほ', romaji: 'ho', script: 'hiragana', category: 'main' },

  // M-row
  { kana: 'ま', romaji: 'ma', script: 'hiragana', category: 'main' },
  { kana: 'み', romaji: 'mi', script: 'hiragana', category: 'main' },
  { kana: 'む', romaji: 'mu', script: 'hiragana', category: 'main' },
  { kana: 'め', romaji: 'me', script: 'hiragana', category: 'main' },
  { kana: 'も', romaji: 'mo', script: 'hiragana', category: 'main' },

  // Y-row
  { kana: 'や', romaji: 'ya', script: 'hiragana', category: 'main' },
  { kana: 'ゆ', romaji: 'yu', script: 'hiragana', category: 'main' },
  { kana: 'よ', romaji: 'yo', script: 'hiragana', category: 'main' },

  // R-row
  { kana: 'ら', romaji: 'ra', script: 'hiragana', category: 'main' },
  { kana: 'り', romaji: 'ri', script: 'hiragana', category: 'main' },
  { kana: 'る', romaji: 'ru', script: 'hiragana', category: 'main' },
  { kana: 'れ', romaji: 're', script: 'hiragana', category: 'main' },
  { kana: 'ろ', romaji: 'ro', script: 'hiragana', category: 'main' },

  // W + N
  { kana: 'わ', romaji: 'wa', script: 'hiragana', category: 'main' },
  { kana: 'を', romaji: 'wo', script: 'hiragana', category: 'main' },
  { kana: 'ん', romaji: 'n', script: 'hiragana', category: 'main' },

  // Dakuten (G, Z, D, B, P)
  { kana: 'が', romaji: 'ga', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぎ', romaji: 'gi', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぐ', romaji: 'gu', script: 'hiragana', category: 'dakuten' },
  { kana: 'げ', romaji: 'ge', script: 'hiragana', category: 'dakuten' },
  { kana: 'ご', romaji: 'go', script: 'hiragana', category: 'dakuten' },
  { kana: 'ざ', romaji: 'za', script: 'hiragana', category: 'dakuten' },
  { kana: 'じ', romaji: 'ji', script: 'hiragana', category: 'dakuten' },
  { kana: 'ず', romaji: 'zu', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぜ', romaji: 'ze', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぞ', romaji: 'zo', script: 'hiragana', category: 'dakuten' },
  { kana: 'だ', romaji: 'da', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぢ', romaji: 'ji', script: 'hiragana', category: 'dakuten' },
  { kana: 'づ', romaji: 'zu', script: 'hiragana', category: 'dakuten' },
  { kana: 'で', romaji: 'de', script: 'hiragana', category: 'dakuten' },
  { kana: 'ど', romaji: 'do', script: 'hiragana', category: 'dakuten' },
  { kana: 'ば', romaji: 'ba', script: 'hiragana', category: 'dakuten' },
  { kana: 'び', romaji: 'bi', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぶ', romaji: 'bu', script: 'hiragana', category: 'dakuten' },
  { kana: 'べ', romaji: 'be', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぼ', romaji: 'bo', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぱ', romaji: 'pa', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぴ', romaji: 'pi', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぷ', romaji: 'pu', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぺ', romaji: 'pe', script: 'hiragana', category: 'dakuten' },
  { kana: 'ぽ', romaji: 'po', script: 'hiragana', category: 'dakuten' },

  // Yōon Combos (36)
  { kana: 'きゃ', romaji: 'kya', script: 'hiragana', category: 'combo' },
  { kana: 'きゅ', romaji: 'kyu', script: 'hiragana', category: 'combo' },
  { kana: 'きょ', romaji: 'kyo', script: 'hiragana', category: 'combo' },
  { kana: 'しゃ', romaji: 'sha', script: 'hiragana', category: 'combo' },
  { kana: 'しゅ', romaji: 'shu', script: 'hiragana', category: 'combo' },
  { kana: 'しょ', romaji: 'sho', script: 'hiragana', category: 'combo' },
  { kana: 'ちゃ', romaji: 'cha', script: 'hiragana', category: 'combo' },
  { kana: 'ちゅ', romaji: 'chu', script: 'hiragana', category: 'combo' },
  { kana: 'ちょ', romaji: 'cho', script: 'hiragana', category: 'combo' },
  { kana: 'にゃ', romaji: 'nya', script: 'hiragana', category: 'combo' },
  { kana: 'にゅ', romaji: 'nyu', script: 'hiragana', category: 'combo' },
  { kana: 'にょ', romaji: 'nyo', script: 'hiragana', category: 'combo' },
  { kana: 'ひゃ', romaji: 'hya', script: 'hiragana', category: 'combo' },
  { kana: 'ひゅ', romaji: 'hyu', script: 'hiragana', category: 'combo' },
  { kana: 'ひょ', romaji: 'hyo', script: 'hiragana', category: 'combo' },
  { kana: 'みゃ', romaji: 'mya', script: 'hiragana', category: 'combo' },
  { kana: 'みゅ', romaji: 'myu', script: 'hiragana', category: 'combo' },
  { kana: 'みょ', romaji: 'myo', script: 'hiragana', category: 'combo' },
  { kana: 'りゃ', romaji: 'rya', script: 'hiragana', category: 'combo' },
  { kana: 'りゅ', romaji: 'ryu', script: 'hiragana', category: 'combo' },
  { kana: 'りょ', romaji: 'ryo', script: 'hiragana', category: 'combo' },
  { kana: 'ぎゃ', romaji: 'gya', script: 'hiragana', category: 'combo' },
  { kana: 'ぎゅ', romaji: 'gyu', script: 'hiragana', category: 'combo' },
  { kana: 'ぎょ', romaji: 'gyo', script: 'hiragana', category: 'combo' },
  { kana: 'じゃ', romaji: 'ja', script: 'hiragana', category: 'combo' },
  { kana: 'じゅ', romaji: 'ju', script: 'hiragana', category: 'combo' },
  { kana: 'じょ', romaji: 'jo', script: 'hiragana', category: 'combo' },
  { kana: 'びゃ', romaji: 'bya', script: 'hiragana', category: 'combo' },
  { kana: 'びゅ', romaji: 'byu', script: 'hiragana', category: 'combo' },
  { kana: 'びょ', romaji: 'byo', script: 'hiragana', category: 'combo' },
  { kana: 'ぴゃ', romaji: 'pya', script: 'hiragana', category: 'combo' },
  { kana: 'ぴゅ', romaji: 'pyu', script: 'hiragana', category: 'combo' },
  { kana: 'ぴょ', romaji: 'pyo', script: 'hiragana', category: 'combo' },
];

export const KATAKANA_DATA: KanaItem[] = [
  // Vowels
  { kana: 'ア', romaji: 'a', script: 'katakana', category: 'main' },
  { kana: 'イ', romaji: 'i', script: 'katakana', category: 'main' },
  { kana: 'ウ', romaji: 'u', script: 'katakana', category: 'main' },
  { kana: 'エ', romaji: 'e', script: 'katakana', category: 'main' },
  { kana: 'オ', romaji: 'o', script: 'katakana', category: 'main' },

  // K-row
  { kana: 'カ', romaji: 'ka', script: 'katakana', category: 'main' },
  { kana: 'キ', romaji: 'ki', script: 'katakana', category: 'main' },
  { kana: 'ク', romaji: 'ku', script: 'katakana', category: 'main' },
  { kana: 'ケ', romaji: 'ke', script: 'katakana', category: 'main' },
  { kana: 'コ', romaji: 'ko', script: 'katakana', category: 'main' },

  // S-row
  { kana: 'サ', romaji: 'sa', script: 'katakana', category: 'main' },
  { kana: 'シ', romaji: 'shi', script: 'katakana', category: 'main' },
  { kana: 'ス', romaji: 'su', script: 'katakana', category: 'main' },
  { kana: 'セ', romaji: 'se', script: 'katakana', category: 'main' },
  { kana: 'ソ', romaji: 'so', script: 'katakana', category: 'main' },

  // T-row
  { kana: 'タ', romaji: 'ta', script: 'katakana', category: 'main' },
  { kana: 'チ', romaji: 'chi', script: 'katakana', category: 'main' },
  { kana: 'ツ', romaji: 'tsu', script: 'katakana', category: 'main' },
  { kana: 'テ', romaji: 'te', script: 'katakana', category: 'main' },
  { kana: 'ト', romaji: 'to', script: 'katakana', category: 'main' },

  // N-row
  { kana: 'ナ', romaji: 'na', script: 'katakana', category: 'main' },
  { kana: 'ニ', romaji: 'ni', script: 'katakana', category: 'main' },
  { kana: 'ヌ', romaji: 'nu', script: 'katakana', category: 'main' },
  { kana: 'ネ', romaji: 'ne', script: 'katakana', category: 'main' },
  { kana: 'ノ', romaji: 'no', script: 'katakana', category: 'main' },

  // H-row
  { kana: 'ハ', romaji: 'ha', script: 'katakana', category: 'main' },
  { kana: 'ヒ', romaji: 'hi', script: 'katakana', category: 'main' },
  { kana: 'フ', romaji: 'fu', script: 'katakana', category: 'main' },
  { kana: 'ヘ', romaji: 'he', script: 'katakana', category: 'main' },
  { kana: 'ホ', romaji: 'ho', script: 'katakana', category: 'main' },

  // M-row
  { kana: 'マ', romaji: 'ma', script: 'katakana', category: 'main' },
  { kana: 'ミ', romaji: 'mi', script: 'katakana', category: 'main' },
  { kana: 'ム', romaji: 'mu', script: 'katakana', category: 'main' },
  { kana: 'メ', romaji: 'me', script: 'katakana', category: 'main' },
  { kana: 'モ', romaji: 'mo', script: 'katakana', category: 'main' },

  // Y-row
  { kana: 'ヤ', romaji: 'ya', script: 'katakana', category: 'main' },
  { kana: 'ユ', romaji: 'yu', script: 'katakana', category: 'main' },
  { kana: 'ヨ', romaji: 'yo', script: 'katakana', category: 'main' },

  // R-row
  { kana: 'ラ', romaji: 'ra', script: 'katakana', category: 'main' },
  { kana: 'リ', romaji: 'ri', script: 'katakana', category: 'main' },
  { kana: 'ル', romaji: 'ru', script: 'katakana', category: 'main' },
  { kana: 'レ', romaji: 're', script: 'katakana', category: 'main' },
  { kana: 'ロ', romaji: 'ro', script: 'katakana', category: 'main' },

  // W + N
  { kana: 'ワ', romaji: 'wa', script: 'katakana', category: 'main' },
  { kana: 'ヲ', romaji: 'wo', script: 'katakana', category: 'main' },
  { kana: 'ン', romaji: 'n', script: 'katakana', category: 'main' },

  // Dakuten
  { kana: 'ガ', romaji: 'ga', script: 'katakana', category: 'dakuten' },
  { kana: 'ギ', romaji: 'gi', script: 'katakana', category: 'dakuten' },
  { kana: 'グ', romaji: 'gu', script: 'katakana', category: 'dakuten' },
  { kana: 'ゲ', romaji: 'ge', script: 'katakana', category: 'dakuten' },
  { kana: 'ゴ', romaji: 'go', script: 'katakana', category: 'dakuten' },
  { kana: 'ザ', romaji: 'za', script: 'katakana', category: 'dakuten' },
  { kana: 'ジ', romaji: 'ji', script: 'katakana', category: 'dakuten' },
  { kana: 'ズ', romaji: 'zu', script: 'katakana', category: 'dakuten' },
  { kana: 'ゼ', romaji: 'ze', script: 'katakana', category: 'dakuten' },
  { kana: 'ゾ', romaji: 'zo', script: 'katakana', category: 'dakuten' },
  { kana: 'ダ', romaji: 'da', script: 'katakana', category: 'dakuten' },
  { kana: 'ヂ', romaji: 'ji', script: 'katakana', category: 'dakuten' },
  { kana: 'ヅ', romaji: 'zu', script: 'katakana', category: 'dakuten' },
  { kana: 'デ', romaji: 'de', script: 'katakana', category: 'dakuten' },
  { kana: 'ド', romaji: 'do', script: 'katakana', category: 'dakuten' },
  { kana: 'バ', romaji: 'ba', script: 'katakana', category: 'dakuten' },
  { kana: 'ビ', romaji: 'bi', script: 'katakana', category: 'dakuten' },
  { kana: 'ブ', romaji: 'bu', script: 'katakana', category: 'dakuten' },
  { kana: 'ベ', romaji: 'be', script: 'katakana', category: 'dakuten' },
  { kana: 'ボ', romaji: 'bo', script: 'katakana', category: 'dakuten' },
  { kana: 'パ', romaji: 'pa', script: 'katakana', category: 'dakuten' },
  { kana: 'ピ', romaji: 'pi', script: 'katakana', category: 'dakuten' },
  { kana: 'プ', romaji: 'pu', script: 'katakana', category: 'dakuten' },
  { kana: 'ペ', romaji: 'pe', script: 'katakana', category: 'dakuten' },
  { kana: 'ポ', romaji: 'po', script: 'katakana', category: 'dakuten' },

  // Yōon Combos (36)
  { kana: 'キャ', romaji: 'kya', script: 'katakana', category: 'combo' },
  { kana: 'キュ', romaji: 'kyu', script: 'katakana', category: 'combo' },
  { kana: 'キョ', romaji: 'kyo', script: 'katakana', category: 'combo' },
  { kana: 'シャ', romaji: 'sha', script: 'katakana', category: 'combo' },
  { kana: 'シュ', romaji: 'shu', script: 'katakana', category: 'combo' },
  { kana: 'ショ', romaji: 'sho', script: 'katakana', category: 'combo' },
  { kana: 'チャ', romaji: 'cha', script: 'katakana', category: 'combo' },
  { kana: 'チュ', romaji: 'chu', script: 'katakana', category: 'combo' },
  { kana: 'チョ', romaji: 'cho', script: 'katakana', category: 'combo' },
  { kana: 'ニャ', romaji: 'nya', script: 'katakana', category: 'combo' },
  { kana: 'ニュ', romaji: 'nyu', script: 'katakana', category: 'combo' },
  { kana: 'ニョ', romaji: 'nyo', script: 'katakana', category: 'combo' },
  { kana: 'ヒャ', romaji: 'hya', script: 'katakana', category: 'combo' },
  { kana: 'ヒュ', romaji: 'hyu', script: 'katakana', category: 'combo' },
  { kana: 'ヒョ', romaji: 'hyo', script: 'katakana', category: 'combo' },
  { kana: 'ミャ', romaji: 'mya', script: 'katakana', category: 'combo' },
  { kana: 'ミュ', romaji: 'myu', script: 'katakana', category: 'combo' },
  { kana: 'ミョ', romaji: 'myo', script: 'katakana', category: 'combo' },
  { kana: 'リャ', romaji: 'rya', script: 'katakana', category: 'combo' },
  { kana: 'リュ', romaji: 'ryu', script: 'katakana', category: 'combo' },
  { kana: 'リョ', romaji: 'ryo', script: 'katakana', category: 'combo' },
  { kana: 'ギャ', romaji: 'gya', script: 'katakana', category: 'combo' },
  { kana: 'ギュ', romaji: 'gyu', script: 'katakana', category: 'combo' },
  { kana: 'ギョ', romaji: 'gyo', script: 'katakana', category: 'combo' },
  { kana: 'ジャ', romaji: 'ja', script: 'katakana', category: 'combo' },
  { kana: 'ジュ', romaji: 'ju', script: 'katakana', category: 'combo' },
  { kana: 'ジョ', romaji: 'jo', script: 'katakana', category: 'combo' },
  { kana: 'ビャ', romaji: 'bya', script: 'katakana', category: 'combo' },
  { kana: 'ビュ', romaji: 'byu', script: 'katakana', category: 'combo' },
  { kana: 'ビョ', romaji: 'byo', script: 'katakana', category: 'combo' },
  { kana: 'ピャ', romaji: 'pya', script: 'katakana', category: 'combo' },
  { kana: 'ピュ', romaji: 'pyu', script: 'katakana', category: 'combo' },
  { kana: 'ピョ', romaji: 'pyo', script: 'katakana', category: 'combo' },
];

export const KANA_STROKE_COUNTS: Record<string, number> = {
  // Hiragana Main
  あ: 3, い: 2, う: 2, え: 2, お: 3,
  か: 3, き: 4, く: 1, け: 3, こ: 2,
  さ: 3, し: 1, す: 2, せ: 3, そ: 1,
  た: 4, ち: 2, つ: 1, て: 1, と: 2,
  な: 4, に: 3, ぬ: 2, ね: 2, の: 1,
  は: 3, ひ: 1, ふ: 4, へ: 1, ほ: 4,
  ま: 3, み: 2, む: 3, め: 2, も: 3,
  や: 3, ゆ: 2, よ: 2,
  ら: 2, り: 2, る: 1, れ: 2, ろ: 1,
  わ: 2, を: 3, ん: 1,
  // Hiragana Dakuten
  が: 5, ぎ: 6, ぐ: 3, げ: 5, ご: 4,
  ざ: 5, じ: 3, ず: 4, ぜ: 5, ぞ: 3,
  だ: 6, ぢ: 4, づ: 3, で: 3, ど: 4,
  ば: 5, び: 3, ぶ: 6, べ: 3, ぼ: 6,
  ぱ: 4, ぴ: 2, ぷ: 5, ぺ: 2, ぽ: 5,
  // Hiragana Yoon
  きゃ: 6, きゅ: 6, きょ: 6,
  しゃ: 3, しゅ: 3, しょ: 3,
  ちゃ: 4, ちゅ: 4, ちょ: 4,
  にゃ: 5, にゅ: 5, にょ: 5,
  ひゃ: 3, ひゅ: 3, ひょ: 3,
  みゃ: 4, みゅ: 4, みょ: 4,
  りゃ: 4, りゅ: 4, りょ: 4,
  ぎゃ: 8, ぎゅ: 8, ぎょ: 8,
  じゃ: 5, じゅ: 5, じょ: 5,
  びゃ: 5, びゅ: 5, びょ: 5,
  ぴゃ: 4, ぴゅ: 4, ぴょ: 4,

  // Katakana Main
  ア: 2, イ: 2, ウ: 3, エ: 3, オ: 3,
  カ: 2, キ: 3, ク: 2, ケ: 3, コ: 2,
  サ: 3, シ: 3, ス: 2, セ: 2, ソ: 2,
  タ: 3, チ: 3, ツ: 3, テ: 3, ト: 2,
  ナ: 2, ニ: 2, ヌ: 2, ネ: 4, ノ: 1,
  ハ: 2, ヒ: 2, フ: 1, ヘ: 1, ホ: 4,
  マ: 2, ミ: 3, ム: 2, メ: 2, モ: 3,
  ヤ: 2, ユ: 2, ヨ: 3,
  ラ: 2, リ: 2, ル: 2, レ: 1, ロ: 3,
  ワ: 2, ヲ: 3, ン: 2,
  // Katakana Dakuten
  ガ: 4, ギ: 5, グ: 4, ゲ: 5, ゴ: 4,
  ザ: 5, ジ: 5, ズ: 4, ゼ: 4, ゾ: 4,
  ダ: 5, ヂ: 5, ヅ: 5, デ: 5, ド: 4,
  バ: 4, ビ: 4, ブ: 3, ベ: 3, ボ: 6,
  パ: 3, ピ: 3, プ: 2, ペ: 2, ポ: 5,
  // Katakana Yoon
  キャ: 5, キュ: 5, キョ: 6,
  シャ: 5, シュ: 5, ショ: 6,
  チャ: 5, チュ: 5, チョ: 6,
  ニャ: 4, ニュ: 4, ニョ: 5,
  ヒャ: 4, ヒュ: 4, ヒョ: 5,
  ミャ: 5, ミュ: 5, ミョ: 6,
  リャ: 4, リュ: 4, リョ: 5,
  ギャ: 7, ギュ: 7, ギョ: 8,
  ジャ: 7, ジュ: 7, ジョ: 8,
  ビャ: 6, ビュ: 6, ビョ: 7,
  ピャ: 5, ピュ: 5, ピョ: 6,
};

export function getKanaStrokeCount(kana: string): number {
  return KANA_STROKE_COUNTS[kana] || 2;
}

export function speakJapanese(text: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}
