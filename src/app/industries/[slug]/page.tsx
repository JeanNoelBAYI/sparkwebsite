"use client";

import { notFound, useParams } from "next/navigation";
import ProductSections from "@src/components/Sections/Products";
import { INDUSTRY_PAGES } from "@src/constants/industryPages";

export default function IndustryProductPage() {
  const params = useParams<{ slug: string }>();
  const pageData = params?.slug ? INDUSTRY_PAGES[params.slug] : undefined;

  if (!pageData) {
    notFound();
  }

  return <ProductSections pageData={pageData} />;
}
