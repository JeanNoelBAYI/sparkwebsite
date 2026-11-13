"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Tunde Adeyemi",
    role: "Final Year Engineering Student · FUTA",
    quote:
      "Getting from the hostel to the 8 AM lecture hall used to take a 25-minute walk in the sun. With Trekk scooters, I scan the QR code and I'm at my faculty in four minutes flat.",
    rating: 5,
  },
  {
    name: "Amina Bello",
    role: "Postgraduate Researcher · Pan-Atlantic University",
    quote:
      "The campus feels quieter and cleaner with Trekk. Topping up my wallet in Naira takes seconds, and the geofenced parking zones keep the walkways neat for everyone.",
    rating: 5,
  },
  {
    name: "Chukwuemeka Okafor",
    role: "Campus Operations Lead · Lagos State University",
    quote:
      "Trekk Mobility didn't just drop scooters on campus — their team trained local student ambassadors, set up safe riding corridors, and gave our community a reliable zero-emission commute.",
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
          <span>Rider Voices</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Loved by Riders Across Campus Communities
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Hear how students, researchers, and campus partners use Trekk Mobility every day to save time and lower their carbon footprint.
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

