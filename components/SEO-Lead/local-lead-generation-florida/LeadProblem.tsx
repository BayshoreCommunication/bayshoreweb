"use client";

import React from "react";

// =============================================================================
// ICONS
// =============================================================================

/** 01. Users / Audience Group icon */
function UsersGroupIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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

/** 02. Service Match / Funnel Icon */
function ServiceMatchIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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
      <rect x="4" y="4" width="20" height="20" rx="3" />
      <path d="M9 14l3.5 3.5L19 10" />
    </svg>
  );
}

/** 03. High Intent Phone / Action Icon */
function HighIntentIcon({ className = "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#FF5528]" }: { className?: string }) {
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
      <path d="M6.8 5.4c.7-.7 1.8-.9 2.7-.6.9.3 1.5.9 1.9 1.7l1.1 2.5c.4 1 .2 2.2-.5 3l-1.2 1.2c1.3 2.5 3.3 4.5 5.8 5.8l1.2-1.2c.8-.7 2-.9 3-.5l2.5 1.1c.8.4 1.4 1 1.7 1.9.3.9.1 2-.6 2.7l-1.6 1.6c-1.1 1.1-2.7 1.5-4.2 1.2-4.2-.8-8.1-3.2-11.2-6.3S3.6 13.8 2.8 9.6c-.3-1.5.1-3.1 1.2-4.2L6.8 5.4z" />
    </svg>
  );
}

// =============================================================================
// PROBLEMS / QUALIFICATION DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const PROBLEMS = [
  {
    step: "01",
    icon: UsersGroupIcon,
    title: "Reach Customers Inside Service Area",
    description:
      "Geographic fit starts with your actual coverage. A Tampa business may serve Tampa, Temple Terrace, Brandon and selected Hillsborough County areas. A business in Fort Myers may serve Cape Coral, Estero and nearby communities. A professional service firm may serve clients across several counties. Your campaigns should follow the real service area. Google Ads can use location targeting. Local SEO can support city and service area pages. Google Business Profile can reinforce local relevance. Landing pages can speak directly to each market. This structure keeps local search demand tied to the places your business can serve.",
  },
  {
    step: "02",
    icon: ServiceMatchIcon,
    title: "Match Leads With Services You Offer",
    description:
      "Your campaign should match the work your team can deliver. A lead for emergency plumbing has a different search intent from a lead for a full repipe. A family law inquiry has a different need from an estate planning inquiry. A home buyer has a different path from a seller. Keyword selection, ad copy, landing pages and forms should reflect each service. Service level targeting also makes reporting easier. You can see the services producing inquiries and the services producing booked appointments.",
  },
  {
    step: "03",
    icon: HighIntentIcon,
    title: "Identify High Intent Local Inquiries",
    description:
      "An inquiry becomes an opportunity when someone answers quickly and books the next step. Calls, form submissions, quote requests, consultation requests and appointments each need different responses. A call needs a person, a quote needs numbers and a form needs speed. We map each lead type to an owner, a deadline and a next action. Booked jobs then flow back into reporting, so budget follows what actually pays.",
  },
];

export default function LeadProblem() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* ===================================================================
              LEFT COLUMN: HEADLINE & COPY FROM DOC
              =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            {/* Section Tag */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">II.</span> THE PROBLEM
              </span>
            </div>

            {/* Headline from Doc */}
            <h2 className="font-playfair mt-5 text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] xl:text-[50px] leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
              Qualified Local Leads{" "}
              <span className="italic font-normal text-[#FF5528]">Matter More</span>{" "}
              Than Lead Volume.
            </h2>

            {/* Paragraph Text from Doc */}
            <p className="font-instrument mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#4A5568] max-w-[520px]">
              Lead volume gives you a number and your sales team an opportunity. A qualified local lead fits the service, lives or operates within the service area and shows a real need for the service. Lead qualification can use several signals at once.
            </p>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: TIMELINE TRACK + 3 QUALIFICATION CARDS
              =================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative">
              {/* Continuous vertical timeline connector line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-[#FF937B] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Stack of 3 cards with timeline dots and numbers */}
              <div className="flex flex-col gap-6 sm:gap-7">
                {PROBLEMS.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={problem.step}
                      className="group relative flex items-start gap-3 sm:gap-6 lg:gap-8"
                    >
                      {/* Timeline Dot + Number indicator */}
                      <div className="relative flex items-center shrink-0 z-10 w-12 sm:w-16 pt-6">
                        <div className="absolute left-[8px] sm:left-[10px] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#FF5528]" />
                        <span className="font-mono text-[14px] sm:text-[17px] font-bold text-[#FF5528] ml-6 sm:ml-8 tracking-tight">
                          {problem.step}
                        </span>
                      </div>

                      {/* Card Box */}
                      <div className="flex-1 rounded-[22px] sm:rounded-[26px] border border-[#E5E9F2] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5528]/40 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center gap-4 sm:gap-5 mb-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="font-playfair text-[19px] sm:text-[21px] md:text-[22px] font-bold leading-[1.3] text-[#0A192F] tracking-[-0.01em]">
                            {problem.title}
                          </h3>
                        </div>

                        <p className="font-instrument text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#4A5568]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
