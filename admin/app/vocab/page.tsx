'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '@/components/AppShell';
import { speakJapanese } from '@/data/kana';
import rawVocab from '@/data/vocab_n5.json';
import {
  Sparkles,
  Search,
  Volume2,
  BookOpen,
  Check,
  RotateCcw,
  Star,
  Play,
  X,
  Filter,
} from 'lucide-react';

interface VocabItem {
  jmdict_seq: string;
  kana: string;
  kanji: string;
  waller_definition: string;
}

export default function VocabPage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'verbs' | 'adjectives' | 'nouns'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Quick Flashcard / Practice state
  const [activeCard, setActiveCard] = useState<VocabItem | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [drillMode, setDrillMode] = useState(false);
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillScore, setDrillScore] = useState(0);
  const [drillOptions, setDrillOptions] = useState<string[]>([]);
  const [drillAnswered, setDrillAnswered] = useState<string | null>(null);

  const vocabList = useMemo(() => {
    return (rawVocab as VocabItem[]).filter(v => {
      // Search
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        v.kanji.toLowerCase().includes(q) ||
        v.kana.toLowerCase().includes(q) ||
        v.waller_definition.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // Type filter
      if (filterType === 'verbs') {
        const isVerb = v.waller_definition.startsWith('to ') || v.waller_definition.includes('(v');
        if (!isVerb) return false;
      } else if (filterType === 'adjectives') {
        const isAdj = v.waller_definition.includes('(adj') || v.waller_definition.includes('adjective');
        if (!isAdj) return false;
      } else if (filterType === 'nouns') {
        const isNoun = v.waller_definition.includes('(noun)') || (!v.waller_definition.startsWith('to ') && !v.waller_definition.includes('(adj'));
        if (!isNoun) return false;
      }

      // Favorite filter
      if (showOnlyFavorites && !favorites.includes(v.jmdict_seq)) {
        return false;
      }

      return true;
    });
  }, [search, filterType, showOnlyFavorites, favorites]);

  const toggleFavorite = (seq: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(seq) ? prev.filter(s => s !== seq) : [...prev, seq]
    );
  };

  const playSound = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakJapanese(text);
  };

  // Start Practice Drill
  const startDrill = () => {
    if (vocabList.length === 0) return;
    setDrillMode(true);
    setDrillIndex(0);
    setDrillScore(0);
    loadDrillQuestion(0);
  };

  const loadDrillQuestion = (idx: number) => {
    const target = vocabList[idx];
    if (!target) return;

    setDrillAnswered(null);
    playSound(target.kanji || target.kana);

    // Pick 3 random wrong definitions
    const wrong = (rawVocab as VocabItem[])
      .filter(item => item.jmdict_seq !== target.jmdict_seq)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(item => item.waller_definition);

    const opts = [target.waller_definition, ...wrong].sort(() => 0.5 - Math.random());
    setDrillOptions(opts);
  };

  const answerDrill = (opt: string) => {
    if (drillAnswered !== null) return;
    setDrillAnswered(opt);
    const target = vocabList[drillIndex];
    if (opt === target.waller_definition) {
      setDrillScore(s => s + 1);
      // Give XP in local storage
      try {
        const xp = Number(localStorage.getItem('manabu_web_xp') || '480') + 5;
        localStorage.setItem('manabu_web_xp', String(xp));
      } catch {}
    }
  };

  const nextDrill = () => {
    if (drillIndex + 1 < Math.min(vocabList.length, 10)) {
      setDrillIndex(i => i + 1);
      loadDrillQuestion(drillIndex + 1);
    } else {
      // Completed drill
      setDrillAnswered('DONE');
    }
  };

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> JLPT N5 Master Vocabulary
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              Vocabulary Deck • <span className="font-serif text-red-500 font-normal">単語集</span>
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Over {rawVocab.length} core words with furigana, English definitions, and native voice pronunciation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startDrill}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-lg shadow-red-950/50 flex items-center gap-2"
            >
              <Play size={14} fill="white" />
              Practice 10 Words
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
          {/* Part of Speech Switcher */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Words' },
              { id: 'verbs', label: 'Verbs (動詞)' },
              { id: 'adjectives', label: 'Adjectives (形容詞)' },
              { id: 'nouns', label: 'Nouns (名詞)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  filterType === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                    : 'bg-neutral-850 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <button
              onClick={() => setShowOnlyFavorites(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                showOnlyFavorites
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              <Star size={13} fill={showOnlyFavorites ? 'currentColor' : 'none'} />
              Favorites ({favorites.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search kanji, kana, English..."
              className="bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 w-full md:w-72"
            />
          </div>
        </div>

        {/* Vocab Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {vocabList.slice(0, 80).map(item => {
            const isFav = favorites.includes(item.jmdict_seq);
            return (
              <div
                key={item.jmdict_seq}
                onClick={() => {
                  setActiveCard(item);
                  setIsFlipped(false);
                  playSound(item.kanji || item.kana);
                }}
                className="group relative bg-neutral-900/60 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 p-4 rounded-2xl transition duration-200 cursor-pointer flex flex-col justify-between hover:shadow-lg hover:shadow-red-950/20"
              >
                <div>
                  {/* Top row: Furigana / Kana and favorite */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-neutral-400 tracking-wide">
                      {item.kana}
                    </span>
                    <button
                      onClick={e => toggleFavorite(item.jmdict_seq, e)}
                      className="text-neutral-600 hover:text-amber-400 transition p-1"
                    >
                      <Star size={14} fill={isFav ? '#f59e0b' : 'none'} className={isFav ? 'text-amber-400' : ''} />
                    </button>
                  </div>

                  {/* Japanese Word (Kanji) */}
                  <h3 className="text-2xl font-black text-white font-serif tracking-tight group-hover:text-red-400 transition">
                    {item.kanji || item.kana}
                  </h3>
                </div>

                {/* Bottom row: English Meaning + Audio Button */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <p className="text-xs text-neutral-300 font-medium line-clamp-1">
                    {item.waller_definition}
                  </p>
                  <button
                    onClick={e => playSound(item.kanji || item.kana, e)}
                    className="p-1.5 rounded-lg bg-neutral-800 group-hover:bg-red-600/30 text-neutral-400 group-hover:text-red-400 transition shrink-0 ml-2"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {vocabList.length === 0 && (
          <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800/60">
            <BookOpen size={36} className="mx-auto text-neutral-600 mb-3" />
            <h3 className="text-sm font-bold text-neutral-300">No words match your filters</h3>
            <p className="text-xs text-neutral-500 mt-1">Try adjusting your search terms or filter tags.</p>
          </div>
        )}

        {/* Modal: Interactive Flashcard Viewer */}
        {activeCard && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} /> JLPT N5 Card
                </span>
                <button
                  onClick={() => setActiveCard(null)}
                  className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Card Face */}
              <div
                onClick={() => setIsFlipped(f => !f)}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 text-center cursor-pointer hover:border-red-500/50 transition duration-300 min-h-[220px] flex flex-col items-center justify-center relative shadow-inner"
              >
                {!isFlipped ? (
                  <>
                    <p className="text-sm text-neutral-400 mb-2 font-mono">{activeCard.kana}</p>
                    <h2 className="text-5xl font-black text-white font-serif tracking-tight mb-4">
                      {activeCard.kanji || activeCard.kana}
                    </h2>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-bold">
                      Tap card to reveal English meaning
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-red-400 font-bold uppercase tracking-wider mb-2">
                      Definition
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activeCard.waller_definition}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono mt-1">Reading: {activeCard.kana}</p>
                  </>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => playSound(activeCard.kanji || activeCard.kana)}
                  className="flex-1 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <Volume2 size={16} /> Listen Again
                </button>
                <button
                  onClick={() => setIsFlipped(f => !f)}
                  className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-red-950/50"
                >
                  <RotateCcw size={16} /> Flip Card
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Practice Drill Session */}
        {drillMode && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6">
              {drillAnswered !== 'DONE' && vocabList[drillIndex] ? (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-red-400 font-bold uppercase tracking-wider">
                        Question {drillIndex + 1} of {Math.min(vocabList.length, 10)}
                      </span>
                      <p className="text-xs text-neutral-400">Score: {drillScore} correct</p>
                    </div>
                    <button
                      onClick={() => setDrillMode(false)}
                      className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Target Word */}
                  <div className="text-center py-6 bg-neutral-950 rounded-2xl border border-neutral-800">
                    <p className="text-xs text-neutral-400 font-mono mb-1">{vocabList[drillIndex].kana}</p>
                    <h2 className="text-4xl font-black text-white font-serif mb-3">
                      {vocabList[drillIndex].kanji || vocabList[drillIndex].kana}
                    </h2>
                    <button
                      onClick={() => playSound(vocabList[drillIndex].kanji || vocabList[drillIndex].kana)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs hover:text-white"
                    >
                      <Volume2 size={13} /> Pronounce
                    </button>
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="space-y-2">
                    {drillOptions.map(opt => {
                      const isCorrect = opt === vocabList[drillIndex].waller_definition;
                      const isSelected = drillAnswered === opt;

                      let btnStyle = 'bg-neutral-950 border-neutral-800 text-neutral-200 hover:border-neutral-700';
                      if (drillAnswered !== null) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-300';
                        } else if (isSelected) {
                          btnStyle = 'bg-red-950/70 border-red-500 text-red-300';
                        } else {
                          btnStyle = 'opacity-40 border-neutral-800 text-neutral-500';
                        }
                      }

                      return (
                        <button
                          key={opt}
                          disabled={drillAnswered !== null}
                          onClick={() => answerDrill(opt)}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {drillAnswered !== null && (
                    <button
                      onClick={nextDrill}
                      className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition shadow-lg shadow-red-950/50"
                    >
                      {drillIndex + 1 < Math.min(vocabList.length, 10) ? 'Next Word →' : 'Complete Drill'}
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    🥋
                  </div>
                  <h3 className="text-2xl font-black text-white">Drill Complete!</h3>
                  <p className="text-xs text-neutral-300">
                    You scored <span className="font-bold text-emerald-400">{drillScore} / {Math.min(vocabList.length, 10)}</span>. Keep sharpening your Japanese vocabulary!
                  </p>
                  <button
                    onClick={() => setDrillMode(false)}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition"
                  >
                    Back to Vocabulary
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
