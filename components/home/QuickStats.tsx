import { quickStats } from "@/lib/content/stats";
import { Layers, Users, CalendarDays, Sparkles } from "lucide-react";

export function QuickStats() {
  const statIcons = [
    {
      icon: Layers,
      gradient: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
      accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
      step: "01",
      tag: "CORE PILLARS",
      description: "Specialized student-led cells driving technical excellence",
    },
    {
      icon: Users,
      gradient: "from-emerald-600 to-teal-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-800/60",
      accentPill: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/80",
      hoverBorder: "hover:border-emerald-400/80 dark:hover:border-emerald-500/60",
      step: "02",
      tag: "COMMUNITY",
      description: "Aspiring developers, researchers & competitive coders",
    },
    {
      icon: CalendarDays,
      gradient: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/80 dark:border-purple-800/60",
      accentPill: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/60 dark:border-purple-800/80",
      hoverBorder: "hover:border-purple-400/80 dark:hover:border-purple-500/60",
      step: "03",
      tag: "ACTIVITIES",
      description: "Workshops, hackathons, bootcamps & coding contests",
    },
  ];

  return (
    <section className="bg-slate-50/80 border-y border-slate-200/80 py-16 sm:py-24 relative dark:bg-slate-900/50 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" /> Key Metrics & Scale
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            The Numbers Behind Our Mission
          </h2>
          <p className="text-sm font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-12">
            Official Technical Council &middot; CSE Department &middot; JSS University, Noida
          </p>

          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => {
              const meta = statIcons[index] || statIcons[0];
              const Icon = meta.icon;

              return (
                <div
                  key={stat.label}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-6 sm:p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${meta.hoverBorder}`}
                >
                  {/* Top accent gradient strip */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${meta.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Ambient background glow on hover */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${meta.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
                  />

                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${meta.iconBg}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border ${meta.accentPill}`}
                      >
                        {meta.step} &bull; {meta.tag}
                      </span>
                    </div>

                    {/* Stat Value & Label */}
                    <div className="mt-1">
                      <dd className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        {stat.value}
                      </dd>
                      <dt className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {stat.label}
                      </dt>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {meta.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
