
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Mail,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Take Action",
  description:
    "Find out how to support Utuhisaniwins and its work with girls and families in Kajiado, Kenya.",
};

const actions = [
  {
    title: "Make a donation",
    description:
      "Your contribution can support our work to improve access to education, healthcare, and community support for girls and families.",
    href: "/donate",
    linkText: "Donate to Utuhisaniwins",
    Icon: Heart,
  },
  {
    title: "Learn about our work",
    description:
      "Read about our mission, the communities we serve, and the issues that shape our work in Kajiado.",
    href: "/work",
    linkText: "Explore our work",
    Icon: BookOpen,
  },
  {
    title: "Work with us",
    description:
      "If you represent an organisation, school, or community group, we welcome conversations about possible collaboration.",
    href: "/contact",
    linkText: "Discuss a partnership",
    Icon: Users,
  },
  {
    title: "Keep in touch",
    description:
      "Stay connected with our work and look out for updates, news, and opportunities to get involved.",
    href: "/#stay-informed",
    linkText: "Get updates",
    Icon: Mail,
  },
];

export default function TakeActionPage() {
  return (
    <main className="bg-white text-[#202522]">
      {/* Introduction */}
      <section className="border-b border-[#E4E5DE] bg-[#F7F5EF]">
        <Container>
          <div className="max-w-3xl py-14 sm:py-18 md:py-24">
            <p className="text-sm font-medium text-[#244C3A]">
              Take action
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              How you can support our work
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#626A63] md:text-lg">
              There are different ways to support Utuhisaniwins. You can make
              a donation, learn more about our work, share our mission, or
              contact us about working together. Every form of support is
              appreciated.
            </p>

            <div className="mt-8">
              <Button
                href="/donate"
                size="lg"
                className="bg-[#244C3A] text-white hover:bg-[#173629]"
              >
                Make a donation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Ways to get involved */}
      <section className="py-14 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ways to get involved
            </h2>
            <p className="mt-3 text-base leading-7 text-[#626A63]">
              Choose the option that works best for you.
            </p>
          </div>

          <div className="mt-8 grid border-t border-[#E4E5DE] sm:grid-cols-2">
            {actions.map(({ title, description, href, linkText, Icon }) => (
              <article
                key={title}
                className="border-b border-[#E4E5DE] py-7 sm:px-6 sm:py-8 first:sm:pl-0 [&:nth-child(odd)]:sm:border-r [&:nth-child(odd)]:sm:pr-8 [&:nth-child(even)]:sm:pl-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F3ED] text-[#244C3A]">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#626A63] sm:text-base">
                      {description}
                    </p>

                    <Link
                      href={href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#244C3A] hover:text-[#52745B]"
                    >
                      {linkText}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact and donation */}
      <section className="pb-14 sm:pb-16 md:pb-20">
        <Container>
          <div className="grid gap-0 overflow-hidden rounded-xl border border-[#E4E5DE] md:grid-cols-2">
            <div className="bg-[#244C3A] p-7 text-white sm:p-9 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Support our work
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                If you would like to contribute to our work with girls and
                families in Kajiado, you can find our donation options here.
              </p>

              <div className="mt-7">
                <Button
                  href="/donate"
                  size="lg"
                  className="bg-white text-[#244C3A] hover:bg-[#F0F3ED]"
                >
                  Donate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-[#F7F5EF] p-7 sm:p-9 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a question?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#626A63] sm:text-base">
                Want to find out more, discuss a partnership, or ask how you
                can help? Get in touch with our team.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#244C3A] hover:text-[#52745B]"
              >
                Contact us
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
