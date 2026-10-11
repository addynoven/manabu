'use client';

import React from 'react';
import { AcademyItem } from '../../../models/academyData';

interface AcademyTreeOutlineProps {
  items: AcademyItem[];
  selectedItemId: string;
  onSelectItem: (id: string) => void;
  bookmarkedIds: string[];
}

export function AcademyTreeOutline({
  items,
  selectedItemId,
  onSelectItem,
  bookmarkedIds,
}: AcademyTreeOutlineProps) {
  const guideItems = items.filter((i) => i.type === 'guide');
  const grammarItems = items.filter((i) => i.type === 'grammar');

  // Group grammar items by unitNumber
  const unitsMap = new Map<number, { unitTitle: string; items: typeof grammarItems }>();
  for (const item of grammarItems) {
    if (item.type === 'grammar') {
      const g = item.data;
      if (!unitsMap.has(g.unitNumber)) {
        unitsMap.set(g.unitNumber, { unitTitle: g.unitTitle, items: [] });
      }
      unitsMap.get(g.unitNumber)!.items.push(item);
    }
  }

  const sortedUnits = Array.from(unitsMap.entries()).sort(([a], [b]) => a - b);

  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 bg-surface-base border border-border-hairline rounded-xl p-3 flex flex-col space-y-3 sticky top-20 max-h-[calc(100vh-120px)] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle px-1">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[18px] text-accent-gold">
            account_tree
          </span>
          <h2 className="text-xs uppercase tracking-wider text-text-primary font-bold">
            Curriculum Structure
          </h2>
        </div>
        <span className="text-[11px] font-mono text-text-muted">
          {items.length} Available
        </span>
      </div>

      <div className="overflow-y-auto custom-scroll flex-1 pr-1 space-y-3">
        {/* Guides Section */}
        {guideItems.length > 0 && (
          <div className="rounded-lg bg-surface-container border border-border-hairline overflow-hidden p-2 space-y-1.5">
            <div className="flex items-center space-x-1.5 px-1 py-1 border-b border-border-hairline text-xs font-bold text-accent-gold">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Learning Guides ({guideItems.length})</span>
            </div>
            {guideItems.map((item) => {
              if (item.type !== 'guide') return null;
              const guide = item.data;
              const isSelected = selectedItemId === guide.id;
              const isBookmarked = bookmarkedIds.includes(guide.id);

              return (
                <button
                  key={guide.id}
                  onClick={() => onSelectItem(guide.id)}
                  className={`w-full p-2 rounded-lg flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? 'bg-surface-muted border-l-4 border-l-accent-gold text-white font-bold shadow'
                      : 'hover:bg-surface-muted/60 text-text-secondary border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <span className="w-5 h-5 rounded-full bg-surface-base flex items-center justify-center text-[10px] font-mono font-bold text-accent-gold border border-border-hairline shrink-0">
                      {guide.icon || 'あ'}
                    </span>
                    <div className="truncate">
                      <span className="text-xs block truncate text-text-primary">
                        {guide.title}
                      </span>
                      <span className="text-[10px] text-text-muted block">
                        {guide.japaneseTitle} • {guide.readTime}
                      </span>
                    </div>
                  </div>
                  {isBookmarked && (
                    <span className="material-symbols-outlined text-[14px] text-accent-gold shrink-0">
                      bookmark
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Units Section */}
        {sortedUnits.map(([unitNum, unitGroup]) => (
          <div
            key={unitNum}
            className="rounded-lg bg-surface-container border border-border-hairline overflow-hidden shadow-sm"
          >
            <div className="px-3 py-2 bg-surface-muted/80 border-b border-border-subtle flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[16px] text-accent-gold">
                  folder_open
                </span>
                <span className="text-xs font-bold text-text-primary">
                  {unitGroup.unitTitle}
                </span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-accent-gold-subtle text-accent-gold text-[10px] font-mono font-bold">
                {unitGroup.items.length} Items
              </span>
            </div>

            <div className="p-1 space-y-1 bg-background-deep/50">
              {unitGroup.items.map((item) => {
                if (item.type !== 'grammar') return null;
                const grammar = item.data;
                const isSelected = selectedItemId === grammar.id;
                const isBookmarked = bookmarkedIds.includes(grammar.id);
                const status = grammar.defaultMastery || 'learning';

                return (
                  <button
                    key={grammar.id}
                    onClick={() => onSelectItem(grammar.id)}
                    className={`w-full px-2.5 py-2 rounded-lg flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? 'bg-surface-muted border-l-4 border-l-primary-container border-y border-r border-border-hairline shadow-md'
                        : 'hover:bg-surface-muted/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          status === 'mastered'
                            ? 'bg-success'
                            : status === 'adept'
                            ? 'bg-primary-container'
                            : status === 'learning'
                            ? 'bg-info'
                            : 'bg-text-muted'
                        }`}
                      ></span>
                      <div className="truncate">
                        <span
                          className={`text-xs block truncate ${
                            isSelected
                              ? 'font-bold text-white'
                              : 'text-text-primary'
                          }`}
                        >
                          {grammar.title}
                        </span>
                        <span className="text-[10px] text-text-muted block truncate">
                          {grammar.meaning}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      {isBookmarked && (
                        <span className="material-symbols-outlined text-[14px] text-accent-gold">
                          bookmark
                        </span>
                      )}
                      <span
                        className={`px-1.5 py-0.2 rounded text-[9px] font-semibold uppercase ${
                          status === 'mastered'
                            ? 'bg-success-subtle text-success border border-success/30'
                            : status === 'adept'
                            ? 'bg-primary-subtle text-primary border border-primary-container/30'
                            : status === 'learning'
                            ? 'bg-info-subtle text-info border border-info/30'
                            : 'bg-surface-container text-text-muted'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="p-6 text-center text-text-muted text-xs">
            No items found matching your filters.
          </div>
        )}
      </div>
    </aside>
  );
}
