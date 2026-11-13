"use client";

import React from "react";
import { Bike, Briefcase, Building2, Compass, GraduationCap, Truck } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function OperatingModels() {
  const { t } = useTranslation();

  const models = [
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
  ];

  return (
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
        {models.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              id={item.id}
              className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition scroll-mt-24"
            >
              <div className={`size-11 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                <Icon className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

