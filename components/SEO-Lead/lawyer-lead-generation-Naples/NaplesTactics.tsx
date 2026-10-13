"use client";

import React, { useState } from "react";
import {
  Search,
  Wrench,
  TrendingUp,
  MapPin,
  FileText,
  Target,
  PhoneCall,
} from "lucide-react";

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
    id: "legal-seo",
    step: "01",
    tabLabel: "Legal SEO",
    tabIcon: Search,
    title: "Legal SEO",
    description:
      "Legal SEO earns steady inquiries from Naples searchers long after a paid campaign pauses. We research keywords by practice area, then build service pages around each cluster. A personal injury page targets \"car accident lawyer Naples.\" A separate page handles \"slip and fall attorney Naples.\" Each page gets its own headline, its own proof and its own consultation offer.",
  },
  {
    id: "technical-fixes",
    step: "02",
    tabLabel: "Technical Fixes",
    tabIcon: Wrench,
    title: "Technical Fixes",
    description:
      "We repair slow load times, broken mobile layouts and duplicate pages. Internal links pass authority from your homepage to the practice pages earning revenue. Attorney profile pages carry bar admissions, case experience and speaking credits, which signal authority to Google and to cautious prospects.",
  },
  {
    id: "paid-search",
    step: "03",
    tabLabel: "Paid Search",
    tabIcon: TrendingUp,
    title: "Paid Search",
    description:
      "Google Ads places your firm on Naples searches within days of approval. We set location targeting to Collier County or a defined radius. Negative keywords such as \"free,\" \"jobs,\" and \"salary\" block low value clicks before they cost you money.",
  },
  {
    id: "lsa",
    step: "04",
    tabLabel: "Local Services Ads",
    tabIcon: MapPin,
    title: "Local Services Ads",
    description:
      "Separate campaigns for each practice area keep budgets aligned with case value. A wrongful death matter and a traffic ticket deserve very different bids. Local Services Ads add pay per lead placement with the Google Screened badge. We monitor lead disputes and request credits for calls outside your practice area.",
  },
  {
    id: "landing-page-improvement",
    step: "05",
    tabLabel: "Landing Page Improvement",
    tabIcon: FileText,
    title: "Landing Page Improvement",
    description:
      "Traffic costs the same whether a page converts at two percent or ten. We test headlines, form length, call buttons and consultation offers against one another. Winning versions replace losing ones and cost per lead falls over time.",
  },
  {
    id: "conversion-optimization",
    step: "06",
    tabLabel: "Conversion Optimization",
    tabIcon: Target,
    title: "Conversion Optimization",
    description:
      "Every landing page carries one goal. A DUI page asks for a call and an estate planning page offers a scheduled consultation. Distractions such as blog links and extra menus come off the page.",
  },
  {
    id: "lead-intake-followup",
    step: "07",
    tabLabel: "Lead Intake & Follow Up",
    tabIcon: PhoneCall,
    title: "Lead Intake & Follow Up",
    description:
      "Fast response wins consultations, so we build each intake workflow around speed. Missed call text back, instant email replies and online scheduling keep prospects engaged after hours and on weekends. We also review call recordings with your intake staff, then refine scripts around the questions prospects ask most.",
  },
];

export default function NaplesTactics() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTactic = TACTICS_DATA[activeTab];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IV.</span> WHAT WE DO
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Lead Generation Tactics Behind Each Pillar of Your Naples Campaign.
          </h2>

          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            A strong lawyer lead generation Naples campaign connects search visibility, paid traffic, landing pages and lead follow up into one system. Each pillar has a specific job in turning local searches into qualified consultations.
          </p>
        </div>

        {/* Interactive Tabs Card */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9F2] shadow-[0_10px_40px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col lg:flex-row">

          {/* Left Vertical Tabs (7 Tactics) */}
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
                    className={`group relative flex items-center justify-between px-6 sm:px-8 lg:px-9 py-5 sm:py-5.5 lg:py-6 text-left transition-all duration-200 border-b border-[#EEF2F6] last:border-b-0 cursor-pointer ${
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

          {/* Right Active Tactic Content */}
          <div className="flex-1 p-6 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-start bg-white">
            <div>
              <p className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
                TACTIC {activeTactic.step}
              </p>

              <h3 className="font-playfair mt-2 text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0A192F] leading-tight">
                {activeTactic.title}
              </h3>

              <div className="mt-4 pt-4 border-t border-[#EEF2F6]">
                <p className="font-instrument text-[15.5px] sm:text-[16.5px] text-[#4A5568] leading-[1.75] max-w-[760px]">
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
