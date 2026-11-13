"use client";

import React, { type ReactNode } from "react";
import Navbar from "@src/components/Navbar";
import Footer from "@src/components/Footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground pb-20 lg:pb-0 selection:bg-[#12D18E] selection:text-[#0B1220]">
      <Navbar />
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
}

