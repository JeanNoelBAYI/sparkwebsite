"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@src/hooks/useTranslation";

const CULTURE_MASONRY_IMAGES = [
  {
    src: "/images/about-1.png",
    alt: "Trekk team collaboration and culture",
    aspectClass: "aspect-[4/5]",
  },
  {
    src: "/images/about-2.png",
    alt: "Trekk sustainable micro-mobility operations",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: "/images/about-3.png",
    alt: "Trekk diverse team working together",
    aspectClass: "aspect-[4/4]",
  },
  {
    src: "/images/about-4.png",
    alt: "Trekk community and rider engagement",
    aspectClass: "aspect-[4/5]",
  },
  {
    src: "/images/about-6.png",
    alt: "Trekk Mobility leadership and field team",
    aspectClass: "aspect-[16/10]",
  },
];

export default function PeopleAndCulture() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Copy Blocks: People and Culture + Diversity and Inclusion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        <div className="space-y-4">
          <span className="eyebrow">
            {t("about.culture.eyebrow", "Culture")}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("about.culture.title", "People and culture")}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t(
              "about.culture.desc",
              "At Trekk, our success is driven by the dedication, passion, and diversity of our team. We believe that our people are our most valuable asset, and we strive to create an inclusive and supportive culture that fosters personal growth, collaboration, and innovation."
            )}
          </p>
        </div>

        <div className="space-y-4">
          <span className="eyebrow">
            {t("about.diversity.eyebrow", "Inclusion")}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("about.diversity.title", "Diversity and Inclusion")}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t(
              "about.diversity.desc",
              "We celebrate diversity in all its forms, recognizing that it strengthens our organization and enriches our perspectives. We are committed to creating an inclusive workplace where everyone feels valued, respected, and empowered to bring their authentic selves to work each day."
            )}
          </p>
        </div>
      </div>

      {/* Responsive Tailwind CSS Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {CULTURE_MASONRY_IMAGES.map((img) => (
          <div
            key={img.src}
            className="break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-muted/20"
          >
            <div className={`relative w-full ${img.aspectClass}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

