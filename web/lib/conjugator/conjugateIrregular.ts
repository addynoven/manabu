import * as wanakana from 'wanakana';
import type { ConjugationForm, VerbInfo } from './types';
import { CONJUGATION_FORMS } from './conjugationForms';

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

function conjugateSuru(verb: VerbInfo): ConjugationForm[] {
  const forms: ConjugationForm[] = [];
  const prefix = verb.compoundPrefix || '';

  // Basic
  forms.push(createForm('dictionary', prefix + 'する'));
  forms.push(createForm('te', prefix + 'して'));

  // Polite
  forms.push(createForm('masu', prefix + 'します'));
  forms.push(createForm('masen', prefix + 'しません'));
  forms.push(createForm('mashita', prefix + 'しました'));
  forms.push(createForm('masen-deshita', prefix + 'しませんでした'));

  // Negative
  forms.push(createForm('nai', prefix + 'しない'));
  forms.push(createForm('nakatta', prefix + 'しなかった'));

  // Past
  forms.push(createForm('ta', prefix + 'した'));

  // Volitional
  forms.push(createForm('volitional-plain', prefix + 'しよう'));
  forms.push(createForm('volitional-polite', prefix + 'しましょう'));

  // Potential
  forms.push(createForm('potential-plain', prefix + 'できる'));
  forms.push(createForm('potential-polite', prefix + 'できます'));
  forms.push(createForm('potential-negative', prefix + 'できない'));

  // Passive
  forms.push(createForm('passive-plain', prefix + 'される'));
  forms.push(createForm('passive-polite', prefix + 'されます'));

  // Causative
  forms.push(createForm('causative-plain', prefix + 'させる'));
  forms.push(createForm('causative-polite', prefix + 'させます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', prefix + 'させられる'));
  forms.push(createForm('causative-passive-polite', prefix + 'させられます'));

  // Imperative
  forms.push(createForm('imperative-plain', prefix + 'しろ'));
  forms.push(createForm('imperative-polite', prefix + 'してください'));
  forms.push(createForm('imperative-negative', prefix + 'するな'));

  // Conditional
  forms.push(createForm('conditional-ba', prefix + 'すれば'));
  forms.push(createForm('conditional-tara', prefix + 'したら'));

  return forms;
}

function conjugateKuru(verb: VerbInfo): ConjugationForm[] {
  const forms: ConjugationForm[] = [];
  const prefix = verb.compoundPrefix || '';

  // Basic
  forms.push(createForm('dictionary', prefix + 'くる', prefix + '来る'));
  forms.push(createForm('te', prefix + 'きて', prefix + '来て'));

  // Polite
  forms.push(createForm('masu', prefix + 'きます', prefix + '来ます'));
  forms.push(createForm('masen', prefix + 'きません', prefix + '来ません'));
  forms.push(createForm('mashita', prefix + 'きました', prefix + '来ました'));
  forms.push(createForm('masen-deshita', prefix + 'きませんでした', prefix + '来ませんでした'));

  // Negative
  forms.push(createForm('nai', prefix + 'こない', prefix + '来ない'));
  forms.push(createForm('nakatta', prefix + 'こなかった', prefix + '来なかった'));

  // Past
  forms.push(createForm('ta', prefix + 'きた', prefix + '来た'));

  // Volitional
  forms.push(createForm('volitional-plain', prefix + 'こよう', prefix + '来よう'));
  forms.push(createForm('volitional-polite', prefix + 'きましょう', prefix + '来ましょう'));

  // Potential
  forms.push(createForm('potential-plain', prefix + 'こられる', prefix + '来られる'));
  forms.push(createForm('potential-polite', prefix + 'こられます', prefix + '来られます'));
  forms.push(createForm('potential-negative', prefix + 'こられない', prefix + '来られない'));

  // Passive
  forms.push(createForm('passive-plain', prefix + 'こられる', prefix + '来られる'));
  forms.push(createForm('passive-polite', prefix + 'こられます', prefix + '来られます'));

  // Causative
  forms.push(createForm('causative-plain', prefix + 'こさせる', prefix + '来させる'));
  forms.push(createForm('causative-polite', prefix + 'こさせます', prefix + '来させます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', prefix + 'こさせられる', prefix + '来させられる'));
  forms.push(createForm('causative-passive-polite', prefix + 'こさせられます', prefix + '来させられます'));

  // Imperative
  forms.push(createForm('imperative-plain', prefix + 'こい', prefix + '来い'));
  forms.push(createForm('imperative-polite', prefix + 'きてください', prefix + '来てください'));
  forms.push(createForm('imperative-negative', prefix + 'くるな', prefix + '来るな'));

  // Conditional
  forms.push(createForm('conditional-ba', prefix + 'くれば', prefix + '来れば'));
  forms.push(createForm('conditional-tara', prefix + 'きたら', prefix + '来たら'));

  return forms;
}

