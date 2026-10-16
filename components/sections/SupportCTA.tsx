import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy } from "@/data/home";

export function SupportCTA() {
  const { support } = homeCopy;

  return (
    <section className="border-t border-border bg-[#0A0A0A] text-white">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfdbfe]">
              Support
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[3rem]">
              {support.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">{support.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={support.primary.href} size="lg">
                {support.primary.label}
              </Button>
              <a
                href={support.secondary.href}
                target={support.secondary.href.startsWith("http") ? "_blank" : undefined}
                rel={support.secondary.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded border border-white/25 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/5"
              >
                {support.secondary.label}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
