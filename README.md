<p align="center">
  <img src="assets/images/icon.png" alt="Manabu" width="120" />
</p>

<h1 align="center">学ぶ Manabu</h1>

<p align="center">
  <strong>Master Japanese — from first Kana to JLPT N1</strong>
  <br />
  Offline-first mobile app with stroke tracing, spaced repetition, and arcade games
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Expo_SDK-57-000020?logo=expo" alt="Expo SDK 57" />
  <img src="https://img.shields.io/badge/React_Native-0.86.3-61DAFB?logo=react" alt="React Native 0.86.3" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react" alt="React 19.2.3" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/Tests-200%2B_passing-brightgreen" alt="Tests" />
</p>

---

## 📸 Screenshots

<div align="center">

| Dojo | Review | Arcade | Profile |
|:----:|:------:|:------:|:-------:|
| <img src=".github/screenshots/dojo.png" width="180" /> | <img src=".github/screenshots/review.png" width="180" /> | <img src=".github/screenshots/arcade.png" width="180" /> | <img src=".github/screenshots/profile.png" width="180" /> |

</div>

---

## ✨ Features

### 📖 Learn (Dojo)
- **30-week master curriculum** — structured path from absolute beginner to N1
- **Kana chart** with Hiragana & Katakana tabs, each with interactive stroke tracing
- **2,495 Kanji** across all JLPT levels (N5 → N1) with meanings, readings, and stroke order
- **Vocabulary drills** with Japanese TTS pronunciation
- **Verb conjugator** — Godan, Ichidan, and irregular forms
- **7-day unit pacing & cumulative revision checkpoint** — validates retention across all prior units before unlocking new curriculum days

### ✍️ Stroke Tracing
- Authentic **KanjiVG** vector data for every Kana and Kanji character
- Real-time Bézier path evaluation — stroke direction, order, and accuracy
- Visual stroke-by-stroke guided animation

### 🔁 Spaced Repetition (SRS)
- **5-stage WaniKani retention system**:
  - **Apprentice (I–IV)**: 4 hours → 8 hours → 24 hours → 48 hours
  - **Guru (I–II)**: 7 days → 14 days
  - **Master**: 30 days
  - **Enlightened**: 120 days
  - **Burned**: Mastered / permanent retention
- Smart review queue strictly scoped to active/unlocked curriculum lessons
- Vocabulary decks organized by curriculum unit

### 🎮 Arcade (10 Playable Games & 9 Dedicated Engines)
| Game | Type | Engine |
|------|------|--------|
| ⚔️ Kanji Duel | 1v1 battle vs AI bots with reaction-based critical hits | `kanjiDuelEngine.ts` |
| 🎴 Karuta Battle | Japanese card-slap audio/visual duel | `karutaEngine.ts` |
| 🔤 Shiritori Arena | AI word-chain duel with reading/meaning validation | `shiritoriEngine.ts` |
| 🎣 Kana Catch | Falling character basket catcher with gravity physics | `catchEngine.ts` |
| ⚡ Flash Survival | Rapid-fire timed rounds with lives & progressive difficulty | `survivalEngine.ts` |
| ⏱️ Flash Rush | 60-second high-speed recognition sprint | Standalone view (`FlashRushView.tsx`) |
| 🐍 Kana Snake | Classic snake eating kana characters with dynamic targets | `snakeEngine.ts` |
| 🟩 Kotoba | 5-letter Japanese Wordle with color-coded feedback | `wordleEngine.ts` |
| 🧠 Memory Match | Card-flip pair matching (kana-romaji, kanji-meaning) | `memoryEngine.ts` |
| 🌧️ Falling Rain | Matrix-style vertical rain with character defense | `rainEngine.ts` |

Plus **Daily Gauntlet Challenges** (`dailyChallengeGenerator.ts`), stroke tracing integration, and high score tracking.

### 👤 Profile & Progression
- Customizable avatar & display name
- **Martial arts belt ranking** system (Novice White Belt → Grandmaster) with exact level math
- **Dual currency clarity**: Total Study XP (daily drill effort) vs Dojo Belt Points (rank progression)
- Daily XP study goals (Casual 20 XP / Standard 50 XP / Intense 100 XP)
- **Compact 3-column achievement showcase** with unlocked-first sorting and tap-to-inspect modal sheet
- **2×2 Priority weakness grid** with direct 1-tap reinforcement into SRS review
- Curriculum mastery breakdown for Kana, Kanji, and Core Vocabulary
- **Two-step hardened reset confirmation** protecting all local study data

