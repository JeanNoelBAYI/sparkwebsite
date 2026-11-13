"use client";

import React from "react";
import {
  ArrowRight,
  Bike,
  Car,
  Compass,
  MapPin,
  Navigation,
  Repeat,
  Ship,
  Sparkles,
  Truck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import {
  INDUSTRY_OPERATING_MODELS,
  INDUSTRY_VEHICLE_TYPES,
} from "@src/constants/industryPages";

const VEHICLE_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  scooter: Zap,
  moped: Compass,
  bike: Bike,
  car: Car,
  truck: Truck,
  ship: Ship,
  sparkles: Sparkles,
};

const OPERATING_MODEL_ICONS = [
  MapPin,
  Navigation,
  Compass,
  Users,
  Wallet,
  Repeat,
];

export default function VehicleAndModels() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
      {/* Left Card: Suited for any vehicle type */}
      <div className="lg:col-span-5 rounded-3xl border border-border bg-white p-7 sm:p-8 shadow-sm dark:bg-[#0E1522]">
        <h3 className="font-display text-center text-xl font-bold text-foreground mb-7">
          {t("industries.common.suitedVehicles", "Suited for any vehicle type")}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {INDUSTRY_VEHICLE_TYPES.map((vt) => {
            const IconComp = VEHICLE_ICON_MAP[vt.icon] || Car;
            return (
              <div
                key={vt.key}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                  <IconComp className="size-5" />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">
                  {t(vt.key, vt.defaultLabel)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Arrow */}
      <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
        <ArrowRight className="size-7 text-muted-foreground/60" />
      </div>

      {/* Right Dark Card: Suited for any operating model */}
      <div className="lg:col-span-6 rounded-3xl bg-[#0B231B] p-7 sm:p-8 text-white shadow-xl">
        <h3 className="font-display text-center text-xl font-bold text-white mb-7">
          {t(
            "industries.common.suitedModels",
            "Suited for any operating model"
          )}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {INDUSTRY_OPERATING_MODELS.map((model, idx) => {
            const IconComp =
              OPERATING_MODEL_ICONS[idx % OPERATING_MODEL_ICONS.length] ?? MapPin;
            return (
              <div
                key={model.key}
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-5 text-center text-slate-900 shadow-sm"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#12D18E]/15 text-[#12D18E]">
                  <IconComp className="size-5" />
                </div>
                <span className="text-xs font-semibold leading-snug text-slate-800">
                  {t(model.key, model.defaultLabel)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

