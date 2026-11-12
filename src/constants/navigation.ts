// src/constants/navigation.ts
import type { FooterSection, NavLinkItem } from "@src/types/navigation";

export const NAV_LINKS: NavLinkItem[] = [
  { href: "/", labelKey: "common.nav.home", defaultLabel: "Home" },
  { href: "/services", labelKey: "common.nav.platform", defaultLabel: "Platform" },
  { href: "/solutions", labelKey: "common.nav.solutions", defaultLabel: "Solutions" },
  { href: "/pricing", labelKey: "common.nav.pricing", defaultLabel: "Pricing" },
  { href: "/calculator", labelKey: "common.nav.calculator", defaultLabel: "Calculator" },
  { href: "/academy", labelKey: "common.nav.academy", defaultLabel: "Trekk Academy" },
  { href: "/contact", labelKey: "common.nav.contact", defaultLabel: "Contact" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    titleKey: "common.footer.companyHeading",
    defaultTitle: "Company",
    links: [
      { href: "/about", labelKey: "common.footer.aboutTrekk", defaultLabel: "About Trekk" },
      { href: "/partners", labelKey: "common.footer.partners", defaultLabel: "Partners" },
      { href: "/launch", labelKey: "common.footer.launch", defaultLabel: "Launch Event" },
      { href: "/scooteasy", labelKey: "common.footer.scooteasy", defaultLabel: "ScootEasy" },
    ],
  },
  {
    titleKey: "common.footer.solutionsHeading",
    defaultTitle: "Solutions",
    links: [
      { href: "/solutions#scooters", labelKey: "common.footer.scooterSharing", defaultLabel: "Scooter Sharing" },
      { href: "/solutions#ebikes", labelKey: "common.footer.ebikeSharing", defaultLabel: "E-Bike Sharing" },
      { href: "/solutions#mopeds", labelKey: "common.footer.mopedSharing", defaultLabel: "Moped Sharing" },
      { href: "/solutions#motorcycles", labelKey: "common.footer.motorcycleSharing", defaultLabel: "Motorcycle Sharing" },
      { href: "/solutions#cars", labelKey: "common.footer.carSharing", defaultLabel: "Car Sharing" },
    ],
  },
  {
    titleKey: "common.footer.platformHeading",
    defaultTitle: "Platform",
    links: [
      { href: "/services#rider-app", labelKey: "common.footer.riderApp", defaultLabel: "Rider App" },
      { href: "/services#dashboard", labelKey: "common.footer.operatorDashboard", defaultLabel: "Operator Dashboard" },
      { href: "/services#fleet", labelKey: "common.footer.fleetManagement", defaultLabel: "Fleet Management" },
      { href: "/services#payments", labelKey: "common.footer.payments", defaultLabel: "Payments" },
      { href: "/services#telematics", labelKey: "common.footer.iotTelematics", defaultLabel: "IoT & Telematics" },
    ],
  },
  {
    titleKey: "common.footer.supportHeading",
    defaultTitle: "Support",
    links: [
      { href: "/contact", labelKey: "common.footer.support247", defaultLabel: "24/7 Customer Support" },
      { href: "/academy", labelKey: "common.footer.helpCentre", defaultLabel: "Trekk Academy" },
      { href: "/contact", labelKey: "common.footer.partnerSupport", defaultLabel: "Partner Support" },
      { href: "/contact", labelKey: "common.footer.technicalSupport", defaultLabel: "Technical Support" },
    ],
  },
];

