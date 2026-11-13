import React from "react";
import AcademyBanner from "./Banner";
import AcademyCourses from "./Courses";
import AcademyCta from "./Cta";

export default function AcademySections() {
  return (
    <div className="space-y-20 py-16">
      <AcademyBanner />
      <AcademyCourses />
      <AcademyCta />
    </div>
  );
}

