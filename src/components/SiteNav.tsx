import Link from "next/link";
import NavMobileMenu from "@/components/NavMobileMenu";

const mainLinks = [
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/integrations", label: "Integrations" },
  { href: "/faq", label: "FAQ" },
];

const allMobileLinks = [
  ...mainLinks,
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <header
      style={{
        background: "#0f503c",
        fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif",
      }}
    >
      <nav
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 var(--page-gutter)",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: logo + main links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "#b4dc19",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f503c",
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 800,
                fontSize: 17,
              }}
            >
              C
            </div>
            <span
              style={{
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "-0.01em",
                color: "#f7f5f2",
              }}
            >
              Clientlify
            </span>
          </Link>

          <div style={{ alignItems: "center", gap: 2 }} className="nav-desktop">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#f7f5f2",
                  padding: "6px 13px",
                  borderRadius: 8,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: contact + book a demo */}
        <div style={{ alignItems: "center", gap: 4 }} className="nav-desktop">
          <Link
            href="/contact"
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: "#f7f5f2",
              padding: "6px 13px",
              borderRadius: 8,
            }}
          >
            Contact
          </Link>
          <Link
            href="/book-a-demo"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#0f503c",
              background: "#b4dc19",
              padding: "10px 18px",
              borderRadius: 9,
              marginLeft: 8,
            }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu (client component) */}
        <NavMobileMenu links={allMobileLinks} />
      </nav>
    </header>
  );
}
