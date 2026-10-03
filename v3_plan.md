# Manabu (学ぶ) V3: Social Features Design Doc

- Date: 2026-10-02
- Platform: Android & Web (Cross-Platform: Expo Mobile App + Next.js Web App)
- Cost rule: free tiers only. No ads, subscriptions, or purchases.
- Status: V3.0 Foundations, DB Migrations, Admin Panel, and API Deployed.
- Marks used below: **ASSUMPTION** = I guessed from partial code. **VERIFY** = check a dashboard or file before relying on it.

---

## 0. Summary

V3 adds a social and cross-platform layer so learners can practice on both Android and Web, with friends as a reason to return daily:

1. Friends by 8-character code (no search, no public directory).
2. A friends list showing streak, weekly XP, and "studied today?".
3. A weekly friends board.
4. Friends' Daily Challenge results.
5. Async score challenges ("beat my score") for Rain, Snake, Catch, and Survival.
6. Live duels between friends for Kanji Duel, Karuta, and Shiritori.
7. **Full Web Application + Admin Panel** on the same Next.js full-stack deployment on Vercel:
   - Web learning app (Kana, Kanji, Vocab, Arcade, Social) in the browser.
   - Admin panel at `/admin` (moderation, ban/delete, telemetry, kill switches).
   - Unified REST API at `/api/v1/*` serving both mobile and web clients.

Approach: build lean. Use what already exists (Next.js on Vercel, PostgreSQL, Valkey, Firebase Auth). Add complexity only when a real limit is hit (section 11). Cheating on friends-only boards is accepted, so there is no anti-cheat work.

### Out of scope for V3

Global leaderboards, global feed, user search, chat, push notifications, community mnemonics, iOS, Wordle challenges, XP caps, score validation, the on-device LLM idea.

### Superseded drafts (do not use)

- `firestore.rules.v3-draft` (rules-only plan; replaced by section 5.3 and the API).
- The Valkey + PeerJS/WebRTC idea.
- The Firestore `profiles` / `friendships` collections idea.
- `social.model.ts` is partly reusable (week ID and friend code helpers are in the appendix).

---

## 1. Decisions

| Decision                                                     | Why                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Friends-only, friend codes, no search                        | Privacy, and no abuse surface for enumerating users          |
| PostgreSQL for durable social data                           | Relational (friends, requests); you already have an instance |
| Valkey for live duel state, rate limits, config cache        | Expiring data; you already run an instance                   |
| Firebase Auth stays; Firestore keeps only the private backup | Already working                                              |
| API verifies the Firebase ID token on every call             | Reuses existing sign-in                                      |
| Reads and writes both go through the API                     | One place for rules; simpler than mixed access               |
| Live duels use round-based polling, not sockets              | Vercel cannot hold sockets; game messages are tiny           |
| Reaction time is measured on each phone and submitted        | Fair despite network delay; no server clock tricks           |
| The challenger's phone generates the duel deck               | Server needs no game engines                                 |
| No anti-cheat                                                | Friends-only; decision is explicit                           |
| Public profile uses an in-app display name and emoji only    | No Google real name or photo shared                          |
| Friend limit 50                                              | Bounds every query and request                               |
| Android & Web                                                | Mobile app (Expo) + browser web app sharing the same REST API|

---

## 2. Requirements

### 2.1 Functional

| ID  | Requirement                                                                                                                 | Phase          |
| --- | --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| F1  | Public profile: display name, emoji avatar, belt, level, streak, weekly XP, last active date, latest Daily Challenge result | V3.0           |
| F2  | Each user gets a unique 8-character friend code                                                                             | V3.0           |
| F3  | Send a friend request by entering a code                                                                                    | V3.1           |
| F4  | Accept, decline, cancel a request; remove a friend                                                                          | V3.1           |
| F5  | Friends list with streak, weekly XP, studied today                                                                          | V3.1           |
| F6  | Weekly friends board (resets Monday 00:00 UTC)                                                                              | V3.1           |
| F7  | Friends' Daily Challenge results for today                                                                                  | V3.2           |
| F8  | Live duel: Kanji Duel                                                                                                       | V3.3           |
| F9  | Live duel: Karuta                                                                                                           | V3.4           |
| F10 | Live duel: Shiritori                                                                                                        | V3.5           |
| F11 | Delete account and all social data                                                                                          | before release |
| F12 | Admin panel: user lookup, ban/unban, delete user, recent requests and matches                                               | alongside      |
| F13 | Remote kill switch for social and duels                                                                                     | V3.0           |
| F14 | (Optional) async score challenges for Rain, Snake, Catch, Survival                                                          | V3.6           |

### 2.2 Non-functional

