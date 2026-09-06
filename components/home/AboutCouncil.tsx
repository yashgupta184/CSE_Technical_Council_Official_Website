import { Lightbulb, Code2, Rocket, CheckCircle2, Compass } from "lucide-react";

export function AboutCouncil() {
  const pillars = [
    {
      step: "01",
      tag: "KNOWLEDGE",
      title: "Learn",
      subtitle: "Foundational & Emerging Skills",
      description:
        "Master cutting-edge technologies beyond standard classroom curriculum through structured workshops, bootcamps, and domain roadmaps.",
      highlights: [
        "Hands-on Tech Workshops",
        "AI, Cloud & Web Specializations",
        "Peer-to-Peer Learning Circles",
      ],
      icon: Lightbulb,
      gradient: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
      accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
    },
    {
      step: "02",
      tag: "ENGINEERING",
      title: "Build",
      subtitle: "Practical Problem Solving",
      description:
        "Transform concepts into production-ready software and hardware prototypes with real-world utility and scalable architecture.",
      highlights: [
        "24-48hr Hackathons & Sprints",
        "Production Web & Mobile Systems",
        "Open-Source Student Projects",
      ],
      icon: Code2,
      gradient: "from-indigo-600 to-blue-600",
      iconBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200/80 dark:border-indigo-800/60",
      accentPill: "text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-300 dark:bg-indigo-950/60 dark:border-indigo-800/80",
      hoverBorder: "hover:border-indigo-400/80 dark:hover:border-indigo-500/60",
    },
    {
      step: "03",
      tag: "COMMUNITY",
      title: "Lead",
      subtitle: "Impact, Research & Mentorship",
      description:
        "Cultivate leadership, spearhead research initiatives, publish academic papers, and mentor the next generation of tech innovators.",
      highlights: [
        "Technical Team Leadership",
        "Research & Paper Publication",
        "Campus-wide Mentorship Drives",
      ],
      icon: Rocket,
      gradient: "from-violet-600 to-purple-600",
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/80 dark:border-purple-800/60",
      accentPill: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/60 dark:border-purple-800/80",
      hoverBorder: "hover:border-purple-400/80 dark:hover:border-purple-500/60",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Compass className="h-3.5 w-3.5" /> Our Mission & Pillars
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About the Council
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            The CSE Technical Council is the official technical innovation club of the Department of CSE and Allied Branches at JSS University, Noida. It helps students explore emerging technologies beyond the classroom, develop practical skills, and transform ideas into meaningful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/50 p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-black/40 ${pillar.hoverBorder}`}
            >
              {/* Top gradient highlight strip */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              {/* Ambient radial blur on hover */}
              <div 
                aria-hidden="true" 
                className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${pillar.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
              />

              <div>
                {/* Top row: Icon + Step Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className={`flex h-13 w-13 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${pillar.iconBg}`}>
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-bold tracking-wider uppercase ${pillar.accentPill}`}>
                    {pillar.step} &bull; {pillar.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {pillar.description}
                </p>

                {/* Focus Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/80">
                  <ul className="space-y-2.5">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
