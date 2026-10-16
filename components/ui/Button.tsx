"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: undefined;
  type?: undefined;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: "bg-accent text-dark-text hover:bg-[#9a452f]",
  secondary: "bg-forest text-dark-text hover:bg-[#283830]",
  outline:
    "border border-border bg-white text-ink hover:border-ink/30 hover:bg-ivory",
  ghost: "text-ink hover:bg-sand/50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-9",
  md: "px-5 py-2.5 text-sm min-h-11",
  lg: "px-6 py-3 text-base min-h-12",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const shouldReduceMotion = useReducedMotion();
  const isPrimaryAction = variant === "primary" || className?.includes("bg-[#244C3A]") || className?.includes("bg-forest");

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded font-medium",
    "transition-colors duration-150 ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:cursor-not-allowed disabled:opacity-45",
    variants[variant],
    sizes[size],
    className
  );

  const content = ("href" in props && props.href) ? (
    <Link href={props.href} className={classes}>
      {children}
    </Link>
  ) : (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );

  return (
    <motion.div
      animate={
        shouldReduceMotion || !isPrimaryAction
          ? { scale: 1 }
          : { scale: [1, 1.035, 1] }
      }
      transition={
        shouldReduceMotion || !isPrimaryAction
          ? { duration: 0 }
          : { duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
      }
      whileHover={shouldReduceMotion || !isPrimaryAction ? undefined : { scale: 1.04 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      className="inline-flex"
    >
      {content}
    </motion.div>
  );
}
