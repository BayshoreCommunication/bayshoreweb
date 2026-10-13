"use client";

import React from "react";
import {
  Scale,
  Sparkles,
  Activity,
  Home,
  Wrench,
} from "lucide-react";

// =============================================================================
// INDUSTRIES DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const INDUSTRIES = [
  {
    step: "01",
    title: "Law Firms",
    icon: Scale,
    description:
      "Injury, immigration and family law searches each carry a different urgency and case value. Miami and Orlando reward Spanish language ads. Tampa Bay rewards tight local SEO. We draft ads and pages around Rule 4 to 7 of the Florida Bar's advertising rules. Your firm's ethics counsel reviews each advertisement and gives final approval before launch.",
  },
  {
    step: "02",
    title: "Dental Clinics",
    icon: Sparkles,
    description:
      "Emergency visits, implants and cosmetic work each trigger different searches and price sensitivity. Benefits often reset in January, so November and December reward \"use your benefits\" offers. Tracking setups keep patient details out of ad platforms, with privacy officer approval.",
  },
  {
    step: "03",
    title: "Chiropractic Practices",
    icon: Activity,
    description:
      "Florida's PIP rules give injured drivers just 14 days to begin covered treatment. Searches spike right after a crash, so \"car accident chiropractor\" campaigns need same day response. Our follow up sequences text new inquiries within minutes and offer the earliest open appointment.",
  },
  {
    step: "04",
    title: "Real Estate Agents",
    icon: Home,
    description:
      "Buyer searches for Naples and Sarasota homes often begin in New York or Chicago. So we target origin markets beside local ones, with pages written for relocating buyers. Seller leads come from neighborhood pages, home value tools and Google Business Profile posts. Leads route into your CRM, such as Follow Up Boss, within seconds.",
  },
  {
    step: "05",
    title: "Small and Local Businesses",
    icon: Wrench,
    description:
      "Plumbers, salons and contractors compete inside a ten mile radius, so precision pays off. A Fort Lauderdale plumber gains little from clicks in Jacksonville, over 300 miles north. Near me searches, Local Pack placement and same day booking carry most of the results. Other local service businesses get the same pipeline, rebuilt around their own customers.",
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative w-full bg-[#F3F5F8] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">

        {/* ===================================================================
            HEADER: EYEBROW (V. INDUSTRIES SERVED), HEADLINE & COPY FROM DOC
            =================================================================== */}
        <div className="mb-12 sm:mb-14 lg:mb-16 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">V.</span> INDUSTRIES SERVED
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Which Industries We Serve For Local Lead Generation in Florida
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Every business category has a different local search pattern. Florida has 67 counties. Bayshore builds the strategy around the service, customer journey and service area.
          </p>
        </div>

        {/* ===================================================================
            INDUSTRIES GRID (5 CARDS)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Top Bar: Icon Badge + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#FF5528] tracking-tight">
                      {industry.step}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold leading-[1.25] text-[#0A192F] mb-3">
                    {industry.title}
                  </h3>

                  {/* Description from Doc */}
                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#4A5568]">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
