export const arcadeKeys = {
  all: ['arcade'] as const,
  stats: (uid: string) => ['arcade', 'stats', uid] as const,
  leaderboard: (game: string) => ['arcade', 'leaderboard', game] as const,
};
