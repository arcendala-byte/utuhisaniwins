
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Utuhisaniwins",
  description:
    "Get in touch with Utuhisaniwins to learn about our work supporting education, healthcare, and opportunities for Maasai girls and communities in Kajiado, Kenya.",
};

const inquiryOptions = [
  {
    number: "01",
    title: "Our work and programmes",
    description:
      "Ask about our education, healthcare, and community support priorities.",
  },
  {
    number: "02",
    title: "Volunteering and partnerships",
    description:
      "Explore ways to contribute your time, skills, or organizational support.",
  },
  {
    number: "03",
    title: "Donations and support",
    description:
      "Contact the team to discuss how you can support our work.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Introduction */}
      <section className="border-b border-[#E4E5DE] bg-white">
        <Container>
          <div className="grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-24">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                Contact Utuhisaniwins
              </p>

              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#202522] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                Let&apos;s start a conversation.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#626A63] md:text-lg md:leading-8">
                Whether you want to learn about our work, explore a
                partnership, volunteer, or support our mission, we welcome
                you to get in touch with our team.
              </p>
            </div>

            <div className="border-l-2 border-[#244C3A] pl-5 lg:col-span-4 lg:ml-auto lg:max-w-sm">
              <p className="text-sm font-semibold text-[#202522]">
                Tenebo We Smile
              </p>
              <p className="mt-2 text-sm leading-6 text-[#626A63]">
                Together, we can help expand opportunities for Maasai girls
                and communities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact details and inquiry information */}
      <section className="bg-[#F7F5EF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Contact information */}
            <div className="min-w-0 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
                  Get in touch
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#202522] md:text-4xl">
                  We&apos;re here to listen.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#626A63] md:text-base">
                  Choose the contact method that works best for you. For
                  inquiries about our programmes or ways to contribute,
                  contact the organization directly.
                </p>
              </div>

              <div className="mt-8 divide-y divide-[#E4E5DE] border-y border-[#E4E5DE]">
                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-[#244C3A]">
                      <Phone size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#202522]">
                        Call our team
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#626A63]">
                        Contact us by phone to discuss your inquiry.
                      </p>

                      <ul className="mt-3 space-y-2">
                        {siteConfig.contact.phones.map((phone) => (
                          <li key={phone}>
                            <a
                              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                              className="inline-flex items-center gap-2 text-base font-medium text-[#244C3A] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244C3A]"
                            >
                              {phone}
                              <ArrowRight
                                size={15}
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-[#244C3A]">
                      <Mail size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#202522]">
                        Send an email
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#626A63]">
                        Send your questions or partnership inquiries by
                        email.
                      </p>

                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-3 inline-flex max-w-full items-center gap-2 break-all text-base font-medium text-[#244C3A] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244C3A]"
                      >
                        {siteConfig.contact.email}
                        <ArrowRight
                          size={15}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-[#244C3A]">
                      <MapPin size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#202522]">
                        Our location
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#202522]">
                        {siteConfig.location.primary}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#626A63]">
                        Please contact the team to confirm meeting
                        arrangements before visiting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-[#244C3A]">
                      <Camera size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#202522]">
                        Follow our work
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#626A63]">
                        Connect with Utuhisaniwins on Instagram for
                        organizational updates and shared stories.
                      </p>

                      <a
                        href={siteConfig.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-base font-medium text-[#244C3A] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244C3A]"
                      >
                        {siteConfig.social.instagram.handle}
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry panel */}
            <div className="min-w-0 lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-[#E4E5DE] bg-white">
                <div className="border-b border-[#E4E5DE] px-6 py-7 md:px-9 md:py-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
                    How can we help?
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#202522] md:text-4xl">
                    Tell us what brings you here.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#626A63] md:text-base">
                    We welcome inquiries from individuals, community
                    members, prospective volunteers, donors, and
                    organizations interested in working with us.
                  </p>
                </div>

                <div className="px-6 py-2 md:px-9">
                  {inquiryOptions.map((item) => (
                    <div
                      key={item.number}
                      className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#E4E5DE] py-6 last:border-b-0"
                    >
                      <span className="pt-0.5 text-sm font-semibold text-[#244C3A]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-lg font-semibold text-[#202522]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#626A63]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E4E5DE] bg-[#FBFAF7] p-6 md:p-9">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#EAF0E9] text-[#244C3A]">
                      <MessageCircle size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-[#202522]">
                        Ready to reach out?
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#626A63]">
                        Choose a contact method above or visit our contact
                        channels below. Our online contact form is not
                        available yet.
                      </p>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#244C3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173629] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A]"
                        >
                          Email us
                          <ArrowRight size={16} aria-hidden="true" />
                        </a>

                        <Link
                          href="/about"
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[#E4E5DE] bg-white px-5 py-3 text-sm font-semibold text-[#202522] transition-colors hover:border-[#244C3A] hover:text-[#244C3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A]"
                        >
                          Learn about us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation callout */}
              <div className="mt-6 flex flex-col gap-4 rounded-lg bg-[#244C3A] p-6 text-white md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-3">
                  <HeartHandshake
                    size={25}
                    className="mt-1 shrink-0 text-[#D6E3D8]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold">
                      Interested in supporting our mission?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Learn how to arrange a contribution to Utuhisaniwins.
                    </p>
                  </div>
                </div>

                <Link
                  href="/donate"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded bg-white px-5 py-3 text-sm font-semibold text-[#244C3A] transition-colors hover:bg-[#F0F0E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:self-center"
                >
                  Support us
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing message */}
      <section className="border-t border-[#E4E5DE] bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
              Tenebo We Smile
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#202522] md:text-4xl">
              Every meaningful partnership begins with a conversation.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#626A63] md:text-base">
              Thank you for your interest in Utuhisaniwins and the
              communities we work to support.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
