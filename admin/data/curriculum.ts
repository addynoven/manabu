import curriculumData from './curriculum.json';

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

export const MANABU_CURRICULUM: CurriculumUnit[] = curriculumData as CurriculumUnit[];
