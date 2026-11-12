"use client";

import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@src/lib/utils";
import type { CustomDropdownProps } from "@src/types/dropdown";

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  triggerClassName,
  contentClassName,
  itemClassName,
  size = "default",
  variant = "default",
  showCheckmark = true,
  disabled = false,
}: CustomDropdownProps) {
  const currentOption = options.find((opt) => opt.value === value);

  // Variant styles for the trigger
  const variantStyles = {
    default:
      "border border-border bg-white text-foreground hover:border-[#12D18E] dark:bg-[#0E1522]",
    clean:
      "border-0 bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/5",
    ghost:
      "border-0 bg-transparent text-foreground hover:text-[#12D18E]",
    inline:
      "border-0 bg-transparent p-0 text-foreground font-semibold hover:opacity-80 focus:ring-0",
    pill:
      "rounded-full border border-border bg-white/90 text-foreground hover:border-[#12D18E] shadow-sm dark:bg-[#0E1522]",
  };

  const sizeStyles = {
    sm: "h-8 px-2.5 text-xs rounded-lg gap-1.5",
    default: "h-11 px-3.5 text-sm rounded-xl gap-2",
    lg: "h-14 px-4 text-base rounded-2xl gap-2.5",
  };

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectPrimitive.Trigger
        className={cn(
          "inline-flex items-center justify-between whitespace-nowrap transition-all duration-150 outline-none select-none",
          variantStyles[variant],
          variant !== "inline" && sizeStyles[size],
          "focus:ring-2 focus:ring-[#12D18E]/30 focus:border-[#12D18E]",
          disabled && "opacity-50 cursor-not-allowed",
          triggerClassName
        )}
        aria-label={currentOption?.label || placeholder}
      >
        <div className="flex items-center gap-2 truncate">
          {currentOption?.icon && (
            <span className="shrink-0">{currentOption.icon}</span>
          )}
          <SelectPrimitive.Value placeholder={placeholder}>
            {currentOption ? currentOption.label : placeholder}
          </SelectPrimitive.Value>
        </div>

        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground/70 transition-transform duration-200" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={6}
          className={cn(
            "relative z-50 min-w-[8rem] max-h-72 overflow-y-auto overflow-x-hidden rounded-2xl border border-border bg-white p-1.5 text-foreground shadow-2xl dark:bg-[#0E1522]",
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            contentClassName
          )}
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={cn(
                  "relative flex w-full cursor-pointer select-none items-center justify-between rounded-xl py-2 px-3 text-sm outline-none transition-colors",
                  "hover:bg-[#12D18E]/10 focus:bg-[#12D18E]/15 focus:text-foreground",
                  option.value === value && "bg-[#12D18E]/10 font-medium text-foreground",
                  option.disabled && "pointer-events-none opacity-40",
                  itemClassName
                )}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {option.icon && (
                    <span className="shrink-0">{option.icon}</span>
                  )}
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                  {option.badge && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                      {option.badge}
                    </span>
                  )}
                </div>

                {showCheckmark && (
                  <SelectPrimitive.ItemIndicator className="ml-3 flex size-4 items-center justify-center">
                    <Check className="size-4 text-[#12D18E]" />
                  </SelectPrimitive.ItemIndicator>
                )}
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

