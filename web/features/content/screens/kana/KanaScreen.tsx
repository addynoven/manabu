'use client';

import React, { useState } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { HIRAGANA_DATA, KATAKANA_DATA, KanaItem, speakJapanese } from '../../models/kana';
import { KanaHeader, KanaGojuonMatrix, KanaDetailPanel } from './components';

export function KanaScreen() {
  const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
  const [subGroup, setSubGroup] = useState<'main' | 'dakuten' | 'yoon'>('main');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [romajiVisible, setRomajiVisible] = useState(true);
  const [selectedKana, setSelectedKana] = useState<KanaItem>({
    kana: 'あ',
    romaji: 'a',
    script: 'hiragana',
    category: 'main',
  });

  const dataset = script === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;

  const handleSelectKana = (item: KanaItem) => {
    setSelectedKana(item);
    if (audioEnabled) {
      speakJapanese(item.kana);
    }
  };

  return (
    <div className="bg-background-canvas min-h-screen text-text-primary selection:bg-primary-container selection:text-white flex flex-col font-sans">
      <StitchHeader />

      <KanaHeader
        script={script}
        subGroup={subGroup}
        audioEnabled={audioEnabled}
        romajiVisible={romajiVisible}
        onSetScript={setScript}
        onSetSubGroup={setSubGroup}
        onToggleAudio={() => setAudioEnabled((prev) => !prev)}
        onToggleRomaji={() => setRomajiVisible((prev) => !prev)}
      />

      <main className="flex-1 max-w-[1536px] w-full mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section className="lg:col-span-8 flex flex-col gap-4">
            <KanaGojuonMatrix
              script={script}
              dataset={dataset}
              selectedKana={selectedKana}
              romajiVisible={romajiVisible}
              onSelectKana={handleSelectKana}
            />
          </section>

          <KanaDetailPanel selectedKana={selectedKana} />
        </div>
      </main>
    </div>
  );
}
