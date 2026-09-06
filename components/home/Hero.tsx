import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="tech-grid-light relative overflow-hidden bg-white dark:bg-slate-950 min-h-[calc(100vh-4rem)] flex items-center py-10 sm:py-12 lg:py-8">
      {/* Abstract Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div
          className="aspect-1155/678 w-[68rem] bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-blue-50/20 opacity-70 dark:from-blue-900/30 dark:via-indigo-950/20 dark:to-transparent"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-column split: copy left, visual right. Stacks on mobile with the
            visual second so the headline still leads. */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-7 xl:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:text-sm dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Department of CSE and Allied Branches
            </span>

            <h1 className="mt-4 sm:mt-5 font-sans text-4xl leading-[1.08] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-5xl xl:text-6xl dark:text-white">
              CSE Technical{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Council
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-base leading-relaxed font-normal text-slate-600 sm:text-lg dark:text-slate-400">
              A student‒faculty initiative at JSS University, Noida, building a
              collaborative ecosystem for hands-on learning, innovation,
              research, and real-world problem-solving.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="#about"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore the Council <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
              >
                View Events <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 inline-block border-t border-slate-200/80 pt-4 sm:pt-5 dark:border-slate-800">
              <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase italic sm:text-sm dark:text-slate-400">
                Learn. Build. Lead. Innovate.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
