"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowRight,
  Bike,
  Car,
  Clock,
  Compass,
  Gauge,
  LockOpen,
  MapPin,
  Navigation,
  Repeat,
  Ship,
  Smartphone,
  Sparkles,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";
import {
  INDUSTRY_OPERATING_MODELS,
  INDUSTRY_PAGES,
  INDUSTRY_VEHICLE_TYPES,
  type IndustryHighlightCard,
} from "@src/constants/industryPages";

const HIGHLIGHT_ICON_MAP: Record<
  IndustryHighlightCard["icon"],
  React.ComponentType<{ className?: string }>
> = {
  userCheck: UserCheck,
  lockOpen: LockOpen,
  gauge: Gauge,
  mapPin: MapPin,
  smartphone: Smartphone,
  clock: Clock,
  trendingUp: TrendingUp,
};

const VEHICLE_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  scooter: Zap,
  moped: Compass,
  bike: Bike,
  car: Car,
  truck: Truck,
  ship: Ship,
  sparkles: Sparkles,
};

const OPERATING_MODEL_ICONS = [
  MapPin,
  Navigation,
  Compass,
  Users,
  Wallet,
  Repeat,
];

export default function IndustryProductPage() {
  const params = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const pageData = params?.slug ? INDUSTRY_PAGES[params.slug] : undefined;

  if (!pageData) {
    notFound();
  }

  return (
    <div className="space-y-20 pb-20">
      {/* ================= HERO SECTION (SCREENSHOTS 2, 4, 6) ================= */}
      <section className="container mx-auto px-4 pt-24 pb-6 sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Showcase with Paired Background */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto flex h-[430px] sm:h-[500px] lg:h-[540px] w-full max-w-[520px] items-center justify-center">
              <Image
                src={pageData.bgImage}
                alt=""
                fill
                className="object-contain"
                priority
              />
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <Image
                  src={pageData.image}
                  alt={pageData.imageAlt}
                  width={1290}
                  height={2796}
                  className="h-[390px] sm:h-[460px] lg:h-[500px] w-auto object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Copy + Book Demo CTA + 4-Column Stats Bar */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E]">
              <span>{t(pageData.badgeKey, pageData.defaultBadge)}</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] leading-[1.08]">
              {t(pageData.titleKey, pageData.defaultTitle)}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t(pageData.descKey, pageData.defaultDesc)}
            </p>

            <div className="pt-1">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-lg shadow-[#12D18E]/20"
                >
                  <span>{t("platform.common.bookDemo", "Book Demo")}</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            {/* 4-Column Proof Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {pageData.stats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="rounded-xl border border-border bg-muted/40 px-4 py-3.5"
                >
                  <div className="font-display text-lg sm:text-xl font-extrabold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {t(stat.labelKey, stat.defaultLabel)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION (SCREENSHOTS 3, 5, RIDE-HAILING) ================= */}
      <section className="border-y border-border bg-[#F8FAF8] py-16 lg:py-24 dark:bg-[#0B1510]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Split Header */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
                {t(pageData.highlightsTitleKey, pageData.defaultHighlightsTitle)}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {t(
                  pageData.highlightsSubtitleKey,
                  pageData.defaultHighlightsSubtitle
                )}
              </p>
            </div>
          </div>

          {/* 4-Card Grid (Digital Rental - Screenshot 5) */}
          {pageData.highlightsLayout === "four-cards" && pageData.highlights && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pageData.highlights.map((card) => {
                const IconComp = HIGHLIGHT_ICON_MAP[card.icon];
                return (
                  <div
                    key={card.titleKey}
                    className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all hover:border-[#12D18E]/40 hover:shadow-md dark:bg-[#0E1522]"
                  >
                    <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2.5">
                      {t(card.titleKey, card.defaultTitle)}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {t(card.descKey, card.defaultDesc)}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* 3-Card Grid (Ride-Hailing - Screenshot 7) */}
          {pageData.highlightsLayout === "three-cards" && pageData.highlights && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {pageData.highlights.map((card) => {
                const IconComp = HIGHLIGHT_ICON_MAP[card.icon];
                return (
                  <div
                    key={card.titleKey}
                    className="rounded-2xl border border-border bg-white p-7 text-center shadow-sm transition-all hover:border-[#12D18E]/40 hover:shadow-md dark:bg-[#0E1522]"
                  >
                    <div className="mx-auto mb-5 flex size-11 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {t(card.titleKey, card.defaultTitle)}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(card.descKey, card.defaultDesc)}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Vehicle Type + Operating Model 2-Card Showcase (Screenshot 3 & bottom of Screenshot 5) */}
          {pageData.showVehicleAndOperatingModelBlock && (
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
              {/* Left Card: Suited for any vehicle type */}
              <div className="lg:col-span-5 rounded-3xl border border-border bg-white p-7 sm:p-8 shadow-sm dark:bg-[#0E1522]">
                <h3 className="font-display text-center text-xl font-bold text-foreground mb-7">
                  {t(
                    "industries.common.suitedVehicles",
                    "Suited for any vehicle type"
                  )}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {INDUSTRY_VEHICLE_TYPES.map((vt) => {
                    const IconComp = VEHICLE_ICON_MAP[vt.icon] || Car;
                    return (
                      <div
                        key={vt.key}
                        className="flex flex-col items-center gap-2 text-center"
                      >
                        <div className="flex size-12 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                          <IconComp className="size-5" />
                        </div>
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {t(vt.key, vt.defaultLabel)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center Arrow */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                <ArrowRight className="size-7 text-muted-foreground/60" />
              </div>

              {/* Right Dark Card: Suited for any operating model */}
              <div className="lg:col-span-6 rounded-3xl bg-[#0B231B] p-7 sm:p-8 text-white shadow-xl">
                <h3 className="font-display text-center text-xl font-bold text-white mb-7">
                  {t(
                    "industries.common.suitedModels",
                    "Suited for any operating model"
                  )}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {INDUSTRY_OPERATING_MODELS.map((model, idx) => {
                    const IconComp =
                      OPERATING_MODEL_ICONS[idx % OPERATING_MODEL_ICONS.length] ?? MapPin;
                    return (
                      <div
                        key={model.key}
                        className="flex flex-col items-center justify-center rounded-2xl bg-white p-5 text-center text-slate-900 shadow-sm"
                      >
                        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                          <IconComp className="size-5" />
                        </div>
                        <span className="text-xs font-semibold leading-snug text-slate-800">
                          {t(model.key, model.defaultLabel)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1813] px-6 py-12 sm:px-12 sm:py-16 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              {t("platform.common.ctaTitle", "Ready to run your fleet on Trekk?")}
            </h2>
            <p className="text-sm sm:text-base text-[#D3E4DC] leading-relaxed">
              {t(
                "platform.common.ctaDesc",
                "Book a tailored walkthrough of our Fleet Dashboard, Rider App, IoT connectivity, and operational modules."
              )}
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7"
              >
                <span>{t("platform.common.bookDemo", "Book Demo")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
