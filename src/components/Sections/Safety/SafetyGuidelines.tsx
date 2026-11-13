"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SAFETY_TOPICS = [
  {
    number: "01",
    title: "SCOOTER LANE",
    description:
      "We at Trekk Scooters advise the use of the Scooter lane because they're easily accessible and provide a safe space for riders as they enjoy a fun-filled ride. Riders are not necessarily concerned with other transportation media, and the ills that come with the competition for space.",
    takeaways: [
      "Stay inside marked scooter or bike lanes whenever available and ride in the direction of traffic.",
      "Keep a safe following distance from other riders so you have ample time to brake smoothly.",
      "Slow down at intersections, speed bumps, and blind corners, and yield to crossing pedestrians.",
    ],
    image: "/images/trekk-015.png",
    alt: "Riding in the designated scooter lane",
    imageFirst: false,
    blendWhite: false,
  },
  {
    number: "02",
    title: "HELMET USE",
    description:
      "Because we are all about safety, we’re endorsing the use of one. Helmets are great. We want our superactive brains to be safe. They keep our heads cooler, protect us against the sun, and even reduce the risk of flying objects. Let’s not forget how gorgeous and cool we look on one of these things.",
    takeaways: [
      "Always wear a properly fitted, certified helmet with the chin strap securely fastened.",
      "Pair your helmet with closed-toe shoes for firm footing and reliable deck control.",
      "Never attempt stunts, one-handed riding, or carrying a second passenger on the deck.",
    ],
    image: "/images/safety-7.png",
    alt: "Wearing a helmet while riding a Trekk scooter",
    imageFirst: true,
    blendWhite: true,
  },
  {
    number: "03",
    title: "PEDESTRIAN WALK",
    description:
      "They're one of the safest practices to adopt. They make trekking easier separate us from very large and dangerous vehicular movements, and provide us with a very safe space that makes footing mobility easier to carry out.",
    takeaways: [
      "Dismount and walk your scooter when entering crowded sidewalks, walkways, or indoor corridors.",
      "Use your bell politely to alert pedestrians ahead rather than weaving closely past them.",
      "Park upright using the kickstand in designated parking corrals without blocking ramps or doors.",
    ],
    image: "/images/safety-1.png",
    alt: "Pedestrian walk and safe scooting zones",
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
