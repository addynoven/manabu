import { RAW_KANA_DATA } from '../../kana/data/kana.data';

/**
 * Static dictionary mapping Hiragana & Katakana to standard Romaji pronunciation.
 */
const KANA_ROMAJI_DICTIONARY: Record<string, string> = {
  // Punctuation & specials
  'ー': '—',
  '、': ',',
  '。': '.',
  '！': '!',
  '？': '?',
  'っ': 'tsu',
  'ッ': 'tsu',
  'ぁ': 'a',
  'ぃ': 'i',
  'ぅ': 'u',
  'ぇ': 'e',
  'ぉ': 'o',
  'ゃ': 'ya',
  'ゅ': 'yu',
  'ょ': 'yo',
  'ャ': 'ya',
  'ュ': 'yu',
  'ョ': 'yo',
};

// Populate from RAW_KANA_DATA
for (const group of RAW_KANA_DATA) {
  for (let i = 0; i < group.kana.length; i++) {
    const k = group.kana[i];
    const r = group.romaji[i];
    if (k && r) {
      KANA_ROMAJI_DICTIONARY[k] = r;
    }
  }
}

/**
 * Returns Romaji reading for a single kana character or short syllable.
 * Falls back to the character itself if no mapping is found.
 */
export function getKanaRomaji(char: string): string {
  if (!char) return '';
  return KANA_ROMAJI_DICTIONARY[char] ?? char;
}

/**
 * Maps a full Japanese word/phrase into an array of { char, romaji } objects.
 */
export function breakIntoKanaTokens(text: string): { char: string; romaji: string }[] {
  if (!text) return [];
  const tokens: { char: string; romaji: string }[] = [];
  const chars = Array.from(text);

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    // Check if next character is small combo (e.g. き + ゃ = きゃ)
    const next = chars[i + 1];
    if (next && ['ゃ', 'ゅ', 'ょ', 'ャ', 'ュ', 'ョ'].includes(next)) {
      const combo = c + next;
      tokens.push({
        char: combo,
        romaji: getKanaRomaji(combo),
      });
      i++; // Skip next
    } else {
      tokens.push({
        char: c,
        romaji: getKanaRomaji(c),
      });
    }
  }

  return tokens;
}
