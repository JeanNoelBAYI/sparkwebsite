"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import ServicesHeroShowcase from "@src/components/ServicesHeroShowcase";
import { useTranslation } from "@src/hooks/useTranslation";

export default function SolutionsBanner() {
  const { t } = useTranslation();
  const rawH1 = t("solutions.h1", "One Platform.<br>Every Mobility Model.");
  const h1Parts = rawH1.split(/<br\s*\/?>/i);

  return (
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
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 shadow-xl shadow-[#12D18E]/20"
                >
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
  );
}

