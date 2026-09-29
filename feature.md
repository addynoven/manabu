# 🏯 KanaDojo / Manabu — Complete Feature Inventory & Specification

> **Source Analysis**: Extracted directly from the reference codebase in [`vision/kana-dojo`](file:///home/neon/programs/android/react_native/manabu/vision/kana-dojo), covering architectural modules, UI systems, training modes, gamification, and auxiliary tools.

---

## 📑 Table of Contents

1. [Core Training Dojos](#1-core-training-dojos)
2. [Game & Practice Modes](#2-game--practice-modes)
3. [Auto-Learning & SRS Engine](#3-auto-learning--srs-engine)
4. [Mastery, Statistics & Progress Tracking](#4-mastery-statistics--progress-tracking)
5. [Achievements & Gamification Engine](#5-achievements--gamification-engine)
6. [Grammar & Tools](#6-grammar--tools)
7. [Experimental / Zen Dojo Modes](#7-experimental--zen-dojo-modes)
8. [Theming, Audio & Customization (Preferences)](#8-theming-audio--customization-preferences)
9. [Educational Content, Resources & Community](#9-educational-content-resources--community)
10. [Data Backup, Import/Export & Offline Infrastructure](#10-data-backup-importexport--offline-infrastructure)
11. [Cross-Platform Mobile Implementation Roadmap](#11-cross-platform-mobile-implementation-roadmap)

---

## 1. Core Training Dojos

KanaDojo is organized into three foundational study pillars:

### 1.1 Kana Dojo (仮名道場)
- **Hiragana (ひらがな)**:
  - **Base (46 characters)**: `あ・か・さ・た・な・は・ま・や・ら・わ・ん`
  - **Dakuon / Handakuon (25 characters)**: `が・ざ・だ・ば・ぱ` rows
  - **Yōon (33 digraph combinations)**: `きゃ・しゃ・ちゃ・にゃ・ひゃ・みゃ・りゃ・ぎゃ・じゃ・びゃ・ぴゃ`
- **Katakana (カタカナ)**:
  - **Base (46 characters)**: `ア・カ・サ・タ・ナ・ハ・マ・ヤ・ラ・ワ・ン`
  - **Dakuon / Handakuon (25 characters)**: `ガ・ザ・ダ・バ・パ`
  - **Yōon (33 digraphs)**: `キャ・シャ・チャ・ニャ・ヒャ・ミャ・リャ・ギャ・ジャ・ビャ・ピャ`
  - **Foreign Sounds / Extended Katakana (26+ combinations)**: `ファ・フィ・フェ・フォ・ティ・ディ・デュ・ウィ・ウェ・ウォ・シェ・ジェ・チェ・ツァ・ツィ・ツェ・ツォ・ヴァ・ヴィ・ヴ・ヴェ・ヴォ`
- **Interactive Character Grid / Chart**:
  - Full matrix layout for Hiragana and Katakana.
  - Subgroup filtering (Base, Dakuon, Yoon, Foreign).
  - Audio pronunciation playback per tile.
  - Romaji toggle on/off.
  - Subset dictionary drill-down view (`/kana-chart` and subset routes).

### 1.2 Kanji Dojo (漢字道場)
- **JLPT Level Coverage**:
  - **N5**: ~103 Kanji
  - **N4**: ~181 Kanji
  - **N3**: ~361 Kanji
  - **N2**: ~415 Kanji
  - **N1**: ~1,136 Kanji
- **Kanji Unit & Subunit Structure**:
  - Grouped into 10-kanji digestible bite-sized sets.
  - Progress tracking per set (0–3 stars based on accuracy & completion).
- **Kanji Data Attributes**:
  - Kanji glyph, On'yomi readings (katakana), Kun'yomi readings (hiragana), English meanings, stroke count, JLPT level, radical, example compound words.
- **Kanji Set Dictionary Modal**:
  - Detailed card view showing stroke order, on/kun readings, and example vocabulary compounds.

### 1.3 Vocabulary Dojo (単語道場)
- **JLPT Vocabulary Tiers**:
  - **N5 Vocab**: ~665 words
  - **N4 Vocab**: ~634 words
  - **N3 Vocab**: ~1,818 words
  - **N2 Vocab**: ~1,836 words
  - **N1 Vocab**: ~3,463 words
- **Vocabulary Unit Structure**:
  - Divided into 10-word sets per unit.
  - Set star rating (0–3 stars).
- **Vocabulary Data Attributes**:
  - Word (Kanji/Kana), Furigana reading, Romaji, English definitions, Part of speech (noun, godan verb, ichidan verb, i-adjective, na-adjective, adverb, particle, expression).

---

## 2. Game & Practice Modes

Varied cognitive training pathways to build recall speed and writing accuracy:

| Mode | Format | Cognitive Task |
| :--- | :--- | :--- |
| **Pick (Multiple Choice)** | 4 Options | Display Japanese Prompt (Kana/Kanji/Word) → Select correct English/Romaji |
| **Reverse-Pick** | 4 Options | Display English/Romaji Prompt → Select correct Japanese glyph/word |
| **Input / Type** | Freeform text | Display Japanese Prompt → Type correct Romaji / reading into text input |
| **Reverse-Input** | Freeform text | Display English/Romaji → Type Japanese (with virtual IME / WanaKana conversion) |
| **Tiles Mode** | Interactive grid | Match kana/kanji tiles to their corresponding readings by tapping pairs |
| **Blitz Mode** | Timed rush | 30s, 60s, or 120s rapid-fire session. Test raw recall under clock pressure |
| **Gauntlet Mode** | Survival | Multi-level boss run with limited lives (Hearts: Normal, Hard, Instant Death) |
| **Crazy Mode (狂気)** | Randomized chaos | Randomizes theme, fonts, and quiz permutations dynamically on every question |

---

## 3. Auto-Learning & SRS Engine

- **Smart Set Recommender**:
  - Automatically identifies sets with lowest stars (<3 stars) or lowest accuracy (<70%).
  - Automatically activates handoff sessions (`writeAutoLearningHandoff`) that guide the user to practice their weakest rows/sets.
- **Character Weakness Detection**:
  - Tracks every correct and incorrect attempt per character.
  - Categorizes characters into:
    - **Mastered**: $\ge 90\%$ accuracy with $\ge 10$ attempts.
    - **Learning**: Mid-tier accuracy or $<10$ attempts.
    - **Needs Practice**: $<70\%$ accuracy with $\ge 5$ attempts.
- **Dynamic Session Generation**:
  - Prioritizes characters with `needs-practice` status during quiz generation.
  - Distractor generation: Selects believable incorrect options from the active or adjacent character sets.

---

## 4. Mastery, Statistics & Progress Tracking

- **Overview Dashboard**:
  - Total training sessions completed.
  - Total correct vs. incorrect answers.
  - Overall accuracy percentage.
  - Current streak & best streak (all-time).
  - Total unique characters encountered.
  - Total practice time (milliseconds tracked and formatted).
- **Character Mastery Breakdown**:
  - Tabbed filtering: All / Kana / Kanji / Vocabulary.
  - Top 5 Most Mastered characters.
  - Top 5 Most Difficult characters (frequently missed).
  - Full character-by-character table/grid with accuracy badge and attempt count.
- **Timed Mode & Gauntlet Analytics**:
  - Timed Blitz accuracy, correct count, best streak per duration.
  - Gauntlet run count, win rate, best streak, fastest clear time.
- **Set Progress Persistence**:
  - Saves star ratings ($0-3 \star$) per unit set in persistent storage (`MMKV` on mobile, `localStorage` on web).
  - Visual completion rings and set badges on selection menus.

---

## 5. Achievements & Gamification Engine

Over **80+ achievements** across **12 categories** with 5 rarity tiers (`Common`, `Uncommon`, `Rare`, `Epic`, `Legendary`) and a global points/leveling progression system:

### Categories
1. **Streak Achievements (9)**:
   - *Streak Starter* (5 streak), *Hot Streak* (10), *Streak Legend* (25), *Unstoppable* (50), *Streak Warrior* (75), *Century Streak* (100), *Streak Titan* (150), *Streak Immortal* (200), *Streak God* (500).
2. **Milestone Achievements (10)**:
   - *First Steps* (1 correct), *Century Scholar* (100), *Knowledge Seeker* (500), *Master Scholar* (1,000), *Dedicated Scholar* (2,500), *Legendary Master* (5,000), *Grand Master* (10,000), *Legendary Scholar* (25,000), *Point Collector* (1,000 pts), *Point Master* (10,000 pts).
3. **Consistency Achievements (6)**:
   - Session completion milestones (10, 25, 50, 100, 250, 500 sessions).
4. **Mastery Achievements (3)**:
   - Flawless sessions ($100\%$ accuracy on sessions with $\ge 20$ questions).
5. **Exploration Achievements (7)**:
   - Training variety (using all 3 dojos, using all 4 game modes, training 7 days in a row, night owl training, early bird training).
6. **Kana Specific (8)**:
   - Hiragana base mastery, Katakana base mastery, Dakuon mastery, Yoon mastery, Foreign sounds mastery.
7. **Kanji Specific (10)**:
   - N5 complete, N4 complete, N3 complete, N2 complete, N1 complete.
8. **Vocabulary Specific (6)**:
   - JLPT N5–N1 vocab milestones.
9. **Gauntlet Achievements (10)**:
   - First Gauntlet victory, Hard mode clear, Instant Death clear, Flawless Gauntlet (no lives lost).
10. **Blitz Achievements (8)**:
    - High scores in 30s, 60s, 120s Blitz modes.
11. **Speed Achievements (5)**:
    - Lightning answers ($<800\text{ms}$ correct response times).
12. **Fun & Secret Achievements (10)**:
    - Easter eggs, theme cycling, midnight sessions, streak recovery.

### Leveling & Rewards
- Each unlocked achievement awards points (10 to 3,000 pts).
- Level formula: $\text{Level} = \lfloor \sqrt{\text{TotalPoints} / 100} \rfloor + 1$.
- Unlocks special themes and visual badges.

---

## 6. Grammar & Auxiliary Tools

Beyond basic drills, KanaDojo includes high-utility Japanese language tooling:

### 6.1 Japanese Verb Conjugator (活用形)
- **Verb Classification Engine**:
  - Godan verbs (五段動詞 / u-verbs).
  - Ichidan verbs (一段動詞 / ru-verbs).
  - Irregular verbs (不規則動詞: する, 来る, ある, 行く, honorific verbs).
- **Conjugation Forms Generated**:
  - Present Affirmative / Negative (Plain & Polite - ます/ません).
  - Past Affirmative / Negative (Plain & Polite - た/なかった/ました/ませんでした).
  - Te-form (て形) & Negative Te-form (なくて形).
  - Potential form (可能形 - 読める / 食べられる).
  - Passive form (受身形 - 読まれる / 食べられる).
  - Causative form (使役形 - 読ませる / 食べさせる).
  - Causative-Passive (使役受身 - 読ませられる).
  - Imperative (命令形) & Prohibitive (禁止形).
  - Volitional (意向形 - 読もう / 食べよう).
  - Conditional (ば形 & たら形).
- **Interactive UI**:
  - Verb lookup input with romaji/kanji/kana auto-detection.
  - Detailed classification badge, stem/ending breakdown, and full conjugation matrix.

### 6.2 Anki Deck Converter
- **File Parser**:
  - In-browser local parser for `.apkg`, `.tsv`, `.sqlite`, `.colpkg`, `.anki2`.
- **Text & Structure Extraction**:
  - Strips HTML tags, sound tokens, and media references.
  - Detects card types (Basic, Cloze, Reverse).
  - Preserves deck hierarchy and tags.
- **Export**:
  - Converts decks into structured JSON ready for custom study sessions.

### 6.3 Japanese Translator & Text Analyzer
- Text translation between Japanese and English.
- Tokenization & morphological breakdown (Kuromoji / Kuroshiro):
  - Part-of-speech tagging.
  - Furigana generation.
  - Romaji pronunciation.
- Translation history and vocabulary bookmarking.

---

## 7. Experimental / Zen Dojo Modes

30+ gamified and relaxing micro-experiences for passive learning and stress-free retention:

| Category | Modes | Description |
| :--- | :--- | :--- |
| **Mindfulness & Ambient** | `ZenMode`, `BreathingExercise`, `AmbientMode`, `ZenBonsai` | Calming background audio, breathing circles synced to kana strokes, growing digital bonsai. |
| **Particle & Visuals** | `KanaRain`, `KanaConstellation`, `Hanabi`, `KanaWave`, `KanaNebula`, `KanaOrbit`, `KanaPulse` | Matrix-style cascading characters, fireworks that explode into kana upon tap, interactive orbital physics. |
| **Mini-Games** | `KanaPop`, `KanaSnake`, `KanaWordle`, `KanaCatch`, `KanaSlot`, `KanaBounce`, `FlashRush`, `SpeedTyping` | Bubble popping games, classic Snake eating correct kana, 5-guess kana Wordle, paddle bounce reflex tests. |
| **Cognitive Drills** | `MemoryPalace`, `KanaTrace`, `KanaShadow`, `KanaStack`, `DailyHaiku`, `KanaFortune` | Stroke tracing, memory matching cards, haiku of the day with vocabulary breakdown. |

---

## 8. Theming, Audio & Customization (Preferences)

### 8.1 100+ Visual Themes
- Base palettes categorized into Light, Dark, Pastel, Cyberpunk, Nature, and High-Contrast groups.
- Custom CSS variable engine:
  - `backgroundColor`, `cardColor`, `borderColor`, `mainColor`, `mainColorAccent`, `secondaryColor`, `secondaryColorAccent`.
- Custom Theme Builder: Allows users to create, save, and export bespoke color palettes.
- Special Themes: Glassmorphism / Frosted Glass mode (`isGlassMode`), Kyoki (Crazy Mode).

### 8.2 28 Japanese Typography Styles
- Google Fonts & specialized Japanese typefaces (Klee One, Zen Maru Gothic, Yuji Boku, Noto Sans JP, Noto Serif JP, Kaisei Tokumin, Dela Gothic One, etc.).
- Switchable font preview cards in Settings.

### 8.3 Audio & Haptics Engine
- Native / Web Audio effects:
  - Tap / Click sound variations (Wooden, Mechanical, Digital, Bubble).
  - Success chime & error buzzer.
  - Streak celebration audio.
- Japanese Text-to-Speech (TTS):
  - Native Web Speech API / Android TTS engine integration.
  - Auto-play pronunciation toggle on question reveal.
- Mobile Haptics:
  - Impact haptics on tap (`light`, `medium`).
  - Notification haptics on correct/incorrect (`success`, `error`, `warning`).

### 8.4 Behavior Settings
- Reading display format: Romaji vs. Kana.
- Silent Mode toggle.
- Auto-advance on correct answer (0ms, 200ms, 500ms delay).
- Furigana visibility toggle.
- Experimental modes toggle.

---

## 9. Educational Content, Resources & Community

- **Kana Academy (Blog & Learning Guides)**:
  - In-depth articles: "How to Learn Hiragana in 3 Days", "Mastering Katakana Mnemonics", "Kanji Radicals Explained".
  - Stroke order diagrams and mnemonic memory aids.
- **Curated Resource Directory**:
  - Filterable by Category: Apps, Textbooks, Podcasts, YouTube, Games, Immersion, Reading.
  - Filterable by Level: Beginner, Intermediate, Advanced, All-Levels.
  - Filterable by Price: Free, Freemium, Paid, Subscription.
- **Community & Open Source Hub**:
  - Live GitHub metrics widget.
  - Patch notes modal and changelog feed.
  - Discord community integration and contribution guidelines.

---

## 10. Data Backup, Import/Export & Offline Infrastructure

- **100% Offline-First**:
  - All character datasets, JLPT vocabularies, and Kanji definitions bundled locally.
  - Zero required server authentication or external cloud dependencies.
- **One-Click JSON Backup & Restore**:
  - Exports complete user state: practice history, streaks, character mastery matrix, custom themes, unlocked achievements, and set progress.
  - Imports backup JSON with schema validation and sanitization.

---

## 11. Cross-Platform Mobile Implementation Roadmap

Mapping the vision to our native Expo / React Native architecture (`/src`):

```
src/
├── core/                       # Theme, storage (MMKV), query, audio, haptics, UI primitives
├── features/
│   ├── kana/                   # Kana Dojo (Hiragana/Katakana, Cards, Chart, Blitz, Gauntlet)
│   ├── kanji/                  # Kanji Dojo (N5–N1, Cards, Drill, Detail Modal)
│   ├── vocabulary/             # Vocab Dojo (N5–N1, 10-word sets, Quiz)
│   ├── progress/               # Stats, Mastery Matrix, Weakness Filter, Auto-Learning
│   ├── achievements/           # 80+ Achievements engine, Levels, Confetti celebration
│   ├── conjugator/             # Japanese Verb Conjugation engine & UI
│   ├── experiments/            # Zen mode, KanaRain, KanaWordle, Mini-games
│   └── settings/               # Themes (100+), Fonts, Backup/Restore, Audio/Haptic toggles
```
