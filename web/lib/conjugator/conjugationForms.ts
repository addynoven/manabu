import type { FormDefinition } from './types';

export const CONJUGATION_FORMS: FormDefinition[] = [
  // Basic Forms
  {
    id: 'dictionary',
    category: 'basic',
    name: 'Dictionary Form (Present)',
    nameJa: '辞書形',
    formality: 'plain',
  },
  {
    id: 'te',
    category: 'basic',
    name: 'Te-Form (Connecting)',
    nameJa: 'て形',
    formality: 'plain',
  },

  // Polite Forms
  {
    id: 'masu',
    category: 'polite',
    name: 'Masu Form (Polite Present)',
    nameJa: 'ます形',
    formality: 'polite',
  },
  {
    id: 'masen',
    category: 'polite',
    name: 'Masen (Polite Negative)',
    nameJa: 'ません形',
    formality: 'polite',
  },
  {
    id: 'mashita',
    category: 'polite',
    name: 'Mashita (Polite Past)',
    nameJa: 'ました形',
    formality: 'polite',
  },
  {
    id: 'masen-deshita',
    category: 'polite',
    name: 'Masen Deshita (Polite Past Negative)',
    nameJa: 'ませんでした形',
    formality: 'polite',
  },

  // Negative Forms
  {
    id: 'nai',
    category: 'negative',
    name: 'Nai Form (Plain Negative)',
    nameJa: 'ない形',
    formality: 'plain',
  },
  {
    id: 'nakatta',
    category: 'negative',
    name: 'Nakatta Form (Plain Past Negative)',
    nameJa: 'なかった形',
    formality: 'plain',
  },

  // Past Forms
  {
    id: 'ta',
    category: 'past',
    name: 'Ta Form (Plain Past)',
    nameJa: 'た形',
    formality: 'plain',
  },

  // Volitional Forms
  {
    id: 'volitional-plain',
    category: 'volitional',
    name: 'Volitional (Let\'s / Shall we)',
    nameJa: '意向形',
    formality: 'plain',
  },
  {
    id: 'volitional-polite',
    category: 'volitional',
    name: 'Mashou (Polite Volitional)',
    nameJa: 'ましょう形',
    formality: 'polite',
  },

  // Potential Forms (Can do)
  {
    id: 'potential-plain',
    category: 'potential',
    name: 'Potential (Can do)',
    nameJa: '可能形',
    formality: 'plain',
  },
  {
    id: 'potential-polite',
    category: 'potential',
    name: 'Potential (Polite)',
    nameJa: '可能形丁寧',
    formality: 'polite',
  },
  {
    id: 'potential-negative',
    category: 'potential',
    name: 'Potential (Negative / Cannot do)',
    nameJa: '可能形否定',
    formality: 'plain',
  },

  // Passive Forms (Be done to)
  {
    id: 'passive-plain',
    category: 'passive',
    name: 'Passive (Plain)',
    nameJa: '受身形',
    formality: 'plain',
  },
  {
    id: 'passive-polite',
    category: 'passive',
    name: 'Passive (Polite)',
    nameJa: '受身形丁寧',
    formality: 'polite',
  },

  // Causative Forms (Make/let do)
  {
    id: 'causative-plain',
    category: 'causative',
    name: 'Causative (Plain)',
    nameJa: '使役形',
    formality: 'plain',
  },
  {
    id: 'causative-polite',
    category: 'causative',
    name: 'Causative (Polite)',
    nameJa: '使役形丁寧',
    formality: 'polite',
  },

  // Causative-Passive (Made to do)
  {
    id: 'causative-passive-plain',
    category: 'causative-passive',
    name: 'Causative-Passive (Plain)',
    nameJa: '使役受身形',
    formality: 'plain',
  },
  {
    id: 'causative-passive-polite',
    category: 'causative-passive',
    name: 'Causative-Passive (Polite)',
    nameJa: '使役受身形丁寧',
    formality: 'polite',
  },

  // Imperative Forms (Commands)
  {
    id: 'imperative-plain',
    category: 'imperative',
    name: 'Imperative (Direct Command)',
    nameJa: '命令形',
    formality: 'plain',
  },
  {
    id: 'imperative-polite',
    category: 'imperative',
    name: 'Te Kudasai (Please do)',
    nameJa: 'てください',
    formality: 'polite',
  },
  {
    id: 'imperative-negative',
    category: 'imperative',
    name: 'Prohibition (Don\'t do)',
    nameJa: '禁止形',
    formality: 'plain',
  },

  // Conditional Forms (If / When)
  {
    id: 'conditional-ba',
    category: 'conditional',
    name: 'Ba Form (Hypothetical Condition)',
    nameJa: 'ば形',
    formality: 'plain',
  },
  {
    id: 'conditional-tara',
    category: 'conditional',
    name: 'Tara Form (Past/Sequential Condition)',
    nameJa: 'たら形',
    formality: 'plain',
  },
];

export const CATEGORY_LABELS: Record<string, { en: string; ja: string }> = {
  basic: { en: 'Basic Forms', ja: '基本形' },
  polite: { en: 'Polite (ます)', ja: '丁寧形' },
  negative: { en: 'Negative (ない)', ja: '否定形' },
  past: { en: 'Past (た)', ja: '過去形' },
  volitional: { en: 'Volitional (意向)', ja: '意向形' },
  potential: { en: 'Potential (可能)', ja: '可能形' },
  passive: { en: 'Passive (受身)', ja: '受身形' },
  causative: { en: 'Causative (使役)', ja: '使役形' },
  'causative-passive': { en: 'Causative-Passive (使役受身)', ja: '使役受身形' },
  imperative: { en: 'Imperative (命令/禁止)', ja: '命令・禁止形' },
  conditional: { en: 'Conditional (ば/たら)', ja: '条件形' },
};
