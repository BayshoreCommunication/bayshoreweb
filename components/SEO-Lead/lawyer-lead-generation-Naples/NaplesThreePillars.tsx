"use client";

import React from "react";
import { Search, FileText, PhoneCall } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Pillar 01: Get Found by Searcher",
    icon: Search,
    description:
      "Legal SEO, Google Business Profile work and Google Ads put your firm in front of Naples searchers. Practice area pages answer searches like \"estate planning lawyer Naples\" with a direct offer. Local Services Ads place a Google Screened badge above organic results for eligible firms.",
  },
  {
    step: "02",
    title: "Pillar 02: Turn Search Traffic Into Legal Inquiries",
    icon: FileText,
    description:
      "Each landing page speaks to one practice area and one Naples audience. Click to call buttons sit within thumb reach on mobile, where most local legal searches happen. Attorney bios, verified reviews and case results build trust before the first call. Every page follows Florida Bar Rule on lawyer advertising, including testimonials and result claims.",
  },
  {
    step: "03",
    title: "Pillar 03: Turn New Inquiries Into Consultations",
    icon: PhoneCall,
    description:
      "Call tracking records every phone lead by source, keyword, campaign and landing page. Form submissions flow into your CRM and the prospect receives an instant confirmation. Reports link each consultation and signed case to the channel behind it.",
  },
];

export default function NaplesThreePillars() {
  return (
    <section className="relative w-full bg-[#F3F4F7] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-center max-w-[860px] mx-auto">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">III.</span> THE FRAMEWORK
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Law Firm Marketing Built On Three Pillars.
          </h2>

          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#556377] max-w-[720px] mx-auto">
            Bayshore runs three connected stages for every Naples law firm we serve. Each stage feeds the next, so weak spots surface in the monthly report.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-[#E5E9F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>

                    <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#FF5528] tracking-tight">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="font-playfair text-[20px] sm:text-[22px] lg:text-[23px] font-bold leading-[1.25] text-[#0A192F] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#4A5568]">
                    {pillar.description}
                  </p>
                </div>

                {idx < PILLARS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#FF937B]">
                    <div className="h-8 w-8 rounded-full bg-white border border-[#E5E9F2] flex items-center justify-center shadow-sm">
                      <span className="text-primary font-bold text-xs">&rarr;</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
