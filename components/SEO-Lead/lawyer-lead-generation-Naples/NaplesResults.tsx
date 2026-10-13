"use client";

import React from "react";
import { TrendingUp, Users, Award } from "lucide-react";

const RESULTS = [
  {
    icon: TrendingUp,
    title: "Qualified Retainers and Local Pack Visibility",
    impact:
      "Performance Impact: 3.4× monthly qualified consultations, Top 3 Local Pack placement and +284% organic traffic in 9 months.",
    client: "Criminal Defense & Family Law Firm, Tampa, FL",
    highlight: "3.4×",
    highlightLabel: "QUALIFIED CONSULTATIONS",
  },
  {
    icon: Users,
    title: "Signed Cases and Cost Per Lead (CPL)",
    impact:
      "Performance Impact: Signed cases increased from 35 to 113 per month (+222%). However true client acquisition CPL fell from $243 to $112 (-54%) over 7 months.",
    client: "Personal Injury Law Firm, Statewide Florida Campaigns",
    highlight: "+222%",
    highlightLabel: "SIGNED CASES INCREASE",
  },
  {
    icon: Award,
    title: "High Value Probate Inquiries and Intake Cost",
    impact:
      "Performance Impact: 73 qualified estate & probate leads in 30 days, a $24.81 true CPL and 100% of inbound intake calls verified as high intent.",
    client: "Estate Planning & Asset Protection Firm, Lakewood Ranch, FL",
    highlight: "100%",
    highlightLabel: "HIGH-INTENT CALLS",
  },
];

export default function NaplesResults() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XIII.</span> TRACK RECORD
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Lead Generation Results You Can Measure
          </h2>
        </div>

        {/* 3 Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {RESULTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Top: Stat highlight & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="font-inter text-[32px] sm:text-[36px] font-bold text-[#FF5528] tracking-tight leading-none block">
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
                  <h3 className="font-playfair text-[20px] sm:text-[21px] font-bold text-[#0A192F] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Exact Impact from Doc */}
                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] text-[#4A5568] mb-6">
                    {item.impact}
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
