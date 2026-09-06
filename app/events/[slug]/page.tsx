import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CELLS,
  EVENTS,
  FIGURES_DISCLAIMER,
  getEventBySlug,
  type CouncilEvent,
} from "@/data/events";
import { EventHero } from "@/components/events/EventHero";
import { EventInfoBar } from "@/components/events/EventInfoBar";
import { EventHighlights } from "@/components/events/EventHighlights";
import { EventWinners } from "@/components/events/EventWinners";
import { EventGallery } from "@/components/events/EventGallery";
import { RelatedEvents } from "@/components/events/RelatedEvents";
import {
  EventStatStrip,
  type StatItem,
} from "@/components/events/EventStatStrip";
import { ArrowLeftIcon } from "@/components/events/icons";

export function generateStaticParams() {
  return EVENTS.filter((event) => event.published).map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event not found | CSE Technical Council" };

  const dateSuffix = event.date ? ` · ${event.date}` : "";

  return {
    title: `${event.title}${dateSuffix} | CSE Technical Council - JSS University, Noida`,
    description: event.shortDescription,
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      type: "article",
      // TODO: add `images` once official event photographs are available.
    },
  };
}

/** Only the metrics that actually carry a value get a card. */
function buildStats(event: CouncilEvent): StatItem[] {
  if (!event.stats) return [];

  const labels: Record<string, string> = {
    registrations: "Registrations",
    attendees: "Attendees",
    sessions: "Sessions",
    problems: "Problems",
    duration: "Duration",
  };

  return Object.entries(event.stats)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => ({
      value: value as string,
      label: labels[key] ?? key,
    }));
}

export default async function EventDetailPage({
  params,
}: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const cell = CELLS[event.cell];
  const stats = buildStats(event);

  return (
    <div className="bg-[#F8F9FB]">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-indigo-600"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="mt-6">
          <EventHero event={event} />
        </div>

        <div className="mt-8">
          <EventInfoBar event={event} />
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <section aria-labelledby="event-about">
            <h2
              id="event-about"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              About This Event
            </h2>
            {event.fullDescription ? (
              <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                {event.fullDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            ) : (
              /* Long-form copy pending - do not fill with generated text. */
              <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-white p-5">
                <p className="text-base leading-relaxed text-gray-600">
                  {event.shortDescription}
                </p>
                <p className="mt-3 text-sm text-gray-400 italic">
                  [Full event description to be added]
                </p>
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500">
              Organised by {cell.fullName} · Faculty Coordinator:{" "}
              {cell.facultyCoordinator}
            </p>
          </section>

          <EventHighlights highlights={event.highlights} />

          {stats.length > 0 ? (
            <section aria-labelledby="event-stats">
              <h2
                id="event-stats"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                By the Numbers
              </h2>
              <EventStatStrip
                stats={stats}
                note={FIGURES_DISCLAIMER}
                className="mt-5"
              />
            </section>
          ) : null}

          <EventWinners winners={event.winners} />

          <EventGallery images={event.images} eventTitle={event.title} />

          <RelatedEvents slugs={event.relatedEvents} />
        </div>
      </article>
    </div>
  );
}
