import React from "react";
import HomeHero from "./Hero";
import HomeTrustedShowcase from "./TrustedShowcase";
import HomeOperatingInfrastructure from "./OperatingInfrastructure";
import HomeHowToRide from "./HowToRide";
import HomeProductShowcase from "./ProductShowcase";
import HomeLaunchBanner from "./LaunchBanner";

export default function HomeSections() {
  return (
    <div className="space-y-0 pb-20">
      <HomeHero />
      <HomeTrustedShowcase />
      <HomeOperatingInfrastructure />
      <HomeHowToRide />
      <HomeProductShowcase />
      <HomeLaunchBanner />
    </div>
  );
}

