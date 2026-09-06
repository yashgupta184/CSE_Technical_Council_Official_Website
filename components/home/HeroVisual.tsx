import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { heroMedia } from "@/lib/content/hero-media";

/**
 * Right-hand column of the hero. Renders the configured reel or photograph, and
 * a neutral empty frame while neither exists. Nothing decorative stands in for
 * the missing media — the frame reads as a deliberate slot.
 *
 * Swap the media in via lib/content/hero-media.ts; no change needed here.
 */
export function HeroVisual() {
  const { video, image, placeholderLabel } = heroMedia;

  return (
    <div className="relative">
      {/* Offset accent panel behind the frame, gives the column depth without
          adding imagery. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-blue-100/70 via-indigo-50/50 to-transparent"
      />

      <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/5 sm:aspect-3/4 lg:aspect-4/5">
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            // Decorative-but-informative: the description is exposed as a label
            // so screen reader users know what the footage shows.
            aria-label={video.description}
          />
        ) : image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="h-full w-full object-cover"
          />
        ) : (
          /* Empty media slot — replace by setting `video` or `image` in
             lib/content/hero-media.ts */
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-slate-300 text-slate-400"
            aria-hidden="true"
          >
            <ImageIcon className="h-9 w-9" />
            <span className="max-w-[14rem] px-6 text-center text-[11px] font-semibold tracking-widest uppercase">
              {placeholderLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
