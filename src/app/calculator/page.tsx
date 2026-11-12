"use client";

import React from "react";
import Calculator from "@src/components/Calculator";

export default function CalculatorPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Calculator />
      </div>
    </div>
  );
}
