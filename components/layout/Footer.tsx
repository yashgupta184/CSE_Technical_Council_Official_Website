import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2.5">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-600 leading-relaxed">
              Official Technical Council &middot; Department of CSE & Allied Branches &middot; JSS University, Noida
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/events" className="hover:text-blue-600 transition-colors">Events</Link></li>
              <li><Link href="/cells" className="hover:text-blue-600 transition-colors">Cells</Link></li>
              <li><Link href="/team" className="hover:text-blue-600 transition-colors">Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Cells</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/cells/aic" className="hover:text-blue-600 transition-colors">AI Innovation Cell (AIC)</Link></li>
              <li><Link href="/cells/rac" className="hover:text-blue-600 transition-colors">Research Activity Cell (RAC)</Link></li>
              <li><Link href="/cells/cpc" className="hover:text-blue-600 transition-colors">Competitive Programming Cell (CPC)</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row text-xs text-slate-500">
          <p>&copy; 2026 {siteConfig.name} &middot; JSS University, Noida. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={siteConfig.links.instagram} className="hover:text-slate-900 transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={siteConfig.links.linkedin} className="hover:text-slate-900 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={siteConfig.links.email} className="hover:text-slate-900 transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
