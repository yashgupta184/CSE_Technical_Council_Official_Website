import Link from "next/link";
import { featuredEvents } from "@/lib/content/events";
import { Calendar, ArrowRight, Zap } from "lucide-react";

export function FeaturedEvents() {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4">
            <Zap className="h-3.5 w-3.5" /> Initiatives & Workshops
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Events That Turn Ideas Into Action.
          </h2>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {featuredEvents.map((event) => (
            <article 
              key={event.title} 
              className="flex flex-col items-start justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="w-full">
                <div className="flex items-center justify-between gap-x-2 text-xs">
                  <time dateTime={event.date} className="text-slate-500 flex items-center gap-1.5 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" /> {event.date}
                  </time>
                  <span className="rounded-full bg-blue-50 border border-blue-200/80 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {event.cell}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                  <Link href={event.href}>
                    {event.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 w-full">
                <Link 
                  href={event.href}
                  className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center"
                >
                  View Event <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="/events" 
            className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300 transition-all flex items-center gap-2"
          >
            View All Events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

