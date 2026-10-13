"use client";

import React from "react";
import Link from "next/link";
import { Check, Target, BarChart3, Users } from "lucide-react";

// =============================================================================
// PRICING PACKAGES DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const FACTORS = [
  "Industry",
  "Search competition",
  "Target location",
  "Service area",
  "Lead value",
  "Lead volume",
  "Number of services",
  "Number of locations",
  "Acquisition channels",
  "Website condition",
  "Landing page needs",
  "Tracking requirements",
  "CRM requirements",
  "Ad budget",
];

const PACKAGES = [
  {
    id: "starter",
    icon: Target,
    tierLabel: "STARTER",
    title: "Starter (Single Channel Focus)",
    target: "Solo practitioners and single location businesses",
    priceRange: "$1,000 to $2,000 monthly",
    priceSubtext: "Management & ad budget",
    bullets: [
      "Local SEO or Google Ads for one primary service",
      "Google Business Profile optimization",
      "One city landing page",
      "Call and form tracking",
      "Monthly report",
    ],
    buttonText: "Get Started",
    buttonHref: "#contact",
  },
  {
    id: "growth",
    isPopular: true,
    badge: "MOST POPULAR",
    icon: BarChart3,
    tierLabel: "GROWTH",
    title: "Growth (Multi Channel Pipeline)",
    target: "Established practices and businesses",
    priceRange: "$3,000 to $6,000 monthly",
    priceSubtext: "Management & ad budget",
    bullets: [
      "Local SEO, Google Ads and Local Services Ads",
      "City and service landing pages",
      "Conversion testing",
      "Call tracking",
      "SMS and email follow up",
      "Monthly strategy call",
    ],
    buttonText: "Scale Your Leads",
    buttonHref: "#contact",
  },
  {
    id: "full-service",
    icon: Users,
    tierLabel: "FULL SERVICE",
    title: "Full Service Partner (End to End Program)",
    target: "Multi location and high volume businesses",
    priceRange: "$6,000 to $10,000 monthly",
    priceSubtext: "Management & ad budget",
    bullets: [
      "All three pillars across several Florida markets",
      "Dedicated account lead",
      "CRM integration and offline conversion imports",
      "Weekly optimization",
      "Quarterly strategy review",
      "Spanish language campaigns where relevant",
    ],
    buttonText: "Partner With Us",
    buttonHref: "#contact",
  },
];

export default function EngagementOptions() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">X.</span> PRICING & TIERS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Local Lead Generation Pricing
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#4A5568]">
            A local SEO campaign for one city has a different workload from a multi market program with SEO, Google Ads, landing pages and CRM integration. Several factors impact the investment:
          </p>

          {/* Factors Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {FACTORS.map((factor, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3 py-1 font-mono text-[11px] sm:text-[12px] text-[#475569]"
              >
                &bull; {factor}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pricing Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between rounded-[24px] border p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.isPopular
                    ? "bg-[#0A192F] text-white border-[#FF5528] shadow-[0_16px_40px_rgba(255,85,40,0.14)]"
                    : "bg-white text-[#0A192F] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div>
                  {/* Popular Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span className="rounded-full bg-[#FF5528] px-3.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white uppercase shadow-sm">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Header: Tier Label & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#FF5528] uppercase">
                      {pkg.tierLabel}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        pkg.isPopular
                          ? "bg-white/10 text-[#FF5528]"
                          : "bg-[#FFF2ED] text-[#FF5528]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Package Title */}
                  <h3 className="font-playfair text-[21px] sm:text-[23px] font-bold leading-tight mb-2">
                    {pkg.title}
                  </h3>

                  {/* Target Audience */}
                  <p
                    className={`font-instrument text-[13.5px] mb-5 ${
                      pkg.isPopular ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {pkg.target}
                  </p>

                  {/* Price Range */}
                  <div className="pb-5 mb-5 border-b border-current/10">
                    <p className="font-inter text-[24px] sm:text-[27px] font-bold tracking-tight">
                      {pkg.priceRange}
                    </p>
                    <p
                      className={`font-mono text-[11px] tracking-wider mt-1 ${
                        pkg.isPopular ? "text-[#94A3B8]" : "text-[#64748B]"
                      }`}
                    >
                      {pkg.priceSubtext}
                    </p>
                  </div>

                  {/* Bullets List */}
                  <div className="space-y-3 mb-8">
                    {pkg.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[14px]">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5528]/20 text-[#FF5528] mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-instrument leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={pkg.buttonHref}
                  className={`inline-flex h-[48px] w-full items-center justify-center rounded-[8px] text-[14.5px] font-semibold transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-[#FF5528] text-white hover:bg-[#e44317] shadow-[0_6px_20px_rgba(255,85,40,0.35)]"
                      : "bg-[#0A192F] text-white hover:bg-[#FF5528]"
                  }`}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
