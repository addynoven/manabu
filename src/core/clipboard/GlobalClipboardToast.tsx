import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Check, Copy } from 'lucide-react-native';
import { useClipboardToastStore } from './useClipboardToastStore';
import { radii, shadows, useAppTheme } from '../theme';

export function GlobalClipboardToast() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { visible, copiedText } = useClipboardToastStore();

  const [anim] = useState(() => new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.spring(anim, {
        toValue: 1,
        useNativeDriver: true,
        damping: 15,
        stiffness: 150,
      }).start();
    } else {
      Animated.timing(anim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, anim]);

  if (!visible && (anim as any)._value === 0) {
    return null;
  }

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-40, 0],
  });

  const opacity = anim.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 1, 1],
  });

  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.92, 1],
  });

  return (
    <View
      pointerEvents="none"
      style={[
        styles.overlay,
        {
          top: insets.top + 16,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.toastCard,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            transform: [{ translateY }, { scale }],
            opacity,
          },
        ]}
      >
        <View style={[styles.iconWrap, { backgroundColor: '#10B98125' }]}>
          <Check size={16} color="#10B981" />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.textSecondary }]}>
            Copied to clipboard
          </Text>
          <Text
            style={[styles.copiedText, { color: theme.textPrimary }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {copiedText}
          </Text>
        </View>

        <Copy size={16} color={theme.textMuted} style={styles.copyIcon} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 99999,
  },
  toastCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: radii.full,
    borderWidth: 1,
    maxWidth: '94%',
    ...shadows.md,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: radii.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flexShrink: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  copiedText: {
    fontSize: 14,
    fontWeight: '800',
  },
  copyIcon: {
    marginLeft: 4,
  },
});
