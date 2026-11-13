export type IndustryStat = {
  value: string;
  labelKey: string;
  defaultLabel: string;
};

export type IndustryHighlightCard = {
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
  icon: "userCheck" | "lockOpen" | "gauge" | "mapPin" | "smartphone" | "clock" | "trendingUp";
};

export type IndustryPageData = {
  slug: "vehicle-sharing" | "digital-rental" | "ride-hailing";
  badgeKey: string;
  defaultBadge: string;
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
  image: string;
  bgImage: string;
  imageAlt: string;
  stats: IndustryStat[];
  highlightsLayout: "two-column-models" | "four-cards" | "three-cards";
  highlightsTitleKey: string;
  defaultHighlightsTitle: string;
  highlightsSubtitleKey: string;
  defaultHighlightsSubtitle: string;
  highlights?: IndustryHighlightCard[];
  showVehicleAndOperatingModelBlock: boolean;
};

export const INDUSTRY_VEHICLE_TYPES = [
  { key: "industries.common.vt.kickScooters", defaultLabel: "Kick Scooters", icon: "scooter" },
  { key: "industries.common.vt.mopeds", defaultLabel: "Mopeds", icon: "moped" },
  { key: "industries.common.vt.ebikes", defaultLabel: "E-Bikes", icon: "bike" },
  { key: "industries.common.vt.motorcycles", defaultLabel: "Motorcycles", icon: "bike" },
  { key: "industries.common.vt.atvs", defaultLabel: "ATVs & Quads", icon: "car" },
  { key: "industries.common.vt.golfCarts", defaultLabel: "Golf Carts", icon: "car" },
  { key: "industries.common.vt.cars", defaultLabel: "Cars & EVs", icon: "car" },
  { key: "industries.common.vt.vans", defaultLabel: "Cargo Vans", icon: "truck" },
  { key: "industries.common.vt.boats", defaultLabel: "Marine & Boats", icon: "ship" },
  { key: "industries.common.vt.tricycles", defaultLabel: "E-Tricycles", icon: "truck" },
  { key: "industries.common.vt.pickups", defaultLabel: "Utility Pickups", icon: "truck" },
  { key: "industries.common.vt.custom", defaultLabel: "Custom Fleets", icon: "sparkles" },
] as const;

export const INDUSTRY_OPERATING_MODELS = [
  { key: "industries.common.om.freeFloating", defaultLabel: "Free-floating sharing" },
  { key: "industries.common.om.stationBased", defaultLabel: "Station-based sharing" },
  { key: "industries.common.om.hybrid", defaultLabel: "Mix of free-floating & docks" },
  { key: "industries.common.om.corporate", defaultLabel: "Corporate sharing" },
  { key: "industries.common.om.bookRent", defaultLabel: "Book/rent type of business" },
  { key: "industries.common.om.p2p", defaultLabel: "Peer-to-Peer sharing" },
] as const;

const SHARED_STATS: IndustryStat[] = [
  { value: "300+", labelKey: "industries.common.stat1", defaultLabel: "Projects launched" },
  { value: "55,000+", labelKey: "industries.common.stat2", defaultLabel: "Vehicles connected" },
  { value: "2,100,000+", labelKey: "industries.common.stat3", defaultLabel: "Rides monthly" },
  { value: "99.9%", labelKey: "industries.common.stat4", defaultLabel: "Uptime" },
];

