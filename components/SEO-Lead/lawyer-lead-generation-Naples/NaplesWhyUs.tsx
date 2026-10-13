"use client";

import React from "react";
import { Scale, MapPin, BarChart3, CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    icon: Scale,
    title: "Legal Industry Experience",
    description:
      "We work with Florida injury, immigration and family law firms every week. This experience shows in how we handle case value, intake and Bar rules.",
    statValue: "90%",
    statLabel: "Client Retention Rate",
  },
  {
    icon: MapPin,
    title: "Local Market Targeting",
    description:
      "Our team studies how legal search behavior differs across Naples and counties. Your budget stays inside Collier County and neighboring markets you actually serve.",
    statValue: "96%",
    statLabel: "Leads Geo Qualified",
  },
  {
    icon: BarChart3,
    title: "Full Funnel Accountability",
    description:
      "We track cost per lead and cost per consultation for every campaign. Then we help connect those numbers to signed cases inside your CRM.",
    statValue: "500K+",
    statLabel: "Total Leads Generated",
  },
];

export default function NaplesWhyUs() {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-[#071326] py-14 sm:py-20 lg:py-28 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1580px] w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">&sect;</span> ADVANTAGE
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Why Choose US
          </h2>
        </div>

        {/* 3 Main Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#0E223D] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/50 hover:shadow-[0_16px_40px_rgba(255,85,40,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5528]/15 text-[#FF5528]">
                      <Icon size={26} />
                    </div>
                    <div className="text-right">
                      <span className="font-inter text-[28px] sm:text-[34px] font-bold text-[#FF5528] leading-none block">
                        {reason.statValue}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94A3B8] mt-1.5 block">
                        {reason.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-[21px] sm:text-[23px] font-bold text-white mb-3">
                    {reason.title}
                  </h3>

                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#94A3B8]">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-2 text-white/50 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-[#FF5528]" />
                  <span>Florida Legal Growth Specialist</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
