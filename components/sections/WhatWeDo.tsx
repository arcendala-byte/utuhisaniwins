"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { homeCopy } from "@/data/home";
import { programs } from "@/data/programs";

export function WhatWeDo() {
  const { work } = homeCopy;
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-[#E4E5DE] bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
            {work.label}
          </p>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[3rem]">
            {work.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#626A63] md:text-lg">
            {work.intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-12 lg:space-y-16">
          {programs.map((program, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <Reveal key={program.id} delay={index * 0.06}>
                <motion.article
                  id={program.id}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 items-center gap-8 border border-[#E4E5DE] bg-[#F7F5EF] p-4 md:p-5 lg:grid-cols-12 lg:gap-10 lg:p-7"
                >
                  <div className={imageFirst ? "lg:col-span-5" : "lg:col-span-5 lg:order-2"}>
                    <div className="relative overflow-hidden bg-[#F3F0EC]">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={program.image}
                          alt={program.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={imageFirst ? "lg:col-span-7" : "lg:col-span-7 lg:order-1"}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                      {program.number} — {program.title}
                    </p>
                    <h3 className="mt-3 text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202522] md:text-[2.5rem]">
                      {program.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#626A63] md:text-lg">
                      {program.shortDescription}
                    </p>
                    <div className="mt-6 border-t border-[#E4E5DE] pt-5">
                      <p className="text-sm leading-7 text-[#626A63]">
                        {program.whatWeDo}
                      </p>
                    </div>
                    <div className="mt-6">
                      <TextLink href={program.href} className="text-sm">
                        Learn about {program.title.toLowerCase()}
                      </TextLink>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
