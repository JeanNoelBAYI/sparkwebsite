"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function ContactHeader() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-4">
      <span className="eyebrow">{t("contact.eyebrow", "Contact Us")}</span>
      <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-foreground">
        {t("contact.h1", "Talk to a Trekk Mobility Specialist")}
      </h1>
      <p className="text-base text-muted-foreground sm:text-lg">
        {t(
          "contact.heroLede",
          "Ready to launch or scale your fleet? Whether you’re deploying your first 20 scooters or expanding to your 10th city, our team can walk you through the platform and get you a live demo."
        )}
      </p>
    </section>
  );
}

