import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  cellsData,
  studentCoordinators,
  facultyCoordinators,
  completeTeamMembers,
} from "@/data/team";
import { CellSection } from "@/components/cells/CellSection";
import { ArrowRight, ArrowLeft } from "@/components/Icons";

interface Props {
  params: Promise<{ cell: string }>;
}

export async function generateStaticParams() {
  return cellsData.map((cell) => ({
    cell: cell.id.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cell: cellParam } = await params;
  const targetCell = cellsData.find(
    (c) => c.id.toLowerCase() === cellParam.toLowerCase()
  );

  if (!targetCell) {
    return { title: "Cell Not Found | CSE Technical Council" };
  }

  return {
    title: `${targetCell.fullName} (${targetCell.name}) | CSE Technical Council`,
    description: targetCell.vision,
  };
}

export default async function DedicatedCellPage({ params }: Props) {
  const { cell: cellParam } = await params;
  const targetCell = cellsData.find(
    (c) => c.id.toLowerCase() === cellParam.toLowerCase()
  );

  if (!targetCell) {
    notFound();
  }

  const studentCoordinator = studentCoordinators.find(
    (sc) => sc.cell === targetCell.id
  );
  const facultyCoordinator = facultyCoordinators.find(
    (fc) => fc.cell === targetCell.id
  );
  const teamMembers = completeTeamMembers.filter(
    (m) => m.cell === targetCell.id
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white dark:bg-[#090d16] dark:text-slate-100">
      <main className="flex-1">
        {/* Navigation Breadcrumb bar */}
        <div className="border-b border-slate-200/80 bg-white py-4 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/cells"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>ALL COUNCIL CELLS</span>
            </Link>

            <div className="flex items-center gap-2">
              {cellsData.map((c) => (
                <Link
                  key={c.id}
                  href={`/cells/${c.id.toLowerCase()}`}
                  className={`rounded-lg px-2.5 py-1 text-xs font-mono font-bold transition-all ${
                    c.id === targetCell.id
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                >
                  {c.id}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Cell Section */}
        <CellSection
          cell={targetCell}
          studentCoordinator={studentCoordinator}
          facultyCoordinator={facultyCoordinator}
          teamMembers={teamMembers}
        />

        {/* Other Cells Navigation Switcher */}
        <section className="border-t border-slate-200/80 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              EXPLORE OTHER CELLS
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {cellsData
                .filter((c) => c.id !== targetCell.id)
                .map((otherCell) => (
                  <Link
                    key={otherCell.id}
                    href={`/cells/${otherCell.id.toLowerCase()}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${otherCell.color.bgBadge} ${otherCell.color.textBadge}`}>
                        {otherCell.number} // {otherCell.id}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h4 className="mt-4 font-sans text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {otherCell.fullName}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {otherCell.tagline}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
