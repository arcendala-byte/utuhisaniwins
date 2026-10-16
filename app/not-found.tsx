import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-cream pt-32 pb-24">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta-600 font-medium">
            404 — Not Found
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-[0.95] text-balance">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 text-lg text-charcoal-700/80">
            Let&apos;s get you back to a place that does.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/" size="lg">
              Return Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}