'use client';

import React, { ReactNode } from 'react';
import { isFeatureEnabled, FeatureFlag } from '../config/flags';

export interface FeatureGateProps {
  flag: FeatureFlag;
  children: ReactNode;
  fallback?: ReactNode;
}

export function FeatureGate({ flag, children, fallback = null }: FeatureGateProps) {
  const enabled = isFeatureEnabled(flag);
  return <>{enabled ? children : fallback}</>;
}