| Area            | Requirement                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Offline-first   | Learning and games never depend on the network. Social screens show cached data and say when it is stale.                                                            |
| Privacy         | Only friends see your profile. No real name, photo, or email is shared. No listing or search of users. No free-text chat.                                            |
| Security        | Token verified on every route. UID always comes from the token, never the body. Ownership checks. Input validated with zod. Rate limits. Secrets only in Vercel env. |
| Cost            | $0. Every free-tier cap is documented (section 11) and the app tolerates hitting it.                                                                                 |
| Performance     | Friends screen renders from cache instantly and refreshes in under 2 s. Duel polling feels live (about 0.7 s).                                                       |
| Scale target    | Hundreds of daily users. Walls are listed, not pre-solved.                                                                                                           |
| Consistency     | Eventual for boards and friends. Durable writes are transactional.                                                                                                   |
| Compliance      | Account deletion, privacy policy, Play Data safety form.                                                                                                             |
| Maintainability | Social behind a flag plus remote kill switch. Tests for friend transactions and duel advancement.                                                                    |

### 2.3 Constraints

- Solo developer. Public repo (the Firebase client config is already public).
- Vercel Hobby: personal, non-commercial use only. **VERIFY** current limits in the dashboard (docs I saw said 1M function invocations per month, 300 s max duration, one region, runtime logs kept for 1 hour).
- Firebase Spark: Firestore about 50k reads, 20k writes, 20k deletes per day. **VERIFY**.
- Expo SDK 57, React Native 0.86.3, dev builds only.

---

## 3. Architecture

```
Mobile Phone (React Native / Expo)         Web Browser (Next.js Web App)
  \                                             /
   \-- Authorization: Bearer <Firebase ID token>
    v
Next.js Full-Stack App on Vercel
  |-- /*           Web Learning App (Interactive Japanese learning in browser)
  |-- /admin/*    Admin Panel (Moderation, kill switches, telemetry)
  |-- /api/v1/*   Unified Backend REST API (Firebase token auth)
  |        |
  |        |-- PostgreSQL (Aiven) : profiles, friend_requests, friendships, match_results, app_config, score_challenges
  |        '-- Valkey (Aiven)     : duel state, rate-limit counters (all keys prefixed manabu:)
  |
Firebase: Auth (Google/email), Firestore (private backup only: users/{uid}/private/sync)
```

Rules of thumb:

- Postgres = anything that must survive. Valkey = anything that can expire or be rebuilt.
- The app works with the API down. Social features then show cached data and disable action buttons.
- Put Vercel functions in the same region as Postgres and Valkey. **VERIFY** the regions; if Mumbai is available for all three, use it.

---

## 4. Auth and API conventions

