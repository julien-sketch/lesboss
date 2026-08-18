import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Politique de confidentialité | Les Boss",
  },
  description:
    "Politique de confidentialité du site Les Boss : données collectées, finalités, conservation et exercice de vos droits.",
};

function PrivacySection({
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

function InfoBlock({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-1 rounded-boss border border-ink/10 bg-white p-5 text-ink shadow-boss sm:p-6">
      {children}
    </div>
  );
}

const mailLink = (
  <a
    className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
    href="mailto:bonjour@lesboss.fr"
  >
    bonjour@lesboss.fr
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="boss-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-muted">
            Données personnelles
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">
            Politique de confidentialité
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/72">
            Cette page explique comment les données transmises via le formulaire
            de contact Les Boss sont collectées, utilisées et conservées.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-12">
          <PrivacySection title="Responsable du traitement">
            <InfoBlock>
              <p className="font-black">SC COM — GI Photo</p>
              <p>Société à responsabilité limitée au capital de 700 euros</p>
              <p>31 rue Jules Challier, 73000 Chambéry</p>
              <p>SIREN : 904 730 892</p>
              <p>SIRET : 904 730 892 00026</p>
              <p>Adresse électronique : {mailLink}</p>
            </InfoBlock>
          </PrivacySection>

          <PrivacySection title="Données collectées">
            <p>Le formulaire de contact permet de collecter les données suivantes :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>nom ;</li>
              <li>entreprise ;</li>
              <li>adresse électronique ;</li>
              <li>téléphone lorsqu&apos;il est renseigné ;</li>
              <li>objet ;</li>
              <li>contenu du message.</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Finalités et base légale">
            <p>Les données sont utilisées pour :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>répondre aux demandes ;</li>
              <li>assurer le suivi des échanges ;</li>
              <li>
                communiquer des renseignements sur les événements ou les
                partenariats.
              </li>
            </ul>
            <p>
              La base légale du traitement est le consentement donné lors de
              l&apos;envoi du formulaire.
            </p>
          </PrivacySection>

          <PrivacySection title="Champs obligatoires et facultatifs">
            <p>
              Les champs marqués d&apos;un astérisque sont obligatoires. Le
              téléphone est facultatif. Sans les champs obligatoires, la demande
              ne peut pas être traitée.
            </p>
          </PrivacySection>

          <PrivacySection title="Destinataires et prestataires">
            <p>Les données peuvent être transmises aux destinataires suivants :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>personnes habilitées de SC COM — GI Photo ;</li>
              <li>coorganisateurs concernés lorsque la demande le nécessite ;</li>
              <li>
                prestataires techniques nécessaires au fonctionnement du service.
              </li>
            </ul>
            <p>
              Les prestataires techniques identifiés sont Vercel pour
              l&apos;hébergement et Resend pour l&apos;envoi du message électronique.
            </p>
          </PrivacySection>

          <PrivacySection title="Durée de conservation">
            <p>
              Les données sont conservées pendant le traitement de la demande,
              puis pendant une durée maximale de trois ans à compter du dernier
              échange, sauf obligation légale ou nécessité de défendre un droit
              en justice.
            </p>
          </PrivacySection>

          <PrivacySection title="Droits des personnes">
            <p>
              Vous pouvez demander l&apos;accès, la rectification,
              l&apos;effacement, la limitation du traitement, la portabilité
              lorsqu&apos;elle s&apos;applique, ainsi que le retrait de votre
              consentement.
            </p>
            <p>Pour exercer vos droits, écrivez à : {mailLink}.</p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la
              Commission nationale de l&apos;informatique et des libertés sur{" "}
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
          </PrivacySection>

          <PrivacySection title="Transferts internationaux">
            <p>
              Certains prestataires techniques peuvent traiter des données hors
              de l&apos;Espace économique européen. Ces transferts doivent être
              encadrés par un mécanisme reconnu par la réglementation applicable.
            </p>
          </PrivacySection>

          <PrivacySection title="Absence de profilage">
            <p>
              Aucune décision automatisée ni aucun profilage n&apos;est réalisé à
              partir du formulaire de contact.
            </p>
          </PrivacySection>
        </article>
      </section>
    </main>
  );
}
