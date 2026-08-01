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
        className="mx-auto flex h-6 max-w-7xl items-center justify-between px-1.5 sm:h-16 sm:px-6 lg:px-8"
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
            className="h-5 w-auto sm:h-14"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b px-0.5 pb-0.5 text-[5px] font-bold transition hover:text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-punch motion-reduce:transition-none sm:border-b-2 sm:px-1 sm:pb-1 sm:text-[10px] lg:text-xs ${
                pathname === item.href
                  ? "border-punch text-ink"
                  : "border-transparent text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="block">
          <ButtonLink href="/evenements/tour-du-monde-des-boss">
            Réserver
          </ButtonLink>
        </div>

        {/* <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-full bg-ink text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-punch sm:hidden"
          aria-controls="menu-mobile"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "×" : "≡"}
          </span>
        </button> */}
      </nav>

      <div
        id="menu-mobile"
        className={`border-t border-ink bg-paper px-4 pb-5 sm:hidden ${
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
            Découvrir l&apos;événement
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
