"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  BarChart2,
  CheckCircle,
  Sparkles,
  Wifi,
  Smartphone,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
  Lock,
} from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import CustomButton from "@src/components/CustomButton";
import BrandMarquee from "@src/components/BrandMarquee";
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

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  card1: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  };
  card2: {
    label: string;
    value: string;
    trend: string;
  };
  card3: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  };
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "fleet-all",
    image: "/images/trekk-home.png",
    alt: "Trekk Mobility Multi-Modal Connected Fleet",
    card1: {
      icon: Wifi,
      title: "MINI-FLEET-01",
      sub: "98.4% uptime · 4G Active",
    },
    card2: {
      label: "Total Trips",
      value: "15,100+",
      trend: "+24.8% vs last month",
    },
    card3: {
      icon: ShieldCheck,
      title: "ID Verification Active",
      sub: "Scan-to-unlock instant clearance",
    },
  },
  {
    id: "scooter",
    image: "/images/trekk-home-1.png",
    alt: "Trekk Electric Scooter Fleet",
    card1: {
      icon: Zap,
      title: "SCOOT-X4 · READY",
      sub: "96% Battery · 45 km Range",
    },
    card2: {
      label: "Unlock Speed",
      value: "< 1.2s",
      trend: "BLE Offline Redundancy",
    },
    card3: {
      icon: Lock,
      title: "Auto Kickstand Lock",
      sub: "Dual anti-theft sensor active",
    },
  },
  {
    id: "trike",
    image: "/images/trekk-home-2.png",
    alt: "Trekk Electric Delivery Tuk-Tuk",
    card1: {
      icon: MapPin,
      title: "E-TRIKE · IN ROUTE",
      sub: "Corral & Speed Corridors",
    },
    card2: {
      label: "Daily Revenue",
      value: "₦48,500",
      trend: "+32% dispatch density",
    },
    card3: {
      icon: Cpu,
      title: "Telematics Diagnostics",
      sub: "Zero active fault codes",
    },
  },
  {
    id: "ev",
    image: "/images/trekk-home-3.png",
    alt: "Trekk High-Performance Electric Vehicle",
    card1: {
      icon: Layers,
      title: "FLEET OS · ONLINE",
      sub: "Sub-second cloud telemetry",
    },
    card2: {
      label: "CO₂ Saved",
      value: "18.2 Tons",
      trend: "100% Zero-emission rides",
    },
    card3: {
      icon: Sparkles,
      title: "Smart Dynamic Pricing",
      sub: "Automated campus tariffs",
    },
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Showcase carousels (Laptop and iPhone)
  const [dashboardIdx, setDashboardIdx] = useState<number>(2); // Default to "fleet-management.png" matching screenshot 1
  const [mobileIdx, setMobileIdx] = useState<number>(0); // Default to "home.png" matching screenshot 1
  const [isDashboardPaused, setIsDashboardPaused] = useState<boolean>(false);
  const [isMobilePaused, setIsMobilePaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

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

  const currentHeroSlide: HeroSlide =
    HERO_SLIDES[heroSlide] ?? (HERO_SLIDES[0] as HeroSlide);
  const Card1Icon = currentHeroSlide.card1.icon;
  const Card3Icon = currentHeroSlide.card3.icon;

  return (
    <div className="space-y-0 pb-20">
      {/* ================= HERO SECTION (JOYRIDE COMPACT CANVAS) ================= */}
      <section className="relative overflow-hidden bg-[#0B1813] text-white pt-10 pb-28 lg:pt-16 lg:pb-36">
        {/* Soft Ambient Radial Glows */}
        <div className="pointer-events-none absolute -top-40 right-0 size-[650px] rounded-full bg-[#12D18E]/15 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 size-[500px] rounded-full bg-[#2E6BFF]/10 blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                <span>{t("home.eyebrow", "The Mobility Operating System Built for Africa")}</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {t("home.hero.titlePart1", "Mobility that")} <br />
                <span className="text-[#12D18E]">{t("home.hero.titlePart2", "connects.")}</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A0B0A8] font-medium leading-relaxed max-w-xl">
                {t(
                  "home.hero.sub1",
                  "Trekk is the OS for lightweight vehicles, connecting African fleets to intelligence and mobility entrepreneurs to a profitable future."
                )}
              </p>

              <p className="text-sm sm:text-base text-[#7B8F84] leading-relaxed max-w-lg">
                {t(
                  "home.hero.sub2",
                  "From IoT telematics and automated fleet operations to rider apps and African mobile money, manage and scale your mobility business on one fully integrated operating system."
                )}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link href="/contact">
                  <CustomButton
                    variant="primary"
                    size="lg"
                    rounded="full"
                    withArrow
                    className="px-8 text-base font-bold shadow-xl shadow-[#12D18E]/25 hover:shadow-2xl hover:shadow-[#12D18E]/40"
                  >
                    <span>{t("common.nav.bookDemo", "Request a Demo")}</span>
                  </CustomButton>
                </Link>

                <Link href="/calculator">
                  <CustomButton
                    variant="outline-light"
                    size="lg"
                    rounded="full"
                    className="px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10"
                  >
                    <span>{t("home.hero.exploreRoi", "Explore Fleet ROI")} &rarr;</span>
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Slideshow with Framer Motion */}
            <div
              className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full aspect-[4/3] max-w-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroSlide.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={currentHeroSlide.image}
                      alt={currentHeroSlide.alt}
                      fill
                      className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
                      priority
                    />

                    {/* Floating Live Card 1 (Top Left Status) */}
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.35 }}
                      className="absolute top-2 left-0 sm:left-4 rounded-2xl border border-white/20 bg-[#0B1510]/85 backdrop-blur-md px-3.5 py-2 shadow-2xl flex items-center gap-2.5 z-20 pointer-events-none"
                    >
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#12D18E]/20 text-[#12D18E]">
                        <Card1Icon className="size-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <span>{currentHeroSlide.card1.title}</span>
                          <span className="size-1.5 rounded-full bg-[#12D18E] animate-pulse" />
                        </div>
                        <p className="text-[10px] text-[#A0B0A8]">{currentHeroSlide.card1.sub}</p>
                      </div>
                    </motion.div>

                    {/* Floating Live Card 2 (Top Right Metrics) */}
                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.35 }}
                      className="absolute -top-4 right-0 sm:right-2 rounded-2xl border border-white/15 bg-white text-[#0B1220] p-3.5 shadow-2xl space-y-1 z-20 pointer-events-none"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        {currentHeroSlide.card2.label}
                      </span>
                      <p className="font-display text-2xl font-extrabold text-[#0B1220]">
                        {currentHeroSlide.card2.value}
                      </p>
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#12D18E]">
                        <TrendingUp className="size-3" />
                        <span>{currentHeroSlide.card2.trend}</span>
                      </div>
                    </motion.div>

                    {/* Floating Live Card 3 (Bottom Center Status) */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.35 }}
                      className="absolute -bottom-4 left-6 sm:left-12 rounded-2xl border border-white/20 bg-white text-[#0B1220] px-4 py-2.5 shadow-2xl flex items-center gap-3 z-20 pointer-events-none"
                    >
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#12D18E]/20 text-[#12D18E]">
                        <Card3Icon className="size-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#0B1220]">{currentHeroSlide.card3.title}</p>
                        <p className="text-[10px] text-muted-foreground">{currentHeroSlide.card3.sub}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators / Dots */}
              <div className="flex items-center gap-2 pt-8 z-30">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setHeroSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === heroSlide
                        ? "w-8 bg-[#12D18E]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURVED TRANSITION & FLOATING DASHBOARD ================= */}
      <section className="relative bg-[#FAFDFB] pt-0 pb-20">
        {/* Organic Curved Wave Divider Top */}
        <div className="w-full overflow-hidden leading-none -mt-1">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-28 text-[#0B1813] fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C360,100 1080,100 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Floating Operator Dashboard & Rider App Over Transition */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 lg:-mt-14 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {/* Rider App (Trekk-011): Equal size & prominence on desktop, primary on mobile */}
            <div className="relative w-full max-w-[380px] lg:max-w-[430px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/images/Trekk-011.png"
                alt="Trekk Mobility Rider Mobile App & QR Access"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
                priority
              />
            </div>

            {/* Operator Tablet Dashboard (Trekk-005): Same size & close beside Trekk-011 on desktop, hidden on mobile */}
            <div className="hidden md:flex relative w-full max-w-[380px] lg:max-w-[430px] aspect-[4/3] items-center justify-center">
              <Image
                src="/images/Trekk-005.png"
                alt="Trekk Mobility Full Dashboard & Analytics OS"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
                priority
              />
            </div>
          </div>

          {/* Trusted In / Partner Badges */}
          <div className="pt-16 sm:pt-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B6B72]">
              {t("home.trustedBy", "TRUSTED BY INNOVATIVE OPERATORS & PARTNERS ACROSS AFRICA")}
            </span>

            <BrandMarquee />
          </div>
        </div>
      </section>

      {/* ================= THREE CORE PILLARS (CONNECTED FLEET HARDWARE) ================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
            <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
            <span>{t("home.infra.eyebrow", "Operating Infrastructure")}</span>
          </div>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            {t("home.infra.h2", "Complete Fleet Operating System")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t("home.infra.lede", "We provide everything you need to operate a safe, reliable, and profitable connected fleet.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#12D18E] transition">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#12D18E]/10 text-[#12D18E]">
              <Smartphone className="size-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground">{t("home.infra.c1Title", "White-Label Rider App")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home.infra.c1Desc", "Native iOS and Android rider app built for speed. Integrated wallet, QR unlocking, trip summaries, and in-app customer support.")}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#2E6BFF] transition">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#2E6BFF]/10 text-[#2E6BFF]">
              <Layers className="size-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground">{t("home.infra.c2Title", "Operator Web Command")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home.infra.c2Desc", "Complete fleet awareness in real-time. Manage dynamic pricing, geofenced parking corrals, battery swaps, and staff dispatching.")}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#FFB020] transition">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFB020]/10 text-[#FFB020]">
              <Cpu className="size-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground">{t("home.infra.c3Title", "Hardware-Agnostic IoT")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home.infra.c3Desc", "Seamless integration with Omni, Queclink, and Teltonika IoT modules. Cellular failovers, remote locks, and real-time battery diagnostics.")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW TO RIDE VIDEO & GUIDE ================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-[#F6FAF8] dark:from-[#0E1522] dark:to-[#0B1220] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Styled Video Embed Container */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Nm9sMcHF17U"
                  title={t("home.howto.h2", "Easy Steps on How to Trekk")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="size-2 rounded-full bg-[#12D18E]" />
                  {t("home.howto.onboarding", "Official Trekk Rider Onboarding")}
                </span>
                <span className="text-[11px] opacity-75">{t("home.howto.hd", "HD Video Tutorial")}</span>
              </div>
            </div>

            {/* Right Column: Step-by-Step Rider Instructions */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
                  <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                  <span>{t("home.howto.badge", "Rider Quickstart")}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-foreground tracking-tight">
                  {t("home.howto.h2", "Easy Steps on How to Trekk")}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t("home.howto.sub", "Here are some easy steps on how to ride Trekk 🛴")}
                </p>
              </div>

              {/* Ordered Steps */}
              <div className="space-y-3 pt-1">
                {[
                  t("home.howto.s1", "Locate the Trekk scooter nearby, using the Trekk App"),
                  t("home.howto.s2", "Unlock the scooter by scanning the QR code"),
                  t("home.howto.s3", "Wear a helmet for safety"),
                  t("home.howto.s4", "Step on the deck and kick forward"),
                  t("home.howto.s5", "Twist the throttle to accelerate"),
                  t("home.howto.s6", "Squeeze the hand break to stop"),
                  t("home.howto.s7", "Release the kickstand to park"),
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E] font-bold text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* Speed Limit Notice Badge */}
              <div className="mt-4 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-3.5 text-xs text-amber-700 dark:text-amber-300 flex items-center gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold">
                  !
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-[11px]">{t("home.howto.noticeTitle", "Notice · Campus Speed Limit")}</p>
                  <p className="opacity-90">{t("home.howto.noticeBody", "N.B. Speed limit is 20km/hr")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE (ONE PLATFORM. EVERY SCREEN.) ================= */}
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

      {/* ================= OFFICIAL LAUNCH BANNER ================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/launch"
          className="group block rounded-3xl border border-border bg-gradient-to-r from-[#0B1813] to-[#123826] text-white p-8 sm:p-10 shadow-xl hover:border-[#12D18E] transition duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12D18E]">
                <Sparkles className="size-4" />
                <span>{t("home.launch.eyebrow", "The Official Launch · November 24, 2026 · 2:00 PM WAT")}</span>
              </div>
              <h2 className="text-2xl font-bold font-display sm:text-3xl text-white">
                {t("home.launch.h2", "Trekk Mobility is going live. Be in the room.")}
              </h2>
              <p className="text-sm text-[#8A98A0]">
                {t("home.launch.lede", "Join our launch event and digital press conference — free, online, worldwide.")}
              </p>
            </div>
            <CustomButton
              variant="primary"
              size="default"
              rounded="full"
              withArrow
              className="font-bold shadow-md"
            >
              {t("home.launch.cta", "Reserve Your Place")}
            </CustomButton>
          </div>
        </Link>
      </section>
    </div>
  );
}
