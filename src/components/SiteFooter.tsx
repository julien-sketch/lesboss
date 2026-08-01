import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const primaryLinks = [
  { href: "/", label: "Accueil" },
  { href: "/les-boss", label: "Les Boss" },
  {
    href: "/evenements/tour-du-monde-des-boss",
    label: "Prochain événement",
  },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute left-0 top-0 h-1 w-full bg-punch" />
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-3 px-2 py-8 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="inline-flex rounded bg-white px-2 py-1 sm:rounded-md sm:px-4 sm:py-2">
            <Image
              src="/images/logo-les-boss.png"
              alt="Les Boss"
              width={240}
              height={157}
              className="h-8 w-auto sm:h-20"
            />
          </div>
          <p className="mt-2 max-w-md text-[4px] font-bold leading-[1.45] text-white/75 sm:mt-4 sm:text-sm">
            {siteConfig.mantra}
          </p>
          <p className="mt-2 max-w-md text-[4px] leading-[1.45] text-white/55 sm:mt-4 sm:text-sm sm:leading-6">
            Créer des événements professionnels qui marquent le territoire.
          </p>
        </div>
        <div>
          <p className="text-[5px] font-black uppercase text-punch sm:text-base">Navigation</p>
          <ul className="mt-2 space-y-1 sm:mt-4 sm:space-y-3">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-[4px] text-white/78 hover:text-white sm:text-base" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[5px] font-black uppercase text-punch sm:text-base">Liens utiles</p>
          <ul className="mt-2 space-y-1 sm:mt-4 sm:space-y-3">
            <li>
              <Link className="text-[4px] text-white/78 hover:text-white sm:text-base" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
            {siteConfig.socialLinks.map((link) => (
              <li key={link.label}>
                <a className="text-[4px] text-white/78 hover:text-white sm:text-base" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 text-center text-[4px] text-white/50 sm:py-6 sm:text-sm">
        © {year} Les Boss. Le business est sérieux. Sauf l&apos;ambiance.
      </div>
    </footer>
  );
}
