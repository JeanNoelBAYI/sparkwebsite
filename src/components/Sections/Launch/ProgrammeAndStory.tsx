import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROGRAMME_ITEMS = [
  {
    num: "01",
    title: "The vision behind Trekk",
    desc: "Four co-founders. Global perspectives. One ambition: help more people build mobility that works.",
  },
  {
    num: "02",
    title: "From idea to operation",
    desc: "Explore the Scoot Easy story at Afe Babalola University and the work behind bringing a service to life.",
  },
  {
    num: "03",
    title: "The possibilities, unpacked",
    desc: "Discover Trekk’s approach to technology, implementation, and locally informed operations.",
  },
  {
    num: "04",
    title: "Your questions, on the table",
    desc: "A live conversation for prospective partners and stakeholders, with a dedicated media Q&A.",
  },
];

export default function LaunchProgrammeAndStory() {
  return (
    <div className="space-y-20">
      {/* 02 — Inside the Launch */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="eyebrow">02 &mdash; Inside the Launch</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              A first look. A real story. An open conversation.
            </h2>
            <p className="text-base text-muted-foreground">
              Meet the people, see the thinking, and ask the questions that matter to your next move.
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Proposed Programme &middot; Final Details to Follow
          </span>
        </div>

        <div className="divide-y divide-border/60">
          {PROGRAMME_ITEMS.map((item) => (
            <div
              key={item.num}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-1 font-display text-2xl font-black text-[#12D18E]/40">
                {item.num}
              </div>
              <div className="md:col-span-4 font-display text-xl font-bold text-foreground">
                {item.title}
              </div>
              <div className="md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <a
                  href="#register"
                  aria-label={`Register for ${item.title}`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:border-[#12D18E] hover:text-[#12D18E] transition"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Behind the Ambition */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border bg-[#FAFDFB] dark:bg-[#0E1522] p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="eyebrow">Experience Behind the Ambition</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              Built by operators. For the next generation of them.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trekk Mobility grew from our experience building Trekk Scooters. Now we&apos;re opening that knowledge, technology, and practical support to other mobility businesses.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[#12D18E]/30 bg-white dark:bg-[#0B1220] p-6 space-y-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              First Partner Story
            </span>
            <h3 className="font-display text-2xl font-extrabold text-foreground">
              Scoot Easy &times; Trekk Mobility
            </h3>
            <p className="text-sm text-muted-foreground">
              Afe Babalola University &middot; Nigeria
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

