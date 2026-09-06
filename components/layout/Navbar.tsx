"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navItems } from "@/lib/content/site-config";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-lg tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-3 group dark:text-white dark:hover:text-blue-400">
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-slate-200/90 dark:ring-slate-700/80 shadow-xs flex-shrink-0 bg-white dark:bg-slate-900">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={36}
              height={36}
              className="h-full w-full object-cover scale-[1.05] transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item, i) => (
            <div key={i} className="relative">
              {item.items ? (
                <div
                  ref={dropdownRef}
                  className="relative py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className="p-1 text-slate-400 hover:text-blue-600 transition-colors dark:text-slate-500 dark:hover:text-blue-400"
                      aria-label="Toggle dropdown"
                      aria-expanded={dropdownOpen}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen
                            ? "rotate-180 text-blue-600 dark:text-blue-400"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Menu with continuous hover bridge */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-1 z-50 w-56">
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:ring-white/10">
                        {item.items.map((subItem, j) => (
                          <Link
                            key={j}
                            href={subItem.href}
                            className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* Theme Toggle Button */}
          <ThemeToggle />

          <Link
            href={siteConfig.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 dark:border-slate-800 dark:bg-slate-950">
          {navItems.map((item, i) => (
            <div key={i}>
              {item.items ? (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                  <div className="pl-4 space-y-2 border-l border-slate-200 dark:border-slate-800">
                    {item.items.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors text-sm dark:text-slate-300 dark:hover:text-blue-400"
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
                  className="block font-medium text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-200 dark:hover:text-blue-400"
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
              target="_blank"
              rel="noopener noreferrer"
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

