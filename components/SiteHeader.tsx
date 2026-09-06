import Link from "next/link";

/**
 * Minimal sticky header matching the site design language: wordmark left, nav
 * centred, filled CTA right. Height is 4rem (h-16) - the events filter bar
 * sticks at `top-16` to sit directly beneath it.
 *
 * No logo image is used yet; the wordmark is text. Swap in the official mark
 * when the asset is supplied.
 */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-gray-900 sm:text-base"
        >
          CSE <span className="text-indigo-600">Technical Council</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Official WhatsApp community link not yet supplied - CTA stays
            disabled until it is. See WHATSAPP_INVITE_URL in data/events.ts. */}
        <button
          type="button"
          disabled
          title="Join link coming soon"
          className="cursor-not-allowed rounded-full bg-indigo-600/50 px-4 py-2 text-sm font-semibold text-white"
        >
          Join Us
        </button>
      </div>
    </header>
  );
}
