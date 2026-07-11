import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import AppMockup from "@/components/AppMockup";

import CtaBand from "@/components/CtaBand";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Clientlify | Client Management for Event Businesses",
  description: "Run your whole event business without the spreadsheet chaos. Capture leads, send quotes, collect deposits, and manage events, all in one place, configured to your workflow.",
  openGraph: {
    title: "Clientlify | Client Management for Event Businesses",
    description: "Capture leads, send quotes, collect deposits, and manage events, all in one place, configured to your workflow.",
  },
  alternates: { canonical: "https://clientlify.com" },
};

const FEATURES = [
  {
    title: "Lead capture form",
    body: "Your intake form, built to your fields, not a generic template. Every inquiry becomes a tracked lead automatically, or add them by hand in seconds.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>,
  },
  {
    title: "Status pipeline",
    body: "Pipeline stages built around your process. A single glance tells you where every lead stands and what to do next.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M6 8.5v7"/><path d="M9 6h7a2 2 0 0 1 2 2v3"/><path d="M15 9l3-1 1 3"/></svg>,
  },
  {
    title: "Quotes & deposits",
    body: "Send branded quotes, collect deposits, and process final invoices with built-in Square payments.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>,
  },
  {
    title: "Events & calendar",
    body: "Approved bookings become full events with their own detail page, synced straight to Google Calendar.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 14l3 3 5-6"/></svg>,
  },
  {
    title: "Revenue tracking",
    body: "Projected vs. actuals, plus per-event food, labor, and misc cost tracking so you always know your margin.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>,
  },
  {
    title: "Automated follow-ups",
    body: "Post-event follow-up emails go out automatically after each event to collect reviews, with templates you control end to end.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><path d="M3 7l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>,
  },
];

const PIPELINE_STAGES = [
  {
    n: "1",
    title: "New lead",
    body: "Inquiry lands and a tracked lead is created automatically.",
    checks: ["Form submission captured", "Lead added to pipeline", "Instant email notification", "Ready to review & respond"],
  },
  {
    n: "2",
    title: "Quote sent",
    body: "Build and send a branded, itemized quote in minutes.",
    checks: ["Line-item quote builder", "Quote delivered to client", "Client views it online", "Follow-up reminder set"],
  },
  {
    n: "3",
    title: "Approved",
    body: "Client says yes and the deposit is collected on the spot.",
    checks: ["Client approves the quote", "Deposit invoice created", "Square payment processed", "Booking confirmed"],
  },
  {
    n: "★",
    title: "Event",
    body: "Booking goes live and your calendar updates automatically.",
    checks: ["Full event detail page", "Google Calendar synced", "Final invoice ready to send", "Post-event follow-up queued"],
  },
];



const REVENUE_BARS = [
  { label: "Jan", actual: 52, proj: 60 },
  { label: "Feb", actual: 64, proj: 58 },
  { label: "Mar", actual: 48, proj: 70 },
  { label: "Apr", actual: 78, proj: 72 },
  { label: "May", actual: 88, proj: 80 },
  { label: "Jun", actual: 70, proj: 92 },
];

