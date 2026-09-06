import { impactStats } from "@/lib/content/stats";
import { TrendingUp } from "lucide-react";

export function ImpactAchievements() {
  return (
    <section className="bg-slate-50/80 border-y border-slate-200/80 py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4">
            <TrendingUp className="h-3.5 w-3.5" /> Historical Milestones
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
            Impact in Action
          </h2>
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-wider text-slate-500 font-semibold">
            Reported activity — first academic year
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{stat.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
