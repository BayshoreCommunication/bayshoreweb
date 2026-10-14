"use client";

import React from "react";
import { Eye, MousePointerClick, Zap } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Pillar 01: Multi-Channel Visibility",
    icon: Eye,
    description:
      "We position your firm in front of active searchers across Google organic search, local map listings, and targeted paid ads. Prospective clients discover your practice at the exact moment they search for legal counsel in your specific metropolitan region. Multi-channel presence establishes dominant authority across competitive search result pages. Appearing in organic listings and paid placements simultaneously maximizes brand credibility.",
  },
  {
    step: "02",
    title: "Pillar 02: High-Intent Conversion Design",
    icon: MousePointerClick,
    description:
      "Traffic generation represents only half the battle, because converting site visitors into consultation bookings requires specialized landing pages. We build mobile-first page layouts featuring prominent call buttons, live chat options, and messaging centered around case value and past firm success. Clear call-to-action elements motivate hesitant searchers to submit their legal inquiries immediately. Highlighting client victories and firm qualifications creates immediate trust.",
  },
  {
    step: "03",
    title: "Pillar 03: Fast Intake and Lead Nurture Systems",
    icon: Zap,
    description:
      "Conversion rates drop dramatically when follow-up responses are delayed by even a few minutes. Our framework connects call tracking, instant automated SMS text replies, email nurture sequences, and legal CRM platforms to guarantee rapid response times. Every incoming prospect receives immediate attention before contacting another law firm. Automated initial touchpoints keep leads engaged until your team conducts a formal consultation.",
  },
];

export default function LegalThreePillars() {
  return (
    <section className="relative w-full bg-[#F3F4F7] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* ===================================================================
            HEADER: EYEBROW (III. THE FRAMEWORK), TITLE & INTRO COPY FROM DOC
            =================================================================== */}
        <div className="text-center max-w-[860px] mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">III.</span> THE FRAMEWORK
            </span>
          </div>

          {/* Headline from Doc */}
          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            A Three Pillar System Built for Signed Cases
          </h2>

          {/* Subtitle Paragraph from Doc */}
          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#556377] max-w-[760px] mx-auto">
            Sustainable firm growth requires a connected marketing strategy that links initial online visibility directly to signed retainers. Our strategic approach to legal lead generation Florida campaigns combines search visibility, conversion design, and rapid intake into one seamless pipeline.
          </p>
        </div>

        {/* ===================================================================
            3 PILLARS CARDS GRID
            =================================================================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-[#E5E9F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Top Bar: Icon Badge + Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>

                    <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#FF5528] tracking-tight">
                      {pillar.step}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 className="font-playfair text-[22px] sm:text-[24px] lg:text-[26px] font-bold leading-[1.25] text-[#0A192F] mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description from Doc */}
                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#4A5568]">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow for Flow */}
                {idx < PILLARS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#FF937B]">
                    <div className="h-8 w-8 rounded-full bg-white border border-[#E5E9F2] flex items-center justify-center shadow-sm">
                      <span className="text-primary font-bold text-xs">&rarr;</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
