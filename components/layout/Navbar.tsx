"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navItems } from "@/lib/content/site-config";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-lg tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2.5 group">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <div key={i} className="relative group">
              {item.items ? (
                <div
                  className="flex items-center gap-1 cursor-pointer text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onKeyDown={(e) => e.key === "Enter" && setDropdownOpen(!dropdownOpen)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={dropdownOpen}
                >
                  {item.title} <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform" />
                  
                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                      {item.items.map((subItem, j) => (
                        <Link
                          key={j}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link
            href={siteConfig.joinUrl}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4">
          {navItems.map((item, i) => (
            <div key={i}>
              {item.items ? (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="pl-4 space-y-2 border-l border-slate-200">
                    {item.items.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href={siteConfig.joinUrl}
              className="block w-full text-center rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

