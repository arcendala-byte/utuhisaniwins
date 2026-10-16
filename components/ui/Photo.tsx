import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/data/media";

interface PhotoProps {
  asset: MediaAsset;
  /** Aspect ratio, e.g. "4/5", "16/9", "1/1". */
  aspect?: string;
  className?: string;
  /** Set true for the LCP image (hero) to disable lazy loading. */
  priority?: boolean;
  sizes?: string;
  /** Renders a full-bleed tinted block when placeholder is true. */
  variant?: "default" | "dark";
}

export function Photo({
  asset,
  aspect = "4/5",
  className,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  variant = "default",
}: PhotoProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: aspect }}
    >
      {asset.isPlaceholder ? (
        <PlaceholderBlock
          label={asset.fallbackLabel}
          alt={asset.alt}
          isDark={isDark}
        />
      ) : (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: asset.focalPoint ?? "center" }}
        />
      )}
    </div>
  );
}

/**
 * An intentionally designed fallback block.
 * NOT a broken-image state — a calm editorial placeholder.
 */
function PlaceholderBlock({
  label,
  alt,
  isDark,
}: {
  label: string;
  alt: string;
  isDark: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "absolute inset-0 flex items-end p-6 sm:p-8",
        isDark ? "bg-forest" : "bg-sand"
      )}
    >
      {/* Subtle diagonal texture to signal "intentional", not "broken" */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="photo-diag"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="4"
              stroke={isDark ? "#F8F6F1" : "#171714"}
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#photo-diag)" />
      </svg>

      {/* Corner brackets — signals a framing placeholder */}
      <svg
        className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M0,8 L0,0 L8,0"
          fill="none"
          stroke={isDark ? "#F8F6F1" : "#171714"}
          strokeOpacity="0.35"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M92,0 L100,0 L100,8"
          fill="none"
          stroke={isDark ? "#F8F6F1" : "#171714"}
          strokeOpacity="0.35"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M100,92 L100,100 L92,100"
          fill="none"
          stroke={isDark ? "#F8F6F1" : "#171714"}
          strokeOpacity="0.35"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M8,100 L0,100 L0,92"
          fill="none"
          stroke={isDark ? "#F8F6F1" : "#171714"}
          strokeOpacity="0.35"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <p
        className={cn(
          "relative z-10 text-[11px] font-medium tracking-[0.18em] uppercase max-w-[80%]",
          isDark ? "text-ivory/70" : "text-ink/60"
        )}
      >
        {label}
      </p>
    </div>
  );
}