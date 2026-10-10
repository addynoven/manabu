'use client';

import React from 'react';

interface AppConfig {
  social: boolean;
  duels: boolean;
  minAppVersion: number;
}

interface TelemetrySwitchesCardProps {
  config: AppConfig;
  statusMessage: string;
  onToggleConfig: (key: 'social' | 'duels') => void;
}

export function TelemetrySwitchesCard({
  config,
  statusMessage,
  onToggleConfig,
}: TelemetrySwitchesCardProps) {
  return (
    <section className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">
          Remote Kill Switches &amp; Telemetry
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
            <p className="text-xs font-bold text-text-primary">Social &amp; Friends</p>
            <p className="text-[10px] text-text-muted">Global friend duel feed</p>
          </div>
          <button
            onClick={() => onToggleConfig('social')}
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
            onClick={() => onToggleConfig('duels')}
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
  );
}
