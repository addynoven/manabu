import { z } from 'zod';
import { ok, err, type Result } from '../errors/result';
import { AppError } from '../errors/error-handler';

/**
 * Pure function mapping raw external payloads to typed domain entities via Zod schemas.
 */
export function mapEntity<T>(
  schema: z.ZodType<T>,
  data: unknown,
): Result<T, AppError> {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return err(
      new AppError('Entity validation failed', 'VALIDATION', {
        issues: parsed.error.issues,
      }),
    );
  }
  return ok(parsed.data);
}
