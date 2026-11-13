"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function HardwareCompatibility() {
  const { t } = useTranslation();

  return (
    <section
      id="vehicles"
      className="bg-[#F0FBF5]/60 dark:bg-[#0B1510]/60 border-y border-border py-20 scroll-mt-24"
    >
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
                {
                  title: t("solutions.iot.v1.title", "Electric Scooters"),
                  desc: t(
                    "solutions.iot.v1.desc",
                    "Cellular remote lock/unlock, geofenced speed limits, and tip-over alerts."
                  ),
                },
                {
                  title: t("solutions.iot.v2.title", "Electric Bicycles"),
                  desc: t(
                    "solutions.iot.v2.desc",
                    "Live GPS location, battery charge status, motor diagnostics, and wheel locks."
                  ),
                },
                {
                  title: t("solutions.iot.v3.title", "Electric Mopeds"),
                  desc: t(
                    "solutions.iot.v3.desc",
                    "Smart helmet-box unlock, remote ignition, and predictive maintenance schedules."
                  ),
                },
                {
                  title: t("solutions.iot.v4.title", "Sitting Scooters"),
                  desc: t(
                    "solutions.iot.v4.desc",
                    "Dual-passenger stability telemetry, regenerative braking analytics, and theft alerts."
                  ),
                },
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-[#0E1522] space-y-2"
                >
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
                {
                  title: t("solutions.iot.v7.title", "Electric Cargo Bikes"),
                  desc: t(
                    "solutions.iot.v7.desc",
                    "Courier route tracking, driver safety scorecards, and payload compartment lock status."
                  ),
                },
                {
                  title: t("solutions.iot.v6.title", "Commercial Electric Motorcycles"),
                  desc: t(
                    "solutions.iot.v6.desc",
                    "Battery swap station check-ins, swappable pack telemetry, and fleet-wide battery health."
                  ),
                },
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-[#0E1522] space-y-2"
                >
                  <h4 className="font-display font-bold text-sm text-foreground">{v.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

