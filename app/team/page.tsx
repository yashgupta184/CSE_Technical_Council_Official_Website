import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { getImageUrl } from "@/lib/image-utils";
import {
  ArrowRight,
  LinkedInIcon,
  MailIcon,
  QuoteIcon,
  TerminalIcon,
} from "@/components/Icons";
import {
  councilCoordinator,
  facultyCoordinators,
  studentCoordinators,
} from "@/data/team";

export default function TeamPage() {
  const councilImageUrl = getImageUrl(councilCoordinator.image);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white dark:bg-[#090d16] dark:text-slate-100">
      <main className="flex-1">
        {/* ==================================================================== */}
        {/* SECTION 1: HERO */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
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
              <span className="font-mono text-xs text-blue-600 font-bold dark:text-blue-400">
                LEADERSHIP / 2026
              </span>
            </div>

            {/* Bold Two-Tone Display Heading (100xSchool signature style) */}
            <h1 className="mt-8 font-sans text-5xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl leading-none dark:text-white">
              THE PEOPLE <br />
              BEHIND THE{" "}
              <span className="text-gradient-primary">COUNCIL.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              &ldquo;The people who turn ideas into initiatives, initiatives into impact,
              and students into builders.&rdquo;
            </p>

            {/* Stat / Focus Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              <Link
                href="/cells"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs transition-all hover:border-blue-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/90"
              >
                <span className="font-bold text-blue-600 dark:text-blue-400">03 CELLS</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-slate-600 dark:text-slate-300">Innovation &bull; Research &bull; CP</span>
              </Link>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs dark:border-slate-800 dark:bg-slate-900/90">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">JSS UNIVERSITY</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-slate-600 dark:text-slate-300">Department of CSE and Allied Branches</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs dark:border-slate-800 dark:bg-slate-900/90">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">100% BUILDERS</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-slate-600 dark:text-slate-300">Student-Led Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: CTC COORDINATOR */}
        {/* ==================================================================== */}
        <section id="coordinator" className="relative py-24 bg-[#F8FAFC] border-t border-slate-200/80 dark:bg-[#090d16] dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-xs font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-400">
              <span>🎯</span> 01 {"//"} COUNCIL COORDINATOR
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left Portrait Column */}
              <div className="lg:col-span-5">
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/90">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200/60 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
                    {councilImageUrl ? (
                      <Image
                        src={councilImageUrl}
                        alt={councilCoordinator.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
                        <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                          <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-300 bg-white font-sans text-4xl font-black text-slate-900 shadow-md shadow-blue-500/5 transition-transform duration-500 group-hover:scale-105 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                            DP
                          </div>
                          <div className="mt-5 font-sans text-sm font-bold text-slate-800 dark:text-slate-200">
                            {councilCoordinator.name}
                          </div>
                          <div className="mt-1 font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                            {councilCoordinator.role} &bull; {councilCoordinator.council}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7">
                <h2 className="font-sans text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-none dark:text-white">
                  THE PERSON <br />
                  SETTING THE{" "}
                  <span className="text-gradient-primary">DIRECTION.</span>
                </h2>

                <div className="mt-8 space-y-2 border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {councilCoordinator.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider dark:text-blue-400">
                    {councilCoordinator.role} &mdash; {councilCoordinator.council}
                  </p>
                  <p className="text-sm text-slate-600 font-medium dark:text-slate-400">
                    {councilCoordinator.department} &bull; {councilCoordinator.institution}
                  </p>
                </div>

                {/* Vision Box */}
                <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/80">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-wider dark:text-blue-400">
                    <QuoteIcon className="h-4 w-4 text-blue-500" />
                    VISION FOR THE COUNCIL
                  </div>
                  <blockquote className="mt-4 font-sans text-lg font-semibold italic leading-relaxed text-slate-800 dark:text-slate-200">
                    &ldquo;{councilCoordinator.vision}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-slate-600 leading-normal dark:text-slate-400">
                    {councilCoordinator.quote}
                  </p>
                </div>

                {/* Social Connect */}
                <div className="mt-8 flex items-center gap-4 pt-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-slate-400 uppercase tracking-wider dark:text-slate-500">
                    {"//"} CONNECT:
                  </span>
                  <a
                    href={councilCoordinator.socials.linkedin}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  <a
                    href={councilCoordinator.socials.email}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <MailIcon className="h-3.5 w-3.5" /> Department Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: FACULTY COORDINATORS */}
        {/* ==================================================================== */}
        <section className="border-t border-slate-200/80 bg-white py-24 dark:bg-[#0f172a] dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <span>🏛</span> 02 {"//"} FACULTY COORDINATORS
              </div>
              <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                THE FACULTY <br />
                <span className="text-gradient-primary">BEHIND THE CELLS.</span>
              </h2>
            </div>

            {/* 3 Faculty Profiles */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {facultyCoordinators.map((faculty) => {
                const facultyImageUrl = getImageUrl(faculty.image);
                return (
                  <div
                    key={faculty.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900"
                  >
                    <div>
                      {/* Cell Tag */}
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 font-mono text-xs dark:border-slate-800">
                        <span className="font-bold text-slate-900 dark:text-white">
                          FACULTY {"//"} {faculty.cell}
                        </span>
                        <span className="text-slate-400 font-medium dark:text-slate-500">JSS UNIVERSITY</span>
                      </div>

                      {/* Portrait */}
                      <div className="relative my-6 aspect-[4/5] w-full overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xs dark:border-slate-700 dark:bg-slate-800">
                        {facultyImageUrl ? (
                          <Image
                            src={facultyImageUrl}
                            alt={faculty.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 font-sans text-lg font-black text-slate-800 border border-slate-200 group-hover:scale-105 transition-transform dark:bg-slate-700 dark:text-white dark:border-slate-600">
                              {faculty.cell}
                            </div>
                            <span className="mt-3 font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                              {"//"} {faculty.cell} FACULTY LEAD
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Name & Title */}
                      <h3 className="font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                        {faculty.name}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-blue-600 mt-1 dark:text-blue-400">
                        {faculty.role} &bull; {faculty.cell} Cell
                      </p>

                      {/* Quote */}
                      <p className="mt-4 text-xs italic leading-relaxed text-slate-600 border-l-2 border-blue-400 pl-3 dark:text-slate-300">
                        &ldquo;{faculty.quote}&rdquo;
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <a
                          href={faculty.socials.linkedin}
                          aria-label="Faculty LinkedIn"
                          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </a>
                        <a
                          href={faculty.socials.email}
                          aria-label="Faculty Email"
                          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                        >
                          <MailIcon className="h-4 w-4" />
                        </a>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
                        FACULTY ADVISOR
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: STUDENT COORDINATORS (Click to view dedicated cell)      */}
        {/* ==================================================================== */}
        <section className="border-t border-slate-200/80 bg-[#F8FAFC] py-24 dark:bg-[#090d16] dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-400">
                  <span>🚀</span> 03 {"//"} STUDENT LEADERSHIP
                </div>
                <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                  STUDENTS <br />
                  <span className="text-gradient-primary">WHO LEAD.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-slate-600 leading-relaxed dark:text-slate-300">
                Student coordinators driving day-to-day workshops, research reading groups,
                and competitive coding sprints across the department. Click a coordinator to explore their dedicated cell.
              </p>
            </div>

            {/* 3 Prominent Student Coordinator Cards with redirection */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {studentCoordinators.map((lead) => (
                <TeamMemberCard
                  key={lead.id}
                  member={lead}
                  featured={true}
                  cellLink={`/cells#${lead.cell.toLowerCase()}`}
                  cellActionLabel={`View ${lead.cell} Cell & Team`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: STRONG CLOSING CTA */}
        {/* ==================================================================== */}
        <section id="join" className="relative overflow-hidden py-24 bg-white dark:bg-[#0f172a] border-t border-slate-200/80 dark:border-slate-800">
          <div className="bg-dot-pattern absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-xs font-bold text-blue-700 shadow-xs dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-400">
              <TerminalIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              BUILD WITH US
            </div>

            <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              EXPLORE OUR <br />
              <span className="text-gradient-primary">TECHNICAL CELLS.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Discover the full teams, ongoing projects, research publications, and coding tracks across AIC, RAC, and CPC.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/cells"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 font-sans text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/35 sm:w-auto"
              >
                <span>Explore All 3 Cells</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:contact@ctcjss.in"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 font-sans text-sm font-bold text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Contact Council Leads
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

