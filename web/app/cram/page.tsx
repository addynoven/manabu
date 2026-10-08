'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { AppShell } from '@/components/AppShell';
import { speakJapanese } from '@/data/kana';
import rawVocab from '@/data/vocab_n5.json';
import {
  Sparkles,
  Zap,
  Filter,
  CheckCircle2,
  XCircle,
  Volume2,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Flame,
  Award,
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

export default function CramStudioPage() {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'n5' | 'n4' | 'n3'>('all');
  const [sessionSize, setSessionSize] = useState<number>(10);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  // Load items from database
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
    // Shuffle pool
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
      // Completed session
      setShowAnswer(true);
      setCurrentIndex(activeDeck.length);
    }
  };

  return (
    <AppShell>
      <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Header matching Stitch Screen #2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-amber-950/80 text-amber-400 border border-amber-800/60 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Zap size={13} />
                Cram Studio
              </span>
              <span className="text-xs text-neutral-400 font-mono">Zero-Penalty Practice Mode</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3 font-serif">
              <span>集中特訓</span>
              <span className="text-neutral-400 font-sans font-medium text-2xl">Custom Cram Studio</span>
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Study any dataset on demand without affecting your SRS intervals or forgetting schedules. Ideal for pre-exam blitzes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl text-center">
              <span className="text-[10px] text-neutral-500 uppercase font-mono block">Available Items</span>
              <span className="text-lg font-bold font-mono text-amber-400">{allCramItems.length}</span>
            </div>
          </div>
        </div>

        {!isSessionActive || currentIndex >= activeDeck.length ? (
          /* Cram Configuration Panel matching Stitch Screen #2 */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-8">
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
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="font-bold text-sm block text-white">{lvl.label}</span>
                      <span className="text-xs text-neutral-500">{lvl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Size Picker */}
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
                          ? 'bg-amber-500 text-neutral-950 border-amber-400 shadow-md'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {size} Cards
                    </button>
                  ))}
                </div>
              </div>

              {/* Launch CTA */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <p className="text-xs text-neutral-400">
                  Reviews completed in Cram Studio do not affect regular SRS intervals.
                </p>
                <button
                  onClick={startCramSession}
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold rounded-2xl shadow-lg transition flex items-center gap-2"
                >
                  <Zap size={18} />
                  <span>Launch Cram Session</span>
                </button>
              </div>
            </div>

            {/* Sidebar Summary Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock size={16} className="text-amber-400" />
                  Study Session Breakdown
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Filter</span>
                    <span className="text-white font-mono uppercase">{selectedLevel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Batch Size</span>
                    <span className="text-white font-mono">{sessionSize} items</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-800">
                    <span className="text-neutral-400">SRS Impact</span>
                    <span className="text-emerald-400 font-bold">Zero (Isolated)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Active Cram Flashcard Stage */
          <div className="max-w-2xl mx-auto w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">
                Card {currentIndex + 1} of {activeDeck.length}
              </span>
              <button
                onClick={() => setIsSessionActive(false)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Exit Session
              </button>
            </div>

            {/* Stage Progress Bar */}
            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / activeDeck.length) * 100}%` }}
              />
            </div>

            {/* Flashcard Body */}
            {currentItem && (
              <div className="text-center space-y-6 py-4">
                <div className="text-5xl md:text-6xl font-black font-serif text-white tracking-widest">
                  {currentItem.kanji || currentItem.kana}
                </div>
                <div className="text-xl font-mono text-neutral-400">{currentItem.kana}</div>

                <button
                  onClick={() => speakJapanese(currentItem.kanji || currentItem.kana)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-xl text-xs text-neutral-300 transition"
                >
                  <Volume2 size={15} /> Listen
                </button>

                {showAnswer ? (
                  <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-2 animate-in fade-in">
                    <span className="text-xs uppercase font-mono text-neutral-500 block">Definition</span>
                    <p className="text-xl font-bold text-emerald-400">{currentItem.meaning}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-sm font-bold transition"
                  >
                    Show Answer
                  </button>
                )}

                {/* Score Controls */}
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
      </div>
    </AppShell>
  );
}
