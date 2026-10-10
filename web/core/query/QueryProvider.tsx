'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function QueryProvider({ children }: Props) {
  return <>{children}</>;
}
