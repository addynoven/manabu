'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { HIRAGANA_DATA, KATAKANA_DATA, KanaItem, speakJapanese } from '@/data/kana';
import { Volume2, Play, Sparkles, Check, RotateCcw } from 'lucide-react';

export default function KanaDojoPage() {
  const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
  const [filter, setFilter] = useState<'all' | 'main' | 'dakuten'>('all');
  const [lastSpoken, setLastSpoken] = useState<string | null>(null);

  // Quick Drill State
  const [isDrillActive, setIsDrillActive] = useState(false);
  const [drillTarget, setDrillTarget] = useState<KanaItem | null>(null);
  const [drillOptions, setDrillOptions] = useState<string[]>([]);
  const [drillScore, setDrillScore] = useState(0);
  const [drillSelected, setDrillSelected] = useState<string | null>(null);
  const [isDrillCorrect, setIsDrillCorrect] = useState<boolean | null>(null);

  const dataset = script === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;
  const filteredData = dataset.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const handlePlaySound = (item: KanaItem) => {
    setLastSpoken(item.kana);
    speakJapanese(item.kana);
  };

  const startDrill = () => {
    setIsDrillActive(true);
    setDrillScore(0);
    nextDrillQuestion();
  };

  const nextDrillQuestion = () => {
    const randomTarget = dataset[Math.floor(Math.random() * dataset.length)];
    setDrillTarget(randomTarget);
    setDrillSelected(null);
    setIsDrillCorrect(null);

    // Generate 3 random wrong options
    const wrongOptions = dataset
      .filter(k => k.romaji !== randomTarget.romaji)
      .map(k => k.romaji)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const options = [randomTarget.romaji, ...wrongOptions].sort(() => 0.5 - Math.random());
    setDrillOptions(options);

    speakJapanese(randomTarget.kana);
  };

  const handleSelectDrillOption = (romaji: string) => {
    if (!drillTarget || drillSelected !== null) return;
    setDrillSelected(romaji);
    const correct = romaji === drillTarget.romaji;
    setIsDrillCorrect(correct);
    if (correct) {
      setDrillScore(s => s + 1);
      speakJapanese(drillTarget.kana);
    }
  };

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> 50-Sound Phonetic System
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              Kana Dojo • <span className="font-serif text-red-500 font-normal">仮名道場</span>
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Tap any tile to listen to native pronunciation. Switch scripts or launch a rapid drill.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startDrill}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-lg shadow-red-950/50 flex items-center gap-2"
            >
              <Play size={14} fill="white" />
              Practice Drill
            </button>
          </div>
        </div>

        {/* Script & Category Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
          {/* Hiragana / Katakana Switch */}
          <div className="flex bg-neutral-950 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setScript('hiragana')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                script === 'hiragana' ? 'bg-red-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Hiragana (ひらがな)
            </button>
            <button
              onClick={() => setScript('katakana')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                script === 'katakana' ? 'bg-red-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Katakana (カタカナ)
            </button>
          </div>

          {/* Subcategory Pills */}
          <div className="flex gap-2">
            {(['all', 'main', 'dakuten'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition ${
                  filter === cat
                    ? 'bg-neutral-800 text-white border border-neutral-700'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {cat === 'all' ? 'All Characters' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Kana Grid Display */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2.5">
          {filteredData.map((item) => {
            const isSpoken = lastSpoken === item.kana;
            return (
              <button
                key={item.kana}
                onClick={() => handlePlaySound(item)}
                className={`aspect-square p-2.5 rounded-2xl border flex flex-col items-center justify-center transition-all group relative ${
                  isSpoken
                    ? 'bg-red-950/60 border-red-500 shadow-md scale-105'
                    : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60'
                }`}
              >
                <span className="text-2xl font-bold font-serif text-white group-hover:scale-110 transition">
                  {item.kana}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1">{item.romaji}</span>
                <Volume2
                  size={12}
                  className="absolute top-2 right-2 text-neutral-600 group-hover:text-red-400 transition"
                />
              </button>
            );
          })}
        </div>

        {/* Rapid Drill Overlay */}
        {isDrillActive && drillTarget && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono text-amber-400 font-bold">Score: {drillScore}</span>
                <button
                  onClick={() => setIsDrillActive(false)}
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xs text-neutral-400">What is the reading for this character?</p>
                <div className="text-7xl font-bold font-serif text-white py-4 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-center gap-3">
                  <span>{drillTarget.kana}</span>
                  <button
                    onClick={() => speakJapanese(drillTarget.kana)}
                    className="p-2 text-neutral-500 hover:text-white transition"
                  >
                    <Volume2 size={24} />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {drillOptions.map(opt => {
                  let style = 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-white';
                  if (drillSelected !== null) {
                    if (opt === drillTarget.romaji) {
                      style = 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold';
                    } else if (opt === drillSelected) {
                      style = 'bg-red-950 border-red-500 text-red-300 line-through';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      disabled={drillSelected !== null}
                      onClick={() => handleSelectDrillOption(opt)}
                      className={`p-4 rounded-xl border text-sm font-bold font-mono transition ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {drillSelected !== null && (
                <button
                  onClick={nextDrillQuestion}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-red-950/50"
                >
                  Next Character →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
