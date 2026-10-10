'use client';

import React, { useState, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { conjugate, type ConjugateResult } from '../../engine/conjugate';
import {
  ConjugatorHeaderSearch,
  InflectionMatrixGrid,
} from './components';

export function ConjugatorScreen() {
  const [inputVerb, setInputVerb] = useState('食べる');
  const [formality, setFormality] = useState<'plain' | 'polite'>('plain');
  const [polarity, setPolarity] = useState<'affirmative' | 'negative'>('affirmative');
  const [tense, setTense] = useState<'non-past' | 'past'>('non-past');
  const [showFurigana, setShowFurigana] = useState(true);
  const [showPitchAccent, setShowPitchAccent] = useState(true);
  const [audioAutoplay, setAudioAutoplay] = useState(false);

  const conjugationData = useMemo<ConjugateResult>(() => {
    return conjugate(inputVerb.trim() || '食べる');
  }, [inputVerb]);

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectVerb = (verb: string) => {
    setInputVerb(verb);
    if (audioAutoplay) {
      speak(verb);
    }
  };

  const formsMap = useMemo(() => {
    if (!conjugationData.success) return {};
    const map: Record<string, any> = {};
    conjugationData.result.forms.forEach((f) => {
      map[f.id] = f;
    });
    return map;
  }, [conjugationData]);

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary antialiased flex flex-col font-sans select-none custom-scroll">
      <StitchHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col space-y-6">
        <ConjugatorHeaderSearch
          inputVerb={inputVerb}
          formality={formality}
          polarity={polarity}
          tense={tense}
          showFurigana={showFurigana}
          showPitchAccent={showPitchAccent}
          audioAutoplay={audioAutoplay}
          conjugationData={conjugationData}
          onInputChange={setInputVerb}
          onSelectVerb={handleSelectVerb}
          onSetFormality={setFormality}
          onSetPolarity={setPolarity}
          onSetTense={setTense}
          onToggleFurigana={setShowFurigana}
          onTogglePitchAccent={setShowPitchAccent}
          onToggleAudioAutoplay={setAudioAutoplay}
          onSpeak={speak}
          onStartSpeedDrill={() => {}}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <InflectionMatrixGrid
            inputVerb={inputVerb}
            conjugationData={conjugationData}
            formsMap={formsMap}
            onSpeak={speak}
          />
        </div>
      </main>
    </div>
  );
}
