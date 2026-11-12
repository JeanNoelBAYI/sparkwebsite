"use client";

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { I18nContextType, SupportedLocale } from "@src/types/i18n";
import { DICTIONARIES } from "@src/constants/i18n";

const STORAGE_KEY = "trekk-lang";

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
      if (stored && (stored === "en" || stored === "fr" || stored === "es")) {
        setLocaleState(stored);
        document.documentElement.setAttribute("lang", stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.setAttribute("lang", newLocale);
    } catch {
      // ignore
    }
  };

  const t = (key: string, fallback?: string): string => {
    const dict = DICTIONARIES[locale] || DICTIONARIES.en;
    if (dict && key in dict && dict[key] !== undefined) {
      return dict[key];
    }
    const enDict = DICTIONARIES.en;
    if (enDict && key in enDict && enDict[key] !== undefined) {
      return enDict[key];
    }
    return fallback ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    // Graceful fallback outside provider
    return {
      locale: "en",
      setLocale: () => {},
      t: (key: string, fallback?: string) => {
        const enDict = DICTIONARIES.en;
        return enDict?.[key] ?? fallback ?? key;
      },
    };
  }
  return context;
}

