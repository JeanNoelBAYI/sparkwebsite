"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function HomeHowToRide() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-[#F6FAF8] dark:from-[#0E1522] dark:to-[#0B1220] p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Styled Video Embed Container */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nm9sMcHF17U"
                title={t("home.howto.h2", "Easy Steps on How to Trekk")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="size-2 rounded-full bg-[#12D18E]" />
                {t("home.howto.onboarding", "Official Trekk Rider Onboarding")}
              </span>
              <span className="text-[11px] opacity-75">
                {t("home.howto.hd", "HD Video Tutorial")}
              </span>
            </div>
          </div>

          {/* Right Column: Step-by-Step Rider Instructions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
                <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
                <span>{t("home.howto.badge", "Rider Quickstart")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-foreground tracking-tight">
                {t("home.howto.h2", "Easy Steps on How to Trekk")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t("home.howto.sub", "Here are some easy steps on how to ride Trekk 🛴")}
              </p>
            </div>

            {/* Ordered Steps */}
            <div className="space-y-3 pt-1">
              {[
                t("home.howto.s1", "Locate the Trekk scooter nearby, using the Trekk App"),
                t("home.howto.s2", "Unlock the scooter by scanning the QR code"),
                t("home.howto.s3", "Wear a helmet for safety"),
                t("home.howto.s4", "Step on the deck and kick forward"),
                t("home.howto.s5", "Twist the throttle to accelerate"),
                t("home.howto.s6", "Squeeze the hand break to stop"),
                t("home.howto.s7", "Release the kickstand to park"),
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E] font-bold text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </div>
              ))}
            </div>

            {/* Speed Limit Notice Badge */}
            <div className="mt-4 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-3.5 text-xs text-amber-700 dark:text-amber-300 flex items-center gap-3">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold">
                !
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-[11px]">
                  {t("home.howto.noticeTitle", "Notice · Campus Speed Limit")}
                </p>
                <p className="opacity-90">
                  {t("home.howto.noticeBody", "N.B. Speed limit is 20km/hr")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

