import React from "react";
import PartnersHero from "./Hero";
import PartnersTracks from "./Tracks";
import PartnersCta from "./Cta";

export default function PartnersSections() {
  return (
    <div className="space-y-20 py-16">
      <PartnersHero />
      <PartnersTracks />
      <PartnersCta />
    </div>
  );
}

