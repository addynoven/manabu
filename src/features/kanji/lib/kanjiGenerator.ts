import type { KanjiEntry, KanjiQuestion } from '../models/kanji.model';
import { shuffleArray } from '../../kana/lib/kanaGenerator';

/**
 * Extracts the kana portion from a reading stored as "romaji カナ"
 * (e.g. "chou チョウ" → "チョウ", "hi ひ" → "ひ").
 * Falls back to the full string if there is no space separator.
 */
export function extractKana(reading: string): string {
  if (!reading) return '';
  const spaceIdx = reading.indexOf(' ');
  if (spaceIdx === -1) return reading; // already pure kana or empty
  return reading.slice(spaceIdx + 1).trim();
}

export function generateKanjiQuestion(pool: KanjiEntry[]): KanjiQuestion {
  if (pool.length === 0) {
    throw new Error('Kanji pool is empty');
  }

  const target = pool[Math.floor(Math.random() * pool.length)];
  const correctAnswer = target.meanings[0] || 'Unknown';

  const otherEntries = pool.filter(k => k.id !== target.id);
  const distractors = shuffleArray(otherEntries)
    .slice(0, 3)
    .map(k => k.meanings[0] || 'Other');

  // Fallback distractors if pool is too small
  const fallbackMeanings = ['water', 'fire', 'tree', 'gold', 'earth', 'sky', 'person'];
  while (distractors.length < 3) {
    const fallback =
      fallbackMeanings[Math.floor(Math.random() * fallbackMeanings.length)];
    if (fallback !== correctAnswer && !distractors.includes(fallback)) {
      distractors.push(fallback);
    }
  }

  const options = shuffleArray([correctAnswer, ...distractors]);

  // rawReading is stored as "romaji カナ" — keep full for display, extract kana for TTS
  const rawReading = target.onyomi[0] || target.kunyomi[0] || '';
  const kanaReading = extractKana(rawReading);

  return {
    id: `kj_q_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    kanji: target,
    prompt: target.kanjiChar,
    promptSub: rawReading ? `Reading: ${rawReading}` : 'Select Meaning',
    ttsText: kanaReading || target.kanjiChar, // pure kana for TTS — never romaji
    options,
    correctAnswer,
  };
}
