"use client";

import React from "react";
import {
  Target,
  FileText,
  Award,
  TrendingUp,
  Languages,
  Users,
  AlertTriangle,
  BarChart2,
  PieChart,
  Globe,
  Check,
} from "lucide-react";

interface ComparisonRow {
  category: {
    title: string;
    subtitle: string;
    icon: React.ElementType;
  };
  generic: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  bayshore: {
    title: string;
    description: string;
  };
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: {
      title: "Targeting",
      subtitle: "Who sees your ads",
      icon: Target,
    },
    generic: {
      title: "Broad, state-wide keywords",
      description: "Reaches a wide, often irrelevant audience.",
      icon: Users,
    },
    bayshore: {
      title: "County & metro-level, matched to your service area",
      description: "Connects you with local, high-intent potential clients.",
    },
  },
  {
    category: {
      title: "Ad compliance",
      subtitle: "Meets legal advertising rules",
      icon: FileText,
    },
    generic: {
      title: "Unfamiliar with attorney advertising rules",
      description: "Higher risk of policy violations and ad disapprovals.",
      icon: AlertTriangle,
    },
    bayshore: {
      title: "Built around Bar advertising guidelines",
      description: "Compliant campaigns designed for law firms.",
    },
  },
  {
    category: {
      title: "Lead quality",
      subtitle: "Type of inquiries you get",
      icon: Award,
    },
    generic: {
      title: "Volume-focused",
      description: "More unqualified and low-value leads.",
      icon: BarChart2,
    },
    bayshore: {
      title: "Case-value and practice-area qualified",
      description: "Higher intent leads aligned with your practice areas.",
    },
  },
  {
    category: {
      title: "Reporting",
      subtitle: "How performance is tracked",
      icon: TrendingUp,
    },
    generic: {
      title: "Clicks and impressions",
      description: "Vanity metrics with no real business impact.",
      icon: PieChart,
    },
    bayshore: {
      title: "Cost-per-lead through to cost-per-signed-case",
      description: "Transparent reporting focused on real ROI.",
    },
  },
  {
    category: {
      title: "Language reach",
      subtitle: "Audience language",
      icon: Languages,
    },
    generic: {
      title: "English-only",
      description: "Misses a large portion of the market.",
      icon: Globe,
    },
    bayshore: {
      title: "Bilingual English/Spanish where relevant",
      description: "Reaches diverse communities and expands opportunity.",
    },
  },
];

