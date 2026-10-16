import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Latest",
  description:
    "Read recent updates, community stories, and opportunities from Utuhisaniwins.",
};

const updates = [
  {
    title: "Community support and education updates",
    category: "News",
    summary:
      "Recent communication from the team focuses on practical support for girls, families, and community care in Kajiado.",
  },
  {
    title: "Healthcare access remains a core need",
    category: "Focus",
    summary:
      "Many families need consistent support for health, wellbeing, and care so girls can stay in school and continue to thrive.",
  },
  {
    title: "Opportunities to stand with local communities",
    category: "Engagement",
    summary:
      "Friends of Utuhisaniwins can help by sharing information, supporting practical needs, and staying connected with the work.",
  },
];

export default function LatestPage() {
  return (
    <>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
            Latest
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#202522] md:text-[4rem]">
            Stories, updates, and community moments.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626A63]">
            This page highlights honest updates from the work taking place in Kajiado and the practical support needed around education and healthcare.
          </p>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="space-y-6">
            {updates.map((item) => (
              <article
                key={item.title}
                className="rounded-[12px] border border-[#E4E5DE] bg-white p-6 shadow-[0_20px_45px_rgba(32,37,34,0.03)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  {item.category}
                </p>
                <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202522] md:text-[2.3rem]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#626A63]">{item.summary}</p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded border border-[#E4E5DE] bg-white px-4 py-2.5 text-sm font-semibold text-[#202522] transition-colors hover:border-[#244C3A] hover:text-[#244C3A]"
                  >
                    Contact the team
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
