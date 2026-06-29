import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Use Cases | Clientlify",
  description: "See how Clientlify works for taco catering, party rentals, jumper rentals, and other event-based businesses.",
};

function FeatureCallout({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        background: "#ecf6c5",
        border: "1px solid #cae368",
        borderRadius: 14,
        padding: "18px 20px",
        marginTop: 28,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "#0f503c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#f7f5f2",
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14.5, color: "#0b3d2e", marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#3a443e" }}>{body}</div>
      </div>
    </div>
  );
}

export default function UseCasesPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 54, lineHeight: 1.05, letterSpacing: "-.025em", margin: "0 0 20px", color: "#f7f5f2" }}>
          Purpose-built for event service businesses
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 580 }}>
          Whether you're serving tacos, delivering tents, or dropping off bounce houses, Clientlify handles the client side so you can focus on the work.
        </p>
      </section>
      </div>

      {/* Taco Catering */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 16 }}>Taco Catering</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              Turn every taco inquiry into a booked event
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              From birthday parties to corporate lunches, taco caterers juggle custom orders, headcounts, and last-minute changes. Clientlify keeps every inquiry organized from first message to final plate.
            </p>
            <FeatureCallout
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 12h6M9 16h4" />
                </svg>
              }
              title="Custom Menus & Packages"
              body="Build reusable menu packages with protein options, side selections, and serving styles. Attach them to quotes so clients see exactly what they're getting, so you never over- or under-order."
            />
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 420, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
              <Image src="/use-1.jpg" alt="Taco catering setup" fill priority sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", right: -22, bottom: 32, width: 226, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ fontSize: 11, color: "#8b9790", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", marginBottom: 8 }}>Quote · Garcia Wedding</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12.5, color: "#566159" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Taco bar · 120 guests</span><span style={{ color: "#3a443e", fontWeight: 600 }}>$2,160</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>3 proteins, rice & beans</span><span style={{ color: "#3a443e", fontWeight: 600 }}>incl.</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Chips & salsa station</span><span style={{ color: "#3a443e", fontWeight: 600 }}>$280</span></div>
                <div style={{ height: 1, background: "#eeece6", margin: "2px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 700, color: "#161d1a" }}>Total</span>
                  <span style={{ fontWeight: 800, color: "#161d1a", fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif" }}>$2,440</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Rentals */}
      <section style={{ background: "#f7f5f2", borderTop: "1px solid #eeece6", borderBottom: "1px solid #eeece6" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
            <div data-animate style={{ position: "relative" } as CSSProperties}>
              <div style={{ position: "relative", height: 420, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
                <Image src="/use-2.jpg" alt="Party rental equipment" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pop-card" style={{ position: "absolute", left: -22, bottom: 32, width: 236, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
                <div style={{ fontSize: 11, color: "#8b9790", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", marginBottom: 10 }}>Saturday Route</div>
                {[
                  { stop: "1", name: "Riverside Park", time: "8:00 AM", status: "#0f503c" },
                  { stop: "2", name: "Oak Ave · Kim", time: "10:30 AM", status: "#c2693f" },
                  { stop: "3", name: "Sunset Blvd", time: "1:00 PM", status: "#6b7771" },
                ].map((r) => (
                  <div key={r.stop} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: r.status, color: "#f7f5f2", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{r.stop}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#161d1a" }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: "#9aa8a1" }}>{r.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-animate style={{ "--anim-delay": "120ms" } as CSSProperties}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 16 }}>Party Rentals</div>
              <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
                Manage equipment bookings without the chaos
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
                Tents, tables, chairs, linens: party rental businesses deal with high-volume bookings, tight delivery windows, and careful equipment coordination. Clientlify gives you one place to track every rental from quote to pickup.
              </p>
              <FeatureCallout
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                }
                title="Delivery & Setup Details"
                body="Capture delivery addresses, access instructions, and setup requirements on every booking. Your crew knows exactly what they're walking into before they leave the yard."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jumper Rental */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "64px var(--page-gutter) 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 16 }}>Jumper Rental</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 16px", color: "#161d1a" }}>
              Book more bounce houses, stress less
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              Inflatable rentals live and die by availability. Clientlify handles your inquiries, quotes, and deposits, so you can focus on making sure every unit shows up on time and in perfect shape.
            </p>
            <FeatureCallout
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-4 0v2M12 12v4M10 14h4" />
                </svg>
              }
              title="No Double-Bookings"
              body="Every confirmed booking holds its date in the pipeline. Review your schedule before accepting new requests so you never commit to a date that's already spoken for."
            />
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 420, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)" }}>
              <Image src="/use-3.jpg" alt="Bounce house rental" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", left: -22, top: 36, width: 230, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ fontSize: 11, color: "#8b9790", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", marginBottom: 10 }}>Fleet status · Jul 12</div>
              {[
                { name: "Castle Combo 18×18", status: "Booked", color: "#c2693f", bg: "#fdf0e8" },
                { name: "Slide Jumper 20ft", status: "Available", color: "#0b3d2e", bg: "#ecf6c5" },
                { name: "Princess Castle", status: "Maintenance", color: "#6b7771", bg: "#eeece6" },
              ].map((u) => (
                <div key={u.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "#3a443e", fontWeight: 500 }}>{u.name}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: u.color, background: u.bg, padding: "3px 8px", borderRadius: 20 }}>{u.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="See how Clientlify fits your business"
        subtext="Book a live demo and we'll walk through your specific workflow with you."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
