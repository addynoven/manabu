// Architecture rules as lint errors. Spread into your existing flat config:
//
//   import boundaries from './eslint.boundaries.mjs';
//   export default [...yourExistingConfig, ...boundaries];
//
// Requires typescript-eslint to be loaded (eslint-config-next's TypeScript config does this).

const lines = (max) => ['error', { max, skipBlankLines: true, skipComments: true }];

const featureImportRules = {
  patterns: [
    {
      regex: '^@/features/[^/]+/.+',
      message:
        'Import another feature only through its index (@/features/<name>). Use relative imports inside a feature.',
    },
    { regex: '^@/app(/|$)', message: 'features must not import from app/.' },
  ],
};

export default [
  // --- File size limits ---
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/__tests__/**', '**/*.test.{ts,tsx}'],
    rules: { 'max-lines': lines(250) },
  },
  {
    files: ['features/**/components/**/*.tsx', 'core/components/**/*.tsx'],
    rules: { 'max-lines': lines(150) },
  },
  {
    files: ['features/**/screens/**/*Screen.tsx'],
    rules: { 'max-lines': lines(180) },
  },

  // --- Import boundaries ---
  {
    files: ['features/**/*.{ts,tsx}'],
    rules: { 'no-restricted-imports': ['error', featureImportRules] },
  },
  {
    // engine/ is pure domain logic: no React, Next, or database
    files: ['features/**/engine/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'react', message: 'engine/ must stay framework-free.' },
            { name: 'next', message: 'engine/ must stay framework-free.' },
          ],
          patterns: [
            ...featureImportRules.patterns,
            { regex: '^@/core/(db|cache|queue|email)', message: 'engine/ must not do IO.' },
            { regex: '^next/', message: 'engine/ must stay framework-free.' },
          ],
        },
      ],
    },
  },
  {
    files: ['core/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { regex: '^@/(features|app)(/|$)', message: 'core/ must not import features/ or app/.' },
          ],
        },
      ],
    },
  },
  {
    // Pages may import a feature's index or its screens, nothing deeper.
    files: ['app/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^@/features/[^/]+/(?!screens$)[^/]+',
              message: 'Pages import from @/features/<name> or @/features/<name>/screens only.',
            },
          ],
        },
      ],
    },
  },
  {
    // Route handlers (webhooks etc.) are adapters and may reach into a feature.
    files: ['app/api/**/*.ts'],
    rules: { 'no-restricted-imports': 'off' },
  },

  // --- Type safety ---
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': true, 'ts-expect-error': 'allow-with-description', minimumDescriptionLength: 10 },
      ],
    },
  },
];
