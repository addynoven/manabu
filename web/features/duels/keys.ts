export const duelKeys = {
  all: ['duels'] as const,
  room: (id: string) => ['duels', 'room', id] as const,
};
