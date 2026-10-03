# 🏯 Manabu (学び) — Version 3 Architecture Audit, Strategy & Team Response

> **Target Repository**: `manabu` (Expo SDK 57 / React Native 0.86.3 / React 19 / TypeScript)  
> **Document Purpose**: Clean Technical Audit, Architectural Strategy & V3 Implementation Plan  

---

## Executive Overview & Architectural Shift

This report synthesizes the codebase state and defines the implementation strategy for **Version 3 (Social & Community Features)**.

### Key Architectural Decisions for V3
1. **Friends-Only Focus (No Public Directories)**: Drop global user directories and global activity feeds. Public user enumeration is disabled in rules (`list: if false`).
2. **Privacy First (`profiles/{uid}`)**: Split public data into a minimal `/profiles/{uid}` containing user-chosen display names (no email, no Google photo URL, no personal data), plus a private `/users/{uid}/private/sync` for complete backup snapshots ("Lost Phone Guarantee").
3. **Friend Code Discovery (`friend_codes/{code}`)**: Add friends using an 8-character code generated from an unambiguous alphabet (`A-HJ-NP-Z2-9`). No search index or deep links required.
4. **Rules-Only Backend (0 Cloud Functions)**: Friendships and profile setup are created in single atomic batch writes (`writeBatch` / `runTransaction`). This ensures the app operates entirely within the **Firebase Spark (Free Plan)** tier.
5. **Accountability & Fresh Competition**: Track `weeklyXp` alongside `weekId` (ISO week, e.g. `"2026-W40"`). Leaderboards reset every Monday 00:00 UTC, preventing permanent score inflation.

---

## 1. Environment & Configuration Audit

- **SDK & Runtime**: Expo SDK 57 (`~57.0.25`), React Native `0.86.3`, React `19.2.3`, TypeScript `~6.0.3`.
- **Firebase SDK**: Client JS SDK `firebase@^12.19.0` (not `@react-native-firebase/*`).
- **Deep Linking & Schemes**: `expo-linking@~57.0.11` and `expo-web-browser@~57.0.3` installed. Custom URL scheme is `"manabu"` (`app.json`).
- **Configuration Files on Disk**:
  - `firebase.json` (Configures web output, project build parameters)
  - `.firebaserc` (Project ID: `manabu-japanese-9007`)
  - `firestore.indexes.json`
  - `firestore.rules` (Current 22-field whitelist rules)
  - `firestore.rules.v3-draft` (New V3 friends-only rules)
  - `social.model.ts` (Zod schemas for V3 profiles, friend codes, friend requests, friendships, and arcade challenges)

---

## 2. Real Score Caps & Minigame Mechanics Analysis

Analysis of all action and arcade minigame engines in `src/features/arcade/lib/`:

| Minigame Engine | File Path | Realistic Player Max Score | `firestore.rules.v3-draft` Cap | Mechanics & Scoring Summary |
| :--- | :--- | :--- | :--- | :--- |
| 🌧️ **Kana Rain** | `rainEngine.ts` | **~5,000 pts** | **15,000 pts** | Drops fall at increasing speed (`multiplier 1.45`). Correct catches yield 45 pts at 4x combo. |
| 🐍 **Kana Snake** | `snakeEngine.ts` | **~15,000 pts** | **50,000 pts** | 10x15 grid (150 cells). Turbo difficulty + 3x combo yields 60 pts/food + 50 pt word bonuses. |
| 🧺 **Kana Catch** | `catchEngine.ts` | **~22,500 pts** | **50,000 pts** | Catcher paddle moving across 4 columns. Turbo speed yields 450 pts/catch at 3x combo + 250 pt star bonuses. *(Needs Game-Over screen prior to challenges)*. |
| ⚡ **Flash Survival**| `survivalEngine.ts` | **~30,000 pts** | **100,000 pts** | Continuous countdown timer (15s start, 30s cap). Hell mode + fast reflex (<1s) yields 550 pts per question. |
| 🎯 **Kana Wordle** | `wordleEngine.ts` | **1 guess win** | N/A | 3-kana wordle. Currently uses random selection; Wordle challenges will be tied to daily challenge seeds. |
| 📅 **Daily Challenge**| `dailyChallengeGenerator.ts` | **5/5 correct (100%)** | **100,000 pts** | Fully deterministic 5-question daily challenge seeded by date string (`"YYYY-MM-DD"`) using `cyrb128` + `sfc32` PRNG. |

