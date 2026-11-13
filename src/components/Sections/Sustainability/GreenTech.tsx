"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GREEN_TECH_IMAGES = [
  {
    src: "/images/sustainability-03.png",
    alt: "Trekk swappable battery and green fleet technology",
  },
  {
    src: "/images/com-5.png",
    alt: "Trekk connected electric scooter fleet",
  },
  {
    src: "/images/com-4.png",
    alt: "Smart urban mobility riders on Trekk scooters",
  },
  {
    src: "/images/com-6.png",
    alt: "Trekk intelligent fleet operations",
  },
];

export default function GreenTech() {
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
              02
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              Smart Clean Tech
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Green Technology Innovation
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            We&apos;re constantly investing in cutting-edge technology and innovation to enhance the sustainability of our platform. From swappable battery scooters to intelligent proprietary fleet management systems designed to optimize efficiency, we&apos;re leveraging the latest advancements to minimize our environmental impact and maximize our positive contribution to the planet. Additionally, our technology allows riders to be aware of their carbon footprint by tracking their CO2 emissions saved while riding Trekk.
          </p>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="columns-2 gap-4 space-y-4">
            {GREEN_TECH_IMAGES.map((img, idx) => (
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

