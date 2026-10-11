'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { ACADEMY_GUIDES } from '../../models/guides';
import {
  ACADEMY_GRAMMAR_ITEMS,
  AcademyItem,
} from '../../models/academyData';
import {
  AcademyHeader,
  AcademyCategory,
} from './components/AcademyHeader';
import { AcademyTreeOutline } from './components/AcademyTreeOutline';
import { AcademyGrammarDetail } from './components/AcademyGrammarDetail';

export function AcademyScreen() {
  const [selectedTrack, setSelectedTrack] = useState<'jlpt' | 'genki' | 'minna' | 'tobira'>('jlpt');
  const [selectedTier, setSelectedTier] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<AcademyCategory>('all');
  const [selectedItemId, setSelectedItemId] = useState<string>('tewa-ikenai');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Load bookmarks on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('manabu_academy_bookmarks');
        if (saved) {
          setBookmarkedIds(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load bookmarks', e);
      }
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('manabu_academy_bookmarks', JSON.stringify(next));
        } catch (e) {
          console.error('Failed to save bookmarks', e);
        }
      }
      return next;
    });
  };

  // Build unified item list
  const allItems = useMemo<AcademyItem[]>(() => {
    const guides: AcademyItem[] = ACADEMY_GUIDES.map((g) => ({
      type: 'guide',
      data: g,
    }));
    const grammars: AcademyItem[] = ACADEMY_GRAMMAR_ITEMS.map((g) => ({
      type: 'grammar',
      data: g,
    }));
    return [...guides, ...grammars];
  }, []);

  // Filter items dynamically
  const filteredItems = useMemo<AcademyItem[]>(() => {
    return allItems.filter((item) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        if (item.type === 'guide') {
          const g = item.data;
          const matchTitle = g.title.toLowerCase().includes(q);
          const matchJap = g.japaneseTitle.toLowerCase().includes(q);
          const matchSummary = g.summary.toLowerCase().includes(q);
          if (!matchTitle && !matchJap && !matchSummary) return false;
        } else {
          const g = item.data;
          const matchTitle = g.title.toLowerCase().includes(q);
          const matchRomaji = g.romaji.toLowerCase().includes(q);
          const matchMeaning = g.meaning.toLowerCase().includes(q);
          const matchDesc = g.description.toLowerCase().includes(q);
          if (!matchTitle && !matchRomaji && !matchMeaning && !matchDesc) return false;
        }
      }

      // 2. Category Filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'Writing Systems' || activeCategory === 'Grammar' || activeCategory === 'Kanji' || activeCategory === 'Study Tips') {
          if (item.type !== 'guide' || item.data.category !== activeCategory) {
            return false;
          }
        } else {
          if (item.type !== 'grammar' || item.data.category !== activeCategory) {
            return false;
          }
        }
      }

      // 3. Tier & Track Filters (for grammar items when not explicitly searching everywhere)
      if (item.type === 'grammar' && !searchQuery.trim()) {
        const g = item.data;
        if (g.tier !== selectedTier) return false;
        if (!g.tracks.includes(selectedTrack)) return false;
      }

      return true;
    });
  }, [allItems, searchQuery, activeCategory, selectedTier, selectedTrack]);

  // Selected Item fallback
  const selectedItem = useMemo(() => {
    const match = filteredItems.find((i) => {
      const id = i.type === 'guide' ? i.data.id : i.data.id;
      return id === selectedItemId;
    });
    return match || filteredItems[0] || null;
  }, [filteredItems, selectedItemId]);

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const masteredCount = useMemo(() => {
    return filteredItems.filter(
      (i) => i.type === 'grammar' && i.data.defaultMastery === 'mastered'
    ).length;
  }, [filteredItems]);

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
        totalCount={filteredItems.length}
        masteredCount={masteredCount}
      />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-12 gap-6 items-start">
        <AcademyTreeOutline
          items={filteredItems}
          selectedItemId={selectedItem ? (selectedItem.type === 'guide' ? selectedItem.data.id : selectedItem.data.id) : ''}
          onSelectItem={setSelectedItemId}
          bookmarkedIds={bookmarkedIds}
        />

        <AcademyGrammarDetail
          selectedItem={selectedItem}
          onSpeak={speak}
          isBookmarked={
            selectedItem
              ? bookmarkedIds.includes(
                  selectedItem.type === 'guide'
                    ? selectedItem.data.id
                    : selectedItem.data.id
                )
              : false
          }
          onToggleBookmark={() => {
            if (selectedItem) {
              const id =
                selectedItem.type === 'guide'
                  ? selectedItem.data.id
                  : selectedItem.data.id;
              toggleBookmark(id);
            }
          }}
        />
      </main>
    </div>
  );
}
