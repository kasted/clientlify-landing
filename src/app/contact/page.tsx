import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Clientlify",
  description: "Have a question about Clientlify? Reach out and a real person will get back to you, usually the same day.",
  openGraph: {
    title: "Contact | Clientlify",
    description: "Have a question about Clientlify? Reach out and a real person will get back to you, usually the same day.",
  },
};

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
        <section className="anim-page-hero" style={{ maxWidth: 780, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 1.07, letterSpacing: "-.025em", margin: "0 0 18px", color: "#f7f5f2" }}>
            Get in touch
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(247,245,242,.72)", margin: "0 auto", maxWidth: 600 }}>
            Have a question about Clientlify? Want to report an issue or give feedback? We&apos;re a small team and we read every message.
          </p>
        </section>
      </div>

      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "88px var(--page-gutter) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>

          {/* Left: info */}
          <div data-animate style={{ position: "sticky", top: 100 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@clientlify.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                  ),
                  label: "Response time",
                  value: "Within one business day",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#ecf6c5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: "#9aa8a1", textTransform: "uppercase", letterSpacing: ".03em", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: "#3a443e" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, background: "#f7f5f2", border: "1px solid #e5e3db", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#161d1a", marginBottom: 6 }}>Looking to book a demo?</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#566159" }}>
                If you&apos;d like a live walkthrough of Clientlify,{" "}
                <a href="/book-a-demo" style={{ color: "#0f503c", fontWeight: 600 }}>use the demo booking form</a>
                {" "}instead. We&apos;ll set up a call around your schedule.
              </div>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
