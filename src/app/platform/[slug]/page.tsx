"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import PhonesHeroBanner from "@src/components/PhonesHeroBanner";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";
import { PLATFORM_PAGES } from "@src/constants/platformPages";

export default function PlatformModulePage() {
  const params = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const pageData = params?.slug ? PLATFORM_PAGES[params.slug] : undefined;

  if (!pageData) {
    notFound();
  }

  return (
    <div className="space-y-20 pb-20">
      {/* Screenshot 2 Phones Hero Banner */}
      <PhonesHeroBanner
        badge={t(pageData.badgeKey, pageData.defaultBadge)}
        title={t(pageData.titleKey, pageData.defaultTitle)}
        description={t(pageData.descKey, pageData.defaultDesc)}
        ctaLabel={t("platform.common.bookDemo", "Book Demo")}
        ctaHref="/contact"
      />

      {/* Capabilities Grid */}
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

      {/* 3-Step Operational Workflow */}
      <section className="border-y border-border bg-[#F0FBF5]/60 dark:bg-[#0B1510]/60 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
              {t(pageData.workflowTitleKey, pageData.defaultWorkflowTitle)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageData.workflowSteps.map((step) => (
              <div
                key={step.titleKey}
                className="rounded-2xl border border-border bg-background p-6 space-y-2.5"
              >
                <h3 className="text-lg font-bold font-display text-foreground">
                  {t(step.titleKey, step.defaultTitle)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(step.descKey, step.defaultDesc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1813] px-6 py-12 sm:px-12 sm:py-16 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              {t("platform.common.ctaTitle", "Ready to run your fleet on Trekk?")}
            </h2>
            <p className="text-sm sm:text-base text-[#D3E4DC] leading-relaxed">
              {t(
                "platform.common.ctaDesc",
                "Book a tailored walkthrough of our Fleet Dashboard, Rider App, IoT connectivity, and operational modules."
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2"
              >
                <span>{t("platform.common.bookDemo", "Book Demo")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

