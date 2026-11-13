"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import CustomButton from "@src/components/CustomButton";

export default function FaqBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-24 pb-20 lg:pt-28 lg:pb-24">
      <div className="pointer-events-none absolute -top-32 right-0 size-[520px] rounded-full bg-[#12D18E]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-[380px] rounded-full bg-[#2E6BFF]/10 blur-[130px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E] backdrop-blur-md">
            <HelpCircle className="size-4" />
            <span>FAQ</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
            Frequently Asked Questions
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[#A0B0A8] sm:text-lg">
            Everything you need to know about launching, pricing, hardware compatibility, and scaling your mobility fleet with Trekk Mobility.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-xl shadow-[#12D18E]/20"
              >
                <span>Talk to a Mobility Specialist</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <CustomButton
                variant="outline-light"
                size="lg"
                rounded="full"
                className="px-7 text-base font-semibold border-white/25 text-white hover:bg-white/10"
              >
                <span>View Pricing Plans</span>
              </CustomButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

