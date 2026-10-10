'use client';

import React, { useState } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { HIRAGANA_DATA, KATAKANA_DATA, KanaItem, speakJapanese } from '../models/kana';

const VOWELS = ['a', 'i', 'u', 'e', 'o'];

const GOJUON_ROWS = [
  { rowLabel: 'Ø (あ行)', consonant: '' },
  { rowLabel: 'k (か行)', consonant: 'k' },
  { rowLabel: 's (さ行)', consonant: 's' },
  { rowLabel: 't (た行)', consonant: 't' },
  { rowLabel: 'n (な行)', consonant: 'n' },
  { rowLabel: 'h (は行)', consonant: 'h' },
  { rowLabel: 'm (ま行)', consonant: 'm' },
  { rowLabel: 'y (や行)', consonant: 'y' },
  { rowLabel: 'r (ら行)', consonant: 'r' },
  { rowLabel: 'w (わ行)', consonant: 'w' },
];

export function KanaScreen() {
  const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
  const [subGroup, setSubGroup] = useState<'main' | 'dakuten' | 'yoon'>('main');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [romajiVisible, setRomajiVisible] = useState(true);
  const [selectedKana, setSelectedKana] = useState<KanaItem>({
    kana: 'あ',
    romaji: 'a',
    script: 'hiragana',
    category: 'main',
  });

  const dataset = script === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;

  const handleSelectKana = (item: KanaItem) => {
    setSelectedKana(item);
    if (audioEnabled) {
      speakJapanese(item.kana);
    }
  };

  const getKanaForCell = (consonant: string, vowel: string): KanaItem | null => {
    let targetRomaji = consonant + vowel;
    if (consonant === 's' && vowel === 'i') targetRomaji = 'shi';
    if (consonant === 't' && vowel === 'i') targetRomaji = 'chi';
    if (consonant === 't' && vowel === 'u') targetRomaji = 'tsu';
    if (consonant === 'h' && vowel === 'u') targetRomaji = 'fu';

    return dataset.find((k) => k.romaji === targetRomaji && k.category === 'main') || null;
  };

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      <StitchHeader />

      <section className="border-b border-border-hairline bg-surface-container-low/70 backdrop-blur-sm px-4 sm:px-6 py-4 shadow-sm">
        <div className="max-w-[1536px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-white">五十音 Kana Matrix & Stroke Sandbox</h1>
              <span className="bg-surface-muted text-info border border-border-hairline text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                v3.4 Nocturnal
              </span>
            </div>
            <p className="text-xs text-text-secondary mt-0.5">Deliberate phonetic acquisition and stroke muscle memory</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-background-deep p-1 rounded-xl border border-border-hairline flex items-center gap-1">
              <button
                onClick={() => setScript('hiragana')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  script === 'hiragana'
                    ? 'bg-primary-container text-white shadow-md'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                <span>Hiragana (ひらがな)</span>
                {script === 'hiragana' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
              <button
                onClick={() => setScript('katakana')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  script === 'katakana'
                    ? 'bg-primary-container text-white shadow-md'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                <span>Katakana (カタカナ)</span>
                {script === 'katakana' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            </div>

            <div className="bg-background-deep p-1 rounded-xl border border-border-hairline flex items-center gap-1">
              <button
                onClick={() => setSubGroup('main')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  subGroup === 'main' ? 'bg-surface-elevated text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                Main Gojuon (46)
              </button>
              <button
                onClick={() => setSubGroup('dakuten')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  subGroup === 'dakuten' ? 'bg-surface-elevated text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                Dakuten (が・ぱ 25)
              </button>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-surface-base rounded-xl border border-border-hairline">
              <div className="w-6 h-6 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-success">
                <span className="material-symbols-outlined text-[15px]">check</span>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-text-muted leading-tight">Mastery</div>
                <div className="text-xs text-text-primary font-bold">
                  46 / 46 <span className="text-success font-medium">(100%)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-background-deep p-1 rounded-xl border border-border-hairline">
              <button
                onClick={() => setAudioEnabled((prev) => !prev)}
                className="px-2.5 py-1 rounded text-[11px] text-text-secondary hover:text-white flex items-center gap-1"
                title="Toggle audio"
              >
                <span className="material-symbols-outlined text-[14px]">volume_up</span>
                <span>Audio: {audioEnabled ? 'ON' : 'OFF'}</span>
              </button>
              <div className="w-[1px] h-3 bg-border-hairline" />
              <button
                onClick={() => setRomajiVisible((prev) => !prev)}
                className="px-2.5 py-1 rounded text-[11px] text-text-secondary hover:text-white flex items-center gap-1"
                title="Toggle romaji"
              >
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                <span>Romaji: {romajiVisible ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-[1536px] w-full mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-surface-base border border-border-hairline rounded-xl p-4 sm:p-5 shadow-xl">
              <div className="grid grid-cols-6 gap-2 mb-3 pb-2 border-b border-border-hairline text-center text-[11px] font-bold uppercase tracking-wider text-text-muted">
                <div className="text-left pl-2">CONSONANT</div>
                {VOWELS.map((v) => (
                  <div key={v} className="text-secondary font-mono">
                    /{v}/
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {GOJUON_ROWS.map((row) => (
                  <div key={row.rowLabel} className="grid grid-cols-6 gap-2 items-center">
                    <div className="text-xs text-text-secondary font-medium pl-1 truncate">{row.rowLabel}</div>
                    {VOWELS.map((v) => {
                      const item = getKanaForCell(row.consonant, v);
                      if (!item) {
                        return (
                          <div
                            key={v}
                            className="h-14 rounded-lg bg-background-deep/40 border border-dashed border-border-hairline/40 flex items-center justify-center text-text-muted/40 font-mono text-xs"
                          >
                            —
                          </div>
                        );
                      }
                      const isSelected = selectedKana.kana === item.kana;
                      return (
                        <div
                          key={v}
                          onClick={() => handleSelectKana(item)}
                          className={`relative group cursor-pointer rounded-lg p-2 flex flex-col items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-surface-elevated border-2 border-primary-container shadow-[0_0_12px_rgba(199,74,74,0.35)] scale-105'
                              : 'bg-surface-base hover:bg-surface-muted border border-border-hairline'
                          }`}
                        >
                          <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-success" />
                          <span className="text-2xl font-serif font-bold text-text-primary group-hover:scale-105 transition-transform">
                            {item.kana}
                          </span>
                          {romajiVisible && (
                            <span className="text-[10px] font-mono text-text-secondary">{item.romaji}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                <div className="grid grid-cols-6 gap-2 items-center pt-2 border-t border-border-hairline">
                  <div className="text-xs text-text-secondary font-medium pl-1">n (ん)</div>
                  <div
                    onClick={() =>
                      handleSelectKana({
                        kana: script === 'hiragana' ? 'ん' : 'ン',
                        romaji: 'n',
                        script,
                        category: 'main',
                      })
                    }
                    className="relative group cursor-pointer bg-surface-base hover:bg-surface-muted rounded-lg border border-accent-gold/40 p-2 flex flex-col items-center justify-center transition-all"
                  >
                    <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-2xl font-serif font-bold text-accent-gold">
                      {script === 'hiragana' ? 'ん' : 'ン'}
                    </span>
                    <span className="text-[10px] font-mono text-accent-gold">n / m</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => {
                    const rnd = dataset[Math.floor(Math.random() * dataset.length)];
                    handleSelectKana(rnd);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-highlight border border-border-hairline text-white hover:bg-primary-hover hover:border-primary-container transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">shuffle</span>
                  <span>Random Rapid Drill</span>
                </button>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-24">
            <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-border-hairline pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary text-[10px] font-mono border border-border-hairline">
                    JLPT N5 / Beginner
                  </span>
                  <span className="text-[10px] font-bold uppercase text-text-muted">{selectedKana.romaji}</span>
                </div>
                <span className="text-[10px] font-mono text-accent-gold font-bold px-2 py-0.5 bg-accent-gold-subtle rounded border border-accent-gold/40">
                  {selectedKana.romaji.length + 1} Strokes
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-serif font-bold text-text-primary leading-none">
                    {selectedKana.kana}
                  </span>
                  <div>
                    <div className="text-xl font-bold text-text-primary leading-tight">[ {selectedKana.romaji} ]</div>
                    <div className="text-xs text-text-secondary">phonetic phoneme</div>
                  </div>
                </div>
                <button
                  onClick={() => speakJapanese(selectedKana.kana)}
                  className="w-12 h-12 rounded-full bg-primary-container hover:bg-primary-hover text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                  title="Listen Pronunciation"
                >
                  <span className="material-symbols-outlined text-[24px]">volume_up</span>
                </button>
              </div>

              <div className="mt-4 p-3.5 rounded-lg bg-surface-muted border border-border-hairline">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-gold mb-1">
                  <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                  <span>Visual Mnemonic</span>
                </div>
                <p className="text-xs text-text-primary leading-relaxed">
                  Memorize phonetic symbol &apos;{selectedKana.kana}&apos; representing the vocal sound &apos;
                  {selectedKana.romaji}&apos;.
                </p>
              </div>
            </div>

            <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">draw</span>
                  <h3 className="text-sm font-bold text-text-primary">Stroke Tracing Pad</h3>
                </div>
                <span className="text-[10px] font-mono text-text-muted">KanjiVG Vector v2.1</span>
              </div>

              <div className="relative w-full max-w-[280px] h-[260px] mx-auto bg-tatami-canvas rounded-xl border-2 border-border-hairline overflow-hidden flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tatami-grid" />
                <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-tatami-grid" />

                <svg className="w-52 h-52 select-none" viewBox="0 0 109 109">
                  <path
                    d="M 28,32 Q 55,27 82,24"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeWidth="6"
                  />
                  <circle cx="28" cy="32" fill="#38bdf8" r="5" />
                  <text fill="#00161e" fontSize="6" fontWeight="bold" textAnchor="middle" x="28" y="34.5">
                    1
                  </text>
                  <path
                    d="M 53,15 Q 52,50 49,85"
                    fill="none"
                    stroke="#c74a4a"
                    strokeLinecap="round"
                    strokeWidth="6"
                  />
                  <circle cx="53" cy="15" fill="#c74a4a" r="5" />
                  <text fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle" x="53" y="17.5">
                    2
                  </text>
                </svg>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => speakJapanese(selectedKana.kana)}
                  className="py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-white hover:bg-surface-elevated flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">play_arrow</span>
                  <span>Play Sound</span>
                </button>
                <button
                  onClick={() => window.open('/stroke', '_blank')}
                  className="py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-white hover:bg-surface-elevated flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px] text-info">draw</span>
                  <span>Free Sandbox</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
