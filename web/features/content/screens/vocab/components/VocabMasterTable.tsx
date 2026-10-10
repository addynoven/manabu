'use client';

import React from 'react';
import { speakJapanese } from '../../../models/kana';

export interface VocabItem {
  jmdict_seq: string;
  kana: string;
  kanji: string;
  waller_definition: string;
}

interface VocabMasterTableProps {
  filteredList: VocabItem[];
  selectedWord: VocabItem;
  showPitchCurves: boolean;
  onSelectWord: (word: VocabItem) => void;
}

export function VocabMasterTable({
  filteredList,
  selectedWord,
  showPitchCurves,
  onSelectWord,
}: VocabMasterTableProps) {
  return (
    <section className="lg:col-span-7 flex flex-col bg-surface-base border border-border-hairline rounded-xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-background-deep border-b border-border-hairline text-[11px] font-bold uppercase tracking-wider text-text-muted">
        <div className="col-span-3">WORD / KANJI</div>
        <div className="col-span-3">PITCH &amp; ACCENT</div>
        <div className="col-span-3">MEANING &amp; POS</div>
        <div className="col-span-2 text-center">SRS TIER</div>
        <div className="col-span-1 text-right">AUDIO</div>
      </div>

      <div className="divide-y divide-border-subtle max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar">
        {filteredList.slice(0, 50).map((item, idx) => {
          const isSelected = selectedWord.jmdict_seq === item.jmdict_seq;
          const seq = Number(item.jmdict_seq) || 0;
          const pitchType = seq % 3 === 0 ? 'Nakadaka ②' : seq % 3 === 1 ? 'Heiban ⓪' : 'Atamadaka ①';
          const pitchWave = seq % 3 === 0 ? 'L-H-L' : seq % 3 === 1 ? 'L-H-H' : 'H-L';
          const srsTier = (seq % 6) + 1;

          return (
            <div
              key={`${item.jmdict_seq}-${idx}`}
              onClick={() => {
                onSelectWord(item);
                speakJapanese(item.kanji || item.kana);
              }}
              className={`grid grid-cols-12 gap-2 px-4 py-3.5 transition-all cursor-pointer items-center group ${
                isSelected
                  ? 'bg-surface-muted border-l-4 border-primary-container shadow-inner'
                  : 'bg-surface-base hover:bg-surface-muted/60 border-l-4 border-transparent'
              }`}
            >
              <div className="col-span-3 flex items-center gap-2">
                {isSelected ? (
                  <span className="material-symbols-outlined text-[16px] text-primary-container">arrow_right</span>
                ) : (
                  <span className="w-4" />
                )}
                <div>
                  <div className="text-base font-bold text-text-primary tracking-wide">
                    {item.kanji || item.kana}
                  </div>
                  <div className="text-[11px] font-mono text-text-muted">{item.kana}</div>
                </div>
              </div>

              <div className="col-span-3 flex flex-col gap-1">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-surface-muted text-text-secondary border border-border-hairline w-fit">
                  {pitchType}
                </span>
                {showPitchCurves && (
                  <div className="flex items-center gap-0.5" title={`Pitch Contour: ${pitchWave}`}>
                    <span
                      className={`w-3 h-1 rounded-full ${
                        pitchWave.startsWith('H') ? 'bg-primary-container shadow-[0_0_6px_#c74a4a]' : 'bg-text-muted'
                      }`}
                    />
                    <span
                      className={`w-3.5 h-1.5 rounded-full ${
                        pitchWave.includes('-H') ? 'bg-primary-container shadow-[0_0_6px_#c74a4a]' : 'bg-text-muted'
                      }`}
                    />
                    <span className="w-3 h-1 bg-text-muted rounded-full" />
                    <span className="text-[10px] font-mono text-text-muted ml-1">{pitchWave}</span>
                  </div>
                )}
              </div>

              <div className="col-span-3 pr-2">
                <div className="font-medium text-text-primary text-xs truncate">
                  {item.waller_definition.replace(/\([^)]*\)/g, '').trim()}
                </div>
                <div className="text-[10px] text-text-secondary truncate flex items-center gap-1 font-mono">
                  <span>JLPT N5</span>
                  <span>•</span>
                  <span>Core</span>
                </div>
              </div>

              <div className="col-span-2 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6].map((st) => (
                    <span
                      key={st}
                      className={`w-1.5 h-1.5 rounded-full ${
                        st <= srsTier ? 'bg-primary-container shadow-[0_0_4px_#c74a4a]' : 'bg-border-hairline'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-primary font-medium">Stage {srsTier}/6</span>
              </div>

              <div className="col-span-1 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakJapanese(item.kanji || item.kana);
                  }}
                  className="w-8 h-8 rounded-lg bg-surface-muted hover:bg-primary-container text-text-secondary hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  title="Play Native Pronunciation"
                >
                  <span className="material-symbols-outlined text-[17px]">volume_up</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 py-3 bg-background-deep border-t border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-muted">
        <div className="flex items-center gap-1.5 font-mono">
          <span>Showing</span>
          <span className="text-white font-bold">1 - {Math.min(50, filteredList.length)}</span>
          <span>of</span>
          <span className="text-white font-bold">{filteredList.length}</span>
          <span>entries</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1 rounded bg-surface-muted border border-border-hairline text-text-secondary hover:text-white text-xs">
            Previous
          </button>
          <button className="w-7 h-7 rounded bg-primary-container text-white font-mono text-xs font-bold flex items-center justify-center shadow-[0_0_6px_#c74a4a]">
            1
          </button>
          <button className="w-7 h-7 rounded bg-surface-base border border-border-hairline text-text-secondary hover:text-white font-mono text-xs flex items-center justify-center">
            2
          </button>
          <button className="px-2.5 py-1 rounded bg-surface-base border border-border-hairline text-text-secondary hover:text-white text-xs">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
