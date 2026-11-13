"use client";

import React from "react";
import { Smartphone, Layers, Cpu } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function HomeOperatingInfrastructure() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
          <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
          <span>{t("home.infra.eyebrow", "Operating Infrastructure")}</span>
        </div>
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          {t("home.infra.h2", "Complete Fleet Operating System")}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {t("home.infra.lede", "We provide everything you need to operate a safe, reliable, and profitable connected fleet.")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#12D18E] transition">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#12D18E]/10 text-[#12D18E]">
            <Smartphone className="size-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-foreground">
            {t("home.infra.c1Title", "White-Label Rider App")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("home.infra.c1Desc", "Native iOS and Android rider app built for speed. Integrated wallet, QR unlocking, trip summaries, and in-app customer support.")}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#2E6BFF] transition">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#2E6BFF]/10 text-[#2E6BFF]">
            <Layers className="size-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-foreground">
            {t("home.infra.c2Title", "Operator Web Command")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("home.infra.c2Desc", "Complete fleet awareness in real-time. Manage dynamic pricing, geofenced parking corrals, battery swaps, and staff dispatching.")}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-8 shadow-sm space-y-4 hover:border-[#FFB020] transition">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFB020]/10 text-[#FFB020]">
            <Cpu className="size-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-foreground">
            {t("home.infra.c3Title", "Hardware-Agnostic IoT")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("home.infra.c3Desc", "Seamless integration with Omni, Queclink, and Teltonika IoT modules. Cellular failovers, remote locks, and real-time battery diagnostics.")}
          </p>
        </div>
      </div>
    </section>
  );
}

