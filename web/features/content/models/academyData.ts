import { LearningGuide, ACADEMY_GUIDES } from './guides';

export interface ConstructionStep {
  stepNumber: number;
  title: string;
  dictionaryForm: string;
  dictionaryRomaji: string;
  stepTag: string;
  inflection: string;
  inflectionRomaji: string;
  inflectionTag: string;
  result: string;
  resultRomaji: string;
  resultTag: string;
}

export interface ExampleSentence {
  id: string;
  label: string;
  context: string;
  japaneseHtml: string;
  plainJapanese: string;
  english: string;
  note?: string;
}

export interface GrammarItem {
  id: string;
  title: string;
  romaji: string;
  meaning: string;
  description: string;
  tier: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  category: 'particles' | 'conjugations' | 'keigo' | 'expressions';
  tracks: Array<'jlpt' | 'genki' | 'minna' | 'tobira'>;
  unitNumber: number;
  unitTitle: string;
  stemMode: string;
  formula: {
    part1: string;
    part1Sub?: string;
    part1Type?: 'default' | 'primary' | 'info';
    operator?: string;
    part2: string;
    part2Type?: 'default' | 'primary' | 'info';
    altPart2?: string;
  };
  constructionSteps: ConstructionStep[];
  examples: ExampleSentence[];
  defaultMastery?: 'mastered' | 'adept' | 'learning' | 'unseen';
}

export type AcademyItem =
  | { type: 'grammar'; data: GrammarItem }
  | { type: 'guide'; data: LearningGuide };

