import fs from 'fs';
import path from 'path';

const unitsJsonPath = path.resolve(__dirname, '../../data/units/units.json');

if (!fs.existsSync(unitsJsonPath)) {
  console.log('Using pre-bundled curriculum.json (data/units/units.json not present in build sandbox)');
  process.exit(0);
}

const ALL_DOJO_UNITS = JSON.parse(fs.readFileSync(unitsJsonPath, 'utf8'));

const PLACEHOLDER_FILTER = /antonym|different meaning|incorrect pronunciation|similar meaning|distractor|placeholder/i;
const INVALID_GRAMMAR_FILTER = /来るです|するです|これは聞くです/i;

const japanesePool = new Set<string>();
const englishPool = new Set<string>();

function isValidString(val: string): boolean {
  if (!val || typeof val !== 'string') return false;
  const clean = val.trim();
  if (clean.length === 0) return false;
  if (PLACEHOLDER_FILTER.test(clean)) return false;
  if (INVALID_GRAMMAR_FILTER.test(clean)) return false;
  return true;
}

// 1. Populate clean distractor pools from all units
for (const unit of ALL_DOJO_UNITS) {
  for (const lesson of unit.lessons) {
    for (const item of lesson.items) {
      if (isValidString(item.correctAnswer)) {
        const val = item.correctAnswer.trim();
        if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(val)) {
          japanesePool.add(val);
        } else {
          englishPool.add(val);
        }
      }
      if (item.options && Array.isArray(item.options)) {
        for (const opt of item.options) {
          if (isValidString(opt)) {
            const val = opt.trim();
            if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(val)) {
              japanesePool.add(val);
            } else {
              englishPool.add(val);
            }
          }
        }
      }
    }
  }
}

const japaneseList = Array.from(japanesePool);
const englishList = Array.from(englishPool);

export function mapUnits() {
  return ALL_DOJO_UNITS.map((unit: any) => {
    let textbook = unit.textbook;
    let jlptLevel = unit.jlptLevel || 'N5';

    if (!textbook) {
      if (unit.unitNumber <= 12) {
        textbook = { series: 'genki', volume: 1, chapter: unit.unitNumber, title: `Genki I Ch.${unit.unitNumber}` };
        jlptLevel = 'N5';
      } else if (unit.unitNumber <= 23) {
        textbook = { series: 'genki', volume: 2, chapter: unit.unitNumber - 12, title: `Genki II Ch.${unit.unitNumber - 12}` };
        jlptLevel = 'N4';
      } else {
        textbook = { series: 'tobira', chapter: unit.unitNumber - 23, title: `Tobira Ch.${unit.unitNumber - 23}` };
        jlptLevel = 'N3';
      }
    }

    return {
      id: unit.id,
      number: unit.unitNumber,
      title: unit.title,
      japaneseTitle: unit.titleJp,
      description: unit.description,
      icon: unit.icon || '🌸',
      color: unit.themeColor || '#10B981',
      textbook,
      jlptLevel,
      lessons: unit.lessons.map((lesson: any) => {
        return {
          id: lesson.id,
          lessonNumber: lesson.lessonNumber,
          vocabKeywords: lesson.vocabKeywords || [],
          title: lesson.title,
          subtitle: lesson.titleJp || lesson.summary,
          xpReward: 20,
          category: lesson.category,
          dayNumber: lesson.dayNumber,
          exercises: lesson.items.map((item: any, itemIdx: number) => {
            const rawType = (item.type || '').toLowerCase();
            const targetAnswer = (item.correctAnswer || item.english || '').trim();
            const isJapaneseTarget = /[\u3040-\u30ff\u4e00-\u9faf]/.test(targetAnswer);
            const pool = isJapaneseTarget ? japaneseList : englishList;

            let exType: 'select' | 'translate' | 'audio' | 'order' | 'scramble' | 'dialogue' | 'dictation' | 'speak' | 'match' = 'select';
            if (rawType === 'speak') exType = 'speak';
            else if (rawType === 'match') exType = 'match';
            else if (rawType === 'scramble' || rawType === 'spell') exType = 'scramble';
            else if (rawType === 'dictate') exType = 'dictation';
            else if (rawType === 'dialogue') exType = 'dialogue';

            let options: string[] = [];

            if (exType === 'select' || exType === 'dialogue') {
              const optionsSet = new Set<string>();
              if (isValidString(targetAnswer)) {
                optionsSet.add(targetAnswer);
              }

              if (item.options && Array.isArray(item.options)) {
                for (const opt of item.options) {
                  if (isValidString(opt)) {
                    const val = opt.trim();
                    if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(val) === isJapaneseTarget) {
                      optionsSet.add(val);
                    }
                  }
                }
              }

              let seed = (unit.unitNumber * 100 + lesson.lessonNumber * 10 + itemIdx) % pool.length;
              while (optionsSet.size < 4 && pool.length > 0) {
                const cand = pool[seed % pool.length];
                if (cand && cand !== targetAnswer && isValidString(cand)) {
                  optionsSet.add(cand);
                }
                seed = (seed + 17) % pool.length;
              }

              options = Array.from(optionsSet).slice(0, 4);
              options.sort((a, b) => a.localeCompare(b));
            }

            const matchPairs = item.matchPairs
              ? item.matchPairs.map((p: any) => ({
                  id: String(p.id),
                  left: p.left,
                  right: p.right,
                }))
              : undefined;

            const wordTiles = item.scrambleTokens || item.tileBank || undefined;

            return {
              id: item.id,
              type: exType,
              prompt: item.english || item.contextSentence || 'Choose the correct answer:',
              subPrompt: item.romaji
                ? `${item.romaji}${item.furigana ? ` • ${item.furigana}` : ''}`
                : undefined,
              character: item.prompt || item.audioText || item.targetSpeech || targetAnswer,
              correctAnswer: targetAnswer,
              options,
              matchPairs,
              wordTiles,
              explanation:
                item.explanation ||
                `${item.prompt || targetAnswer}${item.romaji ? ` (${item.romaji})` : ''}: ${item.english || targetAnswer}`,
            };
          }),
        };
      }),
    };
  });
}

const mapped = mapUnits();
const targetPath = path.resolve(__dirname, '../data/curriculum.json');
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
