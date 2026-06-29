import BookADemoForm from "@/components/BookADemoForm";

export const metadata = {
  title: "Book a Demo — Clientlify",
  description: "See Clientlify live in 30 minutes. We'll walk through leads, quotes, deposits, and events tailored to your specific workflow.",
  openGraph: {
    title: "Book a Demo — Clientlify",
    description: "See Clientlify live in 30 minutes. Tailored to your specific event business workflow.",
  },
};

export default function BookADemoPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
        <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 1.07, letterSpacing: "-.025em", margin: "0 0 18px", color: "#f7f5f2" }}>
            See Clientlify in action — live, with your questions
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 600 }}>
            We'll walk through the full client lifecycle — leads, quotes, deposits, and events — and show you how it fits your specific workflow.
          </p>
        </section>
      </div>

      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>

          {/* Left — pitch */}
          <div data-animate style={{ position: "sticky", top: 100 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                  ),
                  title: "30 minutes",
                  body: "A focused walkthrough — no fluff, no hard sell.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                  title: "Tailored to your business",
                  body: "We'll focus on what matters for your specific operation — catering, rentals, or anything in between.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "No commitment required",
                  body: "Ask anything. Leave with a clear picture of whether Clientlify is the right fit.",
                },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: "#161d1a", marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#7c8a83" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <BookADemoForm />
        </div>
      </section>
    </main>
  );
}
