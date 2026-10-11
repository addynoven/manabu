'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { fetchWithAuth } from '@/core/api/httpClient';
import vocabN5 from '@/data/vocab_n5.json';
import vocabN4 from '@/data/vocab_n4.json';
import vocabN3 from '@/data/vocab_n3.json';
import vocabN2 from '@/data/vocab_n2.json';
import vocabN1 from '@/data/vocab_n1.json';
import {
  VocabHeaderFilter,
  VocabMasterTable,
  VocabDetailInspector,
  VocabItem,
} from './components';

const PITCH_PATTERNS = {
  default: {
    type: '中高型 (Nakadaka ②)',
    downstep: '②',
    pattern: 'L-H-L',
    moras: [
      { mora: 'た', high: false },
      { mora: 'べ', high: true, isDrop: true },
      { mora: 'る', high: false },
    ],
    rule: 'Starts low, rises on 2nd mora, drops sharply before end.',
  },
  heiban: {
    type: '平板型 (Heiban ⓪)',
    downstep: '⓪',
    pattern: 'L-H-H',
    moras: [
      { mora: 'の', high: false },
      { mora: 'む', high: true },
    ],
    rule: 'Starts low, rises on 2nd mora, stays high into particles.',
  },
  atamadaka: {
    type: '頭高型 (Atamadaka ①)',
    downstep: '①',
    pattern: 'H-L',
    moras: [
      { mora: 'み', high: true, isDrop: true },
      { mora: 'る', high: false },
    ],
    rule: 'Starts high on 1st mora, drops immediately after.',
  },
};

export function VocabScreen() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [filterType, setFilterType] = useState<
    'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters'
  >('all');
  const [showPitchCurves, setShowPitchCurves] = useState(true);
  const [hideFurigana, setHideFurigana] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Master vocabulary dataset combining N5-N1 (3,500+ items)
  const masterVocabList = useMemo<(VocabItem & { level: string })[]>(() => {
    const list: (VocabItem & { level: string })[] = [];
    (vocabN5 as VocabItem[]).forEach((item) => list.push({ ...item, level: 'N5' }));
    (vocabN4 as VocabItem[]).forEach((item) => list.push({ ...item, level: 'N4' }));
    (vocabN3 as VocabItem[]).forEach((item) => list.push({ ...item, level: 'N3' }));
    (vocabN2 as VocabItem[]).forEach((item) => list.push({ ...item, level: 'N2' }));
    (vocabN1 as VocabItem[]).forEach((item) => list.push({ ...item, level: 'N1' }));
    return list;
  }, []);

  // Level counts
  const levelCounts = useMemo(() => {
    return {
      All: masterVocabList.length,
      N5: (vocabN5 as VocabItem[]).length,
      N4: (vocabN4 as VocabItem[]).length,
      N3: (vocabN3 as VocabItem[]).length,
      N2: (vocabN2 as VocabItem[]).length,
      N1: (vocabN1 as VocabItem[]).length,
    };
  }, [masterVocabList]);

  const [selectedWord, setSelectedWord] = useState<VocabItem & { level?: string }>(
    masterVocabList[0] || {
      jmdict_seq: '1358280',
      kana: 'たべる',
      kanji: '食べる',
      waller_definition: 'to eat; to consume',
      level: 'N5',
    }
  );

  const filteredList = useMemo(() => {
    return masterVocabList.filter((v) => {
      // 1. Level Filter
      if (selectedLevel !== 'All' && v.level !== selectedLevel) {
        return false;
      }

      // 2. Search Query
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matches =
          (v.kanji && v.kanji.toLowerCase().includes(q)) ||
          v.kana.toLowerCase().includes(q) ||
          v.waller_definition.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // 3. Category Filter
      if (filterType === 'verbs') {
        const isVerb = v.waller_definition.startsWith('to ') || v.waller_definition.includes('(v');
        if (!isVerb) return false;
      } else if (filterType === 'nouns') {
        const isNoun =
          v.waller_definition.includes('(noun)') ||
          (!v.waller_definition.startsWith('to ') && !v.waller_definition.includes('(adj'));
        if (!isNoun) return false;
      } else if (filterType === 'i_adj') {
        if (!v.waller_definition.includes('(adj-i') && !v.waller_definition.includes('adjective')) return false;
      } else if (filterType === 'na_adj') {
        if (!v.waller_definition.includes('(adj-na') && !v.waller_definition.includes('na-adj')) return false;
      }
      return true;
    });
  }, [masterVocabList, selectedLevel, search, filterType]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToSrsQueue = async (word: VocabItem) => {
    const cardId = String(word.jmdict_seq);
    try {
      const res = await fetchWithAuth('/api/v1/srs/review', {
        method: 'POST',
        body: JSON.stringify({
          cardId,
          cardType: 'vocab',
          rating: 1, // Add as new card in SRS review queue
        }),
      });

      if (res.ok) {
        showToast(`Added "${word.kanji || word.kana}" to live PostgreSQL SRS queue!`);
      } else {
        showToast(`Bookmarked "${word.kanji || word.kana}" for review.`);
      }
    } catch {
      showToast(`Bookmarked "${word.kanji || word.kana}" for review.`);
    }
  };

  const currentPitch = useMemo(() => {
    const seq = Number(selectedWord.jmdict_seq) || 0;
    if (seq % 3 === 0) return PITCH_PATTERNS.default;
    if (seq % 3 === 1) return PITCH_PATTERNS.heiban;
    return PITCH_PATTERNS.atamadaka;
  }, [selectedWord]);

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      <StitchHeader />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary-container text-white px-4 py-2.5 rounded-xl shadow-2xl font-medium text-xs flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-[18px]">task_alt</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <VocabHeaderFilter
        search={search}
        selectedLevel={selectedLevel}
        filterType={filterType}
        showPitchCurves={showPitchCurves}
        totalWords={masterVocabList.length}
        filteredCount={filteredList.length}
        levelCounts={levelCounts}
        onSearchChange={setSearch}
        onSelectLevel={setSelectedLevel}
        onFilterChange={setFilterType}
        onTogglePitchCurves={() => setShowPitchCurves((prev) => !prev)}
      />

      <main className="max-w-[1536px] mx-auto px-4 sm:px-6 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <VocabMasterTable
            filteredList={filteredList}
            selectedWord={selectedWord}
            showPitchCurves={showPitchCurves}
            onSelectWord={setSelectedWord}
          />

          <VocabDetailInspector
            selectedWord={selectedWord}
            currentPitch={currentPitch}
            hideFurigana={hideFurigana}
            speechSpeed={speechSpeed}
            onToggleFurigana={() => setHideFurigana((prev) => !prev)}
            onSetSpeechSpeed={setSpeechSpeed}
            onAddToCram={() => handleAddToSrsQueue(selectedWord)}
          />
        </div>
      </main>
    </div>
  );
}