- Base path: `/api/v1`. JSON only.
- Header: `Authorization: Bearer <Firebase ID token>`. The app gets it with `firebaseAuth.currentUser.getIdToken()` (auto-refreshes). On a 401, refresh once and retry.
- Verification: `firebase-admin` `getAuth().verifyIdToken(token)` with a service account in Vercel env (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`). Lighter alternative with no secret: verify the RS256 JWT with `jose` against Firebase's public keys (issuer `https://securetoken.google.com/<projectId>`, audience = project ID, `sub` = uid). Never commit the service account.
- The uid used everywhere is the token's `uid`. Ignore any uid in a body.
- Banned users (`profiles.banned`) get 403 on every route except `DELETE /account`.
- Validation: zod on every body and query. Reject unknown shapes with 422.
- Error shape: `{ "error": { "code": "string", "message": "string" } }`

| Status | code examples                                                            |
| ------ | ------------------------------------------------------------------------ |
| 401    | `unauthorized`                                                           |
| 403    | `forbidden`, `banned`                                                    |
| 404    | `not_found`                                                              |
| 409    | `self`, `already_friends`, `already_pending`, `friend_limit`, `cooldown` |
| 422    | `validation_failed`                                                      |
| 429    | `rate_limited`                                                           |
| 503    | `feature_disabled` (kill switch)                                         |

### Rate limits (starting values, tune later)

Fixed window counter in Valkey: `INCR manabu:rl:{uid}:{bucket}:{windowStart}` then `EXPIRE`.

| Bucket                         | Limit                                  |
| ------------------------------ | -------------------------------------- |
| `profile.put`                  | 6 per hour (the client also throttles) |
| `friends.get`                  | 60 per hour                            |
| `friends.request`              | 5 per minute, 20 per day               |
| `friends.lookup` (wrong codes) | 30 per hour                            |
| `duel.create`                  | 20 per hour                            |
| `duel.poll`                    | 240 per minute per user                |

If Valkey is down: rate limiting fails open; duel routes return 503.

---

## 5. Data model

### 5.1 PostgreSQL

```sql
CREATE TABLE profiles (
  uid              text PRIMARY KEY,                -- Firebase UID
  display_name     text NOT NULL CHECK (char_length(display_name) BETWEEN 1 AND 24),
  avatar_emoji     text NOT NULL DEFAULT '🥋' CHECK (char_length(avatar_emoji) <= 16),
  belt_rank        text NOT NULL DEFAULT 'white',
  level            integer NOT NULL DEFAULT 1 CHECK (level >= 1),
  total_xp         integer NOT NULL DEFAULT 0 CHECK (total_xp >= 0),
  weekly_xp        integer NOT NULL DEFAULT 0 CHECK (weekly_xp >= 0),
  week_id          text NOT NULL,                    -- '2026-W40'
  current_streak   integer NOT NULL DEFAULT 0 CHECK (current_streak >= 0),
  last_active_date date,                             -- client-reported YYYY-MM-DD
  daily_date       date,
  daily_score      integer,
  daily_time_sec   numeric,
  daily_accuracy   numeric,
  friend_code      text NOT NULL UNIQUE CHECK (friend_code ~ '^[A-HJ-NP-Z2-9]{8}$'),
  banned           boolean NOT NULL DEFAULT false,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE friend_requests (
  id            bigserial PRIMARY KEY,
  from_uid      text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  to_uid        text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','accepted','declined')),
  created_at    timestamptz NOT NULL DEFAULT now(),
  responded_at  timestamptz,
  CHECK (from_uid <> to_uid),
  UNIQUE (from_uid, to_uid)
);
CREATE INDEX friend_requests_to_idx ON friend_requests (to_uid, status);

CREATE TABLE friendships (
  user_a      text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  user_b      text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_a, user_b),
  CHECK (user_a < user_b)
);
CREATE INDEX friendships_b_idx ON friendships (user_b);
-- Always insert with LEAST($1,$2), GREATEST($1,$2) so ordering uses the DB collation consistently.

CREATE TABLE match_results (
  id          uuid PRIMARY KEY,
  game        text NOT NULL CHECK (game IN ('kanjiDuel','karuta','shiritori')),
  player_a    text NOT NULL,
  player_b    text NOT NULL,
  wins_a      integer NOT NULL DEFAULT 0,
  wins_b      integer NOT NULL DEFAULT 0,
  winner      text,                                  -- uid, or NULL for a draw
  reason      text NOT NULL,                         -- rounds | forfeit | timeout | ended_with_n
  rounds      integer NOT NULL DEFAULT 0,
  started_at  timestamptz NOT NULL,
  ended_at    timestamptz NOT NULL
);
-- No FK on players: results survive account deletion (anonymize on delete instead: set uids to 'deleted').

CREATE TABLE app_config (
  key    text PRIMARY KEY,
  value  jsonb NOT NULL
);
-- Seed: ('flags', '{"social": true, "duels": true, "minAppVersion": 1}')

-- Optional, V3.6 only
CREATE TABLE score_challenges (
  id            uuid PRIMARY KEY,
  game          text NOT NULL CHECK (game IN ('rain','snake','catch','survival')),
  mode          text NOT NULL,
  creator_uid   text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  target_uid    text NOT NULL REFERENCES profiles(uid) ON DELETE CASCADE,
  creator_score integer NOT NULL CHECK (creator_score >= 0),
  target_score  integer,
  status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','completed','declined','expired')),
  created_at    timestamptz NOT NULL DEFAULT now(),
  expires_at    timestamptz NOT NULL,                -- created_at + 48h, evaluated lazily on read
  completed_at  timestamptz
);
```

Connection notes: use one module-level pool, `max` 1 to 3 per instance (serverless). **VERIFY** your provider's connection limit; add a pooler if you see "too many connections".

### 5.2 Valkey keys (shared instance, so always prefix `manabu:`)

| Key                                 | Type               | TTL                           | Purpose                                    |
| ----------------------------------- | ------------------ | ----------------------------- | ------------------------------------------ |
| `manabu:rl:{uid}:{bucket}:{window}` | string counter     | window length                 | Rate limits                                |
| `manabu:match:{id}`                 | hash               | 30 min, refreshed on activity | Duel state                                 |
| `manabu:match:{id}:sub:{round}`     | hash (uid -> json) | 30 min                        | Round submissions                          |
| `manabu:match:{id}:seen:{uid}`      | string             | 60 s                          | Last-seen for disconnect detection         |
| `manabu:match:{id}:lock:{name}`     | string             | 5 s                           | `SET NX` locks for lazy advance and finish |
| `manabu:inbox:{uid}`                | set of match ids   | 30 min                        | Incoming invites and active matches        |
| `manabu:config`                     | string (json)      | 60 s                          | Cached app_config                          |

Persistence is not needed. If Valkey is wiped, in-flight duels die and nothing else is lost. Make sure the instance's eviction policy will not evict these keys under memory pressure before their TTL (**VERIFY**; a volatile-\* policy is fine since all keys here have TTLs).

### 5.3 Firestore (backup only)

Only the private backup stays: `users/{uid}/private/sync`. Replace the rules file with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /private/{docId=**} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
    // Everything else is denied by default.
  }
}
```

Deploy this last, after the app version that no longer writes public fields to `users/{uid}` or touches `friend_requests`, `community_feed`, or `users/{uid}/friends`. The current rules let any signed-in user edit any feed post and let either party rewrite a friend request; those collections go away.

---

## 6. API reference

All routes need the token unless stated. UIDs are never accepted from the client.

### 6.1 Profile

**`PUT /api/v1/profile`** (upsert snapshot)

```ts
interface ProfilePut {
  displayName: string; // 1-24 chars, trimmed
  avatarEmoji: string; // <= 16 chars
  beltRank:
    | "white"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "brown"
    | "black";
  level: number; // int >= 1
  totalXp: number; // int >= 0
  weeklyXp: number; // int >= 0
  weekId: string; // /^\d{4}-W\d{2}$/
  currentStreak: number; // int >= 0
  lastActiveDate: string | null; // YYYY-MM-DD
  daily?: {
    date: string;
    score: number;
    timeSeconds: number;
    accuracy: number;
  } | null;
}
// Response: { profile: { ...same fields, friendCode: string } }
```

- Upsert: `INSERT ... ON CONFLICT (uid) DO UPDATE SET ...` for every column except `friend_code`.
- First call generates the friend code (appendix A.2). On a unique violation of `friend_code`, regenerate and retry up to 5 times.
- No caps on XP or scores (decision). Only type and range validation.

**`GET /api/v1/profile`** returns my profile including `friendCode` (needed after reinstall).

**`DELETE /api/v1/account`** (allowed even when banned)

1. Delete the `profiles` row (cascades to requests and friendships).
2. Anonymize `match_results` (replace this uid with `'deleted'`).
3. Delete my Valkey inbox and open matches (best effort).
4. With the Admin SDK: delete the Firestore document tree `users/{uid}` and delete the Firebase Auth user.
5. Return 204. The app then clears local session data.

### 6.2 Friends

**`GET /api/v1/friends`** (one call powers the whole Friends screen)

```ts
interface FriendsResponse {
  currentWeekId: string; // server's UTC ISO week
  friends: Array<{
    uid: string;
    displayName: string;
    avatarEmoji: string;
    beltRank: string;
    level: number;
    currentStreak: number;
    weeklyXp: number; // server zeroes it when the friend's week_id != currentWeekId
    lastActiveDate: string | null;
    daily: {
      date: string;
      score: number;
      timeSeconds: number;
      accuracy: number;
    } | null;
  }>;
  incoming: Array<{ id: number; createdAt: string; user: UserLite }>;
  outgoing: Array<{ id: number; createdAt: string; user: UserLite }>;
}
// UserLite = { uid, displayName, avatarEmoji, beltRank, level }
```

Friends query (at most 50 rows):

```sql
SELECT p.* FROM friendships f
JOIN profiles p ON p.uid = CASE WHEN f.user_a = $1 THEN f.user_b ELSE f.user_a END
WHERE f.user_a = $1 OR f.user_b = $1;
```

"Studied today" is computed on the phone by comparing `lastActiveDate` with the phone's local date (**VERIFY** the date format the progress store uses for `lastActiveDate`).

**`POST /api/v1/friends/requests`** body `{ code: string }`

1. Normalize the code (uppercase, strip spaces and hyphens). Look up `profiles` by `friend_code`. Not found: 404 `not_found` (counts against `friends.lookup`).
2. Target is me: 409 `self`. Already friends: 409 `already_friends`.
3. Either side at 50 friends: 409 `friend_limit`. I have 20 pending outgoing: 409 `friend_limit`.
4. If they already sent me a pending request, accept it instead (transaction below) and return the friendship.
5. If I already have a pending request to them: 409 `already_pending`.
6. If they declined me within the last 7 days: 409 `cooldown`. Otherwise insert, or if a declined row exists older than 7 days, set it back to `pending`.
7. Response: `{ request: { id, status }, user: UserLite }`.

**`POST /api/v1/friends/requests/{id}/respond`** body `{ accept: boolean }`

Only the request's `to_uid` may respond. Transaction:

```sql
BEGIN;
SELECT * FROM friend_requests WHERE id = $1 FOR UPDATE;   -- check to_uid = me, status = 'pending'
-- if accept: check both users have < 50 friends
INSERT INTO friendships (user_a, user_b) VALUES (LEAST($a,$b), GREATEST($a,$b)) ON CONFLICT DO NOTHING;
UPDATE friend_requests SET status = $2, responded_at = now() WHERE id = $1;
COMMIT;
```

**`DELETE /api/v1/friends/requests/{id}`** cancel my own outgoing request (only while pending).

**`DELETE /api/v1/friends/{uid}`** remove a friendship and delete any `friend_requests` rows between the two users (either direction) so they can re-add later.

### 6.3 Daily Challenge board

No extra endpoint. The friends response carries each friend's latest `daily`. The phone shows only entries whose `daily.date` equals its local today, plus my own result. Trigger an immediate profile PUT after finishing a Daily Challenge (still respect the 20 s minimum gap).

### 6.4 Config (kill switch)

**`GET /api/v1/config`** (no auth, cacheable): `{ social: boolean, duels: boolean, minAppVersion: number }`. Respond with `Cache-Control: s-maxage=60, stale-while-revalidate=300`. The app fetches it at launch and every few hours; if unreachable it uses the last cached value (default: enabled). When `social` is false, show "temporarily unavailable" on the Friends screen. Editable from the admin panel.

### 6.5 Duels (see section 8 for the protocol)

| Route                             | Purpose                                  |
| --------------------------------- | ---------------------------------------- |
| `POST /api/v1/duels`              | Create an invite `{ game, toUid, deck }` |
| `GET /api/v1/duels/inbox`         | My invites and active matches            |
| `POST /api/v1/duels/{id}/accept`  | Accept                                   |
| `POST /api/v1/duels/{id}/decline` | Decline                                  |
| `GET /api/v1/duels/{id}?deck=1`   | Poll state (deck only when `deck=1`)     |
| `POST /api/v1/duels/{id}/answer`  | Submit a round (Kanji Duel, Karuta)      |
| `POST /api/v1/duels/{id}/move`    | Play a word (Shiritori)                  |
| `POST /api/v1/duels/{id}/forfeit` | Leave a match                            |

### 6.6 Score challenges (optional, V3.6)

`POST /challenges`, `GET /challenges`, `POST /challenges/{id}/respond`. The server stores the creator's score and the target's score and sets the winner (higher wins; tie is a draw). Expiry (48 h) is evaluated lazily when read. No XP reward for winning (two accounts could farm it).

---

## 7. App (client) changes

### 7.1 New and changed files

| Area                                                                             | Change                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/core/api/httpClient.ts` (exists)                                            | Add base URL (`EXPO_PUBLIC_API_BASE_URL`), attach the ID token, retry once on 401, map error shape                                                                                                              |
| `src/core/config/flags.ts`                                                       | Add `enableSocial`, `enableDuels` (compile-time) plus the remote kill switch (6.4)                                                                                                                              |
| `src/features/community/`                                                        | Rewrite the service to call the API. Delete `getGlobalLeaderboard`, feed functions, and the old `FriendRecord` schema (names and photos). Add a store that caches the friends response in MMKV with `fetchedAt` |
| `src/features/community/screens/FriendsScreen.tsx` + route `src/app/friends.tsx` | My code with Share, add by code, requests, friend list, weekly board                                                                                                                                            |
| Entry points                                                                     | A Friends card on the Profile screen and one on the Arcade hub                                                                                                                                                  |
| `src/features/progress/store/useProgressStore.ts`                                | Add `weekId` and `weeklyXp` (7.2)                                                                                                                                                                               |
| `src/features/sync/services/cloudSync.service.ts`                                | Split sync (7.3)                                                                                                                                                                                                |
| `src/features/sync/models/sync.model.ts`                                         | Remove `photoURL`, `bio`, and community schemas; public profile now goes through the API                                                                                                                        |
| Arcade views for the three duels                                                 | Replace the bot opponent with a remote opponent (section 8.6)                                                                                                                                                   |

