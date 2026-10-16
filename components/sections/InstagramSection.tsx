"use client";

import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function InstagramSection() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-500/10 text-terracotta-600 mb-6">
              <Camera size={20} />
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 leading-[1.1] text-balance">
              Follow Our Journey
            </h2>
            <p className="mt-6 text-lg text-charcoal-700/80 leading-relaxed">
              See the day-to-day moments, the milestones, and the smiles that
              make this work possible.
            </p>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-terracotta-600 hover:text-terracotta-500 font-medium text-lg underline-offset-4 hover:underline transition-all"
            >
              {siteConfig.social.instagram.handle}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}