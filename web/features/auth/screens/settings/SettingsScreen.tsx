'use client';

import React, { useState, useEffect } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate, useAuth } from '@/features/auth';
import { firebaseAuth } from '@/core/api/firebaseClient';
import { speakJapanese } from '@/features/content';
import { getWeekId } from '@/core/utils/helpers';
import { VisualThemePanel } from './components';
import { Volume2, Sliders, Palette } from 'lucide-react';

export function SettingsScreen() {
  const { profile, refreshProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'visual' | 'fsrs' | 'audio'>('visual');

  const [theme, setTheme] = useState<'bunpro' | 'obsidian' | 'alabaster'>('bunpro');
  const [furiganaMode, setFuriganaMode] = useState<'hover' | 'always' | 'hidden'>('hover');

  const [retentionRate, setRetentionRate] = useState<number>(90);
  const [ghostReviews, setGhostReviews] = useState<boolean>(true);

  const [voicePack, setVoicePack] = useState<'haru' | 'kenji' | 'aoi'>('haru');
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);

  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('manabu_theme') as any;
      if (savedTheme) setTheme(savedTheme);

      const savedFurigana = localStorage.getItem('manabu_furigana') as any;
      if (savedFurigana) setFuriganaMode(savedFurigana);

      const savedRetention = localStorage.getItem('manabu_fsrs_retention');
      if (savedRetention) {
        setRetentionRate(Number(savedRetention));
      } else if (profile?.desiredRetention) {
        setRetentionRate(Math.round(profile.desiredRetention * 100));
      }

      const savedVoice = localStorage.getItem('manabu_voice') as any;
      if (savedVoice) setVoicePack(savedVoice);

      const savedSpeed = localStorage.getItem('manabu_speech_speed');
      if (savedSpeed) setSpeechSpeed(Number(savedSpeed));

      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', savedTheme || 'bunpro');
        document.documentElement.setAttribute('data-furigana', savedFurigana || 'hover');
      }
    } catch {}
  }, [profile?.desiredRetention]);

  const handleSavePreferences = async () => {
    try {
      localStorage.setItem('manabu_theme', theme);
      localStorage.setItem('manabu_furigana', furiganaMode);
      localStorage.setItem('manabu_fsrs_retention', String(retentionRate));
      localStorage.setItem('manabu_voice', voicePack);
      localStorage.setItem('manabu_speech_speed', String(speechSpeed));

      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-furigana', furiganaMode);
      }

      // Sync desired_retention to PostgreSQL backend
      if (firebaseAuth.currentUser) {
        const token = await firebaseAuth.currentUser.getIdToken();
        const desiredRetention = Number((retentionRate / 100).toFixed(2));
        await fetch('/api/v1/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            displayName: profile?.displayName || firebaseAuth.currentUser.displayName || 'Learner',
            avatarEmoji: profile?.avatarEmoji || '🥋',
            beltRank: profile?.beltRank || 'white',
            level: profile?.level || 1,
            totalXp: profile?.totalXp || 0,
            weeklyXp: profile?.weeklyXp || 0,
            weekId: profile?.weekId || getWeekId(),
            currentStreak: profile?.currentStreak || 1,
            lastActiveDate: profile?.lastActiveDate || null,
            desiredRetention,
          }),
        });
        await refreshProfile();
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      console.error('[Settings] Error saving preferences:', err);
    }
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
                      <Palette size={18} className="text-primary-container" />
                      <span className="text-sm font-medium">Visual Styling &amp; Themes</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('fsrs')}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left transition-all ${
                      activeTab === 'fsrs'
                        ? 'bg-surface-muted border-l-4 border-primary-container text-text-primary font-bold shadow-sm'
                        : 'hover:bg-surface-elevated text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sliders size={18} className="text-amber-400" />
                      <span className="text-sm font-medium">FSRS-6 Algorithm Calibration</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('audio')}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left transition-all ${
                      activeTab === 'audio'
                        ? 'bg-surface-muted border-l-4 border-primary-container text-text-primary font-bold shadow-sm'
                        : 'hover:bg-surface-elevated text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Volume2 size={18} className="text-emerald-400" />
                      <span className="text-sm font-medium">Audio Speech Synthesis</span>
                    </div>
                  </button>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-8 flex flex-col gap-6">
              {activeTab === 'visual' && (
                <VisualThemePanel
                  theme={theme}
                  furiganaMode={furiganaMode}
                  onSetTheme={(t) => {
                    setTheme(t);
                    if (typeof document !== 'undefined') {
                      document.documentElement.setAttribute('data-theme', t);
                    }
                  }}
                  onSetFuriganaMode={(f) => {
                    setFuriganaMode(f);
                    if (typeof document !== 'undefined') {
                      document.documentElement.setAttribute('data-furigana', f);
                    }
                  }}
                />
              )}

              {activeTab === 'fsrs' && (
                <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm space-y-6">
                  <div className="border-b border-border-hairline pb-4">
                    <h2 className="text-xl font-bold text-white">FSRS-6 Algorithm Calibration</h2>
                    <p className="text-xs text-text-secondary mt-1">
                      Configure target memory retention rate and ghost interval scheduling.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Target Retention Rate</span>
                        <span className="text-amber-400 font-mono">{retentionRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={80}
                        max={95}
                        step={1}
                        value={retentionRate}
                        onChange={(e) => setRetentionRate(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                      <p className="text-[11px] text-text-muted mt-1">
                        Higher retention rates trigger reviews sooner to guarantee recall stability.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Ghost Reviews</span>
                        <span className="text-[11px] text-text-muted">
                          Automatically generate ghost practice cards on lapsed items.
                        </span>
                      </div>
                      <button
                        onClick={() => setGhostReviews(!ghostReviews)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${
                          ghostReviews ? 'bg-primary-container' : 'bg-surface-muted'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            ghostReviews ? 'left-7' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'audio' && (
                <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm space-y-6">
                  <div className="border-b border-border-hairline pb-4">
                    <h2 className="text-xl font-bold text-white">Tokyo Speech Synthesis Audio</h2>
                    <p className="text-xs text-text-secondary mt-1">
                      Select voice profile and test playback speed.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'haru', label: 'Haru (Tokyo Female)' },
                        { id: 'kenji', label: 'Kenji (Tokyo Male)' },
                        { id: 'aoi', label: 'Aoi (Soft Native)' },
                      ].map((v) => (
                        <button
                          key={v.id}
                          onClick={() => {
                            setVoicePack(v.id as any);
                            speakJapanese('こんにちは！日本語を勉強しましょう', { rate: speechSpeed, voice: v.id });
                          }}
                          className={`p-4 rounded-xl border text-left transition ${
                            voicePack === v.id
                              ? 'bg-surface-muted border-primary-container text-white font-bold'
                              : 'bg-background-deep border-border-hairline text-text-secondary'
                          }`}
                        >
                          <span className="text-xs font-mono block">{v.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Speech Playback Speed</span>
                      <div className="flex gap-1">
                        {[0.8, 1.0, 1.2].map((spd) => (
                          <button
                            key={spd}
                            onClick={() => {
                              setSpeechSpeed(spd);
                              speakJapanese('日本語', { rate: spd, voice: voicePack });
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                              speechSpeed === spd
                                ? 'bg-primary-container text-white font-bold'
                                : 'bg-surface-muted text-text-secondary border border-border-hairline'
                            }`}
                          >
                            {spd}x
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

