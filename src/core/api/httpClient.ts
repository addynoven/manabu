import { ok, err, type Result } from '../errors/result';
import { AppError } from '../errors/error-handler';

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
}

/**
 * Traced HTTP Client returning Result<T, AppError>.
 * Blueprint §2: Includes X-Request-ID and 10s default timeout.
 */
export async function httpClient<T>(
  url: string,
  options: RequestOptions = {},
): Promise<Result<T, AppError>> {
  const { timeoutMs = 10000, headers = {}, ...rest } = options;
  const requestId = `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        'X-Request-ID': requestId,
        ...headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return err(
        new AppError(
          `HTTP Error ${response.status}: ${response.statusText}`,
          'NETWORK',
          { url, status: response.status, requestId },
        ),
      );
    }

    const data = (await response.json()) as T;
    return ok(data);
  } catch (error: unknown) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      return err(
        new AppError('Request timed out', 'NETWORK', {
          url,
          timeoutMs,
          requestId,
        }),
      );
    }
    return err(
      new AppError(
        error instanceof Error ? error.message : 'Unknown network failure',
        'NETWORK',
        { url, requestId },
      ),
    );
  }
}
