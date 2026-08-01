import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Les Boss · Faire du business autrement",
    template: "%s · Les Boss",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Les Boss · Le business est sérieux. Pas l'ambiance.",
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-les-boss.svg",
        width: 1200,
        height: 630,
        alt: "Les Boss, événements dirigeants en Savoie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Boss",
    description: siteConfig.description,
    images: ["/images/og-les-boss.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
