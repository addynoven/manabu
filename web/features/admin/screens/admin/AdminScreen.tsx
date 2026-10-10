'use client';

import React, { useState, useEffect } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { TelemetrySwitchesCard } from './components';

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

export function AdminScreen() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [secretInput, setSecretInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [config, setConfig] = useState<AppConfig>({ social: true, duels: true, minAppVersion: 1 });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetch('/api/admin/config')
      .then((res) => {
        if (res.ok) {
          setIsAdminAuthenticated(true);
          return res.json();
        }
      })
      .then((data) => {
        if (data?.config) setConfig(data.config);
      })
      .catch(() => {});
  }, []);

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
    } catch (err: any) {
      setLoginError(err.message || 'Login failed');
    }
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

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        <section className="w-full border-b border-border-hairline bg-surface-container py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
              <span>Manabu Mission Control</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">Admin Telemetry &amp; Security</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                  Mission Control (Restricted)
                </h1>
                <p className="text-xs sm:text-sm text-text-secondary mt-1">
                  System telemetry, remote kill switches, and student directory management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          {!isAdminAuthenticated ? (
            <div className="max-w-md mx-auto bg-surface-base border border-border-hairline rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🥋</span>
                <div>
                  <h2 className="text-lg font-bold text-text-primary">Manabu Mission Control</h2>
                  <p className="text-xs text-text-secondary">Enter your admin access secret to unlock system telemetry &amp; student records.</p>
                </div>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-muted mb-1 uppercase tracking-wider">
                    Admin Access Secret
                  </label>
                  <input
                    type="password"
                    value={secretInput}
                    onChange={(e) => setSecretInput(e.target.value)}
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
            <div className="space-y-6">
              <TelemetrySwitchesCard
                config={config}
                statusMessage={statusMessage}
                onToggleConfig={toggleConfig}
              />
            </div>
          )}
        </main>
      </div>
    </AuthGate>
  );
}
