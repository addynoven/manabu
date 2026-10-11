# 🏛️ Manabu Production PostgreSQL & Valkey Database Schema

This document details the live production database schema running on **Aiven PostgreSQL** (`manabu` schema) and **Valkey / Redis** for real-time PvP matchmaking.

---

## 🎨 ASCII Art Database Architecture & Entity Relationship Diagram

```text
===================================================================================================
                                MANABU PRODUCTION DATABASE ARCHITECTURE
===================================================================================================

       +-----------------------------------------------------------------------------------+
       |                                 MANABU.PROFILES                                   |
       |  (Stores student accounts, XP, belt rank, scholar friend codes & FSRS retention) |
       +-----------------------------------------+-----------------------------------------+
                                                 |
                +--------------------------------+--------------------------------+
                | 1:N                            | 1:N                            | 1:1
                v                                v                                v
   +--------------------------+    +--------------------------+    +--------------------------+
   |    MANABU.CARD_STATES    |    |   MANABU.USER_BACKUPS    |    |    MANABU.FRIENDSHIPS    |
   | (FSRS-6 S, D, Reps, Due) |    |  (JSONB Cloud Sync Data) |    | (Scholar Friend Links)   |
   +------------+-------------+    +--------------------------+    +--------------------------+
                | 1:N                                                             ^
                v                                                                 |
   +--------------------------+                                    +--------------+-----------+
   |    MANABU.REVIEW_LOGS    |                                    | MANABU.FRIEND_REQUESTS   |
   | (Historical Rating Logs) |                                    | (Pending/Accepted)       |
   +--------------------------+                                    +--------------------------+

                +-----------------------------------------------------------------+
                | 1:N                                                             | 1:N
                v                                                                 v
   +--------------------------+                                    +--------------------------+
   |   MANABU.MATCH_RESULTS   |                                    | MANABU.SCORE_CHALLENGES  |
   | (PvP Arcade Duels Record)|                                    | (Async High-Score Duels) |
   +--------------------------+                                    +--------------------------+

                                    +--------------------------+
                                    |    MANABU.APP_CONFIG     |
                                    |  (FSRS-6 Weights Vector) |
                                    +--------------------------+
```

---

## 📋 Live Table Definitions

### 1. `manabu.profiles`
> Learner accounts, XP progression, martial arts belt rank, scholar friend code, and FSRS target retention preference.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| uid                 | text                     | NOT NULL | PRIMARY KEY (Firebase Auth UID) |
| display_name        | text                     | NOT NULL |                                 |
| email               | text                     | NULL     | UNIQUE                          |
| avatar_emoji        | text                     | NOT NULL | '🥋'                            |
| belt_rank           | text                     | NOT NULL | 'white'                         |
| level               | integer                  | NOT NULL | 1                               |
| total_xp            | integer                  | NOT NULL | 0                               |
| weekly_xp           | integer                  | NOT NULL | 0                               |
| week_id             | text                     | NOT NULL | (e.g. '2026-W41')               |
| current_streak      | integer                  | NOT NULL | 0                               |
| last_active_date    | date                     | NULL     |                                 |
| friend_code         | text                     | NOT NULL | UNIQUE (e.g. 'R4B6-53B4')       |
| banned              | boolean                  | NOT NULL | false                           |
| desired_retention   | real                     | NOT NULL | 0.90 (FSRS-6 Target 0.70..0.97) |
| created_at          | timestamp with time zone | NOT NULL | now()                           |
| updated_at          | timestamp with time zone | NOT NULL | now()                           |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 2. `manabu.card_states`
> Active FSRS-5 / FSRS-6 spaced repetition memory state per item per user ($S$: Stability, $D$: Difficulty, $R$: Repetitions, $L$: Lapses).

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| uid                 | text                     | NOT NULL | PRIMARY KEY (uid, card_id)      |
| card_id             | text                     | NOT NULL | PRIMARY KEY (e.g. 'u1_l1_1')    |
| card_type           | text                     | NOT NULL | ('kanji', 'vocab', 'grammar')   |
| state               | text                     | NOT NULL | ('new','learning','review',...) |
| stability           | real                     | NOT NULL | 0.0 (FSRS Stability S in days)  |
| difficulty          | real                     | NOT NULL | 5.0 (FSRS Difficulty D 1.0..10) |
| reps                | integer                  | NOT NULL | 0                               |
| lapses              | integer                  | NOT NULL | 0                               |
| last_review         | timestamp with time zone | NULL     |                                 |
| due_at              | timestamp with time zone | NOT NULL | now() (Indexed ASC)             |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 3. `manabu.review_logs`
> Immutable historical review event logs for FSRS optimization and memory analytics.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| id                  | bigint                   | NOT NULL | PRIMARY KEY (DEFAULT seq)       |
| uid                 | text                     | NOT NULL | FK -> card_states(uid, card_id) |
| card_id             | text                     | NOT NULL | FK -> card_states(uid, card_id) |
| rating              | smallint                 | NOT NULL | 1:Again, 2:Hard, 3:Good, 4:Easy |
| state               | text                     | NOT NULL | ('new','learning','review',...) |
| elapsed_days        | real                     | NOT NULL | 0.0                             |
| scheduled_days      | real                     | NOT NULL | 0.0                             |
| reviewed_at         | timestamp with time zone | NOT NULL | now()                           |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 4. `manabu.user_backups`
> JSONB cloud backup payload storing progress (`completedLessons`, `passedGates`) for cross-device synchronization.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| uid                 | text                     | NOT NULL | PRIMARY KEY                     |
| backup_data         | jsonb                    | NOT NULL | (Complete JSON progress blob)   |
| version             | integer                  | NOT NULL | 1                               |
| synced_at           | timestamp with time zone | NOT NULL | now()                           |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 5. `manabu.match_results`
> Live PvP Arcade match outcomes and game logs.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| id                  | uuid                     | NOT NULL | PRIMARY KEY                     |
| game                | text                     | NOT NULL | ('shiritori','karuta','duel')   |
| player_a            | text                     | NOT NULL |                                 |
| player_b            | text                     | NOT NULL |                                 |
| wins_a              | integer                  | NOT NULL | 0                               |
| wins_b              | integer                  | NOT NULL | 0                               |
| winner              | text                     | NULL     |                                 |
| reason              | text                     | NOT NULL | ('forfeit','timeout','score')   |
| rounds              | integer                  | NOT NULL | 0                               |
| started_at          | timestamp with time zone | NOT NULL |                                 |
| ended_at            | timestamp with time zone | NOT NULL |                                 |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 6. `manabu.friendships` & `manabu.friend_requests`
> Social connections and pending friend invitations between scholars.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| user_a              | text                     | NOT NULL | PRIMARY KEY (user_a, user_b)    |
| user_b              | text                     | NOT NULL | PRIMARY KEY (user_a, user_b)    |
| created_at          | timestamp with time zone | NOT NULL | now()                           |
+---------------------+--------------------------+----------+---------------------------------+
```

---

### 7. `manabu.app_config`
> Global application configuration storing FSRS-6 parameter weights vector $w$ and remote feature flags.

```text
+---------------------+--------------------------+----------+---------------------------------+
| Column Name         | Data Type                | Nullable | Default / Constraints           |
+---------------------+--------------------------+----------+---------------------------------+
| key                 | text                     | NOT NULL | PRIMARY KEY (e.g. 'fsrs6_w')    |
| value               | jsonb                    | NOT NULL | (Array of 21 weights parameters)|
| updated_at          | timestamp with time zone | NOT NULL | now()                           |
+---------------------+--------------------------+----------+---------------------------------+
```

---

## 💻 SQL Production DDL

```sql
CREATE SCHEMA IF NOT EXISTS manabu;

