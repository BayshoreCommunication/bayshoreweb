"use client";

import React from "react";
import { TrendingUp, Users, Award, MapPin, Wrench } from "lucide-react";

// =============================================================================
// RESULTS DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const RESULTS = [
  {
    icon: TrendingUp,
    title: "Qualified consultations and Local Pack visibility",
    result:
      "3.4× monthly qualified consultations, Top 3 Local Pack placement and +284% organic Tampa traffic in 9 months.",
    client: "Law firm, Tampa, FL",
    highlight: "3.4×",
    highlightLabel: "QUALIFIED CONSULTATIONS",
  },
  {
    icon: Users,
    title: "Booked appointments and cost per lead",
    result:
      "Booked appointments increased from 35 to 113 per month (+222%) while CPL fell from $243 to $112 (-54%) over 7 months.",
    client: "Dental practice, Florida",
    highlight: "+222%",
    highlightLabel: "BOOKED APPOINTMENTS",
  },
  {
    icon: Award,
    title: "Qualified lead volume and lead cost",
    result:
      "73 qualified leads in 30 days, $24.81 true CPL and 100% of inbound calls qualified.",
    client: "Chiropractic clinic, Lakewood Ranch, FL",
    highlight: "100%",
    highlightLabel: "INBOUND CALLS QUALIFIED",
  },
  {
    icon: MapPin,
    title: "Property inquiries, buyer consultations and organic leads",
    result:
      "Property inquiries increased from 27 to 91 per month, buyer consultations from 11 to 38 and total organic leads from 46 to 158 per month over 10 months.",
    client: "Real estate, Florida",
    highlight: "+243%",
    highlightLabel: "ORGANIC LEADS INCREASE",
  },
  {
    icon: Wrench,
    title: "Booked jobs, Local Pack visibility and lead cost",
    result:
      "Booked jobs reached 2.5× the spring baseline, Map Pack position #1 for target Tampa searches and $139 blended CPL across LSA and Search.",
    client: "Plumbing contractor, Tampa, FL",
    highlight: "#1",
    highlightLabel: "MAP PACK POSITION",
  },
];

export default function RealResults() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XI.</span> PROVEN RESULTS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Results From Local Lead Generation Florida Campaigns
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Real client data measuring qualified consults, booked appointments, and true acquisition costs across Florida markets.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {RESULTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Top: Stat highlight + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="font-inter text-[30px] sm:text-[34px] font-bold text-[#FF5528] tracking-tight leading-none block">
                        {item.highlight}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#64748B] tracking-wider uppercase mt-1 block">
                        {item.highlightLabel}
                      </span>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-[19px] sm:text-[20px] font-bold text-[#0A192F] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Exact Result from Doc */}
                  <p className="font-instrument text-[14px] sm:text-[15px] leading-[1.68] text-[#4A5568] mb-6">
                    {item.result}
                  </p>
                </div>

                {/* Footer: Client Info */}
                <div className="pt-4 border-t border-[#EEF2F6]">
                  <span className="font-mono text-[12px] font-semibold text-[#0A192F] uppercase tracking-wider block">
                    {item.client}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
