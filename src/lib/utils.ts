import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  decimals: number = 0
): string {
  const symbols: Record<string, string> = {
    NGN: "₦",
    USD: "$",
    GHS: "GH₵",
    XOF: "FCFA",
    EUR: "€",
  };
  const sym = symbols[currency] || `${currency} `;
  const isNegative = amount < 0;
  const abs = Math.abs(amount);
  const formatted = abs.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${isNegative ? "−" : ""}${sym}${formatted}`;
}

export function compactFormat(amount: number, currency: string = "USD"): string {
  const symbols: Record<string, string> = {
    NGN: "₦",
    USD: "$",
    GHS: "GH₵",
    XOF: "FCFA",
    EUR: "€",
  };
  const sym = symbols[currency] || "";
  const isNegative = amount < 0;
  const abs = Math.abs(amount);
  let out = "";
  if (abs >= 1e6) {
    out = `${sym}${(abs / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
  } else if (abs >= 1e3) {
    out = `${sym}${(abs / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
  } else {
    out = `${sym}${Math.round(abs).toLocaleString("en-US")}`;
  }
  return `${isNegative ? "−" : ""}${out}`;
}

