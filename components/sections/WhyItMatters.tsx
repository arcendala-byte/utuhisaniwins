import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { homeCopy } from "@/data/home";
import { siteImages } from "@/data/images";

export function WhyItMatters() {
  const { storytelling } = homeCopy;

  return (
    <section className="section-pad-lg bg-sand">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative aspect-[16/10] overflow-hidden bg-ivory lg:col-span-7">
            <Image
              src={siteImages.storytelling.src}
              alt={siteImages.storytelling.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="type-section-title text-ink text-balance">
              {storytelling.title}
            </h2>
            <p className="mt-6 max-w-lg text-muted leading-relaxed">
              {storytelling.body}
            </p>
            <TextLink href={storytelling.link.href} className="mt-6 text-sm">
              {storytelling.link.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
