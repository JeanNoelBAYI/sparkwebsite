"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@src/constants/navigation";
import { useTranslation } from "@src/hooks/useTranslation";
import LanguageSwitcher from "@src/components/LanguageSwitcher";
import CustomButton from "@src/components/CustomButton";
import { cn } from "@src/lib/utils";

// Routes that have a dark hero section (#0B1813 or dark card)
const DARK_HERO_ROUTES = ["/", "/services", "/launch", "/academy", "/scooteasy"];

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const hasDarkHero =
    DARK_HERO_ROUTES.includes(pathname) ||
    pathname.startsWith("/launch") ||
    pathname.startsWith("/academy") ||
    pathname.startsWith("/scooteasy");

  // Determine light mode navbar appearance when unscrolled on light routes
  const isLight = !scrolled && !hasDarkHero;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0B1510]/95 backdrop-blur-md shadow-xl text-white"
          : hasDarkHero
          ? "border-none bg-[#0B1813] text-white"
          : "border-none bg-background dark:bg-[#0B1813] text-[#0B1220] dark:text-white"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-11 w-24 sm:w-28">
            <Image
              src="/images/logo-main.png"
              alt="Trekk Mobility"
              fill
              className={cn(
                "object-contain object-left transition duration-200 group-hover:opacity-90",
                isLight ? "brightness-100 dark:brightness-0 dark:invert" : "brightness-0 invert"
              )}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isLight
                    ? isActive
                      ? "bg-black/10 font-bold text-[#12D18E] shadow-inner"
                      : "text-[#0B1220]/80 hover:bg-black/5 hover:text-[#0B1220] dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                    : isActive
                    ? "bg-white/10 font-bold text-[#12D18E] shadow-inner"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {t(link.labelKey, link.defaultLabel)}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Language Switcher + Book Demo CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher isLight={isLight} />
          <Link href="/contact">
            <CustomButton
              variant="primary"
              size="sm"
              rounded="full"
              withArrow
              className="px-5 font-bold shadow-md shadow-[#12D18E]/20"
            >
              {t("common.nav.bookDemo", "Book a Demo")}
            </CustomButton>
          </Link>
        </div>

        {/* Mobile Actions: Language Switcher + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher isLight={isLight} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className={cn(
              "inline-flex items-center justify-center rounded-xl p-2 focus:outline-none transition-colors",
              isLight
                ? "text-[#0B1220] hover:bg-black/10 dark:text-white dark:hover:bg-white/10"
                : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-white/10 bg-[#0B1510] px-6 py-6 shadow-2xl lg:hidden animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-white/10 font-bold text-[#12D18E]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{t(link.labelKey, link.defaultLabel)}</span>
                  <ArrowRight className="size-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 mt-2">
              <Link href="/contact" className="w-full">
                <CustomButton
                  variant="primary"
                  size="default"
                  rounded="xl"
                  withArrow
                  className="w-full font-bold"
                >
                  {t("common.nav.bookDemo", "Book a Demo")}
                </CustomButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
