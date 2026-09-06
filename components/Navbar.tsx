"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon, ArrowUpRight } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Three Cells", href: "/#cells" },
    { label: "Team", href: "/team" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/90 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md transition-all sm:px-6">
        {/* Brand / Logo (100xSchool style: bold dark brand with vibrant blue badge) */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-slate-200/90 bg-white shadow-xs flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/hero-logo.png"
              alt="CSE Technical Council Logo"
              width={36}
              height={36}
              className="h-full w-full object-cover scale-[1.05]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-sm font-black tracking-tight text-slate-900">
                CSE Technical Council
              </span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-600 border border-blue-100">
                CTC
              </span>
            </div>
            <span className="font-sans text-[11px] text-slate-500 font-medium">
              JSS University, Noida
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full bg-slate-100/70 p-1 border border-slate-200/60 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Live Status */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-wider">
              2025&ndash;2026
            </span>
          </div>
          <a
            href="#join"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span>Join Council</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <a
                href="#join"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25"
              >
                <span>Join Council</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
