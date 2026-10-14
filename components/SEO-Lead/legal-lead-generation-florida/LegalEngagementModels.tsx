"use client";

import React from "react";
import Link from "next/link";
import { Check, Target, BarChart3, Users, type LucideIcon } from "lucide-react";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  icon: LucideIcon;
  description: string;
  features: string[];
  ctaText: string;
}

const PLANS: PlanTier[] = [
  {
    id: "starter",
    name: "Starter",
    icon: Target,
    description:
      "Built for solo practitioners who want to create a dependable client flow around a single practice area. This plan concentrates your marketing spend on one high impact channel, such as organic SEO or targeted paid search, to generate immediate momentum, establish local authority, and secure initial cases without overextending your operating capital.",
    features: [
      "Concentrated on one high-impact channel (SEO or Ads)",
      "Single practice area specialization",
      "Immediate local authority building",
      "Lead & call tracking reporting",
    ],
    ctaText: "Launch Starter Program",
  },
  {
    id: "growth",
    name: "Growth",
    isPopular: true,
    badge: "MOST POPULAR",
    icon: BarChart3,
    description:
      "Created for practices with two to five attorneys ready to capture a larger share of their local market. This tier connects organic SEO, Google Ads, and Local Services Ads into a unified campaign, backed by conversion focused landing pages and real time call tracking. Multiple search placements ensure your firm stays memorable across your core service counties.",
    features: [
      "Unified SEO, Google Ads & Local Services Ads",
      "Conversion-focused landing page design",
      "Real-time call tracking & attribution",
      "Multi-county coverage & strategy calls",
    ],
    ctaText: "Scale Caseload Growth",
  },
  {
    id: "full-service-partner",
    name: "Full Service Partner",
    icon: Users,
    description:
      "Engineered for practices with multiple offices needing comprehensive coverage across several metropolitan markets. This program delivers multi region campaign management, automated intake screening, instant prospect engagement, and seamless legal CRM integration. It gives firm leadership a scalable client acquisition system that transforms high search demand into signed retainers.",
    features: [
      "Multi-region metropolitan campaign management",
      "Automated intake screening & instant SMS",
      "Seamless legal CRM integration (Clio, Lawmatics, etc.)",
      "Dedicated account strategist & weekly optimization",
    ],
    ctaText: "Partner With Bayshore",
  },
];

export default function LegalEngagementModels() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">X.</span> FIRM ENGAGEMENT TIERS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Flexible Engagement Models for Growing Firms
          </h2>

          <p className="font-instrument mt-4 text-[16px] sm:text-[18px] md:text-[19px] leading-[1.7] text-[#556377]">
            Every law firm operates on a distinct scale with unique growth objectives. We provide three program tiers structured to meet your practice at its current stage, giving you the operational freedom to expand your marketing footprint as your caseload grows.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`group relative flex flex-col justify-between rounded-[24px] border p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 ${
                  plan.isPopular
                    ? "bg-[#0A192F] text-white border-[#FF5528] shadow-[0_16px_40px_rgba(255,85,40,0.15)]"
                    : "bg-white text-[#0A192F] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div>
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span className="rounded-full bg-[#FF5528] px-3.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white uppercase shadow-sm">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#FF5528] uppercase">
                      PROGRAM TIER
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        plan.isPopular ? "bg-white/10 text-[#FF5528]" : "bg-[#FFF2ED] text-[#FF5528]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-playfair text-[24px] sm:text-[27px] font-bold leading-tight mb-4">
                    {plan.name}
                  </h3>

                  <p
                    className={`font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] mb-6 ${
                      plan.isPopular ? "text-[#CBD5E1]" : "text-[#4A5568]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="space-y-3 pt-5 border-t border-current/10 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[14px]">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5528]/20 text-[#FF5528] mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-instrument leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contact"
                  className={`inline-flex h-[50px] w-full items-center justify-center rounded-[8px] text-[15px] font-semibold transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-[#FF5528] text-white hover:bg-[#e44317] shadow-[0_6px_20px_rgba(255,85,40,0.35)]"
                      : "bg-[#0A192F] text-white hover:bg-[#FF5528]"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
