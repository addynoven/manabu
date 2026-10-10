import type { MemoryCard, MemoryDeckMode } from '../models/arcade.model';

interface RawPair {
  pairId: string;
  sideA: { content: string; subContent?: string };
  sideB: { content: string; subContent?: string };
}

const KANA_ROMAJI_POOL: RawPair[] = [
  { pairId: 'a', sideA: { content: 'あ', subContent: 'Hiragana' }, sideB: { content: 'a', subContent: 'Reading' } },
  { pairId: 'ka', sideA: { content: 'か', subContent: 'Hiragana' }, sideB: { content: 'ka', subContent: 'Reading' } },
  { pairId: 'sa', sideA: { content: 'さ', subContent: 'Hiragana' }, sideB: { content: 'sa', subContent: 'Reading' } },
  { pairId: 'ta', sideA: { content: 'た', subContent: 'Hiragana' }, sideB: { content: 'ta', subContent: 'Reading' } },
];

const HIRA_KATA_POOL: RawPair[] = [
  { pairId: 'pair-a', sideA: { content: 'あ', subContent: 'Hiragana' }, sideB: { content: 'ア', subContent: 'Katakana' } },
  { pairId: 'pair-i', sideA: { content: 'い', subContent: 'Hiragana' }, sideB: { content: 'イ', subContent: 'Katakana' } },
];

const KANJI_MEANING_POOL: RawPair[] = [
  { pairId: 'sun', sideA: { content: '日', subContent: 'にち' }, sideB: { content: 'Sun / Day', subContent: 'Meaning' } },
  { pairId: 'moon', sideA: { content: '月', subContent: 'げつ' }, sideB: { content: 'Moon / Month', subContent: 'Meaning' } },
];

export function generateMemoryDeck(
  mode: MemoryDeckMode,
  pairCount: number = 6,
): MemoryCard[] {
  let pool = KANA_ROMAJI_POOL;
  if (mode === 'hira-kata') {
    pool = HIRA_KATA_POOL;
  } else if (mode === 'kanji-meaning') {
    pool = KANJI_MEANING_POOL;
  }

  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
  const selectedPairs = shuffledPool.slice(0, pairCount);

  const cards: MemoryCard[] = [];
  selectedPairs.forEach((pair, index) => {
    cards.push({
      id: `${pair.pairId}-A-${index}`,
      pairId: pair.pairId,
      content: pair.sideA.content,
      subContent: pair.sideA.subContent,
      isFlipped: false,
      isMatched: false,
    });
    cards.push({
      id: `${pair.pairId}-B-${index}`,
      pairId: pair.pairId,
      content: pair.sideB.content,
      subContent: pair.sideB.subContent,
      isFlipped: false,
      isMatched: false,
    });
  });

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
