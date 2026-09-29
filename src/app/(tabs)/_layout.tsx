import React from 'react';
import { Tabs } from 'expo-router';
import {
  BookOpen,
  Grid,
  Languages,
  Sparkles,
  Flame,
  Settings,
} from 'lucide-react-native';
import { useAppTheme } from '../../core/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { AchievementToast } from '../../features/achievements/components/AchievementToast';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const bottomPadding = Math.max(insets.bottom, 10);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <AchievementToast />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.textMuted,
          tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopColor: theme.tabBarBorder,
            height: 56 + bottomPadding,
            paddingBottom: bottomPadding,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '700',
          },
        }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Kana',
          tabBarIcon: ({ color, size }) => (
            <BookOpen size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          title: 'Charts',
          tabBarIcon: ({ color, size }) => (
            <Grid size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="kanji"
        options={{
          title: 'Kanji',
          tabBarIcon: ({ color, size }) => (
            <Languages size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vocab"
        options={{
          title: 'Vocab',
          tabBarIcon: ({ color, size }) => (
            <Sparkles size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Mastery',
          tabBarIcon: ({ color, size }) => (
            <Flame size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    </View>
  );
}
