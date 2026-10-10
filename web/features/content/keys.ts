export const contentKeys = {
  all: ['content'] as const,
  kanji: (level: string) => ['content', 'kanji', level] as const,
  vocab: (level: string) => ['content', 'vocab', level] as const,
};
