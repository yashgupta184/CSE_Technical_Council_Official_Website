import React from "react";
import Link from "next/link";
import { LinkedInIcon, InstagramIcon, MailIcon, TerminalIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand & Council Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <TerminalIcon className="h-4 w-4" />
              </div>
              <span className="font-sans text-sm font-black tracking-tight text-slate-900">
                CSE Technical Council
              </span>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-500 font-medium">
              Department of Computer Science & Engineering
              <br />
              JSS University, Noida (UP), India.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-600">
              <span className="font-semibold text-blue-600">[COORD // DR. DHIRAJ PANDEY]</span>
              <span>&bull;</span>
              <span>[SESSION 2025&ndash;2026]</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sans text-xs font-bold tracking-wider text-slate-900 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/" className="transition-colors hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-600 font-semibold">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/#cells" className="transition-colors hover:text-blue-600">
                  Three Cells
                </Link>
              </li>
              <li>
                <Link href="/events" className="transition-colors hover:text-blue-600">
                  Council Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Three Cells */}
          <div className="space-y-3">
            <h4 className="font-sans text-xs font-bold tracking-wider text-slate-900 uppercase">
              Council Cells
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/cells/aic"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
                >
                  <span className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-600">
                    01
                  </span>
                  AIC &mdash; Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/cells/rac"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-purple-600"
                >
                  <span className="rounded bg-purple-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-purple-600">
                    02
                  </span>
                  RAC &mdash; Research
                </Link>
              </li>
              <li>
                <Link
                  href="/cells/cpc"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-emerald-600"
                >
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-600">
                    03
                  </span>
                  CPC &mdash; Competitive Prog.
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Socials and Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CSE Technical Council &bull; JSS University, Noida. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-pink-600"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@ctcjss.in"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-blue-600"
              aria-label="Email"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
