export interface AnkiCard {
  front: string;
  back: string;
  tags?: string[];
}

export interface ParsedAnkiDeck {
  title: string;
  cards: AnkiCard[];
}

export function parseTsvAnkiDeck(tsvContent: string, deckTitle = 'Imported Deck'): ParsedAnkiDeck {
  if (!tsvContent || !tsvContent.trim()) {
    return { title: deckTitle, cards: [] };
  }

  const lines = tsvContent.split('\n');
  const cards: AnkiCard[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const parts = trimmed.split('\t');
    if (parts.length >= 2) {
      cards.push({
        front: parts[0].trim(),
        back: parts[1].trim(),
        tags: parts[2] ? parts[2].split(' ') : [],
      });
    }
  }

  return {
    title: deckTitle,
    cards,
  };
}