### 7.2 Weekly XP

- Add `weekId` (string) and `weeklyXp` (number) to the progress store. Bump the persisted store version and default `weekId` to the current week, `weeklyXp` to 0.
- Wherever XP is awarded (`recordScore` and the other XP paths), first call `rolloverWeekIfNeeded()` (if `weekId !== getWeekId()`, set `weekId` and reset `weeklyXp` to 0), then add the XP to both `totalXp` and `weeklyXp`.
- Weeks roll over Monday 00:00 UTC (05:30 IST).
- **VERIFY** where XP is added; I have not seen `useProgressStore`.

### 7.3 Sync

Public profile (to the API):

- `PUT /profile` at most once every 3 minutes while the app is active, once on `AppState` going to background, and right after a Daily Challenge result.
- Skip the call if the payload is unchanged (compare a hash of the body).
- Use the in-app display name (`stats.displayName`) only. Never use the Google name or `photoURL`.
- On a network error, do nothing; the next trigger retries.

Private backup (to Firestore, unchanged location):

- On background and every 10 minutes while active.
- Write as a full overwrite (`setDoc` without `merge: true`). With merge, a reset leaves old nested `mastery` keys in the cloud and they come back on restore.
- Add the fields that are missing today: survival high scores, Memory best moves, and `dailyChallengeLastResult`.

