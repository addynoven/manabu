'use client';

import React from 'react';
import { ConjugateResult } from '../../../engine/conjugate';

const PRESET_VERBS = [
  { kanji: '食べる', kana: 'たべる', romaji: 'taberu', meaning: 'to eat', type: 'ichidan' },
  { kanji: '行く', kana: 'いく', romaji: 'iku', meaning: 'to go', type: 'godan' },
  { kanji: '話す', kana: 'はなす', romaji: 'hanasu', meaning: 'to speak', type: 'godan' },
  { kanji: '来る', kana: 'くる', romaji: 'kuru', meaning: 'to come', type: 'irregular' },
  { kanji: 'する', kana: 'する', romaji: 'suru', meaning: 'to do', type: 'irregular' },
  { kanji: '飲む', kana: 'のむ', romaji: 'nomu', meaning: 'to drink', type: 'godan' },
  { kanji: '泳ぐ', kana: 'およぐ', romaji: 'oyogu', meaning: 'to swim', type: 'godan' },
  { kanji: '待つ', kana: 'まつ', romaji: 'matsu', meaning: 'to wait', type: 'godan' },
];

interface ConjugatorHeaderSearchProps {
  inputVerb: string;
  formality: 'plain' | 'polite';
  polarity: 'affirmative' | 'negative';
  tense: 'non-past' | 'past';
  showFurigana: boolean;
  showPitchAccent: boolean;
  audioAutoplay: boolean;
  conjugationData: ConjugateResult;
  onInputChange: (val: string) => void;
  onSelectVerb: (verb: string) => void;
  onSetFormality: (f: 'plain' | 'polite') => void;
  onSetPolarity: (p: 'affirmative' | 'negative') => void;
  onSetTense: (t: 'non-past' | 'past') => void;
  onToggleFurigana: (val: boolean) => void;
  onTogglePitchAccent: (val: boolean) => void;
  onToggleAudioAutoplay: (val: boolean) => void;
  onSpeak: (text: string) => void;
  onStartSpeedDrill: () => void;
}

