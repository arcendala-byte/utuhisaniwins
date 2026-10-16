
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms governing access to and use of the Utuhisaniwins website, including website content, donations, communications, intellectual property, and external links.",
};

const sections = [
  {
    number: "01",
    title: "Acceptance of these terms",
    paragraphs: [
      "These Terms of Use govern access to and use of the Utuhisaniwins website. By visiting or using this website, you agree to use it in accordance with these terms and applicable law. If you do not agree, please discontinue use of the website.",
      "These terms apply to general website use. Additional terms may apply where a separate service, agreement, partnership, or donation arrangement is introduced.",
    ],
  },
  {
    number: "02",
    title: "About this website",
    paragraphs: [
      "This website provides information about Utuhisaniwins, its mission, and its focus on supporting access to education and healthcare for Maasai girls and their communities in Kajiado, Kenya.",
      "Website content is provided for general information and community engagement. It should not be interpreted as a guarantee that a particular service, programme, funding opportunity, or form of assistance is available to every visitor.",
    ],
  },
  {
    number: "03",
    title: "Responsible use",
    paragraphs: [
      "You agree to use this website lawfully, respectfully, and in a way that does not interfere with its operation or the rights of others.",
      "You must not attempt to gain unauthorized access to the website or its systems, introduce malicious code, disrupt website functionality, misuse forms or contact details, impersonate another person, or use the website to distribute unlawful, misleading, abusive, or harmful material.",
      "We may take reasonable steps to protect the website and its visitors where misuse, suspicious activity, or a security concern is identified.",
    ],
  },
  {
    number: "04",
    title: "Accuracy and availability of information",
    paragraphs: [
      "We aim to present information that is clear, relevant, and accurate. However, organizational details, programme descriptions, contact information, and other website content may change over time.",
      "We do not warrant that every page will always be complete, current, uninterrupted, or free from errors. Where appropriate, please contact Utuhisaniwins directly to confirm important information before relying on it or making arrangements.",
      "We may revise, remove, or update website content as our work and available information evolve.",
    ],
  },
  {
    number: "05",
    title: "Programme information and requests for support",
    paragraphs: [
      "Information about our work is intended to help visitors understand our areas of focus. Reading about a programme or contacting us does not automatically establish eligibility for assistance, confirm participation, or create a commitment to provide funding or services.",
      "Requests for support, volunteering, collaboration, or partnership may require further communication and verification. Any arrangements will depend on the circumstances and any separate agreement reached with the organization.",
      "Please do not assume that an inquiry has been received or approved unless you receive an appropriate confirmation through an official communication channel.",
    ],
  },
  {
    number: "06",
    title: "Donations and payment arrangements",
    paragraphs: [
      "The website may invite visitors to learn about supporting Utuhisaniwins. At present, online payment processing is not represented as an active feature of this website.",
      "Submitting an inquiry or expressing an intention to donate is not a completed donation, payment confirmation, or receipt. If you wish to make a contribution, please confirm the appropriate arrangements directly through an official Utuhisaniwins contact channel.",
      "If an online payment provider is introduced in the future, additional terms, payment instructions, and relevant provider conditions may apply. Do not send card numbers, security codes, passwords, or other sensitive payment credentials through ordinary website forms or social media messages.",
    ],
  },
  {
    number: "07",
    title: "Intellectual property and permitted use",
    paragraphs: [
      "Unless otherwise stated, website text, original graphics, branding, design elements, and other original materials are owned by Utuhisaniwins or used with permission. Third-party names, logos, photographs, and materials remain the property of their respective owners.",
      "You may view the website and share links to its publicly available pages for lawful, non-misleading purposes. You must not reproduce, republish, sell, modify, or commercially exploit protected material without the necessary permission, except where applicable law allows it.",
      "If you wish to reuse a photograph, story, logo, or other material, please contact us first. Permission to view content does not automatically grant permission to reuse it.",
    ],
  },
  {
    number: "08",
    title: "Community stories, photographs, and media",
    paragraphs: [
      "Stories, photographs, and other media may be used to communicate aspects of our mission and community work. We aim to treat the people represented in these materials with dignity and respect.",
      "Website visitors must not use photographs, personal stories, or identifying information from this website to harass, exploit, misrepresent, or otherwise harm the individuals or communities represented. Reuse of such material may require permission from the relevant rights holder and, where appropriate, consent from the people depicted.",
      "If you believe that content published on this website raises a legitimate privacy, consent, or rights concern, please contact Utuhisaniwins so that the matter can be reviewed.",
    ],
  },
  {
    number: "09",
    title: "External websites and third-party services",
    paragraphs: [
      "This website may link to external websites, social media platforms, payment services, or other resources for convenience and additional information.",
      "External services operate independently and may have their own terms, privacy practices, and security arrangements. Unless expressly stated, a link does not mean that Utuhisaniwins endorses every statement, service, or product on that external website.",
      "We are not responsible for the content, availability, or practices of third-party websites that we do not control. You should review their terms before using them or providing personal information.",
    ],
  },
  {
    number: "10",
    title: "Privacy and personal information",
    paragraphs: [
      "Your use of this website may involve providing information through contact channels or other features. Any personal information handled by Utuhisaniwins should be treated in accordance with our Privacy Notice and applicable data-protection requirements.",
      "Please avoid submitting confidential or sensitive information through a general inquiry form unless it is necessary and you have an appropriate reason to share it.",
    ],
  },
  {
    number: "11",
    title: "Disclaimer and limitation of liability",
    paragraphs: [
      "To the extent permitted by applicable law, the website and its content are provided on an 'as available' basis for general information. We do not guarantee uninterrupted access, error-free operation, or that the website will meet every user's particular requirements.",
      "To the extent permitted by law, Utuhisaniwins is not responsible for losses arising from reliance on incomplete or outdated website information, temporary unavailability, or third-party websites and services outside our reasonable control.",
      "Nothing in these terms excludes or limits any liability, right, or remedy that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    number: "12",
    title: "Suspension and changes to the website",
    paragraphs: [
      "We may update, suspend, restrict, or discontinue parts of the website where reasonably necessary for maintenance, security, operational needs, or changes to our work.",
      "We may also revise these terms from time to time. Updated terms will be published on this page. The date of the latest revision should be added when the terms are reviewed and approved.",
    ],
  },
  {
    number: "13",
    title: "Applicable law and contact",
    paragraphs: [
      "These terms are intended to operate subject to the laws applicable in Kenya. Any dispute will be handled in accordance with applicable law and the jurisdiction of the competent courts, where relevant.",
      "If you have a question about these terms, website content, or a possible rights concern, please contact Utuhisaniwins using the telephone or Instagram details provided on our Contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#F7F5EF] py-14 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
              Legal information
            </p>

            <h1 className="mt-5 text-balance text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#202522] md:text-[4.5rem]">
              Terms of use.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#626A63] md:text-lg">
              These terms explain the conditions for using the Utuhisaniwins
              website, accessing its content, contacting our organization,
              and learning about opportunities to support our work.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DCDDD5] pt-5 text-sm text-[#626A63]">
              <p>
                <span className="font-semibold text-[#202522]">
                  Organization
                </span>{" "}
                Utuhisaniwins
              </p>
              <p>
                <span className="font-semibold text-[#202522]">
                  Applies to
                </span>{" "}
                Website visitors and users
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-lg font-semibold text-[#202522]">
                  In these terms
                </h2>

                <nav
                  aria-label="Terms of use sections"
                  className="mt-5 border-t border-[#E4E5DE]"
                >
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#terms-${section.number}`}
                      className="flex gap-3 border-b border-[#E4E5DE] py-3 text-sm leading-6 text-[#626A63] transition-colors hover:text-[#244C3A]"
                    >
                      <span className="font-semibold text-[#244C3A]">
                        {section.number}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-lg bg-[#F7F5EF] p-5">
                  <p className="text-sm font-semibold text-[#202522]">
                    Need clarification?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#626A63]">
                    Contact our team if you have a question about using this
                    website or the information published here.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex text-sm font-semibold text-[#244C3A] underline underline-offset-4 hover:text-[#173629]"
                  >
                    Contact Utuhisaniwins
                  </a>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8">
              <div className="mb-10 border-b border-[#E4E5DE] pb-8">
                <p className="text-base leading-8 text-[#454C47]">
                  We want this website to be a useful and respectful source of
                  information about our mission and work. Please read these
                  terms carefully, particularly the sections covering
                  donations, the use of published media, and third-party
                  services.
                </p>
              </div>

              <div className="space-y-10 md:space-y-12">
                {sections.map((section) => (
                  <section
                    key={section.number}
                    id={`terms-${section.number}`}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-start gap-4">
                      <span className="pt-1 text-xs font-semibold tracking-[0.12em] text-[#244C3A]">
                        {section.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2 className="text-xl font-semibold tracking-[-0.025em] text-[#202522] md:text-2xl">
                          {section.title}
                        </h2>

                        <div className="mt-4 space-y-4 text-base leading-8 text-[#626A63]">
                          {section.paragraphs.map((paragraph, index) => (
                            <p key={`${section.number}-${index}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-14 border-t border-[#E4E5DE] pt-6">
                <p className="text-sm leading-7 text-[#626A63]">
                  For questions about these terms, please contact Utuhisaniwins
                  through the official communication channels listed on our
                  Contact page.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
