"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";

export default function ProductCta() {
  const { t } = useTranslation();

  return (
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
        <div className="shrink-0">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7"
            >
              <span>{t("platform.common.bookDemo", "Book Demo")}</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

