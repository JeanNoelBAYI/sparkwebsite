"use client";

import React, { useState } from "react";
import type { CurrencyCode } from "@src/types/calculator";
import PricingHeader from "./Header";
import PricingPlans from "./Plans";
import CurrencyPromise from "./CurrencyPromise";

export default function PricingSections() {
  const [currency, setCurrency] = useState<CurrencyCode>("NGN");

  return (
    <div className="space-y-20 py-16">
      <PricingHeader currency={currency} onCurrencyChange={setCurrency} />
      <PricingPlans currency={currency} />
      <CurrencyPromise />
    </div>
  );
}

