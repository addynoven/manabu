import React from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from '../features/auth/store/useAuthStore';

export default function RootIndex() {
  const currentUser = useAuthStore(state => state.currentUser);
  if (currentUser) {
    return <Redirect href="/(tabs)" />;
  }
  return <Redirect href={'/welcome' as any} />;
}
