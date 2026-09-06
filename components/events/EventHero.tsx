import { CELLS, type CouncilEvent } from "@/data/events";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { BuildingIcon, CalendarIcon, ClockIcon, PinIcon } from "./icons";

/**
 * Detail-page hero. When a real photograph exists the metadata sits over a
 * bottom gradient; with an empty photo slot the metadata renders below it on
 * the light background so nothing overlays a placeholder.
 */
export function EventHero({ event }: { event: CouncilEvent }) {
  const cell = CELLS[event.cell];
  const hasImage = Boolean(event.image);

  const badges = (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${cell.badgeClass}`}
      >
        {cell.shortName}
      </span>
      <span
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase ${
          hasImage
            ? "bg-white/20 text-white ring-1 ring-white/40"
            : "bg-indigo-50 text-indigo-700"
        }`}
      >
        {event.category}
      </span>
    </div>
  );

  const heading = (
    <h1
      className={`mt-4 font-sans text-5xl leading-none font-black tracking-tight sm:text-7xl lg:text-8xl ${
        hasImage ? "text-white" : "text-gray-900"
      }`}
    >
      {event.title}
    </h1>
  );

  const meta = (
    <dl
      className={`mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${
        hasImage ? "text-white/90" : "text-gray-600"
      }`}
    >
      <div className="flex items-center gap-2">
        <dt className="sr-only">Date</dt>
        <CalendarIcon className="h-4 w-4 shrink-0 opacity-70" />
        <dd className={event.date ? "" : "italic"}>
          {event.date ?? "Date to be updated"}
        </dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="sr-only">Venue</dt>
        <PinIcon className="h-4 w-4 shrink-0 opacity-70" />
        <dd>{event.venue ?? event.format ?? "Venue to be updated"}</dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="sr-only">Organised by</dt>
        <BuildingIcon className="h-4 w-4 shrink-0 opacity-70" />
        <dd>Organised by {cell.fullName}</dd>
      </div>
      {event.duration ? (
        <div className="flex items-center gap-2">
          <dt className="sr-only">Duration</dt>
          <ClockIcon className="h-4 w-4 shrink-0 opacity-70" />
          <dd>{event.duration}</dd>
        </div>
      ) : null}
    </dl>
  );

  return (
    <header>
      <div className="relative">
        <MediaPlaceholder
          src={event.image}
          alt={`Photograph from ${event.title}`}
          className="h-64 rounded-2xl md:h-96"
          label="Event photo to be added"
          sizes="(min-width: 1024px) 960px, 100vw"
          priority
        />
        {hasImage ? (
          <>
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/80 via-gray-900/25 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              {badges}
              {heading}
              {meta}
            </div>
          </>
        ) : null}
      </div>

      {hasImage ? null : (
        <div className="pt-6">
          {badges}
          {heading}
          {meta}
        </div>
      )}
    </header>
  );
}
