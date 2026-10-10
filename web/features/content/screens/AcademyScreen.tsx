'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StitchHeader } from '@/core/components/StitchHeader';
import { ACADEMY_GUIDES } from '../models/guides';

export function AcademyScreen() {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(ACADEMY_GUIDES[0]?.id || 'guide-hiragana');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<'jlpt' | 'genki' | 'minna' | 'tobira'>('jlpt');
  const [selectedTier, setSelectedTier] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
  const [activeUnit, setActiveUnit] = useState<number>(3);
  const [activeCategory, setActiveCategory] = useState<'all' | 'particles' | 'conjugations' | 'keigo' | 'expressions'>('conjugations');

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const activeGuide = ACADEMY_GUIDES.find((g) => g.id === selectedGuideId) || ACADEMY_GUIDES[0];

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary antialiased flex flex-col font-sans select-none custom-scroll selection:bg-primary-container selection:text-white">
      <StitchHeader />

      <section className="bg-background-deep border-b border-border-hairline px-4 sm:px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 gap-3">
            <div className="flex flex-wrap items-center space-x-2">
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider mr-2">Curriculum Track:</span>
              <button
                onClick={() => setSelectedTrack('jlpt')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all ${
                  selectedTrack === 'jlpt'
                    ? 'bg-surface-muted border border-border-hairline text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-accent-gold"></span>
                JLPT Standard: N5 → N1
                <span className="px-1.5 py-0.2 rounded bg-surface-base text-[10px] text-text-secondary border border-border-hairline">Active</span>
              </button>
              <button
                onClick={() => setSelectedTrack('genki')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedTrack === 'genki'
                    ? 'bg-surface-muted border border-border-hairline text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
                }`}
              >
                Genki I &amp; II (3rd Ed)
              </button>
              <button
                onClick={() => setSelectedTrack('minna')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedTrack === 'minna'
                    ? 'bg-surface-muted border border-border-hairline text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
                }`}
              >
                Minna no Nihongo
              </button>
              <button
                onClick={() => setSelectedTrack('tobira')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedTrack === 'tobira'
                    ? 'bg-surface-muted border border-border-hairline text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
                }`}
              >
                Tobira Gateway
              </button>
            </div>

            <div className="flex items-center space-x-1 bg-surface-container p-1 rounded-lg border border-border-hairline text-xs font-mono">
              {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-2.5 py-0.5 rounded font-semibold transition-all ${
                    selectedTier === tier
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-text-primary tracking-tight">
                  JLPT {selectedTier} Grammar Encyclopedia
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-accent-gold-subtle border border-accent-gold/40 text-accent-gold text-xs font-semibold">
                  Beginner Core
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1 flex flex-wrap items-center gap-2">
                <span>130 Essential Structures</span>
                <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
                <span className="text-success font-medium">84 Mastered</span>
                <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
                <span className="text-info font-medium">65% Retention Rate</span>
                <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
                <span>Next SRS Batch: 14 hrs</span>
              </p>
            </div>

            <div className="flex items-center flex-wrap gap-2.5">
              <div className="relative min-w-[280px] xl:min-w-[360px]">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-[18px]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search grammar point (e.g. 〜てから, は vs が)..."
                  className="w-full bg-surface-container border border-border-hairline rounded-lg pl-9 pr-16 py-2 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                />
                <div className="absolute right-2 top-1.5 flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-surface-muted text-[10px] font-mono border border-border-hairline text-accent-gold">
                    あ IME
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {(['all', 'particles', 'conjugations', 'keigo', 'expressions'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs capitalize transition-all ${
                      activeCategory === cat
                        ? 'bg-surface-container border border-primary-container text-white font-medium shadow-sm'
                        : 'hover:bg-surface-muted border border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {cat === 'all' ? 'All 130' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-12 gap-6 items-start">
        <aside className="col-span-12 lg:col-span-4 xl:col-span-3 bg-surface-base border border-border-hairline rounded-xl p-3 flex flex-col space-y-3 sticky top-20 max-h-[calc(100vh-120px)] overflow-hidden shadow-sm">
          <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle px-1">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-[18px] text-accent-gold">account_tree</span>
              <h2 className="text-xs uppercase tracking-wider text-text-primary font-bold">
                Curriculum Structure
              </h2>
            </div>
            <span className="text-[11px] font-mono text-text-muted">Unit {activeUnit} of 18</span>
          </div>

          <div className="overflow-y-auto custom-scroll flex-1 pr-1 space-y-2">
            <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
              <button
                onClick={() => setActiveUnit(1)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
                  <div>
                    <span className="text-xs font-semibold text-text-primary group-hover:text-white block">Unit 1: Copula &amp; Identity</span>
                    <span className="text-[11px] text-text-muted font-mono">だ, です, じゃない</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-success-subtle text-success text-[10px] font-mono font-bold">8/8</span>
              </button>
            </div>

            <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
              <button
                onClick={() => setActiveUnit(2)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
                  <div>
                    <span className="text-xs font-semibold text-text-primary group-hover:text-white block">Unit 2: Essential Particles</span>
                    <span className="text-[11px] text-text-muted font-mono">は, が, を, に, で...</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-success-subtle text-success text-[10px] font-mono font-bold">14/14</span>
              </button>
            </div>

            <div className="rounded-lg bg-surface-container border border-border-hairline overflow-hidden shadow-md">
              <button
                onClick={() => setActiveUnit(3)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left bg-surface-muted/90 border-b border-border-subtle group"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">folder_open</span>
                  <div>
                    <span className="text-xs font-bold text-text-primary group-hover:text-white block">Unit 3: Verb Connections &amp; Te-Form</span>
                    <span className="text-[10px] text-text-secondary">4 of 12 Mastered</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-accent-gold-subtle text-accent-gold text-[10px] font-mono font-bold">4/12</span>
              </button>

              <div className="p-1.5 space-y-1 bg-background-deep/60">
                <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                    <div>
                      <span className="text-xs text-text-primary block">〜てください</span>
                      <span className="text-[10px] text-text-muted">Polite Request</span>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.2 rounded bg-success-subtle border border-success/30 text-success text-[10px] font-semibold">Mastered</span>
                </div>

                <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left bg-surface-muted border-l-4 border-l-primary-container border-y border-r border-border-hairline shadow-[0_0_12px_rgba(199,74,74,0.15)] relative cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#c74a4a]"></span>
                    <div>
                      <span className="text-xs font-bold text-white block">〜てはいけない</span>
                      <span className="text-[10px] text-primary">Strong Prohibition</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-1.5 py-0.5 rounded bg-primary-subtle border border-primary-container/40 text-primary text-[10px] font-semibold">Adept 3/5</span>
                    <span className="text-[9px] text-accent-gold font-mono mt-0.5">Active</span>
                  </div>
                </div>

                <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-info"></span>
                    <div>
                      <span className="text-xs text-text-primary block">〜てもいい</span>
                      <span className="text-[10px] text-text-muted">Permission / Grant</span>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.2 rounded bg-info-subtle border border-info/30 text-info text-[10px] font-semibold">Learning</span>
                </div>

                <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
                    <div>
                      <span className="text-xs text-text-primary block">〜ている</span>
                      <span className="text-[10px] text-text-muted">Continuous / State</span>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.2 rounded bg-surface-container border border-border-hairline text-text-muted text-[10px]">Unseen</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
              <button
                onClick={() => setActiveUnit(4)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="material-symbols-outlined text-[16px] text-text-muted">folder</span>
                  <div>
                    <span className="text-xs font-semibold text-text-secondary group-hover:text-text-primary block">Unit 4: Past &amp; Adjective Inflections</span>
                    <span className="text-[10px] text-text-muted">0/10 Mastered</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted px-1">
            <span>Curriculum Progress</span>
            <span className="font-mono text-accent-gold font-bold">64.6%</span>
          </div>
          <div className="w-full h-1.5 bg-background-deep rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-container via-accent-gold to-success rounded-full" style={{ width: '64.6%' }}></div>
          </div>
        </aside>

        <section className="col-span-12 lg:col-span-8 xl:col-span-9 bg-surface-base border border-border-hairline rounded-xl p-6 flex flex-col space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-border-hairline gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-subtle border border-primary-container/50 text-primary text-[11px] font-bold">
                  JLPT N5 Core
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-muted border border-border-hairline text-text-secondary text-xs">
                  Lesson 15
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-muted border border-border-hairline text-text-secondary text-xs">
                  Verb Te-Form
                </span>
                <div className="flex items-center space-x-1 bg-surface-container px-2.5 py-0.5 rounded-full border border-border-hairline">
                  <span className="text-[10px] text-text-muted mr-1 font-medium">SRS</span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-border-hairline"></span>
                  <span className="w-2 h-2 rounded-full bg-border-hairline"></span>
                  <span className="text-xs text-text-secondary font-mono ml-1 font-bold">Adept 3/5</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-accent-gold-subtle border border-accent-gold/30 text-accent-gold text-xs font-mono font-medium">
                  Difficulty: ★★☆☆☆
                </span>
              </div>

              <div className="flex items-baseline space-x-4">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
                  〜てはいけない
                </h1>
                <span className="text-text-muted font-mono text-sm tracking-wide">/ te wa ikenai /</span>
              </div>
              <p className="text-lg text-text-primary font-semibold mt-2">
                Must not do / Strong Prohibition &amp; Rules
              </p>
              <p className="text-xs text-text-secondary max-w-2xl mt-1 leading-relaxed">
                Expresses an objective, authoritative prohibition or societal ban. Frequently used in statutory signage, institutional bylaws, parental directives, and exam instructions.
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => speak('てはいけない')}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline hover:border-info text-text-primary text-xs transition-all"
                title="Play native pronunciation"
              >
                <span className="material-symbols-outlined text-[16px] text-info">volume_up</span>
                <span>Native 1.0x</span>
              </button>
              <button className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-secondary hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-surface-base border border-border-hairline p-5 shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-accent-gold text-[18px]">high_res</span>
                <h3 className="text-sm text-text-primary font-bold">
                  Grammar Construction &amp; Syntax Formula
                </h3>
              </div>
              <span className="font-mono text-[11px] text-text-muted bg-surface-container px-2 py-0.5 rounded border border-border-hairline">
                Stem Mode: 連用形
              </span>
            </div>

            <div className="bg-background-deep border border-border-hairline rounded-lg p-3.5 mb-4 flex items-center justify-center flex-wrap gap-2 text-center">
              <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-white text-sm font-semibold">
                動詞 連用形 <span className="text-xs text-info font-mono">[て-form]</span>
              </div>
              <span className="text-primary font-bold text-lg">+</span>
              <div className="px-3 py-1.5 rounded-lg bg-primary-subtle border border-primary-container text-primary text-sm font-bold">
                はいけない
              </div>
              <span className="text-text-muted text-xs mx-1">or</span>
              <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-text-secondary text-sm">
                はだめ
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                    <span className="font-mono font-bold text-accent-gold">STEP 1</span>
                    <span>Dictionary Verb</span>
                  </div>
                  <div className="text-base font-bold text-text-primary font-serif">
                    <ruby>撮<rt>と</rt></ruby>る
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">toru (to take photo)</div>
                </div>
                <span className="text-[10px] text-info bg-info-subtle px-1.5 py-0.5 rounded w-fit mt-2 border border-info/20">
                  Godan verb with る
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                    <span className="font-mono font-bold text-accent-gold">STEP 2</span>
                    <span>Te-form Inflection</span>
                  </div>
                  <div className="text-base font-bold text-text-primary font-serif flex items-center gap-1.5">
                    <span>撮る</span>
                    <span className="text-text-muted text-xs">→</span>
                    <span className="text-info"><ruby>撮<rt>と</rt></ruby>って</span>
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">totte (small っ + て)</div>
                </div>
                <span className="text-[10px] text-text-muted bg-surface-muted px-1.5 py-0.5 rounded w-fit mt-2 border border-border-hairline">
                  Double consonant shift
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                    <span className="font-mono font-bold text-primary">STEP 3</span>
                    <span>Attach Prohibition</span>
                  </div>
                  <div className="text-base font-bold text-white font-serif">
                    <ruby>撮<rt>と</rt></ruby>って<span className="text-primary">はいけない</span>
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">totte wa ikenai</div>
                </div>
                <span className="text-[10px] text-primary bg-primary-subtle px-1.5 py-0.5 rounded w-fit mt-2 border border-primary-container/40">
                  Complete structure
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-info text-[18px]">record_voice_over</span>
                <h3 className="text-sm text-text-primary font-bold">
                  High-Yield Contextual Examples
                </h3>
              </div>
              <span className="text-xs text-text-muted font-mono">Audio pitch-accent verified</span>
            </div>

            <div className="p-4 rounded-lg bg-surface-container border border-border-hairline hover:border-text-secondary/40 transition-colors flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                  <span className="font-mono text-[10px] text-accent-gold uppercase font-bold tracking-wider">Example 01</span>
                  <span className="text-[10px] text-text-muted bg-surface-muted px-2 py-0.2 rounded border border-border-hairline">Museum Notice</span>
                </div>
                <p className="text-xl font-bold text-white font-serif tracking-wide leading-relaxed">
                  ここで <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>って<span className="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけません</span>。
                </p>
                <p className="text-xs text-text-primary font-medium">
                  &quot;You must not take photos here.&quot;
                </p>
                <p className="text-[11px] text-text-muted italic">
                  Context: Inflexible official rule posted at art galleries, temples, and exhibition rooms.
                </p>
              </div>
              <button
                onClick={() => speak('ここで写真を撮ってはいけません')}
                className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated text-info hover:text-white border border-border-hairline transition-colors"
                title="Play Audio"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </button>
            </div>

            <div className="p-4 rounded-lg bg-surface-container border border-border-hairline hover:border-text-secondary/40 transition-colors flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-info"></span>
                  <span className="font-mono text-[10px] text-info uppercase font-bold tracking-wider">Example 02</span>
                  <span className="text-[10px] text-text-muted bg-surface-muted px-2 py-0.2 rounded border border-border-hairline">Residential Rules</span>
                </div>
                <p className="text-xl font-bold text-white font-serif tracking-wide leading-relaxed">
                  <ruby>夜遅<rt>よるおそ</rt></ruby>くに <ruby>大<rt>おお</rt></ruby>きな<ruby>音<rt>おと</rt></ruby>を <ruby>立<rt>た</rt></ruby>てて<span className="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけない</span>。
                </p>
                <p className="text-xs text-text-primary font-medium">
                  &quot;You must not make loud noises late at night.&quot;
                </p>
                <p className="text-[11px] text-text-muted italic">
                  Context: General building rule spoken in plain authoritative form.
                </p>
              </div>
              <button
                onClick={() => speak('夜遅くに大きな音を立ててはいけない')}
                className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated text-info hover:text-white border border-border-hairline transition-colors"
                title="Play Audio"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
