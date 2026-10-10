'use client';

import React from 'react';
import { AuthProvider } from '@/features/auth/hooks/useAuth';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { ErrorBoundary } from '@/core/errors/ErrorBoundary';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AuthGate>{children}</AuthGate>
      </AuthProvider>
    </ErrorBoundary>
  );
}
