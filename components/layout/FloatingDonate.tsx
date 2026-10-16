
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export function FloatingDonate() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2"
      >
        <Link
          href="/donate"
          aria-label="Donate"
          className="group relative flex flex-col items-center gap-3 overflow-hidden border-0 bg-[#C83D46] px-3 py-5 text-white shadow-lg transition-colors duration-300 hover:bg-[#B52F39] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83D46]"
        >
          {/* White light spreads outward from the heart */}
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[32px] z-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 bg-white"
            style={{
              borderRadius: "50%",
              filter: "blur(8px)",
            }}
            animate={{
              scale: [0.5, 3.5, 6, 0.5],
              opacity: [0.15, 0.65, 0.25, 0.15],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pulsing white heart */}
          <motion.span
            className="relative z-10"
            animate={{
              scale: [1, 1.18, 1],
              filter: [
                "drop-shadow(0 0 2px rgba(255,255,255,0.3))",
                "drop-shadow(0 0 12px rgba(255,255,255,1))",
                "drop-shadow(0 0 2px rgba(255,255,255,0.3))",
              ],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              size={26}
              fill="white"
              stroke="white"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </motion.span>

          {/* Vertical Donate label */}
          <span
            className="relative z-10 text-sm font-bold tracking-wider"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Donate
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
