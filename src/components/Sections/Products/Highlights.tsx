"use client";

import React from "react";
import {
  Clock,
  Gauge,
  LockOpen,
  MapPin,
  Smartphone,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import type {
  IndustryHighlightCard,
  IndustryPageData,
} from "@src/constants/industryPages";

const HIGHLIGHT_ICON_MAP: Record<
  IndustryHighlightCard["icon"],
  React.ComponentType<{ className?: string }>
> = {
  userCheck: UserCheck,
  lockOpen: LockOpen,
  gauge: Gauge,
  mapPin: MapPin,
  smartphone: Smartphone,
  clock: Clock,
  trendingUp: TrendingUp,
};

export default function ProductHighlights({
  pageData,
}: {
  pageData: IndustryPageData;
}) {
  const { t } = useTranslation();

  if (!pageData.highlights || pageData.highlightsLayout === "two-column-models") {
    return null;
  }

  const isFourCols = pageData.highlightsLayout === "four-cards";

  return (
    <div
      className={
        isFourCols
          ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          : "grid grid-cols-1 gap-6 md:grid-cols-3"
      }
    >
      {pageData.highlights.map((card) => {
        const IconComp = HIGHLIGHT_ICON_MAP[card.icon];
        return (
          <div
            key={card.titleKey}
            className="rounded-2xl border border-border bg-white p-6 sm:p-7 text-center shadow-sm transition-all hover:border-[#12D18E]/40 hover:shadow-md dark:bg-[#0E1522]"
          >
            <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
              <IconComp className="size-5" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2.5">
              {t(card.titleKey, card.defaultTitle)}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {t(card.descKey, card.defaultDesc)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

