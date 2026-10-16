import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/data/values";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Utuhisaniwins and its work supporting Maasai girls through education and healthcare in Kajiado, Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#202522]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.founderStory.src}
            alt={siteImages.founderStory.alt}
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#202522]/65" />
        </div>

        <Container className="relative z-10">
          <div className="grid min-h-[500px] grid-cols-1 items-end py-16 md:min-h-[560px] md:py-20">
            <Reveal className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F5EF]/75">
                About Utuhisaniwins
              </p>
              <h1 className="mt-5 text-balance text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white md:text-[4rem] lg:text-[5rem]">
                Working together for girls and communities.
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-[10px] border border-[#E4E5DE] bg-white shadow-[0_20px_45px_rgba(32,37,34,0.05)]">
                <Image
                  src={siteImages.simayoFriend.src}
                  alt={siteImages.simayoFriend.alt}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.08}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                Our story
              </p>
              <p className="mt-6 max-w-3xl text-2xl leading-[1.35] tracking-[-0.04em] text-[#202522] md:text-[2.2rem]">
                Every girl deserves the opportunity to thrive.
              </p>
              <div className="mt-6 space-y-5 max-w-2xl text-lg leading-8 text-[#626A63]">
                <p>
                  Utuhisaniwins was born from a simple but powerful belief: every girl deserves the opportunity to learn, grow, and build a future defined by her potential rather than her circumstances.
                </p>
                <p>
                  Founded in 2024 by Simayo Rempeyian, Utuhisaniwins works to support girls facing barriers to education by providing practical assistance, mentorship, and opportunities that protect their dignity and help them pursue their dreams.
                </p>
                <p>
                  For Simayo, the importance of education is deeply personal. Having experienced the difference that educational support can make in a young girl&apos;s life, she realized how access to schooling, encouragement, and essential resources could open doors to a brighter future. But when she looked around her own Maasai community, she saw many girls with the same potential but fewer opportunities.
                </p>
                <p>
                  Poverty, early marriage, and a lack of basic necessities continued to prevent girls from attending school consistently and pursuing their ambitions. Inspired by gratitude and driven by a desire to give back, Simayo founded Utuhisaniwins in 2024 with a clear commitment: to help girls remain in school and approach their futures with confidence.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <Reveal>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  What we believe
                </p>
                <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.8rem]">
                  Education creates possibilities.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Reveal delay={0.04}>
                <article className="rounded-[12px] border border-[#E4E5DE] bg-[#F7F5EF] p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Dignity is essential</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    A girl should never have to compromise her dignity to pursue her education. We recognize the importance of providing essential resources and creating an environment where girls feel supported and valued.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="rounded-[12px] border border-[#E4E5DE] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Culture is a source of strength</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    We believe that cultural identity and educational progress can grow together. A girl&apos;s heritage should be celebrated as part of her identity, not treated as a barrier to her ambitions.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.12}>
                <article className="rounded-[12px] border border-[#E4E5DE] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Communities grow when girls thrive</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    When girls gain access to education and opportunities, the benefits extend beyond individuals to their families and communities.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.16}>
                <article className="rounded-[12px] border border-[#E4E5DE] bg-[#F7F5EF] p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Education is a path to possibility</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    We believe that every girl deserves access to education and the support she needs to continue learning, regardless of her economic circumstances.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <Reveal>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Our approach
                </p>
                <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.8rem]">
                  Practical support, mentorship, and opportunity.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Reveal delay={0.04}>
                <div className="rounded-[12px] border border-[#E4E5DE] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Supporting education</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    Helping address school-fee challenges and other practical obstacles that may prevent girls from continuing their studies.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[12px] border border-[#E4E5DE] bg-[#F7F5EF] p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Essential resources</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    Supporting girls with necessities, including sanitary towels, that contribute to their comfort, dignity, and school attendance.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-[12px] border border-[#E4E5DE] bg-[#F7F5EF] p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Mentorship and monitoring</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    Following students&apos; progress and providing encouragement and guidance as they navigate their education.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-[12px] border border-[#E4E5DE] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#202522]">Creative opportunity</h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    Through Shuka Denim Shop, girls can connect cultural heritage with economic opportunity through handcrafted Maasai ornaments that help support their education.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <Reveal>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Culture, creativity, and opportunity
                </p>
                <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.8rem]">
                  Turning heritage into possibility.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              
<p className="text-lg leading-8 text-[#626A63]">
  We see culture as a powerful expression of identity, creativity, and resilience. Through Shuka Denim Shop, girls&apos; artistry and Maasai heritage are brought into handcrafted ornaments that can reach customers beyond their communities. This initiative connects cultural preservation with economic opportunity while helping generate support for education.{" "}
  <Link
    href="https://shukadenimkraft.shop/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#244C3A] underline underline-offset-4 transition-colors hover:text-[#173629]"
  >
    Visit Shuka Denim Shop
  </Link>
  {" "}to explore the collection.
</p>

            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lg leading-8 text-[#626A63]">
                It reflects a belief at the heart of Utuhisaniwins: girls should not have to leave their identity behind to pursue their ambitions. Their heritage can be part of the strength that carries them forward.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                Our mission and vision
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[3rem]">
                A future where every girl can access education, protect her dignity, and pursue her ambitions.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-[#626A63]">
                To empower girls through educational support, mentorship, essential resources, and culturally grounded opportunities that help them develop their potential and contribute to their communities.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="rounded-[12px] border border-[#E4E5DE] bg-[#F7F5EF] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Mission
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.6rem]">
                  To support Maasai girls with access to education and healthcare.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[12px] border border-[#E4E5DE] bg-white p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                  Vision
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] md:text-[2.6rem]">
                  A future where every girl can learn, grow, and lead with confidence.
                </h2>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
              Our values
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="border-t border-[#E4E5DE] pt-5">
                  <h3 className="text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.04em] text-[#202522]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#626A63]">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-2xl text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.05em] text-[#202522] md:text-[3rem]">
              Join the effort to support girls and communities.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/donate" size="lg" className="bg-[#244C3A] text-white hover:bg-[#173629]">
                Support our mission
              </Button>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-[4px] border border-[#E4E5DE] bg-white px-5 py-3 text-sm font-semibold text-[#202522] transition-colors hover:border-[#244C3A] hover:text-[#244C3A]">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}