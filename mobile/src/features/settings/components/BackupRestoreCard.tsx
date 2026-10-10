import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Share,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { radii, spacing, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';

export function BackupRestoreCard() {
  const { colors: theme } = useAppTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [importText, setImportText] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const exportBackup = useProgressStore(state => state.exportBackup);
  const importBackup = useProgressStore(state => state.importBackup);

  const handleExport = async () => {
    try {
      const json = exportBackup();
      await Share.share({
        title: 'Manabu Progress Backup',
        message: json,
      });
    } catch {
      Alert.alert('Export Failed', 'Could not open share dialog.');
    }
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;

    Alert.alert(
      'Restore Data',
      'This will replace your current stats and character mastery with the backup data. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Restore',
          style: 'destructive',
          onPress: () => {
            const res = importBackup(importText.trim());
            if (res.success) {
              setModalVisible(false);
              setImportText('');
              Alert.alert('Success 🎉', 'Progress restored successfully!');
            } else {
              setStatusMessage(res.error || 'Invalid backup format');
            }
          },
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.surface, borderColor: theme.border },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Export Backup</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Share or save full progress JSON
          </Text>
        </View>
        <Pressable
          onPress={handleExport}
          style={[styles.actionButton, { backgroundColor: theme.primary }]}
        >
          <Text style={[styles.actionButtonText, { color: theme.textOnPrimary }]}>
            Export
          </Text>
        </Pressable>
      </View>

      <View style={[styles.separator, { backgroundColor: theme.borderSubtle }]} />

      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Restore from Backup</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Paste JSON to restore stats & mastery
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setStatusMessage(null);
            setModalVisible(true);
          }}
          style={[
            styles.actionButton,
            styles.restoreButton,
            {
              backgroundColor: theme.surfaceHighlight,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.actionButtonText,
              styles.restoreButtonText,
              { color: theme.textPrimary },
            ]}
          >
            Restore
          </Text>
        </Pressable>
      </View>

      {/* Restore Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.surface }]}>
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
              Restore Backup JSON
            </Text>
            <Text style={[styles.modalSubtitle, { color: theme.textSecondary }]}>
              Paste the exported backup JSON text here to restore your learning progress.
            </Text>

            <TextInput
              style={[
                styles.textArea,
                {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.textPrimary,
                },
              ]}
              placeholder="Paste JSON here..."
              placeholderTextColor={theme.textMuted}
              multiline
              numberOfLines={6}
              value={importText}
              onChangeText={text => {
                setImportText(text);
                setStatusMessage(null);
              }}
            />

            {statusMessage && (
              <Text style={[styles.errorText, { color: theme.error }]}>
                {statusMessage}
              </Text>
            )}

            <View style={styles.modalActions}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalCancel}
              >
                <Text style={[styles.modalCancelText, { color: theme.textSecondary }]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                onPress={handleImportSubmit}
                style={[styles.modalSubmit, { backgroundColor: theme.primary }]}
              >
                <Text style={[styles.modalSubmitText, { color: theme.textOnPrimary }]}>
                  Restore Data
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.xl,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.xs,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  textContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  separator: {
    height: 1,
  },
  actionButton: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  restoreButton: {
    borderWidth: 1,
  },
  restoreButtonText: {},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  modalContent: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    gap: spacing.md,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  modalSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  textArea: {
    borderWidth: 1,
    borderRadius: radii.md,
    padding: spacing.md,
    height: 140,
    textAlignVertical: 'top',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '600',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  modalCancel: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  modalCancelText: {
    fontSize: 14,
    fontWeight: '600',
  },
  modalSubmit: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.md,
  },
  modalSubmitText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
