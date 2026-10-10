'use client';

import React from 'react';

interface ArcadeHeaderRibbonProps {
  rainHigh: number;
  snakeHigh: number;
  catchHigh: number;
  survivalHigh: number;
}

export function ArcadeHeaderRibbon({
  rainHigh,
  snakeHigh,
  catchHigh,
  survivalHigh,
}: ArcadeHeaderRibbonProps) {
  return (
    <section className="w-full bg-surface-base border border-border-hairline rounded-xl p-6 relative overflow-hidden shadow-sm">
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-4 bottom-0 text-[120px] font-bold text-border-hairline/25 select-none leading-none pointer-events-none font-mono">
        闘
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[20px]">
              sports_esports
            </span>
            <span className="font-mono text-[11px] text-text-secondary tracking-widest uppercase font-bold">
              MANABU ARCADE • LINGUISTIC BATTLE STATIONS
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-accent-gold-subtle text-accent-gold border border-accent-gold/40">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-1.5 animate-ping" />
              SEASON 04 LIVE
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>Reflex Drills Sync: Active</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight flex items-center gap-3">
            <span>The Dojo Arcade &amp; Linguistic Colosseum</span>
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Transform high-intensity JLPT drills into deliberate reflex mastery. High scores feed directly into your SRS retention matrix.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 mt-2 border-t border-border-subtle">
          <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
            <div className="p-2 rounded bg-surface-muted text-info">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase font-semibold">Rain High</div>
              <div className="text-sm font-bold text-text-primary font-mono">{rainHigh} pts</div>
            </div>
          </div>
          <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
            <div className="p-2 rounded bg-accent-gold-subtle text-accent-gold border border-accent-gold/20">
              <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase font-semibold">Snake High</div>
              <div className="text-sm font-bold text-accent-gold font-mono">{snakeHigh} pts</div>
            </div>
          </div>
          <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
            <div className="p-2 rounded bg-surface-muted text-primary-fixed-dim">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase font-semibold">Catch High</div>
              <div className="text-sm font-bold text-text-primary font-mono">{catchHigh} pts</div>
            </div>
          </div>
          <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
            <div className="p-2 rounded bg-surface-muted text-secondary">
              <span className="material-symbols-outlined text-[20px]">military_tech</span>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase font-semibold">Survival High</div>
              <div className="text-sm font-bold text-secondary font-mono">{survivalHigh} pts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
