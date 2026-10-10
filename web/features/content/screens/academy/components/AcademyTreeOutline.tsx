'use client';

import React from 'react';

interface AcademyTreeOutlineProps {
  activeUnit: number;
  onSelectUnit: (unitNum: number) => void;
}

export function AcademyTreeOutline({ activeUnit, onSelectUnit }: AcademyTreeOutlineProps) {
  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 bg-surface-base border border-border-hairline rounded-xl p-3 flex flex-col space-y-3 sticky top-20 max-h-[calc(100vh-120px)] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle px-1">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[18px] text-accent-gold">account_tree</span>
          <h2 className="text-xs uppercase tracking-wider text-text-primary font-bold">
            Curriculum Structure
          </h2>
        </div>
        <span className="text-[11px] font-mono text-text-muted">Unit {activeUnit} of 18</span>
      </div>

      <div className="overflow-y-auto custom-scroll flex-1 pr-1 space-y-2">
        <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
          <button
            onClick={() => onSelectUnit(1)}
            className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
          >
            <div className="flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
              <div>
                <span className="text-xs font-semibold text-text-primary group-hover:text-white block">Unit 1: Copula &amp; Identity</span>
                <span className="text-[11px] text-text-muted font-mono">だ, です, じゃない</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-success-subtle text-success text-[10px] font-mono font-bold">8/8</span>
          </button>
        </div>

        <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
          <button
            onClick={() => onSelectUnit(2)}
            className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
          >
            <div className="flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
              <div>
                <span className="text-xs font-semibold text-text-primary group-hover:text-white block">Unit 2: Essential Particles</span>
                <span className="text-[11px] text-text-muted font-mono">は, が, を, に, で...</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-success-subtle text-success text-[10px] font-mono font-bold">14/14</span>
          </button>
        </div>

        <div className="rounded-lg bg-surface-container border border-border-hairline overflow-hidden shadow-md">
          <button
            onClick={() => onSelectUnit(3)}
            className="w-full px-3 py-2.5 flex items-center justify-between text-left bg-surface-muted/90 border-b border-border-subtle group"
          >
            <div className="flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-[16px] text-accent-gold">folder_open</span>
              <div>
                <span className="text-xs font-bold text-text-primary group-hover:text-white block">Unit 3: Verb Connections &amp; Te-Form</span>
                <span className="text-[10px] text-text-secondary">4 of 12 Mastered</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-accent-gold-subtle text-accent-gold text-[10px] font-mono font-bold">4/12</span>
          </button>

          <div className="p-1.5 space-y-1 bg-background-deep/60">
            <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                <div>
                  <span className="text-xs text-text-primary block">〜てください</span>
                  <span className="text-[10px] text-text-muted">Polite Request</span>
                </div>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-success-subtle border border-success/30 text-success text-[10px] font-semibold">Mastered</span>
            </div>

            <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left bg-surface-muted border-l-4 border-l-primary-container border-y border-r border-border-hairline shadow-[0_0_12px_rgba(199,74,74,0.15)] relative cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#c74a4a]"></span>
                <div>
                  <span className="text-xs font-bold text-white block">〜てはいけない</span>
                  <span className="text-[10px] text-primary">Strong Prohibition</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="px-1.5 py-0.5 rounded bg-primary-subtle border border-primary-container/40 text-primary text-[10px] font-semibold">Adept 3/5</span>
                <span className="text-[9px] text-accent-gold font-mono mt-0.5">Active</span>
              </div>
            </div>

            <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-info"></span>
                <div>
                  <span className="text-xs text-text-primary block">〜てもいい</span>
                  <span className="text-[10px] text-text-muted">Permission / Grant</span>
                </div>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-info-subtle border border-info/30 text-info text-[10px] font-semibold">Learning</span>
            </div>

            <div className="px-2.5 py-2 rounded-lg flex items-center justify-between text-left hover:bg-surface-muted transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
                <div>
                  <span className="text-xs text-text-primary block">〜ている</span>
                  <span className="text-[10px] text-text-muted">Continuous / State</span>
                </div>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-surface-container border border-border-hairline text-text-muted text-[10px]">Unseen</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-surface-container border border-border-hairline/80 overflow-hidden">
          <button
            onClick={() => onSelectUnit(4)}
            className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-surface-muted transition-colors group"
          >
            <div className="flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-[16px] text-text-muted">folder</span>
              <div>
                <span className="text-xs font-semibold text-text-secondary group-hover:text-text-primary block">Unit 4: Past &amp; Adjective Inflections</span>
                <span className="text-[10px] text-text-muted">0/10 Mastered</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted px-1">
        <span>Curriculum Progress</span>
        <span className="font-mono text-accent-gold font-bold">64.6%</span>
      </div>
      <div className="w-full h-1.5 bg-background-deep rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary-container via-accent-gold to-success rounded-full" style={{ width: '64.6%' }}></div>
      </div>
    </aside>
  );
}
