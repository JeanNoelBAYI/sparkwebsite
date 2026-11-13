"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";

export default function SolutionsCta() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          {t("solutions.cta.h2", "Ready to Customize Your Solution?")}
        </h2>
        <p className="text-base text-muted-foreground">
          {t(
            "solutions.cta.lede",
            "Share your fleet goals with our solution architects for a tailored deployment blueprint."
          )}
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2"
          >
            <span>{t("solutions.cta.button", "Speak to a Solution Architect")}</span>
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

