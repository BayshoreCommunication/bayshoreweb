"use client";

import React from "react";
import { ArrowDown, Check, Sparkles } from "lucide-react";

// =============================================================================
// ORGANIC AND PAID SYNERGY DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const COMPARISON_ROWS = [
  { organic: "Local SEO", paid: "Google Ads" },
  { organic: "Google Maps and Google Business Profile", paid: "Paid social" },
  { organic: "Service pages", paid: "Lead campaigns" },
  { organic: "Local content", paid: "Paid landing pages" },
  { organic: "Reviews", paid: "Retargeting" },
  { organic: "Builds search visibility over months", paid: "Produces qualified traffic within days" },
];

const PIPELINE_STEPS = [
  "Local Search",
  "Local Discovery",
  "Trust",
  "Conversion",
  "Qualification",
  "Follow Up",
  "Measurement",
];

export default function OrganicPaidLeadGen() {
  return (
    <section className="relative w-full bg-[#FCFDFE] py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[900px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">&sect;</span> HYBRID ACQUISITION
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Organic and Paid Lead Generation Work Best Together
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.72] text-[#4A5568] max-w-[780px]">
            Organic work compounds, so pages and reviews keep earning calls after you stop paying. Paid campaigns buy speed, testing keywords and offers. However organic rankings mature. Together they cover &ldquo;near me&rdquo; searches, competitive keywords and urgent &ldquo;call now&rdquo; queries. Paid data reveals converting keywords and organic pages then target the winners. Organic rankings later lower paid costs, since strong pages earn better Quality Scores. Start paid heavy for a new profile, then shift budget toward organic as rankings climb.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] mb-14 sm:mb-18">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0A192F] text-white p-5 sm:p-6 font-mono text-[12px] font-bold tracking-[0.14em] uppercase">
            <div className="text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span>ORGANIC LOCAL LEAD GENERATION</span>
            </div>
            <div className="text-[#FF5528] flex items-center gap-2 mt-2 md:mt-0">
              <Sparkles size={16} />
              <span>PAID LOCAL LEAD GENERATION</span>
            </div>
          </div>

          <div className="divide-y divide-[#EEF2F6]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 p-5 sm:p-6 gap-2 md:gap-6 hover:bg-[#FFFDFB] transition-colors"
              >
                <div className="flex items-center gap-3 text-[14.5px] sm:text-[15.5px] text-[#0A192F] font-instrument">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{row.organic}</span>
                </div>

                <div className="flex items-center gap-3 text-[14.5px] sm:text-[15.5px] text-[#0A192F] font-instrument font-semibold">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{row.paid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Funnel Steps */}
        <div className="rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.03)]">
          <h3 className="font-mono text-[12px] font-bold tracking-[0.14em] text-[#64748B] uppercase mb-6 text-center">
            THE LOCAL LEAD PIPELINE LIFECYCLE
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            {PIPELINE_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FAFCFF] px-4 py-2.5 shadow-2xs">
                  <span className="font-mono text-[11px] font-bold text-[#FF5528]">
                    0{idx + 1}
                  </span>
                  <span className="font-playfair text-[15px] sm:text-[16px] font-bold text-[#0A192F]">
                    {step}
                  </span>
                </div>

                {idx < PIPELINE_STEPS.length - 1 && (
                  <span className="text-[#FF5528] font-bold text-sm px-1">&darr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
