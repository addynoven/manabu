export const kanaKeys = {
  all: ['kana'] as const,
  groups: () => [...kanaKeys.all, 'groups'] as const,
  byScript: (script: 'hiragana' | 'katakana') =>
    [...kanaKeys.groups(), script] as const,
};
