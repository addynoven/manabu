export interface LearningResource {
  id: string;
  name: string;
  nameJa?: string;
  category: 'apps' | 'textbooks' | 'youtube' | 'podcasts' | 'immersion' | 'grammar';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  priceType: 'free' | 'freemium' | 'paid';
  description: string;
  url: string;
  rating: number;
  tags: string[];
  featured?: boolean;
}

export const LEARNING_RESOURCES: LearningResource[] = [
  // Apps
  {
    id: 'anki',
    name: 'Anki',
    nameJa: 'アンキ',
    category: 'apps',
    difficulty: 'all-levels',
    priceType: 'free',
    description:
      'Powerful, open-source spaced repetition flashcard system. The gold standard for vocabulary, kanji, and sentence mining.',
    url: 'https://apps.ankiweb.net/',
    rating: 4.9,
    tags: ['SRS', 'Flashcards', 'Open Source', 'Vocab'],
    featured: true,
  },
  {
    id: 'wanikani',
    name: 'WaniKani',
    nameJa: 'ワニカニ',
    category: 'apps',
    difficulty: 'all-levels',
    priceType: 'freemium',
    description:
      'Mnemonic-driven 60-level kanji and vocabulary curriculum by Tofugu. Teaches 2,000+ kanji using radicals and unforgettable stories.',
    url: 'https://www.wanikani.com/',
    rating: 4.8,
    tags: ['Kanji', 'Mnemonics', 'SRS'],
    featured: true,
  },
  {
    id: 'bunpro',
    name: 'Bunpro',
    nameJa: '文プロ',
    category: 'apps',
    difficulty: 'all-levels',
    priceType: 'freemium',
    description:
      'SRS-powered grammar platform covering JLPT N5 through N1 with interactive fill-in-the-blank typing drills and nuanced explanations.',
    url: 'https://bunpro.jp/',
    rating: 4.7,
    tags: ['Grammar', 'JLPT', 'SRS'],
    featured: true,
  },
  {
    id: 'jisho',
    name: 'Jisho.org',
    nameJa: '辞書',
    category: 'apps',
    difficulty: 'all-levels',
    priceType: 'free',
    description:
      'The premier online Japanese dictionary. Search by words, kanji radicals, stroke count, JLPT level, or raw English.',
    url: 'https://jisho.org/',
    rating: 4.9,
    tags: ['Dictionary', 'Radicals', 'Sentences'],
    featured: true,
  },
  {
    id: 'renshuu',
    name: 'Renshuu',
    nameJa: '練習',
    category: 'apps',
    difficulty: 'all-levels',
    priceType: 'free',
    description:
      'Gamified all-in-one Japanese learning app with cute mascots, crosswords, sentence building, and complete JLPT tracks.',
    url: 'https://www.renshuu.org/',
    rating: 4.8,
    tags: ['Gamified', 'Vocab', 'Grammar', 'Free'],
  },

  // Textbooks & Grammar
  {
    id: 'genki',
    name: 'Genki: An Integrated Course in Elementary Japanese',
    nameJa: 'げんき',
    category: 'textbooks',
    difficulty: 'beginner',
    priceType: 'paid',
    description:
      'The most widely adopted college textbook series for beginner Japanese. Covers conversation, grammar, reading, and culture.',
    url: 'https://genki3.japantimes.co.jp/',
    rating: 4.8,
    tags: ['Textbook', 'Beginner', 'College', 'Audio'],
    featured: true,
  },
  {
    id: 'tae-kim',
    name: "Tae Kim's Guide to Japanese Grammar",
    nameJa: '文法ガイド',
    category: 'grammar',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'Legendary free comprehensive guide that explains Japanese from the perspective of how the language actually works, not through English goggles.',
    url: 'https://guidetojapanese.org/learn/',
    rating: 4.8,
    tags: ['Grammar', 'Free', 'Essential', 'Non-traditional'],
    featured: true,
  },
  {
    id: 'basic-japanese-grammar-dict',
    name: 'A Dictionary of Basic Japanese Grammar',
    nameJa: '基本日本語文法辞典',
    category: 'textbooks',
    difficulty: 'beginner',
    priceType: 'paid',
    description:
      'The undisputed "Yellow Bible" of Japanese grammar by Seiichi Makino and Michio Tsutsui. In-depth explanations of every particle and pattern.',
    url: 'https://bookclub.japantimes.co.jp/',
    rating: 5.0,
    tags: ['Reference', 'Grammar', 'Essential'],
    featured: true,
  },
  {
    id: 'tobira',
    name: 'Tobira: Gateway to Advanced Japanese',
    nameJa: 'とびら',
    category: 'textbooks',
    difficulty: 'intermediate',
    priceType: 'paid',
    description:
      'The gold standard bridge textbook from intermediate to advanced Japanese. Prepares learners for authentic native content and JLPT N2.',
    url: 'https://tobiraweb.9640.jp/',
    rating: 4.7,
    tags: ['Textbook', 'Intermediate', 'N3-N2'],
  },

  // YouTube Channels
  {
    id: 'cure-dolly',
    name: 'Cure Dolly: Organic Japanese',
    nameJa: '有機的日本語',
    category: 'youtube',
    difficulty: 'all-levels',
    priceType: 'free',
    description:
      'Brilliant, first-principles grammar series that completely demystifies Japanese structure (subordinate clauses, particles, zero pronouns).',
    url: 'https://www.youtube.com/@organicjapanesewithcuredol4258',
    rating: 4.9,
    tags: ['YouTube', 'Grammar', 'First-Principles', 'Free'],
    featured: true,
  },
  {
    id: 'comprehensible-japanese',
    name: 'Comprehensible Japanese',
    nameJa: 'わかる日本語',
    category: 'youtube',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'Yuki-sensei uses visual storytelling, slow spoken Japanese, and gestures to provide pure comprehensible input from day one.',
    url: 'https://www.youtube.com/@cijapanese',
    rating: 4.9,
    tags: ['Comprehensible Input', 'Listening', 'Immersion'],
    featured: true,
  },
  {
    id: 'nihongo-no-mori',
    name: 'Nihongo no Mori',
    nameJa: '日本語の森',
    category: 'youtube',
    difficulty: 'intermediate',
    priceType: 'free',
    description:
      'High-energy native teachers explaining JLPT N3, N2, and N1 grammar points entirely in natural Japanese.',
    url: 'https://www.youtube.com/@nihongonomori2013',
    rating: 4.8,
    tags: ['JLPT', 'N3-N1', 'Native Explanations'],
  },
  {
    id: 'japanese-ammo-misa',
    name: 'Japanese Ammo with Misa',
    category: 'youtube',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'In-depth, friendly breakdown of grammar, conversational nuances, and colloquial Japanese expressions.',
    url: 'https://www.youtube.com/@JapaneseAmmowithMisa',
    rating: 4.8,
    tags: ['Conversational', 'Grammar', 'Beginner'],
  },

  // Podcasts
  {
    id: 'nihongo-con-teppei',
    name: 'Nihongo con Teppei',
    nameJa: '日本語コン鉄平',
    category: 'podcasts',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'Short 4-minute daily audio episodes covering everyday topics in simple, repetitive Japanese. The perfect commute podcast.',
    url: 'https://nihongoconteppei.com/',
    rating: 4.9,
    tags: ['Podcast', 'Daily', 'Short', 'Listening'],
    featured: true,
  },
  {
    id: 'japanese-with-noriko',
    name: 'Learn Japanese with Noriko',
    nameJa: 'のりこ先生',
    category: 'podcasts',
    difficulty: 'intermediate',
    priceType: 'free',
    description:
      'Engaging Japanese podcasts on culture, self-improvement, books, and language tips for upper-beginner and intermediate learners.',
    url: 'https://www.japanesewithnoriko.com/',
    rating: 4.8,
    tags: ['Podcast', 'Culture', 'Intermediate'],
  },
  {
    id: 'japanese-with-shun',
    name: 'Japanese with Shun',
    nameJa: 'しゅん先生',
    category: 'podcasts',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'Slow, authentic Japanese monologue episodes crafted specifically for Genki I and JLPT N5/N4 level students.',
    url: 'https://podcasts.apple.com/us/podcast/japanese-with-shun/id1534015697',
    rating: 4.9,
    tags: ['Beginner', 'Podcast', 'Genki-aligned'],
  },

  // Reading & Immersion
  {
    id: 'satori-reader',
    name: 'Satori Reader',
    nameJa: 'サトリ・リーダー',
    category: 'immersion',
    difficulty: 'intermediate',
    priceType: 'freemium',
    description:
      'The finest reading companion in existence. Serialized stories with native audio, interactive word-by-word definitions, and grammar notes.',
    url: 'https://www.satorireader.com/',
    rating: 5.0,
    tags: ['Reading', 'Audio', 'Stories', 'Grammar Notes'],
    featured: true,
  },
  {
    id: 'tadoku-graded-readers',
    name: 'Tadoku Free Graded Readers',
    nameJa: '多読',
    category: 'immersion',
    difficulty: 'beginner',
    priceType: 'free',
    description:
      'Free picture books written in graded Japanese levels (0 through 5) designed for extensive reading without dictionaries.',
    url: 'https://tadoku.org/japanese/en/free-books-en/',
    rating: 4.8,
    tags: ['Graded Readers', 'Free', 'Extensive Reading', 'Stories'],
    featured: true,
  },
  {
    id: 'animelon',
    name: 'Animelon',
    category: 'immersion',
    difficulty: 'intermediate',
    priceType: 'free',
    description:
      'Stream Japanese anime with clickable Japanese, furigana, and English subtitles, dictionary lookups, and dialogue repetition.',
    url: 'https://animelon.com/',
    rating: 4.7,
    tags: ['Anime', 'Subtitles', 'Immersion', 'Listening'],
  },
];
