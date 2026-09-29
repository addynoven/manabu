import React from 'react';
import { Modal } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function SettingsModal({ visible, onClose }: SettingsModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SettingsScreen onClose={onClose} />
    </Modal>
  );
}
