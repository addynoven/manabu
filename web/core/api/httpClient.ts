import { Result, ok, err } from '../errors/result';
import { AppError } from '../errors/error-handler';
import { firebaseAuth } from './firebaseClient';

export interface HttpRequestOptions extends RequestInit {
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  ok: boolean;
  status: number;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export async function fetchWithAuth<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const currentUser = firebaseAuth.currentUser;
  if (currentUser) {
    try {
      const token = await currentUser.getIdToken();
      headers.set('Authorization', `Bearer ${token}`);
    } catch {}
  }

  try {
    const res = await fetch(endpoint, {
      ...options,
      headers,
    });

    if (res.status === 204) {
      return { ok: true, status: 204 };
    }

    let json: any = null;
    try {
      json = await res.json();
    } catch {}

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: json?.error || {
          code: `HTTP_${res.status}`,
          message: res.statusText || 'Request failed',
        },
      };
    }

    return {
      ok: true,
      status: res.status,
      data: json as T,
    };
  } catch (err: any) {
    return {
      ok: false,
      status: 0,
      error: {
        code: 'NETWORK_ERROR',
        message: err?.message || 'Network request failed',
      },
    };
  }
}

export async function httpClient<T>(
  url: string,
  options: HttpRequestOptions = {}
): Promise<Result<T, AppError>> {
  const { timeoutMs = 10000, headers = {}, ...rest } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const mergedHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Request-ID': requestId,
    ...headers,
  };

  try {
    const res = await fetch(url, {
      ...rest,
      headers: mergedHeaders,
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return err(new AppError(`HTTP ${res.status}: ${res.statusText}`, 'HTTP_ERROR', res.status, text));
    }

    const data = (await res.json()) as T;
    return ok(data);
  } catch (error: unknown) {
    clearTimeout(id);
    if (error instanceof Error && error.name === 'AbortError') {
      return err(new AppError(`Request timed out after ${timeoutMs}ms`, 'TIMEOUT_ERROR', 408));
    }
    return err(
      error instanceof AppError
        ? error
        : new AppError(error instanceof Error ? error.message : 'Network failure', 'NETWORK_ERROR', 500)
    );
  }
}
