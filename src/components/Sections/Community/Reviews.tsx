"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Dr. Babatunde Adeyemi",
    role: "Director of Campus Services · Partner University",
    quote:
      "Deploying an electric micromobility fleet on campus used to look like a logistical headache. Trekk gave us geofenced parking corrals, speed corridors, and full operational visibility in under three weeks.",
    rating: 5,
  },
  {
    name: "Amina Bello",
    role: "Operations Director · Urban Fleet Operator",
    quote:
      "Having Naira and mobile money billing built natively into our white-label app removed our biggest adoption barrier. The Field Operations App also cut our battery-swap turnaround time in half.",
    rating: 5,
  },
  {
    name: "Chukwuemeka Okafor",
    role: "Fleet Operations Lead · Lagos Campus Deployment",
    quote:
      "Trekk Mobility didn't just hand us software — their team trained our local technicians, configured IoT telemetry on our existing vehicles, and helped us scale a profitable zero-emission fleet.",
    rating: 5,
  },
];

export default function CommunityReviews() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-2xl space-y-3"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
          <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
          <span>Partner &amp; Operator Voices</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Trusted by Fleet Operators &amp; Institutional Partners
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Hear how mobility founders, university administrators, and enterprise fleet teams use Trekk Mobility to launch and scale faster.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border/60 pt-10">
        {REVIEWS.map((review, idx) => (
          <motion.blockquote
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            className="flex flex-col justify-between space-y-5 border-l-2 border-[#12D18E]/40 pl-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#12D18E]">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-[#12D18E]" />
                  ))}
                </div>
                <Quote className="size-5 text-muted-foreground/30" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>

            <footer className="pt-2">
              <p className="font-display text-sm font-bold text-foreground">
                {review.name}
              </p>
              <p className="text-xs text-muted-foreground">{review.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
