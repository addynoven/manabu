'use client';

import React from 'react';
import { KanaItem } from '../../../models/kana';

const VOWELS = ['a', 'i', 'u', 'e', 'o'];

const GOJUON_ROWS = [
  { rowLabel: 'Ø (あ行)', consonant: '' },
  { rowLabel: 'k (か行)', consonant: 'k' },
  { rowLabel: 's (さ行)', consonant: 's' },
  { rowLabel: 't (た行)', consonant: 't' },
  { rowLabel: 'n (な行)', consonant: 'n' },
  { rowLabel: 'h (は行)', consonant: 'h' },
  { rowLabel: 'm (ま行)', consonant: 'm' },
  { rowLabel: 'y (や行)', consonant: 'y' },
  { rowLabel: 'r (ら行)', consonant: 'r' },
  { rowLabel: 'w (わ行)', consonant: 'w' },
];

interface KanaGojuonMatrixProps {
  script: 'hiragana' | 'katakana';
  dataset: KanaItem[];
  selectedKana: KanaItem;
  romajiVisible: boolean;
  onSelectKana: (item: KanaItem) => void;
}

export function KanaGojuonMatrix({
  script,
  dataset,
  selectedKana,
  romajiVisible,
  onSelectKana,
}: KanaGojuonMatrixProps) {
  const getKanaForCell = (consonant: string, vowel: string): KanaItem | null => {
    let targetRomaji = consonant + vowel;
    if (consonant === 's' && vowel === 'i') targetRomaji = 'shi';
    if (consonant === 't' && vowel === 'i') targetRomaji = 'chi';
    if (consonant === 't' && vowel === 'u') targetRomaji = 'tsu';
    if (consonant === 'h' && vowel === 'u') targetRomaji = 'fu';

    return dataset.find((k) => k.romaji === targetRomaji && k.category === 'main') || null;
  };

  return (
    <div className="bg-surface-base border border-border-hairline rounded-xl p-4 sm:p-5 shadow-xl">
      <div className="grid grid-cols-6 gap-2 mb-3 pb-2 border-b border-border-hairline text-center text-[11px] font-bold uppercase tracking-wider text-text-muted">
        <div className="text-left pl-2">CONSONANT</div>
        {VOWELS.map((v) => (
          <div key={v} className="text-secondary font-mono">
            /{v}/
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {GOJUON_ROWS.map((row) => (
          <div key={row.rowLabel} className="grid grid-cols-6 gap-2 items-center">
            <div className="text-xs text-text-secondary font-medium pl-1 truncate">{row.rowLabel}</div>
            {VOWELS.map((v) => {
              const item = getKanaForCell(row.consonant, v);
              if (!item) {
                return (
                  <div
                    key={v}
                    className="h-14 rounded-lg bg-background-deep/40 border border-dashed border-border-hairline/40 flex items-center justify-center text-text-muted/40 font-mono text-xs"
                  >
                    —
                  </div>
                );
              }
              const isSelected = selectedKana.kana === item.kana;
              return (
                <div
                  key={v}
                  onClick={() => onSelectKana(item)}
                  className={`relative group cursor-pointer rounded-lg p-2 flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-surface-elevated border-2 border-primary-container shadow-[0_0_12px_rgba(199,74,74,0.35)] scale-105'
                      : 'bg-surface-base hover:bg-surface-muted border border-border-hairline'
                  }`}
                >
                  <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="text-2xl font-serif font-bold text-text-primary group-hover:scale-105 transition-transform">
                    {item.kana}
                  </span>
                  {romajiVisible && (
                    <span className="text-[10px] font-mono text-text-secondary">{item.romaji}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div className="grid grid-cols-6 gap-2 items-center pt-2 border-t border-border-hairline">
          <div className="text-xs text-text-secondary font-medium pl-1">n (ん)</div>
          <div
            onClick={() =>
              onSelectKana({
                kana: script === 'hiragana' ? 'ん' : 'ン',
                romaji: 'n',
                script,
                category: 'main',
              })
            }
            className="relative group cursor-pointer bg-surface-base hover:bg-surface-muted rounded-lg border border-accent-gold/40 p-2 flex flex-col items-center justify-center transition-all"
          >
            <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-success" />
            <span className="text-2xl font-serif font-bold text-accent-gold">
              {script === 'hiragana' ? 'ん' : 'ン'}
            </span>
            <span className="text-[10px] font-mono text-accent-gold">n / m</span>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-3 text-xs">
        <button
          onClick={() => {
            const rnd = dataset[Math.floor(Math.random() * dataset.length)];
            if (rnd) onSelectKana(rnd);
          }}
          className="px-3.5 py-1.5 rounded-lg bg-surface-highlight border border-border-hairline text-white hover:bg-primary-hover hover:border-primary-container transition-all flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">shuffle</span>
          <span>Random Rapid Drill</span>
        </button>
      </div>
    </div>
  );
}
