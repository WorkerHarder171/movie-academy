import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        navbar:
          "text-navbarText bg-[#50AE30] dark:text-navbarText dark:bg-navbarBg dark:hover:bg-navbarBg/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        nav: "px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

const ButtonPrimary = ({ className, children, ...props }: ButtonProps) => (
  <button
    type="button"
    className={cn(
      "relative ml-2 inline-flex h-8 w-fit scale-125 items-center justify-center whitespace-nowrap rounded-full bg-[#606060] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white/80 shadow-md ring-offset-background drop-shadow-[-1px_2px_0px_rgba(86, 147, 70, 1)] hover:bg-[#569346] hover:drop-shadow-[-1px_2px_0px_rgba(86, 147, 70, 1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    <div className="absolute left-3.5 top-0 h-[0.4rem] w-12 rounded-b-full bg-[#707070] group-hover:bg-[#579346] " />
    {children}
    <div className="absolute bottom-0 right-3.5 h-[0.4rem] w-12 rounded-t-full bg-[#707070] group-hover:bg-[#579346]" />
  </button>
);

Button.displayName = "Button";

export { Button, buttonVariants, ButtonPrimary };
