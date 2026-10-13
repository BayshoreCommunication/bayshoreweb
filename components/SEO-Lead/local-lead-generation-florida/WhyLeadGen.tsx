"use client";

import React from "react";
import { Search, Compass, Target, Landmark } from "lucide-react";

// Businesses and firms trust bar
const TRUSTED_FIRMS = [
  { name: "Carter Injury Law" },
  { name: "Melamed Law" },
  { name: "McCulloch Law" },
  { name: "Zarin & Associates" },
  { name: "Trip Law" },
];

const REASONS = [
  {
    icon: Search,
    title: "Local Search Creates the First Customer Touchpoint",
    description:
      "People often begin with a local search.Google Search can return organic pages, local results, Google Maps listings and paid ads. Google Business Profile also gives customers access to phone numbers, directions, reviews, photos, services and other business details. Your business needs relevant visibility for the searches tied to your services and service area. Local search also gives you strong signals about intent. A person searching for a service plus a city often has a specific need and a specific market in mind.",
  },
  {
    icon: Compass,
    title: "Visibility Needs a Conversion Path",
    description:
      "A visit gives your business an opportunity. A conversion path turns the opportunity into an inquiry. That path can include a service page, city page, landing page, click to call button, short form, quote request, consultation request or booking flow. The page also needs a clear reason for action. A local offer can help. Strong reviews can help. Service details, credentials, pricing guidance and clear next steps can help. Your traffic source, landing page and call to action should work as one system.",
  },
  {
    icon: Target,
    title: "Businesses Need Location Specific Targeting",
    description:
      "Broad campaigns often attract a mixed audience. Local lead generation gives your budget a defined target. Targeting works best in layers, from region and metro to county, city and neighborhood. A Boca Raton estate attorney wants Palm Beach County and Broward County adds waste. Broad campaigns collect inquiries from Georgia, New York and counties outside your reach. Each stray inquiry costs ad budget, intake time and a little team morale. Service area business owners should set boundaries first, then buy traffic inside them.",
  },
];

export default function WhyLeadGen() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24 border-t border-[#EEF2F6]/80">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* =========================================================================
            TRUSTED BY FLORIDA BUSINESSES (TRUST BAR)
            ========================================================================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <p className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-[#64748B] uppercase mb-4 sm:mb-5">
            TRUSTED BY FLORIDA BUSINESSES & PRACTICES
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-4">
            {TRUSTED_FIRMS.map((firm, idx) => (
              <div
                key={idx}
                className="group inline-flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-7 w-7 items-center justify-center text-[#64748B] transition-colors duration-300 group-hover:text-primary">
                  <Landmark size={18} strokeWidth={2.2} />
                </div>
                <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] text-[#0A192F]">
                  {firm.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION CONTENT: WHY FLORIDA LOCAL BUSINESSES NEED LEAD GENERATION
            ========================================================================= */}
        <div>
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-primary uppercase">
              I. THE WHY
            </span>
          </div>

          {/* Headline from Doc */}
          <h2 className="font-playfair mt-4 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F] max-w-[900px]">
            Why Florida Local Businesses Need Lead Generation
          </h2>

          {/* Orange Accent Line */}
          <div className="mt-4 mb-5 h-[3.5px] w-12 rounded-full bg-primary" />

          {/* Intro Paragraph from Doc */}
          <p className="font-instrument text-[16px] sm:text-[17px] md:text-[18px] leading-[1.72] text-[#4A5568] max-w-[860px]">
            Businesses need local lead generation to capture nearby customers, beat intense competition in fast growing metros and survive predictable seasonal shifts. Google Search, Google Maps, the Local Pack and paid search all give local businesses opportunities to reach people with active service intent. The next step depends on the page, offer, call path and follow up process.
          </p>

          {/* 3 Pillar Cards Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div>
                    {/* Circle Icon Badge */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF2ED] text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                    {/* Card Title (H3) */}
                    <h3 className="font-playfair mt-6 text-[20px] sm:text-[22px] font-bold leading-[1.25] text-[#0A192F]">
                      {reason.title}
                    </h3>

                    {/* Card Body from Doc */}
                    <p className="font-instrument mt-3 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#4A5568]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
