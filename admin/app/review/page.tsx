'use client';

import React, { useState, useEffect } from 'react';
import { AppShell } from '@/components/AppShell';
import { speakJapanese } from '@/data/kana';
import rawVocab from '@/data/vocab_n5.json';
import {
  RefreshCw,
  Sparkles,
  Flame,
  CheckCircle2,
  XCircle,
  Volume2,
  Award,
  Zap,
  RotateCcw,
  Check,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

interface SrsItem {
  id: string;
  kanji: string;
  kana: string;
  meaning: string;
  stage: number; // 1-4: Apprentice, 5-6: Guru, 7: Master, 8: Enlightened, 9: Burned
  dueAt: number; // timestamp
}

const STAGE_NAMES = [
  'Locked',
  'Apprentice I',
  'Apprentice II',
  'Apprentice III',
  'Apprentice IV',
  'Guru I',
  'Guru II',
  'Master',
  'Enlightened',
  'Burned 🏆',
];

const STAGE_COLORS = [
  'text-neutral-500 bg-neutral-900 border-neutral-800',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'text-amber-400 bg-amber-500/10 border-amber-500/30',
];

export default function SrsReviewPage() {
  const [deck, setDeck] = useState<SrsItem[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });

  // Load or seed SRS deck from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('manabu_web_srs_deck');
      if (saved) {
        setDeck(JSON.parse(saved));
      } else {
        // Seed default starter deck from rawVocab
        const starter: SrsItem[] = (rawVocab as any[]).slice(0, 16).map((item, idx) => ({
          id: item.jmdict_seq,
          kanji: item.kanji,
          kana: item.kana,
          meaning: item.waller_definition,
          stage: (idx % 4) + 1, // Start across Apprentice I - IV
          dueAt: Date.now() - 1000 * 60 * (idx * 5), // mark due now
        }));
        setDeck(starter);
        localStorage.setItem('manabu_web_srs_deck', JSON.stringify(starter));
      }
    } catch {}
  }, []);

  const saveDeck = (updated: SrsItem[]) => {
    setDeck(updated);
    try {
      localStorage.setItem('manabu_web_srs_deck', JSON.stringify(updated));
    } catch {}
  };

  const dueItems = deck.filter(item => item.dueAt <= Date.now() && item.stage < 9);

  // Group counts by major tier
  const apprenticeCount = deck.filter(i => i.stage >= 1 && i.stage <= 4).length;
  const guruCount = deck.filter(i => i.stage >= 5 && i.stage <= 6).length;
  const masterCount = deck.filter(i => i.stage === 7).length;
  const enlightenedCount = deck.filter(i => i.stage === 8).length;
  const burnedCount = deck.filter(i => i.stage === 9).length;

  const startSession = () => {
    if (dueItems.length === 0) return;
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionResults({ correct: 0, incorrect: 0 });
    setIsReviewing(true);
    speakJapanese(dueItems[0].kanji || dueItems[0].kana);
  };

  const currentItem = dueItems[currentIndex];

  const handleRate = (promoted: boolean) => {
    if (!currentItem) return;

    const newStage = promoted
      ? Math.min(9, currentItem.stage + 1)
      : Math.max(1, currentItem.stage - 1);

    // Exponential SRS interval: 4h, 8h, 1d, 3d, 1w, 2w, 1mo, 4mo
    const intervalsHours = [0, 4, 8, 24, 72, 168, 336, 720, 2880, 999999];
    const nextDue = Date.now() + intervalsHours[newStage] * 60 * 60 * 1000;

    const updatedDeck = deck.map(item =>
      item.id === currentItem.id ? { ...item, stage: newStage, dueAt: nextDue } : item
    );
    saveDeck(updatedDeck);

    // Award XP
    if (promoted) {
      setSessionResults(r => ({ ...r, correct: r.correct + 1 }));
      try {
        const curXp = Number(localStorage.getItem('manabu_web_xp') || '480') + 10;
        localStorage.setItem('manabu_web_xp', String(curXp));
      } catch {}
    } else {
      setSessionResults(r => ({ ...r, incorrect: r.incorrect + 1 }));
    }

    // Advance to next
    if (currentIndex + 1 < dueItems.length) {
      setCurrentIndex(i => i + 1);
      setShowAnswer(false);
      speakJapanese(dueItems[currentIndex + 1].kanji || dueItems[currentIndex + 1].kana);
    } else {
      // Finished
      setShowAnswer(false);
      setCurrentIndex(dueItems.length);
    }
  };

  const addMoreVocabToDeck = () => {
    const existingIds = new Set(deck.map(d => d.id));
    const newItems: SrsItem[] = (rawVocab as any[])
      .filter(v => !existingIds.has(v.jmdict_seq))
      .slice(0, 10)
      .map(item => ({
        id: item.jmdict_seq,
        kanji: item.kanji,
        kana: item.kana,
        meaning: item.waller_definition,
        stage: 1,
        dueAt: Date.now() - 1000,
      }));

    const updated = [...deck, ...newItems];
    saveDeck(updated);
  };

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <RefreshCw size={14} /> Spaced Repetition System (SRS)
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              SRS Dojo • <span className="font-serif text-red-500 font-normal">復習道場</span>
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Scientifically proven spaced intervals (WaniKani/Anki algorithm) to burn vocabulary into long-term memory.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={addMoreVocabToDeck}
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold px-4 py-2.5 rounded-xl text-xs transition"
            >
              + Add 10 Words
            </button>
            <button
              onClick={startSession}
              disabled={dueItems.length === 0}
              className="bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-lg shadow-red-950/50 flex items-center gap-2"
            >
              <Zap size={14} fill="white" />
              Start Review ({dueItems.length} Due)
            </button>
          </div>
        </div>

        {/* SRS Stage Progression Pyramid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          {[
            { name: 'Apprentice', count: apprenticeCount, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
            { name: 'Guru', count: guruCount, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
            { name: 'Master', count: masterCount, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
            { name: 'Enlightened', count: enlightenedCount, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
            { name: 'Burned', count: burnedCount, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
          ].map(tier => (
            <div
              key={tier.name}
              className={`p-4 rounded-2xl border ${tier.border} ${tier.bg} flex flex-col justify-between`}
            >
              <span className={`text-[11px] font-bold uppercase tracking-wider ${tier.color}`}>
                {tier.name}
              </span>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">{tier.count}</span>
                <span className="text-[11px] text-neutral-500">items</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Queue Summary Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 md:p-8 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  Review Queue Active
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">
                {dueItems.length > 0 ? (
                  <>You have <span className="text-red-500">{dueItems.length} items</span> due for review right now.</>
                ) : (
                  <>All caught up! Excellent discipline, warrior.</>
                )}
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-lg">
                Completing your daily reviews prevents forgetting curves and advances your items from Apprentice toward Burned status.
              </p>
            </div>

            <button
              onClick={startSession}
              disabled={dueItems.length === 0}
              className="px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-600 text-white font-bold text-sm transition shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 shrink-0"
            >
              <Zap size={16} fill="white" />
              Launch Review Session
            </button>
          </div>
        </div>

        {/* Active Deck Explorer */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-300 uppercase tracking-wider">
              Items in SRS Dojo ({deck.length})
            </h3>
            <span className="text-xs text-neutral-500">Sorted by next review time</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {deck.slice(0, 30).map(item => {
              const isDue = item.dueAt <= Date.now() && item.stage < 9;
              return (
                <div
                  key={item.id}
                  className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-2xl flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-neutral-400">{item.kana}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${STAGE_COLORS[item.stage]}`}>
                        {STAGE_NAMES[item.stage]}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-serif">{item.kanji || item.kana}</h4>
                    <p className="text-xs text-neutral-400 truncate max-w-[180px]">{item.meaning}</p>
                  </div>

                  <div className="text-right">
                    {isDue ? (
                      <span className="text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-2 py-1 rounded-lg">
                        Ready
                      </span>
                    ) : (
                      <span className="text-[10px] text-neutral-500">
                        {item.stage === 9 ? 'Mastered' : 'Scheduled'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal: Fullscreen SRS Review Drill */}
        {isReviewing && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6">
              {currentIndex < dueItems.length ? (
                <>
                  {/* Top Bar: Progress and Current Stage */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400">
                        Review {currentIndex + 1} of {dueItems.length}
                      </span>
                      <div className="text-xs font-bold text-red-400 mt-0.5">
                        Current: {STAGE_NAMES[currentItem.stage]}
                      </div>
                    </div>
                    <button
                      onClick={() => setIsReviewing(false)}
                      className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Target Card Face */}
                  <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 text-center min-h-[220px] flex flex-col items-center justify-center shadow-inner">
                    <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-2">
                      Prompt: What is the meaning?
                    </span>
                    <h2 className="text-5xl font-black text-white font-serif mb-4">
                      {currentItem.kanji || currentItem.kana}
                    </h2>
                    <button
                      onClick={() => speakJapanese(currentItem.kanji || currentItem.kana)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-850 hover:bg-neutral-800 text-xs text-neutral-300"
                    >
                      <Volume2 size={13} /> Listen
                    </button>

                    {showAnswer && (
                      <div className="mt-6 pt-6 border-t border-neutral-800 w-full animate-in fade-in duration-200">
                        <p className="text-sm font-mono text-red-400 mb-1">Kana: {currentItem.kana}</p>
                        <h3 className="text-xl font-bold text-white">{currentItem.meaning}</h3>
                      </div>
                    )}
                  </div>

                  {/* Controls */}
                  {!showAnswer ? (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition shadow-lg shadow-red-950/50"
                    >
                      Show Answer (Spacebar / Tap)
                    </button>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleRate(false)}
                        className="py-3.5 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-500/40 text-red-300 font-bold text-xs transition flex items-center justify-center gap-2"
                      >
                        <XCircle size={16} /> Incorrect (Drop Stage)
                      </button>
                      <button
                        onClick={() => handleRate(true)}
                        className="py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 size={16} /> Correct (+10 XP)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-3xl">
                    🥋
                  </div>
                  <h3 className="text-2xl font-black text-white">SRS Review Complete!</h3>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    You reviewed all due items with{' '}
                    <span className="font-bold text-emerald-400">{sessionResults.correct} correct</span> and{' '}
                    <span className="font-bold text-red-400">{sessionResults.incorrect} to review again later</span>.
                  </p>
                  <button
                    onClick={() => setIsReviewing(false)}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
