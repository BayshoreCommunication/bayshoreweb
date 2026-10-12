"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, MapPin, FileText, Users, BarChart3 } from "lucide-react";

// =============================================================================
// DATA: TACTICS TABS & CONTENT
// =============================================================================
interface FeatureBadge {
  icon: React.ComponentType<{ className?: string }>;
  line1: string;
  line2: string;
}

interface TacticItem {
  id: string;
  step: string;
  tabLabel: string;
  tabIcon: React.ComponentType<{ className?: string }>;
  supportTag: string;
  title: string;
  description: string;
  features: FeatureBadge[];
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const TACTICS_DATA: TacticItem[] = [
  {
    id: "legal-seo",
    step: "01",
    tabLabel: "Legal SEO",
    tabIcon: Search,
    supportTag: "SUPPORTS: VISIBILITY",
    title: "Legal SEO",
    description:
      "Rank where injured, accused, or searching Floridians are actually looking. We build practice-area and city-specific pages, earn legal-relevant backlinks, and optimize your Google Business Profile so you show up in the map pack, not just page two.",
    features: [
      {
        icon: BarChart3,
        line1: "Higher rankings",
        line2: "in your practice area",
      },
      {
        icon: MapPin,
        line1: "Visibility in local",
        line2: "map results",
      },
      {
        icon: Users,
        line1: "More qualified,",
        line2: "case-ready leads",
      },
    ],
    primaryBtnText: "Grow Your Visibility",
    primaryBtnLink: "#visibility",
    secondaryBtnText: "Explore Paid Search",
    secondaryBtnLink: "#paid-search",
  },
  {
    id: "paid-search",
    step: "02",
    tabLabel: "Paid Search & LSA",
    tabIcon: MapPin,
    supportTag: "SUPPORTS: VISIBILITY & CONVERSION",
    title: "Paid Search & LSA",
    description:
      "Capture high-intent Floridians the moment they need representation. Hyper-targeted Google Ads and Local Services Ads managed with strict negative keyword filters and bidding built for high-value case acquisition.",
    features: [
      {
        icon: Search,
        line1: "High-intent calls",
        line2: "from active searchers",
      },
      {
        icon: MapPin,
        line1: "Google Screened",
        line2: "top-of-page badge",
      },
      {
        icon: BarChart3,
        line1: "Lower cost per",
        line2: "signed retainer",
      },
    ],
    primaryBtnText: "Launch Paid Search",
    primaryBtnLink: "#paid-search",
    secondaryBtnText: "See Landing Pages",
    secondaryBtnLink: "#landing-pages",
  },
  {
    id: "landing-pages",
    step: "03",
    tabLabel: "Landing Pages & CRO",
    tabIcon: FileText,
    supportTag: "SUPPORTS: CONVERSION",
    title: "Landing Pages & CRO",
    description:
      "Turn clicks into retained clients. High-converting legal landing pages with instant trust markers, clear case evaluation forms, and mobile-first call-to-actions that convert traffic instead of leaking ad spend.",
    features: [
      {
        icon: FileText,
        line1: "2.8x higher form",
        line2: "fill completion rate",
      },
      {
        icon: BarChart3,
        line1: "Mobile-first",
        line2: "tap-to-call design",
      },
      {
        icon: Users,
        line1: "Legal copy tested",
        line2: "for high conversion",
      },
    ],
    primaryBtnText: "Improve Conversion",
    primaryBtnLink: "#landing-pages",
    secondaryBtnText: "Explore Intake & Nurture",
    secondaryBtnLink: "#intake-nurture",
  },
  {
    id: "intake-nurture",
    step: "04",
    tabLabel: "Intake & Nurture",
    tabIcon: Users,
    supportTag: "SUPPORTS: FOLLOW-THROUGH",
    title: "Intake & Nurture",
    description:
      "Never lose a viable case to slow response times. Automated intake routing, instant 2-minute SMS response, and automated nurture sequences that follow up with potential clients until the retainer is signed.",
    features: [
      {
        icon: Users,
        line1: "Under 2-minute",
        line2: "intake response time",
      },
      {
        icon: FileText,
        line1: "Automated SMS",
        line2: "& email sequences",
      },
      {
        icon: BarChart3,
        line1: "Full CRM pipeline",
        line2: "tracking & analytics",
      },
    ],
    primaryBtnText: "Upgrade Your Intake",
    primaryBtnLink: "#intake-nurture",
    secondaryBtnText: "Get Free Audit",
    secondaryBtnLink: "#lead-audit",
  },
];

export default function PillarTactics() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTactic = TACTICS_DATA[activeTab];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* ===================================================================
            HEADER: EYEBROW (IV. WHAT WE DO), HEADLINE & INTRO
            =================================================================== */}
        <div className="mb-10 sm:mb-12 lg:mb-14 max-w-[850px]">
          {/* Section Tag (Maintains exact serial and design of previous sections) */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IV.</span> WHAT WE DO
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-4 text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            The tactics behind each pillar.
          </h2>

          {/* Paragraph */}
          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[720px]">
            A connected strategy across search, content, and follow-up — built
            specifically for law firms to generate more qualified, case-ready
            leads.
          </p>
        </div>

        {/* ===================================================================
            INTERACTIVE CARD: TABS ON LEFT + DYNAMIC CONTENT ON RIGHT
            =================================================================== */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9F2] shadow-[0_10px_40px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col lg:flex-row">

          {/* ----------------- LEFT: VERTICAL TABS ----------------- */}
          <div className="w-full lg:w-[360px] xl:w-[380px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#EEF2F6] bg-[#FCFDFE]">
            <div className="flex flex-col">
              {TACTICS_DATA.map((tactic, idx) => {
                const Icon = tactic.tabIcon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={tactic.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`group relative flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left transition-all duration-200 border-b border-[#EEF2F6] last:border-b-0 ${
                      isActive
                        ? "bg-white"
                        : "hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#FF5528]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Left Side: Icon Badge + Tab Label */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Circle Icon Badge */}
                      <div
                        className={`flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-[#FFF2ED] text-[#FF5528]"
                            : "bg-[#F1F5F9] text-[#475569] group-hover:bg-[#E2E8F0]"
                        }`}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      {/* Tab Label */}
                      <span
                        className={`font-playfair text-[17px] sm:text-[18px] lg:text-[19px] leading-snug transition-colors duration-200 ${
                          isActive
                            ? "font-bold text-[#0A192F]"
                            : "font-semibold text-[#334155] group-hover:text-[#0A192F]"
                        }`}
                      >
                        {tactic.tabLabel}
                      </span>
                    </div>

                    {/* Right Side: Step Number (01, 02, etc.) */}
                    <span
                      className={`font-mono text-[14px] sm:text-[15px] font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-[#FF5528]" : "text-[#94A3B8]"
                      }`}
                    >
                      {tactic.step}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------- RIGHT: ACTIVE TAB CONTENT ----------------- */}
          <div className="flex-1 p-6 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-between bg-white">
            <div>
              {/* Category Eyebrow */}
              <p className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-[#64748B] uppercase">
                {activeTactic.supportTag}
              </p>

              {/* Title */}
              <h3 className="font-playfair mt-2 sm:mt-3 text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-[#0A192F] leading-tight">
                {activeTactic.title}
              </h3>

              {/* Description */}
              <p className="font-instrument mt-3 sm:mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.72] max-w-[740px]">
                {activeTactic.description}
              </p>

              {/* 3 Mini Feature Pills / Row */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#EEF2F6] grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 lg:gap-6">
                {activeTactic.features.map((feature, fIdx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={fIdx}
                      className={`flex items-center gap-3.5 sm:gap-4 ${
                        fIdx !== 0 ? "sm:border-l sm:border-[#EEF2F6] sm:pl-4 lg:pl-6" : ""
                      }`}
                    >
                      {/* Peach Circle Icon */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                        <FeatureIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      {/* 2-line Text */}
                      <p className="font-instrument text-[13.5px] sm:text-[14px] leading-tight text-[#0A192F]">
                        <span className="font-bold block">{feature.line1}</span>
                        <span className="text-[#64748B] block mt-0.5">{feature.line2}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs Row */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-[#EEF2F6]/60 flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Primary Button */}
              <Link
                href={activeTactic.primaryBtnLink}
                className="group inline-flex h-[50px] sm:h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#FF5528] px-6 sm:px-7 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.25)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{activeTactic.primaryBtnText}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary Link */}
              <Link
                href={activeTactic.secondaryBtnLink}
                className="group inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-bold text-[#0A192F] underline underline-offset-[6px] decoration-[#0A192F] hover:text-[#FF5528] hover:decoration-[#FF5528] transition-all duration-200"
              >
                <span>{activeTactic.secondaryBtnText}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-[#0A192F] group-hover:text-[#FF5528]"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
