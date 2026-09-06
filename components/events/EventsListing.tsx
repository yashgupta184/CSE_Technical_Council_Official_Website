"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CellId, CouncilEvent, EventCategory } from "@/data/events";
import {
  CATEGORY_FILTERS,
  CELL_FILTERS,
} from "@/data/events";
import { EventCard } from "./EventCard";
import {
  EventFilters,
  type CategoryFilter,
  type CellFilter,
} from "./EventFilters";
import { SearchOffIcon } from "./icons";

/**
 * Filter state lives in the URL (`?filter=workshop&cell=cpc`) so a filtered
 * view is shareable and survives a refresh.
 */
function parseCategory(raw: string | null): CategoryFilter {
  const match = CATEGORY_FILTERS.find(
    (option) => option.value.toLowerCase() === raw?.toLowerCase(),
  );
  return match ? (match.value as CategoryFilter) : "All";
}

function parseCell(raw: string | null): CellFilter {
  const match = CELL_FILTERS.find(
    (option) => option.value.toLowerCase() === raw?.toLowerCase(),
  );
  return match ? (match.value as CellFilter) : "All";
}

export function EventsListing({ events }: { events: CouncilEvent[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeFilter = parseCategory(searchParams.get("filter"));
  const activeCell = parseCell(searchParams.get("cell"));

  const applyFilters = useCallback(
    (next: { filter?: CategoryFilter; cell?: CellFilter }) => {
      const params = new URLSearchParams(searchParams.toString());
      const filter = next.filter ?? activeFilter;
      const cell = next.cell ?? activeCell;

      if (filter === "All") params.delete("filter");
      else params.set("filter", filter.toLowerCase());

      if (cell === "All") params.delete("cell");
      else params.set("cell", cell.toLowerCase());

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [activeCell, activeFilter, pathname, router, searchParams],
  );

  const visibleEvents = useMemo(
    () =>
      events.filter((event) => {
        const categoryMatch =
          activeFilter === "All" ||
          event.category === (activeFilter as EventCategory);
        // "Joint" events surface under every cell filter - they belong to all.
        const cellMatch =
          activeCell === "All" ||
          event.cell === (activeCell as CellId) ||
          event.cell === "Joint";
        return categoryMatch && cellMatch;
      }),
    [activeCell, activeFilter, events],
  );

  return (
    <>
      <EventFilters
        activeFilter={activeFilter}
        activeCell={activeCell}
        onChange={applyFilters}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="sr-only" aria-live="polite">
          {visibleEvents.length} event
          {visibleEvents.length === 1 ? "" : "s"} shown
        </p>

        {visibleEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
              <SearchOffIcon className="h-6 w-6" />
            </span>
            <p className="text-base font-medium text-gray-900">
              No events found for this filter.
            </p>
            <button
              type="button"
              onClick={() => applyFilters({ filter: "All", cell: "All" })}
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
