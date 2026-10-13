"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

// =============================================================================
// COMPARISON DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
interface ComparisonRow {
  category: string;
  general: string;
  local: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: "Objective",
    general: "Awareness, traffic, followers",
    local: "Calls, forms, bookings, customers",
  },
  {
    category: "Audience",
    general: "Broad or national",
    local: "People inside a defined service area",
  },
  {
    category: "Geographic targeting",
    general: "Country or state",
    local: "Region, metro, county, city, neighborhood",
  },
  {
    category: "Search intent",
    general: "Informational and browsing",
    local: "Local, service specific, ready to act",
  },
  {
    category: "Landing pages",
    general: "General site pages",
    local: "City and service landing pages",
  },
  {
    category: "Lead qualification",
    general: "Rare",
    local: "Location, service fit and intent screening",
  },
  {
    category: "Tracking",
    general: "Traffic and engagement",
    local: "Calls, forms, source, booking, revenue",
  },
  {
    category: "Reporting",
    general: "Impressions and clicks",
    local: "Cost per qualified lead, booking rate, customer cost",
  },
];

export default function TheDifference() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-center max-w-[880px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VIII.</span> THE DIFFERENCE
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Local Lead Generation vs General Digital Marketing
          </h2>

          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.72] text-[#4A5568] max-w-[760px] mx-auto">
            General digital marketing chases attention and generating local lead chases the next appointment. Both have value, but only one answers &ldquo;how many customers did last month bring?&rdquo; Brand campaigns earn their place and we coordinate with any already running. Choose generating lead locally when revenue this quarter matters more than reach.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="min-w-[580px] lg:min-w-0 overflow-hidden rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-[#0A192F] text-white p-5 sm:p-6 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase">
              <div className="col-span-4 sm:col-span-3">CATEGORY</div>
              <div className="col-span-4 sm:col-span-4 text-[#94A3B8]">GENERAL DIGITAL MARKETING</div>
              <div className="col-span-4 sm:col-span-5 text-[#FF5528] flex items-center gap-2">
                <Sparkles size={16} />
                <span>LOCAL LEAD GENERATION</span>
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

                  {/* General Marketing */}
                  <div className="col-span-4 sm:col-span-4 pr-3 text-[13.5px] sm:text-[15px] text-[#64748B] font-instrument">
                    {row.general}
                  </div>

                  {/* Local Lead Gen */}
                  <div className="col-span-4 sm:col-span-5 font-semibold text-[14px] sm:text-[15.5px] text-[#0A192F] font-instrument flex items-center gap-2.5">
                    <div className="hidden sm:flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                      <Check size={14} strokeWidth={2.8} />
                    </div>
                    <span>{row.local}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
