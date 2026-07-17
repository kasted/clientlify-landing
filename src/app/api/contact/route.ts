import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "hello@clientlify.com";
const FROM_EMAIL = "Clientlify Website <hello@clientlify.com>";

const MAX_FIELD_LENGTH = 5000;

type ContactPayload = {
  formType: "contact" | "demo";
  honeypot?: string;
  [key: string]: string | undefined;
};

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function contactEmail(p: ContactPayload) {
  return {
    subject: `[Contact] ${clean(p.subject) || "New message"} — ${clean(p.name)}`,
    text: [
      `Name: ${clean(p.name)}`,
      `Email: ${clean(p.email)}`,
      `Subject: ${clean(p.subject)}`,
      ``,
      `Message:`,
      clean(p.message),
    ].join("\n"),
  };
}

function demoEmail(p: ContactPayload) {
  return {
    subject: `[Demo Request] ${clean(p.business)} — ${clean(p.firstName)} ${clean(p.lastName)}`,
    text: [
      `Name: ${clean(p.firstName)} ${clean(p.lastName)}`,
      `Business: ${clean(p.business)}`,
      `Website: ${clean(p.website) || "—"}`,
      `Email: ${clean(p.email)}`,
      `Phone: ${clean(p.phone) || "—"}`,
      ``,
      `Business type: ${clean(p.type)}`,
      `Events per month: ${clean(p.eventsPerMonth)}`,
      `Current system: ${clean(p.currentSystem)}`,
      `When to start: ${clean(p.whenToStart)}`,
      `How they heard: ${clean(p.howHeard) || "—"}`,
      ``,
      `Message:`,
      clean(p.message) || "—",
    ].join("\n"),
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (payload.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(payload.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let message: { subject: string; text: string };
  if (payload.formType === "contact") {
    if (!clean(payload.name) || !clean(payload.message)) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    message = contactEmail(payload);
  } else if (payload.formType === "demo") {
    if (!clean(payload.firstName) || !clean(payload.business)) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    message = demoEmail(payload);
  } else {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Something went wrong. Please email us directly." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: message.subject,
    text: message.text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Something went wrong. Please email us directly." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
