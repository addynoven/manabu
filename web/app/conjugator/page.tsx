'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/components/StitchHeader';
import { conjugate, type ConjugateResult } from '@/lib/conjugator/conjugate';

const PRESET_VERBS = [
  { kanji: '食べる', kana: 'たべる', romaji: 'taberu', meaning: 'to eat', type: 'ichidan' },
  { kanji: '行く', kana: 'いく', romaji: 'iku', meaning: 'to go', type: 'godan' },
  { kanji: '話す', kana: 'はなす', romaji: 'hanasu', meaning: 'to speak', type: 'godan' },
  { kanji: '来る', kana: 'くる', romaji: 'kuru', meaning: 'to come', type: 'irregular' },
  { kanji: 'する', kana: 'する', romaji: 'suru', meaning: 'to do', type: 'irregular' },
  { kanji: '飲む', kana: 'のむ', romaji: 'nomu', meaning: 'to drink', type: 'godan' },
  { kanji: '泳ぐ', kana: 'およぐ', romaji: 'oyogu', meaning: 'to swim', type: 'godan' },
  { kanji: '待つ', kana: 'まつ', romaji: 'matsu', meaning: 'to wait', type: 'godan' },
];

export default function ConjugatorPage() {
  const [inputVerb, setInputVerb] = useState('食べる');
  const [formality, setFormality] = useState<'plain' | 'polite'>('plain');
  const [polarity, setPolarity] = useState<'affirmative' | 'negative'>('affirmative');
  const [tense, setTense] = useState<'non-past' | 'past'>('non-past');
  const [showFurigana, setShowFurigana] = useState(true);
  const [showPitchAccent, setShowPitchAccent] = useState(true);
  const [audioAutoplay, setAudioAutoplay] = useState(false);

  // Drill state
  const [drillAnswer, setDrillAnswer] = useState<string | null>('B');
  const [streakCount, setStreakCount] = useState(12);

  const conjugationData = useMemo<ConjugateResult>(() => {
    return conjugate(inputVerb.trim() || '食べる');
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

  const handleSelectVerb = (verb: string) => {
    setInputVerb(verb);
    if (audioAutoplay) {
      speak(verb);
    }
  };

  // Derive forms or fallbacks from conjugate engine
  const formsMap = useMemo(() => {
    if (!conjugationData.success) return {};
    const map: Record<string, any> = {};
    conjugationData.result.forms.forEach((f) => {
      map[f.id] = f;
    });
    return map;
  }, [conjugationData]);

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary antialiased flex flex-col font-sans select-none custom-scroll">
      <StitchHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col space-y-6">
        {/* SUB-HEADER & VERB QUERY CONTROLLER */}
        <section className="bg-surface-base border border-border-hairline rounded-xl p-5 sm:p-6 space-y-4 shadow-sm">
          {/* Breadcrumb & Top Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2 text-xs text-text-secondary">
              <span>Conjugator Studio</span>
              <span className="text-border-hairline">/</span>
              <span className="text-text-primary font-medium">Interactive Inflection Sandbox</span>
              <span className="bg-surface-muted text-accent-gold border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
                GODAN / ICHIDAN FOCUS
              </span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center space-x-1 text-text-secondary">
                <span className="material-symbols-outlined text-success text-[16px]">verified</span>
                <span>Morphology DB: 12,480 Lexemes</span>
              </span>
              <div className="h-3 w-[1px] bg-border-hairline hidden sm:block"></div>
              <button
                onClick={() => speak(conjugationData.success ? conjugationData.result.verb.dictionaryForm : inputVerb)}
                className="text-primary hover:text-text-primary flex items-center space-x-1 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
                <span>Pronounce</span>
              </button>
            </div>
          </div>

          {/* Title & Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary flex items-center space-x-3 tracking-tight">
                <span>動詞活用 Conjugation Workbench</span>
                <span className="bg-primary-subtle text-primary border border-primary-container/60 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase">
                  Sandbox Live
                </span>
              </h1>
              <p className="text-text-secondary text-sm mt-1">
                Real-time morphological engine across Godan, Ichidan &amp; Irregular verb classes
              </p>
            </div>
            <button
              onClick={() => {
                setDrillAnswer(null);
                setStreakCount((s) => s + 1);
              }}
              className="bg-primary-container hover:bg-primary-hover active:bg-primary-active text-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-md transition-all font-semibold text-sm self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span>Launch Speed Drill</span>
              <span className="bg-primary-active px-1.5 py-0.5 rounded text-[10px] font-mono ml-1">N3-N5</span>
            </button>
          </div>

          {/* Active Verb Input Search Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center pt-1">
            <div className="lg:col-span-6 relative">
              <div className="relative flex items-center">
                <div className="absolute left-3.5 flex items-center pointer-events-none text-text-muted">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                </div>
                <input
                  type="text"
                  value={inputVerb}
                  onChange={(e) => setInputVerb(e.target.value)}
                  placeholder="Enter Kanji, Hiragana or Romaji..."
                  className="w-full bg-background-deep border border-border-hairline focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 rounded-lg pl-11 pr-24 py-2.5 text-text-primary text-lg font-medium transition-all outline-none"
                />
                <div className="absolute right-2.5 flex items-center space-x-1.5">
                  <span className="bg-surface-variant text-text-secondary text-[10px] font-bold px-2 py-1 rounded border border-border-hairline uppercase">
                    かな IME
                  </span>
                  {inputVerb && (
                    <button
                      onClick={() => setInputVerb('')}
                      className="p-1 text-text-muted hover:text-text-primary transition-colors"
                      title="Clear input"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Verb Meta Tag Badges */}
            <div className="lg:col-span-6 flex flex-wrap items-center gap-1.5 text-xs">
              {conjugationData.success ? (
                <>
                  <span className="bg-surface-elevated text-info border border-border-hairline px-2.5 py-1 rounded-md flex items-center space-x-1">
                    <span className="material-symbols-outlined text-[14px]">category</span>
                    <span className="font-medium capitalize">{conjugationData.result.verb.type} Verb</span>
                  </span>
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline px-2.5 py-1 rounded-md">
                    {conjugationData.result.verb.meaning || 'Core Lexeme'}
                  </span>
                  <span className="bg-accent-gold-subtle text-accent-gold border border-accent-gold/40 px-2.5 py-1 rounded-md font-medium">
                    JLPT N5 Core
                  </span>
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline px-2.5 py-1 rounded-md font-mono text-[11px]">
                    Stem: <span className="text-text-primary font-bold">{conjugationData.result.verb.stem || conjugationData.result.verb.dictionaryForm.slice(0, -1)}</span>
                  </span>
                </>
              ) : (
                <span className="text-error text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">error</span>
                  <span>{conjugationData.error.message}</span>
                </span>
              )}
            </div>
          </div>

          {/* Quick-select verb chips row */}
          <div className="flex items-center space-x-2 pt-1 overflow-x-auto pb-1 custom-scroll">
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider flex-shrink-0">
              Quick Verbs:
            </span>
            {PRESET_VERBS.map((preset) => {
              const isSelected = inputVerb === preset.kanji;
              return (
                <button
                  key={preset.kanji}
                  onClick={() => handleSelectVerb(preset.kanji)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex-shrink-0 flex items-center space-x-1 ${
                    isSelected
                      ? 'bg-primary-container text-white border border-primary-container shadow-sm'
                      : 'bg-surface-muted hover:bg-surface-elevated text-text-secondary hover:text-text-primary border border-border-hairline'
                  }`}
                >
                  {isSelected && <span className="text-accent-gold">★</span>}
                  <span>{preset.kanji} ({preset.meaning})</span>
                </button>
              );
            })}
          </div>

          {/* Segmented Control Bar: Formality, Polarity, Tense & Modifiers */}
          <div className="pt-3 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Formality / Politeness Segment */}
              <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
                <button
                  onClick={() => setFormality('plain')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    formality === 'plain'
                      ? 'bg-primary-container text-white font-medium shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Plain / Casual (普通体)
                </button>
                <button
                  onClick={() => setFormality('polite')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    formality === 'polite'
                      ? 'bg-primary-container text-white font-medium shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Polite / 丁寧語 (Masu)
                </button>
              </div>

              {/* Polarity Segment */}
              <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
                <button
                  onClick={() => setPolarity('affirmative')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    polarity === 'affirmative'
                      ? 'bg-surface-elevated text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Affirmative (肯定)
                </button>
                <button
                  onClick={() => setPolarity('negative')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    polarity === 'negative'
                      ? 'bg-surface-elevated text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Negative (否定)
                </button>
              </div>

              {/* Tense Segment */}
              <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
                <button
                  onClick={() => setTense('non-past')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    tense === 'non-past'
                      ? 'bg-surface-elevated text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Non-Past (現在・未来)
                </button>
                <button
                  onClick={() => setTense('past')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    tense === 'past'
                      ? 'bg-surface-elevated text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Past (過去)
                </button>
              </div>
            </div>

            {/* Quick Display Feature Toggles */}
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={showFurigana}
                  onChange={(e) => setShowFurigana(e.target.checked)}
                  className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
                />
                <span>Show Furigana (振仮名)</span>
              </label>
              <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={showPitchAccent}
                  onChange={(e) => setShowPitchAccent(e.target.checked)}
                  className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
                />
                <span>Pitch Accent</span>
              </label>
              <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={audioAutoplay}
                  onChange={(e) => setAudioAutoplay(e.target.checked)}
                  className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
                />
                <span>Audio Autoplay</span>
              </label>
            </div>
          </div>
        </section>

        {/* DUAL-PANE WORKSPACE: Matrix (Left 8-col) + Drill Sandbox (Right 4-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* CENTRAL INFLECTION MATRIX (8 Columns) */}
          <section className="lg:col-span-8 space-y-4">
            {/* Grid Header Bar */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">table_chart</span>
                <h2 className="text-xl font-bold text-text-primary">
                  Inflection Matrix for {inputVerb || 'Verb'}
                </h2>
                <span className="bg-surface-muted text-text-secondary text-[10px] font-bold px-2 py-0.5 rounded border border-border-hairline">
                  {conjugationData.success ? `${conjugationData.result.forms.length} Primary Forms` : '0 Forms'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-text-muted">Stem formula:</span>
                <code className="bg-background-deep border border-border-hairline text-accent-gold px-2 py-0.5 rounded font-mono">
                  [stem] + [suffix]
                </code>
              </div>
            </div>

            {/* Inflection Form Cards (2-column inside 8-col section) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Tile 1: Dictionary / Base */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    辞書形 / Base Form
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['present-plain']?.kanji || inputVerb)}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                      title="Listen Audio"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated" title="Bookmark">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['present-plain']?.kanji || inputVerb}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['present-plain']?.romaji || 'taberu'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>To eat / Plain Non-Past</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Root + る
                  </span>
                </div>
              </div>

              {/* Tile 2: Te-Form */}
              <div className="bg-surface-base hover:bg-surface-muted border border-primary-container/60 rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-subtle text-primary border border-primary-container/40 text-[10px] font-bold px-2 py-0.5 rounded">
                    て形 • 連用形
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => speak(formsMap['te']?.kanji || '食べて')}
                      className="p-1 text-primary-container hover:text-primary rounded hover:bg-surface-elevated"
                      title="Listen Audio"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated" title="Bookmark">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['te']?.kanji || '食べて'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['te']?.romaji || 'tabete'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Connective / Please do</span>
                  </div>
                </div>
                <div className="text-[11px] bg-background-deep/60 px-2 py-1 rounded text-text-secondary border border-border-subtle">
                  例: 「ご飯を食べて学校へ行く」
                </div>
                <div className="pt-1.5 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-primary-container px-2 py-0.5 rounded font-mono border border-border-subtle font-semibold">
                    Stem + て
                  </span>
                </div>
              </div>

              {/* Tile 3: Polite Masu-Form */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-accent-gold border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    ます形 • 丁寧語
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['present-polite']?.kanji || '食べます')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['present-polite']?.kanji || '食べます'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['present-polite']?.romaji || 'tabemasu'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Eat / Will eat (Polite)</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + ます
                  </span>
                </div>
              </div>

              {/* Tile 4: Negative Nai-Form */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    ない形 • 未然形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['negative-plain']?.kanji || '食べない')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['negative-plain']?.kanji || '食べない'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['negative-plain']?.romaji || 'tabenai'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Do not eat (Plain Neg)</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + ない
                  </span>
                </div>
              </div>

              {/* Tile 5: Potential / Capability */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="bg-surface-muted text-info border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                      可能形
                    </span>
                    <span className="text-warning text-[10px] font-mono">ら抜き可用</span>
                  </div>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['potential']?.kanji || '食べられる')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['potential']?.kanji || '食べられる'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['potential']?.romaji || 'taberareru'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Can eat / Able to eat</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + られる
                  </span>
                </div>
              </div>

              {/* Tile 6: Passive */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    受身形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['passive']?.kanji || '食べられる')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['passive']?.kanji || '食べられる'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['passive']?.romaji || 'taberareru'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>To be eaten (Passive)</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + られる
                  </span>
                </div>
              </div>

              {/* Tile 7: Causative */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    使役形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['causative']?.kanji || '食べさせる')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['causative']?.kanji || '食べさせる'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['causative']?.romaji || 'tabesaseru'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Make / let someone eat</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + させる
                  </span>
                </div>
              </div>

              {/* Tile 8: Volitional */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    意向形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['volitional']?.kanji || '食べよう')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['volitional']?.kanji || '食べよう'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['volitional']?.romaji || 'tabeyou'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Let&#39;s eat / Shall we eat</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + よう
                  </span>
                </div>
              </div>

              {/* Tile 9: Conditional */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    仮定形・条件形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['conditional-ba']?.kanji || '食べれば')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['conditional-ba']?.kanji || '食べれば'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['conditional-ba']?.romaji || 'tabereba'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>If/When (one) eats</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + れば
                  </span>
                </div>
              </div>

              {/* Tile 10: Imperative */}
              <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
                    命令形
                  </span>
                  <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(formsMap['imperative']?.kanji || '食べろ')}
                      className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                    >
                      <span className="material-symbols-outlined text-[16px]">volume_up</span>
                    </button>
                    <button className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated">
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
                    {formsMap['imperative']?.kanji || '食べろ'}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
                    <span className="font-mono text-secondary">{formsMap['imperative']?.romaji || 'tabero'}</span>
                    <span className="text-border-hairline">•</span>
                    <span>Eat! (Direct command)</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Formula:</span>
                  <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
                    Stem + ろ
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDEBAR: INTERACTIVE DRILL SANDBOX (4 Columns) */}
          <aside className="lg:col-span-4 bg-surface-base border border-border-hairline rounded-xl p-5 space-y-4 sticky top-20 shadow-sm">
            {/* Drill Panel Header */}
            <div className="flex items-center justify-between border-b border-border-hairline pb-3">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">psychology</span>
                <h3 className="text-base font-bold text-text-primary">
                  Interactive Drill Sandbox
                </h3>
              </div>
              <div className="flex items-center space-x-1 bg-accent-gold-subtle border border-accent-gold/40 px-2.5 py-0.5 rounded-full text-accent-gold text-[10px] font-bold">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                <span>Streak: {streakCount} Perfect</span>
              </div>
            </div>

            {/* Active Question Area */}
            <div className="bg-background-deep border border-border-hairline rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span className="text-accent-gold font-mono uppercase tracking-wider text-[11px]">Item 04 / 10 • JLPT N5</span>
                <span className="bg-surface-variant px-1.5 py-0.5 rounded text-[10px] text-text-primary font-mono">25s Timer</span>
              </div>
              <p className="text-text-primary text-sm font-semibold">
                How do you say <span className="text-primary font-bold">&quot;Could eat&quot;</span> (Potential + Past Tense)?
              </p>
              <div className="bg-surface-muted/60 border border-border-subtle rounded p-2 text-xs text-text-secondary">
                <span className="text-text-muted">Context Hint: </span>
                <span className="font-mono text-text-primary">Ichidan stem [食べ] + Potential [られ] + Past inflection [た]</span>
              </div>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                Select inflection:
              </div>

              {/* Option A */}
              <button
                onClick={() => setDrillAnswer('A')}
                className={`w-full border rounded-lg p-3 flex items-center justify-between text-left transition-colors duration-150 group ${
                  drillAnswer === 'A'
                    ? 'bg-error/20 border-error'
                    : 'bg-background-deep hover:bg-surface-muted border-border-hairline'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded bg-surface-variant text-text-secondary flex items-center justify-center text-xs font-mono">A</span>
                  <div>
                    <div className="text-text-primary font-bold">食べました</div>
                    <div className="text-text-secondary text-[11px] font-mono">tabemashita (Polite past)</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-text-muted opacity-0 group-hover:opacity-100">check_circle</span>
              </button>

              {/* Option B (Correct) */}
              <button
                onClick={() => setDrillAnswer('B')}
                className={`w-full rounded-lg p-3 flex items-center justify-between text-left transition-colors duration-150 shadow-sm relative ${
                  drillAnswer === 'B'
                    ? 'bg-primary-subtle border-2 border-primary-container'
                    : 'bg-background-deep hover:bg-surface-muted border border-border-hairline'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold ${
                    drillAnswer === 'B' ? 'bg-primary-container text-white' : 'bg-surface-variant text-text-secondary'
                  }`}>B</span>
                  <div>
                    <div className="text-text-primary font-bold flex items-center space-x-1.5">
                      <span>食べられた</span>
                      {drillAnswer === 'B' && (
                        <span className="bg-primary-container text-white text-[10px] px-1.5 py-0.2 rounded font-mono">Correct</span>
                      )}
                    </div>
                    <div className="text-primary text-[11px] font-mono">taberareta (Potential past)</div>
                  </div>
                </div>
                {drillAnswer === 'B' && (
                  <div className="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                )}
              </button>

              {/* Option C */}
              <button
                onClick={() => setDrillAnswer('C')}
                className={`w-full border rounded-lg p-3 flex items-center justify-between text-left transition-colors duration-150 group ${
                  drillAnswer === 'C'
                    ? 'bg-error/20 border-error'
                    : 'bg-background-deep hover:bg-surface-muted border-border-hairline'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded bg-surface-variant text-text-secondary flex items-center justify-center text-xs font-mono">C</span>
                  <div>
                    <div className="text-text-primary font-bold">食べさせた</div>
                    <div className="text-text-secondary text-[11px] font-mono">tabesaseta (Causative past)</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-text-muted opacity-0 group-hover:opacity-100">check_circle</span>
              </button>

              {/* Option D */}
              <button
                onClick={() => setDrillAnswer('D')}
                className={`w-full border rounded-lg p-3 flex items-center justify-between text-left transition-colors duration-150 group ${
                  drillAnswer === 'D'
                    ? 'bg-error/20 border-error'
                    : 'bg-background-deep hover:bg-surface-muted border-border-hairline'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded bg-surface-variant text-text-secondary flex items-center justify-center text-xs font-mono">D</span>
                  <div>
                    <div className="text-text-primary font-bold">食べたら</div>
                    <div className="text-text-secondary text-[11px] font-mono">tabetara (Conditional past)</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-text-muted opacity-0 group-hover:opacity-100">check_circle</span>
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
