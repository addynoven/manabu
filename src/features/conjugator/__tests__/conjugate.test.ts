import { describe, expect, it } from 'vitest';
import { conjugate } from '../lib/conjugate';

describe('Japanese Verb Conjugator Engine', () => {
  describe('Godan Verbs (五段動詞)', () => {
    it('conjugates ku-ending Godan verb (書く)', () => {
      const res = conjugate('書く');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('godan');
      expect(res.result.verb.ending).toBe('く');

      const forms = res.result.forms;
      const getForm = (id: string) => forms.find(f => f.id === id)?.hiragana;

      expect(getForm('te')).toBe('書いて');
      expect(getForm('masu')).toBe('書きます');
      expect(getForm('nai')).toBe('書かない');
      expect(getForm('ta')).toBe('書いた');
      expect(getForm('volitional-plain')).toBe('書こう');
      expect(getForm('potential-plain')).toBe('書ける');
      expect(getForm('passive-plain')).toBe('書かれる');
      expect(getForm('causative-plain')).toBe('書かせる');
      expect(getForm('imperative-plain')).toBe('書け');
      expect(getForm('conditional-ba')).toBe('書けば');
      expect(getForm('conditional-tara')).toBe('書いたら');
    });

    it('conjugates mu-ending Godan verb (飲む)', () => {
      const res = conjugate('飲む');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('godan');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;

      expect(getForm('te')).toBe('飲んで');
      expect(getForm('masu')).toBe('飲みます');
      expect(getForm('nai')).toBe('飲まない');
      expect(getForm('ta')).toBe('飲んだ');
    });

    it('conjugates su-ending Godan verb (話す)', () => {
      const res = conjugate('話す');
      expect(res.success).toBe(true);
      if (!res.success) return;

      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('話して');
      expect(getForm('masu')).toBe('話します');
      expect(getForm('ta')).toBe('話した');
    });

    it('correctly classifies and conjugates false Ichidan (帰る as Godan)', () => {
      const res = conjugate('帰る');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('godan');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('帰って');
      expect(getForm('masu')).toBe('帰ります');
      expect(getForm('nai')).toBe('帰らない');
    });
  });

  describe('Ichidan Verbs (一段動詞)', () => {
    it('conjugates 食べる (taberu)', () => {
      const res = conjugate('食べる');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('ichidan');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;

      expect(getForm('te')).toBe('食べて');
      expect(getForm('masu')).toBe('食べます');
      expect(getForm('nai')).toBe('食べない');
      expect(getForm('ta')).toBe('食べた');
      expect(getForm('volitional-plain')).toBe('食べよう');
      expect(getForm('potential-plain')).toBe('食べられる');
      expect(getForm('passive-plain')).toBe('食べられる');
      expect(getForm('causative-plain')).toBe('食べさせる');
      expect(getForm('imperative-plain')).toBe('食べろ');
      expect(getForm('conditional-ba')).toBe('食べれば');
    });

    it('conjugates 見る (miru)', () => {
      const res = conjugate('見る');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('ichidan');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('見て');
      expect(getForm('masu')).toBe('見ます');
      expect(getForm('nai')).toBe('見ない');
    });
  });

  describe('Irregular Verbs (不規則動詞)', () => {
    it('conjugates する (suru)', () => {
      const res = conjugate('する');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('irregular');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;

      expect(getForm('te')).toBe('して');
      expect(getForm('masu')).toBe('します');
      expect(getForm('nai')).toBe('しない');
      expect(getForm('ta')).toBe('した');
      expect(getForm('volitional-plain')).toBe('しよう');
      expect(getForm('potential-plain')).toBe('できる');
      expect(getForm('passive-plain')).toBe('される');
      expect(getForm('causative-plain')).toBe('させる');
      expect(getForm('imperative-plain')).toBe('しろ');
      expect(getForm('conditional-ba')).toBe('すれば');
    });

    it('conjugates 来る (kuru)', () => {
      const res = conjugate('来る');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('irregular');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;

      expect(getForm('te')).toBe('きて');
      expect(getForm('masu')).toBe('きます');
      expect(getForm('nai')).toBe('こない');
      expect(getForm('ta')).toBe('きた');
      expect(getForm('volitional-plain')).toBe('こよう');
      expect(getForm('imperative-plain')).toBe('こい');
      expect(getForm('conditional-ba')).toBe('くれば');
    });

    it('conjugates ある (aru) with unique negative ない', () => {
      const res = conjugate('ある');
      expect(res.success).toBe(true);
      if (!res.success) return;

      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('あって');
      expect(getForm('masu')).toBe('あります');
      expect(getForm('nai')).toBe('ない'); // special
      expect(getForm('nakatta')).toBe('なかった');
    });

    it('conjugates 行く (iku) with irregular te/ta forms (行って, 行った)', () => {
      const res = conjugate('行く');
      expect(res.success).toBe(true);
      if (!res.success) return;

      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('いって');
      expect(getForm('ta')).toBe('いった');
      expect(getForm('masu')).toBe('いきます');
    });

    it('conjugates compound suru verbs (勉強する)', () => {
      const res = conjugate('勉強する');
      expect(res.success).toBe(true);
      if (!res.success) return;

      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('te')).toBe('勉強して');
      expect(getForm('masu')).toBe('勉強します');
      expect(getForm('potential-plain')).toBe('勉強できる');
    });
  });

  describe('Romaji Input Normalization', () => {
    it('automatically converts Romaji input to Kana and conjugates', () => {
      const res = conjugate('taberu');
      expect(res.success).toBe(true);
      if (!res.success) return;

      expect(res.result.verb.type).toBe('ichidan');
      const getForm = (id: string) => res.result.forms.find(f => f.id === id)?.hiragana;
      expect(getForm('masu')).toBe('たべます');
      expect(getForm('te')).toBe('たべて');
    });
  });
});
