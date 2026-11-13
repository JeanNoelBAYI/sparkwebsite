import React from "react";
import Link from "next/link";
import Button from "@src/components/ui/button";

export default function PartnersCta() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          Let&apos;s Build Together
        </h2>
        <p className="text-base text-muted-foreground">
          Have a proposal or want to explore an institutional partnership? Our executive partnerships team wants to hear from you.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold">
            Contact Partnerships Team
          </Button>
        </Link>
      </div>
    </section>
  );
}

