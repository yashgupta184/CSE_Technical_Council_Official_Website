import { CELLS, type CouncilEvent } from "@/data/events";
import { BuildingIcon, CalendarIcon, ClockIcon, PinIcon } from "./icons";

/** Four key metadata items: 2x2 on mobile, single row from tablet up. */
export function EventInfoBar({ event }: { event: CouncilEvent }) {
  const cell = CELLS[event.cell];

  const items = [
    {
      label: "Date",
      value: event.date ?? "To be updated",
      icon: <CalendarIcon className="h-4 w-4" />,
      pending: !event.date,
    },
    {
      label: "Venue",
      value: event.venue ?? event.format ?? "To be updated",
      icon: <PinIcon className="h-4 w-4" />,
      pending: !event.venue && !event.format,
    },
    {
      label: "Organising Cell",
      value: cell.shortName,
      icon: <BuildingIcon className="h-4 w-4" />,
      pending: false,
    },
    {
      label: "Duration",
      value: event.duration ?? "To be updated",
      icon: <ClockIcon className="h-4 w-4" />,
      pending: !event.duration,
    },
  ];

  return (
    <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            {item.icon}
          </span>
          <div className="min-w-0">
            <dt className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              {item.label}
            </dt>
            <dd
              className={`text-sm font-semibold break-words ${
                item.pending ? "text-gray-400 italic" : "text-gray-900"
              }`}
            >
              {item.value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
