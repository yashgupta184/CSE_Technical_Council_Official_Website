import Link from "next/link";
import { CELLS, type CouncilEvent } from "@/data/events";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { ArrowRightIcon, CalendarIcon, PinIcon } from "./icons";

export function EventCard({ event }: { event: CouncilEvent }) {
  const cell = CELLS[event.cell];
  const venueLabel = event.venue ?? event.format ?? "Venue to be updated";

  return (
    <Link
      href={`/events/${event.slug}`}
      aria-label={`View ${event.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <div className="relative">
        <MediaPlaceholder
          src={event.image}
          alt={`Photograph from ${event.title}`}
          label="Event photo to be added"
        />
        <span
          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${cell.badgeClass}`}
        >
          {cell.shortName}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-indigo-700 uppercase">
          {event.category}
        </span>

        <h3 className="text-lg leading-snug font-semibold text-gray-900">
          {event.title}
        </h3>

        <dl className="flex flex-col gap-1.5 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Date</dt>
            <CalendarIcon className="h-4 w-4 shrink-0 text-gray-400" />
            <dd className={event.date ? "" : "text-gray-500 italic"}>
              {event.date ?? "Date to be updated"}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Venue</dt>
            <PinIcon className="h-4 w-4 shrink-0 text-gray-400" />
            <dd>{venueLabel}</dd>
          </div>
        </dl>

        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {event.shortDescription}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-indigo-600">
          View Event
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
