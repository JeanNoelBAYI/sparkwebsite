"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import Button from "@src/components/ui/button";
import { useTranslation } from "@src/hooks/useTranslation";

type TeamMember = {
  name: string;
  roleKey: string;
  defaultRole: string;
  image: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    x?: string;
  };
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Isaac Oyedokun",
    roleKey: "about.team.role.ceo",
    defaultRole: "Chief Executive Officer",
    image: "/images/team-issac.png",
    socials: {
      linkedin: "https://www.linkedin.com/feed",
      instagram: "https://www.instagram.com/donolly90/",
      x: "https://twitter.com/Musk_of_Africa",
    },
  },
  {
    name: "Esther Ehindero",
    roleKey: "about.team.role.coo",
    defaultRole: "Chief Operations Officer",
    image: "/images/team-Esther.avif",
    socials: {
      linkedin: "https://www.linkedin.com/in/esther-ehindero-pmp-82992795",
      instagram: "https://www.instagram.com/ehinderoesther",
      x: "https://twitter.com/Haanuhooluwaa",
    },
  },
  {
    name: "Praise Sakanwi",
    roleKey: "about.team.role.cto",
    defaultRole: "Chief Technology Officer",
    image: "/images/team-praise.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/praise-sakanwi-40483476",
      instagram: "https://www.instagram.com/praise_sakanwi",
      x: "https://twitter.com/1Console1",
    },
  },
  {
    name: "Jean-Noël Bayi",
    roleKey: "about.team.role.leadership",
    defaultRole: "Leadership Team",
    image: "/images/team-jean.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/jean-noel-bayi-990081aa",
      instagram: "https://www.instagram.com/jeannoelbayi",
    },
  },
];

function XSocialIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="eyebrow">{t("about.team.eyebrow", "Leadership")}</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("about.team.title", "Our team")}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t(
            "about.team.desc",
            "Collaboration is at the heart of everything we do. We believe that by working together, we can achieve more and drive meaningful change within our organization and beyond. Our team members come from diverse backgrounds and disciplines, bringing unique skills, experiences, and ideas to the table."
          )}
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-[#12D18E]/40 hover:shadow-md dark:bg-[#0E1522]"
          >
            <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-muted/30">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#12D18E]">
                  {t(member.roleKey, member.defaultRole)}
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-[#12D18E]/40 hover:bg-[#12D18E]/10 hover:text-[#12D18E]"
                  >
                    <Linkedin className="size-4" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-[#12D18E]/40 hover:bg-[#12D18E]/10 hover:text-[#12D18E]"
                  >
                    <Instagram className="size-4" />
                  </a>
                )}
                {member.socials.x && (
                  <a
                    href={member.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on X`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-[#12D18E]/40 hover:bg-[#12D18E]/10 hover:text-[#12D18E]"
                  >
                    <XSocialIcon className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-[#0B1813] px-6 py-12 sm:px-12 sm:py-14 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-2.5">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            {t("about.cta.title", "Be Part of the Transition")}
          </h3>
          <p className="text-sm sm:text-base text-[#D3E4DC] leading-relaxed">
            {t(
              "about.cta.desc",
              "Whether you want to launch a campus scooter network, an electric delivery fleet, or a corporate carpool, Trekk Mobility is your technology partner."
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7"
            >
              <span>{t("platform.common.bookDemo", "Book Demo")}</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

