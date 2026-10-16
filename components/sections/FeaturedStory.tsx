import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { missionFeature } from "@/data/impact";

export function FeaturedStory() {
  return (
    <section className="bg-[#F5F3EF] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="flex min-h-[260px] items-center justify-center border border-[#E5E5E5] bg-white p-8 text-center lg:min-h-[320px]">
              <div className="max-w-lg">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  {missionFeature.label}
                </p>
                <h3 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] md:text-[2.8rem]">
                  A mission shaped by lived experience.
                </h3>
                <p className="mt-5 text-base leading-7 text-[#5F5F5F] md:text-lg">
                  Simayo Rempeyian founded Utuhisaniwins after seeing how practical support could change a girl’s future. The organization was built so other Maasai girls could access education, healthcare, and a future with dignity.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                {missionFeature.label}
              </p>
              <h2 className="mt-4 text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] md:text-[2.8rem]">
                {missionFeature.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5F5F5F] lg:text-lg">
                {missionFeature.body}
              </p>
              <div className="mt-8">
                <TextLink href={missionFeature.link.href}>{missionFeature.link.label}</TextLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}