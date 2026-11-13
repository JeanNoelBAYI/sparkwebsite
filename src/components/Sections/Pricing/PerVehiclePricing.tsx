"use client";

import React from "react";
import type { CurrencyCode } from "@src/types/calculator";

const TIERS_BY_CURRENCY: Record<
  CurrencyCode,
  { range: string; price: string }[]
> = {
  NGN: [
    { range: "1 – 100", price: "₦10,667" },
    { range: "101 – 500", price: "₦9,334" },
    { range: "501 – 1,000", price: "₦6,667" },
    { range: "1,001 and above", price: "₦5,334" },
  ],
  USD: [
    { range: "1 – 100", price: "$8" },
    { range: "101 – 500", price: "$7" },
    { range: "501 – 1,000", price: "$5" },
    { range: "1,001 and above", price: "$4" },
  ],
  GHS: [
    { range: "1 – 100", price: "GH₵90" },
    { range: "101 – 500", price: "GH₵79" },
    { range: "501 – 1,000", price: "GH₵56" },
    { range: "1,001 and above", price: "GH₵45" },
  ],
  XOF: [
    { range: "1 – 100", price: "FCFA4,528" },
    { range: "101 – 500", price: "FCFA3,962" },
    { range: "501 – 1,000", price: "FCFA2,830" },
    { range: "1,001 and above", price: "FCFA2,264" },
  ],
  EUR: [
    { range: "1 – 100", price: "€7" },
    { range: "101 – 500", price: "€6" },
    { range: "501 – 1,000", price: "€4" },
    { range: "1,001 and above", price: "€3.50" },
  ],
};

export default function PerVehiclePricing({
  currency,
}: {
  currency: CurrencyCode;
}) {
  const tiers = TIERS_BY_CURRENCY[currency];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="eyebrow">How Pricing Works</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
          A One-Time Set-Up Fee, Plus a Fixed Fee Per Vehicle.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Beyond the one-time platform set-up fee for your chosen package, Trekk charges a fixed monthly platform fee per active vehicle in your fleet. The more vehicles you operate, the lower your per-vehicle rate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier, idx) => (
          <div
            key={tier.range}
            className="rounded-2xl border border-border bg-white dark:bg-[#0E1522] p-6 shadow-sm space-y-3 hover:border-[#12D18E] transition"
          >
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <span>Tier 0{idx + 1}</span>
              <span className="text-[#12D18E]">Vehicles</span>
            </div>
            <p className="font-display text-lg font-bold text-foreground">
              {tier.range}
            </p>
            <div className="pt-2 border-t border-border/60">
              <p className="font-display text-3xl font-extrabold text-[#12D18E]">
                {tier.price}
              </p>
              <span className="text-xs text-muted-foreground">
                per vehicle / month
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

