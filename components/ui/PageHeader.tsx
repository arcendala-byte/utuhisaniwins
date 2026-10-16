import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-ivory pt-28 pb-12 lg:pt-36 lg:pb-16">
      <Container>
        <span className="type-label text-accent">{eyebrow}</span>
        <h1 className="type-hero mt-4 max-w-4xl text-ink text-balance">{title}</h1>
        {description && (
          <p className="type-lead mt-6">{description}</p>
        )}
      </Container>
    </section>
  );
}
