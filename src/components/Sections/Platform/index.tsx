"use client";

import React from "react";
import PhonesHeroBanner from "@src/components/PhonesHeroBanner";
import { useTranslation } from "@src/hooks/useTranslation";
import type { PlatformPageData } from "@src/constants/platformPages";
import PlatformCapabilities from "./Capabilities";
import PlatformWorkflow from "./Workflow";
import PlatformCta from "./Cta";

export default function PlatformSections({
  pageData,
}: {
  pageData: PlatformPageData;
}) {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 pb-20">
      <PhonesHeroBanner
        badge={t(pageData.badgeKey, pageData.defaultBadge)}
        title={t(pageData.titleKey, pageData.defaultTitle)}
        description={t(pageData.descKey, pageData.defaultDesc)}
        ctaLabel={
          pageData.ctaHref
            ? t(pageData.ctaKey, pageData.defaultCta)
            : t("platform.common.bookDemo", "Book Demo")
        }
        ctaHref={pageData.ctaHref ?? "/contact"}
        images={pageData.bannerImages}
      />
      <PlatformCapabilities pageData={pageData} />
      <PlatformWorkflow pageData={pageData} />
      <PlatformCta />
    </div>
  );
}

