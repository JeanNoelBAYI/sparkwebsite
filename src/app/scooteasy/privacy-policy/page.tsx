"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ScooteasyPrivacyPolicyPage() {
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
          Scooteasy Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground">Last updated: 31 August 2026</p>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-foreground/90 text-sm leading-relaxed">
        <p>
          Scooteasy is a Trekk Mobility partner providing electric scooter services for Afe Babalola University in Nigeria. This Privacy Policy explains how Scooteasy collects, uses, stores, shares, and protects information relating to riders, website visitors, support contacts, and users of the Scooteasy mobile experience.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">1. Services Covered by This Policy</h3>
        <p>
          This policy applies to Scooteasy websites and pages, Scooteasy mobile app features, electric scooters and connected vehicle hardware, payments, customer support, account management, promotions, surveys, and other interactions linked to Scooteasy services.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">2. Information We Collect</h3>
        <p>
          We may collect information you provide directly, including your name, email address, phone number, account login details, profile information, payment details, billing information, communications preferences, support messages, ride history, and any other information you submit through the app, website, forms, or customer support channels.
        </p>
        <p>
          We may also collect information about your device and use of the service, including browser type, device identifiers, app activity, log information, crash data, dates and times of access, IP address, and approximate location.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">3. App Permissions and Location Data</h3>
        <p>
          The Scooteasy service requests camera access to scan vehicle QR codes, and location access to discover nearby scooters, enforce campus geofences, and provide live route summaries.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">4. Vehicle and Ride Data</h3>
        <p>
          Scooteasy scooters include IoT telematics devices that transmit real-time telemetry (GPS position, battery state, speed, accelerometer readings, and fault diagnostics) to ensure campus safety and fleet availability.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">5. Payments</h3>
        <p>
          Payments are handled via secure payment processors (Flutterwave, Paystack). Scooteasy does not store raw credit card numbers.
        </p>

        <h3 className="text-base font-bold font-display text-foreground">6. Contact</h3>
        <p>
          For privacy questions or data requests, contact <a href="mailto:praiseodeigah@yahoo.com" className="text-[#12D18E] font-medium underline">praiseodeigah@yahoo.com</a>.
        </p>
      </div>
    </div>
  );
}

