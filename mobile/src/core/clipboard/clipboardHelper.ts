import { Clipboard } from 'react-native';

export function copyToClipboard(text: string): boolean {
  if (!text) return false;
  try {
    Clipboard.setString(text);
    return true;
  } catch {
    return false;
  }
}
