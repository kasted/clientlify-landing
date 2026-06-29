import Link from "next/link";
import FaqAccordion, { FaqGroup } from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "FAQ — Clientlify",
  description: "Everything about getting set up, running your pipeline, and getting paid.",
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Getting started",
    items: [
      { q: "How do I get started?", a: "Book a demo and we'll walk you through the platform live. Most event businesses are fully set up the same day — add your branding, drop the form on your site, and you're capturing leads." },
      { q: "How do leads get into Clientlify?", a: "Embed the customizable web form on your site and inquiries flow in automatically as New leads. You can also add leads manually for calls, referrals, or walk-ins — every field is yours to configure." },
      { q: "Can I import my existing leads?", a: "Yes. Bring over your current inquiries and clients, and they'll slot straight into the pipeline with their statuses intact. Support can walk you through it in about ten minutes." },
    ],
  },
  {
    title: "Pipeline & leads",
    items: [
      { q: "What are the pipeline stages?", a: "Every lead moves through New, Viewed, Quote Sent, and Approved. You always know where each one stands, and overdue follow-ups are flagged so nothing slips." },
      { q: "What happens to leads that don't convert?", a: "Archive them to keep your pipeline clean. Archived leads don't affect your stats or financials, and you can restore them any time a client comes back around." },
      { q: "Can I store notes and checklists?", a: "Each lead carries contact info, event details, menu selections, special requests, notes, checklists, and a linked client profile — all in one place." },
    ],
  },
  {
    title: "Payments & invoicing",
    items: [
      { q: "How does payment processing work?", a: "Clientlify integrates with Square to collect deposits and final invoice payments in-app. A paid deposit triggers a notification and can automatically convert an approved lead into a live event." },
      { q: "Can I send branded quotes?", a: "Yes. Build quotes from your menu selections and send them using email templates you control. Special-request line items are priced right on the quote." },
      { q: "What's the difference between projected and actual revenue?", a: "The projected view estimates pipeline value from your quotes. The actuals view reflects paid invoices. Add food, labor, and misc costs per event to see true margin, not just top-line revenue." },
    ],
  },
  {
    title: "Events & calendar",
    items: [
      { q: "What happens when a lead is approved?", a: "Once a deposit is collected, the lead becomes a full event with its own detail page — confirmed address, special-request line items, invoice management, and post-event review collection." },
      { q: "Does it sync with my calendar?", a: "Yes. A Google Calendar entry is created automatically the moment a booking is confirmed, so your schedule is always current." },
    ],
  },
  {
    title: "Billing",
    items: [
      { q: "Can I change plans later?", a: "Upgrade or downgrade whenever you like. Annual billing saves 20% over monthly, and changes take effect at your next cycle." },
    ],
  },
];

export default function FaqPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 52, lineHeight: 1.05, letterSpacing: "-.025em", margin: "0 0 18px", color: "#f7f5f2" }}>
          Questions, answered
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 520 }}>
          Everything about getting set up, running your pipeline, and getting paid. Still stuck? We're an email away.
        </p>
      </section>
      </div>

      {/* FAQ groups */}
      <section data-animate style={{ maxWidth: 820, margin: "0 auto", padding: "88px 32px 30px" }}>
        <FaqAccordion groups={FAQ_GROUPS} />
      </section>

      {/* Contact */}
      <section data-animate style={{ maxWidth: 1440, margin: "0 auto", padding: "30px var(--page-gutter) 84px" }}>
        <div
          style={{
            background: "#f7f5f2",
            border: "1px solid #eeece6",
            borderRadius: 24,
            padding: 44,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 32, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 14px", color: "#161d1a" }}>
              Still have a question?
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: "0 0 24px" }}>
              Our team has run event ops too. Reach out and a real person will get back to you — usually same day.
            </p>
            <div style={{ display: "flex", gap: 13, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ fontSize: 15, fontWeight: 600, color: "#f7f5f2", background: "#0f503c", padding: "13px 24px", borderRadius: 11 }}>
                Email support
              </Link>
              <Link href="/book-a-demo" style={{ fontSize: 15, fontWeight: 600, color: "#1a211e", background: "#fff", border: "1px solid #dbd8d0", padding: "13px 24px", borderRadius: 11 }}>
                Book a demo
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Response time", value: "Within one business day" },
              { label: "Email", value: "hello@clientlify.com" },
              { label: "Demo calls", value: "30 min, tailored to your workflow" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#fff", border: "1px solid #e5e3db", borderRadius: 12, padding: "14px 18px" }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#9aa8a1", textTransform: "uppercase", letterSpacing: ".03em", marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: "#3a443e" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Still have questions? Let's talk."
        subtext="Book a 30-minute demo and we'll answer everything — live, with your actual workflow in front of us."
      />
    </main>
  );
}
