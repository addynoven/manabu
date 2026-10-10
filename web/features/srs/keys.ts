export const srsKeys = {
  all: ['srs'] as const,
  queue: (uid: string) => ['srs', 'queue', uid] as const,
  card: (cardId: string) => ['srs', 'card', cardId] as const,
};
