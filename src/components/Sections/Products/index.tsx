"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";
import type { IndustryPageData } from "@src/constants/industryPages";
import ProductHero from "./Hero";
import ProductHighlights from "./Highlights";
import VehicleAndModels from "./VehicleAndModels";
import ProductCta from "./Cta";

export default function ProductSections({
  pageData,
}: {
  pageData: IndustryPageData;
}) {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 pb-20">
      <ProductHero pageData={pageData} />

      <section className="border-y border-border bg-[#F8FAF8] py-16 lg:py-24 dark:bg-[#0B1510]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
                {t(pageData.highlightsTitleKey, pageData.defaultHighlightsTitle)}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {t(
                  pageData.highlightsSubtitleKey,
                  pageData.defaultHighlightsSubtitle
                )}
              </p>
            </div>
          </div>

          <ProductHighlights pageData={pageData} />

          {pageData.showVehicleAndOperatingModelBlock && <VehicleAndModels />}
        </div>
      </section>

      <ProductCta />
    </div>
  );
}

