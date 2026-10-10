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

export interface FormDefinition {
  id: string;
  category: ConjugationCategory;
  name: string;
  nameJa: string;
  formality: Formality;
}

export interface GodanConjugationMap {
  a: string;
  i: string;
  e: string;
  o: string;
  te: string;
  ta: string;
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
