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

  const connectionString = process.env.DATABASE_URL;
  if (connectionString) {
    pool = new pg.Pool({
      connectionString,
      ssl: ca ? { rejectUnauthorized: true, ca } : { rejectUnauthorized: false },
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
      ssl: ca ? { rejectUnauthorized: true, ca } : { rejectUnauthorized: false },
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
