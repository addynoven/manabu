export type LessonItemType =
  | 'listen'
  | 'speak'
  | 'spell'
  | 'kanji_stroke'
  | 'cloze_context'
  | 'dialogue';

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
  sectionTitle?: string;
  title: string;
  titleJp: string;
  summary: string;
  vocabKeywords: string[];
  kanjiKeywords: string[];
  items: LessonItem[];
  iconType?: 'expression' | 'vocabulary' | 'practice' | 'quiz' | 'test';
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
}

export interface LessonProgress {
  completedAt: string;
  score: number;
}
