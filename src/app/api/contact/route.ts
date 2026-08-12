import { NextResponse } from "next/server";
import { Resend } from "resend";

const FIELD_LIMITS = {
  name: 120,
  company: 120,
  email: 254,
  phone: 40,
  subject: 160,
  message: 2400,
  website: 120,
};

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

const genericError = { message: "Une erreur est survenue." };

function readString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= FIELD_LIMITS.email;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function emailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e8e1df; font-weight: 700; color: #1b1c1c; width: 160px;">${label}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e8e1df; color: #303030;">${escapeHtml(value) || "-"}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const website = readString(payload.website, FIELD_LIMITS.website);
    if (website) {
      return NextResponse.json({ message: "Votre message a bien été envoyé." });
    }

    const name = readString(payload.name, FIELD_LIMITS.name);
    const company = readString(payload.company, FIELD_LIMITS.company);
    const email = readString(payload.email, FIELD_LIMITS.email);
    const phone = readString(payload.phone, FIELD_LIMITS.phone);
    const subject = readString(payload.subject, FIELD_LIMITS.subject);
    const message = readString(payload.message, FIELD_LIMITS.message);
    const consent = payload.consent === true;

    if (!name || !company || !email || !subject || !message || !consent || !isValidEmail(email)) {
      return NextResponse.json(genericError, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(genericError, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const html = `
      <div style="margin: 0; padding: 24px; background: #fcf9f8; font-family: Arial, sans-serif; color: #1b1c1c;">
        <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e8e1df;">
          <div style="padding: 24px; background: #1b1c1c; color: #ffffff;">
            <p style="margin: 0 0 8px; color: #fdc003; font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">Les Boss</p>
            <h1 style="margin: 0; font-size: 24px; line-height: 1.2;">Nouvelle demande de contact</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tbody>
              ${emailRow("Nom", name)}
              ${emailRow("Entreprise", company)}
              ${emailRow("Email", email)}
              ${emailRow("Téléphone", phone)}
              ${emailRow("Objet", subject)}
              ${emailRow("Consentement", consent ? "Oui" : "Non")}
            </tbody>
          </table>
          <div style="padding: 24px;">
            <h2 style="margin: 0 0 12px; font-size: 16px;">Message</h2>
            <div style="white-space: pre-wrap; line-height: 1.6; color: #303030;">${escapeHtml(message)}</div>
          </div>
        </div>
      </div>
    `;

    const text = [
      "Nouvelle demande de contact - Les Boss",
      "",
      `Nom: ${name}`,
      `Entreprise: ${company}`,
      `Email: ${email}`,
      `Téléphone: ${phone || "-"}`,
      `Objet: ${subject}`,
      "Consentement: Oui",
      "",
      "Message:",
      message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "Nouvelle demande de contact — Les Boss",
      html,
      text,
    });

    if (error) {
      return NextResponse.json(genericError, { status: 500 });
    }

    return NextResponse.json({ message: "Votre message a bien été envoyé." });
  } catch {
    return NextResponse.json(genericError, { status: 400 });
  }
}
