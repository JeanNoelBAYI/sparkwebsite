import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12D18E] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#12D18E] text-[#0B1220] font-bold shadow-md shadow-[#12D18E]/20 hover:bg-[#0fb87c] hover:shadow-lg active:scale-[0.98]",
        primary:
          "bg-[#12D18E] text-[#0B1220] font-bold shadow-md shadow-[#12D18E]/20 hover:bg-[#0fb87c] hover:shadow-lg active:scale-[0.98]",
        dark:
          "bg-[#0B1220] text-white shadow-md shadow-black/15 hover:bg-[#142238] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:scale-[0.98]",
        outline:
          "border border-border bg-white text-foreground shadow-sm hover:bg-black/5 hover:border-[#12D18E] active:scale-[0.98] dark:bg-transparent dark:hover:bg-white/5",
        secondary:
          "bg-[#12D18E]/10 text-[#0f875e] font-bold hover:bg-[#12D18E]/20 active:scale-[0.98] dark:text-[#12D18E]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        link:
          "text-[#12D18E] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        xs: "h-7 rounded-lg px-2.5 text-xs",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        md: "h-12 rounded-xl px-6 text-sm",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || Boolean(loading)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
