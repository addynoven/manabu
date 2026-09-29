import * as wanakana from 'wanakana';

export interface TokenResult {
  surface: string;
  reading: string;
  romaji: string;
  isKanji: boolean;
}

export function tokenizeText(input: string): TokenResult[] {
  if (!input || !input.trim()) return [];

  const tokens: TokenResult[] = [];
  const chars = Array.from(input);

  for (const char of chars) {
    const isKanjiChar = wanakana.isKanji(char);
    const reading = wanakana.toHiragana(char);
    const romaji = wanakana.toRomaji(char);

    tokens.push({
      surface: char,
      reading,
      romaji,
      isKanji: isKanjiChar,
    });
  }

  return tokens;
}
