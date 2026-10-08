'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { AuthModal } from '@/components/AuthModal';

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, profile, loading, signInWithGoogle } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [signingInGoogle, setSigningInGoogle] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Check if authenticated in React context or in local persistent storage
  const [hasLocalSession, setHasLocalSession] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const u = localStorage.getItem('manabu_user');
      const p = localStorage.getItem('manabu_auth_profile');
      return !!(u || p);
    } catch {
      return false;
    }
  });

  // If already authenticated with user session or cached profile
  if (user || profile || hasLocalSession) {
    return <>{children}</>;
  }

  // During initial hydration
  if (loading) {
    return (
      <div className="min-h-screen bg-[#04131a] flex flex-col items-center justify-center p-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#103e4e] to-[#082630] border border-[#17424f] shadow-2xl flex items-center justify-center text-2xl font-bold text-[#c74a4a] animate-pulse">
          学
        </div>
        <p className="text-xs font-mono text-[#8fa2aa] mt-3">Connecting to Manabu Dojo...</p>
      </div>
    );
  }

  const handleGoogleSignIn = async () => {
    setSigningInGoogle(true);
    setAuthError(null);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      setAuthError(err?.message || 'Google sign-in could not be completed.');
    } finally {
      setSigningInGoogle(false);
    }
  };

  // Dedicated Stitch Screen #01 Welcome & Onboarding Authentication Wall
  return (
    <div className="min-h-screen bg-[#030d12] text-[#f0f4f6] flex flex-col items-center justify-center p-4 selection:bg-[#c74a4a] selection:text-white font-sans relative overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c74a4a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-[#0f3e4f]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Stitch Welcome Card (Desktop & Mobile Responsive) */}
      <div className="w-full max-w-[440px] bg-[#061820] border border-[#133541] rounded-xl p-6 sm:p-8 flex flex-col shadow-2xl relative z-10">
        {/* Header Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a3240]/65 border border-[#17424f] text-[11px] font-medium text-[#8fa2aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>JLPT N5 – N1 STUDIO</span>
          </div>
          <span className="text-[11px] font-mono text-[#eab308] font-bold">STRICT ACCESS</span>
        </div>

        {/* Hero Branding */}
        <div className="text-center flex flex-col items-center mb-6">
          <div className="relative mb-3 group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#103e4e] to-[#082630] border border-[#1c4e5e] shadow-xl flex items-center justify-center p-3">
              {/* Torii Gate SVG */}
              <svg className="w-full h-full text-[#c74a4a] drop-shadow-[0_2px_10px_rgba(199,74,74,0.4)]" viewBox="0 0 64 64" fill="none">
                <path d="M6 14C18 10 46 10 58 14" stroke="#c74a4a" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M4 11C20 7 44 7 60 11" stroke="#e06363" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 23H54" stroke="#c74a4a" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="28" y="14" width="8" height="9" rx="1.5" fill="#082630" stroke="#c74a4a" strokeWidth="1.5" />
                <text x="32" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="6.5" fill="#f0f4f6" textAnchor="middle">学</text>
                <path d="M18 15L15 54" stroke="#c74a4a" strokeWidth="4" strokeLinecap="round" />
                <path d="M46 15L49 54" stroke="#c74a4a" strokeWidth="4" strokeLinecap="round" />
                <path d="M11 54H19" stroke="#8fa2aa" strokeWidth="3" strokeLinecap="round" />
                <path d="M45 54H53" stroke="#8fa2aa" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="absolute -bottom-2 -right-2 bg-[#c74a4a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md border border-[#082630]">
              道場
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
            <span>学ぶ</span>
            <span className="text-xl font-bold text-[#c74a4a]">Manabu</span>
          </h1>
          <p className="text-xs text-[#8fa2aa] mt-1 leading-relaxed max-w-[300px]">
            Deliberate Japanese acquisition platform built for deep fluency and long-term retention.
          </p>
        </div>

        {/* Feature Highlights Matching Stitch Screen 01 */}
        <div className="space-y-2 mb-6">
          <div className="rounded-xl bg-[#0a3240]/70 border border-[#17424f] p-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#082630] border border-[#1c4e5e] flex items-center justify-center shrink-0 text-[#c74a4a]">
              <span className="material-symbols-outlined text-[18px]">map</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">30-Week Curriculum</span>
                <span className="text-[9px] font-bold text-[#c74a4a] bg-[#c74a4a]/20 px-1.5 py-0.5 rounded">N5 → N1</span>
              </div>
              <p className="text-[11px] text-[#8fa2aa] leading-tight mt-0.5">
                450 lessons, 3,600 exercises, Joyo kanji, and grammar master path.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#0a3240]/70 border border-[#17424f] p-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#082630] border border-[#1c4e5e] flex items-center justify-center shrink-0 text-emerald-400">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">FSRS-5 Spaced Repetition</span>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">Memory</span>
              </div>
              <p className="text-[11px] text-[#8fa2aa] leading-tight mt-0.5">
                94.8% Day-14 recall curve math and ghost interval reinforcement.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#0a3240]/70 border border-[#17424f] p-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#082630] border border-[#1c4e5e] flex items-center justify-center shrink-0 text-[#eab308]">
              <span className="material-symbols-outlined text-[18px]">swords</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Multiplayer PvP Duels</span>
                <span className="text-[9px] font-bold text-[#eab308] bg-[#eab308]/20 px-1.5 py-0.5 rounded">Live PvP</span>
              </div>
              <p className="text-[11px] text-[#8fa2aa] leading-tight mt-0.5">
                Real-time Kanji clash, Shiritori chains, and Karuta slap arenas.
              </p>
            </div>
          </div>
        </div>

        {/* Error Notice */}
        {authError && (
          <div className="mb-4 p-2.5 rounded-xl bg-red-950/80 border border-red-800 text-xs text-red-300">
            {authError}
          </div>
        )}

        {/* Authentication Actions */}
        <div className="space-y-2.5">
          <button
            onClick={handleGoogleSignIn}
            disabled={signingInGoogle}
            className="w-full h-11 rounded-xl bg-white hover:bg-neutral-100 text-[#0c242c] font-bold text-xs flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{signingInGoogle ? 'Connecting...' : 'Continue with Google'}</span>
          </button>

          <button
            onClick={() => {
              setAuthMode('signin');
              setIsAuthModalOpen(true);
            }}
            className="w-full h-10 rounded-xl bg-[#0a3240] hover:bg-[#0f3e4f] text-[#f0f4f6] border border-[#17424f] font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px] text-[#8fa2aa]">mail</span>
            <span>Sign in with Email</span>
          </button>

          <div className="pt-2 text-center">
            <p className="text-[11px] text-[#8fa2aa]">
              New learner?{' '}
              <button
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="text-[#c74a4a] hover:underline font-bold"
              >
                Create your student profile
              </button>
            </p>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </div>
  );
}
