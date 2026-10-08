'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { speakJapanese } from '@/data/kana';
import n5Kanji from '@/data/kanji_n5.json';
import { BookOpen, Search, Volume2, Sparkles, Filter, X } from 'lucide-react';

interface KanjiEntry {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  meanings: string[];
}

export default function KanjiVaultPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('N5');
  const [activeKanji, setActiveKanji] = useState<KanjiEntry | null>(null);

  const kanjiList = (n5Kanji as KanjiEntry[]).filter(k => {
    if (!search.trim()) return true;
    const q = search.toLowerCase().trim();
    return (
      k.kanjiChar.includes(q) ||
      k.meanings.some(m => m.toLowerCase().includes(q)) ||
      k.onyomi.some(o => o.toLowerCase().includes(q)) ||
      k.kunyomi.some(ku => ku.toLowerCase().includes(q))
    );
  });

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> JLPT Master Lexicon
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              Kanji Vault • <span className="font-serif text-red-500 font-normal">漢字書庫</span>
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Explore authentic Japanese characters with readings, on&apos;yomi, kun&apos;yomi, and meanings.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search kanji, reading, meaning..."
                className="bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 w-64 md:w-80"
              />
            </div>
          </div>
        </div>

        {/* Level Filters */}
        <div className="flex gap-2">
          {['N5', 'N4', 'N3', 'N2', 'N1'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedLevel === lvl
                  ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {lvl} {lvl === 'N5' ? `(${kanjiList.length})` : '(Coming soon)'}
            </button>
          ))}
        </div>

        {/* Kanji Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {kanjiList.map(k => (
            <button
              key={k.id}
              onClick={() => {
                setActiveKanji(k);
                speakJapanese(k.kanjiChar);
              }}
              className="bg-neutral-900/80 border border-neutral-800/80 hover:border-red-500/60 p-4 rounded-2xl flex flex-col items-center justify-center transition group relative hover:scale-105 shadow-sm"
            >
              <span className="text-4xl font-serif font-bold text-white mb-2 group-hover:text-red-400 transition">
                {k.kanjiChar}
              </span>
              <span className="text-[11px] font-medium text-neutral-300 text-center truncate w-full">
                {k.meanings[0]}
              </span>
              <span className="text-[10px] text-neutral-500 font-mono mt-0.5 truncate w-full text-center">
                {k.onyomi[0]?.split(' ')[0] || k.kunyomi[0]?.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Kanji Detail Modal */}
        {activeKanji && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setActiveKanji(null)}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg transition"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-3xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-inner shrink-0">
                  <span className="text-7xl font-serif font-bold text-white">{activeKanji.kanjiChar}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 border border-red-800/60 px-2.5 py-0.5 rounded-full">
                    JLPT N5
                  </span>
                  <h2 className="text-2xl font-black text-white capitalize">
                    {activeKanji.meanings.join(', ')}
                  </h2>
                  <button
                    onClick={() => speakJapanese(activeKanji.kanjiChar)}
                    className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white pt-1 transition"
                  >
                    <Volume2 size={16} className="text-red-400" />
                    <span>Listen Pronunciation</span>
                  </button>
                </div>
              </div>

              {/* Readings Section */}
              <div className="grid grid-cols-2 gap-4 bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                <div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    On&apos;yomi (音読み)
                  </span>
                  <div className="space-y-1">
                    {activeKanji.onyomi.length > 0 ? (
                      activeKanji.onyomi.map(o => (
                        <p key={o} className="text-xs font-medium text-amber-400 font-mono">
                          {o}
                        </p>
                      ))
                    ) : (
                      <p className="text-xs text-neutral-600">—</p>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    Kun&apos;yomi (訓読み)
                  </span>
                  <div className="space-y-1">
                    {activeKanji.kunyomi.length > 0 ? (
                      activeKanji.kunyomi.map(ku => (
                        <p key={ku} className="text-xs font-medium text-emerald-400 font-mono">
                          {ku}
                        </p>
                      ))
                    ) : (
                      <p className="text-xs text-neutral-600">—</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    speakJapanese(activeKanji.kanjiChar);
                    setActiveKanji(null);
                  }}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-red-950/50"
                >
                  Mark as Studied & Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
