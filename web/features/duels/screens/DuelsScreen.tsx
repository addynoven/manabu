'use client';

import React from 'react';

export function DuelsScreen() {
  return (
    <div className="p-8 max-w-5xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">PvP Matchmaking Duels</h1>
      <p className="text-zinc-400 text-sm">
        Real-time multi-round Japanese speed duels powered by Valkey Redis & WebSocket messaging.
      </p>
    </div>
  );
}
