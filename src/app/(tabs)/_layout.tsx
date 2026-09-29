import React from 'react';
import { Tabs } from 'expo-router';
import {
  BookOpen,
  RotateCcw,
  Gamepad2,
  User,
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
        {/* Tab 1: Dojo (Learn) */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dojo',
            tabBarIcon: ({ color, size }) => (
              <BookOpen size={size} color={color} />
            ),
          }}
        />

        {/* Tab 2: Review (SRS & Weakness) */}
        <Tabs.Screen
          name="review"
          options={{
            title: 'Review',
            tabBarIcon: ({ color, size }) => (
              <RotateCcw size={size} color={color} />
            ),
          }}
        />

        {/* Tab 3: Arcade (Games & Community) */}
        <Tabs.Screen
          name="arcade"
          options={{
            title: 'Arcade',
            tabBarIcon: ({ color, size }) => (
              <Gamepad2 size={size} color={color} />
            ),
          }}
        />

        {/* Tab 4: Profile (Mastery & Settings) */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <User size={size} color={color} />
            ),
          }}
        />

        {/* Auxiliary Routes kept for backward compatibility (hidden from tab bar) */}
        <Tabs.Screen
          name="chart"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="kanji"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="vocab"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="progress"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}
