'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/components/StitchHeader';
import { speakJapanese } from '@/data/kana';
import rawVocab from '@/data/vocab_n5.json';

interface VocabItem {
  jmdict_seq: string;
  kana: string;
  kanji: string;
  waller_definition: string;
}

// Sample pitch accent profiles
const PITCH_PATTERNS: Record<
  string,
  {
    type: string;
    downstep: string;
    pattern: string;
    moras: Array<{ mora: string; high: boolean; isDrop?: boolean }>;
    rule: string;
  }
> = {
  default: {
    type: '中高型 (Nakadaka ②)',
    downstep: '②',
    pattern: 'L-H-L',
    moras: [
      { mora: 'た', high: false },
      { mora: 'べ', high: true, isDrop: true },
      { mora: 'る', high: false },
    ],
    rule: 'Starts low, rises on 2nd mora, drops sharply before end.',
  },
  heiban: {
    type: '平板型 (Heiban ⓪)',
    downstep: '⓪',
    pattern: 'L-H-H',
    moras: [
      { mora: 'の', high: false },
      { mora: 'む', high: true },
    ],
    rule: 'Starts low, rises on 2nd mora, stays high into particles.',
  },
  atamadaka: {
    type: '頭高型 (Atamadaka ①)',
    downstep: '①',
    pattern: 'H-L',
    moras: [
      { mora: 'み', high: true, isDrop: true },
      { mora: 'る', high: false },
    ],
    rule: 'Starts high on 1st mora, drops immediately after.',
  },
};

