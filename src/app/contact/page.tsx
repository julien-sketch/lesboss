import type { Metadata } from "next";
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
          text="Le formulaire est prêt visuellement. Un service d'envoi devra être connecté ultérieurement."
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
                TODO: remplacer par l&apos;adresse email officielle.
              </p>
              <p>
                <span className="block font-black text-punch">Téléphone</span>
                TODO: remplacer par le numéro officiel.
              </p>
            </div>
          </aside>

          <form
            className="rounded-boss bg-white p-6 shadow-boss sm:p-8"
            aria-label="Formulaire de contact"
          >
            {/* TODO: connecter ce formulaire à un service d'envoi email. */}
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="font-bold text-ink">Nom</span>
                <input className="mt-2 w-full rounded-2xl border-ink/15" name="name" required />
              </label>
              <label className="block">
                <span className="font-bold text-ink">Entreprise</span>
                <input className="mt-2 w-full rounded-2xl border-ink/15" name="company" required />
              </label>
              <label className="block">
                <span className="font-bold text-ink">Email</span>
                <input
                  className="mt-2 w-full rounded-2xl border-ink/15"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label className="block">
                <span className="font-bold text-ink">Téléphone facultatif</span>
                <input className="mt-2 w-full rounded-2xl border-ink/15" name="phone" type="tel" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="font-bold text-ink">Objet</span>
              <input className="mt-2 w-full rounded-2xl border-ink/15" name="subject" required />
            </label>
            <label className="mt-5 block">
              <span className="font-bold text-ink">Message</span>
              <textarea
                className="mt-2 min-h-40 w-full rounded-2xl border-ink/15"
                name="message"
                required
              />
            </label>
            <label className="mt-5 flex items-start gap-3">
              <input className="mt-1 rounded border-ink/20 text-punch" name="consent" type="checkbox" required />
              <span className="text-sm font-semibold leading-6 text-ink/72">
                J&apos;accepte d&apos;être recontacté au sujet de ma demande.
              </span>
            </label>
            <button
              className="mt-7 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-black uppercase text-white opacity-70"
              type="button"
              aria-disabled="true"
            >
              Envoi bientôt disponible
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
