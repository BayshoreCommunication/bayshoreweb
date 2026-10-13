"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

// =============================================================================
// PROCESS STEPS DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
interface ProcessStep {
  step: string;
  title: string;
  intro: string;
  bullets: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit and Market Research",
    intro: "The audit gives us a clear view of current demand capture and conversion. We review:",
    bullets: [
      "Website structure",
      "Local rankings",
      "Google Business Profile",
      "Google Maps visibility",
      "Competitors",
      "Service areas",
      "Existing Google Ads campaigns",
      "Existing social campaigns",
      "Lead sources",
      "Landing pages",
      "Conversion paths",
      "Tracking setup",
      "CRM workflow",
    ],
  },
  {
    step: "02",
    title: "Build the Local Lead Strategy",
    intro: "The strategy can combine organic search, paid search, Maps visibility, social campaigns and conversion work. We define:",
    bullets: [
      "Target locations",
      "Core services",
      "Search intent",
      "Primary channels",
      "Landing pages",
      "Offers",
      "Conversion actions",
      "Tracking",
      "Follow up",
    ],
  },
  {
    step: "03",
    title: "Launch and Track",
    intro: "We launch the agreed campaigns and conversion paths. Tracking gives the team a clear view of campaign activity. We monitor:",
    bullets: [
      "Calls",
      "Forms",
      "Bookings",
      "Lead sources",
      "Cost per lead",
      "Qualified lead rate",
      "Conversion rate",
      "Search terms",
      "Landing page performance",
    ],
  },
  {
    step: "04",
    title: "Optimize and Scale",
    intro: "Local lead generation needs ongoing adjustment. Strong campaigns can expand into new locations or related services. We can improve:",
    bullets: [
      "Geographic targeting",
      "Keywords",
      "Search terms",
      "Ad copy",
      "Landing pages",
      "Offers",
      "Conversion paths",
      "Follow up",
      "Budget allocation",
    ],
  },
];

export default function TheProcess() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[900px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IX.</span> OUR PROCESS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            How Our Local Lead Generation Process Works
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            A local lead generation florida campaign starts with your market, services and current acquisition setup. Weak areas can receive a different keyword mix, landing page approach or budget level.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="group relative rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              {/* Header: Step Number & Title */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[15px] sm:text-[16px] font-bold text-[#FF5528] tracking-tight">
                  STEP {step.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#FF5528]" />
              </div>

              <h3 className="font-playfair text-[22px] sm:text-[24px] font-bold text-[#0A192F] mb-3">
                {step.title}
              </h3>

              <p className="font-instrument text-[14.5px] sm:text-[15.5px] text-[#4A5568] leading-[1.6] mb-5">
                {step.intro}
              </p>

              {/* Bullets List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#EEF2F6]">
                {step.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex items-start gap-2 text-[13.5px] sm:text-[14px] text-[#334155]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5528] mt-0.5" />
                    <span className="font-instrument leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
