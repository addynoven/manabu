import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing, useAppTheme } from '../../../core/theme';
import { DojoFloatingBadges } from '../components/DojoFloatingBadges';
import { DojoWindingPath } from '../components/DojoWindingPath';
import { LessonDrawerModal } from '../components/LessonDrawerModal';
import { LessonSessionModal } from '../components/LessonSessionModal';
import { RevisionGateModal } from '../components/RevisionGateModal';
import type { DojoLesson, DojoUnit } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

export function DojoScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const passRevisionGate = useDojoStore(state => state.passRevisionGate);

  const [selectedLesson, setSelectedLesson] = useState<DojoLesson | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [sessionActive, setSessionActive] = useState(false);
  const [sessionLesson, setSessionLesson] = useState<DojoLesson | null>(null);
  const [sessionMode, setSessionMode] = useState<'comprehensive' | 'listen' | 'speak' | 'spell'>('comprehensive');

  const [selectedGateUnit, setSelectedGateUnit] = useState<DojoUnit | null>(null);
  const [gateModalOpen, setGateModalOpen] = useState(false);

  const handleSelectLesson = (lesson: DojoLesson) => {
    setSelectedLesson(lesson);
    setDrawerOpen(true);
  };

  const handleLaunchMode = (
    lesson: DojoLesson,
    mode: 'comprehensive' | 'listen' | 'speak' | 'spell',
  ) => {
    setSessionLesson(lesson);
    setSessionMode(mode);
    setSessionActive(true);
  };

  const handleSelectRevisionGate = (unit: DojoUnit) => {
    setSelectedGateUnit(unit);
    setGateModalOpen(true);
  };

  const handleLaunchGateTest = (unit: DojoUnit) => {
    // Create synthetic revision lesson from gate items
    const syntheticLesson: DojoLesson = {
      id: unit.revisionGate.id,
      unitId: unit.id,
      lessonNumber: 99,
      title: unit.revisionGate.title,
      titleJp: unit.revisionGate.titleJp,
      summary: 'Cumulative unit review test',
      vocabKeywords: [],
      kanjiKeywords: [],
      items: unit.revisionGate.items,
    };

    setSessionLesson(syntheticLesson);
    setSessionMode('comprehensive');
    setSessionActive(true);

    // Auto-mark passed upon completion in session runner
    passRevisionGate(unit.id);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Dojo Top Header with Floating Kana and Kanji Badges */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View style={styles.headerLeft}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>MANABU DOJO</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>道場 • N5 Curriculum</Text>
        </View>

        {/* Floating Badges [あ Kana] [漢 Kanji] */}
        <DojoFloatingBadges />
      </View>

      {/* Main Path ScrollView */}
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 48 }]}
        showsVerticalScrollIndicator={false}
      >
        <DojoWindingPath
          onSelectLesson={handleSelectLesson}
          onSelectRevisionGate={handleSelectRevisionGate}
        />
      </ScrollView>

      {/* deerleno_5 Lesson Drawer */}
      <LessonDrawerModal
        visible={drawerOpen}
        lesson={selectedLesson}
        onClose={() => setDrawerOpen(false)}
        onLaunchMode={handleLaunchMode}
      />

      {/* Revision Gate Modal */}
      <RevisionGateModal
        visible={gateModalOpen}
        unit={selectedGateUnit}
        onClose={() => setGateModalOpen(false)}
        onLaunchGateTest={handleLaunchGateTest}
      />

      {/* Full-Screen Lesson Session Runner */}
      <LessonSessionModal
        visible={sessionActive}
        lesson={sessionLesson}
        mode={sessionMode}
        onClose={() => {
          setSessionActive(false);
          setSessionLesson(null);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  scrollContent: {
    paddingTop: spacing.base,
  },
});
