'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '@/components/AppShell';
import { conjugate, normalizeVerbInput, type ConjugateResult } from '@/lib/conjugator/conjugate';
import {
  Sparkles,
  Search,
  Volume2,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Zap,
  Filter,
} from 'lucide-react';

const PRESET_VERBS = [
  { kanji: '食べる', kana: 'たべる', romaji: 'taberu', meaning: 'to eat', type: 'ichidan' },
  { kanji: '飲む', kana: 'のむ', romaji: 'nomu', meaning: 'to drink', type: 'godan' },
  { kanji: '行く', kana: 'いく', romaji: 'iku', meaning: 'to go', type: 'godan' },
  { kanji: '来る', kana: 'くる', romaji: 'kuru', meaning: 'to come', type: 'irregular' },
  { kanji: 'する', kana: 'する', romaji: 'suru', meaning: 'to do', type: 'irregular' },
  { kanji: '話す', kana: 'はなす', romaji: 'hanasu', meaning: 'to speak', type: 'godan' },
  { kanji: '見る', kana: 'みる', romaji: 'miru', meaning: 'to see/watch', type: 'ichidan' },
  { kanji: '書く', kana: 'かく', romaji: 'kaku', meaning: 'to write', type: 'godan' },
];

export default function ConjugatorPage() {
  const [inputVerb, setInputVerb] = useState('食べる');
  const [activeCategory, setActiveCategory] = useState<'all' | 'polite' | 'plain' | 'te' | 'potential' | 'conditional'>('all');

  const conjugationData = useMemo<ConjugateResult>(() => {
    return conjugate(inputVerb);
  }, [inputVerb]);

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredForms = useMemo(() => {
    if (!conjugationData.success) return [];
    const forms = conjugationData.result.forms;
    if (activeCategory === 'all') return forms;
    if (activeCategory === 'polite') return forms.filter(f => f.name.toLowerCase().includes('polite') || f.name.toLowerCase().includes('masu'));
    if (activeCategory === 'plain') return forms.filter(f => f.name.toLowerCase().includes('plain') || f.name.toLowerCase().includes('dictionary'));
    if (activeCategory === 'te') return forms.filter(f => f.name.toLowerCase().includes('te') || f.name.toLowerCase().includes('ta '));
    if (activeCategory === 'potential') return forms.filter(f => f.name.toLowerCase().includes('potential') || f.name.toLowerCase().includes('passive') || f.name.toLowerCase().includes('causative'));
    if (activeCategory === 'conditional') return forms.filter(f => f.name.toLowerCase().includes('conditional') || f.name.toLowerCase().includes('volitional') || f.name.toLowerCase().includes('imperative'));
    return forms;
  }, [conjugationData, activeCategory]);

  return (
    <AppShell>
      <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Header matching Stitch Screen #7 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-red-950/80 text-red-400 border border-red-800/60 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} />
                Grammar Workstation
              </span>
              <span className="text-xs text-neutral-400 font-mono">15+ Verb Tenses</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3 font-serif">
              <span>動詞活用</span>
              <span className="text-neutral-400 font-sans font-medium text-2xl">Verb Conjugator</span>
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Instant rule-based inflection engine for Ichidan, Godan, and Irregular verbs. Supports Kanji, Hiragana, or Romaji typing.
            </p>
          </div>

          {/* Quick Presets Bar */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-neutral-500 mr-1 flex items-center gap-1">
              <Zap size={12} /> Presets:
            </span>
            {PRESET_VERBS.slice(0, 5).map((preset) => (
              <button
                key={preset.kanji}
                onClick={() => setInputVerb(preset.kanji)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  inputVerb === preset.kanji
                    ? 'bg-red-600 text-white font-bold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {preset.kanji} ({preset.meaning})
              </button>
            ))}
          </div>
        </div>

        {/* Search & Inspector Input Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
              <input
                type="text"
                value={inputVerb}
                onChange={(e) => setInputVerb(e.target.value)}
                placeholder="Type a verb in Kanji (食べる), Kana (たべる), or Romaji (taberu)..."
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl pl-11 pr-4 py-3 text-lg text-white placeholder-neutral-500 font-medium transition outline-none"
              />
            </div>
            <button
              onClick={() => {
                if (conjugationData.success) {
                  speak(conjugationData.result.verb.dictionaryForm);
                }
              }}
              disabled={!conjugationData.success}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 disabled:opacity-40 disabled:pointer-events-none rounded-xl text-sm font-semibold border border-neutral-700 transition"
            >
              <Volume2 size={18} />
              <span>Listen</span>
            </button>
          </div>

          {/* Verb Diagnostic Banner */}
          {conjugationData.success ? (
            <div className="mt-5 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-950/60 border border-red-800/60 flex items-center justify-center text-2xl font-bold text-red-200 font-serif shadow-inner">
                  {conjugationData.result.verb.dictionaryForm.slice(0, 2)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">
                      {conjugationData.result.verb.dictionaryForm}
                    </span>
                    <span className="text-sm text-neutral-400 font-mono">
                      ({conjugationData.result.verb.reading || conjugationData.result.verb.dictionaryForm})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {conjugationData.result.verb.type.toUpperCase()} GROUP
                    </span>
                    {conjugationData.result.verb.meaning && (
                      <span className="text-xs text-neutral-400">
                        {conjugationData.result.verb.meaning}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800">
                {(['all', 'polite', 'plain', 'te', 'potential', 'conditional'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                      activeCategory === cat
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-2 text-sm text-amber-400 bg-amber-950/40 border border-amber-900/50 p-3 rounded-xl">
              <AlertCircle size={16} />
              <span>{conjugationData.error.message}</span>
            </div>
          )}
        </div>

        {/* 15+ Conjugation Tenses Grid */}
        {conjugationData.success && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-red-500" />
                Conjugation Forms Table ({filteredForms.length} Forms)
              </h2>
              <span className="text-xs text-neutral-400">Click speaker icon to listen to pronunciation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredForms.map((form) => (
                <div
                  key={form.id}
                  className="bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 rounded-xl p-4.5 transition group hover:shadow-lg hover:shadow-black/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                          {form.name}
                        </span>
                        <span className="text-[11px] text-neutral-500 font-serif">
                          {form.nameJapanese}
                        </span>
                      </div>
                      <button
                        onClick={() => speak(form.kanji || form.hiragana)}
                        className="p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-lg transition"
                        title="Listen"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>

                    <div className="text-xl font-bold text-white font-serif tracking-wide group-hover:text-red-400 transition">
                      {form.kanji}
                    </div>
                    {form.hiragana && form.hiragana !== form.kanji && (
                      <div className="text-xs text-neutral-400 font-mono mt-0.5">
                        {form.hiragana}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-medium font-mono">
                      {form.romaji}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 capitalize">
                      {form.formality}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
