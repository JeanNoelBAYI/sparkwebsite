"use client";

import React, { useState } from "react";
import type { CurrencyCode } from "@src/types/calculator";
import PricingHeader from "./Header";
import PricingPlans from "./Plans";
import PricingRoiBanner from "./RoiBanner";
import PerVehiclePricing from "./PerVehiclePricing";
import FeatureComparison from "./FeatureComparison";
import CurrencyPromise from "./CurrencyPromise";
import BuildVsBuy from "./BuildVsBuy";

export default function PricingSections() {
  const [currency, setCurrency] = useState<CurrencyCode>("NGN");

  return (
    <div className="space-y-20 py-16">
      <PricingHeader currency={currency} onCurrencyChange={setCurrency} />
      <PricingPlans currency={currency} />
      <PricingRoiBanner />
      <PerVehiclePricing currency={currency} />
      <FeatureComparison currency={currency} />
      <CurrencyPromise />
      <BuildVsBuy />
    </div>
  );
}
