'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { ACADEMY_GUIDES, type LearningGuide } from '@/data/academy/guides';
import {
  GraduationCap,
  Search,
  BookOpen,
  Clock,
  Sparkles,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  Volume2,
} from 'lucide-react';

export default function AcademyPage() {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(ACADEMY_GUIDES[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Writing Systems', 'Grammar', 'Kanji', 'Study Tips'];

  const filteredGuides = ACADEMY_GUIDES.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.japaneseTitle.includes(searchQuery);
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeGuide = ACADEMY_GUIDES.find((g) => g.id === selectedGuideId) || ACADEMY_GUIDES[0];

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AppShell>
      <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Header matching Stitch Screen #6 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-red-950/80 text-red-400 border border-red-800/60 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={13} />
                Grammar Academy
              </span>
              <span className="text-xs text-neutral-400 font-mono">Structural Reference & Guides</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3 font-serif">
              <span>文法道場</span>
              <span className="text-neutral-400 font-sans font-medium text-2xl">Grammar & Study Academy</span>
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Master core Japanese structural rules, particles, writing systems, and accelerated study methodologies.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/90 p-1.5 rounded-xl border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Reader Layout matching Stitch Screen #6 and #26 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Guide Navigator (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, concepts..."
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 transition outline-none"
              />
            </div>

            <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
              {filteredGuides.map((guide) => {
                const isSelected = guide.id === activeGuide?.id;
                return (
                  <button
                    key={guide.id}
                    onClick={() => setSelectedGuideId(guide.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-red-950/40 border-red-600/80 shadow-md'
                        : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold font-serif shrink-0 text-lg ${
                        isSelected
                          ? 'bg-red-600 text-white shadow-inner'
                          : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {guide.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                          {guide.category}
                        </span>
                        <span className="text-[11px] text-neutral-500 flex items-center gap-1 font-mono">
                          <Clock size={11} /> {guide.readTime}
                        </span>
                      </div>
                      <h3
                        className={`text-sm font-bold truncate ${
                          isSelected ? 'text-white' : 'text-neutral-200'
                        }`}
                      >
                        {guide.title}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                        {guide.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Reader Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
            {activeGuide ? (
              <div className="space-y-6">
                {/* Guide Meta Header */}
                <div className="border-b border-neutral-800 pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-red-950/80 text-red-400 border border-red-800/60 rounded text-[11px] font-bold uppercase tracking-wider">
                      {activeGuide.category}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                      <Clock size={12} /> {activeGuide.readTime} reading time
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-serif mb-1">
                    {activeGuide.title}
                  </h2>
                  <p className="text-sm text-neutral-400 font-serif text-red-300/80">
                    {activeGuide.japaneseTitle}
                  </p>
                  <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                    {activeGuide.summary}
                  </p>
                </div>

                {/* Guide Sections */}
                <div className="space-y-8">
                  {activeGuide.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-neutral-800 text-red-400 flex items-center justify-center text-xs font-mono font-bold">
                          {idx + 1}
                        </span>
                        {section.title}
                      </h3>

                      <div className="space-y-2.5 text-sm text-neutral-300 leading-relaxed">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Callout Examples / Tables */}
                      {section.callout && (
                        <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-4 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                            <BookOpen size={13} className="text-red-500" />
                            {section.callout.title}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.callout.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="bg-neutral-900 border border-neutral-800/80 rounded-lg p-3 flex items-start justify-between gap-3 group hover:border-neutral-700 transition"
                              >
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-white font-serif group-hover:text-red-400 transition">
                                      {item.japanese}
                                    </span>
                                    {item.romaji && (
                                      <span className="text-xs font-mono text-neutral-500">
                                        ({item.romaji})
                                      </span>
                                    )}
                                  </div>
                                  {item.meaning && (
                                    <p className="text-xs text-neutral-300 mt-0.5">
                                      {item.meaning}
                                    </p>
                                  )}
                                  {item.note && (
                                    <p className="text-[11px] text-neutral-500 italic mt-0.5">
                                      {item.note}
                                    </p>
                                  )}
                                </div>
                                <button
                                  onClick={() => speak(item.japanese)}
                                  className="p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded transition shrink-0"
                                  title="Listen"
                                >
                                  <Volume2 size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ProTip Card */}
                      {section.proTip && (
                        <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-4 flex items-start gap-3 text-amber-200/90 text-xs leading-relaxed">
                          <Lightbulb size={18} className="text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-300 mr-1">Pro Tip:</span>
                            {section.proTip}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-neutral-500 text-sm">
                Select a guide from the left to begin reading.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
