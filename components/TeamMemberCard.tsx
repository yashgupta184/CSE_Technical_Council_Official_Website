"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { TeamMember } from "@/data/team";
import { LinkedInIcon, InstagramIcon, MailIcon, GithubIcon, ArrowUpRight, ArrowRight } from "./Icons";

interface TeamMemberCardProps {
  member: TeamMember;
  featured?: boolean;
  cellLink?: string;
  cellActionLabel?: string;
}

export function TeamMemberCard({
  member,
  featured = false,
  cellLink,
  cellActionLabel,
}: TeamMemberCardProps) {
  const { name, role, cell, quote, image, socials } = member;

  const cellBadgeColors: Record<string, { badge: string; pill: string; border: string }> = {
    AIC: {
      badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-900/50",
      pill: "bg-blue-600",
      border: "hover:border-blue-300 dark:hover:border-blue-600",
    },
    RAC: {
      badge: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900/50",
      pill: "bg-purple-600",
      border: "hover:border-purple-300 dark:hover:border-purple-600",
    },
    CPC: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-900/50",
      pill: "bg-emerald-600",
      border: "hover:border-emerald-300 dark:hover:border-emerald-600",
    },
    CORE: {
      badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-900/50",
      pill: "bg-amber-600",
      border: "hover:border-amber-300 dark:hover:border-amber-600",
    },
  };

  const styleConfig = cellBadgeColors[cell] || {
    badge: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    pill: "bg-slate-800",
    border: "hover:border-slate-300 dark:hover:border-slate-600",
  };

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-black/60 ${
        styleConfig.border
      } ${featured ? "md:p-6 ring-1 ring-slate-200/50 dark:ring-slate-800" : ""}`}
    >
      {/* Top Header info */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 font-mono text-[11px] font-semibold dark:border-slate-800/80">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] ${styleConfig.badge}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${styleConfig.pill}`} />
          {cell} CELL
        </span>
        <span className="text-slate-400 font-normal">{member.id}</span>
      </div>

      {/* Image container with 100xSchool rounded border */}
      <div className="relative my-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/70 dark:bg-slate-800 dark:border-slate-700/80">
        {image && !image.includes("placeholder") ? (
          image.startsWith("http") || image.startsWith("/") ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <CldImage
              src={image}
              alt={name}
              fill
              crop="fill"
              gravity="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          /* Sleek 100xSchool style Monogram Graphic */
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-6 text-center select-none dark:from-slate-800 dark:to-slate-900">
            <div className="absolute inset-0 bg-dot-pattern opacity-60" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl font-black font-sans text-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:group-hover:text-blue-400">
              {name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("") || "CTC"}
            </div>
            <span className="relative mt-3 font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              {"//"} {cell} PROFILE
            </span>
          </div>
        )}

        {/* Hover Motivation Quote overlay */}
        {quote && (
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1">
              {"//"} PERSPECTIVE
            </span>
            <p className="text-xs italic text-slate-100 leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Profile Details */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-sans text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400">
            {name}
          </h3>
          <p className="font-sans text-xs font-medium text-slate-500 mt-0.5 dark:text-slate-400">
            {role}
          </p>
        </div>

        {/* Action button to dedicated cell if cellLink is provided */}
        {cellLink && (
          <div className="mt-4 pt-2">
            <Link
              href={cellLink}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-blue-300 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-600"
            >
              <span>{cellActionLabel || `Explore ${cell} Cell`}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* Social Links Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target={socials.linkedin.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            )}
            {socials.email && (
              <a
                href={socials.email.startsWith("mailto:") ? socials.email : `mailto:${socials.email}`}
                aria-label={`Email ${name}`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                target={socials.instagram.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${name}'s Instagram`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-pink-600 dark:hover:bg-slate-800 dark:hover:text-pink-400"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target={socials.github.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${name}'s GitHub`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
          {cellLink ? (
            <Link
              href={cellLink}
              className="font-mono text-[10px] font-bold text-blue-600 hover:underline inline-flex items-center gap-0.5 dark:text-blue-400"
            >
              CELL VIEW <ArrowUpRight className="h-3 w-3" />
            </Link>
          ) : (
            <span className="font-mono text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors inline-flex items-center gap-0.5 dark:group-hover:text-blue-400">
              CTC &bull; {cell}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
