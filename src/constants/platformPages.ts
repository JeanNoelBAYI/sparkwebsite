export type PlatformCapability = {
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
  tagKey: string;
  defaultTag: string;
};

export type PlatformWorkflowStep = {
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
};

export type PlatformBannerImages = {
  left: string;
  center: string;
  right: string;
};

export type PlatformPageData = {
  slug: string;
  badgeKey: string;
  defaultBadge: string;
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
  ctaKey: string;
  defaultCta: string;
  ctaHref?: string;
  bannerImages?: PlatformBannerImages;
  sectionEyebrowKey: string;
  defaultSectionEyebrow: string;
  sectionTitleKey: string;
  defaultSectionTitle: string;
  sectionDescKey: string;
  defaultSectionDesc: string;
  capabilities: PlatformCapability[];
  workflowTitleKey: string;
  defaultWorkflowTitle: string;
  workflowSteps: PlatformWorkflowStep[];
};

export const PLATFORM_PAGES: Record<string, PlatformPageData> = {
  "fleet-dashboard": {
    slug: "fleet-dashboard",
    badgeKey: "platform.fleetDashboard.badge",
    defaultBadge: "Fleet Dashboard",
    titleKey: "platform.fleetDashboard.title",
    defaultTitle: "Your Command Center for Every Vehicle.",
    descKey: "platform.fleetDashboard.desc",
    defaultDesc:
      "Monitor active rides, live fleet status, revenue performance, and operational alerts from a single real-time dashboard built for shared mobility operators.",
    ctaKey: "platform.common.bookDemo",
    defaultCta: "Book Demo",
    bannerImages: {
      left: "/images/assets/corporate fleet 4.jpg",
      center: "/images/assets/app2.jpg",
      right: "/images/assets/corporate fleet2.jpg",
    },
    sectionEyebrowKey: "platform.fleetDashboard.secEyebrow",
    defaultSectionEyebrow: "Live Operations Overview",
    sectionTitleKey: "platform.fleetDashboard.secTitle",
    defaultSectionTitle: "Real-Time Intelligence Across Every City & Fleet",
    sectionDescKey: "platform.fleetDashboard.secDesc",
    defaultSectionDesc:
      "Track daily trips, vehicle availability, battery health, and revenue KPIs without switching between tools or spreadsheets.",
    capabilities: [
      {
        titleKey: "platform.fleetDashboard.cap1.title",
        defaultTitle: "Live Fleet & Vehicle Status KPIs",
        descKey: "platform.fleetDashboard.cap1.desc",
        defaultDesc:
          "See total vehicles, available units, active rides, low-battery alerts, and offline hardware counts at a glance.",
        tagKey: "platform.fleetDashboard.cap1.tag",
        defaultTag: "Dashboard",
      },
      {
        titleKey: "platform.fleetDashboard.cap2.title",
        defaultTitle: "Revenue Stats & Earnings Breakdown",
        descKey: "platform.fleetDashboard.cap2.desc",
        defaultDesc:
          "Monitor daily, weekly, and monthly ride revenue, pass sales, and average trip value across all active fleets.",
        tagKey: "platform.fleetDashboard.cap2.tag",
        defaultTag: "Revenue Stats",
      },
      {
        titleKey: "platform.fleetDashboard.cap3.title",
        defaultTitle: "Real-Time Fleet Map & Dispatch",
        descKey: "platform.fleetDashboard.cap3.desc",
        defaultDesc:
          "Jump straight from dashboard KPIs into live vehicle locations, geofence boundaries, and field crew priorities.",
        tagKey: "platform.fleetDashboard.cap3.tag",
        defaultTag: "Live View",
      },
      {
        titleKey: "platform.fleetDashboard.cap4.title",
        defaultTitle: "Role-Scoped Multi-Admin Workspace",
        descKey: "platform.fleetDashboard.cap4.desc",
        defaultDesc:
          "Every operator sees the exact metrics, fleets, and controls permitted by their organization role and capability profile.",
        tagKey: "platform.fleetDashboard.cap4.tag",
        defaultTag: "Access Control",
      },
    ],
    workflowTitleKey: "platform.fleetDashboard.wfTitle",
    defaultWorkflowTitle: "How Operators Run Their Day From the Dashboard",
    workflowSteps: [
      {
        titleKey: "platform.fleetDashboard.wf1.title",
        defaultTitle: "1. Check Morning Fleet Health",
        descKey: "platform.fleetDashboard.wf1.desc",
        defaultDesc: "Review online vs. offline vehicles, low-battery counts, and overnight alerts.",
      },
      {
        titleKey: "platform.fleetDashboard.wf2.title",
        defaultTitle: "2. Track Live Trips & Revenue",
        descKey: "platform.fleetDashboard.wf2.desc",
        defaultDesc: "Watch active ride volume and daily earnings climb in real time across cities.",
      },
      {
        titleKey: "platform.fleetDashboard.wf3.title",
        defaultTitle: "3. Act Immediately",
        descKey: "platform.fleetDashboard.wf3.desc",
        defaultDesc: "Drill into any fleet, vehicle, or rider transaction in one click.",
      },
    ],
  },

  "fleet-management": {
    slug: "fleet-management",
    badgeKey: "platform.fleetManagement.badge",
    defaultBadge: "Fleet & Geo-Fencing",
    titleKey: "platform.fleetManagement.title",
    defaultTitle: "Precision Fleet & Zone Control.",
    descKey: "platform.fleetManagement.desc",
    defaultDesc:
      "Create and manage city fleets, draw polygon service areas, enforce low-speed and no-go zones, configure designated parking hubs, and automate daily operation hours.",
    ctaKey: "platform.fleetManagement.cta",
    defaultCta: "Book a Fleet Management Demo",
    bannerImages: {
      left: "/images/assets/coporate fleet2.jpg",
      center: "/images/assets/corporate fleet 3.jpg",
      right: "/images/assets/corporate fleet.jpg",
    },
    sectionEyebrowKey: "platform.fleetManagement.secEyebrow",
    defaultSectionEyebrow: "Core Module Capabilities",
    sectionTitleKey: "platform.fleetManagement.secTitle",
    defaultSectionTitle: "Everything Required to Govern Your Operating Zones",
    sectionDescKey: "platform.fleetManagement.secDesc",
    defaultSectionDesc:
      "Built directly for city operators and campus mobility teams to control where vehicles can ride, slow down, or park in real time.",
    capabilities: [
      {
        titleKey: "platform.fleetManagement.cap1.title",
        defaultTitle: "Multi-Fleet & City Creation",
        descKey: "platform.fleetManagement.cap1.desc",
        defaultDesc:
          "Launch and configure isolated fleets per city, campus, or resort with custom currency, speed defaults, and fleet-level rules.",
        tagKey: "platform.fleetManagement.cap1.tag",
        defaultTag: "All Fleets",
      },
      {
        titleKey: "platform.fleetManagement.cap2.title",
        defaultTitle: "Service Areas & Polygon Geo-Fencing",
        descKey: "platform.fleetManagement.cap2.desc",
        defaultDesc:
          "Draw interactive map boundaries defining where riders can start and end trips, with instant sync to rider mobile apps.",
        tagKey: "platform.fleetManagement.cap2.tag",
        defaultTag: "Geo-Fence",
      },
      {
        titleKey: "platform.fleetManagement.cap3.title",
        defaultTitle: "Low-Speed & No-Go Zones",
        descKey: "platform.fleetManagement.cap3.desc",
        defaultDesc:
          "Automatically throttle vehicle top speeds in pedestrian plazas and restrict entry or parking inside prohibited zones.",
        tagKey: "platform.fleetManagement.cap3.tag",
        defaultTag: "Safety Zones",
      },
      {
        titleKey: "platform.fleetManagement.cap4.title",
        defaultTitle: "Parking Zones & Operation Hours",
        descKey: "platform.fleetManagement.cap4.desc",
        defaultDesc:
          "Designate mandatory parking bays to prevent sidewalk clutter and schedule automated fleet opening and closing hours.",
        tagKey: "platform.fleetManagement.cap4.tag",
        defaultTag: "Schedules",
      },
    ],
    workflowTitleKey: "platform.fleetManagement.wfTitle",
    defaultWorkflowTitle: "How Operators Deploy a New Zone",
    workflowSteps: [
      {
        titleKey: "platform.fleetManagement.wf1.title",
        defaultTitle: "1. Create Fleet Profile",
        descKey: "platform.fleetManagement.wf1.desc",
        defaultDesc: "Set city metadata, fleet status, and operational defaults from Add New Fleet.",
      },
      {
        titleKey: "platform.fleetManagement.wf2.title",
        defaultTitle: "2. Draw Geo-Fence Polygons",
        descKey: "platform.fleetManagement.wf2.desc",
        defaultDesc: "Map service boundaries, slow zones, no-go zones, and parking hubs on the live map.",
      },
      {
        titleKey: "platform.fleetManagement.wf3.title",
        defaultTitle: "3. Set Operation Hours",
        descKey: "platform.fleetManagement.wf3.desc",
        defaultDesc: "Schedule active riding windows per weekday so fleets lock automatically after hours.",
      },
    ],
  },

  "vehicle-management": {
    slug: "vehicle-management",
    badgeKey: "platform.vehicleManagement.badge",
    defaultBadge: "Vehicle Management",
    titleKey: "platform.vehicleManagement.title",
    defaultTitle: "Full Lifecycle Vehicle Visibility.",
    descKey: "platform.vehicleManagement.desc",
    defaultDesc:
      "Onboard scooters, e-bikes, and EVs in seconds, inspect complete vehicle trip histories, track battery and IoT lock status, and execute targeted vehicle commands.",
    ctaKey: "platform.vehicleManagement.cta",
    defaultCta: "Explore Vehicle Telemetry",
    bannerImages: {
      left: "/images/assets/golf carte2.jpg",
      center: "/images/assets/hotel fleet.jpg",
      right: "/images/assets/marti-sierra-JQ0RfZjqsY0-unsplash.jpg",
    },
    sectionEyebrowKey: "platform.vehicleManagement.secEyebrow",
    defaultSectionEyebrow: "Hardware & Asset Control",
    sectionTitleKey: "platform.vehicleManagement.secTitle",
    defaultSectionTitle: "Track Every Asset From Deployment to Maintenance",
    sectionDescKey: "platform.vehicleManagement.secDesc",
    defaultSectionDesc:
      "Monitor live vehicle status, IMEI bindings, firmware health, and historical trip logs across your entire fleet.",
    capabilities: [
      {
        titleKey: "platform.vehicleManagement.cap1.title",
        defaultTitle: "Instant Vehicle Onboarding",
        descKey: "platform.vehicleManagement.cap1.desc",
        defaultDesc:
          "Register new vehicles with QR codes, IoT IMEI numbers, vehicle model types, and assign them directly to active fleets.",
        tagKey: "platform.vehicleManagement.cap1.tag",
        defaultTag: "Create Vehicle",
      },
      {
        titleKey: "platform.vehicleManagement.cap2.title",
        defaultTitle: "Complete Vehicle History",
        descKey: "platform.vehicleManagement.cap2.desc",
        defaultDesc:
          "Audit every ride, battery swap, status change, and maintenance flag tied to an individual vehicle ID.",
        tagKey: "platform.vehicleManagement.cap2.tag",
        defaultTag: "Trip Logs",
      },
      {
        titleKey: "platform.vehicleManagement.cap3.title",
        defaultTitle: "Direct Vehicle Commands",
        descKey: "platform.vehicleManagement.cap3.desc",
        defaultDesc:
          "Trigger lock, unlock, alarm, battery cover open, or reboot commands directly from any vehicle detail view.",
        tagKey: "platform.vehicleManagement.cap3.tag",
        defaultTag: "Remote Control",
      },
      {
        titleKey: "platform.vehicleManagement.cap4.title",
        defaultTitle: "Fleet-Wide Status & Maintenance Flags",
        descKey: "platform.vehicleManagement.cap4.desc",
        defaultDesc:
          "Filter vehicles by online, offline, low battery, or in-maintenance states to dispatch field technicians faster.",
        tagKey: "platform.vehicleManagement.cap4.tag",
        defaultTag: "Asset Health",
      },
    ],
    workflowTitleKey: "platform.vehicleManagement.wfTitle",
    defaultWorkflowTitle: "How Teams Manage Daily Vehicle Operations",
    workflowSteps: [
      {
        titleKey: "platform.vehicleManagement.wf1.title",
        defaultTitle: "1. Bind Hardware & QR",
        descKey: "platform.vehicleManagement.wf1.desc",
        defaultDesc: "Pair each physical vehicle with its IoT telemetry unit and QR identifier.",
      },
      {
        titleKey: "platform.vehicleManagement.wf2.title",
        defaultTitle: "2. Monitor Live Telemetry",
        descKey: "platform.vehicleManagement.wf2.desc",
        defaultDesc: "Track state-of-charge, GPS coordinates, and lock status in real time.",
      },
      {
        titleKey: "platform.vehicleManagement.wf3.title",
        defaultTitle: "3. Audit & Intervene",
        descKey: "platform.vehicleManagement.wf3.desc",
        defaultDesc: "Inspect vehicle history and dispatch remote commands whenever anomalies occur.",
      },
    ],
  },

  "riders-management": {
    slug: "riders-management",
    badgeKey: "platform.ridersManagement.badge",
    defaultBadge: "Riders & Rides",
    titleKey: "platform.ridersManagement.title",
    defaultTitle: "Real-Time Rider & Trip Operations.",
    descKey: "platform.ridersManagement.desc",
    defaultDesc:
      "View every registered rider account, monitor active rides in progress, end stuck trips remotely, and reconcile ride payments and wallet transactions effortlessly.",
    ctaKey: "platform.ridersManagement.cta",
    defaultCta: "See Rider Operations",
    bannerImages: {
      left: "/images/assets/sebastian-puskeiler-tOtjBu6WVBo-unsplash.jpg",
      center: "/images/assets/spencer-gu-mKiUJq2mT1Y-unsplash.jpg",
      right: "/images/assets/tourism fleet.jpg",
    },
    sectionEyebrowKey: "platform.ridersManagement.secEyebrow",
    defaultSectionEyebrow: "Customer & Trip Oversight",
    sectionTitleKey: "platform.ridersManagement.secTitle",
    defaultSectionTitle: "Full Transparency Across Every Rider & Transaction",
    sectionDescKey: "platform.ridersManagement.secDesc",
    defaultSectionDesc:
      "Equip support and operations teams with live trip tracking, rider verification status, and granular payment ledgers.",
    capabilities: [
      {
        titleKey: "platform.ridersManagement.cap1.title",
        defaultTitle: "Rider Directory & Account Control",
        descKey: "platform.ridersManagement.cap1.desc",
        defaultDesc:
          "Search rider profiles, inspect KYC/ID status, review wallet balances, and manage account suspensions or credits.",
        tagKey: "platform.ridersManagement.cap1.tag",
        defaultTag: "Riders",
      },
      {
        titleKey: "platform.ridersManagement.cap2.title",
        defaultTitle: "Live Active Rides Monitor",
        descKey: "platform.ridersManagement.cap2.desc",
        defaultDesc:
          "Watch ongoing trips in real time with elapsed duration, distance covered, current fare, and remote ride-end controls.",
        tagKey: "platform.ridersManagement.cap2.tag",
        defaultTag: "Active Rides",
      },
      {
        titleKey: "platform.ridersManagement.cap3.title",
        defaultTitle: "Complete Rides History",
        descKey: "platform.ridersManagement.cap3.desc",
        defaultDesc:
          "Filter completed and cancelled trips by fleet, date, rider, or vehicle with start/end coordinates and cost breakdowns.",
        tagKey: "platform.ridersManagement.cap3.tag",
        defaultTag: "Rides Management",
      },
      {
        titleKey: "platform.ridersManagement.cap4.title",
        defaultTitle: "Ride & Wallet Transaction Ledgers",
        descKey: "platform.ridersManagement.cap4.desc",
        defaultDesc:
          "Reconcile individual ride charges alongside top-ups, refunds, and pass purchases in unified transaction logs.",
        tagKey: "platform.ridersManagement.cap4.tag",
        defaultTag: "Transactions",
      },
    ],
    workflowTitleKey: "platform.ridersManagement.wfTitle",
    defaultWorkflowTitle: "Streamlined Support & Trip Resolution",
    workflowSteps: [
      {
        titleKey: "platform.ridersManagement.wf1.title",
        defaultTitle: "1. Track Active Trips",
        descKey: "platform.ridersManagement.wf1.desc",
        defaultDesc: "Spot long-running or paused rides immediately from the Active Rides feed.",
      },
      {
        titleKey: "platform.ridersManagement.wf2.title",
        defaultTitle: "2. Verify Payment Status",
        descKey: "platform.ridersManagement.wf2.desc",
        defaultDesc: "Cross-check ride charges and wallet top-ups in Ride & All Transactions.",
      },
      {
        titleKey: "platform.ridersManagement.wf3.title",
        defaultTitle: "3. Resolve in One Click",
        descKey: "platform.ridersManagement.wf3.desc",
        defaultDesc: "Assist riders, issue refunds, or close stale sessions without engineering help.",
      },
    ],
  },

  "pricing-revenue": {
    slug: "pricing-revenue",
    badgeKey: "platform.pricingRevenue.badge",
    defaultBadge: "Revenue & Pricing Plans",
    titleKey: "platform.pricingRevenue.title",
    defaultTitle: "Flexible Tariffs & Live Revenue Analytics.",
    descKey: "platform.pricingRevenue.desc",
    defaultDesc:
      "Build fleet-specific pricing plans with custom unlock fees, per-minute rates, pause fees, and reservation charges while tracking revenue growth in real time.",
    ctaKey: "common.nav.pricing",
    defaultCta: "Pricing",
    ctaHref: "/pricing",
    bannerImages: {
      left: "/images/product-2.png",
      center: "/images/revenue-dashboard-trekk.png",
      right: "/images/mobile/payment-history.png",
    },
    sectionEyebrowKey: "platform.pricingRevenue.secEyebrow",
    defaultSectionEyebrow: "Monetization Engine",
    sectionTitleKey: "platform.pricingRevenue.secTitle",
    defaultSectionTitle: "Maximize Unit Economics Across Every Market",
    sectionDescKey: "platform.pricingRevenue.secDesc",
    defaultSectionDesc:
      "Tailor pricing per fleet and vehicle category, archive legacy plans cleanly, and monitor daily, weekly, and monthly revenue performance.",
    capabilities: [
      {
        titleKey: "platform.pricingRevenue.cap1.title",
        defaultTitle: "Revenue Stats & KPI Dashboards",
        descKey: "platform.pricingRevenue.cap1.desc",
        defaultDesc:
          "Visualize gross ride revenue, pass sales, average trip value, and fleet-by-fleet earnings trends.",
        tagKey: "platform.pricingRevenue.cap1.tag",
        defaultTag: "Revenue Stats",
      },
      {
        titleKey: "platform.pricingRevenue.cap2.title",
        defaultTitle: "Dynamic Pricing Plan Builder",
        descKey: "platform.pricingRevenue.cap2.desc",
        defaultDesc:
          "Configure unlock fees, per-minute riding rates, pause tariffs, minimum charges, and currency rules per fleet.",
        tagKey: "platform.pricingRevenue.cap2.tag",
        defaultTag: "Create Plans",
      },
      {
        titleKey: "platform.pricingRevenue.cap3.title",
        defaultTitle: "Plan Management & Archives",
        descKey: "platform.pricingRevenue.cap3.desc",
        defaultDesc:
          "Update active tariffs on the fly or archive seasonal pricing structures without losing historical billing integrity.",
        tagKey: "platform.pricingRevenue.cap3.tag",
        defaultTag: "Archives",
      },
      {
        titleKey: "platform.pricingRevenue.cap4.title",
        defaultTitle: "Zone-Linked Tariff Visibility",
        descKey: "platform.pricingRevenue.cap4.desc",
        defaultDesc:
          "Inspect pricing plan coverage directly on the map so operators verify which rates apply to each service area.",
        tagKey: "platform.pricingRevenue.cap4.tag",
        defaultTag: "Map View",
      },
    ],
    workflowTitleKey: "platform.pricingRevenue.wfTitle",
    defaultWorkflowTitle: "From Tariff Design to Revenue Tracking",
    workflowSteps: [
      {
        titleKey: "platform.pricingRevenue.wf1.title",
        defaultTitle: "1. Define Tariff Structure",
        descKey: "platform.pricingRevenue.wf1.desc",
        defaultDesc: "Set unlock, ride-per-minute, and pause pricing for your target fleet.",
      },
      {
        titleKey: "platform.pricingRevenue.wf2.title",
        defaultTitle: "2. Publish to Rider App",
        descKey: "platform.pricingRevenue.wf2.desc",
        defaultDesc: "Riders automatically see transparent local pricing before unlocking any vehicle.",
      },
      {
        titleKey: "platform.pricingRevenue.wf3.title",
        defaultTitle: "3. Optimize via Revenue Stats",
        descKey: "platform.pricingRevenue.wf3.desc",
        defaultDesc: "Compare conversion and earnings across fleets to fine-tune profitability.",
      },
    ],
  },

  "passes-subscriptions": {
    slug: "passes-subscriptions",
    badgeKey: "platform.passesSubscriptions.badge",
    defaultBadge: "Passes & Subscriptions",
    titleKey: "platform.passesSubscriptions.title",
    defaultTitle: "Drive Recurring Revenue With Ride Passes.",
    descKey: "platform.passesSubscriptions.desc",
    defaultDesc:
      "Create time-limited or ride-bundle passes, manage XtraCool membership tiers, and monitor active recurring subscriptions across your rider base.",
    ctaKey: "platform.passesSubscriptions.cta",
    defaultCta: "Launch Ride Passes",
    bannerImages: {
      left: "/images/assets/app1.jpg",
      center: "/images/assets/corporate fleet2.jpg",
      right: "/images/assets/kaden-taylor-hgrXoSOOLDs-unsplash.jpg",
    },
    sectionEyebrowKey: "platform.passesSubscriptions.secEyebrow",
    defaultSectionEyebrow: "Retention & Memberships",
    sectionTitleKey: "platform.passesSubscriptions.secTitle",
    defaultSectionTitle: "Turn Casual Riders Into Daily Subscribers",
    sectionDescKey: "platform.passesSubscriptions.secDesc",
    defaultSectionDesc:
      "Design commuter passes, tourist day bundles, and branded subscription tiers directly inside the Trekk dashboard.",
    capabilities: [
      {
        titleKey: "platform.passesSubscriptions.cap1.title",
        defaultTitle: "Custom Pass Creation",
        descKey: "platform.passesSubscriptions.cap1.desc",
        defaultDesc:
          "Configure pass validity windows, included free unlocks, discounted minute bundles, and eligible fleets.",
        tagKey: "platform.passesSubscriptions.cap1.tag",
        defaultTag: "Create Passes",
      },
      {
        titleKey: "platform.passesSubscriptions.cap2.title",
        defaultTitle: "Pass Inventory Management",
        descKey: "platform.passesSubscriptions.cap2.desc",
        defaultDesc:
          "Enable, edit, or retire passes across markets with instant visibility into adoption and redemption.",
        tagKey: "platform.passesSubscriptions.cap2.tag",
        defaultTag: "Manage Passes",
      },
      {
        titleKey: "platform.passesSubscriptions.cap3.title",
        defaultTitle: "XtraCool Membership Plans",
        descKey: "platform.passesSubscriptions.cap3.desc",
        defaultDesc:
          "Run dedicated tiered membership programs with exclusive perks, priority unlocks, and bundled ride minutes.",
        tagKey: "platform.passesSubscriptions.cap3.tag",
        defaultTag: "XtraCool",
      },
      {
        titleKey: "platform.passesSubscriptions.cap4.title",
        defaultTitle: "Live Subscriptions Tracking",
        descKey: "platform.passesSubscriptions.cap4.desc",
        defaultDesc:
          "Monitor active subscribers, renewal cycles, and plan status across your entire customer base.",
        tagKey: "platform.passesSubscriptions.cap4.tag",
        defaultTag: "Subscriptions",
      },
    ],
    workflowTitleKey: "platform.passesSubscriptions.wfTitle",
    defaultWorkflowTitle: "Launch Membership Tiers in Minutes",
    workflowSteps: [
      {
        titleKey: "platform.passesSubscriptions.wf1.title",
        defaultTitle: "1. Configure Pass Rules",
        descKey: "platform.passesSubscriptions.wf1.desc",
        defaultDesc: "Choose duration, price, and included ride benefits in Create Passes.",
      },
      {
        titleKey: "platform.passesSubscriptions.wf2.title",
        defaultTitle: "2. Activate in App Storefront",
        descKey: "platform.passesSubscriptions.wf2.desc",
        defaultDesc: "Publish passes to riders in selected fleets for instant in-app purchase.",
      },
      {
        titleKey: "platform.passesSubscriptions.wf3.title",
        defaultTitle: "3. Track Renewals",
        descKey: "platform.passesSubscriptions.wf3.desc",
        defaultDesc: "Monitor recurring subscriber retention from the Subscriptions view.",
      },
    ],
  },

  commands: {
    slug: "commands",
    badgeKey: "platform.commands.badge",
    defaultBadge: "IoT & Commands",
    titleKey: "platform.commands.title",
    defaultTitle: "Direct Over-the-Air IoT Hardware Control.",
    descKey: "platform.commands.desc",
    defaultDesc:
      "Create reusable IoT command templates, dispatch remote lock/unlock or telemetry requests to vehicles, and maintain a complete audit log of every executed command.",
    ctaKey: "platform.commands.cta",
    defaultCta: "Explore IoT Commands",
    bannerImages: {
      left: "/images/assets/go-e-98r1jV34oHo-unsplash.jpg",
      center: "/images/assets/hNCsl.jpg",
      right: "/images/assets/hotel rental.jpg",
    },
    sectionEyebrowKey: "platform.commands.secEyebrow",
    defaultSectionEyebrow: "Hardware Connectivity",
    sectionTitleKey: "platform.commands.secTitle",
    defaultSectionTitle: "Communicate With Your Fleet in Real Time",
    sectionDescKey: "platform.commands.secDesc",
    defaultSectionDesc:
      "Eliminate manual field visits for routine resets, lock verification, and hardware diagnostics with structured OTA command management.",
    capabilities: [
      {
        titleKey: "platform.commands.cap1.title",
        defaultTitle: "Create Custom Command Templates",
        descKey: "platform.commands.cap1.desc",
        defaultDesc:
          "Define standardized IoT payloads and command actions tailored to your supported hardware models.",
        tagKey: "platform.commands.cap1.tag",
        defaultTag: "Create Command",
      },
      {
        titleKey: "platform.commands.cap2.title",
        defaultTitle: "Saved Commands Library",
        descKey: "platform.commands.cap2.desc",
        defaultDesc:
          "Access pre-configured lock, unlock, alarm, speed-cap, and reboot commands for rapid operator execution.",
        tagKey: "platform.commands.cap2.tag",
        defaultTag: "Created Commands",
      },
      {
        titleKey: "platform.commands.cap3.title",
        defaultTitle: "Full Command Execution History",
        descKey: "platform.commands.cap3.desc",
        defaultDesc:
          "Audit who triggered every command, target vehicle ID, timestamp, and hardware acknowledgment status.",
        tagKey: "platform.commands.cap3.tag",
        defaultTag: "Command History",
      },
      {
        titleKey: "platform.commands.cap4.title",
        defaultTitle: "Hardware-Agnostic IoT Protocol",
        descKey: "platform.commands.cap4.desc",
        defaultDesc:
          "Operate mixed fleets of scooters, e-bikes, and EVs through a single unified command interface.",
        tagKey: "platform.commands.cap4.tag",
        defaultTag: "Multi-OEM",
      },
    ],
    workflowTitleKey: "platform.commands.wfTitle",
    defaultWorkflowTitle: "Reliable Remote Fleet Diagnostics",
    workflowSteps: [
      {
        titleKey: "platform.commands.wf1.title",
        defaultTitle: "1. Define Command Action",
        descKey: "platform.commands.wf1.desc",
        defaultDesc: "Build or select a command template from Created Commands.",
      },
      {
        titleKey: "platform.commands.wf2.title",
        defaultTitle: "2. Dispatch Over the Air",
        descKey: "platform.commands.wf2.desc",
        defaultDesc: "Send the instruction directly to the target vehicle's IoT module.",
      },
      {
        titleKey: "platform.commands.wf3.title",
        defaultTitle: "3. Verify Acknowledgment",
        descKey: "platform.commands.wf3.desc",
        defaultDesc: "Confirm delivery and response status in Command History.",
      },
    ],
  },

  promos: {
    slug: "promos",
    badgeKey: "platform.promos.badge",
    defaultBadge: "Promos & Marketing",
    titleKey: "platform.promos.title",
    defaultTitle: "Acquire & Reactivate Riders With Targeted Promos.",
    descKey: "platform.promos.desc",
    defaultDesc:
      "Create promo codes, launch activity-based marketing campaigns, inspect promo coverage on the map, and archive past promotions with full redemption tracking.",
    ctaKey: "platform.promos.cta",
    defaultCta: "See Growth & Promos",
    bannerImages: {
      left: "/images/assets/5r1rA.jpg",
      center: "/images/assets/afif-ramdhasuma-Iu3PolhJ0zA-unsplash.jpg",
      right: "/images/assets/javygo-S0fHHKJO8dU-unsplash.jpg",
    },
    sectionEyebrowKey: "platform.promos.secEyebrow",
    defaultSectionEyebrow: "Rider Growth Engine",
    sectionTitleKey: "platform.promos.secTitle",
    defaultSectionTitle: "Turn First-Time Downloads Into Repeat Trips",
    sectionDescKey: "platform.promos.secDesc",
    defaultSectionDesc:
      "Combine geofenced promo codes with behavioral segmentation to boost utilization during off-peak hours and new city launches.",
    capabilities: [
      {
        titleKey: "platform.promos.cap1.title",
        defaultTitle: "Promo Code Builder",
        descKey: "platform.promos.cap1.desc",
        defaultDesc:
          "Configure percentage or fixed discounts, usage limits, expiry dates, and fleet eligibility in seconds.",
        tagKey: "platform.promos.cap1.tag",
        defaultTag: "Create Promo",
      },
      {
        titleKey: "platform.promos.cap2.title",
        defaultTitle: "Active Promos & Archives",
        descKey: "platform.promos.cap2.desc",
        defaultDesc:
          "Manage live campaigns, pause underperforming codes, and review historical performance in Promo Archives.",
        tagKey: "platform.promos.cap2.tag",
        defaultTag: "Manage Promos",
      },
      {
        titleKey: "platform.promos.cap3.title",
        defaultTitle: "Marketing Campaigns by Rider Activity",
        descKey: "platform.promos.cap3.desc",
        defaultDesc:
          "Target inactive riders, frequent commuters, or new signups with automated promotional outreach.",
        tagKey: "platform.promos.cap3.tag",
        defaultTag: "Campaigns",
      },
      {
        titleKey: "platform.promos.cap4.title",
        defaultTitle: "Promo Map Visualization",
        descKey: "platform.promos.cap4.desc",
        defaultDesc:
          "View where active promotions apply across city zones to coordinate launch events and partner incentives.",
        tagKey: "platform.promos.cap4.tag",
        defaultTag: "Promo Map",
      },
    ],
    workflowTitleKey: "platform.promos.wfTitle",
    defaultWorkflowTitle: "Launch High-Converting Campaigns",
    workflowSteps: [
      {
        titleKey: "platform.promos.wf1.title",
        defaultTitle: "1. Set Discount & Rules",
        descKey: "platform.promos.wf1.desc",
        defaultDesc: "Create a promo code with redemption caps and valid fleet zones.",
      },
      {
        titleKey: "platform.promos.wf2.title",
        defaultTitle: "2. Target Rider Segments",
        descKey: "platform.promos.wf2.desc",
        defaultDesc: "Align campaigns with rider activity to drive reactivation or peak-hour rides.",
      },
      {
        titleKey: "platform.promos.wf3.title",
        defaultTitle: "3. Measure & Archive",
        descKey: "platform.promos.wf3.desc",
        defaultDesc: "Track redemptions and cleanly archive completed promotions.",
      },
    ],
  },

  "organisation-management": {
    slug: "organisation-management",
    badgeKey: "platform.orgManagement.badge",
    defaultBadge: "Organisation & Access",
    titleKey: "platform.orgManagement.title",
    defaultTitle: "Enterprise Role & Capability Governance.",
    descKey: "platform.orgManagement.desc",
    defaultDesc:
      "Invite team members, assign custom admin roles, and enforce granular read/write capability permissions across every dashboard module and route.",
    ctaKey: "platform.orgManagement.cta",
    defaultCta: "Explore Access Control",
    bannerImages: {
      left: "/images/assets/jorge-saavedra-94qZsII4kN8-unsplash.jpg",
      center: "/images/assets/tan-kaninthanond-RFumqN-7zI0-unsplash.jpg",
      right: "/images/assets/app3.jpg",
    },
    sectionEyebrowKey: "platform.orgManagement.secEyebrow",
    defaultSectionEyebrow: "Security & Team Governance",
    sectionTitleKey: "platform.orgManagement.secTitle",
    defaultSectionTitle: "Give Every Team Member Exact Least-Privilege Access",
    sectionDescKey: "platform.orgManagement.secDesc",
    defaultSectionDesc:
      "Separate finance, field mechanics, customer support, and city managers with a visual capability matrix that locks down both UI and API actions.",
    capabilities: [
      {
        titleKey: "platform.orgManagement.cap1.title",
        defaultTitle: "Team Onboarding & Role Assignment",
        descKey: "platform.orgManagement.cap1.desc",
        defaultDesc:
          "Add new admin users and assign operational roles from a centralized Organisation Management console.",
        tagKey: "platform.orgManagement.cap1.tag",
        defaultTag: "Add User",
      },
      {
        titleKey: "platform.orgManagement.cap2.title",
        defaultTitle: "Granular Capability Matrix",
        descKey: "platform.orgManagement.cap2.desc",
        defaultDesc:
          "Toggle read and write permissions independently for fleets, geofences, pricing, promos, vehicles, and riders.",
        tagKey: "platform.orgManagement.cap2.tag",
        defaultTag: "Permissions",
      },
      {
        titleKey: "platform.orgManagement.cap3.title",
        defaultTitle: "Custom Role Creation",
        descKey: "platform.orgManagement.cap3.desc",
        defaultDesc:
          "Create tailored roles like Field Tech, Support Agent, or Finance Analyst without hardcoding permissions.",
        tagKey: "platform.orgManagement.cap3.tag",
        defaultTag: "Custom Roles",
      },
      {
        titleKey: "platform.orgManagement.cap4.title",
        defaultTitle: "Automatic Route & Action Enforcement",
        descKey: "platform.orgManagement.cap4.desc",
        defaultDesc:
          "Sidebar navigation and gated routes automatically adapt to each user's live capability profile.",
        tagKey: "platform.orgManagement.cap4.tag",
        defaultTag: "Route Guards",
      },
    ],
    workflowTitleKey: "platform.orgManagement.wfTitle",
    defaultWorkflowTitle: "Scale Your Team Safely",
    workflowSteps: [
      {
        titleKey: "platform.orgManagement.wf1.title",
        defaultTitle: "1. Define Team Roles",
        descKey: "platform.orgManagement.wf1.desc",
        defaultDesc: "Create roles matching your city ops, support, and finance structure.",
      },
      {
        titleKey: "platform.orgManagement.wf2.title",
        defaultTitle: "2. Configure Permissions",
        descKey: "platform.orgManagement.wf2.desc",
        defaultDesc: "Grant read-only or full write capabilities per module in the matrix.",
      },
      {
        titleKey: "platform.orgManagement.wf3.title",
        defaultTitle: "3. Invite & Manage Staff",
        descKey: "platform.orgManagement.wf3.desc",
        defaultDesc: "Add users and update or revoke access anytime with zero downtime.",
      },
    ],
  },

  maps: {
    slug: "maps",
    badgeKey: "platform.maps.badge",
    defaultBadge: "Live Maps & Zones",
    titleKey: "platform.maps.title",
    defaultTitle: "Real-Time Fleet & Zone Mapping.",
    descKey: "platform.maps.desc",
    defaultDesc:
      "Visualize live vehicle locations, battery states, geofence boundaries, and zone rules on an interactive high-performance operational map.",
    ctaKey: "platform.maps.cta",
    defaultCta: "Book a Live Map Demo",
    bannerImages: {
      left: "/images/Trekk-001.png",
      center: "/images/Trekk-014.png",
      right: "/images/assets/glenn-villas-uGMfvu0dYno-unsplash.jpg",
    },
    sectionEyebrowKey: "platform.maps.secEyebrow",
    defaultSectionEyebrow: "Geospatial Operations",
    sectionTitleKey: "platform.maps.secTitle",
    defaultSectionTitle: "See Every Vehicle and Zone Boundary at a Glance",
    sectionDescKey: "platform.maps.secDesc",
    defaultSectionDesc:
      "Monitor fleet distribution, spot rebalancing opportunities, and verify geofence enforcement from a unified map canvas.",
    capabilities: [
      {
        titleKey: "platform.maps.cap1.title",
        defaultTitle: "Live Vehicle Pins & Clustering",
        descKey: "platform.maps.cap1.desc",
        defaultDesc:
          "Track every scooter, e-bike, and EV with instant status indicators for available, in-ride, low-battery, and offline.",
        tagKey: "platform.maps.cap1.tag",
        defaultTag: "Live Tracking",
      },
      {
        titleKey: "platform.maps.cap2.title",
        defaultTitle: "Geofence Layer Overlays",
        descKey: "platform.maps.cap2.desc",
        defaultDesc:
          "Toggle service areas, slow-speed zones, no-go zones, and parking bays directly on the operational map.",
        tagKey: "platform.maps.cap2.tag",
        defaultTag: "Zone Layers",
      },
      {
        titleKey: "platform.maps.cap3.title",
        defaultTitle: "Map Appearance & Provider Settings",
        descKey: "platform.maps.cap3.desc",
        defaultDesc:
          "Configure default map center coordinates, zoom levels, and zone styling preferences per organization.",
        tagKey: "platform.maps.cap3.tag",
        defaultTag: "Map Settings",
      },
      {
        titleKey: "platform.maps.cap4.title",
        defaultTitle: "Rebalancing & Heatmap Readiness",
        descKey: "platform.maps.cap4.desc",
        defaultDesc:
          "Identify high-demand corridors and stranded vehicles quickly to optimize field crew routing.",
        tagKey: "platform.maps.cap4.tag",
        defaultTag: "Rebalancing",
      },
    ],
    workflowTitleKey: "platform.maps.wfTitle",
    defaultWorkflowTitle: "Geospatial Command in Three Steps",
    workflowSteps: [
      {
        titleKey: "platform.maps.wf1.title",
        defaultTitle: "1. Inspect Fleet Density",
        descKey: "platform.maps.wf1.desc",
        defaultDesc: "Open the live map to view active vehicle clusters and battery levels.",
      },
      {
        titleKey: "platform.maps.wf2.title",
        defaultTitle: "2. Overlay Zone Rules",
        descKey: "platform.maps.wf2.desc",
        defaultDesc: "Verify parking hubs, speed limits, and restricted boundaries visually.",
      },
      {
        titleKey: "platform.maps.wf3.title",
        defaultTitle: "3. Dispatch Field Ops",
        descKey: "platform.maps.wf3.desc",
        defaultDesc: "Direct technicians to low-battery or out-of-zone vehicles immediately.",
      },
    ],
  },

  "tickets-support": {
    slug: "tickets-support",
    badgeKey: "platform.ticketsSupport.badge",
    defaultBadge: "Tickets & Support",
    titleKey: "platform.ticketsSupport.title",
    defaultTitle: "Built-In Rider Support & App Settings.",
    descKey: "platform.ticketsSupport.desc",
    defaultDesc:
      "Manage incoming rider support tickets, respond via real-time support chats, and configure mobile app and vehicle event settings from one connected hub.",
    ctaKey: "platform.ticketsSupport.cta",
    defaultCta: "See Support Workflows",
    bannerImages: {
      left: "/images/assets/X9aR5.jpg",
      center: "/images/assets/tourism fleet.jpg",
      right: "/images/assets/sebastian-puskeiler-tOtjBu6WVBo-unsplash.jpg",
    },
    sectionEyebrowKey: "platform.ticketsSupport.secEyebrow",
    defaultSectionEyebrow: "Customer Care & Configuration",
    sectionTitleKey: "platform.ticketsSupport.secTitle",
    defaultSectionTitle: "Keep Riders Moving With Fast Issue Resolution",
    sectionDescKey: "platform.ticketsSupport.secDesc",
    defaultSectionDesc:
      "Connect rider ticket context directly to rides and vehicles while tuning mobile app behavior without app-store delays.",
    capabilities: [
      {
        titleKey: "platform.ticketsSupport.cap1.title",
        defaultTitle: "Support Tickets Queue",
        descKey: "platform.ticketsSupport.cap1.desc",
        defaultDesc:
          "Track, prioritize, and resolve rider-reported vehicle issues, billing questions, and trip disputes.",
        tagKey: "platform.ticketsSupport.cap1.tag",
        defaultTag: "Tickets",
      },
      {
        titleKey: "platform.ticketsSupport.cap2.title",
        defaultTitle: "Live Rider Chats",
        descKey: "platform.ticketsSupport.cap2.desc",
        defaultDesc:
          "Communicate directly with riders in real time to solve unlock or parking questions before trips stall.",
        tagKey: "platform.ticketsSupport.cap2.tag",
        defaultTag: "Live Chat",
      },
      {
        titleKey: "platform.ticketsSupport.cap3.title",
        defaultTitle: "Mobile & Dashboard Settings",
        descKey: "platform.ticketsSupport.cap3.desc",
        defaultDesc:
          "Update mobile app settings, support contact details, and operational defaults centrally.",
        tagKey: "platform.ticketsSupport.cap3.tag",
        defaultTag: "Settings",
      },
      {
        titleKey: "platform.ticketsSupport.cap4.title",
        defaultTitle: "Vehicle & Event Alerts",
        descKey: "platform.ticketsSupport.cap4.desc",
        defaultDesc:
          "Configure automated vehicle event thresholds so support and ops teams stay ahead of hardware alerts.",
        tagKey: "platform.ticketsSupport.cap4.tag",
        defaultTag: "Events",
      },
    ],
    workflowTitleKey: "platform.ticketsSupport.wfTitle",
    defaultWorkflowTitle: "Fast, Context-Rich Rider Support",
    workflowSteps: [
      {
        titleKey: "platform.ticketsSupport.wf1.title",
        defaultTitle: "1. Receive Ticket or Chat",
        descKey: "platform.ticketsSupport.wf1.desc",
        defaultDesc: "Rider reports land directly in the Tickets & Chats queue with trip context.",
      },
      {
        titleKey: "platform.ticketsSupport.wf2.title",
        defaultTitle: "2. Inspect Vehicle & Ride",
        descKey: "platform.ticketsSupport.wf2.desc",
        defaultDesc: "Check live telemetry or transaction status without leaving the dashboard.",
      },
      {
        titleKey: "platform.ticketsSupport.wf3.title",
        defaultTitle: "3. Resolve & Close",
        descKey: "platform.ticketsSupport.wf3.desc",
        defaultDesc: "Reply in chat, trigger a remote unlock if needed, and mark the ticket resolved.",
      },
    ],
  },
};

export const PLATFORM_SLUGS = Object.keys(PLATFORM_PAGES);

