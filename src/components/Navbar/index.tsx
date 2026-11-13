"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@src/constants/navigation";
import { useTranslation } from "@src/hooks/useTranslation";
import LanguageSwitcher from "@src/components/LanguageSwitcher";
import CustomButton from "@src/components/CustomButton";
import { cn } from "@src/lib/utils";

// Routes that have a dark hero section (#0B1813 or dark card)
const DARK_HERO_ROUTES = ["/", "/solutions", "/launch", "/academy", "/scooteasy"];

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>("common.nav.platform");
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll & handle Escape key for off-canvas mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const hasDarkHero =
    DARK_HERO_ROUTES.includes(pathname) ||
    pathname.startsWith("/launch") ||
    pathname.startsWith("/academy") ||
    pathname.startsWith("/scooteasy");

  // Determine light mode navbar appearance when unscrolled on light routes
  const isLight = !scrolled && !hasDarkHero;

  return (
    <>
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
          <Link href="/" className="flex items-center gap-2 group shrink-0">
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

          {/* Desktop Navigation Links (Joyride-style with Trekk palette) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const hasSub = Boolean(link.subItems && link.subItems.length > 0);
              const isDropdownOpen = openDropdown === link.labelKey;
              const isActive = (() => {
                if (link.labelKey === "common.nav.platform") {
                  return pathname.startsWith("/platform") || pathname === "/services";
                }
                if (link.labelKey === "common.nav.solutions") {
                  return pathname.startsWith("/solutions");
                }
                if (link.labelKey === "common.nav.industries") {
                  return pathname.startsWith("/industries");
                }
                if (link.labelKey === "common.nav.learn") {
                  return pathname.startsWith("/academy") || pathname.startsWith("/calculator");
                }
                if (link.labelKey === "common.nav.pricing") {
                  return pathname.startsWith("/pricing");
                }
                if (link.labelKey === "common.nav.company") {
                  return pathname.startsWith("/about") || pathname.startsWith("/contact");
                }
                return pathname === link.href;
              })();

              if (!hasSub) {
                return (
                  <Link
                    key={link.labelKey}
                    href={link.href}
                    className={cn(
                      "rounded-full px-3.5 xl:px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap",
                      isLight
                        ? isActive
                          ? "bg-[#12D18E]/15 text-[#09875B] font-semibold ring-1 ring-[#12D18E]/35"
                          : "text-[#0B1220]/75 hover:bg-black/5 hover:text-[#0B1220] dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                        : isActive
                        ? "bg-[#12D18E]/15 text-[#12D18E] font-semibold ring-1 ring-[#12D18E]/35"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {t(link.labelKey, link.defaultLabel)}
                  </Link>
                );
              }

              return (
                <div
                  key={link.labelKey}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.labelKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === link.labelKey ? null : link.labelKey
                      )
                    }
                    aria-expanded={isDropdownOpen}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap",
                      isLight
                        ? isActive
                          ? "bg-[#12D18E]/15 text-[#09875B] font-semibold ring-1 ring-[#12D18E]/35"
                          : isDropdownOpen
                          ? "bg-black/5 text-[#0B1220] dark:bg-white/10 dark:text-white"
                          : "text-[#0B1220]/75 hover:bg-black/5 hover:text-[#0B1220] dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                        : isActive
                        ? "bg-[#12D18E]/15 text-[#12D18E] font-semibold ring-1 ring-[#12D18E]/35"
                        : isDropdownOpen
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span>{t(link.labelKey, link.defaultLabel)}</span>
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown Panel or Mega Menu */}
                  {isDropdownOpen && link.subItems && (
                    link.isMegaMenu ? (
                      <div className="fixed inset-x-0 top-[68px] z-50 px-4 pt-3 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200/80 bg-white p-8 text-slate-900 shadow-2xl">
                          {link.megaMenuVariant === "products" ? (
                            <div>
                              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                {t("common.nav.megaDiscoverProducts", "Discover 3 Core Products")}
                              </p>
                              <div className="grid grid-cols-3 gap-8">
                                {link.subItems.map((sub) => {
                                  const isSubExactActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.href + sub.labelKey}
                                      href={sub.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group block rounded-2xl p-3 -m-3 transition-colors hover:bg-slate-50/90"
                                    >
                                      {sub.image && (
                                        <div className="mb-4 relative flex h-60 w-full items-center justify-center">
                                          {sub.bgImage && (
                                            <div className="pointer-events-none absolute inset-4">
                                              <Image
                                                src={sub.bgImage}
                                                alt=""
                                                fill
                                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                              />
                                            </div>
                                          )}
                                          <div className="relative z-10 flex h-full w-full items-center justify-center">
                                            <Image
                                              src={sub.image}
                                              alt={t(sub.labelKey, sub.defaultLabel)}
                                              width={420}
                                              height={560}
                                              className="h-60 w-auto rounded-2xl object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                                            />
                                          </div>
                                        </div>
                                      )}
                                      <div
                                        className={cn(
                                          "inline-flex items-center gap-1.5 text-[15px] font-bold transition-colors",
                                          isSubExactActive
                                            ? "text-[#12D18E]"
                                            : "text-slate-900 group-hover:text-[#12D18E]"
                                        )}
                                      >
                                        <span>{t(sub.labelKey, sub.defaultLabel)}</span>
                                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                                      </div>
                                      {sub.defaultDescription && (
                                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                                          {t(
                                            sub.descriptionKey || sub.labelKey,
                                            sub.defaultDescription
                                          )}
                                        </p>
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (() => {
                            const hasMoreItems = link.subItems.some(
                              (sub) => sub.megaMenuSection === "more"
                            );
                            return (
                            <div className="grid grid-cols-12 gap-8">
                            {/* Main Features / Links Grid */}
                            <div className={hasMoreItems ? "col-span-9" : "col-span-12"}>
                              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                {t(
                                  link.megaTitleKey || "common.nav.megaCoreFeatures",
                                  link.defaultMegaTitle || "Core Features"
                                )}
                              </p>
                              <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                {link.subItems
                                  .filter((sub) => sub.megaMenuSection !== "more")
                                  .map((sub) => {
                                    const isSubExactActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={sub.href + sub.labelKey}
                                        href={sub.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className="group block rounded-xl p-2 -m-2 transition-colors hover:bg-slate-50/90"
                                      >
                                        <div
                                          className={cn(
                                            "inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors",
                                            isSubExactActive
                                              ? "text-[#12D18E]"
                                              : "text-slate-900 group-hover:text-[#12D18E]"
                                          )}
                                        >
                                          <span>{t(sub.labelKey, sub.defaultLabel)}</span>
                                          <ArrowRight className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                                        </div>
                                        {sub.defaultDescription && (
                                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                                            {t(
                                              sub.descriptionKey || sub.labelKey,
                                              sub.defaultDescription
                                            )}
                                          </p>
                                        )}
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>

                            {/* Right 3 cols: MORE */}
                            {hasMoreItems && (
                            <div className="col-span-3 border-l border-slate-100 pl-8">
                              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                {t("common.nav.megaMore", "More")}
                              </p>
                              <div className="space-y-5">
                                {link.subItems
                                  .filter((sub) => sub.megaMenuSection === "more")
                                  .map((sub) => {
                                    const isSubExactActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={sub.href + sub.labelKey}
                                        href={sub.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className="group block rounded-xl p-2 -m-2 transition-colors hover:bg-slate-50/90"
                                      >
                                        <div
                                          className={cn(
                                            "inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors",
                                            isSubExactActive
                                              ? "text-[#12D18E]"
                                              : "text-slate-900 group-hover:text-[#12D18E]"
                                          )}
                                        >
                                          <span>{t(sub.labelKey, sub.defaultLabel)}</span>
                                          <ArrowRight className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                                        </div>
                                        {sub.defaultDescription && (
                                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                                            {t(
                                              sub.descriptionKey || sub.labelKey,
                                              sub.defaultDescription
                                            )}
                                          </p>
                                        )}
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>
                            )}
                          </div>
                            );
                          })()}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute left-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="min-w-[240px] w-max rounded-2xl border border-white/10 bg-[#0B231B] p-2 shadow-2xl text-white">
                          {link.subItems.map((sub) => {
                            const isSubExactActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href + sub.labelKey}
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className={cn(
                                  "flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                                  isSubExactActive
                                    ? "bg-[#12D18E] text-[#0B1220] font-semibold"
                                    : "text-white/90 hover:bg-[#12D18E] hover:text-[#0B1220]"
                                )}
                              >
                                <span>{t(sub.labelKey, sub.defaultLabel)}</span>
                                {sub.hasRightArrow && (
                                  <ChevronRight className="size-4 shrink-0 opacity-80" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Language Switcher + Book Demo CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
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
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label="Open navigation menu"
              className={cn(
                "inline-flex items-center justify-center rounded-xl p-2 focus:outline-none transition-colors",
                isLight
                  ? "text-[#0B1220] hover:bg-black/10 dark:text-white dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer (< lg) */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Over Off-Canvas Panel */}
          <aside
            aria-label="Mobile Navigation"
            className="fixed top-0 right-0 h-full w-[86%] max-w-sm bg-[#0B1510] text-white border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="relative h-10 w-24"
              >
                <Image
                  src="/images/logo-main.png"
                  alt="Trekk Mobility"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-xl p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Drawer Scrollable Menu */}
            <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const hasSub = Boolean(link.subItems && link.subItems.length > 0);
                const isExpanded = mobileExpanded === link.labelKey;

                if (!hasSub) {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.labelKey}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-[#12D18E]/15 text-[#12D18E] font-bold"
                          : "text-white/90 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{t(link.labelKey, link.defaultLabel)}</span>
                    </Link>
                  );
                }

                return (
                  <div key={link.labelKey} className="space-y-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === link.labelKey ? null : link.labelKey
                        )
                      }
                      aria-expanded={isExpanded}
                      className={cn(
                        "w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isExpanded
                          ? "bg-white/5 text-[#12D18E] font-bold"
                          : "text-white/90 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{t(link.labelKey, link.defaultLabel)}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {isExpanded && link.subItems && (
                      <div className="ml-4 pl-3 border-l border-white/15 space-y-1 py-1">
                        {link.subItems.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href + sub.labelKey}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                                isSubActive
                                  ? "bg-[#12D18E] text-[#0B1220] font-semibold"
                                  : "text-white/75 hover:bg-white/10 hover:text-white"
                              )}
                            >
                              <span>{t(sub.labelKey, sub.defaultLabel)}</span>
                              {sub.hasRightArrow && (
                                <ChevronRight className="size-3.5 opacity-70" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-white/10 space-y-3 bg-[#08100C] shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">
                  Language
                </span>
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <CustomButton
                  variant="primary"
                  size="lg"
                  rounded="xl"
                  withArrow
                  className="w-full justify-center font-bold"
                >
                  {t("common.nav.bookDemo", "Book a Demo")}
                </CustomButton>
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
