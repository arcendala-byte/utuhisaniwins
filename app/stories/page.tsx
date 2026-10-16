import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Community stories and field updates from Utuhisaniwins. Approved stories and media will be published here when available.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
            Stories
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#0A0A0A] md:text-[4rem]">
            Community stories, carefully shared.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5F5F]">
            We tell stories only when they are verified, respectful, and appropriate to share. Until approved content is available, this page shares the organization&apos;s mission and the work that continues in the field.
          </p>
        </Container>
      </section>

      <section className="bg-[#F5F3EF] py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[10px] border border-[#E5E5E5] bg-white">
                <Image
                  src={siteImages.storytelling.src}
                  alt={siteImages.storytelling.alt}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] md:text-[2.6rem]">
                A story built around care, dignity, and local leadership.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F]">
                Utuhisaniwins began with one simple idea: girls should not have to face education and healthcare barriers alone. Simayo Rempeyian brought that belief to life through practical support, community listening, and a clear commitment to helping girls move forward with confidence.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F]">
                We share stories intentionally and only as a reflection of what the organization has confirmed and can stand behind. Every photograph and narrative is guided by respect for the people we serve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F5F3EF] pb-16 pt-8 md:pb-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
