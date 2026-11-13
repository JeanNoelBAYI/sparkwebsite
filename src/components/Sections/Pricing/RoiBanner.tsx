"use client";

import React from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";

export default function PricingRoiBanner() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#0B1813] text-white p-8 sm:p-12 shadow-xl">
        <div className="pointer-events-none absolute -top-24 -right-24 size-[360px] rounded-full bg-[#12D18E]/15 blur-[110px]" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              <Calculator className="size-4" />
              <span>For Operators &amp; Investors</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              What could your fleet return?
            </h2>
            <p className="text-sm sm:text-base text-[#A0B0A8] leading-relaxed">
              Plug in your scooter count and see a projected payback period and ROI with Trekk Mobility&apos;s platform — in your own currency.
            </p>
          </div>

          <Link href="/calculator" className="shrink-0">
            <Button
              size="lg"
              className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-lg shadow-[#12D18E]/20"
            >
              <span>Try the ROI Calculator</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

