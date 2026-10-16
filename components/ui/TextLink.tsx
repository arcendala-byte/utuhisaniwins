import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn("text-link inline-flex items-center gap-1 font-medium", className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
