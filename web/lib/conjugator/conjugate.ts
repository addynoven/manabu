import * as wanakana from 'wanakana';
import type {
  ConjugationError,
  ConjugationErrorCode,
  ConjugationForm,
  ConjugationResult,
  VerbInfo,
} from './types';
import { classifyVerb, isJapanese } from './classifyVerb';
import { conjugateGodan } from './conjugateGodan';
import { conjugateIchidan } from './conjugateIchidan';
import { conjugateIrregular } from './conjugateIrregular';

function createError(code: ConjugationErrorCode, message: string): ConjugationError {
  return { code, message };
}

export type ConjugateResult =
  | { success: true; result: ConjugationResult }
  | { success: false; error: ConjugationError };

function getConjugationFunction(
  verbInfo: VerbInfo,
): (verb: VerbInfo) => ConjugationForm[] {
  switch (verbInfo.type) {
    case 'godan':
      return conjugateGodan;
    case 'ichidan':
      return conjugateIchidan;
    case 'irregular':
      return conjugateIrregular;
    default:
      throw new Error(`Unknown verb type: ${(verbInfo as VerbInfo).type}`);
  }
}

/**
 * Normalizes input: if latin characters (Romaji) are provided, convert to Hiragana.
 */
export function normalizeVerbInput(rawInput: string): string {
  const trimmed = rawInput.trim();
  if (!trimmed) return '';

  // If already Japanese, return as is
  if (isJapanese(trimmed)) return trimmed;

  // Convert Romaji to Hiragana (e.g. "taberu" -> "たべる")
  const converted = wanakana.toHiragana(trimmed);
  return converted;
}

export function conjugate(input: string): ConjugateResult {
  if (!input || input.trim().length === 0) {
    return {
      success: false,
      error: createError('EMPTY_INPUT', 'Please enter a Japanese verb'),
    };
  }

  const normalized = normalizeVerbInput(input);

  if (!isJapanese(normalized)) {
    return {
      success: false,
      error: createError(
        'INVALID_CHARACTERS',
        'Please enter a valid Japanese verb in kanji, kana, or romaji',
      ),
    };
  }

  try {
    const verbInfo = classifyVerb(normalized);
    const conjugationFn = getConjugationFunction(verbInfo);
    const forms = conjugationFn(verbInfo);

    const result: ConjugationResult = {
      verb: verbInfo,
      forms,
      timestamp: Date.now(),
    };

    return { success: true, result };
  } catch (error) {
    if (error instanceof Error) {
      const message = error.message;
      if (message.startsWith('EMPTY_INPUT:')) {
        return {
          success: false,
          error: createError('EMPTY_INPUT', message.replace('EMPTY_INPUT: ', '')),
        };
      }
      if (message.startsWith('INVALID_CHARACTERS:')) {
        return {
          success: false,
          error: createError(
            'INVALID_CHARACTERS',
            message.replace('INVALID_CHARACTERS: ', ''),
          ),
        };
      }
      if (message.startsWith('UNKNOWN_VERB:')) {
        return {
          success: false,
          error: createError('UNKNOWN_VERB', message.replace('UNKNOWN_VERB: ', '')),
        };
      }
      return {
        success: false,
        error: createError('CONJUGATION_FAILED', message),
      };
    }
    return {
      success: false,
      error: createError(
        'CONJUGATION_FAILED',
        'An unexpected error occurred during conjugation',
      ),
    };
  }
}
