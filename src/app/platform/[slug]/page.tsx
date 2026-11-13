"use client";

import { notFound, useParams } from "next/navigation";
import PlatformSections from "@src/components/Sections/Platform";
import { PLATFORM_PAGES } from "@src/constants/platformPages";

export default function PlatformModulePage() {
  const params = useParams<{ slug: string }>();
  const pageData = params?.slug ? PLATFORM_PAGES[params.slug] : undefined;

  if (!pageData) {
    notFound();
  }

  return <PlatformSections pageData={pageData} />;
}
