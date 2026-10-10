import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { copyToClipboard } from '../clipboard/clipboardHelper';
import { useClipboardToastStore } from '../clipboard/useClipboardToastStore';
import { radii, useAppTheme } from '../theme';
import { cleanJapaneseText } from '../audio/tts';

const HOLD_DURATION_MS = 450;

export interface CopyableJapaneseTextProps {
  /** The Japanese string to copy to clipboard */
  text: string;
  /** Optional override if copied string should differ from prompt */
  copyText?: string;
  /** Optional children; if not provided, renders text with textStyle */
  children?: React.ReactNode;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Default text style if no children provided */
  textStyle?: StyleProp<TextStyle>;
  /** Optional short tap handler if pressed without holding */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
}

export function CopyableJapaneseText({
  text,
  copyText,
  children,
  style,
  textStyle,
  onPress,
  accessibilityLabel,
}: CopyableJapaneseTextProps) {
  const { colors: theme } = useAppTheme();
  const showCopiedToast = useClipboardToastStore(s => s.showCopiedToast);

  const [fillAnim] = useState(() => new Animated.Value(0));
  const isHoldingRef = useRef(false);
  const copyTriggeredRef = useRef(false);
  const [isPressing, setIsPressing] = useState(false);

  const targetText = copyText || cleanJapaneseText(text) || text;

  const handlePressIn = () => {
    isHoldingRef.current = true;
    copyTriggeredRef.current = false;
    setIsPressing(true);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});

    fillAnim.setValue(0);
    Animated.timing(fillAnim, {
      toValue: 1,
      duration: HOLD_DURATION_MS,
      useNativeDriver: false, // width interpolation needs false or scaleX
    }).start(({ finished }) => {
      if (finished && isHoldingRef.current) {
        copyTriggeredRef.current = true;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        copyToClipboard(targetText);
        showCopiedToast(targetText);

        // Quick flash back
        setTimeout(() => {
          Animated.timing(fillAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false,
          }).start(() => {
            setIsPressing(false);
          });
        }, 150);
      }
    });
  };

  const handlePressOut = () => {
    isHoldingRef.current = false;
    if (!copyTriggeredRef.current) {
      // Released before hold duration was reached
      Animated.timing(fillAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        setIsPressing(false);
      });

      if (onPress) {
        onPress();
      }
    }
  };

  const fillWidth = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const fillOpacity = fillAnim.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [0, 0.85, 1],
  });

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.wrapper, style]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || `Japanese text: ${targetText}. Hold to copy.`}
      accessibilityHint="Hold down to copy this Japanese text to your clipboard"
    >
      {/* Background Fill-Up Animation */}
      {isPressing && (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.fillBar,
            {
              width: fillWidth,
              backgroundColor: theme.primary + '35',
              opacity: fillOpacity,
            },
          ]}
        />
      )}

      {/* Underline Progress Indicator */}
      {isPressing && (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.underlineBar,
            {
              width: fillWidth,
              backgroundColor: theme.primary,
              opacity: fillOpacity,
            },
          ]}
        />
      )}

      {children ? children : <Text style={textStyle}>{text}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: radii.sm,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  fillBar: {
    ...StyleSheet.absoluteFill,
    borderRadius: radii.sm,
  },
  underlineBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    borderRadius: radii.full,
  },
});
