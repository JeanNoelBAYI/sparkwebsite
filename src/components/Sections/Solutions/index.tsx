import React from "react";
import SolutionsBanner from "./Banner";
import OperatingModels from "./OperatingModels";
import HardwareCompatibility from "./HardwareCompatibility";
import PlatformComponents from "./PlatformComponents";
import SolutionsCta from "./Cta";

export default function SolutionsSections() {
  return (
    <div className="space-y-20 pb-20">
      <SolutionsBanner />
      <OperatingModels />
      <HardwareCompatibility />
      <PlatformComponents />
      <SolutionsCta />
    </div>
  );
}

