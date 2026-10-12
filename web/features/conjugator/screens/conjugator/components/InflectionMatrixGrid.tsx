'use client';

import React from 'react';
import { ConjugateResult } from '../../../engine/conjugate';
import { CATEGORY_LABELS } from '../../../engine/conjugationForms';
import { ConjugationForm } from '../../../models/types';

interface InflectionMatrixGridProps {
  inputVerb: string;
  conjugationData: ConjugateResult;
  formsMap: Record<string, ConjugationForm>;
  formality: 'plain' | 'polite';
  polarity: 'affirmative' | 'negative';
  tense: 'non-past' | 'past';
  showFurigana: boolean;
  showPitchAccent: boolean;
  onSpeak: (text: string) => void;
}

export function InflectionMatrixGrid({
  inputVerb,
  conjugationData,
  formsMap,
  formality,
  polarity,
  tense,
  showFurigana,
  showPitchAccent,
  onSpeak,
}: InflectionMatrixGridProps) {
  if (!conjugationData.success) {
    return (
      <section className="lg:col-span-12 bg-surface-base border border-border-hairline rounded-xl p-8 text-center space-y-3 shadow-sm">
        <span className="material-symbols-outlined text-4xl text-error">error_outline</span>
        <h3 className="text-lg font-bold text-text-primary">Invalid Japanese Verb</h3>
        <p className="text-xs text-text-secondary max-w-md mx-auto">
          Please enter a valid Japanese verb in Kanji, Hiragana, or Romaji (e.g., 食べる, 行く, 話す, taberu, iku).
        </p>
      </section>
    );
  }

  const { forms, verb } = conjugationData.result;

  // Group forms by category
  const categoriesMap = new Map<string, ConjugationForm[]>();
  forms.forEach((form) => {
    if (!categoriesMap.has(form.category)) {
      categoriesMap.set(form.category, []);
    }
    categoriesMap.get(form.category)!.push(form);
  });

  return (
    <section className="lg:col-span-12 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 border-b border-border-subtle pb-3">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-primary-container">table_chart</span>
          <h2 className="text-xl font-bold text-text-primary">
            Inflection Matrix for <span className="text-accent-gold font-serif">{verb.dictionaryForm}</span>
          </h2>
          <span className="bg-surface-muted text-text-secondary text-xs font-bold px-2.5 py-0.5 rounded border border-border-hairline">
            {forms.length} Inflection Forms
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-text-muted">Active Class:</span>
          <code className="bg-background-deep border border-border-hairline text-accent-gold px-2.5 py-0.5 rounded font-mono capitalize font-bold">
            {verb.type} Verb
          </code>
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-6">
        {Array.from(categoriesMap.entries()).map(([catId, catForms]) => {
          const catMeta = CATEGORY_LABELS[catId] || { en: catId, ja: catId };

          return (
            <div key={catId} className="space-y-3">
              <div className="flex items-center space-x-2 border-l-2 border-l-primary-container pl-2.5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {catMeta.en}
                </h3>
                <span className="text-xs text-text-muted font-serif">
                  ({catMeta.ja})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {catForms.map((form) => {
                  const isMatchingFilter =
                    (formality === 'plain' && form.formality === 'plain') ||
                    (formality === 'polite' && form.formality === 'polite');

                  return (
                    <div
                      key={form.id}
                      className={`bg-surface-base hover:bg-surface-muted border rounded-xl p-4 space-y-2.5 transition-all relative group shadow-sm ${
                        isMatchingFilter
                          ? 'border-primary-container/80 shadow-md ring-1 ring-primary-container/20'
                          : 'border-border-hairline opacity-90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="bg-surface-muted text-text-secondary border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded font-mono">
                          {form.nameJapanese}
                        </span>
                        <div className="flex items-center space-x-1">
                          {showPitchAccent && (
                            <span className="text-[9px] font-mono text-accent-gold bg-accent-gold-subtle border border-accent-gold/30 px-1.5 py-0.2 rounded">
                              L-H
                            </span>
                          )}
                          <button
                            onClick={() => onSpeak(form.kanji)}
                            className="p-1 text-text-secondary hover:text-white rounded hover:bg-surface-elevated transition-colors"
                            title="Listen Audio"
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              volume_up
                            </span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl font-bold tracking-tight text-white font-serif">
                          {form.kanji}
                        </div>
                        {showFurigana && form.hiragana !== form.kanji && (
                          <div className="text-xs text-text-muted font-serif mt-0.5">
                            {form.hiragana}
                          </div>
                        )}
                        <div className="text-xs text-text-secondary mt-0.5">
                          <span className="font-mono text-secondary">
                            {form.romaji}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[10px]">
                        <span className="text-text-muted truncate max-w-[140px]">
                          {form.name}
                        </span>
                        <span className="bg-background-deep text-text-primary px-1.5 py-0.2 rounded font-mono border border-border-subtle capitalize">
                          {form.formality}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
