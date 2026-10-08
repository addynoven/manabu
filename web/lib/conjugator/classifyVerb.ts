import * as wanakana from 'wanakana';
import type { IrregularType, VerbInfo } from './types';
import {
  FALSE_ICHIDAN_VERBS,
  GODAN_ENDING_CHARS,
  GODAN_ENDINGS,
  ICHIDAN_PRECEDING_CHARS,
  IRREGULAR_VERBS,
  KNOWN_ICHIDAN_VERBS,
  KURU_COMPOUND_SUFFIXES,
  SURU_COMPOUND_SUFFIXES,
} from './verbData';

export function isHiragana(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= 0x3040 && code <= 0x309f;
}

export function isKatakana(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= 0x30a0 && code <= 0x30ff;
}

export function isKanji(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 0x4e00 && code <= 0x9faf) ||
    (code >= 0x3400 && code <= 0x4dbf)
  );
}

export function isJapanese(str: string): boolean {
  for (const char of str) {
    if (!isHiragana(char) && !isKatakana(char) && !isKanji(char)) {
      return false;
    }
  }
  return str.length > 0;
}

function getLastChar(str: string): string {
  return str.slice(-1);
}

function getStem(str: string): string {
  return str.slice(0, -1);
}

export function detectSuruCompound(verb: string): string | null {
  for (const suffix of SURU_COMPOUND_SUFFIXES) {
    if (verb.endsWith(suffix) && verb.length > suffix.length) {
      return verb.slice(0, -suffix.length);
    }
  }
  return null;
}

export function detectKuruCompound(verb: string): string | null {
  for (const suffix of KURU_COMPOUND_SUFFIXES) {
    if (verb.endsWith(suffix) && verb.length > suffix.length) {
      return verb.slice(0, -suffix.length);
    }
  }
  return null;
}

function getIrregularType(verb: string): IrregularType | null {
  return IRREGULAR_VERBS[verb] || null;
}

function looksLikeIchidan(verb: string): boolean {
  if (verb.length < 2) return false;

  const lastChar = getLastChar(verb);
  if (lastChar !== 'る') return false;

  const secondLastChar = verb.slice(-2, -1);

  if (isHiragana(secondLastChar)) {
    return ICHIDAN_PRECEDING_CHARS.includes(secondLastChar);
  }

  if (KNOWN_ICHIDAN_VERBS.includes(verb)) {
    return true;
  }

  if (FALSE_ICHIDAN_VERBS.includes(verb)) {
    return false;
  }

  return false;
}

function isActuallyIchidan(verb: string): boolean {
  if (FALSE_ICHIDAN_VERBS.includes(verb)) {
    return false;
  }

  if (KNOWN_ICHIDAN_VERBS.includes(verb)) {
    return true;
  }

  return true;
}

function isGodanVerb(verb: string): boolean {
  const lastChar = getLastChar(verb);
  return GODAN_ENDING_CHARS.includes(lastChar);
}

export function classifyVerb(input: string): VerbInfo {
  if (!input || input.trim().length === 0) {
    throw new Error('EMPTY_INPUT: Please enter a Japanese verb');
  }

  const verb = input.trim();

  if (!isJapanese(verb)) {
    throw new Error(
      'INVALID_CHARACTERS: Please enter a valid Japanese verb using hiragana, katakana, or kanji',
    );
  }

  // 1. Check for compound verbs (勉強する, 持ってくる)
  const suruPrefix = detectSuruCompound(verb);
  if (suruPrefix !== null) {
    const suruPart = verb.slice(suruPrefix.length);
    return {
      dictionaryForm: verb,
      reading: verb,
      romaji: wanakana.toRomaji(verb),
      type: 'irregular',
      stem: suruPrefix,
      ending: suruPart,
      irregularType: 'suru',
      compoundPrefix: suruPrefix,
    };
  }

  const kuruPrefix = detectKuruCompound(verb);
  if (kuruPrefix !== null) {
    const kuruPart = verb.slice(kuruPrefix.length);
    return {
      dictionaryForm: verb,
      reading: verb,
      romaji: wanakana.toRomaji(verb),
      type: 'irregular',
      stem: kuruPrefix,
      ending: kuruPart,
      irregularType: 'kuru',
      compoundPrefix: kuruPrefix,
    };
  }

  // 2. Check for irregular verbs (する, 来る, ある, 行く, honorifics)
  const irregularType = getIrregularType(verb);
  if (irregularType !== null) {
    return {
      dictionaryForm: verb,
      reading: verb,
      romaji: wanakana.toRomaji(verb),
      type: 'irregular',
      stem: getStem(verb),
      ending: getLastChar(verb),
      irregularType,
    };
  }

  // 3. Check for Ichidan verbs
  if (looksLikeIchidan(verb) && isActuallyIchidan(verb)) {
    return {
      dictionaryForm: verb,
      reading: verb,
      romaji: wanakana.toRomaji(verb),
      type: 'ichidan',
      stem: getStem(verb),
      ending: 'る',
    };
  }

  // 4. Check for Godan verbs
  if (isGodanVerb(verb)) {
    return {
      dictionaryForm: verb,
      reading: verb,
      romaji: wanakana.toRomaji(verb),
      type: 'godan',
      stem: getStem(verb),
      ending: getLastChar(verb),
    };
  }

  throw new Error(
    'UNKNOWN_VERB: This verb is not recognized. Please check the spelling or try the dictionary form',
  );
}

export function getGodanMap(
  ending: string,
): (typeof GODAN_ENDINGS)[string] | null {
  return GODAN_ENDINGS[ending] || null;
}
