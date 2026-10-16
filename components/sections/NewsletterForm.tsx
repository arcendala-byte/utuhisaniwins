"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const body = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !body.success) {
        setStatus("error");
        setMessage(body.message || "We could not save your subscription right now.");
        return;
      }

      setStatus("success");
      setMessage(body.message || "Thanks for subscribing.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("A network error prevented the subscription from being saved.");
    }
  }

  return (
    <motion.form
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className={cn("w-full", compact && "max-w-sm")}
      noValidate
    >
      <div className={cn("flex flex-col gap-3 sm:flex-row", compact && "sm:flex-col") }>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-feedback"
          className="w-full rounded border border-[#E4E5DE] bg-white px-4 py-3 text-sm text-[#202522] placeholder:text-[#626A63] focus:border-[#244C3A] focus:outline-none focus:ring-2 focus:ring-[#244C3A]/20"
        />
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          className="inline-flex items-center justify-center rounded bg-[#244C3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173629] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Subscribe"}
        </motion.button>
      </div>

      <div id="newsletter-feedback" aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm">
        {message ? (
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              status === "success" ? "text-[#244C3A]" : "text-[#8C3A2A]",
              "leading-relaxed"
            )}
          >
            {message}
          </motion.p>
        ) : null}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[#626A63]">
        By subscribing, you agree to our <Link href="/privacy" className="font-medium text-[#244C3A] underline-offset-2 hover:underline">Privacy Notice</Link>.
      </p>
    </motion.form>
  );
}
