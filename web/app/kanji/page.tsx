'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/components/StitchHeader';
import { speakJapanese } from '@/data/kana';
import n5Kanji from '@/data/kanji_n5.json';

interface KanjiEntry {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  meanings: string[];
  strokes?: number;
  radical?: string;
}

// Sample rich compound data for deep inspector preview
const KANJI_COMPOUNDS: Record<string, Array<{ word: string; reading: string; meaning: string; jlpt: string }>> = {
  食: [
    { word: '食堂', reading: 'しょくどう', meaning: 'Dining hall, Cafeteria', jlpt: 'JLPT N5' },
    { word: '食事', reading: 'しょくじ', meaning: 'Meal, Dining', jlpt: 'JLPT N5' },
    { word: '朝食', reading: 'ちょうしょく', meaning: 'Breakfast', jlpt: 'JLPT N4' },
    { word: '食べ物', reading: 'たべもの', meaning: 'Food, Provisions', jlpt: 'JLPT N5' },
  ],
  飲: [
    { word: '飲み物', reading: 'のみもの', meaning: 'Beverage, Drink', jlpt: 'JLPT N5' },
    { word: '飲食店', reading: 'いんしょくてん', meaning: 'Restaurant, Eatery', jlpt: 'JLPT N3' },
    { word: '飲酒', reading: 'いんしゅ', meaning: 'Drinking alcohol', jlpt: 'JLPT N2' },
  ],
  語: [
    { word: '日本語', reading: 'にほんご', meaning: 'Japanese language', jlpt: 'JLPT N5' },
    { word: '単語', reading: 'たんご', meaning: 'Vocabulary, Word', jlpt: 'JLPT N4' },
    { word: '英語', reading: 'えいご', meaning: 'English language', jlpt: 'JLPT N5' },
  ],
  見: [
    { word: '見学', reading: 'けんがく', meaning: 'Inspection, Study tour', jlpt: 'JLPT N4' },
    { word: '意見', reading: 'いけん', meaning: 'Opinion, View', jlpt: 'JLPT N3' },
    { word: '見物', reading: 'けんぶつ', meaning: 'Sightseeing', jlpt: 'JLPT N4' },
  ],
};

const COMMON_RADICALS = ['人', '水', '木', '食', '日', '手', '言', '糸'];

