"use client";

import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

// =============================================================================
// ICONS (1:1 Exact Match with the User's Screenshot)
// =============================================================================

/** 01. Search / Magnifying Glass Icon (Visibility) */
function SearchIcon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7.5" />
      <line x1="17.5" y1="17.5" x2="23" y2="23" />
    </svg>
  );
}

/** 02. Ascending 3 Outlined Bars Icon (Conversion) */
function BarChart3Icon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="16" width="5.2" height="7.5" rx="1.4" />
      <rect x="11.4" y="11" width="5.2" height="12.5" rx="1.4" />
      <rect x="18.8" y="5.5" width="5.2" height="18" rx="1.4" />
    </svg>
  );
}

/** 03. Users Group Silhouette Icon (Follow-Through) */
function UsersGroupIcon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Center Person */}
      <circle cx="14" cy="8.8" r="3.4" />
      <path d="M14 13.8c-3.3 0-5.9 2-5.9 4.6v1.2h11.8v-1.2c0-2.6-2.6-4.6-5.8-4.6z" />
      {/* Left Person */}
      <circle cx="7.2" cy="10.8" r="2.6" />
      <path d="M7.2 15c-1.9 0-3.6 1.2-4.2 2.9v1.7h3.8v-1.3c0-1.3.4-2.4 1.1-3.2-.2-.1-.5-.1-.7-.1z" />
      {/* Right Person */}
      <circle cx="20.8" cy="10.8" r="2.6" />
      <path d="M20.8 15c-.2 0-.5 0-.7.1.7.8 1.1 1.9 1.1 3.2v1.3h3.8v-1.7c-.6-1.7-2.3-2.9-4.2-2.9z" />
    </svg>
  );
}

// =============================================================================
// PILLARS DATA
// =============================================================================
const PILLARS = [
  {
    step: "01",
    title: "Visibility",
    icon: SearchIcon,
    description:
      "Show up where Florida clients are already searching — organic, local map pack, and paid — in your specific metro and practice area.",
  },
  {
    step: "02",
    title: "Conversion",
    icon: BarChart3Icon,
    description:
      "Turn visitors into calls and form fills with landing pages and messaging built around case value, not generic marketing copy.",
  },
  {
    step: "03",
    title: "Follow-Through",
    icon: UsersGroupIcon,
    description:
      "Turn calls into signed clients with tracking, fast follow-up, and nurture sequences so no lead goes cold.",
  },
];

export default function TheSolution() {
  return (
    <section className="relative w-full bg-[#F3F4F7] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">

          {/* ===================================================================
              LEFT COLUMN: HEADLINE, COPY & ACCENT LINE
              =================================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">III.</span> THE SOLUTION
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair mt-5 text-[34px] sm:text-[42px] md:text-[48px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
              Three pillars.
              <br />
              One pipeline.
            </h2>

            {/* Paragraph Text */}
            <p className="font-instrument mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#4A5568] max-w-[440px]">
              We don&apos;t sell isolated tactics. Every campaign is built across
              three connected pillars, so visibility actually turns into signed
              clients instead of stalling out at the click.
            </p>

            {/* Orange Horizontal Accent Line */}
            <div
              className="mt-6 sm:mt-8 h-[3.5px] w-12 rounded-full bg-[#FF5528]"
              aria-hidden="true"
            />
          </div>

          {/* ===================================================================
              RIGHT COLUMN: 3 PILLAR CARDS WITH CONNECTING ARROWS
              =================================================================== */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="relative flex flex-col md:flex-row items-center gap-4 lg:gap-3 xl:gap-4">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isLast = idx === PILLARS.length - 1;

                return (
                  <React.Fragment key={pillar.step}>
                    {/* Pillar Card */}
                    <div className="flex-1 w-full bg-white rounded-[22px] sm:rounded-[24px] border border-[#E5E9F2] p-6 sm:p-7 lg:p-7 xl:p-8 shadow-[0_6px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)] flex flex-col min-h-[380px] sm:min-h-[400px]">
                      
                      {/* Top Row: Icon on Left, Faint Elegant Italic Number on Right */}
                      <div className="flex items-center justify-between">
                        {/* Circle Icon Badge */}
                        <div className="flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-[#FF5528]" />
                        </div>

                        {/* Faint Italic Serif Number (01, 02, 03) */}
                        <span className="font-playfair italic text-[40px] sm:text-[46px] lg:text-[48px] text-[#CBD5E1]/90 leading-none select-none tracking-tight">
                          {pillar.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair mt-7 text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0A192F] leading-tight">
                        {pillar.title}
                      </h3>

                      {/* Small Orange Underline Accent Bar */}
                      <div
                        className="mt-3 mb-4 h-[2.5px] w-8 rounded-full bg-[#FF5528]"
                        aria-hidden="true"
                      />

                      {/* Description */}
                      <p className="font-instrument text-[14px] sm:text-[14.5px] leading-[1.68] text-[#556377]">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Connecting Arrow between cards */}
                    {!isLast && (
                      <div className="shrink-0 flex items-center justify-center my-1 md:my-0">
                        {/* Horizontal Arrow on Tablet/Desktop (md+) */}
                        <div className="hidden md:flex h-9 w-9 xl:h-10 xl:w-10 rounded-full bg-white border border-[#E5E9F2] shadow-sm items-center justify-center text-[#FF5528] z-10">
                          <ArrowRight size={17} strokeWidth={2.4} />
                        </div>

                        {/* Vertical Arrow on Mobile (< md) */}
                        <div className="flex md:hidden h-8 w-8 rounded-full bg-white border border-[#E5E9F2] shadow-sm items-center justify-center text-[#FF5528] z-10">
                          <ArrowDown size={16} strokeWidth={2.4} />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
