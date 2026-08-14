import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Soirée blanche des Boss à l'Hôtel Adelphia",
  description:
    "Retour sur la soirée Les Boss du 26 juin 2025 à l'Hôtel Adelphia : rencontres professionnelles, ambiance blanche et moments forts.",
};

const eventFacts = [
  { label: "Date", value: "26 juin 2025" },
  { label: "Lieu", value: "Hôtel Adelphia" },
  { label: "Format", value: "Soirée blanche" },
  { label: "Ambiance", value: "Business sérieux, cadre détendu" },
];

const highlights = [
  "Des échanges professionnels dans un cadre plus naturel qu'un réseau classique.",
  "Une ambiance blanche pensée pour créer un vrai marqueur visuel.",
  "Un lieu avec vue sur le lac et la chaîne de l'Épine.",
  "Une démonstration d'hypnose qui a marqué la soirée.",
];

const gallery = [
  {
    src: "/images/experience-cards/cassis-yacht.png",
    alt: "Ambiance au bord de l'eau pour une soirée professionnelle Les Boss",
  },
  {
    src: "/images/experience-cards/marseille-dinner.png",
    alt: "Professionnels réunis autour d'un dîner convivial",
  },
  {
    src: "/images/hero-les-boss.svg",
    alt: "Dirigeants réunis lors d'un événement Les Boss",
  },
];

export default function SoireeBlancheAdelphiaPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-punch px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-ink">
              Événement passé
            </p>
            <h1 className="text-balance text-4xl font-black uppercase leading-tight text-ink sm:text-7xl">
              Soirée blanche des Boss
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-muted sm:text-xl sm:leading-9">
              Le 26 juin 2025, Les Boss se sont retrouvés à l&apos;Hôtel
              Adelphia pour une soirée professionnelle élégante, vivante et
              pensée pour faciliter les rencontres.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Demander les photos
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-boss bg-white shadow-boss sm:min-h-[460px]">
            <Image
              src="/images/experience-cards/cassis-yacht.png"
              alt="Ambiance au bord du lac pour la soirée blanche des Boss"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute left-5 top-5 rounded-[8px] bg-punch px-4 py-3 text-center font-black text-ink">
              <span className="block text-2xl leading-none">26</span>
              <span className="mt-1 block text-[11px] uppercase leading-none">
                Juin
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-boss border border-line bg-white p-5 shadow-boss sm:p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </p>
                <p className="mt-3 text-xl font-black leading-tight text-ink">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-punch">
              L&apos;esprit de la soirée
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black uppercase leading-tight sm:text-5xl">
              Un cadre premium, des échanges simples.
            </h2>
          </div>
          <div>
            <p className="text-base font-semibold leading-8 text-white/72 sm:text-lg">
              Cette soirée à l&apos;Hôtel Adelphia a réuni des professionnels
              autour d&apos;un format fidèle à l&apos;esprit Les Boss : une
              organisation soignée, une ambiance conviviale et des échanges qui
              se créent sans posture.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="border-l-4 border-punch bg-white/5 px-5 py-4 text-sm font-bold uppercase leading-6 text-white/78"
                >
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4f2] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-ink">
              Photos
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              Quelques images pour retrouver l&apos;ambiance.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((photo, index) => (
              <figure
                key={photo.src}
                className={`overflow-hidden rounded-boss bg-white shadow-boss ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-boss bg-white p-6 text-center shadow-boss sm:p-10">
          <h2 className="text-balance text-3xl font-black uppercase leading-tight text-ink sm:text-5xl">
            Envie de vivre la prochaine ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-muted sm:text-lg sm:leading-8">
            Les Boss continuent d&apos;imaginer des événements professionnels
            qui donnent envie de discuter, de créer des liens et de faire du
            business autrement.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/evenements/tour-du-monde-des-boss">
              Voir le prochain événement
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contacter Les Boss
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
