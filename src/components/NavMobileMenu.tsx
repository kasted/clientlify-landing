"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export default function NavMobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        className="nav-mobile-btn"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} color="#f7f5f2" /> : <Menu size={22} color="#f7f5f2" />}
      </button>

      {open && (
        <div
          style={{
            background: "#0b3d2e",
            padding: "20px 32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          className="nav-mobile-menu"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 0",
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(247,245,242,.75)",
                borderBottom: "1px solid rgba(247,245,242,.1)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-a-demo"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              display: "block",
              textAlign: "center",
              background: "#b4dc19",
              color: "#0f503c",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </>
  );
}
