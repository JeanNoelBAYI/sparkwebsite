"use client";

import React from "react";
import { useTranslation } from "@src/hooks/useTranslation";

const OFFICES = [
  {
    key: "contact.office.nigeria",
    fallback: "Nigeria Office",
    dotColor: "bg-[#12D18E]",
    address:
      "Plot 660, Oluwatoyin Eleoramo Street, Omole Phase 2, Ikeja, Lagos, Nigeria",
    phone: "+234 814 196 7739",
  },
  {
    key: "contact.office.usa",
    fallback: "USA Office",
    dotColor: "bg-[#2E6BFF]",
    address: "925 Canterbury Rd, NE, Atlanta, GA 30324",
    phone: "1 (336) 609-0662",
  },
  {
    key: "contact.office.france",
    fallback: "France Office",
    dotColor: "bg-[#FFB020]",
    address: "19 Rue des Oiseaux, 91130, Ris-Orangis, France",
    phone: "+33 (7) 58-27-56-79",
  },
  {
    key: "contact.office.luxembourg",
    fallback: "Luxembourg Office",
    dotColor: "bg-[#12D18E]",
    address: "2 Rue du Kiem, L-8435 Steinfort",
    phone: "+352 661 911217",
  },
  {
    key: "contact.office.swiss",
    fallback: "Swiss Office",
    dotColor: "bg-[#2E6BFF]",
    address: "Tannwaldstrasse 64, 4600 Olten, Switzerland",
    phone: "+41 76 675 74 38",
  },
];

export default function ContactOffices() {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] space-y-6">
        <h3 className="font-display text-xl font-bold text-foreground">
          Our Global Presence
        </h3>
        <p className="text-xs text-muted-foreground">
          Headquartered in Lagos with representation across North America and Europe to support international operators and suppliers.
        </p>

        <div className="space-y-6 divide-y divide-border/60">
          {OFFICES.map((office) => (
            <div key={office.key} className="pt-4 first:pt-0 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`size-2 rounded-full ${office.dotColor}`} />
                <h4 className="font-display text-sm font-bold">
                  {t(office.key, office.fallback)}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                {office.address}
              </p>
              <p className="text-xs font-semibold pl-4 text-foreground">
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

