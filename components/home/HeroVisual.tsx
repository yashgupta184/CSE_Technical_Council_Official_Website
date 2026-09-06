import Image from "next/image";
import { Sparkles } from "lucide-react";
import { heroMedia } from "@/lib/content/hero-media";

/**
 * Right-hand column of the hero. Renders the official council emblem with
 * interactive hover animations, orbital rings, micro-badges, and glassmorphism.
 * If a video is configured, it renders the video instead.
 */
export function HeroVisual() {
  const { video, image } = heroMedia;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Offset accent panel behind the frame for dynamic depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2.5 sm:-inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-indigo-100/40 to-transparent blur-xl dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-transparent"
      />

      <div className="group relative aspect-[4/3] max-h-[380px] sm:max-h-[410px] w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/95 via-white to-blue-50/40 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900/95 dark:via-slate-950 dark:to-slate-900 dark:shadow-black/50 transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-700">
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-label={video.description}
          />
        ) : (
          /* Official Council Seal & Interactive Canvas */
          <div className="relative h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
            {/* Ambient radiant background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-60 sm:w-60 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-400/20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
            />

            {/* Rotating orbital dashed ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-52 w-52 sm:h-64 sm:w-64 rounded-full border border-dashed border-blue-400/30 dark:border-blue-500/30 transition-transform duration-1000 ease-out group-hover:rotate-90 group-hover:scale-105"
            />

            {/* Secondary solid concentric ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-76 sm:w-76 rounded-full border border-blue-200/40 dark:border-blue-800/30 transition-all duration-700 group-hover:scale-105"
            />

            {/* Top Micro-Badges */}
            <div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5 z-20 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-blue-700 shadow-xs backdrop-blur-md dark:border-blue-800/80 dark:bg-blue-950/70 dark:text-blue-300">
                <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                OFFICIAL INITIATIVE
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-slate-700 shadow-xs backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                ACTIVE
              </span>
            </div>

            {/* Central Animated Logo */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/30 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2 group-hover:ring-blue-500/50 group-hover:shadow-[0_20px_45px_rgba(37,99,235,0.45)]">
                <Image
                  src={image?.src || "/hero-logo.png"}
                  alt={image?.alt || "CSE Technical Council Official Emblem"}
                  width={image?.width || 1024}
                  height={image?.height || 1024}
                  priority
                  className="h-full w-full object-cover scale-[1.05] pointer-events-none"
                />
              </div>
            </div>

            {/* Bottom Glass Pill Bar */}
            <div className="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 z-20 flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-300 transition-all duration-300 group-hover:border-blue-300/80 dark:group-hover:border-blue-700/80">
              <span className="truncate">JSS University, Noida</span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Learn &bull; Build &bull; Lead
              </span>
            </div>

            {/* Sweeping Hover Light Reflection Shimmer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -rotate-45 group-hover:translate-x-full transition-transform duration-1000 ease-out"
            />
          </div>
        )}
      </div>
    </div>
  );
}
