'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { X, Mail, Lock, User, AlertCircle, Loader2, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultMode = 'signin' }: AuthModalProps) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, error, clearError } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleModeChange = (newMode: 'signin' | 'signup') => {
    setMode(newMode);
    clearError();
    setLocalError(null);
  };

  const handleGoogleSignIn = async () => {
    setSubmitting(true);
    setLocalError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setLocalError(err?.message || 'Google sign-in could not be completed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!email || !email.includes('@')) {
      setLocalError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setLocalError('Password must be at least 6 characters long.');
      return;
    }

    setSubmitting(true);
    try {
      if (mode === 'signin') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, displayName || email.split('@')[0]);
      }
      onClose();
    } catch (err: any) {
      setLocalError(err?.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  const activeError = localError || error;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051b22]/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#0a3240] border border-[#17424f] rounded-xl shadow-2xl overflow-hidden p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8fa2aa] hover:text-white p-2 rounded-full hover:bg-[#0f3947] transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 items-center justify-center text-3xl shadow-lg shadow-red-950/60 mb-3">
            🥋
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {mode === 'signin' ? 'Welcome Back to Manabu' : 'Join the Manabu Dojo'}
          </h2>
          <p className="text-xs text-[#8fa2aa] mt-1">
            {mode === 'signin'
              ? 'Sign in to sync your progress, belts, and battle scores'
              : 'Create your martial Japanese learning profile'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex bg-[#051b22] p-1 rounded-2xl border border-[#17424f]/80 mb-6">
          <button
            type="button"
            onClick={() => handleModeChange('signin')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${
              mode === 'signin'
                ? 'bg-[#0f3947] text-white shadow-sm'
                : 'text-[#8fa2aa] hover:text-[#dbe6eb]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('signup')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${
              mode === 'signup'
                ? 'bg-[#0f3947] text-white shadow-sm'
                : 'text-[#8fa2aa] hover:text-[#dbe6eb]'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Error Alert */}
        {activeError && (
          <div className="mb-5 p-3.5 bg-red-950/40 border border-red-800/60 rounded-xl flex items-start gap-2.5 text-red-300 text-xs animate-in fade-in">
            <AlertCircle size={16} className="text-[#ffb4ab] shrink-0 mt-0.5" />
            <span className="leading-relaxed">{activeError}</span>
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={submitting}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-2xl transition shadow-md disabled:opacity-60 cursor-pointer"
        >
          {/* Google G Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="text-sm">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#17424f]" />
          </div>
          <span className="relative bg-[#0a3240] px-3 text-[11px] font-mono uppercase tracking-wider text-[#627780]">
            or continue with email
          </span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-[#c1d0d6] mb-1.5">
                Warrior Display Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627780]" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g. Kenji, Sakura..."
                  maxLength={24}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#051b22] border border-[#17424f] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#c1d0d6] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627780]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#051b22] border border-[#17424f] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#c1d0d6] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627780]" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                minLength={6}
                className="w-full pl-10 pr-10 py-2.5 bg-[#051b22] border border-[#17424f] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#627780] hover:text-[#c1d0d6]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3 bg-[#c74a4a] hover:bg-[#d95a5a] text-white font-bold rounded-2xl text-sm transition shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Processing...</span>
              </>
            ) : mode === 'signin' ? (
              'Sign In to Dojo'
            ) : (
              'Create Free Account'
            )}
          </button>
        </form>

        {/* Footer info */}
        <p className="text-[11px] text-[#627780] text-center mt-5">
          🔒 Secure Firebase Auth & synced directly with PostgreSQL.
        </p>
      </div>
    </div>
  );
}
