import React from "react";
import { Check, X } from "lucide-react";

const BUILD_VS_BUY = [
  { build: "Months/years of development", trekk: "Launch in weeks" },
  { build: "Large development team", trekk: "Ready technology" },
  { build: "High upfront cost", trekk: "Predictable subscription" },
  { build: "Build IoT integrations", trekk: "Ready integrations" },
  { build: "Build payment infrastructure", trekk: "Payment integrations" },
  { build: "Build rider app", trekk: "Branded rider app" },
  { build: "Build fleet dashboard", trekk: "Ready dashboard" },
  { build: "Hire technical support", trekk: "24/7 Trekk support" },
  { build: "Maintain everything", trekk: "Continuous platform development" },
  { build: "Limited market experience", trekk: "Mobility technology expertise" },
];

export default function BuildVsBuy() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="eyebrow">Why Not Build It Yourself?</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
          Building Mobility Technology Is Expensive.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Developing your own platform means building and maintaining iOS and Android apps, backend infrastructure, fleet management, IoT integrations, payment systems, maps, geofencing, customer management, analytics, operator applications, APIs, security and support infrastructure — and then you still need to maintain everything. With Trekk, you focus on your vehicles, customers and market. We power the technology.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-white dark:bg-[#0E1522] shadow-sm">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40">
          <div className="py-4 px-6 font-display text-sm font-bold text-muted-foreground">
            Build Yourself
          </div>
          <div className="py-4 px-6 font-display text-sm font-bold text-[#12D18E] bg-[#12D18E]/5">
            Trekk
          </div>
        </div>

        <div className="divide-y divide-border/50">
          {BUILD_VS_BUY.map((row) => (
            <div key={row.build} className="grid grid-cols-2">
              <div className="py-3.5 px-6 flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <X className="size-4 shrink-0 text-rose-500/80" />
                <span>{row.build}</span>
              </div>
              <div className="py-3.5 px-6 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-foreground bg-[#12D18E]/5">
                <Check className="size-4 shrink-0 text-[#12D18E]" />
                <span>{row.trekk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

