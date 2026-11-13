"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";

export default function AcademyBanner() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#0B1220] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-[#12D18E]/20 blur-[130px]" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12D18E] backdrop-blur">
            <Award className="size-3.5" />
            <span>{t("academy.eyebrow", "Join Trekk Academy")}</span>
          </span>

          <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-white">
            {t("academy.h1", "Train Your Team to Run a Fleet Like a Pro")}
          </h1>

          <p className="text-base text-[#8A98A0] sm:text-lg leading-relaxed">
            {t(
              "academy.heroLede",
              "Hands-on courses for fleet operators, field technicians, and mobility entrepreneurs — from launching your first scooter fleet to scaling a multi-city operation."
            )}
          </p>

          <div className="pt-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2"
              >
                <span>{t("academy.enroll", "Enroll Your Team")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

