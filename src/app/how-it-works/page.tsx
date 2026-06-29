import type { CSSProperties } from "react";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "How It Works | Clientlify",
  description: "Five steps take a lead all the way through. Clientlify handles the busywork between each one.",
};


export default function HowItWorksPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 54, lineHeight: 1.05, letterSpacing: "-.025em", margin: "0 0 20px", color: "#f7f5f2" }}>
          From first inquiry to final plate
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 600 }}>
          Five steps take a lead all the way through. Clientlify handles the busywork between each one so you can stay in the kitchen.
        </p>
      </section>
      </div>

      {/* Step 1 */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ width: 30, height: 30, borderRadius: 9, background: "#0f503c", color: "#f7f5f2", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c" }}>Inquiry lands</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              A new lead arrives, fully detailed
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              A client submits your web form, or you add them by hand. Contact info, event date, time, location, guest count, and special requests land in the pipeline as a New lead, and you get an instant alert.
            </p>
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
              <Image src="/how-1.jpg" alt="Capturing a new catering inquiry" fill priority sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", right: -22, bottom: 28, width: 230, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "15px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0f503c", display: "block" }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#7c8a83" }}>New lead · just now</span>
              </div>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, color: "#161d1a" }}>Henderson 50th</div>
              <div style={{ fontSize: 12, color: "#8b9790", marginTop: 1 }}>90 guests · Sep 06 · Lakeside</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section style={{ background: "#f7f5f2", borderTop: "1px solid #eeece6", borderBottom: "1px solid #eeece6" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px var(--page-gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
            <div data-animate style={{ position: "relative" } as CSSProperties}>
              <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
                <Image src="/how-2.jpg" alt="Menu and quote" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", right: -22, top: 34, width: 236, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "15px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 11 }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a" }}>Quote · Henderson 50th</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#c2693f", background: "#fdf0e8", padding: "3px 8px", borderRadius: 20 }}>Sent</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 12, color: "#566159" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span>Buffet · 90</span><span style={{ color: "#3a443e", fontWeight: 600 }}>$5,400</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span>Dessert station</span><span style={{ color: "#3a443e", fontWeight: 600 }}>$900</span></div>
                  <div style={{ height: 1, background: "#eeece6", margin: "1px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 700, color: "#161d1a" }}>Estimate</span>
                    <span style={{ fontWeight: 800, color: "#161d1a", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif" }}>$6,300</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate style={{ "--anim-delay": "120ms" } as CSSProperties}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ width: 30, height: 30, borderRadius: 9, background: "#0f503c", color: "#f7f5f2", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>2</span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c" }}>Quote sent</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
                Build and send a branded quote
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
                Review the lead, attach menu selections, and send a polished quote from a template you control. The lead advances to Quote Sent automatically, and overdue quotes get flagged for follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "64px var(--page-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ width: 30, height: 30, borderRadius: 9, background: "#0f503c", color: "#f7f5f2", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c" }}>Deposit paid</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              Collect a deposit, confirm the booking
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              The client pays the deposit through Square, right from the quote. That payment marks the lead Approved, triggers a notification, and is ready to become a full event, with no manual data entry.
            </p>
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
              <Image src="/how-3.jpg" alt="Deposit and booking" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", left: -22, bottom: 30, width: 226, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0b3d2e" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a" }}>Deposit received</span>
              </div>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 24, color: "#161d1a", letterSpacing: "-.02em" }}>$1,575</div>
              <div style={{ fontSize: 11.5, color: "#8b9790", marginTop: 2 }}>25% via Square · Henderson 50th</div>
              <div style={{ marginTop: 11, fontSize: 10.5, fontWeight: 700, color: "#0b3d2e", background: "#ecf6c5", padding: "5px 10px", borderRadius: 20, display: "inline-block" }}>Lead approved →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section style={{ background: "#f7f5f2", borderTop: "1px solid #eeece6", borderBottom: "1px solid #eeece6" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px var(--page-gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
            <div data-animate style={{ position: "relative" } as CSSProperties}>
              <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
                <Image src="/how-4.jpg" alt="Live event" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", right: -22, top: 32, width: 222, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: "15px 16px", boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 11 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a" }}>On your calendar</span>
                </div>
                <div style={{ display: "flex", gap: 11, alignItems: "center", background: "#f7f5f2", borderRadius: 10, padding: "11px 12px" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "#c2693f", fontWeight: 700, textTransform: "uppercase" }}>Sep</div>
                    <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 20, color: "#161d1a", lineHeight: 1 }}>06</div>
                  </div>
                  <div style={{ borderLeft: "2px solid #0f503c", paddingLeft: 10 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "#161d1a" }}>Henderson 50th</div>
                    <div style={{ fontSize: 11, color: "#8b9790" }}>1:00 PM · Lakeside</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate style={{ "--anim-delay": "120ms" } as CSSProperties}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ width: 30, height: 30, borderRadius: 9, background: "#0f503c", color: "#f7f5f2", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>4</span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c" }}>Event goes live</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
                The booking becomes a full event
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
                An event detail page is created with the confirmed address, special-request line items, and invoice management. A Google Calendar entry appears automatically, and you track food, labor, and misc costs as the date approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "64px var(--page-gutter) 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ width: 30, height: 30, borderRadius: 9, background: "#ecf6c5", color: "#0b3d2e", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>5</span>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c" }}>Follow up</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.12, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              Close the loop and collect reviews
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              After the event, a follow-up email goes out automatically to collect a review, using your template and review link. The event rolls into your actuals, so paid revenue and true margin update on the dashboard.
            </p>
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
              <Image src="/how-5.jpg" alt="Post-event follow-up" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", left: -22, top: 36, width: 236, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><path d="M3 7l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: "#161d1a" }}>Review request sent</span>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: "#566159", margin: "0 0 11px" }}>"Thank you for letting us be part of your celebration! We'd love your feedback."</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#0f503c", fontSize: 14, letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: 10.5, color: "#9aa8a1" }}>via email template</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Run your next booking start to finish"
        subtext="See the full workflow live with one of our team members."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
