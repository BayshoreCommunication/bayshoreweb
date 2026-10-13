"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface RegionalMarket {
  regionNum: string;
  title: string;
  description: string;
  image: string;
}

const REGIONAL_MARKETS: RegionalMarket[] = [
  {
    regionNum: "MARKET 01",
    title: "South Florida",
    description:
      "South Florida often carries the state's highest ad costs and its richest customer values. Miami Dade, Broward and Palm Beach counties each need separate budgets and messaging. Spanish language pages written natively often outperform translated English copy for Miami Dade searchers. Palm Beach County rewards premium positioning in estate law and cosmetic dentistry.",
    image: "/assets/seo-lead/regional-03-south.jpg",
  },
  {
    regionNum: "MARKET 02",
    title: "Tampa Bay",
    description:
      "Tampa Bay packs dense, mid size competition into three cities sharing one search audience. Injury law, chiropractic and workers' compensation dominate, so Local Pack strength decides results. St. Petersburg and Clearwater searchers often skip Tampa, so each gets its own page. LSA bid discipline and steady review velocity separate winners from crowded also rans here.",
    image: "/assets/seo-lead/regional-01-tampa.jpg",
  },
  {
    regionNum: "MARKET 03",
    title: "Central Florida",
    description:
      "Orlando and Kissimmee draw tourists, rideshare traffic and a large international resident base. Accident, immigration and vacation rental searches spike around theme park peaks and holidays. Lakeland sits between Tampa and Orlando, so overlapping service areas need clean boundaries. We set county exclusions early, keeping budget inside the metro you actually serve.",
    image: "/assets/seo-lead/regional-02-central.jpg",
  },
  {
    regionNum: "MARKET 04",
    title: "Southwest Florida",
    description:
      "Southwest Florida serves retirees and seasonal residents, so demand follows winter arrivals. Estate planning, probate, elder law and dental implants rank among the steadiest local searches. Naples and Sarasota reward premium reviews. However Cape Coral and Fort Myers reward value. Marketing for estate and elder law here often runs thin, leaving room for specialists.",
    image: "/assets/seo-lead/regional-05-southwest.jpg",
  },
  {
    regionNum: "MARKET 05",
    title: "North Florida",
    description:
      "Jacksonville is largest city by population and Gainesville and Tallahassee anchor university economies. Competition often runs lighter than South Florida, so new campaigns reach page one sooner. Family law, criminal defense and injury cases produce steady demand across all three cities. Tallahassee adds legislative and university calendars, shifting demand timing for several local services.",
    image: "/assets/seo-lead/regional-04-north.jpg",
  },
  {
    regionNum: "MARKET 06",
    title: "Florida Panhandle",
    description:
      "Search volume runs smaller across the Panhandle and so does the competition. New campaigns often reach the Local Pack here faster than in Miami or Tampa. Military families near Pensacola search for family law, homes and dental care. Panama City's rebuilding since Hurricane Michael keeps construction and home services searches active.",
    image: "/assets/seo-lead/regional-06-panhandle.jpg",
  },
];

export default function RegionalBreakdown() {
  return (
    <section className="relative w-full bg-[#0A192F] py-14 sm:py-20 lg:py-28 text-white overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VI.</span> REGIONAL BREAKDOWN
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Lead Generation Locally Starts With the Right Market
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#94A3B8] max-w-[780px]">
            Florida gives local businesses many potential markets. Tampa orlando, Miami, Jacksonville, Sarasota and Naples each have different customers, competitors and service areas. A campaign can perform differently across two cities even when the business offers the same service. Your local lead generation florida strategy should account for the market itself.
          </p>
        </div>

        {/* 6 Regional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {REGIONAL_MARKETS.map((market) => (
            <div
              key={market.regionNum}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/10 bg-[#0E223D] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={market.image}
                  alt={market.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E223D] via-[#0E223D]/50 to-transparent" />
                <span className="absolute top-4 left-4 rounded-md bg-[#0A192F]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold tracking-[0.14em] text-[#FF5528]">
                  {market.regionNum}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-[22px] sm:text-[24px] font-bold text-white mb-3">
                    {market.title}
                  </h3>
                  <p className="font-instrument text-[14px] sm:text-[14.5px] leading-[1.7] text-[#94A3B8]">
                    {market.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7th Market Point: City, County & Metro Targeting Callout */}
        <div className="mt-8 sm:mt-10 rounded-[20px] border border-[#FF5528]/30 bg-gradient-to-r from-[#0E223D] to-[#122b4d] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF5528]/15 text-[#FF5528]">
            <MapPin size={28} />
          </div>
          <div>
            <span className="font-mono text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
              TARGETING HIERARCHY
            </span>
            <h3 className="font-playfair text-[20px] sm:text-[24px] font-bold text-white mt-1">
              City, County & Metro Targeting
            </h3>
            <p className="font-instrument text-[14.5px] sm:text-[15.5px] text-[#94A3B8] leading-[1.7] mt-2 max-w-[1000px]">
              Our targeting ladder runs from Florida to region, metro, county, city and service area. Each rung gets its own keywords, budget, landing page and Google Business Profile settings. Counties govern licensing and legal venue. However cities shape foot traffic and drive time. Neighborhood pages sit at the bottom, where &ldquo;Brickell dentist&rdquo; beats &ldquo;Miami dentist&rdquo; on intent.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
