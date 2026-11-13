"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";
import type { PlatformPageData } from "@src/constants/platformPages";

export default function PlatformWorkflow({
  pageData,
}: {
  pageData: PlatformPageData;
}) {
  const { t } = useTranslation();

  return (
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
  );
}

