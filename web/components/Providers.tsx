'use client';

import React from 'react';
import { AuthProvider } from '@/lib/AuthContext';
import { AuthGate } from '@/components/AuthGate';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthGate>{children}</AuthGate>
    </AuthProvider>
  );
}

