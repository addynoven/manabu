import { useState, useEffect, useCallback } from 'react';
import { useDojoStore } from '../store/useDojoStore';

export interface CooldownTimerResult {
  remainingSeconds: number;
  isCoolingDown: boolean;
  formattedCompact: string;
  formattedClock: string;
  clearCooldown: () => void;
}

export function useCooldownTimer(): CooldownTimerResult {
  const cooldownUntil = useDojoStore(state => state.cooldownUntil);
  const clearCooldown = useDojoStore(state => state.clearCooldown);
  const [, setTick] = useState(0);

  const calculateRemaining = useCallback(() => {
    if (!cooldownUntil) return 0;
    const diff = new Date(cooldownUntil).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 1000));
  }, [cooldownUntil]);

  const remainingSeconds = calculateRemaining();
  const isCoolingDown = remainingSeconds > 0;

  useEffect(() => {
    if (!cooldownUntil) return;
    const initialRemaining = calculateRemaining();
    if (initialRemaining <= 0) {
      clearCooldown();
      return;
    }

    const interval = setInterval(() => {
      const current = calculateRemaining();
      setTick(t => t + 1);
      if (current <= 0) {
        clearCooldown();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldownUntil, calculateRemaining, clearCooldown]);

  const h = Math.floor(remainingSeconds / 3600);
  const m = Math.floor((remainingSeconds % 3600) / 60);
  const s = remainingSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  // Compact representation: "1h 59m 42s" or "59m 42s" or "42s"
  const formattedCompact =
    h > 0
      ? `${h}h ${m}m ${s}s`
      : m > 0
      ? `${m}m ${s}s`
      : `${s}s`;

  // Clock format: "01:59:42" or "00:42"
  const formattedClock =
    h > 0
      ? `${pad(h)}:${pad(m)}:${pad(s)}`
      : `${pad(m)}:${pad(s)}`;

  return {
    remainingSeconds,
    isCoolingDown,
    formattedCompact,
    formattedClock,
    clearCooldown,
  };
}
