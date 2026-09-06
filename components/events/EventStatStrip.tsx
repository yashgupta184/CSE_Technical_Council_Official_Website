import type { ReactNode } from "react";

export type StatItem = {
  value: string;
  label: string;
  icon?: ReactNode;
};

type EventStatStripProps = {
  stats: StatItem[];
  /** Optional footnote, e.g. the reported-figures disclaimer. */
  note?: string;
  className?: string;
};

export function EventStatStrip({
  stats,
  note,
  className = "",
}: EventStatStripProps) {
  if (stats.length === 0) return null;

  return (
    <div className={className}>
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            {stat.icon ? (
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                {stat.icon}
              </span>
            ) : null}
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {stat.value}
            </dd>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </dl>
      {note ? <p className="mt-3 text-xs text-gray-500">{note}</p> : null}
    </div>
  );
}
