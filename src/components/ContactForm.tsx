"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const successMessage = "Votre message a bien été envoyé. Nous vous répondrons rapidement.";
const errorMessage =
  "Une erreur est survenue. Vous pouvez nous écrire directement à bonjour@lesboss.fr.";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const message = status === "success" ? successMessage : status === "error" ? errorMessage : "";

  return (
    <form
      className="rounded-boss bg-white p-6 shadow-boss sm:p-8"
      aria-label="Formulaire de contact"
      method="post"
      action="/api/contact"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="font-bold text-ink">Nom *</span>
          <input
            className="mt-2 w-full rounded-2xl border-ink/15"
            name="name"
            maxLength={120}
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <span className="font-bold text-ink">Entreprise *</span>
          <input
            className="mt-2 w-full rounded-2xl border-ink/15"
            name="company"
            maxLength={120}
            autoComplete="organization"
            required
          />
        </label>
        <label className="block">
          <span className="font-bold text-ink">Email *</span>
          <input
            className="mt-2 w-full rounded-2xl border-ink/15"
            name="email"
            type="email"
            maxLength={254}
            autoComplete="email"
            required
          />
        </label>
        <label className="block">
          <span className="font-bold text-ink">Téléphone</span>
          <span className="mt-1 block text-xs font-semibold text-muted">
            Facultatif
          </span>
          <input
            className="mt-2 w-full rounded-2xl border-ink/15"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <span>Site web</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="mt-5 block">
        <span className="font-bold text-ink">Objet *</span>
        <input className="mt-2 w-full rounded-2xl border-ink/15" name="subject" maxLength={160} required />
      </label>
      <label className="mt-5 block">
        <span className="font-bold text-ink">Message *</span>
        <textarea
          className="mt-2 min-h-40 w-full rounded-2xl border-ink/15"
          name="message"
          maxLength={2400}
          required
        />
      </label>
      <label className="mt-5 flex items-start gap-3">
        <input className="mt-1 rounded border-ink/20 text-punch" name="consent" type="checkbox" required />
        <span className="text-sm font-semibold leading-6 text-ink/72">
          J&apos;accepte d&apos;être recontacté au sujet de ma demande.
        </span>
      </label>
      <p className="mt-4 text-sm font-semibold leading-6 text-ink/64">
        Les informations transmises sont utilisées par SC COM — GI Photo pour
        répondre à votre demande. Les champs marqués d&apos;un astérisque sont
        obligatoires. Pour en savoir plus sur la gestion de vos données et
        exercer vos droits, consultez notre{" "}
        <Link
          className="font-black text-ink underline decoration-punch decoration-2 underline-offset-4"
          href="/politique-de-confidentialite"
        >
          politique de confidentialité
        </Link>
        .
      </p>
      <button
        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-punch hover:text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-punch focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-ink disabled:hover:text-white motion-reduce:transition-none"
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <p
        className={`mt-5 text-sm font-bold leading-6 ${
          status === "success" ? "text-ink" : status === "error" ? "text-red-700" : "sr-only"
        }`}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message || "Statut du formulaire"}
      </p>
    </form>
  );
}
