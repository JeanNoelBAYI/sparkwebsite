"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Calendar, Globe } from "lucide-react";
import Button from "@src/components/ui/button";

export default function LaunchHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-20 lg:pt-24">
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-32 right-0 size-[600px] rounded-full bg-[#12D18E]/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-12 -left-24 size-[420px] rounded-full bg-[#2E6BFF]/10 blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
              <span>The Official Launch &middot; Live, Online, Global</span>
            </div>

            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] leading-[1.03]">
              The future of mobility has room for{" "}
              <span className="text-[#12D18E]">you.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#A0B0A8] sm:text-lg">
              More operators. More possibilities. Meet the technology and practical support helping mobility ideas become real-world businesses.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#register">
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-xl shadow-[#12D18E]/25"
                >
                  <span>Be part of the reveal</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
              <a
                href="#reveal"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#12D18E] transition-colors"
              >
                <span>Discover what&apos;s coming</span>
                <ArrowDown className="size-4" />
              </a>
            </div>

            {/* Event Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 max-w-xl text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Calendar className="size-4 text-[#12D18E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wider text-white">
                    November 24, 2026
                  </p>
                  <p className="text-[#94A89E]">2:00 PM WAT (UTC+1)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="size-4 text-[#12D18E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wider text-white">
                    Digital Launch + Press Conference
                  </p>
                  <p className="text-[#94A89E]">Free registration &middot; Join from anywhere</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive SVG Globe Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 relative flex flex-col items-center"
          >
            <div className="relative w-full max-w-[540px]">
              <svg
                className="w-full h-auto"
                viewBox="0 0 650 650"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="launchGlobeGlow">
                    <stop stopColor="#12D18E" stopOpacity="0.22" />
                    <stop offset="1" stopColor="#12D18E" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="325" cy="325" r="315" fill="url(#launchGlobeGlow)" />
                <g stroke="#12D18E" strokeOpacity="0.22">
                  <circle cx="325" cy="325" r="245" />
                  <ellipse cx="325" cy="325" rx="55" ry="245" />
                  <ellipse cx="325" cy="325" rx="120" ry="245" />
                  <ellipse cx="325" cy="325" rx="185" ry="245" />
                  <path d="M 153.53571800517753 150 Q 325 215 496.4642819948225 150" />
                  <path d="M 103.64056378821346 220 Q 325 285 546.3594362117865 220" />
                  <path d="M 82.51288694035719 290 Q 325 355 567.4871130596428 290" />
                  <path d="M 82.51288694035719 360 Q 325 425 567.4871130596428 360" />
                  <path d="M 103.64056378821346 430 Q 325 495 546.3594362117865 430" />
                  <path d="M 153.53571800517753 500 Q 325 565 496.4642819948225 500" />
                  <path d="M80 325H570M325 80V570" />
                </g>
                <g stroke="#5FE39B" strokeWidth="2">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    d="M184 242 Q300 70 453 193 Q570 300 360 400 Q250 410 280 305 Q300 230 453 193"
                  />
                  <path d="M184 242Q205 395 360 400" strokeDasharray="4 7" />
                </g>
                <g>
                  <circle cx="184" cy="242" r="15" fill="#12D18E" fillOpacity="0.18" />
                  <circle cx="184" cy="242" r="5" fill="#7FEBAA" />
                </g>
                <g>
                  <circle cx="453" cy="193" r="15" fill="#12D18E" fillOpacity="0.18" />
                  <circle cx="453" cy="193" r="5" fill="#7FEBAA" />
                </g>
                <g>
                  <circle cx="360" cy="400" r="15" fill="#12D18E" fillOpacity="0.18" />
                  <circle cx="360" cy="400" r="5" fill="#7FEBAA" />
                </g>
                <g>
                  <circle cx="280" cy="305" r="15" fill="#12D18E" fillOpacity="0.18" />
                  <circle cx="280" cy="305" r="5" fill="#7FEBAA" />
                </g>
                <text
                  x="150"
                  y="216"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="10"
                  letterSpacing="2"
                >
                  GLOBAL PERSPECTIVES
                </text>
                <text
                  x="353"
                  y="435"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="10"
                  letterSpacing="2"
                >
                  LOCAL POSSIBILITIES
                </text>
              </svg>

              {/* Floating Callout Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-14 left-2 sm:left-6 rounded-xl border border-white/15 bg-[#0D2118]/90 backdrop-blur-md px-4 py-3 shadow-2xl max-w-[230px]"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-white leading-snug">
                  <span className="text-[#12D18E] mr-1">+</span>
                  Built from experience. Opening new possibilities.
                </p>
              </motion.div>

              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50 px-2 pt-2">
                <span>01 / A New Chapter in Mobility</span>
                <span>Africa &rarr; The World</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker Strip */}
      <div className="border-t border-white/10 bg-[#08130E] py-3.5 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#12D18E]/90">
          <span>Your Brand.</span>
          <span className="text-white/30">&#10035;</span>
          <span>Your Fleet.</span>
          <span className="text-white/30">&#10035;</span>
          <span>Your Next Move.</span>
          <span className="text-white/30">&#10035;</span>
          <span>Powered by Possibility.</span>
        </div>
      </div>
    </section>
  );
}
