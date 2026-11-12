// src/types/navigation.ts

export type NavSubItem = {
  href: string;
  labelKey: string;
  defaultLabel: string;
  descriptionKey?: string;
  defaultDescription?: string;
  megaMenuSection?: "core" | "more";
  image?: string;
  bgImage?: string;
  hasRightArrow?: boolean;
};

export type NavLinkItem = {
  href: string;
  labelKey: string;
  defaultLabel: string;
  isMegaMenu?: boolean;
  megaMenuVariant?: "features" | "products";
  megaTitleKey?: string;
  defaultMegaTitle?: string;
  subItems?: NavSubItem[];
};

export type FooterSection = {
  titleKey: string;
  defaultTitle: string;
  links: {
    href: string;
    labelKey: string;
    defaultLabel: string;
  }[];
};
