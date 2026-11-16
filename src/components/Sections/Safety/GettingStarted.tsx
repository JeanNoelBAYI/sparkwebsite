"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PRE_RIDE_STEPS = [
  "Enforce automated battery-threshold locks so low-charge vehicles stay offline until swapped by your crew.",
  "Require field technicians to log brake, headlight, and IoT lock checks inside the Operations App.",
  "Configure geofenced speed corridors, slow-ride zones, and no-go areas directly on your live fleet map.",
  "Display mandatory in-app safety onboarding and local compliance rules before any rider unlocks a vehicle.",
];

export default function SafetyGettingStarted() {
  return (
    <section
      id="getting-started"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 scroll-mt-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
            <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
            <span>Operator Safety Protocol</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.1]">
            Getting Started
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Before launching your fleet, configure Trekk&apos;s built-in safety guardrails and field inspection workflows. Automated in-app tutorials and pre-deployment checks help your operation prevent incidents and maintain high fleet uptime from day one.
          </p>

          <ul className="space-y-3 pt-2">
            {PRE_RIDE_STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 shrink-0 text-[#12D18E] mt-0.5" />
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="lg:col-span-7 flex items-center justify-center lg:justify-end"
        >
          <div className="w-full">
            <Image
              src="/images/assets/joshua-fernandez-rrw7d4f-B3Q-unsplash.jpg"
              alt="Trekk fleet safety protocol and rider onboarding"
              width={1920}
              height={824}
              className="w-full h-auto rounded-md object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
