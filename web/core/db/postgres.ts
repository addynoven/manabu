import pg from 'pg';
import fs from 'fs';
import path from 'path';

let pool: pg.Pool | null = null;

export function getDbPool(): pg.Pool {
  if (pool) return pool;

  let ca: string | undefined;
  if (process.env.PGSSL_CA) {
    ca = process.env.PGSSL_CA;
  } else {
    const caPath = path.resolve(process.cwd(), 'ca.pem');
    if (fs.existsSync(caPath)) {
      ca = fs.readFileSync(caPath, 'utf8');
    }
  }

  // Enforce strict TLS certificate verification in production
  const isProd = process.env.NODE_ENV === 'production';
  const sslConfig = ca
    ? { rejectUnauthorized: true, ca }
    : isProd
    ? { rejectUnauthorized: true }
    : { rejectUnauthorized: false };

  const connectionString = process.env.DATABASE_URL;
  if (connectionString) {
    pool = new pg.Pool({
      connectionString,
      ssl: sslConfig,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  } else {
    pool = new pg.Pool({
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT || 25798),
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE || 'defaultdb',
      ssl: sslConfig,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }

  pool.on('error', (err) => {
    console.error('[DB] Unexpected error on idle PostgreSQL client:', err);
  });

  return pool;
}

export async function query<T extends pg.QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<pg.QueryResult<T>> {
  const p = getDbPool();
  return p.query<T>(text, params);
}

export async function withTransaction<T>(
  callback: (client: pg.PoolClient) => Promise<T>
): Promise<T> {
  const p = getDbPool();
  const client = await p.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}
