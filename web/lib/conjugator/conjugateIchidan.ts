import * as wanakana from 'wanakana';
import type { ConjugationForm, VerbInfo } from './types';
import { CONJUGATION_FORMS } from './conjugationForms';

export function getIchidanStem(verb: VerbInfo): string {
  return verb.stem;
}

function createForm(
  id: string,
  hiragana: string,
  kanji: string = hiragana,
): ConjugationForm {
  const formDef = CONJUGATION_FORMS.find(f => f.id === id);
  if (!formDef) {
    throw new Error(`Unknown form ID: ${id}`);
  }

  return {
    id,
    name: formDef.name,
    nameJapanese: formDef.nameJa,
    kanji,
    hiragana,
    romaji: wanakana.toRomaji(hiragana),
    formality: formDef.formality,
    category: formDef.category,
  };
}

export function conjugateIchidan(verb: VerbInfo): ConjugationForm[] {
  if (verb.type !== 'ichidan') {
    throw new Error('conjugateIchidan called with non-Ichidan verb');
  }

  const forms: ConjugationForm[] = [];
  const stem = getIchidanStem(verb);

  // Basic
  forms.push(createForm('dictionary', verb.dictionaryForm));
  forms.push(createForm('te', stem + 'て'));

  // Polite
  forms.push(createForm('masu', stem + 'ます'));
  forms.push(createForm('masen', stem + 'ません'));
  forms.push(createForm('mashita', stem + 'ました'));
  forms.push(createForm('masen-deshita', stem + 'ませんでした'));

  // Negative
  forms.push(createForm('nai', stem + 'ない'));
  forms.push(createForm('nakatta', stem + 'なかった'));

  // Past
  forms.push(createForm('ta', stem + 'た'));

  // Volitional
  forms.push(createForm('volitional-plain', stem + 'よう'));
  forms.push(createForm('volitional-polite', stem + 'ましょう'));

  // Potential (traditional られる)
  forms.push(createForm('potential-plain', stem + 'られる'));
  forms.push(createForm('potential-polite', stem + 'られます'));
  forms.push(createForm('potential-negative', stem + 'られない'));

  // Passive
  forms.push(createForm('passive-plain', stem + 'られる'));
  forms.push(createForm('passive-polite', stem + 'られます'));

  // Causative
  forms.push(createForm('causative-plain', stem + 'させる'));
  forms.push(createForm('causative-polite', stem + 'させます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', stem + 'させられる'));
  forms.push(createForm('causative-passive-polite', stem + 'させられます'));

  // Imperative
  forms.push(createForm('imperative-plain', stem + 'ろ'));
  forms.push(createForm('imperative-polite', stem + 'てください'));
  forms.push(createForm('imperative-negative', verb.dictionaryForm + 'な'));

  // Conditional
  forms.push(createForm('conditional-ba', stem + 'れば'));
  forms.push(createForm('conditional-tara', stem + 'たら'));

  return forms;
}
