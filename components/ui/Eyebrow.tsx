import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "light";
}

export function Eyebrow({
  children,
  className,
  tone = "default",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "type-eyebrow font-medium",
        tone === "light" ? "text-terracotta-400" : "text-terracotta-600",
        className
      )}
    >
      {children}
    </span>
  );
}
