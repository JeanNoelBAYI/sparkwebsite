"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, Trash2, Shield, FileText } from "lucide-react";
import Button from "@src/components/ui/button";

export default function ScooteasyPage() {
  return (
    <div className="space-y-20 py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1220] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-[#12D18E]/20 blur-[130px]" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12D18E] backdrop-blur">
              Trekk Mobility Partner
            </span>

            <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-white">
              Scooteasy &times; ABUAD
            </h1>

            <p className="text-base text-[#8A98A0] sm:text-lg leading-relaxed">
              Electric scooter service for students, faculty, staff, and visitors moving around Afe Babalola University (ABUAD) in Ado-Ekiti, Nigeria &mdash; powered by the Trekk Mobility platform.
            </p>

            <div className="pt-2">
              <Link href="/scooteasy/support">
                <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                  <span>Get Rider Support</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Scooteasy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Campus Micromobility</span>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Easy, Affordable Scooter Access for ABUAD
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Scooteasy is one of Trekk Mobility&apos;s flagship operating partners. The service enables thousands of university community members to move seamlessly across campus hostels, lecture theatres, and sports centers without carbon emissions.
          </p>
        </div>
      </section>

      {/* Partner Resource Links */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/scooteasy/support"
            className="rounded-3xl border border-border bg-white p-6 shadow-sm hover:border-[#12D18E] transition dark:bg-[#0E1522] space-y-3"
          >
            <div className="size-10 rounded-xl bg-[#12D18E]/10 flex items-center justify-center text-[#12D18E]">
              <HelpCircle className="size-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Rider Support
            </h3>
            <p className="text-xs text-muted-foreground">
              Get help with ride unlocking, payment wallets, or reported scooter issues.
            </p>
          </Link>

          <Link
            href="/scooteasy/delete-account"
            className="rounded-3xl border border-border bg-white p-6 shadow-sm hover:border-red-400 transition dark:bg-[#0E1522] space-y-3"
          >
            <div className="size-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-950/40">
              <Trash2 className="size-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Delete Account
            </h3>
            <p className="text-xs text-muted-foreground">
              Submit a formal request to purge your rider profile and personal data.
            </p>
          </Link>

          <Link
            href="/scooteasy/privacy-policy"
            className="rounded-3xl border border-border bg-white p-6 shadow-sm hover:border-[#2E6BFF] transition dark:bg-[#0E1522] space-y-3"
          >
            <div className="size-10 rounded-xl bg-[#2E6BFF]/10 flex items-center justify-center text-[#2E6BFF]">
              <Shield className="size-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Privacy Policy
            </h3>
            <p className="text-xs text-muted-foreground">
              Review how GPS coordinates, phone numbers, and payment records are protected.
            </p>
          </Link>

          <Link
            href="/scooteasy/terms-and-conditions"
            className="rounded-3xl border border-border bg-white p-6 shadow-sm hover:border-[#FFB020] transition dark:bg-[#0E1522] space-y-3"
          >
            <div className="size-10 rounded-xl bg-[#FFB020]/10 flex items-center justify-center text-[#FFB020]">
              <FileText className="size-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Terms & Conditions
            </h3>
            <p className="text-xs text-muted-foreground">
              Rider eligibility rules, helmet advisories, liability, and parking guidelines.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