export const ACADEMY_GRAMMAR_ITEMS: GrammarItem[] = [
  // N5 Unit 1: Copula & Identity
  {
    id: 'da-desu',
    title: '〜だ / 〜です',
    romaji: '/ da / desu /',
    meaning: 'To be / Is, Am, Are (Copula)',
    description:
      'The fundamental copula in Japanese used to equate a subject with a noun or noun phrase. 〜です is the polite form, while 〜だ is the plain/informal form.',
    tier: 'N5',
    category: 'expressions',
    tracks: ['jlpt', 'genki', 'minna'],
    unitNumber: 1,
    unitTitle: 'Unit 1: Copula & Identity',
    stemMode: '体言 (Noun)',
    formula: {
      part1: '名詞 (Noun)',
      part1Sub: '[Noun]',
      part1Type: 'default',
      operator: '+',
      part2: 'です / だ',
      part2Type: 'primary',
      altPart2: 'である',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Select Noun',
        dictionaryForm: '学生',
        dictionaryRomaji: 'gakusei (student)',
        stepTag: 'Noun',
        inflection: '学生',
        inflectionRomaji: 'gakusei',
        inflectionTag: 'Unchanged',
        result: '学生です',
        resultRomaji: 'gakusei desu',
        resultTag: 'Polite Copula',
      },
    ],
    examples: [
      {
        id: 'da-desu-ex1',
        label: 'Example 01',
        context: 'Self-Introduction',
        japaneseHtml: '<ruby>私<rt>わたし</rt></ruby>は <ruby>学生<rt>がくせい</rt></ruby><span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">です</span>。',
        plainJapanese: '私は学生です。',
        english: '"I am a student."',
        note: 'Polite self-declaration in standard conversation.',
      },
      {
        id: 'da-desu-ex2',
        label: 'Example 02',
        context: 'Informal Statement',
        japaneseHtml: 'これは <ruby>本<rt>ほん</rt></ruby><span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">だ</span>。',
        plainJapanese: 'これは本だ。',
        english: '"This is a book."',
        note: 'Plain form copula used among close friends or in written prose.',
      },
    ],
    defaultMastery: 'mastered',
  },
  {
    id: 'janai-deewa-narimasen',
    title: '〜じゃない / 〜ではない',
    romaji: '/ janai / dewa nai /',
    meaning: 'Is not / Am not / Are not (Negative Copula)',
    description:
      'The negative copula used to negate nouns and na-adjectives. じゃない is informal, じゃありません is polite spoken, and ではない / ではありません is formal/written.',
    tier: 'N5',
    category: 'expressions',
    tracks: ['jlpt', 'genki', 'minna'],
    unitNumber: 1,
    unitTitle: 'Unit 1: Copula & Identity',
    stemMode: '体言 (Noun / Na-adj)',
    formula: {
      part1: '名詞 / な形容詞',
      part1Sub: '[Noun/Na-Adj]',
      part1Type: 'default',
      operator: '+',
      part2: 'じゃない / ではありません',
      part2Type: 'primary',
      altPart2: 'じゃありません',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Noun Stem',
        dictionaryForm: '先生',
        dictionaryRomaji: 'sensei (teacher)',
        stepTag: 'Noun',
        inflection: '先生',
        inflectionRomaji: 'sensei',
        inflectionTag: 'Base Noun',
        result: '先生じゃない',
        resultRomaji: 'sensei janai',
        resultTag: 'Negative Plain',
      },
    ],
    examples: [
      {
        id: 'janai-ex1',
        label: 'Example 01',
        context: 'Daily Conversation',
        japaneseHtml: '<ruby>彼<rt>かれ</rt></ruby>は <ruby>医者<rt>いしゃ</rt></ruby><span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">じゃない</span>。',
        plainJapanese: '彼は医者じゃない。',
        english: '"He is not a doctor."',
      },
    ],
    defaultMastery: 'mastered',
  },

  // N5 Unit 2: Essential Particles
  {
    id: 'particle-wa-ga',
    title: 'は vs が',
    romaji: '/ wa vs ga /',
    meaning: 'Topic Marker (は) vs Subject Marker (が)',
    description:
      'は marks the topic ("as for X, ..."), establishing known context. が marks the specific grammatical subject, introducing new information or pointing out an unknown element.',
    tier: 'N5',
    category: 'particles',
    tracks: ['jlpt', 'genki', 'minna', 'tobira'],
    unitNumber: 2,
    unitTitle: 'Unit 2: Essential Particles',
    stemMode: '名詞 (Noun)',
    formula: {
      part1: '名詞 (Topic/Subject)',
      part1Sub: '[Noun]',
      part1Type: 'default',
      operator: '+',
      part2: 'は / が',
      part2Type: 'primary',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Topic Choice',
        dictionaryForm: '猫',
        dictionaryRomaji: 'neko (cat)',
        stepTag: 'Topic Noun',
        inflection: '猫は',
        inflectionRomaji: 'neko wa',
        inflectionTag: 'Known Topic',
        result: '猫はかわいい',
        resultRomaji: 'neko wa kawaii',
        resultTag: '"As for cats, they are cute"',
      },
    ],
    examples: [
      {
        id: 'wa-ga-ex1',
        label: 'Example 01',
        context: 'New Information Focus',
        japaneseHtml: '<ruby>誰<rt>だれ</rt></ruby><span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">が</span> <ruby>来<rt>き</rt></ruby>ましたか。',
        plainJapanese: '誰が来ましたか。',
        english: '"WHO came?" (Question word requires が)',
      },
      {
        id: 'wa-ga-ex2',
        label: 'Example 02',
        context: 'Established Topic',
        japaneseHtml: '<ruby>田中<rt>たなか</rt></ruby>さん<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">は</span> <ruby>先生<rt>せんせい</rt></ruby>です。',
        plainJapanese: '田中さんは先生です。',
        english: '"As for Tanaka-san, he is a teacher."',
      },
    ],
    defaultMastery: 'mastered',
  },
  {
    id: 'particle-wo-ni-de',
    title: 'を / に / で',
    romaji: '/ wo / ni / de /',
    meaning: 'Direct Object (を), Target/Time (に), Location of Action (で)',
    description:
      'を marks the direct object of a transitive verb. に marks specific targets, destinations, or fixed times. で marks the location where an active event takes place.',
    tier: 'N5',
    category: 'particles',
    tracks: ['jlpt', 'genki', 'minna'],
    unitNumber: 2,
    unitTitle: 'Unit 2: Essential Particles',
    stemMode: '名詞 + 動詞',
    formula: {
      part1: '名詞 (Noun)',
      part1Sub: '[Location/Object]',
      part1Type: 'default',
      operator: '+',
      part2: 'を / に / で',
      part2Type: 'info',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Location Action',
        dictionaryForm: '図書館',
        dictionaryRomaji: 'toshokan (library)',
        stepTag: 'Location',
        inflection: '図書館で',
        inflectionRomaji: 'toshokan de',
        inflectionTag: 'Action Spot',
        result: '図書館で勉強する',
        resultRomaji: 'toshokan de benkyou suru',
        resultTag: 'Study at library',
      },
    ],
    examples: [
      {
        id: 'wo-ni-de-ex1',
        label: 'Example 01',
        context: 'Object & Action Location',
        japaneseHtml: '<ruby>家<rt>うち</rt></ruby><span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">で</span> <ruby>朝<rt>あさ</rt></ruby>ごはん<span class="text-info font-extrabold underline decoration-info decoration-2 underline-offset-4">を</span> <ruby>食<rt>た</rt></ruby>べる。',
        plainJapanese: '家で朝ごはんを食べる。',
        english: '"Eat breakfast at home."',
      },
    ],
    defaultMastery: 'mastered',
  },

  // N5 Unit 3: Verb Connections & Te-Form
  {
    id: 'te-kudasai',
    title: '〜てください',
    romaji: '/ te kudasai /',
    meaning: 'Please do (Polite Request)',
    description:
      'Used to make polite requests or give polite instructions. Constructed by combining the verb te-form with ください.',
    tier: 'N5',
    category: 'expressions',
    tracks: ['jlpt', 'genki', 'minna'],
    unitNumber: 3,
    unitTitle: 'Unit 3: Verb Connections & Te-Form',
    stemMode: '連用形 (て-form)',
    formula: {
      part1: '動詞 連用形',
      part1Sub: '[て-form]',
      part1Type: 'default',
      operator: '+',
      part2: 'ください',
      part2Type: 'primary',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Dictionary Verb',
        dictionaryForm: '書く',
        dictionaryRomaji: 'kaku (to write)',
        stepTag: 'Godan verb',
        inflection: '書いて',
        inflectionRomaji: 'kaite',
        inflectionTag: 'Te-form inflection',
        result: '書いてください',
        resultRomaji: 'kaite kudasai',
        resultTag: 'Please write',
      },
    ],
    examples: [
      {
        id: 'te-kudasai-ex1',
        label: 'Example 01',
        context: 'Instruction',
        japaneseHtml: '<ruby>名前<rt>なまえ</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">ください</span>。',
        plainJapanese: '名前を書いてください。',
        english: '"Please write your name."',
      },
    ],
    defaultMastery: 'mastered',
  },
  {
    id: 'tewa-ikenai',
    title: '〜てはいけない',
    romaji: '/ te wa ikenai /',
    meaning: 'Must not do / Strong Prohibition & Rules',
    description:
      'Expresses an objective, authoritative prohibition or societal ban. Frequently used in statutory signage, institutional bylaws, parental directives, and exam instructions.',
    tier: 'N5',
    category: 'conjugations',
    tracks: ['jlpt', 'genki', 'minna', 'tobira'],
    unitNumber: 3,
    unitTitle: 'Unit 3: Verb Connections & Te-Form',
    stemMode: '連用形 (て-form)',
    formula: {
      part1: '動詞 連用形',
      part1Sub: '[て-form]',
      part1Type: 'default',
      operator: '+',
      part2: 'はいけない',
      part2Type: 'primary',
      altPart2: 'はだめ',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Dictionary Verb',
        dictionaryForm: '撮る',
        dictionaryRomaji: 'toru (to take photo)',
        stepTag: 'Godan verb with る',
        inflection: '撮って',
        inflectionRomaji: 'totte (small っ + て)',
        inflectionTag: 'Double consonant shift',
        result: '撮ってはいけない',
        resultRomaji: 'totte wa ikenai',
        resultTag: 'Complete prohibition',
      },
    ],
    examples: [
      {
        id: 'tewa-ikenai-ex1',
        label: 'Example 01',
        context: 'Museum Notice',
        japaneseHtml: 'ここで <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>って<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけません</span>。',
        plainJapanese: 'ここで写真を撮ってはいけません。',
        english: '"You must not take photos here."',
        note: 'Inflexible official rule posted at art galleries, temples, and exhibition rooms.',
      },
      {
        id: 'tewa-ikenai-ex2',
        label: 'Example 02',
        context: 'Residential Rules',
        japaneseHtml: '<ruby>夜遅<rt>よるおそ</rt></ruby>くに <ruby>大<rt>おお</rt></ruby>きな<ruby>音<rt>おと</rt></ruby>を <ruby>立<rt>た</rt></ruby>てて<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけない</span>。',
        plainJapanese: '夜遅くに大きな音を立ててはいけない。',
        english: '"You must not make loud noises late at night."',
        note: 'General building rule spoken in plain authoritative form.',
      },
    ],
    defaultMastery: 'adept',
  },
  {
    id: 'temo-ii',
    title: '〜てもいい',
    romaji: '/ te mo ii /',
    meaning: 'May do / Permission & Grant',
    description:
      'Used to grant permission or ask if something is allowed. Formed with verb te-form + もいい (or もいいですか for questions).',
    tier: 'N5',
    category: 'conjugations',
    tracks: ['jlpt', 'genki', 'minna'],
    unitNumber: 3,
    unitTitle: 'Unit 3: Verb Connections & Te-Form',
    stemMode: '連用形 (て-form)',
    formula: {
      part1: '動詞 連用形',
      part1Sub: '[て-form]',
      part1Type: 'default',
      operator: '+',
      part2: 'もいい',
      part2Type: 'info',
      altPart2: 'も構わない',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Dictionary Verb',
        dictionaryForm: '入る',
        dictionaryRomaji: 'hairu (to enter)',
        stepTag: 'Godan verb',
        inflection: '入って',
        inflectionRomaji: 'haitte',
        inflectionTag: 'Te-form',
        result: '入ってもいい',
        resultRomaji: 'haitte mo ii',
        resultTag: 'May enter',
      },
    ],
    examples: [
      {
        id: 'temo-ii-ex1',
        label: 'Example 01',
        context: 'Asking Permission',
        japaneseHtml: '<ruby>入<rt>はい</rt></ruby>っても<span class="text-info font-extrabold underline decoration-info decoration-2 underline-offset-4">いいですか</span>。',
        plainJapanese: '入ってもいいですか。',
        english: '"May I come in?"',
      },
    ],
    defaultMastery: 'learning',
  },
  {
    id: 'te-iru',
    title: '〜ている',
    romaji: '/ te iru /',
    meaning: 'Is doing (Progressive) / State of Being',
    description:
      'Expresses an ongoing action currently in progress, or a continuous state resulting from a past action (e.g., 結婚している = is married).',
    tier: 'N5',
    category: 'conjugations',
    tracks: ['jlpt', 'genki', 'minna', 'tobira'],
    unitNumber: 3,
    unitTitle: 'Unit 3: Verb Connections & Te-Form',
    stemMode: '連用形 (て-form)',
    formula: {
      part1: '動詞 連用形',
      part1Sub: '[て-form]',
      part1Type: 'default',
      operator: '+',
      part2: 'いる / います',
      part2Type: 'primary',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Dictionary Verb',
        dictionaryForm: '食べる',
        dictionaryRomaji: 'taberu (to eat)',
        stepTag: 'Ichidan verb',
        inflection: '食べて',
        inflectionRomaji: 'tabete',
        inflectionTag: 'Drop る + て',
        result: '食べている',
        resultRomaji: 'tabete iru',
        resultTag: 'Is eating',
      },
    ],
    examples: [
      {
        id: 'te-iru-ex1',
        label: 'Example 01',
        context: 'Present Progressive',
        japaneseHtml: '<ruby>今<rt>いま</rt></ruby>、ご飯を <ruby>食<rt>た</rt></ruby>べて<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">います</span>。',
        plainJapanese: '今、ご飯を食べています。',
        english: '"I am eating a meal right now."',
      },
    ],
    defaultMastery: 'unseen',
  },

  // N4 Unit 4: Potential & Conditionals
  {
    id: 'potential-form',
    title: '〜れる / 〜られる (可能形)',
    romaji: '/ reru / rareru (Potential) /',
    meaning: 'Can do / Ability to perform action',
    description:
      'Expresses physical capability or permission to execute a verb. Ichidan verbs drop る and add られる. Godan verbs shift the final vowel from -u to -eru.',
    tier: 'N4',
    category: 'conjugations',
    tracks: ['jlpt', 'genki', 'minna', 'tobira'],
    unitNumber: 4,
    unitTitle: 'Unit 4: Potential & Conditionals',
    stemMode: '未然形 / 仮定形',
    formula: {
      part1: '動詞 (Verb Stem)',
      part1Sub: '[E-row / られる]',
      part1Type: 'default',
      operator: '+',
      part2: 'れる / られる',
      part2Type: 'primary',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Ichidan Shift',
        dictionaryForm: '食べる',
        dictionaryRomaji: 'taberu',
        stepTag: 'Ichidan',
        inflection: '食べられる',
        inflectionRomaji: 'taberareru',
        inflectionTag: 'Add られる',
        result: '食べられます',
        resultRomaji: 'taberaremasu',
        resultTag: 'Can eat',
      },
    ],
    examples: [
      {
        id: 'potential-ex1',
        label: 'Example 01',
        context: 'Ability',
        japaneseHtml: '<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せ<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">ます</span>。',
        plainJapanese: '日本語が話せます。',
        english: '"I can speak Japanese."',
      },
    ],
    defaultMastery: 'unseen',
  },

  // N3 Unit 5: Expressing Nuance & Keigo
  {
    id: 'keigo-sonkeigo',
    title: '尊敬語 (Sonkeigo - Respectful Form)',
    romaji: '/ Sonkeigo /',
    meaning: 'Honorific speech for superiors',
    description:
      'Elevates the action of a superior or customer (e.g. お越しになる, いらっしゃる, お使いになる). Used in Japanese business etiquette.',
    tier: 'N3',
    category: 'keigo',
    tracks: ['jlpt', 'minna', 'tobira'],
    unitNumber: 5,
    unitTitle: 'Unit 5: Business Keigo & Honorifics',
    stemMode: '連用形 / 特殊形',
    formula: {
      part1: 'お + 動詞連用形',
      part1Sub: '[Verb Stem]',
      part1Type: 'default',
      operator: '+',
      part2: 'になる',
      part2Type: 'primary',
    },
    constructionSteps: [
      {
        stepNumber: 1,
        title: 'Honorific Prefix',
        dictionaryForm: '待つ',
        dictionaryRomaji: 'matsu (to wait)',
        stepTag: 'Godan verb',
        inflection: 'お持ち',
        inflectionRomaji: 'omachi',
        inflectionTag: 'お + Stem',
        result: 'お待ちになる',
        resultRomaji: 'omachi ni naru',
        resultTag: 'Honorific waiting',
      },
    ],
    examples: [
      {
        id: 'sonkeigo-ex1',
        label: 'Example 01',
        context: 'Customer Service',
        japaneseHtml: '<ruby>少々<rt>しょうしょう</rt></ruby> <ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせを お<ruby>待<rt>ま</rt></ruby>ち<span class="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">になりますか</span>。',
        plainJapanese: '少々打ち合わせをお待ちになりますか。',
        english: '"Will you wait a moment for the meeting?"',
      },
    ],
    defaultMastery: 'unseen',
  },
];
