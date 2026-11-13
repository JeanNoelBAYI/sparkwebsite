"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const COMMUNITY_GALLERY = [
  { src: "/images/com-1.png", alt: "Trekk Mobility community rider moment 1" },
  { src: "/images/com-2.png", alt: "Trekk Mobility community rider moment 2" },
  { src: "/images/com-3.png", alt: "Trekk Mobility community rider moment 3" },
  { src: "/images/com-4.png", alt: "Trekk Mobility community rider moment 4" },
  { src: "/images/com-5.png", alt: "Trekk Mobility community rider moment 5" },
  { src: "/images/com-6.png", alt: "Trekk Mobility community rider moment 6" },
  { src: "/images/com-7.png", alt: "Trekk Mobility community rider moment 7" },
  { src: "/images/com-8.png", alt: "Trekk Mobility community rider moment 8" },
  { src: "/images/com-9.png", alt: "Trekk Mobility community rider moment 9" },
  { src: "/images/com-10.png", alt: "Trekk Mobility community rider moment 10" },
  { src: "/images/com-11.png", alt: "Trekk Mobility community rider moment 11" },
  { src: "/images/com-12.png", alt: "Trekk Mobility community rider moment 12" },
  { src: "/images/com-13.png", alt: "Trekk Mobility community rider moment 13" },
  { src: "/images/team-scooters.jpg", alt: "Trekk Mobility team and electric scooter fleet" },
];

export default function CommunityGallery() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-2xl space-y-3"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
          <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
          <span>Community in Motion</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Life on Trekk Across Nigeria
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Snapshots from campus launches, rider meetups, and everyday sustainable commutes powered by Trekk Mobility.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {COMMUNITY_GALLERY.map((item, idx) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: (idx % 4) * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="overflow-hidden rounded-md"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="rounded-md object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

