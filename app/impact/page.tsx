import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  HeartHandshake,
  BookOpen,
  HeartPulse,
  Users,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { impactPriorities, impactNotice } from "@/data/impact";
import generosityMasai from "../gallery/images/generosity_masai.jpg";

export const metadata: Metadata = {
  title: "Our Impact | Utuhisaniwins",
  description:
    "Discover how Utuhisaniwins works alongside Maasai girls, families, and communities in Kenya to support education, healthcare, dignity, and opportunity.",
};

const focusAreas = [
  {
    number: "01",
    title: "Education and opportunity",
    description:
      "Every girl deserves the opportunity to learn, develop her abilities, and imagine a future shaped by her own ambitions. We focus on addressing barriers that can interrupt education and encouraging girls to continue learning.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Health and wellbeing",
    description:
      "Access to appropriate healthcare and reliable health information is an important part of a girl's wellbeing. We aim to support awareness, dignity, and pathways to the care girls and families need.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Community partnership",
    description:
      "Lasting progress grows through listening and working together. By engaging families, local leaders, and community members, we seek to support solutions that reflect local priorities and lived experiences.",
    icon: Users,
  },
  {
    number: "04",
    title: "Safety and dignity",
    description:
      "Girls should be able to grow, learn, and participate in their communities with dignity and respect. We champion an environment where their voices are heard and their wellbeing matters.",
    icon: ShieldCheck,
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#202522] sm:min-h-[600px] lg:min-h-[660px]">
        <Image
          src={generosityMasai}
          alt="Maasai community in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14251D]/95 via-[#14251D]/75 to-[#14251D]/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#202522]/45 to-transparent"
          aria-hidden="true"
        />

        <Container>
          <div className="relative z-10 max-w-3xl py-20 sm:py-24">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6DFC9]">
              <span className="h-px w-8 bg-[#C6DFC9]" />
              Our impact
            </p>

            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Every girl deserves the chance to thrive.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
              We work alongside Maasai girls, families, and communities in
              Kenya to help strengthen access to education, healthcare, and
              opportunities for a more hopeful future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/donate" size="lg">
                Support Our Mission
              </Button>
              <Button href="/gallery" variant="secondary" size="lg">
                See Our Community
              </Button>
            </div>

            <a
              href="#our-approach"
              className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              Discover our approach
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section id="our-approach" className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
                Why this work matters
              </p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#202522] sm:text-5xl">
                Opportunity should not depend on circumstance.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5F5F5F] sm:text-lg sm:leading-9">
              <p>
                A girl&apos;s ability to learn, stay healthy, and pursue her
                aspirations can be affected by barriers beyond her control.
                Financial pressures, limited access to services, and
                challenges within the wider community can make it harder to
                realise her potential.
              </p>
              <p>
                Utuhisaniwins is committed to working with Maasai girls and
                their communities to help address these challenges. We believe
                meaningful support starts with listening, respecting local
                knowledge, and understanding the needs and aspirations of the
                people at the heart of the work.
              </p>
              <p>
                Our vision is about more than immediate assistance. It is about
                helping create an environment where girls are encouraged to
                continue their education, seek appropriate healthcare, develop
                confidence, and take part in shaping their futures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="bg-[#F5F3EF] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
              Our priorities
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#202522] sm:text-5xl">
              Building change around what matters.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5F5F5F]">
              Our work is guided by interconnected priorities that put girls&apos;
              wellbeing, aspirations, and communities at the centre.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group border-t border-[#D9D8D1] pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#244C3A]">
                      {item.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244C3A] transition-colors group-hover:bg-[#244C3A] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#202522]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5F5F5F] sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Existing impact priorities */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
              Turning purpose into action
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#202522] sm:text-5xl">
              The priorities guiding our work.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {impactPriorities.map((item) => (
              <article
                key={item.number}
                className="border-t border-[#E5E5E5] pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  {item.number}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#202522]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5F5F5F] sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-7 text-[#5F5F5F]">
            <span className="font-semibold text-[#244C3A]">A note on impact: </span>
            {impactNotice}
          </p>
        </Container>
      </section>

      {/* Community approach */}
      <section className="bg-[#202522] py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#C6DFC9]">
                <HeartHandshake size={24} strokeWidth={1.6} aria-hidden="true" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6DFC9]">
                Rooted in community
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl">
                Lasting progress starts by listening.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/75">
              <p>
                Communities understand their own strengths, challenges, and
                hopes. We believe support is most meaningful when it respects
                that knowledge and gives girls and families a voice in the
                decisions that affect them.
              </p>
              <p>
                We aspire to build relationships based on trust, dignity,
                accountability, and shared purpose, while learning from the
                community and improving our approach over time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to action */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#EAF0E8] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#244C3A]/10 sm:h-80 sm:w-80"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-5 -top-9 h-48 w-48 rounded-full border border-[#244C3A]/10 sm:h-64 sm:w-64"
              aria-hidden="true"
            />

            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#244C3A]">
                Be part of the change
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#202522] sm:text-5xl lg:text-6xl">
                Help make room for every girl&apos;s potential.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4F5B52] sm:text-lg">
                Your support can help Utuhisaniwins pursue its mission of
                expanding opportunity, promoting wellbeing, and working
                alongside Maasai communities in Kenya.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/donate" size="lg">
                  <span className="inline-flex items-center gap-2">
                    Support Our Mission
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </Button>
                <Button href="/gallery" variant="secondary" size="lg">
                  Explore the Gallery
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}