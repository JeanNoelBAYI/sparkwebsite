import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"       // Brand Emerald #12D18E with #0B1220 text
  | "dark"          // Deep Slate/Ink #0B1220 with White text
  | "outline"       // Crisp border with hover background
  | "outline-light" // White border for dark backgrounds
  | "secondary"     // Soft emerald tint bg-[#12D18E]/10
  | "ghost"         // Transparent hover
  | "link";         // Text link with underline

export type ButtonSize = "xs" | "sm" | "default" | "md" | "lg" | "xl" | "icon";

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: "default" | "md" | "lg" | "xl" | "2xl" | "full";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  withArrow?: boolean;
  arrowType?: "right" | "up-right";
  loading?: boolean;
  asChild?: boolean;
};

