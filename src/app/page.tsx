import Image from "next/image";
import {
  Handshake,
  Map,
  PartyPopper,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

type FeatureIconProps = {
  icon: LucideIcon;
  variant: "stat" | "principle";
};

function FeatureIcon({ icon: Icon, variant }: FeatureIconProps) {
  if (variant === "stat") {
    return (
      <span className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-punch sm:size-16">
        <Icon
          aria-hidden="true"
          className="size-7 text-ink sm:size-9"
          strokeWidth={2}
        />
      </span>
    );
  }

  return (
    <span className="mb-5 inline-flex text-punch">
      <Icon
        aria-hidden="true"
        className="size-10 sm:size-12"
        strokeWidth={2}
      />
    </span>
  );
}

const stats = [
  {
    value: "3",
    label: "entrepreneurs à l'origine du projet",
    detail: "Astrid (Tout schuss), Joris (GI photo) et Julien (Picqtures).",
    icon: UsersRound,
  },
  {
    value: "5",
    label: "départements réunis",
    detail: "Savoie, Haute-Savoie, Isère, Ain et Rhône.",
    icon: Map,
  },
  
  {
    value: "100 %",
    label: "pensé pour les dirigeants",
    detail: "Créé par des dirigeants, pensé pour des dirigeants",
    icon: Handshake,
  },
  {
    value: "5 h",
    label: "d'ambiance festive.",
    detail: "de 19h à minuit.(horaires sous réserve de conditions)",
    icon: PartyPopper,
  },
];

const experienceCards = [
  {
    title: "Soirée blanche des Boss",
    day: "26",
    month: "JUIN",
    location: "Hôtel Adelphia",
    description:
      "Retour sur une soirée professionnelle au bord du lac, avec rencontres, ambiance blanche et moments marquants.",
    image: "/images/adelphia.svg",
    imageAlt:
      "Ambiance élégante au bord de l'eau pour une soirée Les Boss",
    href: "/evenements/soiree-blanche-adelphia",
    tag: "Événement passé",
  },
  {
    title: "Tour du Monde des Boss",
    day: "22",
    month: "SEPT.",
    location: "Windalps à Méry",
    description:
      "Une soirée professionnelle et festive autour du voyage, d'expériences originales et de rencontres qui comptent.",
    image: "/images/fond-event.svg",
    imageAlt: "Dirigeants réunis lors d'un événement Les Boss",
    href: "/evenements/tour-du-monde-des-boss",
    tag: "Prochain événement",
  },
];

const whyParticipateReasons = [
  "développer votre réseau local et régional",
  "rencontrer de futurs clients, partenaires ou prescripteurs",
  "échanger directement avec des dirigeants et des décideurs",
  "faire émerger des opportunités dans une ambiance naturelle et décontractée",
  "vivre une expérience différente des réseaux professionnels traditionnels",
];

const audienceProfiles = [
  "Dirigeants",
  "Fondateurs",
  "Cadres décisionnaires",
  "Indépendants",
  "Freelances",
  "Entrepreneurs",
  "TPE",
  "PME",
  "Grands groupes",
];

const participationCards = [
  {
    title: "Développer son réseau",
    text: "Rencontrez des professionnels, échangez vos problématiques et élargissez votre cercle d'influence naturellement.",
    icon: UsersRound,
  },
  {
    title: "Vivre le moment",
    text: "Des formats d'événements créatifs, conviviaux et mémorables loin des salles de conférence.",
    icon: PartyPopper,
  },
  {
    title: "S'inspirer mutuellement",
    text: "Échangez, collaborez et grandissez ensemble grâce au partage d'expériences.",
    icon: Handshake,
  },
  {
    title: "Sortir du quotidien",
    text: "Le business est sérieux, pas l'ambiance. Offrez-vous une parenthèse stimulante pour votre activité.",
    icon: Map,
  },
];

const testimonials = [
  {
    quote:
      "Une très belle soirée dans un lieu remarquable, avec des entrepreneurs locaux et de vrais moments d’échange. L’ambiance était parfaitement équilibrée : détendue, professionnelle et portée par des animations réussies. Bravo aux organisateurs !",
    author: "Joris Servais",
    role: "Metteur en Scène de Votre Patrimoine",
  },
  {
    quote:
      "Une excellente soirée blanche dans un cadre exceptionnel, avec une vue magnifique sur le lac et la chaîne de l’Épine. Des échanges intéressants, une ambiance conviviale et une démonstration d’hypnose spectaculaire. Vivement la prochaine !",
    author: "Julien Mithieux",
    role: "Ju’Elec",
  },
  {
    quote:
      "Une soirée professionnelle qui sort vraiment de l’ordinaire. Les échanges se font naturellement, dans une ambiance chaleureuse et décontractée, tout en restant propice aux rencontres et aux opportunités. Une expérience réussie que je recommande aux dirigeants du territoire.",
    author: "Flavien Saly Rattin",
    role: "Sr rénovation",
  },
];

const faq = [
  {
    question: "Les Boss, c'est quoi exactement ?",
    answer:
      "Les Boss organise des événements professionnels originaux pour permettre aux dirigeants de faire du business autrement. Ce n'est ni un club d'affaires ni un réseau : vous participez uniquement aux événements qui vous intéressent.",
  },
  {
    question: "À qui s'adressent les événements ?",
    answer:
      "Aux dirigeants, entrepreneurs, indépendants et décideurs qui souhaitent rencontrer d'autres professionnels dans une ambiance conviviale. Aucun parrainage ni appartenance à un réseau n'est nécessaire.",
  },
  {
    question: "Comment participer à un événement ?",
    answer:
      "Consultez la page du prochain événement, puis utilisez le bouton de réservation. Toutes les informations pratiques vous seront transmises après votre inscription.",
  },
  {
    question: "Est-ce une soirée de networking classique ?",
    answer:
      "Non. Aucun tour de table ni échange forcé : les lieux, les expériences et l'ambiance favorisent naturellement les rencontres. Le business est sérieux. Pas l'ambiance.",
  },
  {
    question: "Peut-on venir seul ?",
    answer:
      "Oui. De nombreux participants viennent seuls et les événements sont conçus pour faciliter les premiers échanges dès l'arrivée.",
  },
  {
    question: "Faut-il préparer un pitch commercial ?",
    answer:
      "Non. Aucun pitch n'est imposé : vous présentez simplement votre activité au fil des conversations.",
  },
  {
    question: "Que comprend le prix d'entrée ?",
    answer:
      "Le contenu varie selon chaque événement : restauration, boissons, animations ou expériences. Tout ce qui est inclus ou proposé en supplément est précisé avant la réservation.",
  },
];

export default function Home() {
  const nextEvent = events[0];

  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="absolute right-[-28%] top-10 h-72 w-72 rounded-full bg-punch/10 blur-3xl sm:right-[-10%] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-0 left-[-20%] h-64 w-64 rounded-full bg-ink/5 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative z-10 min-w-0">
            <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-ink sm:mb-5 sm:text-sm">
              <span className="grid size-7 place-items-center rounded-full bg-punch text-[10px]">
                *
              </span>
              {siteConfig.mantra}
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] text-ink sm:text-6xl lg:text-7xl">
               Le business est sérieux.
              <span className="mt-1 block sm:mt-3">
                Pas{" "}
                <span className="sketch-mark relative inline-block">l&apos;ambiance</span>
                .
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8">
              Des événements professionnels pour dirigeants et entrepreneurs,
              conçus pour créer des rencontres utiles sans pitch imposé, sans
              tour de table et sans ambiance guindée.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <ButtonLink href="/evenements/tour-du-monde-des-boss">
                Voir l&apos;événement du 22 septembre
              </ButtonLink>
              <ButtonLink href="/les-boss" variant="secondary">
                Comprendre le concept
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted">
              Prochain rendez-vous : 22 septembre · Windalps à Méry
            </p>
          </div>

          <div className="relative z-10 min-w-0">
            <div className="absolute -left-4 -top-5 z-10 hidden h-12 w-12 rotate-[150deg] rounded-full border-[8px] border-punch sm:block" />
            <div className="relative overflow-hidden rounded-boss border border-line bg-white shadow-boss rotate-3 transition duration-700 hover:rotate-0">
              <Image
                src="/images/hero-les-boss.svg"
                alt="Dirigeants réunis lors d'un événement Les Boss"
                width={900}
                height={760}
                priority
                className="h-[320px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-5 left-4 z-20 w-28 -rotate-6 rounded-lg border border-line bg-white p-3 shadow-boss sm:-bottom-9 sm:left-8 sm:w-36 sm:p-4">
              <Image
                src="/images/hero-les-boss.svg"
                alt="Aperçu d'un événement Les Boss"
                width={220}
                height={160}
                className="h-16 w-full rounded-md object-cover sm:h-24"
              />
              <p className="mt-1 text-center text-[9px] font-black uppercase text-ink sm:text-[11px]">
                Our Next Event
              </p>
            </div>
            <div className="absolute -right-3 -top-4 z-20 grid size-20 rotate-12 place-items-center rounded-full border-2 border-punch bg-ink p-2 text-center text-[10px] font-black uppercase leading-tight text-white sm:-right-7 sm:-top-7 sm:size-28 sm:text-xs">
              Dirigeants fondateurs
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cloud/70 px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="dot-pattern absolute inset-0 opacity-[0.045]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-ink sm:mb-4 sm:text-sm">
            Présentation
          </p>
          <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
            Créer des moments qui{" "}
            <span className="sketch-underline">comptent vraiment</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            Les Boss crée des événements professionnels où les dirigeants se
            rencontrent, échangent et développent des opportunités dans une
            ambiance décontractée. Des lieux marquants, des expériences
            originales sans les codes habituels.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-boss border border-line bg-white p-4 text-center shadow-boss sm:p-8 ${
                index === 1 ? "card-tilt-2" : "card-tilt-1"
              }`}
            >
              <FeatureIcon icon={stat.icon} variant="stat" />
              <p className="text-3xl font-black text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.08em] text-muted sm:mt-4 sm:text-xs">
                {stat.label}
              </p>
              {stat.detail ? (
                <p className="mt-2 text-xs leading-5 text-muted/75 sm:text-sm">
                  {stat.detail}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f4f2] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center sm:mb-10">
            <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              Des exp&eacute;riences{" "}
              <span className="sketch-circle mx-1 inline-block">uniques</span>
              pens&eacute;es pour les Boss.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {experienceCards.map((card) => (
              <article
                key={card.title}
                className="grid w-full overflow-hidden rounded-[18px] bg-white shadow-none md:min-h-[360px] md:grid-cols-[1.04fr_0.96fr]"
              >
                <div className="relative h-[190px] overflow-hidden rounded-t-[18px] md:h-full md:min-h-[360px] md:rounded-l-[18px] md:rounded-tr-none">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-[18px] top-[14px] rounded-[8px] bg-punch px-[11px] py-[9px] text-center font-black text-ink sm:left-6 sm:top-6 sm:px-4 sm:py-3">
                    <span className="block text-[15px] leading-none sm:text-2xl">
                      {card.day}
                    </span>
                    <span className="mt-[3px] block text-[10px] uppercase leading-none sm:text-[11px]">
                      {card.month}
                    </span>
                  </div>
                </div>
                <div className="flex min-h-[230px] flex-col px-[23px] pb-[22px] pt-[24px] sm:p-9 md:justify-center lg:p-12">
                  <p className="mb-[10px] w-fit bg-ink px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                    {card.tag}
                  </p>
                  <p className="mb-[10px] flex items-center text-xs font-semibold text-[#111111] sm:mb-4 sm:text-sm">
                    <span className="mr-[5px] block size-[5px] rounded-full border border-[#fdc003] sm:mr-2 sm:size-2" />
                    {card.location}
                  </p>
                  <h3 className="text-[20px] font-medium leading-[1.2] text-[#050505] sm:text-4xl lg:text-5xl">
                    {card.title}
                  </h3>
                  <p className="mt-[12px] max-w-xl text-[10px] font-normal leading-[1.75] text-[#58545a] sm:mt-5 sm:text-base sm:leading-7">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    className="mt-6 inline-flex h-11 w-full items-center justify-center gap-[18px] rounded-full border border-[#e8e3df] bg-white px-3 text-[10px] font-black uppercase text-[#050505] transition hover:border-[#050505] focus:outline-none focus-visible:ring-4 focus-visible:ring-punch sm:h-12 sm:w-fit sm:px-7 sm:text-[11px]"
                  >
                    D&eacute;couvrir l&apos;&eacute;v&eacute;nement
                    <span className="text-[17px] leading-none" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-full w-2/5 translate-x-16 -skew-x-12 bg-punch/12" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Pourquoi{" "}
              <span className="mt-2 inline-flex w-fit -rotate-1 bg-punch px-3 py-1 text-ink shadow-[8px_8px_0_rgba(255,255,255,0.1)] sm:mt-0 sm:px-4">
                participer ?
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-black leading-7 text-punch sm:text-2xl sm:leading-9">
              Des rencontres qui peuvent réellement faire avancer votre
              activité.
            </p>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-6 text-white/72 sm:text-base sm:leading-7">
              Les soirées Les Boss réunissent des professionnels venus de plusieurs
              départements et issus de secteurs très différents. Des événements
              pensés pour :
            </p>

            <ul className="mt-6 space-y-3">
              {whyParticipateReasons.map((reason) => (
                <li
                  key={reason}
                  className="flex gap-3 text-sm font-bold leading-6 text-white/88"
                >
                  <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-punch text-[11px] font-black text-ink">
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-2xl rounded-md border-l-4 border-punch bg-white/10 px-5 py-4 text-sm font-semibold italic leading-6 text-white/76">
              Ici, pas de pitch imposé, pas de tour de table et pas de
              networking rigide. Les échanges se créent naturellement, autour
              d&apos;expériences qui donnent envie de discuter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {participationCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className={`rounded-boss border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:border-punch/50 hover:bg-punch/10 ${
                    index % 2 === 1 ? "sm:mt-10" : ""
                  }`}
                >
                  <Icon aria-hidden="true" className="size-7 text-punch" />
                  <h3 className="mt-5 text-lg font-black leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/62">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f4f2] px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-punch/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              À qui s&apos;adressent les soirées{" "}
              <span className="sketch-circle mx-1 inline-block">Les Boss</span>{" "}
              ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-muted sm:text-lg sm:leading-8">
              À tous les professionnels qui souhaitent développer leur réseau
              autrement.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-muted/80 sm:text-base sm:leading-7">
              Dirigeants, fondateurs, cadres décisionnaires, indépendants,
              freelances, entrepreneurs, TPE, PME ou représentants de grands
              groupes : tous les profils professionnels sont les bienvenus.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
            {audienceProfiles.map((profile) => (
              <span
                key={profile}
                className="rounded-full border border-line bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-ink shadow-[0_10px_30px_rgba(5,5,5,0.04)] sm:px-5"
              >
                {profile}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-boss border border-line bg-white p-6 shadow-[0_16px_45px_rgba(5,5,5,0.05)] sm:p-8">
              <Map aria-hidden="true" className="size-7 text-punch" />
              <p className="mt-5 text-sm font-semibold leading-7 text-muted sm:text-base">
                Les événements réunissent principalement des participants venus
                de Savoie, Haute-Savoie, Isère, Ain et Rhône, mais ils restent
                ouverts aux professionnels de tous les territoires et de tous
                les secteurs d&apos;activité.
              </p>
            </article>
            <article className="rounded-boss border border-line bg-white p-6 shadow-[0_16px_45px_rgba(5,5,5,0.05)] sm:p-8">
              <Handshake aria-hidden="true" className="size-7 text-punch" />
              <p className="mt-5 text-sm font-semibold leading-7 text-muted sm:text-base">
                Vous pouvez venir pour développer votre activité, trouver de
                nouveaux partenaires, rencontrer des décideurs ou simplement
                élargir votre réseau professionnel dans un cadre différent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center sm:mb-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-ink sm:mb-4 sm:text-sm">
              Expérience
            </p>
            <h2 className="text-balance text-3xl font-black text-ink sm:text-4xl">
              Des Boss conquis par l&apos;expérience.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.author}
                className={`flex h-full min-h-[300px] flex-col rounded-boss border-t-4 ${
                  index === 1 ? "border-ink" : "border-punch"
                } bg-white p-5 shadow-boss sm:p-6`}
              >
                <p className="text-sm leading-6 text-muted">
                  « {testimonial.quote} »
                </p>
                <div className="mt-auto pt-6">
                  <h3 className="text-lg font-black leading-tight text-ink">
                    {testimonial.author}
                  </h3>
                  {testimonial.role ? (
                    <p className="mt-2 text-sm font-semibold leading-5 text-muted">
                      {testimonial.role}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-ink sm:mb-4 sm:text-sm">
            Une question ?
          </p>
          <h2 className="text-balance text-3xl font-black text-ink sm:text-4xl">
            Tout ce que vous devez savoir
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-punch sm:mt-5 sm:h-1 sm:w-20" />
          <div className="mt-5 space-y-2 text-left sm:mt-10 sm:space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-md border border-line bg-white sm:rounded-boss"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-black text-ink sm:p-5">
                  {item.question}
                  <span className="text-punch transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="border-t border-line/40 px-4 pb-4 pt-3 text-sm leading-6 text-muted sm:px-5 sm:pb-5 sm:pt-4">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-boss bg-ink px-4 py-9 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -left-5 -top-5 size-14 rounded-full border-[7px] border-punch/25 sm:-left-8 sm:-top-8 sm:size-24 sm:border-[10px]" />
          <div className="absolute -bottom-16 -right-16 size-44 rounded-full border-[22px] border-punch/10" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-4xl font-black uppercase leading-tight sm:text-6xl">
              Prêt à vivre l&apos;expérience Les Boss ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:mt-5 sm:text-lg">
              Rendez-vous le 22 septembre à Windalps, à Méry, pour
              rencontrer des dirigeants de cinq départements, dans une ambiance
              qui facilite vraiment les échanges.
            </p>
            <div className="mt-5 flex justify-center gap-2 sm:mt-8 sm:gap-3">
              <ButtonLink href={`/evenements/${nextEvent.slug}`} variant="dark">
                Voir le programme du 22 septembre
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Poser une question
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
