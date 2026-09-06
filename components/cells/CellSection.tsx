import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CellInfo, TeamMember, CoordinatorMember } from "@/data/team";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { QuoteIcon, LinkedInIcon, MailIcon, InstagramIcon, GithubIcon, ArrowRight } from "@/components/Icons";

interface CellSectionProps {
  cell: CellInfo;
  studentCoordinator: CoordinatorMember | undefined;
  facultyCoordinator: CoordinatorMember | undefined;
  teamMembers: TeamMember[];
  isAlternate?: boolean;
}

export function CellSection({
  cell,
  studentCoordinator,
  facultyCoordinator,
  teamMembers,
  isAlternate = false,
}: CellSectionProps) {
  const anchorId = cell.id.toLowerCase();

  return (
    <section
      id={anchorId}
      className={`scroll-mt-20 border-t border-slate-200/80 py-24 transition-colors dark:border-slate-800 ${
        isAlternate
          ? "bg-[#F8FAFC] dark:bg-[#090d16]"
          : "bg-white dark:bg-[#0f172a]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================================= */}
        {/* PART 1: CELL INTRO & VISION                                       */}
        {/* ================================================================= */}
        <div className="space-y-8">
          {/* Badge & Number */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-xs font-bold ${cell.color.border} ${cell.color.bgBadge} ${cell.color.textBadge}`}>
              <span>⚡</span> {cell.number} {"//"} {cell.fullName.toUpperCase()}
            </div>
            <div className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
              CELL DOMAIN &bull; {cell.id}
            </div>
          </div>

          {/* Heading and Tagline */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white leading-tight">
                {cell.fullName} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${cell.color.gradient}`}>
                  ({cell.name})
                </span>
              </h2>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                {cell.tagline}
              </p>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {cell.description}
              </p>
            </div>

            {/* Core Focus Areas */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                KEY FOCUS AREAS
              </h3>
              <ul className="mt-4 space-y-2.5">
                {cell.focus.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Statement Box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <QuoteIcon className="h-4 w-4" />
              VISION &amp; MISSION STATEMENT
            </div>
            <blockquote className="mt-4 font-sans text-base sm:text-lg font-semibold italic leading-relaxed text-slate-800 dark:text-slate-200 border-l-4 border-blue-600 pl-4 sm:pl-6">
              &ldquo;{cell.vision}&rdquo;
            </blockquote>
            {facultyCoordinator && (
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Faculty Advisor:</span> {facultyCoordinator.name}
                  {facultyCoordinator.institution && ` &bull; ${facultyCoordinator.institution}`}
                </div>
                <span className="italic">&ldquo;{facultyCoordinator.quote}&rdquo;</span>
              </div>
            )}
          </div>
        </div>

        {/* ================================================================= */}
        {/* PART 2: STUDENT COORDINATOR SPOTLIGHT                             */}
        {/* ================================================================= */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 font-mono text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-400">
                <span>🚀</span> STUDENT LEADERSHIP
              </div>
              <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                Cell Coordinator
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              DIRECT LEAD FOR {cell.id} INITIATIVES
            </p>
          </div>

          {studentCoordinator ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-8">
              {/* Coordinator Avatar / Monogram */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="relative aspect-square w-36 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200 shadow-sm dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
                  <div className="absolute inset-0 bg-dot-pattern opacity-60" />
                  <div className="flex h-full w-full items-center justify-center text-3xl font-black font-sans text-slate-900 dark:text-white">
                    {studentCoordinator.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>
                <h4 className="mt-4 font-sans text-lg font-bold text-slate-900 dark:text-white">
                  {studentCoordinator.name}
                </h4>
                <p className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {studentCoordinator.role} &bull; {cell.id} Cell
                </p>
              </div>

              {/* Coordinator Bio & Perspective */}
              <div className="md:col-span-8 space-y-4 border-t border-slate-100 pt-6 md:border-t-0 md:border-l md:border-slate-100 md:pl-8 dark:border-slate-800">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {"//"} COORDINATOR PERSPECTIVE
                </div>
                <blockquote className="font-sans text-base sm:text-lg font-medium italic leading-relaxed text-slate-800 dark:text-slate-200">
                  &ldquo;{studentCoordinator.quote}&rdquo;
                </blockquote>

                {/* Social links */}
                <div className="pt-2 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    CONNECT:
                  </span>
                  {studentCoordinator.socials.linkedin && (
                    <a
                      href={studentCoordinator.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                  )}
                  {studentCoordinator.socials.github && (
                    <a
                      href={studentCoordinator.socials.github.startsWith("http") ? studentCoordinator.socials.github : `https://github.com/${studentCoordinator.socials.github.replace(/^@/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
                    >
                      <GithubIcon className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {studentCoordinator.socials.instagram && studentCoordinator.socials.instagram !== "#" && (
                    <a
                      href={studentCoordinator.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition-colors hover:border-pink-300 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-pink-400"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" /> Instagram
                    </a>
                  )}
                  {studentCoordinator.socials.email && studentCoordinator.socials.email !== "#" && studentCoordinator.socials.email !== "" && (
                    <a
                      href={studentCoordinator.socials.email.startsWith("mailto:") ? studentCoordinator.socials.email : `mailto:${studentCoordinator.socials.email}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <MailIcon className="h-3.5 w-3.5" /> Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Student coordinator to be announced.</p>
          )}
        </div>

        {/* ================================================================= */}
        {/* PART 3: CELL TEAM MEMBERS GRID                                    */}
        {/* ================================================================= */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-0.5 font-mono text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <span>👥</span> {cell.id} TEAM MEMBERS
              </div>
              <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                Team &amp; Contributors
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {teamMembers.length} ACTIVE MEMBERS IN {cell.id}
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              Team members for {cell.fullName} are being onboarded.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
