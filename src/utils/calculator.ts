// src/utils/calculator.ts
import type {
  CalculatorFormState,
  CalculatorResults,
  CurrencyCode,
  MonthBreakdown,
  TierLevel,
} from "../types/calculator";

export const FX_RATES: Record<CurrencyCode, number> = {
  NGN: 1333.5,
  USD: 1,
  GHS: 11.25,
  XOF: 566,
  EUR: 0.865,
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  NGN: "₦",
  USD: "$",
  GHS: "GH₵",
  XOF: "FCFA",
  EUR: "€",
};

export const DEFAULT_BUDGETS: Record<CurrencyCode, number> = {
  NGN: 25000000,
  USD: 25000,
  GHS: 250000,
  XOF: 15000000,
  EUR: 22000,
};

export const BUDGET_CHIPS: Record<
  CurrencyCode,
  { label: string; value: number }[]
> = {
  NGN: [
    { label: "₦10m", value: 10000000 },
    { label: "₦25m", value: 25000000 },
    { label: "₦50m", value: 50000000 },
  ],
  USD: [
    { label: "$10k", value: 10000 },
    { label: "$25k", value: 25000 },
    { label: "$50k", value: 50000 },
  ],
  GHS: [
    { label: "GH₵100k", value: 100000 },
    { label: "GH₵250k", value: 250000 },
    { label: "GH₵500k", value: 500000 },
  ],
  XOF: [
    { label: "FCFA5m", value: 5000000 },
    { label: "FCFA15m", value: 15000000 },
    { label: "FCFA30m", value: 30000000 },
  ],
  EUR: [
    { label: "€10k", value: 10000 },
    { label: "€25k", value: 25000 },
    { label: "€50k", value: 50000 },
  ],
};

export const CURRENCY_DEFAULTS: Record<
  CurrencyCode,
  { cost: number; fare: number; opex: number }
> = {
  NGN: { cost: 867000, fare: 800, opex: 30000 },
  USD: { cost: 650, fare: 0.6, opex: 22.5 },
  GHS: { cost: 7313, fare: 6.75, opex: 253 },
  XOF: { cost: 367900, fare: 340, opex: 12735 },
  EUR: { cost: 562, fare: 0.52, opex: 19 },
};

export const SETUP_FEES: Record<CurrencyCode, Record<TierLevel, number>> = {
  NGN: { basic: 5334000, standard: 8001000, premium: 10667000 },
  USD: { basic: 4000, standard: 6000, premium: 8000 },
  GHS: { basic: 45000, standard: 67500, premium: 90000 },
  XOF: { basic: 2264000, standard: 3396000, premium: 4528000 },
  EUR: { basic: 3460, standard: 5190, premium: 6910 },
};

export const PER_VEHICLE_FEE: Record<CurrencyCode, number[]> = {
  NGN: [10667, 9334, 6667, 5334],
  USD: [8, 7, 5, 4],
  GHS: [90, 79, 56, 45],
  XOF: [4528, 3962, 2830, 2264],
  EUR: [7, 6, 4, 3],
};

export function getTier(count: number): TierLevel {
  if (count <= 500) return "basic";
  if (count <= 1500) return "standard";
  return "premium";
}

export function getTierLabel(tier: TierLevel): string {
  switch (tier) {
    case "basic":
      return "Basic";
    case "standard":
      return "Standard";
    case "premium":
      return "Premium";
  }
}

export function getPerVehicleFee(currency: CurrencyCode, count: number): number {
  const bands = PER_VEHICLE_FEE[currency] || PER_VEHICLE_FEE.NGN;
  if (count <= 100) return bands[0] ?? 0;
  if (count <= 500) return bands[1] ?? 0;
  if (count <= 1000) return bands[2] ?? 0;
  return bands[3] ?? 0;
}

export type BudgetAllocation = {
  budget: number;
  currency: CurrencyCode;
  fleetSize: number;
  scooterPurchases: number;
  deliveryDuties: number;
  chargingEquipment: number;
  technologySetup: number;
  otherLaunchCosts: number;
  cashReserve: number;
  totalAllocated: number;
};

