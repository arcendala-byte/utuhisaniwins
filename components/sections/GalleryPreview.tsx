"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { homeCopy } from "@/data/home";

export function GalleryPreview() {
  const { gallery: copy } = homeCopy;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">{copy.label}</p>
              <h2 className="mt-2 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#0A0A0A] md:text-[2.6rem]">
                {copy.title}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <TextLink href={copy.link.href} className="shrink-0 text-sm">
              {copy.link.label}
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Education",
              text: "Practical support that helps girls stay in school and continue learning with confidence.",
            },
            {
              title: "Healthcare",
              text: "Community care that supports health, wellbeing, and everyday dignity.",
            },
            {
              title: "Partnership",
              text: "Local collaboration that keeps solutions rooted in the realities of Maasai communities.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full border border-[#E5E5E5] bg-[#F7F5F1] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[#5F5F5F]">{item.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
