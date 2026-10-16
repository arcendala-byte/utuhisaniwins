import Link from "next/link";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

const FALLBACK_CURRENT_YEAR = 2026;

export function Footer() {
  const currentYear = FALLBACK_CURRENT_YEAR;

  return (
    <footer className="bg-[#202522] text-white">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D2B57A]">
              {siteConfig.slogan}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#F7F5EF]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-[#F7F5EF]">
                    {phone}
                  </a>
                </li>
              ))}
              <li>{siteConfig.location.primary}</li>
              <li>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#F7F5EF]"
                >
                  Instagram {siteConfig.social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Stay informed
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Get occasional updates about education and healthcare support in Kajiado.
            </p>
            <div className="mt-4">
              <NewsletterForm compact />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
              <Link href="/privacy" className="hover:text-white">Privacy Notice</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
