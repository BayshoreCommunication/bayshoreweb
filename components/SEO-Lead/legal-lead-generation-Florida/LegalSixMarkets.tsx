"use client";

import React from "react";
import Image from "next/image";

interface RegionalMarket {
  regionNum: string;
  title: string;
  counties: string;
  description: string;
  image: string;
}

const REGIONAL_MARKETS: RegionalMarket[] = [
  {
    regionNum: "MARKET 01",
    title: "Tampa Bay Metro Heavy Density Strategy",
    counties: "Tampa, St. Petersburg, Clearwater (Hillsborough & Pinellas)",
    description:
      "The Tampa Bay market, including Tampa, St. Petersburg, and Clearwater, features intense competition among personal injury and workers' compensation practices. Success across Hillsborough and Pinellas counties demands disciplined Local Services Ads bidding and rigorous map pack management. Strategic search engine optimization helps firms capture steady organic leads alongside paid channels. Combining organic growth with paid visibility secures dominant market presence across the Bay area.",
    image: "/assets/seo-lead/regional-01-tampa.jpg",
  },
  {
    regionNum: "MARKET 02",
    title: "Central Florida Corridor High-Volume Growth",
    counties: "Orlando, Kissimmee, Lakeland (Orange, Osceola & Polk)",
    description:
      "Central Florida includes Orlando, Kissimmee, and Lakeland, driven by high commuter traffic, tourist congestion, and rideshare activity. Campaigns across Orange, Osceola, and Polk counties capitalize on heavy motor vehicle accident volume alongside growing demand for immigration and family law services. Specific multilingual messaging captures inquiries from diverse local resident groups. Capturing regional visitor traffic provides consistent case volume year-round.",
    image: "/assets/seo-lead/regional-02-central.jpg",
  },
  {
    regionNum: "MARKET 03",
    title: "South Florida Tri County Premier Case Value",
    counties: "Miami, Fort Lauderdale, West Palm Beach (Miami-Dade, Broward & Palm Beach)",
    description:
      "South Florida includes Miami, Fort Lauderdale and West Palm Beach, which is the most competitive and profitable legal market in the state. The importance of bilingual English and Spanish ad campaigns cannot be overstated in Miami-Dade, Broward and Palm Beach counties. With a world of ads competing for potential customers' attention, precise campaign management can secure high dollar personal injury and commercial cases. Focus on high-value claims maximizes overall campaign return on spend.",
    image: "/assets/seo-lead/regional-03-south.jpg",
  },
  {
    regionNum: "MARKET 04",
    title: "North Florida Cost Efficient Scaling",
    counties: "Jacksonville, Tallahassee, Gainesville (Duval & Leon)",
    description:
      "North Florida markets, including Jacksonville, Tallahassee, and Gainesville, feature lower average ad costs than southern metros. Steady population growth across Duval and Leon counties offers an efficient landscape for firm expansion. Personal injury and family law practices can establish dominant local search positions with lower capital investment. Lower cost-per-click values allow firms to grow their search coverage affordably.",
    image: "/assets/seo-lead/regional-04-north.jpg",
  },
  {
    regionNum: "MARKET 05",
    title: "Southwest Coast Niche Demographic Focus",
    counties: "Naples, Fort Myers, Sarasota (Collier, Lee & Sarasota)",
    description:
      "The Southwest coast, encompassing Naples, Fort Myers, and Sarasota, contains a high density of affluent retirees. Marketing campaigns in Collier, Lee, and Sarasota counties focus heavily on estate planning, probate litigation, elder law, and asset protection. Educational landing environments connect with mature clients seeking specialized legal expertise. Providing clear legal insights builds strong credibility with high-net-worth individuals.",
    image: "/assets/seo-lead/regional-05-southwest.jpg",
  },
  {
    regionNum: "MARKET 06",
    title: "The Panhandle Rapid Local Dominance",
    counties: "Pensacola, Panama City (Escambia & Bay)",
    description:
      "The Panhandle region includes Pensacola, Panama City, and surrounding communities. Lower search competition allows ambitious practices to claim top rankings quickly across Escambia and Bay counties. Focused local SEO and geographically targeted Google Ads campaigns generate high call volumes at a very reasonable cost per acquisition. Establishing strong authority early creates long-term barriers against future competitors.",
    image: "/assets/seo-lead/regional-06-panhandle.jpg",
  },
];

export default function LegalSixMarkets() {
  return (
    <section className="relative w-full bg-[#0A192F] py-14 sm:py-20 lg:py-28 text-white overflow-hidden px-16 md:px-0">
      <div className="mx-auto max-w-[1580px] px-0 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VI.</span> REGIONAL PLAYBOOKS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            6 Distinct Florida Markets with Customized Playbooks
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#94A3B8] max-w-[780px]">
            Market dynamics, ad costs, and demographic search habits vary wildly across different regions of Florida. We adjust geographic targeting and ad messaging to match the specific competitive conditions of each major metro area.
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
                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-white mb-2 leading-snug">
                    {market.title}
                  </h3>

                  <div className="mb-3 inline-block rounded-md bg-white/5 px-2.5 py-1 text-[12px] font-mono text-[#94A3B8]">
                    {market.counties}
                  </div>

                  <p className="font-instrument text-[14px] sm:text-[14.5px] leading-[1.68] text-[#CBD5E1]">
                    {market.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
