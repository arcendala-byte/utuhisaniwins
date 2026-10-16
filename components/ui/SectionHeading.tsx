import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", alignment, className)}>
      {eyebrow && (
        <span className="type-label text-accent">{eyebrow}</span>
      )}
      <h2 className="type-section-title text-ink text-balance">{title}</h2>
      {description && (
        <p className="type-lead text-pretty">{description}</p>
      )}
    </div>
  );
}
