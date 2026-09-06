# Events Page - Implementation Specification
**CSE Technical Council | JSS University, Noida**
**Route:** `/events`

---

## 1. Tech Stack & File Structure

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS - light background (`#F8F9FB` / white), primary accent blue-violet (`#4F46E5` / `#6366F1`), dark headings (`#111827`)
- **Font:** Match existing site typography (Inter or equivalent sans-serif)
- **Key files:**
  - `app/events/page.jsx` - Events listing page
  - `app/events/[slug]/page.jsx` - Individual event detail page
  - `components/events/EventCard.jsx` - Reusable card component
  - `components/events/EventFilters.jsx` - Filter bar component
  - `data/events.js` - Centralized event data (structured records per PDF spec)

---

## 2. Design Language (from screenshots)

- **Background:** Light (`#F8F9FB`), not dark; white card surfaces with subtle borders or shadow
- **Navbar:** Minimal, white, sticky; logo left, nav links center, "Join Us" as filled blue-violet CTA button (right)
- **Typography:** Large bold dark headings; accent words in blue-violet (e.g. `#6366F1`); muted gray subtext
- **Cards:** White background, rounded corners (`rounded-2xl`), light border or soft shadow; icon badge top-left; large metric numbers in bold
- **Eyebrow labels:** Small uppercase pill/badge (e.g. `EVENTS & ACTIVITIES`) above the section heading - matches screenshot pattern
- **CTAs:** Filled blue-violet button (primary) + ghost/outline button (secondary)
- **Filter bar:** Pill-shaped toggle buttons, active state filled blue-violet, inactive state ghost with border

---

## 3. Page Sections - `/events`

### 3.1 Page Hero
- **Eyebrow badge:** `⚡ EVENTS & ACTIVITIES` (pill, uppercase, small)
- **Heading:** `Events That Build Builders` (dark, bold, large)
- **Accent word:** "Build" or "Builders" rendered in blue-violet (`#6366F1`)
- **Subtext:** `The CSE Technical Council organizes workshops, bootcamps, contests, research sessions, and innovation activities across its three technical cells.`
- **No background image** - use restrained geometric/grid CSS pattern or keep plain light background
- **Stats strip below hero** (4 stat cards matching screenshot layout):
  - `8+` Events Conducted
  - `500+` Cumulative Registrations
  - `3` Technical Cells
  - `2025–26` Academic Year
  - Each card: white background, rounded, icon badge (blue-violet tint), bold metric, muted label

### 3.2 Filter Bar
- Sticky below navbar on scroll (`sticky top-16 z-10 bg-white/80 backdrop-blur`)
- Filter pills (single-select):
  - `All` · `Workshops` · `Bootcamps` · `Competitions` · `Seminars` · `Research` · `Other`
- Active pill: filled blue-violet background, white text
- Inactive pill: white bg, border, dark text; hover state adds light blue-violet tint
- Second-level filter row (optional, collapsible on mobile): filter by **Cell** - `All Cells` · `AIC` · `CPC` · `RAC`
- State managed via `useState`; URL query params (`?filter=workshops&cell=cpc`) for shareability using `useSearchParams`

### 3.3 Event Cards Grid
- **Layout:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)
- **Each EventCard contains:**
  - **Image placeholder** - `aspect-video` container with `bg-gray-100` and centered placeholder icon (camera/image SVG); alt text attribute ready for real image; `Image` component from `next/image` with `fill` and `object-cover`
  - **Cell badge** - top-left overlay pill on image (e.g. `AIC`, `CPC`, `RAC`) in cell-specific accent color
  - **Category tag** - below image, small pill (e.g. `Workshop`, `Bootcamp`, `Competition`)
  - **Event name** - bold dark heading, 1–2 lines, `text-lg font-semibold`
  - **Date** - with calendar icon; show `Date to be updated` if not confirmed (per PDF editorial note)
  - **Venue/Format** - with location pin icon; `Online` or room number
  - **Short description** - 2-line clamp (`line-clamp-2`), muted gray text
  - **"View Event →"** link - blue-violet text link with arrow; full card is also clickable (`<Link>` wrapping card)
