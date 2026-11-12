// src/constants/navigation.ts
import type { FooterSection, NavLinkItem } from "@src/types/navigation";

export const NAV_LINKS: NavLinkItem[] = [
  {
    href: "/platform/fleet-dashboard",
    labelKey: "common.nav.platform",
    defaultLabel: "Platform",
    isMegaMenu: true,
    subItems: [
      {
        href: "/platform/fleet-dashboard",
        labelKey: "common.nav.platformMega.fleetDashboard.title",
        defaultLabel: "Fleet Dashboard",
        descriptionKey: "common.nav.platformMega.fleetDashboard.desc",
        defaultDescription: "Real-time fleet overview, live vehicle telemetry, revenue stats, and trip analytics.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/fleet-management",
        labelKey: "common.nav.platformMega.fleetManagement.title",
        defaultLabel: "Fleet & Geo-Fencing",
        descriptionKey: "common.nav.platformMega.fleetManagement.desc",
        defaultDescription: "Manage fleets, service areas, no-go zones, low-speed zones, parking zones & hours.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/vehicle-management",
        labelKey: "common.nav.platformMega.vehicleManagement.title",
        defaultLabel: "Vehicle Management",
        descriptionKey: "common.nav.platformMega.vehicleManagement.desc",
        defaultDescription: "Onboard vehicles, inspect trip history, monitor battery health & send remote commands.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/riders-management",
        labelKey: "common.nav.platformMega.ridersManagement.title",
        defaultLabel: "Riders & Rides",
        descriptionKey: "common.nav.platformMega.ridersManagement.desc",
        defaultDescription: "Manage rider accounts, track active rides, and audit ride & wallet transactions.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/pricing-revenue",
        labelKey: "common.nav.platformMega.pricingRevenue.title",
        defaultLabel: "Revenue & Pricing Plans",
        descriptionKey: "common.nav.platformMega.pricingRevenue.desc",
        defaultDescription: "Configure unlock fees, per-minute tariffs, fleet pricing plans, and revenue stats.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/passes-subscriptions",
        labelKey: "common.nav.platformMega.passesSubscriptions.title",
        defaultLabel: "Passes & Subscriptions",
        descriptionKey: "common.nav.platformMega.passesSubscriptions.desc",
        defaultDescription: "Create custom ride passes, manage XtraCool plans, and track recurring subscriptions.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/commands",
        labelKey: "common.nav.platformMega.commands.title",
        defaultLabel: "IoT & Commands",
        descriptionKey: "common.nav.platformMega.commands.desc",
        defaultDescription: "Create and dispatch remote IoT commands, lock/unlock vehicles, and audit history.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/promos",
        labelKey: "common.nav.platformMega.promos.title",
        defaultLabel: "Promos & Marketing",
        descriptionKey: "common.nav.platformMega.promos.desc",
        defaultDescription: "Launch promo codes, target riders by activity, and monitor campaign performance.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/organisation-management",
        labelKey: "common.nav.platformMega.organisationManagement.title",
        defaultLabel: "Organisation & Access",
        descriptionKey: "common.nav.platformMega.organisationManagement.desc",
        defaultDescription: "Assign team roles, manage capability permissions, and control multi-admin access.",
        megaMenuSection: "core",
      },
      {
        href: "/platform/maps",
        labelKey: "common.nav.platformMega.maps.title",
        defaultLabel: "Live Maps & Zones",
        descriptionKey: "common.nav.platformMega.maps.desc",
        defaultDescription: "Interactive fleet map with geofence polygons, zone statuses, and live vehicle pins.",
        megaMenuSection: "more",
      },
      {
        href: "/platform/tickets-support",
        labelKey: "common.nav.platformMega.ticketsSupport.title",
        defaultLabel: "Tickets & Support",
        descriptionKey: "common.nav.platformMega.ticketsSupport.desc",
        defaultDescription: "Resolve rider support tickets, live chats, and mobile app settings in one place.",
        megaMenuSection: "more",
      },
    ],
  },
  {
    href: "/solutions",
    labelKey: "common.nav.solutions",
    defaultLabel: "Trekk Solutions",
  },
  {
    href: "/industries/vehicle-sharing",
    labelKey: "common.nav.industries",
    defaultLabel: "Products",
    isMegaMenu: true,
    megaMenuVariant: "products",
    subItems: [
      {
        href: "/industries/vehicle-sharing",
        labelKey: "common.nav.industriesMega.vehicleSharing.title",
        defaultLabel: "Vehicle sharing software",
        descriptionKey: "common.nav.industriesMega.vehicleSharing.desc",
        defaultDescription:
          "All the technology you need to launch your own scooter, bike, moped and car sharing fleet.",
        image: "/images/mob-1.png",
        bgImage: "/images/bg-1.png",
        hasRightArrow: true,
      },
      {
        href: "/industries/digital-rental",
        labelKey: "common.nav.industriesMega.digitalRental.title",
        defaultLabel: "Digital rental software",
        descriptionKey: "common.nav.industriesMega.digitalRental.desc",
        defaultDescription:
          "Automate your rental business — from ID verification and digital onboarding to keyless access.",
        image: "/images/mob-2.png",
        bgImage: "/images/bg-2.png",
        hasRightArrow: true,
      },
      {
        href: "/industries/ride-hailing",
        labelKey: "common.nav.industriesMega.rideHailing.title",
        defaultLabel: "Ride-hailing software",
        descriptionKey: "common.nav.industriesMega.rideHailing.desc",
        defaultDescription:
          "Ready-to-go tech solution for ride-hailing and taxi businesses. Cars, vans, tricycles and more.",
        image: "/images/mob-3.png",
        bgImage: "/images/bg-3.png",
        hasRightArrow: true,
      },
    ],
  },
  {
    href: "/academy",
    labelKey: "common.nav.learn",
    defaultLabel: "Learn",
    isMegaMenu: true,
    megaTitleKey: "common.nav.megaLearnTitle",
    defaultMegaTitle: "Learn & Tools",
    subItems: [
      {
        href: "/academy#blog",
        labelKey: "common.nav.learnSub.blog",
        defaultLabel: "Blog",
        descriptionKey: "common.nav.learnMega.blog.desc",
        defaultDescription:
          "Industry playbooks, launch stories, and shared mobility insights across Africa.",
        megaMenuSection: "core",
      },
      {
        href: "/academy#resources",
        labelKey: "common.nav.learnSub.resources",
        defaultLabel: "Resources",
        descriptionKey: "common.nav.learnMega.resources.desc",
        defaultDescription:
          "Deployment guides, hardware specs, and operator checklists to launch faster.",
        megaMenuSection: "core",
      },
      {
        href: "/calculator",
        labelKey: "common.nav.calculator",
        defaultLabel: "Calculator",
        descriptionKey: "common.nav.learnMega.calculator.desc",
        defaultDescription:
          "Model your fleet budget, unit economics, monthly platform fees, and payback period.",
        megaMenuSection: "core",
      },
    ],
  },
  {
    href: "/pricing",
    labelKey: "common.nav.pricing",
    defaultLabel: "Pricing",
  },
  {
    href: "/about",
    labelKey: "common.nav.company",
    defaultLabel: "Company",
    isMegaMenu: true,
    megaTitleKey: "common.nav.megaCompanyTitle",
    defaultMegaTitle: "About Trekk",
    subItems: [
      {
        href: "/about",
        labelKey: "common.nav.companySub.aboutUs",
        defaultLabel: "About Us",
        descriptionKey: "common.nav.companyMega.aboutUs.desc",
        defaultDescription:
          "Our mission to power sustainable, connected urban mobility across emerging markets.",
        megaMenuSection: "core",
      },
      {
        href: "/solutions#vehicles",
        labelKey: "common.nav.companySub.vehicleShop",
        defaultLabel: "Vehicle Shop",
        descriptionKey: "common.nav.companyMega.vehicleShop.desc",
        defaultDescription:
          "Explore IoT-compatible scooters, e-bikes, mopeds, cargo bikes, and electric fleets.",
        megaMenuSection: "core",
      },
      {
        href: "/academy",
        labelKey: "common.nav.academy",
        defaultLabel: "Trekk Academy",
        descriptionKey: "common.nav.companyMega.academy.desc",
        defaultDescription:
          "Operator training, fleet launch playbooks, and technical onboarding guides.",
        megaMenuSection: "core",
      },
      {
        href: "/contact",
        labelKey: "common.nav.contact",
        defaultLabel: "Contact",
        descriptionKey: "common.nav.companyMega.contact.desc",
        defaultDescription:
          "Book a live platform demo or speak directly with our solutions architects.",
        megaMenuSection: "core",
      },
    ],
  },
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
      { href: "/solutions#rider-app", labelKey: "common.footer.riderApp", defaultLabel: "Rider App" },
      { href: "/platform/fleet-dashboard", labelKey: "common.footer.operatorDashboard", defaultLabel: "Operator Dashboard" },
      { href: "/platform/fleet-management", labelKey: "common.footer.fleetManagement", defaultLabel: "Fleet Management" },
      { href: "/solutions#payments", labelKey: "common.footer.payments", defaultLabel: "Payments" },
      { href: "/solutions#telematics", labelKey: "common.footer.iotTelematics", defaultLabel: "IoT & Telematics" },
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
