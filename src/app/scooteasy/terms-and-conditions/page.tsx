"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ScooteasyTermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-8">
      <Link
        href="/scooteasy"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Scooteasy</span>
      </Link>

      <div className="space-y-2 border-b border-border pb-6">
        <span className="eyebrow">Legal & Compliance</span>
        <h1 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          Scooteasy Terms and Conditions
        </h1>
        <p className="text-xs text-muted-foreground">Last updated: 31 August 2026</p>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-foreground/90 text-sm leading-relaxed">
        <p>
          These Terms and Conditions govern your use of Scooteasy electric scooters, mobile app features, websites, payments, support channels, and related services. Scooteasy is a Trekk Mobility partner providing electric scooter access for Afe Babalola University in Nigeria.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">1. Acceptance of Terms</h3>
        <p>
          By creating an account, unlocking a scooter, or submitting a payment, you agree to these Terms and Conditions and the Scooteasy Privacy Policy.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">2. Rider Eligibility</h3>
        <p>
          You must be legally able to enter into this agreement and physically capable of riding an electric scooter safely. Riders must be at least 18 years old or university students holding valid campus registration.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">3. Safe Riding Rules</h3>
        <p>
          Riders must inspect the vehicle before unlocking, obey campus speed throttles (max 15 km/h in shared pedestrian areas), yield to pedestrians, park exclusively in designated virtual parking corrals, and never carry passengers.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">4. Geofencing &amp; Parking Violations</h3>
        <p>
          Riding outside the geofenced campus boundaries of Afe Babalola University will trigger vehicle motor deceleration and alarm alerts. Abandoning vehicles outside approved zones will incur recovery surcharges.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">5. Contact</h3>
        <p>
          For queries concerning these terms, contact <a href="mailto:praiseodeigah@yahoo.com" className="text-[#12D18E] font-medium underline">praiseodeigah@yahoo.com</a>.
        </p>
      </div>
    </div>
  );
}

