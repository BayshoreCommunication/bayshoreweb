"use client";

import React, { useState } from "react";
import { MapPin, Compass, Building, ShieldCheck, ChevronRight } from "lucide-react";

interface MarketItem {
  id: string;
  tag: string;
  name: string;
  subLocations: string;
  description: string;
}

const MARKETS: MarketItem[] = [
  {
    id: "m1",
    tag: "Market 01",
    name: "Naples Core",
    subLocations: "Old Naples, Port Royal, Pelican Bay, Park Shore",
    description:
      "Affluent homeowners search for estate planning, real estate and tax adjacent legal counsel here. Reputation carries weight, so reviews, bar profiles and polished pages decide the winner.",
  },
  {
    id: "m2",
    tag: "Market 02",
    name: "North Naples",
    subLocations: "Vanderbilt Beach, Pine Ridge, North Naples",
    description:
      "Growing family neighborhoods generate steady family law, injury and real estate searches. Map pack visibility matters most, since many searches include the phrase near me.",
  },
  {
    id: "m3",
    tag: "Market 03",
    name: "East Naples",
    subLocations: "East Naples, Golden Gate Estates",
    description:
      "East Naples and Golden Gate Estates mix working families, small businesses and Spanish speaking households. Google Ads and Local Services Ads suit injury, criminal defense and family law here.",
  },
  {
    id: "m4",
    tag: "Market 04",
    name: "Marco Island",
    subLocations: "Marco Island, Isles of Capri",
    description:
      "Marco Island skews toward retirees and second home owners with estate and property needs. Small search volume rewards precise targeting, so exact match ads outperform broad campaigns.",
  },
  {
    id: "m5",
    tag: "Market 05",
    name: "Bonita Springs and Estero",
    subLocations: "Bonita Springs, Estero",
    description:
      "Bonita Springs and Estero sit on the Lee Collier line, sharing clients and commutes. We set geo targets around your office and accepted counties, so ads reach real prospects.",
  },
  {
    id: "m6",
    tag: "Market 06",
    name: "Immokalee and Ave Maria",
    subLocations: "Immokalee, Ave Maria",
    description:
      "Immokalee and Ave Maria anchor Collier County's eastern corridor and its agricultural economy. Spanish language immigration, workers' compensation and injury campaigns fit this eastern market best.",
  },
];

export default function NaplesSixMarkets() {
  const [activeMarket, setActiveMarket] = useState(0);

  return (
    <section className="relative w-full bg-[#0A192F] py-14 sm:py-20 lg:py-28 text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#162B4D_0%,_transparent_70%)] opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VIII.</span> SUB-MARKET FRAMEWORKS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Six Naples Area Markets. Six Different Frameworks.
          </h2>
        </div>

        {/* 6 Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {MARKETS.map((market, idx) => (
            <div
              key={market.id}
              className="group relative flex flex-col justify-between rounded-[22px] border border-white/10 bg-[#0E223D] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/50 hover:shadow-[0_16px_36px_rgba(255,85,40,0.12)]"
            >
              <div>
                {/* Market Tag & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#FF5528] uppercase">
                    {market.tag}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#FF5528] group-hover:bg-[#FF5528] group-hover:text-white transition-colors">
                    <MapPin size={16} />
                  </div>
                </div>

                {/* Market Name (h3) */}
                <h3 className="font-playfair text-[22px] sm:text-[24px] font-bold text-white mb-2">
                  {market.name}
                </h3>

                {/* Sub Locations */}
                <div className="mb-4 inline-block rounded-md bg-white/5 px-2.5 py-1 text-[12.5px] font-mono text-[#94A3B8]">
                  {market.subLocations}
                </div>

                {/* Description */}
                <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.7] text-[#CBD5E1]">
                  {market.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-white/40 text-xs font-mono">
                <span>COLLIER &amp; LEE REGION</span>
                <span className="group-hover:text-[#FF5528] transition-colors">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
