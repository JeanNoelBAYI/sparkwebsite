import React from "react";
import SafetyBanner from "./Banner";
import SafetyGettingStarted from "./GettingStarted";
import SafetyGuidelines from "./SafetyGuidelines";
import SafetyGallery from "./SafetyGallery";

export default function SafetySections() {
  return (
    <div className="space-y-20 pb-20">
      <SafetyBanner />
      <SafetyGettingStarted />
      <SafetyGuidelines />
      <SafetyGallery />
    </div>
  );
}

