// src/constants/showcase.ts
import type { ShowcaseScreen } from "@src/types/showcase";

export const DASHBOARD_SCREENS: ShowcaseScreen[] = [
  {
    image: "/assets/dashboard/analytics.png",
    alt: "Trekk Mobility dashboard overview — rides, riders, vehicles, and revenue",
  },
  {
    image: "/assets/dashboard/map.png",
    alt: "Trekk Mobility live fleet map with real-time vehicle locations",
  },
  {
    image: "/assets/dashboard/fleet-management.png",
    alt: "Trekk Mobility geofencing and service area management",
  },
  {
    image: "/assets/dashboard/vehicle-command.png",
    alt: "Trekk Mobility executed vehicle commands log",
  },
  {
    image: "/assets/dashboard/promos.png",
    alt: "Trekk Mobility promo code and campaign management",
  },
];

export const MOBILE_SCREENS: ShowcaseScreen[] = [
  {
    image: "/assets/mobile/home.png",
    alt: "Trekk rider app home screen with live scooter map",
  },
  {
    image: "/assets/mobile/menu.png",
    alt: "Trekk rider app account menu",
  },
  {
    image: "/assets/mobile/wallet.png",
    alt: "Trekk rider app wallet and payment methods",
  },
  {
    image: "/assets/mobile/payment-history.png",
    alt: "Trekk rider app payment history",
  },
  {
    image: "/assets/mobile/vehicles.png",
    alt: "Trekk rider app vehicle type selector",
  },
];

