import type { Metadata } from "next";
import Image from "next/image";
import {
  AudioLines,
  Eye,
  Sparkles,
  Utensils,
  UsersRound,
  Wine,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Soirée blanche des Boss à l'Hôtel Adelphia",
  description:
    "Retour sur la soirée Les Boss du 26 juin 2025 à l'Hôtel Adelphia : rencontres professionnelles, ambiance blanche et moments forts.",
};

const eventFacts = [
  { label: "Date", value: "26 juin 2025" },
  { label: "Lieu", value: "Hôtel Adelphia" },
  { label: "Participants", value: "90 dirigeants" },
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
    src: "/images/adelphia-paysage.svg",
    alt: "Ambiance au bord de l'eau pour une soirée professionnelle",
  },
  {
    src: "/images/soiree-blanche.svg",
    alt: "Professionnels réunis autour d'un dîner convivial",
  },
  {
    src: "/images/paysage-adelphia.svg",
    alt: "Dirigeants réunis lors d'un événement entrepreneur",
  },
];

const experienceCards = [
  {
    title: "Caviar & champagne",
    text: "Une dégustation premium pour ouvrir les échanges autour de saveurs rares, de bulles et d'un vrai moment de partage.",
    icon: Wine,
  },
  {
    title: "Découverte sonore d'oeuvres d'art",
    text: "Une expérience artistique et sensorielle pour faire sortir les discussions du cadre habituel.",
    icon: AudioLines,
    dark: true,
  },
  {
    title: "Hypnotiseurs",
    text: "Des interventions surprenantes, pensées pour marquer la soirée et créer des souvenirs communs entre participants.",
    icon: Eye,
  },
];

const extraAnimations = [
  {
    title: "Buffet",
    text: "Un buffet généreux pour prolonger les échanges sans interrompre le rythme de la soirée.",
    icon: Utensils,
  },
  {
    title: "Bar à paillettes",
    text: "Une touche festive, légère et parfaitement dans l'esprit Les Boss.",
    icon: Sparkles,
  },
  {
    title: "90 dirigeants réunis",
    text: "Une soirée à taille humaine, avec des décideurs venus pour rencontrer, discuter et créer du lien.",
    icon: UsersRound,
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
              src="/images/adelphia-paysage.svg"
              alt="Ambiance au bord du lac pour la soirée blanche des entrepreneurs"
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

      <section className="bg-[#f8f4f2] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-muted">
              Activités
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              Une soirée rythmée par des expériences qui font parler.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-muted sm:text-lg sm:leading-8">
              Caviar, champagne, art, hypnose, buffet et animations : la soirée
              blanche Adelphia a réuni 90 dirigeants autour d&apos;un format
              premium, vivant et simple à vivre.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="grid gap-6">
              {experienceCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`relative overflow-hidden rounded-boss border p-6 shadow-boss sm:p-8 ${
                      card.dark
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink"
                    } ${index === 1 ? "lg:ml-12" : ""}`}
                  >
                    <div className="mb-5 grid size-12 place-items-center rounded-full bg-punch text-ink">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <h3
                      className={`text-2xl font-black leading-tight ${
                        card.dark ? "text-punch" : "text-ink"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm font-semibold leading-6 sm:text-base sm:leading-7 ${
                        card.dark ? "text-white/72" : "text-muted"
                      }`}
                    >
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:pt-10">
              <figure className="overflow-hidden rounded-boss bg-white p-3 shadow-boss sm:col-span-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]">
                  <Image
                    src="/images/adelphia-paysage.svg"
                    alt="Vue de l'Hôtel Adelphia et ambiance de la soirée blanche"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>

              <figure className="overflow-hidden rounded-boss bg-white p-3 shadow-boss sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                  <Image
                    src="/images/aix.svg"
                    alt="Buffet et échanges entre professionnels"
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </figure>

              <div className="rounded-boss border border-line bg-white p-6 shadow-boss">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-muted">
                  Et plus encore
                </p>
                <ul className="mt-5 space-y-5">
                  {extraAnimations.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.title} className="flex gap-4">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-punch text-ink">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <span>
                          <strong className="block text-sm font-black uppercase leading-tight text-ink">
                            {item.title}
                          </strong>
                          <span className="mt-1 block text-sm font-semibold leading-6 text-muted">
                            {item.text}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
            {gallery.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-boss bg-white p-3 shadow-boss"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]">
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
