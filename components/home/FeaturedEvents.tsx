import Link from "next/link";
import { featuredEvents } from "@/lib/content/events";
import { Calendar, ArrowRight, Zap, CheckCircle2, Sparkles, Terminal, Glasses, Rocket } from "lucide-react";

export function FeaturedEvents() {
  const eventConfig: Record<string, {
    category: string;
    gradient: string;
    icon: typeof Zap;
    iconBg: string;
    accentPill: string;
    hoverBorder: string;
    highlights: string[];
  }> = {
    "AgentX — Build Your First AI Agent": {
      category: "AI & AUTONOMOUS AGENTS",
      gradient: "from-blue-600 to-cyan-500",
      icon: Sparkles,
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
      accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
      highlights: ["Google Colab AI Pipeline", "Agentic Architecture"],
    },
    "DSA Bootcamp — 3-Day Intensive Workshop": {
      category: "ALGORITHMS & CODING",
      gradient: "from-emerald-600 to-teal-500",
      icon: Terminal,
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-800/60",
      accentPill: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/80",
      hoverBorder: "hover:border-emerald-400/80 dark:hover:border-emerald-500/60",
      highlights: ["3-Day Progressive Sprint", "Closing HackerRank Contest"],
    },
    "SnapAR: Hands-On Workshop on Extended Reality": {
      category: "EXTENDED REALITY (XR)",
      gradient: "from-purple-600 to-pink-500",
      icon: Glasses,
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/80 dark:border-purple-800/60",
      accentPill: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/60 dark:border-purple-800/80",
      hoverBorder: "hover:border-purple-400/80 dark:hover:border-purple-500/60",
      highlights: ["Industry Partner Led", "AR in Applied Research"],
    },
    "CodeGenesis — Orientation Session": {
      category: "COMMUNITY INITIATIVE",
      gradient: "from-indigo-600 to-blue-600",
      icon: Rocket,
      iconBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200/80 dark:border-indigo-800/60",
      accentPill: "text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-300 dark:bg-indigo-950/60 dark:border-indigo-800/80",
      hoverBorder: "hover:border-indigo-400/80 dark:hover:border-indigo-500/60",
      highlights: ["Inaugural Tech Roadmap", "Open to 1st/2nd Years"],
    },
  };

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Zap className="h-3.5 w-3.5" /> Initiatives & Workshops
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Events That Turn Ideas Into Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            From hands-on technical bootcamps to competitive algorithmic hackathons and industry sessions.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-7 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {featuredEvents.map((event) => {
            const config = eventConfig[event.title] || {
              category: "WORKSHOP",
              gradient: "from-blue-600 to-indigo-600",
              icon: Zap,
              iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
              accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
              hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
              highlights: ["Certificate of Completion", "Interactive Hands-on Lab"],
            };
            const Icon = config.icon;

            return (
              <article 
                key={event.title} 
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-black/40 ${config.hoverBorder}`}
              >
                {/* Top gradient highlight strip */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${config.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Ambient radial blur on hover */}
                <div 
                  aria-hidden="true" 
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${config.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
                />

                <div>
                  {/* Top row: Icon box + Cell & Date Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${config.iconBg}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase ${config.accentPill}`}>
                      {event.cell}
                    </span>
                  </div>

                  {/* Date line */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <time dateTime={event.date}>{event.date}</time>
                  </div>

                  {/* Title & Category Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black leading-snug tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={event.href}>
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {config.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {event.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                    <ul className="space-y-2">
                      {config.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                  <Link 
                    href={event.href}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
                  >
                    View Event Details <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className="mt-16 sm:mt-20 flex justify-center">
          <Link 
            href="/events" 
            className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300 transition-all flex items-center gap-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
          >
            View All Events & Workshops <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

