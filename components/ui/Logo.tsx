import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const primary = variant === "dark" ? "#244C3A" : "#F7F5EF";
  const accent = variant === "dark" ? "#B28A45" : "#D2B57A";
  const wordmarkColor = variant === "dark" ? "#202522" : "#F7F5EF";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" stroke={accent} strokeWidth="1.5" />
        <circle cx="32" cy="32" r="26" stroke={primary} strokeWidth="2" />

        <circle cx="22" cy="26" r="3.2" fill={primary} />
        <path
          d="M22 30.5 C18.5 31.5 17 35 17 39 V44"
          stroke={primary}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <circle cx="32" cy="22" r="3.6" fill={accent} />
        <path
          d="M32 26.5 C28 27.5 26 32 26 37 V44"
          stroke={accent}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        <circle cx="42" cy="26" r="3.2" fill={primary} />
        <path
          d="M42 30.5 C45.5 31.5 47 35 47 39 V44"
          stroke={primary}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <path
          d="M18 46 H46"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-lg sm:text-xl font-semibold tracking-tight"
            style={{ color: wordmarkColor }}
          >
            Utuhisaniwins
          </span>
          <span
            className="mt-0.5 text-[10px] uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            Tenebo We Smile
          </span>
        </div>
      )}
    </div>
  );
}