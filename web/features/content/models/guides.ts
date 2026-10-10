export interface GuideSection {
  title: string;
  content: string[];
  callout?: {
    title: string;
    items: Array<{
      japanese: string;
      romaji?: string;
      meaning?: string;
      note?: string;
    }>;
  };
  proTip?: string;
}

export interface LearningGuide {
  id: string;
  title: string;
  japaneseTitle: string;
  category: 'Writing Systems' | 'Grammar' | 'Kanji' | 'Study Tips';
  readTime: string;
  icon: string;
  summary: string;
  sections: GuideSection[];
}

export const ACADEMY_GUIDES: LearningGuide[] = [
  {
    id: 'hiragana-101',
    title: 'Hiragana 101: The 3-Day Mastery Blueprint',
    japaneseTitle: 'ひらがな速習法',
    category: 'Writing Systems',
    readTime: '5 min',
    icon: 'あ',
    summary:
      'The foundational phonetic alphabet of Japanese. Master all 46 core characters, dakuten, and combos in 72 hours.',
    sections: [
      {
        title: 'Why Hiragana is Priority #1',
        content: [
          'Hiragana (ひらがな) is the backbone of Japanese. Unlike English letters which represent isolated phonemes, each hiragana glyph represents a complete syllable (vowel or consonant + vowel).',
          'It is used for native Japanese words, grammar particles (は, が, を), verb conjugations, and pronunciation furigana over complex kanji.',
        ],
        proTip:
          'Never memorize using Romaji for more than 3 days. Your brain must map the glyph directly to the Japanese sound.',
      },
      {
        title: 'Day 1: The 5 Vowels & Core Rows (あ, か, さ)',
        content: [
          'Japanese pronunciation is remarkably consistent. Everything stems from the five pure vowels: A, I, U, E, O.',
          'Notice how the K-row (か・き・く・け・こ) and S-row (さ・し・す・せ・そ) preserve the exact same vowel order.',
        ],
        callout: {
          title: 'Day 1 Key Glyphs & Visual Hooks',
          items: [
            {
              japanese: 'あ',
              romaji: 'a',
              meaning: 'Looks like an Apple with a stem',
            },
            {
              japanese: 'い',
              romaji: 'i',
              meaning: 'Two tall bamboo trees standing side-by-side',
            },
            {
              japanese: 'う',
              romaji: 'u',
              meaning: 'A person bent under a heavy load: "Oof!"',
            },
            {
              japanese: 'え',
              romaji: 'e',
              meaning: 'An energetic exotic bird running',
            },
            {
              japanese: 'お',
              romaji: 'o',
              meaning: 'A golfer swinging onto the green: "Oh!"',
            },
          ],
        },
      },
      {
        title: 'Day 2: Dakuten (゛) & Handakuten (゜) Sound Shifts',
        content: [
          'You don’t need to learn 25 new shapes! Adding two small quotation marks (゛dakuten) vibrates the vocal cords:',
          '• K → G: か (ka) → が (ga)',
          '• S → Z: さ (sa) → ざ (za)',
          '• T → D: た (ta) → だ (da)',
          '• H → B: は (ha) → ば (ba)',
          'Adding a small circle (゜handakuten) turns H into P: は (ha) → ぱ (pa).',
        ],
        proTip:
          'Pay attention to exceptions: し (shi) + ゛= じ (ji), and ち (chi) + ゛= ぢ (ji).',
      },
      {
        title: 'Day 3: Digraphs (Yōon) & Small Tsu (っ)',
        content: [
          'Contracted sounds (拗音) pair an I-vowel kana with a small ya, yu, or yo (ゃ, ゅ, ょ): きゃ (kya), しゃ (sha), ちゃ (cha).',
          'The small tsu (っ - sokuon) creates a silent double consonant stop: きって (kitte - stamp) vs きて (kite - come).',
        ],
      },
    ],
  },
  {
    id: 'katakana-demystified',
    title: 'Katakana Demystified: Mastering Loanwords & Tricky Pairs',
    japaneseTitle: 'カタカナ攻略',
    category: 'Writing Systems',
    readTime: '6 min',
    icon: 'ア',
    summary:
      'Master the angular alphabet used for foreign loanwords, technical jargon, onomatopoeia, and stylized signage.',
    sections: [
      {
        title: 'The Angular Script with Modern Purpose',
        content: [
          'Katakana (カタカナ) uses sharp, straight brush strokes derived from fragments of Chinese characters.',
          'In modern Japan, more than 10% of daily vocabulary is written in Katakana—including coffee (コーヒー), computer (コンピューター), and bread (パン).',
        ],
      },
      {
        title: 'The Infamous Twin Pairs: シ vs ツ and ソ vs ン',
        content: [
          'These four characters cause immense frustration for beginners because they look nearly identical in standard fonts. The secret is the stroke direction and brush angle:',
          '• シ (SHI): Horizontal sweep. The two dots are stacked vertically, and the long stroke sweeps up from bottom-left to top-right (like a smiley face tilting up).',
          '• ツ (TSU): Vertical drop. The two dots are side-by-side at the top, and the long stroke sweeps down from top-right to bottom-left.',
          '• ソ (SO): Sweeps down from top-right.',
          '• ン (N): Sweeps up from bottom-left.',
        ],
        callout: {
          title: 'Memory Hack: The SHI/TSU Stare',
          items: [
            {
              japanese: 'シ',
              romaji: 'shi',
              note: 'She (SHI) looks UP sideways at you',
            },
            {
              japanese: 'ツ',
              romaji: 'tsu',
              note: 'A Tsunami (TSU) wave crashes DOWN from above',
            },
            {
              japanese: 'ソ',
              romaji: 'so',
              note: 'So (SO) steep: dropping straight down',
            },
            {
              japanese: 'ン',
              romaji: 'n',
              note: 'Nearing the sky: sweeping up',
            },
          ],
        },
      },
      {
        title: 'Extended Katakana for Foreign Sounds',
        content: [
          'Because traditional Japanese lacks sounds like "fa, fi, fe, fo" or "ti, di", modern katakana pairs base vowels with small characters:',
          '• ファ (fa), フィ (fi), フェ (fe), フォ (fo)',
          '• ティ (ti), ディ (di), デュ (dyu)',
          '• ウィ (wi), ウェ (we), ウォ (wo)',
          '• ヴァ (va), ヴィ (vi), ヴェ (ve), ヴォ (vo)',
        ],
      },
    ],
  },
  {
    id: 'kanji-anatomy',
    title: 'Kanji Anatomy: Radicals, Stroke Order & Readings',
    japaneseTitle: '漢字の解剖学',
    category: 'Kanji',
    readTime: '7 min',
    icon: '漢',
    summary:
      'Unlock the architectural secrets of 214 radicals and learn when to invoke On’yomi versus Kun’yomi.',
    sections: [
      {
        title: 'The 214 Radicals (部首 - Bushu)',
        content: [
          'Kanji are not random scribbles. Every single character is built like Lego from 214 building blocks called radicals.',
          'The radical usually gives a direct clue to the word’s meaning: 氵(water) is in 海 (sea), 泳 (swim), 酒 (sake), and 洗 (wash).',
        ],
        callout: {
          title: 'Essential Radicals to Know',
          items: [
            {
              japanese: '氵 (さんずい)',
              meaning: 'Water / Liquid',
              note: 'Found in 海, 泳, 湖, 湯',
            },
            {
              japanese: '亻 (にんべん)',
              meaning: 'Person / Human',
              note: 'Found in 休, 体, 使, 信',
            },
            {
              japanese: '木 (きへん)',
              meaning: 'Tree / Wood',
              note: 'Found in 本, 林, 森, 校',
            },
            {
              japanese: '口 (くち)',
              meaning: 'Mouth / Opening',
              note: 'Found in 咲, 味, 呼, 鳴',
            },
          ],
        },
      },
      {
        title: 'On’yomi vs. Kun’yomi: The Golden Rule',
        content: [
          'Why does 日 sound like "nichi" in 日本 (Nihon) but "hi" in 日の出 (hinode)?',
          '• On’yomi (音読み): Chinese-derived reading. Used when kanji combine with other kanji to form compound words (熟語 - jukugo). E.g. 学生 (gakusei - student).',
          '• Kun’yomi (訓読み): Native Japanese reading. Used when a kanji stands alone or has hiragana attached (okurigana). E.g. 食べる (taberu - to eat).',
        ],
        proTip:
          'Rule of thumb: 2+ kanji mashed together = On’yomi. 1 kanji with trailing hiragana = Kun’yomi.',
      },
      {
        title: 'Universal Stroke Order Rules',
        content: [
          '1. Top to bottom: 三 (san - three)',
          '2. Left to right: 川 (kawa - river)',
          '3. Horizontal before vertical: 十 (juu - ten)',
          '4. Outside frame before inside: 国 (koku - country)',
          '5. Close the bottom last: 日, 目, 四',
        ],
      },
    ],
  },
  {
    id: 'verb-conjugation-essentials',
    title: 'Verb Conjugation Essentials: Godan vs Ichidan',
    japaneseTitle: '動詞活用早わかり',
    category: 'Grammar',
    readTime: '8 min',
    icon: '動',
    summary:
      'The foolproof 2-step system for identifying verb classes and generating polite (ます) and te-forms (て形).',
    sections: [
      {
        title: 'The 3 Verb Families',
        content: [
          'Every Japanese verb in existence belongs to one of three groups:',
          '1. Group 2: Ichidan (一段 / ru-verbs): Extremely regular. E.g. 食べる (taberu), 見る (miru).',
          '2. Group 1: Godan (五段 / u-verbs): Syllable shifts across the 5 vowel rows. E.g. 書く (kaku), 飲む (nomu).',
          '3. Group 3: Irregular (不規則): Only TWO core verbs! する (suru - to do) and 来る (kuru - to come).',
        ],
      },
      {
        title: 'How to Tell Ichidan vs. Godan',
        content: [
          'Look at the syllable right before the final る (ru):',
          '• If it ends in an "i" or "e" sound (e.g. tabE-ru, mI-ru), it is almost always an Ichidan verb!',
          '• If the verb does NOT end in る, or ends in a/u/o + る (e.g. nomu, kaku, hanasu, wakar-u), it is Godan.',
        ],
        proTip:
          'A few famous tricksters end in -iru/-eru but are Godan: 帰る (kaeru - return), 走る (hashiru - run), 知る (shiru - know).',
      },
      {
        title: 'Mastering the Te-Form (て形)',
        content: [
          'The te-form connects actions, makes requests (〜てください), and expresses ongoing states (〜ている).',
          'For Godan verbs, use the classic song mnemonic:',
          '• う, つ, る → って (買ってお、待って、取って)',
          '• む, ぶ, ぬ → んで (飲んで、呼んで、死んで)',
          '• く → いて (書いて) [Exception: 行く → 行って]',
          '• ぐ → いで (泳いで)',
          '• す → して (話して)',
        ],
      },
    ],
  },
  {
    id: 'core-particles-simplified',
    title: 'Core Japanese Particles: は vs が, を, に, で',
    japaneseTitle: '助詞マスター講座',
    category: 'Grammar',
    readTime: '6 min',
    icon: '助',
    summary:
      'Demystify the grammatical road signs that dictate subjects, objects, locations, and topics.',
    sections: [
      {
        title: 'The Epic Battle: は (WA) vs. が (GA)',
        content: [
          'Both mark subjects, but with completely different mental cameras:',
          '• は (Topic Marker): "Speaking of X... / As for X". The spotlight is on what follows.',
          '• が (Subject / Identifier Marker): "X is the one that...". The spotlight is directly ON X itself.',
        ],
        callout: {
          title: 'The Detective Example',
          items: [
            {
              japanese: '田中さんは犯人です。',
              romaji: 'Tanaka-san wa hannin desu.',
              note: 'As for Tanaka, he is the culprit. (Focus on culprit)',
            },
            {
              japanese: '田中さんが犯人です！',
              romaji: 'Tanaka-san ga hannin desu!',
              note: 'Tanaka is the one who is the culprit! (Focus on Tanaka)',
            },
          ],
        },
      },
      {
        title: 'Locations: に (NI) vs. で (DE)',
        content: [
          '• で (DE): Marks the location where an ACTIVE EVENT happens. E.g. 図書館で勉強する (Study AT the library).',
          '• に (NI): Marks destination of movement or STATIC EXISTENCE. E.g. 日本に行く (Go TO Japan), 部屋に猫がいる (A cat is IN the room).',
        ],
      },
      {
        title: 'Direct Object: を (WO)',
        content: [
          'The particle を (pronounced "o") attaches to whatever receives the action of the verb:',
          '• りんごを食べる (Eat an apple)',
          '• 本を読む (Read a book)',
          '• 音楽を聴く (Listen to music)',
        ],
      },
    ],
  },
];
