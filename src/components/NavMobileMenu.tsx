"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export default function NavMobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const openMenu = () => {
    setOpen(true);
    setAnimKey((k) => k + 1);
  };
  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        onClick={open ? closeMenu : openMenu}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        className="nav-mobile-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <X size={22} color="#f7f5f2" className="nav-close-icon" />
        ) : (
          <Menu size={22} color="#f7f5f2" />
        )}
      </button>

      <div
        className={`nav-mobile-backdrop${open ? " is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`nav-mobile-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div key={animKey} className="nav-mobile-items">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="nav-mobile-item"
              style={{ "--item-i": i } as React.CSSProperties}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-a-demo"
            onClick={closeMenu}
            className="nav-mobile-cta"
            style={{ "--item-i": links.length } as React.CSSProperties}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </>
  );
}
