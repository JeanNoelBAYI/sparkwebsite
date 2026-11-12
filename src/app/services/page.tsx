"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, LayoutDashboard, Wrench, Cpu, CreditCard, LineChart, Code2 } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import ServicesHeroShowcase from "@src/components/ServicesHeroShowcase";
import { cn } from "@src/lib/utils";

type ServiceTab = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  points: string[];
  image: string;
};

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "rider-app",
    icon: Smartphone,
    title: "Rider App",
    desc: "Your riders get a beautiful, intuitive, and native mobility experience on iOS and Android — completely branded with your logo, colors, and identity.",
    points: [
      "Real-time GPS map discovery & reserve nearby vehicles",
      "Scan QR code to immediately unlock and initiate ride",
      "In-app wallet top-ups via Cards, Bank Transfer, and Mobile Money",
      "Trip history, route summaries, speed metrics, and automated receipts",
    ],
    image: "/images/Trekk-011.png",
  },
  {
    id: "operator-dashboard",
    icon: LayoutDashboard,
    title: "Operator Dashboard",
    desc: "Gain complete situational awareness of your entire fleet in real-time. Manage pricing models, geo-zones, staff roles, and financials from a single web browser.",
    points: [
      "Real-time vehicle map tracking, telemetry, battery levels, and fault codes",
      "Configurable geofences: speed limit zones, slow-ride corridors, and no-parking areas",
      "Dynamic pricing: per-minute rates, unlock fees, day passes, and subscriptions",
      "Rider management: verify IDs, issue ride credits, and review dispute logs",
    ],
    image: "/images/trekk-dashboard.png",
  },
  {
    id: "field-operations",
    icon: Wrench,
    title: "Field Operations App",
    desc: "Empower your ground crew with a dedicated operational mobile app for battery swaps, vehicle rebalancing, maintenance work orders, and recovery.",
    points: [
      "Battery swap routing: automated dispatch to vehicles below threshold",
      "Vehicle diagnostics: Bluetooth beacon pairing and physical locking checks",
      "Damage reporting: photo capture and immediate parts inventory ticketing",
      "Vehicle drop-off photo validation and geofenced rebalancing tasks",
    ],
    image: "/images/Trekk-014.png",
  },
  {
    id: "iot-telematics",
    icon: Cpu,
    title: "IoT & Telematics",
    desc: "Hardware-agnostic telematics integration supporting leading IoT box manufacturers (Omni, Queclink, Teltonika) with robust offline cellular fallbacks.",
    points: [
      "Cellular (2G/4G/LTE-M) and BLE dual-connection redundancy",
      "Automated over-the-air (OTA) firmware update distribution",
      "Tamper detection, movement alarms, and remote motor lock triggers",
      "Battery state-of-charge (SoC), voltage health, and temperature monitoring",
    ],
    image: "/images/Trekk-013.png",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "African Payments Engine",
    desc: "Designed ground-up for African financial realities. Support debit cards, virtual bank transfers, USSD, and regional mobile money operators.",
    points: [
      "Flutterwave, Paystack, and direct telecom mobile money rails",
      "Prepaid digital wallet balances with automated zero-balance pauses",
      "Corporate split-billing and employee mobility expense stipends",
      "Instant automated settlements and multi-currency payouts",
    ],
    image: "/images/Trekk-009.png",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Analytics & Fleet Intelligence",
    desc: "Transform ride coordinates and vehicle telematics into high-yield business intelligence with automated utilization and revenue reporting.",
    points: [
      "Heatmaps identifying high-demand ride corridors and pickup hotspots",
      "Fleet utilization ratios (rides per vehicle per day)",
      "Battery cycle health degradation and preventive maintenance alerts",
      "Cohort retention analysis and marketing campaign attribution",
    ],
    image: "/images/Trekk-005.png",
  },
  {
    id: "api",
    icon: Code2,
    title: "Open APIs & Webhooks",
    desc: "Seamlessly integrate Trekk with your ERP, accounting software, third-party dispatch algorithms, or municipal smart-city reporting portals.",
    points: [
      "RESTful JSON APIs with comprehensive OpenAPI documentation",
      "Real-time webhook events for ride start, end, trip payments, and faults",
      "GBFS (General Bikeshare Feed Specification) compliant public feeds",
      "Role-based API tokens with granular rate-limiting controls",
    ],
    image: "/images/trekk-home.png",
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();
  const [activeTabId, setActiveTabId] = useState<string>("rider-app");

  const activeTab =
    SERVICE_TABS.find((tab) => tab.id === activeTabId) || SERVICE_TABS[0];

  return (
    <div className="space-y-20 pb-20">
      {/* ================= HERO BANNER (JOYRIDE COMPOSITION WITH SINGLE IMAGES) ================= */}
      <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center text-white overflow-hidden bg-[#0B1813]">
        {/* Soft Ambient Radial Glows */}
        <div className="pointer-events-none absolute -top-40 right-0 size-[650px] rounded-full bg-[#12D18E]/15 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 size-[500px] rounded-full bg-[#2E6BFF]/10 blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#12D18E] backdrop-blur">
                <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                <span>{t("services.eyebrow", "Platform")}</span>
              </div>

              <h1 className="text-4xl font-extrabold font-display sm:text-5xl lg:text-6xl text-white leading-tight">
                ONE PLATFORM.<br />
                <span className="text-[#12D18E]">EVERY VEHICLE.</span>
              </h1>

              <p className="text-base text-[#D3E4DC] sm:text-lg max-w-xl leading-relaxed">
                {t(
                  "services.heroLede",
                  "Trekk Mobility — Platform Overview. Rider app, fleet dashboard, IoT connectivity, and payments, all in one connected system built to run your fleet."
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 shadow-xl shadow-[#12D18E]/20">
                    <span>{t("services.bookPlatformDemo", "Book a Platform Demo")}</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Driving Motion Vehicle Showcase */}
            <div className="lg:col-span-7 w-full flex items-center justify-center">
              <ServicesHeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM COMPONENTS (JOYRIDE ACCORDION PATTERN) ================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
            <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
            <span>Modular Architecture</span>
          </div>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Platform Components
          </h2>
          <p className="text-base text-muted-foreground">
            A cohesive suite of hardware integrations, rider interfaces, and operator tooling engineered for urban mobility in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Feature Selector (Accordion) */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICE_TABS.map((tab) => {
              const isSelected = tab.id === activeTabId;
              const IconComp = tab.icon;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    "cursor-pointer rounded-2xl p-5 transition-all duration-200 border text-left",
                    isSelected
                      ? "border-l-4 border-l-[#12D18E] border-t-transparent border-r-transparent border-b-transparent bg-white shadow-md dark:bg-[#0E1522]"
                      : "border-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <IconComp
                      className={cn(
                        "size-5 shrink-0 transition-colors",
                        isSelected ? "text-[#12D18E]" : "text-[#5B6B72]"
                      )}
                    />
                    <h3
                      className={cn(
                        "font-display text-xl sm:text-2xl font-bold transition-colors",
                        isSelected ? "text-[#0B1220] dark:text-white" : "text-[#5B6B72]"
                      )}
                    >
                      {tab.title}
                    </h3>
                  </div>

                  {isSelected && (
                    <div className="mt-4 space-y-4 animate-in fade-in duration-200">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tab.desc}
                      </p>

                      <div className="space-y-2 pt-1">
                        {tab.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-4 shrink-0 text-[#12D18E] mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Without White Box Container or Shadow */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative aspect-[16/10] w-full max-w-2xl min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
              <Image
                src={activeTab ? activeTab.image : "/images/Trekk-001.png"}
                alt={activeTab ? activeTab.title : "Trekk Platform Component"}
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-[#0B1220] text-white p-10 md:p-14 space-y-6">
          <h2 className="text-3xl font-bold font-display sm:text-4xl">
            See the Platform in Action
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-[#8A98A0]">
            We provide live guided demonstrations with real hardware connected to our testing sandbox so you can test unlocking, geofencing, and telematics in real time.
          </p>
          <div>
            <Link href="/contact">
              <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                <span>Schedule a 30-Minute Walkthrough</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
