/**
 * Core Application Error Handling & Logging Singleton
 */

export class AppError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function captureError(error: unknown, context?: Record<string, unknown>): void {
  const time = new Date().toISOString();
  if (error instanceof AppError) {
    console.error(`[AppError ${error.code}] ${error.message}`, {
      statusCode: error.statusCode,
      details: error.details,
      context,
      time,
    });
  } else if (error instanceof Error) {
    console.error(`[UnhandledError] ${error.message}`, {
      stack: error.stack,
      context,
      time,
    });
  } else {
    console.error(`[UnknownError]`, { error, context, time });
  }
}
