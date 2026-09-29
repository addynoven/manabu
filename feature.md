# 🏯 Manabu (学び) / KanaDojo — Complete Feature Inventory & Specification

> **Platform**: Expo SDK 57 / React Native 0.86 / React 19 / TypeScript / MMKV / TanStack Query  
> **Architecture**: Mobile-first cross-platform application with modular file-based Expo Router navigation, offline-first local storage, and high-performance native components.

---

## 📑 Table of Contents

1. [App Overview & Navigation Structure](#1-app-overview--navigation-structure)
2. [Core Training Dojos](#2-core-training-dojos)
   - [2.1 Kana Dojo (仮名道場)](#21-kana-dojo-仮名道場)
   - [2.2 Kanji Dojo (漢字道場)](#22-kanji-dojo-漢字道場)
   - [2.3 Vocabulary Dojo (単語道場)](#23-vocabulary-dojo-単語道場)
3. [Japanese Language Tools](#3-japanese-language-tools)
   - [3.1 Japanese Verb Conjugator (活用形)](#31-japanese-verb-conjugator-活用形)
4. [Arcade & Zen Hub (遊楽道場)](#4-arcade--zen-hub-遊楽道場)
   - [4.1 Zen Breathing (息吹)](#41-zen-breathing-息吹)
   - [4.2 Kana Wordle (語文字)](#42-kana-wordle-語文字)
   - [4.3 Memory Match (神経衰弱)](#43-memory-match-神経衰弱)
   - [4.4 Kana Rain (仮名の雨)](#44-kana-rain-仮名の雨)
5. [Challenge & Survival Modes](#5-challenge--survival-modes)
   - [5.1 Timed Blitz Mode](#51-timed-blitz-mode)
   - [5.2 Gauntlet Mode](#52-gauntlet-mode)
6. [Progress, Mastery & Analytics Engine](#6-progress-mastery--analytics-engine)
7. [Achievements & Gamification Engine](#7-achievements--gamification-engine)
8. [Academy & Resource Vault](#8-academy--resource-vault)
   - [8.1 Kana Academy (学堂)](#81-kana-academy-学堂)
   - [8.2 Resource Vault (推薦集)](#82-resource-vault-推薦集)
9. [Settings, Theming & Personalization](#9-settings-theming--personalization)
10. [Technical & Offline Infrastructure](#10-technical--offline-infrastructure)

---

## 1. App Overview & Navigation Structure

Manabu is structured with Expo Router file-based routing (`src/app/`) prioritizing intuitive mobile navigation and seamless transitions:

### Main Tab Navigation (`/(tabs)`)
- 🌸 **Kana Dojo** (`index.tsx`): Practice Hiragana & Katakana with interactive charts, multiple choice, typing drills, and challenge overlays.
- 漢 **Kanji Dojo** (`kanji.tsx`): Set-based JLPT N5–N1 Kanji study, set cards, interactive dictionary modals, and practice flashcards.
- 語 **Vocab Dojo** (`vocab.tsx`): JLPT N5–N1 Vocabulary 10-word sets, Furigana toggles, and dictionary modals.
- 📊 **Progress** (`progress.tsx`): Comprehensive analytics, streak badges, character mastery breakdown, strength/weakness filters, and player level progression.
- ⚙️ **Settings** (`settings.tsx`): Visual theme switcher, Japanese TTS controls, audio/haptics preferences, crazy mode, and JSON backup/restore.

### Quick-Access Modal Routes
- 🌀 **Verb Conjugator** (`/conjugator`): Instant verb classification and 30+ form conjugation generator.
- 🎮 **Arcade & Zen** (`/arcade`): Hub for micro-games (Zen Breathing, Kana Wordle, Memory Match, Kana Rain).
- 📚 **Academy** (`/academy`): Structured educational guides for Japanese scripts, grammar, and stroke mnemonics.
- 🧰 **Resources** (`/resources`): Curated directory of Japanese textbooks, apps, podcasts, YouTube channels, and immersion tools.
- 🗺️ **Kana Chart Modal** (`/chart`): Full-screen interactive Hiragana and Katakana matrix chart.

---

## 2. Core Training Dojos

### 2.1 Kana Dojo (仮名道場)
- **Comprehensive Script Coverage**:
  - **Hiragana (ひらがな)**: Base (46), Dakuon/Handakuon (25), Yōon Digraphs (33).
  - **Katakana (カタカナ)**: Base (46), Dakuon/Handakuon (25), Yōon Digraphs (33).
- **Interactive Matrix Chart**:
  - Switch between Hiragana and Katakana views.
  - Filter by subgroup (Base, Dakuon, Yoon).
  - Toggle Romaji readings on/off.
  - Native Text-to-Speech (TTS) pronunciation audio per character tile.
- **Practice & Drill Modes**:
  - **Pick Mode**: 4-option multiple-choice quizzes with prompt-to-reading or reading-to-prompt formats.
  - **Type / Input Mode**: Freeform text input with real-time **WanaKana** IME conversion (automatically converts Romaji to Kana as you type).
  - **Weak Character Filtering**: Toggle to exclusively drill characters categorized as `needs-practice`.
- **Integrated Challenges**: Launch Timed Blitz or Gauntlet mode directly from the Kana Dojo header.

### 2.2 Kanji Dojo (漢字道場)
- **JLPT Level Coverage**:
  - **N5 Kanji**: 103 Kanji
  - **N4 Kanji**: 181 Kanji
  - **N3 Kanji**: 361 Kanji
  - **N2 Kanji**: 415 Kanji
  - **N1 Kanji**: 1,136 Kanji
  - *Total*: **2,196 Kanji entries** embedded offline.
- **10-Kanji Chunked Study Sets**:
  - Every JLPT level is partitioned into digestible 10-Kanji sets.
  - Star completion rating ($0-3\star$) saved in MMKV persistent storage.
  - Visual set cards with completion progress bars and status badges.
- **Kanji Set Dictionary Modal**:
  - View all 10 Kanji entries in a set at once.
  - Displays stroke count, On'yomi (katakana), Kun'yomi (hiragana), English meanings, and example vocabulary compounds.
- **Drill Engine**:
  - Multiple-choice flashcard quizzes.
  - Option to drill a single set or practice weak Kanji across the entire level.
  - Audio pronunciation playback for target readings.

### 2.3 Vocabulary Dojo (単語道場)
- **JLPT Vocab Coverage**:
  - **N5 Vocab**: 600+ words
  - **N4 Vocab**: 600+ words
  - **N3 Vocab**: 1,800+ words
  - **N2 Vocab**: 1,800+ words
  - **N1 Vocab**: 3,400+ words
  - *Total*: **8,000+ vocabulary items** offline.
- **10-Word Chunked Study Sets**:
  - Structured 10-word sets with star completion badges ($0-3\star$).
- **Vocab Set Dictionary Modal**:
  - Shows Kanji, Furigana reading, English definitions, and Part of Speech tags (Noun, Godan Verb, Ichidan Verb, I-Adjective, Na-Adjective, Adverb, Particle, Expression).
- **Drill Engine**:
  - Multiple choice quizzes with Furigana visibility toggles.
  - Audio TTS playback for words.
  - Weak Vocabulary practice filter.

---

## 3. Japanese Language Tools

### 3.1 Japanese Verb Conjugator (活用形)
- **Verb Classification Engine** (`classifyVerb.ts`):
  - Automatically identifies verb groups: **Godan** (u-verbs), **Ichidan** (ru-verbs), and **Irregular** verbs (`する`, `来る`, `ある`, `行く`).
- **30+ Conjugation Forms Generated**:
  - **Present**: Plain Affirmative/Negative (`食べる` / `食べない`), Polite (`食べます` / `食べません`).
  - **Past**: Plain Affirmative/Negative (`食べた` / `食べなかった`), Polite (`食べました` / `食べませんでした`).
  - **Te-form**: Te-form (`食べて`), Negative Te-form (`食べないで` / `表わなくて`).
  - **Potential**: `食べられる` / `読める`.
  - **Passive**: `食べられる` / `読まれる`.
  - **Causative**: `食べさせる` / `読ませる`.
  - **Causative-Passive**: `食べさせられる` / `読ませられる`.
  - **Imperative & Prohibitive**: `食べろ` / `食べるな`.
  - **Volitional**: `食べよう` / `読もう`.
  - **Conditional**: Ba-form (`食べれば`) and Tara-form (`食べたら`).
- **Interactive UI**:
  - Search bar supporting dictionary form, Kana, or Romaji input.
  - Preset chips for high-frequency verbs (`食べる`, `飲む`, `行く`, `見る`, `話す`, `買う`, `来る`, `する`).
  - Structured Verb Info Card and full Conjugation Matrix breakdown.

---

## 4. Arcade & Zen Hub (遊楽道場)

A dedicated suite of 4 interactive micro-games designed for passive learning, speed drills, and mindfulness:

| Game | Format | Description |
| :--- | :--- | :--- |
| 🍃 **Zen Breathing (息吹)** | Mindfulness | Animated breathing circle (Inhale / Hold / Exhale) paired with relaxing zen quotes and a practice timer. |
| 🔤 **Kana Wordle (語文字)** | Daily Puzzle | 5-guess daily Kana Wordle game with color-coded feedback tiles (Green: Correct, Yellow: Present, Gray: Absent) and win streak tracking. |
| 🃏 **Memory Match (神経衰弱)** | Memory Grid | Flip-and-match memory card game pairing Kana characters with their corresponding Romaji readings. Tracks total moves and time. |
| 🌧️ **Kana Rain (仮名の雨)** | Arcade Shooter | Cascading matrix-style Kana shooter where users type or select falling Kana before they reach the bottom line. Includes health bar, score multiplier, and high scores. |

---

## 5. Challenge & Survival Modes

Dynamic challenge overlays accessible across Kana, Kanji, and Vocabulary dojos:

### 5.1 Timed Blitz Mode
- **Clock Options**: 30s, 60s, or 120s rapid-fire sessions.
- **Dynamic Scoring**:
  - Score multiplier and combo streak counter.
  - Immediate visual and haptic feedback on correct/incorrect answers.
  - Post-session summary card showing final score, peak streak, accuracy, and total questions answered.

### 5.2 Gauntlet Mode
- **Survival Hearts System**:
  - **Normal**: 3 hearts (3 allowed mistakes).
  - **Hard**: 2 hearts.
  - **Instant Death**: 1 heart (1 mistake ends the run).
- **Progressive Difficulty**:
  - Score multiplier scales with correct streak.
  - High score tracking per difficulty level.

---

## 6. Progress, Mastery & Analytics Engine

- **Overview Dashboard**:
  - **Current Streak & Best Streak**: Real-time daily streak counter with fire badges.
  - **Total Questions & Accuracy**: Total questions answered, correct answers count, and overall accuracy percentage.
  - **Total XP & Player Level**: Earn XP from all training modes and level up.
- **Character Mastery Matrix**:
  - Tracks performance per character across Kana, Kanji, and Vocabulary:
    - **Mastered**: $\ge 90\%$ accuracy with $\ge 10$ attempts.
    - **Learning**: $70–89\%$ accuracy or $<10$ attempts.
    - **Needs Practice**: $<70\%$ accuracy with $\ge 5$ attempts.
- **Weakness & Strength Filtering**:
  - View Top 5 Weakest Characters (most frequently missed).
  - View Top 5 Strongest Characters.
  - Mastery distribution breakdown pie/progress bars for Kana, Kanji, and Vocab.
- **Quick Remediation**: "Drill Weakest Characters" action button to launch an instant practice session for weak items.
- **Stats Reset**: Interactive safety confirmation dialog to clear progress when needed.

---

## 7. Achievements & Gamification Engine

- **80+ Achievements** spanning 5 primary categories:
  1. 🔥 **Streaks**: *Streak Starter* (5), *Hot Streak* (10), *Streak Legend* (25), *Unstoppable* (50), *Century Streak* (100).
  2. 🌿 **Milestones**: *First Steps* (1 correct), *Century Scholar* (100), *Knowledge Seeker* (500), *Master Scholar* (1,000).
  3. 🎯 **Mastery**: Perfect accuracy milestones and character mastery unlocks.
  4. 🥋 **Dojos**: Dojo exploration and set completion achievements.
  5. 🏆 **Challenges**: High scores in Blitz mode and Gauntlet survival clears.
- **5 Rarity Tiers**: Common, Uncommon, Rare, Epic, Legendary with custom badges and XP point payouts.
- **Player Level Formula**: $\text{Level} = \lfloor \sqrt{\text{Total XP} / 100} \rfloor + 1$.
- **Live Achievement Toast**: Non-intrusive floating toast overlay triggered immediately upon unlocking an achievement.

---

## 8. Academy & Resource Vault

### 8.1 Kana Academy (学堂)
- Structured, in-app Japanese educational articles (`guides.ts`):
  - *Hiragana Foundations*: Master base characters and stroke direction.
  - *Katakana Masterclass*: Mnemonics and rules for foreign loanwords.
  - *Kanji Radicals & Components*: Decoding complex kanji.
  - *Japanese Grammar Essentials*: Subject-object-verb order, particles (`は`, `が`, `を`), and polite speech.
- Filterable by category (Writing Systems, Grammar, Kanji).
- Interactive **Guide Reader Modal** with key takeaways and structured reading sections.

### 8.2 Resource Vault (推薦集)
- Curated directory of Japanese learning resources (`resources.ts`):
  - Categories: Apps, Textbooks, YouTube Channels, Podcasts, Immersion Platforms, Grammar Tools.
  - Search bar with real-time text matching against names, descriptions, and tags.
  - Price filter: All, Free, Freemium, Paid.
  - Direct external web linking via `expo-linking` / `expo-web-browser`.

---

## 9. Settings, Theming & Personalization

### 9.1 100+ Visual Themes
- Integrated theme engine supporting light, dark, cyberpunk, pastel, nature, high-contrast, and glassmorphism styles.
- **Theme Selector Modal**: Grid view with live palette preview cards (primary, background, surface, accent).

### 9.2 Japanese Text-to-Speech (TTS)
- Powered by `expo-speech` with high-quality Japanese voice synthesis.
- Speech rate slider (0.5x slow to 1.5x fast).
- Toggle Auto-Play on question display.
- Integrated "Test Speech" button in Settings.

### 9.3 Audio & Haptics Engine
- Native touch feedback using `expo-haptics` (`ImpactFeedbackStyle.Light` and `Medium`).
- Customizable sound effect toggles for correct/incorrect answers.

### 9.4 Preferences & Crazy Mode
- Toggle Romaji visibility in Kana chart.
- Toggle Furigana visibility in vocabulary drills.
- **Crazy Mode (狂気)**: Dynamically permutes themes and font styles on every question.

### 9.5 Backup & Restore
- One-click JSON backup exporter and importer for local MMKV state (streaks, stats, character mastery matrix, achievements, and settings).

---

## 10. Technical & Offline Infrastructure

- **100% Offline-First**: All character datasets, JLPT vocabulary, Kanji definitions, guides, and resources are bundled locally inside the build binary.
- **High Performance Storage**: `react-native-mmkv` for instant synchronous read/write access to settings and user progress.
- **State Management & Caching**:
  - `zustand` for global state (theme, audio, challenges, progress, achievements, arcade).
  - `@tanstack/react-query` for dataset queries and asynchronous data loading.
- **Automated Testing Suite**:
  - Unit tests powered by `vitest` covering audio TTS, conjugator algorithms, challenge generators, progress mastery calculators, and stores.
