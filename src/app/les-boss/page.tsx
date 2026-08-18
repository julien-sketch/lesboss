import type { Metadata } from "next";
import {
  Lightbulb,
  MapPinned,
  MessagesSquare as MessagesRound,
  PartyPopper,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "La marque",
  description:
    "Découvrez Les Boss, la marque qui crée des événements professionnels originaux pour dirigeants en Savoie et région alpine.",
};

const pillars = [
  {
    text: "Créer des événements professionnels qui marquent le territoire.",
    icon: MapPinned,
  },
  {
    text: "Réunir des dirigeants dans des lieux qui déclenchent naturellement les échanges.",
    icon: MessagesRound,
  },
  {
    text: "Faire émerger des opportunités sans rigidité inutile.",
    icon: Lightbulb,
  },
  {
    text: "Garder une ambiance conviviale, décontractée et légèrement décalée.",
    icon: PartyPopper,
  },
];

type Organizer = {
  firstName: string;
  name: string;
  role: string;
  proof?: string;
  bio: string;
};

const organizers: Organizer[] = [
  {
    firstName: "Astrid",
    name: "Astrid Goryn",
    role: "Fondatrice de Tout Schuss",
    bio: "Productrice événementielle basée à Aix-les-Bains, Astrid accompagne la conception, la production et la coordination d'événements professionnels, culturels et festifs. Habituée à gérer les prestataires, la logistique, les partenaires et la communication, elle apporte aux Boss son expérience du terrain et son exigence organisationnelle.",
  },
  {
    firstName: "Joris",
    name: "Joris Peres",
    role: "Fondateur de GI Photo",
    bio: "Photographe professionnel basé à Chambéry, Joris accompagne les entreprises et les organisateurs d'événements dans la création de contenus visuels. Reportage corporate et borne photo : il apporte aux Boss son regard créatif, son expérience de l'événementiel et sa capacité à transformer chaque soirée en souvenirs durables.",
  },
  {
    firstName: "Julien",
    name: "Julien Veyrac",
    role: "Fondateur de Picqtures",
    bio: "Entrepreneur et fondateur de Picqtures, la conciergerie dédiée aux dirigeants d'entreprise, Julien accompagne quotidiennement des décideurs dans leurs besoins professionnels et personnels. Il apporte aux Boss sa connaissance des attentes des dirigeants, son sens du service et sa capacité à créer des relations de confiance.",
  },
];

export default function LesBossPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
          <p className="mb-5 inline-flex rounded-full bg-punch px-4 py-2 text-sm font-black uppercase tracking-[0.16em]">
            La marque
          </p>
          <h1 className="text-balance text-4xl font-black uppercase leading-tight text-ink sm:text-7xl">
            Créer des événements professionnels qui marquent le territoire.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Les Boss n&apos;est pas un format figé ni un club à posture. C&apos;est
            une marque qui imagine des rendez-vous professionnels originaux pour
            permettre aux dirigeants de faire du business autrement, avec des
            rencontres, des expériences et une ambiance vraiment vivante.
          </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="dot-pattern absolute inset-0 opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Notre terrain de jeu"
            title="Savoie, région alpine, et plus si affinités."
            text="L'ancrage local compte : Les Boss réunit les dirigeants qui font bouger leur territoire autour d'expériences qui sortent du cadre habituel."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.text}
                  className={`rounded-boss bg-white p-6 shadow-boss transition duration-300 sm:p-8 ${
                    index % 2 === 0 ? "card-tilt-1" : "card-tilt-2"
                  }`}
                >
                  <p className="mb-5 grid size-14 place-items-center rounded-full bg-ink text-lg font-black text-punch">
                    <Icon aria-hidden="true" className="size-7" strokeWidth={2} />
                  </p>
                  <p className="text-lg font-black leading-7 text-ink sm:text-xl sm:leading-8">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cloud/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="dot-pattern absolute inset-0 opacity-[0.04]" />
        <div className="absolute right-0 top-0 h-full w-2/5 translate-x-20 -skew-x-12 bg-punch/20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-punch px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-ink">
                Présentation des organisateurs
              </p>
              <h2 className="text-balance text-4xl font-black uppercase leading-tight text-ink sm:text-6xl">
                Trois entrepreneurs, une même conviction
              </h2>
            </div>
            <div>
              <p className="text-base font-bold leading-7 text-muted sm:text-lg sm:leading-8">
                Astrid, Joris et Julien ont créé Les Boss avec une idée simple :
                les rencontres professionnelles sont plus efficaces lorsqu&apos;elles
                se déroulent dans une ambiance naturelle, vivante et sans
                posture.
              </p>
              <p className="mt-4 text-base font-bold leading-7 text-muted sm:text-lg sm:leading-8">
                Leurs expertises complémentaires événementiel, création
                visuelle et accompagnement des dirigeants permettent
                d&apos;imaginer des expériences professionnelles sérieuses dans leur
                objectif, mais jamais dans leur ambiance.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {organizers.map((organizer, index) => (
              <article
                key={organizer.name}
                className={`flex h-full flex-col rounded-boss border border-line bg-white p-6 shadow-boss sm:p-8 ${
                  index === 1 ? "lg:mt-8" : ""
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">
                  {organizer.firstName}
                </p>
                <div className="mt-5 border-l-4 border-punch pl-4">
                  <h3 className="text-2xl font-black leading-tight text-ink sm:text-3xl">
                    {organizer.name}
                  </h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-muted">
                    {organizer.role}
                  </p>
                </div>

                {organizer.proof ? (
                  <p className="mt-6 bg-ink px-4 py-4 text-sm font-bold leading-6 text-white">
                    {organizer.proof}
                  </p>
                ) : null}

                <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
                  {organizer.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            
            <h2 className="text-balance text-4xl font-black sm:text-6xl">
               Le business est sérieux. Pas l&apos;ambiance.
            </h2>
          </div>
          <ButtonLink
            href="/evenements/tour-du-monde-des-boss"
            variant="dark"
            className="shrink-0"
          >
            Découvrir l&apos;événement
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
