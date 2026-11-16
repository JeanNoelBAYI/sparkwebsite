"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@src/components/ui/button";

export default function SafetyBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-24 pb-20 lg:pt-28 lg:pb-24">
      {/* Soft Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-32 right-0 size-[560px] rounded-full bg-[#12D18E]/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-[420px] rounded-full bg-[#2E6BFF]/10 blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E] backdrop-blur-md">
              <ShieldCheck className="size-4" />
              <span>Fleet Safety &amp; Compliance</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] leading-[1.06]">
              Safety First
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#E3EDE8] sm:text-xl">
              Built-in safety governance for commercial fleets. Protect riders, reduce liability, and meet municipal and campus regulations.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-[#94A89E] sm:text-base">
              Trekk Mobility equips fleet operators, universities, and hospitality hubs with automated geofence speed limits, digital rider onboarding, and preventive hardware diagnostics — keeping every vehicle compliant and road-ready.
            </p>

            {/* Quick Safety Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10 max-w-lg">
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-[#12D18E]">20 km/h</p>
                <p className="text-xs text-[#94A89E]">Configurable zone cap</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">100%</p>
                <p className="text-xs text-[#94A89E]">Digital rider onboarding</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">4-Point</p>
                <p className="text-xs text-[#94A89E]">Field inspection protocol</p>
              </div>
            </div>

            <div className="pt-2">
              <a href="#getting-started">
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-xl shadow-[#12D18E]/20"
                >
                  <span>Explore Safety Controls</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Image with Framer Motion entrance & gentle float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-[560px]"
            >
              <Image
                src="/images/com-1.png"
                alt="Trekk Mobility Fleet Safety & Compliance"
                width={1200}
                height={900}
                className="w-full h-auto rounded-md object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
