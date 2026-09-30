import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from '../core/errors/ErrorBoundary';
import { QueryProvider } from '../core/query/QueryProvider';

import { GlobalClipboardToast } from '../core/clipboard/GlobalClipboardToast';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after root layout mounts
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <QueryProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
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
