"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

interface Props {
  groups: FaqGroup[];
  defaultOpen?: string;
}

export default function FaqAccordion({ groups, defaultOpen = "g0-0" }: Props) {
  const [open, setOpen] = useState<string>(defaultOpen);
  const [activeGroup, setActiveGroup] = useState<string>(groups[0]?.title ?? "");
  const groupRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    groups.forEach((g) => {
      const el = groupRefs.current.get(g.title);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveGroup(g.title); },
        { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [groups]);

  return (
    <div className="faq-layout">

      {/* ── Left sticky nav ── */}
      <nav className="faq-sidenav" style={{ position: "sticky", top: 72 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#9aa8a1", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 18 }}>
          Contents
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {groups.map((g) => {
            const active = activeGroup === g.title;
            return (
              <a
                key={g.title}
                href={`#${toSlug(g.title)}`}
                onClick={(e) => {
                  e.preventDefault();
                  groupRefs.current.get(g.title)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#0f503c" : "#7c8a83",
                  padding: "8px 12px",
                  borderRadius: 8,
                  background: active ? "rgba(15,80,60,.07)" : "transparent",
                  textDecoration: "none",
                  borderLeft: `2px solid ${active ? "#0f503c" : "transparent"}`,
                  transition: "color .15s, background .15s, border-color .15s",
                  display: "block",
                }}
              >
                {g.title}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ── Right accordions ── */}
      <div>
        {groups.map((g, gi) => (
          <div
            key={g.title}
            id={toSlug(g.title)}
            ref={(el) => { if (el) groupRefs.current.set(g.title, el); }}
            style={{ marginBottom: 56, scrollMarginTop: 80 }}
          >
            <div
              style={{
                fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#161d1a",
                marginBottom: 18,
                paddingBottom: 14,
                borderBottom: "1px solid #eeece6",
              }}
            >
              {g.title}
            </div>
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
    </div>
  );
}
