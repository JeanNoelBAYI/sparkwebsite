"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calculator } from "lucide-react";
import Button from "@src/components/ui/button";

const AUDIENCE_TRACKS = [
  {
    num: "01",
    label: "Operators & Partners",
    title: "Build your mobility business",
    desc: "For entrepreneurs and prospective operators. Explore what it takes to move from an idea to an operating service.",
  },
  {
    num: "02",
    label: "Businesses & Institutions",
    title: "Rethink the fleet you own",
    desc: "For resorts, campuses, residential communities, and businesses. Discover ways technology can support operations and new revenue models.",
  },
  {
    num: "03",
    label: "Media & Ecosystem",
    title: "Get closer to the story",
    desc: "For journalists and ecosystem stakeholders. Hear the founders’ vision, explore the first partner story, and bring your questions.",
  },
];

export default function LaunchRevealAndTracks() {
  return (
    <div className="space-y-20">
      {/* 01 — The Reveal */}
      <section
        id="reveal"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-border/60 pb-16">
          <div className="lg:col-span-5 space-y-3">
            <span className="eyebrow">01 &mdash; The Reveal</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              You see the opportunity. Let&apos;s build what comes next.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Behind every great mobility service is more than a vehicle. There&apos;s technology, planning, payments, people, and the work that keeps it all moving.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trekk Mobility brings those pieces together. Join our official launch to discover how we help new operators get started and existing fleets take their next step.
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#12D18E] hover:underline"
            >
              <span>Get a first look</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* One Launch. Different Possibilities. */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
            One Launch. Different Possibilities.
          </h2>
          <p className="text-base text-muted-foreground">
            Find your reason to be in the room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_TRACKS.map((track) => (
            <div
              key={track.num}
              className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#12D18E] transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#12D18E]">
                  <span>{track.num}</span>
                  <span>{track.label}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {track.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.desc}
                </p>
              </div>
              <a
                href="#register"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12D18E] hover:underline"
              >
                <span>This is for me</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Shortcut to /calculator */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0B1813] text-white p-8 sm:p-12 shadow-xl">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[360px] rounded-full bg-[#12D18E]/15 blur-[110px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
                <Calculator className="size-4" />
                <span>For Operators &amp; Investors</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                What could your fleet return?
              </h2>
              <p className="text-sm sm:text-base text-[#A0B0A8] leading-relaxed">
                Plug in your scooter count and see a projected payback period and ROI with Trekk Mobility&apos;s platform — in your own currency.
              </p>
            </div>

            <Link href="/calculator" className="shrink-0">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-lg shadow-[#12D18E]/20"
              >
                <span>Try the ROI Calculator</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

