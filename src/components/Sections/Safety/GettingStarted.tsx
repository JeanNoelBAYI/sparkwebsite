"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PRE_RIDE_STEPS = [
  "Inspect battery charge in the Trekk app and on the handlebar display before unlocking.",
  "Squeeze both hand brakes and switch on the front headlight to confirm responsive stopping and visibility.",
  "Check tire pressure, deck grip, and handlebar stability before stepping onto the scooter.",
  "Plan your route along designated scooter lanes and avoid congested walkways.",
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
          className="lg:col-span-6 space-y-5"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
            <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
            <span>Safety Guidelines</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.1]">
            Getting Started
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Before you hop on a scooter, take a moment to familiarize yourself with the safety guidelines. A quick 30-second inspection and awareness of local riding rules help prevent avoidable accidents and ensure a smooth journey from start to finish.
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
          className="lg:col-span-6 flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-[540px]">
            <Image
              src="/images/safety-6.png"
              alt="Getting started with Trekk scooter safety guidelines"
              width={1000}
              height={750}
              className="w-full h-auto rounded-md object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
