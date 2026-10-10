import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Volume2, MessageSquareQuote, User } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';

interface DialogueChatViewProps {
  item: LessonItem;
  selectedReply: string | null;
  onSelectReply: (reply: string) => void;
  onPlayAudio: (rate?: number) => void;
}

export function DialogueChatView({
  item,
  selectedReply,
  onSelectReply,
  onPlayAudio,
}: DialogueChatViewProps) {
  const { colors: theme } = useAppTheme();

  const speakerName = item.dialogueSpeaker || 'Speaker';
  const speakerText = item.dialoguePrompt || item.prompt;
  const options = item.dialogueOptions || item.options || [];

  const handleOptionPress = (option: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    speakJapanese(option, { rate: 0.95 }).catch(() => {});
    onSelectReply(option);
  };

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#10B98120' }]}>
          <Text style={[styles.badgeText, { color: '#10B981' }]}>CONVERSATION ROLEPLAY</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Respond naturally to continue the conversation
        </Text>
      </View>

      {/* Chat Thread Container */}
      <View style={styles.chatThread}>
        {/* Speaker A (Left Side) */}
        <View style={styles.incomingRow}>
          <View style={[styles.avatarCircle, { backgroundColor: theme.primaryLight }]}>
            <MessageSquareQuote size={20} color={theme.primary} />
          </View>
          <View style={styles.incomingContent}>
            <Text style={[styles.speakerNameText, { color: theme.textMuted }]}>
              {speakerName}
            </Text>
            <View
              style={[
                styles.incomingBubble,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={styles.bubbleTop}>
                <Text style={[styles.japanesePrompt, { color: theme.textPrimary }]}>
                  {speakerText}
                </Text>
                <Pressable
                  onPress={() => onPlayAudio(0.9)}
                  style={[styles.miniAudioBtn, { backgroundColor: theme.surfaceSubtle }]}
                  accessibilityLabel="Replay speaker dialogue"
                >
                  <Volume2 size={18} color={theme.primary} />
                </Pressable>
              </View>

              {item.romaji && (
                <Text style={[styles.romajiPrompt, { color: theme.textSecondary }]}>
                  {item.romaji}
                </Text>
              )}

              {item.english && (
                <Text style={[styles.englishPrompt, { color: theme.textMuted }]}>
                  {item.english}
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* User Reply (Right Side) */}
        {selectedReply ? (
          <View style={styles.outgoingRow}>
            <View style={styles.outgoingContent}>
              <Text style={[styles.userNameText, { color: theme.primary }]}>
                You
              </Text>
              <View style={[styles.outgoingBubble, { backgroundColor: theme.primary }]}>
                <Text style={[styles.outgoingText, { color: theme.textOnPrimary }]}>
                  {selectedReply}
                </Text>
              </View>
            </View>
            <View style={[styles.avatarCircle, { backgroundColor: theme.primary }]}>
              <User size={18} color={theme.textOnPrimary} />
            </View>
          </View>
        ) : (
          <View style={styles.emptyReplySlot}>
            <Text style={[styles.emptyReplyPrompt, { color: theme.textMuted }]}>
              Your response will appear here...
            </Text>
          </View>
        )}
      </View>

      {/* Response Options Tray */}
      <View style={styles.optionsSection}>
        <Text style={[styles.optionsLabel, { color: theme.textSecondary }]}>
          Select your response:
        </Text>
        <View style={styles.optionsList}>
          {options.map((opt, idx) => {
            const isSelected = selectedReply === opt;
            return (
              <Pressable
                key={idx}
                onPress={() => handleOptionPress(opt)}
                style={[
                  styles.optionCard,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                  isSelected && { borderColor: theme.primary, backgroundColor: theme.primaryLight },
                ]}
                accessibilityLabel={`Response option: ${opt}`}
              >
                <Text
                  style={[
                    styles.optionCardText,
                    { color: theme.textPrimary },
                    isSelected && { color: theme.primary, fontWeight: '800' },
                  ]}
                >
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    marginBottom: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '600',
  },
  chatThread: {
    width: '100%',
    marginBottom: 24,
    gap: 16,
  },
  incomingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    maxWidth: '92%',
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  incomingContent: {
    flex: 1,
  },
  speakerNameText: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    marginLeft: 4,
  },
  incomingBubble: {
    padding: 16,
    borderRadius: 20,
    borderTopLeftRadius: 4,
    borderWidth: 1.5,
  },
  bubbleTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  japanesePrompt: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    lineHeight: 28,
  },
  miniAudioBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  romajiPrompt: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  englishPrompt: {
    fontSize: 13,
    lineHeight: 18,
  },
  outgoingRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    gap: 10,
    maxWidth: '85%',
  },
  outgoingContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  userNameText: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    marginRight: 4,
  },
  outgoingBubble: {
    padding: 16,
    borderRadius: 20,
    borderTopRightRadius: 4,
  },
  outgoingText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  emptyReplySlot: {
    alignSelf: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#6B728040',
  },
  emptyReplyPrompt: {
    fontSize: 13,
    fontStyle: 'italic',
  },
  optionsSection: {
    width: '100%',
  },
  optionsLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  optionsList: {
    gap: 10,
  },
  optionCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: 'center',
  },
  optionCardText: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },
});
