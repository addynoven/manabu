'use client';

import React, { useState, useEffect } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [config, setConfig] = useState<AppConfig>({ social: true, duels: true, minAppVersion: 1 });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
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

        <section className="w-full border-b border-border-hairline bg-surface-container py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
              <span>Manabu Mission Control</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">Admin Telemetry & Security</span>
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-border-hairline text-xs text-primary">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>Security Level: <span className="font-mono font-bold">RESTRICTED</span></span>
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
                  <p className="text-xs text-text-secondary">Enter your admin access secret to unlock system telemetry & student records.</p>
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
            <div className="space-y-6">
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
            </div>
          )}
        </main>
      </div>
    </AuthGate>
  );
}
