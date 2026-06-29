"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

interface Props {
  groups: FaqGroup[];
  defaultOpen?: string;
}

export default function FaqAccordion({ groups, defaultOpen = "g0-0" }: Props) {
  const [open, setOpen] = useState<string>(defaultOpen);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {groups.map((g, gi) => (
        <div
          key={g.title}
          className="faq-group"
          style={{ borderTop: "1px solid #eeece6", paddingTop: 48, paddingBottom: 48 }}
        >
          {/* Left: sticky title */}
          <div className="faq-group-title" style={{ position: "sticky", top: 72, alignSelf: "flex-start" }}>
            <span
              style={{
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#161d1a",
                lineHeight: 1.2,
              }}
            >
              {g.title}
            </span>
          </div>

          {/* Right: accordions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {g.items.map((item, ii) => {
              const id = `g${gi}-${ii}`;
              const isOpen = open === id;
              return (
                <div
                  key={id}
                  style={{ background: "#fff", border: "1px solid #e5e3db", borderRadius: 13, overflow: "hidden" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? "" : id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "19px 22px",
                      cursor: "pointer",
                      gap: 16,
                      width: "100%",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 16, color: "#161d1a" }}>{item.q}</span>
                    <span
                      style={{
                        display: "flex",
                        transition: "transform .2s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={18} color="#7c8a83" />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px", fontSize: 15, lineHeight: 1.6, color: "#566159" }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
