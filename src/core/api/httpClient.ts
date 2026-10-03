import { ok, err, type Result } from '../errors/result';
import { AppError } from '../errors/error-handler';
import { firebaseAuth } from './firebase';

export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_BASE_URL || 'https://manabu-admin.vercel.app';

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  skipAuth?: boolean;
}

/**
 * Low-level traced HTTP Client returning Result<T, AppError>.
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
      let errorData: any = null;
      try {
        errorData = await response.json();
      } catch {}

      const message =
        errorData?.error?.message ||
        `HTTP Error ${response.status}: ${response.statusText}`;

      return err(
        new AppError(message, 'NETWORK', {
          url,
          status: response.status,
          code: errorData?.error?.code,
          requestId,
        }),
      );
    }

    if (response.status === 204) {
      return ok({} as T);
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

/**
 * Authenticated API Client for Next.js backend on Vercel (/api/v1/*).
 * Automatically resolves relative paths, attaches Firebase ID token,
 * and retries once on 401 with refreshed token.
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<Result<T, AppError>> {
  const fullUrl = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const headers: Record<string, string> = {
    ...((options.headers as Record<string, string>) || {}),
  };

  if (!options.skipAuth && firebaseAuth.currentUser && typeof firebaseAuth.currentUser.getIdToken === 'function') {
    try {
      const token = await firebaseAuth.currentUser.getIdToken();
      headers['Authorization'] = `Bearer ${token}`;
    } catch (e) {
      console.warn('[ApiClient] Failed to acquire ID token:', e);
    }
  }

  const result = await httpClient<T>(fullUrl, { ...options, headers });

  // On 401 Unauthorized, refresh token once and retry
  if (!result.ok && result.error.context?.status === 401 && !options.skipAuth && firebaseAuth.currentUser) {
    try {
      const freshToken = await firebaseAuth.currentUser.getIdToken(true);
      headers['Authorization'] = `Bearer ${freshToken}`;
      return await httpClient<T>(fullUrl, { ...options, headers });
    } catch {
      return result;
    }
  }

  return result;
}

apiClient.get = <T>(endpoint: string, options?: RequestOptions) =>
  apiClient<T>(endpoint, { ...options, method: 'GET' });

apiClient.post = <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
  apiClient<T>(endpoint, {
    ...options,
    method: 'POST',
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

apiClient.put = <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
  apiClient<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

apiClient.delete = <T>(endpoint: string, options?: RequestOptions) =>
  apiClient<T>(endpoint, { ...options, method: 'DELETE' });
