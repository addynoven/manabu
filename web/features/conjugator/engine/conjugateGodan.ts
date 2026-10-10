import * as wanakana from 'wanakana';
import type { ConjugationForm, VerbInfo } from '../models/types';
import { CONJUGATION_FORMS } from './conjugationForms';
import { GODAN_ENDINGS } from '../models/verbData';

export type GodanGrade = 'a' | 'i' | 'u' | 'e' | 'o' | 'te' | 'ta';

export function getGodanStem(verb: VerbInfo, grade: GodanGrade): string {
  const endingMap = GODAN_ENDINGS[verb.ending];
  if (!endingMap) {
    throw new Error(`Unknown Godan ending: ${verb.ending}`);
  }

  if (grade === 'u') {
    return verb.dictionaryForm;
  }

  if (grade === 'te' || grade === 'ta') {
    return verb.stem + endingMap[grade];
  }

  return verb.stem + endingMap[grade];
}

function isIkuVerb(verb: VerbInfo): boolean {
  return (
    verb.dictionaryForm === '行く' ||
    verb.dictionaryForm === 'いく' ||
    verb.irregularType === 'iku'
  );
}

const U_ONBIN_DICTIONARY_FORMS = new Set([
  '問う', '訪う', 'とう',
  '請う', '乞う', '恋う', 'こう',
  '給う', '賜う', 'たまう',
  '厭う', 'いとう',
]);

function isUOnbinVerb(verb: VerbInfo): boolean {
  return U_ONBIN_DICTIONARY_FORMS.has(verb.dictionaryForm);
}

export function getGodanTeForm(verb: VerbInfo): string {
  if (isIkuVerb(verb)) {
    return verb.stem + 'って';
  }
  if (isUOnbinVerb(verb)) {
    return verb.stem + 'うて';
  }
  return getGodanStem(verb, 'te');
}

export function getGodanTaForm(verb: VerbInfo): string {
  if (isIkuVerb(verb)) {
    return verb.stem + 'った';
  }
  if (isUOnbinVerb(verb)) {
    return verb.stem + 'うた';
  }
  return getGodanStem(verb, 'ta');
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

export function conjugateGodan(verb: VerbInfo): ConjugationForm[] {
  if (verb.type !== 'godan') {
    throw new Error('conjugateGodan called with non-Godan verb');
  }

  const forms: ConjugationForm[] = [];

  forms.push(createForm('dictionary', verb.dictionaryForm));
  forms.push(createForm('te', getGodanTeForm(verb)));

  const masuStem = getGodanStem(verb, 'i');
  forms.push(createForm('masu', masuStem + 'ます'));
  forms.push(createForm('masen', masuStem + 'ません'));
  forms.push(createForm('mashita', masuStem + 'ました'));
  forms.push(createForm('masen-deshita', masuStem + 'ませんでした'));

  const naiStem = getGodanStem(verb, 'a');
  forms.push(createForm('nai', naiStem + 'ない'));
  forms.push(createForm('nakatta', naiStem + 'なかった'));

  forms.push(createForm('ta', getGodanTaForm(verb)));

  const volitionalStem = getGodanStem(verb, 'o');
  forms.push(createForm('volitional-plain', volitionalStem + 'う'));
  forms.push(createForm('volitional-polite', masuStem + 'ましょう'));

  const potentialStem = getGodanStem(verb, 'e');
  forms.push(createForm('potential-plain', potentialStem + 'る'));
  forms.push(createForm('potential-polite', potentialStem + 'ます'));
  forms.push(createForm('potential-negative', potentialStem + 'ない'));

  forms.push(createForm('passive-plain', naiStem + 'れる'));
  forms.push(createForm('passive-polite', naiStem + 'れます'));

  forms.push(createForm('causative-plain', naiStem + 'せる'));
  forms.push(createForm('causative-polite', naiStem + 'せます'));

  forms.push(createForm('causative-passive-plain', naiStem + 'せられる'));
  forms.push(createForm('causative-passive-polite', naiStem + 'せられます'));

  forms.push(createForm('imperative-plain', potentialStem));
  forms.push(createForm('imperative-polite', getGodanTeForm(verb) + 'ください'));
  forms.push(createForm('imperative-negative', verb.dictionaryForm + 'な'));

  forms.push(createForm('conditional-ba', potentialStem + 'ば'));
  forms.push(createForm('conditional-tara', getGodanTaForm(verb) + 'ら'));

  return forms;
}
