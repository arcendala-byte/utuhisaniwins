import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { programs } from "@/data/programs";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Utuhisaniwins focuses on education and healthcare access for Maasai girls and their communities in Kenya.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#202522]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.help.src}
alt={siteImages.help.alt}
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#202522]/65" />
        </div>

        <Container className="relative z-10">
          <div className="grid min-h-[500px] grid-cols-1 items-end py-16 md:min-h-[560px] md:py-20">
            <Reveal className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F5EF]/75">
                Our work
              </p>
              <h1 className="mt-5 text-balance text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white md:text-[4rem] lg:text-[5rem]">
                Two priorities, one shared goal.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                Utuhisaniwins is focused on the two foundations that shape a girl’s future: education and healthcare.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {programs.map((program, index) => {
        const even = index % 2 === 0;

        return (
          <section
            key={program.id}
            id={program.id}
            className={even ? "bg-[#F7F5EF] py-12 md:py-16" : "bg-white py-12 md:py-16"}
          >
            <Container>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={even ? "lg:col-span-5" : "lg:col-span-5 lg:order-2"} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-[10px] border border-[#E4E5DE] bg-[#F3F0EC] shadow-[0_18px_38px_rgba(32,37,34,0.04)]">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      width={900}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </Reveal>

                <Reveal className={even ? "lg:col-span-7" : "lg:col-span-7 lg:order-1"} delay={index * 0.08 + 0.05}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                    {program.number} — {program.title}
                  </p>
                  <h2 className="mt-4 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.8rem]">
                    {program.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#626A63]">
                    {program.shortDescription}
                  </p>

                  <div className="mt-8 space-y-8">
                    {[
                      { label: "What we do", body: program.whatWeDo },
                      { label: "Why it matters", body: program.whyItMatters },
                      { label: "Who benefits", body: program.whoBenefits },
                      { label: "Future goals", body: program.futureGoals },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#E4E5DE] pt-5">
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                          {item.label}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[#626A63]">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-[#202522] py-12 text-white md:py-16">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F5EF]/80">
              Take action
            </p>
            <h2 className="mt-4 text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-[3rem]">
              Support the work behind brighter futures.
            </h2>
            <div className="mt-8">
              <Button href="/donate" size="lg" className="bg-[#244C3A] text-white hover:bg-[#173629]">
                Support Utuhisaniwins
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}