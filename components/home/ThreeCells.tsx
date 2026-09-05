import Link from "next/link";
import { cells } from "@/lib/content/cells";
import { ArrowRight, Layers } from "lucide-react";

export function ThreeCells() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4">
            <Layers className="h-3.5 w-3.5" /> Core Structure
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Three Cells. One Council.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cells.map((cell) => (
            <div 
              key={cell.id} 
              className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-8 transition-all hover:border-blue-400 hover:-translate-y-1 hover:shadow-md group"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                  {cell.id}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3 group-hover:text-blue-600 transition-colors">
                  {cell.name}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {cell.shortDescription}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link 
                  href={cell.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  Explore {cell.id.toUpperCase()} 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
