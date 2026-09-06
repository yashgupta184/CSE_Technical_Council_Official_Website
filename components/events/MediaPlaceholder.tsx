import Image from "next/image";
import { ImagePlaceholderIcon } from "./icons";

type MediaPlaceholderProps = {
  /** Real photograph path once supplied, otherwise null. */
  src: string | null;
  /** Descriptive alt text used only when a real image is present. */
  alt: string;
  /** Aspect / height utilities for the outer container. */
  className?: string;
  /** Short caption shown inside the empty slot, e.g. "Event photo". */
  label?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders an event photograph when one exists, and a neutral empty slot when it
 * does not. No stock or generated imagery is ever substituted - the slot stays
 * visibly empty until an official photo is dropped into the event data.
 */
export function MediaPlaceholder({
  src,
  alt,
  className = "aspect-video",
  label = "Photo to be added",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  priority = false,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-100 ${className}`}
      data-media-slot={src ? "filled" : "empty"}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        /* Placeholder slot - replace by setting `image` / `images` in data/events.ts */
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-gray-200 text-gray-400"
          aria-hidden
        >
          <ImagePlaceholderIcon className="h-7 w-7" />
          <span className="px-3 text-center text-[11px] font-medium tracking-wide uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
