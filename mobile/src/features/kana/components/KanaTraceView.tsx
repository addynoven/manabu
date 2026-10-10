import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  PanResponder,
  GestureResponderEvent,
  LayoutChangeEvent,
  GestureResponderHandlers,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  X,
  RotateCcw,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Undo2,
  Play,
  CheckCircle2,
  Grid,
  Search,
  Star,
  AlertCircle,
  Lightbulb,
} from 'lucide-react-native';
import Svg, { Path, Line, Circle, Text as SvgText, G } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { radii, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import {
  STROKE_CHARACTERS,
  CharacterStrokeData,
  StrokeStep,
  StrokePoint,
  StrokeCategory,
  getCharactersByLevel,
  getCharacterStrokeData,
  KANJI_LEVEL_COUNTS,
} from '../lib/strokeData';
import {
  validateStroke,
  calculateCharacterStars,
  Point,
} from '../lib/strokeRecognition';

type PracticeMode = 'guide' | 'test' | 'demo';

interface CompletedStroke {
  path: string;
  score: number;
}

interface KanaTraceViewProps {
  onClose: () => void;
  initialChar?: string;
}

const VIEWBOX_SIZE = 109;

export function KanaTraceView({
  onClose,
  initialChar,
}: KanaTraceViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  // Active Category filter (Core, Kana, or specific JLPT Kanji levels N5-N1)
  const [selectedCategory, setSelectedCategory] = useState<StrokeCategory>(() => {
    if (initialChar) {
      const charData = getCharacterStrokeData(initialChar);
      if (charData?.level) return charData.level;
      if (charData?.type && charData.type !== 'kanji') return charData.type;
      if (charData?.type === 'kanji') return 'N5';
    }
    return 'all';
  });

  const categoryCharacters = useMemo(() => {
    return getCharactersByLevel(selectedCategory);
  }, [selectedCategory]);

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialChar) {
      const charData = getCharacterStrokeData(initialChar);
      if (charData) {
        const initialCategory: StrokeCategory =
          charData.level ||
          (charData.type !== 'kanji' ? charData.type : 'N5') ||
          'all';
        const list = getCharactersByLevel(initialCategory);
        const idx = list.findIndex(c => c.char === initialChar);
        if (idx >= 0) return idx;
      }
    }
    return 0;
  });

  const currentChar: CharacterStrokeData =
    categoryCharacters[currentIndex] ||
    (initialChar ? getCharacterStrokeData(initialChar) : null) ||
    categoryCharacters[0] ||
    STROKE_CHARACTERS[0];

  // Practice Mode: 'guide' (with ghost outline), 'test' (freehand recall), 'demo' (animated)
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('guide');

  // Completed strokes with accuracy scores
  const [completedStrokes, setCompletedStrokes] = useState<CompletedStroke[]>([]);
  // Active in-progress drawn points (in 109x109 coordinate space)
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  // Stroke validation error feedback
  const [strokeError, setStrokeError] = useState<{ message: string; isError: boolean } | null>(null);
  // Last stroke score feedback badge
  const [lastScoreBadge, setLastScoreBadge] = useState<string | null>(null);
  // Show temporary hint in test mode
  const [showTestHint, setShowTestHint] = useState(false);
  // Character completion modal
  const [completionResult, setCompletionResult] = useState<{ stars: number; avgScore: number } | null>(null);

  // Demo playback animation state
  const [demoStep, setDemoStep] = useState<number>(-1);
  const [demoHeadPoint, setDemoHeadPoint] = useState<StrokePoint | null>(null);

  // Character Picker Library Modal
  const [pickerModalOpen, setPickerModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Canvas size measurement
  const [canvasSize, setCanvasSize] = useState(300);
  const canvasSizeRef = useRef(300);
  const currentPointsRef = useRef<Point[]>([]);
  const currentActiveStrokeIndexRef = useRef(0);
  const currentCharRef = useRef(currentChar);
  const completedStrokesRef = useRef<CompletedStroke[]>([]);

  const activeStrokeIndex = completedStrokes.length;
  const currentTargetStroke: StrokeStep | undefined = currentChar.strokes[activeStrokeIndex];

  useEffect(() => {
    canvasSizeRef.current = canvasSize;
    currentPointsRef.current = currentPoints;
    currentActiveStrokeIndexRef.current = activeStrokeIndex;
    currentCharRef.current = currentChar;
    completedStrokesRef.current = completedStrokes;
  }, [canvasSize, currentPoints, activeStrokeIndex, currentChar, completedStrokes]);

  // Audio recitation
  const handleSpeak = useCallback(() => {
    if (ttsEnabled) {
      speakJapanese(currentChar.char).catch(() => {});
    }
  }, [currentChar.char, ttsEnabled]);

  // Reset current character state
  const resetCharacterState = useCallback(() => {
    setCompletedStrokes([]);
    setCurrentPoints([]);
    setStrokeError(null);
    setLastScoreBadge(null);
    setShowTestHint(false);
    setCompletionResult(null);
    setDemoStep(-1);
    setDemoHeadPoint(null);
  }, []);

  // Character Navigation
  const handleNextChar = useCallback(() => {
    Haptics.selectionAsync().catch(() => {});
    resetCharacterState();
    setCurrentIndex(prev => (prev + 1) % categoryCharacters.length);
  }, [categoryCharacters.length, resetCharacterState]);

  const handlePrevChar = useCallback(() => {
    Haptics.selectionAsync().catch(() => {});
    resetCharacterState();
    setCurrentIndex(prev => (prev - 1 + categoryCharacters.length) % categoryCharacters.length);
  }, [categoryCharacters.length, resetCharacterState]);

  const handleSelectCharacter = useCallback((char: string) => {
    const charData = getCharacterStrokeData(char);
    if (!charData) return;

    const targetCategory: StrokeCategory = (charData.level ||
      (charData.type !== 'kanji' ? charData.type : 'N5') ||
      'all') as StrokeCategory;
    if (selectedCategory !== targetCategory && selectedCategory !== 'all') {
      setSelectedCategory(targetCategory);
    }

    const currentList = getCharactersByLevel(
      selectedCategory === 'all' ? 'all' : targetCategory
    );
    const idx = currentList.findIndex(c => c.char === char);
    if (idx >= 0) {
      setCurrentIndex(idx);
    } else {
      const fallbackList = getCharactersByLevel(targetCategory);
      const fallbackIdx = fallbackList.findIndex(c => c.char === char);
      setSelectedCategory(targetCategory);
      setCurrentIndex(fallbackIdx >= 0 ? fallbackIdx : 0);
    }
    setPickerModalOpen(false);
    resetCharacterState();
  }, [selectedCategory, resetCharacterState]);

  // Undo last stroke
  const handleUndo = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setCompletedStrokes(prev => prev.slice(0, -1));
    setStrokeError(null);
    setLastScoreBadge(null);
    setCompletionResult(null);
  }, []);

  // Clear canvas
  const handleClear = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    resetCharacterState();
  }, [resetCharacterState]);

  // Demo Playback Animation
  const handlePlayDemo = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    setPracticeMode('demo');
    resetCharacterState();

    const strokes = currentChar.strokes;
    let strokeIdx = 0;

    const playNextStroke = () => {
      if (strokeIdx >= strokes.length) {
        setDemoStep(-1);
        setDemoHeadPoint(null);
        setTimeout(() => setPracticeMode('guide'), 800);
        return;
      }

      setDemoStep(strokeIdx);
      const stroke = strokes[strokeIdx];
      const pts = stroke.points;
      let ptIdx = 0;

      const ptInterval = setInterval(() => {
        if (ptIdx < pts.length) {
          setDemoHeadPoint(pts[ptIdx]);
          ptIdx++;
        } else {
          clearInterval(ptInterval);
          setCompletedStrokes(prev => [...prev, { path: stroke.path, score: 100 }]);
          setDemoHeadPoint(null);
          strokeIdx++;
          setTimeout(playNextStroke, 350);
        }
      }, 40);
    };

    playNextStroke();
  }, [currentChar.strokes, resetCharacterState]);

  // PanResponder for touch drawing with real stroke recognition
  const [panHandlers, setPanHandlers] = useState<GestureResponderHandlers>({});

  useEffect(() => {
    const pr = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e: GestureResponderEvent) => {
        const { locationX, locationY } = e.nativeEvent;
        const size = canvasSizeRef.current || 300;
        const normX = Math.max(0, Math.min(VIEWBOX_SIZE, (locationX / size) * VIEWBOX_SIZE));
        const normY = Math.max(0, Math.min(VIEWBOX_SIZE, (locationY / size) * VIEWBOX_SIZE));

        const newPts = [{ x: normX, y: normY }];
        currentPointsRef.current = newPts;
        setCurrentPoints(newPts);
        setStrokeError(null);
      },
      onPanResponderMove: (e: GestureResponderEvent) => {
        const { locationX, locationY } = e.nativeEvent;
        const size = canvasSizeRef.current || 300;
        const normX = Math.max(0, Math.min(VIEWBOX_SIZE, (locationX / size) * VIEWBOX_SIZE));
        const normY = Math.max(0, Math.min(VIEWBOX_SIZE, (locationY / size) * VIEWBOX_SIZE));

        const pts = [...currentPointsRef.current, { x: normX, y: normY }];
        currentPointsRef.current = pts;
        setCurrentPoints(pts);
      },
      onPanResponderRelease: () => {
        const pts = currentPointsRef.current;
        const char = currentCharRef.current;
        const strokeIdx = currentActiveStrokeIndexRef.current;

        if (pts.length < 2) {
          setCurrentPoints([]);
          currentPointsRef.current = [];
          return;
        }

        if (strokeIdx >= char.strokeCount) {
          setCurrentPoints([]);
          currentPointsRef.current = [];
          return;
        }

        const target = char.strokes[strokeIdx];
        const result = validateStroke(pts, target.points, {
          startTolerance: 26,
          shapeTolerance: 26,
        });

        if (result.success) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
          const newCompleted = [
            ...completedStrokesRef.current,
            { path: target.path, score: result.score },
          ];
          setCompletedStrokes(newCompleted);
          completedStrokesRef.current = newCompleted;
          setLastScoreBadge(`${result.message} (+${result.score}%)`);
          setStrokeError(null);
          setCurrentPoints([]);
          currentPointsRef.current = [];

          // Check if character completed!
          if (newCompleted.length >= char.strokeCount) {
            const allScores = newCompleted.map(s => s.score);
            const starsData = calculateCharacterStars(allScores);
            setCompletionResult({
              stars: starsData.stars,
              avgScore: starsData.averageScore,
            });
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
            speakJapanese(char.char).catch(() => {});
          }
        } else {
          // Stroke rejected
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
          setStrokeError({
            message: result.message,
            isError: true,
          });

          // Clear rejected stroke after brief flash
          setTimeout(() => {
            setCurrentPoints([]);
            currentPointsRef.current = [];
          }, 350);
        }
      },
    });

    setPanHandlers(pr.panHandlers);
  }, []);

  const onCanvasLayout = useCallback((e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width > 50) {
      setCanvasSize(width);
      canvasSizeRef.current = width;
    }
  }, []);

  // Filtered list for search modal
  const searchResults = useMemo(() => {
    const list = categoryCharacters;
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    const filtered = list.filter(
      c =>
        c.char.includes(q) ||
        c.romaji.toLowerCase().includes(q) ||
        (c.meaning && c.meaning.toLowerCase().includes(q))
    );
    // If not in current category, search across any level if character matched
    if (filtered.length === 0 && q.length >= 1) {
      const globalChar = getCharacterStrokeData(q);
      if (globalChar) return [globalChar];
    }
    return filtered;
  }, [categoryCharacters, searchQuery]);

  // Current active drawn polyline
  const activePathString = useMemo(() => {
    if (currentPoints.length < 2) return '';
    return currentPoints.reduce((acc, p, idx) => {
      if (idx === 0) return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      return `${acc} L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }, '');
  }, [currentPoints]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background, paddingTop: Math.max(insets.top, 12) },
      ]}
    >
      {/* Top Header */}
      <View style={[styles.header, { borderBottomColor: 'rgba(255, 255, 255, 0.08)' }]}>
        <Pressable
          onPress={onClose}
          style={({ pressed }) => [styles.headerBtn, pressed && styles.btnPressed]}
          android_ripple={{ color: 'rgba(255,255,255,0.1)', borderless: true }}
          accessibilityLabel="Close trace view"
        >
          <X size={22} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerTitles}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            書き順 • Stroke Master
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            {currentChar.type === 'kanji'
              ? `${currentChar.level ? `KANJI ${currentChar.level}` : 'KANJI'} • ${currentChar.strokeCount} STROKES`
              : `${currentChar.type.toUpperCase()} • ${currentChar.strokeCount} STROKES`}
          </Text>
        </View>

        <View style={styles.headerRightActions}>
          <Pressable
            onPress={() => setPickerModalOpen(true)}
            style={({ pressed }) => [styles.headerBtn, pressed && styles.btnPressed]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)', borderless: true }}
            accessibilityLabel="Browse character library"
          >
            <Grid size={20} color={theme.primary} />
          </Pressable>

          <Pressable
            onPress={handleClear}
            style={({ pressed }) => [styles.headerBtn, pressed && styles.btnPressed]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)', borderless: true }}
            accessibilityLabel="Reset canvas"
          >
            <RotateCcw size={20} color={theme.textSecondary} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: Math.max(insets.bottom, 20) + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Practice Mode Segmented Switcher */}
        <View style={[styles.modeBar, { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.08)' }]}>
          {(
            [
              { id: 'guide', label: '✍️ Guide', desc: 'With ghost outline' },
              { id: 'test', label: '🧠 Test', desc: 'Freehand recall' },
              { id: 'demo', label: '▶️ Demo', desc: 'Watch master' },
            ] as const
          ).map(m => {
            const isSelected = practiceMode === m.id;
            return (
              <Pressable
                key={m.id}
                onPress={() => {
                  Haptics.selectionAsync().catch(() => {});
                  if (m.id === 'demo') {
                    handlePlayDemo();
                  } else {
                    setPracticeMode(m.id);
                    resetCharacterState();
                  }
                }}
                android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
                style={[
                  styles.modeTab,
                  isSelected && { backgroundColor: theme.primary },
                ]}
              >
                <Text
                  style={[
                    styles.modeTabText,
                    { color: isSelected ? theme.textOnPrimary : theme.textSecondary },
                  ]}
                >
                  {m.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Character Navigation & Overview Banner */}
        <View style={[styles.charBanner, { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.08)' }]}>
          <Pressable
            onPress={handlePrevChar}
            style={({ pressed }) => [styles.navArrowBtn, pressed && styles.btnPressed]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)', borderless: true }}
            accessibilityLabel="Previous character"
          >
            <ChevronLeft size={24} color={theme.textPrimary} />
          </Pressable>

          <View style={styles.charCenterInfo}>
            <View style={styles.charCharRow}>
              <Text style={[styles.displayChar, { color: theme.textPrimary }]}>
                {currentChar.char}
              </Text>
              <Pressable
                onPress={handleSpeak}
                style={({ pressed }) => [styles.audioBtn, pressed && styles.btnPressed]}
                accessibilityLabel="Hear pronunciation"
              >
                <Volume2 size={20} color={theme.primary} />
              </Pressable>
            </View>

            <Text style={[styles.romajiText, { color: theme.textSecondary }]}>
              {currentChar.romaji}
              {currentChar.meaning ? ` • ${currentChar.meaning}` : ''}
            </Text>

            {/* Quick Character Library Chip */}
            <Pressable
              onPress={() => setPickerModalOpen(true)}
              style={styles.charCountPill}
              hitSlop={6}
            >
              <Text style={styles.charCountText}>
                {currentIndex + 1} / {categoryCharacters.length} • Browse Library
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleNextChar}
            style={({ pressed }) => [styles.navArrowBtn, pressed && styles.btnPressed]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)', borderless: true }}
            accessibilityLabel="Next character"
          >
            <ChevronRight size={24} color={theme.textPrimary} />
          </Pressable>
        </View>

        {/* Traditional Japanese Calligraphy Canvas (Genkouyoushi Square) */}
        <View style={styles.canvasOuterWrapper}>
          <View
            style={[styles.canvasBox, { borderColor: 'rgba(255, 255, 255, 0.15)' }]}
            onLayout={onCanvasLayout}
            {...panHandlers}
          >
            <Svg
              pointerEvents="none"
              width={canvasSize}
              height={canvasSize}
              viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
            >
              {/* Genkouyoushi Calligraphy Crosshairs */}
              <Line
                x1={0}
                y1={VIEWBOX_SIZE / 2}
                x2={VIEWBOX_SIZE}
                y2={VIEWBOX_SIZE / 2}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth={1}
                strokeDasharray="3, 3"
              />
              <Line
                x1={VIEWBOX_SIZE / 2}
                y1={0}
                x2={VIEWBOX_SIZE / 2}
                y2={VIEWBOX_SIZE}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth={1}
                strokeDasharray="3, 3"
              />

              {/* 1. Ghost Reference Guide (Visible in Guide Mode or when Hint is Active) */}
              {(practiceMode === 'guide' || showTestHint) && (
                <G opacity={showTestHint ? 0.35 : 0.18}>
                  {currentChar.strokes.map((stroke, i) => (
                    <Path
                      key={`guide-${i}`}
                      d={stroke.path}
                      stroke="#94A3B8"
                      strokeWidth={8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  ))}
                </G>
              )}

              {/* 2. Highlight Target Stroke Guide (in Guide Mode) */}
              {practiceMode === 'guide' && currentTargetStroke && (
                <Path
                  d={currentTargetStroke.path}
                  stroke="#F59E0B"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.35}
                  fill="none"
                />
              )}

              {/* 3. Completed Authentic KanjiVG Strokes */}
              {completedStrokes.map((s, idx) => (
                <Path
                  key={`completed-${idx}`}
                  d={s.path}
                  stroke="#10B981"
                  strokeWidth={7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ))}

              {/* 4. Active Drawn User Stroke (Live Touch Ink) */}
              {activePathString.length > 0 && (
                <Path
                  d={activePathString}
                  stroke={strokeError ? '#EF4444' : '#38BDF8'}
                  strokeWidth={6.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              )}

              {/* 5. Target Stroke Start Badge & Number Indicator */}
              {(practiceMode === 'guide' || showTestHint) && currentTargetStroke && (
                <G>
                  {/* Glowing Start Dot */}
                  <Circle
                    cx={currentTargetStroke.startPoint.x}
                    cy={currentTargetStroke.startPoint.y}
                    r={5}
                    fill="#F59E0B"
                  />
                  <Circle
                    cx={currentTargetStroke.startPoint.x}
                    cy={currentTargetStroke.startPoint.y}
                    r={8}
                    stroke="#F59E0B"
                    strokeWidth={1.5}
                    opacity={0.6}
                    fill="none"
                  />
                  {/* Number Badge */}
                  <Circle
                    cx={currentTargetStroke.numberPos.x}
                    cy={currentTargetStroke.numberPos.y}
                    r={5}
                    fill="#0284C7"
                  />
                  <SvgText
                    x={currentTargetStroke.numberPos.x}
                    y={currentTargetStroke.numberPos.y + 2.5}
                    fontSize={6}
                    fontWeight="bold"
                    fill="#FFFFFF"
                    textAnchor="middle"
                  >
                    {currentTargetStroke.strokeNumber}
                  </SvgText>
                </G>
              )}

              {/* 6. Demo Animated Head Point & Active Stroke */}
              {demoStep >= 0 && currentChar.strokes[demoStep] && (
                <Path
                  d={currentChar.strokes[demoStep].path}
                  stroke="#F59E0B"
                  strokeWidth={7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.4}
                  fill="none"
                />
              )}
              {demoHeadPoint && (
                <Circle
                  cx={demoHeadPoint.x}
                  cy={demoHeadPoint.y}
                  r={6}
                  fill="#F59E0B"
                />
              )}
            </Svg>

            {/* In-Canvas Completion Banner */}
            {completionResult && (
              <View style={styles.completionOverlay}>
                <View style={styles.completionCard}>
                  <CheckCircle2 size={36} color="#10B981" />
                  <Text style={styles.completionTitle}>完成 • Mastered!</Text>
                  <View style={styles.starRow}>
                    {[1, 2, 3].map(st => (
                      <Star
                        key={st}
                        size={22}
                        color={st <= completionResult.stars ? '#F59E0B' : '#475569'}
                        fill={st <= completionResult.stars ? '#F59E0B' : 'transparent'}
                      />
                    ))}
                  </View>
                  <Text style={styles.completionScore}>
                    Accuracy: {completionResult.avgScore}%
                  </Text>
                  <View style={styles.completionBtns}>
                    <Pressable
                      onPress={handleClear}
                      style={[styles.compBtn, { backgroundColor: '#334155' }]}
                    >
                      <RotateCcw size={14} color="#FFFFFF" />
                      <Text style={styles.compBtnText}>Again</Text>
                    </Pressable>
                    <Pressable
                      onPress={handleNextChar}
                      style={[styles.compBtn, { backgroundColor: '#10B981' }]}
                    >
                      <ChevronRight size={14} color="#FFFFFF" />
                      <Text style={styles.compBtnText}>Next</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Score / Error Feedback Toast */}
        {strokeError && (
          <View style={styles.errorToast}>
            <AlertCircle size={16} color="#EF4444" />
            <Text style={styles.errorToastText}>{strokeError.message}</Text>
          </View>
        )}

        {lastScoreBadge && !strokeError && !completionResult && (
          <View style={styles.scoreToast}>
            <Sparkles size={16} color="#10B981" />
            <Text style={styles.scoreToastText}>{lastScoreBadge}</Text>
          </View>
        )}

        {/* Action Controls Bar */}
        <View style={styles.controlsRow}>
          {practiceMode === 'test' && (
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                setShowTestHint(true);
                setTimeout(() => setShowTestHint(false), 2000);
              }}
              style={({ pressed }) => [
                styles.ctrlBtn,
                { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.1)' },
                pressed && styles.btnPressed,
              ]}
              android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
            >
              <Lightbulb size={16} color="#F59E0B" />
              <Text style={[styles.ctrlBtnText, { color: theme.textPrimary }]}>Hint</Text>
            </Pressable>
          )}

          <Pressable
            onPress={handleUndo}
            disabled={completedStrokes.length === 0}
            style={({ pressed }) => [
              styles.ctrlBtn,
              {
                backgroundColor: theme.surface,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                opacity: completedStrokes.length === 0 ? 0.4 : 1,
              },
              pressed && styles.btnPressed,
            ]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
          >
            <Undo2 size={16} color={theme.textPrimary} />
            <Text style={[styles.ctrlBtnText, { color: theme.textPrimary }]}>Undo</Text>
          </Pressable>

          <Pressable
            onPress={handleClear}
            style={({ pressed }) => [
              styles.ctrlBtn,
              { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.1)' },
              pressed && styles.btnPressed,
            ]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
          >
            <RotateCcw size={16} color="#EF4444" />
            <Text style={[styles.ctrlBtnText, { color: '#EF4444' }]}>Clear</Text>
          </Pressable>

          <Pressable
            onPress={handlePlayDemo}
            style={({ pressed }) => [
              styles.ctrlBtn,
              { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.1)' },
              pressed && styles.btnPressed,
            ]}
            android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
          >
            <Play size={16} color="#F59E0B" />
            <Text style={[styles.ctrlBtnText, { color: '#F59E0B' }]}>Watch Demo</Text>
          </Pressable>
        </View>

        {/* Step Guidance & Character Tip Card */}
        <View style={[styles.tipCard, { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.08)' }]}>
          <View style={styles.tipHeaderRow}>
            <View style={styles.stepBadge}>
              <Sparkles size={12} color="#F59E0B" />
              <Text style={styles.stepBadgeText}>
                Stroke {Math.min(activeStrokeIndex + 1, currentChar.strokeCount)} of {currentChar.strokeCount}
              </Text>
            </View>
            <Text style={styles.directionHintText}>
              {currentTargetStroke?.directionHint || 'Completed'}
            </Text>
          </View>

          <Text style={[styles.stepDesc, { color: theme.textPrimary }]}>
            {currentTargetStroke?.tip || `All ${currentChar.strokeCount} strokes completed successfully!`}
          </Text>

          {currentChar.overallTip && (
            <Text style={[styles.overallTip, { color: theme.textSecondary }]}>
              💡 {currentChar.overallTip}
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Character Library Grid Modal (172 Characters) */}
      <Modal
        visible={pickerModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setPickerModalOpen(false)}
      >
        <View style={[styles.modalContainer, { backgroundColor: theme.background, paddingTop: Math.max(insets.top, 16) }]}>
          {/* Modal Header */}
          <View style={[styles.modalHeader, { borderBottomColor: 'rgba(255, 255, 255, 0.08)' }]}>
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
              Character Library ({categoryCharacters.length})
            </Text>
            <Pressable
              onPress={() => setPickerModalOpen(false)}
              style={styles.headerBtn}
              hitSlop={8}
            >
              <X size={22} color={theme.textPrimary} />
            </Pressable>
          </View>

          {/* Search Box */}
          <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.08)' }]}>
            <Search size={18} color={theme.textMuted} />
            <TextInput
              style={[styles.searchInput, { color: theme.textPrimary }]}
              placeholder="Search by character, reading, or meaning..."
              placeholderTextColor={theme.textMuted}
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery('')} hitSlop={6}>
                <Text style={{ color: theme.textMuted, fontSize: 13 }}>Clear</Text>
              </Pressable>
            )}
          </View>

          {/* Category Filter Chips with Horizontal Scroll */}
          <View style={{ minHeight: 46 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.catChipsRow}
            >
              {[
                { id: 'all', label: 'Core (172)' },
                { id: 'hiragana', label: `Hiragana (${KANJI_LEVEL_COUNTS.hiragana})` },
                { id: 'katakana', label: `Katakana (${KANJI_LEVEL_COUNTS.katakana})` },
                { id: 'N5', label: `Kanji N5 (${KANJI_LEVEL_COUNTS.N5})` },
                { id: 'N4', label: `Kanji N4 (${KANJI_LEVEL_COUNTS.N4})` },
                { id: 'N3', label: `Kanji N3 (${KANJI_LEVEL_COUNTS.N3})` },
                { id: 'N2', label: `Kanji N2 (${KANJI_LEVEL_COUNTS.N2})` },
                { id: 'N1', label: `Kanji N1 (${KANJI_LEVEL_COUNTS.N1})` },
              ].map(cat => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <Pressable
                    key={cat.id}
                    onPress={() => {
                      Haptics.selectionAsync().catch(() => {});
                      setSelectedCategory(cat.id as StrokeCategory);
                      setCurrentIndex(0);
                    }}
                    style={[
                      styles.catChip,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surface,
                        borderColor: isSelected ? theme.primary : 'rgba(255, 255, 255, 0.08)',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.catChipText,
                        { color: isSelected ? theme.textOnPrimary : theme.textSecondary },
                      ]}
                    >
                      {cat.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Character Grid */}
          <ScrollView
            contentContainerStyle={[styles.gridContent, { paddingBottom: Math.max(insets.bottom, 20) + 16 }]}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.charGrid}>
              {searchResults.map(item => {
                const isCurrent = item.char === currentChar.char;
                return (
                  <Pressable
                    key={item.char}
                    onPress={() => handleSelectCharacter(item.char)}
                    style={({ pressed }) => [
                      styles.gridTile,
                      {
                        backgroundColor: isCurrent ? 'rgba(249, 115, 22, 0.16)' : theme.surface,
                        borderColor: isCurrent ? theme.primary : 'rgba(255, 255, 255, 0.08)',
                        transform: [{ scale: pressed ? 0.94 : 1 }],
                      },
                    ]}
                  >
                    <Text style={[styles.gridChar, { color: isCurrent ? theme.primary : theme.textPrimary }]}>
                      {item.char}
                    </Text>
                    <Text style={[styles.gridRomaji, { color: theme.textSecondary }]} numberOfLines={1}>
                      {item.romaji}
                    </Text>
                    <View style={styles.gridStrokeBadge}>
                      <Text style={styles.gridStrokeText}>{item.strokeCount}s</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </Modal>
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.94 }],
  },
  headerTitles: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 1,
  },
  headerRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  modeBar: {
    flexDirection: 'row',
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 4,
    marginBottom: 12,
  },
  modeTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeTabText: {
    fontSize: 13,
    fontWeight: '700',
  },
  charBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: radii.xl,
    borderWidth: 1,
    marginBottom: 14,
  },
  navArrowBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  charCenterInfo: {
    alignItems: 'center',
  },
  charCharRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  displayChar: {
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 48,
  },
  audioBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  romajiText: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  charCountPill: {
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  charCountText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
  },
  canvasOuterWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  canvasBox: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 340,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    borderWidth: 2,
    overflow: 'hidden',
    position: 'relative',
    elevation: 4,
  },
  completionOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    zIndex: 10,
  },
  completionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E293B',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#10B981',
    gap: 8,
    width: '85%',
  },
  completionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  starRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 4,
  },
  completionScore: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '700',
  },
  completionBtns: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  compBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: radii.full,
  },
  compBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  errorToast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 1,
    borderColor: '#EF4444',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: radii.full,
    marginTop: 8,
  },
  errorToastText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '700',
  },
  scoreToast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderWidth: 1,
    borderColor: '#10B981',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: radii.full,
    marginTop: 8,
  },
  scoreToastText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '800',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 12,
  },
  ctrlBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  ctrlBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  tipCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 14,
    marginTop: 14,
    gap: 6,
  },
  tipHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  stepBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#F59E0B',
  },
  directionHintText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#38BDF8',
  },
  stepDesc: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  overallTip: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    padding: 0,
  },
  catChipsRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  catChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  catChipText: {
    fontSize: 11,
    fontWeight: '700',
  },
  gridContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  charGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'flex-start',
  },
  gridTile: {
    width: (Dimensions.get('window').width - 32 - 40) / 5,
    aspectRatio: 1,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gridChar: {
    fontSize: 22,
    fontWeight: '800',
  },
  gridRomaji: {
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },
  gridStrokeBadge: {
    position: 'absolute',
    top: 3,
    right: 4,
  },
  gridStrokeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#64748B',
  },
});
