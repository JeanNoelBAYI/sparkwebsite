"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import { Badge } from "@src/components/ui/badge";
import type { CurrencyCode } from "@src/types/calculator";

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

export default function PricingPlans({ currency }: { currency: CurrencyCode }) {
  const { t } = useTranslation();
  const currentPrices = PRICING_DATA[currency];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Basic */}
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t("pricing.basic.tagline", "White-label, self-managed")}
            </span>
            <h3 className="font-display text-2xl font-bold">
              {t("pricing.matrix.colBasic", "Basic")}
            </h3>
            <div>
              <p className="font-display text-4xl font-extrabold text-foreground">
                {currentPrices.basic.price}
              </p>
              <span className="text-xs text-muted-foreground block mt-1">
                {t("pricing.basic.setupNote", "one-time platform set-up fee")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-4 border-y border-border text-xs">
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.fleetSizeLabel", "Fleet size")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.basic.fleetSize", "Up to 500 vehicles")}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.launchLabel", "Launch time")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.basic.launch", "4 weeks")}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {[
                t("pricing.basic.item1", "Operator dashboard"),
                t("pricing.basic.item2", "White-label rider apps (iOS & Android)"),
                t("pricing.basic.item3", "1 IoT hardware brand of your choice"),
                t("pricing.basic.item4", "Omni, Sentinel or code lock support"),
                t("pricing.basic.item5", "20+ integrated payment platforms"),
                t("pricing.basic.item6", "Multi-language & multi-currency"),
                t("pricing.basic.item7", "Zone management, heatmaps & analytics"),
                t("pricing.basic.item8", "Support up to 5h/month"),
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
              {t("pricing.basic.cta", "Get Started")}
            </Button>
          </Link>
        </div>

        {/* Standard (Featured) */}
        <div className="rounded-3xl border-2 border-[#12D18E] bg-[#F0FBF5]/40 p-8 shadow-xl dark:bg-[#0E1522] flex flex-col justify-between space-y-6 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <Badge
              variant="green"
              className="bg-[#12D18E] text-[#0B1220] font-bold px-3 py-1 shadow"
            >
              {t("pricing.standard.badge", "Most Popular")}
            </Badge>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
              {t("pricing.standard.tagline", "White-label, with employee apps")}
            </span>
            <h3 className="font-display text-2xl font-bold">
              {t("pricing.matrix.colStandard", "Standard")}
            </h3>
            <div>
              <p className="font-display text-4xl font-extrabold text-[#102A23] dark:text-[#12D18E]">
                {currentPrices.standard.price}
              </p>
              <span className="text-xs text-muted-foreground block mt-1">
                {t("pricing.basic.setupNote", "one-time platform set-up fee")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-4 border-y border-[#12D18E]/30 text-xs">
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.fleetSizeLabel", "Fleet size")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.standard.fleetSize", "Up to 1,500 vehicles")}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.launchLabel", "Launch time")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.standard.launch", "8 weeks")}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {[
                t("pricing.standard.item1", "Everything in Basic, plus:"),
                t("pricing.standard.item2", "Mobile apps for chargers/employees"),
                t("pricing.standard.item3", "Scooters, bikes, mopeds, cars & multi-vehicle"),
                t("pricing.standard.item4", "Up to 3 IoT brands + 1 custom integration"),
                t("pricing.standard.item5", "Docking/charging support (Duckt or Knot)"),
                t("pricing.standard.item6", "Support up to 10h/month"),
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
              {t("pricing.standard.cta", "Talk to Sales")}
            </Button>
          </Link>
        </div>

        {/* Premium */}
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
              {t("pricing.premium.tagline", "Fully custom, enterprise-grade")}
            </span>
            <h3 className="font-display text-2xl font-bold">
              {t("pricing.matrix.colPremium", "Premium")}
            </h3>
            <div>
              <p className="font-display text-4xl font-extrabold text-foreground">
                {currentPrices.premium.price}
              </p>
              <span className="text-xs text-muted-foreground block mt-1">
                {t("pricing.basic.setupNote", "one-time platform set-up fee")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-4 border-y border-border text-xs">
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.fleetSizeLabel", "Fleet size")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.premium.fleetSize", "Up to 3,000 vehicles")}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">
                  {t("pricing.basic.launchLabel", "Launch time")}
                </span>
                <span className="font-bold text-foreground">
                  {t("pricing.premium.launch", "As agreed")}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {[
                t("pricing.premium.item1", "Everything in Standard, plus:"),
                t("pricing.premium.item2", "Any vehicle type, any IoT brand"),
                t("pricing.premium.item3", "Docking/charging support (Duckt and Knot)"),
                t("pricing.premium.item4", "Loyalty module & online invoicing included"),
                t("pricing.premium.item5", "Unlimited MDS/GBFS API requests"),
                t("pricing.premium.item6", "No “Powered by Trekk” badge"),
                t("pricing.premium.item7", "Dedicated support (up to 8h/month)"),
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
              {t("pricing.premium.cta", "Request Enterprise Pricing")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

