"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  TrendingUp,
  FileText,
  Share2,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

// =============================================================================
// SERVICES DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
interface ServiceItem {
  id: string;
  step: string;
  tabLabel: string;
  tabIcon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "local-seo",
    step: "01",
    tabLabel: "Local SEO",
    tabIcon: Search,
    title: "Local SEO",
    description:
      "Local SEO helps customers find your business through location based searches. We build content around real services and real markets. The strategy can also support branded search, local discovery and organic visibility across multiple service areas. Our work can include:",
    bullets: [
      "Local keyword research",
      "Search intent mapping",
      "Service area research",
      "City pages",
      "Service pages",
      "Local content",
      "Internal linking",
      "Local citations",
      "Local relevance signals",
      "Technical SEO",
      "Mobile performance",
      "Structured data",
    ],
  },
  {
    id: "gbp-maps",
    step: "02",
    tabLabel: "Google Business Profile & Maps",
    tabIcon: MapPin,
    title: "Google Business Profile and Maps",
    description:
      "Your Google Business Profile can help local customers learn about your business before they visit your website. Profile accuracy matters across search and Maps. Customers often compare several local businesses in a short session. Clear services, strong business details and useful review signals can help your listing earn attention. We can work on:",
    bullets: [
      "Business categories",
      "Services",
      "Business details",
      "Location information",
      "Profile content",
      "Photos",
      "Review strategy",
      "Local relevance",
      "Google Maps visibility",
      "Calls",
      "Local actions",
    ],
  },
  {
    id: "google-ads",
    step: "03",
    tabLabel: "Google Ads for Local Leads",
    tabIcon: TrendingUp,
    title: "Google Ads for Local Leads",
    description:
      "Google Ads can capture demand from people actively searching for your services. A local Google Ads campaign should reflect the service area and the service itself. A campaign for Tampa investment properties can use different keywords and landing page messaging from a campaign for retirement communities in Sarasota. Same goes for law, healthcare industries. Campaign strategy can include:",
    bullets: [
      "High intent keywords",
      "Service specific campaigns",
      "City targeting",
      "County targeting",
      "Geo targeting",
      "Negative keywords",
      "Search term review",
      "Call campaigns",
      "Conversion tracking",
      "Budget allocation",
      "Landing page alignment",
    ],
  },
  {
    id: "landing-pages-cro",
    step: "04",
    tabLabel: "Landing Pages & CRO",
    tabIcon: FileText,
    title: "Local Landing Pages and Conversion Optimization",
    description:
      "Your landing page gives search traffic a place to act. A paid search visitor should see a page connected to the ad. An organic visitor should find clear service information and a logical next step. Conversion optimization can cover page structure, headlines, forms, calls to action and trust elements. We can build or improve pages around:",
    bullets: [
      "Service + city combinations",
      "Local offers",
      "Click to call actions",
      "Short forms",
      "Booking flows",
      "Mobile conversion",
      "Trust signals",
      "Message matching",
      "CTA placement",
      "Form testing",
    ],
  },
  {
    id: "social-media",
    step: "05",
    tabLabel: "Social Media Lead Gen",
    tabIcon: Share2,
    title: "Social Media Lead Generation",
    description:
      "Social media can support local demand when the audience and service fit the platform. Social campaigns can support services with visual proof, strong offers, repeat buying patterns or a longer consideration cycle. We use the platforms and campaign formats supported by your business goals. Campaigns can include:",
    bullets: [
      "Meta lead campaigns",
      "Facebook lead forms",
      "Instagram campaigns",
      "Local audience targeting",
      "Retargeting",
      "Local offers",
      "Creative testing",
    ],
  },
  {
    id: "tracking-crm",
    step: "06",
    tabLabel: "Lead Tracking & CRM",
    tabIcon: BarChart3,
    title: "Lead Tracking and CRM",
    description:
      "Lead tracking connects marketing activity with real customer actions. Tools can include Google Analytics 4, Google Tag Manager, Google Ads conversion tracking and CRM systems. We can track:",
    bullets: [
      "Phone calls",
      "Forms",
      "Booking requests",
      "Lead sources",
      "Campaigns",
      "Keywords",
      "Landing pages",
      "Lead status",
      "Qualified lead rate",
      "Appointment rate",
      "Customer attribution",
      "Revenue data where available",
    ],
  },
];

export default function PillarTactics() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = SERVICES_DATA[activeTab];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* ===================================================================
            HEADER: EYEBROW (IV. WHAT WE DO), HEADLINE & INTRO FROM DOC
            =================================================================== */}
        <div className="mb-10 sm:mb-12 lg:mb-14 max-w-[900px]">
          {/* Section Tag */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IV.</span> WHAT WE DO
            </span>
          </div>

          {/* Headline from Doc */}
          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Services We Provide For Local Businesses To Generate Leads
          </h2>

          {/* Paragraph from Doc */}
          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Bayshore Communication connects local acquisition channels around your market and service goals.
          </p>
        </div>

        {/* ===================================================================
            INTERACTIVE CARD: TABS ON LEFT + DYNAMIC CONTENT ON RIGHT
            =================================================================== */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9F2] shadow-[0_10px_40px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col lg:flex-row">

          {/* ----------------- LEFT: VERTICAL TABS (6 SERVICES) ----------------- */}
          <div className="w-full lg:w-[440px] xl:w-[470px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#EEF2F6] bg-[#FCFDFE]">
            <div className="flex flex-col">
              {SERVICES_DATA.map((service, idx) => {
                const Icon = service.tabIcon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`group relative flex items-center justify-between px-4.5 sm:px-8 lg:px-9 py-5 sm:py-6 lg:py-[25px] text-left transition-all duration-200 border-b border-[#EEF2F6] last:border-b-0 cursor-pointer ${
                      isActive ? "bg-white shadow-[inset_0_1px_0_rgba(255,85,40,0.06)]" : "hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#FF5528] rounded-r-sm"
                        aria-hidden="true"
                      />
                    )}

                    {/* Left Side: Icon Badge + Tab Label */}
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
                        {service.tabLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------- RIGHT: ACTIVE SERVICE CONTENT & BULLETS ----------------- */}
          <div className="flex-1 p-6 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-start bg-white">
            <div>
              {/* Service Step Badge */}
              <p className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
                SERVICE {activeService.step}
              </p>

              {/* Title from Doc */}
              <h3 className="font-playfair mt-2 text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0A192F] leading-tight">
                {activeService.title}
              </h3>

              {/* Description from Doc */}
              <p className="font-instrument mt-3 text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.72] max-w-[780px]">
                {activeService.description}
              </p>

              {/* Bullets Grid from Doc */}
              <div className="mt-7 pt-6 border-t border-[#EEF2F6]">
                <h4 className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#64748B] uppercase mb-4">
                  WHAT OUR WORK INCLUDES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {activeService.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2.5 rounded-lg border border-[#F1F5F9] bg-[#FAFCFF] px-3.5 py-2.5 text-[14px] text-[#0A192F] transition-all hover:border-[#FF5528]/30"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5528] mt-0.5" />
                      <span className="font-instrument leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
