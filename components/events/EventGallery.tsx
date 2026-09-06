import { MediaPlaceholder } from "./MediaPlaceholder";

const PLACEHOLDER_SLOTS = 6;

export function EventGallery({
  images,
  eventTitle,
}: {
  images: string[];
  eventTitle: string;
}) {
  /* Replace with actual event photographs - add paths to `images[]` in
     data/events.ts and this grid renders them automatically. */
  const slots: (string | null)[] =
    images.length > 0 ? images : Array.from({ length: PLACEHOLDER_SLOTS }, () => null);

  return (
    <section aria-labelledby="event-gallery">
      <h2
        id="event-gallery"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Gallery
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {slots.map((src, index) => (
          <MediaPlaceholder
            key={src ?? `slot-${index}`}
            src={src}
            alt={`${eventTitle} - photograph ${index + 1}`}
            className="aspect-square rounded-xl"
            label="Photo slot"
            sizes="(min-width: 640px) 33vw, 50vw"
          />
        ))}
      </div>
      {images.length === 0 ? (
        <p className="mt-3 text-xs text-gray-500">
          Official event photographs will be published here once available.
        </p>
      ) : null}
    </section>
  );
}
