"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@src/hooks/useTranslation";
import CustomButton from "@src/components/CustomButton";
import { cn } from "@src/lib/utils";

type ScreenItem = {
  image: string;
  alt: string;
};

const DASHBOARD_SCREENS: ScreenItem[] = [
  {
    image: "/images/dashboard/analytics.png",
    alt: "Trekk Mobility dashboard overview — rides, riders, vehicles, and revenue",
  },
  {
    image: "/images/dashboard/map.png",
    alt: "Trekk Mobility live fleet map with real-time vehicle locations",
  },
  {
    image: "/images/dashboard/fleet-management.png",
    alt: "Trekk Mobility geofencing and service area management",
  },
  {
    image: "/images/dashboard/vehicle-command.png",
    alt: "Trekk Mobility executed vehicle commands log",
  },
  {
    image: "/images/dashboard/promos.png",
    alt: "Trekk Mobility promo code and campaign management",
  },
];

const MOBILE_SCREENS: ScreenItem[] = [
  {
    image: "/images/mobile/home.png",
    alt: "Trekk rider app home screen with live scooter map",
  },
  {
    image: "/images/mobile/menu.png",
    alt: "Trekk rider app account menu",
  },
  {
    image: "/images/mobile/wallet.png",
    alt: "Trekk rider app wallet and payment methods",
  },
  {
    image: "/images/mobile/payment-history.png",
    alt: "Trekk rider app payment history",
  },
  {
    image: "/images/mobile/vehicles.png",
    alt: "Trekk rider app vehicle type selector",
  },
];

export default function HomeProductShowcase() {
  const { t } = useTranslation();

  const [dashboardIdx, setDashboardIdx] = useState<number>(2);
  const [mobileIdx, setMobileIdx] = useState<number>(0);
  const [isDashboardPaused, setIsDashboardPaused] = useState<boolean>(false);
  const [isMobilePaused, setIsMobilePaused] = useState<boolean>(false);

  useEffect(() => {
    if (isDashboardPaused) return;
    const interval = setInterval(() => {
      setDashboardIdx((prev) => (prev + 1) % DASHBOARD_SCREENS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isDashboardPaused]);

  useEffect(() => {
    if (isMobilePaused) return;
    const interval = setInterval(() => {
      setMobileIdx((prev) => (prev + 1) % MOBILE_SCREENS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobilePaused]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Copy, CTA & Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
            <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
            <span>{t("home.showcase.eyebrow", "Your Fleet, Every Screen")}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] dark:text-white leading-[1.08]">
            {t("home.showcase.h2", "One platform.<br>Every screen.")
              .split(/<br\s*\/?>/i)
              .map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {part}
                </React.Fragment>
              ))}
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B72] dark:text-slate-300 leading-relaxed max-w-xl">
            {t(
              "home.showcase.lede",
              "Run your fleet from a full command-center dashboard on the web, while every rider unlocks, pays, and rides from a white-label app in their pocket — the same real-time data, wherever you look."
            )}
          </p>

          <div className="pt-2">
            <Link href="/platform/fleet-dashboard">
              <CustomButton
                variant="primary"
                size="lg"
                rounded="full"
                withArrow
                className="px-8 text-base font-bold shadow-xl shadow-[#12D18E]/25 hover:shadow-2xl hover:shadow-[#12D18E]/40"
              >
                <span>{t("home.showcase.explore", "Explore the Platform")}</span>
              </CustomButton>
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-[#0E1522] px-4 py-2 text-xs font-semibold text-[#5B6B72] dark:text-slate-300 shadow-sm">
              <span className="size-2 rounded-full bg-[#12D18E] shrink-0" />
              <span>{t("home.showcase.badge1", "Live fleet dashboard")}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-[#0E1522] px-4 py-2 text-xs font-semibold text-[#5B6B72] dark:text-slate-300 shadow-sm">
              <span className="size-2 rounded-full bg-[#12D18E] shrink-0" />
              <span>{t("home.showcase.badge2", "iOS & Android rider app")}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-[#0E1522] px-4 py-2 text-xs font-semibold text-[#5B6B72] dark:text-slate-300 shadow-sm">
              <span className="size-2 rounded-full bg-[#12D18E] shrink-0" />
              <span>{t("home.showcase.badge3", "Real-time, always in sync")}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Laptop & Mobile Devices */}
        <div className="lg:col-span-7 relative flex items-end justify-center pb-6 sm:pb-8 pt-4">
          {/* Laptop Mockup */}
          <div className="w-full max-w-[560px] lg:max-w-[620px]">
            <div className="w-full">
              {/* Laptop Screen Frame */}
              <div className="relative bg-[#14171F] rounded-t-[16px] rounded-b-[3px] p-3 sm:p-3.5 pb-4 sm:pb-5 shadow-[0_30px_70px_rgba(11,18,32,0.28)] border border-slate-700/50">
                <span
                  className="absolute top-1.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#2A2E38]"
                  aria-hidden="true"
                />
                <div
                  className="relative aspect-[8/5] w-full rounded overflow-hidden bg-[#EEF0F3]"
                  onMouseEnter={() => setIsDashboardPaused(true)}
                  onMouseLeave={() => setIsDashboardPaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={dashboardIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={DASHBOARD_SCREENS[dashboardIdx]!.image}
                        alt={DASHBOARD_SCREENS[dashboardIdx]!.alt}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="h-3 sm:h-3.5 -mx-4 sm:-mx-6 rounded-b-[10px] bg-gradient-to-b from-[#E4E7EB] to-[#C3C8CF] relative shadow-md">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 sm:h-1.5 rounded-b-[6px] bg-[#A8AEB6]" />
              </div>
            </div>

            {/* Laptop Carousel Dots */}
            <div
              className="flex justify-center gap-2 mt-4"
              role="tablist"
              aria-label="Dashboard screens"
            >
              {DASHBOARD_SCREENS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setDashboardIdx(i)}
                  className={cn(
                    "size-2 rounded-full transition-all duration-200",
                    i === dashboardIdx
                      ? "bg-[#12D18E] scale-125"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  )}
                  aria-label={`Show dashboard screen ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* iPhone Mockup (Overlapping Bottom Right) */}
          <div className="absolute -right-2 sm:right-2 md:right-4 -bottom-2 sm:bottom-2 w-[140px] sm:w-[176px] z-30">
            <div className="w-full">
              {/* iPhone Body */}
              <div className="relative bg-[#14171F] rounded-[28px] sm:rounded-[34px] p-2 sm:p-2.5 shadow-[0_20px_46px_rgba(11,18,32,0.35)] border border-slate-700/60">
                <span
                  className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3.5 sm:h-4 bg-[#14171F] rounded-full z-20"
                  aria-hidden="true"
                />
                <div
                  className="relative aspect-[393/852] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0B1220]"
                  onMouseEnter={() => setIsMobilePaused(true)}
                  onMouseLeave={() => setIsMobilePaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={MOBILE_SCREENS[mobileIdx]!.image}
                        alt={MOBILE_SCREENS[mobileIdx]!.alt}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Carousel Dots */}
            <div
              className="flex justify-center gap-1.5 sm:gap-2 mt-4"
              role="tablist"
              aria-label="Rider app screens"
            >
              {MOBILE_SCREENS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMobileIdx(i)}
                  className={cn(
                    "size-1.5 sm:size-2 rounded-full transition-all duration-200",
                    i === mobileIdx
                      ? "bg-[#12D18E] scale-125"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  )}
                  aria-label={`Show mobile screen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