---

## 🏗️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React Native 0.86.3 + Expo SDK 57 (New Architecture / React 19.2.3) |
| Language | TypeScript (strict mode, zero `any`) |
| Navigation | Expo Router v57 (file-based routing) |
| State | Zustand v5 + MMKV (synchronous persistence) |
| Validation | Zod at all data boundaries |
| Audio | expo-speech (Japanese TTS) |
| Graphics | react-native-svg 15.15 (stroke rendering) |
| Animations | react-native-reanimated v4.5.1 |
| Haptics | expo-haptics |
| Icons | lucide-react-native |
| Testing | Vitest + happy-dom (33 suites, 201 tests) |

---

## 📁 Project Structure

```
src/
├── app/(tabs)/              # File-based routes (4-tab layout)
├── core/                    # Theme palettes, TTS audio, MMKV storage
└── features/                # Everything co-located by feature
    ├── kana/                # Chart, KanjiVG stroke tracing, recognition
    ├── kanji/               # N5–N1 data, sets, dictionary, trace modal
    ├── vocabulary/          # JLPT vocab lists & drills
    ├── dojo/                # Learning path, lessons, checkpoints
    ├── review/              # SRS engine & review queue
    ├── progress/            # Mastery store, streaks, XP, backup/restore
    ├── arcade/              # 7 game engines, daily challenges
    ├── achievements/        # Trophies, player level, belt ranks
    ├── profile/             # Identity, stats, goals
    ├── conjugator/          # Verb inflection tables
    ├── challenges/          # Blitz & Gauntlet modes
    ├── academy/             # Grammar guides & articles
    ├── settings/            # Appearance, voice, furigana, haptics
    └── resources/           # Quick reference sheets
```

> **Architecture:** Feature-driven modular monolith. Everything related to a feature (components, hooks, data, tests) lives in its own directory. No layer-first `controllers/` `services/` patterns.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Android Studio or Xcode (for dev builds)
- An Android/iOS device or emulator

### Install & Run

```bash
# Clone the repo
git clone https://github.com/addynoven/manabu.git
cd manabu

# Install dependencies
npm install

# Start the development server
npx expo start --dev-client

# Build and run on Android
npx expo run:android

# Build and run on iOS
npx expo run:ios
```

> ⚠️ **This app uses native modules and does NOT work with Expo Go.** You need a development build.

### Useful Commands

```bash
npx expo install <package>   # Always use this — ensures SDK-compatible versions
npx tsc --noEmit             # Type check
npm test                     # Run test suites (Vitest)
npx expo lint                # ESLint
```

---

## 🧪 Testing

```bash
npm test
```

- **33 test suites**, **200+ tests**
- Integration-first approach — tests verify module behavior, not implementation details
- Tests live in `__tests__/` directories within each feature

---

## 🎨 Themes

Manabu ships with 4 built-in themes:

- 🌃 **Tokyo Night** (default dark)
- 🌅 **Kyoto Sunset** (warm dark)
- 🖤 **OLED Dark** (pure black)
- ☀️ **Light**

Theme can be changed from Profile → Theme & Appearance.

---

## 🗺️ Roadmap

- [ ] iOS build & TestFlight release
- [ ] Cloud sync & backup
- [ ] Grammar lessons expansion
- [ ] Listening comprehension exercises
- [ ] Community leaderboards
- [ ] Sentence construction drills

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please follow the existing code style:
- Feature-first file organization
- TypeScript strict mode, no `any`
- Integration tests for new features
- Small, focused PRs

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [KanjiVG](https://kanjivg.tagaini.net/) — Stroke order vector data
- [Expo](https://expo.dev/) — React Native framework
- [WaniKani](https://www.wanikani.com/) — SRS inspiration
- [Duolingo](https://www.duolingo.com/) — Gamification patterns

---

<p align="center">
  Built with ❤️ for Japanese learners everywhere
  <br />
  <strong>学ぶ — to learn</strong>
</p>