- **Card hover state:** subtle `shadow-md` lift + slight `translateY(-2px)` transition

### 3.4 No-Results State
- If filters produce no matches: centered message with icon - `No events found for this filter.` + `Reset Filters` button

---

## 4. Event Data Structure - `data/events.js`

Each event is a structured object matching the PDF content model:

```js
{
  id: "codegenesis-orientation-2025",
  slug: "codegenesis-orientation-2025",
  title: "CodeGenesis - Orientation Session",
  cell: "CPC",                          // "AIC" | "CPC" | "RAC" | "Joint"
  category: "Seminar",                  // filter tag
  date: "15 October 2025",             // null if unconfirmed
  dateConfirmed: true,
  venue: "AB4, Room 201",
  format: "In-person",
  shortDescription: "The inaugural CPC event introduced first-year students to DSA and competitive programming through a beginner-focused orientation.",
  fullDescription: "...",              // full copy from PDF Appendix A
  highlights: [
    "150+ registrations",
    "70+ in-person attendees",
    "Interactive quiz with prize distribution"
  ],
  stats: {
    registrations: "150+",
    attendees: "70+",
  },
  winners: [],                         // populated for DSA Contest
  image: null,                         // null = show placeholder; replace with "/images/events/slug.jpg" when available
  relatedEvents: ["dsa-bootcamp-2026", "dsa-contest-2026"],
  published: true,
}
```

**All 8 events from the PDF are pre-populated:**

| Slug | Cell | Date |
|---|---|---|
| `intro-to-rag-ai` | AIC | `null` (unconfirmed) |
| `promptcraft` | AIC | `null` (unconfirmed) |
| `agentx-ai-agent-2026` | AIC | 1 April 2026 |
| `codegenesis-orientation-2025` | CPC | 15 October 2025 |
| `dsa-bootcamp-2026` | CPC | 11, 18, 25 Feb 2026 |
| `dsa-contest-hackerrank-2026` | CPC | 25 February 2026 |
| `r2-series-chapter1-2025` | RAC | 29 October 2025 |
| `snapar-extended-reality-2025` | RAC/Joint | 12 November 2025 |
| `r2-cohort-orientation-2026` | RAC | 7 April 2026 |
| `r2-series-session3-2026` | RAC | 8 April 2026 |

---

## 5. Individual Event Detail Page - `/events/[slug]`

### 5.1 Static Generation
- Use `generateStaticParams()` from `data/events.js` slugs
- Use `generateMetadata()` for per-event SEO (`<title>`, `<meta description>`, `og:image`)

### 5.2 Event Hero Section
- **Full-width image placeholder** - `h-64 md:h-96` container, `bg-gray-100`, centered placeholder SVG; ready for `next/image` with `fill` + `object-cover`
- **Overlay gradient** (bottom): dark-to-transparent for text legibility
- **On top of image (or below on light bg):**
  - Cell badge + Category pill (same style as card)
  - Event title - large bold heading
  - Date with calendar icon / `Date to be updated` if null
  - Venue with pin icon
  - Organized by: cell full name

### 5.3 Event Info Bar
- Horizontal strip (or 2×2 grid on mobile) showing 4 key metadata items with icons:
  - 📅 Date
  - 📍 Venue
  - 🏛️ Organizing Cell
  - ⏱️ Duration (if available)

### 5.4 Event Overview
- Section heading: `About This Event`
- Full description paragraphs from `data/events.js` (`fullDescription` field)
- Copy sourced verbatim from PDF Appendix A, Section A.6

### 5.5 Event Highlights
- Section heading: `Highlights`
- Rendered as a 2–3 column grid of small cards (white bg, border, checkmark icon in blue-violet)
- Each card = one highlight string from the `highlights` array

### 5.6 Event Statistics
- Section heading: `By the Numbers`
- Metric cards (same visual style as homepage stats strip from screenshot):
  - Bold large number + unit + muted label
  - Only render this section if `stats` object has values
  - Label as `"Reported figures - Academic Year 2025–26"` (per PDF editorial guidance)

### 5.7 Winners / Outcomes
- Only rendered if `winners` array is non-empty (applies to DSA Contest)
- Section heading: `Contest Results`
- Podium-style cards: 🥇 Gold · 🥈 Silver · 🥉 Bronze with name and branch

