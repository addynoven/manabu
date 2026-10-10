'use client';

import React from 'react';

interface AcademyGrammarDetailProps {
  onSpeak: (text: string) => void;
}

export function AcademyGrammarDetail({ onSpeak }: AcademyGrammarDetailProps) {
  return (
    <section className="col-span-12 lg:col-span-8 xl:col-span-9 bg-surface-base border border-border-hairline rounded-xl p-6 flex flex-col space-y-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-border-hairline gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-primary-subtle border border-primary-container/50 text-primary text-[11px] font-bold">
              JLPT N5 Core
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-muted border border-border-hairline text-text-secondary text-xs">
              Lesson 15
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-muted border border-border-hairline text-text-secondary text-xs">
              Verb Te-Form
            </span>
            <div className="flex items-center space-x-1 bg-surface-container px-2.5 py-0.5 rounded-full border border-border-hairline">
              <span className="text-[10px] text-text-muted mr-1 font-medium">SRS</span>
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="w-2 h-2 rounded-full bg-border-hairline"></span>
              <span className="w-2 h-2 rounded-full bg-border-hairline"></span>
              <span className="text-xs text-text-secondary font-mono ml-1 font-bold">Adept 3/5</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-accent-gold-subtle border border-accent-gold/30 text-accent-gold text-xs font-mono font-medium">
              Difficulty: ★★☆☆☆
            </span>
          </div>

          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              〜てはいけない
            </h1>
            <span className="text-text-muted font-mono text-sm tracking-wide">/ te wa ikenai /</span>
          </div>
          <p className="text-lg text-text-primary font-semibold mt-2">
            Must not do / Strong Prohibition &amp; Rules
          </p>
          <p className="text-xs text-text-secondary max-w-2xl mt-1 leading-relaxed">
            Expresses an objective, authoritative prohibition or societal ban. Frequently used in statutory signage, institutional bylaws, parental directives, and exam instructions.
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onSpeak('てはいけない')}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline hover:border-info text-text-primary text-xs transition-all"
            title="Play native pronunciation"
          >
            <span className="material-symbols-outlined text-[16px] text-info">volume_up</span>
            <span>Native 1.0x</span>
          </button>
          <button className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-secondary hover:text-accent-gold transition-colors">
            <span className="material-symbols-outlined text-[18px]">bookmark</span>
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-surface-base border border-border-hairline p-5 shadow-inner">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-accent-gold text-[18px]">high_res</span>
            <h3 className="text-sm text-text-primary font-bold">
              Grammar Construction &amp; Syntax Formula
            </h3>
          </div>
          <span className="font-mono text-[11px] text-text-muted bg-surface-container px-2 py-0.5 rounded border border-border-hairline">
            Stem Mode: 連用形
          </span>
        </div>

        <div className="bg-background-deep border border-border-hairline rounded-lg p-3.5 mb-4 flex items-center justify-center flex-wrap gap-2 text-center">
          <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-white text-sm font-semibold">
            動詞 連用形 <span className="text-xs text-info font-mono">[て-form]</span>
          </div>
          <span className="text-primary font-bold text-lg">+</span>
          <div className="px-3 py-1.5 rounded-lg bg-primary-subtle border border-primary-container text-primary text-sm font-bold">
            はいけない
          </div>
          <span className="text-text-muted text-xs mx-1">or</span>
          <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-text-secondary text-sm">
            はだめ
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                <span className="font-mono font-bold text-accent-gold">STEP 1</span>
                <span>Dictionary Verb</span>
              </div>
              <div className="text-base font-bold text-text-primary font-serif">
                <ruby>撮<rt>と</rt></ruby>る
              </div>
              <div className="text-xs text-text-secondary mt-0.5">toru (to take photo)</div>
            </div>
            <span className="text-[10px] text-info bg-info-subtle px-1.5 py-0.5 rounded w-fit mt-2 border border-info/20">
              Godan verb with る
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                <span className="font-mono font-bold text-accent-gold">STEP 2</span>
                <span>Te-form Inflection</span>
              </div>
              <div className="text-base font-bold text-text-primary font-serif flex items-center gap-1.5">
                <span>撮る</span>
                <span className="text-text-muted text-xs">→</span>
                <span className="text-info"><ruby>撮<rt>と</rt></ruby>って</span>
              </div>
              <div className="text-xs text-text-secondary mt-0.5">totte (small っ + て)</div>
            </div>
            <span className="text-[10px] text-text-muted bg-surface-muted px-1.5 py-0.5 rounded w-fit mt-2 border border-border-hairline">
              Double consonant shift
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-container border border-border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                <span className="font-mono font-bold text-primary">STEP 3</span>
                <span>Attach Prohibition</span>
              </div>
              <div className="text-base font-bold text-white font-serif">
                <ruby>撮<rt>と</rt></ruby>って<span className="text-primary">はいけない</span>
              </div>
              <div className="text-xs text-text-secondary mt-0.5">totte wa ikenai</div>
            </div>
            <span className="text-[10px] text-primary bg-primary-subtle px-1.5 py-0.5 rounded w-fit mt-2 border border-primary-container/40">
              Complete structure
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-info text-[18px]">record_voice_over</span>
            <h3 className="text-sm text-text-primary font-bold">
              High-Yield Contextual Examples
            </h3>
          </div>
          <span className="text-xs text-text-muted font-mono">Audio pitch-accent verified</span>
        </div>

        <div className="p-4 rounded-lg bg-surface-container border border-border-hairline hover:border-text-secondary/40 transition-colors flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
              <span className="font-mono text-[10px] text-accent-gold uppercase font-bold tracking-wider">Example 01</span>
              <span className="text-[10px] text-text-muted bg-surface-muted px-2 py-0.2 rounded border border-border-hairline">Museum Notice</span>
            </div>
            <p className="text-xl font-bold text-white font-serif tracking-wide leading-relaxed">
              ここで <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>って<span className="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけません</span>。
            </p>
            <p className="text-xs text-text-primary font-medium">
              &quot;You must not take photos here.&quot;
            </p>
            <p className="text-[11px] text-text-muted italic">
              Context: Inflexible official rule posted at art galleries, temples, and exhibition rooms.
            </p>
          </div>
          <button
            onClick={() => onSpeak('ここで写真を撮ってはいけません')}
            className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated text-info hover:text-white border border-border-hairline transition-colors"
            title="Play Audio"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
          </button>
        </div>

        <div className="p-4 rounded-lg bg-surface-container border border-border-hairline hover:border-text-secondary/40 transition-colors flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-info"></span>
              <span className="font-mono text-[10px] text-info uppercase font-bold tracking-wider">Example 02</span>
              <span className="text-[10px] text-text-muted bg-surface-muted px-2 py-0.2 rounded border border-border-hairline">Residential Rules</span>
            </div>
            <p className="text-xl font-bold text-white font-serif tracking-wide leading-relaxed">
              <ruby>夜遅<rt>よるおそ</rt></ruby>くに <ruby>大<rt>おお</rt></ruby>きな<ruby>音<rt>おと</rt></ruby>を <ruby>立<rt>た</rt></ruby>てて<span className="text-primary font-extrabold underline decoration-primary decoration-2 underline-offset-4">はいけない</span>。
            </p>
            <p className="text-xs text-text-primary font-medium">
              &quot;You must not make loud noises late at night.&quot;
            </p>
            <p className="text-[11px] text-text-muted italic">
              Context: General building rule spoken in plain authoritative form.
            </p>
          </div>
          <button
            onClick={() => onSpeak('夜遅くに大きな音を立ててはいけない')}
            className="p-2 rounded-lg bg-surface-muted hover:bg-surface-elevated text-info hover:text-white border border-border-hairline transition-colors"
            title="Play Audio"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
          </button>
        </div>
      </div>
    </section>
  );
}