export const INDUSTRY_PAGES: Record<string, IndustryPageData> = {
  "vehicle-sharing": {
    slug: "vehicle-sharing",
    badgeKey: "industries.vehicleSharing.badge",
    defaultBadge: "Vehicle Sharing Software",
    titleKey: "industries.vehicleSharing.title",
    defaultTitle: "Launch your vehicle sharing platform in 20 days!",
    descKey: "industries.vehicleSharing.desc",
    defaultDesc:
      "Suited for any type of sharing: kick scooters, scooters, bikes, mopeds, motorcycles, cars, trucks, vans, e-trikes, or custom electric fleets.",
    image: "/images/product-1.png",
    bgImage: "/images/bg-1.png",
    imageAlt: "Trekk Vehicle Sharing Software Mobile App",
    stats: SHARED_STATS,
    highlightsLayout: "two-column-models",
    highlightsTitleKey: "industries.vehicleSharing.secTitle",
    defaultHighlightsTitle: "Customized white-label solutions for any sharing business!",
    highlightsSubtitleKey: "industries.vehicleSharing.secSubtitle",
    defaultHighlightsSubtitle:
      "Choose vehicle type, decide on operating model, tailor and customize the solution to your needs. We'll help you out!",
    showVehicleAndOperatingModelBlock: true,
  },

  "digital-rental": {
    slug: "digital-rental",
    badgeKey: "industries.digitalRental.badge",
    defaultBadge: "Digital Rental Software",
    titleKey: "industries.digitalRental.title",
    defaultTitle: "Automate and digitalise your rental business",
    descKey: "industries.digitalRental.desc",
    defaultDesc:
      "Fully automate your customer journey — from ID verification and booking to keyless vehicle access.",
    image: "/images/com-5.png",
    bgImage: "/images/bg-2.png",
    imageAlt: "Trekk Digital Rental Software Mobile App",
    stats: SHARED_STATS,
    highlightsLayout: "four-cards",
    highlightsTitleKey: "industries.digitalRental.secTitle",
    defaultHighlightsTitle: "Run any rental business easily!",
    highlightsSubtitleKey: "industries.digitalRental.secSubtitle",
    defaultHighlightsSubtitle:
      "Choose a vehicle type, decide on an operating model, and tailor and customize the solution to your needs. We'll help you out!",
    highlights: [
      {
        titleKey: "industries.digitalRental.c1.title",
        defaultTitle: "Digital onboarding",
        descKey: "industries.digitalRental.c1.desc",
        defaultDesc:
          "Offer a smooth experience for your customers with fully automated onboarding: registration, acceptance of terms, digital ID and driver's license verification, booking, and payments.",
        icon: "userCheck",
      },
      {
        titleKey: "industries.digitalRental.c2.title",
        defaultTitle: "Keyless vehicle access",
        descKey: "industries.digitalRental.c2.desc",
        defaultDesc:
          "With keyless vehicle access technology, you can automate rental operations and increase revenue by offering 24/7 self-service.",
        icon: "lockOpen",
      },
      {
        titleKey: "industries.digitalRental.c3.title",
        defaultTitle: "Control your fleet",
        descKey: "industries.digitalRental.c3.desc",
        defaultDesc:
          "Track your vehicles 24/7: location, errors, battery/fuel level, odometer data, engine status, door status, immobilizer, and more.",
        icon: "gauge",
      },
      {
        titleKey: "industries.digitalRental.c4.title",
        defaultTitle: "Remote branches",
        descKey: "industries.digitalRental.c4.desc",
        defaultDesc:
          "Serve your customers where they're at. Partner with hotels and parking lots — leave your vehicles at convenient places for tourists to pick up and return.",
        icon: "mapPin",
      },
    ],
    showVehicleAndOperatingModelBlock: true,
  },

  "ride-hailing": {
    slug: "ride-hailing",
    badgeKey: "industries.rideHailing.badge",
    defaultBadge: "Ride-Hailing Software",
    titleKey: "industries.rideHailing.title",
    defaultTitle: "Launch your ride-hailing or taxi platform in 20 days!",
    descKey: "industries.rideHailing.desc",
    defaultDesc:
      "All the technology you need to launch your own ride-hailing or taxi business. Cars, vans, trucks, tricycles, boats and more.",
    image: "/images/product-3.png",
    bgImage: "/images/bg-3.png",
    imageAlt: "Trekk Ride-Hailing Software Mobile App",
    stats: SHARED_STATS,
    highlightsLayout: "three-cards",
    highlightsTitleKey: "industries.rideHailing.secTitle",
    defaultHighlightsTitle: "Ready-to-go tech solution for ride-hailing and taxi businesses",
    highlightsSubtitleKey: "industries.rideHailing.secSubtitle",
    defaultHighlightsSubtitle:
      "Trekk Mobility empowers entrepreneurs to launch their own mobility solutions. Our platform eliminates all the technological headaches and reduces barriers to launching a ride-hailing app in any city — helping you focus on marketing and operations while we take care of the technology.",
    highlights: [
      {
        titleKey: "industries.rideHailing.c1.title",
        defaultTitle: "Software customized for your needs",
        descKey: "industries.rideHailing.c1.desc",
        defaultDesc:
          "Branded mobile apps for your customers (iOS, Android). A powerful panel to manage drivers, customers and follow the stats. Separate apps for your drivers — all customized for your brand.",
        icon: "smartphone",
      },
      {
        titleKey: "industries.rideHailing.c2.title",
        defaultTitle: "Get to market in 20 days",
        descKey: "industries.rideHailing.c2.desc",
        defaultDesc:
          "We will help you launch a complete solution in 10–20 days. Customer apps with your brand, driver apps, and management dashboard included.",
        icon: "clock",
      },
      {
        titleKey: "industries.rideHailing.c3.title",
        defaultTitle: "Proven technology that scales",
        descKey: "industries.rideHailing.c3.desc",
        defaultDesc:
          "Scale easily from 10 rides to 100,000 rides, from one to ten cities, from one to multiple languages, and from one service type to multi-services.",
        icon: "trendingUp",
      },
    ],
    showVehicleAndOperatingModelBlock: false,
  },
};

