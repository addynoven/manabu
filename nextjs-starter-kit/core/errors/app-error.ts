export type AppErrorCode =
  | 'NOT_FOUND'
  | 'VALIDATION'
  | 'UNAUTHENTICATED'
  | 'FORBIDDEN'
  | 'CONFLICT'
  | 'INTERNAL';

export class AppError extends Error {
  constructor(
    public readonly code: AppErrorCode,
    message: string, // safe to show to users
    public readonly status: number = 500,
    options?: { cause?: unknown },
  ) {
    super(message, options);
    this.name = 'AppError';
  }
}
