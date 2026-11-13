"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import CustomButton from "@src/components/CustomButton";

export default function HomeLaunchBanner() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link
        href="/launch"
        className="group block rounded-3xl border border-border bg-gradient-to-r from-[#0B1813] to-[#123826] text-white p-8 sm:p-10 shadow-xl hover:border-[#12D18E] transition duration-300"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12D18E]">
              <Sparkles className="size-4" />
              <span>{t("home.launch.eyebrow", "The Official Launch · November 24, 2026 · 2:00 PM WAT")}</span>
            </div>
            <h2 className="text-2xl font-bold font-display sm:text-3xl text-white">
              {t("home.launch.h2", "Trekk Mobility is going live. Be in the room.")}
            </h2>
            <p className="text-sm text-[#8A98A0]">
              {t("home.launch.lede", "Join our launch event and digital press conference — free, online, worldwide.")}
            </p>
          </div>
          <CustomButton
            variant="primary"
            size="default"
            rounded="full"
            withArrow
            className="font-bold shadow-md"
          >
            {t("home.launch.cta", "Reserve Your Place")}
          </CustomButton>
        </div>
      </Link>
    </section>
  );
}

