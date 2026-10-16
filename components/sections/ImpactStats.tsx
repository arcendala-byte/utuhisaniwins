import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { impactIntro, impactPriorities } from "@/data/impact";

export function ImpactStats() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>{impactIntro.label}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.05] text-balance">
              {impactIntro.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted text-pretty">
              {impactIntro.note}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {impactPriorities.map((item) => (
                <li key={item.title} className="border border-[#E5E5E5] bg-[#F7F5F1] p-6">
                  <h3 className="font-display text-xl text-ink lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}