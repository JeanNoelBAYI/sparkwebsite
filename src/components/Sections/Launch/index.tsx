import React from "react";
import LaunchHero from "./Hero";
import LaunchRevealAndTracks from "./RevealAndTracks";
import LaunchProgrammeAndStory from "./ProgrammeAndStory";
import LaunchRegistrationForm from "./RegistrationForm";
import LaunchFaq from "./LaunchFaq";

export default function LaunchSections() {
  return (
    <div className="space-y-20 pb-20">
      <LaunchHero />
      <LaunchRevealAndTracks />
      <LaunchProgrammeAndStory />
      <LaunchRegistrationForm />
      <LaunchFaq />
    </div>
  );
}
