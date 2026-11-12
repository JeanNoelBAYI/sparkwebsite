"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Handshake, Users, Shield, Cpu, Landmark, Building } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";

export default function PartnersPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">{t("partners.eyebrow", "Partner Program")}</span>
          <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-foreground">
            {t("partners.h1", "Build With Trekk")}
          </h1>
          <p className="text-lg text-muted-foreground pt-2">
            {t(
              "partners.heroLede",
              "Trekk is not just software. We are building the entire African urban mobility ecosystem together with operators, hardware makers, and capital partners."
            )}
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                <span>{t("partners.becomePartner", "Become a Trekk Partner")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Tracks */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: t("partners.card1Title", "Mobility Operators"),
              desc: t(
                "partners.card1Desc",
                "Launch your own branded mobility service. Get white-label apps, operator dashboards, and direct onboarding support."
              ),
            },
            {
              icon: Building,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: t("partners.card2Title", "Fleet Partners"),
              desc: t(
                "partners.card2Desc",
                "Connect your existing vehicles to the Trekk ecosystem. Monetize idle assets through our digital rental engine."
              ),
            },
            {
              icon: Shield,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: "Payment & FinTech Partners",
              desc: "Integrate your digital wallet, mobile money channel, or micro-insurance products directly into rider checkouts across multiple nations.",
            },
            {
              icon: Cpu,
              color: "text-[#12D18E]",
              bg: "bg-[#12D18E]/10",
              title: "IoT & Hardware Manufacturers",
              desc: "Become a certified Trekk Telematics Hardware partner. Get your vehicle models pre-integrated into our firmware compatibility suite.",
            },
            {
              icon: Landmark,
              color: "text-[#2E6BFF]",
              bg: "bg-[#2E6BFF]/10",
              title: "Municipalities & Universities",
              desc: "Implement sustainable, zero-emission transportation frameworks with real-time micromobility data feeds and geofenced safety controls.",
            },
            {
              icon: Handshake,
              color: "text-[#FFB020]",
              bg: "bg-[#FFB020]/10",
              title: "Capital & Asset Financing",
              desc: "Provide asset-backed debt and equity financing for local African operators acquiring certified electric vehicles.",
            },
          ].map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] space-y-4 hover:border-foreground/30 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`size-11 rounded-2xl ${partner.bg} flex items-center justify-center ${partner.color}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {partner.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="text-xs font-bold text-[#12D18E] hover:underline inline-flex items-center gap-1">
                    <span>Explore partnership</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
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
    </div>
  );
}

