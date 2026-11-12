// src/types/i18n.ts

export type SupportedLocale = "en" | "fr" | "es";

export type TranslationDictionary = Record<string, string>;

export type I18nContextType = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string, fallback?: string) => string;
};

