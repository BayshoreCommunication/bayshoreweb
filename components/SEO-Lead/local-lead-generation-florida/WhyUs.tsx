"use client";

import React from "react";
import { MapPin, BarChart3, Award, Check } from "lucide-react";

// =============================================================================
// WHY US DATA & APPROACH TABLE FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const WHY_US_PILLARS = [
  {
    icon: MapPin,
    title: "Local Market Targeting",
    description:
      "Our team plans by region, metro and county, so budgets land where you operate. Geo qualified leads reach 96% across campaigns, since ads and pages match your boundaries.",
    statValue: "96%",
    statLabel: "Geo-Qualified Leads",
  },
  {
    icon: BarChart3,
    title: "Full Funnel Accountability",
    description:
      "We report cost per lead, cost per qualified lead and cost per booked appointment. Your CRM shows each source, so you can judge us by customers instead.",
    statValue: "100%",
    statLabel: "CRM & Funnel Tracking",
  },
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "Bayshore was founded in 2016 and has served more than 70 clients. Law, dental, chiropractic and real estate campaigns taught us what each customer expects. Our 90% client retention rate reflects results and you can request references.",
    statValue: "90%",
    statLabel: "Client Retention Rate",
  },
];

const APPROACH_ROWS = [
  { ourApproach: "Local market targeting", typical: "Broad geographic targeting" },
  { ourApproach: "City and service area campaigns", typical: "General campaigns" },
  { ourApproach: "Local search strategy", typical: "General digital marketing" },
  { ourApproach: "Qualified lead focus", typical: "Lead volume focus" },
  { ourApproach: "Local landing pages", typical: "General website pages" },
  { ourApproach: "Lead tracking", typical: "Basic traffic reporting" },
  { ourApproach: "Follow up strategy", typical: "Lead delivery" },
  { ourApproach: "CRM integration", typical: "Separate sales process" },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-[#071326] py-14 sm:py-20 lg:py-28 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1580px] w-full px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">&sect;</span> WHY US
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Why Businesses Choose Bayshore for Local Lead Generation
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#94A3B8] max-w-[800px]">
            Lead generation requires close alignment between market research, search visibility and customer conversion. Bayshore Communication builds the program around those connections. Search &ldquo;local lead generation florida&rdquo; and many agencies promise volume, BUT we promise qualified customers.
          </p>
        </div>

        {/* 3 Main Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-18">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[22px] border border-white/10 bg-[#0E223D] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5528]/15 text-[#FF5528]">
                      <Icon size={26} />
                    </div>
                    <div className="text-right">
                      <span className="font-inter text-[28px] sm:text-[32px] font-bold text-[#FF5528] leading-none block">
                        {pillar.statValue}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94A3B8] mt-1 block">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-instrument text-[14.5px] leading-[1.7] text-[#94A3B8]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Approach vs Typical Lead Generation Table */}
        <div className="rounded-[22px] border border-white/10 bg-[#0A1A2F] overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-white/10">
            <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-white">
              Our Approach vs. Typical Lead Generation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Our Approach Column */}
            <div className="p-6 sm:p-8">
              <h4 className="font-mono text-[12px] font-bold text-[#FF5528] tracking-[0.14em] uppercase mb-5">
                OUR APPROACH
              </h4>
              <div className="space-y-3.5">
                {APPROACH_ROWS.map((row, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14.5px] text-white">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5528]/20 text-[#FF5528]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="font-instrument">{row.ourApproach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Lead Generation Column */}
            <div className="p-6 sm:p-8 bg-white/[0.02]">
              <h4 className="font-mono text-[12px] font-bold text-[#94A3B8] tracking-[0.14em] uppercase mb-5">
                TYPICAL LEAD GENERATION
              </h4>
              <div className="space-y-3.5">
                {APPROACH_ROWS.map((row, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14.5px] text-[#94A3B8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#64748B] shrink-0 ml-1.5 mr-1" />
                    <span className="font-instrument">{row.typical}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
