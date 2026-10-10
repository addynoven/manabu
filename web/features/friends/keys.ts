export const friendsKeys = {
  all: ['friends'] as const,
  list: (uid: string) => ['friends', 'list', uid] as const,
  requests: (uid: string) => ['friends', 'requests', uid] as const,
};
