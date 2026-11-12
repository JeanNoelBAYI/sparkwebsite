// src/types/generic.ts

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Dictionary<T = string> = Record<string, T>;

export type ApiResponse<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};

export type SelectOption<T = string> = {
  value: T;
  label: string;
  description?: string;
  disabled?: boolean;
};

