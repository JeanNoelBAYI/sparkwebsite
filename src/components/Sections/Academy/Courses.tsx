"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BatteryCharging, BookOpen, Wrench } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function AcademyCourses() {
  const { t } = useTranslation();

  const courses = [
    {
      icon: BookOpen,
      color: "text-[#12D18E]",
      bg: "bg-[#12D18E]/10",
      title: t("academy.course1Title", "Fleet Launch & Business Bootcamp"),
      desc: t(
        "academy.course1Desc",
        "Everything you need to launch a shared mobility business: licensing, city permits, pricing strategy, and go-to-market planning."
      ),
    },
    {
      icon: BatteryCharging,
      color: "text-[#2E6BFF]",
      bg: "bg-[#2E6BFF]/10",
      title: t("academy.course2Title", "Field Operations & Vehicle Maintenance"),
      desc: t(
        "academy.course2Desc",
        "Hands-on training for rebalancing, battery swaps, and vehicle diagnostics to keep your fleet on the road and riders happy."
      ),
    },
    {
      icon: Wrench,
      color: "text-[#FFB020]",
      bg: "bg-[#FFB020]/10",
      title: t("academy.course3Title", "Fleet Analytics & Growth"),
      desc: t(
        "academy.course3Desc",
        "Learn to read your dashboard like a pro: utilization, demand forecasting, and pricing optimization to grow revenue per vehicle."
      ),
    },
  ];

  return (
    <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-2xl mb-12 space-y-3">
        <span className="eyebrow">{t("academy.eyebrow", "Join Trekk Academy")}</span>
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          {t("academy.courses.h2", "Our Course Categories")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t(
            "academy.heroLede",
            "Developed by engineers and operators who have deployed tens of thousands of rides in African urban transit corridors."
          )}
        </p>
      </div>

      <div
        id="resources"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-24"
      >
        {courses.map((course, i) => {
          const Icon = course.icon;
          return (
            <div
              key={i}
              className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  className={`size-11 rounded-2xl ${course.bg} flex items-center justify-center ${course.color}`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {course.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {course.desc}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#12D18E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Inquire about this course</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

