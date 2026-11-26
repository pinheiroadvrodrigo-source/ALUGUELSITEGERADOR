# Orange County Custom Railing & Stairs — Design System

A modernized design system derived from the live marketing site of **Orange County Custom Railing & Stairs**,
a licensed metal-and-wood fabrication contractor in Anaheim, California (CSLB #951083, insured and bonded,
20+ years in business, phones open 24/7, shop at 2131 East Ball Road, Anaheim, CA 92806, 714-844-6088).

The business designs, fabricates **in house** and installs custom staircases and railing systems for
residential and commercial property across Orange County: powder-coated structural steel, wrought iron,
ANSI Z97.1 tempered safety glass, Type 316 stainless cable, aluminium, and architectural hardwood
(oak, walnut, maple). Its differentiators — repeated on every page — are local code fluency
(California Building Code Chapter 10, §1011, §1012, §1015; IBC Ch. 10; ADA §504/§505; Title 24),
end-to-end permitting with the Orange County Building and Safety Division, coastal-grade material
specification, and zero subcontracting.

## Sources used
Everything here was derived from the public website (crawled August 2026). No Figma file, codebase or
brand book was provided.

| Source | Used for |
| --- | --- |
| https://www.ocrailingstairs.com/ | Home template: hero, why-choose grid, railing + staircase service lists, materials row, 6-step process, pricing tables, testimonials, FAQ, CTA |
| https://www.ocrailingstairs.com/about | About template, company story, service area |
| https://www.ocrailingstairs.com/contact | Contact template |
| https://www.ocrailingstairs.com/floating-staircase-design-installation | Service-detail template |
| https://www.ocrailingstairs.com/irvine-ca | City + service landing template (stair repair) |
| /seal-beach-ca · /brea-ca · /villa-park-ca · /fullerton-ca · /costa-mesa-ca · /aliso-viejo-ca · /yorba-linda-ca · /lake-forest-ca | Same city template, different service and city facts — confirmed as one repeated layout |
| `assets/logo-oc-railing-stairs.webp` | The only brand asset the site publishes (raster only, no SVG) |
| `assets/materials/*`, `assets/projects/*` | Real material and project photography copied from the site's CDN |

**"Modernized" means:** the same information architecture, claims, and photography, rebuilt with a tighter
type scale, real spacing rhythm, restrained teal-on-ink palette, hairline-and-shadow card system, sticky
glass header, mono spec typography for codes and prices, and motion. It is not a redesign of the business's
message — every number, code reference and testimonial in this system is the client's own copy.

---

## CONTENT FUNDAMENTALS

**Voice: a fabricator explaining the work.** Confident, procedural, unglamorous. The site sells by
demonstrating expertise (code sections, material grades, thicknesses, tolerances) rather than by adjectives.

- **Person.** First-person plural throughout — "We fabricate…", "Our team handles…", "We handle permits."
  The customer is "you" / "your property". Never "I". Never "the client" in customer-facing copy.
- **Sentence shape.** Short declaratives, one idea each, usually 12–25 words. Paragraphs run 2–4 sentences.
  Long service explanations are broken into three-paragraph blocks under an H3.
- **Specificity is the brand.** Copy names the standard, dimension or material: "1/8-inch and 3/16-inch
  Type 316 stainless cable tightened to meet state maximum 4-inch spacing rules", "minimum 26-inch clear
  walking path, 9.5-inch maximum step height". When writing new copy, cite a real spec or write nothing.
