export const conjugatorKeys = {
  all: ['conjugator'] as const,
  verb: (dictForm: string) => ['conjugator', 'verb', dictForm] as const,
};
