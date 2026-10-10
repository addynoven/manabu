'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { speakJapanese } from '@/features/content/models/kana';
import rawVocab from '@/data/vocab_n5.json';
import {
  Sparkles,
  Zap,
  Filter,
  CheckCircle2,
  XCircle,
  Volume2,
  Clock,
  Layers,
} from 'lucide-react';

interface CramItem {
  id: string;
  kanji: string;
  kana: string;
  meaning: string;
  level: string;
  category: string;
}

export function CramScreen() {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'n5' | 'n4' | 'n3'>('all');
  const [sessionSize, setSessionSize] = useState<number>(10);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  const allCramItems = useMemo<CramItem[]>(() => {
    return (rawVocab as any[]).map((v) => ({
      id: String(v.jmdict_seq),
      kanji: v.kanji,
      kana: v.kana,
      meaning: v.waller_definition,
      level: 'N5',
      category: 'Vocabulary',
    }));
  }, []);

  const [activeDeck, setActiveDeck] = useState<CramItem[]>([]);

  const startCramSession = () => {
    let pool = allCramItems;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, sessionSize);
    setActiveDeck(selected);
    setCurrentIndex(0);
    setShowAnswer(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsSessionActive(true);
    if (selected[0]) {
      speakJapanese(selected[0].kanji || selected[0].kana);
    }
  };

  const currentItem = activeDeck[currentIndex];

  const handleScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((s) => ({ ...s, correct: s.correct + 1 }));
    } else {
      setScore((s) => ({ ...s, incorrect: s.incorrect + 1 }));
    }

    if (currentIndex + 1 < activeDeck.length) {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
      const nextItem = activeDeck[currentIndex + 1];
      if (nextItem) {
        speakJapanese(nextItem.kanji || nextItem.kana);
      }
    } else {
      setShowAnswer(true);
      setCurrentIndex(activeDeck.length);
    }
  };

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
          <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-accent-gold-subtle text-accent-gold border border-accent-gold/40 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={13} />
                  Cram Studio
                </span>
                <span className="text-xs text-text-muted font-mono">Zero-Penalty Practice Mode</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight flex items-center gap-3">
                <span>集中特訓 • Custom Cram Studio</span>
              </h1>
              <p className="text-text-secondary text-xs sm:text-sm mt-1 max-w-xl">
                Study any dataset on demand without affecting your SRS intervals or forgetting schedules. Ideal for pre-exam blitzes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-background-deep border border-border-hairline px-4 py-2 rounded-xl text-center">
                <span className="text-[10px] text-text-muted uppercase font-mono block">Available Items</span>
                <span className="text-lg font-bold font-mono text-accent-gold">{allCramItems.length}</span>
              </div>
            </div>
          </div>

        {!isSessionActive || currentIndex >= activeDeck.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-[#0a3240]/90 border border-[#17424f] rounded-xl p-6 md:p-8 shadow-xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Filter size={18} className="text-amber-400" />
                  Select Target Proficiency
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'all', label: 'All Levels', desc: 'Mixed curriculum' },
                    { id: 'n5', label: 'JLPT N5', desc: 'Foundations' },
                    { id: 'n4', label: 'JLPT N4', desc: 'Elementary' },
                    { id: 'n3', label: 'JLPT N3', desc: 'Intermediate' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setSelectedLevel(lvl.id as any)}
                      className={`p-4 rounded-2xl border text-left transition ${
                        selectedLevel === lvl.id
                          ? 'bg-amber-950/40 border-amber-500 text-white shadow-md'
                          : 'bg-[#051b22] border-[#17424f] text-[#8fa2aa] hover:border-[#17424f]'
                      }`}
                    >
                      <span className="font-bold text-sm block text-white">{lvl.label}</span>
                      <span className="text-xs text-[#627780]">{lvl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers size={18} className="text-amber-400" />
                  Session Drill Size
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  {[5, 10, 20, 30].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSessionSize(size)}
                      className={`px-6 py-3 rounded-xl border text-sm font-bold transition ${
                        sessionSize === size
                          ? 'bg-amber-500 text-[#051b22] border-amber-400 shadow-md'
                          : 'bg-[#051b22] border-[#17424f] text-[#c1d0d6] hover:border-[#17424f]'
                      }`}
                    >
                      {size} Cards
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#17424f] flex items-center justify-between">
                <p className="text-xs text-[#8fa2aa]">
                  Reviews completed in Cram Studio do not affect regular SRS intervals.
                </p>
                <button
                  onClick={startCramSession}
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#051b22] font-bold rounded-2xl shadow-lg transition flex items-center gap-2"
                >
                  <Zap size={18} />
                  <span>Launch Cram Session</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0a3240]/60 border border-[#17424f] rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock size={16} className="text-amber-400" />
                  Study Session Breakdown
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-[#17424f]">
                    <span className="text-[#8fa2aa]">Filter</span>
                    <span className="text-white font-mono uppercase">{selectedLevel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#17424f]">
                    <span className="text-[#8fa2aa]">Batch Size</span>
                    <span className="text-white font-mono">{sessionSize} items</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#17424f]">
                    <span className="text-[#8fa2aa]">SRS Impact</span>
                    <span className="text-emerald-400 font-bold">Zero (Isolated)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto w-full bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">
                Card {currentIndex + 1} of {activeDeck.length}
              </span>
              <button
                onClick={() => setIsSessionActive(false)}
                className="text-xs text-[#8fa2aa] hover:text-white"
              >
                Exit Session
              </button>
            </div>

            <div className="w-full bg-[#0f3947] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / activeDeck.length) * 100}%` }}
              />
            </div>

            {currentItem && (
              <div className="text-center space-y-6 py-4">
                <div className="text-5xl md:text-6xl font-black font-serif text-white tracking-widest">
                  {currentItem.kanji || currentItem.kana}
                </div>
                <div className="text-xl font-mono text-[#8fa2aa]">{currentItem.kana}</div>

                <button
                  onClick={() => speakJapanese(currentItem.kanji || currentItem.kana)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f3947] hover:bg-[#17424f] rounded-xl text-xs text-[#c1d0d6] transition"
                >
                  <Volume2 size={15} /> Listen
                </button>

                {showAnswer ? (
                  <div className="p-6 bg-[#051b22] border border-[#17424f] rounded-2xl space-y-2 animate-in fade-in">
                    <span className="text-xs uppercase font-mono text-[#627780] block">Definition</span>
                    <p className="text-xl font-bold text-emerald-400">{currentItem.meaning}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-8 py-3 bg-[#0f3947] hover:bg-[#17424f] text-white rounded-xl text-sm font-bold transition"
                  >
                    Show Answer
                  </button>
                )}

                {showAnswer && (
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => handleScore(false)}
                      className="px-6 py-2.5 bg-red-950/60 border border-red-800 hover:bg-red-900/80 text-red-300 font-bold rounded-xl text-sm transition flex items-center gap-2"
                    >
                      <XCircle size={16} /> Needs Work
                    </button>
                    <button
                      onClick={() => handleScore(true)}
                      className="px-6 py-2.5 bg-emerald-950/60 border border-emerald-800 hover:bg-emerald-900/80 text-emerald-300 font-bold rounded-xl text-sm transition flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Got It!
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        </main>
      </div>
    </AuthGate>
  );
}
