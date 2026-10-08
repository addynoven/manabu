'use client';

import React, { useState, useEffect } from 'react';
import { StitchHeader } from '@/components/StitchHeader';
import { AuthGate } from '@/components/AuthGate';
import { speakJapanese } from '@/data/kana';

interface UserProfile {
  uid: string;
  display_name: string;
  avatar_emoji: string;
  belt_rank: string;
  level: number;
  total_xp: number;
  weekly_xp: number;
  current_streak: number;
  friend_code: string;
  banned: boolean;
  last_active_date: string | null;
  updated_at: string;
}

interface AppConfig {
  social: boolean;
  duels: boolean;
  minAppVersion: number;
}

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<'visual' | 'fsrs' | 'audio' | 'keys' | 'telemetry' | 'users'>('visual');
  
  // Visual Theme settings
  const [theme, setTheme] = useState<'bunpro' | 'obsidian' | 'alabaster'>('bunpro');
  const [furiganaMode, setFuriganaMode] = useState<'hover' | 'always' | 'hidden'>('hover');
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'comfortable' | 'large'>('normal');
  const [fontFamily, setFontFamily] = useState<'noto' | 'shippori'>('noto');

  // FSRS Settings
  const [retentionRate, setRetentionRate] = useState<number>(90);
  const [batchSize, setBatchSize] = useState<number>(25);
  const [intervalModifier, setIntervalModifier] = useState<number>(1.0);
  const [ghostReviews, setGhostReviews] = useState<boolean>(true);

  // Audio Settings
  const [voicePack, setVoicePack] = useState<'haru' | 'kenji' | 'aoi'>('haru');
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Admin / Telemetry state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [secretInput, setSecretInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [config, setConfig] = useState<AppConfig>({ social: true, duels: true, minAppVersion: 1 });
  const [statusMessage, setStatusMessage] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load user workstation preferences from localStorage
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

    // Check if admin session exists
    fetch('/api/admin/config')
      .then(res => {
        if (res.ok) {
          setIsAdminAuthenticated(true);
          return res.json();
        }
      })
      .then(data => {
        if (data?.config) setConfig(data.config);
        loadUsers('');
      })
      .catch(() => {});
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

  const handleTestAudio = () => {
    speakJapanese('こんにちは、学びにようこそ。');
  };

  // Admin Auth & Management
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretInput }),
      });
      if (!res.ok) throw new Error('Invalid Admin Secret');
      setIsAdminAuthenticated(true);
      fetchConfig();
      loadUsers('');
    } catch (err: any) {
      setLoginError(err.message || 'Login failed');
    }
  };

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/admin/config');
      if (res.ok) {
        const data = await res.json();
        if (data.config) setConfig(data.config);
      }
    } catch {}
  };

  const loadUsers = async (query = '') => {
    try {
      const url = query ? `/api/admin/users?q=${encodeURIComponent(query)}` : '/api/admin/users';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch {}
  };

  const toggleConfig = async (key: 'social' | 'duels') => {
    const updated = { ...config, [key]: !config[key] };
    try {
      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setConfig(updated);
        setStatusMessage(`Feature [${key}] updated to ${updated[key]}`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch {}
  };

  const toggleBan = async (uid: string, currentBanned: boolean) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, banned: !currentBanned }),
      });
      if (res.ok) {
        setUsers(users.map(u => (u.uid === uid ? { ...u, banned: !currentBanned } : u)));
        setStatusMessage(`User ${uid.slice(0, 8)} ${!currentBanned ? 'banned' : 'unbanned'}`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch {}
  };

  const deleteUser = async (uid: string) => {
    if (!confirm(`Delete user ${uid}? Cascade deletes all associations.`)) return;
    try {
      const res = await fetch(`/api/admin/users?uid=${encodeURIComponent(uid)}`, { method: 'DELETE' });
      if (res.ok) {
        setUsers(users.filter(u => u.uid !== uid));
        setStatusMessage(`User ${uid.slice(0, 8)} deleted`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch {}
  };

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        {/* 1. SETTINGS SHELL HEADER (Stitch Screen 13) */}
        <section className="w-full border-b border-border-hairline bg-surface-container py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
              <span>Manabu Workstation</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-secondary">System Preferences & Settings</span>
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-border-hairline text-xs text-secondary">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>Cloud Sync: <span className="text-text-primary font-medium">Enabled</span> (Online)</span>
                <span className="material-symbols-outlined text-[16px] text-text-muted ml-0.5">sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN WORKSTATION SPLIT VIEW (3.5 cols / 8.5 cols) */}
        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Vertical Category Navigation */}
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
                      <span className="text-sm font-medium">Visual Styling & Themes</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
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
                      <span className="material-symbols-outlined text-[20px]">psychology</span>
                      <span className="text-sm font-medium">SRS & Algorithm (FSRS)</span>
                    </div>
                    <span className="text-[10px] bg-surface-elevated text-info border border-border-subtle px-1.5 py-0.5 rounded font-mono">v5.0</span>
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
                      <span className="material-symbols-outlined text-[20px]">record_voice_over</span>
                      <span className="text-sm font-medium">Audio & Voice Packs</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left transition-all ${
                      activeTab === 'telemetry'
                        ? 'bg-surface-muted border-l-4 border-primary-container text-text-primary font-bold shadow-sm'
                        : 'hover:bg-surface-elevated text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                      <span className="text-sm font-medium">Mission Control (Admin)</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </button>
                </nav>
              </div>

              {/* Offline Engine Diagnostics */}
              <div className="bg-surface-base border border-border-hairline rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-text-muted tracking-wider uppercase">OFFLINE ENGINE DATA</span>
                  <span className="text-xs text-secondary font-mono">42.8 / 500 MB</span>
                </div>
                <div className="w-full h-2 bg-background-deep rounded-full overflow-hidden border border-border-subtle mb-3">
                  <div className="h-full bg-info rounded-full" style={{ width: '8.5%' }} />
                </div>
                <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                  Local IndexedDB retains stroke vectors, KanjiVG coordinates, and pitch audio packs.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem('manabu_cache_voice');
                        alert('Audio cache purged.');
                      }
                    }}
                    className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">cleaning_services</span>
                    <span>Purge Audio Cache</span>
                  </button>
                  <span className="text-text-muted text-[11px]">Synced: OK</span>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Tab Panels */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* TAB 1: VISUAL THEME */}
              {activeTab === 'visual' && (
                <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col gap-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border-hairline">
                    <div className="w-9 h-9 rounded-lg bg-surface-muted flex items-center justify-center text-primary-container border border-border-hairline">
                      <span className="material-symbols-outlined text-[20px]">draw</span>
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-text-primary">Visual Atmosphere & Interface Theme</h2>
                      <p className="text-xs text-text-secondary">Calibrate ocular contrast and Japanese typographic rendering styles.</p>
                    </div>
                  </div>

                  {/* Theme Selection Cards */}
                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-3 uppercase tracking-wider">
                      Interface Color Palette Theme
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Bunpro Dark Learning */}
                      <div
                        onClick={() => setTheme('bunpro')}
                        className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
                          theme === 'bunpro' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-text-primary">Bunpro Dark Learning</span>
                          {theme === 'bunpro' && (
                            <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                            </span>
                          )}
                        </div>
                        <div className="h-16 rounded bg-background-canvas border border-border-hairline p-2 flex flex-col justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                            <span className="w-8 h-1.5 rounded bg-border-hairline" />
                          </div>
                          <div className="flex items-end justify-between">
                            <span className="text-[14px] text-text-primary font-bold">学び</span>
                            <span className="text-[10px] text-accent-gold font-mono">#082630</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-text-secondary mt-2 leading-tight">
                          Aqueous slate-teal with signature torii coral triggers. Optimal for night drills.
                        </p>
                      </div>

                      {/* Nocturnal Obsidian */}
                      <div
                        onClick={() => setTheme('obsidian')}
                        className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
                          theme === 'obsidian' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-text-primary">Nocturnal Obsidian</span>
                          {theme === 'obsidian' && (
                            <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                            </span>
                          )}
                        </div>
                        <div className="h-16 rounded bg-black border border-border-hairline p-2 flex flex-col justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                            <span className="w-8 h-1.5 rounded bg-zinc-800" />
                          </div>
                          <div className="flex items-end justify-between">
                            <span className="text-[14px] text-zinc-100 font-bold">学び</span>
                            <span className="text-[10px] text-zinc-500 font-mono">#000000</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-text-secondary mt-2 leading-tight">
                          Pure OLED pitch black with minimal high-contrast slate anchors.
                        </p>
                      </div>

                      {/* Alabaster Paper */}
                      <div
                        onClick={() => setTheme('alabaster')}
                        className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
                          theme === 'alabaster' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-text-primary">Alabaster Paper</span>
                          {theme === 'alabaster' && (
                            <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                            </span>
                          )}
                        </div>
                        <div className="h-16 rounded bg-[#fcfcfc] border border-border-hairline p-2 flex flex-col justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                            <span className="w-8 h-1.5 rounded bg-zinc-300" />
                          </div>
                          <div className="flex items-end justify-between">
                            <span className="text-[14px] text-neutral-900 font-bold">学び</span>
                            <span className="text-[10px] text-neutral-600 font-mono">#FCFCFC</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-text-secondary mt-2 leading-tight">
                          Crisp calligraphic paper parchment for daylight study sessions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Furigana Ruby Display */}
                  <div className="pt-4 border-t border-border-subtle">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <div>
                        <label className="text-xs font-bold text-text-primary block uppercase tracking-wider">
                          Furigana Ruby Annotations
                        </label>
                        <span className="text-xs text-text-secondary">Controls phonetic kana guides above kanji compounds.</span>
                      </div>
                      <div className="px-3 py-1 bg-background-deep rounded border border-border-hairline text-center">
                        <ruby className="text-base font-bold text-text-primary">
                          漢字<rt className="text-xs text-secondary">かんじ</rt>
                        </ruby>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 bg-background-deep p-1.5 rounded-lg border border-border-hairline text-xs">
                      <button
                        onClick={() => setFuriganaMode('always')}
                        className={`py-2 px-3 rounded font-medium transition ${
                          furiganaMode === 'always' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Always Show
                      </button>
                      <button
                        onClick={() => setFuriganaMode('hover')}
                        className={`py-2 px-3 rounded font-medium transition ${
                          furiganaMode === 'hover' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Hover Only
                      </button>
                      <button
                        onClick={() => setFuriganaMode('hidden')}
                        className={`py-2 px-3 rounded font-medium transition ${
                          furiganaMode === 'hidden' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Hidden by Default
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FSRS-5 REVIEW CALIBRATION */}
              {activeTab === 'fsrs' && (
                <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-muted flex items-center justify-center text-accent-gold border border-border-hairline">
                        <span className="material-symbols-outlined text-[20px]">cognition</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-base sm:text-lg font-bold text-text-primary">SRS Review Calibration</h2>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-accent-gold-subtle text-accent-gold border border-accent-gold">
                            FSRS-5 ENGINE
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary mt-0.5">
                          Free Spaced Repetition Scheduler algorithm parameters for optimal memory consolidation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Target Retention Slider */}
                  <div className="p-4 bg-background-deep rounded-xl border border-border-hairline">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-bold text-text-primary block uppercase tracking-wider">
                          Desired Target Retention
                        </span>
                        <span className="text-xs text-text-muted">Target probability of recalling an item at scheduled review.</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-accent-gold font-mono">{retentionRate}%</span>
                        <span className="text-[10px] text-text-secondary block">Optimal Efficiency</span>
                      </div>
                    </div>

                    <div className="relative flex items-center my-4">
                      <input
                        type="range"
                        min="80"
                        max="97"
                        value={retentionRate}
                        onChange={e => setRetentionRate(Number(e.target.value))}
                        className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary-container"
                      />
                    </div>

                    <div className="flex justify-between text-xs text-text-muted font-mono">
                      <span>80% (Fewer Reviews)</span>
                      <span className="text-accent-gold font-semibold">• 90% (Recommended)</span>
                      <span>97% (Extreme Retention)</span>
                    </div>
                  </div>

                  {/* Ghost Reviews Toggle Module */}
                  <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-border-hairline">
                    <div className="pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Automatic Minimal Ghost Cards
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary-subtle text-primary border border-primary-container font-mono">
                          STUBBORN MISTAKES
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary mt-1">
                        Automatically schedules extra micro-repetitions in the Dojo for grammar clozes and kanji failed 2 or more consecutive times.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={ghostReviews}
                      onChange={e => setGhostReviews(e.target.checked)}
                      className="w-5 h-5 accent-primary-container rounded"
                    />
                  </div>

                  {/* SRS Mastery Stage Gauge Reference */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                      <span>SRS Retention Level Progression:</span>
                      <span className="text-secondary font-mono">5 Calibrated Stages</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 p-2 bg-background-deep rounded-lg border border-border-hairline text-center text-[10px] font-bold">
                      <div className="py-1 rounded bg-info-subtle border border-info text-info">Apprentice</div>
                      <div className="py-1 rounded bg-accent-gold-subtle border border-accent-gold text-accent-gold">Guru</div>
                      <div className="py-1 rounded bg-purple-950 border border-purple-500 text-purple-300">Master</div>
                      <div className="py-1 rounded bg-cyan-950 border border-cyan-400 text-cyan-300">Enlightened</div>
                      <div className="py-1 rounded bg-orange-950 border border-orange-500 text-orange-400">Burned 🏆</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: AUDIO ENGINE */}
              {activeTab === 'audio' && (
                <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col gap-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border-hairline">
                    <div className="w-9 h-9 rounded-lg bg-surface-muted flex items-center justify-center text-info border border-border-hairline">
                      <span className="material-symbols-outlined text-[20px]">volume_up</span>
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-text-primary">Audio Playback Engine</h2>
                      <p className="text-xs text-text-secondary">Acoustic pitch-accent synthesis and native speaker sentence playback.</p>
                    </div>
                  </div>

                  {/* Speaker Voice Pack */}
                  <div>
                    <label className="text-xs font-bold text-text-primary block mb-1 uppercase tracking-wider">
                      Speaker Voice Pack Selection
                    </label>
                    <p className="text-xs text-text-secondary mb-3">Authentic studio-recorded Tokyo standard acoustic profiles.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <select
                        value={voicePack}
                        onChange={e => setVoicePack(e.target.value as any)}
                        className="flex-1 w-full bg-background-deep border border-border-hairline text-text-primary rounded-lg px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-primary-container"
                      >
                        <option value="haru">Haru (Female, Tokyo Standard) — High Fidelity</option>
                        <option value="kenji">Kenji (Male, Natural Conversational) — Broadcast Quality</option>
                        <option value="aoi">Aoi (Female, Pitch-Accent Focused) — Linguistic Acoustic Pack</option>
                      </select>

                      <button
                        onClick={handleTestAudio}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-primary text-xs font-semibold flex items-center justify-center gap-2 transition"
                      >
                        <span className="material-symbols-outlined text-info text-[18px]">play_circle</span>
                        <span>Sample: 「こんにちは」</span>
                      </button>
                    </div>
                  </div>

                  {/* Auto-Play Toggle */}
                  <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-border-hairline">
                    <div className="pr-4">
                      <div className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Auto-play Pronunciation on Reveal
                      </div>
                      <p className="text-xs text-text-secondary mt-0.5">
                        Plays authentic pronunciation immediately upon cloze flip or Kanji inspection.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={autoPlayAudio}
                      onChange={e => setAutoPlayAudio(e.target.checked)}
                      className="w-5 h-5 accent-primary-container rounded"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: MISSION CONTROL & TELEMETRY (Admin) */}
              {activeTab === 'telemetry' && (
                <div className="space-y-6">
                  {!isAdminAuthenticated ? (
                    <div className="bg-surface-base border border-border-hairline rounded-xl p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🥋</span>
                        <div>
                          <h2 className="text-lg font-bold text-text-primary">Manabu Mission Control</h2>
                          <p className="text-xs text-text-secondary">Enter your admin access secret to unlock system telemetry & student records.</p>
                        </div>
                      </div>

                      <form onSubmit={handleAdminLogin} className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-xs font-bold text-text-muted mb-1 uppercase tracking-wider">
                            Admin Access Secret
                          </label>
                          <input
                            type="password"
                            value={secretInput}
                            onChange={e => setSecretInput(e.target.value)}
                            placeholder="Enter ADMIN_SECRET"
                            className="w-full bg-background-deep border border-border-hairline rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-primary-container font-mono"
                            required
                          />
                        </div>

                        {loginError && (
                          <p className="text-xs text-primary bg-primary-subtle border border-primary-container rounded p-2">
                            {loginError}
                          </p>
                        )}

                        <button
                          type="submit"
                          className="w-full bg-primary-container hover:bg-primary-hover text-white font-bold py-2.5 rounded-lg text-xs transition shadow-sm"
                        >
                          Unlock Mission Control
                        </button>
                      </form>
                    </div>
                  ) : (
                    <>
                      {/* Telemetry Kill Switches */}
                      <section className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                            Remote Kill Switches & Telemetry
                          </h2>
                          {statusMessage && (
                            <span className="text-xs text-success bg-success-subtle border border-success/30 px-3 py-1 rounded-full">
                              {statusMessage}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-background-deep border border-border-hairline rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-text-primary">Social & Friends</p>
                              <p className="text-[10px] text-text-muted">Global friend duel feed</p>
                            </div>
                            <button
                              onClick={() => toggleConfig('social')}
                              className={`px-3 py-1 text-[10px] font-bold rounded-full transition ${
                                config.social
                                  ? 'bg-success-subtle text-success border border-success/40'
                                  : 'bg-primary-subtle text-primary border border-primary-container'
                              }`}
                            >
                              {config.social ? 'ENABLED' : 'PAUSED'}
                            </button>
                          </div>

                          <div className="bg-background-deep border border-border-hairline rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-text-primary">Live Duels</p>
                              <p className="text-[10px] text-text-muted">Valkey lockstep PvP</p>
                            </div>
                            <button
                              onClick={() => toggleConfig('duels')}
                              className={`px-3 py-1 text-[10px] font-bold rounded-full transition ${
                                config.duels
                                  ? 'bg-success-subtle text-success border border-success/40'
                                  : 'bg-primary-subtle text-primary border border-primary-container'
                              }`}
                            >
                              {config.duels ? 'ENABLED' : 'PAUSED'}
                            </button>
                          </div>

                          <div className="bg-background-deep border border-border-hairline rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-text-primary">Minimum Build</p>
                              <p className="text-[10px] text-text-muted">Mobile client build check</p>
                            </div>
                            <span className="text-xs font-mono bg-surface-muted px-2.5 py-1 rounded text-secondary border border-border-subtle">
                              v{config.minAppVersion}
                            </span>
                          </div>
                        </div>
                      </section>

                      {/* Registered Learners */}
                      <section className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <div>
                            <h2 className="text-base font-bold text-text-primary">Registered Students</h2>
                            <p className="text-xs text-text-muted">Showing active learners in PostgreSQL</p>
                          </div>

                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={e => setSearchQuery(e.target.value)}
                              onKeyDown={e => e.key === 'Enter' && loadUsers(searchQuery)}
                              placeholder="Search student or code..."
                              className="bg-background-deep border border-border-hairline rounded-lg px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-primary-container w-64"
                            />
                            <button
                              onClick={() => loadUsers(searchQuery)}
                              className="bg-surface-muted hover:bg-surface-elevated text-xs px-3 py-2 rounded-lg text-text-primary border border-border-hairline font-semibold"
                            >
                              Search
                            </button>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="border-b border-border-subtle text-text-muted uppercase tracking-wider text-[10px]">
                                <th className="py-2.5 px-3">Student</th>
                                <th className="py-2.5 px-3">Friend Code</th>
                                <th className="py-2.5 px-3">Belt / Lvl</th>
                                <th className="py-2.5 px-3">Weekly XP</th>
                                <th className="py-2.5 px-3">Streak</th>
                                <th className="py-2.5 px-3">Status</th>
                                <th className="py-2.5 px-3 text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border-subtle font-mono">
                              {users.length === 0 ? (
                                <tr>
                                  <td colSpan={7} className="py-6 text-center text-text-muted font-sans text-xs">
                                    No students registered yet in schema [manabu].
                                  </td>
                                </tr>
                              ) : (
                                users.map(u => (
                                  <tr key={u.uid} className="hover:bg-surface-muted/30 transition">
                                    <td className="py-2.5 px-3 flex items-center gap-2 font-sans font-medium text-text-primary">
                                      <span>{u.avatar_emoji || '🥋'}</span>
                                      <div>
                                        <p>{u.display_name}</p>
                                        <p className="text-[10px] text-text-muted font-mono">{u.uid.slice(0, 8)}...</p>
                                      </div>
                                    </td>
                                    <td className="py-2.5 px-3 text-accent-gold font-bold">{u.friend_code}</td>
                                    <td className="py-2.5 px-3 font-sans capitalize text-secondary">
                                      {u.belt_rank} (Lv {u.level})
                                    </td>
                                    <td className="py-2.5 px-3 text-info font-bold">{u.weekly_xp}</td>
                                    <td className="py-2.5 px-3 text-primary font-bold">🔥 {u.current_streak}</td>
                                    <td className="py-2.5 px-3">
                                      <span
                                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-sans font-bold ${
                                          u.banned
                                            ? 'bg-primary-subtle text-primary border border-primary-container'
                                            : 'bg-success-subtle text-success border border-success/30'
                                        }`}
                                      >
                                        {u.banned ? 'BANNED' : 'ACTIVE'}
                                      </span>
                                    </td>
                                    <td className="py-2.5 px-3 text-right space-x-1 font-sans">
                                      <button
                                        onClick={() => toggleBan(u.uid, u.banned)}
                                        className={`text-[10px] px-2 py-0.5 rounded font-bold transition ${
                                          u.banned
                                            ? 'bg-success text-black'
                                            : 'bg-surface-muted border border-border-hairline text-accent-gold'
                                        }`}
                                      >
                                        {u.banned ? 'Unban' : 'Ban'}
                                      </button>
                                      <button
                                        onClick={() => deleteUser(u.uid)}
                                        className="text-[10px] bg-primary-subtle border border-primary-container text-primary px-2 py-0.5 rounded font-bold transition"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </>
                  )}
                </div>
              )}

              {/* STICKY BOTTOM ACTION BAR */}
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
                    onClick={() => {
                      setRetentionRate(90);
                      setFuriganaMode('hover');
                      setTheme('bunpro');
                    }}
                    className="px-4 py-2 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-primary text-xs font-semibold transition"
                  >
                    Restore Defaults
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-2 rounded-lg bg-primary-container hover:bg-primary-hover text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(199,74,74,0.35)] transition active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[16px]">check</span>
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
