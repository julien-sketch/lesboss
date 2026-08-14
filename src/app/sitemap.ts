import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/les-boss",
    "/partenaires",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/conditions-generales-de-vente",
    "/evenements/soiree-blanche-adelphia",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...events.map((event) => ({
      url: `${siteConfig.url}/evenements/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
