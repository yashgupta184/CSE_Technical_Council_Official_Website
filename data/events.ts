/**
 * Centralised event data for the CSE Technical Council events pages.
 *
 * Adding a new event = add one object to `EVENTS`. The listing page, filter
 * counts, related-events rows and static params for `/events/[slug]` all derive
 * from this array.
 *
 * EDITORIAL RULES (do not break these):
 *  - Never invent a date. If a date is not officially confirmed, set
 *    `date: null` and `dateConfirmed: false` - the UI renders
 *    "Date to be updated".
 *  - Never point `image` / `images` at stock or generated artwork. Leave them
 *    null / empty until official photographs are supplied; the UI renders
 *    neutral placeholders.
 *  - Text wrapped in [square brackets] is an explicit placeholder awaiting
 *    confirmation from the source document / council.
 */

export type CellId = "AIC" | "CPC" | "DCT" | "RAC" | "Joint";

export type EventCategory =
  | "Workshop"
  | "Bootcamp"
  | "Competition"
  | "Seminar"
  | "Research"
  | "Other";

export interface EventWinner {
  position: 1 | 2 | 3;
  name: string;
  branch: string;
}

export interface EventStats {
  registrations?: string;
  attendees?: string;
  sessions?: string;
  problems?: string;
  duration?: string;
}

export interface CouncilEvent {
  id: string;
  slug: string;
  title: string;
  cell: CellId;
  category: EventCategory;
  /** Human-readable date string, or null when unconfirmed. */
  date: string | null;
  dateConfirmed: boolean;
  /** ISO date used only for ordering. null sorts last. */
  sortDate: string | null;
  venue: string | null;
  format: "In-person" | "Online" | "Hybrid" | null;
  duration: string | null;
  shortDescription: string;
  /** Long-form copy. null renders a "copy pending" placeholder block. */
  fullDescription: string | null;
  highlights: string[];
  stats: EventStats | null;
  winners: EventWinner[];
  /** null = render placeholder. Replace with "/images/events/<slug>.jpg". */
  image: string | null;
  /** Gallery photographs. Empty = render placeholder slots. */
  images: string[];
  relatedEvents: string[];
  academicYear: string;
  published: boolean;
}

/** Cell metadata - badge colours and full names live here, one place to edit. */
export const CELLS: Record<
  CellId,
  {
    id: CellId;
    shortName: string;
    fullName: string;
    /** Faculty coordinator. Bracketed value = awaiting confirmation. */
    facultyCoordinator: string;
    /** Tailwind classes for the badge. Colour is never the only signal - the
     *  short name is always rendered as text alongside it. */
    badgeClass: string;
  }
> = {
  AIC: {
    id: "AIC",
    shortName: "AIC",
    fullName: "AI Innovation Cell",
    facultyCoordinator: "Dr. Sur Singh Rawat",
    badgeClass: "bg-indigo-600 text-white",
  },
  CPC: {
    id: "CPC",
    shortName: "CPC",
    fullName: "Competitive Programming Cell",
    facultyCoordinator: "Mr. Vinooth Prakash",
    badgeClass: "bg-sky-600 text-white",
  },
  DCT: {
    id: "DCT",
    shortName: "DCT",
    fullName: "Design & Creativity Team",
    facultyCoordinator: "[To be confirmed]",
    badgeClass: "bg-amber-600 text-white",
  },
  RAC: {
    id: "RAC",
    shortName: "RAC",
    fullName: "Research Activity Cell",
    facultyCoordinator: "Ms. Attiuttama",
    badgeClass: "bg-violet-600 text-white",
  },
  Joint: {
    id: "Joint",
    shortName: "Joint",
    fullName: "Joint Cell Initiative",
    facultyCoordinator: "[To be confirmed]",
    badgeClass: "bg-slate-700 text-white",
  },
};

export const CATEGORY_FILTERS: { label: string; value: EventCategory | "All" }[] =
  [
    { label: "All", value: "All" },
    { label: "Workshops", value: "Workshop" },
    { label: "Bootcamp", value: "Bootcamp" },
    { label: "Competitions", value: "Competition" },
    { label: "Seminars", value: "Seminar" },
    { label: "Research", value: "Research" },
    { label: "Other", value: "Other" },
  ];

