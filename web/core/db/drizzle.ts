import { drizzle } from 'drizzle-orm/node-postgres';
import { getDbPool } from './postgres';
import * as schema from './schema';

let drizzleInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDrizzleDb() {
  if (drizzleInstance) return drizzleInstance;
  const pool = getDbPool();
  drizzleInstance = drizzle(pool, { schema });
  return drizzleInstance;
}

export { schema };
