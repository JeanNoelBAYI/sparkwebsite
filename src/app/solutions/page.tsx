"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bike, Car, Truck, Building2, GraduationCap, Compass, Briefcase, Zap } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";

export default function SolutionsPage() {
  const { t } = useTranslation();
  const [activePhone, setActivePhone] = React.useState<"center" | "left" | "right">("center");

  // When scrolling down towards the next section, reset to the default center image in front
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActivePhone("center");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rawH1 = t("solutions.h1", "One Platform.<br>Every Mobility Model.");
  const h1Parts = rawH1.split(/<br\s*\/?>/i);

  return (
    <div className="space-y-24 py-16">
      {/* Hero Header with Multi-Device Showcase */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Consultation CTA */}
          <div className="lg:col-span-5 space-y-5">
            <span className="eyebrow">{t("solutions.eyebrow", "Solutions")}</span>
            <h1 className="text-4xl font-extrabold font-display sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
              {h1Parts.map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {part}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground pt-1 leading-relaxed">
              {t(
                "solutions.heroLede",
                "From digital rentals to ride-hailing, corporate mobility to campus mobility — Trekk supports the mobility model your business actually needs."
              )}
            </p>
            <div className="pt-3">
              <Link href="/contact">
                <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 shadow-lg shadow-[#12D18E]/20">
                  <span>Book a Solutions Consultation</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Mobile App Showcase */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            {/* Desktop / Laptop Showcase: 3 Staggered Overlapping Phones with Interactive Hover Stacking */}
            <div
              className="hidden lg:flex relative items-center justify-center w-full max-w-[560px] h-[480px]"
              onMouseLeave={() => setActivePhone("center")}
            >
              {/* Soft Ambient Backdrop Glow */}
              <div className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-[#12D18E]/10 blur-3xl" />

              {/* Left Phone: mob-2 */}
              <div
                onMouseEnter={() => setActivePhone("left")}
                className={`absolute left-2 cursor-pointer transition-all duration-500 ease-out ${
                  activePhone === "left"
                    ? "z-40 w-[240px] -rotate-2 -translate-y-4 scale-110 opacity-100"
                    : activePhone === "right"
                    ? "z-10 w-[210px] -rotate-8 translate-y-8 scale-90 opacity-70"
                    : "z-10 w-[220px] -rotate-6 translate-y-6 scale-100 opacity-90 hover:opacity-100"
                }`}
              >
                <Image
                  src="/images/mob-2.png"
                  alt="Trekk Rider App - Booking & Keyless Unlock"
                  width={1290}
                  height={2796}
                  className={`w-full h-auto object-contain transition-all duration-500 ${
                    activePhone === "left"
                      ? "drop-shadow-[0_35px_60px_rgba(0,0,0,0.50)]"
                      : "drop-shadow-[0_20px_35px_rgba(0,0,0,0.30)]"
                  }`}
                  priority
                />
              </div>

              {/* Center Phone: mob-1 (Default in front upon landing) */}
              <div
                onMouseEnter={() => setActivePhone("center")}
                className={`relative cursor-pointer transition-all duration-500 ease-out ${
                  activePhone === "center"
                    ? "z-30 w-[250px] rotate-0 translate-y-0 scale-100 opacity-100"
                    : activePhone === "left"
                    ? "z-20 w-[240px] rotate-2 translate-y-4 scale-95 opacity-80"
                    : "z-20 w-[240px] -rotate-2 translate-y-4 scale-95 opacity-80"
                }`}
              >
                <Image
                  src="/images/mob-1.png"
                  alt="Trekk Rider App - Primary Interface & Live Fleet Map"
                  width={1290}
                  height={2796}
                  className={`w-full h-auto object-contain transition-all duration-500 ${
                    activePhone === "center"
                      ? "drop-shadow-[0_30px_60px_rgba(0,0,0,0.40)]"
                      : "drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
                  }`}
                  priority
                />
              </div>

              {/* Right Phone: mob-3 */}
              <div
                onMouseEnter={() => setActivePhone("right")}
                className={`absolute right-2 cursor-pointer transition-all duration-500 ease-out ${
                  activePhone === "right"
                    ? "z-40 w-[230px] rotate-2 -translate-y-4 scale-110 opacity-100"
                    : activePhone === "left"
                    ? "z-10 w-[200px] rotate-8 translate-y-10 scale-90 opacity-70"
                    : "z-20 w-[210px] rotate-6 translate-y-8 scale-100 opacity-90 hover:opacity-100"
                }`}
              >
                <Image
                  src="/images/mob-3.png"
                  alt="Trekk Rider App - Wallet, Passes & Trip History"
                  width={978}
                  height={2000}
                  className={`w-full h-auto object-contain transition-all duration-500 ${
                    activePhone === "right"
                      ? "drop-shadow-[0_35px_60px_rgba(0,0,0,0.50)]"
                      : "drop-shadow-[0_20px_35px_rgba(0,0,0,0.30)]"
                  }`}
                  priority
                />
              </div>
            </div>

            {/* Mobile / Smaller Screens: ONLY mob-1.png */}
            <div className="flex lg:hidden relative items-center justify-center w-full py-6">
              <div className="relative w-[240px] sm:w-[280px]">
                <div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[#12D18E]/15 blur-2xl" />
                <Image
                  src="/images/mob-1.png"
                  alt="Trekk Rider App"
                  width={1290}
                  height={2796}
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobility Models Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow">Operating Models</span>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Deploy Across Any Commercial Use Case
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure permissions, tariff structures, geofences, and billing mechanics tailored specifically to your target ridership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: "Campus & University Mobility",
              desc: "Provide students and faculty with affordable, clean micromobility inside closed campuses. Enforce zero-speed zones during peak foot traffic hours.",
            },
            {
              icon: Building2,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: "Corporate & Industrial Sites",
              desc: "Enable rapid transit between manufacturing plants, office parks, and corporate compounds with employee badge logins and departmental billing.",
            },
            {
              icon: Compass,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: "Resorts, Hotels & Tourism",
              desc: "Offer hotel guests luxury electric scooter and e-bike rentals via concierge QR codes with automated daily or hourly billing to their room folio.",
            },
            {
              icon: Truck,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: "Last-Mile Delivery Fleets",
              desc: "Give courier and logistics teams EV motorcycles and cargo e-bikes with continuous battery tracking, geofenced routes, and safety telematics.",
            },
            {
              icon: Bike,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: "Public Urban Sharing",
              desc: "Launch dockless or hybrid-station fleets across metro areas with designated virtual parking corrals and municipal data feeds.",
            },
            {
              icon: Briefcase,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: "B2B Digital Rentals",
              desc: "Rent vehicles by the hour, day, or week with automated customer KYC validation, deposit holds, and remote digital keys.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition"
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
      <section className="bg-[#F0FBF5]/60 border-y border-border py-20">
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
                Personal Micromobility Fleets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Electric Scooters", desc: "Cellular remote lock/unlock, geofenced speed limits, and tip-over alerts." },
                  { title: "Electric Bicycles", desc: "Live GPS location, battery charge status, motor diagnostics, and wheel locks." },
                  { title: "Electric Mopeds", desc: "Smart helmet-box unlock, remote ignition, and predictive maintenance schedules." },
                  { title: "Sitting Scooters", desc: "Dual-passenger stability telemetry, regenerative braking analytics, and theft alerts." },
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
                Urban Logistics & Cargo Vehicles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Electric Cargo Bikes", desc: "Courier route tracking, driver safety scorecards, and payload compartment lock status." },
                  { title: "Commercial Electric Motorcycles", desc: "Battery swap station check-ins, swappable pack telemetry, and fleet-wide battery health." },
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

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Have a Unique Fleet Concept?
          </h2>
          <p className="text-base text-muted-foreground">
            Our engineering team has integrated custom IoT firmware for specialized electric utility vehicles across Africa. Talk to us about your fleet specifications.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
              <span>Talk to Our Solutions Engineers</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

