import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Découvrez les opportunités de partenariat Les Boss auprès de dirigeants réunis lors d'événements professionnels originaux.",
};

const benefits = [
  "Visibilité auprès d'une audience locale de dirigeants",
  "Présence avant, pendant et après l'événement",
  "Contact direct avec les participants",
  "Association à des expériences originales",
  "Possibilités d'activation sur place",
  "Possibilité d'exclusivité par secteur, à confirmer",
];

const partnerStats = [
  { value: "3", label: "entrepreneurs à l'origine du projet" },
  { value: "5", label: "départements réunis" },
  { value: "100 %", label: "pensé pour les dirigeants" },
];

export default function PartnersPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partenariat"
          title="Une visibilité locale, dans un format qui sort du cadre."
          text="Les Boss associe ses partenaires à des événements professionnels originaux, pensés pour réunir des dirigeants et créer des opportunités dans une ambiance conviviale."
        />
        <div className="mx-auto mt-10 flex justify-center">
          <ButtonLink href={siteConfig.partnerDeckUrl}>
            Recevoir le dossier partenaire
          </ButtonLink>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {partnerStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-boss bg-white p-8 text-center shadow-boss transition duration-300 ${
                index === 1 ? "card-tilt-2" : "card-tilt-1"
              }`}
            >
              <p className="text-5xl font-black text-ink">{stat.value}</p>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-black uppercase tracking-[0.24em] text-punch">
            Bénéfices
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black sm:text-5xl">
            Ce qu&apos;un partenaire peut gagner
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-boss bg-white/5 p-6">
                <h3 className="text-xl font-black text-white">{benefit}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="dark">
              Parlons partenariat
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
