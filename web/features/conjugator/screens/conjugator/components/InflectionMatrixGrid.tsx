'use client';

import React from 'react';
import { ConjugateResult } from '../../../engine/conjugate';

interface InflectionMatrixGridProps {
  inputVerb: string;
  conjugationData: ConjugateResult;
  formsMap: Record<string, any>;
  onSpeak: (text: string) => void;
}

export function InflectionMatrixGrid({
  inputVerb,
  conjugationData,
  formsMap,
  onSpeak,
}: InflectionMatrixGridProps) {
  return (
    <section className="lg:col-span-8 space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-primary-container">table_chart</span>
          <h2 className="text-xl font-bold text-text-primary">
            Inflection Matrix for {inputVerb || 'Verb'}
          </h2>
          <span className="bg-surface-muted text-text-secondary text-[10px] font-bold px-2 py-0.5 rounded border border-border-hairline">
            {conjugationData.success ? `${conjugationData.result.forms.length} Primary Forms` : '0 Forms'}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-text-muted">Stem formula:</span>
          <code className="bg-background-deep border border-border-hairline text-accent-gold px-2 py-0.5 rounded font-mono">
            [stem] + [suffix]
          </code>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
          <div className="flex items-center justify-between">
            <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
              辞書形 / Base Form
            </span>
            <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onSpeak(formsMap['present-plain']?.kanji || inputVerb)}
                className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
                title="Listen Audio"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
              </button>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
              {formsMap['present-plain']?.kanji || inputVerb}
            </div>
            <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
              <span className="font-mono text-secondary">{formsMap['present-plain']?.romaji || 'taberu'}</span>
              <span className="text-border-hairline">•</span>
              <span>To eat / Plain Non-Past</span>
            </div>
          </div>
          <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Formula:</span>
            <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
              Root + る
            </span>
          </div>
        </div>

        <div className="bg-surface-base hover:bg-surface-muted border border-primary-container/60 rounded-lg p-4 space-y-2.5 transition-all relative group">
          <div className="flex items-center justify-between">
            <span className="bg-primary-subtle text-primary border border-primary-container/40 text-[10px] font-bold px-2 py-0.5 rounded">
              て形 • 連用形
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onSpeak(formsMap['te']?.kanji || '食べて')}
                className="p-1 text-primary-container hover:text-primary rounded hover:bg-surface-elevated"
                title="Listen Audio"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
              </button>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
              {formsMap['te']?.kanji || '食べて'}
            </div>
            <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
              <span className="font-mono text-secondary">{formsMap['te']?.romaji || 'tabete'}</span>
              <span className="text-border-hairline">•</span>
              <span>Connective / Please do</span>
            </div>
          </div>
          <div className="pt-1.5 border-t border-border-subtle flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Formula:</span>
            <span className="bg-background-deep text-primary-container px-2 py-0.5 rounded font-mono border border-border-subtle font-semibold">
              Stem + て
            </span>
          </div>
        </div>

        <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
          <div className="flex items-center justify-between">
            <span className="bg-surface-muted text-accent-gold border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
              ます形 • 丁寧語
            </span>
            <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onSpeak(formsMap['present-polite']?.kanji || '食べます')}
                className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
              </button>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
              {formsMap['present-polite']?.kanji || '食べます'}
            </div>
            <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
              <span className="font-mono text-secondary">{formsMap['present-polite']?.romaji || 'tabemasu'}</span>
              <span className="text-border-hairline">•</span>
              <span>Eat / Will eat (Polite)</span>
            </div>
          </div>
          <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Formula:</span>
            <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
              Stem + ます
            </span>
          </div>
        </div>

        <div className="bg-surface-base hover:bg-surface-muted border border-border-hairline rounded-lg p-4 space-y-2.5 transition-all relative group">
          <div className="flex items-center justify-between">
            <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded">
              ない形 • 未然形
            </span>
            <div className="flex items-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onSpeak(formsMap['negative-plain']?.kanji || '食べない')}
                className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-surface-elevated"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
              </button>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-text-primary font-serif">
              {formsMap['negative-plain']?.kanji || '食べない'}
            </div>
            <div className="flex items-center space-x-2 text-xs text-text-secondary mt-0.5">
              <span className="font-mono text-secondary">{formsMap['negative-plain']?.romaji || 'tabenai'}</span>
              <span className="text-border-hairline">•</span>
              <span>Do not eat (Plain Neg)</span>
            </div>
          </div>
          <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Formula:</span>
            <span className="bg-background-deep text-text-primary px-2 py-0.5 rounded font-mono border border-border-subtle">
              Stem + ない
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
