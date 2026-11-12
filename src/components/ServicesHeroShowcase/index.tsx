"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  AnimatePresence,
} from "framer-motion";
import { Wifi, Bike, Zap, Layers, MapPin, Gauge } from "lucide-react";
import { cn } from "@src/lib/utils";

type VehicleData = {
  id: string;
  name: string;
  category: string;
  speed: string;
  src: string;
  alt: string;
  flipHorizontal: boolean;
  scaleModifier?: string;
  badge: {
    title: string;
    sub: string;
    icon: React.ComponentType<{ className?: string }>;
  };
};

// Strict sequence requested by user:
// 1. trekk-home.png (Bike)
// 2. trekk-home-2.png (Trike)
// 3. trekk-home-3.png (Sport EV)
// 4. trekk-home-5.png (Scooter)
const DRIVING_FLEET: VehicleData[] = [
  {
    id: "bike",
    name: "Trekk E-Bike",
    category: "Smart Commute & Campus",
    speed: "25 km/h",
    src: "/images/trekk-home.png",
    alt: "Trekk Connected Electric Bicycle",
    flipHorizontal: true, // faces right in motion
    scaleModifier: "scale-[1.05]",
    badge: {
      title: "E-BIKE 04 · IN MOTION",
      sub: "35 km Range · 98% Battery",
      icon: Bike,
    },
  },
  {
    id: "trike",
    name: "Trekk E-Trike",
    category: "High-Payload Delivery",
    speed: "40 km/h",
    src: "/images/trekk-home-2.png",
    alt: "Trekk Electric Delivery Trike",
    flipHorizontal: false, // natively faces right
    scaleModifier: "scale-[1.0]",
    badge: {
      title: "TRIKE-02 · IN MOTION",
      sub: "Active Delivery Route · 99.2% Uptime",
      icon: MapPin,
    },
  },
  {
    id: "car",
    name: "Trekk Sport EV",
    category: "Connected Fleet Vehicle",
    speed: "85 km/h",
    src: "/images/trekk-home-3.png",
    alt: "Trekk High-Performance Electric Vehicle",
    flipHorizontal: true, // faces right in motion
    scaleModifier: "scale-[1.1]",
    badge: {
      title: "SPORT-EV · IN MOTION",
      sub: "Cloud Telemetry · Sub-second Sync",
      icon: Layers,
    },
  },
  {
    id: "scooter",
    name: "Trekk Kick Scooter",
    category: "Last-Mile Micromobility",
    speed: "20 km/h",
    src: "/images/trekk-home-5.png",
    alt: "Trekk Connected Electric Scooter",
    flipHorizontal: true, // faces right in motion
    scaleModifier: "scale-[1.05]",
    badge: {
      title: "SCOOT-01 · IN MOTION",
      sub: "QR Code Instant Unlock · 99% Uptime",
      icon: Zap,
    },
  },
];

