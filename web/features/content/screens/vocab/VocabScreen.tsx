'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { speakJapanese } from '../../models/kana';
import rawVocab from '@/data/vocab_n5.json';
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
  const [filterType, setFilterType] = useState<
    'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters'
  >('all');
  const [showPitchCurves, setShowPitchCurves] = useState(true);
  const [selectedWord, setSelectedWord] = useState<VocabItem>(
    (rawVocab as VocabItem[])[0] || {
      jmdict_seq: '1358280',
      kana: 'たべる',
      kanji: '食べる',
      waller_definition: 'to eat; to consume',
    }
  );
  const [hideFurigana, setHideFurigana] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredList = useMemo(() => {
    return (rawVocab as VocabItem[]).filter((v) => {
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matches =
          v.kanji.toLowerCase().includes(q) ||
          v.kana.toLowerCase().includes(q) ||
          v.waller_definition.toLowerCase().includes(q);
        if (!matches) return false;
      }

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
  }, [search, filterType]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
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
        filterType={filterType}
        showPitchCurves={showPitchCurves}
        totalWords={rawVocab.length}
        filteredCount={filteredList.length}
        onSearchChange={setSearch}
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
            onAddToCram={(word) => showToast(`Added "${word}" to SRS Review Deck!`)}
          />
        </div>
      </main>
    </div>
  );
}
