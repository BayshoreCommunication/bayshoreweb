"use client";

import React from "react";
import { ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";

export default function FloridaBarRules() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IX.</span> ETHICS &amp; COMPLIANCE
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Florida Bar Advertising Rules Shape Every Campaign We Build.
          </h2>

          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.72] text-[#4A5568]">
            Ads follow Florida&apos;s rules on testimonials, past results and comparisons with other firms. Landing pages carry required disclaimers and avoid any suggestion of Bar endorsement. Every draft goes to your responsible attorney for review before any campaign launches.
          </p>
        </div>

        {/* 2 Rule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          
          {/* Rule 4-7 Card */}
          <div className="relative rounded-[24px] border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                <Scale size={24} />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF5528] bg-[#FFF2ED] px-3 py-1 rounded-full">
                ADVERTISING REGULATION
              </span>
            </div>

            <h3 className="font-playfair text-[24px] sm:text-[26px] font-bold text-[#0A192F] mb-4">
              Rule 4-7
            </h3>

            <p className="font-instrument text-[15.5px] sm:text-[16.5px] text-[#4A5568] leading-[1.75]">
              This rule governs lawyer advertising. Ads, landing pages, testimonials and case results all fall inside those rules.
            </p>

            <div className="mt-6 pt-5 border-t border-[#EEF2F6] flex items-center gap-2.5 text-[#0A192F] text-[13.5px] font-medium font-instrument">
              <CheckCircle2 size={16} className="text-[#FF5528] shrink-0" />
              <span>Full compliance review on copy, disclaimers, and claims</span>
            </div>
          </div>

          {/* Rule 4-7.22 Card */}
          <div className="relative rounded-[24px] border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                <ShieldCheck size={24} />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF5528] bg-[#FFF2ED] px-3 py-1 rounded-full">
                EXCLUSIVE LEADS
              </span>
            </div>

            <h3 className="font-playfair text-[24px] sm:text-[26px] font-bold text-[#0A192F] mb-4">
              Rule 4-7.22
            </h3>

            <p className="font-instrument text-[15.5px] sm:text-[16.5px] text-[#4A5568] leading-[1.75]">
              This rule governs referral services and directories, so firms buying leads should review it. We run campaigns for one firm and every lead goes straight to you. Your ethics counsel should confirm how the rules apply to your specific campaign.
            </p>

            <div className="mt-6 pt-5 border-t border-[#EEF2F6] flex items-center gap-2.5 text-[#0A192F] text-[13.5px] font-medium font-instrument">
              <CheckCircle2 size={16} className="text-[#FF5528] shrink-0" />
              <span>Zero reselling or multi-firm distribution; 100% exclusive</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
