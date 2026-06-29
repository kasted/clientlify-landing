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
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 32px 30px" }}>
        <FaqAccordion groups={FAQ_GROUPS} />
      </section>

<CtaBand
        heading="Still have questions? Let's talk."
        subtext="Book a 30-minute demo and we'll answer everything — live, with your actual workflow in front of us."
      />
    </main>
  );
}