-- 1. Profiles Table
CREATE TABLE manabu.profiles (
    uid                TEXT PRIMARY KEY,
    display_name       TEXT NOT NULL,
    email              TEXT UNIQUE,
    avatar_emoji       TEXT NOT NULL DEFAULT '🥋',
    belt_rank          TEXT NOT NULL DEFAULT 'white',
    level              INT NOT NULL DEFAULT 1,
    total_xp           INT NOT NULL DEFAULT 0,
    weekly_xp          INT NOT NULL DEFAULT 0,
    week_id            TEXT NOT NULL,
    current_streak     INT NOT NULL DEFAULT 0,
    last_active_date   DATE,
    friend_code        TEXT UNIQUE NOT NULL,
    banned             BOOLEAN NOT NULL DEFAULT false,
    desired_retention  REAL NOT NULL DEFAULT 0.90 CHECK (desired_retention >= 0.70 AND desired_retention <= 0.97),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Card States Table
CREATE TABLE manabu.card_states (
    uid          TEXT NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
    card_id      TEXT NOT NULL,
    card_type    TEXT NOT NULL CHECK (card_type IN ('kanji', 'vocab', 'grammar')),
    state        TEXT NOT NULL CHECK (state IN ('new', 'learning', 'review', 'relearning')),
    stability    REAL NOT NULL DEFAULT 0.0,
    difficulty   REAL NOT NULL DEFAULT 5.0 CHECK (difficulty >= 1.0 AND difficulty <= 10.0),
    reps         INT NOT NULL DEFAULT 0,
    lapses       INT NOT NULL DEFAULT 0,
    last_review  TIMESTAMPTZ,
    due_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (uid, card_id)
);

CREATE INDEX idx_card_states_due ON manabu.card_states (uid, due_at ASC);

-- 3. Review History Logs
CREATE TABLE manabu.review_logs (
    id             BIGSERIAL PRIMARY KEY,
    uid            TEXT NOT NULL,
    card_id        TEXT NOT NULL,
    rating         SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 4),
    state          TEXT NOT NULL CHECK (state IN ('new', 'learning', 'review', 'relearning')),
    elapsed_days   REAL NOT NULL DEFAULT 0.0,
    scheduled_days REAL NOT NULL DEFAULT 0.0,
    reviewed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_user_card FOREIGN KEY (uid, card_id) 
        REFERENCES manabu.card_states(uid, card_id) ON DELETE CASCADE
);

CREATE INDEX idx_review_logs_card_history ON manabu.review_logs (uid, card_id, reviewed_at ASC);

-- 4. User Cloud Backups
CREATE TABLE manabu.user_backups (
    uid            TEXT PRIMARY KEY REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
    backup_data    JSONB NOT NULL,
    version        INT NOT NULL DEFAULT 1,
    synced_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Global App Configuration & FSRS-6 Weights
CREATE TABLE manabu.app_config (
    key            TEXT PRIMARY KEY,
    value          JSONB NOT NULL,
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```
