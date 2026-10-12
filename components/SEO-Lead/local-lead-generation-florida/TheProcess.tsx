"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// =============================================================================
// PIXEL-PERFECT SVG ICONS MATCHING THE EXACT DESIGN:
// Two-tone palette: Navy (#0A192F) base + Brand Orange (#FF5528) accent
// =============================================================================

// 01. Audit & Strategy: File sheet with folded corner + orange magnifying glass
const AuditIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    {/* File document */}
    <path
      d="M7 5C7 3.89543 7.89543 3 9 3H17L23 9V24C23 25.1046 22.1046 26 21 26H9C7.89543 26 7 25.1046 7 24V5Z"
      stroke="#0A192F"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3V9.5H23"
      stroke="#0A192F"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11 13.5H18" stroke="#0A192F" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M11 17.5H15" stroke="#0A192F" strokeWidth="1.9" strokeLinecap="round" />
    {/* Magnifier in bottom-right in bright orange */}
    <circle
      cx="19.5"
      cy="20.5"
      r="4.2"
      stroke="#FF5528"
      strokeWidth="2.1"
      fill="#FFF5F1"
    />
    <path
      d="M22.8 23.8L26.5 27.5"
      stroke="#FF5528"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

// 02. Build & Launch: Browser window + orange gear/cog
const BuildLaunchIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    {/* Browser window */}
    <rect
      x="3.5"
      y="4.5"
      width="23"
      height="17.5"
      rx="3"
      stroke="#0A192F"
      strokeWidth="1.9"
    />
    <line x1="3.5" y1="9.5" x2="26.5" y2="9.5" stroke="#0A192F" strokeWidth="1.9" />
    <circle cx="7" cy="7" r="0.8" fill="#0A192F" />
    <circle cx="10" cy="7" r="0.8" fill="#0A192F" />
    {/* Gear in bottom-right in bright orange */}
    <g transform="translate(15.5, 14)">
      <circle
        cx="6"
        cy="6"
        r="2.4"
        stroke="#FF5528"
        strokeWidth="2"
        fill="#FFF5F1"
      />
      <path
        d="M6 1.2V3M6 9V10.8M1.2 6H3M9 6H10.8M2.6 2.6L3.9 3.9M8.1 8.1L9.4 9.4M2.6 9.4L3.9 8.1M8.1 3.9L9.4 2.6"
        stroke="#FF5528"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// 03. Track & Optimize: Ascending bar chart bars + curved orange upward trend arrow
const TrackOptimizeIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    {/* Bar chart bars */}
    <rect x="5" y="18" width="3.4" height="7.5" rx="1" fill="#0A192F" />
    <rect x="11" y="13.5" width="3.4" height="12" rx="1" fill="#0A192F" />
    <rect x="17" y="9" width="3.4" height="16.5" rx="1" fill="#0A192F" />
    <rect x="23" y="4.5" width="3.4" height="21" rx="1" fill="#0A192F" />
    {/* Upward curved arrow in bright orange */}
    <path
      d="M5 14C8.5 11.5 13 7 22.5 3.8"
      stroke="#FF5528"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M18 3.5H23.5V9"
      stroke="#FF5528"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 04. Scale What Works: Users avatars + orange checkmark circle
const ScaleIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    {/* Users avatars */}
    <circle cx="10" cy="8.5" r="3.6" stroke="#0A192F" strokeWidth="1.9" />
    <path
      d="M3.5 22C3.5 18 6.5 15.5 10.5 15.5C12.8 15.5 14.8 16.5 15.8 18.2"
      stroke="#0A192F"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M16 5.8C16.9 6.5 17.5 7.5 17.5 8.7C17.5 10.4 16.3 11.8 14.8 12.3"
      stroke="#0A192F"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M18.2 14.8C19.8 15.4 20.8 16.8 20.8 18.6"
      stroke="#0A192F"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    {/* Checkmark circle in bright orange at bottom-right */}
    <circle
      cx="20.5"
      cy="20.5"
      r="4.8"
      stroke="#FF5528"
      strokeWidth="2"
      fill="#FFF5F1"
    />
    <path
      d="M18.5 20.5L19.8 21.8L22.6 19"
      stroke="#FF5528"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Connector horizontal arrow for desktop
