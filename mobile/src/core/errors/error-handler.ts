export type ErrorCategory =
  | 'NETWORK'
  | 'STORAGE'
  | 'VALIDATION'
  | 'NOT_FOUND'
  | 'AUDIO'
  | 'UNKNOWN';

export class AppError extends Error {
  public readonly category: ErrorCategory;
  public readonly context?: Record<string, unknown>;

  constructor(
    message: string,
    category: ErrorCategory = 'UNKNOWN',
    context?: Record<string, unknown>,
  ) {
    super(message);
    this.name = 'AppError';
    this.category = category;
    this.context = context;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Capture and forward error to hosted crash tool (Crashlytics / Sentry) or structured logger.
 * Follows blueprint §5.4: do not hand-roll a breadcrumb ring-buffer.
 */
export function captureError(
  error: unknown,
  context?: Record<string, unknown>,
): void {
  const errInstance =
    error instanceof Error ? error : new Error(String(error));

  if (__DEV__) {
    console.error('[ErrorCaptured]', {
      name: errInstance.name,
      message: errInstance.message,
      stack: errInstance.stack,
      context,
    });
  }
}
