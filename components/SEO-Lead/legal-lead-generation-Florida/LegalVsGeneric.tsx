"use client";

import React from "react";
import { Check, Sparkles, MapPin, ShieldCheck, BarChart3 } from "lucide-react";

interface ComparisonRow {
  category: string;
  generic: string;
  bayshore: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: "Targeting",
    generic: "Broad statewide keywords",
    bayshore: "County and metro-level targeting matched to your service area",
  },
  {
    category: "Legal Advertising",
    generic: "General advertising approach",
    bayshore: "Campaigns aligned with Florida Bar advertising guidelines",
  },
  {
    category: "Lead Quality",
    generic: "Focus on lead volume",
    bayshore: "Practice-area and case-value focused",
  },
  {
    category: "Reporting",
    generic: "Clicks and impressions",
    bayshore: "Cost per lead through cost per signed case",
  },
  {
    category: "Language Reach",
    generic: "Primarily English",
    bayshore: "English and Spanish campaigns where relevant",
  },
];

const CONTRASTS = [
  {
    icon: MapPin,
    title: "Hyper-Local Geo-Fencing Versus Statewide Spend Wastage",
    description:
      "Generic marketing providers frequently configure broad statewide campaigns that waste ad funds on searchers far outside your firm's reach. Bayshore builds county level and metro-specific campaign boundaries aligned with your active practice jurisdictions. Targeted geographic boundaries ensure your budget generates calls only from clients you can represent. Restricting spend to your exact target markets prevents wasted ad dollars.",
  },
  {
    icon: ShieldCheck,
    title: "Florida Bar Compliance Versus Regulatory Risk",
    description:
      "Legal advertising in Florida must adhere strictly to Florida Bar rules regarding performance claims, fee descriptions, and client reviews. Our team crafts compliant ad messaging and landing page copy to safeguard your practice from ethics violations. Clean compliance protects your reputation while maintaining high conversion performance. Strict review processes prevent costly compliance disputes before campaigns go live.",
  },
  {
    icon: BarChart3,
    title: "Signed Case Metrics Versus Superficial Traffic Reports",
    description:
      "Standard marketing agencies focus on clicks, impressions, and web hits, leaving firm partners guessing about actual return on investment. We measure success through cost-per-lead, cost-per-consultation, and cost-per-signed-case. Transparent data tracks every dollar spent through to revenue earned. Evaluating actual closed cases reveals true marketing efficiency.",
  },
];

export default function LegalVsGeneric() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VIII.</span> THE BAYSHORE ADVANTAGE
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Bayshore Advantage Versus Generic Agencies
          </h2>

          <p className="font-instrument mt-4 text-[16px] sm:text-[18px] md:text-[19px] leading-[1.7] text-[#556377]">
            Generic digital agencies often employ standard approaches that ignore legal ethics rules and localized search intent. Our dedicated focus on legal lead generation Florida delivers qualified prospects, strict regulatory compliance, and performance tracking tied to signed cases.
          </p>
        </div>

        {/* Subhead and Intro for Table */}
        <div className="mb-6 max-w-[840px]">
          <h3 className="font-playfair text-[24px] sm:text-[26px] font-bold text-[#0A192F]">
            Legal-Focused vs. Generic Marketing
          </h3>
          <p className="font-instrument mt-2 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
            Legal marketing requires more than broad search visibility. Campaigns need precise geographic targeting, advertising compliance, qualified lead generation, and reporting tied to meaningful case outcomes.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] mb-14 sm:mb-18">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#0A192F] text-white p-5 sm:p-6 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase">
            <div className="col-span-4 sm:col-span-3">CATEGORY</div>
            <div className="col-span-4 sm:col-span-4 text-[#94A3B8]">GENERIC MARKETING AGENCY</div>
            <div className="col-span-4 sm:col-span-5 text-[#FF5528] flex items-center gap-2">
              <Sparkles size={16} />
              <span>BAYSHORE LEGAL LEAD GENERATION</span>
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

                {/* Generic Agency */}
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

        {/* 3 Detailed Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {CONTRASTS.map((contrast, idx) => {
            const Icon = contrast.icon;
            return (
              <div
                key={idx}
                className="rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mb-5">
                  <Icon size={22} />
                </div>

                <h3 className="font-playfair text-[19px] sm:text-[21px] font-bold text-[#0A192F] mb-3 leading-snug">
                  {contrast.title}
                </h3>

                <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] text-[#4A5568]">
                  {contrast.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
