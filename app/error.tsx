"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8 tech-grid-light">
      <div className="max-w-md w-full text-center">
        {/* Warning Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 border border-red-100 shadow-sm">
          <AlertTriangle className="h-8 w-8" />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          An unexpected error occurred while loading this section. You can try refreshing or returning home.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <Home className="h-4 w-4" /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
