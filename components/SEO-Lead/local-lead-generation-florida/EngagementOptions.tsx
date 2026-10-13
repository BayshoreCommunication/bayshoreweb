"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  BarChart3,
  Users,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface PlanItem {
  id: string;
  badge?: string;
  icon: LucideIcon;
  tierLabel: string;
  isPopular?: boolean;
  title: string;
  features: string[];
  bestFor: string;
  buttonText: string;
  buttonHref: string;
}

const PLANS: PlanItem[] = [
  {
    id: "starter",
    icon: Target,
    tierLabel: "STARTER",
    title: "Single-Channel Focus",
    features: [
      "One core channel: SEO or Paid Search",
      "One primary practice area",
      "Monthly performance reporting",
    ],
    bestFor: "Solo practitioners & small firms",
    buttonText: "Explore Starter Plan",
    buttonHref: "#contact",
  },
  {
    id: "growth",
    badge: "MOST POPULAR",
    isPopular: true,
    icon: BarChart3,
    tierLabel: "GROWTH",
    title: "Multi-Channel Pipeline",
    features: [
      "SEO + Paid Search + LSA",
      "Conversion-optimized landing pages",
      "Call tracking & monthly strategy calls",
    ],
    bestFor: "Growing firms with 2–5 attorneys",
    buttonText: "Explore Growth Plan",
    buttonHref: "#contact",
  },
  {
    id: "enterprise",
    icon: Users,
    tierLabel: "FULL-SERVICE PARTNER",
    title: "End-to-End Program",
    features: [
      "Full pillar coverage: Visibility, Conversion, Follow-Through",
      "Multi-office & multi-market management",
      "Dedicated intake & CRM integration",
    ],
    bestFor: "Multi-office & high-volume firms",
    buttonText: "Explore Enterprise Plan",
    buttonHref: "#contact",
  },
];

export default function EngagementOptions() {
  return (
    <section
      id="engagement-options"
      className="relative w-full bg-white py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28 border-t border-[#EEF2F6]/90 overflow-hidden"
    >
      <div className="mx-auto max-w-[1580px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* =======================================================================
            HEADER: SERIAL TAG XIII, HEADLINE & INTRO
            Strict Roman numeral serial, no border, matching design standard
            ======================================================================= */}
        <div className="max-w-[920px] mb-10 sm:mb-12 lg:mb-16">
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XIV.</span> ENGAGEMENT OPTIONS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-3.5 sm:mt-4 md:mt-5 text-[30px] xs:text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[58px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
            Ways to work{" "}
            <span className="italic font-normal text-[#FF5528]">with us.</span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="font-instrument mt-3.5 sm:mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.68] text-[#556377] max-w-[760px]">
            Flexible engagement options designed for law firms at every stage of
            growth — from focused support to a full-service partnership.
          </p>
        </div>

        {/* =======================================================================
            THREE PRICING / ENGAGEMENT PLAN CARDS
            Fully responsive grid: 1-col on mobile, 3-col on md & desktop
            ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 items-stretch">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 border border-[#E5E9F2] hover:border-[#FF5528] ${
                  plan.isPopular
                    ? "bg-[#FFFBF9] shadow-[0_12px_40px_rgba(255,85,40,0.08)] hover:shadow-[0_20px_50px_rgba(255,85,40,0.16)]"
                    : "bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6 z-10">
                    <span className="inline-flex items-center rounded-full bg-[#FF5528] px-3.5 py-1 font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-white shadow-sm uppercase">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon Badge */}
                  <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 hover:scale-105">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  {/* Tier Label */}
                  <p
                    className={`font-mono text-[11px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase mt-4 sm:mt-5 ${
                      plan.isPopular ? "text-[#FF5528]" : "text-[#94A3B8]"
                    }`}
                  >
                    {plan.tierLabel}
                  </p>

                  {/* Plan Title */}
                  <h3 className="font-playfair text-[22px] sm:text-[23px] lg:text-[25px] font-bold text-[#0A192F] mt-1.5 leading-tight">
                    {plan.title}
                  </h3>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3.5 sm:space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-instrument text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Section: Divider, Best For & CTA */}
                <div className="mt-8 pt-6 sm:pt-7 border-t border-[#EEF2F6]">
                  {/* Best For Eyebrow & Description */}
                  <div>
                    <span className="font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#94A3B8] uppercase">
                      BEST FOR
                    </span>
                    <p className="font-instrument text-[13.5px] sm:text-[14px] font-medium text-[#334155] mt-1">
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* Action Button */}
                  {plan.isPopular ? (
                    <Link
                      href={plan.buttonHref}
                      className="group mt-5 sm:mt-6 flex h-[48px] sm:h-[50px] w-full items-center justify-between rounded-[10px] bg-[#FF5528] px-5 sm:px-6 text-[14px] sm:text-[14.5px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.26)] transition-all duration-200 hover:bg-[#e64619] hover:shadow-[0_10px_26px_rgba(255,85,40,0.36)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <Link
                      href={plan.buttonHref}
                      className="group mt-5 sm:mt-6 flex h-[48px] sm:h-[50px] w-full items-center justify-between rounded-[10px] border border-[#0A192F] bg-white px-5 sm:px-6 text-[14px] sm:text-[14.5px] font-semibold text-[#0A192F] transition-all duration-200 hover:bg-[#0A192F] hover:text-white hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
