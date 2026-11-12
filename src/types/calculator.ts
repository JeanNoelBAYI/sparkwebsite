// src/types/calculator.ts

export type CurrencyCode = "NGN" | "USD" | "GHS" | "XOF" | "EUR";

export type TierLevel = "basic" | "standard" | "premium";

export type CurrencyDefaults = {
  cost: number;
  fare: number;
  opex: number;
};

export type SetupFees = {
  basic: number;
  standard: number;
  premium: number;
};

export type CalculatorFormState = {
  currency: CurrencyCode;
  scooters: number;
  cost: number;
  rides: number;
  fare: number;
  opex: number;
  lifespan: number;
  horizon: number;
};

export type MonthBreakdown = {
  month: number;
  revenue: number;
  opex: number;
  trekkFee: number;
  netCash: number;
  cumulativeCash: number;
};

export type CalculatorResults = {
  tier: TierLevel;
  tierLabel: string;
  paybackMonths: number;
  roiPercentage: number;
  initialInvestment: number;
  monthlyRevenue: number;
  monthlyTrekkFee: number;
  monthlyOpex: number;
  monthlyNetProfit: number;
  breakdown: MonthBreakdown[];
};

