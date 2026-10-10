import { create } from 'zustand';

interface ClipboardToastState {
  visible: boolean;
  copiedText: string;
  showCopiedToast: (text: string) => void;
  hideToast: () => void;
}

let hideTimer: ReturnType<typeof setTimeout> | null = null;

export const useClipboardToastStore = create<ClipboardToastState>((set) => ({
  visible: false,
  copiedText: '',
  showCopiedToast: (text: string) => {
    if (hideTimer) clearTimeout(hideTimer);
    set({ visible: true, copiedText: text });
    hideTimer = setTimeout(() => {
      set({ visible: false });
    }, 2200);
  },
  hideToast: () => {
    if (hideTimer) clearTimeout(hideTimer);
    set({ visible: false });
  },
}));
