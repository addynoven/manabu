import type { VocabEntry, VocabQuestion } from '../models/vocabulary.model';
import { shuffleArray } from '../../kana/lib/kanaGenerator';

export function generateVocabQuestion(pool: VocabEntry[]): VocabQuestion {
  if (pool.length === 0) {
    throw new Error('Vocabulary pool is empty');
  }

  const target = pool[Math.floor(Math.random() * pool.length)];
  const correctAnswer = target.waller_definition;

  const otherEntries = pool.filter(v => v.jmdict_seq !== target.jmdict_seq);
  const distractors = shuffleArray(otherEntries)
    .slice(0, 3)
    .map(v => v.waller_definition);

  const fallbackDefs = ['to go', 'to come', 'morning', 'night', 'station', 'friend'];
  while (distractors.length < 3) {
    const fallback =
      fallbackDefs[Math.floor(Math.random() * fallbackDefs.length)];
    if (fallback !== correctAnswer && !distractors.includes(fallback)) {
      distractors.push(fallback);
    }
  }

  const options = shuffleArray([correctAnswer, ...distractors]);

  return {
    id: `vc_q_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    entry: target,
    prompt: target.kanji || target.kana,
    promptReading: target.kanji ? target.kana : '',
    options,
    correctAnswer,
  };
}
