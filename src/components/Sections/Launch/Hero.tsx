import React from "react";
import { Calendar, Clock, Globe, ArrowRight, Sparkles } from "lucide-react";
import Button from "@src/components/ui/button";

export default function LaunchHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0B1220] text-white mx-4 sm:mx-6 lg:mx-8 p-8 sm:p-14 lg:p-20 shadow-2xl">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-[#12D18E]/20 blur-[130px]" />

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12D18E] backdrop-blur">
          <Sparkles className="size-3.5" />
          <span>Official Launch &middot; Live, Online, Global</span>
        </div>

        <h1 className="text-4xl font-extrabold font-display sm:text-6xl lg:text-7xl leading-tight">
          The future of mobility has room for{" "}
          <span className="text-[#12D18E] italic">you.</span>
        </h1>

        <p className="text-base text-[#8A98A0] sm:text-lg max-w-2xl leading-relaxed">
          More operators. More possibilities. Meet the technology, hardware partnerships, and practical capital ecosystem helping mobility ideas become high-margin African businesses.
        </p>

        {/* Event Metadata Pill */}
        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#E3EDE8]">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-[#12D18E]" />
            <span className="font-bold">November 24, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-[#12D18E]" />
            <span>2:00 PM WAT (UTC+1)</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="size-4 text-[#12D18E]" />
            <span>Digital Broadcast &middot; Worldwide</span>
          </div>
        </div>

        <div className="pt-4">
          <a href="#register">
            <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
              <span>Reserve Your Place</span>
              <ArrowRight className="size-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

