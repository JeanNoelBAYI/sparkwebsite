import React from "react";
import LaunchHero from "./Hero";
import LaunchRegistrationForm from "./RegistrationForm";

export default function LaunchSections() {
  return (
    <div className="space-y-24 py-16">
      <LaunchHero />
      <LaunchRegistrationForm />
    </div>
  );
}

