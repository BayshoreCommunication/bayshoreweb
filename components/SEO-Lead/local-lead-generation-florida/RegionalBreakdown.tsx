"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface RegionalMarket {
  regionNum: string;
  title: string;
  metros: string;
  description: string;
  image: string;
}

const REGIONAL_MARKETS: RegionalMarket[] = [
  {
    regionNum: "REGION 01",
    title: "Tampa Bay",
    metros: "Tampa · St. Petersburg · Clearwater",
    description:
      "Dense, mid-size firm competition, heaviest in personal injury and workers' comp. Winning here takes sharp local SEO and LSA bid discipline, not just ad spend.",
    image: "/assets/seo-lead/regional-01-tampa.jpg",
  },
  {
    regionNum: "REGION 02",
    title: "Central Florida",
    metros: "Orlando · Kissimmee · Lakeland",
    description:
      "High tourist- and rideshare-accident volume plus strong immigration demand, driven by a large, transient, international population base.",
    image: "/assets/seo-lead/regional-02-central.jpg",
  },
  {
    regionNum: "REGION 03",
    title: "South Florida",
    metros: "Miami · Fort Lauderdale · West Palm Beach",
    description:
      "The most competitive — and highest case-value — legal market in the state. Bilingual, Spanish-language campaigns are often essential, not optional, here.",
    image: "/assets/seo-lead/regional-03-south.jpg",
  },
  {
    regionNum: "REGION 04",
    title: "North Florida",
    metros: "Jacksonville · Tallahassee",
    description:
      "Lower cost-per-click and a growing population make this an efficient market to scale early, with steady demand across PI and family law.",
    image: "/assets/seo-lead/regional-04-north.jpg",
  },
  {
    regionNum: "REGION 05",
    title: "Southwest Florida",
    metros: "Naples · Fort Myers · Sarasota",
    description:
      "A large retiree population drives rising demand for estate planning, probate, and elder law — an underserved niche in most SWFL firms' current marketing.",
    image: "/assets/seo-lead/regional-05-southwest.jpg",
  },
  {
    regionNum: "REGION 06",
    title: "The Panhandle",
    metros: "Pensacola · Panama City · Tallahassee",
    description:
      "Smaller search volume but far less competition — often the fastest place for a new firm to rank and generate leads at low cost.",
    image: "/assets/seo-lead/regional-06-panhandle.jpg",
  },
];

export default function RegionalBreakdown() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] w-full px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* ===================================================================
            HEADER: TAG (VIII. REGIONAL BREAKDOWN), HEADLINE & INTRO COPY
            =================================================================== */}
        <div className="max-w-[900px] mb-10 sm:mb-12 lg:mb-14">
          
          {/* Section Tag (Maintains serial: VIII. REGIONAL BREAKDOWN, no border, no § sign) */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">IX.</span> REGIONAL BREAKDOWN
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-5 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Six Florida markets.{" "}
            <span className="italic font-normal text-[#FF5528]">
              Six different playbooks.
            </span>
          </h2>

          {/* Intro Paragraph */}
          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#556377] max-w-[760px]">
            No two Florida metros hire attorneys the same way. Here&apos;s how we
            adjust strategy by region to maximize qualified leads and ROI for
            your firm.
          </p>

        </div>

        {/* ===================================================================
            6 REGIONAL CARDS: 3x2 GRID ON DESKTOP, 2 COLS ON TABLET, 1 ON MOBILE
            Increased vertical padding (py-6 sm:py-7) for spacious elegant look
            Marked CTA links removed per user request
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {REGIONAL_MARKETS.map((market) => (
            <div
              key={market.regionNum}
              className="group relative flex flex-row gap-4 sm:gap-5 rounded-[20px] bg-white px-4 sm:px-5 py-6 sm:py-7 border border-[#E5E9F2] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] hover:border-[#FF5528]/45 transition-all duration-300 items-start"
            >
              
              {/* Left Column: City Waterfront/Skyline Photo */}
              <div className="relative w-[110px] sm:w-[125px] xl:w-[135px] aspect-[3/4] shrink-0 overflow-hidden rounded-[14px] bg-[#F1F5F9] border border-[#EEF2F6]">
                <Image
                  src={market.image}
                  alt={`${market.title} skyline`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 125px, 135px"
                />
              </div>

              {/* Right Column: Region Badge, Title, Metros & Description Copy */}
              <div className="flex-1 min-w-0 flex flex-col justify-start">
                
                {/* Region Badge Pill */}
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#FFF0EB] text-[#FF5528] shrink-0">
                    <MapPin size={11} className="fill-[#FF5528] text-[#FF5528]" />
                  </div>
                  <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.12em] text-[#FF5528] uppercase">
                    {market.regionNum}
                  </span>
                </div>

                {/* Region Title */}
                <h3 className="font-playfair text-[18px] sm:text-[19px] xl:text-[20px] font-bold text-[#0A192F] mt-2 leading-tight group-hover:text-[#FF5528] transition-colors duration-200">
                  {market.title}
                </h3>

                {/* Metros List */}
                <p className="font-instrument text-[11.5px] sm:text-[12px] text-[#64748B] mt-0.5 truncate">
                  {market.metros}
                </p>

                {/* Description Copy */}
                <p className="font-instrument text-[12px] sm:text-[12.5px] leading-[1.62] text-[#556377] mt-3">
                  {market.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
