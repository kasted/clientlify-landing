import type { CSSProperties } from "react";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import aboutImg from "../../../public/about.png";

export const metadata = {
  title: "About | Clientlify",
  description: "Clientlify was built by Scott Mitchell, owner of Scott's Burgers, after a spreadsheet nearly broke his catering business.",
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 54, lineHeight: 1.05, letterSpacing: "-.025em", margin: "0 0 20px", color: "#f7f5f2" }}>
          Built by an operator, for operators
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 580 }}>
          Clientlify didn't start as a software idea. It started as a pile of spreadsheets, missed follow-ups, and the nagging feeling that running a great catering business shouldn't be this hard.
        </p>
      </section>
      </div>

      {/* Story */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div data-animate>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0f503c", marginBottom: 16 }}>The origin story</div>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 20px", color: "#161d1a" }}>
              Scott built the tool he wished he had
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#566159", margin: "0 0 18px" }}>
              Scott Mitchell has been running Scott's Burgers for years, a catering operation that handles everything from backyard cookouts to large corporate events. Like most owner-operators, he wore every hat: cook, salesperson, bookkeeper, and customer service rep all at once.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#566159", margin: "0 0 18px" }}>
              Leads came in through a contact form and landed in his email. Quotes lived in a Google Doc. Deposits were tracked in a spreadsheet. Follow-ups happened when he remembered to check. It worked, until it didn't.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#566159", margin: 0 }}>
              So he built Clientlify: a single place to capture leads, send quotes, collect deposits, manage events, and follow up, without switching between five different tools. He's been running Scott's Burgers on it ever since. Now it's available for every event-based business facing the same problem.
            </p>
          </div>
          <div data-animate style={{ "--anim-delay": "120ms", position: "relative" } as CSSProperties}>
            <div style={{ position: "relative", height: 460, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -32px rgba(20,40,32,.36)", background: "#eeece6" }}>
              <Image src={aboutImg} alt="Scott Mitchell of Scott's Burgers" fill priority placeholder="blur" sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pop-card" style={{ position: "absolute", left: -22, bottom: 32, width: 220, background: "#fff", border: "1px solid #eeece6", borderRadius: 14, padding: 16, boxShadow: "0 24px 50px -24px rgba(20,40,32,.42)" }}>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 15, color: "#161d1a", marginBottom: 3 }}>Scott Mitchell</div>
              <div style={{ fontSize: 12.5, color: "#8b9790" }}>Founder · Scott's Burgers</div>
              <div style={{ marginTop: 10, fontSize: 12, lineHeight: 1.5, color: "#566159", fontStyle: "italic" }}>
                "The spreadsheet broke on a Friday before a 200-person event. That Monday I started building this."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f7f5f2", borderTop: "1px solid #eeece6", borderBottom: "1px solid #eeece6" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "72px var(--page-gutter)" }}>
          <div data-animate style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 14px", color: "#161d1a" }}>
              What we stand for
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#566159", margin: 0 }}>
              Not a roadmap built by committee. Just a few simple beliefs about what software for small operators should be.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "Operators first",
                body: "Every feature is designed around the reality of running a small business. If it doesn't solve a problem Scott's Burgers actually had, it doesn't ship.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                ),
                title: "Simple by default",
                body: "You shouldn't need a training course to send a quote. Clientlify is designed to be obvious: fast to learn, faster to use.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Built on real use",
                body: "Scott's Burgers runs on Clientlify every day. That means bugs get fixed fast, and every update makes a real business run better.",
              },
            ].map((v, i) => (
              <div key={v.title} data-animate style={{ "--anim-delay": `${i * 80}ms`, background: "#fff", border: "1px solid #e5e3db", borderRadius: 16, padding: "28px 26px" } as CSSProperties}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 17, color: "#161d1a", margin: "0 0 10px" }}>{v.title}</h3>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "#566159" }}>{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="See the tool an operator built for operators"
        subtext="Book a demo and we'll walk through your specific workflow together, no sales deck required."
        btnLabel="Book a Demo"
      />
    </main>
  );
}
