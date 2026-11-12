// src/constants/i18n/index.ts
import type { SupportedLocale, TranslationDictionary } from "@src/types/i18n";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";

export { en, fr, es };

export const DICTIONARIES: Record<SupportedLocale, TranslationDictionary> = {
  en,
  fr,
  es,
};

export const SUPPORTED_LOCALES: { code: SupportedLocale; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
];

