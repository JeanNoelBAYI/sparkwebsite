"use client";

import React from "react";
import { Compass, Target } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-[#F0FBF5]/60 py-16 lg:py-20 dark:bg-[#0B1510]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Statement */}
          <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm dark:bg-[#0E1522] space-y-4">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[#12D18E]/15 text-[#12D18E]">
              <Target className="size-5" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {t("about.missionTitle", "Mission Statement")}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t(
                "about.missionText",
                "At Trekk Scooters, our mission is to reinvent mobility and ignite change in the environment by providing eco-friendly transportation models and designing disruptive innovation, leveraging technology and talent with sustainable practices."
              )}
            </p>
          </div>

          {/* Vision Statement */}
          <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm dark:bg-[#0E1522] space-y-4">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[#2E6BFF]/15 text-[#2E6BFF]">
              <Compass className="size-5" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {t("about.visionTitle", "Vision Statement")}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t(
                "about.visionText",
                "Our vision is to lead the conscious transition towards an eco-friendly and technology-driven mobility era across Africa and beyond."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

