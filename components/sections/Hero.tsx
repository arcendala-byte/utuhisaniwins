
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { homeCopy } from "@/data/home";
import heroImage from "@/app/gallery/images/hero.jpg";

const headlines = [
  "Every girl deserves a future with dignity.",
  "Empowering girls. Transforming communities.",
  "Together, we can turn hope into opportunity.",
];

export function Hero() {
  const { hero } = homeCopy;
  const shouldReduceMotion = useReducedMotion();

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const currentHeadline = headlines[headlineIndex];
  const reduceMotion = shouldReduceMotion === true;

  // Type and erase the headlines in sequence.
  useEffect(() => {
    if (reduceMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && typedText.length < currentHeadline.length) {
      timeout = setTimeout(() => {
        setTypedText(currentHeadline.slice(0, typedText.length + 1));
      }, 55);
    } else if (!deleting && typedText.length === currentHeadline.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2200);
    } else if (deleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentHeadline.slice(0, typedText.length - 1));
      }, 25);
    } else {
      timeout = setTimeout(() => {
        setHeadlineIndex((previous) => (previous + 1) % headlines.length);
        setDeleting(false);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [typedText, deleting, currentHeadline, reduceMotion]);

  // Reveal the supporting content once the first headline is complete.
  useEffect(() => {
    if (reduceMotion) {
      const timeout = setTimeout(() => {
        setTypingComplete(true);
      }, 0);

      return () => clearTimeout(timeout);
    }

    if (
      !typingComplete &&
      headlineIndex === 0 &&
      !deleting &&
      typedText === headlines[0]
    ) {
      const timeout = setTimeout(() => {
        setTypingComplete(true);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [
    reduceMotion,
    typingComplete,
    headlineIndex,
    deleting,
    typedText,
  ]);

  const displayedHeadline = reduceMotion
    ? headlines[0]
    : typedText;

  return (
    <section className="relative isolate overflow-hidden bg-[#202522]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Utuhisaniwins community work in Kajiado, Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#202522]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#202522]/70 via-[#202522]/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[560px] grid-cols-1 items-end py-16 md:min-h-[620px] md:py-20 lg:grid-cols-8 lg:py-24">
          <motion.div
            className="max-w-2xl lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <motion.p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#C6DFC9] md:text-sm"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.2,
              }}
            >
              {hero.eyebrow}
            </motion.p>

            {/* Rotating typewriter headline */}
            <h1
              aria-label={displayedHeadline}
              aria-live="off"
              className="min-h-[2.4em] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:min-h-[2.3em] md:text-6xl lg:text-7xl"
            >
              {displayedHeadline}
              {!reduceMotion && (
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[0.85em] translate-y-[0.06em] animate-pulse border-r-2 border-[#C6DFC9]"
                />
              )}
            </h1>

            {/* Supporting text */}
            <motion.p
              className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg md:leading-8"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{
                opacity: typingComplete ? 1 : 0,
                y: typingComplete ? 0 : 12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
              }}
            >
              {hero.supporting}
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{
                opacity: typingComplete ? 1 : 0,
                y: typingComplete ? 0 : 12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.1,
              }}
            >
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>

              <Button href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