function conjugateAru(_verb: VerbInfo): ConjugationForm[] {
  const forms: ConjugationForm[] = [];

  // Basic
  forms.push(createForm('dictionary', 'ある'));
  forms.push(createForm('te', 'あって'));

  // Polite
  forms.push(createForm('masu', 'あります'));
  forms.push(createForm('masen', 'ありません'));
  forms.push(createForm('mashita', 'ありました'));
  forms.push(createForm('masen-deshita', 'ありませんでした'));

  // Negative - unique: ない
  forms.push(createForm('nai', 'ない'));
  forms.push(createForm('nakatta', 'なかった'));

  // Past
  forms.push(createForm('ta', 'あった'));

  // Volitional
  forms.push(createForm('volitional-plain', 'あろう'));
  forms.push(createForm('volitional-polite', 'ありましょう'));

  // Potential
  forms.push(createForm('potential-plain', 'ありえる'));
  forms.push(createForm('potential-polite', 'ありえます'));
  forms.push(createForm('potential-negative', 'ありえない'));

  // Passive
  forms.push(createForm('passive-plain', 'あられる'));
  forms.push(createForm('passive-polite', 'あられます'));

  // Causative
  forms.push(createForm('causative-plain', 'あらせる'));
  forms.push(createForm('causative-polite', 'あらせます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', 'あらせられる'));
  forms.push(createForm('causative-passive-polite', 'あらせられます'));

  // Imperative
  forms.push(createForm('imperative-plain', 'あれ'));
  forms.push(createForm('imperative-polite', 'あってください'));
  forms.push(createForm('imperative-negative', 'あるな'));

  // Conditional
  forms.push(createForm('conditional-ba', 'あれば'));
  forms.push(createForm('conditional-tara', 'あったら'));

  return forms;
}

function conjugateIku(_verb: VerbInfo): ConjugationForm[] {
  const forms: ConjugationForm[] = [];

  // Basic - irregular te-form 行って
  forms.push(createForm('dictionary', 'いく', '行く'));
  forms.push(createForm('te', 'いって', '行って'));

  // Polite
  forms.push(createForm('masu', 'いきます', '行きます'));
  forms.push(createForm('masen', 'いきません', '行きません'));
  forms.push(createForm('mashita', 'いきました', '行きました'));
  forms.push(createForm('masen-deshita', 'いきませんでした', '行きませんでした'));

  // Negative
  forms.push(createForm('nai', 'いかない', '行かない'));
  forms.push(createForm('nakatta', 'いかなかった', '行かなかった'));

  // Past - irregular ta-form 行った
  forms.push(createForm('ta', 'いった', '行った'));

  // Volitional
  forms.push(createForm('volitional-plain', 'いこう', '行こう'));
  forms.push(createForm('volitional-polite', 'いきましょう', '行きましょう'));

  // Potential
  forms.push(createForm('potential-plain', 'いける', '行ける'));
  forms.push(createForm('potential-polite', 'いけます', '行けます'));
  forms.push(createForm('potential-negative', 'いけない', '行けない'));

  // Passive
  forms.push(createForm('passive-plain', 'いかれる', '行かれる'));
  forms.push(createForm('passive-polite', 'いかれます', '行かれます'));

  // Causative
  forms.push(createForm('causative-plain', 'いかせる', '行かせる'));
  forms.push(createForm('causative-polite', 'いかせます', '行かせます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', 'いかせられる', '行かせられる'));
  forms.push(createForm('causative-passive-polite', 'いかせられます', '行かせられます'));

  // Imperative
  forms.push(createForm('imperative-plain', 'いけ', '行け'));
  forms.push(createForm('imperative-polite', 'いってください', '行ってください'));
  forms.push(createForm('imperative-negative', 'いくな', '行くな'));

  // Conditional
  forms.push(createForm('conditional-ba', 'いけば', '行けば'));
  forms.push(createForm('conditional-tara', 'いったら', '行ったら'));

  return forms;
}

function conjugateHonorific(verb: VerbInfo): ConjugationForm[] {
  const forms: ConjugationForm[] = [];
  const stem = verb.stem;

  // Basic
  forms.push(createForm('dictionary', verb.dictionaryForm));
  forms.push(createForm('te', stem + 'って'));

  // Polite - irregular masu: stem + います
  forms.push(createForm('masu', stem + 'います'));
  forms.push(createForm('masen', stem + 'いません'));
  forms.push(createForm('mashita', stem + 'いました'));
  forms.push(createForm('masen-deshita', stem + 'いませんでした'));

  // Negative
  forms.push(createForm('nai', stem + 'らない'));
  forms.push(createForm('nakatta', stem + 'らなかった'));

  // Past
  forms.push(createForm('ta', stem + 'った'));

  // Volitional
  forms.push(createForm('volitional-plain', stem + 'ろう'));
  forms.push(createForm('volitional-polite', stem + 'いましょう'));

  // Potential
  forms.push(createForm('potential-plain', stem + 'れる'));
  forms.push(createForm('potential-polite', stem + 'れます'));
  forms.push(createForm('potential-negative', stem + 'れない'));

  // Passive
  forms.push(createForm('passive-plain', stem + 'られる'));
  forms.push(createForm('passive-polite', stem + 'られます'));

  // Causative
  forms.push(createForm('causative-plain', stem + 'らせる'));
  forms.push(createForm('causative-polite', stem + 'らせます'));

  // Causative-Passive
  forms.push(createForm('causative-passive-plain', stem + 'らせられる'));
  forms.push(createForm('causative-passive-polite', stem + 'らせられます'));

  // Imperative
  forms.push(createForm('imperative-plain', stem + 'い'));
  forms.push(createForm('imperative-polite', stem + 'ってください'));
  forms.push(createForm('imperative-negative', verb.dictionaryForm + 'な'));

  // Conditional
  forms.push(createForm('conditional-ba', stem + 'れば'));
  forms.push(createForm('conditional-tara', stem + 'ったら'));

  return forms;
}

export function conjugateIrregular(verb: VerbInfo): ConjugationForm[] {
  if (verb.type !== 'irregular') {
    throw new Error('conjugateIrregular called with non-irregular verb');
  }

  switch (verb.irregularType) {
    case 'suru':
      return conjugateSuru(verb);
    case 'kuru':
      return conjugateKuru(verb);
    case 'aru':
      return conjugateAru(verb);
    case 'iku':
      return conjugateIku(verb);
    case 'honorific':
      return conjugateHonorific(verb);
    default:
      throw new Error(`Unknown irregular type: ${verb.irregularType}`);
  }
}
