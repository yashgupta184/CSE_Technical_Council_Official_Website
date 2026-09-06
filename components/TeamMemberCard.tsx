import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/team";
import { LinkedInIcon, InstagramIcon, MailIcon, GithubIcon, ArrowUpRight } from "./Icons";

interface TeamMemberCardProps {
  member: TeamMember;
  featured?: boolean;
}

export function TeamMemberCard({ member, featured = false }: TeamMemberCardProps) {
  const { name, role, cell, quote, image, socials } = member;

  const cellBadgeColors: Record<string, { badge: string; pill: string; border: string }> = {
    AIC: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      pill: "bg-blue-600",
      border: "hover:border-blue-300",
    },
    RAC: {
      badge: "bg-purple-50 text-purple-700 border-purple-200",
      pill: "bg-purple-600",
      border: "hover:border-purple-300",
    },
    CPC: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      pill: "bg-emerald-600",
      border: "hover:border-emerald-300",
    },
    CORE: {
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      pill: "bg-amber-600",
      border: "hover:border-amber-300",
    },
  };

  const styleConfig = cellBadgeColors[cell] || {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    pill: "bg-slate-800",
    border: "hover:border-slate-300",
  };

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 ${
        styleConfig.border
      } ${featured ? "md:p-6 ring-1 ring-slate-200/50" : ""}`}
    >
      {/* Top Header info */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 font-mono text-[11px] font-semibold">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] ${styleConfig.badge}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${styleConfig.pill}`} />
          {cell} CELL
        </span>
        <span className="text-slate-400 font-normal">{member.id}</span>
      </div>

      {/* Image container with 100xSchool rounded border */}
      <div className="relative my-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/70">
        {image && !image.includes("placeholder") ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Sleek 100xSchool style Monogram Graphic */
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-6 text-center select-none">
            <div className="absolute inset-0 bg-dot-pattern opacity-60" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl font-black font-sans text-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600">
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

        {/* Hover Motivation Quote overlay (100xSchool style backdrop) */}
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
          <h3 className="font-sans text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="font-sans text-xs font-medium text-slate-500 mt-0.5">
            {role}
          </p>
        </div>

        {/* Social Links Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target={socials.linkedin.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            )}
            {socials.email && (
              <a
                href={socials.email.startsWith("mailto:") ? socials.email : `mailto:${socials.email}`}
                aria-label={`Email ${name}`}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
          <span className="font-mono text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors inline-flex items-center gap-0.5">
            CONNECT <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
