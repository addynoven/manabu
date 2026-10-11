'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { speakJapanese } from '../../models/kana';
import n5Kanji from '@/data/kanji_n5.json';
import n4Kanji from '@/data/kanji_n4.json';
import n3Kanji from '@/data/kanji_n3.json';
import n2Kanji from '@/data/kanji_n2.json';
import n1Kanji from '@/data/kanji_n1.json';
import kanjivgRaw from '@/data/kanjivgData.json';
import {
  KanjiSidebarFilter,
  KanjiGridList,
  KanjiDetailInspector,
  KanjiEntry,
} from './components';

export function KanjiScreen() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedRadical, setSelectedRadical] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('JLPT Curriculum (Ascending)');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [activeStroke, setActiveStroke] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  // Combine all 5 JLPT kanji datasets into one master array (2,495 total kanji)
  const masterKanjiList = useMemo<KanjiEntry[]>(() => {
    const list: KanjiEntry[] = [];

    (n5Kanji as any[]).forEach((item, idx) => {
      list.push({ ...item, id: idx + 1, level: 'N5' });
    });
    (n4Kanji as any[]).forEach((item, idx) => {
      list.push({ ...item, id: 1000 + idx + 1, level: 'N4' });
    });
    (n3Kanji as any[]).forEach((item, idx) => {
      list.push({ ...item, id: 2000 + idx + 1, level: 'N3' });
    });
    (n2Kanji as any[]).forEach((item, idx) => {
      list.push({ ...item, id: 3000 + idx + 1, level: 'N2' });
    });
    (n1Kanji as any[]).forEach((item, idx) => {
      list.push({ ...item, id: 4000 + idx + 1, level: 'N1' });
    });

    return list;
  }, []);

  // Level counts map
  const levelCounts = useMemo(() => {
    return {
      All: masterKanjiList.length,
      N5: (n5Kanji as any[]).length,
      N4: (n4Kanji as any[]).length,
      N3: (n3Kanji as any[]).length,
      N2: (n2Kanji as any[]).length,
      N1: (n1Kanji as any[]).length,
    };
  }, [masterKanjiList]);

  // Active Kanji state initialized with first character
  const [activeKanji, setActiveKanji] = useState<KanjiEntry>(
    masterKanjiList[0] || {
      id: 1,
      kanjiChar: '日',
      onyomi: ['ニチ', 'ジツ'],
      kunyomi: ['ひ', '-び', '-か'],
      meanings: ['Day', 'Sun', 'Japan'],
      level: 'N5',
    }
  );

  // Filtered and Sorted Kanji List
  const filteredKanjiList = useMemo(() => {
    let result = masterKanjiList.filter((k) => {
      // 1. Level Filter
      if (selectedLevel !== 'All' && k.level !== selectedLevel) {
        return false;
      }

      // 2. Radical Filter
      if (selectedRadical) {
        const containsRadical =
          k.kanjiChar.includes(selectedRadical) ||
          k.radical === selectedRadical ||
          k.meanings.some((m) => m.toLowerCase().includes(selectedRadical.toLowerCase()));
        if (!containsRadical) return false;
      }

      // 3. Search Query
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

    // 4. Sorting Logic
    if (sortOption.includes('Stroke Count (Fewest')) {
      result = [...result].sort((a, b) => (a.kanjiChar.length || 1) - (b.kanjiChar.length || 1));
    } else if (sortOption.includes('Stroke Count (Most')) {
      result = [...result].sort((a, b) => (b.kanjiChar.length || 1) - (a.kanjiChar.length || 1));
    } else if (sortOption.includes('Alphabetical')) {
      result = [...result].sort((a, b) => a.meanings[0]?.localeCompare(b.meanings[0] || '') || 0);
    }

    return result;
  }, [masterKanjiList, selectedLevel, selectedRadical, search, sortOption]);

  // Paginated List
  const totalPages = Math.max(1, Math.ceil(filteredKanjiList.length / pageSize));
  const currentPageSafe = Math.min(currentPage, totalPages);

  const paginatedKanjiList = useMemo(() => {
    const startIndex = (currentPageSafe - 1) * pageSize;
    return filteredKanjiList.slice(startIndex, startIndex + pageSize);
  }, [filteredKanjiList, currentPageSafe, pageSize]);

  // KanjiVG vector paths for active kanji
  const activeSvgPaths = useMemo<string[]>(() => {
    if (!activeKanji || !activeKanji.kanjiChar) return [];
    const entry = (kanjivgRaw as Record<string, any>)[activeKanji.kanjiChar];
    if (entry && Array.isArray(entry.paths)) {
      return entry.paths;
    }
    // Default fallback stroke path
    return ['M51.5,12.25c0.12,1.14-0.19,2.69-0.81,4.24C46.88,26.04,33.9,42.5,15.75,54.75'];
  }, [activeKanji]);

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      <StitchHeader onSearchClick={() => {}} />

      <main className="w-full max-w-[1536px] mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-5 items-start">
        <KanjiSidebarFilter
          search={search}
          selectedLevel={selectedLevel}
          selectedRadical={selectedRadical}
          sortOption={sortOption}
          levelCounts={levelCounts}
          onSearchChange={(val) => {
            setSearch(val);
            setCurrentPage(1);
          }}
          onSelectLevel={(lvl) => {
            setSelectedLevel(lvl);
            setCurrentPage(1);
          }}
          onSelectRadical={(rad) => {
            setSelectedRadical(rad);
            setCurrentPage(1);
          }}
          onSortChange={setSortOption}
        />

        <KanjiGridList
          kanjiList={paginatedKanjiList}
          totalFilteredCount={filteredKanjiList.length}
          activeKanji={activeKanji}
          viewMode={viewMode}
          selectedLevel={selectedLevel}
          currentPage={currentPageSafe}
          totalPages={totalPages}
          onSelectKanji={setActiveKanji}
          onSetViewMode={setViewMode}
          onSetPage={setCurrentPage}
        />

        <KanjiDetailInspector
          activeKanji={activeKanji}
          activeStroke={activeStroke}
          svgPaths={activeSvgPaths}
          onAnimateStroke={() => {
            setActiveStroke((prev) => (prev >= activeSvgPaths.length ? 1 : prev + 1));
            speakJapanese(activeKanji.kanjiChar);
          }}
        />
      </main>
    </div>
  );
}
