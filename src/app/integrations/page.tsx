import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Integrations | Clientlify",
  description: "Stop copying the same booking into five different tools. Connect Clientlify to Square, Google Calendar, Stripe, PayPal, and more.",
};

const LIVE: Integration[] = [
  {
    name: "Square",
    category: "Payments",
    icon: "/square.png",
    description:
      "Process deposits and final invoices directly in Clientlify. Clients pay by card and funds land in your Square account. No invoice chasing, no manual reconciliation.",
  },
  {
    name: "Google Calendar",
    category: "Scheduling",
    icon: "/google-calendar.png",
    description:
      "Confirmed bookings create calendar events automatically. Everyone on your team stays in sync without touching a calendar manually.",
  },
  {
    name: "PayPal",
    category: "Payments",
    icon: "/paypal.png",
    description:
      "Accept deposits and final payments via PayPal. Clients can pay from their PayPal balance or any linked card. No Square account required on their end.",
  },
  {
    name: "Stripe",
    category: "Payments",
    icon: "/stripe.png",
    description:
      "A full card-processing rail built on Stripe. Use it alongside Square or as your primary payment method, whichever fits your workflow.",
  },
];

const COMING_SOON: Integration[] = [
  {
    name: "Twilio",
    category: "SMS & Communications",
    icon: "/twilio.png",
    description:
      "Send automated booking confirmations, deposit reminders, and same-day event alerts by SMS. Keep clients in the loop without any manual follow-up.",
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    icon: "/quickbooks.png",
    description:
      "Push invoices, payments, and client records to QuickBooks automatically. Your books stay current without re-entering data from Clientlify.",
  },
  {
    name: "DocuSign",
    category: "E-Signatures",
    icon: "/docusign.png",
    description:
      "Send event contracts for e-signature directly from a lead or booking record. Track signing status in real time, no PDFs back and forth.",
  },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    icon: "/mailchimp.png",
    description:
      "Add booked clients to Mailchimp audiences automatically. Send follow-up campaigns, seasonal promotions, and rebooking offers without manual list exports.",
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: "/zapier.png",
    description:
      "Connect Clientlify to thousands of other apps. Trigger workflows from new leads, status changes, payments received, and more. No code required.",
  },
  {
    name: "Microsoft 365 / Outlook",
    category: "Email & Calendar",
    icon: "/microsoft365.webp",
    description:
      "Sync confirmed events to Outlook Calendar and send quote and invoice emails from your business email address. Works alongside or instead of Google Workspace.",
  },
  {
    name: "Xero",
    category: "Accounting",
    icon: "/xero.png",
    description:
      "Sync invoices and payments to Xero for automated bookkeeping. The right fit if your team already runs Xero as its accounting platform.",
  },
];

type Integration = {
  name: string;
  category: string;
  icon: string;
  description: string;
};

function LiveCard({ intg, i }: { intg: Integration; i: number }) {
  return (
    <div
      data-animate
      style={{ "--anim-delay": `${i * 80}ms` } as CSSProperties}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #eeece6",
          borderRadius: 18,
          padding: "26px 26px 24px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div
          style={{
            borderRadius: 14,
            background: "#fff",
            border: "1px solid #e5e3db",
            padding: 11,
            marginBottom: 20,
            flexShrink: 0,
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={intg.icon} alt={intg.name} width={40} height={40} style={{ objectFit: "contain", display: "block" }} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#161d1a",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {intg.name}
          </h3>
          <span
            style={{
              flexShrink: 0,
              fontSize: 11,
              fontWeight: 700,
              color: "#0b3d2e",
              background: "#ecf6c5",
              padding: "3px 10px",
              borderRadius: 20,
              marginTop: 3,
            }}
          >
            Live
          </span>
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "#0f503c",
            marginBottom: 12,
          }}
        >
          {intg.category}
        </div>

        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.65,
            color: "#566159",
            margin: 0,
            flex: 1,
          }}
        >
          {intg.description}
        </p>
      </div>
    </div>
  );
}

function ComingSoonCard({ intg, i }: { intg: Integration; i: number }) {
  return (
    <div
      data-animate
      style={{ "--anim-delay": `${i * 70}ms` } as CSSProperties}
    >
      <div
        style={{
          background: "#f9f8f4",
          border: "1px solid #e8e5dc",
          borderRadius: 18,
          padding: "26px 26px 24px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div
          style={{
            borderRadius: 14,
            background: "#fff",
            border: "1px solid #dbd8d0",
            padding: 11,
            marginBottom: 20,
            flexShrink: 0,
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={intg.icon} alt={intg.name} width={40} height={40} style={{ objectFit: "contain", opacity: 0.7, display: "block" }} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#2a312e",
              lineHeight: 1.2,
            }}
          >
            {intg.name}
          </div>
          <span
            style={{
              flexShrink: 0,
              fontSize: 11,
              fontWeight: 700,
              color: "#6b7771",
              background: "#e2dfd6",
              padding: "3px 10px",
              borderRadius: 20,
              marginTop: 3,
            }}
          >
            Coming soon
          </span>
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "#7c8a83",
            marginBottom: 12,
          }}
        >
          {intg.category}
        </div>

        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.65,
            color: "#6b7771",
            margin: 0,
            flex: 1,
          }}
        >
          {intg.description}
        </p>
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
        <section
          className="anim-page-hero"
          style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 54,
              lineHeight: 1.05,
              letterSpacing: "-.025em",
              margin: "0 0 20px",
              color: "#f7f5f2",
            }}
          >
            Stop copying the same booking into five different tools
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(247,245,242,.72)",
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            Clientlify connects to your payment processors, calendar, accounting software, and more, so your data moves with you instead of staying stuck in silos.
          </p>
        </section>
      </div>

      {/* Live integrations */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "88px var(--page-gutter) 72px" }}>
        <div data-animate style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              color: "#0f503c",
              marginBottom: 10,
            }}
          >
            Available now
          </div>
          <h2
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 34,
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              margin: "0 0 12px",
              color: "#161d1a",
            }}
          >
            Live integrations
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#566159", margin: 0, maxWidth: 520 }}>
            Connect these tools from your account settings in minutes. No dev work required.
          </p>
        </div>

        <div
          className="intg-live-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
        >
          {LIVE.map((intg, i) => (
            <LiveCard key={intg.name} intg={intg} i={i} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--page-gutter)" }}>
        <div style={{ height: 1, background: "#eeece6" }} />
      </div>

      {/* Coming soon */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "72px var(--page-gutter) 96px" }}>
        <div data-animate style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              color: "#7c8a83",
              marginBottom: 10,
            }}
          >
            On the roadmap
          </div>
          <h2
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 34,
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              margin: "0 0 12px",
              color: "#161d1a",
            }}
          >
            Coming soon
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#566159", margin: 0, maxWidth: 520 }}>
            These integrations are in development. Want to move one up the priority list?{" "}
            <a href="/contact" style={{ color: "#0f503c", fontWeight: 600 }}>
              Let us know.
            </a>
          </p>
        </div>

        <div
          className="intg-soon-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {COMING_SOON.map((intg, i) => (
            <ComingSoonCard key={intg.name} intg={intg} i={i} />
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready to connect your stack?"
        subtext="Get started with Clientlify and link your tools in the first five minutes."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
