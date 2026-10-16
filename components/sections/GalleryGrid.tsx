
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Images,
} from "lucide-react";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const shouldReduceMotion = useReducedMotion();

  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % gallery.length
    );
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + gallery.length) % gallery.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  if (gallery.length === 0) {
    return (
      <div className="relative overflow-hidden border border-[#E5E5E5] bg-white p-8 sm:p-12 lg:p-16">
        <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-[#244C3A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#244C3A]/15 bg-[#F7F5EF] text-[#244C3A]">
            <Images size={25} strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
            Our community in pictures
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#202522] sm:text-4xl lg:text-5xl">
            Every story deserves to be seen.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#626761] sm:text-base">
            Community photographs will be shared here once approved
            by the organization. We are committed to representing
            the people and communities we serve with dignity and respect.
          </p>
        </div>
      </div>
    );
  }

  const activeItem =
    activeIndex === null ? null : gallery[activeIndex];

  return (
    <>
      {/* Gallery introduction */}
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
            <span className="h-px w-7 bg-[#244C3A]" />
            Our photo stories
          </div>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#202522] sm:text-4xl lg:text-5xl">
            Moments that bring us together.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#686B65] sm:text-base">
            Explore the people, experiences, and community moments
            behind our work.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-[#686B65]">
          <Images size={16} className="text-[#244C3A]" />
          <span>
            {gallery.length} {gallery.length === 1 ? "photo" : "photos"}
          </span>
        </div>
      </div>

      {/* Responsive editorial gallery */}
      <div className="grid auto-rows-[155px] grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[230px] lg:grid-cols-3 xl:auto-rows-[250px] xl:grid-cols-4">
        {gallery.map((item, index) => {
          const span = item.span ?? "normal";

          return (
            <motion.article
              key={item.id}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : (index % 4) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative isolate min-h-0 overflow-hidden bg-[#E9E6DD]",
                spanClasses[span] ?? ""
              )}
            >
              {/* Image and lightbox trigger */}
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image: ${item.alt}`}
                className="absolute inset-0 h-full w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8BC5A5]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index < 2}
                  sizes={
                    span === "wide"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    !shouldReduceMotion &&
                      "group-hover:scale-[1.06]"
                  )}
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101713]/90 via-[#101713]/15 to-black/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle brand-color wash */}
                <div className="absolute inset-0 bg-[#244C3A]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Expand indicator */}
                <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center border border-white/30 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </span>

                {/* Photo number */}
                <span className="absolute left-3 top-3 text-[10px] font-semibold tracking-[0.16em] text-white/90 sm:left-4 sm:top-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>

              {/* Photo caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-3 text-white sm:p-4 lg:p-5">
                <motion.div
                  initial={false}
                  className="flex items-end justify-between gap-2"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B9D9C5] sm:text-[10px]">
                      Community stories
                    </p>

                    <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug tracking-[-0.01em] sm:text-base lg:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                      {item.description}
                    </p>
                  </div>

                  <span className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-white/30 text-white transition-colors duration-300 group-hover:border-[#B9D9C5] group-hover:bg-[#244C3A]">
                    <ArrowUpRight size={14} />
                  </span>
                </motion.div>

                {/* Read story link remains independently clickable */}
                <div className="pointer-events-auto mt-3 border-t border-white/20 pt-2.5">
                  <Link
                    href={`/stories/${item.id}`}
                    aria-label={`Read more about ${item.title}`}
                    className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 transition-colors hover:text-[#B9D9C5] sm:text-[10px]"
                  >
                    Read story
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {isOpen && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#101713]/95 p-3 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:right-6 sm:top-6"
            >
              <X size={23} />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-[40%] z-30 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/30 text-white transition-colors hover:bg-white/15 sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={25} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-[40%] z-30 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/30 text-white transition-colors hover:bg-white/15 sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={25} />
            </button>

            {/* Main image */}
            <motion.div
              key={activeItem.id}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.97 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
              }}
              className="relative h-[55vh] w-full max-w-6xl sm:h-[65vh] lg:h-[70vh]"
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Image details */}
            <div className="absolute inset-x-4 bottom-4 mx-auto max-w-3xl border border-white/10 bg-[#202522]/90 p-4 text-white backdrop-blur-xl sm:inset-x-8 sm:bottom-6 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B9D9C5]">
                    Photo {String(activeIndex! + 1).padStart(2, "0")} /{" "}
                    {String(gallery.length).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold sm:text-2xl">
                    {activeItem.title}
                  </h3>
                </div>

                <Link
                  href={`/stories/${activeItem.id}`}
                  className="inline-flex shrink-0 items-center gap-2 border border-white/20 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[#B9D9C5] hover:bg-[#244C3A] sm:text-[10px]"
                >
                  Read story
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/70 sm:text-sm">
                {activeItem.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}