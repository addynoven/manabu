import pg from 'pg';
import fs from 'fs';
import path from 'path';

async function migrate() {
  const ca = fs.existsSync(path.resolve(__dirname, '../ca.pem'))
    ? fs.readFileSync(path.resolve(__dirname, '../ca.pem'), 'utf8')
    : undefined;

  const pool = new pg.Pool({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: ca ? { rejectUnauthorized: true, ca } : { rejectUnauthorized: false },
  });

  const client = await pool.connect();
  console.log('Connected to PostgreSQL for migrations in schema [manabu]...');

  try {
    await client.query('BEGIN');
    await client.query('CREATE SCHEMA IF NOT EXISTS manabu;');
    await client.query('SET search_path TO manabu, public;');

    // 1. Profiles
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.profiles (
        uid              text PRIMARY KEY,
        display_name     text NOT NULL CHECK (char_length(display_name) BETWEEN 1 AND 24),
        avatar_emoji     text NOT NULL DEFAULT '🥋' CHECK (char_length(avatar_emoji) <= 16),
        belt_rank        text NOT NULL DEFAULT 'white',
        level            integer NOT NULL DEFAULT 1 CHECK (level >= 1),
        total_xp         integer NOT NULL DEFAULT 0 CHECK (total_xp >= 0),
        weekly_xp        integer NOT NULL DEFAULT 0 CHECK (weekly_xp >= 0),
        week_id          text NOT NULL,
        current_streak   integer NOT NULL DEFAULT 0 CHECK (current_streak >= 0),
        last_active_date date,
        daily_date       date,
        daily_score      integer,
        daily_time_sec   numeric,
        daily_accuracy   numeric,
        friend_code      text NOT NULL UNIQUE CHECK (friend_code ~ '^[A-HJ-NP-Z2-9]{8}$'),
        banned           boolean NOT NULL DEFAULT false,
        created_at       timestamptz NOT NULL DEFAULT now(),
        updated_at       timestamptz NOT NULL DEFAULT now()
      );
    `);

    // 2. Friend Requests
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.friend_requests (
        id            bigserial PRIMARY KEY,
        from_uid      text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        to_uid        text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','accepted','declined')),
        created_at    timestamptz NOT NULL DEFAULT now(),
        responded_at  timestamptz,
        CHECK (from_uid <> to_uid),
        UNIQUE (from_uid, to_uid)
      );
      CREATE INDEX IF NOT EXISTS friend_requests_to_idx ON manabu.friend_requests (to_uid, status);
    `);

    // 3. Friendships
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.friendships (
        user_a      text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        user_b      text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        created_at  timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY (user_a, user_b),
        CHECK (user_a < user_b)
      );
      CREATE INDEX IF NOT EXISTS friendships_b_idx ON manabu.friendships (user_b);
    `);

    // 4. Match Results
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.match_results (
        id          uuid PRIMARY KEY,
        game        text NOT NULL CHECK (game IN ('kanjiDuel','karuta','shiritori')),
        player_a    text NOT NULL,
        player_b    text NOT NULL,
        wins_a      integer NOT NULL DEFAULT 0,
        wins_b      integer NOT NULL DEFAULT 0,
        winner      text,
        reason      text NOT NULL,
        rounds      integer NOT NULL DEFAULT 0,
        started_at  timestamptz NOT NULL,
        ended_at    timestamptz NOT NULL
      );
    `);

    // 5. App Config
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.app_config (
        key    text PRIMARY KEY,
        value  jsonb NOT NULL
      );
      INSERT INTO manabu.app_config (key, value)
      VALUES ('flags', '{"social": true, "duels": true, "minAppVersion": 1}'::jsonb)
      ON CONFLICT (key) DO NOTHING;
    `);

    // 6. Score Challenges
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.score_challenges (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        game          text NOT NULL CHECK (game IN ('rain','snake','catch','survival')),
        mode          text NOT NULL,
        creator_uid   text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        target_uid    text NOT NULL REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        creator_score integer NOT NULL CHECK (creator_score >= 0),
        target_score  integer,
        status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','completed','declined','expired')),
        created_at    timestamptz NOT NULL DEFAULT now(),
        expires_at    timestamptz NOT NULL,
        completed_at  timestamptz
      );
    `);

    // 7. User Backups (Replaces Firestore private sync completely)
    await client.query(`
      CREATE TABLE IF NOT EXISTS manabu.user_backups (
        uid          text PRIMARY KEY REFERENCES manabu.profiles(uid) ON DELETE CASCADE,
        backup_data  jsonb NOT NULL,
        version      integer NOT NULL DEFAULT 1,
        synced_at    timestamptz NOT NULL DEFAULT now()
      );
    `);

    await client.query('COMMIT');
    console.log('✓ All migrations applied successfully to schema [manabu]!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

migrate();
