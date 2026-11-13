"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, BookOpen, CheckCircle2, Wrench } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function AcademyCourses() {
  const { t } = useTranslation();

  const courses = [
    {
      number: "01",
      icon: BookOpen,
      color: "text-[#12D18E]",
      title: t("academy.course1Title", "Fleet Launch & Business Bootcamp"),
      desc: t(
        "academy.course1Desc",
        "Everything you need to launch a shared mobility business: licensing, city permits, pricing strategy, and go-to-market planning."
      ),
      modules: [
        "Campus & municipal permit playbooks and stakeholder pitching",
        "Unit economics modeling: unlock fees, per-minute rates, and ride passes",
        "Rider acquisition, launch-day activations, and community ambassador programs",
      ],
    },
    {
      number: "02",
      icon: BatteryCharging,
      color: "text-[#2E6BFF]",
      title: t("academy.course2Title", "Field Operations & Vehicle Maintenance"),
      desc: t(
        "academy.course2Desc",
        "Hands-on training for rebalancing, battery swaps, and vehicle diagnostics to keep your fleet on the road and riders happy."
      ),
      modules: [
        "Swappable battery handling, charging depot safety, and cycle tracking",
        "IoT telemetry diagnostics, BLE pairing, and OTA firmware updates",
        "Brake, tire, and frame preventive maintenance checklists for high uptime",
      ],
    },
    {
      number: "03",
      icon: Wrench,
      color: "text-[#FFB020]",
      title: t("academy.course3Title", "Fleet Analytics & Growth"),
      desc: t(
        "academy.course3Desc",
        "Learn to read your dashboard like a pro: utilization, demand forecasting, and pricing optimization to grow revenue per vehicle."
      ),
      modules: [
        "Reading ride heatmaps to optimize parking corrals and rebalancing routes",
        "Dynamic zone pricing, promo campaigns, and subscription retention",
        "Automated fraud prevention, ID verification, and dispute resolution",
      ],
    },
  ];

  return (
    <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-3xl space-y-3"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
          <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
          <span>{t("academy.eyebrow", "Join Trekk Academy")}</span>
        </div>
        <h2 className="text-3xl font-extrabold font-display sm:text-5xl text-foreground">
          {t("academy.courses.h2", "Our Course Categories")}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Developed by engineers and operators who have deployed tens of thousands of rides across African campuses and urban transit corridors.
        </p>
      </motion.div>

      <div
        id="resources"
        className="divide-y divide-border/60 border-y border-border/60 scroll-mt-24"
      >
        {courses.map((course, i) => {
          const Icon = course.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-start"
            >
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl sm:text-4xl font-black tracking-tighter text-[#12D18E]/30 select-none">
                    {course.number}
                  </span>
                  <Icon className={`size-5 ${course.color}`} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {course.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-wider text-[#12D18E] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Inquire about this course</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3 lg:pl-8 lg:border-l lg:border-border/60">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  What Your Team Will Master
                </p>
                <ul className="space-y-3">
                  {course.modules.map((mod, mIdx) => (
                    <li
                      key={mIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-foreground/90"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#12D18E] mt-1" />
                      <span className="leading-relaxed">{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
