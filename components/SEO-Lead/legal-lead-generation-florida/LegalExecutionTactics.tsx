"use client";

import React, { useState } from "react";
import { Search, TrendingUp, Layout, Database } from "lucide-react";

interface TacticItem {
  id: string;
  step: string;
  tabLabel: string;
  tabIcon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const TACTICS_DATA: TacticItem[] = [
  {
    id: "seo-maps",
    step: "01",
    tabLabel: "Legal SEO & Map Pack",
    tabIcon: Search,
    title: "Legal SEO and Local Map Pack Optimization",
    description:
      "Our team builds practice area pages and city landing environments designed to capture high-intent search queries in your Florida target markets. We secure authoritative legal backlinks and systematically optimize your Google Business Profile to elevate your local map pack position. Top rankings in map listings generate high-intent phone calls from consumers seeking immediate representation. Comprehensive optimization ensures your practice appears prominently when local clients need immediate help.",
  },
  {
    id: "paid-search-lsa",
    step: "02",
    tabLabel: "Paid Search & LSA",
    tabIcon: TrendingUp,
    title: "Paid Search and Local Services Ads Management",
    description:
      "Pay-per-click and Local Services Ads campaigns focus on cost-per-signed-case rather than mere click volume. We manage search bids, apply aggressive negative keyword lists, and refine county geo-fencing so your ad spend targets individuals ready to hire an attorney. Continuous bid optimization prevents budget wastage during non-performing hours. Targeting actual legal intent ensures ad budgets turn into active clients.",
  },
  {
    id: "landing-pages-cro",
    step: "03",
    tabLabel: "Landing Pages & CRO",
    tabIcon: Layout,
    title: "Practice-Specific Landing Pages and CRO",
    description:
      "When visitors land on a general firm homepage, it will lower conversion rates and also squander ad dollars. Custom Landing Pages are designed per specific practice area, emphasizing the firm's credentials, client reviews and direct contact options. A/B testing will fine tune forms and messaging for the most conversions of visitors to a signed client. All layout changes are designed to direct people towards taking action.",
  },
  {
    id: "intake-crm",
    step: "04",
    tabLabel: "Intake Automation & CRM",
    tabIcon: Database,
    title: "Intake Automation and Legal CRM Integration",
    description:
      "Unanswered inquiries represent lost revenue for your practice. We build the lead capture into your legal case management system or CRM system. Automated text responses, instant phone routing, and follow-up messages help to keep leads engaged until your intake team has finished the retainer agreement. By connecting marketing platforms directly to your database, you don't lose out on any valuable contacts.",
  },
];

export default function LegalExecutionTactics() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTactic = TACTICS_DATA[activeTab];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* ===================================================================
            HEADER: EYEBROW (IV. WHAT WE DO), HEADLINE & INTRO FROM DOC
            =================================================================== */}
        <div className="mb-10 sm:mb-12 lg:mb-14 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IV.</span> WHAT WE DO
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Operational Execution Across the Pipeline
          </h2>

          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Behind every successful acquisition campaign lies a series of finely tuned marketing techniques working in harmony. We deploy modern technology assets to capture motivated searchers across your designated service counties.
          </p>
        </div>

        {/* ===================================================================
            INTERACTIVE CARD: TABS ON LEFT + DYNAMIC CONTENT ON RIGHT
            =================================================================== */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9F2] shadow-[0_10px_40px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Vertical Tabs (No numbers) */}
          <div className="w-full lg:w-[440px] xl:w-[470px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#EEF2F6] bg-[#FCFDFE]">
            <div className="flex flex-col">
              {TACTICS_DATA.map((tactic, idx) => {
                const Icon = tactic.tabIcon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={tactic.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`group relative flex items-center justify-between px-6 sm:px-8 lg:px-9 py-5 sm:py-6 lg:py-[26px] text-left transition-all duration-200 border-b border-[#EEF2F6] last:border-b-0 cursor-pointer ${
                      isActive ? "bg-white shadow-[inset_0_1px_0_rgba(255,85,40,0.06)]" : "hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#FF5528] rounded-r-sm"
                        aria-hidden="true"
                      />
                    )}

                    <div className="flex items-center gap-4 sm:gap-5">
                      <div
                        className={`flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-[#FFF0EB] border border-[#FF5528]/30 text-[#FF5528] shadow-[0_2px_12px_rgba(255,85,40,0.12)] scale-105"
                            : "bg-[#F1F5F9] border border-transparent text-[#64748B] group-hover:bg-[#E2E8F0] group-hover:text-[#0A192F]"
                        }`}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-200" />
                      </div>

                      <span
                        className={`font-playfair text-[18px] sm:text-[19px] lg:text-[20px] xl:text-[21px] leading-snug transition-colors duration-200 ${
                          isActive
                            ? "font-bold text-[#0A192F]"
                            : "font-semibold text-[#334155] group-hover:text-[#0A192F]"
                        }`}
                      >
                        {tactic.tabLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Tactic Content */}
          <div className="flex-1 p-6 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-start bg-white">
            <div>
              <p className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
                OPERATIONAL TACTIC {activeTactic.step}
              </p>

              <h3 className="font-playfair mt-2 text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0A192F] leading-tight">
                {activeTactic.title}
              </h3>

              <div className="mt-5 pt-5 border-t border-[#EEF2F6]">
                <p className="font-instrument text-[16px] sm:text-[17px] text-[#4A5568] leading-[1.76] max-w-[780px]">
                  {activeTactic.description}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