const StepConnectorArrow = () => (
  <svg
    width="24"
    height="14"
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M1 7H21M21 7L15 1M21 7L15 13"
      stroke="#FFA38C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit & Strategy",
    description:
      "We review your site, ads, rankings, and intake process to find exactly where leads are leaking.",
    icon: <AuditIcon />,
  },
  {
    step: "02",
    title: "Build & Launch",
    description:
      "We build or optimize SEO pages, ad campaigns, and landing pages around your highest-value metros.",
    icon: <BuildLaunchIcon />,
  },
  {
    step: "03",
    title: "Track & Optimize",
    description:
      "Every lead is tracked to its source. We optimize weekly on real cost-per-case data, not vanity metrics.",
    icon: <TrackOptimizeIcon />,
  },
  {
    step: "04",
    title: "Scale What Works",
    description:
      "Once we know what converts, we scale spend and content into it — and cut what isn't producing cases.",
    icon: <ScaleIcon />,
  },
];

export default function TheProcess() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] w-full px-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* ===================================================================
            HEADER: TAGLINE (XI. THE PROCESS), HEADLINE & INTRO
            Strict serial XI, no box border, no § symbol
            Headline: "From strategy to signed client." with italic orange accent
            =================================================================== */}
        <div className="max-w-[920px] mb-10 sm:mb-12 lg:mb-16">
          
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XI.</span> THE PROCESS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-3.5 sm:mt-4 md:mt-5 text-[29px] xs:text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            From strategy to{" "}
            <span className="italic text-[#FF5528]">signed client.</span>
          </h2>

          {/* Paragraph */}
          <p className="font-instrument mt-3.5 sm:mt-4 text-[14.5px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#556377] max-w-[760px]">
            We follow a proven, data-driven process to help law firms attract,
            convert, and sign more qualified clients in their target markets.
          </p>

        </div>

        {/* ===================================================================
            PROCESS STEPS: 4 EQUAL-SIZED CARDS WITH SAME ICONS & FULL RESPONSIVENESS
            - Mobile (<640px): 1-column cards with down arrow indicators
            - Tablet (640px-1023px): 2x2 grid with unified heights
            - Desktop (>=1024px): 4 equal columns with right arrow connectors
            =================================================================== */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch">
            {PROCESS_STEPS.map((item, index) => {
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <div key={item.step} className="relative flex flex-col">
                  {/* Step Card: Same uniform size, rounded corners, subtle shadow */}
                  <div className="group relative flex-1 flex flex-col justify-between rounded-[20px] sm:rounded-[22px] bg-white border border-[#E5E9F2] p-6 sm:p-7 md:p-8 lg:p-6 xl:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:border-[#FF5528]/35 transition-all duration-300">
                    
                    {/* Top Row: Step Number Pill on left, Circular Icon Badge on right */}
                    <div>
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        {/* Step Pill */}
                        <span className="inline-flex items-center justify-center rounded-full bg-[#FFF2ED] px-3 sm:px-3.5 py-1 text-[#FF5528] font-mono text-[12px] sm:text-[13px] font-bold tracking-wider">
                          {item.step}
                        </span>

                        {/* Circular Icon Container */}
                        <div className="flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF5F1] transition-transform duration-300 group-hover:scale-105">
                          {item.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair text-[20px] sm:text-[21px] lg:text-[20px] xl:text-[22px] font-bold text-[#0A192F] tracking-[-0.01em] leading-snug mb-2.5 sm:mb-3">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-instrument text-[14px] sm:text-[14.5px] lg:text-[14px] xl:text-[14.5px] leading-[1.65] text-[#556377] mt-1">
                      {item.description}
                    </p>

                  </div>

                  {/* Desktop Right Connector Arrow (Between 01->02, 02->03, 03->04) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-[13px] xl:-right-[16px] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <StepConnectorArrow />
                    </div>
                  )}

                  {/* Mobile Down Arrow between steps */}
                  {!isLast && (
                    <div className="flex sm:hidden justify-center items-center py-2 text-[#FFA38C]">
                      <ArrowDown size={18} strokeWidth={1.8} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
