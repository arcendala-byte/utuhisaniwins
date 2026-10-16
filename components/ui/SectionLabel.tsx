import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionLabelProps {
  number?: string;
  children: ReactNode;
  variant?: "default" | "dark";
  className?: string;
}

export function SectionLabel({
  number,
  children,
  variant = "default",
  className,
}: SectionLabelProps) {
  const colorClass =
    variant === "dark" ? "text-ivory/70" : "text-muted";

  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.18em]",
        colorClass,
        className
      )}
    >
      {number && <span className="text-terracotta mr-2">{number}</span>}
      {children}
    </p>
  );
}