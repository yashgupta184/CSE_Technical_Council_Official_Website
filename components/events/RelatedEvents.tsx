import { getEventsBySlugs } from "@/data/events";
import { EventCard } from "./EventCard";

export function RelatedEvents({ slugs }: { slugs: string[] }) {
  const events = getEventsBySlugs(slugs).slice(0, 3);
  if (events.length === 0) return null;

  return (
    <section aria-labelledby="related-events">
      <h2
        id="related-events"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        More Events
      </h2>
      {/* Horizontal scroll row on mobile, grid from tablet up */}
      <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.slug}
            className="w-[280px] shrink-0 snap-start sm:w-auto sm:shrink"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
}
