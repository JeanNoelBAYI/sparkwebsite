"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@src/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
  category: "Launch & App" | "Fleet & Hardware" | "Pricing & Payments" | "Operations & Support";
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How quickly can I launch?",
    answer:
      "Most standard deployments can be prepared for launch within approximately 20 days, depending on vehicle hardware, integrations, branding and business requirements.",
    category: "Launch & App",
  },
  {
    question: "Do I need to build my own app?",
    answer:
      "No. Trekk provides branded rider applications that can be configured for your business.",
    category: "Launch & App",
  },
  {
    question: "Can I use my existing vehicles?",
    answer:
      "Yes. Trekk is designed to support integrations with connected vehicles and compatible IoT/telematics hardware.",
    category: "Fleet & Hardware",
  },
  {
    question: "Can I choose my own pricing?",
    answer:
      "Yes. You control your pricing structure, including unlock fees, time-based pricing, distance-based pricing, passes, subscriptions and promotions.",
    category: "Pricing & Payments",
  },
  {
    question: "Can customers pay in local currency?",
    answer:
      "Yes. Trekk is designed to support local payment methods and local currency operations in supported markets.",
    category: "Pricing & Payments",
  },
  {
    question: "Can I operate more than one city?",
    answer: "Yes. Trekk supports multi-city and multi-market operations.",
    category: "Operations & Support",
  },
  {
    question: "Can I have different vehicle types?",
    answer:
      "Yes. You can manage multiple vehicle categories within your mobility ecosystem.",
    category: "Fleet & Hardware",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Trekk provides 24/7 support for platform and operational issues, with customer support capabilities available for your riders.",
    category: "Operations & Support",
  },
  {
    question: "Can I integrate Trekk with my existing software?",
    answer:
      "Yes. Trekk provides APIs and integration capabilities for supported systems.",
    category: "Launch & App",
  },
  {
    question: "Do I need technical expertise?",
    answer:
      "No. Trekk manages the technology infrastructure while your team focuses on operating the mobility business.",
    category: "Operations & Support",
  },
  {
    question: "How is Trekk priced?",
    answer:
      "Pricing has two parts: a one-time platform set-up fee based on your package (Basic, Standard or Premium), and a fixed monthly platform fee per active vehicle that decreases as your fleet grows.",
    category: "Pricing & Payments",
  },
  {
    question: "Is there a minimum monthly fee?",
    answer:
      "The Basic plan carries a minimum monthly platform fee. Minimums for Standard and Premium are set with your account manager based on fleet size and market.",
    category: "Pricing & Payments",
  },
];

const CATEGORIES = [
  "All",
  "Launch & App",
  "Fleet & Hardware",
  "Pricing & Payments",
  "Operations & Support",
] as const;

export default function FaqAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered =
    selectedCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(0);
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition border",
              selectedCategory === cat
                ? "bg-[#12D18E] text-[#0B1220] border-[#12D18E]"
                : "border-border bg-white dark:bg-[#0E1522] text-muted-foreground hover:border-[#12D18E]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Borderless Editorial Accordion */}
      <div className="divide-y divide-border/70 border-y border-border/70">
        {filtered.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="py-5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-base sm:text-lg font-bold text-foreground">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-[#12D18E] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 pr-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

