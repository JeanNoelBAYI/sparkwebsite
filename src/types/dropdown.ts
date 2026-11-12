import type { ReactNode } from "react";

export type DropdownOption = {
  value: string;
  label: string;
  badge?: string;
  icon?: ReactNode;
  disabled?: boolean;
};

export type DropdownVariant = "default" | "clean" | "ghost" | "inline" | "pill";

export type DropdownSize = "sm" | "default" | "lg";

export type CustomDropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  size?: DropdownSize;
  variant?: DropdownVariant;
  showCheckmark?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
};

