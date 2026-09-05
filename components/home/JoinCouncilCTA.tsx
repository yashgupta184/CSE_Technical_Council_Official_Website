import Link from "next/link";
import { siteConfig } from "@/lib/content/site-config";
import { ArrowRight, Sparkles } from "lucide-react";

export function JoinCouncilCTA() {
  return (
    <section className="bg-white py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 px-6 py-20 text-center shadow-2xl sm:px-16">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-400 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" /> Opportunities & Innovation
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Build With Us.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            Join a community of students passionate about technology, research, innovation, and building impactful real-world projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={siteConfig.joinUrl}
              className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all flex items-center gap-2"
            >
              Join the Council <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Subtle blue accent glow inside the card */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
          >
            <div 
              className="aspect-[1024/600] w-[50rem] bg-gradient-to-r from-blue-600/25 via-indigo-500/20 to-cyan-400/15 opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

