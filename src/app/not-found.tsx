import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Clientlify",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>
      <div style={{ background: "#0f503c" }}>
        <section className="anim-page-hero" style={{ maxWidth: 720, margin: "0 auto", padding: "140px 32px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-.03em",
              color: "#b4dc19",
              marginBottom: 8,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 44,
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              margin: "0 0 18px",
              color: "#f7f5f2",
            }}
          >
            This page never made it to the pipeline.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(247,245,242,.72)", margin: "0 auto 32px", maxWidth: 480 }}>
            The link&apos;s broken or the page&apos;s moved. Let&apos;s get you back on track.
          </p>
          <div style={{ display: "flex", gap: 13, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/"
              style={{ fontSize: 15.5, fontWeight: 600, color: "#0f503c", background: "#b4dc19", padding: "14px 26px", borderRadius: 11, boxShadow: "0 10px 28px -8px rgba(100,130,0,.35)" }}
            >
              Back to homepage
            </Link>
            <Link
              href="/contact"
              style={{ fontSize: 15.5, fontWeight: 600, color: "#f7f5f2", background: "rgba(247,245,242,.1)", border: "1px solid rgba(247,245,242,.18)", padding: "14px 26px", borderRadius: 11 }}
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
