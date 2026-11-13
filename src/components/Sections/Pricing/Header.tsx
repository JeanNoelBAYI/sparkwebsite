"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";
import { cn } from "@src/lib/utils";
import type { CurrencyCode } from "@src/types/calculator";

const CURRENCIES: { code: CurrencyCode; label: string }[] = [
  { code: "NGN", label: "₦ NGN" },
  { code: "USD", label: "$ USD" },
  { code: "GHS", label: "GH₵ GHS" },
  { code: "XOF", label: "FCFA XOF" },
  { code: "EUR", label: "€ EUR" },
];

export default function PricingHeader({
  currency,
  onCurrencyChange,
}: {
  currency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
}) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
      <span className="eyebrow">{t("pricing.eyebrow", "Pricing")}</span>
      <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-foreground">
        {t("pricing.h1", "Technology That Fits Your Business")}
      </h1>
      <p className="text-base text-muted-foreground sm:text-lg">
        {t(
          "pricing.heroLede",
          "No one-size-fits-all pricing. Choose the level of technology and support that matches your fleet. Pay in your local currency."
        )}
      </p>

      {/* Currency Switcher */}
      <div className="pt-6 flex flex-col items-center gap-3">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border bg-white p-1.5 shadow-sm dark:bg-[#0E1522]">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onCurrencyChange(c.code)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition",
                currency === c.code
                  ? "bg-[#12D18E] text-[#0B1220] shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {t(
            "pricing.currencyNote",
            "Prices shown outside Naira are indicative estimates. You’ll be billed in your local currency."
          ).replace(/<[^>]*>/g, "")}
        </p>
      </div>
    </section>
  );
}

