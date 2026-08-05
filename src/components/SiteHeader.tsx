"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "./ButtonLink";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/les-boss", label: "Les Boss" },
  {
    href: "/evenements/tour-du-monde-des-boss",
    label: "Événement",
  },
  { href: "/partenaires", label: "Partenaires" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/88 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-punch"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo-les-boss.png"
            alt="Les Boss"
            width={240}
            height={157}
            priority
            className="h-10 w-auto sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 px-1 pb-1 text-xs font-bold transition hover:text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-punch motion-reduce:transition-none ${
                pathname === item.href
                  ? "border-punch text-ink"
                  : "border-transparent text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <ButtonLink href="/evenements/tour-du-monde-des-boss">
            Voir l&apos;événement
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-punch md:hidden"
          aria-controls="menu-mobile"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "×" : "≡"}
          </span>
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`border-t border-ink bg-paper px-4 pb-5 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl bg-white px-4 py-3 font-extrabold text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-punch"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/evenements/tour-du-monde-des-boss"
            className="mt-2 w-full"
          >
            Voir l&apos;événement du 22 septembre
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
