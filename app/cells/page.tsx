import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  cellsData,
  studentCoordinators,
  facultyCoordinators,
  completeTeamMembers,
} from "@/data/team";
import { CellsHero } from "@/components/cells/CellsHero";
import { CellSection } from "@/components/cells/CellSection";
import { TerminalIcon, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Cells & Domains | CSE Technical Council - JSS University, Noida",
  description:
    "Explore the four specialized wings of CSE Technical Council: AI Innovation Cell (AIC), Competitive Programming Cell (CPC), Design & Creativity Team (DCT), and Research Activity Cell (RAC) — their visions, student leadership, and teams.",
};

export default function CellsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white dark:bg-[#090d16] dark:text-slate-100">
      <main className="flex-1">
        {/* Page Hero Header */}
        <CellsHero />

        {/* 4 Dedicated Cell Sections in Alphabetical Order */}
        {cellsData.map((cell, index) => {
          const studentCoordinator = studentCoordinators.find(
            (sc) => sc.cell === cell.id
          );
          const facultyCoordinator = facultyCoordinators.find(
            (fc) => fc.cell === cell.id
          );
          const teamMembers = completeTeamMembers.filter(
            (m) => m.cell === cell.id
          );

          return (
            <CellSection
              key={cell.id}
              cell={cell}
              studentCoordinator={studentCoordinator}
              facultyCoordinator={facultyCoordinator}
              teamMembers={teamMembers}
              isAlternate={index % 2 === 1}
            />
          );
        })}

        {/* Closing CTA */}
        <section className="relative overflow-hidden py-24 bg-white dark:bg-[#090d16] border-t border-slate-200/80 dark:border-slate-800">
          <div className="bg-dot-pattern absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-xs font-bold text-blue-700 shadow-xs dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-400">
              <TerminalIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              JOIN A CELL
            </div>

            <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              FIND YOUR DOMAIN. <br />
              <span className="text-gradient-primary">BUILD YOUR FUTURE.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Whether you want to build cutting-edge AI systems in AIC, dominate contest leaderboards in CPC, craft world-class UI/UX in DCT, or publish groundbreaking research papers in RAC &mdash; there is a place for you in the Council.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/events"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 font-sans text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                <span>Explore Council Events</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/team"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 font-sans text-sm font-bold text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Meet Council Leadership
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