export default function KanjiVaultPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('N5');
  const [activeKanji, setActiveKanji] = useState<KanjiEntry>(
    (n5Kanji as KanjiEntry[])[0] || {
      id: 1,
      kanjiChar: '食',
      onyomi: ['ショク', 'ジキ'],
      kunyomi: ['た・べる', 'く・う'],
      meanings: ['Eat', 'Food'],
    }
  );
  const [selectedRadical, setSelectedRadical] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [activeStroke, setActiveStroke] = useState(5);
  const [cramQueue, setCramQueue] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const kanjiList = useMemo(() => {
    return (n5Kanji as KanjiEntry[]).filter((k) => {
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matches =
          k.kanjiChar.includes(q) ||
          k.meanings.some((m) => m.toLowerCase().includes(q)) ||
          k.onyomi.some((o) => o.toLowerCase().includes(q)) ||
          k.kunyomi.some((ku) => ku.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [search]);

  const triggerCramQueue = (char: string) => {
    if (!cramQueue.includes(char)) {
      setCramQueue((prev) => [...prev, char]);
      setNotification(`Added "${char}" to Custom Cram Queue!`);
    } else {
      setNotification(`"${char}" already in Cram Queue`);
    }
    setTimeout(() => setNotification(null), 2500);
  };

  const currentCompounds = KANJI_COMPOUNDS[activeKanji.kanjiChar] || [
    {
      word: `${activeKanji.kanjiChar}物`,
      reading: 'もの',
      meaning: `${activeKanji.meanings[0]} thing`,
      jlpt: 'JLPT N5',
    },
    {
      word: `${activeKanji.kanjiChar}人`,
      reading: 'じん',
      meaning: `${activeKanji.meanings[0]} person`,
      jlpt: 'JLPT N5',
    },
  ];

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      {/* Top Global Stitch Header */}
      <StitchHeader onSearchClick={() => {}} />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary-container text-white px-4 py-2.5 rounded-xl shadow-2xl font-medium text-xs flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-[18px]">task_alt</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Main 3-Column Workstation Layout */}
      <main className="w-full max-w-[1536px] mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-5 items-start">
        {/* Column 1: Left Filter & Organization Sidebar (~260px) */}
        <aside className="w-full lg:w-[260px] flex-shrink-0 bg-surface-base border border-border-hairline rounded-xl p-4 flex flex-col gap-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar shadow-lg">
          {/* Index Search */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">INDEX SEARCH</span>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-2.5 text-text-muted text-[17px]">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Keyword, stroke, kana..."
                className="w-full bg-background-deep border border-border-hairline rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                type="text"
              />
            </div>
          </div>

          {/* JLPT Level Segmented Chips */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">JLPT TIER</span>
              <span className="text-[11px] font-bold text-accent-gold uppercase">{selectedLevel} SELECTED</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setSelectedLevel('All')}
                className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
                  selectedLevel === 'All'
                    ? 'bg-surface-elevated border border-primary-container text-white font-semibold shadow-[0_0_12px_rgba(199,74,74,0.25)]'
                    : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                <span>All</span>
                <span className="text-[10px] text-text-muted">2,136</span>
              </button>
              <button
                onClick={() => setSelectedLevel('N5')}
                className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
                  selectedLevel === 'N5'
                    ? 'bg-surface-elevated border border-primary-container text-white font-semibold shadow-[0_0_12px_rgba(199,74,74,0.25)]'
                    : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                <span>N5</span>
                <span className="text-[10px] font-bold text-primary">103</span>
              </button>
              {['N4', 'N3', 'N2', 'N1'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
                    selectedLevel === lvl
                      ? 'bg-surface-elevated border border-primary-container text-white font-semibold'
                      : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span>{lvl}</span>
                  <span className="text-[10px] text-text-muted">
                    {lvl === 'N4' ? '181' : lvl === 'N3' ? '361' : lvl === 'N2' ? '415' : '1,076'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Curriculum Sort */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">CURRICULUM SORT</span>
            <div className="relative">
              <select className="w-full bg-background-deep border border-border-hairline rounded-lg px-2.5 py-1.5 text-xs text-text-primary appearance-none cursor-pointer focus:outline-none focus:border-primary-container">
                <option>JLPT Curriculum (Ascending)</option>
                <option>Stroke Count (Fewest first)</option>
                <option>Stroke Count (Most first)</option>
                <option>Mastery SRS (Low to High)</option>
                <option>Frequency in Media</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2 text-text-muted text-[16px] pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* SRS Retention Status Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">SRS RETENTION STATUS</span>
            <div className="flex flex-col gap-2 bg-background-deep border border-border-hairline rounded-lg p-2.5">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input
                    defaultChecked
                    className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                    type="checkbox"
                  />
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-xs text-text-primary group-hover:text-white">Mastered</span>
                </div>
                <span className="text-[10px] text-text-muted font-mono">84 items</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input
                    defaultChecked
                    className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                    type="checkbox"
                  />
                  <span className="w-2 h-2 rounded-full bg-accent-gold" />
                  <span className="text-xs text-text-primary group-hover:text-white">Learning</span>
                </div>
                <span className="text-[10px] text-text-muted font-mono">12 items</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input
                    defaultChecked
                    className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                    type="checkbox"
                  />
                  <span className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-xs text-text-secondary group-hover:text-text-primary">New / Unseen</span>
                </div>
                <span className="text-[10px] text-text-muted font-mono">7 items</span>
              </label>
            </div>
          </div>

          {/* Common Radicals Quick Tags */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">COMMON RADICALS</span>
              <button
                onClick={() => setSelectedRadical(null)}
                className="text-[10px] font-bold text-info hover:underline"
              >
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_RADICALS.map((rad) => {
                const isSelected = selectedRadical === rad;
                return (
                  <button
                    key={rad}
                    onClick={() => setSelectedRadical(isSelected ? null : rad)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                      isSelected
                        ? 'bg-surface-elevated border border-primary-container text-primary shadow-[0_0_8px_rgba(199,74,74,0.3)]'
                        : 'bg-surface-muted border border-border-hairline text-text-primary hover:border-info hover:text-info'
                    }`}
                    title={`Radical: ${rad}`}
                  >
                    {rad}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Milestone Track Card */}
          <div className="mt-auto p-3 bg-tatami-canvas border border-border-hairline rounded-lg flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-gold text-[18px]">verified</span>
              <span className="text-xs text-text-primary font-bold">N5 Milestone Track</span>
            </div>
            <p className="text-[11px] text-text-muted leading-tight">
              Master 19 more glyphs to unlock the JLPT N4 Workstation tier.
            </p>
          </div>
        </aside>

        {/* Column 2: Central Kanji Glyph Grid */}
        <section className="flex-1 min-w-0 flex flex-col gap-4">
          {/* Header & Progress Summary */}
          <div className="bg-surface-base border border-border-hairline rounded-xl p-4 flex flex-col gap-3 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-text-primary">JLPT N5 Core Kanji</h1>
                  <span className="px-2 py-0.5 rounded-full bg-accent-gold-subtle border border-accent-gold text-accent-gold text-[10px] font-bold">
                    FOUNDATIONAL DECK
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-0.5">84 / 103 Mastered (81% retention matrix)</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-text-muted bg-background-deep px-2 py-1 rounded border border-border-subtle">
                  {kanjiList.length} Glyphs Total
                </span>
                <div className="flex bg-background-deep border border-border-hairline rounded-lg p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-2 py-1 rounded text-xs flex items-center transition ${
                      viewMode === 'grid' ? 'bg-surface-muted text-white shadow-sm' : 'text-text-muted hover:text-white'
                    }`}
                    title="Grid View"
                  >
                    <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-2 py-1 rounded text-xs flex items-center transition ${
                      viewMode === 'table' ? 'bg-surface-muted text-white shadow-sm' : 'text-text-muted hover:text-white'
                    }`}
                    title="List View"
                  >
                    <span className="material-symbols-outlined text-[16px]">table_rows</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Thin Progress Track */}
            <div className="w-full bg-background-deep h-2 rounded-full overflow-hidden border border-border-hairline">
              <div
                className="bg-primary-container h-full rounded-full shadow-[0_0_8px_rgba(199,74,74,0.5)] transition-all"
                style={{ width: '81%' }}
              />
            </div>
          </div>

          {/* 6-Column High-Craft Grid of Kanji Glyph Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2.5">
            {kanjiList.map((k) => {
              const isSelected = activeKanji.id === k.id;
              const strokeCount = (k.id % 9) + 4; // realistic stroke placeholder
              const isMastered = k.id % 7 !== 0;

              return (
                <div
                  key={k.id}
                  onClick={() => {
                    setActiveKanji(k);
                    speakJapanese(k.kanjiChar);
                  }}
                  className={`relative rounded-xl p-2.5 flex flex-col justify-between cursor-pointer transition-all group ${
                    isSelected
                      ? 'bg-surface-muted border-2 border-primary-container shadow-[0_0_16px_rgba(199,74,74,0.35)] ring-1 ring-primary-container'
                      : 'bg-surface-base border border-border-hairline hover:border-text-secondary hover:bg-surface-muted'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`w-2 h-2 rounded-full ${isMastered ? 'bg-success' : 'bg-accent-gold'}`}
                      title={isMastered ? 'Mastered' : 'Learning'}
                    />
                    <span className="text-[10px] font-mono text-accent-gold font-semibold">{strokeCount} st.</span>
                  </div>
                  <div className="py-2.5 text-center">
                    <span className="text-3xl font-serif font-bold text-text-primary group-hover:scale-105 transition-transform inline-block">
                      {k.kanjiChar}
                    </span>
                  </div>
                  <div className="border-t border-border-hairline pt-1.5 flex flex-col">
                    <span className="text-[11px] font-bold text-text-primary truncate">{k.meanings[0]}</span>
                    <span className="text-[10px] text-text-secondary truncate font-mono">
                      {k.onyomi[0]?.split(' ')[0] || k.kunyomi[0]?.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Footer */}
          <div className="bg-surface-base border border-border-hairline rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs text-text-muted">Showing 1 - {kanjiList.length} of 103 items</span>
            <div className="flex items-center gap-1.5">
              <button className="px-2.5 py-1 rounded-lg bg-surface-muted border border-border-subtle text-xs text-text-muted cursor-not-allowed">
                Previous
              </button>
              <button className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-primary-container text-xs text-white font-bold">
                1
              </button>
              <button className="px-2.5 py-1 rounded-lg bg-surface-muted border border-border-subtle text-xs text-text-secondary hover:text-white">
                2
              </button>
              <button className="px-2.5 py-1 rounded-lg bg-surface-muted border border-border-subtle text-xs text-text-secondary hover:text-white">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Column 3: Right Detail & Stroke Inspector Drawer (~480px) */}
        <aside className="w-full lg:w-[480px] flex-shrink-0 bg-surface-base border border-border-hairline rounded-xl flex flex-col lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar shadow-2xl">
          <div className="p-4 sm:p-5 flex flex-col gap-5">
            {/* Hero Kanji Presentation Header */}
            <div className="relative overflow-hidden bg-tatami-canvas border border-border-hairline rounded-xl p-5 flex flex-col gap-3">
              {/* Atmospheric Kanji Watermark */}
              <div className="absolute -right-4 -bottom-6 select-none pointer-events-none opacity-[0.06] font-bold text-[180px] text-text-primary leading-none font-serif">
                {activeKanji.kanjiChar}
              </div>
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-serif font-bold text-text-primary leading-none tracking-tight">
                    {activeKanji.kanjiChar}
                  </span>
                  <button
                    onClick={() => speakJapanese(activeKanji.kanjiChar)}
                    className="w-10 h-10 rounded-full bg-surface-muted border border-border-hairline flex items-center justify-center text-primary-hover hover:bg-surface-elevated hover:text-primary transition-colors shadow-sm"
                    title="Play native pronunciation"
                  >
                    <span className="material-symbols-outlined text-[20px]">volume_up</span>
                  </button>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary text-[10px] font-bold uppercase">
                    JLPT N5 Core
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-text-secondary text-[10px] font-mono">
                    Grade 2 Jōyō
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-accent-gold text-[10px] font-mono">
                    Radical: {activeKanji.kanjiChar}
                  </span>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-base font-bold text-text-primary">{activeKanji.meanings.join(', ')}</span>
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                  Primary semantic building block for foundational vocabulary in JLPT N5 curriculum.
                </p>
              </div>
            </div>

            {/* Interactive KanjiVG Stroke Order Tracing Board */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">STROKE MATRIX</span>
                  <span className="text-[11px] font-bold text-accent-gold font-mono">• Stroke {activeStroke} of 9</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-text-secondary text-[10px] font-mono hover:text-white">
                    Speed: 1x ▾
                  </button>
                </div>
              </div>

              {/* Tianzige (田字格) Traditional Dashed Crosshair Canvas */}
              <div className="relative w-full h-[220px] bg-background-deep border border-border-hairline rounded-xl overflow-hidden flex items-center justify-center">
                {/* Guidelines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-[1px] border-b border-dashed border-tatami-grid" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-[1px] border-r border-dashed border-tatami-grid" />
                </div>
                <div className="absolute inset-2 border border-tatami-grid/40 rounded pointer-events-none" />

                {/* Synthesized Kanji SVG overlay with animated stroke highlight */}
                <svg className="w-[180px] h-[180px] relative z-10" viewBox="0 0 109 109">
                  {/* Base completed strokes */}
                  <path
                    d="M51.5,12.25c0.12,1.14-0.19,2.69-0.81,4.24C46.88,26.04,33.9,42.5,15.75,54.75"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.5"
                  />
                  <path
                    d="M53.25,18.75c5.38,4.75,23.38,19.25,31.75,25.25c2.61,1.87,5.55,3.61,8.75,4.75"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.5"
                  />
                  <path
                    d="M47.75,32.25c0.94,0.48,2.44,0.59,3.5,0.48c3.5,-0.38,8.25,-1.25,11.25,-1.75c1.19,-0.2,2.5,-0.22,3.75,0.02"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.5"
                  />
                  <path
                    d="M38.5,43.25c1.12,0.62,2.71,0.61,4.0,0.48c6.62,-0.62,21.5,-2.25,27.25,-2.75c1.69,-0.15,3.34,-0.28,5.0,0.12"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.5"
                  />
                  {/* ACTIVE STROKE Highlight in Coral */}
                  <path
                    className="animate-pulse"
                    d="M41.75,52.5c0.75,0.75,1.25,1.75,1.25,2.75c0,4.25-0.12,12.75-0.12,18.75c0,1.25,0.75,2.0,2.0,1.75c4.75,-0.88,14.5,-2.75,18.75,-3.25"
                    fill="none"
                    stroke="#c74a4a"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <circle cx="41.75" cy="52.5" fill="#c74a4a" r="4.5" stroke="#051b22" strokeWidth="1.5" />
                  <text fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" x="41.75" y="55.5">
                    {activeStroke}
                  </text>
                  {/* Ghost strokes */}
                  <path
                    d="M63.5,50.75c0.75,0.75,1.12,1.75,1.12,2.88c0,4.5,-0.12,21.75,-0.12,28.25"
                    fill="none"
                    stroke="#284b5a"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M43.25,65.25c3.75,-0.5,15.5,-2.0,19.25,-2.5"
                    fill="none"
                    stroke="#284b5a"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>

                {/* Guidance badge */}
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-surface-muted/90 border border-border-hairline backdrop-blur flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-primary">
                    Trace Downward & Right Hook
                  </span>
                </div>
              </div>

              {/* Canvas Controls */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  onClick={() => {
                    setActiveStroke((prev) => (prev >= 9 ? 1 : prev + 1));
                    speakJapanese(activeKanji.kanjiChar);
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">play_arrow</span>
                  <span>Play Animation</span>
                </button>
                <button
                  onClick={() => window.open('/stroke', '_blank')}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-info">draw</span>
                  <span>Practice Sandbox</span>
                </button>
              </div>
            </div>

            {/* Readings Matrix */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">READINGS MATRIX</span>
              <div className="bg-surface-muted border border-border-hairline rounded-xl p-3.5 flex flex-col gap-2.5">
                {/* On'yomi */}
                <div className="flex items-baseline justify-between border-b border-border-subtle pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-accent-gold text-[10px] font-bold font-mono">
                      ON
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-text-primary font-mono">
                        {activeKanji.onyomi[0] || '—'}
                      </span>
                      {activeKanji.onyomi[1] && (
                        <span className="text-sm font-bold text-text-secondary font-mono">
                          {activeKanji.onyomi[1]}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1" title="High Frequency in Modern Lexicon">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  </div>
                </div>

                {/* Kun'yomi */}
                <div className="flex items-baseline justify-between pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-info text-[10px] font-bold font-mono">
                      KUN
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-text-primary font-mono">
                        {activeKanji.kunyomi[0] || '—'}
                      </span>
                      {activeKanji.kunyomi[1] && (
                        <span className="text-sm font-bold text-text-secondary font-mono">
                          {activeKanji.kunyomi[1]}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1" title="Common Japanese Usage">
                    <span className="w-1.5 h-1.5 rounded-full bg-info" />
                    <span className="w-1.5 h-1.5 rounded-full bg-info" />
                    <span className="w-1.5 h-1.5 rounded-full bg-tatami-grid" />
                  </div>
                </div>
              </div>
            </div>

            {/* Compounds (Jukugo) List */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                  HIGH-FREQUENCY JUKUGO COMPOUNDS
                </span>
                <span className="text-[10px] font-bold text-info font-mono">{currentCompounds.length} Selected</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {currentCompounds.map((comp) => (
                  <div
                    key={comp.word}
                    onClick={() => speakJapanese(comp.word)}
                    className="p-2.5 rounded-lg bg-surface-muted border border-border-hairline hover:border-info flex items-center justify-between transition-colors cursor-pointer group"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-text-primary group-hover:text-info transition-colors">
                          {comp.word}
                        </span>
                        <span className="text-xs text-text-secondary font-mono">{comp.reading}</span>
                      </div>
                      <span className="text-xs text-text-primary mt-0.5">{comp.meaning}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2 py-0.5 rounded bg-background-deep border border-border-subtle text-[10px] font-mono text-text-muted">
                        {comp.jlpt}
                      </span>
                      <button className="text-text-muted hover:text-text-primary">
                        <span className="material-symbols-outlined text-[16px]">volume_up</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Action Dock */}
          <div className="sticky bottom-0 bg-surface-base/95 backdrop-blur border-t border-border-hairline p-4 flex flex-col gap-2 mt-auto">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                SRS RETENTION FORECAST
              </span>
              <span className="text-[10px] font-bold text-success font-mono">+21 Days (Master IV)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => triggerCramQueue(activeKanji.kanjiChar)}
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-lg bg-primary-container text-white text-xs font-bold hover:bg-primary-hover active:bg-primary-active transition-all shadow-[0_4px_14px_rgba(199,74,74,0.35)] flex items-center justify-center gap-2"
                type="button"
              >
                <span>Add to Custom Cram Queue</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => speakJapanese(activeKanji.kanjiChar)}
                className="min-h-[44px] px-3.5 py-2.5 rounded-lg bg-surface-muted border border-border-hairline text-xs font-bold text-text-primary hover:border-info hover:text-info transition-colors flex items-center justify-center"
                title="Play Audio"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
