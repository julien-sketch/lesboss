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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-10 lg:px-8">
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
          <p className="mt-4 max-w-md text-sm font-bold leading-6 text-white/75">
            {siteConfig.mantra}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            Créer des événements professionnels qui marquent le territoire.
          </p>
        </div>
        <div>
          <p className="text-base font-black uppercase text-punch">Navigation</p>
          <ul className="mt-4 space-y-3">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-base text-white/78 hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-base font-black uppercase text-punch">Liens utiles</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link className="text-base text-white/78 hover:text-white" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-white/78 hover:text-white"
                href="/politique-de-confidentialite"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-white/78 hover:text-white"
                href="/conditions-generales-de-vente"
              >
                Conditions générales de vente
              </Link>
            </li>
            {siteConfig.socialLinks.map((link) => (
              <li key={link.label}>
                <a className="text-base text-white/78 hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/50 sm:py-6">
        © {year} Les Boss. Le business est sérieux. Pas l&apos;ambiance.
      </div>
    </footer>
  );
}
