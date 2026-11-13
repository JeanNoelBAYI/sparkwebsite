import React from "react";
import FaqBanner from "./Banner";
import FaqAccordion from "./FaqAccordion";

export default function FaqSections() {
  return (
    <div className="space-y-16 pb-20">
      <FaqBanner />
      <FaqAccordion />
    </div>
  );
}

