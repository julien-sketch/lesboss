import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Page des mentions légales du site Les Boss, prête à recevoir les informations définitives.",
};

export default function LegalPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-boss bg-white p-8 shadow-boss sm:p-10">
        <h1 className="text-balance text-4xl font-black text-ink sm:text-6xl">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink/72">
          <p>TODO: remplacer par la raison sociale définitive.</p>
          <p>TODO: remplacer par l&apos;adresse du siège social.</p>
          <p>TODO: remplacer par le nom du responsable de publication.</p>
          <p>TODO: remplacer par les informations d&apos;hébergement.</p>
          <p>TODO: ajouter la politique de confidentialité si nécessaire.</p>
        </div>
      </div>
    </main>
  );
}
