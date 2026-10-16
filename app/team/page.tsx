
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the confirmed leadership behind Utuhisaniwins and learn how the organization is rooted in community leadership.",
};

export default function TeamPage() {
  return (
    <>
      {/* Page introduction */}
      
<section className="bg-white py-12 md:py-16 lg:py-20">
  <Container>
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
      Our team
    </p>

    <AnimatedHeading />

    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626A63]">
      Meet the people and community leadership behind Utuhisaniwins,
      working together to create opportunities for Maasai girls and
      families.
    </p>
  </Container>
</section>


      {/* Team members */}
      <section className="bg-[#F7F5EF] py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="border border-[#E4E5DE] bg-white p-4 shadow-[0_16px_35px_rgba(32,37,34,0.04)] sm:p-5"
              >
                <div className="aspect-square overflow-hidden border border-[#E4E5DE] bg-[#F3F0EC]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C3A]">
                    {member.role}
                  </p>

                  <h2 className="mt-3 text-[1.8rem] font-semibold leading-[1.2] tracking-[-0.04em] text-[#202522]">
                    {member.name}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-[#626A63]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact call to action */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.05em] text-[#202522] md:text-[3rem]">
              Want to connect with the team?
            </h2>

            <div className="mt-8">
              <Button
                href="/contact"
                size="lg"
                className="bg-[#244C3A] text-white hover:bg-[#173629]"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
