export const authKeys = {
  all: ['auth'] as const,
  profile: (uid: string) => ['auth', 'profile', uid] as const,
};
