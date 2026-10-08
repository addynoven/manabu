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
];

export function speakJapanese(text: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}
