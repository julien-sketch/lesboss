import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CircleDot, Gem, MonitorPlay, Sparkles, Utensils, Wind } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { getEventBySlug } from "@/data/events";
import { siteConfig } from "@/config/site";

const event = getEventBySlug("tour-du-monde-des-boss");

export const metadata: Metadata = {
  title: "Tour du monde des Boss à Windalps · Retour en images",
  description:
    "Retour sur le 22 septembre 2026 à Windalps : 80 participants, dégustation de caviar, buffet du monde, pétanque, mur interactif, pole dance et chute libre indoor.",
  alternates: { canonical: "/evenements/tour-du-monde-des-boss" },
  openGraph: {
    title: "Le Tour du monde des Boss à Windalps",
    description: "80 participants et une soirée professionnelle qui sort du cadre. Retour sur le 22 septembre 2026 à Méry.",
    images: [{ url: "/images/windalps/pole-dance.webp", width: 2000, height: 1331, alt: "Spectacle de pole dance à Windalps" }],
  },
};

const highlights = [
  "80 participants réunis à Windalps, à Méry.",
  "Une dégustation de caviar et un buffet aux saveurs du monde.",
  "Des jeux et des expériences pour faciliter les échanges.",
  "Un spectacle de pole dance et de la chute libre indoor.",
];

const activities = [
  { title: "Dégustation de caviar", text: "Une découverte gourmande à partager entre deux conversations.", icon: Gem },
  { title: "Buffet du monde", text: "Des saveurs venues d'ailleurs pour prolonger le voyage autour du buffet.", icon: Utensils },
  { title: "Chute libre indoor", text: "L'expérience de la soufflerie à Windalps : de quoi prendre de la hauteur et repartir avec des souvenirs.", icon: Wind },
  { title: "Pétanque", text: "Une partie, quelques échanges et une autre façon de faire connaissance.", icon: CircleDot },
  { title: "Mur interactif", text: "Une animation participative pour jouer et échanger autrement.", icon: MonitorPlay },
  { title: "Pole dance", text: "Une démonstration acrobatique qui a rythmé la soirée.", icon: Sparkles },
];

const gallery = [
  { src: "/images/windalps/pole-dance.webp", alt: "Duo de pole dance sur la scène de Windalps", caption: "Le spectacle de pole dance", width: 2000, height: 1331, landscape: true },
  { src: "/images/windalps/soiree-les-boss.webp", alt: "Prise de parole au micro pendant la soirée Les Boss à Windalps", caption: "Les temps d'échange de la soirée", width: 2000, height: 1331, landscape: true },
  { src: "/images/windalps/buffet-du-monde.webp", alt: "Brochettes de fruits et pâtisseries du buffet du monde", caption: "Les saveurs du buffet du monde", width: 1331, height: 2000, landscape: false },
  { src: "/images/windalps/rencontres-interactives.webp", alt: "Participants échangeant autour d'un écran interactif Les Boss", caption: "Des rencontres autour du jeu", width: 1500, height: 2000, landscape: false },
  { src: "/images/windalps/petanque-et-spectacle.webp", alt: "Piste de pétanque au premier plan et spectacle sur la scène de Windalps", caption: "Pétanque et spectacle, au même rendez-vous", width: 1331, height: 2000, landscape: false },
];

export default function TourDuMondePage() {
  if (!event) notFound();

  const eventFacts = [
    { label: "Date", value: event.date },
    { label: "Lieu", value: event.location },
    { label: "Participants", value: event.participants + " personnes" },
    { label: "Ambiance", value: "Le business est sérieux. Pas l'ambiance." },
  ];

  return (
    <main>
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-punch px-4 py-2 text-sm font-black uppercase text-ink">Événement passé</p>
            <h1 className="text-balance text-4xl font-black uppercase leading-tight text-ink sm:text-6xl xl:text-7xl">Le Tour du monde des Boss</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-muted sm:text-xl sm:leading-9">
              Le {event.date}, {event.participants} participants se sont retrouvés à {event.location} pour une soirée professionnelle autour du voyage, des rencontres et des expériences qui sortent du cadre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#photos" variant="secondary">Revivez la soirée en images</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-boss bg-white shadow-boss">
            <Image src={event.image} alt={event.imageAlt} fill priority sizes="(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <div className="absolute left-5 top-5 rounded-lg bg-punch px-4 py-3 text-center font-black text-ink">
              <span className="block text-2xl leading-none">22</span>
              <span className="mt-1 block text-xs uppercase leading-none">Sept. 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="La soirée en bref" className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventFacts.map((fact) => (
            <div key={fact.label} className="rounded-boss border border-line bg-white p-5 shadow-boss sm:p-6">
              <dt className="text-xs font-black uppercase text-muted">{fact.label}</dt>
              <dd className="mt-3 text-xl font-black leading-tight text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-ink px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-punch">L&apos;esprit de la soirée</p>
            <h2 className="mt-4 text-balance text-3xl font-black uppercase leading-tight sm:text-5xl">Changer de décor. Faire des rencontres.</h2>
          </div>
          <div>
            <p className="text-base font-semibold leading-8 text-white/75 sm:text-lg">
              À Windalps, le voyage se vivait dans l&apos;assiette, sur scène et jusque dans la soufflerie. Entre les animations, les conversations se sont nouées dans une ambiance conviviale. Une autre façon de faire du business, tout simplement.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlights.map((highlight) => <p key={highlight} className="border-l-4 border-punch bg-white/5 px-5 py-4 text-sm font-bold leading-6 text-white/80">{highlight}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-muted">Activités</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">Six expériences. Une soirée qui fait parler.</h2>
            <p className="mt-5 text-base font-semibold leading-7 text-muted sm:text-lg">De la dégustation de caviar à la chute libre indoor, il y avait de quoi partager bien plus qu&apos;une carte de visite.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const dark = index === 1;
              return (
                <article key={activity.title} className={"rounded-boss border p-6 shadow-boss sm:p-8 " + (dark ? "border-ink bg-ink text-white" : "border-line bg-white text-ink")}>
                  <div className="mb-5 grid size-12 place-items-center rounded-full bg-punch text-ink"><Icon aria-hidden="true" className="size-6" /></div>
                  <h3 className={"text-2xl font-black leading-tight " + (dark ? "text-punch" : "text-ink")}>{activity.title}</h3>
                  <p className={"mt-4 text-sm font-semibold leading-7 sm:text-base " + (dark ? "text-white/75" : "text-muted")}>{activity.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="photos" className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase text-ink">Photos</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">Quelques images pour retrouver l&apos;ambiance.</h2>
          </div>
          <div className="grid items-start gap-6 md:grid-cols-6">
            {gallery.map((photo) => (
              <figure key={photo.src} className={photo.landscape ? "md:col-span-3" : "md:col-span-2"}>
                <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={photo.caption + " : ouvrir la photo en grand (nouvel onglet)"} className="block overflow-hidden rounded-boss focus-visible:outline focus-visible:outline-4 focus-visible:outline-punch">
                  <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={photo.landscape ? "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"} className="h-auto w-full" />
                </a>
                <figcaption className="mt-3 text-sm font-semibold leading-6 text-muted">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-3xl font-black uppercase leading-tight text-ink sm:text-5xl">Envie de vivre la prochaine ?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-muted sm:text-lg sm:leading-8">Les Boss continuent d&apos;imaginer des événements professionnels qui donnent envie de discuter, de créer des opportunités et de faire du business autrement.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href={siteConfig.nextEventHref}>Voir le prochain événement</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Contacter Les Boss</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
