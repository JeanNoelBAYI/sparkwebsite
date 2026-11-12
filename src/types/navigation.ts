// src/types/navigation.ts

export type NavLinkItem = {
  href: string;
  labelKey: string;
  defaultLabel: string;
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

