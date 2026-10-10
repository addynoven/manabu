'use client';

import React from 'react';

interface KanaHeaderProps {
  script: 'hiragana' | 'katakana';
  subGroup: 'main' | 'dakuten' | 'yoon';
  audioEnabled: boolean;
  romajiVisible: boolean;
  onSetScript: (script: 'hiragana' | 'katakana') => void;
  onSetSubGroup: (group: 'main' | 'dakuten' | 'yoon') => void;
  onToggleAudio: () => void;
  onToggleRomaji: () => void;
}

export function KanaHeader({
  script,
  subGroup,
  audioEnabled,
  romajiVisible,
  onSetScript,
  onSetSubGroup,
  onToggleAudio,
  onToggleRomaji,
}: KanaHeaderProps) {
  return (
    <section className="border-b border-border-hairline bg-surface-container-low/70 backdrop-blur-sm px-4 sm:px-6 py-4 shadow-sm">
      <div className="max-w-[1536px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">五十音 Kana Matrix &amp; Stroke Sandbox</h1>
            <span className="bg-surface-muted text-info border border-border-hairline text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
              v3.4 Nocturnal
            </span>
          </div>
          <p className="text-xs text-text-secondary mt-0.5">Deliberate phonetic acquisition and stroke muscle memory</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-background-deep p-1 rounded-xl border border-border-hairline flex items-center gap-1">
            <button
              onClick={() => onSetScript('hiragana')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                script === 'hiragana'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span>Hiragana (ひらがな)</span>
              {script === 'hiragana' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
            <button
              onClick={() => onSetScript('katakana')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                script === 'katakana'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span>Katakana (カタカナ)</span>
              {script === 'katakana' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          </div>

          <div className="bg-background-deep p-1 rounded-xl border border-border-hairline flex items-center gap-1">
            <button
              onClick={() => onSetSubGroup('main')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                subGroup === 'main' ? 'bg-surface-elevated text-white' : 'text-text-secondary hover:text-white'
              }`}
            >
              Main Gojuon (46)
            </button>
            <button
              onClick={() => onSetSubGroup('dakuten')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                subGroup === 'dakuten' ? 'bg-surface-elevated text-white' : 'text-text-secondary hover:text-white'
              }`}
            >
              Dakuten (が・ぱ 25)
            </button>
          </div>

          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-surface-base rounded-xl border border-border-hairline">
            <div className="w-6 h-6 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-success">
              <span className="material-symbols-outlined text-[15px]">check</span>
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-text-muted leading-tight">Mastery</div>
              <div className="text-xs text-text-primary font-bold">
                46 / 46 <span className="text-success font-medium">(100%)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-background-deep p-1 rounded-xl border border-border-hairline">
            <button
              onClick={onToggleAudio}
              className="px-2.5 py-1 rounded text-[11px] text-text-secondary hover:text-white flex items-center gap-1"
              title="Toggle audio"
            >
              <span className="material-symbols-outlined text-[14px]">volume_up</span>
              <span>Audio: {audioEnabled ? 'ON' : 'OFF'}</span>
            </button>
            <div className="w-[1px] h-3 bg-border-hairline" />
            <button
              onClick={onToggleRomaji}
              className="px-2.5 py-1 rounded text-[11px] text-text-secondary hover:text-white flex items-center gap-1"
              title="Toggle romaji"
            >
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              <span>Romaji: {romajiVisible ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
