import { Platform, type TextStyle } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'sans-serif',
});

export const typography = {
  h1: {
    fontFamily,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: -0.5,
  } as TextStyle,
  h2: {
    fontFamily,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.3,
  } as TextStyle,
  h3: {
    fontFamily,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  } as TextStyle,
  body: {
    fontFamily,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  } as TextStyle,
  bodyBold: {
    fontFamily,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  } as TextStyle,
  caption: {
    fontFamily,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  } as TextStyle,
  japaneseDisplay: {
    fontFamily,
    fontSize: 64,
    fontWeight: '400',
    lineHeight: 72,
    textAlign: 'center',
  } as TextStyle,
  japaneseLarge: {
    fontFamily,
    fontSize: 36,
    fontWeight: '500',
    lineHeight: 44,
    textAlign: 'center',
  } as TextStyle,
  japaneseMedium: {
    fontFamily,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    textAlign: 'center',
  } as TextStyle,
} as const;
