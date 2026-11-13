import React from "react";
import CommunityBanner from "./Banner";
import CommunityCampuses from "./Campuses";
import CommunityReviews from "./Reviews";
import CommunityGallery from "./Gallery";

export default function CommunitySections() {
  return (
    <div className="space-y-20 pb-20">
      <CommunityBanner />
      <CommunityCampuses />
      <CommunityReviews />
      <CommunityGallery />
    </div>
  );
}

