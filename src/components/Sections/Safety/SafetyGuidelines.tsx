"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SAFETY_TOPICS = [
  {
    number: "01",
    title: "SCOOTER LANE & CORRIDOR MAPPING",
    description:
      "Guide fleets onto designated micromobility corridors using Trekk's polygon geofencing and route controls. Operators can define approved riding zones, restrict high-speed highways, and automatically throttle vehicle speed when entering shared lanes.",
    takeaways: [
      "Draw custom operating polygons and no-go zones to keep vehicles off restricted roads.",
      "Enforce automatic speed caps per zone without requiring manual rider intervention.",
      "Monitor corridor utilization via heatmaps to collaborate with city and campus planners.",
    ],
    image: "/images/trekk-015.png",
    alt: "Designated scooter lane and geofenced riding corridor",
    imageFirst: false,
    blendWhite: false,
  },
  {
    number: "02",
    title: "HELMET COMPLIANCE & RIDER ONBOARDING",
    description:
      "Reduce operator liability with built-in rider education and helmet compliance tools. Trekk's white-label rider app lets businesses require safety acknowledgments, helmet reminders, and single-rider policy acceptance before any trip begins.",
    takeaways: [
      "Trigger mandatory in-app safety tutorials and helmet prompts for first-time riders.",
      "Enforce age verification and digital ID / driver's license checks during onboarding.",
      "Configure tip-over and tamper alerts via IoT telematics to detect unsafe riding.",
    ],
    image: "/images/safety-7.png",
    alt: "Helmet compliance and rider safety verification",
    imageFirst: true,
    blendWhite: true,
  },
  {
    number: "03",
    title: "PEDESTRIAN ZONES & PARKING GOVERNANCE",
    description:
      "Maintain strong relationships with municipalities, universities, and property managers by keeping sidewalks clutter-free. Trekk's parking corral enforcement and slow-speed pedestrian zones ensure fleets integrate respectfully into busy public spaces.",
    takeaways: [
      "Set automatic slow-speed corridors in high-footfall campus walkways and plazas.",
      "Require riders to park inside designated corrals and submit end-of-ride photo proof.",
      "Use bonus-zone incentives to encourage riders to return vehicles to tidy charging hubs.",
    ],
    image: "/images/safety-1.png",
    alt: "Pedestrian walk and designated fleet parking zones",
    imageFirst: false,
    blendWhite: false,
  },
];

export default function SafetyGuidelines() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-border/60">
      {SAFETY_TOPICS.map((topic) => (
        <div
          key={topic.title}
          className="grid grid-cols-1 items-center gap-12 py-16 first:pt-4 last:pb-4 lg:grid-cols-12 lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: topic.imageFirst ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`lg:col-span-6 space-y-5 ${
              topic.imageFirst ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-[#12D18E]/30 select-none">
                {topic.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
                Trekk Safety Standard
              </span>
            </div>

            <h3 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {topic.title}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {topic.description}
            </p>

            <ul className="space-y-2.5 pt-2">
              {topic.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="size-4 shrink-0 text-[#12D18E] mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className={`lg:col-span-6 flex items-center justify-center ${
              topic.imageFirst ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="w-full max-w-[540px]">
              <Image
                src={topic.image}
                alt={topic.alt}
                width={1000}
                height={750}
                className={`w-full h-auto rounded-md object-contain ${
                  topic.blendWhite ? "mix-blend-multiply dark:mix-blend-normal" : ""
                }`}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
