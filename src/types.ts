export type ID = string;

export type Nullable<T> = T | null;

export type AsyncState<T> = {
  data: Nullable<T>;
  isLoading: boolean;
  error: Nullable<string>;
};

export type AppThemeMode = 'light' | 'dark' | 'system' | 'japanese_paper';
