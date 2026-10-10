import React, { type ReactNode } from 'react';
import { flags, type FeatureFlagKey } from '../config/flags';

interface FeatureGateProps {
  flag: FeatureFlagKey;
  children: ReactNode;
  fallback?: ReactNode;
}

export function FeatureGate({
  flag,
  children,
  fallback = null,
}: FeatureGateProps) {
  const isEnabled = flags[flag];
  if (!isEnabled) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}
