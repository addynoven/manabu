export type LessonItemType =
  | 'listen'
  | 'speak'
  | 'spell'
  | 'cloze'
  | 'scramble'
  | 'match'
  | 'dialogue'
  | 'dictate'
  | 'quiz'
  | 'kanji_stroke'
  | 'cloze_context';

export interface MatchPairItem {
  id: string;
  left: string;
  right: string;
  furigana?: string;
  romaji?: string;
}

export interface LessonItem {
  id: string;
  type: LessonItemType;
  prompt: string; // Japanese text e.g. "こんにちは"
  furigana?: string; // Furigana e.g. "こんにちは"
  romaji: string; // Romaji e.g. "konnichiwa"
  english: string; // English translation e.g. "Hello / Good afternoon"
  audioText: string; // Text to speak via TTS
  options?: string[]; // Multiple choice or gap-fill options
  correctAnswer: string; // Expected answer
  tileBank?: string[]; // Kana tiles for spelling mode
  kanji?: string; // Kanji character if kanji intro
  dialogueSpeaker?: string; // e.g. 'Tanaka-san' or 'Store Clerk'
  contextSentence?: string; // Full sentence with ___ blank

  // Cloze Mode fields
  clozeSentence?: string; // Sentence with "{{BLANK}}" or "____"
  clozeTarget?: string; // Correct word for the blank
  clozeOptions?: string[]; // Choice chips for the blank

  // Sentence Scramble fields
  scrambleTokens?: string[]; // Shuffled phrase blocks
  scrambleSolution?: string[]; // Correct ordered chunks

  // Matching Pairs fields
  matchPairs?: MatchPairItem[];

  // Dialogue Turn-Taking fields
  dialogueSpeakerAvatar?: string;
  dialoguePrompt?: string;
  dialogueOptions?: string[];

  // Speech Recognition fields
  targetSpeech?: string;
  phoneticHint?: string;

  // Dictation fields
  dictateTokens?: string[];
  dictateSolution?: string[];

  // Educational explanation/grammar tip
  explanation?: string;
}

export type DojoLessonCategory =
  | 'Expression'
  | 'Vocabulary'
  | 'Practice'
  | 'Review Quiz'
  | 'Conversation'
  | 'Unit Test';

export interface DojoLesson {
  id: string;
  unitId: string;
  lessonNumber: number;
  dayNumber: number; // 1 to 7
  category: DojoLessonCategory;
  sectionTitle?: string | null;
  title: string;
  titleJp: string;
  summary: string;
  vocabKeywords: string[];
  kanjiKeywords: string[];
  items: LessonItem[];
  iconType?: 'expression' | 'vocabulary' | 'practice' | 'quiz' | 'test';
}

export interface TextbookRef {
  series: 'genki' | 'minna' | 'tobira';
  volume?: 1 | 2;
  chapter: number;
  title?: string;
}

export interface RevisionGate {
  id: string;
  unitId: string;
  title: string;
  titleJp: string;
  requiredScorePercent: number; // default: 80
  items: LessonItem[];
}

export interface DojoUnit {
  id: string;
  unitNumber: number;
  title: string;
  titleJp: string;
  description: string;
  icon: string;
  themeColor: string;
  summaryPoints?: string[];
  lessons: DojoLesson[];
  revisionGate: RevisionGate;
  textbook?: TextbookRef;
  jlptLevel?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
}

export interface LessonProgress {
  completedAt: string;
  score: number;
}
