
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { gallery } from "@/data/gallery";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gallery.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = gallery.find((item) => item.id === slug);

  if (!story) {
    return {
      title: "Story Not Found | Utuhisaniwins",
      description: "The requested gallery story could not be found.",
    };
  }

  return {
    title: `${story.title} | Utuhisaniwins`,
    description: story.description,
    openGraph: {
      title: `${story.title} | Utuhisaniwins`,
      description: story.description,
      images: [
        {
          url: story.src,
          alt: story.alt,
        },
      ],
    },
  };
}

function StoryLoading() {
  return (
    <>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <Container>
          <div
            role="status"
            aria-label="Loading gallery story"
            className="animate-pulse"
          >
            <div className="h-4 w-32 rounded bg-[#E9E7E1]" />

            <div className="mt-8 h-3 w-24 rounded bg-[#E9E7E1]" />

            <div className="mt-5 h-12 max-w-3xl rounded bg-[#E9E7E1] md:h-16" />

            <div className="mt-6 h-5 max-w-2xl rounded bg-[#E9E7E1]" />
            <div className="mt-3 h-5 max-w-xl rounded bg-[#E9E7E1]" />
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="aspect-[4/3] animate-pulse rounded-xl bg-[#E9E7E1] lg:col-span-5" />

            <div className="space-y-5 lg:col-span-7">
              <div className="h-5 animate-pulse rounded bg-[#E9E7E1]" />
              <div className="h-5 animate-pulse rounded bg-[#E9E7E1]" />
              <div className="h-5 w-5/6 animate-pulse rounded bg-[#E9E7E1]" />
              <div className="h-5 animate-pulse rounded bg-[#E9E7E1]" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function GalleryStoryPage({ params }: StoryPageProps) {
  return (
    <Suspense fallback={<StoryLoading />}>
      <GalleryStoryContent params={params} />
    </Suspense>
  );
}

async function GalleryStoryContent({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = gallery.find((item) => item.id === slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      {/* Story introduction */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <Container>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#244C3A] transition-colors hover:text-[#183326] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244C3A]"
          >
            <span aria-hidden="true">←</span>
            Back to gallery
          </Link>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
            Gallery story
          </p>

          <h1 className="mt-4 max-w-4xl text-balance text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#202522] md:text-[4rem]">
            {story.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626A63]">
            {story.description}
          </p>
        </Container>
      </section>

      {/* Story image and full narrative */}
      <section className="bg-[#F7F5EF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E9E7E1]">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>

              <div className="mt-5 border-l-2 border-[#B28A45] pl-4">
                <p className="text-sm font-semibold text-[#244C3A]">
                  Utuhisaniwins
                </p>
                <p className="mt-1 text-sm leading-6 text-[#626A63]">
                  Supporting Maasai girls and their communities through
                  education and healthcare in Kajiado, Kenya.
                </p>
              </div>
            </div>

            <article className="lg:col-span-7">
              <div className="space-y-5 text-base leading-8 text-[#454C47] md:text-lg">
                {story.story.map((paragraph, index) => (
                  <p key={`${story.id}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border-t border-[#DDD9D0] pt-6">
                <p className="text-sm leading-6 text-[#626A63]">
                  This story reflects the information currently available to
                  Utuhisaniwins. Specific event dates, participants, activities,
                  and outcomes are included only when verified by the
                  organization.
                </p>

                <Link
                  href="/gallery"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#244C3A] transition-colors hover:text-[#183326] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244C3A]"
                >
                  Explore more stories
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
