import { TrendingUp, Terminal, Sparkles, Trophy, Bot, CheckCircle2 } from "lucide-react";

export function ImpactAchievements() {
  const milestones = [
    {
      step: "01",
      tag: "OUTREACH",
      title: "172+ Participants",
      subtitle: "CPC Coding Drives",
      description: "Conducted 3 major competitive coding events in its first academic year, recording 172+ cumulative student registrations.",
      highlights: ["3 Major Events Delivered", "Active Coding Community"],
      icon: Terminal,
      gradient: "from-emerald-600 to-teal-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-800/60",
      accentPill: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/80",
      hoverBorder: "hover:border-emerald-400/80 dark:hover:border-emerald-500/60",
    },
    {
      step: "02",
      tag: "ENGAGEMENT",
      title: "300+ Registrations",
      subtitle: "R² Series & SnapAR",
      description: "Flagship research initiatives including R² Series and SnapAR XR drew over 300 students across 1st and 2nd years.",
      highlights: ["1st & 2nd Year Participation", "Industry Partner XR Lab"],
      icon: Sparkles,
      gradient: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/80 dark:border-purple-800/60",
      accentPill: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/60 dark:border-purple-800/80",
      hoverBorder: "hover:border-purple-400/80 dark:hover:border-purple-500/60",
    },
    {
      step: "03",
      tag: "OUTCOMES",
      title: "1st Year Champions",
      subtitle: "DSA Contest Podiums",
      description: "All top podium winners across the comprehensive DSA coding contests were talented first-year engineering students.",
      highlights: ["First-Year Podium Sweep", "High Algorithmic Aptitude"],
      icon: Trophy,
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200/80 dark:border-amber-800/60",
      accentPill: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-800/80",
      hoverBorder: "hover:border-amber-400/80 dark:hover:border-amber-500/60",
    },
    {
      step: "04",
      tag: "INNOVATION",
      title: "Next-Gen AI Mastery",
      subtitle: "Generative AI & Agents",
      description: "Delivered practical deep-dive sessions on Generative AI, RAG pipelines, Prompt Engineering, and autonomous AI agents.",
      highlights: ["RAG Pipelines & LLMs", "Autonomous Agent Workflows"],
      icon: Bot,
      gradient: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
      accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
    },
  ];

  return (
    <section className="bg-slate-50/80 border-y border-slate-200/80 py-24 sm:py-32 relative dark:bg-slate-900/50 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <TrendingUp className="h-3.5 w-3.5" /> Historical Milestones
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Impact in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Reported milestones and breakthrough participation numbers from our inaugural academic year.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => {
              const Icon = milestone.icon;

              return (
                <div 
                  key={milestone.title} 
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-black/40 ${milestone.hoverBorder}`}
                >
                  {/* Top gradient highlight strip */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${milestone.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  {/* Ambient radial blur on hover */}
                  <div 
                    aria-hidden="true" 
                    className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${milestone.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
                  />

                  <div>
                    {/* Top row: Icon box + Milestone Tag Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${milestone.iconBg}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase ${milestone.accentPill}`}>
                        {milestone.step} &bull; {milestone.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-black leading-snug tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {milestone.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {milestone.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                      <ul className="space-y-2">
                        {milestone.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
