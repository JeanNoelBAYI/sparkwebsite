"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, BatteryCharging, Wrench, MapPin, DollarSign, Award } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";

export default function AcademyPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1220] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-[#12D18E]/20 blur-[130px]" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12D18E] backdrop-blur">
              <Award className="size-3.5" />
              <span>{t("academy.eyebrow", "Join Trekk Academy")}</span>
            </span>

            <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-white">
              {t("academy.h1", "Train Your Team to Run a Fleet Like a Pro")}
            </h1>

            <p className="text-base text-[#8A98A0] sm:text-lg leading-relaxed">
              {t(
                "academy.heroLede",
                "Hands-on courses for fleet operators, field technicians, and mobility entrepreneurs — from launching your first scooter fleet to scaling a multi-city operation."
              )}
            </p>

            <div className="pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                  <span>{t("academy.enroll", "Enroll Your Team")}</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="eyebrow">{t("academy.eyebrow", "Join Trekk Academy")}</span>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            {t("academy.courses.h2", "Our Course Categories")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("academy.heroLede", "Developed by engineers and operators who have deployed tens of thousands of rides in African urban transit corridors.")}
          </p>
        </div>

        <div id="resources" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-24">
          {[
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
          ].map((course, i) => {
            const Icon = course.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`size-11 rounded-2xl ${course.bg} flex items-center justify-center ${course.color}`}>
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
                  <Link href="/contact" className="text-xs font-bold text-[#12D18E] hover:underline inline-flex items-center gap-1">
                    <span>Inquire about this course</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Custom On-Site Training Available
          </h2>
          <p className="text-base text-muted-foreground">
            Deploying a large campus or commercial fleet? We dispatch Trekk technical instructors to train your mechanics and depot managers on-site prior to your official launch.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold">
              Request Team Training Details
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