Known limits (accepted): last write wins across devices; the backup document could approach Firestore's 1 MiB limit as mastery grows (tripwire in section 11).

### 7.4 Display name

The Profile screen already has an editable name (default "Manabu Student"). The first time someone opens Friends and their name is still the default, show a "Pick your name" prompt. **DEFAULT** (you never picked between this and auto-generating): prompt, 1 to 24 characters.

### 7.5 Offline and error behavior

- Friends screen: render from cache immediately, then refresh if older than 2 minutes. Pull-to-refresh at most every 20 seconds. Show "last updated" when offline.
- Add, respond, and duel buttons are disabled while offline, with a short message.
- API errors show one generic toast and never block gameplay.
- Social code is behind `enableSocial` and the remote flag.

### 7.6 Friend code UX

Show the code as `K7MQ-2XRD` (hyphen for readability only). Share with React Native's `Share.share` (no new dependency). Entry accepts any case and ignores spaces and hyphens.

---

## 8. Live duels

### 8.1 Idea

Phones cannot talk to Valkey, and Vercel cannot hold sockets. So the match lives in Valkey and both phones poll the API. Rounds are lockstep: each round both players answer the same question, each phone measures its own reaction time, and the server decides the round winner when both have submitted (or time runs out). Serverless has no timers, so the server advances a match lazily whenever any request touches it.

### 8.2 Game rules for V3

| Game       | Shape                                         | Round or turn winner                                                                                |
| ---------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Kanji Duel | N rounds (default 10), same question for both | Correct beats incorrect. Both correct: lower `reactionMs` wins. Both wrong or timed out: no winner. |
| Karuta     | N cards (default 8), same card for both       | Same rule                                                                                           |
| Shiritori  | Alternating turns                             | Loser: the player who plays a word ending in ん, repeats a word, times out (30 s), or forfeits      |

