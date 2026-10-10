'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { speakJapanese } from '../../models/kana';
import n5Kanji from '@/data/kanji_n5.json';
import {
  KanjiSidebarFilter,
  KanjiGridList,
  KanjiDetailInspector,
  KanjiEntry,
} from './components';

export function KanjiScreen() {
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

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      <StitchHeader onSearchClick={() => {}} />

      <main className="w-full max-w-[1536px] mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-5 items-start">
        <KanjiSidebarFilter
          search={search}
          selectedLevel={selectedLevel}
          selectedRadical={selectedRadical}
          onSearchChange={setSearch}
          onSelectLevel={setSelectedLevel}
          onSelectRadical={setSelectedRadical}
        />

        <KanjiGridList
          kanjiList={kanjiList}
          activeKanji={activeKanji}
          viewMode={viewMode}
          onSelectKanji={setActiveKanji}
          onSetViewMode={setViewMode}
        />

        <KanjiDetailInspector
          activeKanji={activeKanji}
          activeStroke={activeStroke}
          onAnimateStroke={() => {
            setActiveStroke((prev) => (prev >= 9 ? 1 : prev + 1));
            speakJapanese(activeKanji.kanjiChar);
          }}
        />
      </main>
    </div>
  );
}
