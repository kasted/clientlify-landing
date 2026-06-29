import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Features — Clientlify",
  description: "One dashboard for the entire client lifecycle — capture, quote, book, deliver, and follow up.",
};

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0b3d2e" strokeWidth="3">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ flexShrink: 0, width: 19, height: 19, borderRadius: "50%", background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
        <CheckIcon />
      </span>
      <span style={{ fontSize: 14.5, color: "#3a443e", lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 54, lineHeight: 1.05, letterSpacing: "-.025em", margin: "0 0 20px", color: "#f7f5f2" }}>
          Everything you need to run your event business, end to end
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 600 }}>
          One dashboard for the entire client lifecycle — capture, quote, book, deliver, and follow up — with the numbers that keep you profitable.
        </p>
      </section>
      </div>

      {/* 2-col feature grid */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "88px var(--page-gutter) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "52px 44px" }}>

          {/* ── Capture ── */}
          <div data-animate>
            <div style={{ position: "relative", marginBottom: 24 }}>
              <div style={{ position: "relative", height: 300, borderRadius: 18, overflow: "hidden", boxShadow: "0 22px 44px -22px rgba(20,40,32,.32)" }}>
                <Image src="/ft-1.jpg" alt="Event inquiry" fill priority sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", right: -10, top: 20, width: 208, background: "#fff", border: "1px solid #eeece6", borderRadius: 13, padding: 13, boxShadow: "0 18px 36px -18px rgba(20,40,32,.4)" } as CSSProperties}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#161d1a", marginBottom: 9 }}>New inquiry</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <div>
                    <div style={{ fontSize: 9, color: "#9aa8a1", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Name</div>
                    <div style={{ background: "#f7f5f2", border: "1px solid #eeece6", borderRadius: 7, padding: "5px 9px", fontSize: 11.5, color: "#3a443e" }}>Jordan Patel</div>
                  </div>
                  <div style={{ display: "flex", gap: 7 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 9, color: "#9aa8a1", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Date</div>
                      <div style={{ background: "#f7f5f2", border: "1px solid #eeece6", borderRadius: 7, padding: "5px 9px", fontSize: 11.5, color: "#3a443e" }}>Jul 09</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 9, color: "#9aa8a1", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Guests</div>
                      <div style={{ background: "#f7f5f2", border: "1px solid #eeece6", borderRadius: 7, padding: "5px 9px", fontSize: 11.5, color: "#3a443e" }}>40</div>
                    </div>
                  </div>
                  <div style={{ background: "#0f503c", color: "#f7f5f2", textAlign: "center", borderRadius: 7, padding: "7px 9px", fontSize: 11, fontWeight: 600, marginTop: 1 }}>Add to pipeline</div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#0f503c", marginBottom: 8 }}>Capture</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 26, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 11px", color: "#161d1a" }}>
              Turn every inquiry into a tracked lead
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#566159", margin: "0 0 14px" }}>
              Embed a customizable web form on your site and inquiries flow straight into your pipeline — contact info, event date, guest count, and special requests captured automatically. Or add walk-ins and phone leads by hand in seconds.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <Bullet text="Customizable fields and branding to match your business" />
              <Bullet text="Instant push and email alerts the moment a lead lands" />
            </div>
          </div>

          {/* ── Pipeline ── */}
          <div data-animate style={{ "--anim-delay": "100ms" } as CSSProperties}>
            <div style={{ position: "relative", marginBottom: 24 }}>
              <div style={{ position: "relative", height: 300, borderRadius: 18, overflow: "hidden", boxShadow: "0 22px 44px -22px rgba(20,40,32,.32)" }}>
                <Image src="/ft-2.jpg" alt="Feature 2" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", left: -10, bottom: 20, width: 214, background: "#fff", border: "1px solid #eeece6", borderRadius: 13, padding: 13, boxShadow: "0 18px 36px -18px rgba(20,40,32,.4)" } as CSSProperties}>
                {[
                  { name: "Tran corporate lunch", status: "Quote sent", color: "#c2693f", bg: "#fdf0e8" },
                  { name: "Alvarez wedding", status: "Approved", color: "#0b3d2e", bg: "#ecf6c5" },
                  { name: "Patel anniversary", status: "New", color: "#6b7771", bg: "#eeece6" },
                ].map((r, i) => (
                  <div key={r.name}>
                    {i > 0 && <div style={{ height: 1, background: "#eeece6", margin: "7px 0" }} />}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                      <span style={{ fontSize: 11.5, color: "#3a443e", fontWeight: 600 }}>{r.name}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: r.color, background: r.bg, padding: "2px 7px", borderRadius: 20, flexShrink: 0 }}>{r.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#0f503c", marginBottom: 8 }}>Pipeline</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 26, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 11px", color: "#161d1a" }}>
              Always know where every lead stands
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#566159", margin: "0 0 14px" }}>
              Every lead moves through New, Viewed, Quote Sent, and Approved. Drag between stages, spot leads overdue for follow-up, and archive the ones that don&apos;t convert — without touching your stats.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <Bullet text="Overdue-for-follow-up flags so nothing slips" />
              <Bullet text="Notes, checklists, and client profiles on every lead" />
            </div>
          </div>

          {/* ── Get paid ── */}
          <div data-animate>
            <div style={{ position: "relative", marginBottom: 24 }}>
              <div style={{ position: "relative", height: 300, borderRadius: 18, overflow: "hidden", boxShadow: "0 22px 44px -22px rgba(20,40,32,.32)" }}>
                <Image src="/ft-3.jpg" alt="Feature 3" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", right: -10, top: 20, width: 218, background: "#fff", border: "1px solid #eeece6", borderRadius: 13, padding: 13, boxShadow: "0 18px 36px -18px rgba(20,40,32,.4)" } as CSSProperties}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#161d1a" }}>Invoice #1042</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#0b3d2e", background: "#ecf6c5", padding: "2px 7px", borderRadius: 20 }}>Deposit paid</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11.5, color: "#566159" }}>
                  {[["Plated dinner · 120", "$6,600"], ["Bar service", "$1,200"], ["Staffing", "$600"]].map(([l, v]) => (
                    <div key={l} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>{l}</span>
                      <span style={{ color: "#3a443e", fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ height: 1, background: "#eeece6", margin: "1px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 700, color: "#161d1a" }}>Total</span>
                    <span style={{ fontWeight: 800, color: "#161d1a", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif" }}>$8,400</span>
                  </div>
                </div>
                <div style={{ background: "#0f503c", color: "#f7f5f2", textAlign: "center", borderRadius: 7, padding: "7px 9px", fontSize: 11, fontWeight: 600, marginTop: 9 }}>Pay with Square</div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#0f503c", marginBottom: 8 }}>Get paid</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 26, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 11px", color: "#161d1a" }}>
              Quotes, deposits, and invoices in one flow
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#566159", margin: "0 0 14px" }}>
              Send branded quotes built from your menu selections, collect deposits to confirm the booking, and process final invoices — all through built-in Square payments.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <Bullet text="Square integration for deposits and final payments" />
              <Bullet text="Special-request line items priced right on the quote" />
            </div>
          </div>

          {/* ── Events ── */}
          <div data-animate style={{ "--anim-delay": "100ms" } as CSSProperties}>
            <div style={{ position: "relative", marginBottom: 24 }}>
              <div style={{ position: "relative", height: 300, borderRadius: 18, overflow: "hidden", boxShadow: "0 22px 44px -22px rgba(20,40,32,.32)" }}>
                <Image src="/ft-4.jpg" alt="Feature 4" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", left: -10, bottom: 20, width: 204, background: "#fff", border: "1px solid #eeece6", borderRadius: 13, padding: 13, boxShadow: "0 18px 36px -18px rgba(20,40,32,.4)" } as CSSProperties}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "#161d1a" }}>Added to Google Calendar</span>
                </div>
                <div style={{ display: "flex", gap: 9, alignItems: "center", background: "#f7f5f2", borderRadius: 9, padding: "9px 10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 9, color: "#c2693f", fontWeight: 700, textTransform: "uppercase" }}>Aug</div>
                    <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 18, color: "#161d1a", lineHeight: 1 }}>14</div>
                  </div>
                  <div style={{ borderLeft: "2px solid #0f503c", paddingLeft: 9 }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a" }}>Alvarez wedding</div>
                    <div style={{ fontSize: 10, color: "#8b9790" }}>5:00 PM · Garden Pavilion</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#0f503c", marginBottom: 8 }}>Events</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 26, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 11px", color: "#161d1a" }}>
              Approved bookings become events — on your calendar
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#566159", margin: "0 0 14px" }}>
              Once a deposit lands, the lead becomes a full event with its own detail page: confirmed address, line items, invoice management, and post-event review collection. Google Calendar syncs on confirmation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <Bullet text="Automatic Google Calendar sync on confirmation" />
              <Bullet text="Post-event follow-up emails collect reviews automatically" />
            </div>
          </div>

          {/* ── Revenue — full-width featured row ── */}
          <div data-animate style={{ gridColumn: "1 / -1", background: "#f7f5f2", border: "1px solid #eeece6", borderRadius: 22, padding: "44px 48px" } as CSSProperties}>
            <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "0 56px", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 340, borderRadius: 16, overflow: "hidden", boxShadow: "0 22px 44px -22px rgba(20,40,32,.32)" }}>
                  <Image src="/ft-5.jpg" alt="Feature 5" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="pop-card" style={{ position: "absolute", left: -10, top: 28, width: 228, background: "#fff", border: "1px solid #eeece6", borderRadius: 13, padding: 13, boxShadow: "0 18px 36px -18px rgba(20,40,32,.4)" } as CSSProperties}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#161d1a" }}>Revenue</span>
                    <span style={{ fontSize: 9.5, color: "#9aa8a1" }}>6 mo</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 66, marginBottom: 9 }}>
                    {([[52, 60], [70, 58], [88, 80], [74, 92]] as [number, number][]).map(([a, p], i) => (
                      <div key={i} style={{ flex: 1, display: "flex", gap: 2, alignItems: "flex-end", height: "100%" }}>
                        <div style={{ flex: 1, background: "#0f503c", borderRadius: "3px 3px 0 0", height: `${a}%` }} />
                        <div style={{ flex: 1, background: "#dbd8d0", borderRadius: "3px 3px 0 0", height: `${p}%` }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {([ ["Paid", "$24.8k", "#161d1a"], ["Margin", "38%", "#0f503c"] ] as [string, string, string][]).map(([l, v, c]) => (
                      <div key={l} style={{ flex: 1, background: "#fff", borderRadius: 8, padding: "8px 10px", border: "1px solid #eeece6" }}>
                        <div style={{ fontSize: 9, color: "#8b9790", fontWeight: 600, textTransform: "uppercase" }}>{l}</div>
                        <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, color: c }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#0f503c", marginBottom: 8 }}>Revenue</div>
                <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 30, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 12px", color: "#161d1a" }}>
                  Projected vs. actual, with true margins
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#566159", margin: "0 0 16px" }}>
                  See pipeline value from quote estimates, then track what&apos;s actually been paid. Add food, labor, and miscellaneous costs to every event so you know your real margin — not just your top line. Revenue this month, conversion rate, and overdue follow-ups are always one glance away.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <Bullet text="Projected and actuals views, side by side" />
                  <Bullet text="Per-event cost tracking for food, labor, and misc" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaBand
        heading="See every feature in your own pipeline"
        subtext="30 minutes with your actual workflow — leads, quotes, deposits — and you'll know if it fits."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
