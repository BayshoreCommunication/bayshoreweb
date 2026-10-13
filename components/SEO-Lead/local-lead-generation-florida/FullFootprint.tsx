"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

/**
 * =============================================================================
 * BACKGROUND IMAGE PATH
 * You can set / change your image path here:
 * e.g. "/assets/seo-lead/florida-footprint-bg.png" or your preferred path.
 * =============================================================================
 */
export const FULL_FOOTPRINT_BG_IMAGE = "/assets/seo-lead/florida-footprint-bg.png";

// =============================================================================
// FLORIDA CITIES LIST (22 Metros from the Screenshot)
// =============================================================================
const CITIES_LIST = [
  // Row 1
  { id: "miami", name: "Miami" },
  { id: "fort-lauderdale", name: "Fort Lauderdale" },
  { id: "west-palm-beach", name: "West Palm Beach" },
  { id: "boca-raton", name: "Boca Raton" },
  { id: "tampa", name: "Tampa" },
  { id: "st-petersburg", name: "St. Petersburg" },
  { id: "clearwater", name: "Clearwater" },
  { id: "orlando", name: "Orlando" },
  // Row 2
  { id: "kissimmee", name: "Kissimmee" },
  { id: "jacksonville", name: "Jacksonville" },
  { id: "tallahassee", name: "Tallahassee" },
  { id: "naples", name: "Naples" },
  { id: "fort-myers", name: "Fort Myers" },
  { id: "sarasota", name: "Sarasota" },
  { id: "cape-coral", name: "Cape Coral" },
  { id: "pensacola", name: "Pensacola" },
  // Row 3
  { id: "panama-city", name: "Panama City" },
  { id: "gainesville", name: "Gainesville" },
  { id: "ocala", name: "Ocala" },
  { id: "port-st-lucie", name: "Port St. Lucie" },
  { id: "daytona-beach", name: "Daytona Beach" },
  { id: "hialeah", name: "Hialeah" },
];

export default function FullFootprint({
  bgImage = FULL_FOOTPRINT_BG_IMAGE,
}: {
  bgImage?: string;
}) {
  const [activeCityId, setActiveCityId] = useState<string>("miami");

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] bg-[#030914] py-16 sm:py-20 lg:py-28 overflow-hidden flex items-center">
      
      {/* =========================================================================
          BACKGROUND IMAGE LAYER: Path configured via prop or constant
          Twilight skyline with palm trees on right, gradient fade to dark left
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Florida Legal Campaign Footprint"
            fill
            priority
            className="object-cover object-right opacity-70 lg:opacity-85"
            onError={(e) => {
              // Hide image if file is not yet placed
              const target = e.target as HTMLElement;
              if (target) target.style.display = "none";
            }}
          />
        )}
        {/* Dark gradient overlay ensuring high text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/85 to-transparent" />
      </div>

      {/* =========================================================================
          CONTENT WRAPPER
          ========================================================================= */}
      <div className="mx-auto max-w-[1580px] w-full px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        
        {/* -------------------------------------------------------------
            HEADER: TAG, HEADLINE & INTRO
            ------------------------------------------------------------- */}
        <div className="max-w-[850px]">
          
          {/* Section Tag (Maintains serial: VIII. FULL FOOTPRINT) */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VIII.</span> FULL FOOTPRINT
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-5 text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Where we work across{" "}
            <span className="italic font-normal text-[#FF5528]">
              Florida.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#94A3B8] max-w-[620px]">
            Active campaign markets and metros we build local presence in.
            If your business serves a city or county not listed, we&apos;ll scope
            it during your audit.
          </p>

        </div>

        {/* -------------------------------------------------------------
            CITIES PILLS GRID: 22 METROS
            ------------------------------------------------------------- */}
        <div className="mt-8 sm:mt-10 max-w-[1200px]">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {CITIES_LIST.map((city) => {
              const isActive = city.id === activeCityId;

              return (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  type="button"
                  className={`group inline-flex items-center gap-2 rounded-[8px] sm:rounded-[10px] px-3.5 sm:px-4.5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0B1528] border border-[#FF5528] text-white shadow-[0_0_20px_rgba(255,85,40,0.25)] font-semibold"
                      : "bg-[#0B172A]/70 hover:bg-[#13233D]/90 border border-[#1E293B] hover:border-[#FF5528]/40 text-[#CBD5E1] hover:text-white backdrop-blur-sm font-medium"
                  }`}
                >
                  {/* Pin Icon */}
                  <MapPin
                    size={14}
                    className={`shrink-0 transition-colors duration-200 ${
                      isActive
                        ? "text-[#FF5528]"
                        : "text-[#94A3B8] group-hover:text-[#FF5528]"
                    }`}
                  />

                  {/* City Name */}
                  <span>{city.name}</span>

                  {/* Active Arrow Right */}
                  {isActive && (
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-[#FF5528] ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
