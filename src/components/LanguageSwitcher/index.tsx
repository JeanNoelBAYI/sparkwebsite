"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import { SUPPORTED_LOCALES } from "@src/constants/i18n";
import type { SupportedLocale } from "@src/types/i18n";
import { cn } from "@src/lib/utils";

export default function LanguageSwitcher({
  className,
  isLight = false,
}: {
  className?: string;
  isLight?: boolean;
}) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption =
    SUPPORTED_LOCALES.find((item) => item.code === locale) ||
    SUPPORTED_LOCALES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur transition focus:outline-none",
          isLight
            ? "border border-[#0B1220]/20 bg-black/5 text-[#0B1220] hover:bg-black/10 hover:border-[#12D18E]"
            : "border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-[#12D18E]"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <Globe className="size-3.5 text-[#12D18E]" />
        <span>{currentOption?.label}</span>
        <ChevronDown
          className={cn(
            "size-3 transition-transform duration-200",
            isLight ? "text-[#0B1220]/70" : "text-white/70",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-2xl border border-white/15 bg-[#0B1510] p-1.5 shadow-2xl ring-1 ring-black/20 focus:outline-none animate-in fade-in zoom-in-95 duration-150">
          {SUPPORTED_LOCALES.map((item) => {
            const isSelected = item.code === locale;
            return (
              <button
                key={item.code}
                onClick={() => {
                  setLocale(item.code as SupportedLocale);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition",
                  isSelected
                    ? "bg-[#12D18E]/20 text-[#12D18E]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <span>{item.name}</span>
                {isSelected && <Check className="size-3.5 text-[#12D18E]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
