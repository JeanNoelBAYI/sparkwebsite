"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BATTERY_IMAGES = [
  {
    src: "/images/sustainability-04.png",
    alt: "Trekk battery life-cycle and responsible recycling",
  },
  {
    src: "/images/sustainability-05.png",
    alt: "Certified scooter battery management and swap operations",
  },
  {
    src: "/images/com-3.png",
    alt: "Trekk scooter fleet maintenance and battery care",
  },
];

export default function BatteryLifecycle() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/60 py-14">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-[#12D18E]/30 select-none">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              Circular Responsibility
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Battery Life-Cycle
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Trekk is committed to minimizing our environmental footprint and promoting sustainability at every opportunity. That&apos;s why we&apos;ve implemented a comprehensive battery recycling program designed to responsibly manage the end-of-life disposal of our scooter batteries. By partnering with certified recycling facilities, we ensure that every battery is handled with care and processed in accordance with the highest environmental standards.
          </p>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="columns-2 gap-4 space-y-4">
            {BATTERY_IMAGES.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="break-inside-avoid overflow-hidden rounded-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={900}
                  className="w-full h-auto rounded-md object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