Match winner (Kanji Duel, Karuta): more round wins; equal means a draw. The existing HP and damage display in Kanji Duel can stay as cosmetics computed on each phone from the round history. This is a deliberate simplification of the bot version's HP win condition and can be refined later.

### 8.3 Valkey match state

`manabu:match:{id}` hash fields: `game`, `status` (`waiting` | `live` | `finished` | `declined` | `expired` | `forfeit`), `a` (creator uid), `b` (invitee uid), `deck` (JSON), `total`, `round`, `roundDeadlineMs`, `winsA`, `winsB`, `createdAt`, `startedAt`. Shiritori adds `turn`, `turnDeadlineMs`, `words` (JSON array).

- `deck` is created by the challenger's phone, opaque to the server, at most 20 KB and 20 items (validate size).
- A `waiting` invite expires after 10 minutes. Add the match id to the invitee's `manabu:inbox:{uid}`.
- Only friends can invite each other. At most one open outgoing duel per pair and game.

### 8.4 Lazy advance (Kanji Duel, Karuta)

Run on every GET and POST for a live match:

```
if status == live:
  subs = HGETALL sub:{round}
  if both players submitted OR now >= roundDeadlineMs (+2 s grace):
    if SET lock:adv:{round} NX EX 5:
      winner = roundWinner(subs)          // rule in 8.2; a missing submission counts as "no answer"
      HINCRBY winsA/winsB
      if round + 1 >= total: finish()
      else: round += 1; roundDeadlineMs = now + timeLimit
```

`finish()` (guarded by `SET lock:finish NX`): set `status = finished`, compute the winner, insert into `match_results` with `ON CONFLICT (id) DO NOTHING`, set a 2-minute TTL on all match keys, and remove the match from both inboxes.

### 8.5 Endpoints in detail

- `POST /duels` `{ game, toUid, deck }`: checks friendship, ban, rate limit, no duplicate open duel; creates the match `waiting`; returns `{ id }`.
- `POST /duels/{id}/accept`: only the invitee, only while `waiting`. Sets `live`, `round = 0`, the first deadline; returns state.
- `GET /duels/{id}?deck=1`: includes `deck` only when `deck=1`; the client asks once after accepting and caches it.
- `POST /duels/{id}/answer` `{ round, correct, reactionMs }` (`reactionMs` is `null` for a timeout; clamp to 0..60000). If `round` is not the current round, ignore it and return the state. Use `HSETNX` so repeats are idempotent.
- `POST /duels/{id}/move` `{ word }` (Shiritori): must be my turn; reject an exact repeat of a word already in `words`; append; flip the turn and deadline. If the word ends in ん, I lose immediately. A turn past its deadline is evaluated lazily: the player whose turn it was loses.
- Disconnect: each GET and POST sets `seen:{uid}` (60 s TTL). During a live match, if the opponent's key has been missing for 20 s the state shows `opponentGone: true`; after 30 s the next request from the remaining player ends the match as `forfeit`.

State returned by polling:

```ts
interface DuelState {
  id: string;
  game: "kanjiDuel" | "karuta" | "shiritori";
  status: "waiting" | "live" | "finished" | "declined" | "expired" | "forfeit";
  opponent: { uid: string; displayName: string; avatarEmoji: string };
  deck?: unknown;
  round: number;
  totalRounds: number;
  roundDeadlineMs: number | null;
  mySubmitted: boolean;
  opponentSubmitted: boolean;
  history: Array<{
    round: number;
    mine: { correct: boolean; reactionMs: number | null };
    theirs: { correct: boolean; reactionMs: number | null };
    winner: "me" | "them" | "none";
  }>;
  winsMe: number;
  winsThem: number;
  opponentGone: boolean;
  result?: {
    winner: "me" | "them" | "draw";
    reason: "rounds" | "forfeit" | "timeout" | "ended_with_n";
  };
  turn?: "me" | "them";
  words?: string[];
  turnDeadlineMs?: number; // Shiritori
  serverTime: number;
}
```

### 8.6 Client work per game

Today `KanjiDuelView`, `KarutaBattleView`, and `ShiritoriArenaView` drive a bot (**VERIFY**: I have not seen these files). Needed changes:

