import React from "react";
import AcademyBanner from "./Banner";
import AcademyCourses from "./Courses";
import AcademyCta from "./Cta";

export default function AcademySections() {
  return (
    <div className="space-y-16 pb-20">
      <AcademyBanner />
      <AcademyCourses />
      <AcademyCta />
    </div>
  );
}
