import Link from "next/link";
import { teamPreview } from "@/lib/content/team-preview";
import { ArrowRight, User, Users } from "lucide-react";

export function TeamPreview() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/80 border-t border-slate-200/80 relative dark:bg-slate-900/50 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Users className="h-3.5 w-3.5" /> Leadership
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            The People Behind the Council.
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamPreview.map((member, i) => (
              <li 
                key={i} 
                className="flex flex-col rounded-2xl bg-white text-center border border-slate-200/80 hover:border-blue-400 transition-all hover:-translate-y-1 hover:shadow-md p-8 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500/50"
              >
                <div className="mx-auto h-28 w-28 flex-shrink-0 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 overflow-hidden shadow-inner dark:bg-blue-950/60 dark:border-blue-900/60 dark:text-blue-400">
                  {member.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="h-full w-full object-cover" src={member.image} alt={member.name} />
                  ) : (
                    <User className="h-12 w-12 text-blue-600/80 dark:text-blue-400" />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white tracking-tight">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="/team" 
            className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300 transition-all flex items-center gap-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
          >
            Meet the Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

