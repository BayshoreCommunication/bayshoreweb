"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";

interface ComparisonRow {
  category: string;
  generic: string;
  bayshore: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: "Strategy & Scope",
    generic: "One size fits all statewide keywords and broad location targeting.",
    bayshore: "Built entirely around your specific firm, practice and local service area.",
  },
  {
    category: "Geography",
    generic: "Broad state or regional targeting",
    bayshore: "Naples and defined service areas",
  },
  {
    category: "Search & Local SEO",
    generic: "Basic website SEO and general traffic generation",
    bayshore: "Google Business Profile, map pack dominance, Naples citations and reviews",
  },
  {
    category: "Search intent",
    generic: "General traffic and raw volume",
    bayshore: "High intent lawyer and practice area searches",
  },
  {
    category: "Landing Pages",
    generic: "Generic service pages",
    bayshore: "Dedicated practice area and Naples specific landing pages",
  },
  {
    category: "Ad Compliance",
    generic: "Limited or zero knowledge of state bar regulations",
    bayshore: "Rigorously reviewed against Florida Bar advertising rules",
  },
  {
    category: "Lead quality",
    generic: "Volume focused",
    bayshore: "Practice and location qualified",
  },
  {
    category: "Lead Ownership",
    generic: "Shared or resold to multiple competing lawyers",
    bayshore: "100% exclusive to your firm",
  },
  {
    category: "Tracking",
    generic: "Leads and clicks",
    bayshore: "Lead source through consultation",
  },
  {
    category: "Reporting",
    generic: "Traffic metrics",
    bayshore: "Qualified leads, consultations, acquisition cost",
  },
];

export default function NaplesVsGeneric() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-[920px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">X.</span> THE DIFFERENCE
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Generic Lead Generation vs. Naples Focused Lawyer Lead Generation
          </h2>

          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.72] text-[#4A5568] max-w-[760px] mx-auto">
            Generic agencies sell traffic reports. Bayshore sells booked consultations from Naples searches.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#0A192F] text-white p-5 sm:p-6 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase">
            <div className="col-span-4 sm:col-span-3">CATEGORY</div>
            <div className="col-span-4 sm:col-span-4 text-[#94A3B8]">GENERIC LEAD GENERATION</div>
            <div className="col-span-4 sm:col-span-5 text-[#FF5528] flex items-center gap-2">
              <Sparkles size={16} />
              <span>BAYSHORE LAWYER LEAD GENERATION</span>
            </div>
          </div>

          {/* Body Rows */}
          <div className="divide-y divide-[#EEF2F6]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 sm:p-6 items-center hover:bg-[#FFFDFB] transition-colors duration-200"
              >
                {/* Category */}
                <div className="col-span-4 sm:col-span-3 font-playfair font-bold text-[15px] sm:text-[17px] text-[#0A192F]">
                  {row.category}
                </div>

                {/* Generic */}
                <div className="col-span-4 sm:col-span-4 pr-3 text-[13.5px] sm:text-[15px] text-[#64748B] font-instrument leading-relaxed">
                  {row.generic}
                </div>

                {/* Bayshore */}
                <div className="col-span-4 sm:col-span-5 font-semibold text-[14px] sm:text-[15.5px] text-[#0A192F] font-instrument flex items-center gap-2.5">
                  <div className="hidden sm:flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                    <Check size={14} strokeWidth={2.8} />
                  </div>
                  <span className="leading-snug">{row.bayshore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
