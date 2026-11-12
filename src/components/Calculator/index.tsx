"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CURRENCY_DEFAULTS,
  CURRENCY_SYMBOLS,
  DEFAULT_BUDGETS,
  BUDGET_CHIPS,
  calculateBudgetAllocation,
  calculateFleetEconomics,
} from "@src/utils/calculator";
import type { CurrencyCode, CalculatorFormState } from "@src/types/calculator";
import { formatCurrency, compactFormat, cn } from "@src/lib/utils";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import CustomButton from "@src/components/CustomButton";
import Dropdown from "@src/components/Dropdown";
import { Input } from "@src/components/ui/input";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Printer,
  Plus,
  Minus,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CURRENCIES: CurrencyCode[] = ["NGN", "USD", "GHS", "XOF", "EUR"];

export default function Calculator() {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState<CurrencyCode>("NGN");
  const [budget, setBudget] = useState<number>(DEFAULT_BUDGETS.NGN);
  const [horizon, setHorizon] = useState<number>(24);
  const [demandPace, setDemandPace] = useState<number>(0.6); // 0.4, 0.6, 1.0
  const [showFaq, setShowFaq] = useState<boolean>(false);
  const [showCustomDetails, setShowCustomDetails] = useState<boolean>(false);

  // Custom adjustable parameters inside the accordion
  const [costOverride, setCostOverride] = useState<number>(
    CURRENCY_DEFAULTS.NGN.cost
  );
  const [fareOverride, setFareOverride] = useState<number>(
    CURRENCY_DEFAULTS.NGN.fare
  );
  const [opexOverride, setOpexOverride] = useState<number>(
    CURRENCY_DEFAULTS.NGN.opex
  );

  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setBudget(DEFAULT_BUDGETS[newCurrency]);
    const defaults = CURRENCY_DEFAULTS[newCurrency];
    setCostOverride(defaults.cost);
    setFareOverride(defaults.fare);
    setOpexOverride(defaults.opex);
  };

  const handlePresetBudget = (val: number) => {
    setBudget(val);
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 1. Calculate Budget Allocation
  const allocation = useMemo(() => {
    return calculateBudgetAllocation(budget, currency, costOverride);
  }, [budget, currency, costOverride]);

  // 2. Calculate Economics based on derived fleet size
  const formState: CalculatorFormState = useMemo(() => {
    return {
      currency,
      scooters: allocation.fleetSize,
      cost: costOverride,
      rides: 16.8, // Reference reported rides per day
      fare: fareOverride,
      opex: opexOverride,
      lifespan: 24,
      horizon,
    };
  }, [currency, allocation.fleetSize, costOverride, fareOverride, opexOverride, horizon]);

  const economics = useMemo(() => {
    return calculateFleetEconomics(formState, demandPace);
  }, [formState, demandPace]);

  // Monthly operating cash (average)
  const monthlyNetCash = economics.monthlyNetProfit;
  const firstYearRevenue = economics.monthlyRevenue * 12;
  const firstYearOperatingCash = monthlyNetCash * 12;
  const netCashReturn = monthlyNetCash * horizon - budget;
  const roiPercent = budget > 0 ? Math.round((netCashReturn / budget) * 100) : 0;
  const breakEvenRidesPerDay =
    fareOverride > 0
      ? (
          (economics.monthlyOpex + economics.monthlyTrekkFee) /
          (allocation.fleetSize * fareOverride * 30)
        ).toFixed(2)
      : "0";

  // Chart data
  const chartData = useMemo(() => {
    const data = [
      {
        name: "Start",
        CumulativeCash: -budget,
      },
    ];
    let cumulative = -budget;
    for (let m = 1; m <= horizon; m++) {
      cumulative += monthlyNetCash;
      if (m === 6 || m === 12 || m === 18 || m === horizon) {
        data.push({
          name: `M${m}`,
          CumulativeCash: cumulative,
        });
      }
    }
    return data;
  }, [budget, horizon, monthlyNetCash]);

  // Download Scenario as CSV
  const handleDownloadScenario = () => {
    const rows = [
      ["Metric", "Value"],
      ["Currency", currency],
      ["Total Budget", budget],
      ["Estimated Fleet Size", allocation.fleetSize],
      ["Demand Pace", `${Math.round(demandPace * 100)}% of reference`],
      ["Planning Horizon (Months)", horizon],
      ["Average Monthly Operating Cash", monthlyNetCash],
      ["Project ROI (%)", `${roiPercent}%`],
      ["Estimated Payback (Months)", economics.paybackMonths],
      ["Scooter Purchases Cost", allocation.scooterPurchases],
      ["Delivery & Duties", allocation.deliveryDuties],
      ["Charging Equipment", allocation.chargingEquipment],
      ["Technology Setup", allocation.technologySetup],
      ["Other Launch Costs", allocation.otherLaunchCosts],
      ["Cash Reserve & Rounding", allocation.cashReserve],
      ["First Year Revenue", firstYearRevenue],
      ["First Year Operating Cash", firstYearOperatingCash],
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `trekk_mobility_budget_scenario_${currency}_${budget}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sym = CURRENCY_SYMBOLS[currency];
  const chips = BUDGET_CHIPS[currency] || BUDGET_CHIPS.NGN;

  return (
    <div className="space-y-16">
      {/* ================= HERO: START WITH A BUDGET ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0B1813] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[550px] rounded-full bg-[#12D18E]/15 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[450px] rounded-full bg-[#2E6BFF]/10 blur-[130px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12D18E]">
              <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
              <span>{t("calc.eyebrow", "Fleet Economics & ROI")}</span>
            </div>

            <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-white leading-tight">
              {t("calc.h1", "Fleet Launch & ROI Calculator")}
            </h1>

            <p className="text-base text-[#8A98A0] sm:text-lg max-w-xl leading-relaxed">
              {t(
                "calc.lede",
                "Model your fleet budget, unit economics, monthly platform fees, and projected payback period in minutes."
              )}
            </p>

            {/* Breadcrumb Steps */}
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#8A98A0]">
              <span className="text-white">Your budget</span>
              <span>&rarr;</span>
              <span className="text-[#12D18E]">A possible fleet</span>
              <span>&rarr;</span>
              <span>Projected returns</span>
            </div>
          </div>

          {/* Right Card: Budget Input */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FBFDF8] text-[#0B1220] p-7 sm:p-9 shadow-2xl space-y-5 border border-white/20">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                ONE NUMBER TO GET STARTED
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                What would you like to invest?
              </h3>
            </div>

            {/* Unified Sleek Currency Selector + Big Budget Input */}
            <div className="group flex items-center rounded-2xl border border-[#DDE5E0] bg-white p-2.5 sm:p-3.5 shadow-sm transition-all duration-200 hover:border-gray-300 focus-within:border-[#12D18E] focus-within:ring-4 focus-within:ring-[#12D18E]/15">
              <div className="border-r border-[#E2EBE5] pr-2.5 mr-3">
                <Dropdown
                  options={CURRENCIES.map((c) => ({ value: c, label: c }))}
                  value={currency}
                  onChange={(val) => handleCurrencyChange(val as CurrencyCode)}
                  variant="clean"
                  size="sm"
                  triggerClassName="h-9 px-2 font-bold text-sm text-[#0B1220] hover:text-[#12D18E] gap-1.5 focus:ring-0"
                />
              </div>
              <input
                type="number"
                min={1000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value) || 0)}
                placeholder="25000000"
                className="w-full bg-transparent text-2xl sm:text-3xl font-extrabold font-display text-[#0B1220] tracking-tight border-0 outline-none focus:outline-none focus:ring-0 p-0"
              />
            </div>

            {/* Preset Budget Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {chips.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handlePresetBudget(chip.value)}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all duration-150",
                    budget === chip.value
                      ? "bg-[#12D18E] text-[#0B1220] shadow-sm font-extrabold scale-[1.02]"
                      : "bg-[#F0F5F2] text-[#4F6057] hover:bg-[#E3EDE8] hover:text-[#0B1220]"
                  )}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Illustrative scooter-sharing plan &middot; {currency} reference market. All costs are pre-filled estimates. You can change every assumption below.
            </p>

            <CustomButton
              type="button"
              onClick={scrollToResults}
              variant="dark"
              size="lg"
              rounded="xl"
              withArrow
              arrowType="up-right"
              className="w-full h-14 bg-[#112922] text-white hover:bg-[#18362d] font-bold text-base shadow-xl"
            >
              Explore my budget
            </CustomButton>

            <p className="text-center text-[10px] text-muted-foreground">
              No signup. No commitment. Calculations stay on your device.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RESULTS OVERVIEW ================= */}
      <section ref={resultsRef} className="space-y-6 pt-4">
        {/* Header + Horizon Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
              Here&apos;s one way to put it to work.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              An estimated starting plan, not a supplier quotation or promised return.
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-muted-foreground font-medium">
              Explore over
            </span>
            <Dropdown
              options={[
                { value: "12", label: "12 months" },
                { value: "24", label: "24 months" },
                { value: "36", label: "36 months" },
                { value: "48", label: "48 months" },
                { value: "60", label: "60 months" },
              ]}
              value={String(horizon)}
              onChange={(val) => setHorizon(Number(val))}
              variant="pill"
              size="sm"
              triggerClassName="h-8 px-3 font-bold text-xs"
            />
          </div>
        </div>

        {/* 4 Hero KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Estimated Fleet (Highlighted Light Green) */}
          <div className="rounded-3xl border border-[#12D18E]/40 bg-[#D7F3C9]/70 dark:bg-[#102A23] p-6 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-[#1E5C3C] dark:text-[#12D18E] block">
              Estimated fleet
            </span>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1813] dark:text-white">
              {allocation.fleetSize} scooters
            </p>
            <p className="text-[11px] text-[#2C4A38] dark:text-[#8A98A0] leading-tight pt-1">
              Scooters, with launch costs and cash reserve funded
            </p>
          </div>

          {/* Card 2: Operating Cash */}
          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-6 shadow-sm space-y-2">
            <span className="text-xs font-medium text-muted-foreground block">
              Average monthly operating cash
            </span>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              {compactFormat(monthlyNetCash, currency)}
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight pt-1">
              Average of first 12 months, including closures; after modeled costs
            </p>
          </div>

          {/* Card 3: Project ROI */}
          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-6 shadow-sm space-y-2">
            <span className="text-xs font-medium text-muted-foreground block">
              {horizon}-month project ROI
            </span>
            <p
              className={cn(
                "font-display text-3xl sm:text-4xl font-extrabold",
                roiPercent >= 0 ? "text-[#12D18E]" : "text-amber-600"
              )}
            >
              {roiPercent > 0 ? `+${roiPercent}%` : `${roiPercent}%`}
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight pt-1">
              Net cash return on your entire budget; not annualised
            </p>
          </div>

          {/* Card 4: Payback */}
          <div className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-6 shadow-sm space-y-2">
            <span className="text-xs font-medium text-muted-foreground block">
              Estimated cash payback
            </span>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              {economics.paybackMonths > horizon
                ? "Not reached"
                : `${economics.paybackMonths} mo`}
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight pt-1">
              {economics.paybackMonths > horizon
                ? `Not recovered within ${horizon} months`
                : `Recovers capital in month ${Math.ceil(economics.paybackMonths)}`}
            </p>
          </div>
        </div>

        {/* Warning / Notification Banner */}
        <div className="rounded-2xl border border-amber-200 bg-[#FFF7ED] p-4 text-xs text-amber-900 dark:bg-amber-950/30 dark:border-amber-900/40 dark:text-amber-200 flex items-start gap-3">
          <AlertTriangle className="size-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            {economics.paybackMonths > horizon
              ? `The model does not recover your full budget within ${horizon} months at this demand and cost level. Monthly platform costs use the higher of per-scooter fees and your minimum-fee allowance. Pricing must be confirmed.`
              : `At ${Math.round(demandPace * 100)}% demand pace, your fleet reaches full capital break-even within ${economics.paybackMonths} months. Monthly costs scale with fleet size.`}
          </p>
        </div>
      </section>

      {/* ================= ALLOCATION & STARTING MODEL ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Where your budget goes (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-border bg-white p-7 sm:p-8 shadow-sm dark:bg-[#0E1522] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Where your budget goes
                </h3>
                <p className="text-xs text-muted-foreground">
                  Fund the foundations first. Put the balance into vehicles and a reserve.
                </p>
              </div>
              <span className="rounded-full bg-[#F0F5F2] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6057]">
                AUTO-ALLOCATED
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="h-3 w-full rounded-full bg-[#E5EBE7] overflow-hidden flex">
              <div
                style={{
                  width: `${(allocation.scooterPurchases / budget) * 100}%`,
                }}
                className="h-full bg-[#1A382A]"
                title="Scooter Purchases"
              />
              <div
                style={{
                  width: `${(allocation.deliveryDuties / budget) * 100}%`,
                }}
                className="h-full bg-[#2C5E45]"
                title="Delivery & Duties"
              />
              <div
                style={{
                  width: `${(allocation.technologySetup / budget) * 100}%`,
                }}
                className="h-full bg-[#12D18E]"
                title="Technology Setup"
              />
              <div
                style={{
                  width: `${(allocation.chargingEquipment / budget) * 100}%`,
                }}
                className="h-full bg-[#91E8C2]"
                title="Charging Equipment"
              />
              <div
                style={{
                  width: `${(allocation.otherLaunchCosts / budget) * 100}%`,
                }}
                className="h-full bg-[#C2F3DD]"
                title="Other Launch Costs"
              />
              <div
                style={{
                  width: `${(allocation.cashReserve / budget) * 100}%`,
                }}
                className="h-full bg-[#E8F8F0]"
                title="Cash Reserve"
              />
            </div>

            {/* Line items Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2 text-xs">
              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#1A382A]" />
                  <span>Scooter purchases</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.scooterPurchases, currency)}
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#2C5E45]" />
                  <span>Delivery & duties</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.deliveryDuties, currency)}
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#91E8C2]" />
                  <span>Charging equipment</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.chargingEquipment, currency)}
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#12D18E]" />
                  <span>Technology setup</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.technologySetup, currency)}
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#C2F3DD]" />
                  <span>Other launch costs</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.otherLaunchCosts, currency)}
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                  <span className="size-2 rounded-full bg-[#E8F8F0]" />
                  <span>Cash reserve & rounding</span>
                </span>
                <span className="font-bold text-foreground block">
                  {formatCurrency(allocation.cashReserve, currency)}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4 flex items-center justify-between text-xs">
            <span className="font-medium text-muted-foreground">Total allocated</span>
            <span className="font-display font-bold text-base text-foreground">
              {formatCurrency(allocation.totalAllocated, currency)}
            </span>
          </div>
        </div>

        {/* Right: Your starting model (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl border border-border bg-[#F5F8F5] dark:bg-[#0E1522] p-7 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="rounded-full bg-white dark:bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              YOUR STARTING MODEL
            </span>

            {/* Scooter Model Graphic Image (Large & Prominent) */}
            <div className="relative my-4 aspect-[4/3] sm:aspect-[1/1] w-full max-w-[340px] mx-auto flex items-center justify-center min-h-[220px]">
              <Image
                src="/images/signup-img.png"
                alt="Trekk Mobility Starting Fleet Model"
                fill
                className="object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            <h3 className="font-display text-xl font-bold text-foreground">
              Your brand. A practical first fleet.
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              The reference is shared electric scooters. E-bikes, mopeds, and commercial cargo fleets require different procurement and operating parameters.
            </p>
          </div>

          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12D18E] hover:underline"
            >
              <span>Explore another vehicle type</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DEMAND PLANNING SELECTOR ================= */}
      <section className="rounded-3xl bg-[#0B1813] text-white p-7 sm:p-10 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold font-display text-white">
              How much demand should we plan for?
            </h3>
            <p className="text-xs text-[#8A98A0]">
              Choose a share of Scoot Easy&apos;s reported average ride activity.
            </p>
          </div>

          <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#12D18E]">
            {Math.round(demandPace * 100)}% OF REFERENCE
          </span>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Option 1: 40% */}
          <button
            type="button"
            onClick={() => setDemandPace(0.4)}
            className={cn(
              "rounded-2xl p-5 text-left border transition",
              demandPace === 0.4
                ? "border-[#12D18E] bg-[#D7F3C9] text-[#0B1813]"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10"
            )}
          >
            <h4 className="font-display font-bold text-base">A cautious start</h4>
            <p className="text-xs opacity-80 mt-1">40% of reference activity</p>
          </button>

          {/* Option 2: 60% (Default) */}
          <button
            type="button"
            onClick={() => setDemandPace(0.6)}
            className={cn(
              "rounded-2xl p-5 text-left border transition",
              demandPace === 0.6
                ? "border-[#12D18E] bg-[#D7F3C9] text-[#0B1813]"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10"
            )}
          >
            <h4 className="font-display font-bold text-base">A planning case</h4>
            <p className="text-xs opacity-80 mt-1">60% of reference activity</p>
          </button>

          {/* Option 3: 100% */}
          <button
            type="button"
            onClick={() => setDemandPace(1.0)}
            className={cn(
              "rounded-2xl p-5 text-left border transition",
              demandPace === 1.0
                ? "border-[#12D18E] bg-[#D7F3C9] text-[#0B1813]"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10"
            )}
          >
            <h4 className="font-display font-bold text-base">Reference pace</h4>
            <p className="text-xs opacity-80 mt-1">100% &ndash; full capacity</p>
          </button>
        </div>

        <p className="text-[11px] text-[#8A98A0] leading-relaxed">
          Selected pace: approximately {(16.8 * demandPace * 30).toFixed(0)} rides per scooter per open month ({(16.8 * demandPace).toFixed(1)}/day); before launch ramp. 10 open operating months/year; fixed costs continue in closures.
        </p>
      </section>

      {/* ================= VISUAL ECONOMICS (2 COLS) ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Watch capital work over time (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-7 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-foreground">
              Watch capital work over time
            </h3>
            <span className="rounded-full bg-[#F0F5F2] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6057]">
              CUMULATIVE CASH
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="budgetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#12D18E" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#12D18E" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis
                  tickFormatter={(val) => compactFormat(val, currency)}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  formatter={(val: number) => [
                    formatCurrency(val, currency),
                    "Cumulative Cash",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="CumulativeCash"
                  stroke="#12D18E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#budgetGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[11px] text-muted-foreground pt-2">
            Month 0 deducts your full budget ({formatCurrency(budget, currency)}). The final month includes the modeled release of your cash reserve buffer and any entered residual vehicle value.
          </p>
        </div>

        {/* Right Column: A closer look at the economics (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-7 sm:p-8 shadow-sm space-y-5">
          <h3 className="font-display text-xl font-bold text-foreground">
            A closer look at the economics
          </h3>

          <div className="space-y-4 divide-y divide-border/60 text-xs">
            <div className="flex items-center justify-between pt-2">
              <span className="text-muted-foreground">First-year revenue</span>
              <span className="font-bold text-foreground font-display text-sm">
                {compactFormat(firstYearRevenue, currency)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-muted-foreground">First-year operating cash</span>
              <span className="font-bold text-foreground font-display text-sm">
                {compactFormat(firstYearOperatingCash, currency)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-muted-foreground">{horizon}-month net cash return</span>
              <span
                className={cn(
                  "font-bold font-display text-sm",
                  netCashReturn >= 0 ? "text-[#12D18E]" : "text-amber-600"
                )}
              >
                {compactFormat(netCashReturn, currency)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-muted-foreground">Monthly platform allowance</span>
              <span className="font-bold text-foreground font-display text-sm">
                {formatCurrency(economics.monthlyTrekkFee, currency)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-muted-foreground">
                Cash break-even rides / scooter / open day
              </span>
              <span className="font-bold text-foreground font-display text-sm">
                {breakEvenRidesPerDay}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed pt-2">
            Break-even is before tax and initial capital recovery. Revenue is not profit. Returns are unlevered project estimates based on live operator benchmarks.
          </p>
        </div>
      </section>

      {/* ================= REAL-WORLD STARTING POINT ================= */}
      <section className="rounded-3xl border border-border bg-[#FBFDF8] dark:bg-[#0E1522] p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
            THE REAL-WORLD STARTING POINT
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            A reference you can see.
          </h3>
          <p className="text-xs text-muted-foreground mt-1 max-w-xl">
            Scoot Easy at Afe Babalola University, Nigeria. Management-reported results over approximately two months following its launch.
          </p>
        </div>

        {/* 3 Metric Stat Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2 border-y border-border">
          <div>
            <p className="font-display text-3xl font-extrabold text-foreground">
              15
            </p>
            <span className="text-xs text-muted-foreground">scooters</span>
          </div>

          <div>
            <p className="font-display text-3xl font-extrabold text-foreground">
              15,100
            </p>
            <span className="text-xs text-muted-foreground">reported rides</span>
          </div>

          <div>
            <p className="font-display text-3xl font-extrabold text-[#12D18E]">
              ₦16.6m
            </p>
            <span className="text-xs text-muted-foreground">reported revenue</span>
          </div>
        </div>

        <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
          <p>
            We use this to anchor ride activity and purchase cost &mdash; not to assume every location will perform the same way. Reference averages: approximately 503 rides and ₦553,333 revenue per scooter per month, and ₦1,099 per ride. Vehicle purchase reference: $709 per scooter, converted at historical rates supplied for that purchase.
          </p>

          <button
            type="button"
            onClick={() => setShowFaq((prev) => !prev)}
            className="font-bold text-foreground hover:text-[#12D18E] flex items-center gap-1 transition"
          >
            <span>{showFaq ? "▼" : "▶"} What is reported, and what is assumed?</span>
          </button>

          {showFaq && (
            <div className="rounded-2xl bg-white dark:bg-black/30 p-5 space-y-2 border border-border animate-in fade-in duration-200">
              <p>
                <strong>Reported:</strong> Ride count, total gross revenue, student wallet balances, and trip timestamps verified via the Trekk Mobility operator dashboard.
              </p>
              <p>
                <strong>Assumed in model:</strong> Operating downtime (10 active months/year to account for university vacations), routine maintenance schedules, standard battery charging kilowatt-hour costs, and VAT compliance.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= EDITABLE ASSUMPTIONS ACCORDION ================= */}
      <section className="rounded-3xl border border-border bg-white dark:bg-[#0E1522] p-7 sm:p-8 shadow-sm space-y-6">
        <button
          type="button"
          onClick={() => setShowCustomDetails((prev) => !prev)}
          className="flex w-full items-center justify-between text-left"
        >
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
              We filled in the details. Make them yours.
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Review and customize vehicle purchase cost, Trekk software pricing, fare tariffs, and operating allowances.
            </p>
          </div>
          <div className="size-8 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0">
            {showCustomDetails ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </div>
        </button>

        {showCustomDetails && (
          <div className="pt-4 border-t border-border space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  Purchase Cost / Scooter ({sym})
                </label>
                <Input
                  type="number"
                  value={costOverride}
                  onChange={(e) => setCostOverride(Number(e.target.value) || 0)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  Average Ride Fare ({sym})
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={fareOverride}
                  onChange={(e) => setFareOverride(Number(e.target.value) || 0)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  Monthly OPEX / Vehicle ({sym})
                </label>
                <Input
                  type="number"
                  value={opexOverride}
                  onChange={(e) => setOpexOverride(Number(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons: Download Scenario & Print */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <CustomButton
            variant="outline"
            size="sm"
            rounded="xl"
            leftIcon={<Download className="size-3.5 text-muted-foreground" />}
            onClick={handleDownloadScenario}
            className="text-xs font-semibold hover:border-[#12D18E]"
          >
            Download my scenario
          </CustomButton>

          <CustomButton
            variant="outline"
            size="sm"
            rounded="xl"
            leftIcon={<Printer className="size-3.5 text-muted-foreground" />}
            onClick={() => window.print()}
            className="text-xs font-semibold hover:border-[#12D18E]"
          >
            Print / save PDF
          </CustomButton>
        </div>
      </section>

      {/* ================= NEXT STEP CONVERSATION CTA (BRIGHT GREEN) ================= */}
      <section className="rounded-3xl bg-[#12D18E] text-[#0B1220] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1220]">
            Make the next step a real conversation.
          </h3>
          <p className="text-xs sm:text-sm text-[#0B1813]/85 leading-relaxed">
            Your budget is a starting point. Let&apos;s validate the vehicles, location, commercial terms and operating plan behind it.
          </p>
        </div>

        <Link href={`/contact?budget=${budget}&currency=${currency}&fleet=${allocation.fleetSize}`}>
          <CustomButton
            variant="dark"
            size="lg"
            rounded="full"
            withArrow
            arrowType="up-right"
            className="h-14 px-8 text-base font-bold bg-[#0B1813] text-white hover:bg-[#163024] shadow-2xl hover:scale-[1.02] whitespace-nowrap"
          >
            Discuss my budget
          </CustomButton>
        </Link>
      </section>

      {/* ================= METHODOLOGY & ASSUMPTIONS SUMMARY ================= */}
      <section className="space-y-8 pt-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Simple to use. Open about the assumptions.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-foreground text-sm mb-1">
                Budget to fleet
              </h4>
              <p>
                We reserve your selected share of the budget, deduct fixed launch and Basic technology setup costs, then round down to whole scooters using the landed per-scooter allowance. Any remainder stays in the cash reserve. The Basic plan is capped at 500 vehicles in this model. The full budget is treated as committed project capital.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground text-sm mb-1">
                Current price reference
              </h4>
              <p>
                The Trekk pricing page lists Basic setup at ₦5,334,000 ($4,000) and monthly per-vehicle bands of ₦10,667 for 1&ndash;100 vehicles and ₦9,334 for 101&ndash;500 vehicles. Its published/indexed minimum reference is &euro;480; the starter minimum allowance is approximately ₦755,393, derived using the page&apos;s indicative NGN/EUR ratio.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-foreground text-sm mb-1">
                Activity to cash
              </h4>
              <p>
                Revenue uses Scoot Easy&apos;s average rides per deployed scooter, your selected demand share, fare and operating days. The reference already includes whatever downtime occurred; no extra availability haircut is automatically applied. Open months are modeled as 10 months each year; fixed operating costs continue during closures.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground text-sm mb-1">
                Returns and tax
              </h4>
              <p>
                Monthly cash deducts illustrative operating costs and a simplified tax estimate on positive profit after straight-line allocation of startup spending over useful life. Payback is the first cumulative recovery crossing. Additional funding is flagged when the worst cumulative operating deficit exceeds the reserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="rounded-2xl border border-border bg-muted/30 p-6 text-[11px] text-muted-foreground leading-relaxed space-y-2">
        <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px]">
          A starting point, not a promise.
        </h4>
        <p>
          This tool produces preliminary, illustrative estimates from a budget, selected assumptions and management-reported Scoot Easy reference data. Scoot Easy&apos;s experience is not evidence that a new site will achieve similar demand, costs or returns. Logistics, charging and operating allowances are assumptions, not supplier quotations or verified customer expenses. Basic is Trekk&apos;s lowest published tier; other packages, hardware, support, integration, taxes and monthly minimums may change the cost.
        </p>
      </section>
    </div>
  );
}
