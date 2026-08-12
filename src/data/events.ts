import { siteConfig } from "@/config/site";

export type EventStatus = "prochainement" | "termine";

export type BossEvent = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  status: EventStatus;
  reservationUrl: string;
  animations: string[];
};

export const events: BossEvent[] = [
  {
    slug: "tour-du-monde-des-boss",
    title: "Tour du monde des Boss",
    date: "22 septembre",
    time: "19 h",
    location: "Lieu tenu secret",
    shortDescription:
      "Une soirée professionnelle et festive autour du voyage, pensée pour les dirigeants et entrepreneurs locaux.",
    fullDescription:
      "Le Tour du monde des Boss réunit des dirigeants et entrepreneurs locaux autour du voyage, d'expériences originales et de rencontres qui comptent. Au programme annoncé : des échanges, un buffet inspiré de différentes destinations, une expérience de chute libre indoor, un spectacle, des animations interactives, des rencontres professionnelles et des surprises.",
    image: "/images/fond-event.svg",
    imageAlt: "Dirigeants réunis lors d'un événement Les Boss",
    status: "prochainement",
    reservationUrl: siteConfig.reservationUrl,
    animations: [
      "Échanges entre dirigeants",
      "Buffet inspiré de différentes destinations",
      "Expérience de chute libre indoor",
      "Spectacle",
      "Animations interactives",
      "Rencontres professionnelles",
      "Surprises",
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
