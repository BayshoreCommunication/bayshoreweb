"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Gavel,
  Car,
  Shield,
  HardHat,
  Home,
  Users,
  MessageSquare,
} from "lucide-react";

// =============================================================================
// CUSTOM ICONS (For exact matching with user screenshot)
// =============================================================================

/** Immigration Law: Document with globe inside */
function ImmigrationDocIcon({ className = "w-6 h-6 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="12" cy="15" r="3.5" />
      <line x1="8.5" y1="15" x2="15.5" y2="15" />
      <path d="M12 11.5a5 5 0 0 1 0 7" />
      <path d="M12 11.5a5 5 0 0 0 0 7" />
    </svg>
  );
}

/** Medical Malpractice: Outlined Greek/Medical Cross */
function MedicalCrossIcon({ className = "w-6 h-6 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 3h6v5h5v6h-5v5H9v-5H4v-6h5V3z" />
    </svg>
  );
}

// =============================================================================
// PRACTICE AREAS DATA
// =============================================================================
const PRACTICE_AREAS = [
  {
    step: "01",
    title: "Personal Injury",
    description: "Get more high-quality cases and consultations.",
    icon: Gavel,
    link: "#personal-injury",
  },
  {
    step: "02",
    title: "Auto & Motorcycle Accidents",
    description: "Reach accident victims when they need help most.",
    icon: Car,
    link: "#auto-accidents",
  },
  {
    step: "03",
    title: "Immigration Law",
    description: "Generate qualified inquiries for all visa types.",
    icon: ImmigrationDocIcon,
    link: "#immigration-law",
  },
  {
    step: "04",
    title: "Family Law & Divorce",
    description: "Connect with clients searching for trusted guidance.",
    icon: Users,
    link: "#family-law",
  },
  {
    step: "05",
    title: "Criminal Defense",
    description: "Drive high-intent leads for defense attorneys.",
    icon: Shield,
    link: "#criminal-defense",
  },
  {
    step: "06",
    title: "Workers' Compensation",
    description: "Reach injured workers looking for representation.",
    icon: HardHat,
    link: "#workers-comp",
  },
  {
    step: "07",
    title: "Medical Malpractice",
    description: "Attract complex, high-value cases.",
    icon: MedicalCrossIcon,
    link: "#medical-malpractice",
  },
  {
    step: "08",
    title: "Estate Planning & Probate",
    description: "Generate leads for wills, trusts, and estate matters.",
    icon: Home,
    link: "#estate-planning",
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative w-full bg-[#F3F5F8] py-14 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* Decorative Courthouse / Scales watermark on right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[420px] opacity-[0.035] pointer-events-none select-none bg-no-repeat bg-right-top"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #0A192F 10%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">

        {/* ===================================================================
            HEADER: EYEBROW (V. PRACTICE AREAS), HEADLINE & COPY
            =================================================================== */}
        <div className="mb-10 sm:mb-12 lg:mb-14 max-w-[850px]">
          {/* Section Tag (Maintains serial: V. PRACTICE AREAS) */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">V.</span> PRACTICE AREAS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-4 text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Lead generation for every Florida practice area
            <span className="text-[#FF5528]">.</span>
          </h2>

          {/* Paragraph */}
          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[720px]">
            We build custom lead generation strategies for any legal niche — so
            you can focus on what you do best: helping clients.
          </p>
        </div>

        {/* ===================================================================
            GRID: 8 PRACTICE AREA CARDS (4 COLUMNS X 2 ROWS ON DESKTOP)
            =================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PRACTICE_AREAS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.step}
                href={item.link}
                className="group relative flex items-center justify-between rounded-[20px] sm:rounded-[22px] border border-[#E5E9F2] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
              >
                {/* Left: Icon Badge + Text */}
                <div className="flex items-center gap-4 sm:gap-4.5 min-w-0 pr-2">
                  {/* Peach Circle Icon */}
                  <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
                  </div>

                  {/* Text details */}
                  <div className="min-w-0">
                    <span className="font-mono text-[12px] sm:text-[13px] font-bold text-[#FF5528] tracking-tight">
                      {item.step}
                    </span>
                    <h3 className="font-playfair text-[16px] sm:text-[17px] lg:text-[17.5px] font-bold text-[#0A192F] leading-tight mt-0.5 truncate group-hover:text-[#FF5528] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-instrument text-[12px] sm:text-[12.5px] text-[#64748B] leading-snug mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Round Arrow Button */}
                <div className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] transition-all duration-200 group-hover:bg-[#FFF2ED] group-hover:border-[#FF5528]/40 group-hover:text-[#FF5528]">
                  <ArrowRight size={14} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ===================================================================
            BOTTOM BANNER: DON'T SEE YOUR PRACTICE AREA?
            =================================================================== */}
        <div className="mt-6 sm:mt-8 rounded-[20px] sm:rounded-[22px] border border-[#E5E9F2] bg-white p-5 sm:p-6 lg:px-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Left: Chat Icon + Text */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Peach Circle Icon */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#0A192F]">
              <MessageSquare size={22} strokeWidth={2} />
            </div>

            <div>
              <h3 className="font-playfair text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#0A192F]">
                Don&apos;t see your practice area?
              </h3>
              <p className="font-instrument text-[13.5px] sm:text-[14px] text-[#64748B] mt-0.5">
                We build custom lead gen strategies for any legal niche.
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <Link
            href="#custom-strategy"
            className="group inline-flex h-[48px] sm:h-[50px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#FF5528] px-6 sm:px-7 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.25)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Custom Strategy</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
