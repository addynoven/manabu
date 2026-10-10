'use client';

import React, { useState, useEffect } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { speakJapanese } from '@/features/content/models/kana';
import { VisualThemePanel } from './components';

export function SettingsScreen() {
  const [activeTab, setActiveTab] = useState<'visual' | 'fsrs' | 'audio'>('visual');

  const [theme, setTheme] = useState<'bunpro' | 'obsidian' | 'alabaster'>('bunpro');
  const [furiganaMode, setFuriganaMode] = useState<'hover' | 'always' | 'hidden'>('hover');

  const [retentionRate, setRetentionRate] = useState<number>(90);
  const [ghostReviews, setGhostReviews] = useState<boolean>(true);

  const [voicePack, setVoicePack] = useState<'haru' | 'kenji' | 'aoi'>('haru');
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(true);

  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('manabu_theme') as any;
      if (savedTheme) setTheme(savedTheme);
      const savedFurigana = localStorage.getItem('manabu_furigana') as any;
      if (savedFurigana) setFuriganaMode(savedFurigana);
      const savedRetention = localStorage.getItem('manabu_fsrs_retention');
      if (savedRetention) setRetentionRate(Number(savedRetention));
      const savedVoice = localStorage.getItem('manabu_voice') as any;
      if (savedVoice) setVoicePack(savedVoice);
    } catch {}
  }, []);

  const handleSavePreferences = () => {
    try {
      localStorage.setItem('manabu_theme', theme);
      localStorage.setItem('manabu_furigana', furiganaMode);
      localStorage.setItem('manabu_fsrs_retention', String(retentionRate));
      localStorage.setItem('manabu_voice', voicePack);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch {}
  };

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        <section className="w-full border-b border-border-hairline bg-surface-container py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
              <span>Manabu Workstation</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-secondary">System Preferences &amp; Settings</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                  Workstation Settings
                </h1>
                <p className="text-xs sm:text-sm text-text-secondary mt-1">
                  Customize your SRS scheduling, audio synthesis, and workstation environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="lg:col-span-4 flex flex-col gap-5 sticky top-20">
              <div className="bg-surface-base border border-border-hairline rounded-xl p-2 shadow-sm">
                <nav aria-label="Settings Categories" className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveTab('visual')}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left transition-all ${
                      activeTab === 'visual'
                        ? 'bg-surface-muted border-l-4 border-primary-container text-text-primary font-bold shadow-sm'
                        : 'hover:bg-surface-elevated text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-primary-container">palette</span>
                      <span className="text-sm font-medium">Visual Styling &amp; Themes</span>
                    </div>
                  </button>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-8 flex flex-col gap-6">
              <VisualThemePanel
                theme={theme}
                furiganaMode={furiganaMode}
                onSetTheme={setTheme}
                onSetFuriganaMode={setFuriganaMode}
              />

              <div className="sticky bottom-6 z-40 bg-surface-container-high/95 backdrop-blur-md border border-border-hairline rounded-xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span>
                    {saveSuccess ? (
                      <strong className="text-success">Preferences saved and synced!</strong>
                    ) : (
                      <span>Preferences calibrated for Nocturnal Workstation.</span>
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-2 rounded-lg bg-primary-container hover:bg-primary-hover text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(199,74,74,0.35)] transition active:scale-95"
                  >
                    <span>Save Preferences</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthGate>
  );
}
