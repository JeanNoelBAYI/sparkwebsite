"use client";

import React from "react";
import { CheckCircle2, Layers } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import type { PlatformPageData } from "@src/constants/platformPages";

export default function PlatformCapabilities({
  pageData,
}: {
  pageData: PlatformPageData;
}) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
          <Layers className="size-3.5" />
          <span>{t(pageData.sectionEyebrowKey, pageData.defaultSectionEyebrow)}</span>
        </div>
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          {t(pageData.sectionTitleKey, pageData.defaultSectionTitle)}
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
          {t(pageData.sectionDescKey, pageData.defaultSectionDesc)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pageData.capabilities.map((cap) => (
          <div
            key={cap.titleKey}
            className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-[#12D18E]/40 hover:shadow-lg hover:shadow-[#12D18E]/5"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#12D18E]/10 px-3 py-1 text-xs font-semibold text-[#12D18E]">
              <CheckCircle2 className="size-3.5" />
              <span>{t(cap.tagKey, cap.defaultTag)}</span>
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2.5">
              {t(cap.titleKey, cap.defaultTitle)}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t(cap.descKey, cap.defaultDesc)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

