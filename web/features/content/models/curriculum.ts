import curriculumData from '@/data/curriculum.json';

export interface LessonExercise {
  id: string;
  type: 'select' | 'translate' | 'audio' | 'order' | 'scramble' | 'dialogue' | 'dictation' | 'speak' | 'match';
  prompt: string;
  subPrompt?: string;
  character?: string;
  correctAnswer: string;
  options: string[];
  explanation?: string;
  matchPairs?: Array<{ id: string; left: string; right: string }>;
  wordTiles?: string[];
}

export interface UnitLesson {
  id: string;
  title: string;
  subtitle: string;
  xpReward: number;
  exercises: LessonExercise[];
  lessonNumber?: number;
  vocabKeywords?: string[];
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

export const MANABU_CURRICULUM: CurriculumUnit[] = curriculumData as CurriculumUnit[];
