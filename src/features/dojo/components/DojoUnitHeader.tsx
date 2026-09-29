import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { BookOpen, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { DojoUnit } from '../models/dojo.model';
import { UnitSummaryModal } from './UnitSummaryModal';

interface DojoUnitHeaderProps {
  unit: DojoUnit;
  completedCount: number;
  totalCount: number;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  showExpandToggle?: boolean;
}

export function DojoUnitHeader({
  unit,
  completedCount,
  totalCount,
  isExpanded = true,
  onToggleExpand,
  showExpandToggle = false,
}: DojoUnitHeaderProps) {
  const { colors: theme } = useAppTheme();
  const [summaryOpen, setSummaryOpen] = useState(false);

  // SVG Circular progress arc calculations
  const size = 100;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const percent = totalCount > 0 ? Math.min(1, completedCount / totalCount) : 0;
  const strokeDashoffset = circumference - percent * circumference;

  const handleOpenSummary = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setSummaryOpen(true);
  };

  return (
    <View style={styles.container}>
      {/* Unit Number Tag */}
      <Text style={[styles.unitNumber, { color: theme.textSecondary }]}>
        Unit {unit.unitNumber}
      </Text>

      {/* English Title & Japanese Title */}
      <Text style={[styles.title, { color: theme.textPrimary }]}>
        {unit.title}
      </Text>
      <Text style={[styles.titleJp, { color: theme.textSecondary }]}>
        {unit.titleJp}
      </Text>

      {/* Big Circular Progress Ring matching Teuida */}
      <Pressable
        onPress={showExpandToggle && onToggleExpand ? () => {
          Haptics.selectionAsync().catch(() => {});
          onToggleExpand();
        } : undefined}
        style={styles.progressRingWrapper}
      >
        <Svg width={size} height={size}>
          {/* Background Track */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={theme.borderSubtle}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress Arc */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={unit.themeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            rotation="-90"
            origin={`${center}, ${center}`}
          />
        </Svg>

        {/* Center Icon & Badge */}
        <View style={[styles.centerBadge, { backgroundColor: theme.surfaceSubtle }]}>
          <Text style={styles.unitEmoji}>{unit.icon}</Text>
        </View>

        {/* Counter Pill (e.g. 4/15) */}
        <View style={styles.counterBadge}>
          <Text style={[styles.counterText, { color: unit.themeColor }]}>
            {completedCount}/{totalCount}
          </Text>
        </View>
      </Pressable>

      {/* Summary Button matching Teuida [📖 Summary >] */}
      <Pressable
        onPress={handleOpenSummary}
        style={[styles.summaryBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
        accessibilityLabel={`View summary for Unit ${unit.unitNumber}`}
      >
        <BookOpen size={14} color={theme.textSecondary} />
        <Text style={[styles.summaryBtnText, { color: theme.textPrimary }]}>
          Summary
        </Text>
        <ChevronRight size={14} color={theme.textSecondary} />
      </Pressable>

      {/* Optional Collapsible Chevron / Pill */}
      {showExpandToggle && onToggleExpand && (
        <Pressable
          onPress={() => {
            Haptics.selectionAsync().catch(() => {});
            onToggleExpand();
          }}
          style={[styles.expandToggle, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={12}
        >
          <Text style={[styles.expandToggleText, { color: theme.textSecondary }]}>
            {isExpanded ? 'Hide Lessons' : 'View Lessons'}
          </Text>
          {isExpanded ? (
            <ChevronUp size={16} color={theme.textSecondary} />
          ) : (
            <ChevronDown size={16} color={theme.textSecondary} />
          )}
        </Pressable>
      )}

      {/* Summary Modal */}
      <UnitSummaryModal
        visible={summaryOpen}
        unit={unit}
        onClose={() => setSummaryOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
  },
  unitNumber: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 2,
  },
  titleJp: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  progressRingWrapper: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xs,
  },
  centerBadge: {
    position: 'absolute',
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  unitEmoji: {
    fontSize: 30,
  },
  counterBadge: {
    position: 'absolute',
    bottom: -6,
    right: -4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.full,
    backgroundColor: '#FFFFFF',
    ...shadows.sm,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '800',
  },
  summaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radii.full,
    borderWidth: 1,
    marginTop: spacing.sm,
    ...shadows.sm,
  },
  summaryBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  expandToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
    marginTop: spacing.sm,
  },
  expandToggleText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
