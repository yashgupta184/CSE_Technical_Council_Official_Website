import { Suspense } from "react";
import type { Metadata } from "next";
import {
  FIGURES_DISCLAIMER,
  getEventStatsSummary,
  getPublishedEvents,
} from "@/data/events";
import { EventsListing } from "@/components/events/EventsListing";
import {
  EventStatStrip,
  type StatItem,
} from "@/components/events/EventStatStrip";
import {
  BoltIcon,
  CalendarIcon,
  LayersIcon,
  UsersIcon,
} from "@/components/events/icons";

export const metadata: Metadata = {
  title: "Events | CSE Technical Council - JSS University, Noida",
  description:
    "Explore workshops, bootcamps, coding contests, and research sessions organized by the CSE Technical Council at JSS University, Noida.",
};

export default function EventsPage() {
  const events = getPublishedEvents();
  const summary = getEventStatsSummary();

  const stats: StatItem[] = [
    {
      value: summary.eventCount,
      label: "Events Conducted",
      icon: <BoltIcon className="h-4 w-4" />,
    },
    {
      value: summary.registrations,
      label: "Cumulative Registrations",
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      value: summary.cellCount,
      label: "Technical Cells",
      icon: <LayersIcon className="h-4 w-4" />,
    },
    {
      value: summary.academicYear,
      label: "Academic Year",
      icon: <CalendarIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="bg-[#F8F9FB]">
      {/* Hero - restrained CSS grid pattern, no background imagery */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.035]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-semibold tracking-wider text-indigo-700 uppercase">
            <BoltIcon className="h-3.5 w-3.5" />
            Events &amp; Activities
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Events That Nurture <span className="text-indigo-500">Thinkers</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            The CSE Technical Council organizes workshops, bootcamps, contests,
            research sessions, and innovation activities across its three
            technical cells.
          </p>

          <EventStatStrip
            stats={stats}
            note={FIGURES_DISCLAIMER}
            className="mt-10"
          />
        </div>
      </section>

      {/* useSearchParams needs a Suspense boundary during prerender */}
      <Suspense
        fallback={<div className="mx-auto h-96 max-w-6xl px-4 py-10 sm:px-6" />}
      >
        <EventsListing events={events} />
      </Suspense>
    </div>
  );
}
