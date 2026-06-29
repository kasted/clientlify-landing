# Clientlify marketing site — Claude Code handoff

High-fidelity HTML **design references** for the Clientlify marketing site (catering business-management SaaS). These are single-file prototypes showing intended look + behavior — **not production code to copy**. Recreate them in your codebase's framework (or scaffold Next.js + React + TS + Tailwind if none exists).

## Start here
1. Open **`claude-code-prompt.md`** and paste it into Claude Code.
2. Point Claude Code at this folder so it can read the design files below.

## Files
- `Clientlify Landing v2.dc.html` — home / landing page
- `Features.dc.html` — features page (5 alternating rows)
- `HowItWorks.dc.html` — 5-step pipeline walkthrough
- `Pricing.dc.html` — tiers + monthly/annual toggle + comparison table
- `FAQ.dc.html` — categorized accordion + contact
- `SiteNav.dc.html` — shared top nav (active-state per page)
- `SiteFooter.dc.html` — shared footer
- `AppMockup.dc.html` — dashboard product mockup (used on landing)
- `image-slot.js` — the drag-and-drop photo-placeholder web component used by the prototypes

## How to view a reference
Open any `.dc.html` in a browser. They render standalone. Photo areas are **fillable placeholders** — keep them as image slots / CMS fields; don't generate imagery.

## Signature motif
Every hero/feature pairs a **photo** with small **white dashboard "widget" cards floated over its edges** (new-lead, revenue chart, pipeline summary, invoice, calendar, review). Rebuild these as real components — see `claude-code-prompt.md` for the full token + per-page spec.

## Fidelity
**Hi-fi.** Colors, type, spacing, and interactions are final — match them closely. Primary accent is Evergreen `#15795f`; full palette and type scale are in the prompt.
