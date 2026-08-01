import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/data/events";

const event = getEventBySlug("tour-du-monde-des-boss");

export const metadata: Metadata = {
  title: "Tour du monde des Boss",
  description:
    "Le 22 septembre dès 19 h chez Windalps à Méry : une soirée professionnelle et festive autour du voyage pour dirigeants locaux.",
};

const flightDetails = [
  { label: "Vol", value: "22 SEPT" },
  { label: "Embarquement", value: "19:00" },
  { label: "Départ", value: "CHY" },
  { label: "Arrivée", value: "WDP" },
];

const boardingProgram = [
  {
    title: "Networking",
    text: "Rencontrez jusqu'à 200 professionnels et décideurs.",
  },
  {
    title: "Buffet du monde",
    text: "Un voyage culinaire à travers les continents.",
  },
  {
    title: "Vol indoor",
    text: "Expérience de chute libre en soufflerie.",
  },
  {
    title: "Animations",
    text: "Partagez, réagissez et connectez-vous autrement.",
  },
];

export default function TourDuMondePage() {
  if (!event) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-[#070707] text-white">
      <section className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Image
          src="/images/tour-du-monde-affiche.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,7,7,0)_24%,rgba(7,7,7,0.16)_48%,rgba(7,7,7,0.9)_92%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.34),rgba(7,7,7,0.02)_42%,rgba(7,7,7,0.78))]" />
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.96),inset_0_0_42px_rgba(255,190,104,0.28)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070707] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end justify-end lg:items-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/15 bg-[#07111f]/55 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-[3px] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-8 top-7 h-px bg-white/25" />
            <div className="pointer-events-none absolute right-8 top-7 text-[10px] font-black uppercase tracking-[0.45em] text-white/35">
              Boarding pass
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/45">
              45° 38° 24° N · 5° 55° 10° E
            </p>
            <h1 className="mt-12 text-balance font-black uppercase leading-[0.92] tracking-[-0.02em] text-white text-[clamp(3.1rem,7vw,7.5rem)]">
              Le Tour du Monde
            </h1>
            <p className="mt-1 rotate-[-2deg] text-[clamp(2rem,4vw,4.5rem)] font-black leading-none text-[#ff7fa6]">
              des Boss
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 border-y border-white/15 py-6 sm:grid-cols-4">
              {flightDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/55">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-2xl font-black uppercase leading-none sm:text-3xl">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/55">
                Destination
              </p>
              <div className="mt-2 flex flex-wrap items-end gap-3">
                <p className="text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-none tracking-[-0.04em]">
                  Windalps
                </p>
                <span className="mb-2 bg-white/75 px-2 py-1 text-xl font-black uppercase text-[#1e1f25]">
                  Méry
                </span>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {boardingProgram.map((item) => (
                <div key={item.title} className="border-l border-white/15 pl-4">
                  <p className="inline-flex bg-white px-2.5 py-1 text-[12px] font-black uppercase text-[#1e1f25]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm font-bold uppercase leading-6 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/55">
                  Entrée
                </p>
                <p className="mt-1 flex items-end gap-2 text-7xl font-black leading-none">
                  45€
                  <span className="mb-2 bg-white px-2 py-1 text-lg uppercase text-[#1e1f25]">
                    /pers
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-5">
                  <div className="h-12 flex-1 bg-[repeating-linear-gradient(90deg,#fff_0_3px,transparent_3px_7px)] opacity-90" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/55">
                    Boarding pass
                  </span>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={event.reservationUrl}
                    className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#101114] transition hover:bg-[#ff7fa6] hover:text-white"
                  >
                    Réserver ma place
                  </a>
                  <a
                    href="/partenaires"
                    className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    Devenir partenaire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
