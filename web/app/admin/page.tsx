'use client';

import React, { useState, useEffect } from 'react';

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

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [secretInput, setSecretInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Dashboard Data
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [config, setConfig] = useState<AppConfig>({ social: true, duels: true, minAppVersion: 1 });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Check if session cookie exists by trying to fetch config
    fetch('/api/admin/config')
      .then(res => {
        if (res.ok) {
          setIsAuthenticated(true);
          return res.json();
        }
        throw new Error('Not logged in');
      })
      .then(data => {
        if (data.config) setConfig(data.config);
        loadUsers('');
      })
      .catch(() => {
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretInput }),
      });

      if (!res.ok) {
        throw new Error('Invalid Admin Secret');
      }

      setIsAuthenticated(true);
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
    } catch (e) {
      console.error(e);
    }
  };

  const loadUsers = async (query = '') => {
    try {
      const url = query ? `/api/admin/users?q=${encodeURIComponent(query)}` : '/api/admin/users';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleConfig = async (key: keyof AppConfig) => {
    const updated = { ...config, [key]: !config[key] };
    setConfig(updated);
    try {
      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setStatusMessage(`Updated ${key} to ${updated[key]}`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleBan = async (uid: string, currentBanned: boolean) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, banned: !currentBanned }),
      });
      if (res.ok) {
        setUsers(users.map(u => u.uid === uid ? { ...u, banned: !currentBanned } : u));
        setStatusMessage(`User ${uid.slice(0, 8)} ${!currentBanned ? 'banned' : 'unbanned'}`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteUser = async (uid: string) => {
    if (!confirm(`Delete user ${uid}? This will cascade delete their friendships and challenges.`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/users?uid=${encodeURIComponent(uid)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setUsers(users.filter(u => u.uid !== uid));
        setStatusMessage(`User ${uid.slice(0, 8)} deleted`);
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-mono">
        Loading Manabu Admin...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🥋</span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Manabu Admin</h1>
              <p className="text-xs text-neutral-400">学ぶ • Mission Control & Moderation</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Admin Access Secret</label>
              <input
                type="password"
                value={secretInput}
                onChange={e => setSecretInput(e.target.value)}
                placeholder="Enter ADMIN_SECRET"
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {loginError && (
              <p className="text-xs text-red-400 bg-red-950/50 border border-red-900/50 rounded p-2">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-2.5 rounded-lg text-sm transition"
            >
              Sign In to Mission Control
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Top Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🥋</span>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">Manabu V3 Admin</h1>
            <p className="text-xs text-neutral-400">PostgreSQL + Valkey + Firebase Telemetry</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {statusMessage && (
            <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full animate-pulse">
              {statusMessage}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-1.5 rounded-lg transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Remote Kill Switches */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            Remote Kill Switches & Telemetry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Social Switch */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Social & Friends</p>
                <p className="text-xs text-neutral-400">Kill switch for Tab 3 & Friends</p>
              </div>
              <button
                onClick={() => toggleConfig('social')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                  config.social
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}
              >
                {config.social ? 'ENABLED' : 'PAUSED'}
              </button>
            </div>

            {/* Duels Switch */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Live Duels</p>
                <p className="text-xs text-neutral-400">Lockstep matchmaking & Valkey</p>
              </div>
              <button
                onClick={() => toggleConfig('duels')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                  config.duels
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}
              >
                {config.duels ? 'ENABLED' : 'PAUSED'}
              </button>
            </div>

            {/* Version Gate */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Minimum App Build</p>
                <p className="text-xs text-neutral-400">Required mobile client version</p>
              </div>
              <span className="text-xs font-mono bg-neutral-800 px-3 py-1 rounded text-neutral-300">
                v{config.minAppVersion}
              </span>
            </div>
          </div>
        </section>

        {/* Registered Learners */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Registered Students</h2>
              <p className="text-xs text-neutral-400">Showing top 50 active learners from PostgreSQL</p>
            </div>

            {/* Search Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && loadUsers(searchQuery)}
                placeholder="Search name, UID, code..."
                className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 w-64"
              />
              <button
                onClick={() => loadUsers(searchQuery)}
                className="bg-neutral-800 hover:bg-neutral-700 text-xs px-3 py-2 rounded-lg text-neutral-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Friend Code</th>
                  <th className="py-3 px-4">Belt / Level</th>
                  <th className="py-3 px-4">Weekly XP</th>
                  <th className="py-3 px-4">Total XP</th>
                  <th className="py-3 px-4">Streak</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 font-mono">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-neutral-500 font-sans">
                      No students registered yet in schema [manabu].
                    </td>
                  </tr>
                ) : (
                  users.map(u => (
                    <tr key={u.uid} className="hover:bg-neutral-800/30 transition">
                      <td className="py-3 px-4 flex items-center gap-2 font-sans font-medium text-white">
                        <span>{u.avatar_emoji || '🥋'}</span>
                        <div>
                          <p>{u.display_name}</p>
                          <p className="text-[10px] text-neutral-500 font-mono">{u.uid.slice(0, 12)}...</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">{u.friend_code}</td>
                      <td className="py-3 px-4 font-sans capitalize">
                        {u.belt_rank} (Lvl {u.level})
                      </td>
                      <td className="py-3 px-4 text-amber-400 font-bold">{u.weekly_xp}</td>
                      <td className="py-3 px-4 text-neutral-300">{u.total_xp}</td>
                      <td className="py-3 px-4 text-orange-400">🔥 {u.current_streak}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] uppercase font-sans font-bold ${
                            u.banned
                              ? 'bg-red-950 text-red-400 border border-red-800'
                              : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          }`}
                        >
                          {u.banned ? 'BANNED' : 'ACTIVE'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2 font-sans">
                        <button
                          onClick={() => toggleBan(u.uid, u.banned)}
                          className={`text-[11px] px-2.5 py-1 rounded transition ${
                            u.banned
                              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                              : 'bg-amber-600 hover:bg-amber-500 text-white'
                          }`}
                        >
                          {u.banned ? 'Unban' : 'Ban'}
                        </button>
                        <button
                          onClick={() => deleteUser(u.uid)}
                          className="text-[11px] bg-red-950 hover:bg-red-900 border border-red-800 text-red-300 px-2.5 py-1 rounded transition"
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
      </main>
    </div>
  );
}