export default function VocabPage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<
    'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters'
  >('all');
  const [showPitchCurves, setShowPitchCurves] = useState(true);
  const [selectedWord, setSelectedWord] = useState<VocabItem>(
    (rawVocab as VocabItem[])[0] || {
      jmdict_seq: '1358280',
      kana: 'たべる',
      kanji: '食べる',
      waller_definition: 'to eat; to consume',
    }
  );
  const [hideFurigana, setHideFurigana] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [cramQueue, setCramQueue] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filtered vocabulary list
  const filteredList = useMemo(() => {
    return (rawVocab as VocabItem[]).filter((v) => {
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matches =
          v.kanji.toLowerCase().includes(q) ||
          v.kana.toLowerCase().includes(q) ||
          v.waller_definition.toLowerCase().includes(q);
        if (!matches) return false;
      }

      if (filterType === 'verbs') {
        const isVerb = v.waller_definition.startsWith('to ') || v.waller_definition.includes('(v');
        if (!isVerb) return false;
      } else if (filterType === 'nouns') {
        const isNoun =
          v.waller_definition.includes('(noun)') ||
          (!v.waller_definition.startsWith('to ') && !v.waller_definition.includes('(adj'));
        if (!isNoun) return false;
      } else if (filterType === 'i_adj') {
        if (!v.waller_definition.includes('(adj-i') && !v.waller_definition.includes('adjective')) return false;
      } else if (filterType === 'na_adj') {
        if (!v.waller_definition.includes('(adj-na') && !v.waller_definition.includes('na-adj')) return false;
      }
      return true;
    });
  }, [search, filterType]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const playVoice = (text: string) => {
    speakJapanese(text);
  };

  const triggerCramQueue = (word: string) => {
    if (!cramQueue.includes(word)) {
      setCramQueue((prev) => [...prev, word]);
      showToast(`Added "${word}" to SRS Cram Deck!`);
    } else {
      showToast(`"${word}" is already in Cram Deck.`);
    }
  };

  const currentPitch = useMemo(() => {
    const seq = Number(selectedWord.jmdict_seq) || 0;
    if (seq % 3 === 0) return PITCH_PATTERNS.default;
    if (seq % 3 === 1) return PITCH_PATTERNS.heiban;
    return PITCH_PATTERNS.atamadaka;
  }, [selectedWord]);

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      {/* 1. Global Top Navigation Bar */}
      <StitchHeader />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary-container text-white px-4 py-2.5 rounded-xl shadow-2xl font-medium text-xs flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-[18px]">task_alt</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Top Filter & Curriculum Ribbon */}
      <section className="w-full bg-background-deep border-b border-border-hairline px-4 sm:px-6 py-4 shadow-sm">
        <div className="max-w-[1536px] mx-auto space-y-3.5">
          {/* Row A: Breadcrumb + Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="hover:text-text-primary cursor-pointer transition-colors">Vocabulary</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-secondary font-medium">JLPT N5 Core Vocabulary</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
                {rawVocab.length} Words
              </span>
            </div>

            {/* Search Input */}
            <div className="flex-1 max-w-xl relative flex items-center">
              <span className="absolute left-3.5 text-text-muted pointer-events-none flex items-center">
                <span className="material-symbols-outlined text-[20px]">manage_search</span>
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Kanji, Hiragana, Romaji, or English..."
                className="w-full bg-background-canvas text-text-primary placeholder:text-text-muted text-sm pl-11 pr-24 py-2.5 h-11 rounded-lg border border-border-hairline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all shadow-inner"
                type="text"
              />
              <div className="absolute right-2 flex items-center gap-1.5">
                <button
                  type="button"
                  className="px-2 py-1 rounded bg-surface-muted border border-border-hairline text-[11px] font-mono text-text-secondary hover:text-text-primary flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span>かな IME</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row B: Category Segment Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Words', count: rawVocab.length },
              { id: 'verbs', label: 'Verbs (動詞)', count: 142 },
              { id: 'nouns', label: 'Nouns (名詞)', count: 298 },
              { id: 'i_adj', label: 'i-Adjectives (い形)', count: 48 },
              { id: 'na_adj', label: 'na-Adjectives (な形)', count: 32 },
              { id: 'adverbs', label: 'Adverbs (副詞)', count: 54 },
              { id: 'counters', label: 'Counters (助数詞)', count: 28 },
            ].map((tab) => {
              const isActive = filterType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 flex-shrink-0 font-medium ${
                    isActive
                      ? 'bg-surface-muted text-white border border-primary-container shadow-[0_0_10px_rgba(199,74,74,0.25)] font-semibold'
                      : 'bg-surface-base text-text-secondary border border-border-hairline hover:border-surface-highlight hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-primary-container/40 text-white' : 'text-text-muted'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row C: Sub-filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPitchCurves((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  showPitchCurves
                    ? 'bg-surface-muted border-border-hairline text-accent-gold'
                    : 'bg-surface-base border-border-hairline text-text-secondary hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {showPitchCurves ? 'check_box' : 'check_box_outline_blank'}
                </span>
                <span>Show Pitch Accent Curves</span>
              </button>
              <button
                onClick={() => playVoice(selectedWord.kanji || selectedWord.kana)}
                className="px-2.5 py-1 rounded-lg bg-surface-base border border-border-hairline text-text-secondary hover:text-white flex items-center gap-1.5 text-xs transition-colors"
              >
                <span className="material-symbols-outlined text-[15px] text-info">graphic_eq</span>
                <span>With Audio ({filteredList.length})</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-surface-base border border-border-hairline px-3 py-1 rounded-lg text-xs text-text-secondary">
                <span className="text-text-muted">Sort:</span>
                <span className="text-white font-medium">JLPT Frequency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Split View Workstation (Master-Detail) */}
      <main className="max-w-[1536px] mx-auto px-4 sm:px-6 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Master Word List (7 cols) */}
          <section className="lg:col-span-7 flex flex-col bg-surface-base border border-border-hairline rounded-xl overflow-hidden shadow-xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-background-deep border-b border-border-hairline text-[11px] font-bold uppercase tracking-wider text-text-muted">
              <div className="col-span-3">WORD / KANJI</div>
              <div className="col-span-3">PITCH & ACCENT</div>
              <div className="col-span-3">MEANING & POS</div>
              <div className="col-span-2 text-center">SRS TIER</div>
              <div className="col-span-1 text-right">AUDIO</div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-border-subtle max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar">
              {filteredList.slice(0, 50).map((item, idx) => {
                const isSelected = selectedWord.jmdict_seq === item.jmdict_seq;
                const seq = Number(item.jmdict_seq) || 0;
                const pitchType = seq % 3 === 0 ? 'Nakadaka ②' : seq % 3 === 1 ? 'Heiban ⓪' : 'Atamadaka ①';
                const pitchWave = seq % 3 === 0 ? 'L-H-L' : seq % 3 === 1 ? 'L-H-H' : 'H-L';
                const srsTier = (seq % 6) + 1;

                return (
                  <div
                    key={item.jmdict_seq}
                    onClick={() => {
                      setSelectedWord(item);
                      playVoice(item.kanji || item.kana);
                    }}
                    className={`grid grid-cols-12 gap-2 px-4 py-3.5 transition-all cursor-pointer items-center group ${
                      isSelected
                        ? 'bg-surface-muted border-l-4 border-primary-container shadow-inner'
                        : 'bg-surface-base hover:bg-surface-muted/60 border-l-4 border-transparent'
                    }`}
                  >
                    {/* Word / Kanji */}
                    <div className="col-span-3 flex items-center gap-2">
                      {isSelected ? (
                        <span className="material-symbols-outlined text-[16px] text-primary-container">arrow_right</span>
                      ) : (
                        <span className="w-4" />
                      )}
                      <div>
                        <div className="text-base font-bold text-text-primary tracking-wide">
                          {item.kanji || item.kana}
                        </div>
                        <div className="text-[11px] font-mono text-text-muted">{item.kana}</div>
                      </div>
                    </div>

                    {/* Pitch Accent & Pattern */}
                    <div className="col-span-3 flex flex-col gap-1">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-surface-muted text-text-secondary border border-border-hairline w-fit">
                        {pitchType}
                      </span>
                      {showPitchCurves && (
                        <div className="flex items-center gap-0.5" title={`Pitch Contour: ${pitchWave}`}>
                          <span
                            className={`w-3 h-1 rounded-full ${
                              pitchWave.startsWith('H') ? 'bg-primary-container shadow-[0_0_6px_#c74a4a]' : 'bg-text-muted'
                            }`}
                          />
                          <span
                            className={`w-3.5 h-1.5 rounded-full ${
                              pitchWave.includes('-H') ? 'bg-primary-container shadow-[0_0_6px_#c74a4a]' : 'bg-text-muted'
                            }`}
                          />
                          <span className="w-3 h-1 bg-text-muted rounded-full" />
                          <span className="text-[10px] font-mono text-text-muted ml-1">{pitchWave}</span>
                        </div>
                      )}
                    </div>

                    {/* Meaning & POS */}
                    <div className="col-span-3 pr-2">
                      <div className="font-medium text-text-primary text-xs truncate">
                        {item.waller_definition.replace(/\([^)]*\)/g, '').trim()}
                      </div>
                      <div className="text-[10px] text-text-secondary truncate flex items-center gap-1 font-mono">
                        <span>JLPT N5</span>
                        <span>•</span>
                        <span>Core</span>
                      </div>
                    </div>

                    {/* SRS Tier */}
                    <div className="col-span-2 flex flex-col items-center justify-center gap-1">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5, 6].map((st) => (
                          <span
                            key={st}
                            className={`w-1.5 h-1.5 rounded-full ${
                              st <= srsTier ? 'bg-primary-container shadow-[0_0_4px_#c74a4a]' : 'bg-border-hairline'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-primary font-medium">Stage {srsTier}/6</span>
                    </div>

                    {/* Audio Trigger */}
                    <div className="col-span-1 flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playVoice(item.kanji || item.kana);
                        }}
                        className="w-8 h-8 rounded-lg bg-surface-muted hover:bg-primary-container text-text-secondary hover:text-white flex items-center justify-center transition-colors shadow-sm"
                        title="Play Native Pronunciation"
                      >
                        <span className="material-symbols-outlined text-[17px]">volume_up</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Table Pagination Footer */}
            <div className="px-4 py-3 bg-background-deep border-t border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-muted">
              <div className="flex items-center gap-1.5 font-mono">
                <span>Showing</span>
                <span className="text-white font-bold">1 - {Math.min(50, filteredList.length)}</span>
                <span>of</span>
                <span className="text-white font-bold">{filteredList.length}</span>
                <span>entries</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="px-2.5 py-1 rounded bg-surface-muted border border-border-hairline text-text-secondary hover:text-white text-xs">
                  Previous
                </button>
                <button className="w-7 h-7 rounded bg-primary-container text-white font-mono text-xs font-bold flex items-center justify-center shadow-[0_0_6px_#c74a4a]">
                  1
                </button>
                <button className="w-7 h-7 rounded bg-surface-base border border-border-hairline text-text-secondary hover:text-white font-mono text-xs flex items-center justify-center">
                  2
                </button>
                <button className="px-2.5 py-1 rounded bg-surface-base border border-border-hairline text-text-secondary hover:text-white text-xs">
                  Next
                </button>
              </div>
            </div>
          </section>

          {/* Right Word Intelligence Card / Detail Inspector (5 cols) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="bg-surface-base border border-border-hairline rounded-xl p-5 shadow-2xl space-y-5">
              {/* Section 1: Hero Header & Audio Console */}
              <div className="pb-4 border-b border-border-hairline space-y-4">
                <div className="flex items-start justify-between gap-4">
                  {/* Glyph Presentation */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary-subtle text-primary border border-border-hairline uppercase">
                        JLPT N5 Core
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-surface-muted text-secondary border border-border-hairline">
                        SEQ #{selectedWord.jmdict_seq}
                      </span>
                    </div>
                    <div className="text-5xl font-serif font-bold text-text-primary tracking-wide leading-tight">
                      {hideFurigana ? selectedWord.kanji || selectedWord.kana : selectedWord.kanji || selectedWord.kana}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="font-mono text-sm text-secondary font-medium">{selectedWord.kana}</span>
                      <span className="text-text-muted">•</span>
                      <button
                        onClick={() => setHideFurigana((prev) => !prev)}
                        className="text-xs text-info hover:underline flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">subtitles</span>
                        <span>{hideFurigana ? 'Show Furigana' : 'Hide Furigana'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Audio Speaker Trigger */}
                  <div className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => playVoice(selectedWord.kanji || selectedWord.kana)}
                      className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all group"
                      title="Listen Native Pronunciation"
                    >
                      <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
                        volume_up
                      </span>
                    </button>
                    <span className="text-[10px] font-mono text-text-muted font-bold">AUDIO HD</span>
                  </div>
                </div>

                {/* Voice Selector & Speed Controls */}
                <div className="bg-background-deep p-2.5 rounded-lg border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted text-[17px]">record_voice_over</span>
                    <span className="text-xs text-text-primary font-medium">Tokyo Native Audio Stream</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono text-text-muted mr-1">SPEED</span>
                    {[0.8, 1.0, 1.2].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setSpeechSpeed(spd)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                          speechSpeed === spd
                            ? 'font-bold text-white bg-primary-container shadow-[0_0_8px_rgba(199,74,74,0.4)]'
                            : 'text-text-secondary hover:text-white bg-surface-muted border border-border-hairline'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Pitch Accent Diagram Widget */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    PITCH ACCENT PROFILE
                  </span>
                  <span className="text-xs font-mono text-accent-gold font-bold">{currentPitch.type}</span>
                </div>
                <div className="bg-tatami-canvas border border-tatami-grid rounded-xl p-3.5 relative overflow-hidden">
                  <div className="relative z-10 flex items-center justify-around py-2">
                    {currentPitch.moras.map((m, mIdx) => (
                      <React.Fragment key={mIdx}>
                        <div className="flex flex-col items-center gap-1.5 relative">
                          <span className="text-[10px] font-mono text-text-muted">Mora {mIdx + 1}</span>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                              m.high
                                ? 'bg-primary-container border-white shadow-[0_0_12px_#c74a4a]'
                                : 'bg-surface-muted border-text-muted'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${m.high ? 'bg-white' : 'bg-text-muted'}`} />
                          </div>
                          <span className={`text-lg font-bold ${m.high ? 'text-white' : 'text-text-secondary'}`}>
                            {m.mora}
                          </span>
                          <span
                            className={`text-[10px] font-mono uppercase ${
                              m.high ? 'text-primary font-bold' : 'text-text-muted'
                            }`}
                          >
                            {m.high ? 'High ▾' : 'Low'}
                          </span>
                        </div>
                        {mIdx < currentPitch.moras.length - 1 && (
                          <div className="flex-1 h-[2px] bg-gradient-to-r from-text-muted to-primary-container mx-1 -mt-4" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border-subtle text-[11px] text-text-secondary flex items-center justify-between">
                    <span>Rule: {currentPitch.rule}</span>
                    <span className="font-mono text-text-muted">Downstep: {currentPitch.downstep}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Lexical Breakdown */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                  DICTIONARY SENSES & ETYMOLOGY
                </span>
                <div className="space-y-2 bg-background-deep p-3.5 rounded-xl border border-border-hairline">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
                      [v1] Ichidan
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
                      [vt] Transitive
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-info border border-border-hairline">
                      JLPT N5
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-accent-gold border border-border-hairline">
                      Core 500
                    </span>
                  </div>
                  <div className="text-xs text-text-primary leading-relaxed font-medium">
                    {selectedWord.waller_definition}
                  </div>
                </div>
              </div>

              {/* Section 4: Action Footer Buttons */}
              <div className="space-y-2.5 pt-3 border-t border-border-hairline">
                <button
                  onClick={() => {
                    triggerCramQueue(selectedWord.kanji || selectedWord.kana);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-primary-container text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Add to SRS Review Deck (+1 Item) →</span>
                </button>
                <button
                  onClick={() => window.open('/conjugator', '_blank')}
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-muted text-white border border-border-hairline text-xs font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated hover:border-info transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">table_chart</span>
                  <span>Open in Conjugator Studio ↗</span>
                </button>
              </div>
            </div>

            {/* Ambient Workspace Status */}
            <div className="p-3 rounded-xl bg-background-deep/60 border border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Dictionary DB v2024.11 Loaded</span>
              </div>
              <div>Audio CDN: Tokyo-Node-01 (18ms)</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
