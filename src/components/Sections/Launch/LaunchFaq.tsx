"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@src/lib/utils";

const LAUNCH_FAQS = [
  {
    q: "Who is the launch for?",
    a: "Prospective mobility operators, businesses with fleets, campus and property teams, hospitality organisations, journalists, investors, and other mobility stakeholders.",
  },
  {
    q: "Do I need an existing fleet to attend?",
    a: "No. Whether you have an early idea or an established fleet, the launch is an introduction to Trekk and a chance to explore the possibilities.",
  },
  {
    q: "When will the date and joining link be available?",
    a: "The launch is confirmed for November 24, 2026 at 2:00 PM WAT (UTC+1). The platform and joining link are still being finalised and will be shared separately with registrants.",
  },
  {
    q: "How can journalists request an interview?",
    a: "Select “Media / journalist” when registering and include your request, or contact hello@trekkmobility.com. The team will coordinate availability directly.",
  },
];

export default function LaunchFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
      <div className="space-y-3">
        <span className="eyebrow">A Few Things to Know</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
          Launch Details &amp; Questions
        </h2>
      </div>

      <div className="divide-y divide-border/70 border-y border-border/70">
        {LAUNCH_FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={item.q} className="py-5">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-base sm:text-lg font-bold text-foreground">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-[#12D18E] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <p className="pt-3 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-border/50 pt-6 text-xs text-muted-foreground leading-relaxed space-y-1">
        <p className="font-bold text-foreground">Your registration details</p>
        <p>
          We collect your name, email, organisation, country, attendee category, and any information you choose to share. Trekk Mobility will use these details to organise the launch and respond to event-related requests. Please do not submit sensitive information. To request access, correction, or deletion, contact{" "}
          <a
            href="mailto:hello@trekkmobility.com"
            className="text-[#12D18E] hover:underline font-medium"
          >
            hello@trekkmobility.com
          </a>
          . This form does not subscribe you to general marketing.
        </p>
      </div>
    </section>
  );
}