1. Introduce an opponent seam: instead of the bot deciding, the view receives the opponent's round result from the polled state.
2. Poll every 700 ms while live (3 s while `waiting`, and for Shiritori while it is the opponent's turn).
3. Generate the deck on the challenger's phone from the existing engine; store it as JSON.
4. Add "waiting for opponent", "opponent left", and "result" states. A forfeit button.
5. Measure `reactionMs` locally from the moment the question is displayed to the tap. Each phone shows the next question when it sees the round index change, so a slower poll does not unfairly change anyone's measured reaction.
6. Stop polling when the screen unmounts, the app backgrounds, or the match ends.
7. Check the Arcade hub inbox every 30 seconds while the hub is visible and on app foreground (no push notifications in V3).
8. Remove the "MULTIPLAYER READY" badge from any game that is still bot-only.

### 8.7 Request budget (ASSUMPTIONS)

A 10-round Kanji Duel at about 5 s per round and 700 ms polling is about 70 polls plus 10 answers per player, so roughly 160 requests per match. At 1M invocations per month, 5,000 matches would use 800k. Everything else (profile syncs and friend refreshes, about 15 to 20 calls per user per day) shares the same budget.

---

## 9. Web Application & Admin Panel (Next.js on Vercel)

The Next.js deployment serves as the full-stack web hub for Manabu:
1. **Web Learning Application** (`/`, `/learn`, `/arcade`, `/profile`, `/friends`)
2. **Mission Control Admin Panel** (`/admin`)
3. **Shared REST API** (`/api/v1/*`) used by both mobile and web clients

### 9.1 Web Learning Application
- Responsive web experience designed with Tailwind CSS and React 19.
- Shares the same core data contracts, kana/kanji algorithms, and SRS review structure.
- Accessible directly from desktop browsers, tablets, and mobile web.
- Authenticates with Firebase Web Auth (Google / Email).
- Consumes the same `/api/v1/*` endpoints for profiles, friends, daily challenges, and score battles.

### 9.2 Admin Panel (`/admin`)
Keep it separate from `/api/v1` and protected by `ADMIN_SECRET`.
- Users: search by UID, display name, or friend code; view profile stats; ban or unban; delete account.
- Telemetry & Kill Switches: toggle `social`, `duels`, and minimum mobile app version live.
- Audit & Activity: inspect recent friend requests and match records.

---

## 10. The four cheap fixes (do first)

1. `cloudSync.service.ts`: stop sending the Google `displayName` and `photoURL`; use only the in-app name; drop `bio`.
2. Replace the 2 s sync debounce with the throttle in 7.3 (the first wall you would otherwise hit).
3. Remove the fake text: `"Community Standing: Top 10%"` (`DailyChallengeModal.tsx` around line 327) and the `MULTIPLAYER READY` badge (`ArcadeHubScreen.tsx` around line 309) on bot-only games.
4. Replace the Firestore rules (5.3) once the app no longer uses the old collections.

Also tidy: untrack `.idea/` and `.vscode/` (`git rm -r --cached .idea .vscode`, add both to `.gitignore`).

---

## 11. Limits and tripwires

| If this happens                             | Do this                                                                                                                                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vercel invocations near the monthly cap     | Flip the kill switch for duels; slow polling to 1 s; move the live channel to Firebase Realtime Database (free plan: 100 simultaneous connections, 1 GB storage, 10 GB/month downloads; connect only during a match) |
| Vercel Hobby limits exceeded                | Features pause until the window resets: the app must keep working on cached data                                                                                                                                     |
| Postgres "too many connections"             | Lower the pool size; add a pooler                                                                                                                                                                                    |
| Valkey down or full                         | Duels return 503 and show "unavailable"; rate limits fail open                                                                                                                                                       |
| Firestore (backup only) near 20k writes/day | Back up less often                                                                                                                                                                                                   |
| Backup document nears 1 MiB                 | Split it into several documents or move it to Postgres as jsonb                                                                                                                                                      |
| Friend-request spam or harassment           | Add blocking; use the admin ban                                                                                                                                                                                      |
| Code guessing                               | Tighten `friends.lookup`                                                                                                                                                                                             |
| Real users complain about fake scores       | Add a simple delta check in `PUT /profile`                                                                                                                                                                           |
| You want push nudges                        | Add Expo push from the Next.js backend                                                                                                                                                                               |
| Duel polling feels laggy                    | Switch the transport to Realtime Database; the protocol stays the same                                                                                                                                               |

---

## 12. Build order and "done when"

| Step                     | Scope                                                                                                                                                                                                                         | Done when                                                                                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **V3.0 Foundations**     | API skeleton, token auth, rate-limit helper, Postgres migrations, `PUT/GET /profile`, `/config`; app: authenticated `httpClient`, throttled profile sync, weekly XP in the store, flags, the cheap fixes, new Firestore rules | Signing in on your phone creates a profile row with a friend code; Firestore write volume drops; the kill switch hides Friends                                               |
| **V3.1 Friends**         | Friends endpoints; Friends screen with code, add, requests, list, weekly board                                                                                                                                                | Two accounts can friend each other and see streak and weekly XP; remove and re-add works; the 50-friend cap works; a second account in a request race ends in one friendship |
| **V3.2 Daily board**     | `daily` in profile PUT; friends' results on the Daily Challenge screen                                                                                                                                                        | Finishing the challenge shows your score to a friend within a few minutes                                                                                                    |
| **V3.3 Live Kanji Duel** | Duel endpoints; opponent seam in the view                                                                                                                                                                                     | Two phones play a full match; disconnect ends in a forfeit; a `match_results` row is written once                                                                            |
| **V3.4 Karuta**          | Reuse the lockstep logic                                                                                                                                                                                                      | Same as above                                                                                                                                                                |
| **V3.5 Shiritori**       | Turn logic                                                                                                                                                                                                                    | Turn order, ん loss, repeat, and timeout all work                                                                                                                            |
| **V3.6 (optional)**      | Score challenges; a game-over screen for Catch                                                                                                                                                                                | Round trip between two accounts                                                                                                                                              |

Admin panel pages grow alongside. Test locally with two real accounts on one phone and one emulator (the emulator is fine for this; only the on-device LLM libraries need a real device).

Tests worth writing (keep it light): friend-request and accept transactions against a real Postgres (docker), the lazy advance and finish logic against a real Valkey, and client store and service tests with a mocked `fetch`, in the same integration-first style as the rest of the app.

---

## 13. Release checklist (Google Play, not V3 work)

All items need a current-policy **VERIFY**.

- In-app account deletion (`DELETE /account` wired to a button) and the web link for deletion requests.
- Privacy policy URL. Data safety form: you handle Firebase UID, display name, emoji, belt, level, XP, streak, last active date, Daily Challenge results, friend relations, and match results. The Google email is held by Firebase Auth only.
- Restrict the Firebase API key and the Android OAuth client (package name `com.manabu.app` plus the SHA-1) in Google Cloud Console. The key is already public through the repo.
- `google-services.json` is committed. It is client configuration, not a secret; decide whether to keep it public.
- Play developer account fee (one-time) and any closed-testing requirement for new accounts.
- README refresh: 10 playable games and 9 engines, Expo 57, the real roadmap.

---

## 14. Facts about the existing code that matter

From the pasted files and the audit:

- `community.service.ts`: `acceptFriendRequest` only writes the caller's own friend record (no status update, no reverse record); there is no user search; the leaderboard is a global query on `users` ordered by `totalXp`; the `weekly` timeframe has no data; the feed is global.
- `cloudSync.service.ts`: public profile uses `currentUser.displayName || stats.displayName` and `photoURL` (Google data); every XP change after a 2 s debounce writes two documents including the full `mastery` map; `setDoc(..., { merge: true })` is used for the private backup; `restore` only runs when local progress is empty.
- The arcade backup omits survival scores, Memory best moves, and the Daily Challenge result; `dailyChallengesCompleted` stores only today.
- `belt_rank` comes from the level, which comes from achievement points: `level = floor(sqrt(points / 100)) + 1`, belts `white, yellow, green, blue, purple, brown, black`.
- Only the Daily Challenge is seeded (`cyrb128` + `sfc32` from the date). The other engines use `Math.random`; Wordle picks a random word and records only win or loss. None of that blocks V3 because duel decks are generated on the challenger's phone.
- `catchEngine` has no real maximum score (lives-based; 100 base, 450 per catch at turbo with a 3x combo, 250 for a star) and `KanaCatchView` has no game-over screen (needed only for V3.6).
- `firestore.rules` today: owner-only `private/*`, any signed-in user can read and edit feed posts, either party in a request can edit it. All of that goes away.
- Tests mock Firebase inline; there is no emulator or rules-test setup (not needed with this design).
- Repo hygiene: `.idea/` and `.vscode/` tracked; `google-services.json` tracked.

---

## 15. Open items to check

1. PostgreSQL provider, region, and connection limit; whether you need a pooler.
2. Valkey: the key prefix is enough on a shared instance; check the eviction policy and memory headroom.
3. Vercel region, and Hobby limits in the dashboard.
4. Same Next.js project for the admin panel and the API (simplest), or separate projects.
5. Where XP is awarded in `useProgressStore`, and the date format of `lastActiveDate` and `todayDate`.
6. How the three battle views drive the bot today (needed to size the opponent seam).
7. Display name policy (current default: prompt on first use; no profanity filter since it is friends-only).
8. Whether Hobby terms still fit your project (no revenue, no ads, no purchases; read Vercel's fair-use page before adding donations or sponsors).

---

## Appendix A: helpers (verified in a scratch test)

### A.1 ISO week id (UTC)

```ts
export function getWeekId(date: Date = new Date()): string {
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum); // Thursday of this ISO week
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7,
  );
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}
// 2026-10-02 -> 2026-W40, 2025-12-29 -> 2026-W01, 2027-01-01 -> 2026-W53
```

### A.2 Friend code

```ts
// 32 unambiguous characters (no I, O, 0, 1). Matches /^[A-HJ-NP-Z2-9]{8}$/.
export const FRIEND_CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateFriendCode(random: () => number = Math.random): string {
  let code = "";
  for (let i = 0; i < 8; i++) {
    code +=
      FRIEND_CODE_ALPHABET[Math.floor(random() * FRIEND_CODE_ALPHABET.length)];
  }
  return code;
}

export const normalizeFriendCode = (input: string) =>
  input.toUpperCase().replace(/[\s-]/g, "");
```

### A.3 Round winner (server)

```ts
type Sub = { correct: boolean; reactionMs: number | null } | undefined;

export function roundWinner(a: Sub, b: Sub): "a" | "b" | "none" {
  const aOk = !!a?.correct,
    bOk = !!b?.correct;
  if (aOk && !bOk) return "a";
  if (bOk && !aOk) return "b";
  if (aOk && bOk) {
    const ra = a!.reactionMs ?? Infinity,
      rb = b!.reactionMs ?? Infinity;
    return ra < rb ? "a" : rb < ra ? "b" : "none";
  }
  return "none";
}
```