export const CELL_FILTERS: { label: string; value: CellId | "All" }[] = [
  { label: "All Cells", value: "All" },
  { label: "AIC", value: "AIC" },
  { label: "CPC", value: "CPC" },
  { label: "DCT", value: "DCT" },
  { label: "RAC", value: "RAC" },
];

/** Shown next to any reported registration / attendance figure. */
export const FIGURES_DISCLAIMER =
  "Reported figures - Academic Year 2025–26 (pending institutional confirmation)";

/**
 * Official WhatsApp community link is not yet supplied. Keep this null so the
 * CTA renders disabled; drop the URL in when it is available.
 */
export const WHATSAPP_INVITE_URL: string | null = null;

export const EVENTS: CouncilEvent[] = [
  {
    id: "intro-to-rag-ai",
    slug: "intro-to-rag-ai",
    title: "Introduction to RAG & AI",
    cell: "AIC",
    category: "Workshop",
    date: null,
    dateConfirmed: false,
    sortDate: null,
    venue: null,
    format: null,
    duration: null,
    shortDescription:
      "An AI Cell workshop introducing retrieval-augmented generation and the fundamentals of building with language models.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["promptcraft", "agentx-ai-agent-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "promptcraft",
    slug: "promptcraft",
    title: "PromptCraft",
    cell: "AIC",
    category: "Workshop",
    date: null,
    dateConfirmed: false,
    sortDate: null,
    venue: null,
    format: null,
    duration: null,
    shortDescription:
      "A hands-on AI Cell session on prompt design - structuring instructions, iterating on outputs, and evaluating results.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["intro-to-rag-ai", "agentx-ai-agent-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "agentx-ai-agent-2026",
    slug: "agentx-ai-agent-2026",
    title: "AgentX - AI Agent Build",
    cell: "AIC",
    // TODO: confirm whether AgentX is run as a competition or a workshop.
    category: "Competition",
    date: "1 April 2026",
    dateConfirmed: true,
    sortDate: "2026-04-01",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: null,
    shortDescription:
      "An AI Cell build event where teams design and ship a working AI agent end to end.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["intro-to-rag-ai", "promptcraft"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "codegenesis-orientation-2025",
    slug: "codegenesis-orientation-2025",
    title: "CodeGenesis - Orientation Session",
    cell: "CPC",
    category: "Seminar",
    date: "15 October 2025",
    dateConfirmed: true,
    sortDate: "2025-10-15",
    venue: "AB4, Room 201",
    format: "In-person",
    duration: null,
    shortDescription:
      "The inaugural CPC event introduced first-year students to DSA and competitive programming through a beginner-focused orientation.",
    fullDescription:
      "The inaugural CPC event introduced first-year students to data structures, algorithms and competitive programming through a beginner-focused orientation. The session walked through how contests are structured, which topics to start with, and how to build a consistent practice routine, and closed with an interactive quiz and prize distribution.",
    highlights: [
      "150+ registrations",
      "70+ in-person attendees",
      "Interactive quiz with prize distribution",
    ],
    stats: {
      registrations: "150+",
      attendees: "70+",
    },
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["dsa-bootcamp-2026", "dsa-contest-hackerrank-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "dsa-bootcamp-2026",
    slug: "dsa-bootcamp-2026",
    title: "DSA Bootcamp",
    cell: "CPC",
    category: "Bootcamp",
    date: "11, 18, 25 February 2026",
    dateConfirmed: true,
    sortDate: "2026-02-11",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: "3 sessions",
    shortDescription:
      "A three-session CPC bootcamp building up core data structures and algorithms with guided practice between sessions.",
    fullDescription: null,
    highlights: [],
    stats: {
      sessions: "3",
    },
    winners: [],
    image: null,
    images: [],
    relatedEvents: [
      "codegenesis-orientation-2025",
      "dsa-contest-hackerrank-2026",
    ],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "dsa-contest-hackerrank-2026",
    slug: "dsa-contest-hackerrank-2026",
    title: "DSA Contest on HackerRank",
    cell: "CPC",
    category: "Competition",
    date: "25 February 2026",
    dateConfirmed: true,
    sortDate: "2026-02-25",
    venue: "HackerRank",
    format: "Online",
    duration: null,
    shortDescription:
      "A timed CPC coding contest hosted on HackerRank, closing out the DSA Bootcamp series.",
    fullDescription: null,
    highlights: [],
    stats: null,
    // Podium placeholders - replace with the official result sheet.
    winners: [
      { position: 1, name: "[Winner name to be confirmed]", branch: "[Branch]" },
      {
        position: 2,
        name: "[Runner-up name to be confirmed]",
        branch: "[Branch]",
      },
      {
        position: 3,
        name: "[Third place name to be confirmed]",
        branch: "[Branch]",
      },
    ],
    image: null,
    images: [],
    relatedEvents: ["dsa-bootcamp-2026", "codegenesis-orientation-2025"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "r2-series-chapter1-2025",
    slug: "r2-series-chapter1-2025",
    title: "R² Series - Chapter 1",
    cell: "RAC",
    category: "Research",
    date: "29 October 2025",
    dateConfirmed: true,
    sortDate: "2025-10-29",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: null,
    shortDescription:
      "The opening chapter of the R² Series, RAC's recurring research-reading and discussion format.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["r2-series-session3-2026", "r2-cohort-orientation-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "snapar-extended-reality-2025",
    slug: "snapar-extended-reality-2025",
    title: "SnapAR - Extended Reality Session",
    cell: "Joint",
    category: "Workshop",
    date: "12 November 2025",
    dateConfirmed: true,
    sortDate: "2025-11-12",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: null,
    shortDescription:
      "A joint session on extended reality and AR authoring with SnapAR, run across the council's cells.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["r2-series-chapter1-2025", "r2-cohort-orientation-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "r2-cohort-orientation-2026",
    slug: "r2-cohort-orientation-2026",
    title: "R² Cohort Orientation",
    cell: "RAC",
    category: "Seminar",
    date: "7 April 2026",
    dateConfirmed: true,
    sortDate: "2026-04-07",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: null,
    shortDescription:
      "Orientation for the incoming R² cohort - how the series runs, what participation looks like, and what to read first.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["r2-series-chapter1-2025", "r2-series-session3-2026"],
    academicYear: "2025-26",
    published: true,
  },
  {
    id: "r2-series-session3-2026",
    slug: "r2-series-session3-2026",
    title: "R² Series - Session 3",
    cell: "RAC",
    category: "Research",
    date: "8 April 2026",
    dateConfirmed: true,
    sortDate: "2026-04-08",
    venue: "[Venue to be confirmed]",
    format: null,
    duration: null,
    shortDescription:
      "The third R² Series session, continuing RAC's paper-reading and research discussion track.",
    fullDescription: null,
    highlights: [],
    stats: null,
    winners: [],
    image: null,
    images: [],
    relatedEvents: ["r2-series-chapter1-2025", "r2-cohort-orientation-2026"],
    academicYear: "2025-26",
    published: true,
  },
];

/** Published events, newest confirmed date first, undated events last. */
export function getPublishedEvents(): CouncilEvent[] {
  return EVENTS.filter((event) => event.published).sort((a, b) => {
    if (a.sortDate && b.sortDate) return b.sortDate.localeCompare(a.sortDate);
    if (a.sortDate) return -1;
    if (b.sortDate) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getEventBySlug(slug: string): CouncilEvent | undefined {
  return EVENTS.find((event) => event.slug === slug && event.published);
}

export function getEventsBySlugs(slugs: string[]): CouncilEvent[] {
  return slugs
    .map((slug) => getEventBySlug(slug))
    .filter((event): event is CouncilEvent => Boolean(event));
}

/** Headline numbers for the hero stats strip. */
export function getEventStatsSummary() {
  const published = getPublishedEvents();
  const cells = new Set(
    published.filter((e) => e.cell !== "Joint").map((e) => e.cell),
  );

  return {
    eventCount: `${published.length}+`,
    // Cumulative registrations across all events - update as figures are
    // confirmed. Kept as a string so the "+" suffix is editorial, not computed.
    registrations: "500+",
    cellCount: `${cells.size}`,
    academicYear: "2025–26",
  };
}
