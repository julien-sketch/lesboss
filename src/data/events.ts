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
  reservationUrl: string | null;
  animations: string[];
  participants?: number;
};

export const events: BossEvent[] = [
  {
    slug: "les-boss-fetent-noel",
    title: "Les Boss fêtent Noël",
    date: "9 décembre 2026",
    time: "19 h",
    location: "La Maison Rouge",
    shortDescription:
      "Les Boss et La Maison Rouge fêtent Noël : une soirée professionnelle et festive pour se rencontrer, échanger et faire du business autrement.",
    fullDescription:
      "Le 9 décembre 2026 dès 19 h, les dirigeants et entrepreneurs ont rendez-vous à La Maison Rouge pour fêter Noël avec Les Boss. Des rencontres, des échanges et une ambiance conviviale pour terminer l'année ensemble. Le business est sérieux. Pas l'ambiance.",
    image: "/images/les-boss-fetent-noel.png",
    imageAlt: "Affiche Les Boss et La Maison Rouge fêtent Noël, le 9 décembre",
    status: "prochainement",
    reservationUrl: "https://urlr.me/UfVk2s",
    animations: [],
  },
  {
    slug: "tour-du-monde-des-boss",
    title: "Tour du monde des Boss",
    date: "22 septembre 2026",
    time: "19 h",
    location: "Windalps à Méry",
    shortDescription:
      "80 participants réunis à Windalps à Méry pour une soirée de rencontres, de découvertes et d'expériences autour du monde.",
    fullDescription:
      "Le 22 septembre 2026, le Tour du monde des Boss a réuni 80 participants à Windalps à Méry. Dégustation de caviar, buffet du monde, pétanque, mur interactif, pole dance et chute libre indoor ont rythmé cette soirée professionnelle et festive. Des expériences originales et des échanges dans une ambiance décontractée.",
    image: "/images/windalps/pole-dance.webp",
    imageAlt: "Démonstration de pole dance lors du Tour du monde des Boss à Windalps",
    status: "termine",
    reservationUrl: null,
    participants: 80,
    animations: [
      "Dégustation de caviar",
      "Buffet du monde",
      "Pétanque",
      "Mur interactif",
      "Pole dance",
      "Chute libre indoor",
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
