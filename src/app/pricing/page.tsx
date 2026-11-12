"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import { Badge } from "@src/components/ui/badge";
import { cn } from "@src/lib/utils";
import type { CurrencyCode } from "@src/types/calculator";

const CURRENCIES: { code: CurrencyCode; label: string }[] = [
  { code: "NGN", label: "₦ NGN" },
  { code: "USD", label: "$ USD" },
  { code: "GHS", label: "GH₵ GHS" },
  { code: "XOF", label: "FCFA XOF" },
  { code: "EUR", label: "€ EUR" },
];

const PRICING_DATA: Record<
  CurrencyCode,
  {
    basic: { price: string; perVehicle: string };
    standard: { price: string; perVehicle: string };
    premium: { price: string; perVehicle: string };
  }
> = {
  NGN: {
    basic: { price: "₦5,334,000", perVehicle: "₦10,667" },
    standard: { price: "₦8,001,000", perVehicle: "₦9,334" },
    premium: { price: "₦10,667,000", perVehicle: "₦6,667" },
  },
  USD: {
    basic: { price: "$4,000", perVehicle: "$8" },
    standard: { price: "$6,000", perVehicle: "$7" },
    premium: { price: "$8,000", perVehicle: "$5" },
  },
  GHS: {
    basic: { price: "GH₵45,000", perVehicle: "GH₵90" },
    standard: { price: "GH₵67,500", perVehicle: "GH₵79" },
    premium: { price: "GH₵90,000", perVehicle: "GH₵56" },
  },
  XOF: {
    basic: { price: "FCFA2,264,000", perVehicle: "FCFA4,528" },
    standard: { price: "FCFA3,396,000", perVehicle: "FCFA3,962" },
    premium: { price: "FCFA4,528,000", perVehicle: "FCFA2,830" },
  },
  EUR: {
    basic: { price: "€3,460", perVehicle: "€7" },
    standard: { price: "€5,190", perVehicle: "€6" },
    premium: { price: "€6,910", perVehicle: "€4" },
  },
};

export default function PricingPage() {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState<CurrencyCode>("NGN");

  const currentPrices = PRICING_DATA[currency];

  return (
    <div className="space-y-20 py-16">
      {/* Header */}
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
                onClick={() => setCurrency(c.code)}
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
            )}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Self-Managed
              </span>
              <h3 className="font-display text-2xl font-bold">Basic</h3>
              <div>
                <p className="font-display text-4xl font-extrabold text-foreground">
                  {currentPrices.basic.price}
                </p>
                <span className="text-xs text-muted-foreground block mt-1">
                  one-time platform set-up fee
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 py-4 border-y border-border text-xs">
                <div>
                  <span className="text-muted-foreground block">Fleet Size</span>
                  <span className="font-bold text-foreground">Up to 500</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Launch Time</span>
                  <span className="font-bold text-foreground">4 weeks</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {[
                  "Operator web dashboard",
                  "White-label rider apps (iOS & Android)",
                  "1 IoT hardware brand of your choice",
                  "Cellular & BLE locking integrations",
                  "Integrated African payment gateways",
                  "Multi-language (EN / FR / ES)",
                  "Zone geofencing & analytics",
                  "Support up to 5h/month",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-[#12D18E]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="w-full">
              <Button variant="outline" className="w-full font-bold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Standard (Featured) */}
          <div className="rounded-3xl border-2 border-[#12D18E] bg-[#F0FBF5]/40 p-8 shadow-xl dark:bg-[#0E1522] flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge variant="green" className="bg-[#12D18E] text-[#0B1220] font-bold px-3 py-1 shadow">
                Most Popular
              </Badge>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
                With Employee & Field Apps
              </span>
              <h3 className="font-display text-2xl font-bold">Standard</h3>
              <div>
                <p className="font-display text-4xl font-extrabold text-[#102A23] dark:text-[#12D18E]">
                  {currentPrices.standard.price}
                </p>
                <span className="text-xs text-muted-foreground block mt-1">
                  one-time platform set-up fee
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 py-4 border-y border-[#12D18E]/30 text-xs">
                <div>
                  <span className="text-muted-foreground block">Fleet Size</span>
                  <span className="font-bold text-foreground">Up to 1,500</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Launch Time</span>
                  <span className="font-bold text-foreground">2 weeks</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {[
                  "Everything in Basic",
                  "Dedicated field operations mobile app",
                  "Automated battery swap dispatch engine",
                  "Damage ticketing & parts inventory",
                  "Speed limit corridors & parking photo AI audits",
                  "Custom promotional campaigns & promo codes",
                  "Priority phone & WhatsApp support (20h/mo)",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-[#12D18E]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="w-full">
              <Button className="w-full bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold shadow-md">
                Launch with Standard
              </Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
                Full Enterprise Concierge
              </span>
              <h3 className="font-display text-2xl font-bold">Premium</h3>
              <div>
                <p className="font-display text-4xl font-extrabold text-foreground">
                  {currentPrices.premium.price}
                </p>
                <span className="text-xs text-muted-foreground block mt-1">
                  one-time platform set-up fee
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 py-4 border-y border-border text-xs">
                <div>
                  <span className="text-muted-foreground block">Fleet Size</span>
                  <span className="font-bold text-foreground">Unlimited</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Launch Time</span>
                  <span className="font-bold text-foreground">2 weeks</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {[
                  "Everything in Standard",
                  "Custom IoT firmware development",
                  "Unlimited multi-city / multi-country fleets",
                  "Dedicated 24/7 technical operations engineer",
                  "Custom ERP & accounting webhooks",
                  "On-site launch support & local training",
                  "Unlimited support hours",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-[#2E6BFF]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="w-full">
              <Button variant="outline" className="w-full font-bold">
                Talk to Enterprise
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Currency Promise */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] space-y-4">
          <div className="flex items-center gap-2 text-foreground font-display font-bold text-base">
            <ShieldCheck className="size-5 text-[#12D18E]" />
            <span>Our Local Currency Promise</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We understand the challenges of foreign exchange volatility in Africa. You are never forced to pay software subscriptions in volatile US Dollars if your riders pay in Naira, Cedis, or CFA Francs. Trekk bills in the local currency of the market where you operate.
          </p>
        </div>
      </section>
    </div>
  );
}

