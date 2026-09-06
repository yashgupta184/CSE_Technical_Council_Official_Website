import Link from "next/link";
import { siteConfig } from "@/lib/content/site-config";
import { ArrowRight, Sparkles } from "lucide-react";

export function JoinCouncilCTA() {
  return (
    <section className="bg-white dark:bg-slate-950 py-24 sm:py-32 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 px-6 py-20 text-center shadow-xl shadow-slate-200/50 sm:px-16 dark:border-slate-800 dark:bg-slate-950 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-2xl dark:shadow-black/60">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-400 mb-6 shadow-xs">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Opportunities & Innovation
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Build With Us.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Join a community of students passionate about technology, research, innovation, and building impactful real-world projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={siteConfig.joinUrl}
              className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 dark:hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2"
            >
              Join the Council <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Subtle accent glow inside the card */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
          >
            <div 
              className="aspect-[1024/600] w-[50rem] bg-gradient-to-r from-blue-300/30 via-indigo-200/30 to-cyan-200/20 opacity-70 dark:from-blue-600/25 dark:via-indigo-500/20 dark:to-cyan-400/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

