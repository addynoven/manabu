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
import { View, Pressable, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { AchievementToast } from '../../features/achievements/components/AchievementToast';

function NativeTabBarButton(props: any) {
  const { onPress, onLongPress, children, style } = props;

  const handlePress = (e: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress?.(e);
  };

  return (
    <Pressable
      {...props}
      onPress={handlePress}
      onLongPress={onLongPress}
      android_ripple={{
        borderless: true,
        color: 'rgba(255, 255, 255, 0.1)',
        radius: 32,
      }}
      style={({ pressed }) => [
        style,
        styles.tabButton,
        {
          transform: [{ scale: pressed ? 0.93 : 1 }],
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const bottomPadding = Math.max(insets.bottom, 8);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <AchievementToast />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.textMuted,
          tabBarButton: props => <NativeTabBarButton {...props} />,
          tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopColor: 'rgba(255, 255, 255, 0.08)',
            borderTopWidth: 1,
            height: 60 + bottomPadding,
            paddingBottom: bottomPadding,
            paddingTop: 6,
            elevation: 12,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '800',
            letterSpacing: 0.2,
            marginTop: 2,
          },
        }}
      >
        {/* Tab 1: Dojo (Learn) */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dojo',
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.pillWrapper,
                  focused && { backgroundColor: 'rgba(249, 115, 22, 0.16)' },
                ]}
              >
                <BookOpen
                  size={20}
                  color={focused ? theme.primary : theme.textMuted}
                  strokeWidth={focused ? 2.5 : 2}
                />
              </View>
            ),
          }}
        />

        {/* Tab 2: Review (SRS & Weakness) */}
        <Tabs.Screen
          name="review"
          options={{
            title: 'Review',
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.pillWrapper,
                  focused && { backgroundColor: 'rgba(249, 115, 22, 0.16)' },
                ]}
              >
                <RotateCcw
                  size={20}
                  color={focused ? theme.primary : theme.textMuted}
                  strokeWidth={focused ? 2.5 : 2}
                />
              </View>
            ),
          }}
        />

        {/* Tab 3: Arcade (Games & Community) */}
        <Tabs.Screen
          name="arcade"
          options={{
            title: 'Arcade',
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.pillWrapper,
                  focused && { backgroundColor: 'rgba(249, 115, 22, 0.16)' },
                ]}
              >
                <Gamepad2
                  size={20}
                  color={focused ? theme.primary : theme.textMuted}
                  strokeWidth={focused ? 2.5 : 2}
                />
              </View>
            ),
          }}
        />

        {/* Tab 4: Profile (Mastery & Settings) */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.pillWrapper,
                  focused && { backgroundColor: 'rgba(249, 115, 22, 0.16)' },
                ]}
              >
                <User
                  size={20}
                  color={focused ? theme.primary : theme.textMuted}
                  strokeWidth={focused ? 2.5 : 2}
                />
              </View>
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

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillWrapper: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

