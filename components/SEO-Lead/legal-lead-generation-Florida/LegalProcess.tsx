"use client";

import React from "react";
import { Search, Rocket, BarChart3, TrendingUp, ArrowRight, type LucideIcon } from "lucide-react";

interface StepItem {
  number: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    name: "1. Audit & Strategy",
    description:
      "Before launching new campaigns, we perform a thorough diagnostic of your marketing ecosystem. We evaluate website traffic, past ad performance, local search rankings, and intake procedures to identify where prospective clients fall through the cracks. Locating these drop-off points allows us to fix leaky conversion paths before allocating new capital.",
    icon: Search,
  },
  {
    number: "02",
    name: "2. Build & Launch",
    description:
      "With a clear diagnostic complete, we construct conversion-driven assets built specifically for your practice areas. We design mobile-responsive landing pages, configure hyper-local ad accounts, and fully optimize your Google Business Profile to capture local map traffic. Every asset is designed to guide qualified searchers directly toward booking a consultation.",
    icon: Rocket,
  },
  {
    number: "03",
    name: "3. Track & Optimize",
    description:
      "Launching a campaign is only the beginning. We implement call tracking and link marketing data directly to your signed retainer records. Instead of measuring vanity metrics like clicks or pageviews, we monitor actual acquisition costs per case. As performance data accumulates, we refine keyword bidding, ad schedules, and messaging to maximize your return on ad spend.",
    icon: BarChart3,
  },
  {
    number: "04",
    name: "4. Scale What Works",
    description:
      "Once the baseline framework consistently yields signed cases, we focus on profitable expansion. We shift budget toward the highest-performing search queries, extend coverage into high-value adjacent counties, and increase ad volume across top practice areas. This controlled expansion builds a stable, repeatable client pipeline that grows alongside your firm.",
    icon: TrendingUp,
  },
];

export default function LegalProcess() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IX.</span> IMPLEMENTATION ROADMAP
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Strategic Implementation and Flexible Engagement
          </h2>

          <p className="font-instrument mt-4 text-[16px] sm:text-[18px] md:text-[19px] leading-[1.7] text-[#556377]">
            Our onboarding process enables your firm to launch custom acquisition pipelines without disrupting daily operations. Flexible engagement models give your law practice the ability to scale marketing efforts as your caseload grows.
          </p>
        </div>

        {/* Subhead: 4 Step Execution Framework */}
        <div className="mb-8 max-w-[800px]">
          <h3 className="font-playfair text-[24px] sm:text-[27px] font-bold text-[#0A192F]">
            4 Step Execution Framework
          </h3>
          <p className="font-instrument mt-2 text-[15px] sm:text-[16px] text-[#4A5568]">
            Our four-stage execution upgrades your firm&apos;s client acquisition process from the ground up, replacing guesswork with a predictable growth engine.
          </p>
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
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[13px] font-bold text-[#FF5528] tracking-widest uppercase">
                      STEP {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] group-hover:bg-[#FF5528] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h4 className="font-playfair text-[20px] sm:text-[22px] font-bold text-[#0A192F] mb-4">
                    {step.name}
                  </h4>

                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] text-[#4A5568]">
                    {step.description}
                  </p>
                </div>

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
