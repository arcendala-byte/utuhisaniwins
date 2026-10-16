import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ImpactIntro } from "@/components/sections/ImpactIntro";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedStory } from "@/components/sections/FeaturedStory";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { AboutOrganization } from "@/components/sections/AboutOrganization";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { SupportCTA } from "@/components/sections/SupportCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { siteImages } from "@/data/images";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ImpactIntro />

      <WhatWeDo />

      <FeaturedStory />

      <ImpactStats />

      <AboutOrganization />

      {/* Where we work */}
      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-[12px] border border-[#E4E5DE] bg-white shadow-[0_20px_45px_rgba(32,37,34,0.05)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={siteImages.featured.src}
                    alt={siteImages.featured.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Where we work
                </p>

                <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[3rem]">
                  Kajiado County and the communities around it.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#626A63] md:text-lg">
                  Our work is rooted in Kajiado, Kenya, and shaped by the
                  realities, needs, and strengths of the families and girls we
                  support in the region.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[10px] border border-[#E4E5DE] bg-white p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                      Location
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#202522]">
                      Kajiado, Kenya
                    </p>
                  </div>

                  <div className="rounded-[10px] border border-[#E4E5DE] bg-white p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                      Focus
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#202522]">
                      Girls, families, and local care
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Take action */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="rounded-[18px] border border-[#E4E5DE] bg-[#F7F5EF] p-6 md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                    Take action
                  </p>

                  <h2 className="mt-4 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.8rem]">
                    Support the work that helps girls keep learning and growing.
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button
                    href="/donate"
                    size="lg"
                    className="bg-[#244C3A] text-white hover:bg-[#173629]"
                  >
                    Donate
                  </Button>

                  <Link
                    href="/take-action"
                    className="inline-flex items-center justify-center rounded border border-[#E4E5DE] bg-white px-5 py-3 text-sm font-semibold text-[#202522] hover:border-[#244C3A] hover:text-[#244C3A]"
                  >
                    Learn how to help
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <GalleryPreview />

      <SupportCTA />

      {/* Newsletter */}
      <section
        id="stay-informed"
        className="bg-[#F7F5EF] py-12 md:py-16"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Stay informed
                </p>

                <h2 className="mt-4 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[3rem]">
                  Receive updates about community support and opportunities.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <NewsletterForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}