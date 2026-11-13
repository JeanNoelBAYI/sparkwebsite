"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    src: "/images/safety-2.png",
    alt: "Check the battery level on the scooter",
    title: "01. Battery Level Check",
    desc: "Verify sufficient battery charge on the handlebar display and in the app before starting your ride.",
  },
  {
    src: "/images/safety-3.png",
    alt: "Always test the brake and light",
    title: "02. Brakes & Lights",
    desc: "Squeeze the hand brake to confirm smooth stopping power and ensure the front light is working.",
  },
  {
    src: "/images/safety-4.png",
    alt: "Verify the condition of the frame",
    title: "03. Frame Condition",
    desc: "Inspect the stem, folding latch, and footboard deck to make sure everything feels solid and secure.",
  },
  {
    src: "/images/safety-5.png",
    alt: "Inspect all physical conditions",
    title: "04. Full Physical Inspection",
    desc: "Check the wheels, handlebars, bell, and kickstand for any visible wear before you kick off.",
  },
];

export default function SafetyGallery() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl space-y-3"
      >
        <span className="eyebrow">Pre-Ride Checklist</span>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          4 Quick Checks Before Every Ride
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Every Trekk scooter goes through regular fleet maintenance, and a quick personal check before unlocking gives you complete peace of mind.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="space-y-3"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={800}
              className="w-full h-auto rounded-md object-cover"
            />
            <div className="space-y-1">
              <h3 className="font-display text-sm font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