- **Answer-first FAQ style.** Questions are phrased the way a customer searches ("Do you handle permits for
  railing and stair projects in Orange County?"); answers restate the question then resolve it
  ("Yes, we handle permits for railing and stair projects in Orange County. Our team manages…").
- **Local proof.** City and neighbourhood names carry the argument: Irvine's Woodbridge, Turtle Rock,
  Northwood; coastal Newport Beach, Laguna Beach, Huntington Beach; the Anaheim shop address.
- **Casing.** Sentence case for headings and body. UPPERCASE with wide tracking only for eyebrows, buttons,
  table headers, micro-labels and mono spec lines. Title Case is not used.
- **Buttons are verb-first and short:** "Talk to a professional", "Get a free quote", "Contact us",
  "Send message". No trailing punctuation, no "Learn more about our…".
- **Numbers.** Prices always as ranges with an en dash and a disclaimer ("$200 – $400 per linear foot",
  "Ranges are pre-consultation estimates, not quotes."). Durations as ranges of weeks. "20+ years."
- **Testimonials** are plain homeowner sentences with a first name, last name and city — no exclamation
  marks, no superlatives: "The new stairs feel safe and look modern without being too flashy."
- **No emoji. Ever.** No exclamation marks in body copy. No "revolutionary/stunning/game-changing"
  marketing inflation; the closest the brand goes is "premier materials" and "timeless elegance" on the
  materials row.
- **What to avoid:** invented project counts, review scores, awards, employee names, or years not in the
  source. The only defensible figures are 20+ years, license #951083, 24/7 hours, the published price
  ranges, the published timelines, and the city facts quoted on each city page.

---

## VISUAL FOUNDATIONS

### Colour
- **Brand teal `#42B69C` (`--teal-500`)**, sampled from the logo mark, is the only accent. It appears as
  primary button fills, eyebrow text, icon chips, hover underlines, checkmarks, focus rings and the footer
  phone number. Full 50→900 ramp in `tokens/colors.css`.
- **Ink `#0B0F0E` (`--ink-950`)** carries dark sections, the utility bar, the footer and CTA bands.
  The logo's own black is `#000000` (`--ink-1000`).
- **Neutrals are cool with a faint green cast** (`--ink-025` → `--ink-900`) so greys read as brushed
  metal rather than blue-grey web grey.
- **Warm hardwood/brass accents** (`--brass-100/200/400/500/700`) are secondary and stay under ~10% of a
  layout — hardwood badges, warm photo pairings, thumbnail swatches.
- Ratio in practice: ~70% white/subtle surfaces, ~20% ink, ~10% teal. Two background colours per page max
  (white + `--surface-subtle`), with ink used for punctuation sections.

### Type
- **Display + UI: Archivo** (300–700). Headings are semibold with negative tracking (−0.035em at hero,
  −0.02em at H3) and tight leading (0.96 at hero). Body is 16.5px/1.65 — long service copy needs the height.
- **Brand wordmark: Cinzel**, uppercase, 0.16em tracking — matched to the inscriptional serif in the logo.
  Used for the wordmark lockup only, never for paragraphs.
- **Spec type: JetBrains Mono**, 13px, 0.06em, tabular numerals, frequently uppercased — for code sections,
  dimensions, prices, step numbers and micro-meta. This is the system's signature detail.
- **Eyebrow:** 12px / 0.22em uppercase teal above nearly every heading.
- Measure is capped at 68ch for prose, 52ch for narrow columns; hero headlines break at ~18ch.

### Layout
- 1240px container, 24px gutter, 12-column mental grid, 20px card gaps.
- Section rhythm: 96px vertical padding (128px for hero/finale, 56px compact). Section pairs alternate
  white → `--surface-subtle` → white, with one ink section (materials) as the mid-page anchor.
- Service grids are 3-up desktop, 2-up ≤900px, 1-up ≤600px. Long-form pages run a sticky left column
  (heading + stats + CTA) against a scrolling right column (process steps, FAQ, tables).
- Fixed/sticky elements: the header only (74px, sticky at top:0, z-index 200) plus the 40px utility bar
  above it, and `position: sticky; top: 110px` sidebars on process/contact sections.

### Surfaces, borders, cards
- Cards: white, **1px `--border-hairline` (#E5E8E7)**, **10px radius**, 28px padding, no shadow at rest.
  Interactive cards lift `-2px` and take `--shadow-3` on hover; the border darkens one step.
- Shadows are cool, low-opacity, and multi-layered (`--shadow-1` … `--shadow-4`); `--shadow-brand` is a
  teal glow reserved for a hovered primary button. Hairline borders do most of the elevation work.
- **Radii stay crisp** — architectural metalwork, not consumer app: 2/4/6/8/10/12/16px, pills only for
  chips. Photography sits at 3px (`--radius-photo`).
- Inner shadows appear only as `--shadow-inset-hairline` (1px inset ring on swatches and specimen tiles).

### Photography & imagery
- Real material macro shots and project interiors, **cool and desaturated** (`filter: saturate(.92)`);
  the only warmth comes from hardwood subjects. No colour overlays, no duotones, no grain.
- Text over photography always rides a **dark scrim** — `--scrim-photo` (bottom-up gradient, 86% → 5%)
  for material cards, or a 90°/100° ink gradient for heroes. Never a flat 50% black box.
- Full-bleed photography is used for heroes and the closing CTA band (dimmed to 35–42%); material cards are
  contained 220–320px tall tiles that zoom 4% on hover.
- **No illustration and no hand-drawn SVG anywhere** — the brand has none. Empty visual slots get a labelled
  placeholder (see the Contact map block), not invented artwork.

### Transparency & blur
- Exactly one glass surface: the sticky header (`--surface-glass` = white at 72% + 14px backdrop blur).
- Ink sections use `rgba(255,255,255,.05–.10)` fills and `rgba(255,255,255,.14)` borders instead of
  lighter greys.

### Motion
- Everything interactive uses `--ease-out` `cubic-bezier(.2,.8,.25,1)`. No bounce, no spring, no
  slide-in-from-far, no scroll-jacking.
- Durations: 140ms for colour/border, 220ms for lift, shadow and accordion panels, 420ms for photo zoom.
- Hover: cards lift 2px + shadow; nav links grow a 2px teal underline from the left; photos scale 1.04;
  primary buttons lighten to `--teal-400` and gain the teal glow; icon chips flip from tint to solid teal.
- Press: `transform: scale(0.985)` on buttons and icon buttons. No colour change on press.
- Focus: 2px `--focus-ring` outline at 2px offset, or a 3px `--teal-100` ring on form fields.
- Accordions animate `grid-template-rows: 0fr → 1fr` — no max-height hacks.

---

## ICONOGRAPHY

The source site ships **no icon system at all** — its template renders decorative glyphs as images and uses
none consistently, and there is no icon font, sprite or SVG set to copy.

- **Substitution (flagged):** [Lucide](https://lucide.dev) 0.469.0, 24px grid, 2px stroke, round caps — the
  closest match to the site's thin-line utility look and a good fit for a precision-fabrication brand.
  45 glyphs are vendored into `assets/icons/*.svg`; nothing is loaded from a CDN at runtime.
- All icons render through the `Icon` component, which inlines the SVG so it inherits `currentColor` and
  stroke weight. **Never hand-draw an SVG, and never substitute an emoji or Unicode dingbat.**
  If a glyph is missing, drop the Lucide file into `assets/icons/` and reference it by name.
- Sizes: 13px inside badges and spec rows, 15–17px in list checks and trust bars, 18–22px in buttons and
  icon chips. Icon chips are 44px rounded-4px tiles, `--teal-100` fill with `--teal-800` glyph, flipping
  to solid teal on card hover.
- Semantic mapping used across the kit: `phone`/`mail`/`map-pin`/`clock` for contact, `shield-check`
  and `badge-check` for licensing, `award` for tenure, `hard-hat` and `hammer` for fabrication,
  `waves`/`droplets`/`sun` for coastal and exterior exposure, `square-stack` for glass,
  `ruler`/`pencil-ruler`/`scan-line` for design and measurement, `building-2` for commercial,
  `check` for spec bullets, `plus`/`minus` for the FAQ accordion, `arrow-right`/`arrow-up-right`
  for navigation.
- Social links in the footer reuse generic Lucide glyphs — **the brand's real social marks (Facebook,
  YouTube, Instagram, X, Pinterest) are not included**; supply licensed brand marks before shipping.
- Emoji: never. Unicode is used only for typographic characters — `§`, `·`, `–`, `"` inch marks.

### Logo
`assets/logo-oc-railing-stairs.webp` (435×80) is the only mark supplied: a teal stacked-stair glyph beside
"ORANGE COUNTY / CUSTOM RAILING AND STAIRS". There is **no vector master and no reversed version** — the dark
lockup in the footer and cards is this raster file inverted with a CSS filter. Nothing here was redrawn.
**Ask the client for an SVG (and a true reversed lockup).**

---

## Components

25 primitives, grouped by concern. Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`
and one `@dsCard` HTML sheet.

**`components/core/`** — `Icon`, `Button`, `IconButton`, `Badge`, `Eyebrow`, `Card`
**`components/forms/`** — `Input`, `Textarea`, `Select`, `Checkbox`, `EstimateForm`
**`components/navigation/`** — `UtilityBar`, `SiteHeader`, `Breadcrumbs`, `SiteFooter`
**`components/content/`** — `SectionHeading`, `ServiceCard`, `MaterialCard`, `ProcessStep`,
`PriceTable`, `TestimonialCard`, `Accordion`, `StatStrip`, `CTABanner`, `TrustBar`

Every family maps to a block that exists on the live site (hero estimate form, why-choose grid, service
grid, materials row, six-step process, two pricing tables, testimonial row, FAQ accordion, dark CTA band,
utility bar, sticky header, four-column footer).

### Intentional additions
- **`Icon`** — the source has no icon system; a wrapper was required so the vendored Lucide set is used
  consistently and tinted from tokens.
- **`Eyebrow`**, **`SectionHeading`**, **`TrustBar`**, **`StatStrip`** — the site repeats these
  patterns as ad-hoc markup; they are extracted so headings and proof rows stay consistent.
- **`Select`**, **`Checkbox`** — the live forms only use text inputs; these exist so quote flows can be
  extended without inventing a new visual language. Both follow the same field spec as `Input`.

## UI kit
`ui_kits/website/` — click-through recreation of the marketing site (`index.html`):
Home, City + service landing (Stair repair, Irvine), Floating staircase service detail, About, Contact.
Copy lives in `data.js`; see `ui_kits/website/README.md` for the screen-to-URL map and known gaps.
No slide template was provided, so no deck sample exists.

## Index / manifest
| Path | What it is |
| --- | --- |
| `styles.css` | Entry point — `@import` list only; link this one file |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `layout` |
| `base/` | `reset.css` (element defaults, link colours, selection) and `utilities.css` (container, section, eyebrow, grid, photo helpers) |
| `components/ocrs-components.css` | Class layer every component renders against |
| `components/<group>/` | Component source, types, prompts, card sheet |
| `guidelines/*.html` | 21 specimen cards — Colors, Type, Spacing, Brand |
| `ui_kits/website/` | Marketing-site recreation |
| `assets/logo-oc-railing-stairs.webp` | Brand mark (raster only) |
| `assets/materials/`, `assets/projects/` | Site photography (webp) |
| `assets/icons/` | 45 vendored Lucide SVGs |
| `thumbnail.html` | Project tile |
| `SKILL.md` | Agent-skill entry point |

## Substitutions and gaps — please confirm
1. **Fonts.** No font files exist on the source site; Cinzel / Archivo / JetBrains Mono are Google Fonts
   substitutions loaded via `tokens/fonts.css`. Send licensed brand fonts and they can be swapped for
   local `@font-face` rules in one file.
2. **Icons.** Lucide substitutes for a non-existent icon set.
3. **Logo.** Raster only; no vector, no reversed lockup, no favicon.
4. **Social marks.** Generic glyphs stand in for the real platform logos.
5. **Photography.** Six material shots and two project interiors are all the site publishes — a real project
   gallery would materially improve the kit.
