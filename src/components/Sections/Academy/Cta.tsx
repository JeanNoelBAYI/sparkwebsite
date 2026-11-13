"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";

export default function AcademyCta() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-3xl space-y-5"
      >
        <span className="eyebrow">On-Site &amp; Remote Enablement</span>
        <h2 className="text-3xl font-extrabold font-display sm:text-4xl text-foreground">
          Custom On-Site Training Available
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Deploying a large campus or commercial fleet? We dispatch Trekk technical instructors to train your mechanics, battery-swap crew, and depot managers on-site prior to your official launch.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7"
            >
              <span>Request Team Training Details</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
