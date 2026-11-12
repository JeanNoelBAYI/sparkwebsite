import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#12D18E]/15 text-[#102A23] hover:bg-[#12D18E]/25",
        secondary:
          "border-transparent bg-secondary/10 text-secondary hover:bg-secondary/20",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        green:
          "border-[#12D18E]/30 bg-[#12D18E]/10 text-[#102A23] font-medium",
        blue:
          "border-[#2E6BFF]/30 bg-[#2E6BFF]/10 text-[#2E6BFF] font-medium",
        amber:
          "border-[#FFB020]/30 bg-[#FFB020]/10 text-[#B37400] font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

