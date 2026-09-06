import { CheckIcon } from "./icons";

export function EventHighlights({ highlights }: { highlights: string[] }) {
  if (highlights.length === 0) return null;

  return (
    <section aria-labelledby="event-highlights">
      <h2
        id="event-highlights"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Highlights
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm leading-relaxed text-gray-700">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
