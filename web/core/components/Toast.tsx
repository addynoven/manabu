'use client';

import React, { useState, useEffect } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const bg = {
    success: 'bg-emerald-900/90 border-emerald-500 text-emerald-200',
    error: 'bg-red-900/90 border-red-500 text-red-200',
    info: 'bg-zinc-800/90 border-zinc-700 text-zinc-200',
  }[type];

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl border text-sm font-medium shadow-2xl backdrop-blur-md transition-all ${bg}`}>
      {message}
    </div>
  );
}
