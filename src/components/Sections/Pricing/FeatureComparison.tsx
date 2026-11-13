"use client";

import React, { useState } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@src/lib/utils";
import type { CurrencyCode } from "@src/types/calculator";

type CellValue = boolean | string;

type ComparisonRow = {
  feature: string;
  basic: CellValue;
  standard: CellValue;
  premium: CellValue;
};

type ComparisonCategory = {
  id: string;
  title: string;
  rows: ComparisonRow[];
};

const SETUP_FEES: Record<CurrencyCode, [string, string, string]> = {
  NGN: ["₦5,334,000", "₦8,001,000", "₦10,667,000"],
  USD: ["$4,000", "$6,000", "$8,000"],
  GHS: ["GH₵45,000", "GH₵67,500", "GH₵90,000"],
  XOF: ["FCFA2,264,000", "FCFA3,396,000", "FCFA4,528,000"],
  EUR: ["€3,460", "€5,190", "€6,910"],
};

function renderCell(val: CellValue) {
  if (val === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
        <Check className="size-3.5 stroke-[2.5]" />
      </span>
    );
  }
  if (val === false) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
        <Minus className="size-3.5" />
      </span>
    );
  }
  return <span className="text-xs text-foreground/90 leading-relaxed">{val}</span>;
}

export default function FeatureComparison({
  currency,
}: {
  currency: CurrencyCode;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const fees = SETUP_FEES[currency];

  const categories: ComparisonCategory[] = [
    {
      id: "overview",
      title: "Package Overview",
      rows: [
        { feature: "Launch time / lead time", basic: "4 weeks", standard: "8 weeks", premium: "As agreed" },
        { feature: "Fleet size", basic: "Up to 500 vehicles", standard: "Up to 1,500 vehicles", premium: "Up to 3,000 vehicles" },
        { feature: "Dashboard to manage operations", basic: true, standard: true, premium: true },
        { feature: "White-label mobile apps for users (iOS, Android)", basic: true, standard: true, premium: true },
        { feature: "Mobile apps for chargers / employees (iOS, Android)", basic: false, standard: true, premium: true },
      ],
    },
    {
      id: "hardware",
      title: "Vehicles & Hardware",
      rows: [
        { feature: "Supported vehicle types", basic: "Scooters, bikes", standard: "Scooters, bikes, mopeds, cars, multi-vehicle", premium: "Any" },
        {
          feature: "Supported IoT brands",
          basic: "Choose 1 of: Segway, Teltonika, Acton, Omni, Okai, Fitrider, Freego, Zimo, Marti, Comodule, Hongji, Yadea, Niu, NEXT, GeoTab, Acacus, INVERS",
          standard: "Choose up to 3 of the same brand list",
          premium: "Choose up to 3 of the same brand list, plus 1 custom integration included",
        },
        {
          feature: "Integrated smart or manual locks",
          basic: "Omni, Sentinel or code lock",
          standard: "Choose up to 2 of: Omni, Sentinel, code lock",
          premium: "Choose up to 2 of: Omni, Sentinel, code lock, plus 1 custom integration included",
        },
        { feature: "Docking / charging station support", basic: false, standard: "Duckt or Knot", premium: "Duckt and Knot" },
      ],
    },
    {
      id: "payments",
      title: "Payments",
      rows: [
        {
          feature: "Supported payment platforms",
          basic: "Flutterwave, PayStack, Mobile Money, Kkiapay, M-Pesa, Stripe, Apple Pay, Google Pay, PayPal & 15+ gateways",
          standard: "Flutterwave, PayStack, Mobile Money, Stripe, Apple Pay, Google Pay, PayPal & 15+ gateways",
          premium: "Same as Standard, plus 1 custom integration included",
        },
        { feature: "Pay-per-ride or top-up wallet payment type", basic: true, standard: true, premium: true },
        { feature: "Balance auto top-up", basic: true, standard: true, premium: true },
        { feature: "Subscriptions and passes", basic: true, standard: true, premium: true },
        { feature: "Add-ons (e.g. insurance)", basic: true, standard: true, premium: true },
        { feature: "Online invoicing system (add-on)", basic: "Optional", standard: "Optional", premium: true },
      ],
    },
    {
      id: "operations",
      title: "Operations & Fleet Management",
      rows: [
        { feature: "Employee role management", basic: true, standard: true, premium: true },
        { feature: "Alert notification system", basic: true, standard: true, premium: true },
        { feature: "Customizable tutorials & 30+ app parameters", basic: true, standard: true, premium: true },
        { feature: "Multi-account, multi-language & multi-currency support", basic: true, standard: true, premium: true },
        { feature: "Auto-end ride if vehicle is abandoned", basic: true, standard: true, premium: true },
        { feature: "Auto-refunds of unsuccessful rides", basic: true, standard: true, premium: true },
        { feature: "Group rides (up to 5 vehicles) & private fleets", basic: true, standard: true, premium: true },
      ],
    },
    {
      id: "data",
      title: "Data & Intelligence",
      rows: [
        { feature: "Realtime fleet data & location history", basic: true, standard: true, premium: true },
        { feature: "Ride, vehicle and customer management", basic: true, standard: true, premium: true },
        { feature: "Zone management (parking, no-parking, bonus, speed limit, no-go, rebalancing)", basic: true, standard: true, premium: true },
        { feature: "Heatmaps, analytics & data export", basic: true, standard: true, premium: true },
        { feature: "ID / driving licence verification & reservation system", basic: true, standard: true, premium: true },
        { feature: "AI-powered vehicle inspection", basic: "Optional", standard: "Optional", premium: "Optional" },
        { feature: "MDS/GBFS support", basic: "Up to 10 requests/min", standard: "Up to 10 requests/min", premium: "Unlimited" },
      ],
    },
    {
      id: "marketing",
      title: "Marketing & Growth",
      rows: [
        { feature: "Referral program & push notifications", basic: true, standard: true, premium: true },
        { feature: "Promo codes, vouchers & automated email marketing", basic: true, standard: true, premium: true },
        { feature: "Online chat", basic: true, standard: true, premium: true },
        { feature: "Loyalty module", basic: "Optional", standard: "Optional", premium: true },
      ],
    },
    {
      id: "support",
      title: "Support & Branding",
      rows: [
        { feature: "Support", basic: "Up to 5h/month", standard: "Up to 10h/month", premium: "Dedicated (up to 8h/month)" },
        { feature: "“Powered by Trekk” badge", basic: "Sticker", standard: "Sticker", premium: "None" },
        { feature: "One-time platform set-up fee", basic: fees[0], standard: fees[1], premium: fees[2] },
      ],
    },
  ];

  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-3xl space-y-3">
        <span className="eyebrow">Full Comparison</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
          Every Feature, Side by Side.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          A complete breakdown of what&apos;s included in Basic, Standard and Premium — from hardware integrations to support hours.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs font-bold transition border",
            activeCategory === "all"
              ? "bg-[#12D18E] text-[#0B1220] border-[#12D18E]"
              : "border-border bg-white dark:bg-[#0E1522] text-muted-foreground hover:border-[#12D18E]"
          )}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition border",
              activeCategory === cat.id
                ? "bg-[#12D18E] text-[#0B1220] border-[#12D18E]"
                : "border-border bg-white dark:bg-[#0E1522] text-muted-foreground hover:border-[#12D18E]"
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-3xl border border-border bg-white dark:bg-[#0E1522] shadow-sm">
        <table className="w-full min-w-[720px] text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground w-[34%]">
                Feature
              </th>
              <th className="py-4 px-5 text-sm font-display font-bold text-foreground w-[22%]">
                Basic
              </th>
              <th className="py-4 px-5 text-sm font-display font-bold text-[#12D18E] w-[22%]">
                Standard
              </th>
              <th className="py-4 px-5 text-sm font-display font-bold text-[#2E6BFF] w-[22%]">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleCategories.map((cat) => (
              <React.Fragment key={cat.id}>
                <tr className="bg-muted/25 border-y border-border/60">
                  <td
                    colSpan={4}
                    className="py-3 px-6 text-xs font-extrabold uppercase tracking-wider text-foreground"
                  >
                    {cat.title}
                  </td>
                </tr>
                {cat.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/40 last:border-b-0 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-3.5 px-6 text-xs font-semibold text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 align-middle">{renderCell(row.basic)}</td>
                    <td className="py-3.5 px-5 align-middle">{renderCell(row.standard)}</td>
                    <td className="py-3.5 px-5 align-middle">{renderCell(row.premium)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