---

## 3. Data Layer & Cloud Sync Audit

### Cloud Sync (`src/features/sync/services/cloudSync.service.ts`)
- **Storage Layer**: 100% offline-first local storage via MMKV (`react-native-mmkv`), wrapped by an invisible reactive cloud sync listener.
- **Sync Triggers**:
  1. On auth state changes (`syncOnAuthChange`).
  2. Debounced background sync (2-second delay via `triggerDebouncedSync`) when Zustand local stores update (`progress`, `dojo`, `achievements`, `arcade`, `settings`).
  3. Manual user sync (`useCloudSync().syncNow()`).
- **Conflict Strategy**: Last-write-wins (`setDoc(..., { merge: true })`).

### Community Service (`src/features/community/services/community.service.ts`)
- Current service methods (`getGlobalLeaderboard`, `getFriends`, `getPendingFriendRequests`, `sendFriendRequest`, `acceptFriendRequest`, `broadcastActivity`, `getCommunityFeed`) will be refactored in V3.0 to interact exclusively with the new collection structure:
  - `/profiles/{uid}`
  - `/friend_codes/{code}`
  - `/friend_requests/{fromUid_toUid}`
  - `/friendships/{fromUid_toUid}`
  - `/arcade_challenges/{creatorUid_targetUid_gameId}`

---

## 4. Repo Hygiene & Maintenance Action Items

1. **Git Untracking**:
   - `.idea/` and `.vscode/` are currently tracked in git.
   - **Action**: Run `git rm -r --cached .idea/ .vscode/` and confirm entries in `.gitignore`.
2. **Fake UI Text Removal**:
   - `"Community Standing: Top 10%"` in `src/features/arcade/components/DailyChallengeModal.tsx` (line 327) — hard-coded string to be replaced with real friends' leaderboard standing.
   - `"MULTIPLAYER READY"` badge in `src/features/arcade/screens/ArcadeHubScreen.tsx` (line 309) — to be removed from bot-only battle games.
3. **Credential Management**:
   - `google-services.json` and `src/core/api/firebase.ts` contain standard Firebase client API keys and OAuth Client IDs. Ensure API keys in Google Cloud Console have HTTP/Android package restriction rules applied.

---

## 5. Version 3 Roadmap & Detailed Task List

```
+-----------------------------------------------------------------------------------+
| V3.0: Foundations                                                                 |
| - Promote firestore.rules.v3-draft to firestore.rules                             |
| - Setup Vitest rules unit tests with @firebase/rules-unit-testing                 |
| - Refactor community.service.ts for social.model.ts                               |
| - Add weeklyXp + weekId to useProgressStore & cloudSync                           |
| - Add enableSocial flag in flags.ts                                               |
| - Git untrack .idea/ & .vscode/ & clean fake UI texts                             |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| V3.1: Friends UI                                                                  |
| - Friends Screen (8-char Friend Code, System Share Sheet, Add by Code modal)      |
| - Pending Requests & Friend Cards (Streak, weekly XP, "studied today?" status)    |
| - Weekly Friends Leaderboard (resets Monday 00:00 UTC)                            |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| V3.2: Friends' Daily Challenge Board                                              |
| - Compare daily challenge completion, score, time & accuracy with friends         |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| V3.3: Async Head-to-Head Score Challenges                                         |
| - Add Game-Over modal to KanaCatchView                                            |
| - 1v1 Async Score Challenges for Rain, Snake, Catch, and Survival                 |
| - Arcade Hub Challenge Banner & local challenge badges                            |
+-----------------------------------------------------------------------------------+
```

---

## 6. Team QA & Direct Questions Answered

1. **Files Check (`ls firestore.rules firebase.json .firebaserc`)**: Verified present on disk in root.
2. **Local Copies Verification**: Confirmed local `firestore.rules.v3-draft` (10.5 KB), `social.model.ts` (5.0 KB), `cloudSync.service.ts`, `sync.model.ts`, and `catchEngine.ts` are identical and pass strict TypeScript compilation (`npx tsc --noEmit` exits with 0 errors).
3. **Firebase Billing & Production Users**: Free Spark Plan compatible. 0 real users in production (app unreleased), allowing clean collection deployment.
4. **Core Social Pull**: Accountability (friend streaks, "studied today?" status) + light competition (weekly friends board, 1v1 score challenges).

---
*Manabu V3 Specification & Architecture Document.*
