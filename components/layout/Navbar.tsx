
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Camera,
  Image as ImageIcon,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
{/* Top contact bar */}
<div className="bg-[#202522] text-white">
  <div className="container-editorial grid grid-cols-2 items-center gap-x-3 gap-y-3 py-3 text-[11px] sm:flex sm:min-h-10 sm:flex-wrap sm:justify-between sm:gap-5 sm:py-2 sm:text-xs">
    {/* Left side: phone and email */}
    <div className="col-span-1 flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
      {siteConfig.contact.phones.map((phone) => (
        <a
          key={phone}
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="inline-flex min-w-0 max-w-full items-start gap-2 text-white/85 transition-colors hover:text-white sm:items-center"
        >
          <Phone
            size={13}
            aria-hidden="true"
            className="mt-0.5 shrink-0 sm:mt-0"
          />
          <span className="min-w-0 break-words [overflow-wrap:anywhere]">
            {phone}
          </span>
        </a>
      ))}

      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="inline-flex min-w-0 max-w-full items-start gap-2 text-white/85 transition-colors hover:text-white sm:items-center"
      >
        <Mail
          size={13}
          aria-hidden="true"
          className="mt-0.5 shrink-0 sm:mt-0"
        />
        <span className="min-w-0 break-words [overflow-wrap:anywhere]">
          {siteConfig.contact.email}
        </span>
      </a>
    </div>

    {/* Right side: Instagram and Gallery */}
    <div className="col-span-1 flex min-w-0 flex-col items-end gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-5 sm:gap-y-2">
      <a
        href={siteConfig.social.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 text-white/85 transition-colors hover:text-white"
      >
        <Camera size={13} aria-hidden="true" />
        <span>Instagram</span>
      </a>

      <Link
        href="/gallery"
        aria-label="Explore our gallery"
        className="group inline-flex shrink-0 items-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
      >
        <motion.span
          className="relative inline-flex shrink-0"
          animate={
            shouldReduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.1, 1] }
          }
          transition={{
            duration: 2,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <ImageIcon
            size={14}
            aria-hidden="true"
            className="transition-colors duration-300 group-hover:text-[#8BC5A5]"
          />

          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#8BC5A5]"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.span>

        <span className="relative">
          Gallery
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-px w-full origin-left bg-[#8BC5A5] transition-transform duration-300",
              pathname === "/gallery"
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            )}
          />
        </span>
      </Link>
    </div>
  </div>
</div>
      {/* Main navigation */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: "#F7F5EF",
          y: 0,
        }}
        className={cn(
          "sticky top-0 z-50 border-b bg-[#F7F5EF] transition-[padding,border-color,background-color] duration-150",
          scrolled
            ? "border-[#E4E5DE] py-3"
            : "border-[#E4E5DE] py-4"
        )}
      >
        <div className="container-editorial flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Utuhisaniwins home"
            className="shrink-0"
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Main navigation"
          >
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-150",
                    active
                      ? "text-[#244C3A]"
                      : "text-[#202522] hover:text-[#244C3A]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Donate button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/donate"
              size="sm"
              className="bg-[#244C3A] text-white hover:bg-[#173629]"
            >
              Donate
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-[4px] p-2 text-ink transition-colors hover:text-accent lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }
            }
            animate={{ opacity: 1 }}
            exit={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial={
                shouldReduceMotion ? { y: 0 } : { y: 16 }
              }
              animate={{ y: 0 }}
              exit={
                shouldReduceMotion ? { y: 0 } : { y: 16 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
              }}
              className="container-editorial flex h-full flex-col pt-24 pb-8"
            >
              <nav
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {siteConfig.nav.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: -8 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border py-4 text-2xl font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <Button
                  href="/donate"
                  size="lg"
                  className="w-full bg-[#244C3A] text-white hover:bg-[#173629]"
                >
                  Donate
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}