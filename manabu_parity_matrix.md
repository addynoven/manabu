# Manabu: Living Cross-Platform Feature Parity Matrix

**Status:** Actively Maintained & Verified  
**Updated:** 2026-10-08  
**Platforms:** Mobile (`src/` Expo SDK 54) • Web (`web/` Next.js 16 App Router) • Design (`Google Stitch 7965167331416532437`)

---

## Parity Verification Rule
Every feature is scored across 4 criteria:
1. **Contract / Schema:** Shared TypeScript models & database/API definitions.
2. **Mobile Client:** Fully implemented in `src/features/` and verified on mobile.
3. **Web Client:** Fully implemented in `web/app/` and verified in Next.js build.
4. **Stitch Visual:** Approved design screen rendered in Google Stitch.

---

## 1. Core Study & Curriculum (P0)

| Feature | Contract / API | Mobile (`src/`) | Web (`web/`) | Stitch Design | Parity Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Dojo 10-Unit Tree Path** | [x] `curriculum.json` | [x] `DojoScreen` | [x] `web/app/page.tsx` | [x] Screen #1 | **100% PARITY** |
| **3-Mode Lesson Drawer** | [x] `UnitLesson` | [x] `LessonDrawerModal` | [x] `web/app/page.tsx` modal | [x] Screen #17 | **100% PARITY** |
| **Interactive Lesson Stage** | [x] `LessonExercise` | [x] `LessonSessionModal` | [x] `web/app/page.tsx` stage | [x] Screen #18 | **100% PARITY** |
| **Revision Gate Checkpoint** | [x] `curriculum.json` | [x] `RevisionGateModal` | [x] `web/app/page.tsx` modal | [x] Screen #19 | **100% PARITY** |
| **Unit Celebration & Rewards** | [x] `curriculum.json` | [x] `UnitCelebrationModal` | [x] `web/app/page.tsx` confetti | [x] Screen #20 | **100% PARITY** |
| **Verb Conjugator Workstation** | [x] `conjugate.ts` | [x] `ConjugatorScreen` | [x] `web/app/conjugator` | [x] Screen #7 | **100% PARITY** |
| **Grammar Academy & Reader** | [x] `guides.ts` | [x] `AcademyScreen` | [x] `web/app/academy` | [x] Screen #6, #26 | **100% PARITY** |
| **Kana Matrix & Audio** | [x] `kana.ts` | [x] `KanaScreen` | [x] `web/app/kana` | [x] Screen #9 | **100% PARITY** |
| **Kanji Explorer & Modal** | [x] `kanji_n*.json` | [x] `KanjiScreen` | [x] `web/app/kanji` | [x] Screen #4 | **100% PARITY** |
| **Vocab Decks & TTS** | [x] `vocab_n*.json` | [x] `VocabularyScreen` | [x] `web/app/vocab` | [x] Screen #5, #24 | **100% PARITY** |
| **Stroke Tracing Canvas** | [x] SVG stroke paths | [x] `KanaCanvas` (Skia) | [x] `web/app/stroke` (Canvas) | [x] Screen #9, #18 | **100% PARITY** |

---

## 2. Retention, Practice & Minigames (P1)

| Feature | Contract / API | Mobile (`src/`) | Web (`web/`) | Stitch Design | Parity Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **SRS Review Station** | [x] `/api/v1/backup` | [x] `ReviewScreen` | [x] `web/app/review` | [x] Screen #3 | **100% PARITY** |
| **Cram Studio (Zero-Penalty)**| [x] `vocab_n5.json` | [x] `ReviewScreen` sheet | [x] `web/app/cram` | [x] Screen #2 | **100% PARITY** |
| **PvP Duel Lobby & Invites** | [x] `/api/v1/duels` | [x] `PvPBattleLobbyScreen` | [x] `BattleLobbyModalWeb` | [x] Screen #13 | **100% PARITY** |
| **Kanji Duel Arena** | [x] `/api/v1/duels/[id]`| [x] `KanjiDuelScreen` | [x] `KanjiDuelWeb` | [x] Screen #14 | **100% PARITY** |
| **Karuta Battle Slap Arena** | [x] `/api/v1/duels/[id]`| [x] `KarutaScreen` | [x] `KarutaBattleWeb` | [x] Screen #15 | **100% PARITY** |
| **Shiritori Word-Chaining** | [x] `/api/v1/duels/[id]`| [x] `ShiritoriScreen` | [x] `ShiritoriArenaWeb` | [x] Screen #16 | **100% PARITY** |
| **Solo Action Minigames** | [x] Engine libs | [x] Snake, Rain, Catch | [x] Snake, Catch, Rain, Wordle | [x] Screen #8 | **100% PARITY** |
| **Social & Peer Friends** | [x] `/api/v1/friends` | [x] `FriendsScreen` | [x] `web/app/friends` | [x] Screen #11 | **100% PARITY** |
| **Theme & Dark Mode** | [x] Shared Tokens | [x] System/Dark/Light | [x] Dark Dojo (Tailwind) | [x] Screen #12, #27 | **100% PARITY** |

---

## 3. Phase 2 Roadmap & Aspirations (Future Enhancements)

These are advanced concepts designed in Stitch or planned for post-MVP:

| Feature Concept | Origin / Target | Status | Next Milestone |
| :--- | :--- | :--- | :--- |
| **FSRS-5 Retention Decay Curves** | Stitch Screen #10 & #23 | Phase 2 Roadmap | Replace SM-2 with FSRS-5 algorithm |
| **Textbook Syllabus Switcher (Genki/Tobira)** | Stitch Screen #2 | Phase 2 Roadmap | Tag curriculum items with textbook chapter metadata |
| **Sapphire League Study Circles** | Stitch Screen #11 | Phase 2 Roadmap | Expand 1-to-1 friends into multi-user circles & leagues |
| **Mobile Haptic Feedback Customizer** | Stitch Screen #27 | Mobile Exclusive | Fine-tuned vibration intensity selector in Settings |
