"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  "Taco Catering",
  "Party Rentals",
  "Jumper Rental",
  "Other Catering",
  "Other Event Business",
];

const CURRENT_SYSTEMS = [
  "Spreadsheets / pen and paper",
  "Another booking or CRM tool",
  "Custom or in-house system",
  "Nothing yet",
];

const EVENTS_PER_MONTH = [
  "1–5 events",
  "6–15 events",
  "16–30 events",
  "30+ events",
];

const WHEN_TO_START = [
  "As soon as possible",
  "Within the next month",
  "Just exploring for now",
];

const HOW_HEARD = [
  "Google search",
  "Word of mouth",
  "Social media",
  "Referred by someone",
  "Other",
];

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

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239aa8a1' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: 36,
};

export default function BookADemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    business: "",
    website: "",
    email: "",
    phone: "",
    type: "",
    eventsPerMonth: "",
    currentSystem: "",
    whenToStart: "",
    howHeard: "",
    message: "",
  });

  function set(field: string, val: string) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
          You&apos;re on the list!
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#566159", margin: 0 }}>
          Thanks, {form.firstName}. We&apos;ll be in touch within one business day to schedule your demo.
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="First name">
          <input required style={inputStyle} value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="First name" />
        </Field>
        <Field label="Last name">
          <input required style={inputStyle} value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Last name" />
        </Field>
      </div>

      <Field label="Business name">
        <input required style={inputStyle} value={form.business} onChange={(e) => set("business", e.target.value)} placeholder="Your business name" />
      </Field>

      <Field label="Business website (optional)">
        <input type="url" style={inputStyle} value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="https://yoursite.com" />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Work email">
          <input required type="email" style={inputStyle} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@yourbusiness.com" />
        </Field>
        <Field label="Phone (optional)">
          <input type="tel" style={inputStyle} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (555) 000-0000" />
        </Field>
      </div>

      <Field label="Business type">
        <select required style={selectStyle} value={form.type} onChange={(e) => set("type", e.target.value)}>
          <option value="">Select your business type…</option>
          {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Events per month">
          <select required style={selectStyle} value={form.eventsPerMonth} onChange={(e) => set("eventsPerMonth", e.target.value)}>
            <option value="">Select a range…</option>
            {EVENTS_PER_MONTH.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Currently using a system?">
          <select required style={selectStyle} value={form.currentSystem} onChange={(e) => set("currentSystem", e.target.value)}>
            <option value="">Select one…</option>
            {CURRENT_SYSTEMS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="When are you looking to start?">
          <select required style={selectStyle} value={form.whenToStart} onChange={(e) => set("whenToStart", e.target.value)}>
            <option value="">Select one…</option>
            {WHEN_TO_START.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="How did you hear about us? (optional)">
          <select style={selectStyle} value={form.howHeard} onChange={(e) => set("howHeard", e.target.value)}>
            <option value="">Select one…</option>
            {HOW_HEARD.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Anything you'd like us to know? (optional)">
        <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Specific pain points, questions, or anything that would help us tailor the demo…" />
      </Field>

      <button
        type="submit"
        style={{
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
        Request my demo →
      </button>
      <p style={{ fontSize: 12.5, color: "#9aa8a1", textAlign: "center", margin: 0 }}>
        We&apos;ll follow up within one business day.
      </p>
    </form>
  );
}
