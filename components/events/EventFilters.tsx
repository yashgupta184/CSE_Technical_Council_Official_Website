"use client";

import {
  CATEGORY_FILTERS,
  CELL_FILTERS,
  type CellId,
  type EventCategory,
} from "@/data/events";

export type CategoryFilter = EventCategory | "All";
export type CellFilter = CellId | "All";

type EventFiltersProps = {
  activeFilter: CategoryFilter;
  activeCell: CellFilter;
  onChange: (next: { filter?: CategoryFilter; cell?: CellFilter }) => void;
};

const pillBase =
  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
const pillActive = "border-indigo-600 bg-indigo-600 text-white";
const pillIdle =
  "border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700";

export function EventFilters({
  activeFilter,
  activeCell,
  onChange,
}: EventFiltersProps) {
  return (
    /* top-16 clears the sticky 4rem site header */
    <div className="sticky top-16 z-10 border-b border-gray-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
        {/* Category - horizontally scrollable on mobile, never wraps mid-row */}
        <div
          role="group"
          aria-label="Filter events by category"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0"
        >
          {CATEGORY_FILTERS.map(({ label, value }) => {
            const isActive = activeFilter === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange({ filter: value })}
                className={`${pillBase} ${isActive ? pillActive : pillIdle}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Cell - second-level filter */}
        <div
          role="group"
          aria-label="Filter events by technical cell"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0"
        >
          {CELL_FILTERS.map(({ label, value }) => {
            const isActive = activeCell === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange({ cell: value })}
                className={`${pillBase} !py-1.5 text-xs ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
