# 🏯 Manabu (学び) — Complete Feature Inventory & Specification

> **Platform**: Expo SDK 52 / React Native 0.76 / React 19 / TypeScript / MMKV / TanStack Query  
> **Architecture**: Mobile-first feature-driven modular architecture, Expo Router file-based routing, 100% offline-first local storage, and dynamic theming.

---

## 📑 Table of Contents

1. [Navigation & Route Architecture](#1-navigation--route-architecture)
2. [Core Training Dojos](#2-core-training-dojos)
   - [2.1 Kana Dojo (仮名道場)](#21-kana-dojo-仮名道場)
   - [2.2 Kanji Dojo (漢字道場)](#22-kanji-dojo-漢字道場)
   - [2.3 Vocabulary Dojo (単語道場)](#23-vocabulary-dojo-単語道場)
3. [Grammar, Language & Import Tools](#3-grammar-language--import-tools)
   - [3.1 Japanese Verb Conjugator (活用形)](#31-japanese-verb-conjugator-活用形)
   - [3.2 Cloze Grammar Drills (穴埋め)](#32-cloze-grammar-drills-穴埋め)
   - [3.3 Japanese Text Analyzer & Tokenizer](#33-japanese-text-analyzer--tokenizer)
   - [3.4 Anki Deck Importer](#34-anki-deck-importer)
4. [Arcade & Zen Hub (11 Micro-Games & Mindfulness Modes)](#4-arcade--zen-hub-11-micro-games--mindfulness-modes)
   - [4.1 禅 • 呼吸法 (Zen Breathing)](#41-禅--呼吸法-zen-breathing)
   - [4.2 言葉パズル • Kana Wordle](#42-言葉パズル--kana-wordle)
   - [4.3 神経衰弱 • Memory Tiles](#43-神経衰弱--memory-tiles)
   - [4.4 仮名の雨 • Kana Rain](#44-仮名の雨--kana-rain)
   - [4.5 妖怪ラン • Yokai Runner](#45-妖怪ラン--yokai-runner)
   - [4.6 ヘビゲーム • Kana Snake](#46-ヘビゲーム--kana-snake)
   - [4.7 閃光ラッシュ • Flash Rush](#47-閃光ラッシュ--flash-rush)
   - [4.8 花火 • Kana Hanabi](#48-花火--kana-hanabi)
   - [4.9 キャッチ • Kana Catch](#49-キャッチ--kana-catch)
   - [4.10 バブルポップ • Kana Pop](#410-バブルポップ--kana-pop)
   - [4.11 書き順 • Stroke Tracing](#411-書き順--stroke-tracing)
5. [Challenge & Survival Modes](#5-challenge--survival-modes)
   - [5.1 Timed Blitz Mode](#51-timed-blitz-mode)
   - [5.2 Gauntlet Mode](#52-gauntlet-mode)
6. [Progress, Mastery & Analytics Engine](#6-progress-mastery--analytics-engine)
7. [Achievements & Gamification Engine](#7-achievements--gamification-engine)
8. [Academy & Resource Vault](#8-academy--resource-vault)
   - [8.1 Kana Academy (学堂)](#81-kana-academy-学堂)
   - [8.2 Resource Vault (推薦集)](#82-resource-vault-推薦集)
9. [Settings, Theming & Engine Preferences](#9-settings-theming--engine-preferences)
10. [Technical & Offline Infrastructure](#10-technical--offline-infrastructure)

---

## 1. Navigation & Route Architecture

Manabu uses Expo Router file-based routing (`src/app/`) with clean safe-area management and dynamic theme propagation:

### Main Tab Navigation (`/(tabs)`)
- 🌸 **Kana Dojo** (`index.tsx`): Hiragana and Katakana training with matrix charts, multiple choice, typing drills, and challenge shortcuts.
- 漢 **Kanji Dojo** (`kanji.tsx`): JLPT N5–N1 Kanji study sets, set cards, interactive dictionary modals, and multiple-choice drills.
- 語 **Vocab Dojo** (`vocab.tsx`): JLPT N5–N1 10-word sets, Furigana visibility toggles, and dictionary modals.
- 📊 **Progress** (`progress.tsx`): Analytics dashboard, streak counters, character mastery breakdown, strength/weakness meters, and player leveling.
- ⚙️ **Settings** (`settings.tsx`): Theme selector, Japanese TTS voice controls, sound packs, haptics, crazy mode, and JSON backup/restore.

### Quick-Access Modal & Tool Routes
- 🪓 **Verb Conjugator** (`/conjugator`): Instant verb classification and 30+ form conjugation generator.
- 穴 **Cloze Grammar Drills** (`/cloze`): Contextual particle fill-in-the-blank practice with instant explanations.
- 🎮 **Arcade & Zen Hub** (`/arcade`): 11 interactive micro-games and mindfulness exercises.
- 📚 **Academy** (`/academy`): Structured educational guides for Japanese scripts, grammar, and stroke mnemonics.
- 🧰 **Resources** (`/resources`): Curated directory of Japanese textbooks, apps, podcasts, YouTube channels, and immersion platforms.

---

## 2. Core Training Dojos

### 2.1 Kana Dojo (仮名道場)
- **Full Script Coverage (208 Kana characters)**:
  - **Hiragana (ひらがな)**: Base (46), Dakuon/Handakuon (25), Yōon Digraphs (33).
  - **Katakana (カタカナ)**: Base (46), Dakuon/Handakuon (25), Yōon Digraphs (33).
- **Interactive Matrix Chart**:
  - Switch between Hiragana and Katakana views.
  - Subgroup filters (Base, Dakuon, Yōon).
  - Romaji reading visibility toggle.
  - One-tap native Text-to-Speech (TTS) pronunciation audio per tile.
- **Practice & Drill Modes**:
  - **Pick Mode**: 4-option multiple-choice quizzes with prompt-to-reading or reading-to-prompt formats.
  - **Type / Input Mode**: Freeform text input with real-time **WanaKana** IME conversion (automatically transforms Romaji to Kana as you type).
  - **Weak Character Filtering**: Toggle to exclusively drill characters categorized as `needs-practice`.
  - **Stroke Tracing Canvas**: Freehand kana drawing practice with stroke guides.
- **Integrated Challenges**: Fast launching of Timed Blitz, Gauntlet, Cloze, Conjugator, and Arcade directly from the header strip.

### 2.2 Kanji Dojo (漢字道場)
- **JLPT Level Coverage (2,196 total Kanji)**:
  - **N5 Kanji**: 103 Kanji
  - **N4 Kanji**: 181 Kanji
  - **N3 Kanji**: 361 Kanji
  - **N2 Kanji**: 415 Kanji
  - **N1 Kanji**: 1,136 Kanji
- **10-Kanji Chunked Study Sets**:
  - Every JLPT level is partitioned into structured 10-Kanji sets.
  - Persistent $0-3\star$ completion rating saved in MMKV.
  - Visual set cards with progress bars and status badges.
- **Kanji Set Dictionary Modal**:
  - Full-set review displaying stroke count, On'yomi, Kun'yomi, English meanings, and compound vocabulary words.
- **Drill Engine & Audio Accuracy**:
  - Multiple-choice flashcard quizzes.
  - Drill single sets or practice weak Kanji across the entire level.
  - **Pure Kana Pronunciation Extraction**: Automatically extracts kana reading from `"romaji カナ"` data strings, ensuring TTS speaks exact targeted readings instead of default character pronunciations.

### 2.3 Vocabulary Dojo (単語道場)
- **JLPT Vocab Coverage (8,000+ words)**:
  - **N5 Vocab**: 600+ words
  - **N4 Vocab**: 600+ words
  - **N3 Vocab**: 1,800+ words
  - **N2 Vocab**: 1,800+ words
  - **N1 Vocab**: 3,400+ words
- **10-Word Chunked Study Sets**:
  - Structured 10-word sets with $0-3\star$ ratings.
- **Vocab Set Dictionary Modal**:
  - Displays Kanji, Furigana reading, English definitions, and Part of Speech tags (Noun, Godan Verb, Ichidan Verb, I-Adjective, Na-Adjective, Adverb, Particle, Expression).
- **Drill Engine**:
  - Multiple-choice quizzes with Furigana visibility toggles.
  - Audio TTS playback for words.
  - Weak Vocabulary practice filter.

---

## 3. Grammar, Language & Import Tools

### 3.1 Japanese Verb Conjugator (活用形)
- **Verb Classification Engine**:
  - Automatically identifies verb groups: **Godan** (u-verbs), **Ichidan** (ru-verbs), and **Irregular** verbs (`する`, `来る`, `ある`, `行く`).
- **30+ Conjugation Forms Generated**:
  - **Present**: Plain Affirmative/Negative (`食べる` / `食べない`), Polite (`食べます` / `食べません`).
  - **Past**: Plain Affirmative/Negative (`食べた` / `食べなかった`), Polite (`食べました` / `食べませんでした`).
  - **Te-form**: Te-form (`食べて`), Negative Te-form (`食べないで` / `食べなくて`).
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
  - Verb Info Card with audio playback and full Conjugation Matrix breakdown.

### 3.2 Cloze Grammar Drills (穴埋め)
- **Contextual Fill-in-the-Blank Sentences**:
  - Practice identifying correct Japanese particles in natural sentences (`は`, `が`, `を`, `に`, `で`, `と`, `へ`).
- **Educational Explanations**:
  - Detailed grammar breakdowns explaining why the correct particle functions as topic marker, direct object marker, destination, action location, companion, etc.
- **Sentence Readback**:
  - Instant Japanese TTS readback of the full sentence upon answer evaluation.

### 3.3 Japanese Text Analyzer & Tokenizer
- **Tokenization Engine**:
  - Breaks Japanese input strings into individual tokens with surface glyphs, hiragana readings, romaji transliterations, and kanji detection via WanaKana.

### 3.4 Anki Deck Importer
- **TSV Parser**:
  - Imports custom user flashcards from TSV exports (front, back, tags) directly into memory.

---

## 4. Arcade & Zen Hub (11 Micro-Games & Mindfulness Modes)

| # | Game | Format | Description |
|---|:---|:---|:---|
| 1 | 🧘 **Zen Breathing (息吹)** | Mindfulness | Soothing 4-4-4-2 breathing sphere synced to Japanese calligraphy, gentle haptic pulses, and timer tracking. |
| 2 | 🎯 **Kana Wordle (語文字)** | Daily Puzzle | 5-guess daily Kana Wordle challenge using authentic N5 vocabulary with color-coded feedback (Green, Yellow, Gray). |
| 3 | 🀄 **Memory Tiles (神経衰弱)** | Memory Grid | Flip-and-match pairs (Kana ↔ Romaji, Hiragana ↔ Katakana, Kanji ↔ Meaning) with audio pronunciation on match. |
| 4 | 🌧️ **Kana Rain (仮名の雨)** | Reflex Action | Cascading matrix-style Kana shooter where users tap the correct reading before characters hit the ground. |
| 5 | 🏃 **Yokai Runner (妖怪ラン)** | 2D Platformer | Side-scrolling runner jumping over Yokai obstacles while collecting target Kana glyphs. |
| 6 | 🐍 **Kana Snake (ヘビゲーム)** | Retro Grid | D-Pad controlled retro snake navigating a grid to eat target Kana characters. |
| 7 | ⚡ **Flash Rush (閃光ラッシュ)** | Speed Trial | High-speed instant recall flashcard time trial with streak multipliers. |
| 8 | 🎆 **Kana Hanabi (花火)** | Interactive Visual | Tap anywhere in the night sky to launch vibrant Japanese Kana fireworks with dynamic particle explosions. |
| 9 | 🧺 **Kana Catch (キャッチ)** | Paddle Catcher | Catch falling target Kana tiles into a moving paddle basket using left/right controls. |
| 10 | 🫧 **Kana Pop (バブルポップ)** | Bubble Popper | Pop floating Kana bubbles with immediate native audio playback and pop effects. |
| 11 | ✍️ **Stroke Tracing (書き順)** | Stroke Canvas | Interactive stroke order drawing canvas with step-by-step guidance. |

---

## 5. Challenge & Survival Modes

### 5.1 Timed Blitz Mode
- **Clock Options**: 30s, 60s, or 120s rapid-fire sessions.
- **Dynamic Scoring**: Score multiplier, combo streak counter, and dynamic timer badges (`theme.accentLight`, `theme.errorLight`).
- **Summary Analytics**: Post-session summary with final score, peak streak, accuracy, and total questions answered.

### 5.2 Gauntlet Mode
- **Survival Hearts System**:
  - **Normal**: 3 hearts (3 mistakes allowed).
  - **Hard**: 2 hearts.
  - **Instant Death**: 1 heart (single mistake ends run).
- **Progressive Difficulty**: Streak-based score multipliers and high score tracking per difficulty.

---

## 6. Progress, Mastery & Analytics Engine

- **Overview Dashboard**:
  - Current streak and best streak counters with fire badges.
  - Total questions answered, correct count, and overall accuracy percentage.
  - Total XP earned and player level progression.
- **Character Mastery Matrix**:
  - Categorizes character proficiency across Kana, Kanji, and Vocabulary:
    - **Mastered**: $\ge 90\%$ accuracy with $\ge 10$ attempts.
    - **Learning**: $70–89\%$ accuracy or $<10$ attempts.
    - **Needs Practice**: $<70\%$ accuracy with $\ge 5$ attempts.
- **Strength & Weakness Meters**:
  - Dynamic theme-styled badges (`theme.errorLight` / `theme.successLight`).
  - Displays Top 5 Weakest Characters and Top 5 Strongest Characters.
  - "Drill Weakest Characters" one-tap remediation launcher.
- **Stats Reset**: Interactive safety confirmation dialog to clear progress.

---

## 7. Achievements & Gamification Engine

- **80+ Achievements** across 5 categories:
  1. 🔥 **Streaks**: *Streak Starter* (5), *Hot Streak* (10), *Streak Legend* (25), *Unstoppable* (50), *Century Streak* (100).
  2. 🌿 **Milestones**: *First Steps* (1 correct), *Century Scholar* (100), *Knowledge Seeker* (500), *Master Scholar* (1,000).
  3. 🎯 **Mastery**: Accuracy milestones and character mastery unlocks.
  4. 🥋 **Dojos**: Exploration and set completion achievements.
  5. 🏆 **Challenges**: High scores in Blitz and Gauntlet survival clears.
- **5 Rarity Tiers**: Common, Uncommon, Rare, Epic, Legendary with custom badge styling and XP point payouts.
- **Player Level Formula**: $\text{Level} = \lfloor \sqrt{\text{Total XP} / 100} \rfloor + 1$.
- **Live Achievement Toast**: Non-intrusive animated toast notification immediately upon unlocking an achievement.

---

## 8. Academy & Resource Vault

### 8.1 Kana Academy (学堂)
- Structured in-app educational guides:
  - *Hiragana Foundations*: Master base characters and stroke direction.
  - *Katakana Masterclass*: Foreign loanwords and transcription nuances.
  - *Kanji Radicals & Components*: Breaking down complex ideograms.
  - *Japanese Grammar Essentials*: SOV structure, particles, and politeness levels.
- Interactive **Guide Reader Modal** with key takeaways, inline audio buttons, and structured reading sections.

### 8.2 Resource Vault (推薦集)
- Curated directory of 25+ verified learning tools:
  - Categories: Apps, Textbooks, YouTube Channels, Podcasts, Immersion Platforms, Grammar Tools.
  - Real-time search by name, description, or tags.
  - Price filter: All, Free, Freemium, Paid.
  - One-tap external browser linking via `expo-linking` / `expo-web-browser`.

---

## 9. Settings, Theming & Engine Preferences

### 9.1 12 Handcrafted Japanese Theme Palettes
- Dynamic theme engine propagating tokens across all screens:
  - Light, Dark, Matcha, Sakura, Edo Navy, Night Market, Wabi-Sabi, Cyberpunk, etc.
  - Theme Selector Modal with live palette preview cards (primary, background, surface, accent).

### 9.2 Japanese Text-to-Speech (TTS)
- Native speech engine powered by `expo-speech` with `ja-JP` voice matching.
- Speed slider (0.5x slow to 1.5x fast) and pitch controls.
- Auto-play toggle on question display.
- In-settings voice test button.
- **Pure Kana Pronunciation Engine**: Automatically parses and extracts kana readings from compound data entries so TTS never mispronounces kanji or mixes romaji phonemes.

### 9.3 Sound Packs & Haptics
- **4 Tactile Sound Packs**: Wooden, Mechanical, Digital, and Bubble haptic profiles.
- Native touch feedback using `expo-haptics` (`ImpactFeedbackStyle.Light`, `Medium`, `Heavy`, `Selection`).

### 9.4 Study Preferences & Crazy Mode
- Romaji visibility toggle for Kana charts.
- Furigana visibility toggle for vocabulary drills.
- **Crazy Mode (狂気)**: Dynamically randomizes themes and typography on every new question for sensory training.

### 9.5 Data Portability (Backup & Restore)
- One-click JSON backup export and import for all MMKV persistent storage (streaks, stats, character mastery matrix, achievements, and settings).

---

## 10. Technical & Offline Infrastructure

- **100% Offline-First**: All 2,196 Kanji, 8,000+ vocabulary words, Kana charts, guides, and resources are bundled locally in the build.
- **High-Performance Storage**: `react-native-mmkv` for instantaneous synchronous read/write access.
- **Global State Management**: `zustand` stores powering themes, settings, challenges, progress, achievements, and arcade sessions.
- **Automated Verification**: Vitest test suite (77 tests, 1,091 assertions) and TypeScript strict typechecking.