export function calculateBudgetAllocation(
  budget: number,
  currency: CurrencyCode,
  costPerScooter?: number
): BudgetAllocation {
  const defaults = CURRENCY_DEFAULTS[currency] || CURRENCY_DEFAULTS.NGN;
  const cost = costPerScooter || defaults.cost;
  const setupFee = SETUP_FEES[currency]?.basic || SETUP_FEES.NGN.basic;

  const fxRatio = FX_RATES[currency] / FX_RATES.NGN;
  const chargingFixed = Math.round(650000 * fxRatio);
  const otherLaunchCosts = Math.round(500000 * fxRatio);

  const fixedFoundations = setupFee + chargingFixed + otherLaunchCosts;

  if (budget <= fixedFoundations) {
    return {
      budget,
      currency,
      fleetSize: 1,
      scooterPurchases: cost,
      deliveryDuties: Math.round(cost * 0.15),
      chargingEquipment: chargingFixed,
      technologySetup: setupFee,
      otherLaunchCosts,
      cashReserve: 0,
      totalAllocated: budget,
    };
  }

  const availableForFleet = budget - fixedFoundations;
  const landedCostPerVehicle = cost * 1.15; // vehicle + 15% delivery/duties

  // Target ~11% reserve
  const targetReserve = budget * 0.11;
  const maxFleetFundable = Math.max(
    1,
    Math.floor((availableForFleet - targetReserve) / landedCostPerVehicle)
  );

  const scooterPurchases = Math.round(maxFleetFundable * cost);
  const deliveryDuties = Math.round(scooterPurchases * 0.15);
  const subtotalAllocated =
    fixedFoundations + scooterPurchases + deliveryDuties;
  const cashReserve = Math.max(0, budget - subtotalAllocated);

  return {
    budget,
    currency,
    fleetSize: maxFleetFundable,
    scooterPurchases,
    deliveryDuties,
    chargingEquipment: chargingFixed,
    technologySetup: setupFee,
    otherLaunchCosts,
    cashReserve,
    totalAllocated: budget,
  };
}

export function calculateFleetEconomics(
  state: CalculatorFormState,
  demandPace: number = 0.6 // 40%, 60%, 100%
): CalculatorResults {
  const { currency, scooters, cost, fare, opex, horizon } = state;
  const tier = getTier(scooters);
  const tierLabel = getTierLabel(tier);

  const vehicleFee = getPerVehicleFee(currency, scooters);
  const setupFee = SETUP_FEES[currency]?.[tier] || SETUP_FEES.NGN[tier];

  // Base reference pace: 16.8 rides/day * demand multiplier (e.g. 60% = 10.1 rides/day)
  const effectiveDailyRides = (state.rides || 16.8) * demandPace;

  const initialInvestment = scooters * cost + setupFee;
  const monthlyRevenue = scooters * effectiveDailyRides * fare * 30;
  const monthlyTrekkFee = scooters * vehicleFee;
  const monthlyOpex = scooters * opex;
  const monthlyNetCash = monthlyRevenue - monthlyOpex - monthlyTrekkFee;

  const paybackMonths =
    monthlyNetCash > 0
      ? Math.max(0, Math.round((initialInvestment / monthlyNetCash) * 10) / 10)
      : 999;

  const totalRevenue = monthlyRevenue * horizon;
  const totalTrekkFee = monthlyTrekkFee * horizon;
  const totalOpex = monthlyOpex * horizon;
  const netProfit =
    totalRevenue - totalTrekkFee - totalOpex - initialInvestment;

  const roiPercentage =
    initialInvestment > 0
      ? Math.round((netProfit / initialInvestment) * 100)
      : 0;

  const breakdown: MonthBreakdown[] = [];
  let cumulative = -initialInvestment;

  for (let m = 1; m <= horizon; m++) {
    cumulative += monthlyNetCash;
    breakdown.push({
      month: m,
      revenue: monthlyRevenue,
      opex: monthlyOpex,
      trekkFee: monthlyTrekkFee,
      netCash: monthlyNetCash,
      cumulativeCash: cumulative,
    });
  }

  return {
    tier,
    tierLabel,
    paybackMonths,
    roiPercentage,
    initialInvestment,
    monthlyRevenue,
    monthlyTrekkFee,
    monthlyOpex,
    monthlyNetProfit: monthlyNetCash,
    breakdown,
  };
}
