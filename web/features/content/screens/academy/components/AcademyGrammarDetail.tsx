'use client';

import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { AcademyItem } from '../../../models/academyData';

interface AcademyGrammarDetailProps {
  selectedItem: AcademyItem | null;
  onSpeak: (text: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export function AcademyGrammarDetail({
  selectedItem,
  onSpeak,
  isBookmarked,
  onToggleBookmark,
}: AcademyGrammarDetailProps) {
  if (!selectedItem) {
    return (
      <section className="col-span-12 lg:col-span-8 xl:col-span-9 bg-surface-base border border-border-hairline rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <span className="material-symbols-outlined text-4xl text-text-muted mb-2">
          menu_book
        </span>
        <h3 className="text-base font-bold text-text-primary">
          Select an Item from the Curriculum
        </h3>
        <p className="text-xs text-text-secondary max-w-sm mt-1">
          Choose a grammar structure or guide from the left sidebar to inspect syntax formulas, inflection steps, and example sentences.
        </p>
      </section>
    );
  }

  if (selectedItem.type === 'guide') {
    const guide = selectedItem.data;

    return (
      <section className="col-span-12 lg:col-span-8 xl:col-span-9 bg-surface-base border border-border-hairline rounded-xl p-6 flex flex-col space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-border-hairline gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-accent-gold uppercase tracking-wider mb-1">
              <span>{guide.category}</span>
              <span>•</span>
              <span>{guide.readTime} read</span>
            </div>
            <div className="flex items-baseline space-x-3">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white font-serif">
                {guide.title}
              </h1>
            </div>
            <p className="text-base text-accent-gold font-semibold mt-1">
              {guide.japaneseTitle}
            </p>
            <p className="text-xs text-text-secondary max-w-2xl mt-2 leading-relaxed">
              {guide.summary}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-accent-gold-subtle border-accent-gold text-accent-gold'
                  : 'bg-surface-muted hover:bg-surface-elevated border-border-hairline text-text-secondary hover:text-accent-gold'
              }`}
              title="Bookmark Guide"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isBookmarked ? 'bookmark_added' : 'bookmark'}
              </span>
            </button>
          </div>
        </div>

        {/* Guide Sections */}
        <div className="space-y-6">
          {guide.sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-surface-container border border-border-hairline space-y-3"
            >
              <h3 className="text-lg font-bold text-white font-serif border-b border-border-hairline pb-2">
                {sec.title}
              </h3>
              <div className="space-y-2 text-xs text-text-primary leading-relaxed">
                {sec.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {sec.callout && (
                <div className="mt-3 p-4 rounded-lg bg-background-deep border border-border-hairline space-y-2">
                  <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wide">
                    {sec.callout.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sec.callout.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-2 rounded bg-surface-base border border-border-hairline flex items-center justify-between"
                      >
                        <div>
                          <span className="text-sm font-bold text-white font-serif block">
                            {item.japanese}
                          </span>
                          {item.romaji && (
                            <span className="text-[10px] text-text-muted block">
                              {item.romaji}
                            </span>
                          )}
                        </div>
                        {item.meaning && (
                          <span className="text-xs font-semibold text-info">
                            {item.meaning}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sec.proTip && (
                <div className="mt-3 p-3 rounded-lg bg-info-subtle border border-info/30 flex items-start space-x-2.5">
                  <span className="material-symbols-outlined text-info text-[18px] shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <p className="text-xs text-info font-medium leading-relaxed">
                    <span className="font-bold">Pro Tip:</span> {sec.proTip}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Grammar Item Rendering
  const grammar = selectedItem.data;

  return (
    <section className="col-span-12 lg:col-span-8 xl:col-span-9 bg-surface-base border border-border-hairline rounded-xl p-6 flex flex-col space-y-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-border-hairline gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
            <span>{grammar.tier} Grammar</span>
            <span>•</span>
            <span>{grammar.category}</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              {grammar.title}
            </h1>
            <span className="text-text-muted font-mono text-sm tracking-wide">
              {grammar.romaji}
            </span>
          </div>
          <p className="text-lg text-text-primary font-semibold mt-2">
            {grammar.meaning}
          </p>
          <p className="text-xs text-text-secondary max-w-2xl mt-1 leading-relaxed">
            {grammar.description}
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onSpeak(grammar.title)}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline hover:border-info text-text-primary text-xs transition-all"
            title="Play native pronunciation"
          >
            <span className="material-symbols-outlined text-[16px] text-info">
              volume_up
            </span>
            <span>Native 1.0x</span>
          </button>
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-accent-gold-subtle border-accent-gold text-accent-gold'
                : 'bg-surface-muted hover:bg-surface-elevated border-border-hairline text-text-secondary hover:text-accent-gold'
            }`}
            title="Bookmark Grammar Point"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
      </div>

      {/* Syntax Formula */}
      <div className="rounded-lg bg-surface-base border border-border-hairline p-5 shadow-inner">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-accent-gold text-[18px]">
              high_res
            </span>
            <h3 className="text-sm text-text-primary font-bold">
              Grammar Construction &amp; Syntax Formula
            </h3>
          </div>
          <span className="font-mono text-[11px] text-text-muted bg-surface-container px-2 py-0.5 rounded border border-border-hairline">
            Stem Mode: {grammar.stemMode}
          </span>
        </div>

        <div className="bg-background-deep border border-border-hairline rounded-lg p-3.5 mb-4 flex items-center justify-center flex-wrap gap-2 text-center">
          <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-white text-sm font-semibold">
            {grammar.formula.part1}{' '}
            {grammar.formula.part1Sub && (
              <span className="text-xs text-info font-mono">
                {grammar.formula.part1Sub}
              </span>
            )}
          </div>
          <span className="text-primary font-bold text-lg">
            {grammar.formula.operator || '+'}
          </span>
          <div className="px-3 py-1.5 rounded-lg bg-primary-subtle border border-primary-container text-primary text-sm font-bold">
            {grammar.formula.part2}
          </div>
          {grammar.formula.altPart2 && (
            <>
              <span className="text-text-muted text-xs mx-1">or</span>
              <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-text-secondary text-sm">
                {grammar.formula.altPart2}
              </div>
            </>
          )}
        </div>

        {/* Construction Steps */}
        {grammar.constructionSteps.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {grammar.constructionSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                    <span className="font-mono font-bold text-accent-gold">
                      STEP {step.stepNumber}
                    </span>
                    <span>{step.title}</span>
                  </div>
                  <div className="text-base font-bold text-text-primary font-serif">
                    {step.dictionaryForm}
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">
                    {step.dictionaryRomaji}
                  </div>
                </div>
                <span className="text-[10px] text-info bg-info-subtle px-1.5 py-0.5 rounded w-fit mt-2 border border-info/20">
                  {step.resultTag}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Examples */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-info text-[18px]">
              record_voice_over
            </span>
            <h3 className="text-sm text-text-primary font-bold">
              High-Yield Contextual Examples
            </h3>
          </div>
          <span className="text-xs text-text-muted font-mono">
            Audio TTS enabled
          </span>
        </div>

        {grammar.examples.map((ex) => (
          <div
            key={ex.id}
            className="p-4 rounded-lg bg-surface-container border border-border-hairline hover:border-text-secondary/40 transition-colors flex items-start justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                <span className="font-mono text-[10px] text-accent-gold uppercase font-bold tracking-wider">
                  {ex.label}
                </span>
                <span className="text-[10px] text-text-muted bg-surface-muted px-2 py-0.2 rounded border border-border-hairline">
                  {ex.context}
                </span>
              </div>
              <p
                className="text-xl font-bold text-white font-serif tracking-wide leading-relaxed"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ex.japaneseHtml) }}
              />
              <p className="text-xs text-text-primary font-medium">
                {ex.english}
              </p>
              {ex.note && (
                <p className="text-[11px] text-text-muted italic">
                  Context: {ex.note}
                </p>
              )}
            </div>
            <button
              onClick={() => onSpeak(ex.plainJapanese)}
              className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated text-info hover:text-white border border-border-hairline transition-colors"
              title="Play Audio"
            >
              <span className="material-symbols-outlined text-[18px]">
                play_circle
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
