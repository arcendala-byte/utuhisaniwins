
"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealHeadlineProps = {
  lines: readonly string[];
  className?: string;
};

export function RevealHeadline({
  lines,
  className = "",
}: RevealHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1
      className={className}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          <motion.span
            className="inline-block"
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 35 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : index * 0.35 + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
