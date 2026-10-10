'use client';

import { useState } from 'react';

export function useConjugator() {
  const [query, setQuery] = useState('');

  return { query, setQuery };
}
