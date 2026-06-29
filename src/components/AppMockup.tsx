export default function AppMockup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: "1px solid #e6ebe8",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 30px 60px -28px rgba(20,40,32,.28), 0 8px 22px -14px rgba(20,40,32,.18)",
        fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderBottom: "1px solid #eeece6",
          background: "#f9f8f4",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#f0c4b8", "#f3ddb0", "#c8e066"].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block" }} />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: "#f2f0ea",
              border: "1px solid #e6ebe8",
              borderRadius: 8,
              padding: "5px 14px",
              fontSize: 12,
              color: "#7c8a83",
              maxWidth: 280,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9aa8a1" strokeWidth="2.2">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            app.clientlify.com
          </div>
        </div>
        <div style={{ width: 46 }} />
      </div>

      {/* App body */}
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 62,
            flexShrink: 0,
            background: "#f8f7f3",
            borderRight: "1px solid #eeece6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 0",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "#0f503c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f7f5f2",
              fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
              fontWeight: 800,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            C
          </div>
          {[
            <svg key="a" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0f503c" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>,
            <svg key="b" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa8a1" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg>,
            <svg key="c" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa8a1" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>,
            <svg key="d" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa8a1" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>,
          ].map((icon, i) => (
            <div
              key={i}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: i === 0 ? "#ecf6c5" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "18px 20px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 19, color: "#1a211e" }}>Dashboard</div>
              <div style={{ fontSize: 12, color: "#8b9790", marginTop: 2 }}>Thursday, June 26</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#0f503c", color: "#f7f5f2", padding: "8px 14px", borderRadius: 9, fontSize: 12.5, fontWeight: 600 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f7f5f2" strokeWidth="2.4"><path d="M12 5v14M5 12h14"/></svg>
              New lead
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, flexShrink: 0 }}>
            {[
              { label: "Active pipeline", value: "22", color: "#1a211e" },
              { label: "Paid this month", value: "$31.4k", color: "#1a211e" },
              { label: "Conversion", value: "46%", color: "#0f503c" },
              { label: "Overdue", value: "2", color: "#c2693f" },
            ].map((s) => (
              <div key={s.label} style={{ border: "1px solid #eeece6", borderRadius: 11, padding: "11px 13px", background: "#fff" }}>
                <div style={{ fontSize: 10, color: "#8b9790", fontWeight: 600, letterSpacing: ".02em", textTransform: "uppercase" }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 22, color: s.color, marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 12, flex: 1, minHeight: 0 }}>
            {/* Pipeline */}
            <div style={{ border: "1px solid #eeece6", borderRadius: 12, padding: "13px 14px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 11, flexShrink: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1a211e" }}>Lead pipeline</div>
                <div style={{ fontSize: 11, color: "#9aa8a1" }}>This week</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                {[
                  { initials: "AM", bg: "#ecf6c5", textColor: "#0b3d2e", name: "Alvarez wedding · 120 guests", sub: "Aug 14 · $8,400 quote", status: "Approved", sBg: "#ecf6c5", sColor: "#0b3d2e" },
                  { initials: "RT", bg: "#fdf0e8", textColor: "#c2693f", name: "Tran corporate lunch · 60", sub: "Jul 02 · quote sent", status: "Quote sent", sBg: "#fdf0e8", sColor: "#c2693f" },
                  { initials: "JP", bg: "#eeece6", textColor: "#6b7771", name: "Patel anniversary · 40", sub: "Jul 09 · new inquiry", status: "New", sBg: "#eeece6", sColor: "#6b7771" },
                  { initials: "SM", bg: "#ecf6c5", textColor: "#0b3d2e", name: "Singh memorial · 80 guests", sub: "Aug 02 · deposit pending", status: "Approved", sBg: "#ecf6c5", sColor: "#0b3d2e" },
                  { initials: "LK", bg: "#eeece6", textColor: "#6b7771", name: "Kim rehearsal dinner · 30", sub: "Jul 30 · new inquiry", status: "New", sBg: "#eeece6", sColor: "#6b7771" },
                  { initials: "CW", bg: "#fdf0e8", textColor: "#c2693f", name: "Walsh birthday gala · 70", sub: "Aug 21 · awaiting approval", status: "Quote sent", sBg: "#fdf0e8", sColor: "#c2693f" },
                ].map((r) => (
                  <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 7, background: r.bg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11, color: r.textColor }}>{r.initials}</div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#1a211e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</div>
                      <div style={{ fontSize: 10.5, color: "#8b9790" }}>{r.sub}</div>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: r.sColor, background: r.sBg, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap", flexShrink: 0 }}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Upcoming events */}
              <div style={{ border: "1px solid #eeece6", borderRadius: 12, padding: "13px 14px", flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1a211e", marginBottom: 11 }}>Upcoming events</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {[
                    { month: "Jul", day: "04", name: "Rooftop gala", time: "6:00 PM · Downtown", accent: true },
                    { month: "Jul", day: "12", name: "Henderson 50th", time: "1:00 PM · Lakeside", accent: false },
                    { month: "Jul", day: "19", name: "Summer market", time: "11:00 AM · Park Ave", accent: false },
                    { month: "Aug", day: "02", name: "Singh memorial", time: "5:00 PM · Heritage Hall", accent: false },
                    { month: "Aug", day: "14", name: "Alvarez wedding", time: "4:00 PM · Riverside", accent: false },
                  ].map((e) => (
                    <div key={e.name} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{ textAlign: "center", flexShrink: 0 }}>
                        <div style={{ fontSize: 9, color: "#c2693f", fontWeight: 700, textTransform: "uppercase" }}>{e.month}</div>
                        <div style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 15, color: "#1a211e", lineHeight: 1 }}>{e.day}</div>
                      </div>
                      <div style={{ borderLeft: `2px solid ${e.accent ? "#0f503c" : "#d8d5cc"}`, paddingLeft: 8 }}>
                        <div style={{ fontSize: 11.5, fontWeight: 600, color: "#1a211e" }}>{e.name}</div>
                        <div style={{ fontSize: 10, color: "#8b9790" }}>{e.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick stats */}
              <div style={{ border: "1px solid #eeece6", borderRadius: 12, padding: "13px 14px", flexShrink: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1a211e", marginBottom: 10 }}>Revenue · Jun</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 38 }}>
                  {[38, 55, 44, 72, 88, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: h > 65 ? "#0f503c" : "#dbd8d0", borderRadius: "3px 3px 0 0", height: `${h}%` }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 10, color: "#8b9790" }}>Projected $38k</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#0f503c" }}>Actual $31.4k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