export default function ServicesHeroShowcase() {
  const roadContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(680);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Measure road stage width accurately across all screen sizes
  useEffect(() => {
    if (!roadContainerRef.current) return;
    const updateSize = () => {
      if (roadContainerRef.current) {
        setContainerWidth(roadContainerRef.current.offsetWidth);
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(roadContainerRef.current);
    return () => observer.disconnect();
  }, []);

  // Motion value representing the continuous driving cycle: 0.0 -> 1.0
  const progress = useMotionValue(0);

  // Complete drive-across pass duration (4.8 seconds per vehicle)
  const CYCLE_DURATION_MS = 4800;

  // Real-time animation loop driving the vehicle across
  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const current = progress.get();
    const next = current + delta / CYCLE_DURATION_MS;
    if (next >= 1) {
      progress.set(0);
      setCurrentIndex((prev) => (prev + 1) % DRIVING_FLEET.length);
    } else {
      progress.set(next);
    }
  });

  // Joyride-inspired scroll interaction: scrolling page also drives the vehicle forward/backward along the roadway
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Small nudge to driving progress on scroll
      if (Math.abs(scrollDelta) > 1 && !isPaused) {
        const currentP = progress.get();
        // Positive scroll advances vehicle forward
        const newP = Math.max(0, Math.min(0.99, currentP + scrollDelta * 0.0008));
        progress.set(newP);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPaused, progress]);

  const handleSelect = (idx: number) => {
    progress.set(0);
    setCurrentIndex(idx);
  };

  const currentVehicle =
    DRIVING_FLEET[currentIndex] ?? (DRIVING_FLEET[0] as VehicleData);
  const BadgeIcon = currentVehicle.badge.icon;

  // Responsive vehicle sizing
  const isMobile = containerWidth < 500;
  const isTablet = containerWidth < 768;
  const vehicleWidth = isMobile ? 220 : isTablet ? 300 : 360;

  // Physical Start & End Coordinates:
  // Starts completely off-screen to the left (negative offset of vehicle width + margin)
  // Drives smoothly across the road to completely off-screen to the right
  const startX = -vehicleWidth - 40;
  const endX = containerWidth + 40;

  const x = useTransform(progress, [0, 1], [startX, endX]);

  // Smooth entry and exit opacity transitions
  // Emerges smoothly from left mask, stays solid, soft fade into right mask
  const opacity = useTransform(progress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  // Realistic road suspension bounce (rolling over roadway surface)
  const y = useTransform(progress, (p) => Math.sin(p * Math.PI * 24) * 2.2);

  // Dynamic shadow tracking ground contact
  const shadowScale = useTransform(
    progress,
    [0, 0.1, 0.5, 0.9, 1],
    [0.75, 1, 1.06, 1, 0.75]
  );

  return (
    <div
      className="relative w-full max-w-3xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Interactive Driving Fleet Showcase"
    >
      {/* ================= HUD TOP BAR: TELEMETRY & TOTAL TRIPS ================= */}
      <div className="w-full flex items-center justify-between px-2 sm:px-4 mb-3 z-40">
        {/* Dynamic Telemetry Pill for Active Driving Vehicle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVehicle.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#0B1510]/95 backdrop-blur-md px-3.5 py-2 text-white shadow-xl"
          >
            <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-tight">
                {currentVehicle.badge.title}
              </p>
              <p className="text-[9px] text-[#A0B0A8]">
                {currentVehicle.badge.sub}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Total Trips Card */}
        <div className="rounded-2xl border border-white/20 bg-white/95 dark:bg-[#0E1522]/95 backdrop-blur-md px-3.5 py-2 shadow-2xl text-[#0B1220] dark:text-white min-w-[125px] sm:min-w-[140px] text-right">
          <div className="flex items-center justify-end gap-1.5 text-muted-foreground">
            <Bike className="size-3 text-[#12D18E]" />
            <span className="text-[9px] font-bold uppercase tracking-wider">
              Total Trips
            </span>
          </div>
          <p className="text-base sm:text-lg font-extrabold font-display leading-tight text-[#0B1220] dark:text-white">
            1,024,805
          </p>
          <p className="text-[9px] font-bold text-[#12D18E]">↗ +24.8% vs last month</p>
        </div>
      </div>

      {/* ================= DRIVING ROADWAY STAGE ================= */}
      <div
        ref={roadContainerRef}
        className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-3xl bg-gradient-to-b from-transparent via-[#0B1813]/40 to-[#0B1813]/90 border border-white/5"
      >
        {/* Ambient WiFi Node */}
        <div className="absolute top-4 left-6 z-20 hidden sm:block">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#12D18E]/20 text-[#12D18E] backdrop-blur shadow-md">
            <Wifi className="size-3.5 animate-pulse" />
          </div>
        </div>

        {/* Ambient Overhead Light Cone */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-[#12D18E]/10 to-transparent blur-2xl" />

        {/* Continuous Horizontal Road Baseline across Entire Stage */}
        <div className="absolute bottom-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#12D18E]/50 to-transparent z-10" />
        {/* Roadway Dashed Center Guide */}
        <div className="absolute bottom-11 left-0 right-0 h-[1.5px] opacity-25 bg-[repeating-linear-gradient(90deg,#12D18E_0,#12D18E_24px,transparent_24px,transparent_48px)] z-10" />

        {/* Roadside Waypoint Milestone Pins (Joyride style) */}
        <div className="absolute bottom-14 left-1/4 size-1.5 rounded-full bg-[#12D18E]/40 z-10 hidden sm:block" />
        <div className="absolute bottom-14 left-2/4 size-1.5 rounded-full bg-[#12D18E]/60 z-10 hidden sm:block" />
        <div className="absolute bottom-14 left-3/4 size-1.5 rounded-full bg-[#12D18E]/40 z-10 hidden sm:block" />

        {/* Left Gradient Edge Mask for Smooth Entrance onto Highway */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#0B1813] via-[#0B1813]/85 to-transparent z-30" />

        {/* Right Gradient Edge Mask for Smooth Exit into the Distance */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#0B1813] via-[#0B1813]/85 to-transparent z-30" />

        {/* THE VEHICLE IN ACTUAL PHYSICAL DRIVING MOTION FROM LEFT TO RIGHT */}
        <motion.div
          style={{ x, opacity, y }}
          className="absolute bottom-8 left-0 flex flex-col items-center justify-center cursor-pointer pointer-events-auto z-20"
        >
          {/* Vehicle Body with Directional Orientation and Shadows */}
          <div
            className={cn(
              "relative flex items-center justify-center transition-transform duration-150",
              isMobile
                ? "w-[210px] h-[155px]"
                : isTablet
                ? "w-[290px] h-[210px]"
                : "w-[360px] h-[260px]",
              currentVehicle.flipHorizontal ? "-scale-x-100" : "scale-x-100",
              currentVehicle.scaleModifier || ""
            )}
          >
            <Image
              src={currentVehicle.src}
              alt={currentVehicle.alt}
              fill
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
              priority
            />

            {/* Realistic Contact Ground Shadow Moving with Wheels */}
            <motion.div
              style={{ scaleX: shadowScale }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/65 blur-md rounded-full pointer-events-none"
            />
          </div>

          {/* Floating Vehicle Status & Speed Badge (Kept Upright) */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1510]/90 backdrop-blur px-3 py-1 text-xs text-white/90 shadow-lg -mt-1 sm:mt-1">
            <Gauge className="size-3.5 text-[#12D18E]" />
            <span className="font-bold text-[11px] sm:text-xs">{currentVehicle.name}</span>
            <span className="text-white/30">·</span>
            <span className="text-[#12D18E] font-semibold text-[11px] sm:text-xs">
              {currentVehicle.speed}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ================= CONTROLS & SEQUENCE INDICATORS ================= */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 px-2 z-30">
        {/* Driving Status Indicator */}
        <div className="flex items-center gap-2 text-xs text-[#8FA39A]">
          <span
            className={cn(
              "size-2 rounded-full transition-colors duration-300",
              isPaused ? "bg-[#FFB020]" : "bg-[#12D18E] animate-pulse"
            )}
          />
          <span className="text-[11px]">
            {isPaused ? "Paused · Inspecting vehicle" : "Live fleet in motion · Hover/touch to pause"}
          </span>
        </div>

        {/* 4 Interactive Fleet Sequence Pills */}
        <div className="flex items-center gap-2">
          {DRIVING_FLEET.map((vehicle, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={vehicle.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Switch to ${vehicle.name}`}
                className={cn(
                  "px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 border flex items-center gap-1.5",
                  isActive
                    ? "bg-[#12D18E] text-[#0B1220] border-[#12D18E] font-bold shadow-md shadow-[#12D18E]/25"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                <span>{`0${idx + 1}`}</span>
                <span className="hidden sm:inline">{vehicle.name.replace("Trekk ", "")}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
