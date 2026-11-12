"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bike, Car, Truck, Building2, GraduationCap, Compass, Briefcase, Zap, CheckCircle2, Smartphone, LayoutDashboard, Wrench, Cpu, CreditCard, LineChart, Code2 } from "lucide-react";
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

export default function SolutionsPage() {
  const { t } = useTranslation();
  const [activeTabId, setActiveTabId] = useState<string>("rider-app");

  // Sync URL hash (#rider-app, #field-ops, #iot, #analytics) with active Platform tab
  React.useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const hashMap: Record<string, string> = {
        "rider-app": "rider-app",
        "dashboard": "operator-dashboard",
        "operator-dashboard": "operator-dashboard",
        "field-ops": "field-operations",
        "field-operations": "field-operations",
        "iot": "iot-telematics",
        "telematics": "iot-telematics",
        "payments": "payments",
        "analytics": "analytics",
        "api": "api",
      };
      const targetTab = hashMap[hash];
      if (targetTab) {
        setActiveTabId(targetTab);
        const el = document.getElementById("components");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const translatedTabs = SERVICE_TABS.map((tab) => {
    const keyMap: Record<string, string> = {
      "rider-app": "services.tab1",
      "operator-dashboard": "services.tab2",
      "field-operations": "services.tab3",
      "iot-telematics": "services.tab4",
      "payments": "services.tab7",
      "analytics": "services.tab8",
      "api": "services.tab11",
    };
    const prefix = keyMap[tab.id];
    if (!prefix) return tab;
    const translatedPoints = t(`${prefix}.points`, "");
    return {
      ...tab,
      title: t(`${prefix}.title`, tab.title),
      desc: t(`${prefix}.desc`, tab.desc),
      points: translatedPoints ? translatedPoints.split("|") : tab.points,
    };
  });

  const activeTab =
    translatedTabs.find((tab) => tab.id === activeTabId) || translatedTabs[0];

  const rawH1 = t("solutions.h1", "One Platform.<br>Every Mobility Model.");
  const h1Parts = rawH1.split(/<br\s*\/?>/i);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Banner with Driving Vehicle Showcase */}
      <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center text-white overflow-hidden bg-[#0B1813]">
        {/* Soft Ambient Radial Glows */}
        <div className="pointer-events-none absolute -top-40 right-0 size-[650px] rounded-full bg-[#12D18E]/15 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 size-[500px] rounded-full bg-[#2E6BFF]/10 blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Consultation CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#12D18E] backdrop-blur">
                <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                <span>{t("solutions.eyebrow", "Trekk Solutions")}</span>
              </div>

              <h1 className="text-4xl font-extrabold font-display sm:text-5xl lg:text-6xl text-white leading-tight">
                {h1Parts[0]}
                {h1Parts.length > 1 && (
                  <>
                    <br />
                    <span className="text-[#12D18E]">{h1Parts[1]}</span>
                  </>
                )}
              </h1>

              <p className="text-base text-[#D3E4DC] sm:text-lg max-w-xl leading-relaxed">
                {t(
                  "solutions.heroLede",
                  "From digital rentals to ride-hailing, corporate mobility to campus mobility — Trekk Solutions powers every vehicle model your business needs."
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 shadow-xl shadow-[#12D18E]/20">
                    <span>{t("solutions.bookCta", "Book a Solutions Consultation")}</span>
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

      {/* Mobility Models Grid */}
      <section id="industries" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow">{t("solutions.models.eyebrow", "Operating Models")}</span>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            {t("solutions.models.h2", "Deploy Across Any Commercial Use Case")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t(
              "solutions.models.lede",
              "Configure permissions, tariff structures, geofences, and billing mechanics tailored specifically to your target ridership."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: "university-campuses",
              icon: GraduationCap,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: t("solutions.models.m1Title", "Campus & University Mobility"),
              desc: t(
                "solutions.models.m1Desc",
                "Provide students and faculty with affordable, clean micromobility inside closed campuses. Enforce zero-speed zones during peak foot traffic hours."
              ),
            },
            {
              id: "industrial-utility",
              icon: Building2,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: t("solutions.models.m2Title", "Corporate & Industrial Sites"),
              desc: t(
                "solutions.models.m2Desc",
                "Enable rapid transit between manufacturing plants, office parks, and corporate compounds with employee badge logins and departmental billing."
              ),
            },
            {
              id: "hotels-resorts",
              icon: Compass,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: t("solutions.models.m3Title", "Resorts, Hotels & Tourism"),
              desc: t(
                "solutions.models.m3Desc",
                "Offer hotel guests luxury electric scooter and e-bike rentals via concierge QR codes with automated daily or hourly billing to their room folio."
              ),
            },
            {
              id: "cargo-delivery",
              icon: Truck,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: t("solutions.models.m4Title", "Last-Mile Delivery Fleets"),
              desc: t(
                "solutions.models.m4Desc",
                "Give courier and logistics teams EV motorcycles and cargo e-bikes with continuous battery tracking, geofenced routes, and safety telematics."
              ),
            },
            {
              id: "bike-scooter-sharing",
              icon: Bike,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: t("solutions.models.m5Title", "Public Urban Sharing"),
              desc: t(
                "solutions.models.m5Desc",
                "Launch dockless or hybrid-station fleets across metro areas with designated virtual parking corrals and municipal data feeds."
              ),
            },
            {
              id: "vacation-rentals",
              icon: Briefcase,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: t("solutions.models.m6Title", "B2B Digital Rentals"),
              desc: t(
                "solutions.models.m6Desc",
                "Rent vehicles by the hour, day, or week with automated customer KYC validation, deposit holds, and remote digital keys."
              ),
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                id={item.id}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition scroll-mt-24"
              >
                <div className={`size-11 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hardware Compatibility Section */}
      <section id="vehicles" className="bg-[#F0FBF5]/60 dark:bg-[#0B1510]/60 border-y border-border py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="eyebrow">{t("solutions.iot.eyebrow", "Vehicle Compatibility")}</span>
            <h2 className="text-3xl font-bold font-display sm:text-5xl text-foreground">
              {t("solutions.iot.h2", "Vehicles Managed and Tracked by IoT Modules")}
            </h2>
            <p className="text-base text-muted-foreground">
              {t(
                "solutions.iot.lede",
                "Trekk’s hardware-agnostic IoT and telematics layer connects to the vehicle types your business already runs — or wants to launch next."
              )}
            </p>
          </div>

          <div className="space-y-12">
            {/* Category 1 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#102A23] dark:text-[#12D18E]">
                {t("solutions.iot.cat1", "Personal Micromobility Fleets")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: t("solutions.iot.v1.title", "Electric Scooters"), desc: t("solutions.iot.v1.desc", "Cellular remote lock/unlock, geofenced speed limits, and tip-over alerts.") },
                  { title: t("solutions.iot.v2.title", "Electric Bicycles"), desc: t("solutions.iot.v2.desc", "Live GPS location, battery charge status, motor diagnostics, and wheel locks.") },
                  { title: t("solutions.iot.v3.title", "Electric Mopeds"), desc: t("solutions.iot.v3.desc", "Smart helmet-box unlock, remote ignition, and predictive maintenance schedules.") },
                  { title: t("solutions.iot.v4.title", "Sitting Scooters"), desc: t("solutions.iot.v4.desc", "Dual-passenger stability telemetry, regenerative braking analytics, and theft alerts.") },
                ].map((v, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-[#0E1522] space-y-2">
                    <h4 className="font-display font-bold text-sm text-foreground">{v.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#2E6BFF]">
                {t("solutions.iot.cat2", "Urban Logistics & Cargo Vehicles")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: t("solutions.iot.v7.title", "Electric Cargo Bikes"), desc: t("solutions.iot.v7.desc", "Courier route tracking, driver safety scorecards, and payload compartment lock status.") },
                  { title: t("solutions.iot.v6.title", "Commercial Electric Motorcycles"), desc: t("solutions.iot.v6.desc", "Battery swap station check-ins, swappable pack telemetry, and fleet-wide battery health.") },
                ].map((v, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-[#0E1522] space-y-2">
                    <h4 className="font-display font-bold text-sm text-foreground">{v.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM COMPONENTS (MOVED FROM FLEET DASHBOARD) ================= */}
      <section id="components" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 scroll-mt-24">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
            <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
            <span>{t("services.comp.eyebrow", "Modular Architecture")}</span>
          </div>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            {t("services.comp.h2", "Platform Components")}
          </h2>
          <p className="text-base text-muted-foreground">
            {t("services.comp.lede", "A cohesive suite of hardware integrations, rider interfaces, and operator tooling engineered for urban mobility in Africa.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Feature Selector (Accordion) */}
          <div className="lg:col-span-5 space-y-4">
            {translatedTabs.map((tab) => {
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

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            {t("solutions.cta.h2", "Ready to Customize Your Solution?")}
          </h2>
          <p className="text-base text-muted-foreground">
            {t("solutions.cta.lede", "Share your fleet goals with our solution architects for a tailored deployment blueprint.")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
              <span>{t("solutions.cta.button", "Speak to a Solution Architect")}</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

