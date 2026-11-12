"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Shield, HeartHandshake, Zap, Users, Rocket } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">{t("about.eyebrow", "About Trekk")}</span>
          <h1 className="text-4xl font-extrabold font-display tracking-tight sm:text-6xl text-foreground">
            {t(
              "about.h1",
              "We Believe Africa Deserves Better Mobility Technology."
            )}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed pt-2">
            {t(
              "about.heroLede",
              "Africa’s cities are growing rapidly. People need affordable, reliable and sustainable ways to move. Businesses need better tools to provide that mobility. Trekk exists to bridge that gap — we provide the technology that allows entrepreneurs, companies, institutions and governments to launch and operate modern mobility services without having to build complex technology infrastructure themselves."
            )}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm dark:bg-[#0E1522] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
              Our Mission
            </span>
            <h3 className="font-display text-2xl font-bold">
              {t("about.missionTitle", "Our Mission")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "about.missionText",
                "To accelerate the transition to smarter, more accessible and sustainable mobility across Africa."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm dark:bg-[#0E1522] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
              Our Vision
            </span>
            <h3 className="font-display text-2xl font-bold">
              {t("about.visionTitle", "Our Vision")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "about.visionText",
                "A connected mobility ecosystem where every African city can access technology to move people and goods more efficiently."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="bg-[#F0FBF5]/60 border-y border-border py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="eyebrow">{t("about.diff.eyebrow", "Our Difference")}</span>
            <h2 className="text-3xl font-bold font-display sm:text-5xl text-foreground">
              {t("about.diff.h2", "Global Technology. African Intelligence.")}
            </h2>
            <p className="text-base text-muted-foreground">
              {t("about.diff.lede", "We combine modern mobility technology with an understanding of African markets.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: t("about.diff.card1Title", "Built for African Conditions"),
                desc: t("about.diff.card1Desc", "Not adapted later. Designed with Africa in mind."),
              },
              {
                icon: Shield,
                title: t("about.diff.card2Title", "Affordable"),
                desc: t("about.diff.card2Desc", "Enterprise-grade technology without enterprise-level barriers to entry."),
              },
              {
                icon: Globe,
                title: t("about.diff.card3Title", "Flexible"),
                desc: t("about.diff.card3Desc", "Your business model determines how the platform works."),
              },
              {
                icon: HeartHandshake,
                title: t("about.diff.card4Title", "Local"),
                desc: t("about.diff.card4Desc", "Local payments. Local currencies. Local support."),
              },
              {
                icon: Rocket,
                title: t("about.diff.card5Title", "Scalable"),
                desc: t("about.diff.card5Desc", "From one vehicle to thousands. From one community to multiple countries."),
              },
              {
                icon: Users,
                title: t("about.diff.card6Title", "Human"),
                desc: t("about.diff.card6Desc", "When your fleet is on the road at 2 AM, you need people who answer. That’s why Trekk provides 24/7 support."),
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-[#0E1522] space-y-3"
                >
                  <div className="size-10 rounded-xl bg-[#12D18E]/10 flex items-center justify-center text-[#12D18E]">
                    <IconComp className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Be Part of the Transition
          </h2>
          <p className="text-base text-muted-foreground">
            Whether you want to launch a campus scooter network, an electric delivery fleet, or a corporate carpool, Trekk Mobility is your technology partner.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                <span>Book a Demo</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/partners">
              <Button variant="outline" size="lg">
                <span>Partner With Us</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

