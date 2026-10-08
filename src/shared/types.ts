/**
 * Manabu Canonical Shared Types (SSOT)
 * Single Source of Truth for Mobile (Expo) & Web (Next.js).
 */

export type VerbType = 'godan' | 'ichidan' | 'irregular';

export type IrregularType = 'suru' | 'kuru' | 'aru' | 'iku' | 'honorific';

export interface VerbInfo {
  dictionaryForm: string;
  reading: string;
  romaji: string;
  type: VerbType;
  stem: string;
  ending: string;
  irregularType?: IrregularType;
  compoundPrefix?: string;
  meaning?: string;
}

export type ConjugationCategory =
  | 'basic'
  | 'polite'
  | 'negative'
  | 'past'
  | 'volitional'
  | 'potential'
  | 'passive'
  | 'causative'
  | 'causative-passive'
  | 'imperative'
  | 'conditional';

export type Formality = 'plain' | 'polite';

export interface ConjugationForm {
  id: string;
  name: string;
  nameJapanese: string;
  kanji: string;
  hiragana: string;
  romaji: string;
  formality: Formality;
  category: ConjugationCategory;
}

export interface ConjugationResult {
  verb: VerbInfo;
  forms: ConjugationForm[];
  timestamp: number;
}

export type ConjugationErrorCode =
  | 'EMPTY_INPUT'
  | 'INVALID_CHARACTERS'
  | 'UNKNOWN_VERB'
  | 'CONJUGATION_FAILED';

export interface ConjugationError {
  code: ConjugationErrorCode;
  message: string;
}

// Curriculum Schemas
export interface LessonExercise {
  id: string;
  type: 'select' | 'translate' | 'audio' | 'order';
  prompt: string;
  subPrompt?: string;
  character?: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export interface UnitLesson {
  id: string;
  title: string;
  subtitle: string;
  xpReward: number;
  exercises: LessonExercise[];
}

export interface CurriculumUnit {
  id: string;
  number: number;
  title: string;
  japaneseTitle: string;
  description: string;
  color: string;
  icon?: string;
  lessons: UnitLesson[];
}

// Belt & Progress
export type BeltRank =
  | 'white'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'brown'
  | 'black';

export interface UserProgressBackup {
  completedLessons: Record<string, { score: number; completedAt: string }>;
  passedRevisionGates: Record<string, boolean>;
  totalXp: number;
  currentStreak: number;
  level: number;
  lastActive: string;
}
