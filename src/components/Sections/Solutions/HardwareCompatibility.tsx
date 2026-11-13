"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@src/hooks/useTranslation";

export default function HardwareCompatibility() {
  const { t } = useTranslation();

  const personalVehicles = [
    {
      title: t("solutions.iot.v1.title", "Electric Scooters"),
      desc: t(
        "solutions.iot.v1.desc",
        "Cellular remote lock/unlock, geofenced speed limits, and tip-over alerts."
      ),
      image: "/images/trekk-home-5.png",
    },
    {
      title: t("solutions.iot.v2.title", "Electric Bicycles"),
      desc: t(
        "solutions.iot.v2.desc",
        "Live GPS location, battery charge status, motor diagnostics, and wheel locks."
      ),
      image: "/images/electric-bicycle.png",
    },
    {
      title: t("solutions.iot.v3.title", "Electric Mopeds"),
      desc: t(
        "solutions.iot.v3.desc",
        "Smart helmet-box unlock, remote ignition, and predictive maintenance schedules."
      ),
      image: "/images/electric-mopeds.png",
    },
    {
      title: t("solutions.iot.v4.title", "Sitting Scooters"),
      desc: t(
        "solutions.iot.v4.desc",
        "Dual-passenger stability telemetry, regenerative braking analytics, and theft alerts."
      ),
      image: "/images/electric-Sitting-Scooters.png",
    },
  ];

  const cargoVehicles = [
    {
      title: t("solutions.iot.v7.title", "Electric Cargo Bikes"),
      desc: t(
        "solutions.iot.v7.desc",
        "Courier route tracking, driver safety scorecards, and payload compartment lock status."
      ),
      image: "/images/trekk-home.png",
    },
    {
      title: t("solutions.iot.v6.title", "Commercial Electric Motorcycles"),
      desc: t(
        "solutions.iot.v6.desc",
        "Battery swap station check-ins, swappable pack telemetry, and fleet-wide battery health."
      ),
      image: "/images/trekk-home-2.png",
    },
  ];

  return (
    <section
      id="vehicles"
      className="bg-[#F0FBF5]/60 dark:bg-[#0B1510]/60 border-y border-border py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="eyebrow">
            {t("solutions.iot.eyebrow", "Vehicle Compatibility")}
          </span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {personalVehicles.map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-4 hover:border-[#12D18E] transition-colors"
                >
                  <div className="relative h-44 w-full flex items-center justify-center overflow-hidden rounded-xl bg-[#FAFDFB] dark:bg-[#0B1220]/60">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {v.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#2E6BFF]">
              {t("solutions.iot.cat2", "Urban Logistics & Cargo Vehicles")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cargoVehicles.map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-[#0E1522] grid grid-cols-1 sm:grid-cols-12 gap-5 items-center hover:border-[#2E6BFF] transition-colors"
                >
                  <div className="sm:col-span-5 relative h-40 w-full flex items-center justify-center overflow-hidden rounded-xl bg-[#FAFDFB] dark:bg-[#0B1220]/60">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2">
                    <h4 className="font-display font-bold text-base text-foreground">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
