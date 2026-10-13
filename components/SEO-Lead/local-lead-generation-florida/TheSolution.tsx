"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

// =============================================================================
// ICONS
// =============================================================================

function SearchIcon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7.5" />
      <line x1="17.5" y1="17.5" x2="23" y2="23" />
    </svg>
  );
}

function BarChart3Icon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="16" width="5.2" height="7.5" rx="1.4" />
      <rect x="11.4" y="11" width="5.2" height="12.5" rx="1.4" />
      <rect x="18.8" y="5.5" width="5.2" height="18" rx="1.4" />
    </svg>
  );
}

function UsersGroupIcon({ className = "w-8 h-8 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="8.8" r="3.4" />
      <path d="M14 13.8c-3.3 0-5.9 2-5.9 4.6v1.2h11.8v-1.2c0-2.6-2.6-4.6-5.8-4.6z" />
      <circle cx="7.2" cy="10.8" r="2.6" />
      <path d="M7.2 15c-1.9 0-3.6 1.2-4.2 2.9v1.7h3.8v-1.3c0-1.3.4-2.4 1.1-3.2-.2-.1-.5-.1-.7-.1z" />
      <circle cx="20.8" cy="10.8" r="2.6" />
      <path d="M20.8 15c-.2 0-.5 0-.7.1.7.8 1.1 1.9 1.1 3.2v1.3h3.8v-1.7c-.6-1.7-2.3-2.9-4.2-2.9z" />
    </svg>
  );
}

// =============================================================================
// PILLARS DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const PILLARS = [
  {
    step: "01",
    title: "Visibility",
    icon: SearchIcon,
    description:
      "Your visibility strategy can include Local SEO, Google Business Profile optimization, Google Maps visibility, Google Ads, local landing pages and content built around service intent. We also look at search experiences beyond traditional blue links. AI search and answer engines can surface local businesses through content, business information, reviews and other signals. Your website structure can support visibility across Google Search, Google AI Overviews, ChatGPT, Gemini and Perplexity where relevant. The channel mix depends on your market, service, competition and growth goals.",
  },
  {
    step: "02",
    title: "Conversion",
    icon: BarChart3Icon,
    description:
      "Your landing page should answer the questions a local buyer has before taking action. Local offers can give visitors a clear reason to act. A strong service page can support organic traffic. A dedicated paid landing page can match a Google Ads campaign more closely. Mobile experience matters for local search. A customer may see your listing on a phone, tap your number and call within seconds. A customer may also complete a short form or book an appointment from the same device.",
  },
  {
    step: "03",
    title: "Follow Up",
    icon: UsersGroupIcon,
    description:
      "Lead generation continues after the form or call. Your response process can include, call handling, SMS responses, email follow up, appointment reminders, CRM workflows, lead nurturing, missed call recovery, lead reactivation. Speed matters because a fresh inquiry can lose urgency quickly. A missed call can trigger a text response. A form submission can create a team alert. An appointment request can move into a booking workflow. Older leads can receive a planned reactivation sequence. The goal is a clear handoff from marketing to sales or service.",
  },
];

export default function TheSolution() {
  return (
    <section className="relative w-full bg-[#F3F4F7] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* ===================================================================
            HEADER: EYEBROW (III. THE FRAMEWORK), TITLE & INTRO COPY FROM DOC
            =================================================================== */}
        <div className="text-center max-w-[860px] mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">III.</span> THE FRAMEWORK
            </span>
          </div>

          {/* Headline from Doc */}
          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Local Lead Generation System Built Around Three Pillars
          </h2>

          {/* Subtitle Paragraph from Doc */}
          <p className="font-instrument mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#556377] max-w-[720px] mx-auto">
            Local lead generation works best as one connected system. Visibility brings the right audience to your business. Conversion turns attention into inquiries. Follow up moves inquiries toward appointments and sales.
          </p>
        </div>

        {/* ===================================================================
            3 PILLARS CARDS GRID
            =================================================================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-[#E5E9F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Top Bar: Icon Badge + Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>

                    <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#FF5528] tracking-tight">
                      {pillar.step}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 className="font-playfair text-[22px] sm:text-[24px] lg:text-[26px] font-bold leading-[1.25] text-[#0A192F] mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description from Doc */}
                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#4A5568]">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow for Flow */}
                {idx < PILLARS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#FF937B]">
                    <div className="h-8 w-8 rounded-full bg-white border border-[#E5E9F2] flex items-center justify-center shadow-sm">
                      <span className="text-primary font-bold text-xs">&rarr;</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
