import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from '../core/errors/ErrorBoundary';
import { QueryProvider } from '../core/query/QueryProvider';

import { GlobalClipboardToast } from '../core/clipboard/GlobalClipboardToast';

import { useAuthStore } from '../features/auth/store/useAuthStore';
import { contentSyncService } from '../core/content/contentSync.service';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after root layout mounts
    SplashScreen.hideAsync().catch(() => {});
    const unsubscribe = useAuthStore.getState().initAuthListener();
    // Check backend Single Source of Truth for new curriculum/content updates
    contentSyncService.checkForUpdates().catch(() => {});
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <QueryProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="auth" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="conjugator" options={{ animation: 'slide_from_bottom' }} />
            <Stack.Screen name="arcade" options={{ animation: 'slide_from_bottom' }} />
            <Stack.Screen name="academy" options={{ animation: 'slide_from_bottom' }} />
            <Stack.Screen name="resources" options={{ animation: 'slide_from_bottom' }} />
          </Stack>
          <GlobalClipboardToast />
        </QueryProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
