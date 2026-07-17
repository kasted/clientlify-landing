"use client";

import { useState } from "react";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13.5, fontWeight: 600, color: "#3a443e" }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontSize: 15,
  color: "#161d1a",
  background: "#fff",
  border: "1px solid #dbd8d0",
  borderRadius: 9,
  padding: "11px 14px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function set(field: string, val: string) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", honeypot, ...form }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ background: "#fff", border: "1px solid #e5e3db", borderRadius: 20, padding: "48px 32px", textAlign: "center", boxShadow: "0 20px 50px -24px rgba(20,40,32,.14)" }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b3d2e" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: "-.02em", margin: "0 0 12px", color: "#161d1a" }}>
          Message sent!
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#566159", margin: 0 }}>
          Thanks for reaching out, {form.name}. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-animate
      style={{ "--anim-delay": "120ms", display: "flex", flexDirection: "column", gap: 20, background: "#fff", border: "1px solid #e5e3db", borderRadius: 20, padding: "36px 32px", boxShadow: "0 20px 50px -24px rgba(20,40,32,.14)" } as React.CSSProperties}
    >
      <Field label="Your name">
        <input required style={inputStyle} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
      </Field>
      <Field label="Email address">
        <input required type="email" style={inputStyle} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@yourbusiness.com" />
      </Field>
      <Field label="Subject">
        <input required style={inputStyle} value={form.subject} onChange={(e) => set("subject", e.target.value)} placeholder="Question about Clientlify" />
      </Field>
      <Field label="Message">
        <textarea required rows={6} style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us what's on your mind…" />
      </Field>
      <input type="text" name="company_website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
      {error && (
        <p style={{ fontSize: 14, color: "#b3261e", margin: 0 }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={sending}
        style={{
          opacity: sending ? 0.7 : 1,
          fontSize: 15.5,
          fontWeight: 700,
          color: "#f7f5f2",
          background: "#0f503c",
          border: "none",
          borderRadius: 11,
          padding: "14px 24px",
          cursor: "pointer",
          marginTop: 4,
          fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif",
        }}
      >
        {sending ? "Sending…" : "Send message →"}
      </button>
      <p style={{ fontSize: 12.5, color: "#9aa8a1", textAlign: "center", margin: 0 }}>
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}
