"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { DASHBOARD_SCREENS, MOBILE_SCREENS } from "@src/constants/showcase";
import { cn } from "@src/lib/utils";

export default function Showcase() {
  const [activeDashboardIndex, setActiveDashboardIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const nextDashboard = useCallback(() => {
    setActiveDashboardIndex((prev) => (prev + 1) % DASHBOARD_SCREENS.length);
  }, []);

  const nextMobile = useCallback(() => {
    setActiveMobileIndex((prev) => (prev + 1) % MOBILE_SCREENS.length);
  }, []);

  useEffect(() => {
    const dashInterval = setInterval(nextDashboard, 5000);
    const mobileInterval = setInterval(nextMobile, 4500);
    return () => {
      clearInterval(dashInterval);
      clearInterval(mobileInterval);
    };
  }, [nextDashboard, nextMobile]);

  return (
    <section className="py-20 bg-[#F0FBF5]/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="eyebrow">Platform Showcase</span>
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Experience the Complete Ecosystem
          </h2>
          <p className="text-base text-muted-foreground">
            Explore both operator command centers and rider applications built specifically for African connectivity and urban transit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Dashboard Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E6BFF]">
                  Command Center
                </span>
                <h3 className="text-xl font-bold font-display">
                  Operator Web Dashboard
                </h3>
              </div>
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {DASHBOARD_SCREENS.map((screen, idx) => (
                  <button
                    key={screen.image}
                    type="button"
                    onClick={() => setActiveDashboardIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={cn(
                      "size-2.5 rounded-full transition-all",
                      activeDashboardIndex === idx
                        ? "w-6 bg-[#12D18E]"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Laptop Mockup Window */}
            <div className="relative rounded-2xl border border-border bg-white shadow-2xl overflow-hidden aspect-[16/10] dark:bg-[#0E1522]">
              {/* Browser Header Bar */}
              <div className="h-8 bg-muted/60 border-b border-border flex items-center px-4 gap-2">
                <div className="size-2.5 rounded-full bg-red-400" />
                <div className="size-2.5 rounded-full bg-amber-400" />
                <div className="size-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">
                  https://dashboard.trekkmobility.com
                </span>
              </div>
              <div className="relative w-full h-[calc(100%-2rem)]">
                {DASHBOARD_SCREENS.map((screen, idx) => (
                  <div
                    key={screen.image}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      activeDashboardIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      fill
                      className="object-contain p-2"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Rider App (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
                  Rider Experience
                </span>
                <h3 className="text-xl font-bold font-display">
                  iOS & Android Mobile App
                </h3>
              </div>
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {MOBILE_SCREENS.map((screen, idx) => (
                  <button
                    key={screen.image}
                    type="button"
                    onClick={() => setActiveMobileIndex(idx)}
                    aria-label={`Mobile slide ${idx + 1}`}
                    className={cn(
                      "size-2.5 rounded-full transition-all",
                      activeMobileIndex === idx
                        ? "w-6 bg-[#2E6BFF]"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Phone Mockup Frame */}
            <div className="relative w-full max-w-[280px] rounded-[2.5rem] border-[8px] border-[#0B1220] bg-black shadow-2xl overflow-hidden aspect-[9/19]">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0B1220] rounded-full z-20" />
              <div className="relative w-full h-full">
                {MOBILE_SCREENS.map((screen, idx) => (
                  <div
                    key={screen.image}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      activeMobileIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

