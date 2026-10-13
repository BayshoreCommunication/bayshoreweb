"use client";

import React from "react";
import {
  Home,
  HeartHandshake,
  Building,
  Car,
  CloudRain,
  Users,
  Shield,
  Briefcase,
  Scale,
} from "lucide-react";

const PRACTICE_AREAS = [
  {
    step: "01",
    title: "Estate Planning and Probate",
    icon: Home,
    description:
      "Estate planning is the anchor practice area in Naples, so competition runs high. We target searches on trusts, wills and probate from Old Naples to Port Royal. Content addresses second home owners with property in Florida and legal ties elsewhere.",
  },
  {
    step: "02",
    title: "Elder Law and Guardianship",
    icon: HeartHandshake,
    description:
      "Elder law clients often arrive through an adult child searching on a parent's behalf. Pages speak to the adult child, covering Medicaid planning, guardianship and long term care costs. Senior living communities and NCH Healthcare System events offer natural outreach targets.",
  },
  {
    step: "03",
    title: "Real Estate Law",
    icon: Building,
    description:
      "Naples closings involve condo associations, HOAs and cash buyers from out of state. We target title, condo and closing searches from Vanderbilt Beach to Marco Island. Landing pages address buyer timelines, since a delayed closing costs clients real money.",
  },
  {
    step: "04",
    title: "Personal Injury and Auto Accidents",
    icon: Car,
    description:
      "Crashes on US-41, Collier Boulevard and I-75 generate steady injury searches all year. Winter traffic from seasonal residents and tourists pushes demand higher between January and April. Campaigns run heavier on Google Ads and LSA, where injury clients buy fast.",
  },
  {
    step: "05",
    title: "Property Damage and Hurricane Insurance Claims",
    icon: CloudRain,
    description:
      "Hurricane Ian in 2022 pushed many Collier County homeowners into insurance disputes. Claim denials and underpayments still drive searches long after each storm season ends. We schedule budget around hurricane season, June through November and the weeks after landfall.",
  },
  {
    step: "06",
    title: "Family Law and Divorce",
    icon: Users,
    description:
      "Divorce searches carry urgency, privacy concerns and a strong preference for local counsel. Pages cover the Collier County filing process, mediation and parenting plans in plain English. Confidential forms and text friendly contact options fit clients wary of a phone call.",
  },
  {
    step: "07",
    title: "Criminal Defense and DUI",
    icon: Shield,
    description:
      "Arrests happen at night, so criminal defense leads arrive after midnight and on weekends. We run always on Google Ads with call only formats and answering coverage around the clock. Content targets DUI, drug charges and boating under the influence cases along the Gulf coast.",
  },
  {
    step: "08",
    title: "Immigration and Workers' Compensation",
    icon: Briefcase,
    description:
      "Immokalee's agricultural workforce drives steady demand for immigration and workers' compensation counsel. Spanish language campaigns reach clients overlooked by English only advertising across Immokalee and Golden Gate. Construction, hospitality and landscaping injuries add more workers' compensation searches across the county.",
  },
  {
    step: "09",
    title: "Business and Commercial Law",
    icon: Scale,
    description:
      "Naples business owners search for contract disputes, partnership exits and employment counsel directly. Referral driven work responds to reputation, so reviews and thought leadership carry the campaign. A firm in another niche gets a custom campaign scoped during the audit.",
  },
];

export default function NaplesPracticeAreas() {
  return (
    <section className="relative w-full bg-[#F3F5F8] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14 lg:mb-16 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">V.</span> PRACTICE AREAS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Attorney Lead Generation In Naples, FL, for Every Practice Area.
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Bayshore serves several local industries. Law firms get our deepest attention and this page is written for them.
          </p>
        </div>

        {/* 9 Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PRACTICE_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#FF5528] tracking-tight">
                      {area.step}
                    </span>
                  </div>

                  <h3 className="font-playfair text-[20px] sm:text-[21px] font-bold leading-[1.25] text-[#0A192F] mb-3">
                    {area.title}
                  </h3>

                  <p className="font-instrument text-[14px] sm:text-[14.5px] leading-[1.7] text-[#4A5568]">
                    {area.description}
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
