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
import { DojoUnitHeader } from '../components/DojoUnitHeader';
import { DojoTimelineRail } from '../components/DojoTimelineRail';
import { LessonDrawerModal } from '../components/LessonDrawerModal';
import { LessonSessionModal } from '../components/LessonSessionModal';
import { RevisionGateModal } from '../components/RevisionGateModal';
import { CURATED_DOJO_UNITS } from '../data/curatedUnits';
import type { DojoLesson, DojoUnit, LessonItem } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

export function DojoScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const passRevisionGate = useDojoStore(state => state.passRevisionGate);
  const completedLessons = useDojoStore(state => state.completedLessons);

  const [selectedLesson, setSelectedLesson] = useState<DojoLesson | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [sessionActive, setSessionActive] = useState(false);
  const [sessionLesson, setSessionLesson] = useState<DojoLesson | null>(null);
  const [sessionMode, setSessionMode] = useState<'comprehensive' | 'listen' | 'speak' | 'spell'>('comprehensive');

  const [selectedGateUnit, setSelectedGateUnit] = useState<DojoUnit | null>(null);
  const [gateModalOpen, setGateModalOpen] = useState(false);

  // Expanded units map (Unit 1 open by default)
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    unit_1: true,
  });

  const toggleUnitExpand = (unitId: string) => {
    setExpandedUnits(prev => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  const handleSelectLesson = (lesson: DojoLesson) => {
    if (lesson.category === 'Unit Test') {
      const unit = CURATED_DOJO_UNITS.find(u => u.id === lesson.unitId);
      if (unit) {
        setSelectedGateUnit(unit);
        setGateModalOpen(true);
        return;
      }
    }
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

  const handleLaunchGateTest = (unit: DojoUnit) => {
    // Create synthetic revision lesson from gate items
    const syntheticLesson: DojoLesson = {
      id: unit.revisionGate.id,
      unitId: unit.id,
      lessonNumber: 99,
      dayNumber: 7,
      category: 'Unit Test',
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

    passRevisionGate(unit.id);
  };

  const handleLaunchEarlyUnlock = (targetLesson: DojoLesson) => {
    // Collect revision items from completed lessons
    const pool: LessonItem[] = [];
    for (const unit of CURATED_DOJO_UNITS) {
      for (const lesson of unit.lessons) {
        if (completedLessons[lesson.id]) {
          pool.push(...lesson.items);
        }
      }
    }

    if (pool.length < 3) {
      pool.push(...CURATED_DOJO_UNITS[0].lessons[0].items);
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);

    const syntheticLesson: DojoLesson = {
      id: `early_unlock_${targetLesson.id}`,
      unitId: targetLesson.unitId,
      lessonNumber: targetLesson.lessonNumber,
      dayNumber: targetLesson.dayNumber,
      category: 'Practice',
      title: `Revision: Unlock Lesson ${targetLesson.lessonNumber}`,
      titleJp: '早期解除テスト',
      summary: `Pass this revision re-test to bypass cooldown and unlock ${targetLesson.title}`,
      vocabKeywords: targetLesson.vocabKeywords,
      kanjiKeywords: targetLesson.kanjiKeywords,
      items: shuffled,
    };

    setDrawerOpen(false);
    setSessionLesson(syntheticLesson);
    setSessionMode('comprehensive');
    setSessionActive(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Dojo Top Header with Floating Kana and Kanji Badges */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View style={styles.headerLeft}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>MANABU DOJO</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>道場 • 30-Week Master Curriculum (N5 - N1)</Text>
        </View>

        {/* Floating Badges [あ Kana] [漢 Kanji] */}
        <DojoFloatingBadges />
      </View>

      {/* Main Teuida-Style Timeline ScrollView */}
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 64 }]}
        showsVerticalScrollIndicator={false}
      >
        {CURATED_DOJO_UNITS.map((unit, unitIndex) => {
          const unitCompletedCount = unit.lessons.filter(l => !!completedLessons[l.id]).length;
          const isExpanded = !!expandedUnits[unit.id];

          return (
            <View key={unit.id} style={styles.unitBlock}>
              {/* Unit Header with Circular Progress Ring & Summary Button */}
              <DojoUnitHeader
                unit={unit}
                completedCount={unitCompletedCount}
                totalCount={unit.lessons.length}
                isExpanded={isExpanded}
                onToggleExpand={() => toggleUnitExpand(unit.id)}
                showExpandToggle={true}
              />

              {/* Teuida Vertical Timeline Rail */}
              {isExpanded && (
                <DojoTimelineRail
                  lessons={unit.lessons}
                  onSelectLesson={handleSelectLesson}
                />
              )}

              {/* Unit Divider if multiple units */}
              {unitIndex < CURATED_DOJO_UNITS.length - 1 && (
                <View
                  style={[
                    styles.unitDivider,
                    { backgroundColor: theme.borderSubtle },
                  ]}
                />
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* deerleno_5 Lesson Drawer */}
      <LessonDrawerModal
        visible={drawerOpen}
        lesson={selectedLesson}
        onClose={() => setDrawerOpen(false)}
        onLaunchMode={handleLaunchMode}
        onLaunchEarlyUnlock={handleLaunchEarlyUnlock}
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
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  scrollContent: {
    paddingTop: spacing.sm,
  },
  unitBlock: {
    marginBottom: spacing.md,
  },
  unitDivider: {
    height: 8,
    marginVertical: spacing.lg,
  },
});
