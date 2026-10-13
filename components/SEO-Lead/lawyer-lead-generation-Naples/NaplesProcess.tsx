"use client";

import React from "react";
import { Search, Rocket, BarChart3, TrendingUp, ArrowRight, type LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "01 / Audit and Strategy",
    description:
      "We review your website, rankings, Google Business Profile, ad accounts and intake calls. Competing Naples firms get the same scrutiny, so gaps become visible. You receive a written report with priorities ranked by revenue potential.",
    icon: Search,
  },
  {
    number: "02",
    title: "02 / Build and Launch",
    description:
      "We launch optimized practice pages, Google Ads campaigns, Local Services Ads and tracking. Every conversion point, from phone numbers to forms, gets tagged before launch.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "03 / Track and Optimize",
    description:
      "Monthly reports show calls, forms, qualified leads, consultations and cost per qualified lead. Practice area performance sits side by side, so budget decisions follow real results.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "04 / Scale What Works",
    description:
      "We expand the keywords, practice areas and neighborhoods already producing signed cases. Weak campaigns lose budget each quarter and the strongest campaigns receive it.",
    icon: TrendingUp,
  },
];

export default function NaplesProcess() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XI.</span> THE ROADMAP
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            We Start Processing With Simple Four Steps.
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Step Top */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[13px] font-bold text-[#FF5528] tracking-widest uppercase">
                      STEP {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] group-hover:bg-[#FF5528] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title (h3) */}
                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-[#0A192F] mb-4">
                    {step.title}
                  </h3>

                  {/* Exact description */}
                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] text-[#4A5568]">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div className="mt-6 pt-4 border-t border-[#EEF2F6] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>PHASE {idx + 1} OF 4</span>
                  <ArrowRight size={14} className="text-[#FF5528] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
