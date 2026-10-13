"use client";

import React from "react";
import { Users, Scale, MapPin, Landmark } from "lucide-react";

// Businesses and firms trust bar
const TRUSTED_FIRMS = [
  { name: "Carter Injury Law" },
  { name: "Melamed Law" },
  { name: "McCulloch Law" },
  { name: "Zarin & Associates" },
  { name: "Trip Law" },
];

const REASONS = [
  {
    icon: Users,
    title: "Statewide Population Expansion and Search Demand",
    description:
      "Florida is the third largest state in the country, with over 23 million people and hundreds coming in each day. This ongoing flow generates a continuous flow of online searches for legal help in every of the 67 counties. Traditional referrals alone cannot sustain a practice in such a dynamic environment. Capturing this expanding online search volume establishes a predictable, scalable stream of prospective clients for growing practices. Every new resident brings potential legal requirements, ranging from updating estate documents to seeking guidance after a highway vehicle collision.",
  },
  {
    icon: Scale,
    title: "Intense Competition Among Licensed Counsel",
    description:
      "More than 80,000 active licensed attorneys compete for cases across the state, making standing out an absolute necessity. Major metropolitan markets like Miami rank third nationally for overall attorney demand and ad competition. Law practices that lack precise geo-targeting and practice-specific messaging often waste substantial advertising funds on low-intent clicks. Meanwhile, well positioned competitors capture the highest value claims in the market. Sustained market presence requires continuous ad management and campaign adjustments to outpace rival firms.",
  },
  {
    icon: MapPin,
    title: "Adapting Lead Generation to Each Florida Market",
    description:
      "Legal consumers do not behave uniformly across the state. Prospective clients seeking an estate planning lawyer in Naples evaluate firms differently than accident victims searching for representation along I-95 in Fort Lauderdale. Broad campaigns covering the entire state fail to address these critical regional variations. Adapting campaigns to localized, county-level expectations remains essential for converting traffic into signed clients. Understanding how local courthouses and regional demographics influence client decision-making helps target the right audience.",
  },
];

export default function LegalPipelineWhy() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24 border-t border-[#EEF2F6]/80 px-16 md:px-0">
      <div className="mx-auto max-w-[1580px] px-0 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* =========================================================================
            TRUSTED BY FLORIDA FIRMS (TRUST BAR)
            ========================================================================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <p className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-[#64748B] uppercase mb-4 sm:mb-5">
            TRUSTED BY FLORIDA LAW FIRMS &amp; PRACTICES
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-4">
            {TRUSTED_FIRMS.map((firm, idx) => (
              <div
                key={idx}
                className="group inline-flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-7 w-7 items-center justify-center text-[#64748B] transition-colors duration-300 group-hover:text-primary">
                  <Landmark size={18} strokeWidth={2.2} />
                </div>
                <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] text-[#0A192F]">
                  {firm.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION CONTENT: BUILD A LEAD PIPELINE THAT SUPPORTS FIRM GROWTH
            ========================================================================= */}
        <div>
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-primary uppercase">
              I. THE WHY
            </span>
          </div>

          {/* Headline from Doc */}
          <h2 className="font-playfair mt-4 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F] max-w-[900px]">
            Build a Lead Pipeline That Supports Firm Growth
          </h2>

          {/* Orange Accent Line */}
          <div className="mt-4 mb-5 h-[3.5px] w-12 rounded-full bg-primary" />

          {/* Intro Paragraph from Doc */}
          <p className="font-instrument text-[16px] sm:text-[17px] md:text-[18px] leading-[1.72] text-[#4A5568] max-w-[860px]">
            Effective legal lead generation in Florida determines whether your firm expands its caseload or struggles against local competitors. Thousands of residents search online every single day for immediate legal representation across the Sunshine State.
          </p>

          {/* 3 Pillar Cards Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div>
                    {/* Circle Icon Badge */}
                    <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#FFF2ED] text-primary transition-transform duration-300 group-hover:scale-105 mb-6">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold leading-[1.3] text-[#0A192F] mb-3">
                      {reason.title}
                    </h3>

                    <p className="font-instrument text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#4A5568]">
                      {reason.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#EEF2F6] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                    <span>FLORIDA DEMAND</span>
                    <span className="text-primary font-semibold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
