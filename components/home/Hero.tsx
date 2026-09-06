import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:pb-36 tech-grid-light">
      {/* Abstract Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div 
          className="aspect-[1155/678] w-[68rem] bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-blue-50/20 opacity-70" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }} 
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Department of CSE and Allied Branches
            </span>
          </div>
          
          <h1 className="font-sans text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            CSE Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Council</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
            A student‒faculty initiative at JSS University, Noida, building a collaborative ecosystem for hands-on learning, innovation, research, and real-world problem-solving.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#about"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2"
            >
              Explore the Council <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/events" 
              className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300 transition-all flex items-center gap-2"
            >
              View Events <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="mt-14 pt-6 border-t border-slate-200/80 inline-block">
            <p className="italic text-xs sm:text-sm font-semibold text-slate-500 tracking-widest uppercase">
              Learn. Build. Lead. Innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

