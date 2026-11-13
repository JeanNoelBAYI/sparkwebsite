import React from "react";
import AboutBanner from "./Banner";
import PeopleAndCulture from "./PeopleAndCulture";
import MissionVision from "./MissionVision";
import TeamSection from "./Team";

export default function AboutSections() {
  return (
    <div className="space-y-20 pb-20">
      <AboutBanner />
      <PeopleAndCulture />
      <MissionVision />
      <TeamSection />
    </div>
  );
}

