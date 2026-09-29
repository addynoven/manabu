import type { GodanConjugationMap, IrregularType } from '../types';

export const IRREGULAR_VERBS: Record<string, IrregularType> = {
  する: 'suru',
  来る: 'kuru',
  くる: 'kuru',
  ある: 'aru',
  行く: 'iku',
  いく: 'iku',
  くださる: 'honorific',
  なさる: 'honorific',
  いらっしゃる: 'honorific',
  おっしゃる: 'honorific',
  ござる: 'honorific',
};

export const SURU_COMPOUND_SUFFIXES = ['する'];
export const KURU_COMPOUND_SUFFIXES = ['くる', '来る'];

export const GODAN_ENDINGS: Record<string, GodanConjugationMap> = {
  う: { a: 'わ', i: 'い', e: 'え', o: 'お', te: 'って', ta: 'った' },
  く: { a: 'か', i: 'き', e: 'け', o: 'こ', te: 'いて', ta: 'いた' },
  ぐ: { a: 'が', i: 'ぎ', e: 'げ', o: 'ご', te: 'いで', ta: 'いだ' },
  す: { a: 'さ', i: 'し', e: 'せ', o: 'そ', te: 'して', ta: 'した' },
  つ: { a: 'た', i: 'ち', e: 'て', o: 'と', te: 'って', ta: 'った' },
  ぬ: { a: 'な', i: 'に', e: 'ね', o: 'の', te: 'んで', ta: 'んだ' },
  ぶ: { a: 'ば', i: 'び', e: 'べ', o: 'ぼ', te: 'んで', ta: 'んだ' },
  む: { a: 'ま', i: 'み', e: 'め', o: 'も', te: 'んで', ta: 'んだ' },
  る: { a: 'ら', i: 'り', e: 'れ', o: 'ろ', te: 'って', ta: 'った' },
};

export const GODAN_ENDING_CHARS = Object.keys(GODAN_ENDINGS);

export const ICHIDAN_PRECEDING_CHARS = [
  'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ',
  'え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ', 'げ', 'ぜ', 'で', 'べ', 'ぺ',
];

export const FALSE_ICHIDAN_VERBS: string[] = [
  '要る', 'いる',
  '入る', 'はいる',
  '走る', 'はしる',
  '知る', 'しる',
  '切る', 'きる',
  '帰る', 'かえる',
  '限る', 'かぎる',
  '握る', 'にぎる',
  '参る', 'まいる',
  '散る', 'ちる',
  '混じる', 'まじる',
  '嘲る', 'あざける',
  '滑る', 'すべる',
  '蹴る', 'ける',
  '照る', 'てる',
  '練る', 'ねる',
  '減る', 'へる',
  '焦る', 'あせる',
  '喋る', 'しゃべる',
];

export const KNOWN_ICHIDAN_VERBS: string[] = [
  '見る', 'みる',
  '着る',
  '起きる', 'おきる',
  '降りる', 'おりる',
  '借りる', 'かりる',
  '居る',
  '信じる', 'しんじる',
  '感じる', 'かんじる',
  '落ちる', 'おちる',
  '過ぎる', 'すぎる',
  '生きる', 'いきる',
  '浴びる', 'あびる',
  '食べる', 'たべる',
  '寝る', 'ねる',
  '出る', 'でる',
  '開ける', 'あける',
  '閉める', 'しめる',
  '教える', 'おしえる',
  '覚える', 'おぼえる',
  '答える', 'こたえる',
  '考える', 'かんがえる',
  '変える',
  '始める', 'はじめる',
  '止める', 'とめる',
  '集める', 'あつめる',
  '調べる', 'しらべる',
  '比べる', 'くらべる',
];

export interface VerbPreset {
  verb: string;
  reading: string;
  romaji: string;
  meaning: string;
  type: string;
}

export const POPULAR_VERB_PRESETS: VerbPreset[] = [
  { verb: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'to eat', type: 'Ichidan' },
  { verb: '飲む', reading: 'のむ', romaji: 'nomu', meaning: 'to drink', type: 'Godan' },
  { verb: '行く', reading: 'いく', romaji: 'iku', meaning: 'to go', type: 'Irregular' },
  { verb: '来る', reading: 'くる', romaji: 'kuru', meaning: 'to come', type: 'Irregular' },
  { verb: 'する', reading: 'する', romaji: 'suru', meaning: 'to do', type: 'Irregular' },
  { verb: '勉強する', reading: 'べんきょうする', romaji: 'benkyousuru', meaning: 'to study', type: 'Compound' },
  { verb: '見る', reading: 'みる', romaji: 'miru', meaning: 'to see/watch', type: 'Ichidan' },
  { verb: '話す', reading: 'はなす', romaji: 'hanasu', meaning: 'to speak', type: 'Godan' },
  { verb: '聞く', reading: 'きく', romaji: 'kiku', meaning: 'to hear/listen', type: 'Godan' },
  { verb: '待つ', reading: 'まつ', romaji: 'matsu', meaning: 'to wait', type: 'Godan' },
  { verb: '買う', reading: 'かう', romaji: 'kau', meaning: 'to buy', type: 'Godan' },
  { verb: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: 'to return/go home', type: 'Godan (False Ichidan)' },
];
