
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DonationInterface } from "@/components/sections/DonationInterface";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Donate | Utuhisaniwins",
  description:
    "Support Utuhisaniwins in expanding access to education and healthcare for Maasai girls and communities in Kajiado, Kenya.",
};

const priorities = [
  {
    number: "01",
    title: "Education",
    description:
      "Help girls pursue learning and access opportunities that can shape their futures.",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Support efforts to improve access to essential healthcare and community wellbeing.",
  },
  {
    number: "03",
    title: "Community support",
    description:
      "Help strengthen families and communities as they work towards a better future for girls.",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Page introduction */}
      <section className="border-b border-[#E4E5DE] bg-white">
        <Container>
          <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-24">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                Support the mission
              </p>

              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#202522] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                Every girl deserves the chance to thrive.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#626A63] md:text-lg md:leading-8">
                Your generosity can help Utuhisaniwins advance access to
                education, healthcare, and community support for Maasai girls
                and families in Kajiado, Kenya.
              </p>
            </div>

            <div className="border-l-2 border-[#244C3A] pl-5 lg:col-span-4 lg:ml-auto lg:max-w-sm">
              <p className="text-sm font-semibold text-[#202522]">
                Tenebo We Smile
              </p>
              <p className="mt-2 text-sm leading-6 text-[#626A63]">
                Together, we can help create more opportunities for girls to
                learn, grow, and build their futures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Donation area */}
      <section className="bg-[#F7F5EF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Main donation panel */}
            <div className="min-w-0 lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-[#E4E5DE] bg-white">
                <div className="border-b border-[#E4E5DE] px-6 py-6 md:px-9 md:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
                    Make a contribution
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#202522] md:text-3xl">
                    Be part of the change
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#626A63] md:text-base md:leading-7">
                    Explore the donation options below. Until online payment
                    processing is activated, please contact the organization
                    directly to arrange a contribution.
                  </p>
                </div>

                <div className="p-5 md:p-9">
                  <DonationInterface />
                </div>

                <div className="flex items-start gap-3 border-t border-[#E4E5DE] bg-[#FBFAF7] px-6 py-5 md:px-9">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0E9] text-[#244C3A]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                      />
                    </svg>
                  </span>

                  
<p className="text-sm leading-6 text-[#626A63]">
  <span className="font-semibold text-[#202522]">
    Payment information:
  </span>{" "}
  PayPal checkout is being tested. Do not assume a donation
  is complete until PayPal confirms the payment and the
  website displays a verified confirmation. If you need to
  arrange a contribution directly, please contact Utuhisaniwins.
</p>

                </div>
              </div>
            </div>

            {/* Direct contact and priorities */}
            <aside className="min-w-0 lg:col-span-5">
              <div className="rounded-lg border border-[#E4E5DE] bg-white p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
                  Prefer to give directly?
                </p>

                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#202522] md:text-3xl">
                  Let&apos;s arrange your contribution.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#626A63] md:text-base">
                  Get in touch with the team to discuss how you would like to
                  support the organization and confirm the appropriate way to
                  contribute.
                </p>

                <div className="mt-7 space-y-4">
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="group flex items-center gap-4 rounded-md border border-[#E4E5DE] p-4 transition-colors hover:border-[#244C3A] hover:bg-[#FBFAF7]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#EAF0E9] text-[#244C3A]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
                          />
                        </svg>
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium text-[#626A63]">
                          Call our team
                        </span>
                        <span className="mt-1 block font-semibold text-[#202522] group-hover:text-[#244C3A]">
                          {phone}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-lg text-[#626A63] transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded bg-[#244C3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173629] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A]"
                  >
                    Contact the team
                  </Link>

                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded border border-[#E4E5DE] bg-white px-5 py-3 text-sm font-semibold text-[#202522] transition-colors hover:border-[#244C3A] hover:text-[#244C3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A]"
                  >
                    Follow on Instagram
                    <span className="ml-2" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>

                <p className="mt-5 text-xs leading-5 text-[#626A63]">
                  Please confirm contribution arrangements directly with the
                  organization before sending money.
                </p>
              </div>

              {/* What support helps advance */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#244C3A]">
                  What your support stands for
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#202522]">
                  Help create opportunities.
                </h2>

                <div className="mt-5 divide-y divide-[#E4E5DE] border-y border-[#E4E5DE]">
                  {priorities.map((priority) => (
                    <div
                      key={priority.number}
                      className="grid grid-cols-[42px_1fr] gap-4 py-5"
                    >
                      <span className="pt-1 text-sm font-semibold text-[#244C3A]">
                        {priority.number}
                      </span>

                      <div>
                        <h3 className="font-semibold text-[#202522]">
                          {priority.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#626A63]">
                          {priority.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-[#626A63]">
                  These are the organization&apos;s areas of focus, not a
                  claim that every contribution is currently assigned to a
                  specific programme or outcome.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Closing call to action */}
      <section className="bg-[#244C3A] py-12 text-white md:py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D6E3D8]">
                Tenebo We Smile
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                Together, we can help open doors for girls.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                Your interest matters. Contact Utuhisaniwins to learn more
                about supporting its work in Kajiado.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded bg-white px-6 py-3 text-sm font-semibold text-[#244C3A] transition-colors hover:bg-[#F0F0E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