### 5.8 Event Gallery
- Section heading: `Gallery`
- Grid of image placeholders (`aspect-square`, `bg-gray-100`, camera icon centered)
- Placeholder count: 6 slots (replace with real images via `images[]` array on the event object)
- Add comment: `{/* Replace with actual event photographs */}`

### 5.9 Related Events
- Section heading: `More Events`
- Horizontal scroll row of 2–3 EventCards (reuse `EventCard` component)
- Sourced from `relatedEvents` slug array on the event object

### 5.10 Back Navigation
- `← Back to Events` link at top of page (`text-sm text-muted`)

---

## 6. Component Breakdown

| Component | Props | Notes |
|---|---|---|
| `EventCard` | `event` object | Used on listing + related events row |
| `EventFilters` | `activeFilter`, `activeCell`, `onChange` | Pill buttons, controlled |
| `EventHero` | `event` | Hero image placeholder + metadata overlay |
| `EventStatStrip` | `stats` | Metric cards row |
| `EventHighlights` | `highlights[]` | Check-card grid |
| `EventWinners` | `winners[]` | Podium result cards |
| `EventGallery` | `images[]` | Placeholder grid; ready for real photos |
| `RelatedEvents` | `slugs[]` | Horizontal scroll row of EventCards |

---

## 7. Responsiveness

- **Mobile (`< 768px`):** Single column card grid; filter bar scrolls horizontally (no wrap); hero text stacked; stats in 2×2 grid; detail sections full-width stacked
- **Tablet (`768–1024px`):** 2-column card grid; filter bar wraps to 2 rows if needed
- **Desktop (`> 1024px`):** 3-column grid; sticky filter bar single row; detail page uses sidebar or full-width depending on layout choice
- No horizontal scroll on any viewport; text wraps naturally (per PDF accessibility requirements)

---

## 8. Accessibility

- All `<img>` / `<Image>` elements have `alt` text (descriptive for real images; `alt=""` for decorative placeholders)
- Filter buttons use `aria-pressed` for active state
- Card links wrap entire card with `aria-label="View [Event Name]"`
- Keyboard-navigable filter bar and cards
- Heading hierarchy: `h1` (page title) → `h2` (section headings) → `h3` (card titles)
- Color is not the sole differentiator for cell categories - text label always present alongside color badge

---

## 9. Content & Editorial Notes (from PDF)

- `intro-to-rag-ai` and `promptcraft`: set `date: null`; render as `Date to be updated` - do **not** invent dates
- All registration/attendance figures labeled `"Reported figures - Academic Year 2025–26 (pending institutional confirmation)"`
- WhatsApp CTA (if present anywhere on page): keep button inactive/disabled until official link is supplied
- Do not use stock photography or generated event images - placeholders only until official photos are provided
- CPC Faculty Coordinator field: render as `[To be confirmed]` placeholder - two conflicting name versions exist in source (`Mr. Vinoth P` / `Mr. Vinooth Prakash`)
- RAC Faculty Coordinator: `[Faculty Coordinator Name to be confirmed]`

---

## 10. SEO & Metadata

**Listing page (`/events`):**
```js
export const metadata = {
  title: "Events | CSE Technical Council - JSS University, Noida",
  description: "Explore workshops, bootcamps, coding contests, and research sessions organized by the CSE Technical Council at JSS University, Noida.",
};
```

**Detail pages (`/events/[slug]`):** Generated dynamically via `generateMetadata()` using event `title`, `shortDescription`, and `date`. Add `og:image` once real event photos are available.

---

## 11. Future-Proofing

- **Adding a new event:** Add one object to `data/events.js` - all pages (listing, filters, related events, static params) auto-update
- **Academic year grouping:** `data/events.js` includes an `academicYear` field (`"2025-26"`) on each event; filter bar can expose year selector when multiple years accumulate
- **Real images:** Replace `image: null` with `/images/events/slug.jpg`; `next/image` component already in place
- **Gallery photos:** Add slugs to `images: ["/images/events/slug/1.jpg", ...]` array; `EventGallery` component renders them automatically