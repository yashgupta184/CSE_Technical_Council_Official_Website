import React from "react";
import Link from "next/link";
import { cellsData } from "@/data/team";

export function CellsHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
      {/* Subtle Ambient Dots & Glow */}
      <div className="bg-grid-pattern absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
            CSE TECHNICAL COUNCIL
          </span>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
            CELLS &amp; DOMAINS
          </span>
        </div>

        {/* Display Heading */}
        <h1 className="mt-8 font-sans text-5xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl leading-none dark:text-white">
          THREE PILLARS OF <br />
          TECHNICAL <span className="text-gradient-primary">EXCELLENCE.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          The CSE Technical Council operates through three specialized cells &mdash; each driving dedicated domains in product innovation, academic research, and algorithmic mastery.
        </p>

        {/* Interactive Quick Jump Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {cellsData.map((cell) => (
            <Link
              key={cell.id}
              href={`#${cell.id.toLowerCase()}`}
              className="inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/90 px-5 py-2.5 text-xs font-mono font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-blue-500"
            >
              <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-extrabold ${cell.color.bgBadge} ${cell.color.textBadge}`}>
                {cell.number}
              </span>
              <span>{cell.fullName}</span>
              <span className="text-slate-400">&darr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
