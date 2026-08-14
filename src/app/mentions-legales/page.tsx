import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Mentions légales | Les Boss",
  },
  description:
    "Mentions légales du site Les Boss et informations relatives aux entreprises organisatrices.",
};

function LegalSection({
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

function LegalSubsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-boss bg-paper p-5 sm:p-6">
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <div className="mt-4 space-y-4 text-base font-medium leading-8 text-ink/74">
        {children}
      </div>
    </section>
  );
}

function InfoBlock({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-1 rounded-boss border border-ink/10 bg-white p-5 text-ink shadow-boss sm:p-6">
      {children}
    </div>
  );
}

const mailLink = (
  <a className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4" href="mailto:bonjour@lesboss.fr">
    bonjour@lesboss.fr
  </a>
);

export default function LegalPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-muted">
            Informations juridiques
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">
            Mentions légales
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/72">
            Dernière mise à jour : août 2026
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-12">
          <LegalSection title="Présentation de Les Boss">
            <p>
              Les Boss est une initiative événementielle portée conjointement par trois entreprises
              juridiquement indépendantes :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>VPTC, exploitant le nom commercial Picqtures ;</li>
              <li>Astrid Goryn, exploitant le nom commercial Tout Schuss ;</li>
              <li>SC COM, exploitant le nom commercial Gi Photo.</li>
            </ul>
            <p>
              Les Boss ne constitue pas, à ce jour, une société, une association ou une personne
              morale distincte.
            </p>
            <p>
              Les trois entreprises organisatrices collaborent à la conception et à l’organisation
              des événements Les Boss. Leurs relations, ainsi que la répartition des recettes, des
              dépenses et des responsabilités, sont définies dans le cadre de leurs accords internes.
            </p>
          </LegalSection>

          <LegalSection title="Éditeur du site">
            <p>
              Le site <code className="rounded bg-cloud px-1.5 py-1 text-sm text-ink">lesboss.fr</code>{" "}
              est édité par :
            </p>
            <InfoBlock>
              <p className="font-black">VPTC — Picqtures</p>
              <p>Société à responsabilité limitée au capital de 2 700 euros</p>
              <p>Siège social : 5 route du Buchet Haut, 38660 Sainte-Marie-d’Alloix</p>
              <p>SIREN : 937 954 212</p>
              <p>SIRET : 937 954 212 00018</p>
              <p>RCS Grenoble : 937 954 212</p>
              <p>Numéro de TVA intracommunautaire : FR27 937954212</p>
              <p>Adresse électronique : {mailLink}</p>
            </InfoBlock>
          </LegalSection>

          <LegalSection title="Directeur de la publication">
            <p>Le directeur de la publication est :</p>
            <p>
              <strong className="text-ink">Julien Veyrac</strong>, cogérant de VPTC.
            </p>
          </LegalSection>

          <LegalSection title="Entreprises coorganisatrices">
            <div className="space-y-6">
              <LegalSubsection title="Tout Schuss">
                <InfoBlock>
                  <p className="font-black">Astrid Goryn — Tout Schuss</p>
                  <p>Entrepreneur individuel</p>
                  <p>Siège professionnel : 62 avenue de Tresserve, 73100 Aix-les-Bains</p>
                  <p>SIREN : 914 862 164</p>
                  <p>SIRET : 914 862 164 00052</p>
                  <p>Numéro de TVA intracommunautaire : FR22 914862164</p>
                  <p>Adresse électronique : {mailLink}</p>
                </InfoBlock>
                <p>
                  Tout Schuss peut notamment assurer, selon l’événement, l’organisation
                  administrative des réservations, l’encaissement des paiements et la facturation.
                </p>
              </LegalSubsection>

              <LegalSubsection title="Gi Photo">
                <InfoBlock>
                  <p className="font-black">SC COM — Gi Photo</p>
                  <p>Société à responsabilité limitée au capital de 700 euros</p>
                  <p>Siège social : 31 rue Jules Challier, 73000 Chambéry</p>
                  <p>SIREN : 904 730 892</p>
                  <p>SIRET : 904 730 892 00026</p>
                  <p>RCS Chambéry : 904 730 892</p>
                  <p>Numéro de TVA intracommunautaire : FR89 904730892</p>
                  <p>Représentée par son gérant, Joris Peres</p>
                  <p>Adresse électronique : {mailLink}</p>
                </InfoBlock>
                <p>
                  SC COM assure la gestion du nom de domaine{" "}
                  <code className="rounded bg-cloud px-1.5 py-1 text-sm text-ink">lesboss.fr</code>,
                  de l’adresse <strong className="text-ink">bonjour@lesboss.fr</strong> et des
                  données transmises par le formulaire de contact.
                </p>
              </LegalSubsection>
            </div>
          </LegalSection>

          <LegalSection title="Billetterie et réservations">
            <p>
              La vente des billets des événements Les Boss est réalisée en ligne, principalement au
              moyen de la plateforme Weezevent.
            </p>
            <p>
              Selon l’événement et les modalités convenues avec le lieu d’accueil, la billetterie
              peut être gérée :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>par Tout Schuss ;</li>
              <li>directement par l’établissement accueillant l’événement ;</li>
              <li>par un autre partenaire expressément identifié sur la page de réservation.</li>
            </ul>
            <p>
              L’identité du vendeur contractuel, le prix, les éventuels frais, les conditions
              générales de vente et les modalités d’annulation ou de remboursement sont communiqués
              avant la validation de la commande.
            </p>
            <p>
              Lorsque Weezevent est utilisé, la plateforme fournit la solution technique de
              réservation et de paiement. L’identité du vendeur reste celle de l’entité indiquée sur
              la page de réservation et au moment de la commande.
            </p>
            <p>
              Avant tout achat, l’utilisateur est invité à consulter les conditions générales de
              vente et la politique de confidentialité applicables à la plateforme et au vendeur
              concernés.
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>Le site est hébergé par :</p>
            <InfoBlock>
              <p className="font-black">Vercel Inc.</p>
              <p>440 N Barranca Avenue, numéro 4133</p>
              <p>Covina, Californie 91723</p>
              <p>États-Unis</p>
              <p>
                Site internet :{" "}
                <a
                  className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
                  href="https://vercel.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://vercel.com
                </a>
              </p>
            </InfoBlock>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L’ensemble des éléments présents sur le site{" "}
              <code className="rounded bg-cloud px-1.5 py-1 text-sm text-ink">lesboss.fr</code>,
              notamment les textes, photographies, vidéos, illustrations, logos, éléments
              graphiques, marques, noms commerciaux et contenus téléchargeables, est protégé par la
              législation applicable en matière de propriété intellectuelle.
            </p>
            <p>Ces contenus restent la propriété de leurs titulaires respectifs.</p>
            <p>
              Sauf autorisation écrite préalable du titulaire des droits, toute reproduction,
              représentation, adaptation, modification, publication ou exploitation, totale ou
              partielle, de ces éléments est interdite, quel que soit le procédé ou le support
              utilisé.
            </p>
            <p>
              Les photographies et contenus provenant de partenaires, de prestataires, de
              participants ou de lieux d’accueil restent la propriété de leurs auteurs ou titulaires
              respectifs.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              Les entreprises organisatrices s’efforcent de fournir sur le site des informations
              exactes et régulièrement mises à jour. Elles ne peuvent toutefois garantir l’exactitude,
              l’exhaustivité ou l’actualité permanente des informations publiées.
            </p>
            <p>
              Les informations relatives aux événements, notamment les dates, horaires, lieux,
              intervenants, programmes, tarifs et disponibilités, peuvent être modifiées.
            </p>
            <p>
              Les entreprises organisatrices ne pourront être tenues responsables d’une interruption
              du site, d’une indisponibilité temporaire, d’une erreur technique ou des conséquences
              résultant de l’utilisation des informations publiées.
            </p>
          </LegalSection>

          <LegalSection title="Liens externes">
            <p>
              Le site peut contenir des liens vers des plateformes de billetterie, des lieux
              d’accueil, des partenaires ou d’autres sites internet exploités par des tiers.
            </p>
            <p>
              Les entreprises organisatrices ne contrôlent pas le contenu ni les pratiques de ces
              services externes et ne peuvent être tenues responsables de leur disponibilité, de leur
              sécurité ou du traitement des données réalisé par ces tiers.
            </p>
            <p>
              L’utilisateur est invité à consulter les mentions légales, les conditions générales et
              les politiques de confidentialité des sites concernés.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles">
            <p>
              SC COM — Gi Photo assure la gestion des données transmises au moyen du formulaire de
              contact du site Les Boss.
            </p>
            <p>
              Les informations recueillies sont utilisées pour répondre aux demandes des visiteurs,
              fournir des renseignements sur les événements et assurer le suivi des échanges.
            </p>
            <p>
              Les modalités détaillées concernant les données collectées, leurs finalités, leur base
              légale, leurs destinataires, leur durée de conservation et les droits des personnes
              sont présentées dans la{" "}
              <Link
                className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
                href="/politique-de-confidentialite"
              >
                politique de confidentialité
              </Link>
              .
            </p>
            <p>
              Pour toute question concernant les données personnelles ou pour exercer ses droits,
              l’utilisateur peut écrire à : <strong>{mailLink}</strong>
            </p>
            <p>
              L’utilisateur dispose également du droit d’introduire une réclamation auprès de la
              Commission nationale de l’informatique et des libertés, accessible sur{" "}
              <a
                className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
                href="https://www.cnil.fr"
                rel="noreferrer"
                target="_blank"
              >
                https://www.cnil.fr
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Le site n&apos;utilise actuellement aucun cookie publicitaire, outil
              de mesure d&apos;audience ou traceur nécessitant le consentement de
              l&apos;utilisateur. Des cookies strictement nécessaires au
              fonctionnement technique du site peuvent toutefois être utilisés.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Pour toute question concernant le site, les événements ou les présentes mentions
              légales :
            </p>
            <InfoBlock>
              <p className="font-black">Les Boss</p>
              <p>Adresse électronique : {mailLink}</p>
            </InfoBlock>
          </LegalSection>
        </article>
      </section>
    </main>
  );
}
