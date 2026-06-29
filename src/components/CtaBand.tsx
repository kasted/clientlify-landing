import Link from "next/link";

interface CtaBandProps {
  heading: string;
  subtext: string;
  btnLabel?: string;
}

export default function CtaBand({
  heading,
  subtext,
  btnLabel = "Book a Demo",
}: CtaBandProps) {
  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", padding: "40px var(--page-gutter) 84px" }}>
      <div
        data-animate
        style={{
          borderRadius: 24,
          padding: "88px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "#0b3d2e",
        }}
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/bottom-cta.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11, 61, 46, 0.50)",
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            style={{
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 38,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: "0 0 14px",
              color: "#f7f5f2",
            }}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(247,245,242,.85)", margin: "0 auto 28px", maxWidth: 500 }}>
            {subtext}
          </p>
          <Link
            href="/book-a-demo"
            style={{
              display: "inline-block",
              fontSize: 16,
              fontWeight: 700,
              color: "#0f503c",
              background: "#b4dc19",
              padding: "15px 32px",
              borderRadius: 12,
            }}
          >
            {btnLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
