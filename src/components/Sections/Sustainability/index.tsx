import React from "react";
import SustainabilityBanner from "./Banner";
import EcoTransportation from "./EcoTransportation";
import GreenTech from "./GreenTech";
import BatteryLifecycle from "./BatteryLifecycle";
import CommunityEngagement from "./CommunityEngagement";
import EnvironmentalConservation from "./EnvironmentalConservation";
import SustainabilityJoinUs from "./JoinUs";

export default function SustainabilitySections() {
  return (
    <div className="space-y-6 pb-20">
      <SustainabilityBanner />
      <EcoTransportation />
      <GreenTech />
      <BatteryLifecycle />
      <CommunityEngagement />
      <EnvironmentalConservation />
      <SustainabilityJoinUs />
    </div>
  );
}

