import Link from "next/link";
import { ArrowRight, Layers, Bot, Terminal, Palette, BookOpenCheck, CheckCircle2 } from "lucide-react";

export function ThreeCells() {
  const cellCards = [
    {
      id: "aic",
      step: "01",
      tag: "AI & ML",
      name: "AI Innovation Cell (AIC)",
      subtitle: "Machine Learning & Automation",
      description:
        "Practical exploration in AI, Machine Learning, Generative AI, and Automation — turning emerging tools into real solutions.",
      highlights: [
        "Generative AI & LLM Workshops",
        "Computer Vision & RAG Pipelines",
        "Autonomous Agent Engineering",
      ],
      icon: Bot,
      gradient: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
      accentPill: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/80",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/60",
      href: "/cells/aic",
    },
    {
      id: "cpc",
      step: "02",
      tag: "ALGORITHMS",
      name: "Competitive Programming Cell (CPC)",
      subtitle: "DSA & Contest Preparation",
      description:
        "Builds coding fundamentals and problem-solving skills through DSA practice, contests, and interview prep.",
      highlights: [
        "Weekly DSA & Contest Sprints",
        "HackerRank & Codeforces Ladders",
        "Technical Interview Masterclasses",
      ],
      icon: Terminal,
      gradient: "from-emerald-600 to-teal-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-800/60",
      accentPill: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/80",
      hoverBorder: "hover:border-emerald-400/80 dark:hover:border-emerald-500/60",
      href: "/cells/cpc",
    },
    {
      id: "dct",
      step: "03",
      tag: "CREATIVE & UI/UX",
      name: "Design & Creativity Team (DCT)",
      subtitle: "UI/UX & Visual Media",
      description:
        "Builds the Council's digital and visual identity through UI/UX design, web development, graphic design, and creative assets.",
      highlights: [
        "UI/UX Design & Prototyping",
        "Web & Frontend Development",
        "Brand Identity & Event Media",
      ],
      icon: Palette,
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200/80 dark:border-amber-800/60",
      accentPill: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-800/80",
      hoverBorder: "hover:border-amber-400/80 dark:hover:border-amber-500/60",
      href: "/cells/dct",
    },
    {
      id: "rac",
      step: "04",
      tag: "RESEARCH",
      name: "Research Activity Cell (RAC)",
      subtitle: "Publications & Deep Tech",
      description:
        "Grows a research-driven culture — methodology, technical writing, publications, and student-led projects.",
      highlights: [
        "IEEE / Scopus Paper Guidance",
        "Research Methodology Cohorts",
        "Extended Reality & Emerging Tech",
      ],
      icon: BookOpenCheck,
      gradient: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/80 dark:border-purple-800/60",
      accentPill: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/60 dark:border-purple-800/80",
      hoverBorder: "hover:border-purple-400/80 dark:hover:border-purple-500/60",
      href: "/cells/rac",
    },
  ];

  return (
    <section id="cells" className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80 relative dark:bg-slate-900/50 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Layers className="h-3.5 w-3.5" /> Core Structure
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Four Specialized Wings. One Council.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Focused student cells and teams dedicated to driving high-impact technical initiatives across the department.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cellCards.map((cell) => (
            <div 
              key={cell.id} 
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-black/40 ${cell.hoverBorder}`}
            >
              {/* Top gradient highlight strip */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cell.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              {/* Ambient radial blur on hover */}
              <div 
                aria-hidden="true" 
                className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${cell.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20`}
              />

              <div>
                {/* Top row: Icon + Step Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${cell.iconBg}`}>
                    <cell.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase ${cell.accentPill}`}>
                    {cell.step} &bull; {cell.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cell.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {cell.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {cell.description}
                </p>

                {/* Focus Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                  <ul className="space-y-2">
                    {cell.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Bottom Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                <Link 
                  href={cell.href}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
                >
                  Explore {cell.id.toUpperCase()} 
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
