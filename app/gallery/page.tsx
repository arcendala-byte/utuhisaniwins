
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import masaiStudentImage from "./images/masai_students.jpg";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from the field — the smiles, the milestones, and the girls behind our work.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Gallery hero with background image */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#202522] sm:min-h-[480px] lg:min-h-[560px]">
        {/* Background image */}
        <Image
  src={masaiStudentImage}
  alt="Community generosity in action"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

        {/* Dark green overlay for text contrast */}
        <div
          className="absolute inset-0 -z-0 bg-gradient-to-r from-[#14251D]/90 via-[#14251D]/65 to-[#14251D]/25"
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#202522]/40 to-transparent"
          aria-hidden="true"
        />

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-4xl py-16 sm:py-20 lg:py-24">
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C6DFC9]">
                <span className="h-px w-8 bg-[#C6DFC9]" />
                Our gallery
              </span>

              <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Moments from
                <br />
                the field.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Real moments from our work with Maasai girls and their
                communities. Every photograph tells a story of courage,
                connection, and possibility.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                <span className="h-px w-10 bg-[#C6DFC9]" />
                Stories worth sharing
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Gallery grid */}
      <section className="bg-[#F7F5EF] pb-20 pt-12 sm:pt-16 lg:pb-32 lg:pt-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
