"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface CouncilQuote {
  quote: string;
  author: string;
  role: string;
  tag: string;
}

export const councilQuotes: CouncilQuote[] = [
  {
    quote:
      "To foster a strong technical culture that encourages learning, innovation, leadership, and research, while building a community of skilled, industry-ready students.",
    author: "Council Vision & Mission",
    role: "Department of CSE & Allied Branches",
    tag: "Core Vision",
  },
  {
    quote:
      "Innovation happens when students are empowered to experiment without fear, question conventional wisdom, and transform raw concepts into scalable engineering solutions.",
    author: "Dr. Dhiraj Pandey",
    role: "Faculty Coordinator & Professor",
    tag: "Faculty Insight",
  },
  {
    quote:
      "The technical council isn't merely about writing code; it's about solving impactful problems, lifting your peers, and discovering what you're truly capable of building.",
    author: "Student Leadership Team",
    role: "CSE Technical Council",
    tag: "Student Voice",
  },
  {
    quote:
      "Research and innovation thrive on curiosity. Every paper written, project pitched, and prototype deployed moves our campus community closer to global technological frontiers.",
    author: "Research & Academic Cell (RAC)",
    role: "CSE Technical Council",
    tag: "Research & Impact",
  },
  {
    quote:
      "Code, collaborate, and compete with rigor. True mastery comes from consistent practice, healthy competition, and an unrelenting passion for technical excellence.",
    author: "Competitive Programming Cell (CPC)",
    role: "CSE Technical Council",
    tag: "Competitive Edge",
  },
];

export function CouncilQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  const totalQuotes = councilQuotes.length;

  const goToQuote = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex) return;
      setFadeState("out");
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setFadeState("in");
      }, 250);
    },
    [currentIndex]
  );

  const nextQuote = useCallback(() => {
    goToQuote((currentIndex + 1) % totalQuotes);
  }, [currentIndex, goToQuote, totalQuotes]);

  const prevQuote = useCallback(() => {
    goToQuote((currentIndex - 1 + totalQuotes) % totalQuotes);
  }, [currentIndex, goToQuote, totalQuotes]);

  // Auto-advance quote every 6 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextQuote();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextQuote]);

  const current = councilQuotes[currentIndex];

  return (
    <section 
      className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Council Quotes and Perspectives"
    >
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl opacity-40 dark:opacity-20"
      >
        <div className="aspect-[1024/400] w-[54rem] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-3 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" /> Voices & Perspectives
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Words Behind the Vision
          </h2>
        </div>

        {/* Quote Card */}
        <div className="relative isolate rounded-3xl border border-slate-200/90 bg-white/90 p-8 sm:p-12 md:p-14 shadow-xl shadow-slate-200/50 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/50 transition-all">
          {/* Decorative Quote Watermark Background */}
          <div 
            aria-hidden="true" 
            className="absolute top-6 right-6 sm:top-8 sm:right-10 -z-10 text-blue-100 dark:text-slate-800/60 pointer-events-none"
          >
            <Quote className="h-16 w-16 sm:h-24 sm:w-24 opacity-60" />
          </div>

          <div
            className={`transition-all duration-300 transform ${
              fadeState === "in"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            {/* Tag Badge */}
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 font-mono text-[11px] font-bold text-blue-700 dark:border-blue-800/80 dark:bg-blue-950/60 dark:text-blue-300 uppercase tracking-wider">
                {current.tag}
              </span>
              <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                0{currentIndex + 1} / 0{totalQuotes}
              </span>
            </div>

            {/* Main Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-snug text-slate-800 dark:text-slate-100 italic tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Attribution */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {current.role}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prevQuote}
                  className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-xs hover:border-blue-400 hover:bg-slate-50 hover:text-blue-600 active:scale-95 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  aria-label="Previous quote"
                  title="Previous quote"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextQuote}
                  className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-xs hover:border-blue-400 hover:bg-slate-50 hover:text-blue-600 active:scale-95 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  aria-label="Next quote"
                  title="Next quote"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Dots Indicator Bar */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {councilQuotes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToQuote(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-blue-600 dark:bg-blue-500"
                    : "w-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
                }`}
                aria-label={`Jump to quote ${idx + 1}`}
                title={`Quote ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
