"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, AlertCircle, HelpCircle } from "lucide-react";
import Button from "@src/components/ui/button";

export default function ScooteasySupportPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-12">
      <Link
        href="/scooteasy"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Scooteasy</span>
      </Link>

      <div className="space-y-3">
        <span className="eyebrow">Rider Assistance</span>
        <h1 className="text-3xl font-bold font-display sm:text-5xl text-foreground">
          Scooteasy Rider Support
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Need help unlocking a scooter, resolving a wallet billing dispute, or reporting a maintenance fault on the ABUAD campus? Our campus dispatch team is ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-3">
          <div className="size-10 rounded-xl bg-[#12D18E]/10 flex items-center justify-center text-[#12D18E]">
            <MessageCircle className="size-5" />
          </div>
          <h3 className="font-display text-lg font-bold">In-App Chat Support</h3>
          <p className="text-xs text-muted-foreground">
            For fastest response while on campus, open your Scooteasy rider app, navigate to <strong>Menu &gt; Help & Support</strong>, and tap Start Chat.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-[#0E1522] space-y-3">
          <div className="size-10 rounded-xl bg-[#2E6BFF]/10 flex items-center justify-center text-[#2E6BFF]">
            <Mail className="size-5" />
          </div>
          <h3 className="font-display text-lg font-bold">Email Support</h3>
          <p className="text-xs text-muted-foreground">
            Reach out via email at <a href="mailto:support@trekkmobility.com" className="text-[#2E6BFF] font-semibold underline">support@trekkmobility.com</a> with your registered phone number.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-muted/40 p-8 space-y-4">
        <div className="flex items-center gap-2 text-foreground font-display font-bold text-base">
          <AlertCircle className="size-5 text-[#FFB020]" />
          <span>Campus Safety &amp; Emergency</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          In case of any traffic incident or vehicle malfunction involving an electric scooter on the Afe Babalola University grounds, immediately notify campus security and Scooteasy dispatch via the emergency button in the mobile app.
        </p>
      </div>
    </div>
  );
}

