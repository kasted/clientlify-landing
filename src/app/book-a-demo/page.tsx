import BookADemoForm from "@/components/BookADemoForm";

export const metadata = {
  title: "Book a Demo | Clientlify",
  description: "See Clientlify live in 30 minutes. We'll walk through leads, quotes, deposits, and events tailored to your specific workflow.",
  openGraph: {
    title: "Book a Demo | Clientlify",
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
            See Clientlify in action, live with your questions
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 600 }}>
            We'll walk through the full client lifecycle: leads, quotes, deposits, and events, and show you how it fits your specific workflow.
          </p>
        </section>
      </div>

      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter) 96px" }}>
        <div className="page-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>

          {/* Left: pitch */}
          <div data-animate className="page-sticky-col" style={{ position: "sticky", top: 100 }}>

            <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 28px", color: "#161d1a" }}>
              What to expect
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                  ),
                  title: "30 minutes, focused",
                  body: "We cover what matters for your business and nothing else. No slides, no sales deck.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                    </svg>
                  ),
                  title: "A live walkthrough",
                  body: "You'll see the actual product running: leads coming in, quotes going out, deposits collected, events on the calendar.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                  title: "Configured to your workflow",
                  body: "Tell us your business type when you book and we'll shape the demo around your specific workflow. If it's a fit, we set up your form fields, pipeline stages, and branding before you go live.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  ),
                  title: "Bring your questions",
                  body: "Pricing, integrations, migrating from your current setup: we'll cover whatever's on your mind.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "No commitment required",
                  body: "Leave with a clear answer on whether Clientlify fits. No pressure either way.",
                },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: "#161d1a", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#7c8a83" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, background: "#f7f5f2", border: "1px solid #e5e3db", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#161d1a", marginBottom: 6 }}>Prefer to reach out directly?</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#566159" }}>
                Email us at{" "}
                <a href="mailto:hello@clientlify.com" style={{ color: "#0f503c", fontWeight: 600 }}>hello@clientlify.com</a>
                {" "}and we'll get back to you within one business day.
              </div>
            </div>

          </div>

          {/* Right: form */}
          <BookADemoForm />
        </div>
      </section>
    </main>
  );
}
