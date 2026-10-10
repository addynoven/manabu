'use client';

import React, { useState } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { ACADEMY_GUIDES } from '../../models/guides';
import {
  AcademyHeader,
  AcademyTreeOutline,
  AcademyGrammarDetail,
} from './components';

export function AcademyScreen() {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(ACADEMY_GUIDES[0]?.id || 'guide-hiragana');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<'jlpt' | 'genki' | 'minna' | 'tobira'>('jlpt');
  const [selectedTier, setSelectedTier] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
  const [activeUnit, setActiveUnit] = useState<number>(3);
  const [activeCategory, setActiveCategory] = useState<'all' | 'particles' | 'conjugations' | 'keigo' | 'expressions'>('conjugations');

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary antialiased flex flex-col font-sans select-none custom-scroll selection:bg-primary-container selection:text-white">
      <StitchHeader />

      <AcademyHeader
        selectedTrack={selectedTrack}
        selectedTier={selectedTier}
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        onSelectTrack={setSelectedTrack}
        onSelectTier={setSelectedTier}
        onSearchChange={setSearchQuery}
        onCategoryChange={setActiveCategory}
      />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-12 gap-6 items-start">
        <AcademyTreeOutline
          activeUnit={activeUnit}
          onSelectUnit={setActiveUnit}
        />

        <AcademyGrammarDetail onSpeak={speak} />
      </main>
    </div>
  );
}
