"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";
import type { IndustryPageData } from "@src/constants/industryPages";

export default function ProductHero({
  pageData,
}: {
  pageData: IndustryPageData;
}) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 pt-24 pb-6 sm:px-6 lg:px-8 lg:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Visual Showcase with Paired Background */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto flex h-[450px] sm:h-[520px] lg:h-[560px] w-full max-w-[540px] items-center justify-center">
            <div className="pointer-events-none absolute inset-6 sm:inset-8">
              <Image
                src={pageData.bgImage}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <Image
                src={pageData.image}
                alt={pageData.imageAlt}
                width={1290}
                height={2796}
                className="h-[450px] sm:h-[520px] lg:h-[560px] w-auto rounded-3xl object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Copy + Book Demo CTA + 4-Column Stats Bar */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E]">
            <span>{t(pageData.badgeKey, pageData.defaultBadge)}</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] leading-[1.08]">
            {t(pageData.titleKey, pageData.defaultTitle)}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(pageData.descKey, pageData.defaultDesc)}
          </p>

          <div className="pt-1">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-lg shadow-[#12D18E]/20"
              >
                <span>{t("platform.common.bookDemo", "Book Demo")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {pageData.stats.map((stat) => (
              <div
                key={stat.labelKey}
                className="rounded-xl border border-border bg-muted/40 px-4 py-3.5"
              >
                <div className="font-display text-lg sm:text-xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {t(stat.labelKey, stat.defaultLabel)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

