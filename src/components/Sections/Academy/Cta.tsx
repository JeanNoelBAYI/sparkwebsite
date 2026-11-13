import React from "react";
import Link from "next/link";
import Button from "@src/components/ui/button";

export default function AcademyCta() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          Custom On-Site Training Available
        </h2>
        <p className="text-base text-muted-foreground">
          Deploying a large campus or commercial fleet? We dispatch Trekk technical
          instructors to train your mechanics and depot managers on-site prior to your
          official launch.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold"
          >
            Request Team Training Details
          </Button>
        </Link>
      </div>
    </section>
  );
}

