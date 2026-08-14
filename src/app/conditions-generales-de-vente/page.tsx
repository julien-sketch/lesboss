import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Conditions générales de vente | Les Boss",
  },
  description:
    "Conditions générales applicables à la vente des billets des événements Les Boss.",
};

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-ink/10 pt-8">
      <h2 className="text-2xl font-black text-ink sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base font-medium leading-8 text-ink/74">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfSalePage() {
  return (
    <main>
      <section className="boss-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-muted">
            Billetterie Les Boss
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">
            Conditions générales de vente
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-ink/72">
            Les présentes conditions encadrent la vente de billets pour les
            événements Les Boss lorsque la page de réservation y renvoie. Les
            informations propres à chaque événement, au vendeur contractuel et à
            la billetterie utilisée sont précisées avant le paiement.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-12">
          <TermsSection title="1. Objet et champ d'application">
            <p>
              Les présentes conditions générales de vente s&apos;appliquent à la
              vente de billets donnant accès aux événements Les Boss, sous
              réserve des conditions particulières affichées sur la page de
              réservation et communiquées avant la validation de la commande.
            </p>
            <p>
              Les billets peuvent être proposés principalement via Weezevent ou
              via tout autre dispositif expressément indiqué pour l&apos;événement
              concerné.
            </p>
          </TermsSection>

          <TermsSection title="2. Identification du vendeur">
            <p>
              Le vendeur contractuel dépend de l&apos;événement. Selon les cas, il
              peut s&apos;agir de Tout Schuss, du lieu d&apos;accueil ou d&apos;un
              autre partenaire identifié sur la page de réservation.
            </p>
            <p>
              L&apos;identité du vendeur, ses coordonnées et les conditions
              applicables à la commande sont affichées avant le paiement. Les
              présentes conditions ne présentent pas automatiquement Tout Schuss
              comme vendeur de tous les événements.
            </p>
          </TermsSection>

          <TermsSection title="3. Caractéristiques essentielles de l'événement">
            <p>
              La date, l&apos;horaire, le lieu, le programme, les prestations
              incluses et les éventuelles conditions particulières sont indiqués
              sur la page de l&apos;événement ou sur la page de réservation avant
              la commande.
            </p>
          </TermsSection>

          <TermsSection title="4. Prix et frais éventuels">
            <p>
              Les prix et frais applicables sont communiqués avant la validation
              de la commande. Selon le vendeur et l&apos;outil de billetterie
              utilisé, des frais de service ou de paiement peuvent être ajoutés
              et affichés avant le paiement.
            </p>
          </TermsSection>

          <TermsSection title="5. Processus de commande">
            <p>
              Le client sélectionne l&apos;événement, le nombre de billets et les
              informations demandées sur la page de réservation. Il vérifie le
              récapitulatif de commande, prend connaissance des conditions
              applicables, puis valide sa commande avant paiement.
            </p>
          </TermsSection>

          <TermsSection title="6. Paiement">
            <p>
              Les moyens de paiement acceptés sont ceux proposés sur la page de
              réservation. Le paiement est réalisé via le prestataire de
              billetterie ou de paiement indiqué avant la commande.
            </p>
          </TermsSection>

          <TermsSection title="7. Confirmation et délivrance des billets">
            <p>
              Après paiement accepté, une confirmation de commande et les billets
              sont transmis selon les modalités indiquées par la plateforme de
              réservation ou par le vendeur identifié.
            </p>
          </TermsSection>

          <TermsSection title="8. Contrôle des billets et conditions d'accès">
            <p>
              L&apos;accès à l&apos;événement peut être soumis au contrôle du billet,
              de l&apos;identité du participant ou de toute condition particulière
              indiquée avant la commande. Un billet déjà utilisé, falsifié ou
              illisible peut entraîner un refus d&apos;accès.
            </p>
          </TermsSection>

          <TermsSection title="9. Annulation, report ou modification de l'événement">
            <p>
              Les modalités d&apos;annulation, de report ou de modification
              dépendent de l&apos;événement et du vendeur contractuel. Elles sont
              précisées sur la page de réservation ou dans les conditions
              communiquées avant le paiement.
            </p>
          </TermsSection>

          <TermsSection title="10. Remboursements">
            <p>
              Les conditions de remboursement dépendent du vendeur et de
              l&apos;événement concerné. Elles sont indiquées avant la commande. En
              cas d&apos;annulation ou de report, les modalités applicables sont
              communiquées par le vendeur ou la plateforme de réservation.
            </p>
          </TermsSection>

          <TermsSection title="11. Absence de droit de rétractation">
            <p>
              Lorsque la vente porte sur une prestation de loisirs devant être
              fournie à une date ou à une période déterminée, le droit de
              rétractation peut ne pas s&apos;appliquer, si cette règle est
              juridiquement applicable à la prestation vendue. Cette information
              est confirmée avant la commande par le vendeur identifié.
            </p>
          </TermsSection>

          <TermsSection title="12. Responsabilité">
            <p>
              Le vendeur est responsable de la bonne exécution de ses obligations
              contractuelles dans les limites prévues par la réglementation
              applicable et par les conditions portées à la connaissance du
              client avant la commande.
            </p>
            <p>
              Les participants restent responsables de leur comportement, de
              leurs effets personnels et du respect des consignes communiquées
              par l&apos;organisation ou le lieu d&apos;accueil.
            </p>
          </TermsSection>

          <TermsSection title="13. Données personnelles">
            <p>
              Les données nécessaires à la commande sont traitées par le vendeur
              identifié et, le cas échéant, par la plateforme de réservation
              utilisée. Pour le formulaire de contact du site Les Boss, les
              informations sont précisées dans la{" "}
              <Link
                className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
                href="/politique-de-confidentialite"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </TermsSection>

          <TermsSection title="14. Propriété intellectuelle">
            <p>
              Les marques, logos, textes, photographies, vidéos, supports de
              communication et éléments visuels liés aux événements Les Boss
              restent protégés par les droits de propriété intellectuelle de
              leurs titulaires respectifs.
            </p>
          </TermsSection>

          <TermsSection title="15. Réclamations">
            <p>
              Toute réclamation relative à une commande doit être adressée au
              vendeur contractuel identifié sur la page de réservation ou dans la
              confirmation de commande. Les coordonnées utiles sont communiquées
              avant ou après la commande selon le parcours de billetterie.
            </p>
          </TermsSection>

          <TermsSection title="16. Médiation de la consommation">
            {/* TODO: renseigner le médiateur de la consommation de chaque vendeur avant l'ouverture de sa billetterie. */}
            <p>
              Lorsqu&apos;un consommateur achète un billet auprès d&apos;un vendeur
              professionnel, il peut recourir gratuitement au médiateur de la
              consommation dont relève ce vendeur, après avoir adressé une
              réclamation écrite préalable restée sans solution.
            </p>
            <p>
              Le nom, l&apos;adresse et le site du médiateur compétent doivent
              être communiqués par le vendeur sur la page de réservation, dans
              ses conditions générales de vente ou dans la confirmation de
              commande. Le médiateur dépend de l&apos;identité du vendeur de
              l&apos;événement.
            </p>
          </TermsSection>

          <TermsSection title="17. Droit applicable et règlement des litiges">
            <p>
              Les présentes conditions sont soumises au droit français. En cas de
              litige, les parties recherchent d&apos;abord une solution amiable. À
              défaut, le litige est porté devant les juridictions compétentes
              selon les règles de droit commun.
            </p>
          </TermsSection>
        </article>
      </section>
    </main>
  );
}
