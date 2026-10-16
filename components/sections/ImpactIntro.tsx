import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/data/home";

export function ImpactIntro() {
  const { mission } = homeCopy;

  return (
    <section className="section-pad bg-ivory">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="type-section-title text-ink text-balance">
              {mission.headline}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:pt-2" delay={0.08}>
            <p className="type-lead">{mission.body}</p>
            <Link href={mission.link.href} className="text-link mt-6 inline-block text-sm font-medium">
              {mission.link.label}
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
