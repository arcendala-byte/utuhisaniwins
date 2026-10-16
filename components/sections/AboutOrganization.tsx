import Image from "next/image";
import Link from "next/link";
import handsImage from "@/app/gallery/images/hands.jpeg";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutOrganization() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#E5E5E5] bg-[#F5F3EF]">
              <Image
                src={handsImage}
                alt="Hands supporting a young girl and her community"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/55 via-[#0A0A0A]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-3 inline-flex items-center rounded-[4px] border border-white/40 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-[2px]">
                  About us
                </div>
                <p className="max-w-sm text-lg font-medium leading-7 text-white">
                  Community-led support for girls, families, and local health and learning needs.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                About the organization
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] md:text-[2.8rem]">
                A steady, community-rooted effort for girls and their future.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5F5F]">
                Utuhisaniwins is grounded in the belief that every Maasai girl deserves access to learning, healthcare, and the opportunity to grow with dignity. We work with communities in Kajiado to respond to local needs with respect, care, and practical support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center justify-center rounded-[4px] bg-[#244C3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173629]">
                  Learn about our mission
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
