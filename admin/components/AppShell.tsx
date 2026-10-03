'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  BookOpen,
  Layers,
  Sparkles,
  Gamepad2,
  Users,
  ShieldCheck,
  Flame,
  Award,
  RefreshCw,
  LogIn,
  LogOut,
  Copy,
  Check,
  User as UserIcon,
  PenTool,
} from 'lucide-react';

import { syncContentWithBackend } from '@/lib/contentStore';
import { useAuth } from '@/lib/AuthContext';
import { AuthModal } from '@/components/AuthModal';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const { user, profile, loading, signOut } = useAuth();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const [streak, setStreak] = useState(3);
  const [todayXp, setTodayXp] = useState(35);
  const [totalXp, setTotalXp] = useState(480);
  const [dailyGoal, setDailyGoal] = useState(50);
  const [level, setLevel] = useState(3);
  const [belt, setBelt] = useState('White Belt');

  // Synchronize local state with PostgreSQL profile when authenticated
  useEffect(() => {
    if (profile) {
      setTotalXp(profile.totalXp);
      setStreak(profile.currentStreak);
      setLevel(profile.level);
      const beltName = profile.beltRank
        ? profile.beltRank.charAt(0).toUpperCase() + profile.beltRank.slice(1) + ' Belt'
        : 'White Belt';
      setBelt(beltName);
    }
  }, [profile]);

  // Load local web learner stats from localStorage & trigger deferred background IndexedDB sync
  useEffect(() => {
    try {
      const savedXp = localStorage.getItem('manabu_web_xp');
      if (savedXp && !profile) setTotalXp(Number(savedXp));
      const savedToday = localStorage.getItem('manabu_web_today_xp');
      if (savedToday) setTodayXp(Number(savedToday));
      const savedStreak = localStorage.getItem('manabu_web_streak');
      if (savedStreak && !profile) setStreak(Number(savedStreak));
    } catch {}

    // Synchronize content bundles with backend manifest into IndexedDB after page settles
    const timer = setTimeout(() => {
      syncContentWithBackend().catch(() => {});
    }, 600);
    return () => clearTimeout(timer);
  }, [profile]);

  const copyFriendCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const NAV_ITEMS = [
    { href: '/', label: 'Learn Path', icon: Compass, badge: null },
    { href: '/kana', label: 'Kana Dojo', icon: Layers, badge: '50 Sounds' },
    { href: '/kanji', label: 'Kanji Vault', icon: BookOpen, badge: 'N5-N1' },
    { href: '/vocab', label: 'Vocabulary', icon: Sparkles, badge: 'Core' },
    { href: '/review', label: 'SRS Review', icon: RefreshCw, badge: '3 Due' },
    { href: '/arcade', label: 'Arcade', icon: Gamepad2, badge: 'Play' },
    { href: '/stroke', label: 'Stroke Master', icon: PenTool, badge: 'Draw' },
    { href: '/friends', label: 'Friends', icon: Users, badge: null },
    { href: '/admin', label: 'Admin', icon: ShieldCheck, badge: 'Mission' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header (<= 768px) */}
      <header className="md:hidden flex items-center justify-between p-4 bg-neutral-900 border-b border-neutral-800 sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-base shadow">
            🥋
          </div>
          <span className="text-base font-bold tracking-tight text-white font-serif">学ぶ MANABU</span>
        </Link>
        <div>
          {user ? (
            <button
              onClick={() => signOut()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-xs font-medium border border-neutral-700 transition"
            >
              <LogOut size={13} />
              <span>Sign Out</span>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold shadow transition"
            >
              <LogIn size={13} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </header>

      {/* 1. Left Persistent Navigation Rail (Desktop) */}
      <aside className="w-full md:w-64 bg-neutral-900/90 border-r border-neutral-800/80 p-5 flex flex-col justify-between shrink-0 md:h-screen md:sticky md:top-0">
        <div>
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 px-2 py-3 mb-6 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-xl shadow-lg shadow-red-950/50 group-hover:scale-105 transition">
              🥋
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-serif">学ぶ</span>
                <span className="text-lg font-black tracking-wider text-red-500 font-sans">MANABU</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium">Master Japanese Step-by-Step</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/30'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-neutral-400'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-neutral-800 text-neutral-300 border border-neutral-700/60'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Account / Sign In Widget */}
        <div className="mt-6 space-y-3">
          {user ? (
            <div className="bg-neutral-900 border border-neutral-800 p-3.5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm shrink-0">
                    {profile?.avatarEmoji || '🥋'}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      {profile?.displayName || user.displayName || user.email?.split('@')[0]}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-mono truncate">
                      {user.email || profile?.friendCode || 'Connected'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => signOut()}
                  title="Sign Out"
                  className="text-neutral-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-neutral-800 transition shrink-0"
                >
                  <LogOut size={15} />
                </button>
              </div>

              {profile?.friendCode && (
                <button
                  onClick={() => copyFriendCode(profile.friendCode)}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 bg-neutral-950 hover:bg-neutral-800/80 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 transition"
                >
                  <span className="text-neutral-500">CODE:</span>
                  <span className="font-bold text-amber-400">{profile.friendCode}</span>
                  {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} className="text-neutral-400" />}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  PostgreSQL Sync
                </span>
              </div>
              <p className="text-xs font-bold text-white mb-1">Save Your Progress</p>
              <p className="text-[11px] text-neutral-400 mb-3 leading-snug">
                Sign in with Google or Email to save belts & scores to cloud database.
              </p>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs transition shadow-md shadow-red-950/40 cursor-pointer"
              >
                <LogIn size={14} />
                <span>Sign In / Join</span>
              </button>
            </div>
          )}

          {/* Mobile App Download Card */}
          <div className="hidden md:block bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-3.5 rounded-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Mobile App
              </span>
            </div>
            <p className="text-xs text-neutral-300 font-medium mb-1">Manabu Android Companion</p>
            <p className="text-[11px] text-neutral-500 mb-2">Sync offline progress & play on the go.</p>
            <div className="text-[10px] font-mono bg-neutral-950 px-2 py-1 rounded-lg border border-neutral-800 text-neutral-400 text-center">
              v3.6.0 • PostgreSQL Connected
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>

      {/* 3. Right Persistent Study HUD (Desktop only, >= 1200px) */}
      <aside className="hidden xl:block w-80 bg-neutral-900/50 border-l border-neutral-800/80 p-6 space-y-6 shrink-0 h-screen sticky top-0 overflow-y-auto">
        {/* Student Martial Rank Card */}
        <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl shadow-inner">
                {profile?.avatarEmoji || '🥋'}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white truncate">
                  {profile?.displayName || (user ? user.displayName || user.email?.split('@')[0] : 'Manabu Student')}
                </h3>
                <p className="text-xs text-amber-400 font-medium">Level {level} • {belt}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] font-mono text-neutral-400">Total XP</span>
              <p className="text-sm font-bold text-white font-mono">{totalXp}</p>
            </div>
          </div>

          {/* Level Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-neutral-400 font-medium">
              <span>Belt Mastery Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-3/4 rounded-full" />
            </div>
          </div>

          {profile?.friendCode ? (
            <div className="mt-3.5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-400">Friend Code:</span>
              <button
                onClick={() => copyFriendCode(profile.friendCode)}
                className="flex items-center gap-1.5 px-2 py-0.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-[11px] font-mono font-bold text-amber-400 transition"
              >
                <span>{profile.friendCode}</span>
                {copiedCode ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} className="text-neutral-400" />}
              </button>
            </div>
          ) : !user ? (
            <div className="mt-3.5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">Playing as Guest</span>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="text-xs text-red-400 hover:text-red-300 font-semibold"
              >
                Sign In →
              </button>
            </div>
          ) : null}
        </div>

        {/* Daily Goal & Streak */}
        <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-orange-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Daily Study Streak</h4>
            </div>
            <span className="text-sm font-black text-orange-400 font-mono">🔥 {streak} Days</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-neutral-400 font-medium">
              <span>Today: {todayXp} / {dailyGoal} XP</span>
              <span>{Math.round((todayXp / dailyGoal) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                style={{ width: `${Math.min(100, Math.round((todayXp / dailyGoal) * 100))}%` }}
              />
            </div>
          </div>
        </div>

        {/* SRS Spaced Repetition Due Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw size={18} className="text-emerald-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">SRS Spaced Reviews</h4>
            </div>
            <span className="text-xs bg-emerald-950 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
              3 Due Now
            </span>
          </div>
          <p className="text-xs text-neutral-400">
            Reinforce recently learned Kanji and vocabulary at scientifically optimal intervals.
          </p>
          <Link
            href="/review"
            prefetch={true}
            className="block text-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-xl text-xs transition shadow-lg shadow-emerald-950/40"
          >
            Start Review Drill (3)
          </Link>
        </div>

        {/* Daily Gauntlet Challenge */}
        <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Daily Gauntlet</h4>
            </div>
            <span className="text-[11px] font-mono text-neutral-500">Day #276</span>
          </div>
          <p className="text-xs text-neutral-400">
            10-question speed revision across Kana, Kanji, and Core Vocab.
          </p>
          <Link
            href="/arcade"
            prefetch={true}
            className="block text-center w-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-2 rounded-xl text-xs transition border border-neutral-700"
          >
            Enter Gauntlet
          </Link>
        </div>
      </aside>

      {/* Auth Modal (Google & Email/Password) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
