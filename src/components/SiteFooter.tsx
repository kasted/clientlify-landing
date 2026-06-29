import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid #eeece6", fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "54px var(--page-gutter) 40px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: 40,
        }}
        className="grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#0f503c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f7f5f2",
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              C
            </div>
            <span
              style={{
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#161d1a",
              }}
            >
              Clientlify
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "#7c8a83", margin: 0, maxWidth: 280 }}>
            The client lifecycle platform built for catering businesses.
          </p>
        </div>

        <FooterCol
          title="Product"
          links={[
            { href: "/features", label: "Features" },
            { href: "/use-cases", label: "Use Cases" },
            { href: "/how-it-works", label: "How it works" },
            { href: "/integrations", label: "Integrations" },
            { href: "/faq", label: "FAQ" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { href: "/about", label: "About" },
            { href: "/book-a-demo", label: "Book a Demo" },
            { href: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ]}
        />
      </div>

      <div style={{ borderTop: "1px solid #eeece6" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "20px var(--page-gutter)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#9aa8a1",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span>© 2026 Clientlify. All rights reserved.</span>
          <span>Made for caterers, with care.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: 13, color: "#161d1a", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "#7c8a83" }}>
        {links.map((l) => (
          <Link key={l.label} href={l.href} style={{ color: "inherit" }}>
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
