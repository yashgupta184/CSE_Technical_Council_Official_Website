import { galleryImages } from "@/lib/content/gallery";
import { Camera } from "lucide-react";

export function MomentsGallery() {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4">
            <Camera className="h-3.5 w-3.5" /> Campus Activities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Moments from the Council.
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Workshops, technical hackathons, and collaborative student sessions
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm aspect-auto group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium text-white">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

