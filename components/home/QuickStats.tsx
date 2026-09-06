import { quickStats } from "@/lib/content/stats";

export function QuickStats() {
  return (
    <section className="bg-slate-50/80 border-y border-slate-200/80 py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-10">
            Official Technical Council &middot; CSE Department &middot; JSS University, Noida
          </p>
          
          <dl className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {quickStats.map((stat) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
              >
                <dd className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
