"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

const B2B_STEPS = [
  "Connect IoT-enabled scooters, e-bikes, mopeds, or golf carts to Trekk OS",
  "Launch white-label iOS & Android rider apps under your own brand",
  "Configure geofenced operating zones, speed corridors, and parking hubs",
  "Accept local cards, bank transfers, and mobile money in your currency",
  "Monitor live telemetry, battery swaps, and revenue from one command center",
];

const B2B_IMAGES = [
  {
    src: "/images/assets/resort rental.jpg",
    alt: "Trekk B2B resort and hospitality electric mobility fleet",
  },
  {
    src: "/images/assets/tourism fleet.jpg",
    alt: "Trekk B2B tourism and commercial shared fleet",
  },
];

export default function HomeHowToRide() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-[#F6FAF8] dark:from-[#0E1522] dark:to-[#0B1220] p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Tailwind CSS Masonry Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {B2B_IMAGES.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid overflow-hidden rounded-2xl border border-border/70 shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="size-2 rounded-full bg-[#12D18E]" />
                Built for Commercial Operators, Campuses &amp; Resorts
              </span>
              <Link
                href="/solutions"
                className="text-[11px] font-bold text-[#12D18E] hover:underline inline-flex items-center gap-1"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: B2B Operator Value Proposition & Steps */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
                <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                <span>B2B Fleet Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-foreground tracking-tight">
                Launch Your Branded Fleet in 20 Days
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Everything your business needs to deploy, manage, and monetize a connected mobility operation — built for operators, enterprises, and municipalities.
              </p>
            </div>

            {/* Ordered B2B Steps */}
            <div className="space-y-3 pt-1">
              {B2B_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E] font-bold text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </div>
              ))}
            </div>

            {/* B2B Turnkey Notice Badge */}
            <div className="mt-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3.5 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-[#12D18E]">
                <Building2 className="size-4" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-[11px]">
                  B2B Turnkey Infrastructure
                </p>
                <p className="opacity-90">
                  Hardware-agnostic IoT, white-label apps, and 24/7 operator support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
