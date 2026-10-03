import fs from 'fs';
import path from 'path';
import { ALL_DOJO_UNITS } from '../src/features/dojo/data/units';

// Collect all english answers for robust distractor generation
const allEnglishAnswers = new Set<string>();
for (const unit of ALL_DOJO_UNITS) {
  for (const lesson of unit.lessons) {
    for (const item of lesson.items) {
      if (item.correctAnswer && typeof item.correctAnswer === 'string' && item.correctAnswer.length > 0) {
        allEnglishAnswers.add(item.correctAnswer);
      }
    }
  }
}
const answersList = Array.from(allEnglishAnswers);

export function mapUnits() {
  return ALL_DOJO_UNITS.map(unit => {
    return {
      id: unit.id,
      number: unit.unitNumber,
      title: unit.title,
      japaneseTitle: unit.titleJp,
      description: unit.description,
      icon: unit.icon || '🌸',
      color: unit.themeColor || '#10B981',
      lessons: unit.lessons.map(lesson => {
        return {
          id: lesson.id,
          title: lesson.title,
          subtitle: lesson.titleJp || lesson.summary,
          xpReward: 20,
          category: lesson.category,
          dayNumber: lesson.dayNumber,
          exercises: lesson.items.map((item, itemIdx) => {
            const optionsSet = new Set<string>();
            optionsSet.add(item.correctAnswer);

            if (item.options && Array.isArray(item.options)) {
              for (const opt of item.options) {
                if (typeof opt === 'string' && opt.trim().length > 0) {
                  optionsSet.add(opt.trim());
                }
              }
            }

            // Fill up to at least 4 options if possible
            let seed = (unit.unitNumber * 100 + lesson.lessonNumber * 10 + itemIdx) % answersList.length;
            while (optionsSet.size < 4 && answersList.length > 0) {
              const cand = answersList[seed % answersList.length];
              if (cand && cand !== item.correctAnswer) {
                optionsSet.add(cand);
              }
              seed = (seed + 17) % answersList.length;
            }

            const options = Array.from(optionsSet);
            // Deterministic pseudo-shuffle
            options.sort((a, b) => a.localeCompare(b));

            return {
              id: item.id,
              type: 'select' as const,
              prompt: item.english || item.contextSentence || 'Choose the correct meaning / reading:',
              subPrompt: item.romaji
                ? `${item.romaji}${item.furigana ? ` • ${item.furigana}` : ''}`
                : undefined,
              character: item.prompt || item.audioText || item.correctAnswer,
              correctAnswer: item.correctAnswer,
              options,
              explanation:
                item.explanation ||
                `${item.prompt}${item.romaji ? ` (${item.romaji})` : ''}: ${item.english || item.correctAnswer}`,
            };
          }),
        };
      }),
    };
  });
}

const mapped = mapUnits();
const targetPath = path.resolve(process.cwd(), 'admin/data/curriculum.json');
fs.writeFileSync(targetPath, JSON.stringify(mapped, null, 2), 'utf8');

console.log(`Successfully exported ${mapped.length} units to ${targetPath}`);
let totalLessons = 0;
let totalExercises = 0;
for (const u of mapped) {
  totalLessons += u.lessons.length;
  for (const l of u.lessons) {
    totalExercises += l.exercises.length;
  }
}
console.log(`Summary: ${mapped.length} units | ${totalLessons} lessons | ${totalExercises} exercises`);
