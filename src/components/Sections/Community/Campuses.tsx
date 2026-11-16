"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CAMPUSES = [
  {
    name: "Pan-Atlantic University",
    location: "Ibeju-Lekki, Lagos",
    url: "https://pau.edu.ng/",
    logo: "/images/campuses/pau.png",
  },
  {
    name: "Federal University of Lafia",
    location: "Lafia, Nasarawa",
    url: "https://fulafia.edu.ng/",
    logo: "/images/campuses/fulafia.png",
  },
  {
    name: "Yusuf Maitama Sule University, Kano",
    location: "Kano",
    url: "https://yumsuk.edu.ng/",
    logo: "/images/campuses/yumsuk.png",
  },
  {
    name: "Redeemer's University",
    location: "Ede, Osun",
    url: "https://run.edu.ng/",
    logo: "/images/campuses/run.png",
  },
  {
    name: "Federal University Lokoja",
    location: "Lokoja, Kogi",
    url: "https://www.fulokoja.edu.ng/",
    logo: "/images/campuses/fulokoja.png",
  },
  {
    name: "Nasarawa State University, Keffi",
    location: "Keffi, Nasarawa",
    url: "https://nsuk.edu.ng/",
    logo: "/images/campuses/nsuk.png",
  },
  {
    name: "Lagos State University",
    location: "Ojo, Lagos",
    url: "https://www.lasu.edu.ng/",
    logo: "/images/campuses/lasu.png",
  },
  {
    name: "Federal University of Technology Akure",
    location: "Akure, Ondo",
    url: "https://www.futa.edu.ng/",
    logo: "/images/campuses/futa.png",
  },
  {
    name: "Joseph Sarwuan Tarka University, Makurdi",
    location: "Makurdi, Benue",
    url: "https://myportal.uam.edu.ng/",
    logo: "/images/campuses/uam.png",
  },
];

export default function CommunityCampuses() {
  return (
    <section
      id="campuses"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 scroll-mt-24 space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-3xl space-y-4"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
          <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
          <span>Institutional Deployments</span>
        </div>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.1]">
          Trusted Across Leading Campuses
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Across Nigeria&apos;s leading universities, Trekk Mobility partners with campus administrations and fleet operators to replace fuel-powered shuttles with clean, connected electric fleets. Our B2B operating system powers live telemetry, geofenced safety corridors, and local-currency billing across lecture halls, hostels, and innovation hubs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 border-t border-border/60 pt-10">
        {CAMPUSES.map((campus, idx) => (
          <motion.a
            key={campus.name}
            href={campus.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: (idx % 3) * 0.08 }}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-4 border-b border-border/50 pb-6 transition-colors hover:border-[#12D18E]"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative size-14 shrink-0 flex items-center justify-center"
            >
              <Image
                src={campus.logo}
                alt={`${campus.name} logo`}
                width={56}
                height={56}
                className="size-14 object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            </motion.div>

            <div className="min-w-0 flex-1 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-base font-bold text-foreground group-hover:text-[#12D18E] transition-colors leading-snug">
                  {campus.name}
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-[#12D18E] transition-all" />
              </div>
              <p className="text-xs text-muted-foreground">{campus.location}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