export function ConjugatorHeaderSearch({
  inputVerb,
  formality,
  polarity,
  tense,
  showFurigana,
  showPitchAccent,
  audioAutoplay,
  conjugationData,
  onInputChange,
  onSelectVerb,
  onSetFormality,
  onSetPolarity,
  onSetTense,
  onToggleFurigana,
  onTogglePitchAccent,
  onToggleAudioAutoplay,
  onSpeak,
  onStartSpeedDrill,
}: ConjugatorHeaderSearchProps) {
  return (
    <section className="bg-surface-base border border-border-hairline rounded-xl p-5 sm:p-6 space-y-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-xs text-text-secondary">
          <span>Conjugator Studio</span>
          <span className="text-border-hairline">/</span>
          <span className="text-text-primary font-medium">Interactive Inflection Sandbox</span>
          <span className="bg-surface-muted text-accent-gold border border-border-hairline text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
            GODAN / ICHIDAN FOCUS
          </span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <span className="flex items-center space-x-1 text-text-secondary">
            <span className="material-symbols-outlined text-success text-[16px]">verified</span>
            <span>Morphology DB: 12,480 Lexemes</span>
          </span>
          <div className="h-3 w-[1px] bg-border-hairline hidden sm:block"></div>
          <button
            onClick={() => onSpeak(conjugationData.success ? conjugationData.result.verb.dictionaryForm : inputVerb)}
            className="text-primary hover:text-text-primary flex items-center space-x-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">volume_up</span>
            <span>Pronounce</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary flex items-center space-x-3 tracking-tight">
            <span>動詞活用 Conjugation Workbench</span>
            <span className="bg-primary-subtle text-primary border border-primary-container/60 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase">
              Sandbox Live
            </span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Real-time morphological engine across Godan, Ichidan &amp; Irregular verb classes
          </p>
        </div>
        <button
          onClick={onStartSpeedDrill}
          className="bg-primary-container hover:bg-primary-hover active:bg-primary-active text-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-md transition-all font-semibold text-sm self-start md:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          <span>Launch Speed Drill</span>
          <span className="bg-primary-active px-1.5 py-0.5 rounded text-[10px] font-mono ml-1">N3-N5</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center pt-1">
        <div className="lg:col-span-6 relative">
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-text-muted">
              <span className="material-symbols-outlined text-[20px]">edit_note</span>
            </div>
            <input
              type="text"
              value={inputVerb}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Enter Kanji, Hiragana or Romaji..."
              className="w-full bg-background-deep border border-border-hairline focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 rounded-lg pl-11 pr-24 py-2.5 text-text-primary text-lg font-medium transition-all outline-none"
            />
            <div className="absolute right-2.5 flex items-center space-x-1.5">
              <span className="bg-surface-variant text-text-secondary text-[10px] font-bold px-2 py-1 rounded border border-border-hairline uppercase">
                かな IME
              </span>
              {inputVerb && (
                <button
                  onClick={() => onInputChange('')}
                  className="p-1 text-text-muted hover:text-text-primary transition-colors"
                  title="Clear input"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-wrap items-center gap-1.5 text-xs">
          {conjugationData.success ? (
            <>
              <span className="bg-surface-elevated text-info border border-border-hairline px-2.5 py-1 rounded-md flex items-center space-x-1">
                <span className="material-symbols-outlined text-[14px]">category</span>
                <span className="font-medium capitalize">{conjugationData.result.verb.type} Verb</span>
              </span>
              <span className="bg-surface-muted text-text-secondary border border-border-hairline px-2.5 py-1 rounded-md">
                {conjugationData.result.verb.meaning || 'Core Lexeme'}
              </span>
              <span className="bg-accent-gold-subtle text-accent-gold border border-accent-gold/40 px-2.5 py-1 rounded-md font-medium">
                JLPT N5 Core
              </span>
            </>
          ) : (
            <span className="text-error text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">error</span>
              <span>{conjugationData.error.message}</span>
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-1 overflow-x-auto pb-1 custom-scroll">
        <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider flex-shrink-0">
          Quick Verbs:
        </span>
        {PRESET_VERBS.map((preset) => {
          const isSelected = inputVerb === preset.kanji;
          return (
            <button
              key={preset.kanji}
              onClick={() => onSelectVerb(preset.kanji)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex-shrink-0 flex items-center space-x-1 ${
                isSelected
                  ? 'bg-primary-container text-white border border-primary-container shadow-sm'
                  : 'bg-surface-muted hover:bg-surface-elevated text-text-secondary hover:text-text-primary border border-border-hairline'
              }`}
            >
              {isSelected && <span className="text-accent-gold">★</span>}
              <span>{preset.kanji} ({preset.meaning})</span>
            </button>
          );
        })}
      </div>

      <div className="pt-3 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
            <button
              onClick={() => onSetFormality('plain')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                formality === 'plain'
                  ? 'bg-primary-container text-white font-medium shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Plain / Casual (普通体)
            </button>
            <button
              onClick={() => onSetFormality('polite')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                formality === 'polite'
                  ? 'bg-primary-container text-white font-medium shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Polite / 丁寧語 (Masu)
            </button>
          </div>

          <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
            <button
              onClick={() => onSetPolarity('affirmative')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                polarity === 'affirmative'
                  ? 'bg-surface-elevated text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Affirmative (肯定)
            </button>
            <button
              onClick={() => onSetPolarity('negative')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                polarity === 'negative'
                  ? 'bg-surface-elevated text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Negative (否定)
            </button>
          </div>

          <div className="flex items-center space-x-1 bg-background-deep border border-border-hairline p-1 rounded-lg">
            <button
              onClick={() => onSetTense('non-past')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                tense === 'non-past'
                  ? 'bg-surface-elevated text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Non-Past (現在・未来)
            </button>
            <button
              onClick={() => onSetTense('past')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                tense === 'past'
                  ? 'bg-surface-elevated text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Past (過去)
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xs text-text-secondary">
          <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
            <input
              type="checkbox"
              checked={showFurigana}
              onChange={(e) => onToggleFurigana(e.target.checked)}
              className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
            />
            <span>Show Furigana (振仮名)</span>
          </label>
          <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
            <input
              type="checkbox"
              checked={showPitchAccent}
              onChange={(e) => onTogglePitchAccent(e.target.checked)}
              className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
            />
            <span>Pitch Accent</span>
          </label>
          <label className="flex items-center space-x-1.5 cursor-pointer hover:text-text-primary transition-colors">
            <input
              type="checkbox"
              checked={audioAutoplay}
              onChange={(e) => onToggleAudioAutoplay(e.target.checked)}
              className="rounded border-border-hairline bg-background-deep text-primary-container focus:ring-0 w-3.5 h-3.5"
            />
            <span>Audio Autoplay</span>
          </label>
        </div>
      </div>
    </section>
  );
}
