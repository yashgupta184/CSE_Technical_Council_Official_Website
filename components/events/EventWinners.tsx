import type { EventWinner } from "@/data/events";

/** Position label kept as text so colour/emoji is never the only signal. */
const PODIUM: Record<EventWinner["position"], { label: string; ring: string }> = {
  1: { label: "1st Place", ring: "border-amber-300 bg-amber-50" },
  2: { label: "2nd Place", ring: "border-gray-300 bg-gray-50" },
  3: { label: "3rd Place", ring: "border-orange-200 bg-orange-50" },
};

export function EventWinners({ winners }: { winners: EventWinner[] }) {
  if (winners.length === 0) return null;

  const ordered = [...winners].sort((a, b) => a.position - b.position);

  return (
    <section aria-labelledby="event-winners">
      <h2
        id="event-winners"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Contest Results
      </h2>
      <ol className="mt-5 grid gap-4 sm:grid-cols-3">
        {ordered.map((winner) => {
          const podium = PODIUM[winner.position];
          return (
            <li
              key={winner.position}
              className={`rounded-2xl border p-5 ${podium.ring}`}
            >
              <p className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {podium.label}
              </p>
              <p className="mt-2 text-base font-semibold text-gray-900">
                {winner.name}
              </p>
              <p className="mt-0.5 text-sm text-gray-600">{winner.branch}</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-gray-500">
        Result names are placeholders pending the official result sheet.
      </p>
    </section>
  );
}
