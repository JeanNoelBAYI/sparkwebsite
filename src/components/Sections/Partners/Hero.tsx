"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";

export default function PartnersHero() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl space-y-4">
        <span className="eyebrow">{t("partners.eyebrow", "Partner Program")}</span>
        <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-foreground">
          {t("partners.h1", "Build With Trekk")}
        </h1>
        <p className="text-lg text-muted-foreground pt-2">
          {t(
            "partners.heroLede",
            "Trekk is not just software. We are building the entire African urban mobility ecosystem together with operators, hardware makers, and capital partners."
          )}
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
              <span>{t("partners.becomePartner", "Become a Trekk Partner")}</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

