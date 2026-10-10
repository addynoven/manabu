'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { speakJapanese } from '@/features/content/models/kana';
import rawVocab from '@/data/vocab_n5.json';
import {
  CramHeader,
  CramConfigPanel,
  CramFlashcardStage,
  CramItem,
} from './components';

export function CramScreen() {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'n5' | 'n4' | 'n3'>('all');
  const [sessionSize, setSessionSize] = useState<number>(10);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, sessionSize);
    setActiveDeck(selected);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsSessionActive(true);
    if (selected[0]) {
      speakJapanese(selected[0].kanji || selected[0].kana);
    }
  };

  const handleScore = () => {
    if (currentIndex + 1 < activeDeck.length) {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
      const nextItem = activeDeck[currentIndex + 1];
      if (nextItem) {
        speakJapanese(nextItem.kanji || nextItem.kana);
      }
    } else {
      setShowAnswer(true);
      setCurrentIndex(activeDeck.length);
    }
  };

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
          <CramHeader totalItems={allCramItems.length} />

          {!isSessionActive || currentIndex >= activeDeck.length ? (
            <CramConfigPanel
              selectedLevel={selectedLevel}
              sessionSize={sessionSize}
              onSelectLevel={setSelectedLevel}
              onSelectSessionSize={setSessionSize}
              onStartSession={startCramSession}
            />
          ) : (
            <CramFlashcardStage
              activeDeck={activeDeck}
              currentIndex={currentIndex}
              showAnswer={showAnswer}
              onExit={() => setIsSessionActive(false)}
              onShowAnswer={() => setShowAnswer(true)}
              onScore={handleScore}
            />
          )}
        </main>
      </div>
    </AuthGate>
  );
}
