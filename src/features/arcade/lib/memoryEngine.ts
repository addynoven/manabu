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
  { pairId: 'na', sideA: { content: 'な', subContent: 'Hiragana' }, sideB: { content: 'na', subContent: 'Reading' } },
  { pairId: 'ha', sideA: { content: 'は', subContent: 'Hiragana' }, sideB: { content: 'ha', subContent: 'Reading' } },
  { pairId: 'ma', sideA: { content: 'ま', subContent: 'Hiragana' }, sideB: { content: 'ma', subContent: 'Reading' } },
  { pairId: 'ya', sideA: { content: 'や', subContent: 'Hiragana' }, sideB: { content: 'ya', subContent: 'Reading' } },
  { pairId: 'ra', sideA: { content: 'ら', subContent: 'Hiragana' }, sideB: { content: 'ra', subContent: 'Reading' } },
  { pairId: 'wa', sideA: { content: 'わ', subContent: 'Hiragana' }, sideB: { content: 'wa', subContent: 'Reading' } },
  { pairId: 'shi', sideA: { content: 'し', subContent: 'Hiragana' }, sideB: { content: 'shi', subContent: 'Reading' } },
  { pairId: 'tsu', sideA: { content: 'つ', subContent: 'Hiragana' }, sideB: { content: 'tsu', subContent: 'Reading' } },
  { pairId: 'fu', sideA: { content: 'ふ', subContent: 'Hiragana' }, sideB: { content: 'fu', subContent: 'Reading' } },
  { pairId: 'yu', sideA: { content: 'ゆ', subContent: 'Hiragana' }, sideB: { content: 'yu', subContent: 'Reading' } },
  { pairId: 'ro', sideA: { content: 'ろ', subContent: 'Hiragana' }, sideB: { content: 'ro', subContent: 'Reading' } },
];

const HIRA_KATA_POOL: RawPair[] = [
  { pairId: 'pair-a', sideA: { content: 'あ', subContent: 'Hiragana' }, sideB: { content: 'ア', subContent: 'Katakana' } },
  { pairId: 'pair-i', sideA: { content: 'い', subContent: 'Hiragana' }, sideB: { content: 'イ', subContent: 'Katakana' } },
  { pairId: 'pair-u', sideA: { content: 'う', subContent: 'Hiragana' }, sideB: { content: 'ウ', subContent: 'Katakana' } },
  { pairId: 'pair-e', sideA: { content: 'え', subContent: 'Hiragana' }, sideB: { content: 'エ', subContent: 'Katakana' } },
  { pairId: 'pair-o', sideA: { content: 'お', subContent: 'Hiragana' }, sideB: { content: 'オ', subContent: 'Katakana' } },
  { pairId: 'pair-ka', sideA: { content: 'か', subContent: 'Hiragana' }, sideB: { content: 'カ', subContent: 'Katakana' } },
  { pairId: 'pair-ki', sideA: { content: 'き', subContent: 'Hiragana' }, sideB: { content: 'キ', subContent: 'Katakana' } },
  { pairId: 'pair-ku', sideA: { content: 'く', subContent: 'Hiragana' }, sideB: { content: 'ク', subContent: 'Katakana' } },
  { pairId: 'pair-sa', sideA: { content: 'さ', subContent: 'Hiragana' }, sideB: { content: 'サ', subContent: 'Katakana' } },
  { pairId: 'pair-shi', sideA: { content: 'し', subContent: 'Hiragana' }, sideB: { content: 'シ', subContent: 'Katakana' } },
  { pairId: 'pair-ta', sideA: { content: 'た', subContent: 'Hiragana' }, sideB: { content: 'タ', subContent: 'Katakana' } },
  { pairId: 'pair-na', sideA: { content: 'な', subContent: 'Hiragana' }, sideB: { content: 'ナ', subContent: 'Katakana' } },
  { pairId: 'pair-ha', sideA: { content: 'は', subContent: 'Hiragana' }, sideB: { content: 'ハ', subContent: 'Katakana' } },
  { pairId: 'pair-ma', sideA: { content: 'ま', subContent: 'Hiragana' }, sideB: { content: 'マ', subContent: 'Katakana' } },
];

const KANJI_MEANING_POOL: RawPair[] = [
  { pairId: 'sun', sideA: { content: '日', subContent: 'にち' }, sideB: { content: 'Sun / Day', subContent: 'Meaning' } },
  { pairId: 'moon', sideA: { content: '月', subContent: 'げつ' }, sideB: { content: 'Moon / Month', subContent: 'Meaning' } },
  { pairId: 'fire', sideA: { content: '火', subContent: 'か' }, sideB: { content: 'Fire', subContent: 'Meaning' } },
  { pairId: 'water', sideA: { content: '水', subContent: 'すい' }, sideB: { content: 'Water', subContent: 'Meaning' } },
  { pairId: 'tree', sideA: { content: '木', subContent: 'もく' }, sideB: { content: 'Tree / Wood', subContent: 'Meaning' } },
  { pairId: 'gold', sideA: { content: '金', subContent: 'きん' }, sideB: { content: 'Gold / Money', subContent: 'Meaning' } },
  { pairId: 'earth', sideA: { content: '土', subContent: 'ど' }, sideB: { content: 'Earth / Soil', subContent: 'Meaning' } },
  { pairId: 'mountain', sideA: { content: '山', subContent: 'やま' }, sideB: { content: 'Mountain', subContent: 'Meaning' } },
  { pairId: 'river', sideA: { content: '川', subContent: 'かわ' }, sideB: { content: 'River', subContent: 'Meaning' } },
  { pairId: 'sky', sideA: { content: '空', subContent: 'そら' }, sideB: { content: 'Sky / Empty', subContent: 'Meaning' } },
  { pairId: 'flower', sideA: { content: '花', subContent: 'はな' }, sideB: { content: 'Flower', subContent: 'Meaning' } },
  { pairId: 'rain', sideA: { content: '雨', subContent: 'あめ' }, sideB: { content: 'Rain', subContent: 'Meaning' } },
];

/**
 * Generates a randomized 12-card (6 pairs) memory deck.
 */
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

  // Shuffle pool and select pairCount items
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

  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
