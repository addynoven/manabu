'use client';

import React from 'react';
import { VocabItem } from './VocabMasterTable';
import { speakJapanese } from '../../../models/kana';

interface PitchPattern {
  type: string;
  downstep: string;
  pattern: string;
  moras: Array<{ mora: string; high: boolean; isDrop?: boolean }>;
  rule: string;
}

interface VocabDetailInspectorProps {
  selectedWord: VocabItem;
  currentPitch: PitchPattern;
  hideFurigana: boolean;
  speechSpeed: number;
  onToggleFurigana: () => void;
  onSetSpeechSpeed: (speed: number) => void;
  onAddToCram: (word: string) => void;
}

export function VocabDetailInspector({
  selectedWord,
  currentPitch,
  hideFurigana,
  speechSpeed,
  onToggleFurigana,
  onSetSpeechSpeed,
  onAddToCram,
}: VocabDetailInspectorProps) {
  return (
    <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
      <div className="bg-surface-base border border-border-hairline rounded-xl p-5 shadow-2xl space-y-5">
        <div className="pb-4 border-b border-border-hairline space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary-subtle text-primary border border-border-hairline uppercase">
                  JLPT N5 Core
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-surface-muted text-secondary border border-border-hairline">
                  SEQ #{selectedWord.jmdict_seq}
                </span>
              </div>
              <div className="text-5xl font-serif font-bold text-text-primary tracking-wide leading-tight">
                {selectedWord.kanji || selectedWord.kana}
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="font-mono text-sm text-secondary font-medium">{selectedWord.kana}</span>
                <span className="text-text-muted">•</span>
                <button
                  onClick={onToggleFurigana}
                  className="text-xs text-info hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">subtitles</span>
                  <span>{hideFurigana ? 'Show Furigana' : 'Hide Furigana'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => speakJapanese(selectedWord.kanji || selectedWord.kana)}
                className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all group"
                title="Listen Native Pronunciation"
              >
                <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
                  volume_up
                </span>
              </button>
              <span className="text-[10px] font-mono text-text-muted font-bold">AUDIO HD</span>
            </div>
          </div>

          <div className="bg-background-deep p-2.5 rounded-lg border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[17px]">record_voice_over</span>
              <span className="text-xs text-text-primary font-medium">Tokyo Native Audio Stream</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono text-text-muted mr-1">SPEED</span>
              {[0.8, 1.0, 1.2].map((spd) => (
                <button
                  key={spd}
                  onClick={() => onSetSpeechSpeed(spd)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                    speechSpeed === spd
                      ? 'font-bold text-white bg-primary-container shadow-[0_0_8px_rgba(199,74,74,0.4)]'
                      : 'text-text-secondary hover:text-white bg-surface-muted border border-border-hairline'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
              PITCH ACCENT PROFILE
            </span>
            <span className="text-xs font-mono text-accent-gold font-bold">{currentPitch.type}</span>
          </div>
          <div className="bg-tatami-canvas border border-tatami-grid rounded-xl p-3.5 relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-around py-2">
              {currentPitch.moras.map((m, mIdx) => (
                <React.Fragment key={mIdx}>
                  <div className="flex flex-col items-center gap-1.5 relative">
                    <span className="text-[10px] font-mono text-text-muted">Mora {mIdx + 1}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                        m.high
                          ? 'bg-primary-container border-white shadow-[0_0_12px_#c74a4a]'
                          : 'bg-surface-muted border-text-muted'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${m.high ? 'bg-white' : 'bg-text-muted'}`} />
                    </div>
                    <span className={`text-lg font-bold ${m.high ? 'text-white' : 'text-text-secondary'}`}>
                      {m.mora}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase ${
                        m.high ? 'text-primary font-bold' : 'text-text-muted'
                      }`}
                    >
                      {m.high ? 'High ▾' : 'Low'}
                    </span>
                  </div>
                  {mIdx < currentPitch.moras.length - 1 && (
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-text-muted to-primary-container mx-1 -mt-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border-subtle text-[11px] text-text-secondary flex items-center justify-between">
              <span>Rule: {currentPitch.rule}</span>
              <span className="font-mono text-text-muted">Downstep: {currentPitch.downstep}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
            DICTIONARY SENSES &amp; ETYMOLOGY
          </span>
          <div className="space-y-2 bg-background-deep p-3.5 rounded-xl border border-border-hairline">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
                [v1] Ichidan
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
                [vt] Transitive
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-info border border-border-hairline">
                JLPT N5
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-accent-gold border border-border-hairline">
                Core 500
              </span>
            </div>
            <div className="text-xs text-text-primary leading-relaxed font-medium">
              {selectedWord.waller_definition}
            </div>
          </div>
        </div>

        <div className="space-y-2.5 pt-3 border-t border-border-hairline">
          <button
            onClick={() => onAddToCram(selectedWord.kanji || selectedWord.kana)}
            className="w-full py-3 px-4 rounded-xl bg-primary-container text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Add to SRS Review Deck (+1 Item) →</span>
          </button>
          <button
            onClick={() => window.open('/conjugator', '_blank')}
            className="w-full py-2.5 px-4 rounded-xl bg-surface-muted text-white border border-border-hairline text-xs font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated hover:border-info transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">table_chart</span>
            <span>Open in Conjugator Studio ↗</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