export default function TheDifference() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] w-full px-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* ===================================================================
            HEADER: TAGLINE (X. THE DIFFERENCE), HEADLINE & INTRO
            No border, no § sign, maintains strict Roman numeral serial
            =================================================================== */}
        <div className="max-w-[900px] mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">X.</span> THE DIFFERENCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-3 sm:mt-4 md:mt-5 text-[28px] xs:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0A192F]">
            Legal-focused vs. generic marketing
            <span className="text-[#FF5528]">.</span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="font-instrument mt-3 sm:mt-4 text-[14px] sm:text-[15.5px] md:text-[17px] leading-[1.65] text-[#556377] max-w-[760px]">
            Most agencies run generic campaigns. We focus exclusively on the legal
            industry — built around compliance, high-intent audiences, and real
            case value.
          </p>

        </div>

        {/* ===================================================================
            DESKTOP COMPARISON TABLE (md and above)
            Headers with larger text size, all items vertically centered,
            Bayshore column styled identical to generic box without background color
            =================================================================== */}
        <div className="hidden md:block rounded-[20px] bg-white border border-[#E5E9F2] shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden">
          
          {/* Table Header Row: Larger text, clean borders, perfectly centered */}
          <div className="grid grid-cols-12 border-b border-[#EEF2F6] bg-white text-[13px] sm:text-[13.5px] lg:text-[14px] font-mono tracking-[0.14em] uppercase">
            <div className="col-span-3 lg:col-span-3 px-6 sm:px-8 py-5 font-bold text-[#64748B] flex items-center">
              Category
            </div>
            <div className="col-span-4 lg:col-span-4 px-6 sm:px-8 py-5 font-bold text-[#64748B] border-l border-[#EEF2F6] flex items-center">
              Generic Marketing Agency
            </div>
            <div className="col-span-5 lg:col-span-5 px-6 sm:px-8 py-5 font-bold text-[#FF5528] border-l border-[#EEF2F6] flex items-center">
              Bayshore Legal Lead Gen
            </div>
          </div>

          {/* Table Data Rows: All cells vertically centered */}
          {COMPARISON_ROWS.map((row, index) => {
            const CategoryIcon = row.category.icon;
            const GenericIcon = row.generic.icon;
            const isLast = index === COMPARISON_ROWS.length - 1;

            return (
              <div
                key={row.category.title}
                className={`grid grid-cols-12 items-center transition-colors duration-150 hover:bg-[#FAFCFF] ${
                  !isLast ? "border-b border-[#EEF2F6]" : ""
                }`}
              >
                {/* Column 1: Category (Vertically Centered) */}
                <div className="col-span-3 lg:col-span-3 px-6 sm:px-8 py-5.5 sm:py-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#334155]">
                    <CategoryIcon size={20} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-playfair text-[16.5px] sm:text-[17.5px] font-bold text-[#0A192F] leading-tight">
                      {row.category.title}
                    </h4>
                    <p className="font-instrument text-[12.5px] sm:text-[13px] text-[#64748B] mt-0.5">
                      {row.category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Column 2: Generic Marketing Agency (Vertically Centered) */}
                <div className="col-span-4 lg:col-span-4 px-6 sm:px-8 py-5.5 sm:py-6 border-l border-[#EEF2F6] flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#94A3B8]">
                    <GenericIcon size={19} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-instrument text-[14.5px] sm:text-[15px] font-semibold text-[#334155] leading-snug">
                      {row.generic.title}
                    </h5>
                    <p className="font-instrument text-[12.5px] sm:text-[13px] text-[#94A3B8] mt-0.5 leading-relaxed">
                      {row.generic.description}
                    </p>
                  </div>
                </div>

                {/* Column 3: Bayshore Legal Lead Gen (Vertically Centered, White bg, Same clean border) */}
                <div className="col-span-5 lg:col-span-5 px-6 sm:px-8 py-5.5 sm:py-6 border-l border-[#EEF2F6] bg-white flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFEAE3] text-[#FF5528]">
                    <Check size={16} strokeWidth={2.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-instrument text-[15px] sm:text-[15.5px] font-bold text-[#0A192F] leading-snug">
                      {row.bayshore.title}
                    </h5>
                    <p className="font-instrument text-[12.5px] sm:text-[13px] text-[#556377] mt-0.5 leading-relaxed">
                      {row.bayshore.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* ===================================================================
            MOBILE COMPARISON VIEW (< md)
            Full responsive cards per category: Generic vs Bayshore
            Stacked on mobile (<640px), 2 columns on small tablets (640px-767px)
            Clean white styling, no solid peach background
            =================================================================== */}
        <div className="md:hidden flex flex-col gap-4">
          {COMPARISON_ROWS.map((row) => {
            const CategoryIcon = row.category.icon;
            const GenericIcon = row.generic.icon;

            return (
              <div
                key={row.category.title}
                className="rounded-[16px] sm:rounded-[18px] bg-white border border-[#E5E9F2] shadow-[0_2px_12px_rgba(15,23,42,0.03)] overflow-hidden"
              >
                
                {/* Mobile Card Header */}
                <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#F8FAFC] border-b border-[#EEF2F6] flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-[#E2E8F0] text-[#0A192F] shadow-2xs">
                    <CategoryIcon size={16} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-playfair text-[16px] sm:text-[17px] font-bold text-[#0A192F] leading-tight">
                      {row.category.title}
                    </h4>
                    <p className="font-instrument text-[12px] sm:text-[12.5px] text-[#64748B] truncate">
                      {row.category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Mobile Comparison Body */}
                <div className="p-3.5 sm:p-4.5 flex flex-col sm:grid sm:grid-cols-2 gap-3">
                  
                  {/* Generic Agency Item */}
                  <div className="p-3.5 sm:p-4 rounded-[12px] bg-[#F8FAFC] border border-[#EEF2F6] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#94A3B8] border border-[#E2E8F0] shadow-2xs">
                          <GenericIcon size={12} strokeWidth={2} />
                        </div>
                        <span className="font-mono text-[10px] sm:text-[10.5px] uppercase font-bold tracking-wider text-[#64748B]">
                          Generic Agency
                        </span>
                      </div>
                      <h5 className="font-instrument text-[13.5px] sm:text-[14px] font-semibold text-[#334155] leading-snug">
                        {row.generic.title}
                      </h5>
                    </div>
                    <p className="font-instrument text-[12px] sm:text-[12.5px] text-[#64748B] mt-2 leading-relaxed">
                      {row.generic.description}
                    </p>
                  </div>

                  {/* Bayshore Legal Item (Clean white with subtle orange accent border) */}
                  <div className="p-3.5 sm:p-4 rounded-[12px] bg-white border border-[#FF5528]/35 shadow-[0_2px_12px_rgba(255,85,40,0.05)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFEAE3] text-[#FF5528]">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-mono text-[10px] sm:text-[10.5px] uppercase font-bold tracking-wider text-[#FF5528]">
                          Bayshore Legal Lead Gen
                        </span>
                      </div>
                      <h5 className="font-instrument text-[14px] sm:text-[14.5px] font-bold text-[#0A192F] leading-snug">
                        {row.bayshore.title}
                      </h5>
                    </div>
                    <p className="font-instrument text-[12px] sm:text-[12.5px] text-[#556377] mt-2 leading-relaxed">
                      {row.bayshore.description}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

