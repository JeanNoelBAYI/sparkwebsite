"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    src: "/images/safety-2.png",
    alt: "Battery state-of-charge threshold monitoring",
    title: "01. Battery Health & Swaps",
    desc: "Automatically flag low-battery vehicles for field swap crews before charge drops below safe limits.",
  },
  {
    src: "/images/safety-3.png",
    alt: "Brakes and front light diagnostics",
    title: "02. Brake & Light Verification",
    desc: "Standardized technician checks ensure responsive braking and full visibility across every shift.",
  },
  {
    src: "/images/safety-4.png",
    alt: "Frame and folding latch inspection",
    title: "03. Frame & Stem Integrity",
    desc: "Log structural inspections and damage photos directly in the Trekk Field Operations App.",
  },
  {
    src: "/images/safety-5.png",
    alt: "Full fleet physical inspection",
    title: "04. Preventive Maintenance",
    desc: "Track wheels, handlebars, bells, and kickstands on scheduled maintenance cycles to maximize uptime.",
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
        <span className="eyebrow">Fleet Maintenance &amp; Inspection</span>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          4-Point Field Inspection Standard
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Equip your ground operations team with standardized hardware checks — tracked inside the Trekk Field Operations App before vehicles are deployed.
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
