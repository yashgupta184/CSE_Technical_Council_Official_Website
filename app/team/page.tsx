"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  ArrowRight,
  LinkedInIcon,
  MailIcon,
  QuoteIcon,
  TerminalIcon,
} from "@/components/Icons";
import {
  cellsData,
  councilCoordinator,
  facultyCoordinators,
  studentCoordinators,
  completeTeamMembers,
  CellType,
} from "@/data/team";

export default function TeamPage() {
  const [selectedCellFilter, setSelectedCellFilter] = useState<"ALL" | CellType>("ALL");

  const filteredTeamMembers =
    selectedCellFilter === "ALL"
      ? completeTeamMembers
      : completeTeamMembers.filter((m) => m.cell === selectedCellFilter);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 100xSchool Floating Glass Navbar */}
      <Navbar />

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
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-slate-700">
                CSE TECHNICAL COUNCIL
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="font-mono text-xs text-blue-600 font-bold">
                TEAM / 2026
              </span>
            </div>

            {/* Bold Two-Tone Display Heading (100xSchool signature style) */}
            <h1 className="mt-8 font-sans text-5xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl leading-none">
              THE PEOPLE <br />
              BEHIND THE{" "}
              <span className="text-gradient-primary">COUNCIL.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
              &ldquo;The people who turn ideas into initiatives, initiatives into impact,
              and students into builders.&rdquo;
            </p>

            {/* Stat / Focus Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs">
                <span className="font-bold text-blue-600">03 CELLS</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Innovation &bull; Research &bull; CP</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs">
                <span className="font-bold text-indigo-600">JSS UNIVERSITY</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Department of CSE</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-xs">
                <span className="font-bold text-emerald-600">100% BUILDERS</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Student-Led Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: THREE CELLS */}
        {/* ==================================================================== */}
        <section id="cells" className="border-y border-slate-200/80 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-600">
                  <span>⚡</span> THREE CELLS
                </div>
                <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  THREE CELLS. <span className="text-gradient-primary">ONE COUNCIL.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-600 leading-relaxed">
                Explore the dedicated wings driving applied innovation, scientific research,
                and high-speed competitive programming.
              </p>
            </div>

            {/* Cell Cards Grid (100xSchool style rounded cards with vibrant badges) */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {cellsData.map((cell) => {
                const isAIC = cell.id === "AIC";
                const isRAC = cell.id === "RAC";

                const theme = isAIC
                  ? {
                      pill: "bg-blue-600",
                      badge: "bg-blue-50 text-blue-700 border-blue-100",
                      tag: "bg-blue-50/50 text-blue-700 border-blue-100",
                      hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
                      textGrad: "from-blue-600 to-indigo-600",
                    }
                  : isRAC
                  ? {
                      pill: "bg-purple-600",
                      badge: "bg-purple-50 text-purple-700 border-purple-100",
                      tag: "bg-purple-50/50 text-purple-700 border-purple-100",
                      hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10",
                      textGrad: "from-purple-600 to-indigo-600",
                    }
                  : {
                      pill: "bg-emerald-600",
                      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
                      tag: "bg-emerald-50/50 text-emerald-700 border-emerald-100",
                      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
                      textGrad: "from-emerald-600 to-teal-600",
                    };

                return (
                  <Link
                    key={cell.id}
                    href={cell.route}
                    className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl ${theme.hoverBorder}`}
                  >
                    <div>
                      {/* Top Header info */}
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 font-mono text-xs font-bold ${theme.badge}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${theme.pill}`} />
                          CELL // {cell.id}
                        </span>
                        <span className="font-mono text-sm font-bold text-slate-400">
                          {cell.number}
                        </span>
                      </div>

                      {/* Cell Title */}
                      <div className="mt-6">
                        <h3 className="font-sans text-3xl font-black tracking-tight text-slate-950">
                          {cell.id}
                        </h3>
                        <div
                          className={`mt-1 bg-gradient-to-r ${theme.textGrad} bg-clip-text font-mono text-xs font-extrabold tracking-wider text-transparent uppercase`}
                        >
                          {cell.title}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs leading-relaxed text-slate-600">
                        {cell.description}
                      </p>

                      {/* Focus Tag */}
                      <div
                        className={`mt-5 rounded-xl border p-3 font-mono text-[11px] font-medium leading-normal ${theme.tag}`}
                      >
                        {cell.focus}
                      </div>
                    </div>

                    {/* Footer Explore action */}
                    <div className="mt-8 flex items-center justify-between border-t border-slate-200/80 pt-4 font-sans text-xs font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                      <span>Explore Cell Page</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: CTC COORDINATOR */}
        {/* ==================================================================== */}
        <section className="relative py-24 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-xs font-bold text-blue-700">
              <span>🎯</span> 01 {"//"} COUNCIL COORDINATOR
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left Portrait Column */}
              <div className="lg:col-span-5">
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200/60">
                    <div className="absolute inset-0 bg-dot-pattern opacity-60" />
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-300 bg-white font-sans text-4xl font-black text-slate-900 shadow-md shadow-blue-500/5 transition-transform duration-500 group-hover:scale-105">
                        DP
                      </div>
                      <div className="mt-5 font-sans text-sm font-bold text-slate-800">
                        {councilCoordinator.name}
                      </div>
                      <div className="mt-1 font-mono text-xs font-medium text-blue-600">
                        {councilCoordinator.role} &bull; {councilCoordinator.council}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7">
                <h2 className="font-sans text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-none">
                  THE PERSON <br />
                  SETTING THE{" "}
                  <span className="text-gradient-primary">DIRECTION.</span>
                </h2>

                <div className="mt-8 space-y-2 border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    {councilCoordinator.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {councilCoordinator.role} &mdash; {councilCoordinator.council}
                  </p>
                  <p className="text-sm text-slate-600 font-medium">
                    {councilCoordinator.department} &bull; {councilCoordinator.institution}
                  </p>
                </div>

                {/* 100xSchool style Vision Box */}
                <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                    <QuoteIcon className="h-4 w-4 text-blue-500" />
                    VISION FOR THE COUNCIL
                  </div>
                  <blockquote className="mt-4 font-sans text-lg font-semibold italic leading-relaxed text-slate-800">
                    &ldquo;{councilCoordinator.vision}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-slate-600 leading-normal">
                    {councilCoordinator.quote}
                  </p>
                </div>

                {/* Social Connect */}
                <div className="mt-8 flex items-center gap-4 pt-2 font-mono text-xs text-slate-600">
                  <span className="font-bold text-slate-400 uppercase tracking-wider">
                    {"//"} CONNECT:
                  </span>
                  <a
                    href={councilCoordinator.socials.linkedin}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  <a
                    href={councilCoordinator.socials.email}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-600"
                  >
                    <MailIcon className="h-3.5 w-3.5" /> Department Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: FACULTY COORDINATORS */}
        {/* ==================================================================== */}
        <section className="border-t border-slate-200/80 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700">
                <span>🏛</span> 02 {"//"} FACULTY COORDINATORS
              </div>
              <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                THE FACULTY <br />
                <span className="text-gradient-primary">BEHIND THE CELLS.</span>
              </h2>
            </div>

            {/* 3 Faculty Profiles */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {facultyCoordinators.map((faculty) => (
                <div
                  key={faculty.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div>
                    {/* Cell Tag */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 font-mono text-xs">
                      <span className="font-bold text-slate-900">
                        FACULTY {"//"} {faculty.cell}
                      </span>
                      <span className="text-slate-400 font-medium">JSS UNIVERSITY</span>
                    </div>

                    {/* Placeholder portrait */}
                    <div className="relative my-6 aspect-[4/5] w-full overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 font-sans text-lg font-black text-slate-800 border border-slate-200 group-hover:scale-105 transition-transform">
                          {faculty.cell}
                        </div>
                        <span className="mt-3 font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          {"//"} {faculty.cell} FACULTY LEAD
                        </span>
                      </div>
                    </div>

                    {/* Name & Title */}
                    <h3 className="font-sans text-xl font-bold tracking-tight text-slate-950">
                      {faculty.name}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-blue-600 mt-1">
                      {faculty.role} &bull; {faculty.cell} Cell
                    </p>

                    {/* Quote */}
                    <p className="mt-4 text-xs italic leading-relaxed text-slate-600 border-l-2 border-blue-400 pl-3">
                      &ldquo;{faculty.quote}&rdquo;
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a
                        href={faculty.socials.linkedin}
                        aria-label="Faculty LinkedIn"
                        className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={faculty.socials.email}
                        aria-label="Faculty Email"
                        className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        <MailIcon className="h-4 w-4" />
                      </a>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
                      FACULTY ADVISOR
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: STUDENT COORDINATORS */}
        {/* ==================================================================== */}
        <section className="border-t border-slate-200/80 bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700">
                  <span>🚀</span> 03 {"//"} STUDENT LEADERSHIP
                </div>
                <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  STUDENTS <br />
                  <span className="text-gradient-primary">WHO LEAD.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-slate-600 leading-relaxed">
                Student coordinators driving day-to-day workshops, research reading groups,
                and competitive coding sprints across the department.
              </p>
            </div>

            {/* 3 Prominent Student Coordinator Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {studentCoordinators.map((lead) => (
                <TeamMemberCard key={lead.id} member={lead} featured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: COMPLETE TEAM */}
        {/* ==================================================================== */}
        <section className="border-t border-slate-200/80 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header & Filter Controls */}
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-slate-100 pb-8 lg:flex-row lg:items-end">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700">
                  <span>👥</span> 04 {"//"} THE TEAM
                </div>
                <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  BUILT BY <span className="text-gradient-primary">PEOPLE.</span>
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Different strengths. Different perspectives. One council.
                </p>
              </div>

              {/* 100xSchool style Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 font-mono text-xs shadow-xs">
                {(["ALL", "AIC", "RAC", "CPC", "CORE"] as const).map((filter) => {
                  const isActive = selectedCellFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedCellFilter(filter)}
                      className={`rounded-xl px-4 py-2 font-bold uppercase transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Responsive 100xSchool Editorial Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTeamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: STRONG CLOSING CTA */}
        {/* ==================================================================== */}
        <section id="join" className="relative overflow-hidden py-24 bg-[#F8FAFC]">
          <div className="bg-dot-pattern absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-xs font-bold text-blue-700 shadow-xs">
              <TerminalIcon className="h-3.5 w-3.5 text-blue-600" />
              BUILD WITH US
            </div>

            <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              BUILD WITH THE <br />
              <span className="text-gradient-primary">TECHNICAL COUNCIL.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether your passion lies in prototyping breakthrough products, publishing frontier
              research, or conquering algorithmic ladders &mdash; there is a place for you in the
              CSE Technical Council.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#cells"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 font-sans text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/35 sm:w-auto"
              >
                <span>Explore The Three Cells</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@ctcjss.in"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 font-sans text-sm font-bold text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                Contact Council Leads
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 100xSchool Style Footer */}
      <Footer />
    </div>
  );
}
