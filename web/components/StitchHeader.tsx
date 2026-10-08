'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { AuthModal } from '@/components/AuthModal';

interface StitchHeaderProps {
  onSearchClick?: () => void;
}

export function StitchHeader({ onSearchClick }: StitchHeaderProps) {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Dojo' },
    { href: '/kana', label: 'Kana Chart' },
    { href: '/kanji', label: 'Kanji Index' },
    { href: '/vocab', label: 'Vocab Decks' },
    { href: '/academy', label: 'Academy' },
    { href: '/review', label: 'Reviews', badge: '38 due' },
    { href: '/conjugator', label: 'Conjugator' },
    { href: '/arcade', label: 'Arcade' },
    { href: '/friends', label: 'Community' },
    { href: '/admin', label: 'Settings' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 h-16 w-full bg-background-deep/95 backdrop-blur-md border-b border-border-hairline px-4 sm:px-6 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
        {/* Left: Brand Crest & Navigation Cluster */}
        <div className="flex items-center gap-6 xl:gap-8">
          <Link href="/" className="flex items-center gap-3 group text-inherit no-underline">
            <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border-hairline flex items-center justify-center text-text-primary font-bold shadow-inner group-hover:border-primary-container transition-colors">
              <span className="text-accent-gold text-lg font-bold">学</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight text-text-primary">Manabu</span>
                <span className="text-xs text-text-muted font-normal">学ぶ</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider leading-none">NOCTURNAL ACADEMY</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-text-primary bg-surface-base border border-border-hairline shadow-[0_0_12px_rgba(199,74,74,0.15)] font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-primary-container text-white leading-tight shadow-[0_0_8px_rgba(199,74,74,0.4)]">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute -bottom-[17px] left-3 right-3 h-[2px] bg-primary-container rounded-full shadow-[0_0_8px_#c74a4a]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Utilities */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick jump search input */}
          <button
            onClick={onSearchClick}
            type="button"
            className="hidden md:flex items-center bg-background-deep border border-border-hairline rounded-lg px-3 py-1.5 gap-2 text-xs text-text-muted hover:border-surface-highlight transition-colors"
          >
            <span className="material-symbols-outlined text-[17px]">search</span>
            <span>Quick search...</span>
            <kbd className="text-[10px] font-mono text-text-muted bg-surface-muted px-1.5 py-0.5 rounded border border-border-subtle">
              Ctrl+K
            </kbd>
          </button>

          {/* Audio toggle button */}
          <button
            type="button"
            className="w-9 h-9 rounded-lg bg-surface-muted border border-border-hairline flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-surface-highlight transition-all"
            title="Audio: Enabled"
          >
            <span className="material-symbols-outlined text-[19px]">volume_up</span>
          </button>

          {/* Notifications bell */}
          <button
            type="button"
            className="relative w-9 h-9 rounded-lg bg-surface-muted border border-border-hairline flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-surface-highlight transition-all"
            title="Notifications"
          >
            <span className="material-symbols-outlined text-[19px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-background-deep" />
          </button>

          <div className="h-6 w-[1px] bg-border-hairline mx-0.5" />

          {/* User Profile Pill */}
          {user ? (
            <div
              onClick={() => signOut()}
              title="Click to sign out"
              className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 rounded-full bg-surface-base border border-border-hairline hover:border-surface-highlight cursor-pointer transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-surface-muted border border-border-hairline flex items-center justify-center text-xs font-bold text-secondary">
                {profile?.avatarEmoji || '🥋'}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-text-primary leading-tight">
                  {profile?.displayName || user.displayName || user.email?.split('@')[0]}
                </span>
                <span className="text-[10px] font-mono text-accent-gold leading-none">
                  Lv. {profile?.level || 16} • Master
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-primary-container text-white text-xs font-bold hover:bg-primary-hover active:bg-primary-active transition shadow-[0_0_12px_rgba(199,74,74,0.3)] flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">login</span>
              <span>Sign In</span>
            </button>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
