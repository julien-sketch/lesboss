import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Les Boss pour une question événement, une demande partenaire ou un échange autour de la marque.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Une question, une idée, un projet à proposer ?"
          text="Envoyez-nous votre demande, on revient vers vous rapidement avec une réponse claire."
        />
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-boss bg-ink p-8 text-white shadow-boss">
            <h2 className="text-3xl font-black">Coordonnées</h2>
            <div className="mt-8 space-y-5 text-white/78">
              <p>
                <span className="block font-black text-punch">Territoire</span>
                Savoie et région alpine
              </p>
              <p>
                <span className="block font-black text-punch">Email</span>
                bonjour@lesboss.fr
              </p>
              <p>
                <span className="block font-black text-punch">Téléphone</span>
                Astrid : 0689923046 <br/>
                Joris : 0635431198<br/>
                Julien : 0650555651
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
