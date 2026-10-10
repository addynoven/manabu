'use client';

import React from 'react';
import Link from 'next/link';

export function TopBar() {
  return (
    <header className="w-full h-16 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
          学
        </div>
        <span className="font-extrabold text-xl tracking-tight text-white">MANABU</span>
      </Link>
    </header>
  );
}