export default function HomePage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* ── HERO ── */}
      <div className="hero-green-bg" style={{ background: "#0f503c" }}>
        <section className="hero-grid" style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="hero-text-col">
            <div className="anim-hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(180,220,25,.18)", color: "#b4dc19", padding: "7px 14px", borderRadius: 30, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#b4dc19", display: "block" }} />
              Built for event service businesses
            </div>
            <h1 className="anim-hero-heading" style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 52, lineHeight: 1.06, letterSpacing: "-.025em", margin: "0 0 22px", color: "#f7f5f2" }}>
              Run your whole event business without the spreadsheet chaos.
            </h1>
            <p className="anim-hero-body" style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(247,245,242,.72)", margin: "0 0 32px", maxWidth: 480 }}>
              Clientlify is set up around your workflow, not a generic template: your intake form, your pipeline stages, your business. Capture leads, send quotes, collect deposits, and book the event, from first inquiry to post-event follow-up, without duct-taping five tools together.
            </p>
            <div className="anim-hero-cta" style={{ display: "flex", gap: 13, flexWrap: "wrap" }}>
              <Link href="/book-a-demo" style={{ fontSize: 15.5, fontWeight: 600, color: "#0f503c", background: "#b4dc19", padding: "14px 26px", borderRadius: 11, boxShadow: "0 10px 28px -8px rgba(100,130,0,.35)" }}>
                Book a Demo
              </Link>
              <Link href="/how-it-works" style={{ fontSize: 15.5, fontWeight: 600, color: "#f7f5f2", background: "rgba(247,245,242,.1)", border: "1px solid rgba(247,245,242,.18)", padding: "14px 26px", borderRadius: 11 }}>
                See how it works
              </Link>
            </div>
          </div>

          <div className="hero-video-col anim-hero-collage" style={{ position: "relative" }}>
            <HeroVideo />
            {/* Left card */}
            <div className="hero-card-left" style={{ position: "absolute", left: -18, top: 36, width: 212, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "14px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0f503c", display: "block" }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#7c8a83" }}>New lead · just now</span>
              </div>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, color: "#161d1a" }}>Alvarez wedding</div>
              <div style={{ fontSize: 12, color: "#8b9790", marginTop: 1 }}>120 guests · Aug 14</div>
              <div style={{ marginTop: 11, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#161d1a" }}>$8,400</span>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0b3d2e", background: "#ecf6c5", padding: "3px 9px", borderRadius: 20 }}>Approved</span>
              </div>
            </div>
            {/* Right card */}
            <div className="hero-card-right" style={{ position: "absolute", right: -18, top: 96, width: 196, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "15px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.4)" }}>
              <div style={{ fontSize: 11, color: "#8b9790", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", marginBottom: 6 }}>Paid this month</div>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 26, color: "#161d1a", letterSpacing: "-.02em" }}>$24,800</div>
              <div style={{ marginTop: 10, display: "flex", alignItems: "flex-end", gap: 4, height: 34 }}>
                {[44, 62, 50, 82, 100].map((h, i) => (
                  <span key={i} style={{ flex: 1, background: h > 70 ? "#0f503c" : "#dbd8d0", borderRadius: "3px 3px 0 0", height: `${h}%`, display: "block" }} />
                ))}
              </div>
            </div>
            {/* Bottom card */}
            <div className="hero-card-bottom" style={{ position: "absolute", left: 40, bottom: -26, width: 260, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "14px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.4)" }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a", marginBottom: 11 }}>Lead pipeline</div>
              <div style={{ display: "flex", gap: 7 }}>
                {[{ n: 4, label: "New", color: "#6b7771" }, { n: 5, label: "Quoted", color: "#c2693f" }, { n: 6, label: "Approved", color: "#0b3d2e" }].map((s) => (
                  <div key={s.label} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 16, color: s.color }}>{s.n}</div>
                    <div style={{ fontSize: 9.5, color: "#9aa8a1", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── FEATURES + DASHBOARD ── */}
      <section id="features" style={{ maxWidth: 1440, margin: "0 auto", padding: "84px var(--page-gutter)" }}>
        <div data-animate style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 14 }}>Everything in the workflow</div>
          <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 40, lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
            See your whole operation at a glance
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "#566159", margin: 0 }}>
            From the moment an inquiry lands to the thank-you email after the last plate is cleared.
          </p>
        </div>

        <div className="features-layout">
          {/* Left cards */}
          <div className="features-side-left" style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "space-between" }}>
            {FEATURES.slice(0, 3).map((f, i) => (
              <div key={f.title} data-animate style={{ "--anim-delay": `${i * 80}ms`, background: "#fff", border: "1px solid #eeece6", borderRadius: 16, padding: "18px 20px", flex: 1 } as CSSProperties}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 13 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, margin: "0 0 7px", color: "#161d1a" }}>{f.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#566159", margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>

          {/* Centre: dashboard */}
          <div className="features-center" data-animate style={{ "--anim-delay": "120ms" } as CSSProperties}>
            <AppMockup />
          </div>

          {/* Right cards */}
          <div className="features-side-right" style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "space-between" }}>
            {FEATURES.slice(3, 6).map((f, i) => (
              <div key={f.title} data-animate style={{ "--anim-delay": `${i * 80}ms`, background: "#fff", border: "1px solid #eeece6", borderRadius: 16, padding: "18px 20px", flex: 1 } as CSSProperties}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 13 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, margin: "0 0 7px", color: "#161d1a" }}>{f.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#566159", margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (pipeline) ── */}
      <section id="how" style={{ background: "#f7f5f2", borderTop: "1px solid #eeece6", borderBottom: "1px solid #eeece6" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "84px var(--page-gutter)" }}>
          <div data-animate style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 52px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 14 }}>The pipeline</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 40, lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              Know exactly where every lead stands
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "#566159", margin: 0 }}>
              Every lead moves through stages built around your process, so nothing slips through the cracks and you always know what to do next.
            </p>
          </div>

          {/* Pipeline cards */}
          <div className="pipeline-row">
            {PIPELINE_STAGES.map((s, i) => (
              <div key={s.n} style={{ display: "contents" }}>
                <div
                  data-animate
                  style={{ "--anim-delay": `${[0, 200, 400, 800][i]}ms`, flex: 1, background: "#fff", border: "1px solid #e5e3db", borderRadius: 16, padding: "26px 24px", boxShadow: "0 8px 32px -12px rgba(20,40,32,.13)" } as CSSProperties}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ width: 30, height: 30, borderRadius: 9, background: "#0f503c", color: "#f7f5f2", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
                    <span style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 16.5, color: "#161d1a" }}>{s.title}</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: "#566159", margin: "0 0 18px" }}>{s.body}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {s.checks.map((c) => (
                      <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                        <span style={{ flexShrink: 0, width: 17, height: 17, borderRadius: "50%", background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0b3d2e" strokeWidth="3.5"><path d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span style={{ fontSize: 13, color: "#3a443e", lineHeight: 1.45 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {i < 3 && (
                  <div className="pipeline-arrow">
                    <svg width="38" height="22" viewBox="0 0 38 22" fill="none">
                      <path d="M2 11h30M25 4l9 7-9 7" stroke="#0f503c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE SECTION ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "90px var(--page-gutter)" }}>
        <div className="home-revenue-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 60, alignItems: "center" }}>
          <div data-animate>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 14 }}>Know your numbers</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 38, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 18px", color: "#161d1a" }}>
              Stop guessing your margins
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: "0 0 26px" }}>
              See pipeline value from your quotes, then track what's actually been paid. Break down food, labor, and misc costs on every event so you know your true margin, not just your top line.
            </p>
            {[
              [<><b style={{ color: "#161d1a", fontWeight: 700 }}>Square integration</b> processes deposits and final invoices in-app.</>, "Square integration"],
              [<><b style={{ color: "#161d1a", fontWeight: 700 }}>Per-event cost tracking</b> for food, labor, and miscellaneous line items.</>, "Per-event cost tracking"],
              [<><b style={{ color: "#161d1a", fontWeight: 700 }}>Google Calendar sync</b> creates the event automatically once a booking is confirmed.</>, "Google Calendar sync"],
            ].map(([text, key]) => (
              <div key={String(key)} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 15 }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0b3d2e" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: "#3a443e" }}>{text}</span>
              </div>
            ))}
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            {/* Photo */}
            <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.32)", aspectRatio: "1 / 1" }}>
              <video autoPlay muted loop playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                <source src="/home-numbers.mp4" type="video/mp4" />
              </video>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, borderRadius: "0 0 18px 18px", background: "linear-gradient(to top, rgba(10,30,18,.72) 0%, transparent 100%)" }} />
            </div>
            {/* Revenue chart card */}
            <div className="pop-card" style={{ position: "absolute", bottom: -22, right: -22, width: 255, background: "#fff", border: "1px solid #e5e3db", borderRadius: 15, padding: "16px 18px", boxShadow: "0 21px 45px -14px rgba(10,30,18,.48)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 13, color: "#161d1a" }}>Revenue</div>
                <div style={{ display: "flex", gap: 10, fontSize: 10 }}>
                  {[["#0f503c", "Actual"], ["#dbd8d0", "Projected"]].map(([c, l]) => (
                    <span key={l} style={{ display: "flex", alignItems: "center", gap: 5, color: "#8b9790" }}>
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: c, display: "block" }} />{l}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 9, height: 105, padding: "0 3px", borderBottom: "1px solid #eeece6" }}>
                {REVENUE_BARS.slice(3).map((b) => (
                  <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                    <div style={{ width: "100%", display: "flex", gap: 3, alignItems: "flex-end", height: "100%" }}>
                      <div style={{ flex: 1, background: "#0f503c", borderRadius: "4px 4px 0 0", height: `${b.actual}%` }} />
                      <div style={{ flex: 1, background: "#dbd8d0", borderRadius: "4px 4px 0 0", height: `${b.proj}%` }} />
                    </div>
                    <span style={{ fontSize: 9, color: "#9aa8a1", fontWeight: 600 }}>{b.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                {[["Paid YTD", "$148,200", "#161d1a"], ["Avg. margin", "38%", "#0f503c"]].map(([l, v, c]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 9, color: "#8b9790", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>{l}</div>
                    <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, color: c }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


<CtaBand
        heading="Spend less time on admin,<br>more time in the kitchen."
        subtext="We configure it around your workflow. Then you run leads, quotes, deposits, and events from one place."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
