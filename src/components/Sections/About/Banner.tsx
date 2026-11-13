"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";

export default function AboutBanner() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Copy */}
        <div className="lg:col-span-6 space-y-6">
          <span className="eyebrow">{t("about.eyebrow", "About Us")}</span>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] leading-[1.1]">
            {t(
              "about.h1",
              "Discover our Journey: Empowering Communities Through Sustainable Micro-mobility"
            )}
          </h1>

          <div className="pt-2">
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

        {/* Right Image: no shadow background or white background, small rounded corners */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[560px]">
            <Image
              src="/images/about-6.png"
              alt={t("about.bannerAlt", "Trekk Mobility Community & Team")}
              width={1200}
              height={900}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

