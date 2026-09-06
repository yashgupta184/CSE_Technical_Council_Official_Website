import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8 tech-grid-light">
      <div className="max-w-md w-full text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-6">
          <Compass className="h-3.5 w-3.5" /> 404 &middot; Page Under Construction
        </div>

        {/* 404 Huge Number */}
        <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-slate-900 mb-2">
          4<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">0</span>4
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
          Page Not Found
        </h2>

        {/* Friendly explanation */}
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          This route is currently under active development by the team or does not exist. Please head back to the council homepage.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all"
          >
            <Home className="h-4 w-4" /> Back to Homepage
          </Link>
          <Link
            href="/#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Explore Council
          </Link>
        </div>
      </div>
    </div>
  );
}
