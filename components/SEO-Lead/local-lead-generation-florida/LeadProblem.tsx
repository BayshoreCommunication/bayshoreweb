"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// =============================================================================
// ICONS (Large, bold, crisp 1:1 match with user screenshot)
// =============================================================================

/** 01. Users / Audience Group icon (3-person silhouette in coral orange) */
function UsersGroupIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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

/** 02. Angled Phone with solid orange circle badge and white X */
function PhoneUntrackedIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Angled telephone handset in coral orange */}
      <path
        d="M6.8 5.4c.7-.7 1.8-.9 2.7-.6.9.3 1.5.9 1.9 1.7l1.1 2.5c.4 1 .2 2.2-.5 3l-1.2 1.2c1.3 2.5 3.3 4.5 5.8 5.8l1.2-1.2c.8-.7 2-.9 3-.5l2.5 1.1c.8.4 1.4 1 1.7 1.9.3.9.1 2-.6 2.7l-1.6 1.6c-1.1 1.1-2.7 1.5-4.2 1.2-4.2-.8-8.1-3.2-11.2-6.3S3.6 13.8 2.8 9.6c-.3-1.5.1-3.1 1.2-4.2L6.8 5.4z"
        fill="currentColor"
      />
      {/* Solid orange circular badge in upper crook */}
      <circle cx="21" cy="7" r="4.8" fill="#FF5528" />
      {/* Crisp white X inside badge */}
      <path
        d="M19.2 5.2l3.6 3.6M22.8 5.2l-3.6 3.6"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 03. Outlined Funnel / Filter icon */
function FunnelFilterIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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
      <path d="M4 6h20c.6 0 1 .6.8 1.1L16.5 16v6.2c0 .5-.4.9-.9.9h-3.2c-.5 0-.9-.4-.9-.9V16L3.2 7.1c-.2-.5.2-1.1.8-1.1z" />
    </svg>
  );
}

/** 04. Ascending 3 Outlined Bars icon (short, medium, tall on shared baseline) */
function BarChart3Icon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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
      {/* Bar 1 (Shortest) */}
      <rect x="4" y="16" width="5.2" height="7.5" rx="1.4" />
      {/* Bar 2 (Medium) */}
      <rect x="11.4" y="11" width="5.2" height="12.5" rx="1.4" />
      {/* Bar 3 (Tallest) */}
      <rect x="18.8" y="5.5" width="5.2" height="18" rx="1.4" />
    </svg>
  );
}

// =============================================================================
// PROBLEMS DATA
// =============================================================================
const PROBLEMS = [
  {
    step: "01",
    icon: UsersGroupIcon,
    line1: "Ads reaching people outside",
    line2: "your service counties",
  },
  {
    step: "02",
    icon: PhoneUntrackedIcon,
    line1: "No tracking back from",
    line2: "lead to signed case",
  },
  {
    step: "03",
    icon: FunnelFilterIcon,
    line1: "Intake teams buried in",
    line2: "unqualified calls",
  },
  {
    step: "04",
    icon: BarChart3Icon,
    line1: "Rankings that don’t hold",
    line2: "in your actual metro",
  },
];

export default function LeadProblem() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* ===================================================================
              LEFT COLUMN: HEADLINE, COPY & CTAS
              =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px]  tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic  mr-1">II.</span> THE PROBLEM
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair mt-5 text-[34px] sm:text-[42px] md:text-[48px] lg:text-[48px] xl:text-[54px]  leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
              Most firms don’t have
              <br />
              a lead problem. They
              <br />
              have a lead{" "}
              <span className="italic font-normal text-[#FF5528]">quality</span>
              <br />
              problem.
            </h2>

            {/* Paragraph Text */}
            <p className="font-instrument mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#4A5568] max-w-[520px]">
              You&apos;re running ads. You&apos;re showing up on Google. Leads are
              coming in. But too many are outside your practice area, outside
              Florida, or gone cold before intake calls back. That&apos;s not a
              budget problem — it&apos;s a targeting, tracking, and follow-up
              problem.
            </p>

            {/* CTAs Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Primary Button */}
              <Link
                href="#lead-audit"
                className="group inline-flex h-[50px] sm:h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#FF5528] px-6 sm:px-7 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.25)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Fix Your Lead Quality</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary Link */}
              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-2 text-[14px] sm:text-[15px]  text-[#0A192F] underline underline-offset-[6px] decoration-[#0A192F] hover:text-[#FF5528] hover:decoration-[#FF5528] transition-all duration-200"
              >
                <span>See How It Works</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-[#0A192F] group-hover:text-[#FF5528]"
                />
              </Link>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: TIMELINE TRACK + 4 PROBLEMS CARDS (Spacious Padding + Big Icons)
              =================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative">
              {/* Continuous vertical timeline connector line (lomba bar connected with dots) */}
              <div
                className="absolute left-[7px] sm:left-[9px] -top-8 -bottom-8 w-[2px] bg-[#FF937B] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Stack of 4 cards with timeline dots and numbers */}
              <div className="flex flex-col gap-5 sm:gap-6">
                {PROBLEMS.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={problem.step}
                      className="group relative flex items-center gap-3 sm:gap-6 lg:gap-8"
                    >
                      {/* Timeline Dot + Number indicator */}
                      <div className="relative flex items-center shrink-0 z-10 w-12 sm:w-16">
                        {/* Dot centered exactly on the vertical bar */}
                        <div className="absolute left-[8px] sm:left-[10px] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#FF5528]" />
                        
                        {/* Step Number (01, 02, etc.) */}
                        <span className="font-mono text-[14px] sm:text-[17px] text-[#FF5528] ml-6 sm:ml-8 tracking-tight">
                          {problem.step}
                        </span>
                      </div>

                      {/* Card Box with Generous Padding */}
                      <div className="flex-1 flex items-center gap-5 sm:gap-7 lg:gap-8 rounded-[22px] sm:rounded-[26px] border border-[#E5E9F2] bg-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 lg:py-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5528]/40 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                        {/* Bigger Circle Icon Badge */}
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-[84px] md:w-[84px] lg:h-[88px] lg:w-[88px] shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12" />
                        </div>

                        {/* Title Text in Playfair Serif with Exact 2-Line Layout */}
                        <h3 className="font-playfair text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[23px]  leading-[1.3] text-[#0A192F] tracking-[-0.01em]">
                          <span className="block">{problem.line1}</span>
                          <span className="block">{problem.line2}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
