import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/data/events";
import { Cinzel_Decorative } from "next/font/google";
import localFont from "next/font/local";
import styles from "./page.module.css";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noel-heading",
  display: "swap",
});

const glacialIndifference = localFont({
  src: [
    { path: "./fonts/GlacialIndifference-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GlacialIndifference-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-noel-body",
  display: "swap",
});

const event = getEventBySlug("les-boss-fetent-noel");

export const metadata: Metadata = {
  title: "Les Boss fêtent Noël · 9 décembre 2026",
  description:
    "Les Boss et La Maison Rouge fêtent Noël le 9 décembre 2026 dès 19 h. Une soirée professionnelle et festive pour faire du business autrement.",
  alternates: { canonical: "/evenements/les-boss-fetent-noel" },
  openGraph: {
    title: "Les Boss fêtent Noël",
    description: "Le 9 décembre 2026 dès 19 h à La Maison Rouge.",
    images: [{ url: "/images/les-boss-fetent-noel.png", width: 1080, height: 1920, alt: "Les Boss et La Maison Rouge fêtent Noël" }],
  },
};

const highlights = [
  { title: "Rencontres", text: "Dirigeants et entrepreneurs réunis pour échanger autrement." },
  { title: "Esprit de Noël", text: "Une soirée festive pour terminer l'année ensemble." },
  { title: "La Maison Rouge", text: "Le lieu de notre prochain rendez-vous professionnel." },
  { title: "L'ambiance Les Boss", text: "Le business est sérieux. Pas l'ambiance." },
];

const ticketClassName = "inline-flex min-h-12 items-center justify-center bg-punch px-6 py-3 text-center text-sm font-bold uppercase text-ink transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-punch focus-visible:ring-offset-4 focus-visible:ring-offset-[#240807]";

export default function ChristmasEventPage() {
  if (!event) notFound();

  const details = [
    { label: "Date", value: event.date },
    { label: "Début de soirée", value: event.time },
    { label: "Lieu", value: event.location },
    { label: "Édition", value: "Noël des Boss" },
  ];

  return (
    <main className={`${cinzelDecorative.variable} ${glacialIndifference.variable} ${styles.page} relative isolate overflow-hidden bg-[#180605] text-white`}>
      <div className="absolute inset-0 -z-10 bg-[#180605]" />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="order-2 mx-auto w-full max-w-[420px] lg:order-1 lg:max-w-[360px]">
            <Image
              src={event.image}
              alt={event.imageAlt}
              width={1080}
              height={1920}
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 480px) 420px, calc(100vw - 32px)"
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <p className="border-t border-white/25 pt-5 text-xs font-bold uppercase text-white/70">
              Prochain événement · Les Boss × La Maison Rouge
            </p>
            <h1 className="mt-8 text-4xl font-normal uppercase leading-[1.15] sm:text-6xl xl:text-7xl">
              Les Boss<br />fêtent <span className="text-punch">Noël</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {event.shortDescription}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 border-y border-white/20 py-7 sm:mt-10">
              {details.map((detail) => (
                <div key={detail.label} className="min-w-0">
                  <dt className="text-xs font-bold uppercase text-white/60">{detail.label}</dt>
                  <dd className="mt-2 text-lg font-bold uppercase leading-tight sm:text-2xl">{detail.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              {event.reservationUrl ? <a href={event.reservationUrl} className={ticketClassName}>Prendre mon billet</a> : null}
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-sm font-bold uppercase transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-punch">
                Poser une question
              </Link>
            </div>
          </div>
        </div>

        <section aria-labelledby="christmas-experience" className="mt-14 border-t border-white/20 pt-10 sm:mt-20 sm:pt-12">
          <p className="text-xs font-bold uppercase text-punch">Le rendez-vous de fin d&apos;année</p>
          <h2 id="christmas-experience" className="mt-4 text-3xl font-normal uppercase sm:text-4xl">Du business. Des rencontres. Et Noël.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="border-l border-white/25 pl-4">
                <h3 className="inline-block bg-white px-2.5 py-1 text-sm font-bold uppercase text-ink">{item.title}</h3>
                <p className="mt-3 text-sm font-bold leading-6 text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="christmas-ticket" className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:mt-20 sm:pt-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase text-white/60">Votre billet pour Noël</p>
            <h2 id="christmas-ticket" className="mt-4 text-3xl font-normal uppercase sm:text-4xl">Le 9 décembre,<br /><span className="text-punch">on se retrouve à 19 h.</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">À La Maison Rouge, pour une soirée professionnelle qui sort du cadre habituel.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Réservez votre place</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">Retrouvez les tarifs et les modalités de réservation sur la billetterie. Le programme détaillé sera annoncé prochainement.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {event.reservationUrl ? <a href={event.reservationUrl} className={ticketClassName}>Prendre mon billet</a> : null}
              <Link href="/partenaires" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-sm font-bold uppercase transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-punch">Devenir partenaire</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
